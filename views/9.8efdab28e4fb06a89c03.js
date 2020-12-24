(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"pr+G":function(t,e,o){"use strict";o.r(e),o.d(e,"HomeworkModule",function(){return I});var n=o("ofXK");class s{}class r{}var i=o("fXoL"),c=o("tVjc"),a=o("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.prefix="HomeWork"}GetHomeworkForStudent(){return this.http.get(`${c.a}${this.prefix}/GetHomeworkForStudent`)}GetHomeworkSubmitionById(t){return this.http.get(`${c.a}${this.prefix}/GetHomeworkSubmitionById?HomeWorkSubmitionId=${t}`)}SubmitHomeWorkForStudent(t){return this.http.post(`${c.a}/${this.prefix}/SubmitHomeWorkForStudent?id=${t.id}`,t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(a.b))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=o("dJ3e"),b=o("tyNb"),u=o("3Pt+"),m=o("zFJ7");let h=(()=>{class t{constructor(t,e,o,n,i){this.studentHomeworkService=t,this.authService=e,this.alertService=o,this.router=n,this.activatedRoute=i,this.homeworkInstance=new r,this.homeWorkSubmission=new s}ngOnInit(){this.authService.userData$.subscribe(t=>{this.userData=t}),this.getHomeworkId(),this.gitHomeworkInstancesById()}getHomeworkId(){this.homeworkId=this.activatedRoute.snapshot.params.homework_ID}gitHomeworkInstancesById(){this.studentHomeworkService.GetHomeworkSubmitionById(this.homeworkId).subscribe(t=>{this.homeworkInstance=t})}submitHomeWork(t){if(!this.homeWorkSubmission.text)return this.alertService.newAlert("error","Please Write you answer first");this.homeWorkSubmission.studentId=this.userData.id,this.homeWorkSubmission.id=this.homeworkInstance.homeworkId,this.homeWorkSubmission.status=1===t?1:2,this.studentHomeworkService.SubmitHomeWorkForStudent(this.homeWorkSubmission).subscribe(t=>{console.log("this.homeWorkSubmission",this.homeWorkSubmission),this.alertService.newAlert("success","Homework submitted successfully"),this.router.navigate(["student/homework"])})}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(d),i.Kb(l.c),i.Kb(l.a),i.Kb(b.c),i.Kb(b.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-homework-details"]],decls:42,vars:14,consts:[[1,"Progress","container"],[1,"page-title"],[1,"text-primary","font-weight-bold"],[1,"lesson-Q"],[1,"card"],[1,"card-body","p-0"],[1,"Q-title","pt-3","text-white","position-relative","rounded-top"],[1,"lesson-address","my-auto","position-absolute","ml-4","font-weight-bold"],[1,"date","ml-3"],[1,"due-date-address","position-absolute","mr-1","my-auto","font-weight-bold"],[1,"d-inline",2,"opacity","0.7","font-size","12px"],[1,"due-date","mx-3",2,"font-size","14px"],[1,"row","p-3","question","m-0","justify-content-center"],[1,"Answer-sec","shadow","bg-white","col-md-8","col"],[1,"Q-head","pt-3","pb-2"],[1,"A-instructions","d-flex","justify-content-between",2,"font-size","12px","opacity","0.7"],[1,"row","mt-3"],[1,"col"],["pInputTextarea","","autoResize","autoResize","placeholder","Write Your Answer ..",1,"rounded","p-3","ml-1","col",3,"rows","cols","ngModel","ngModelChange"],[1,"info-flag","d-flex","justify-content-end","text-black-50"],[1,"fas","fa-info-circle"],[1,"fas","fa-flag","ml-2"],[1,"btn","btn-outline-secondary","mr-3","px-5","rounded-pill",3,"click"],["type","submit",1,"btn","adler-btn","my-3","px-5","rounded-pill",3,"click"],[1,"fa","fa-arrow-right","ml-3"]],template:function(t,e){1&t&&(i.Qb(0,"div",0),i.Qb(1,"div",1),i.Qb(2,"h1",2),i.Dc(3," Home work for Lesson "),i.Pb(),i.Qb(4,"p"),i.Dc(5),i.Pb(),i.Pb(),i.Qb(6,"div",3),i.Qb(7,"div",4),i.Qb(8,"div",5),i.Qb(9,"div",6),i.Qb(10,"div",7),i.Dc(11),i.Qb(12,"span",8),i.Dc(13),i.bc(14,"date"),i.Pb(),i.Pb(),i.Qb(15,"div",9),i.Qb(16,"p",10),i.Dc(17," Due date "),i.Pb(),i.Qb(18,"span",11),i.Dc(19),i.bc(20,"date"),i.Pb(),i.Pb(),i.Pb(),i.Qb(21,"div",12),i.Qb(22,"div",13),i.Qb(23,"div"),i.Qb(24,"h2",14),i.Dc(25),i.Pb(),i.Qb(26,"div",15),i.Qb(27,"span"),i.Dc(28),i.Pb(),i.Qb(29,"span"),i.Dc(30),i.Pb(),i.Pb(),i.Qb(31,"div",16),i.Qb(32,"div",17),i.Qb(33,"textarea",18),i.Xb("ngModelChange",function(t){return e.homeWorkSubmission.text=t}),i.Pb(),i.Pb(),i.Pb(),i.Qb(34,"div",19),i.Lb(35,"i",20),i.Lb(36,"i",21),i.Pb(),i.Qb(37,"button",22),i.Xb("click",function(){return e.submitHomeWork(1)}),i.Dc(38," Save "),i.Pb(),i.Qb(39,"button",23),i.Xb("click",function(){return e.submitHomeWork(2)}),i.Dc(40," Submit "),i.Lb(41,"i",24),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.yb(5),i.Fc(" ",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.text," "),i.yb(6),i.Fc(" ",null==e.homeworkInstance||null==e.homeworkInstance.homework||null==e.homeworkInstance.homework.lessonInstance?null:e.homeworkInstance.homework.lessonInstance.lessonDefinition," "),i.yb(2),i.Ec(i.cc(14,10,null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.createdDate)),i.yb(6),i.Ec(i.cc(20,12,null==e.homeworkInstance?null:e.homeworkInstance.dueDate)),i.yb(6),i.Fc(" ",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.text," "),i.yb(3),i.Fc("",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.points," Points"),i.yb(2),i.Fc("Minimum no. of characters is ",null==e.homeworkInstance||null==e.homeworkInstance.homework?null:e.homeworkInstance.homework.minCharacters," "),i.yb(3),i.hc("rows",15)("cols",34)("ngModel",e.homeWorkSubmission.text))},directives:[u.b,m.a,u.j,u.m],pipes:[n.e],styles:[".Q-title[_ngcontent-%COMP%]{background-color:#2c3e90!important;height:58px}.date[_ngcontent-%COMP%]{opacity:.7;font-size:12px}.due-date-address[_ngcontent-%COMP%]{right:5px}.question[_ngcontent-%COMP%]{background-color:#f4f8fc}.Q-head[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;text-align:left}.Answer-sec[_ngcontent-%COMP%], .Q-head[_ngcontent-%COMP%]{font-family:Montserrat}.Answer-sec[_ngcontent-%COMP%]{border-radius:16px;font-size:14px}"]}),t})();var w=o("JdUQ"),p=o("xlun");const k=function(t){return["details",t]},f=function(){return{Corrected:"status-Corrected fa-check",Missed:"status-Missed fa-times",Solved:"status-Solved fa-check-circle",Pending:"status-Pending fa-question"}},g=function(){return{Corrected:"status-Corrected-bg ",Missed:"status-Missed",Solved:"status-Solved ",Pending:"status-Pending "}};function P(t,e){if(1&t&&(i.Qb(0,"div",2),i.Qb(1,"div",3),i.Qb(2,"div",4),i.Qb(3,"div",5),i.Dc(4),i.Pb(),i.Qb(5,"div",6),i.Dc(6),i.bc(7,"date"),i.Pb(),i.Qb(8,"div",7),i.Dc(9),i.bc(10,"date"),i.Pb(),i.Pb(),i.Qb(11,"div",8),i.Dc(12),i.Pb(),i.Qb(13,"div",9),i.Qb(14,"div",10),i.Lb(15,"i",11),i.Pb(),i.Qb(16,"div",12),i.Dc(17),i.Pb(),i.Pb(),i.Pb(),i.Qb(18,"div",13),i.Lb(19,"div",14),i.Qb(20,"div",15),i.Dc(21),i.Pb(),i.Pb(),i.Pb()),2&t){const t=e.$implicit;i.hc("routerLink",i.kc(13,k,t.id)),i.yb(4),i.Fc(" ",t.homework.lessonInstance.lessonDefinition," "),i.yb(2),i.Fc(" ",i.cc(7,9,t.homework.createdDate)," "),i.yb(3),i.Fc(" Due Date:",i.cc(10,11,t.dueDate)," "),i.yb(3),i.Fc(" Lorem ipsum dolor sit amet, ",t.text," "),i.yb(5),i.Fc(" 9 / ",t.homework.points," points "),i.yb(2),i.hc("ngClass",i.jc(15,f)[t.status]),i.yb(1),i.hc("ngClass",i.jc(16,g)[t.status]),i.yb(1),i.Fc(" ",t.status," ")}}const v=[{path:"",component:(()=>{class t{constructor(t,e,o){this.studentHomeworkService=t,this.alertService=e,this.router=o,this.homeworkInstances=new r}ngOnInit(){this.gitHomeworkInstances()}gitHomeworkInstances(){this.studentHomeworkService.GetHomeworkForStudent().subscribe(t=>{if(!t.length)return this.alertService.newAlert("error","No Homework found"),this.router.navigate(["student/homework"]);this.homeworkInstances=t,console.log("jgjgjg",t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(d),i.Kb(w.a),i.Kb(b.c))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-homework"]],decls:2,vars:1,consts:[[1,"rounded","pt-4","row","d-flex","flex-wrap","justify-content-center"],["class","lesson-instance-card border d-flex p-3 mb-3 mx-2","pTooltip","This Homework's points will be considered within the final grade.","tooltipPosition","right","showDelay","250","hideDelay","500",3,"routerLink",4,"ngFor","ngForOf"],["pTooltip","This Homework's points will be considered within the final grade.","tooltipPosition","right","showDelay","250","hideDelay","500",1,"lesson-instance-card","border","d-flex","p-3","mb-3","mx-2",3,"routerLink"],[1,"lesson-details","mr-4"],[1,"position-relative","d-flex","justify-content-around"],[1,"text-secondary","font-weight-bold"],[1,"ml-1","mr-4"],[1,"text-primary","mb-1"],[1,""],[1,"d-flex","justify-content-start"],[1,"points-tag","rounded-circle","d-flex","align-items-center","justify-content-center"],[1,"pi","pi-star",2,"font-size","10px"],[1,"ml-3"],[1,"lesson-status","m-auto","text-center"],[1,"lesson-status-icon","text-center","rounded-circle","m-auto","fas",2,"font-size","18px",3,"ngClass"],[1,"lesson-statu-text","mt-2",3,"ngClass"]],template:function(t,e){1&t&&(i.Qb(0,"div",0),i.Bc(1,P,22,17,"div",1),i.Pb()),2&t&&(i.yb(1),i.hc("ngForOf",e.homeworkInstances))},directives:[n.k,p.a,b.d,n.j],pipes:[n.e],styles:[".lesson-instance-card[_ngcontent-%COMP%]{cursor:pointer;border-radius:16px;box-shadow:0 2px 4px 0 rgba(0,0,0,.16);border:1px solid rgba(26,58,63,.16);background-color:#fafafa}.points-tag[_ngcontent-%COMP%]{height:20px;width:20px;background-image:linear-gradient(0deg,#fd5900,#ffde00);color:#fff}.lesson-status-icon[_ngcontent-%COMP%]{height:40px;width:40px;line-height:35px;font-weight:700;border:3px solid!important}.lesson-status[_ngcontent-%COMP%]   .status-Corrected[_ngcontent-%COMP%]{border-color:#207a04!important;background-color:rgba(50,213,9,.55);color:#207a04}.status-Corrected-bg[_ngcontent-%COMP%]{color:#207a04;background-color:none}.lesson-status[_ngcontent-%COMP%]   .status-Missed[_ngcontent-%COMP%]{border-color:#f33!important;color:#f33}.lesson-status[_ngcontent-%COMP%]   .status-Solved[_ngcontent-%COMP%]{border-color:#2c3e90!important;color:#2c3e90}.lesson-status[_ngcontent-%COMP%]   .status-Pending[_ngcontent-%COMP%]{border-color:#d9a600!important;color:#d9a600}.lesson-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:10px}"]}),t})()},{path:"details/:homework_ID",component:h}];let x=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},imports:[[b.g.forChild(v),n.c],b.g]}),t})();var y=o("PCNd");let I=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},imports:[[n.c,x,y.a]]}),t})()}}]);