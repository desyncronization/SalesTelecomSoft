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
var DatepickComponent = (function () {
    function DatepickComponent() {
        this.onSelectDay = new core_1.EventEmitter();
        this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        this.date = new Date;
        this.Days = [];
        this.disabledDays = [7, 9, 22];
        this.today = this.date.getDate().toString();
    }
    DatepickComponent.prototype.ngOnInit = function () {
        this.date = new Date;
        this.syear = this.date.getFullYear();
        this.sdate = this.date.getDate().toString() + ', ' + this.months[this.date.getMonth()];
        this.createCalendar(this.date.getFullYear(), this.date.getMonth());
    };
    DatepickComponent.prototype.createCalendar = function (year, month) {
        var enabled = true;
        var mon = month;
        var d = new Date(year, mon);
        for (var i = 0; i < this.getDay(d); i++) {
            this.Days.push({ num: '', enabled: true });
        }
        // ячейки календаря с датами
        while (d.getMonth() == mon) {
            enabled = true;
            this.disabledDays.map(function (id) {
                if (d.getDate() == id) {
                    enabled = false;
                }
            });
            this.Days.push({ num: d.getDate(), enabled: enabled });
            /*for (var i = 0; i < this.disabledDays.length; i++) {
              if(d.getDate() == this.disabledDays[i]){
                this.Days.push({num:d.getDate(),enabled:false} as Day);
                break;
              }else{
                this.Days.push({num:d.getDate(),enabled:true} as Day);
                break;
              }
            }*/
            d.setDate(d.getDate() + 1);
        }
        // добить пустыми ячейками, если нужно
        if (this.getDay(d) != 0) {
            for (var i = this.getDay(d); i < 7; i++) {
                this.Days.push({ num: '', enabled: true });
            }
        }
        console.log(this.Days);
    };
    DatepickComponent.prototype.getDay = function (date) {
        var day = date.getDay();
        if (day == 0)
            day = 7;
        return day - 1;
    };
    DatepickComponent.prototype.selectDay = function (day) {
        if (day.enabled) {
            this.selectedDay = day;
            this.onSelectDay.emit(day);
        }
    };
    DatepickComponent.prototype.next = function () {
    };
    DatepickComponent.prototype.prev = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatepickComponent.prototype, "onSelectDay", void 0);
    DatepickComponent = __decorate([
        core_1.Component({
            selector: 'datepick',
            templateUrl: 'app/datepicker.component.html',
            styleUrls: ['app/datepicker.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickComponent);
    return DatepickComponent;
}());
exports.DatepickComponent = DatepickComponent;
//# sourceMappingURL=datepicker.component.js.map