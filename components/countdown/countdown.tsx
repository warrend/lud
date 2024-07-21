import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { type allFastNames, allFastTypes } from '@/constants';
import { colors, typography } from '../../theme';
import { secondsLeft } from '@/utils';

export function Countdown({
  id,
  onEnd,
  nameId,
  typeId,
  status,
  end,
}: {
  id: string;
  onEnd: (
    id: string,
    nameId: keyof typeof allFastNames,
    typeId: keyof typeof allFastTypes
  ) => void;
  nameId: keyof typeof allFastNames;
  typeId: keyof typeof allFastTypes;
  status: string;
  end: string;
}) {
  const [timeRemaining, setTimeRemaining] = useState(secondsLeft(end));

  useEffect(() => {
    const now = new Date().toISOString();
    const endDate = new Date(end).toISOString();

    if (status !== 'completed' && now > endDate) {
      onEnd(id, nameId, typeId);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(async () => {
      if (status === 'in-progress') {
        if (timeRemaining <= 0) {
          clearInterval(timer);
          onEnd(id, nameId, typeId);
        } else {
          const left = secondsLeft(end);
          setTimeRemaining(left - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, id, onEnd, nameId, typeId, status]);

  // const days = Math.floor(timeRemaining / 86400);
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = Math.floor(timeRemaining % 60);

  const ticker = (
    <View style={styles.ticker}>
      <View style={styles.tickerSection}>
        <View>
          <Text style={styles.tickerText}>
            {hours.toString().padStart(2, '0')}
          </Text>
        </View>
        <View>
          <Text style={styles.tickerText}>:</Text>
        </View>
      </View>
      <View style={styles.tickerSection}>
        <View>
          <Text style={styles.tickerText}>
            {minutes.toString().padStart(2, '0')}
          </Text>
        </View>
        <View>
          <Text style={styles.tickerText}>:</Text>
        </View>
      </View>
      <View style={styles.tickerSection}>
        <View>
          <Text style={styles.tickerText}>
            {seconds.toString().padStart(2, '0')}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderTickerText =
    timeRemaining <= 0 ? (
      <View style={styles.completed}>
        <Text style={styles.completedText}>Completed</Text>
      </View>
    ) : (
      ticker
    );

  return <View style={styles.countdown}>{renderTickerText}</View>;
}

const styles = StyleSheet.create({
  countdown: {},
  completed: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedText: {
    fontSize: typography.large,
    color: colors.primary100,
    paddingHorizontal: 1,
  },
  completedIcon: {},
  ticker: {
    flexDirection: 'row',
  },
  tickerText: {
    color: colors.slate100,
    fontVariant: ['tabular-nums'],
    fontSize: typography.large,
    paddingHorizontal: 1,
  },
  tickerSection: {
    flexDirection: 'row',
  },
});
