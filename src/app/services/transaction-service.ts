import { inject, Injectable } from '@angular/core';
import { Db } from './db';
import { Transaction } from '../models/transaction.mode';
import { liveQuery } from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _db = inject(Db);

  addTransaction(transaction: Transaction) {
    return this._db.transactions.add(transaction);
  }

  getAllTransactions() {
    return liveQuery(() => this._db.transactions.toArray());
  }

  getTransactionsByType(type: 'expense' | 'income') {
    return liveQuery(() => 
      this._db.transactions.where('type').equals(type).reverse().sortBy('date')
    );
  }

  deleteTransaction(id: number) {
    return this._db.transactions.delete(id);
  }

  getBalance() {
    return liveQuery(async () => {
      const transactions = await this._db.transactions.toArray();
      return transactions.reduce( (acc, curr) => {
        return curr.type == 'income'
        ? acc + curr.amount
        : acc - curr.amount
      }, 0)
    })
  }

  deleteAllTransactions() {
    return this._db.deleteData();
  }
}
