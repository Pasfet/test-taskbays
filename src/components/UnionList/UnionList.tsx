import { FC } from 'react';
import { IUnionListProps } from '../../types/components/unionListTypes';
import UnionItem from './UnionItem/UnionItem';
import styles from './UnionList.module.scss';

const UnionList: FC<IUnionListProps> = ({ list, title, onCheckedHandler }) => {
  return (
    <div className={styles['unions']}>
      <h3 className={styles['unions__title']}>{title}</h3>
      <ul className={styles['unions__list']}>
        {list?.map(union => (
          <UnionItem
            key={union.union_id}
            union={union}
            group_name="unions"
            onCheckedHandler={onCheckedHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default UnionList;
