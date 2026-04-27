import * as DocumentPicker from 'expo-document-picker';

import { APP_CONFIG } from '@/config/appConfig';
import { CvDocumentSelection } from '@/features/cv-analysis/types/cvAnalysis.types';

function getFileExtension(fileName: string): string {
  const parts = fileName.toLowerCase().split('.');
  return parts.length > 1 ? parts.at(-1) ?? '' : '';
}

function isSupportedExtension(extension: string): extension is CvDocumentSelection['extension'] {
  return APP_CONFIG.supportedCvExtensions.includes(extension as CvDocumentSelection['extension']);
}

export async function pickCvDocument(): Promise<CvDocumentSelection | null> {
  const result = await DocumentPicker.getDocumentAsync({
    type: [...APP_CONFIG.supportedCvMimeTypes],
    copyToCacheDirectory: true,
    multiple: false,
  });

  if (result.canceled || result.assets.length === 0) {
    return null;
  }

  const [asset] = result.assets;
  const extension = getFileExtension(asset.name);

  if (!isSupportedExtension(extension)) {
    throw new Error('Lütfen PDF veya DOCX formatında bir CV yükleyin.');
  }

  return {
    name: asset.name,
    uri: asset.uri,
    size: asset.size,
    mimeType: asset.mimeType,
    extension,
  };
}
