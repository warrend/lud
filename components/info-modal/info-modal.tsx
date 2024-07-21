import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { spacing, colors, typography } from '@/theme';

export function InfoModal({
  showInfoModal,
  setShowInfoModal,
}: {
  showInfoModal: boolean;
  setShowInfoModal: (param: boolean) => void;
}) {
  function handleCloseModal() {
    setShowInfoModal(false);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showInfoModal}
      onRequestClose={() => {
        setShowInfoModal(!showInfoModal);
      }}
    >
      <View style={styles.modalWrapper}>
        <Pressable
          style={styles.upper}
          onPress={() => setShowInfoModal(false)}
        />
        <View style={styles.lower}>
          <View style={styles.lowerHeader}>
            <Pressable onPress={handleCloseModal}>
              <Text style={styles.lowerHeaderCloseText}>Done</Text>
            </Pressable>
          </View>
          <ScrollView>
            <View>
              <View style={styles.infoWrapper}>
                <Text style={styles.def}>
                  Luddite: one of a group of early 19th century English workmen
                  destroying laborsaving machinery as a protest.
                </Text>
                <Text style={[styles.textHeader, styles.textTitle]}>
                  How to Use the Lud App
                </Text>
                <Text style={styles.textBody}>
                  In an era dominated by endless scrolling, relentless
                  notifications, and the hypnotic allure of screens, it's often
                  easy to forget that once upon a time, our minds relished quiet
                  moments without a digital tether. Enter: Lud, your sidekick in
                  reclaiming those precious tech-free moments.
                </Text>

                <Text style={styles.textHeader}>Starting Your Fast</Text>
                <Text style={styles.textBody}>
                  The premise is simple. When you feel the pull of the digital
                  world, fire up the app and set your desired fast duration.
                  This can be a 15-minute micro break, just enough time to enjoy
                  your coffee without distractions, or a full week-long digital
                  sabbatical to truly immerse yourself in the physical world.
                </Text>

                <Text style={styles.textHeader}>Staying Honest</Text>
                <Text style={styles.textBody}>
                  It's up to you to honor this commitment. While we won't
                  technically lock you out of your apps, think of Lud as your
                  accountability partner gently nudging you to stick to your
                  detox promise.
                </Text>

                <Text style={styles.textHeader}>Why Go on a Digital Fast?</Text>
                <Text style={styles.textBody}>
                  Our brains, like any other part of our body, require rest.
                  Continual exposure to technology, as studies have shown, can
                  lead to reduced attention spans, disrupted sleep, and even
                  increased rates of depression and anxiety. By deciding to take
                  a digital fast, even if it's just for a short period, we gift
                  our brains a much-needed reset. This not only boosts mental
                  well-being but also allows us to reconnect with the real
                  world.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
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
  howToText: {
    color: colors.primary600,
    fontSize: typography.small,
  },
  infoWrapper: {
    justifyContent: 'flex-end',
    marginBottom: spacing.medium,
    padding: spacing.large,
  },
  textTitle: {
    color: colors.primary500,
    fontWeight: '700',
    lineHeight: typography.large * 1.33,
    fontSize: typography.large * 1.33,
  },
  textHeader: {
    color: colors.primary500,
    fontWeight: '700',
    fontSize: typography.large,
    lineHeight: typography.large + 6,
    marginBottom: spacing.large,
  },
  textBody: {
    color: colors.slate100,
    fontSize: typography.large,
    lineHeight: typography.large + 9,
    marginBottom: spacing.huge,
  },
  def: {
    color: colors.slate300,
    fontStyle: 'italic',
    fontSize: typography.medium,
    lineHeight: typography.large + 9,
    marginBottom: spacing.huge,
  },
});
