import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Ava from '../../assets/images/user/man.png';

const Header: FC = () => {
  return (
    <section className={styles['header']}>
      <nav className={`${styles['header__nav']} ${styles['menu']}`}>
        <h1 className={styles['header__title']}>Обзор матча</h1>
        <ul className={styles['menu__list']}>
          <li className={styles['menu__item']}>
            <Link to="/home">Сводка</Link>
          </li>
          <li className={styles['menu__item']}>
            <Link to="/home">Составы</Link>
          </li>
          <li className={`${styles['menu__item']} ${styles['active']}`}>
            <Link to="/home">Подробная статистика</Link>
          </li>
          <li className={styles['menu__item']}>
            <Link to="/home">Анализ матча</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['header__avatar']}>
        <div className={styles['header__avatar__letters']}>
          <img src={Ava} alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default Header;
