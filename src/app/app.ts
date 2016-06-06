/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ ],
  template: `
    
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">meanSource</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
              <li class="active"><a [routerLink]="['Home']">Home</a></li>
              <li ><a [routerLink]="['Contacts']">Find a Dev</a></li>
              <li ><a [routerLink]="['About']">How it Works</a></li>
          </ul>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    

    <main>
      <router-outlet></router-outlet>
    </main>
      <footer>
            <p>&copy; 2016 meanSource, Inc.</p>
          </footer>

    
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/contact-us', name: 'About', loader: () => require('es6-promise!./about')('About') },
  { path: '/find-a-dev', name: 'Contacts', loader: () => require('es6-promise!./contacts')('Contacts') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  answerResponse = null;
  constructor(public appState: AppState, public http: Http) {}

  // answerRequest(){
  //   var headers = new Headers();
  // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   this.http.post('http://localhost:3002/api/contacts',{
  //   headers: headers
  //   })
  //   .map(res => res.text())
  //   .subscribe(
  //     data => this.answerResponse = data,
  //     err => this.logError(err),
  //     () => console.log(this.answerResponse)
  //   );
  // }

  logError(err) {
  console.error('There was an error: ' + err);
}
  get state() {
    return this.appState.get();
  }

  ngOnInit() {
    console.log('Initial App State', this.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */



