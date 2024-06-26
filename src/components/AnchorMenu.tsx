import { forwardRef, useEffect, useRef, useState } from "react"

type AnchorMenuItem = {
  title: string
  anchor: string
}

interface AnchorMenuItemProps extends AnchorMenuItem {
  isActive: boolean;
  onItemClick: () => void;
}

interface AnchorMenuProps {
  items: AnchorMenuItem[]
}

export default function AnchorMenu({ items }: AnchorMenuProps) {
  
  const [activeMenu, setActiveMenu] = useState(0)
  const [barHeight, setBarHeight] = useState(0);
  const menuRef = useRef<(HTMLLIElement|null)[] >([]);

  useEffect(() => {
      if (menuRef?.current[activeMenu]) {
        const selectedItem = menuRef.current[activeMenu]!;
        const cumulativeHeight = selectedItem.offsetTop + selectedItem.offsetHeight;
        setBarHeight(cumulativeHeight);
      }
  }, [activeMenu, setBarHeight]);
  
  return (
    <ul className="relative flex flex-col gap-8">
      <div 
        className="absolute left-0 w-1 bg-primary dark:bg-green-400 transition-height duration-500 ease-in-out"
        aria-hidden="true"
        style={{ height: `${barHeight}px`}}
      ></div>
      { items.map((item, index) => ( 
          <AnchorMenuItem 
            ref={(element) => menuRef.current[index] = element}
            key={index}
            {...item} 
            onItemClick={() => setActiveMenu(index)}
            isActive={activeMenu === index}
          /> 
      ))}
    </ul>
  )
}

const AnchorMenuItem = forwardRef<HTMLLIElement, AnchorMenuItemProps>(function({ title, anchor, onItemClick , isActive}, ref) {
  return (
    <li ref={ref} className={`px-4 text-xl leading-5 ${isActive ? "text-primary" : ""}`} onClick={onItemClick}>
      <a href={anchor}>{title}</a>
    </li>
  )
})