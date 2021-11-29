import { FC } from 'react';
import { IUnionInfoProps } from '../../types/components/unionTypes';
import UnionCard from './UnionCard/UnionCard';
import { ReactComponent as ReportIcon } from '../../assets/icons/reports.svg';
import styles from './UnionInfo.module.scss';

const UnionInfo: FC<IUnionInfoProps> = ({ union }) => {
  return (
    <>
      {union && (
        <div className={styles['info']}>
          <h3 className={styles['info__title']}>
            Значимость каждого показателя в расчете оценки игрока
          </h3>
          <div className={styles['info__content']}>
            <div className={styles['info__content__card']}>
              <UnionCard union={union} />
            </div>
            <button className={styles['info__reports']}>
              <ReportIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UnionInfo;
