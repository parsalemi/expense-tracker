import { Category } from "./category.model";

export interface Transaction {
  id?: number;
  amount: number;
  title: string;
  description?: string;
  type: 'expense' | 'income';
  category: Category;
  date: Date;
}