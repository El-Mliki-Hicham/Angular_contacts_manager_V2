import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  contacts?:any;
constructor(private Service:ContactsService,private route: Router ){}

ngOnInit(){
  this.Service.getData().subscribe(value=>{
    this.contacts = value
    console.log(value);

  })
  console.log()
}

DeleteContact(id:number){
  console.log(id);
  this.Service.DeleteRow(id).subscribe(value =>{
    console.log(value)
   this.ngOnInit()
  },(err)=>{
    console.log(err)
  }
  )

  // this.Service.DeleteRow(id)
}
EditContact(id:number){

  this.route.navigate(["updateForm/"+id])
  console.log(id);
  // this.Service.DeleteRow(id)
}

}
