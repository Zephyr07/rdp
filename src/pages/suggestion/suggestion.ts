
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the CommentaireFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-suggestion',
  templateUrl: 'suggestion.html',
})
export class SuggestionPage implements OnInit  {

	commentaireForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.initForm();
	}

	initForm() {
	    this.commentaireForm = this.formBuilder.group({
	      name: ['', Validators.required]
	    });
	}

}
