(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+3RB":function(t,e,o){"use strict";o.r(e),o.d(e,"HomeworkListModule",function(){return O});var n=o("ofXK"),r=o("PCNd"),i=o("tyNb"),s=o("4lzg"),a=o("fXoL"),l=o("WR8Z"),c=o("dJ3e"),b=o("3Pt+"),u=o("zFJ7"),d=o("Ks7X");function m(t,e){if(1&t&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Correction date "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&t){const t=a.bc();a.yb(4),a.Ic(t.GetDateFormated(null==t.homeworkdetails?null:t.homeworkdetails.correctionDate))}}function h(t,e){if(1&t&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Submition date "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&t){const t=a.bc();a.yb(4),a.Ic(t.GetDateFormated(null==t.homeworkdetails?null:t.homeworkdetails.submitionDate))}}function p(t,e){if(1&t&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Due date "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&t){const t=a.bc();a.yb(4),a.Ic(t.GetDateFormated(null==t.homeworkdetails?null:t.homeworkdetails.dueDate))}}function g(t,e){if(1&t&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Due Time "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&t){const t=a.bc();a.yb(4),a.Ic(t.homeworkdetails.dueDate?t.dueTime:"")}}let w=(()=>{class t{constructor(t,e,o,n,r){this.teacherService=t,this.activatedRoute=e,this.authService=o,this.alertService=n,this.router=r,this.studentAnswer="",this.comment="",this.earnedPoints=0,this.bonusPoints=0,this.activatedRoute.queryParams.subscribe(t=>{this.homeworkId=t.homeworkId})}ngOnInit(){this.teacherService.getHomeworkById(this.homeworkId).subscribe(t=>{this.homeworkdetails=t;let e=new Date(this.homeworkdetails.dueDate);this.dueTime=e.getHours(),this.homeworkdetails&&(this.studentAnswer=this.homeworkdetails.text,this.teacherCorrection=this.homeworkdetails.text)}),this.authService.userData$.subscribe(t=>{this.teacherId=t.id})}GetDateFormated(t){return new Date(t).getMonth()+1+"-"+new Date(t).getDate()+"-"+new Date(t).getFullYear()}getHomeWorkSubmitionObject(t){this.homeworkSubmition={id:this.homeworkId,solution:t,correctionTeacherId:this.teacherId,points:this.earnedPoints,comment:this.comment,bonus:this.bonusPoints},this.submitHomeworkCorrection(this.homeworkSubmition)}submitHomeworkCorrection(t){this.teacherService.submitHomeworkCorrection(t).subscribe(t=>{this.alertService.newAlert("success","Correction Submitted Successfuly"),this.router.navigate(["/teacher/homework-list"])})}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(l.a),a.Kb(i.a),a.Kb(c.c),a.Kb(c.a),a.Kb(i.c))},t.\u0275cmp=a.Eb({type:t,selectors:[["correct-homework"]],decls:62,vars:25,consts:[[1,"container","correct-homework"],[1,"lesson-Q","mt-5"],[1,"card","mb-5"],[1,"card-body","p-0"],[1,"Q-title","pt-3","text-white","position-relative","rounded-top"],[1,"lesson-address","my-auto","position-absolute","ml-4","font-weight-bold"],[1,"d-inline"],[1,"date","ml-3"],[1,"due-date-address","position-absolute","mr-1","my-auto","font-weight-bold"],[4,"ngIf"],[1,"row","p-3","question","m-0","justify-content-center"],[1,"Answer-sec","shadow","bg-white","col-md-5","mr-5"],[1,"Q-head","pt-3","pb-2"],[1,"A-instructions","d-flex","justify-content-between",2,"font-size","12px","opacity","0.7"],[1,"row","mt-3"],[1,"col"],["autocomplete","off","readonly","","pInputTextarea","","autoResize","autoResize",1,"rounded","p-3","ml-1","col",2,"background-color","ghostwhite",3,"ngModel","rows","cols","ngModelChange"],[1,"info-flag","d-flex","justify-content-end","text-black-50"],[1,"fas","fa-info-circle"],[1,"fas","fa-flag","ml-2"],[1,"Answer-sec","shadow","bg-white","col-md-5"],["autocomplete","off","pInputTextarea","","autoResize","autoResize",1,"rounded","ml-1","col",3,"minlength","rows","cols","ngModel","ngModelChange"],[1,"row","mt-2"],[1,"col-lg-6","col-md-6","col-sm-6"],[1,"A-instructions","d-flex","justify-content-between",2,"font-size","12px","opacity","0.7","margin-bottom","10px"],["placeholder","Points",1,"ml-1",3,"ngModel","min","max","ngModelChange"],["placeholder","bonus",1,"ml-1",3,"ngModel","min","max","ngModelChange"],[1,"col-lg-12","col-md-12","col-sm-12"],["autocomplete","off","placeholder","Comment","pInputTextarea","","autoResize","autoResize",1,"rounded","ml-1","mt-2","col",3,"ngModel","ngModelChange"],["type","submit",1,"btn","adler-btn","my-3","px-5","rounded-pill",3,"click"],[1,"fa","fa-arrow-right","ml-3"],[1,"d-inline",2,"opacity","0.7","font-size","12px"],[1,"due-date","mx-3",2,"font-size","14px"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"div",4),a.Qb(5,"div",5),a.Qb(6,"p",6),a.Hc(7),a.Pb(),a.Hc(8),a.Qb(9,"span",7),a.Hc(10),a.cc(11,"date"),a.Pb(),a.Qb(12,"span",7),a.Hc(13),a.Pb(),a.Pb(),a.Qb(14,"div",8),a.Fc(15,m,5,1,"ng-container",9),a.Fc(16,h,5,1,"ng-container",9),a.Fc(17,p,5,1,"ng-container",9),a.Fc(18,g,5,1,"ng-container",9),a.Pb(),a.Pb(),a.Qb(19,"div",10),a.Qb(20,"div",11),a.Qb(21,"div"),a.Lb(22,"h2",12),a.Qb(23,"div",13),a.Qb(24,"span"),a.Hc(25," Student Answer"),a.Pb(),a.Qb(26,"span"),a.Hc(27,"Readonly "),a.Pb(),a.Pb(),a.Qb(28,"div",14),a.Qb(29,"div",15),a.Qb(30,"textarea",16),a.Xb("ngModelChange",function(t){return e.studentAnswer=t}),a.Pb(),a.Pb(),a.Pb(),a.Qb(31,"div",17),a.Lb(32,"i",18),a.Lb(33,"i",19),a.Pb(),a.Pb(),a.Pb(),a.Qb(34,"div",20),a.Qb(35,"div"),a.Lb(36,"h2",12),a.Qb(37,"div",13),a.Qb(38,"span"),a.Hc(39," Correction"),a.Pb(),a.Lb(40,"span"),a.Qb(41,"span"),a.Hc(42),a.Pb(),a.Pb(),a.Qb(43,"div",14),a.Qb(44,"div",15),a.Qb(45,"textarea",21),a.Xb("ngModelChange",function(t){return e.teacherCorrection=t}),a.Pb(),a.Pb(),a.Pb(),a.Qb(46,"div",22),a.Qb(47,"div",23),a.Qb(48,"div",24),a.Qb(49,"span"),a.Hc(50," points"),a.Pb(),a.Pb(),a.Qb(51,"p-inputNumber",25),a.Xb("ngModelChange",function(t){return e.earnedPoints=t}),a.Pb(),a.Pb(),a.Qb(52,"div",23),a.Qb(53,"div",24),a.Qb(54,"span"),a.Hc(55," bonus"),a.Pb(),a.Pb(),a.Qb(56,"p-inputNumber",26),a.Xb("ngModelChange",function(t){return e.bonusPoints=t}),a.Pb(),a.Pb(),a.Qb(57,"div",27),a.Qb(58,"textarea",28),a.Xb("ngModelChange",function(t){return e.comment=t}),a.Pb(),a.Pb(),a.Pb(),a.Qb(59,"button",29),a.Xb("click",function(){return e.getHomeWorkSubmitionObject(e.teacherCorrection)}),a.Hc(60," Submit "),a.Lb(61,"i",30),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.yb(7),a.Jc("Name: ",(null==e.homeworkdetails||null==e.homeworkdetails.student?null:e.homeworkdetails.student.firstName)+" "+(null==e.homeworkdetails||null==e.homeworkdetails.student?null:e.homeworkdetails.student.lastName),""),a.yb(1),a.Jc(" ",null==e.homeworkdetails||null==e.homeworkdetails.homework||null==e.homeworkdetails.homework.lessonInstance?null:e.homeworkdetails.homework.lessonInstance.lessonDefinition," "),a.yb(2),a.Ic(a.dc(11,23,null==e.homeworkdetails?null:e.homeworkdetails.dueDate)),a.yb(3),a.Ic(null==e.homeworkdetails?null:e.homeworkdetails.status),a.yb(2),a.ic("ngIf",null==e.homeworkdetails?null:e.homeworkdetails.correctionDate),a.yb(1),a.ic("ngIf",null==e.homeworkdetails?null:e.homeworkdetails.submitionDate),a.yb(1),a.ic("ngIf",null==e.homeworkdetails?null:e.homeworkdetails.dueDate),a.yb(1),a.ic("ngIf",null==e.homeworkdetails?null:e.homeworkdetails.dueDate),a.yb(12),a.ic("ngModel",e.studentAnswer)("rows",15)("cols",34),a.yb(12),a.Jc("Minimum no. of characters is ",null==e.homeworkdetails||null==e.homeworkdetails.homework?null:e.homeworkdetails.homework.minCharacters," "),a.yb(3),a.ic("minlength",null==e.homeworkdetails||null==e.homeworkdetails.homework?null:e.homeworkdetails.homework.minCharacters)("rows",10)("cols",34)("ngModel",e.teacherCorrection),a.yb(6),a.ic("ngModel",e.earnedPoints)("min",0)("max",100),a.yb(5),a.ic("ngModel",e.bonusPoints)("min",0)("max",100),a.yb(2),a.ic("ngModel",e.comment))},directives:[n.m,b.b,u.a,b.p,b.s,b.l,d.a],pipes:[n.f],styles:[".Q-title[_ngcontent-%COMP%]{background-color:#2c3e90!important;height:58px}.date[_ngcontent-%COMP%]{opacity:.7;font-size:12px}.due-date-address[_ngcontent-%COMP%]{right:5px}.question[_ngcontent-%COMP%]{background-color:#f4f8fc}.Q-head[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-align:left}.Answer-sec[_ngcontent-%COMP%], .Q-head[_ngcontent-%COMP%]{font-family:Montserrat}.Answer-sec[_ngcontent-%COMP%]{border-radius:16px;font-size:14px}"]}),t})();var f=o("arFO"),k=o("rEr+"),P=o("7zfz"),I=o("6t4m");function v(t,e){1&t&&(a.Qb(0,"tr"),a.Qb(1,"th",14),a.Hc(2," Student "),a.Lb(3,"p-sortIcon",15),a.Pb(),a.Qb(4,"th",16),a.Hc(5," GroupInstance "),a.Lb(6,"p-sortIcon",17),a.Pb(),a.Qb(7,"th",18),a.Hc(8," Submition Date "),a.Lb(9,"p-sortIcon",19),a.Pb(),a.Qb(10,"th",20),a.Hc(11," Lesson "),a.Lb(12,"p-sortIcon",21),a.Pb(),a.Qb(13,"th",22),a.Hc(14," Homework Status "),a.Lb(15,"p-sortIcon",23),a.Pb(),a.Qb(16,"th",24),a.Hc(17," Homework Points "),a.Lb(18,"p-sortIcon",25),a.Pb(),a.Qb(19,"th",26),a.Hc(20,"Actions"),a.Pb(),a.Pb())}function Q(t,e){if(1&t){const t=a.Rb();a.Qb(0,"a",29),a.Xb("click",function(){a.yc(t);const e=a.bc().$implicit;return a.bc().correctHomework(e)}),a.Lb(1,"span",30),a.Pb()}}function H(t,e){if(1&t){const t=a.Rb();a.Qb(0,"a",29),a.Xb("click",function(){a.yc(t);const e=a.bc().$implicit;return a.bc().correctHomework(e)}),a.Lb(1,"span",31),a.Pb()}}const y=function(){return{Corrected:"status-Corrected ",Missed:"status-Missed ",Solved:"status-Solved ",Pending:"status-Pending "}};function C(t,e){if(1&t&&(a.Qb(0,"tr"),a.Qb(1,"td"),a.Hc(2),a.Pb(),a.Qb(3,"td"),a.Hc(4),a.Pb(),a.Qb(5,"td"),a.Hc(6),a.cc(7,"date"),a.Pb(),a.Qb(8,"td"),a.Hc(9),a.Pb(),a.Qb(10,"td"),a.Qb(11,"div",27),a.Hc(12),a.Pb(),a.Pb(),a.Qb(13,"td"),a.Hc(14),a.Pb(),a.Qb(15,"td"),a.Fc(16,Q,2,0,"a",28),a.Fc(17,H,2,0,"a",28),a.Pb(),a.Pb()),2&t){const t=e.$implicit;a.yb(2),a.Ic(null==t?null:t.student),a.yb(2),a.Ic(null==t?null:t.groupInstance),a.yb(2),a.Ic(a.ec(7,9,null==t?null:t.submitionDate,"MMM dd yyyy")),a.yb(3),a.Ic(null==t?null:t.lessonInstance),a.yb(2),a.ic("ngClass",a.lc(12,y)[t.status]),a.yb(1),a.Jc(" ",null==t?null:t.status," "),a.yb(2),a.Ic(null==t?null:t.points),a.yb(2),a.ic("ngIf","Corrected"!==(null==t?null:t.status)),a.yb(1),a.ic("ngIf","Corrected"==(null==t?null:t.status))}}function S(t,e){if(1&t&&(a.Qb(0,"div",32),a.Hc(1),a.Pb()),2&t){const t=a.bc();a.yb(1),a.Jc(" In total there are ",t.homeworkList?t.TotalCount:0," homework Submissions. ")}}function L(t,e){}const M=function(){return{width:"100%"}},F=function(){return["status","student","homework.bonusPoints","homework.points","lessonInstance","homeworkStatus","homeworkPoints"]},x=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.teacherService=e,this.filterHomeWorkListForm=new b.h({groupInstanceId:new b.f(""),status:new b.f("")}),this.groupInstanceArr=[],this.statusArr=[],this.htmlStatusArr=[],this.filterObj={},this.pageNumber=1,this.pageSize=10}ngOnInit(){this.getAllHomeworkSubmitions(),this.getAllGroupInstance(),this.getAllHWStatus()}correctHomework(t){const e=t.id;"Corrected"==t.status?this.router.navigate(["/teacher/homework-list/homework-details",e]):this.router.navigate(["/teacher/homework-list/correct-homework"],{queryParams:{homeworkId:e}})}getAllHomeworkSubmitions(t,e,o){!this.filterHomeWorkListForm.value.groupInstanceId||""===this.filterHomeWorkListForm.value.groupInstanceId||this.filterHomeWorkListForm.value.status&&""!=this.filterHomeWorkListForm.value.status?this.filterHomeWorkListForm.value.groupInstanceId&&""!=this.filterHomeWorkListForm.value.groupInstanceId||!this.filterHomeWorkListForm.value.status||""===this.filterHomeWorkListForm.value.status?this.filterHomeWorkListForm.value.groupInstanceId&&""!==this.filterHomeWorkListForm.value.groupInstanceId&&this.filterHomeWorkListForm.value.status&&""!==this.filterHomeWorkListForm.value.status?this.filterObj={GroupInstanceId:this.filterHomeWorkListForm.value.groupInstanceId,Status:this.statusArr.indexOf(this.filterHomeWorkListForm.value.status),TeacherId:localStorage.getItem("id")}:(this.filterHomeWorkListForm.value.groupInstanceId&&""!=this.filterHomeWorkListForm.value.groupInstanceId||!this.filterHomeWorkListForm.value.status)&&""===this.filterHomeWorkListForm.value.status||(this.filterObj={}):this.filterObj={Status:this.statusArr.indexOf(this.filterHomeWorkListForm.value.status),TeacherId:localStorage.getItem("id")}:this.filterObj={GroupInstanceId:this.filterHomeWorkListForm.value.groupInstanceId,TeacherId:localStorage.getItem("id")},this.getHomeworkSubmitions()}getHomeworkSubmitions(){this.teacherService.getHomeworkSubmitions(this.filterObj).subscribe(t=>{this.homeworkList=t})}getAllHWStatus(){this.teacherService.getAllHomeWorkStatus().subscribe(t=>{this.statusArr=t,t.forEach(t=>{this.htmlStatusArr.push({statusName:t})})})}getAllGroupInstance(){this.teacherService.getAllGroupInstance().subscribe(t=>{this.groupInstanceArr=t.data,this.TotalCount=t.count})}filter(t){}onPageChange(t){this.pageNumber=t.page+1,this.getHomeworkSubmitions()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(i.c),a.Kb(l.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["homework-list"]],decls:15,vars:19,consts:[[3,"formGroup"],[1,"row","ddl-div","container"],[1,"col-lg-4","col-md-4","col-sm-4"],["placeholder","Select group","formControlName","groupInstanceId","optionLabel","serial","optionValue","id",3,"options","onChange"],["placeholder","Select statue","formControlName","status","optionLabel","statusName","optionValue","statusName",3,"options","onChange"],[1,"container","pt-5","pb-5"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"responsive","value","rows","paginator","globalFilterFields","rowHover","showCurrentPageReport"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["pTemplate","emptymessage"],[3,"rows","totalRecords","onPageChange"],["pSortableColumn","student"],["field","student"],["pSortableColumn","groupInstance"],["field","groupInstance"],["pSortableColumn","submitionDate"],["field","submitionDate"],["pSortableColumn","lessonInstance"],["field","lessonInstance"],["pSortableColumn","homeworkStatus"],["field","homeworkStatus"],["pSortableColumn","homeworkPoints"],["field","homeworkPoints"],[2,"width","6rem"],[1,"text-center","m-3","rounded-pill",3,"ngClass"],["class","mr-2 mr-3 text-secondary","title","correct student homework",3,"click",4,"ngIf"],["title","correct student homework",1,"mr-2","mr-3","text-secondary",3,"click"],[1,"p-button-icon","pi","pi-pencil","font-weight-bold"],[1,"p-button-icon","fas","fa-eye","font-weight-bold"],[1,"p-d-flex","p-ai-center","p-jc-between"]],template:function(t,e){1&t&&(a.Qb(0,"form",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"p-dropdown",3),a.Xb("onChange",function(){return e.getAllHomeworkSubmitions()}),a.Pb(),a.Pb(),a.Qb(4,"div",2),a.Qb(5,"p-dropdown",4),a.Xb("onChange",function(){return e.getAllHomeworkSubmitions()}),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"div",5),a.Qb(7,"div",6),a.Qb(8,"p-table",7,8),a.Fc(10,v,21,0,"ng-template",9),a.Fc(11,C,18,13,"ng-template",10),a.Fc(12,S,2,1,"ng-template",11),a.Fc(13,L,0,0,"ng-template",12),a.Pb(),a.Qb(14,"p-paginator",13),a.Xb("onPageChange",function(t){return e.onPageChange(t)}),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.ic("formGroup",e.filterHomeWorkListForm),a.yb(3),a.Dc(a.lc(16,M)),a.ic("options",e.groupInstanceArr),a.yb(2),a.Dc(a.lc(17,M)),a.ic("options",e.htmlStatusArr),a.yb(3),a.ic("responsive",!0)("value",e.homeworkList)("rows",10)("paginator",!1)("globalFilterFields",a.lc(18,F))("rowHover",!0)("showCurrentPageReport",!0),a.yb(6),a.ic("rows",e.pageSize)("totalRecords",e.TotalCount))},directives:[b.y,b.q,b.i,f.a,b.p,b.g,k.d,P.i,I.a,k.c,k.b,n.k,n.m],pipes:[n.f],styles:[".single-homework[_ngcontent-%COMP%]{border:1px solid #ddd;cursor:pointer;padding:3rem;margin-top:2rem}.status-Corrected[_ngcontent-%COMP%]{border-color:#207a04!important;background-color:rgba(50,213,9,.55);color:#207a04}.status-Missed[_ngcontent-%COMP%]{border-color:#f33!important;background-color:rgba(213,40,9,.55);color:#f33}.status-Solved[_ngcontent-%COMP%]{border-color:#2c3e90!important;background-color:rgba(9,91,213,.55);color:#2c3e90}.status-Pending[_ngcontent-%COMP%]{border-color:#d9a600!important;background-color:rgba(213,199,9,.55);color:#a78001}.ddl-div[_ngcontent-%COMP%]{margin-top:25px}"]}),t})()},{path:"correct-homework",component:w},{path:"homework-details/:homework_ID",component:s.a}];let A=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(x)],i.g]}),t})(),O=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[n.c,A,r.a]]}),t})()}}]);