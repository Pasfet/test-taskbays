export interface IMenuItem {
  title: string;
  icon?: string | any
  id: string | number;
  to: string;
}

export interface ISidebarState {
  items: Array<IMenuItem>
}
