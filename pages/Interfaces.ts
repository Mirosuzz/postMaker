export interface IPosts{
    title:string, 
    body:string, 
    id:number, 
    comments:[{
        id:number, 
        title:string, 
        body:string}]
}

export interface IPost{
    title:string, 
    body:string, 
    id:number,
}

export interface IFormCreator{
    data:string[][],
    link:string, 
    id:number,  
    route:string
  }