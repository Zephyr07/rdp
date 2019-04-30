import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ReabonnementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reabonnement',
  templateUrl: 'reabonnement.html',
})
export class ReabonnementPage implements OnInit {

	selectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
		this.initForm();
	}

	initForm() {
	    this.selectForm = this.formBuilder.group({
	      name: ['', Validators.required]
	    });
	}

}
