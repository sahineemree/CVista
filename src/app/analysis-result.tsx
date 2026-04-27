import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

import { AnalysisSection } from '@/features/cv-analysis/components/AnalysisSection';
import { AnalysisSummaryCard } from '@/features/cv-analysis/components/AnalysisSummaryCard';
import { LinkedInFallbackNotice } from '@/features/linkedin-analysis/components/LinkedInFallbackNotice';
import { getLatestAnalysisResult } from '@/services/analysisSessionStore';
import { Card } from '@/shared/components/Card';
import { Screen } from '@/shared/components/Screen';
import { colors } from '@/shared/constants/colors';

export default function AnalysisResultScreen() {
  const result = getLatestAnalysisResult();

  if (!result) {
    return (
      <Screen>
        <Card>
          <Text style={styles.emptyTitle}>Henüz analiz sonucu yok.</Text>
          <Link href="/" style={styles.link}>
            Ana ekrana dön ve analiz başlat
          </Link>
        </Card>
      </Screen>
    );
  }

  return (
    <Screen>
      <AnalysisSummaryCard result={result} />

      {result.linkedin.fallbackRequired && result.linkedin.fallbackMessage ? (
        <LinkedInFallbackNotice message={result.linkedin.fallbackMessage} />
      ) : null}

      <Card>
        <AnalysisSection title="Güçlü Yönler" items={result.strengths} />
      </Card>

      <Card>
        <AnalysisSection title="Eksikler" items={result.gaps} />
      </Card>

      <Card>
        <AnalysisSection title="İyileştirme Önerileri" items={result.recommendations} />
      </Card>

      <Card>
        <AnalysisSection title="Öncelikli Aksiyonlar" items={result.priorityActions} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  emptyTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
  },
});
