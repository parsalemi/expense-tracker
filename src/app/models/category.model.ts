export interface Category {
  id: number;
  name: string;
  icon: string;
  type: 'expense' | 'income';
  isDefault: boolean;
}