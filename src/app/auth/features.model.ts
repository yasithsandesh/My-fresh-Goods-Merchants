export interface City{
    id:number
    name:string
}

export interface Category{
    id:number
    name:string
}

export interface ItemStatus{
    id:number
    status:string
}

export interface FeaturesResponseDTO{
    categoryList:Category[]
    itemStatusList:ItemStatus[]
    cityList:City[]
}