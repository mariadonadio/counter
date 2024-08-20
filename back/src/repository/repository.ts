export interface Repository {
    read : () => void,
    readLast : () => void,
    readById : (id:number) => void,
    create : (obj) => void,
    delete : (obj) => void
}