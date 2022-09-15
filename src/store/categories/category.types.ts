export enum CATEGORIES_ACTION_TYPES{
    FETCH_CATEGORIES_START="FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCESS="FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAIL="FETCH_CATEGORIES_FAIL",
}

export type CategoryItems={
    id:number;
    imageUrl:string;
    price:number;
    name:string;
}

export type Category={
  title:string;
  items:CategoryItems[];
}

export type CategoryMap={
  [key:string]:CategoryItems[]
}