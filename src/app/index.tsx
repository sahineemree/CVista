import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { APP_CONFIG } from '@/config/appConfig';
import { CvUploadCard } from '@/features/cv-analysis/components/CvUploadCard';
import { pickCvDocument } from '@/features/cv-analysis/utils/pickCvDocument';
import { LinkedInInput } from '@/features/linkedin-analysis/components/LinkedInInput';
import { validateLinkedInUrl } from '@/features/linkedin-analysis/utils/validateLinkedInUrl';
import { runCandidateAnalysis } from '@/services/analysisOrchestrator';
import { setLatestAnalysisResult } from '@/services/analysisSessionStore';
import { Button } from '@/shared/components/Button';
import { Card } from '@/shared/components/Card';
import { Screen } from '@/shared/components/Screen';
import { colors } from '@/shared/constants/colors';
import { spacing } from '@/shared/constants/spacing';
import { AsyncStatus } from '@/shared/types/common.types';

export default function HomeScreen() {
  const router = useRouter();

  const [status, setStatus] = useState<AsyncStatus>('idle');
  const [cvError, setCvError] = useState<string | undefined>();
  const [globalError, setGlobalError] = useState<string | undefined>();
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [linkedInError, setLinkedInError] = useState<string | undefined>();
  const [selectedCvDocument, setSelectedCvDocument] = useState<Awaited<
    ReturnType<typeof pickCvDocument>
  > | null>(null);

  const handlePickCv = async () => {
    setCvError(undefined);

    try {
      const document = await pickCvDocument();
      if (document) {
        setSelectedCvDocument(document);
      }
    } catch (error) {
      setCvError(error instanceof Error ? error.message : 'CV dosyası seçilirken bir hata oluştu.');
    }
  };

  const handleAnalyze = async () => {
    setGlobalError(undefined);

    if (!selectedCvDocument) {
      setCvError('Analiz için önce bir CV dosyası seçin.');
      return;
    }

    const maybeLinkedInError = validateLinkedInUrl(linkedInUrl);
    setLinkedInError(maybeLinkedInError ?? undefined);

    if (maybeLinkedInError) {
      return;
    }

    try {
      setStatus('loading');

      const analysisResult = await runCandidateAnalysis({
        cvDocument: selectedCvDocument,
        linkedInUrl: linkedInUrl.trim() || undefined,
      });

      setLatestAnalysisResult(analysisResult);
      setStatus('success');
      router.push('/analysis-result');
    } catch (error) {
      setStatus('error');
      setGlobalError(error instanceof Error ? error.message : 'Analiz sırasında beklenmeyen bir hata oluştu.');
    }
  };

  return (
    <Screen>
      <Card>
        <View style={styles.hero}>
          <Text style={styles.title}>{APP_CONFIG.appName}</Text>
          <Text style={styles.description}>
            CV ve LinkedIn sinyallerini birleştirerek güçlü yönleri, eksikleri ve geliştirme aksiyonlarını tek
            ekranda görün.
          </Text>
        </View>
      </Card>

      <CvUploadCard selectedDocument={selectedCvDocument} errorMessage={cvError} onPickDocument={handlePickCv} />

      {APP_CONFIG.featureFlags.enableLinkedInUrlInput ? (
        <Card>
          <LinkedInInput
            value={linkedInUrl}
            error={linkedInError}
            onChange={(value) => {
              setLinkedInUrl(value);
              if (linkedInError) {
                setLinkedInError(undefined);
              }
            }}
          />
        </Card>
      ) : null}

      <Button label="Analiz Et" onPress={handleAnalyze} loading={status === 'loading'} />

      {globalError ? <Text style={styles.errorText}>{globalError}</Text> : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  description: {
    color: colors.textSecondary,
    lineHeight: 22,
  },
  errorText: {
    color: colors.danger,
    fontSize: 13,
  },
});
