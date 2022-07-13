import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // public loginReg = /[a-zA-Z]{4,16}/ 
  // public emailReg = /^([A-Za-z0-9_\-\.])+\@([a-z])+\.([a-z]{2,4})$/;
  // public passwordReg = /^\w{8,15}$/

  // public loginTest = false;
  // public emailTest:any;
  // public passwordTest:any;

  // public lclasses = 'input'
  // public eclasses = 'input'
  // public pclasses = 'input'

  public loginInput!: any;
  public emailInput!: any;
  public passwordInput!: any;

  public usersArray:any = []
  

  public editButtonHidden = true;
  public addButtonHidden = false;

  public editIndex!:number;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void{    
    let newUser = {
      newUserlogin: this.loginInput, 
      newUserpassword: this.passwordInput, 
      newUseremail: this.emailInput,
    }
    this.usersArray.push(newUser);
    console.log(this.usersArray);
    

    this.loginInput = ''; 
    this.passwordInput = ''; 
    this.emailInput = '';
  }

  editBtn(index: number): void {
    this.addButtonHidden = true;
    this.editButtonHidden = false;

    this.loginInput = this.usersArray[index].newUserlogin; 
    this.passwordInput = this.usersArray[index].newUserpassword; 
    this.emailInput = this.usersArray[index].newUseremail; 

    this.editIndex = index;
  }

  deleteBtn(index: number): void {
    this.usersArray.splice(index, 1)
  }

  editAccept(): void{
    this.addButtonHidden = false;
    this.editButtonHidden = true;

    // this.usersArray[this.editIndex] = this.loginInput
    // this.usersArray[this.editIndex] = this.passwordInput
    // this.usersArray[this.editIndex] = this.emailInput
    let newUser = {
      newUserlogin: this.loginInput, 
      newUserpassword: this.passwordInput, 
      newUseremail: this.emailInput,
    }
    this.usersArray[this.editIndex] = newUser;
    
  }

  // VALID

//   login(): void {
//     this.loginTest =  this.loginReg.test(this.loginInput)
//     console.log(this.loginInput);
    
//     if  (this.loginTest === true) {
//       // this.lclasses = 'input green'
//       console.log('l-true');
       
//     }else {
//       // this.lclasses = 'input red'
//       console.log('l-false');
//     }
//   }

//   password(): void {
//     let passwordTest = this.passwordReg.test(this.passwordInput)
//      if  (passwordTest === true) {
//        // this.pclasses = 'input green'
//        console.log('p-true');
//      }else {
//        // this.pclasses = 'input red'
//        console.log('p-false');
//      }
//  }

//   email(): void {
//      let emailTest = this.emailReg.test(this.emailInput)
//       if  (emailTest === true) {
//         // this.eclasses = 'input green'
//         console.log('e-true');
//       }else {
//         // this.eclasses = 'input red'
//         console.log('e-false');
//       }
//   }

  

  // button

  // checkValid(): void{

  // }

}
