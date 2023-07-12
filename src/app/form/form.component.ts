import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form! :FormGroup;

 validation = Validators.compose([Validators.required]);

  constructor(private FormBuilder : FormBuilder,private services : ContactsService,private router:Router){}

  ngOnInit(){
    this.form = this.FormBuilder.group({
      "name" : new FormControl("",this.validation),
      "email" : new FormControl("",[
        Validators.email,Validators.required
      ]),
      "password" : new FormControl("",[
        Validators.minLength(8),
        Validators.required
      ]),
    })

  }

     addUser(){
      //  console.log( this.form.value)
       const data= {
        "name":this.form.value.name,
      "email":this.form.value.email,
      "password":this.form.value.password,

    }
      console.log(data);

       this.services.storeData(data).subscribe(value=>{
        console.log(value);
        this.router.navigate([''])

       },(err)=>{
        console.log(err)
       }

       )
    }
}
