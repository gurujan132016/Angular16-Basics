export class User {

    static lastId = 0;

    id:number;
    firstName : string;
    lastName : string;
    email:string;
    userName : string;
    password : string;
    confirmPassword : string;
    dob:string;
    cource:string;
    gender:string;
    subscribe:boolean;
  
    constructor(firstName: string, lastName: string, email: string, userName: string,password:string,confirmPassword:string,dob:string,cource:string,gender:string,subscribe:boolean) {
        this.id = ++User.lastId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email=email;
        this.userName = userName;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.dob=dob;
        this.cource=cource;
        this.gender=gender;
        this.subscribe=subscribe;
    }
  }