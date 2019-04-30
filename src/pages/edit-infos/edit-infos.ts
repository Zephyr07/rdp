import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the EditInfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-infos',
  templateUrl: 'edit-infos.html',
})
export class EditInfosPage implements OnInit {

	editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
		this.initForm();
	}

	initForm() {
	    this.editForm = this.formBuilder.group({
	      name: ['', Validators.required]
	    });
	}

}
