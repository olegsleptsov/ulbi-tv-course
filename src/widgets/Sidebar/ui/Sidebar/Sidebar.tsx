import classNames from 'classnames';
import { ChangeThemeButton } from '@features/changeTheme';
import { ChangeSidebarWidth, useIsExpaned } from '@features/changeSidebarWidth';
import { ChangeLanguageButton } from '@features/changeLanguage';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { isExpanded, toggle } = useIsExpaned();

  return (
    <div className={classNames(style.root, { [style.expanded]: isExpanded }, className)}>
      <div className={style.content}>
        <ChangeSidebarWidth toggle={toggle} isExpanded={isExpanded} />
      </div>
      <div className={style.buttons}>
        <ChangeThemeButton />
        <ChangeLanguageButton />
      </div>
    </div>
  );
}
