import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCheckSize } from '../../hooks/useCheckSize';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as LogoFullIcon } from '../../assets/icons/logo-full.svg';
import { useAppSelector } from '../../store/hooks';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh-icon.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chats-icon.svg';
import styles from './Sidebar.module.scss';
import SidebarList from '../SidebarList/SidebarList';
import FavoriteClubList from '../FavoriteClubList/FavoriteClubList';

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const isMobile = useCheckSize(1280);
  const { items } = useAppSelector(state => state.sidebar);
  const { all_clubs } = useAppSelector(state => state.clubs);
  const { pathname, search } = useLocation();
  const clubId = search.match(/\?club_id=([\w]{8}(-[\w]{4}){3}-[\w]{12})/)?.[1];
  const findClub = all_clubs.find(club => club.id === clubId);
  let currentClub;

  if (findClub) {
    currentClub = require('../../assets/images/' + findClub?.url_image).default;
  } else {
    currentClub = require('../../assets/images/clubs/spartak.png').default;
  }

  const randomClub = (): void => {
    const club: string | number = all_clubs[Math.floor(Math.random() * all_clubs.length)].id;
    navigate(`/matches?club_id=${club}`);
  };

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar-logo__wrapper']}>
        {isMobile ? <LogoIcon /> : <LogoFullIcon />}
      </div>
      <div className={styles['sidebar__divider']}></div>
      <div>
        <SidebarList list={items} title="Меню" pathName={pathname} />
      </div>
      <div className={styles['sidebar__divider']}></div>
      <div className={styles['sidebar__clubs']}>
        <h2 className={styles['sidebar__clubs-title']}>Текущий клуб</h2>
        <div className={styles['sidebar__clubs-logo']}>
          <img src={currentClub} alt="club" width="62" height="40" />
          <span className={styles['sidebar__clubs-heading']}>{findClub && findClub.name_ru}</span>
        </div>
        <FavoriteClubList />
        <button className={styles['sidebar__clubs-refresh']} onClick={() => randomClub()}>
          <RefreshIcon />
          <span className={styles['sidebar__clubs-refresh__title']}>Выбрать другой клуб</span>
        </button>
        <div className={styles['sidebar__divider']}></div>
      </div>
      <button className={styles['sidebar__chats']}>
        <ChatIcon />
        <span className={styles['sidebar__chats__title']}>Дать обратную связь</span>
      </button>
    </div>
  );
};

export default Sidebar;
