import { Request, Response } from 'express';
import { getAllTransactionCategories, addTransactionCategory } from '../services/transactionCategoryService';

export const getTransactionCategories = async (req: Request, res: Response) => {
    const accounts = await getAllTransactionCategories();
    res.json(accounts);
}

export const createTransactionCategory = async (req: Request, res: Response) => {
    const account = await addTransactionCategory(req.body);
    res.status(201).json(account);
}