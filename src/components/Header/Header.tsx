import React from 'react';
import style from './Header.module.scss';

type HeaderProps = {
  title: string,

} 

export const Header = (props: HeaderProps) => {
  return (
    <header>
      <div className={style.container}>
        {props.title}
      </div>
    </header>
  )
}
