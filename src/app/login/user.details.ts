import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserDetails
{
    userDetails:{
        userId:number;
        userName:string;
        
    }={userId:0,userName:''};
}