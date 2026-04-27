import { StyleSheet, Text, View } from 'react-native';

import { CombinedAnalysisResult } from '@/services/analysisOrchestrator';
import { Card } from '@/shared/components/Card';
import { colors } from '@/shared/constants/colors';
import { spacing } from '@/shared/constants/spacing';
import { formatScore } from '@/shared/utils/formatScore';

interface AnalysisSummaryCardProps {
  result: CombinedAnalysisResult;
}

export function AnalysisSummaryCard({ result }: AnalysisSummaryCardProps) {
  return (
    <Card>
      <View style={styles.row}>
        <Text style={styles.title}>Genel Skor</Text>
        <Text style={styles.score}>{formatScore(result.overallScore)}</Text>
      </View>
      <Text style={styles.meta}>CV: {formatScore(result.cv.score)} | LinkedIn: {formatScore(result.linkedin.score)}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 18,
  },
  score: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 24,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
