import { FC } from 'react';
import { ITabProps } from '../../../types/components/tabsTypes';

const Tab: FC<ITabProps> = ({ children }) => {
  return <div style={{ height: '100%' }}>{children}</div>;
};

export default Tab;
