import { StyleSheet, Text, View } from 'react-native';

import { CvDocumentSelection } from '@/features/cv-analysis/types/cvAnalysis.types';
import { Card } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import { colors } from '@/shared/constants/colors';
import { spacing } from '@/shared/constants/spacing';

interface CvUploadCardProps {
  selectedDocument: CvDocumentSelection | null;
  errorMessage?: string;
  onPickDocument: () => void;
}

export function CvUploadCard({ selectedDocument, errorMessage, onPickDocument }: CvUploadCardProps) {
  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.title}>CV Yükle</Text>
        <Text style={styles.subtitle}>PDF veya DOCX dosyası yükleyebilirsiniz.</Text>
      </View>

      <Button label="Dosya Seç" onPress={onPickDocument} />

      <Text style={styles.fileName}>
        {selectedDocument ? `Seçilen dosya: ${selectedDocument.name}` : 'Henüz dosya seçilmedi.'}
      </Text>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.xs,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 18,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  fileName: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
  },
});
