import { IUnion } from "../store/unionTypes";

export interface IUnionListProps {
  title: string;
  list: Array<IUnion>;
  onCheckedHandler: (id: string | number) => void;
}

export interface IUnionItemProps {
  union: IUnion;
  group_name: string;
  onCheckedHandler: (id: string | number) => void;
}