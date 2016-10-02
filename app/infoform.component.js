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
var day_1 = require('./day');
var doctor_1 = require('./doctor');
var research_1 = require('./research');
var InfoformComponent = (function () {
    function InfoformComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', day_1.Day)
    ], InfoformComponent.prototype, "day", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', research_1.Research)
    ], InfoformComponent.prototype, "res", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', doctor_1.Doctor)
    ], InfoformComponent.prototype, "doc", void 0);
    InfoformComponent = __decorate([
        core_1.Component({
            selector: 'info-form',
            template: "\n    {{day.num}};{{day.enabled}}<br><hr>\n    {{res.pk}}<br><hr>\n    {{doc.pk}}<br><hr>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], InfoformComponent);
    return InfoformComponent;
}());
exports.InfoformComponent = InfoformComponent;
//# sourceMappingURL=infoform.component.js.map