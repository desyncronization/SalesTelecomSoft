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
//import { Ng2MessagePopupComponent, Ng2PopupComponent} from 'ng2-popup';
var TimelineComponent = (function () {
    function TimelineComponent() {
        this.timeline = [];
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.drawTimeline(8, 45, 22, 15);
    };
    TimelineComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes.selDay);
    };
    TimelineComponent.prototype.minclick = function (m) {
        console.log(m.time);
    };
    TimelineComponent.prototype.drawTimeline = function (sh, sm, eh, em) {
        var h = sh;
        var m = sm;
        if (sm >= em) {
            this.mins = (eh - sh) * 12 + (sm - em) / 5;
        }
        else {
            this.mins = (eh - sh - 1) * 12 + (em - sm) / 5;
        }
        for (var i = 0; i < this.mins; i++) {
            if (h == eh && m == em) {
                break;
            }
            if (m == 0) {
                this.timeline.push({ time: [h, m], hour: (m == 0) });
            }
            else {
                this.timeline.push({ time: [h, m], hour: (m == 0) });
            }
            if (m + 5 == 60) {
                h++;
                m = 0;
            }
            else
                m += 5;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', day_1.Day)
    ], TimelineComponent.prototype, "selDay", void 0);
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'timeline',
            templateUrl: 'app/timeline.component.html',
            styleUrls: ['app/timeline.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=timeline.component.js.map