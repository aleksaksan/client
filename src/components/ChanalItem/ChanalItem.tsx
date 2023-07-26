import React, { useContext, useEffect } from 'react';
import { ChannelEnum } from '../../shared/enums/ChannelEnum';
import style from './ChanalItem.module.scss';
import { MessangerLink } from './MessangerLink';
import { SvgVk } from '../../assets/Svg/SvgLogo/SvgVk';
import { SvgWhatsApp } from '../../assets/Svg/SvgLogo/SvgWhatsApp';
import { SvgTelegram } from '../../assets/Svg/SvgLogo/SvgTelegram';
import { SvgSms } from '../../assets/Svg/SvgLogo/SvgSms';
import { LayoutContext } from '../Layout/Context';


export type ChanalItemType = {
  id: string,
  type: ChannelEnum,
};

export const ChanalItem = (props: ChanalItemType) => {
  const {setCurrentChannel, currentChannel} = useContext(LayoutContext);

  const setCurrentChannelHandler = () => {
    setCurrentChannel && setCurrentChannel(props.type);
  };
  

  switch (props.type) {
    case ChannelEnum.VK:
      return (
        <div className={style.item}>
          <div className={style.info}>
            <SvgVk />
            ВКонтакте
          </div>
          <MessangerLink to={props.id} onClick={setCurrentChannelHandler}/>
        </div>
      );
    case ChannelEnum.WhatsApp:
      return (
        <div className={style.item}>
          <div className={style.info}>
            <SvgWhatsApp />
            WhatsApp
          </div>
          <MessangerLink to={props.id} onClick={setCurrentChannelHandler}/>
        </div>
      );
    case ChannelEnum.Telegram:
      return (
        <div className={style.item}>
          <div className={style.info}>
            <SvgTelegram />
            Telegram
          </div>
          <MessangerLink to={props.id} onClick={setCurrentChannelHandler}/>
        </div>
      );
    case ChannelEnum.SMS:
      return (
        <div className={style.item}>
          <h4 className={style.info}>
            <SvgSms />
            SMS
          </h4>
          <MessangerLink to={props.id} onClick={setCurrentChannelHandler}/>
        </div>
      );
    default:
      return (
        <h1>messenger is not defined</h1>
      )
  }
}
