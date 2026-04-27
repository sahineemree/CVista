import { TextField } from '@/shared/components/TextField';

interface LinkedInInputProps {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

export function LinkedInInput({ value, error, onChange }: LinkedInInputProps) {
  return (
    <TextField
      label="LinkedIn Profil URL"
      value={value}
      onChangeText={onChange}
      placeholder="https://www.linkedin.com/in/kullanici-adi"
      error={error}
      autoCapitalize="none"
    />
  );
}
