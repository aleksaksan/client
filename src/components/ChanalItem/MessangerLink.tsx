import React from 'react';
import { Link } from 'react-router-dom';
import style from './ChanalItem.module.scss';

type MessangerLinkProps = {
  to: string,
  onClick: () => void,
}

export const MessangerLink = (props: MessangerLinkProps) => {
  return (
    <Link to={props.to} className={style.link} onClick={props.onClick}>Настроить</Link>
  )
}
