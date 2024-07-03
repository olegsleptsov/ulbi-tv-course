import {useState} from "react";

type SIDE_BAR_REGIME_LOCALSTORAGE_VALUE = 'EXPANDED' | 'COLLAPSED'
const SIDE_BAR_REGIME_LOCALSTORAGE_KEY = 'SIDE_BAR_REGIME_LOCALSTORAGE_KEY'
const userRegime: SIDE_BAR_REGIME_LOCALSTORAGE_VALUE | undefined = localStorage.getItem(SIDE_BAR_REGIME_LOCALSTORAGE_KEY) as SIDE_BAR_REGIME_LOCALSTORAGE_VALUE

export const useIsExpaned = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(userRegime === 'EXPANDED')

  const toggle = () => {
    const value = isExpanded ? 'COLLAPSED' : 'EXPANDED';
    setIsExpanded(prev => !prev)

    localStorage.setItem(SIDE_BAR_REGIME_LOCALSTORAGE_KEY, value)
  };

  return {isExpanded, setIsExpanded, toggle}
}