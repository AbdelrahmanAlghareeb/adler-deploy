(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"4lzg":function(e,o,n){"use strict";n.d(o,"a",function(){return x});class t{}class s{}var c=n("fXoL"),r=n("5iNH"),i=n("dJ3e"),a=n("tyNb"),b=n("ofXK"),l=n("3Pt+"),u=n("zFJ7");function m(e,o){if(1&e&&(c.Ob(0),c.Qb(1,"p",23),c.Hc(2," Correction date "),c.Pb(),c.Qb(3,"span",24),c.Hc(4),c.Pb(),c.Nb()),2&e){const e=c.bc();c.yb(4),c.Ic(e.GetDateFormated(null==e.homeworkInstance?null:e.homeworkInstance.correctionDate))}}function h(e,o){if(1&e&&(c.Ob(0),c.Qb(1,"p",23),c.Hc(2," Submition date "),c.Pb(),c.Qb(3,"span",24),c.Hc(4),c.Pb(),c.Nb()),2&e){const e=c.bc();c.yb(4),c.Ic(e.GetDateFormated(null==e.homeworkInstance?null:e.homeworkInstance.submitionDate))}}function d(e,o){if(1&e&&(c.Ob(0),c.Qb(1,"p",23),c.Hc(2," Due date "),c.Pb(),c.Qb(3,"span",24),c.Hc(4),c.Pb(),c.Nb()),2&e){const e=c.bc();c.yb(4),c.Ic(e.GetDateFormated(null==e.homeworkInstance?null:e.homeworkInstance.dueDate))}}function w(e,o){if(1&e&&(c.Qb(0,"span",28),c.Hc(1),c.Pb()),2&e){const e=c.bc(2);c.yb(1),c.Jc(" bonus Points : ",null==e.homeworkInstance?null:e.homeworkInstance.bonusPoints," ")}}function k(e,o){if(1&e&&(c.Qb(0,"span"),c.Qb(1,"span",25),c.Hc(2),c.Pb(),c.Qb(3,"span"),c.Hc(4," / "),c.Pb(),c.Qb(5,"span",26),c.Hc(6),c.Pb(),c.Fc(7,w,2,1,"span",27),c.Pb()),2&e){const e=c.bc();c.yb(2),c.Jc(" ",e.homeworkInstance.points,""),c.yb(4),c.Jc(" ",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.points," Points"),c.yb(1),c.ic("ngIf",1==(null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.bonusPointsStatus))}}function f(e,o){if(1&e&&(c.Qb(0,"span"),c.Qb(1,"span",26),c.Hc(2),c.Pb(),c.Pb()),2&e){const e=c.bc();c.yb(2),c.Jc(" Homework Points : ",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.points," ")}}function I(e,o){if(1&e){const e=c.Rb();c.Qb(0,"textarea",29),c.Xb("ngModelChange",function(o){return c.yc(e),c.bc().homeWorkSubmission.text=o}),c.Hc(1,"                  "),c.Pb()}if(2&e){const e=c.bc();c.ic("ngModel",e.homeWorkSubmission.text)("rows",10)("cols",34)("disabled","Corrected"===e.homeworkInstance.status||"Solved"===e.homeworkInstance.status)}}function p(e,o){1&e&&(c.Qb(0,"span"),c.Hc(1," Your homework is pending correction... "),c.Pb())}function g(e,o){if(1&e&&(c.Qb(0,"span",30),c.Hc(1),c.Pb()),2&e){const e=o.$implicit;c.ic("ngClass",e.class),c.yb(1),c.Ic(e.char)}}function P(e,o){if(1&e){const e=c.Rb();c.Qb(0,"div"),c.Qb(1,"button",31),c.Xb("click",function(){return c.yc(e),c.bc().submitHomeWork(1)}),c.Hc(2," Save "),c.Pb(),c.Qb(3,"button",32),c.Xb("click",function(){return c.yc(e),c.bc().submitHomeWork(2)}),c.Hc(4," Submit "),c.Lb(5,"i",33),c.Pb(),c.Pb()}}function y(e,o){if(1&e&&(c.Qb(0,"span"),c.Hc(1),c.Pb()),2&e){const e=c.bc(2);c.yb(1),c.Kc(" Bonus Points : \xa0",null==e.homeworkInstance?null:e.homeworkInstance.bonusPoints,"/ ",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.bonusPoints," Points ")}}function Q(e,o){if(1&e){const e=c.Rb();c.Qb(0,"div"),c.Qb(1,"div",34),c.Qb(2,"span",35),c.Hc(3,"Teacher Comments :"),c.Pb(),c.Fc(4,y,2,2,"span",10),c.Pb(),c.Qb(5,"div",36),c.Qb(6,"div",16),c.Qb(7,"textarea",37),c.Xb("ngModelChange",function(o){return c.yc(e),c.bc().homeworkInstance.comment=o}),c.Pb(),c.Pb(),c.Pb(),c.Pb()}if(2&e){const e=c.bc();c.yb(4),c.ic("ngIf",1==(null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.bonusPointsStatus)),c.yb(3),c.ic("rows",5)("cols",34)("ngModel",e.homeworkInstance.comment)}}const v=n("v2jn");let x=(()=>{class e{constructor(e,o,n,c,r){this.studentHomeworkService=e,this.authService=o,this.alertService=n,this.router=c,this.activatedRoute=r,this.homeworkInstance=new s,this.homeWorkSubmission=new t,this.correctionText=[]}ngOnInit(){this.authService.userData$.subscribe(e=>{this.userData=e}),this.getHomeworkId(),this.gitHomeworkInstancesById()}getHomeworkId(){this.homeworkId=this.activatedRoute.snapshot.params.homework_ID}diffText(){this.homeworkInstance.text&&this.homeworkInstance.solution&&v.diffWords(this.homeworkInstance.text,this.homeworkInstance.solution).forEach(e=>{this.correctionText.push({char:e.value,status:e.added?3:e.removed?2:1,class:e.added?"added":e.removed?"removed":"neutral"})})}gitHomeworkInstancesById(){this.studentHomeworkService.GetHomeworkSubmitionById(this.homeworkId).subscribe(e=>{this.homeworkInstance=e,this.homeWorkSubmission.text=this.homeworkInstance.text,this.diffText()})}GetDateFormated(e){return new Date(e).getMonth()+1+"/"+new Date(e).getDate()+"/"+new Date(e).getFullYear()+" "+new Date(e).getHours()+":"+new Date(e).getMinutes()+":"+new Date(e).getSeconds()}submitHomeWork(e){if(!this.homeWorkSubmission.text)return this.alertService.newAlert("error","Please Write you answer first");let o="";this.homeWorkSubmission.studentId=this.userData.id,this.homeWorkSubmission.id=this.homeworkInstance.id,1===e?(this.homeWorkSubmission.status=1,o="Homework saved as draft"):(o="Homework submitted successfully",this.homeWorkSubmission.status=2),this.studentHomeworkService.SubmitHomeWorkForStudent(this.homeWorkSubmission).subscribe(e=>{this.alertService.newAlert("success",o),this.router.navigate(["student/homework"])})}}return e.\u0275fac=function(o){return new(o||e)(c.Kb(r.a),c.Kb(i.c),c.Kb(i.a),c.Kb(a.c),c.Kb(a.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-homework-details"]],decls:38,vars:17,consts:[[1,"Progress","container"],[1,"page-title"],[1,"text-primary","font-weight-bold","mt-4","mb-4"],[1,"lesson-Q"],[1,"card"],[1,"card-body","p-0"],[1,"Q-title","pt-3","text-white","position-relative","rounded-top"],[1,"lesson-address","my-auto","position-absolute","ml-4","font-weight-bold"],[1,"date","ml-3"],[1,"due-date-address","position-absolute","mr-1","my-auto","font-weight-bold"],[4,"ngIf"],[1,"row","p-3","question","m-0","justify-content-center"],[1,"Answer-sec","shadow","bg-white","col-md-8","col","pb-2"],[1,"Q-head","pt-3","pb-2"],[1,"A-instructions","d-flex","justify-content-between",2,"font-size","12px","opacity","0.7"],[1,"row","mt-3"],[1,"col"],["autocomplete","off","pInputTextarea","","autoResize","autoResize","placeholder","Write Your Answer ..","class","rounded p-3 ml-1 col",3,"ngModel","rows","cols","disabled","ngModelChange",4,"ngIf"],[1,"diff-wrapper","p-3","mb-3","border","text-center"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"info-flag","d-flex","justify-content-end","text-black-50"],[1,"fas","fa-info-circle"],[1,"fas","fa-flag","ml-2"],[1,"d-inline",2,"opacity","0.7","font-size","12px"],[1,"due-date","mx-3",2,"font-size","14px"],[1,"text-success","font-weight-bold"],[1,"font-weight-bold"],["class","font-weight-bold","style","margin-left: 10px",4,"ngIf"],[1,"font-weight-bold",2,"margin-left","10px"],["autocomplete","off","pInputTextarea","","autoResize","autoResize","placeholder","Write Your Answer ..",1,"rounded","p-3","ml-1","col",3,"ngModel","rows","cols","disabled","ngModelChange"],[3,"ngClass"],[1,"btn","btn-outline-secondary","mr-3","px-5","rounded-pill",3,"click"],["type","submit",1,"btn","adler-btn","my-3","px-5","rounded-pill",3,"click"],[1,"fa","fa-arrow-right","ml-3"],[1,"A-instructions","d-flex","justify-content-between","mt-4",2,"font-size","12px"],[1,"Q-head","h2"],[1,"row","mt-2"],["autocomplete","off","disabled","true","pInputTextarea","","autoResize","autoResize",1,"rounded","p-3","ml-1","col","mb-3",3,"rows","cols","ngModel","ngModelChange"]],template:function(e,o){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"h1",2),c.Hc(3),c.Pb(),c.Pb(),c.Qb(4,"div",3),c.Qb(5,"div",4),c.Qb(6,"div",5),c.Qb(7,"div",6),c.Qb(8,"div",7),c.Hc(9),c.Qb(10,"span",8),c.Hc(11),c.cc(12,"date"),c.Pb(),c.Pb(),c.Qb(13,"div",9),c.Fc(14,m,5,1,"ng-container",10),c.Fc(15,h,5,1,"ng-container",10),c.Fc(16,d,5,1,"ng-container",10),c.Pb(),c.Pb(),c.Qb(17,"div",11),c.Qb(18,"div",12),c.Qb(19,"div"),c.Qb(20,"h2",13),c.Hc(21),c.Pb(),c.Qb(22,"div",14),c.Fc(23,k,8,3,"span",10),c.Fc(24,f,3,1,"span",10),c.Qb(25,"span"),c.Hc(26),c.Pb(),c.Pb(),c.Qb(27,"div",15),c.Qb(28,"div",16),c.Fc(29,I,2,4,"textarea",17),c.Qb(30,"div",18),c.Fc(31,p,2,0,"span",10),c.Fc(32,g,2,2,"span",19),c.Pb(),c.Pb(),c.Pb(),c.Qb(33,"div",20),c.Lb(34,"i",21),c.Lb(35,"i",22),c.Pb(),c.Fc(36,P,6,0,"div",10),c.Pb(),c.Fc(37,Q,8,4,"div",10),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.yb(3),c.Jc(" Home work for Lesson ",null==o.homeworkInstance||null==o.homeworkInstance.homework||null==o.homeworkInstance.homework.lessonInstance?null:o.homeworkInstance.homework.lessonInstance.serial," "),c.yb(6),c.Jc(" ",null==o.homeworkInstance||null==o.homeworkInstance.homework||null==o.homeworkInstance.homework.lessonInstance?null:o.homeworkInstance.homework.lessonInstance.lessonDefinition," "),c.yb(2),c.Ic(c.dc(12,15,null==o.homeworkInstance||null==o.homeworkInstance.homework?null:o.homeworkInstance.homework.createdDate)),c.yb(3),c.ic("ngIf",o.homeworkInstance.correctionDate),c.yb(1),c.ic("ngIf",o.homeworkInstance.submitionDate),c.yb(1),c.ic("ngIf",o.homeworkInstance.dueDate),c.yb(5),c.Jc(" ",null==o.homeworkInstance||null==o.homeworkInstance.homework?null:o.homeworkInstance.homework.text," "),c.yb(2),c.ic("ngIf","Corrected"===o.homeworkInstance.status),c.yb(1),c.ic("ngIf","Corrected"!==o.homeworkInstance.status),c.yb(2),c.Jc("Minimum no. of characters is ",null==o.homeworkInstance||null==o.homeworkInstance.homework?null:o.homeworkInstance.homework.minCharacters," "),c.yb(3),c.ic("ngIf","Corrected"!==o.homeworkInstance.status),c.yb(2),c.ic("ngIf","Solved"===o.homeworkInstance.status),c.yb(1),c.ic("ngForOf",o.correctionText),c.yb(4),c.ic("ngIf","Corrected"!==o.homeworkInstance.status&&"Solved"!==o.homeworkInstance.status),c.yb(1),c.ic("ngIf","Corrected"==o.homeworkInstance.status))},directives:[b.m,b.l,l.b,u.a,l.p,l.s,b.k],pipes:[b.f],styles:[".Q-title[_ngcontent-%COMP%]{background-color:#2c3e90!important;height:58px}.date[_ngcontent-%COMP%]{opacity:.7;font-size:12px}.due-date-address[_ngcontent-%COMP%]{right:5px}.question[_ngcontent-%COMP%]{background-color:#f4f8fc}.Q-head[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-align:left}.Answer-sec[_ngcontent-%COMP%], .Q-head[_ngcontent-%COMP%]{font-family:Montserrat}.Answer-sec[_ngcontent-%COMP%]{border-radius:16px;font-size:14px}.diff-wrapper[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.0784313725490196)}.diff-wrapper[_ngcontent-%COMP%]   .removed[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--red)}.diff-wrapper[_ngcontent-%COMP%]   .added[_ngcontent-%COMP%]{color:var(--green)}"]}),e})()}}]);