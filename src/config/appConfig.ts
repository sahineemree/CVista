export const APP_CONFIG = {
  appName: 'CVista',
  appVersion: '0.1.0',
  supportedCvExtensions: ['pdf', 'docx'] as const,
  supportedCvMimeTypes: [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ] as const,
  featureFlags: {
    enableLinkedInUrlInput: true,
    enableLinkedInTextFallback: true,
  },
} as const;

export type SupportedCvExtension = (typeof APP_CONFIG.supportedCvExtensions)[number];
