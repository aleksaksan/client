import React, { useContext } from 'react';
import style from './Header.module.scss';
import { LayoutContext } from '../Layout/Context';
import { setNamePage } from '../Layout/helper';
import { PageEnum } from '../../shared/enums/PageEnum';
import { Link } from 'react-router-dom';

export const Header = () => {
  const {currentPage, currentChannel} = useContext(LayoutContext);
  const pageTitle = setNamePage(currentPage, currentChannel);
  const isHomePage = currentPage === PageEnum.HomePage;

  return (
    <header>
      <div className={style.container}>
        <div>{pageTitle}</div>
        {!isHomePage && <Link className={style.link} to={'/'}>to Home</Link>}
      </div>
    </header>
  )
}
