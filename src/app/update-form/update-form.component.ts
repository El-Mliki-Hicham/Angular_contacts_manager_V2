import { Component,QueryList,ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { FormBuilder,FormGroup,FormControl ,Validators,} from "@angular/forms"
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent {
  form!:FormGroup ;
  data?:any;
  IdGet?: number;
  role = true
  constructor(private FormBuilder:FormBuilder , private route:Router,private service:ContactsService,private routeParams:ActivatedRoute){

  }

  validation = Validators.compose([Validators.required])

  ngOnInit(){

    this.form = this.FormBuilder.group({
      "name" : new FormControl("",this.validation),
      "email" : new FormControl("",[
        Validators.email,Validators.required
      ])

  })


  this.routeParams.params.subscribe(value=>{
    this.IdGet=  value["id"]
  })
      this.service.GetDataById(this.IdGet).subscribe(value=>{
        console.log(value)
        console.log(this.IdGet)
         this.form.get('name')?.setValue(value.name)
         this.form.get('email')?.setValue(value.email)

      })

  }




  Update(){
    var id = this.IdGet
    console.log(this.IdGet)
    var values = this.form.value
    this.service.Update(id, values).subscribe(value=>{
      console.log(value)
    })
    this.route.navigate([''])
  }
}
