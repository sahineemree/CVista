import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/shared/components/Card';
import { colors } from '@/shared/constants/colors';
import { spacing } from '@/shared/constants/spacing';

interface LinkedInFallbackNoticeProps {
  message: string;
}

export function LinkedInFallbackNotice({ message }: LinkedInFallbackNoticeProps) {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title}>LinkedIn Fallback</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 16,
  },
  message: {
    color: colors.textSecondary,
    lineHeight: 21,
  },
});
