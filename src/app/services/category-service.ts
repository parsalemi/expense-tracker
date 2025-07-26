import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { 
    this.loadUserCtgs();
  }

  defalutCtgs: Category[] = [
    //EXPENSE
    {id: 1, name: 'Home', icon: 'home', isDefault: true, type: 'expense'},
    {id: 2, name: 'Shopping', icon: 'shopping_cart', isDefault: true, type: 'expense'},
    {id: 3, name: 'Repairs', icon: 'build', isDefault: true, type: 'expense'},
    {id: 4, name: 'Bills', icon: 'credit_card', isDefault: true, type: 'expense'},
    {id: 5, name: 'Food', icon: 'restaurant', isDefault: true, type: 'expense'},
    {id: 6, name: 'Gift', icon: 'card_giftcard', isDefault: true, type: 'expense'},
    {id: 7, name: 'Transportaion', icon: 'commute', isDefault: true, type: 'expense'},
    {id: 8, name: 'Trip', icon: 'explore', isDefault: true, type: 'expense'},
    {id: 9, name: 'Internet', icon: 'wifi', isDefault: true, type: 'expense'},
    {id: 10, name: 'Games', icon: 'gamepad', isDefault: true, type: 'expense'},
    {id: 11, name: 'Personal', icon: 'person', isDefault: true, type: 'expense'},
    {id: 12, name: 'Education', icon: 'school', isDefault: true, type: 'expense'},
    {id: 13, name: 'health', icon: 'local_hospital', isDefault: true, type: 'expense'},
    // INCOME
    {id: 14, name: 'Salary', icon: 'attach_money', isDefault: true, type: 'income'},
    {id: 15, name: 'Freelance', icon: 'money', isDefault: true, type: 'income'},
  ];

  categories = signal<Category[]>([]);

  private loadUserCtgs() {
    const savedCtgs = localStorage.getItem('userCategories');
    if(savedCtgs) {
      const userCtgs = JSON.parse(savedCtgs);
      const allCtgs = [...userCtgs, ...this.defalutCtgs];
      this.categories.set(allCtgs)
    }
    else {
      this.categories.set(this.defalutCtgs);
    }
  }

  addCategory(newCategory: Omit<Category, 'id' | 'isDefault'>) {
    const currentCtgs = this.categories();
    if(!currentCtgs.some(c => c.name.toLowerCase() === newCategory.name.toLowerCase())) {
      const categoryToAdd: Category = {
        ...newCategory,
        id: currentCtgs.length + 1,
        isDefault: false
      };
      this.categories.update(ctgs => [...ctgs, categoryToAdd]);
      const userAddedCtgs = this.categories().filter(c => !c.isDefault);
      localStorage.setItem('userCategories', JSON.stringify(userAddedCtgs));
      return true;
    }
    else {
      return false;
    }
  }
  deleteCategory(id: number) {
    this.categories.update(ctg => ctg.filter(c => c.id !== id));
    const userAddedCtgs = this.categories().filter(c => !c.isDefault);
    localStorage.setItem('userCategories', JSON.stringify(userAddedCtgs))
  }
  getCategoryById(id: number): Category | undefined{
    return this.categories().find(c => c.id === id);
  }  
  getCategoriesByType(type: 'income' | 'expense') {
    return this.categories().find(c => c.type == type);
  }
  getDefaultCategories() {
    return this.categories().find(c => c.isDefault === true);
  }
}
