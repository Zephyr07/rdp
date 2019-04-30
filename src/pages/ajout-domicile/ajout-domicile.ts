import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AjoutDomicilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout-domicile',
  templateUrl: 'ajout-domicile.html',
})
export class AjoutDomicilePage implements OnInit {

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