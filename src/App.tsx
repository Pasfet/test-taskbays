import { FC, useEffect } from 'react';
import { useActions, useAppSelector } from './store/hooks';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Router from './Router/Router';
import styles from './App.module.scss';

const App: FC = () => {
  const { fetchAllClubs } = useActions();
  const { all_clubs } = useAppSelector(state => state.clubs);

  useEffect(() => {
    if (!all_clubs.length) {
      fetchAllClubs();
    }
  }, [all_clubs.length, fetchAllClubs]);

  return (
    <section className={styles['page']}>
      <header className={styles['page-header']}>
        <Header />
      </header>
      <aside className={styles['page-sidebar']}>
        <Sidebar />
      </aside>
      <main className={styles['page-main']}>
        <Router />
      </main>
    </section>
  );
};

export default App;
