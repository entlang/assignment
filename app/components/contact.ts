import { Component, OnInit } from '@angular/core';

import {ContactsService} from "../services/contact";
import {Contact} from "../models/contact";

@Component({
    selector: 'my-app',
    templateUrl: './app/components/contact.html'
})

export class AppComponent implements OnInit{ 
	private contacts:Contact[];

    constructor(private contactService: ContactsService){}

	ngOnInit(){
        this.contactService.getContacts().then(response => {
            this.contacts = response;
		});
	}
}
