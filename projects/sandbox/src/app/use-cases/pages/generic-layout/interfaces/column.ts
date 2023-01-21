export interface Column<T> {
  label: string;
  property: keyof T;
}
