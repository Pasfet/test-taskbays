import { FC, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useActions, useAppSelector } from '../../store/hooks';
import Tabs from '../../components/Tabs/Tabs';
import Tab from '../../components/Tabs/Tab/Tab';
import UnionList from '../../components/UnionList/UnionList';
import UnionInfo from '../../components/UnionInfo/UnionInfo';
import Chart from '../../components/Chart/Chart';
import styles from './MatchesPage.module.scss';

const MatchesPage: FC = () => {
  const { filtered_union, all_clubs } = useAppSelector(state => state.clubs);
  const { union_info, union_data } = useAppSelector(state => state.union);
  const { search } = useLocation();
  const { getFilteredList, getUnionInfo, getChartData } = useActions();
  const clubId = search.match(/\?club_id=([\w]{8}(-[\w]{4}){3}-[\w]{12})/)?.[1];

  const selectUnion = useCallback(
    (id: string | number) => {
      getUnionInfo(id, filtered_union);
      getChartData();
    },
    [getUnionInfo, filtered_union, getChartData],
  );

  useEffect(() => {
    if (clubId) {
      getFilteredList(clubId, all_clubs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [all_clubs, clubId]);

  return (
    <div>
      <Tabs>
        <Tab title="Атака">Атака</Tab>
        <Tab title="Оборона">Оборона</Tab>
        <Tab title="Пасы">Пасы</Tab>
        <Tab title="BT Score">
          <section className={styles['matches-score']}>
            <div className={styles['matches-score__unions']}>
              <UnionList
                list={filtered_union}
                title="Выбрать игрока"
                onCheckedHandler={selectUnion}
              />
            </div>
            <div className={styles['matches-score__header']}>
              <UnionInfo union={union_info} />
              <div className={styles['matches-score__graph']}>
                <Chart data={union_data} />
              </div>
            </div>
          </section>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MatchesPage;
