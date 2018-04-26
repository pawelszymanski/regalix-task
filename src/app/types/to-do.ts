export interface ToDo {
  id: number;
  text: string;
  selected: boolean;
  deleted: boolean;
  isEditModeOn?: boolean;
}
