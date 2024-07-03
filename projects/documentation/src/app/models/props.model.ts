export interface Props {
  header: string[];
  columns: PropsColumn[];
}

export interface PropsColumn {
  property: string;
  type: string;
  default: string;
}