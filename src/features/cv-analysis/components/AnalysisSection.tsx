import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/constants/colors';
import { spacing } from '@/shared/constants/spacing';

interface AnalysisSectionProps {
  title: string;
  items: string[];
}

export function AnalysisSection({ title, items }: AnalysisSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {items.length === 0 ? (
        <Text style={styles.empty}>Henüz veri yok.</Text>
      ) : (
        items.map((item) => (
          <View key={`${title}-${item}`} style={styles.itemRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))
      )}
    </View>
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
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  bullet: {
    color: colors.textSecondary,
    lineHeight: 22,
  },
  itemText: {
    flex: 1,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
