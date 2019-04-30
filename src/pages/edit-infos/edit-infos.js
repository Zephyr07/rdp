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
 * Generated class for the EditInfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditInfosPage = /** @class */ (function () {
    function EditInfosPage(formBuilder) {
        this.formBuilder = formBuilder;
    }
    EditInfosPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    EditInfosPage.prototype.initForm = function () {
        this.editForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    };
    EditInfosPage = __decorate([
        Component({
            selector: 'page-edit-infos',
            templateUrl: 'edit-infos.html',
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], EditInfosPage);
    return EditInfosPage;
}());
export { EditInfosPage };
//# sourceMappingURL=edit-infos.js.map