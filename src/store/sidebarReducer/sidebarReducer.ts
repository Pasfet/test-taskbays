import { ISidebarState } from "../../types/store/sidebarTypes";

const initialState: ISidebarState = {
  items: [
    {
      id: '1',
      title: 'Обзор команды',
      to: '/home',
      icon: 'home'
    },
    {
      id: '2',
      title: 'Обзор матча',
      to: '/matches/',
      icon: 'match'
    },
    {
      id: '3',
      title: 'Сравнение игроков',
      to: '/compare',
      icon: 'compare'
    },
    {
      id: '4',
      title: 'Отчеты',
      to: '/reports',
      icon: 'reports'
    }
  ]
};

const sidebarReducer = (state = initialState, action: any): ISidebarState => {
  switch (action.type) {
    default:
      return state;
  }
}

export default sidebarReducer;