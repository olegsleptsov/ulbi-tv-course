import { IconButton } from '@shared/ui/Buttons/IconButton';
import { Theme } from '@shared/themes/ui/ThemeContext';
import { DarkThemeIcon, LightThemeIcon } from '@shared/assets/icons';
import { useTheme } from '../lib/useTheme';

interface ChangeThemeButtonProps {
  className?: string;
}

export function ChangeThemeButton({ className }: ChangeThemeButtonProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} className={className}>
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </IconButton>
  );
}
