import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import { Header } from '../Header/Header';
import { LayoutContext, LayoutContextType } from './Context';
import { PageEnum } from '../../shared/enums/PageEnum';
import { ChannelEnum } from '../../shared/enums/ChannelEnum';


export const Layout = () => {
  const [title, setPageType] = useState(PageEnum.HomePage);
  const [messanger, setMessanger] = useState(ChannelEnum.SMS);

  const setTitleHandler = (pageType: PageEnum) => {
    setPageType(pageType);
  };
  const setMessangerHandler = (channel: ChannelEnum) => {
    setMessanger(channel);
  }

  const layoutContext: LayoutContextType = {
    currentPage: title,
    setPageType: setTitleHandler,
    currentChannel: messanger,
    setCurrentChannel: setMessangerHandler,
  };

  return (
    <LayoutContext.Provider value={layoutContext}>
      <Header />
      <div className={style.container}>
        <Outlet />
      </div>
    </LayoutContext.Provider>
  )
}