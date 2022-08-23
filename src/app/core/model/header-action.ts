export interface IHeaderAction {
  type: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
}