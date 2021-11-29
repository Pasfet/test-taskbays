import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite-icon.svg';
import { useAppSelector } from '../../store/hooks';
import styles from './FavoriteClubList.module.scss';

const FavoriteClubList: FC = () => {
  const { favorite_clubs } = useAppSelector(state => state.clubs);

  return (
    <ul className={styles['favorites']}>
      <li className={styles['favorites__item']}>
        <FavoriteIcon />
        <span className={styles['favorites__title']}>Избранные клубы</span>
      </li>
      {favorite_clubs?.map(club => (
        <li key={club.id} className={styles['favorites__item']}>
          <Link to={`/matches?club_id=${club.id}`}>
            <img src={require('../../assets/images/' + club.url_image).default} alt={club.title} />
            <span className={styles['favorites__item-title']}>{club.name_ru}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteClubList;
