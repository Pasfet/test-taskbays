import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISidebarItemProps } from '../../types/components/sidebarItemTypes';
import Icon from './Icon';
import styles from './SidebarItem.module.scss';

const SidebarItem: FC<ISidebarItemProps> = ({ item, path }) => {
  return (
    <li className={`${styles['item']} ${item.to.includes(path) ? styles['active'] : ''}`}>
      <Link to={item.to} className={styles['item__link']}>
        <div className={styles['item__image']}>
          <Icon name={item.icon} />
        </div>
        <span className={styles['item__title']}>{item.title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
