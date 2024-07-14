import classNames from 'classnames';
import { ChangeSidebarWidth, useIsExpaned } from '@features/changeSidebarWidth';
import style from './Sidebar.module.scss';
import {ReactNode} from 'react';

interface SidebarProps {
  className?: string;
  children?: ReactNode
}

export function Sidebar({ className, children }: SidebarProps) {
  const { isExpanded, toggle } = useIsExpaned();

  return (
    <div
      data-testid='sidebar'
      className={classNames(style.root, { [style.expanded]: isExpanded }, className)}
    >
      <div className={style.content}>
        <ChangeSidebarWidth
          buttonTestId='sidebar-toggle-button'
          toggle={toggle}
          isExpanded={isExpanded}
        />
      </div>
      <div className={style.buttons}>
        {children}
      </div>
    </div>
  );
}
