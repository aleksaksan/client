import React from 'react';
import { PageEnum } from '../../shared/enums/PageEnum';
import { ChannelEnum } from '../../shared/enums/ChannelEnum';

export type LayoutContextType = {
  currentPage: PageEnum,
  setPageType?: (value: PageEnum)=>void,
  currentChannel: ChannelEnum,
  setCurrentChannel?: (value: ChannelEnum)=>void,
};

export const LayoutContext = React.createContext<LayoutContextType>({
  currentPage: PageEnum.HomePage,
  currentChannel: ChannelEnum.SMS,
});
