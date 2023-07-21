import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout = () => {

  return (
    <>
      <Header title='Header' />
      <div className={style.container}>
        <Outlet />
      </div>
    </>
  )
}