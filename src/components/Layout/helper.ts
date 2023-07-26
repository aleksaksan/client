import { ChannelEnum } from "../../shared/enums/ChannelEnum";
import { PageEnum } from "../../shared/enums/PageEnum";

export const setNamePage = (typePage: PageEnum, typeMessendger?: ChannelEnum) => {
  switch (typePage) {
    case PageEnum.HomePage:
      return 'Home Page';
    case PageEnum.MessageCustomizationPage:
      switch (typeMessendger) {
        case ChannelEnum.VK:
          return 'ВКонтакте';
        case ChannelEnum.WhatsApp:
          return 'WhatsApp';
        case ChannelEnum.Telegram:
          return 'Telegram';
        case ChannelEnum.SMS:
          return 'SMS';
        default: 
          return 'Message Customization';
      };
    case PageEnum.NotFoundPage:
      return 'Not Found';
    default:
      return '';
    };
};
