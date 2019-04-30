var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the CommentaireFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuggestionPage = /** @class */ (function () {
    function SuggestionPage(formBuilder) {
        this.formBuilder = formBuilder;
    }
    SuggestionPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    SuggestionPage.prototype.initForm = function () {
        this.commentaireForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    };
    SuggestionPage = __decorate([
        Component({
            selector: 'page-suggestion',
            templateUrl: 'suggestion.html',
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], SuggestionPage);
    return SuggestionPage;
}());
export { SuggestionPage };
//# sourceMappingURL=suggestion.js.map