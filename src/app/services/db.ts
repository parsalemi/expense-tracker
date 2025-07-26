import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Transaction } from '../models/transaction.mode';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class Db extends Dexie{
  transactions!: Dexie.Table<Transaction, number>;

  constructor() {
    super('expensesDB');

    this.version(1).stores({
      transactions: '++id, type, date',
    });
  }

  async deleteData() : Promise<void> {
    try {
      await this.delete();
    } catch (error) {
      console.error('An error occured: ', error)
    }
  }
}
