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
var researches_service_1 = require('./researches.service');
var ResearchesComponent = (function () {
    function ResearchesComponent(resService) {
        this.resService = resService;
        this.researches = [];
    }
    ResearchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resService.getResearches()
            .then(function (researches) { return _this.researches = researches; })
            .then(function (researches) { return _this.selectedRes = researches[0]; });
    };
    ResearchesComponent.prototype.onSelect = function (res) {
        this.selectedRes = res;
    };
    ResearchesComponent = __decorate([
        core_1.Component({
            selector: 'researches',
            templateUrl: 'app/researches.component.html',
            providers: [researches_service_1.ResearchesService]
        }), 
        __metadata('design:paramtypes', [researches_service_1.ResearchesService])
    ], ResearchesComponent);
    return ResearchesComponent;
}());
exports.ResearchesComponent = ResearchesComponent;
//# sourceMappingURL=researches.component.js.map