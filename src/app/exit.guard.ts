import { CanDeactivateFn } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const exitGuard: CanDeactivateFn<UpdateFormComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.role){
     window.confirm("you want to update  contact")
    return true
  }
  return false;
};
