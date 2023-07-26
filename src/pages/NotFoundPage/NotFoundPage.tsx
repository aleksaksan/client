import React, { useContext, useEffect } from 'react'
import { LayoutContext } from '../../components/Layout/Context';
import { PageEnum } from '../../shared/enums/PageEnum';

export const NotFoundPage = () => {
  const {setPageType} = useContext(LayoutContext);
  
  useEffect(()=>{
    if (setPageType) {
      setPageType(PageEnum.NotFoundPage);
    }
  },[]);

  return (
    <div>NotFoundPage</div>
  )
}
