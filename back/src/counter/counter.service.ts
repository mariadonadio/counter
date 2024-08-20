import { CounterData } from "../repository/counter.interface";
import { Counter } from "./counter.interface";
import { CounterDao } from "../repository/counter.repository";

 export class CounterService {
    constructor(private repository:CounterDao){}

    async getCounter(id:number): Promise<Counter>{
        const result: CounterData[]  = await this.repository.readById(id);
        return result[0] as Counter; 
    }
    
    async getLastCounter(): Promise<Counter> {
        const result: CounterData[]  = await this.repository.readLast();
        return result[0] as Counter; 
    }

    async incrementCounter(): Promise<Counter>{
        const { id }: Counter = await this.getLastCounter();
        const result: CounterData[] = await this.repository.increment(id);
        return result[0] as Counter;
    }

    async decrementCounter(): Promise<Counter>{
        const { id }: Counter = await this.getLastCounter();
        const result: CounterData[] = await this.repository.decrement(id);
        return result[0] as Counter;
    }

    async resetCounter(): Promise<Counter>{
        const { id }: Counter = await this.getLastCounter();
        const result: CounterData[] = await this.repository.reset(id);
        return result[0] as Counter;
    }

    async createCounter(): Promise<Counter>{
        const result: CounterData[] = await this.repository.create();
        return result[0] as Counter;
    }

    async deleteCounter(id:number): Promise<Counter>{
        const result: CounterData[] = await this.repository.delete(id);
        return result[0] as Counter;
    }
}