import { useEffect, useState } from "react";
import { ChannelEnum } from "../../shared/enums/ChannelEnum";


interface IButton {
  isButtonsInline: boolean,
  isButtonsSupported: boolean,
  maxAmountButtons?: number,
  maxButtonsText?: number | null,
  isLinksSupported: boolean,
  maxAmountLinks?: number,
}

interface IMessageSettings {
  messanger: ChannelEnum,
  maxSymbols: number | null,
  buttonsSettings: IButton,
};

export const MessageSettings: IMessageSettings[] = [
  { messanger: ChannelEnum.VK, maxSymbols: 4096, buttonsSettings: {isButtonsInline: false, isButtonsSupported: true, maxAmountButtons: 40, maxButtonsText: null, isLinksSupported: true} },
  { messanger: ChannelEnum.VK, maxSymbols: 4096, buttonsSettings: {isButtonsInline: true, isButtonsSupported: true, maxAmountButtons: 10, maxButtonsText: null, isLinksSupported: true} },
  { messanger: ChannelEnum.WhatsApp, maxSymbols: 1000, buttonsSettings: {isButtonsInline: false, isButtonsSupported: true, maxAmountButtons: 10, maxButtonsText: 20, isLinksSupported: false} },
  { messanger: ChannelEnum.WhatsApp, maxSymbols: 1000, buttonsSettings: {isButtonsInline: true, isButtonsSupported: true, maxAmountButtons: 3, maxButtonsText: 20, isLinksSupported: true, maxAmountLinks: 1} },
  { messanger: ChannelEnum.Telegram, maxSymbols: 4096, buttonsSettings: {isButtonsInline: false, isButtonsSupported: true, maxButtonsText: null, isLinksSupported: false} },
  { messanger: ChannelEnum.Telegram, maxSymbols: 4096, buttonsSettings: {isButtonsInline: true, isButtonsSupported: true, maxButtonsText: 64, isLinksSupported: true} },
  { messanger: ChannelEnum.SMS, maxSymbols: null, buttonsSettings: {isButtonsInline: false, isButtonsSupported: false, isLinksSupported: false} },
  { messanger: ChannelEnum.SMS, maxSymbols: null, buttonsSettings: {isButtonsInline: true, isButtonsSupported: false, isLinksSupported: false} },
];

export const useMessangerSettings = (messangerType: ChannelEnum, isInlineButton: boolean) => {
  const [settings, setSettings] = useState<IMessageSettings>(MessageSettings[0]);
  const newSetting = MessageSettings.filter(item => item.messanger === messangerType && item.buttonsSettings.isButtonsInline === isInlineButton)[0];

  useEffect(()=>{
    setSettings(newSetting);
  }, [newSetting]);
  return settings;
}