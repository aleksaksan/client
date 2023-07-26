import React, { ReactEventHandler, useContext, useEffect, useId, useState } from 'react'
import { LayoutContext } from '../../components/Layout/Context';
import { PageEnum } from '../../shared/enums/PageEnum';
import { useParams } from 'react-router-dom';
import { ChannelEnum } from '../../shared/enums/ChannelEnum';
import { useMessangerSettings } from '../../assets/MessageSettings/MessageSettings';
import style from './MessageCustomizationPage.module.scss';
import { DropDownItem, DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';
import { SvgCross } from '../../assets/Svg/SvgCross';
import { SvgLink } from '../../assets/Svg/SvgLink';

const dropdownItems: DropDownItem[] = [
  { id: 0, elem: 'standard' },
  { id: 1, elem: 'inline' }
];

type BtnType = {
  id: number,
  text: string,
}

export const MessageСustomizationPage = () => {
  const [isInlineButtons, setIsInlineButtons] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [buttonsText, setButtonsText] = useState('');
  const [buttons, setButtons] = useState<BtnType[]>([]);
  const [linksText, setLinksText] = useState('');
  const [linkButtons, setLinkButtons] = useState<BtnType[]>([]);
  const {setPageType, currentChannel} = useContext(LayoutContext);
  // const id = useParams();
  
  useEffect(()=>{
    setPageType && setPageType(PageEnum.MessageCustomizationPage);
  },[setPageType]);

  const getFiltersId = (id: number) => {
    if (id === 0) {
      setIsInlineButtons(false);
    } else {
      setIsInlineButtons(true);
    }
  };

  const onTextareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(event.target.value);
  };
  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setButtonsText(event.target.value);
  };

  const addButton = (event: React.MouseEvent) => {
    event.preventDefault();
    setButtons([
      ...buttons,
      {
        id: Date.now(),
        text: buttonsText
      },
    ]);
    setButtonsText('');
  };

  const deleteButton = (id: number) => {
    setButtons(buttons.filter(item=>item.id !== id));
  };

  const onLinkChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinksText(event.target.value);
  };

  const addLink = (event: React.MouseEvent) => {
    event.preventDefault();
    setLinkButtons([
      ...linkButtons,
      {
        id: Date.now(),
        text: linksText
      },
    ]);
    setLinksText('');
  };

  const {maxSymbols, buttonsSettings} = useMessangerSettings(currentChannel, isInlineButtons);
  const isVisibleView = messageText || buttons.length > 0 || linkButtons.length > 0;
  
  return (
    <>
      <div className={style.wrapper}>
        <DropdownMenu data={dropdownItems} callback={getFiltersId}/>
      </div>
      <div className={style.container}>
        <form className={style.form}>
          <textarea placeholder='Текст сообщения' onChange={onTextareaChangeHandler} rows={10} value={messageText} name='message-text' />
          <div>
            <input type="text" placeholder='Текст кнопки' value={buttonsText} name='add-button' onChange={onInputChangeHandler} />
            <input type="button" className={style.add} value='Добавить кнопку' onClick={addButton} />
          </div>
          <div>
            <input type="text" placeholder='Ссылка' value={linksText} name='add-link' onChange={onLinkChangeHandler} />
            <input type="button" className={style.add} value='Добавить ссылку' onClick={addLink} />
          </div>
        </form>

        {isVisibleView && <div className={isInlineButtons ? `${style.view} ${style.inline}` : `${style.view}`}>
          <p className={style.message}>{messageText}</p>
          <div className={style.btn_container}>
            {buttons.map(button=>(
            <span className={style.button} key={button.id}>
              {button.text}
              <div onClick={()=>deleteButton(button.id)}>
                <SvgCross />
              </div>
            </span>
          ))}
          {linkButtons.map(link=>(
            <span className={`${style.button} ${style.link}`} key={link.id}>
              {link.text}
              <div onClick={()=>deleteButton(link.id)}>
                <SvgCross />
              </div>
              
              <SvgLink />
            </span>
          ))}
          </div>
        </div>}

      </div>
    </>
  )
}
