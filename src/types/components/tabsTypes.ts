import {ReactElement} from 'react';

export interface ITabsProps {
  children: Array<ReactElement>
}

export interface ITabProps {
  title: string;
}

export interface ITabTitle {
  title: string;
  index: number;
  selected: number;
  setSelectedTab: (tab: number) => void;
}