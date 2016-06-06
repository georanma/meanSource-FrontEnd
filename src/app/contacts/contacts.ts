import {Component} from 'angular2/core';
import { NgForm }    from '@angular/common';
import {ContactsService} from './contacts.service';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';
import {FormBuilder, Validators} from '@angular/common';

import {XHRBackend}        from 'angular2/http';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Contacts` component loaded asynchronously');

@Component({
  selector: 'contacts',
  template: require('./contacts.html'),
  providers: [
    HTTP_PROVIDERS,
    ContactsService
  ]
})
  @Injectable()
export class Contacts {

  userForm: any;

  onSubmit(form: any): void {
    this.addContact(form);
  }
  constructor(
    public _ContactsService: ContactsService,
    private _formBuilder: FormBuilder) {

  }


  getContacts() {
    this._ContactsService.getContacts();
      // .subscribe(
      // contact => this.contact = contact,
      // error => this.errorMessage = <any>error);
  }
  addContact(form) {
    console.log(form);
    console.log('Add Contacts Ran 2');
    this._ContactsService.addContact(form)
     .subscribe(
      err => console.log(err));
  }

}


