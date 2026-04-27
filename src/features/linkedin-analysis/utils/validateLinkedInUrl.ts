const LINKEDIN_PROFILE_REGEX = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$/;

export function validateLinkedInUrl(rawValue: string): string | null {
  const trimmedValue = rawValue.trim();

  if (trimmedValue.length === 0) {
    return null;
  }

  if (!LINKEDIN_PROFILE_REGEX.test(trimmedValue)) {
    return 'Lütfen linkedin.com/in/... formatında geçerli bir profil URL girin.';
  }

  return null;
}
