export interface OwnerDTO{
    firstName:string
    lastName:string
    email:string
    mobile:string
}

export interface GradenDTO{
    gardenName:string
    description:string
}

export interface GardenAddressDTO{
    address:string
    postalCode:string
    cityId:string
}

export interface OpenShopDTO{
    owner:OwnerDTO
    graden:GradenDTO
    gradenAddress:GardenAddressDTO
}

export type ResponseDTO ={
    status:boolean;
    message:string;
    code:number;
}

export interface OwnerLoginDTO{
    email:string;
    ownerCode:string
}

// private boolean status;
// private String message;
// private String url;
// private List<T> dataList;
// private T data;
// private int code;