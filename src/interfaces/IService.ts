interface IService<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
  read():Promise<T[]>,
  update(_id: string, obj: T): Promise<T | null>,
  delete(_id:string):Promise<T | null>;
}
  
export default IService;
