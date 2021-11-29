import {IMenuItem} from '../store/sidebarTypes';

export interface ISidebarProps {
  list: Array<IMenuItem>;
  title?: string;
  pathName: string;
}