interface ChangeSidebarWidthProps {
  className?: string
  toggle: () => void
  isExpanded: boolean
}

export const ChangeSidebarWidth = ({className, toggle, isExpanded}: ChangeSidebarWidthProps) => {
  return (
    <button onClick={() => toggle()}>{isExpanded ? 'Свернуть' : 'Развернуть'}</button>
  );
};