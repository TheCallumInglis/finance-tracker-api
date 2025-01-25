import { Request, Response } from 'express';
import { getAllAccountTypes, addAccountType } from '../services/accountTypeService';

export const getAccountTypes = async (req: Request, res: Response) => {
    const accounts = await getAllAccountTypes();
    res.json(accounts);
}

export const createAccountType = async (req: Request, res: Response) => {
    const account = await addAccountType(req.body);
    res.status(201).json(account);
}