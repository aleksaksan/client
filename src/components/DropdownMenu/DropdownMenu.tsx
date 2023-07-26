import React, { useState } from 'react';
import style from './DropdownMenu.module.scss';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { SvgChevron } from '../../assets/Svg/SvgChevron';

export type DropdownMenuProps = {
  data: DropDownItem[],
  callback: (id: number) => void,
}; 

export type DropDownItem = {
  id: number,
  elem: string,
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [activeItem, setActiveItem] = useState<DropDownItem>(props.data[0]);

  const onElementClick = (elem: DropDownItem) => {
    setActiveItem(elem);
    props.callback(elem.id);
    setIsOpened(false);
  };
  
  const toggle = () => {
    setIsOpened(!isOpened);
  };

  const closeDropdown = () => {
    setIsOpened(false);
  };
  const clickOutside = useDetectClickOutside({ onTriggered: closeDropdown });


  return (
    <div className={style.wrapper} ref={clickOutside}>
      <div onClick={toggle} className={`${isOpened ? '' : `${style.closed}`}`}>
        {activeItem.elem}
        <SvgChevron />
      </div>
      <ul className={`${isOpened ? `${style.dropdown}` : `${style.dropdown} ${style.closed}`}`} >
        {props.data.map(item => (
          <li
            className={style.item}
            key={item.id}
            onClick={()=>onElementClick(item)}
          >
            {item.elem}
          </li>
        ))}
      </ul>
    </div>
  )
};
