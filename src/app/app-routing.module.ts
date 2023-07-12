import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { ContactListComponent } from './contact-list/contact-list.component';
import { exitGuard } from './exit.guard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UpdateFormComponent } from './update-form/update-form.component';



const routes = [


  {
    path:"form",
    component:FormComponent,
    canActivate: [authGuard]
  },
  {
    path:"updateForm/:id",
    component:UpdateFormComponent,
    canDeactivate:[exitGuard]
  },
  {
    path:"",
    component:ContactListComponent
  },
  {
    path:'**',component:HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
