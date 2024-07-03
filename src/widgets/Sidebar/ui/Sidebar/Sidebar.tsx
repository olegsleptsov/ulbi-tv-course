import classNames from "classnames";
import style from "./Sidebar.module.scss";
import {ChangeThemeButton} from "@features/changeTheme";
import {ChangeSidebarWidth, useIsExpaned} from "@features/changeSidebarWidth";
import {useEffect, useState} from "react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const {isExpanded, toggle} = useIsExpaned()

    return (
      <div className={classNames(style.root, {[style.isExpanded]: isExpanded}, className)}>
        <div className={style.content}>
          <ChangeSidebarWidth toggle={toggle} isExpanded={isExpanded}/>
        </div>
        <div className={style.buttons}>
          <ChangeThemeButton/>
          {/*<ChangeLanguageButton />*/}
        </div>
      </div>
    );
  }
;