export class Login
{
    userId:number;
    userName:string;
    password:string;
    
    public constructor(userId:number,userName:string,password:string)
    {
	    this.userId = userId;
    	this.userName = userName;
    	this.password = password;
    	
    }
}