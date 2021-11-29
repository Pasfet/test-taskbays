import { FC } from 'react';
import { IUnionItemProps } from '../../../types/components/unionListTypes';
import styles from './UnionItem.module.scss';

const UnionItem: FC<IUnionItemProps> = ({ union, group_name, onCheckedHandler }) => {
  return (
    <li className={styles['union__item']}>
      <label className={styles['union__label']}>
        <input
          type="radio"
          name={group_name}
          value={union.union_name}
          tabIndex={0}
          onChange={() => onCheckedHandler(union.union_id)}
        />
        <span className={styles['union__title']}>{union.union_name}</span>
      </label>
      <span className={styles['union__number-team']}>{union.union_team_number}</span>
    </li>
  );
};

export default UnionItem;
