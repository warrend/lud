import React, { createContext, useState, useContext, useEffect } from 'react';
import { Fast } from '../types/fasts';
import { allFastNames, allFastTypes } from '../constants';
import * as Notifications from 'expo-notifications';
import { TRecord } from '../types/records';
import uuid from 'react-native-uuid';
import { TStatus } from '../types/fasts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorage = AsyncStorage;

interface FastContextData {
  currentFasts: Fast[];
  createFast: (data: Fast) => void;
  currentFastNamesList: (keyof typeof allFastNames)[];
  getCurrentFasts: () => void;
  getRecords: () => void;
  records: TRecord[];
  deleteCurrentFast: (fastId: string) => void;
  onTimerEnded: (fast: Fast) => void;
  loading: boolean;
}

const FastsContext = createContext<FastContextData>({} as FastContextData);

export function useFastsProvider() {
  return useContext(FastsContext);
}

function generateId() {
  return uuid.v4();
}

function FastsProvider({ children }: { children?: React.ReactNode }) {
  const [error, setError] = useState<unknown>(null);
  const [records, setRecords] = useState<TRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentFasts, setCurrentFasts] = useState<Fast[]>([]);
  const currentFastNamesList =
    currentFasts &&
    currentFasts
      .filter((f) => f.status === 'in-progress' && f.id)
      .map((fast) => fast.nameId);

  useEffect(() => {
    getCurrentFasts();
    getRecords();
  }, []);

  async function getCurrentFasts() {
    try {
      const currentFastsData = await localStorage.getItem(`current`);
      const currentFasts: Fast[] = currentFastsData
        ? JSON.parse(currentFastsData)
        : [];
      setCurrentFasts(currentFasts);
    } catch (e) {
      setError(e);
    }
  }

  function onTimerEnded(fast: Fast) {
    if (fast.id) {
      deleteCurrentFast(fast.id);
      addToRecord(fast);
    }
  }

  async function deleteCurrentFast(fastId: string) {
    const currentFastsData = await localStorage.getItem(`current`);
    const currentFasts: Fast[] = currentFastsData
      ? JSON.parse(currentFastsData)
      : [];
    const updatedCurrentFasts = currentFasts.filter(
      (fast) => fast.id !== fastId
    );
    await localStorage.setItem(`current`, JSON.stringify(updatedCurrentFasts));
    setCurrentFasts(updatedCurrentFasts);
  }

  function updateCurrentFast(fastId: string) {
    const updatedCurrentFasts = currentFasts.map((fast) => {
      if (fast.id === fastId) {
        return { ...fast, status: 'completed' as TStatus };
      }
      return fast;
    });

    setCurrentFasts(updatedCurrentFasts);
  }

  function scheduleNotification(
    fastName: keyof typeof allFastNames,
    duration: number
  ) {
    Notifications.scheduleNotificationAsync({
      trigger: {
        seconds: duration * 60,
      },
      content: {
        title: 'Lud',
        body: `${allFastNames[fastName]} fast complete!`,
        sound: true,
      },
    });
  }

  async function createFast(fast: Fast) {
    const fastsData = await localStorage.getItem(`fasts`);
    const fasts: Fast[] = fastsData ? JSON.parse(fastsData) : [];
    const fastDoc = { ...fast, id: generateId() as string };
    fasts.push(fastDoc);
    await localStorage.setItem(`fasts`, JSON.stringify(fasts));
    addToCurrentFasts(fastDoc);
    return fastDoc;
  }

  async function addToCurrentFasts(data: Fast) {
    const currentFastsData = await localStorage.getItem(`current`);
    const currentFasts: Fast[] = currentFastsData
      ? JSON.parse(currentFastsData)
      : [];
    const updatedCurrentFasts = [...currentFasts, data];
    await localStorage.setItem(`current`, JSON.stringify(updatedCurrentFasts));
    scheduleNotification(data.nameId, allFastTypes[data.typeId].duration);
    getCurrentFasts();
  }

  async function addToRecord(data: Fast) {
    try {
      const recordsData = await localStorage.getItem(`records`);
      const recordsParsed: TRecord[] = recordsData
        ? JSON.parse(recordsData)
        : [];
      const duration = allFastTypes[data.typeId].duration;
      const existingRecord = records.find(
        (record) => record.name === allFastNames[data.nameId]
      );
      if (existingRecord) {
        existingRecord.minutes += duration;
        existingRecord.total += 1;
      } else {
        records.push({
          id: data.nameId,
          name: allFastNames[data.nameId],
          minutes: duration,
          total: 1,
        });
      }
      await localStorage.setItem(`records`, JSON.stringify(records));
      setRecords(records);
      getRecords();
    } catch (e) {
      setError(e);
    }
  }

  async function getRecords() {
    try {
      const recordsData = await localStorage.getItem(`records`);
      const records: TRecord[] = recordsData ? JSON.parse(recordsData) : [];
      setRecords(records);
    } catch (e) {
      setError(e);
    }
  }

  return (
    <FastsContext.Provider
      value={{
        getCurrentFasts,
        createFast,
        currentFastNamesList,
        currentFasts,
        deleteCurrentFast,
        onTimerEnded,
        getRecords,
        records,
        loading,
      }}
    >
      {children}
    </FastsContext.Provider>
  );
}

export { FastsProvider };
