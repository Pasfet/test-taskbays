import { FC } from 'react';
import { ISidebarProps } from '../../types/components/sidebarListTypes';
import styles from './SidebarList.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';

const SidebarList: FC<ISidebarProps> = ({ list, title, pathName }) => {
  return (
    <nav className={styles['sidebar']}>
      {title && <h2 className={styles['sidebar__title']}>{title}</h2>}
      <ul className={styles['sidebar__list']}>
        {list?.map(item => (
          <SidebarItem key={item.id} item={item} path={pathName} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarList;
