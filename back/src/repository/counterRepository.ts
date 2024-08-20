import { Repository } from "./repository";

export interface CounterRepository extends Repository {
    increment:(id:number) => void,
    decrement:(id:number) => void,
    reset:(id:number) => void,
}