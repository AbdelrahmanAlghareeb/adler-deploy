(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3TlM":function(e,t,n){"use strict";n.r(t),n.d(t,"CoerceRegistrationModule",function(){return I});var o=n("ofXK"),i=n("tyNb"),r=n("DCB1"),c=n("fXoL"),a=n("dJ3e"),s=n("Wbgf"),l=n("3Pt+");function d(e,t){1&e&&(c.Qb(0,"div",26),c.Lb(1,"i",31),c.Qb(2,"span",32),c.Gc(3,"Valid Promo Code"),c.Pb(),c.Pb())}function b(e,t){1&e&&(c.Qb(0,"div",26),c.Lb(1,"i",33),c.Qb(2,"span",32),c.Gc(3,"Promo code not valid"),c.Pb(),c.Pb())}function u(e,t){if(1&e){const e=c.Rb();c.Qb(0,"div",28),c.Qb(1,"input",29),c.Xb("ngModelChange",function(t){return c.xc(e),c.bc().promoCode=t})("blur",function(){c.xc(e);const t=c.bc();return t.validatePromoCode(t.promoCode)})("keyup",function(){return c.xc(e),c.bc().promoBlur=!1}),c.Pb(),c.Ec(2,d,4,0,"div",30),c.Ec(3,b,4,0,"div",30),c.Pb()}if(2&e){const e=c.bc();c.yb(1),c.ic("ngModel",e.promoCode),c.yb(1),c.ic("ngIf",e.validPromoCode),c.yb(1),c.ic("ngIf",!e.validPromoCode&&e.promoCode&&e.promoBlur)}}const p=function(e,t){return{active:e,deactivate:t}};let g=(()=>{class e{constructor(e,t,n,o,i){this.authDataSrvc=e,this.alertService=t,this.authService=n,this.subLevelService=o,this.router=i,this.havePromo=!1,this.promoCode="",this.promoBlur=!1}validatePromoCode(e){e&&this.authDataSrvc.promoCode!=e&&this.authDataSrvc.checkPromoCode(e).subscribe(t=>{this.validPromoCode=t.data,this.authDataSrvc.promoCode=e,this.promoBlur=!0},e=>{this.validPromoCode=!1,this.authDataSrvc.promoCode="",this.authDataSrvc.groupInstance=void 0,this.promoBlur=!1})}continue(){this.havePromo&&this.validPromoCode?"learningCourse"==this.selected?this.router.navigate(["/course-selection"]):"placementTest"==this.selected||"adlerCards"==this.selected||this.alertService.newAlert("error","Please select one of our services first"):this.havePromo?this.alertService.newAlert("error","Please enter valid Promo code"):(this.authDataSrvc.promoCodeInside=null,"learningCourse"==this.selected?this.router.navigate(["learning-path/course-selection"]):"placementTest"==this.selected||"adlerCards"==this.selected||this.alertService.newAlert("error","Please select one of our services first"))}ngOnInit(){this.getSublevelById(),this.subLevelId=this.authService.userData.subLevelId,this.authDataSrvc.promoCode&&(this.validPromoCode=!0,this.havePromo=!0,this.promoBlur=!0,this.promoCode=this.authDataSrvc.promoCode)}getSublevelById(){this.subLevelService.getSublevelById(this.subLevelId).subscribe(e=>{this.sublevel=e,this.subLevelService.studentSublevelName=this.sublevel.name})}clickno(){}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(r.a),c.Kb(a.a),c.Kb(a.c),c.Kb(s.a),c.Kb(i.c))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-course-registration"]],decls:56,vars:17,consts:[[1,"container"],[1,"register"],[1,"page-title","mb-5"],[1,"text-primary","font-weight-bold"],[1,"mt-5","mb-4"],[1,"text-capitalize","font-weight-bold"],[1,"mt-3"],[1,"form-check","form-check-inline","mr-5"],["type","radio","name","havePromo","id","inlineRadio1",1,"form-check-input",3,"ngModel","value","ngModelChange"],["for","inlineRadio1",1,"form-check-label","text-secondary"],[1,"form-check","form-check-inline","ml-5"],["type","radio","name","havePromo","id","inlineRadio2",1,"form-check-input",3,"ngModel","value","ngModelChange","click"],["for","inlineRadio2",1,"form-check-label","text-secondary"],["class","d-flex mt-3 align-items-baseline",4,"ngIf"],[1,"text-capitalize","font-weight-bold","mb-3"],[1,"d-flex","flex-wrap","justify-content-start","mb-4"],[1,"d-flex","mr-4","option-card","flex-column"],[1,"course-selection","option-title",3,"ngClass","click"],[1,"d-flex","mb-3","justify-content-between"],["src","../../../../assets/images/icons/training.svg"],[1,"option-title",3,"ngClass","click"],["src","../../../../assets/images/icons/exam.svg"],[1,"d-flex","mr-4","option-card","flex-column","rel"],[1,"p-badge"],["src","../../../../assets/images/icons/online-course.svg"],["type","submit",1,"btn","adler-btn","mt-5",3,"click"],[1,"ml-4"],[1,"fas","fa-arrow-right"],[1,"d-flex","mt-3","align-items-baseline"],["type","text","name","promo","id","inlineFormInputGroupUsername2","placeholder","",1,"promo-input","adler-form-control","form-control",3,"ngModel","ngModelChange","blur","keyup"],["class","ml-4",4,"ngIf"],[1,"fas","fa-check","text-success"],[1,"ml-1"],[1,"fas","fa-times-circle","text-danger"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"h1",3),c.Gc(4,"Start Learning with us!"),c.Pb(),c.Pb(),c.Qb(5,"div",4),c.Qb(6,"h6",5),c.Gc(7,"Do you have a promo code?"),c.Pb(),c.Qb(8,"div",6),c.Qb(9,"div",7),c.Qb(10,"input",8),c.Xb("ngModelChange",function(e){return t.havePromo=e}),c.Pb(),c.Qb(11,"label",9),c.Gc(12,"Yes"),c.Pb(),c.Pb(),c.Qb(13,"div",10),c.Qb(14,"input",11),c.Xb("ngModelChange",function(e){return t.havePromo=e})("click",function(){return t.clickno()}),c.Pb(),c.Qb(15,"label",12),c.Gc(16,"No"),c.Pb(),c.Pb(),c.Pb(),c.Ec(17,u,4,3,"div",13),c.Pb(),c.Qb(18,"h6",14),c.Gc(19,"Choose What you want to start with"),c.Pb(),c.Qb(20,"div",15),c.Qb(21,"div",16),c.Qb(22,"div",17),c.Xb("click",function(){return t.selected="learningCourse"}),c.Qb(23,"div",18),c.Qb(24,"div"),c.Lb(25,"img",19),c.Pb(),c.Qb(26,"div"),c.Gc(27," A1.1 "),c.Pb(),c.Pb(),c.Qb(28,"div"),c.Gc(29," Start German Learning "),c.Pb(),c.Pb(),c.Qb(30,"p",6),c.Gc(31," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac finibus mauris."),c.Pb(),c.Pb(),c.Qb(32,"div",16),c.Qb(33,"div",20),c.Xb("click",function(){return t.selected="placementTest"}),c.Qb(34,"div",18),c.Qb(35,"div"),c.Lb(36,"img",21),c.Pb(),c.Pb(),c.Qb(37,"div"),c.Gc(38," Take Placement Test "),c.Pb(),c.Pb(),c.Qb(39,"p",6),c.Gc(40," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac finibus mauris."),c.Pb(),c.Pb(),c.Qb(41,"div",22),c.Qb(42,"span",23),c.Gc(43,"Coming Soon"),c.Pb(),c.Qb(44,"div",20),c.Xb("click",function(){return t.selected="adlerCards"}),c.Qb(45,"div",18),c.Qb(46,"div"),c.Lb(47,"img",24),c.Pb(),c.Pb(),c.Qb(48,"div"),c.Gc(49," Adler cards "),c.Pb(),c.Pb(),c.Qb(50,"p",6),c.Gc(51," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac finibus mauris."),c.Pb(),c.Pb(),c.Pb(),c.Qb(52,"button",25),c.Xb("click",function(){return t.continue()}),c.Gc(53,"Continue "),c.Qb(54,"span",26),c.Lb(55,"i",27),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.yb(10),c.ic("ngModel",t.havePromo)("value",!0),c.yb(4),c.ic("ngModel",t.havePromo)("value",!1),c.yb(3),c.ic("ngIf",t.havePromo),c.yb(5),c.ic("ngClass",c.nc(8,p,"learningCourse"==t.selected,"learningCourse"!==t.selected)),c.yb(11),c.ic("ngClass",c.nc(11,p,"placementTest"==t.selected,"placementTest"!==t.selected)),c.yb(11),c.ic("ngClass",c.nc(14,p,"adlerCards"==t.selected,"adlerCards"!==t.selected)))},directives:[l.q,l.b,l.l,l.o,o.l,o.j],styles:[".option-card[_ngcontent-%COMP%]{width:16.25rem;transition:.5s ease-in-out}.option-card[_ngcontent-%COMP%]   .option-title[_ngcontent-%COMP%]{border:1px solid rgba(26,58,63,.32);box-shadow:0 4px 20px 0 rgba(0,0,0,.16);border-radius:16px;color:#2c3e90;cursor:pointer;padding:1rem 1.938rem 1.313rem 1rem;transition:.15s ease-in-out}.option-card[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#2c3e90;color:#fff}.option-card[_ngcontent-%COMP%]   .deactivate[_ngcontent-%COMP%]{color:#2c3e90!important;background-color:#fff}.option-card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:1rem .938rem 0 0;font-family:Montserrat;font-size:1.063rem;font-weight:500;font-stretch:normal;font-style:normal;line-height:6.29;letter-spacing:normal;text-align:left}.option-title[_ngcontent-%COMP%]:hover{transform:translateY(-6px)}.promo-input[_ngcontent-%COMP%]{width:300px}.rel[_ngcontent-%COMP%]{position:relative}.p-badge[_ngcontent-%COMP%]{position:absolute;right:-3px;top:30px;border-radius:30px;padding:0 5px;background-color:#b4002b;transform:rotate(45deg)}"]}),e})();const m=function(){return["./../group-selection"]},h=function(){return[]},f=function(e,t,n){return{"btn btn-outline-secondary finishedSublevel":e,currentSublevel:t,deactivate:n}};function v(e,t){if(1&e){const e=c.Rb();c.Qb(0,"li",6),c.Xb("click",function(){c.xc(e);const n=t.$implicit;return c.bc(2).saveChoossenSublevel(n.name)}),c.Qb(1,"span",7),c.Gc(2),c.Pb(),c.Gc(3),c.cc(4,"slice"),c.Pb()}if(2&e){const e=t.$implicit,n=c.bc(2);c.ic("title",n.description)("routerLink",e.name<=n.levelName?c.lc(9,m):c.lc(10,h)),c.yb(1),c.ic("ngClass",c.oc(11,f,e.name<=n.levelName,e.name==n.levelName,e.name>n.levelName)),c.yb(1),c.Ic(" ",e.name,""),c.yb(1),c.Ic(" ",c.fc(4,5,n.description,0,20),"... ")}}function P(e,t){if(1&e&&(c.Ob(0),c.Qb(1,"ul"),c.Qb(2,"li",4),c.Qb(3,"span"),c.Gc(4),c.Pb(),c.Gc(5),c.cc(6,"slice"),c.Pb(),c.Ec(7,v,5,15,"li",5),c.Pb(),c.Nb()),2&e){const e=t.$implicit,n=c.bc();c.yb(2),c.ic("title",n.description),c.yb(2),c.Hc(e.name),c.yb(1),c.Ic("",c.fc(6,5,n.description,0,20),"... "),c.yb(2),c.ic("ngForOf",e.subLevels)("ngForTrackBy",n.identify)}}window;let C=(()=>{class e{constructor(e){this.subLevelService=e,this.levelName="A2.3",this.description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac finibus mauris. Pellentesque porttitor leo ante, ac ultricies augue rhoncus a. Nullam sed diam vel mi dignissim finibus. Vesulum semper quam ac massa euismod vestibulum. Cras id velitsa euismod vestibulum. Cras ."}ngOnInit(){this.courseLevels=[{name:"A1",subLevels:[{name:"A1.1",description:""},{name:"A1.2",description:""},{name:"A1.3",description:""}]},{name:"A2",subLevels:[{name:"A2.1",description:""},{name:"A2.2",description:""},{name:"A2.3",description:""}]},{name:"B1",subLevels:[{name:"B1.1",description:""},{name:"B1.2",description:""},{name:"B1.3",description:""}]},{name:"B2",subLevels:[{name:"B2.1",description:""},{name:"B2.2",description:""},{name:"B2.3",description:""}]},{name:"C1",subLevels:[{name:"C1.1",description:""},{name:"C1.2",description:""},{name:"C1.3",description:""}]}]}identify(e,t){return t}saveChoossenSublevel(e){this.subLevelService.studentSublevelName=e}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(s.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-course-selection"]],decls:7,vars:2,consts:[[1,"container"],["id","course-details"],[1,"text-primary","font-weight-bold"],[4,"ngFor","ngForOf","ngForTrackBy"],["data-toggle","tooltip","data-placement","top",3,"title"],["data-toggle","tooltip","data-placement","top",3,"title","routerLink","click",4,"ngFor","ngForOf","ngForTrackBy"],["data-toggle","tooltip","data-placement","top",3,"title","routerLink","click"],[3,"ngClass"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"h1",2),c.Gc(3,"Course Levels Details"),c.Pb(),c.Qb(4,"p"),c.Gc(5," Language is more than letters and sentences; A whole journey into a new culture where every single "),c.Pb(),c.Ec(6,P,8,9,"ng-container",3),c.Pb(),c.Pb()),2&e&&(c.yb(6),c.ic("ngForOf",t.courseLevels)("ngForTrackBy",t.identify))},directives:[o.k,i.d,o.j],pipes:[o.s],styles:['#course-details[_ngcontent-%COMP%]{margin-top:40px}#course-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 40px!important;font-size:16px}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:30px}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:nth-child(2n){padding-left:70px}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:115px;color:rgb(15 21 .58%);text-align:center;margin-right:20px;display:flex;flex-wrap:wrap;justify-content:center}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#2c3e90,#b4002b);color:#fff;width:60px;height:60px;font-size:18px}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#2c3e90;border:1px solid;width:40px;height:40px;border-radius:6px;font-weight:700;display:flex;justify-content:center;align-items:center;margin-bottom:10px!important;position:relative;background-color:#8d8c8c;transition:.15s ease-in-out}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;width:30px;background:rgb(15 21 .58%);height:1px;right:-60px}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:#fff}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]:before{display:none}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .currentSublevel[_ngcontent-%COMP%]:after{content:" ";width:30px;height:35px;position:absolute;background:url(Badge.20ee869c5cda3d0807c2.svg) no-repeat;background-size:contain;top:-40px}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .finishedSublevel[_ngcontent-%COMP%]:hover{transform:translateY(-6px)}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .deactivate[_ngcontent-%COMP%]{background-color:#ddd;color:#fff}@media screen and (max-width:576px){#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{display:none}#course-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:nth-child(2n){padding-left:0}}']}),e})();var x=n("E0o4"),y=n("0wBQ"),M=n("6t4m");const Q=function(e,t){return{active:e,deactivate:t}};function O(e,t){if(1&e){const e=c.Rb();c.Qb(0,"div",19),c.Xb("click",function(){c.xc(e);const n=t.$implicit;return c.bc().selectInstance(n.id)}),c.Lb(1,"div",20),c.Qb(2,"div",21),c.Qb(3,"div",22),c.Qb(4,"div",23),c.Gc(5),c.cc(6,"date"),c.Pb(),c.Qb(7,"div",23),c.Gc(8),c.cc(9,"date"),c.Pb(),c.Qb(10,"div",24),c.Gc(11),c.cc(12,"date"),c.Pb(),c.Qb(13,"div",25),c.Gc(14),c.Pb(),c.Pb(),c.Qb(15,"div",26),c.Lb(16,"div",27),c.Pb(),c.Pb(),c.Pb()}if(2&e){const e=t.$implicit,n=c.bc();c.yb(5),c.Ic("Starts ",c.dc(6,5,e.startDate),""),c.yb(3),c.Ic("Ends ",c.dc(9,7,e.endDate),""),c.yb(3),c.Ic("Final Exam in ",c.dc(12,9,e.finalTestDate),""),c.yb(3),c.Ic(" Will be every ",e.timeSlot," "),c.yb(2),c.ic("ngClass",c.nc(11,Q,n.selectedGroup==e.id,n.selectedGroup!==e.id))}}const k=function(){return{standalone:!0}},_=function(){return["/terms"]},w=[{path:"",component:g},{path:"course-selection",component:C},{path:"group-selection",component:(()=>{class e{constructor(e,t,n,o,i){this.authDataSrvc=e,this.router=t,this.alertService=n,this.subLevelService=o,this.groupDefinitionSrvc=i,this.now=new Date}ngOnInit(){this.sublevelName=this.subLevelService.studentSublevelName,this.getGroupDefinitions(1,6),console.log("sublevelName",this.sublevelName)}getGroupDefinitions(e,t){this.groupDefinitionSrvc.getAllGroupDefinitionsByPages(e,t).subscribe(e=>{this.count=e.count,this.pageSize=e.pageSize,this.groupDefinitions=e.data})}onPageChange(e){this.getGroupDefinitions(e.page+1,6)}selectInstance(e){this.selectedGroup=e,this.authDataSrvc.groupDefinitionId=e,console.log("selectedGroup",e)}submit(){this.selectedGroup?this.agreeToPolicy?this.router.navigate(["learning-path/payment"]):this.alertService.newAlert("error","You must agree to policy"):this.alertService.newAlert("error","Please choose one of the group slots first")}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(r.a),c.Kb(i.c),c.Kb(a.a),c.Kb(s.a),c.Kb(y.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-start-from-selcted-course"]],decls:30,vars:9,consts:[[1,"container"],[1,"register"],[1,"page-title","mb-5"],[1,"text-primary","font-weight-bold"],[1,"mt-5","mb-4"],[1,"text-capitalize","font-weight-bold"],[1,"mt-2"],[3,"rows","totalRecords","onPageChange"],[1,"border","rounded","p-4","d-flex","justify-content-around","flex-wrap"],["class","align-items-center border d-flex group-definition-card mr-1 mb-4 p-2",3,"click",4,"ngFor","ngForOf"],["type","submit",1,"btn","adler-btn","mt-5",3,"click"],[1,"ml-4"],[1,"fas","fa-arrow-right"],[1,"mt-1"],[1,"form-check"],["type","checkbox","name","agreeToPolicy","id","agreetopolicy",1,"form-check-input","position-static","mr-2",3,"ngModel","ngModelOptions","ngModelChange"],["for","agreetopolicy",1,"form-check-label"],["target","_blank","routerLinkActive","router-link-active",1,"text-primary",3,"routerLink"],[1,"text-primary"],[1,"align-items-center","border","d-flex","group-definition-card","mr-1","mb-4","p-2",3,"click"],[1,"left-line","ml-1","mr-2"],[1,"d-flex","justify-content-between","w-100"],[1,"d-flex","flex-column"],[1,"text-secondary","font-weight-bold"],[1,"text-primary","mb-1"],[1,"font-weight-bold"],[1,"checkbox","mr-3","border","border-2","border-secondary","rounded-circle"],[1,"border","border-3","rounded-circle","w-100","h-100",3,"ngClass"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"h1",3),c.Gc(4,"Start Learning with us!"),c.Pb(),c.Pb(),c.Qb(5,"div",4),c.Qb(6,"h6",5),c.Gc(7),c.Pb(),c.Qb(8,"div",6),c.Qb(9,"p-paginator",7),c.Xb("onPageChange",function(e){return t.onPageChange(e)}),c.Pb(),c.Pb(),c.Pb(),c.Qb(10,"div",8),c.Ec(11,O,17,14,"div",9),c.Pb(),c.Qb(12,"button",10),c.Xb("click",function(){return t.submit()}),c.Gc(13,"Continue "),c.Qb(14,"span",11),c.Lb(15,"i",12),c.Pb(),c.Pb(),c.Qb(16,"div",13),c.Qb(17,"div",14),c.Qb(18,"input",15),c.Xb("ngModelChange",function(e){return t.agreeToPolicy=e}),c.Pb(),c.Qb(19,"label",16),c.Gc(20," I agree to the "),c.Qb(21,"a",17),c.Gc(22,"Terms of Use"),c.Pb(),c.Gc(23,", "),c.Qb(24,"a",18),c.Gc(25,"Refund Policy"),c.Pb(),c.Gc(26,", and "),c.Qb(27,"a",18),c.Gc(28,"Privacy Policy"),c.Pb(),c.Gc(29,"."),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.yb(7),c.Ic("Start German Learning ",t.sublevelName,""),c.yb(2),c.ic("rows",t.pageSize)("totalRecords",t.count),c.yb(2),c.ic("ngForOf",t.groupDefinitions),c.yb(7),c.ic("ngModel",t.agreeToPolicy)("ngModelOptions",c.lc(7,k)),c.yb(3),c.ic("routerLink",c.lc(8,_)))},directives:[M.a,o.k,l.a,l.l,l.o,i.f,i.e,o.j],pipes:[o.e],styles:[".group-definition-card{font-size:13px;width:285px;border-radius:16px;box-shadow:0 2px 4px 0 rgba(0,0,0,.16);border:1px solid rgba(26,58,63,.16);cursor:pointer;transition:.15s ease-in-out}.group-definition-card:hover{transform:translateY(-6px)}.left-line{width:7px;height:80px;background-color:#d2ffde}.checkbox{width:15px;height:15px}.active{background-color:#0075ff}.deactivate{background-color:#fff}.choose-date{width:130px}.p-paginator{display:block!important}.p-paginator .p-paginator-next,.p-paginator .p-paginator-prev{color:#fff;padding:.3rem .5rem;border-radius:8px;background-image:linear-gradient(270deg,#2c3e90,#b4002b)}.p-paginator-next:hover,.p-paginator .p-paginator-prev:hover{background-image:linear-gradient(270deg,#2c3e90,#b4002b)!important;border-color:transparent!important;color:#fff!important}.p-paginator-first,.p-paginator-pages,.p-paginator .p-paginator-last{display:none!important}"],encapsulation:2}),e})()},{path:"payment",component:x.a}];let S=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},providers:[r.a],imports:[[i.g.forChild(w)],i.g]}),e})();var G=n("PCNd"),L=n("hzby");let I=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[o.c,G.a,S,L.c.forRoot()]]}),e})()}}]);