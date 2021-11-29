import { FC, useState } from 'react';
import { ITabsProps } from '../../types/components/tabsTypes';
import TabTitle from './TabTitle/TabTitle';
import styles from './Tabs.module.scss';

const Tabs: FC<ITabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(3);

  return (
    <section className={styles['tabs']}>
      <ul className={styles['tabs__list']}>
        {children?.map((item, idx) => (
          <TabTitle
            key={idx}
            title={item.props.title}
            index={idx}
            selected={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      <div className={styles['tabs-content']}>{children[selectedTab]}</div>
    </section>
  );
};

export default Tabs;
