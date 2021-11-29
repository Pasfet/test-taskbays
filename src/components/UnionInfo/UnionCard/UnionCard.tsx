import { FC, useEffect, useState } from 'react';
import { IUnionCardProps } from '../../../types/components/unionTypes';
import styles from './UnionCard.module.scss';

const UnionCard: FC<IUnionCardProps> = ({ union }) => {
  const [imageUnion, setImageUnion] = useState<any>('');
  const [countryImage, setCountryImage] = useState<any>('');

  const load = async (path: string, dir: string, format?: string): Promise<any> => {
    return await import(`../../../assets/images/${dir}/${path}${format ? `${format}` : ''}`);
  };

  useEffect(() => {
    if (union?.url_image) {
      load(union.url_image, 'unions').then(res => setImageUnion(res.default));
    }
    if (union?.union_country) {
      load(union?.union_country, 'countries', '.png').then(res => setCountryImage(res.default));
    }
  }, [union]);

  return (
    <div className={styles['card']}>
      <div className={styles['card__rating']}>{union?.union_rating.toFixed(1)}</div>
      <div className={styles['card__content']}>
        <div className={styles['card__content-title']}>{union?.union_name}</div>
        <div className={styles['card__content-country']}>
          <span className={styles['card__content-country__title']}>{union?.union_country}</span>
          <img src={countryImage} alt={union?.union_country} />
        </div>
      </div>
      <div className={styles['card__image']}>
        <img src={imageUnion} alt={union?.union_name} />
        <div className={styles['card__number-team']}>{union?.union_team_number}</div>
      </div>
    </div>
  );
};

export default UnionCard;
