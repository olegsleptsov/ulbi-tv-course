import {IconButton} from "@shared/ui/Buttons/IconButton";
import {Theme} from "@shared/themes/ui/ThemeContext";
import {DarkThemeIcon, LightThemeIcon} from "@shared/assets/icons";
import {useTheme} from "@features/changeTheme";

interface ChangeThemeButtonProps {
  className?: string;
}

export const ChangeThemeButton = ({className}: ChangeThemeButtonProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <IconButton onClick={toggleTheme} className={className}>
      {theme === Theme.DARK ? <LightThemeIcon/> : <DarkThemeIcon/>}
    </IconButton>
  );
};