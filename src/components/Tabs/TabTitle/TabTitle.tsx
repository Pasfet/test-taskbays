import { FC, useCallback } from 'react';
import { ITabTitle } from '../../../types/components/tabsTypes';
import styles from './TabTitle.module.scss';

const TabTitle: FC<ITabTitle> = ({ title, index, setSelectedTab, selected }) => {
  const onClickHandler = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={`${styles['tab__item']} ${styles[selected === index ? 'active' : ' ']}`}>
      <button onClick={onClickHandler}>{title}</button>
    </li>
  );
};

export default TabTitle;
