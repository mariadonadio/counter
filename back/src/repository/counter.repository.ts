import { CounterData } from "./counter.interface";
import { CounterRepository } from "./counterRepository";

const dbConnetion = require('./dbConnection');


export class CounterDao implements CounterRepository {

    async increment(id:number): Promise<CounterData[]>{
        const query = `UPDATE counter SET number=number+1 WHERE id = ?`;
        return await dbConnetion.executeQuery(query, [id]);
    };

    async decrement(id:number):Promise<CounterData[]> {
        const query = `UPDATE counter SET number=number-1 WHERE id = ?`;
        return await dbConnetion.executeQuery(query, [id]);
    };
    
    async reset(id:number):Promise<CounterData[]> { 
        const query = `UPDATE counter SET number=0 WHERE id = ?`;
        return await dbConnetion.executeQuery(query, [id]);
    };

    async read():Promise<CounterData[]> { 
        const query = "SELECT id, number FROM counter";
        return await dbConnetion.executeQuery(query);
    };

    async readLast(): Promise<CounterData[]> { 
        const query = `SELECT id, number FROM counter LIMIT 1`;
        return await dbConnetion.executeQuery(query);
        
    };

    async readById(id: number): Promise<CounterData[]>{ 
        const query = `SELECT id, number FROM counter WHERE id = ?`;
        return await dbConnetion.executeQuery(query, [id]);
    };

    async create():Promise<CounterData[]> { 
        const query = `INSERT INTO counter VALUES (null,0,null)`;
        return await dbConnetion.executeQuery(query);
    };

    async delete(id:number):Promise<CounterData[]> { 
        const query = `DELETE FROM counter WHERE id = ?`;
        return await dbConnetion.executeQuery(query, [id]);
    };


}