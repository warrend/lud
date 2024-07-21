import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Platform,
} from 'react-native';
import { fastTypes, fastTypeLabels, allFastTypes } from '@/constants';
import { objectEntries, objectKeys } from '@/utils';
import { colors, spacing, standard, typography } from '@/theme';

type TFastData = {
  name: string;
  value: keyof typeof fastTypes;
};

export function FastDuration({
  fastDuration,
  setFastDuration,
}: {
  fastDuration: keyof typeof allFastTypes | null;
  setFastDuration: (arg: keyof typeof allFastTypes | null) => void;
}) {
  const [fastCategory, setFastCategory] = useState<
    keyof typeof fastTypes | null
  >('micro');

  const fastTypeData = objectKeys(fastTypes).map((f) => {
    return {
      name: fastTypeLabels[f],
      value: f,
    };
  });

  const fastTypeCategoryData =
    fastCategory &&
    objectEntries(fastTypes[fastCategory]).map(
      ([key, value]: [string, { label: string; duration: number }]) => {
        return {
          key,
          label: value.label,
        };
      }
    );

  function handleFastTypePress(fastNameId: keyof typeof fastTypes) {
    setFastCategory(fastNameId);
  }

  function renderFastType(item: TFastData) {
    return (
      <View
        style={[
          styles.fastTypeButton,
          {
            backgroundColor:
              fastCategory === item.value ? colors.primary400 : colors.slate400,
          },
        ]}
      >
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={() => handleFastTypePress(item.value)}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </Pressable>
      </View>
    );
  }

  function renderFastCategoryButtons(item: any) {
    return (
      <View
        style={[
          styles.categoryWrapper,
          {
            backgroundColor:
              item.key === fastDuration ? colors.primary500 : colors.slate800,
          },
        ]}
      >
        <Pressable
          android_ripple={{ color: '#ccc' }}
          onPress={() => setFastDuration(item.key)}
          style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
          <View style={styles.categoryButtonContent}>
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    item.key === fastDuration
                      ? colors.slate800
                      : colors.primary500,
                },
              ]}
            >
              {item.label}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ height: 110 }}>
        <FlatList
          style={{
            paddingVertical: spacing.jumbo,
          }}
          data={fastTypeData}
          renderItem={({ item }) => renderFastType(item)}
          horizontal={true}
          contentContainerStyle={{
            paddingHorizontal: spacing.large,
          }}
        />
      </View>
      <View style={styles.categorySection}>
        {fastCategory ? (
          <FlatList
            data={fastTypeCategoryData}
            renderItem={({ item }) => renderFastCategoryButtons(item)}
            keyExtractor={(item) => item.key.toString()}
            contentContainerStyle={{ paddingBottom: spacing.jumbo }}
          />
        ) : (
          <Text style={styles.noFastSelected}>Select a fast category...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  fastTypeWrapper: {},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: standard.borderRadius,
  },
  button: {
    flex: 1,
  },
  fastTypeButton: {
    borderRadius: standard.borderRadius,
    flex: 1,
    marginRight: spacing.large,
    height: 45,
    elevation: 2,
    shadowColor: '#222',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: standard.borderRadius,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.8,
    backgroundColor: colors.slate700,
    borderRadius: standard.borderRadius,
  },
  title: {
    fontWeight: 'bold',
    color: colors.black500,
    fontSize: typography.small,
    paddingHorizontal: spacing.small,
  },
  categorySection: {
    paddingBottom: spacing.huge,
    marginHorizontal: spacing.large,
  },
  noFastSelected: {
    color: colors.slate400,
    fontSize: typography.medium,
  },
  categoryWrapper: {
    flex: 1,
    marginBottom: spacing.large,
    borderRadius: standard.borderRadius,
    elevation: 2,
    shadowColor: '#222',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: spacing.small,
    backgroundColor: colors.slate800,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  categoryButtonContent: {
    height: 75,
    padding: spacing.tiny,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: standard.borderRadius,
  },
  categoryText: {
    fontSize: typography.large,
    fontWeight: '600',
    color: colors.slate200,
  },
});
