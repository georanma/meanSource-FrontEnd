import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Contacts}           from './contacts';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class ContactsService {
  private _contactsUrl = 'http://localhost:3002/api/contacts/';
  constructor(private http: Http) { }
  getContacts() {
      return this.http.get(this._contactsUrl)
      .map(res => <Contacts[]>res.json().data)
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  addContact(form): Observable<Contacts> {
    let body = JSON.stringify({
      'firstName' : form.firstName,
      'lastName'  : form.lastName,
      'email' : form.email,
      'company' : form.company,
      'number' : form.number,
      'address1' : form.address1,
      'address2' : form.address2,
      'city' : form.city,
      'zipFirstFive' : form.zipFirstFive
    });
     console.log('test1');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('test');
    console.log(body);
    return this.http.post(this._contactsUrl, body, options)
      .map(res => <Contacts>res.json().data)
      .catch(this.handleError);



  }

  private handleError (error: any) {
  // In a real world app, we might send the error to remote logging infrastructure
  console.log('err');
  let errMsg = error.message || 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}

}
