import { useEffect, useRef, useState } from "react"

type AnchorMenuItem = {
  title: string
  anchor: string
}

interface AnchorMenuItemProps extends AnchorMenuItem {
  index: number;
  isActive: boolean;
  onItemClick: (index: number) => void;
}

interface AnchorMenuProps {
  items: AnchorMenuItem[]
}

export default function AnchorMenu({ items }: AnchorMenuProps) {
  
  const [activeMenu, setActiveMenu] = useState(0)
  const [barHeight, setBarHeight] = useState(0);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const menuItems = Array.from(menuRef.current.querySelectorAll("li")) as HTMLLIElement[];
      const selectedItem = menuItems[activeMenu];
      const cumulativeHeight = selectedItem.offsetTop + selectedItem.offsetHeight;
      setBarHeight(cumulativeHeight);
    }
  }, [activeMenu]);
  
  return (
    <ul className="relative flex flex-col gap-8" ref={menuRef}>
      <div className="absolute left-0 w-1 bg-green-800 dark:bg-green-400 transition-height duration-500 ease-in-out" style={{ height: `${barHeight}px` }}></div>
      { items.map((item, index) => ( 
          <AnchorMenuItem 
            key={index}
            title={item.title}
            anchor={item.anchor} 
            index={index}
            onItemClick={setActiveMenu}
            isActive={activeMenu === index}
          /> 
      ))}
    </ul>
  )
}

function AnchorMenuItem({ title, anchor, index, onItemClick , isActive}: AnchorMenuItemProps) {

  function handleClickOnItem() {
    onItemClick(index)
  }
  return (
    <li className={`px-4 text-xl leading-5 ${isActive ? "text-green-800 dark:text-green-400" : ""}`} onClick={handleClickOnItem}>
      <a href={anchor}>{title}</a>
    </li>
  )
}