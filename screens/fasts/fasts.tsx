import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import { Button } from '@/components/button';
import { Fast } from '@/components/fast';
import { FastDuration } from '@/components/fast-duration';
import {
  allFastNames,
  allFastTypes,
  fastCategoryLabels,
  fasts,
} from '@/constants';
import { colors, spacing, typography } from '@/theme';
import { objectEntries, objectKeys } from '@/utils';
import { Fast as TFast, TStatus } from '@/types/fasts';
import { useFastsProvider } from '@/contexts/fasts';

type TItem = {
  key: keyof typeof fastCategoryLabels;
  data: Array<keyof typeof allFastNames>;
};

export function Fasts({ navigation }: { navigation: any }) {
  const { currentFastNamesList, createFast } = useFastsProvider();

  const [modalVisible, setModalVisible] = useState(false);
  const [pressedFastName, setPressedFastName] = useState('');

  const [fastDuration, setFastDuration] = useState<
    keyof typeof allFastTypes | null
  >(null);

  const fastData = objectEntries(fasts).map(([key, d]) => {
    return {
      key,
      data: objectKeys(d).map((d) => d),
    };
  });

  function addMinutesToStartDate(min: number, isoDate: string) {
    const date = new Date(Date.parse(isoDate));
    date.setMinutes(date.getMinutes() + min);
    return date.toISOString();
  }

  async function handleStartFast() {
    const start = new Date().toISOString();
    const fast = {
      start,
      end: addMinutesToStartDate(
        Number(allFastTypes[fastDuration!].duration),
        start
      ),
      status: 'in-progress' as TStatus,
      typeId: fastDuration,
      nameId: pressedFastName,
    } as TFast;

    try {
      createFast(fast);
      navigation.navigate('Home');
    } catch (e) {
      Alert.alert(
        'Error',
        'Sorry, there was an error trying to create a fast. Please try again.'
      );
    }
  }

  function handleCloseModal() {
    setModalVisible(false);
    setPressedFastName('');
    setFastDuration(null);
  }

  const renderItem = (
    item: TItem,
    setModalVisible: (arg: boolean) => void,
    setPressedFastName: (arg: string) => void
  ) => {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.sectionText}>
          {fastCategoryLabels[item.key].toUpperCase()}
        </Text>
        <FlatList
          data={item.data}
          renderItem={({ item }) => {
            const inProgress = currentFastNamesList.includes(item);

            return (
              <Fast
                inProgress={inProgress}
                fastName={item}
                onPress={() => setModalVisible(true)}
                setPressedFastName={() => setPressedFastName(item)}
              />
            );
          }}
          keyExtractor={(item) => item}
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: spacing.medium }}
        />
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={fastData}
        renderItem={({ item }) => {
          return renderItem(item, setModalVisible, setPressedFastName);
        }}
        keyExtractor={(item) => item.key}
        style={{ marginTop: spacing.large }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalWrapper}>
          <Pressable
            style={styles.upper}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.lower}>
            <View style={styles.lowerHeader}>
              <Pressable onPress={handleCloseModal}>
                <Text style={styles.lowerHeaderCloseText}>Cancel</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1 }}>
              <FastDuration
                fastDuration={fastDuration}
                setFastDuration={setFastDuration}
              />
              <View
                style={{
                  justifyContent: 'flex-end',
                  marginBottom: spacing.medium,
                  padding: spacing.large,
                }}
              >
                <Button
                  onPress={handleStartFast}
                  label="START"
                  width="100%"
                  disabled={!fastDuration}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.large,
  },
  sectionText: {
    color: colors.slate500,
    marginLeft: spacing.medium + spacing.small,
    marginBottom: spacing.small,
    letterSpacing: 1,
    fontSize: typography.tiny,
    fontWeight: '600',
  },
  modalWrapper: {
    flex: 1,
  },
  upper: {
    height: 75,
    opacity: 0.5,
  },
  lower: {
    flex: 1,
    backgroundColor: colors.slate900,
    borderTopLeftRadius: spacing.normal,
    borderTopRightRadius: spacing.normal,
  },
  lowerHeader: {
    backgroundColor: colors.slate800,
    padding: spacing.medium,
    borderTopLeftRadius: spacing.normal,
    borderTopRightRadius: spacing.normal,
  },
  lowerHeaderCloseText: {
    color: colors.slate100,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'right',
  },
  lowerContent: {},
});
