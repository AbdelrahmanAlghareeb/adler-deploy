(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+3RB":function(e,t,o){"use strict";o.r(t),o.d(t,"HomeworkListModule",function(){return D});var r=o("ofXK"),n=o("PCNd"),s=o("tyNb"),i=o("4lzg"),a=o("fXoL"),c=o("WR8Z"),l=o("dJ3e"),u=o("3Pt+"),b=o("zFJ7"),d=o("Ks7X");function m(e,t){if(1&e&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Correction date "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&e){const e=a.bc();a.yb(4),a.Ic(e.GetDateFormated(null==e.homeworkdetails?null:e.homeworkdetails.correctionDate))}}function h(e,t){if(1&e&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Submition date "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&e){const e=a.bc();a.yb(4),a.Ic(e.GetDateFormated(null==e.homeworkdetails?null:e.homeworkdetails.submitionDate))}}function p(e,t){if(1&e&&(a.Ob(0),a.Qb(1,"p",31),a.Hc(2," Due date "),a.Pb(),a.Qb(3,"span",32),a.Hc(4),a.Pb(),a.Nb()),2&e){const e=a.bc();a.yb(4),a.Ic(e.GetDateFormated(null==e.homeworkdetails?null:e.homeworkdetails.dueDate))}}let g=(()=>{class e{constructor(e,t,o,r,n){this.teacherService=e,this.activatedRoute=t,this.authService=o,this.alertService=r,this.router=n,this.studentAnswer="",this.comment="",this.earnedPoints=0,this.bonusPoints=0,this.activatedRoute.queryParams.subscribe(e=>{this.homeworkId=e.homeworkId})}ngOnInit(){this.teacherService.getHomeworkById(this.homeworkId).subscribe(e=>{this.homeworkdetails=e;let t=new Date(this.homeworkdetails.dueDate);this.dueTime=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),this.homeworkdetails&&(this.studentAnswer=this.homeworkdetails.text,this.teacherCorrection=this.homeworkdetails.text)}),this.authService.userData$.subscribe(e=>{this.teacherId=e.id})}GetDateFormated(e){return new Date(e).getMonth()+1+"/"+new Date(e).getDate()+"/"+new Date(e).getFullYear()+" "+new Date(e).getHours()+":"+new Date(e).getMinutes()+":"+new Date(e).getSeconds()}getHomeWorkSubmitionObject(e){this.homeworkSubmition={id:this.homeworkId,solution:e,correctionTeacherId:this.teacherId,points:this.earnedPoints,comment:this.comment,bonus:this.bonusPoints},this.submitHomeworkCorrection(this.homeworkSubmition)}submitHomeworkCorrection(e){this.teacherService.submitHomeworkCorrection(e).subscribe(e=>{this.alertService.newAlert("success","Correction Submitted Successfuly"),this.router.navigate(["/teacher/homework-list"])})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(c.a),a.Kb(s.a),a.Kb(l.c),a.Kb(l.a),a.Kb(s.c))},e.\u0275cmp=a.Eb({type:e,selectors:[["correct-homework"]],decls:61,vars:24,consts:[[1,"container","correct-homework"],[1,"lesson-Q","mt-5"],[1,"card","mb-5"],[1,"card-body","p-0"],[1,"Q-title","pt-3","text-white","position-relative","rounded-top"],[1,"lesson-address","my-auto","position-absolute","ml-4","font-weight-bold"],[1,"d-inline"],[1,"date","ml-3"],[1,"due-date-address","position-absolute","mr-1","my-auto","font-weight-bold"],[4,"ngIf"],[1,"row","p-3","question","m-0","justify-content-center"],[1,"Answer-sec","shadow","bg-white","col-md-5","mr-5"],[1,"Q-head","pt-3","pb-2"],[1,"A-instructions","d-flex","justify-content-between",2,"font-size","12px","opacity","0.7"],[1,"row","mt-3"],[1,"col"],["autocomplete","off","readonly","","pInputTextarea","","autoResize","autoResize",1,"rounded","p-3","ml-1","col",2,"background-color","ghostwhite",3,"ngModel","rows","cols","ngModelChange"],[1,"info-flag","d-flex","justify-content-end","text-black-50"],[1,"fas","fa-info-circle"],[1,"fas","fa-flag","ml-2"],[1,"Answer-sec","shadow","bg-white","col-md-5"],["autocomplete","off","pInputTextarea","","autoResize","autoResize",1,"rounded","ml-1","col",3,"minlength","rows","cols","ngModel","ngModelChange"],[1,"row","mt-2"],[1,"col-lg-6","col-md-6","col-sm-6"],[1,"A-instructions","d-flex","justify-content-between",2,"font-size","12px","opacity","0.7","margin-bottom","10px"],["placeholder","Points",1,"ml-1",3,"ngModel","min","max","ngModelChange"],["placeholder","bonus",1,"ml-1",3,"ngModel","min","max","ngModelChange"],[1,"col-lg-12","col-md-12","col-sm-12"],["autocomplete","off","placeholder","Comment","pInputTextarea","","autoResize","autoResize",1,"rounded","ml-1","mt-2","col",3,"ngModel","ngModelChange"],["type","submit",1,"btn","adler-btn","my-3","px-5","rounded-pill",3,"click"],[1,"fa","fa-arrow-right","ml-3"],[1,"d-inline",2,"opacity","0.7","font-size","12px"],[1,"due-date","mx-3",2,"font-size","14px"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"div",4),a.Qb(5,"div",5),a.Qb(6,"p",6),a.Hc(7),a.Pb(),a.Hc(8),a.Qb(9,"span",7),a.Hc(10),a.cc(11,"date"),a.Pb(),a.Qb(12,"span",7),a.Hc(13),a.Pb(),a.Pb(),a.Qb(14,"div",8),a.Fc(15,m,5,1,"ng-container",9),a.Fc(16,h,5,1,"ng-container",9),a.Fc(17,p,5,1,"ng-container",9),a.Pb(),a.Pb(),a.Qb(18,"div",10),a.Qb(19,"div",11),a.Qb(20,"div"),a.Lb(21,"h2",12),a.Qb(22,"div",13),a.Qb(23,"span"),a.Hc(24," Student Answer"),a.Pb(),a.Qb(25,"span"),a.Hc(26,"Readonly "),a.Pb(),a.Pb(),a.Qb(27,"div",14),a.Qb(28,"div",15),a.Qb(29,"textarea",16),a.Xb("ngModelChange",function(e){return t.studentAnswer=e}),a.Pb(),a.Pb(),a.Pb(),a.Qb(30,"div",17),a.Lb(31,"i",18),a.Lb(32,"i",19),a.Pb(),a.Pb(),a.Pb(),a.Qb(33,"div",20),a.Qb(34,"div"),a.Lb(35,"h2",12),a.Qb(36,"div",13),a.Qb(37,"span"),a.Hc(38," Correction"),a.Pb(),a.Lb(39,"span"),a.Qb(40,"span"),a.Hc(41),a.Pb(),a.Pb(),a.Qb(42,"div",14),a.Qb(43,"div",15),a.Qb(44,"textarea",21),a.Xb("ngModelChange",function(e){return t.teacherCorrection=e}),a.Pb(),a.Pb(),a.Pb(),a.Qb(45,"div",22),a.Qb(46,"div",23),a.Qb(47,"div",24),a.Qb(48,"span"),a.Hc(49," points"),a.Pb(),a.Pb(),a.Qb(50,"p-inputNumber",25),a.Xb("ngModelChange",function(e){return t.earnedPoints=e}),a.Pb(),a.Pb(),a.Qb(51,"div",23),a.Qb(52,"div",24),a.Qb(53,"span"),a.Hc(54," bonus"),a.Pb(),a.Pb(),a.Qb(55,"p-inputNumber",26),a.Xb("ngModelChange",function(e){return t.bonusPoints=e}),a.Pb(),a.Pb(),a.Qb(56,"div",27),a.Qb(57,"textarea",28),a.Xb("ngModelChange",function(e){return t.comment=e}),a.Pb(),a.Pb(),a.Pb(),a.Qb(58,"button",29),a.Xb("click",function(){return t.getHomeWorkSubmitionObject(t.teacherCorrection)}),a.Hc(59," Submit "),a.Lb(60,"i",30),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(7),a.Jc("Name: ",(null==t.homeworkdetails||null==t.homeworkdetails.student?null:t.homeworkdetails.student.firstName)+" "+(null==t.homeworkdetails||null==t.homeworkdetails.student?null:t.homeworkdetails.student.lastName),""),a.yb(1),a.Jc(" ",null==t.homeworkdetails||null==t.homeworkdetails.homework||null==t.homeworkdetails.homework.lessonInstance?null:t.homeworkdetails.homework.lessonInstance.lessonDefinition," "),a.yb(2),a.Ic(a.dc(11,22,null==t.homeworkdetails?null:t.homeworkdetails.dueDate)),a.yb(3),a.Ic(null==t.homeworkdetails?null:t.homeworkdetails.status),a.yb(2),a.ic("ngIf",null==t.homeworkdetails?null:t.homeworkdetails.correctionDate),a.yb(1),a.ic("ngIf",null==t.homeworkdetails?null:t.homeworkdetails.submitionDate),a.yb(1),a.ic("ngIf",null==t.homeworkdetails?null:t.homeworkdetails.dueDate),a.yb(12),a.ic("ngModel",t.studentAnswer)("rows",15)("cols",34),a.yb(12),a.Jc("Minimum no. of characters is ",null==t.homeworkdetails||null==t.homeworkdetails.homework?null:t.homeworkdetails.homework.minCharacters," "),a.yb(3),a.ic("minlength",null==t.homeworkdetails||null==t.homeworkdetails.homework?null:t.homeworkdetails.homework.minCharacters)("rows",10)("cols",34)("ngModel",t.teacherCorrection),a.yb(6),a.ic("ngModel",t.earnedPoints)("min",0)("max",100),a.yb(5),a.ic("ngModel",t.bonusPoints)("min",0)("max",100),a.yb(2),a.ic("ngModel",t.comment))},directives:[r.m,u.b,b.a,u.p,u.s,u.l,d.a],pipes:[r.f],styles:[".Q-title[_ngcontent-%COMP%]{background-color:#2c3e90!important;height:58px}.date[_ngcontent-%COMP%]{opacity:.7;font-size:12px}.due-date-address[_ngcontent-%COMP%]{right:5px}.question[_ngcontent-%COMP%]{background-color:#f4f8fc}.Q-head[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-align:left}.Answer-sec[_ngcontent-%COMP%], .Q-head[_ngcontent-%COMP%]{font-family:Montserrat}.Answer-sec[_ngcontent-%COMP%]{border-radius:16px;font-size:14px}"]}),e})();var f=o("rEr+"),w=o("7zfz"),k=o("6t4m"),P=o("QGev"),I=o("arFO");function v(e,t){1&e&&(a.Qb(0,"label"),a.Hc(1,"Teacher Name"),a.Pb())}function H(e,t){if(1&e){const e=a.Rb();a.Ob(0),a.Qb(1,"div",12),a.Fc(2,v,2,0,"label",2),a.Qb(3,"div",13),a.Qb(4,"p-autoComplete",14),a.Xb("completeMethod",function(t){return a.yc(e),a.bc().searchTeacher(t)})("onSelect",function(){a.yc(e);const t=a.bc();return t.getTeacherGroup(t.filterHomeWorkListForm.controls.selectedTeacher.value.teacherId)}),a.Pb(),a.Pb(),a.Pb(),a.Nb()}if(2&e){const e=a.bc();a.yb(2),a.ic("ngIf",e.superVisorMode),a.yb(2),a.ic("suggestions",e.suggestedTeacher)("dropdown",!1)("forceSelection",!0)}}const Q=function(){return{width:"100%"}};function y(e,t){if(1&e){const e=a.Rb();a.Ob(0),a.Qb(1,"div",15),a.Qb(2,"p-dropdown",16),a.Xb("onChange",function(){return a.yc(e),a.bc().getAllHomeworkSubmitions()}),a.Pb(),a.Pb(),a.Qb(3,"div",15),a.Qb(4,"p-dropdown",17),a.Xb("onChange",function(){return a.yc(e),a.bc().getAllHomeworkSubmitions()}),a.Pb(),a.Pb(),a.Nb()}if(2&e){const e=a.bc();a.yb(2),a.Dc(a.lc(6,Q)),a.ic("options",e.groupInstanceArr),a.yb(2),a.Dc(a.lc(7,Q)),a.ic("options",e.htmlStatusArr)}}function C(e,t){1&e&&(a.Qb(0,"tr"),a.Qb(1,"th",18),a.Hc(2," Student "),a.Lb(3,"p-sortIcon",19),a.Pb(),a.Qb(4,"th",20),a.Hc(5," GroupInstance "),a.Lb(6,"p-sortIcon",21),a.Pb(),a.Qb(7,"th",22),a.Hc(8," Submition Date "),a.Lb(9,"p-sortIcon",23),a.Pb(),a.Qb(10,"th",24),a.Hc(11," Lesson "),a.Lb(12,"p-sortIcon",25),a.Pb(),a.Qb(13,"th",26),a.Hc(14," Homework Status "),a.Lb(15,"p-sortIcon",27),a.Pb(),a.Qb(16,"th",28),a.Hc(17," Homework Points "),a.Lb(18,"p-sortIcon",29),a.Pb(),a.Qb(19,"th",30),a.Hc(20,"Actions"),a.Pb(),a.Pb())}function S(e,t){if(1&e){const e=a.Rb();a.Qb(0,"a",33),a.Xb("click",function(){a.yc(e);const t=a.bc().$implicit;return a.bc().correctHomework(t)}),a.Lb(1,"span",34),a.Pb()}}function M(e,t){if(1&e){const e=a.Rb();a.Qb(0,"a",33),a.Xb("click",function(){a.yc(e);const t=a.bc().$implicit;return a.bc().correctHomework(t)}),a.Lb(1,"span",35),a.Pb()}}const F=function(){return{Corrected:"status-Corrected ",Missed:"status-Missed ",Solved:"status-Solved ",Pending:"status-Pending "}};function L(e,t){if(1&e&&(a.Qb(0,"tr"),a.Qb(1,"td"),a.Hc(2),a.Pb(),a.Qb(3,"td"),a.Hc(4),a.Pb(),a.Qb(5,"td"),a.Hc(6),a.cc(7,"date"),a.Pb(),a.Qb(8,"td"),a.Hc(9),a.Pb(),a.Qb(10,"td"),a.Qb(11,"div",31),a.Hc(12),a.Pb(),a.Pb(),a.Qb(13,"td"),a.Hc(14),a.Pb(),a.Qb(15,"td"),a.Fc(16,S,2,0,"a",32),a.Fc(17,M,2,0,"a",32),a.Pb(),a.Pb()),2&e){const e=t.$implicit;a.yb(2),a.Ic(null==e?null:e.student),a.yb(2),a.Ic(null==e?null:e.groupInstance),a.yb(2),a.Ic(a.ec(7,9,null==e?null:e.submitionDate,"MMM dd yyyy")),a.yb(3),a.Ic(null==e?null:e.lessonInstance),a.yb(2),a.ic("ngClass",a.lc(12,F)[e.status]),a.yb(1),a.Jc(" ",null==e?null:e.status," "),a.yb(2),a.Ic(null==e?null:e.points),a.yb(2),a.ic("ngIf","Corrected"!==(null==e?null:e.status)),a.yb(1),a.ic("ngIf","Corrected"==(null==e?null:e.status))}}function x(e,t){if(1&e&&(a.Qb(0,"div",36),a.Hc(1),a.Pb()),2&e){const e=a.bc();a.yb(1),a.Jc(" In total there are ",e.homeworkList?e.TotalCount:0," homework Submissions. ")}}function A(e,t){}const T=function(){return["status","student","homework.bonusPoints","homework.points","lessonInstance","homeworkStatus","homeworkPoints"]},W=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.teacherService=t,this.filterHomeWorkListForm=new u.h({selectedTeacher:new u.f(""),groupInstanceId:new u.f(""),status:new u.f("")}),this.groupInstanceArr=[],this.statusArr=[],this.htmlStatusArr=[],this.filterObj={},this.pageNumber=1,this.pageSize=10,this.superVisorMode=!1,this.teacherGroupsFlag=!1}ngOnInit(){this.router.url.includes("supervisor")?this.superVisorMode=!0:(this.getAllGroupInstance(),this.getAllHWStatus())}searchTeacher(e){const t=e.query;t&&this.teacherService.getAllTeacher({TeacherName:t,PageSize:1e4}).subscribe(e=>{var t;this.suggestedTeacher=e.data,null===(t=this.suggestedTeacher)||void 0===t||t.forEach(e=>{e.fullName=e.teacherFirstName+" "+e.teacherLastName})})}getTeacherGroup(e){this.teacherGroupsFlag=!0,this.getGroupInstanceByTeacher(e)}getGroupInstanceByTeacher(e){this.filterHomeWorkListForm.controls.groupInstanceId.setValue(""),this.filterHomeWorkListForm.controls.status.setValue(""),this.teacherService.getGroupInstanceByTeacher({teacherId:e,PageSize:1e3}).subscribe(e=>{this.groupInstanceArr=e.data;for(let t of this.groupInstanceArr)t.serial=t.groupInstance.serial;this.TotalCount=e.count,this.getAllHWStatus()})}correctHomework(e){const t=e.id;"Corrected"==e.status?this.router.navigate(["/teacher/homework-list/homework-details",t]):this.router.navigate(["/teacher/homework-list/correct-homework"],{queryParams:{homeworkId:t}})}getAllHomeworkSubmitions(e,t,o){!this.filterHomeWorkListForm.value.groupInstanceId||""===this.filterHomeWorkListForm.value.groupInstanceId||this.filterHomeWorkListForm.value.status&&""!=this.filterHomeWorkListForm.value.status?this.filterHomeWorkListForm.value.groupInstanceId&&""!=this.filterHomeWorkListForm.value.groupInstanceId||!this.filterHomeWorkListForm.value.status||""===this.filterHomeWorkListForm.value.status?this.filterHomeWorkListForm.value.groupInstanceId&&""!==this.filterHomeWorkListForm.value.groupInstanceId&&this.filterHomeWorkListForm.value.status&&""!==this.filterHomeWorkListForm.value.status?this.filterObj={GroupInstanceId:this.filterHomeWorkListForm.value.groupInstanceId,Status:this.statusArr.indexOf(this.filterHomeWorkListForm.value.status),TeacherId:localStorage.getItem("id")}:(this.filterHomeWorkListForm.value.groupInstanceId&&""!=this.filterHomeWorkListForm.value.groupInstanceId||!this.filterHomeWorkListForm.value.status)&&""===this.filterHomeWorkListForm.value.status||(this.filterObj={}):this.filterObj={Status:this.statusArr.indexOf(this.filterHomeWorkListForm.value.status),TeacherId:localStorage.getItem("id")}:this.filterObj={GroupInstanceId:this.filterHomeWorkListForm.value.groupInstanceId,TeacherId:localStorage.getItem("id")},this.getHomeworkSubmitions()}getHomeworkSubmitions(){this.teacherService.getHomeworkSubmitions(this.filterObj).subscribe(e=>{this.homeworkList=e})}getAllHWStatus(){this.teacherService.getAllHomeWorkStatus().subscribe(e=>{this.statusArr=e,e.forEach(e=>{this.htmlStatusArr.push({statusName:e})})})}getAllGroupInstance(e){this.teacherService.getAllGroupInstance().subscribe(e=>{this.groupInstanceArr=e.data,console.log("res.data===>",e.data),this.TotalCount=e.count})}filter(e){}onPageChange(e){this.pageNumber=e.page+1,this.getHomeworkSubmitions()}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(s.c),a.Kb(c.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["homework-list"]],decls:13,vars:13,consts:[[3,"formGroup"],[1,"row","ddl-div","container"],[4,"ngIf"],[1,"container","pt-5","pb-5"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"responsive","value","rows","paginator","globalFilterFields","rowHover","showCurrentPageReport"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["pTemplate","emptymessage"],[3,"rows","totalRecords","onPageChange"],[1,"col-lg-3","col-md-3","col-sm-2"],[1,"filterHomeWorkListFormClass"],["name","teacherName","formControlName","selectedTeacher","field","fullName",3,"suggestions","dropdown","forceSelection","completeMethod","onSelect"],[1,"col-lg-4","col-md-4","col-sm-4",2,"margin-top","25px"],["placeholder","Select group","formControlName","groupInstanceId","optionLabel","serial","optionValue","id",3,"options","onChange"],["placeholder","Select statue","formControlName","status","optionLabel","statusName","optionValue","statusName",3,"options","onChange"],["pSortableColumn","student"],["field","student"],["pSortableColumn","groupInstance"],["field","groupInstance"],["pSortableColumn","submitionDate"],["field","submitionDate"],["pSortableColumn","lessonInstance"],["field","lessonInstance"],["pSortableColumn","homeworkStatus"],["field","homeworkStatus"],["pSortableColumn","homeworkPoints"],["field","homeworkPoints"],[2,"width","6rem"],[1,"text-center","m-3","rounded-pill",3,"ngClass"],["class","mr-2 mr-3 text-secondary","title","correct student homework",3,"click",4,"ngIf"],["title","correct student homework",1,"mr-2","mr-3","text-secondary",3,"click"],[1,"p-button-icon","pi","pi-pencil","font-weight-bold"],[1,"p-button-icon","fas","fa-eye","font-weight-bold"],[1,"p-d-flex","p-ai-center","p-jc-between"]],template:function(e,t){1&e&&(a.Qb(0,"form",0),a.Qb(1,"div",1),a.Fc(2,H,5,4,"ng-container",2),a.Fc(3,y,5,8,"ng-container",2),a.Pb(),a.Pb(),a.Qb(4,"div",3),a.Qb(5,"div",4),a.Qb(6,"p-table",5,6),a.Fc(8,C,21,0,"ng-template",7),a.Fc(9,L,18,13,"ng-template",8),a.Fc(10,x,2,1,"ng-template",9),a.Fc(11,A,0,0,"ng-template",10),a.Pb(),a.Qb(12,"p-paginator",11),a.Xb("onPageChange",function(e){return t.onPageChange(e)}),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.ic("formGroup",t.filterHomeWorkListForm),a.yb(2),a.ic("ngIf",t.superVisorMode),a.yb(1),a.ic("ngIf",!t.superVisorMode||t.superVisorMode&&t.teacherGroupsFlag),a.yb(3),a.ic("responsive",!0)("value",t.homeworkList)("rows",10)("paginator",!1)("globalFilterFields",a.lc(12,T))("rowHover",!0)("showCurrentPageReport",!0),a.yb(6),a.ic("rows",t.pageSize)("totalRecords",t.TotalCount))},directives:[u.y,u.q,u.i,r.m,f.d,w.i,k.a,P.a,u.p,u.g,I.a,f.c,f.b,r.k],pipes:[r.f],styles:[".single-homework[_ngcontent-%COMP%]{border:1px solid #ddd;cursor:pointer;padding:3rem;margin-top:2rem}.status-Corrected[_ngcontent-%COMP%]{border-color:#207a04!important;background-color:rgba(50,213,9,.55);color:#207a04}.status-Missed[_ngcontent-%COMP%]{border-color:#f33!important;background-color:rgba(213,40,9,.55);color:#f33}.status-Solved[_ngcontent-%COMP%]{border-color:#2c3e90!important;background-color:rgba(9,91,213,.55);color:#2c3e90}.status-Pending[_ngcontent-%COMP%]{border-color:#d9a600!important;background-color:rgba(213,199,9,.55);color:#a78001}.ddl-div[_ngcontent-%COMP%]{margin-top:25px}"]}),e})()},{path:"correct-homework",component:g},{path:"homework-details/:homework_ID",component:i.a}];let O=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(W)],s.g]}),e})(),D=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[r.c,O,n.a]]}),e})()}}]);