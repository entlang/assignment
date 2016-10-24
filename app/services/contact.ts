import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Contact} from "../models/contact";

@Injectable()
export class ContactsService {
	constructor(private http: Http) {  }

	getContacts():Promise<Contact>{
		return this.http.get("/contacts").toPromise()
            .then(response => response.json()).catch( error => {
            	console.log("getJob error",error);
            });
	}

}