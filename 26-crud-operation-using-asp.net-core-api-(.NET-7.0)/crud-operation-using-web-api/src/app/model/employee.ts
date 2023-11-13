// export class Employee {

//     id:string;
//     firstName : string;
//     middleName : string;
//     lastName : string;
//     email:string;
//     mobile : string;
//     company : string;
//     salary : number;
//     country:string;
//     state:string;
//     city:string;
  
//     constructor(id: string, firstName: string, middleName: string, lastName: string,email:string,mobile:string,company:string,salary:number,country:string,state:string,city:string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.middleName = middleName;
//         this.lastName=lastName;
//         this.email = email;
//         this.mobile = mobile;
//         this.company = company;
//         this.salary=salary;
//         this.country=country;
//         this.state=state;
//         this.city=city;
//     }
//   }

  export interface Employee {
    id:string;
    firstName : string;
    middleName : string;
    lastName : string;
    email:string;
    mobile : string;
    company : string;
    salary : number;
    country:string;
    state:string;
    city:string;
  }

  export interface Response {
    id:string;
    isSuccess : boolean;
    HttpStatusCode : string;
    Messages:Messages[]
  }

  export interface Messages {
    Message : string;
  }