"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var doctors_service_1 = require('./doctors.service');
var DoctorsComponent = (function () {
    function DoctorsComponent(docService) {
        this.docService = docService;
        this.doctors = [];
    }
    DoctorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.docService.getDoctors()
            .then(function (doctors) { return _this.doctors = doctors; })
            .then(function (doctors) { return _this.selectedDoc = doctors[0]; });
    };
    DoctorsComponent.prototype.loadTimeline = function (doc) {
        this.selectedDoc = doc;
    };
    DoctorsComponent = __decorate([
        core_1.Component({
            selector: 'doctors',
            templateUrl: 'app/doctors.component.html',
            providers: [doctors_service_1.DoctorsService]
        }), 
        __metadata('design:paramtypes', [doctors_service_1.DoctorsService])
    ], DoctorsComponent);
    return DoctorsComponent;
}());
exports.DoctorsComponent = DoctorsComponent;
//# sourceMappingURL=doctors.component.js.map