import React, { useContext, useEffect } from 'react'
import { LayoutContext } from '../../components/Layout/Context';
import { PageEnum } from '../../shared/enums/PageEnum';
import style from './HomePage.module.scss';
import { ChanalItem, ChanalItemType } from '../../components/ChanalItem/ChanalItem';
import { ChannelEnum } from '../../shared/enums/ChannelEnum';

const messangerItems: ChanalItemType[] = [
  { id: '0', type: ChannelEnum.VK },
  { id: '1', type: ChannelEnum.WhatsApp },
  { id: '2', type: ChannelEnum.Telegram },
  { id: '3', type: ChannelEnum.SMS },
];

export const HomePage = () => {
  const {setPageType} = useContext(LayoutContext);
  
  useEffect(()=>{
    if (setPageType) {
      setPageType(PageEnum.HomePage);
    }
  },[setPageType]);

  return (
    <div className={style.container}>
      {messangerItems.map(item=>(
        <ChanalItem key={item.id} id={item.id} type={item.type} />
      ))}
    </div>
  )
}
