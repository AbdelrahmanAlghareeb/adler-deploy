(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{EGme:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("ofXK"),s=n("PCNd"),o=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[i.c,s.a]]}),e})()},Kj3r:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("7o/Q"),s=n("D0XW");function o(e,t=s.a){return n=>n.lift(new r(e,t))}class r{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new a(e,this.dueTime,this.scheduler))}}class a extends i.a{constructor(e,t,n){super(e),this.dueTime=t,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(c,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function c(e){e.debouncedNext()}},WR8Z:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("tVjc"),s=n("fXoL"),o=n("tk/3");let r=(()=>{class e{constructor(e){this.http=e,this.homeWorkprefix="HomeWork",this.GroupInstanceprefix="GroupInstance",this.lessonInstanceprefix="LessonInstance",this.TestInstancePrefix="TestInstance"}getAllHomeWorksSubmissionsByGroupInstance(e){return this.http.get(`${i.a}/${this.homeWorkprefix}/GetHomeworkSubmitionByGroupInstance?GroupInstanceId=${e}`)}getAllGroupInstancesByTeacherId(e){return this.http.get(`${i.a}/${this.GroupInstanceprefix}/GetByTeacher?teacherId=${e}`)}getAllLessonInstancesByGroupInstance(e){return this.http.get(`${i.a}/${this.lessonInstanceprefix}/GetByGroupInstance?GroupInstanceId=${e}`)}getLessonReportStudents(e){return this.http.get(`${i.a}/${this.lessonInstanceprefix}/GetStudents?LessonInstanceId=${e}`)}submitLessonReport(e){return this.http.post(`${i.a}/${this.lessonInstanceprefix}/LessonReport`,e)}submitHomeworkCorrection(e){return this.http.post(`${i.a}/${this.homeWorkprefix}/SubmitHomeWorkCorrection`,e)}getHomeworkSubmitions(){return this.http.get(`${i.a}/${this.homeWorkprefix}/GetHomeworkSubmitions`)}getHomeworkById(e){return this.http.get(`${i.a}/${this.homeWorkprefix}/GetHomeworkSubmitionById?HomeWorkSubmitionId=${e}`)}getTestInstancesList(e,t,n){let s=i.a+"/TestInstance/GetTestInstanceByTeacher";return!isNaN(e)&&(s+="?Status="+e),null!=t&&(s+="&groupInstanceId="+t),null!=n&&(s+="&testType="+n),this.http.get(s)}getSingleQuestionsByInstanceId(e){return this.http.get(`${i.a}/SingleQuestionSubmission/GetByTestInstanceId/${e}`)}putTestCorrection(e){return this.http.put(i.a+"/SingleQuestionSubmission/TestCorrection",e)}getAllStudentsPointByGroupInstance(e){return this.http.get(`${i.a}/${this.TestInstancePrefix}/GetTestResults?GetTestResultsId=${e}`)}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(o.b))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac}),e})()},YKuI:function(e,t,n){"use strict";n.d(t,"a",function(){return D});var i=n("nbpP"),s=n("XNiG"),o=n("Kj3r"),r=n("WR8Z"),a=n("fXoL"),c=n("dJ3e"),l=n("Widq"),u=n("BtPN"),b=n("7o2P"),d=n("tyNb"),p=n("rEr+"),h=n("7zfz"),g=n("6t4m"),f=n("/RsI"),m=n("3Pt+"),P=n("ofXK"),I=n("arFO");function y(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",37),a.Qb(1,"label",15),a.Gc(2,"Group definition"),a.Pb(),a.Qb(3,"p-dropdown",43),a.Xb("ngModelChange",function(t){return a.xc(e),a.bc(2).filters.groupDefinitionId=t}),a.Pb(),a.Pb()}if(2&e){const e=a.bc(2);a.yb(3),a.ic("filter",!0)("showClear",!0)("options",e.groupDefinitions)("ngModel",e.filters.groupDefinitionId)}}function w(e,t){if(1&e){const e=a.Rb();a.Qb(0,"tr"),a.Qb(1,"th",24),a.Gc(2," Group serial "),a.Lb(3,"p-sortIcon",25),a.Pb(),a.Qb(4,"th",26),a.Gc(5," Name "),a.Lb(6,"p-sortIcon",27),a.Pb(),a.Qb(7,"th",28),a.Gc(8," Phone number "),a.Lb(9,"p-sortIcon",29),a.Pb(),a.Qb(10,"th",30),a.Gc(11," Email "),a.Lb(12,"p-sortIcon",31),a.Pb(),a.Qb(13,"th",32),a.Gc(14,"Actions"),a.Pb(),a.Pb(),a.Qb(15,"tr"),a.Qb(16,"td",33),a.Qb(17,"div",34),a.Qb(18,"div",35),a.Ec(19,y,4,4,"div",36),a.Qb(20,"div",37),a.Qb(21,"label",15),a.Gc(22,"Group instance"),a.Pb(),a.Qb(23,"p-dropdown",38),a.Xb("ngModelChange",function(t){return a.xc(e),a.bc().filters.groupInstanceId=t}),a.Pb(),a.Pb(),a.Pb(),a.Qb(24,"div",39),a.Qb(25,"label",15),a.Lb(26,"i",40),a.Gc(27,"Student name"),a.Pb(),a.Qb(28,"span",41),a.Qb(29,"input",42),a.Xb("ngModelChange",function(t){return a.xc(e),a.bc().filters.studentName=t}),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=a.bc();a.yb(16),a.zb("colspan",5),a.yb(3),a.ic("ngIf",!e.isTeacher),a.yb(4),a.ic("filter",!0)("showClear",!0)("options",e.groupInstances)("ngModel",e.filters.groupInstanceId),a.yb(6),a.ic("ngModel",e.filters.studentName)}}function S(e,t){if(1&e){const e=a.Rb();a.Qb(0,"tr"),a.Qb(1,"td"),a.Gc(2),a.Pb(),a.Qb(3,"td"),a.Gc(4),a.Pb(),a.Qb(5,"td"),a.Gc(6),a.Pb(),a.Qb(7,"td"),a.Gc(8),a.Pb(),a.Qb(9,"td"),a.Qb(10,"a",44),a.Xb("click",function(){a.xc(e);const n=t.$implicit;return a.bc().redirectToProfile(n)}),a.Lb(11,"span",45),a.Pb(),a.Qb(12,"a",46),a.Xb("click",function(){a.xc(e);const n=t.$implicit;return a.bc().showBanDialog(n)}),a.Lb(13,"span",47),a.Pb(),a.Qb(14,"a",48),a.Xb("click",function(){a.xc(e);const n=t.$implicit;return a.bc().showDisqualificationDialog(n)}),a.Lb(15,"span",49),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=t.$implicit;a.yb(2),a.Hc(e.groupSerial||"-"),a.yb(2),a.Jc("",e.firstName," ",e.lastName,""),a.yb(2),a.Hc(e.phoneNumber),a.yb(2),a.Hc(e.email)}}function v(e,t){if(1&e&&(a.Qb(0,"div",50),a.Gc(1),a.Pb()),2&e){const e=a.bc();a.yb(1),a.Ic(" In total there are ",e.students?e.students.length:0," student. ")}}function Q(e,t){if(1&e&&(a.Qb(0,"tr"),a.Qb(1,"td"),a.Qb(2,"div",51),a.Gc(3),a.Pb(),a.Pb(),a.Pb()),2&e){const e=a.bc();a.yb(1),a.zb("colspan",5),a.yb(2),a.Ic(" ",!e.isTeacher||e.filters.groupInstanceId||e.filters.studentName?"No records found":"Select a group condition or Enter a student name"," ")}}const G=function(){return{width:"680px"}};class x{constructor(){this.applyFiltersSubj=new s.a,this.applyFilters$=this.applyFiltersSubj.asObservable()}get groupInstanceId(){return this._groupInstanceId}set groupInstanceId(e){this._groupInstanceId=e,this.applyFilters()}get groupDefinitionId(){return this._groupDefinitionId}set groupDefinitionId(e){this._groupDefinitionId=e,this.applyFilters()}get studentName(){return this._studentName}set studentName(e){this._studentName=e,this.applyFilters()}applyFilters(e=!0){this.applyFiltersSubj.next(e)}get filtersData(){return{studentName:this.studentName,groupDefinitionId:this.groupDefinitionId,groupInstanceId:this.groupInstanceId}}}let D=(()=>{class e{constructor(e,t,n,i,s,o,r){this.alertSrvc=e,this.userService=t,this.banRequestSrvc=n,this.commonService=i,this.router=s,this.authService=o,this.teacherService=r,this.groupInstances=[],this.groupDefinitions=[],this.banDialog=!1,this.disqualificationDialog=!1,this.filters=new x,this.rowsPerPageOptions=[10,25,50,100],this.pageNo=1,this.pageSize=this.rowsPerPageOptions[0],this.isTeacher=!1,this.checkRole()}ngOnInit(){this.isTeacher?this.getGroupInstanceByTeacherId():(this.getStudents(),this.getGroupInstance(),this.getGroupDefinition()),this.applyFiltersOnFiltersChange()}applyFiltersOnFiltersChange(){this.filters.applyFilters$.pipe(Object(o.a)(1500)).subscribe(e=>{e&&this.filter(null)})}checkRole(){var e;this.authService.readUserDataFromLocalStorage(),null===(e=this.authService.userData$)||void 0===e||e.subscribe(e=>{this.userData=e,this.userData.roles.includes("Teacher")&&(this.isTeacher=!0)})}getStudents(){let e=this.filters.filtersData;!this.isTeacher||e.groupInstanceId||e.studentName?this.userService.GetAllStudentUsers(this.pageNo,this.pageSize,e.groupDefinitionId,e.groupInstanceId,e.studentName).subscribe(e=>{this.students=e.data,this.filteredStudents=this.students,this.count=e.count}):this.students=[]}onPageChange(e){this.pageNo=e.page+1,this.getStudents()}getGroupDefinition(){this.commonService.getAllGroupDefinition().subscribe(e=>{for(let t of e.data)this.groupDefinitions.push({label:t.serial,value:parseInt(t.id)})})}getGroupInstance(){this.commonService.getAllGroupInstances().subscribe(e=>{for(let t of e.data)this.groupInstances.push({label:t.serial,value:parseInt(t.id)})})}getGroupInstanceByTeacherId(){this.teacherService.getAllGroupInstancesByTeacherId(this.userData.id).subscribe(e=>{for(let t of e.data)this.groupInstances.push({label:t.groupInstance.serial,value:t.groupInstanceId})})}filter(e){this.pageNo=1,this.getStudents()}showBanDialog(e){this.banDialog=!0,this.selectedStudent=e}showDisqualificationDialog(e){this.disqualificationDialog=!0,this.selectedStudent=e}requestBan(){const e=new i.a;e.studentId=this.selectedStudent.id,e.comment=this.requestComment,e.status=0,this.banRequestSrvc.addRequest(e).subscribe(e=>{this.alertSrvc.newAlert("Success","Added successfully"),this.banDialog=!1})}requestDisqualification(){const e=new i.a;e.studentId=this.selectedStudent.id,e.comment=this.requestComment,e.status=0,this.banRequestSrvc.addRequest(e).subscribe(e=>{this.alertSrvc.newAlert("Success","Added successfully"),this.banDialog=!1})}redirectToProfile(e){this.router.navigate([this.isTeacher?"/teacher/view-profile":"/supervisor/view-profile",e.id])}hideDialog(){this.banDialog=!1,this.disqualificationDialog=!1}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(c.a),a.Kb(l.a),a.Kb(u.a),a.Kb(b.a),a.Kb(d.c),a.Kb(c.c),a.Kb(r.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-student-list"]],features:[a.xb([r.a])],decls:57,vars:29,consts:[[1,"container","pt-5","pb-5"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"responsive","value","rows","paginator","rowHover","showCurrentPageReport"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["pTemplate","emptymessage"],[3,"rows","rowsPerPageOptions","totalRecords","onPageChange"],["styleClass","p-fluid",3,"visible","modal","showHeader","visibleChange","onHide"],[1,"content"],[1,"text-primary"],[1,"font-weight-bold","d-inline-block"],[1,"text-nowrap","pop-text","mb-1"],[1,"mb-4"],[1,"text-secondary"],[1,"d-flex","justify-content-between"],["required","","name","comment","id","comment","cols","30","rows","7","placeholder","Ban reason",1,"form-control",3,"ngModel","ngModelChange"],[1,"Pop-img","mr-3"],[1,"overlay","w-100","h-100"],[1,"formbtns","pt-3"],["type","button",1,"btn","btn-outline-secondary","ml-3","px-5",3,"click"],["type","button",1,"btn","adler-btn","ml-3",2,"min-width","9rem",3,"click"],["required","","name","comment","id","comment","cols","30","rows","7","placeholder","Disqualify reason",1,"form-control",3,"ngModel","ngModelChange"],["pSortableColumn","groupSerial"],["field","groupSerial"],["pSortableColumn","name"],["field","name"],["pSortableColumn","phoneNumber"],["field","phoneNumber"],["pSortableColumn","email"],["field","email"],[2,"width","10rem"],[1,"custom-filter-row"],[1,"d-flex","align-items-end","justify-content-between"],[1,"d-flex","dropdownsFilters"],["class","d-flex flex-column  mr-3",4,"ngIf"],[1,"d-flex","flex-column","mr-3"],["placeholder","Select group instance",3,"filter","showClear","options","ngModel","ngModelChange"],[1,"d-flex","flex-column","search"],[1,"pi","pi-search",2,"margin","4px 4px 0 0"],[1,"p-input-icon-left"],["pInputText","","pInputText","","size","50","type","text","placeholder","Enter Name",1,"form-control","adler-form-control",2,"background-color","#fff","margin","0",3,"ngModel","ngModelChange"],["placeholder","Select group definition",3,"filter","showClear","options","ngModel","ngModelChange"],["title","View Profile",1,"mr-2","mr-3",3,"click"],[1,"p-button-icon","fa","fa-street-view","text-secondary","font-weight-bold"],["title","Request Ban",1,"mr-2","mr-3","text-secondary",3,"click"],[1,"p-button-icon","pi","pi-ban","font-weight-bold"],["title","Request Disqualification",1,"mr-2","mr-3",3,"click"],[1,"p-button-icon","fa","fa-user-times","text-danger","font-weight-bold"],[1,"p-d-flex","p-ai-center","p-jc-between"],[1,"text-center","p-4"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"p-table",2,3),a.Ec(4,w,30,7,"ng-template",4),a.Ec(5,S,16,5,"ng-template",5),a.Ec(6,v,2,1,"ng-template",6),a.Ec(7,Q,4,2,"ng-template",7),a.Pb(),a.Qb(8,"p-paginator",8),a.Xb("onPageChange",function(e){return t.onPageChange(e)}),a.Pb(),a.Pb(),a.Pb(),a.Qb(9,"p-dialog",9),a.Xb("visibleChange",function(e){return t.banDialog=e})("onHide",function(){return t.hideDialog()}),a.Qb(10,"div",10),a.Qb(11,"h3",11),a.Gc(12,"Ban Request"),a.Pb(),a.Qb(13,"span"),a.Gc(14," You want to ban "),a.Qb(15,"p",12),a.Gc(16),a.Pb(),a.Pb(),a.Qb(17,"p",13),a.Gc(18," your ban request will be viewed by The Supervisor, and you will get the feedback!"),a.Pb(),a.Qb(19,"h6",14),a.Gc(20,"Please type reason to Ban "),a.Qb(21,"span",15),a.Gc(22),a.Pb(),a.Pb(),a.Qb(23,"div",16),a.Qb(24,"div"),a.Qb(25,"textarea",17),a.Xb("ngModelChange",function(e){return t.requestComment=e}),a.Pb(),a.Pb(),a.Qb(26,"div",18),a.Lb(27,"div",19),a.Pb(),a.Pb(),a.Qb(28,"div",20),a.Qb(29,"button",21),a.Xb("click",function(){return t.hideDialog()}),a.Gc(30," Cancel "),a.Pb(),a.Qb(31,"button",22),a.Xb("click",function(){return t.requestBan()}),a.Gc(32," Ban ! "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(33,"p-dialog",9),a.Xb("visibleChange",function(e){return t.disqualificationDialog=e})("onHide",function(){return t.hideDialog()}),a.Qb(34,"div",10),a.Qb(35,"h3",11),a.Gc(36,"Disqualification Request"),a.Pb(),a.Qb(37,"span"),a.Gc(38," You want to Disqualify "),a.Qb(39,"p",12),a.Gc(40),a.Pb(),a.Pb(),a.Qb(41,"p",13),a.Gc(42," your disqualification Request will be viewed by The Supervisor, and you will get the feedback!"),a.Pb(),a.Qb(43,"h6",14),a.Gc(44,"Please type reason to Disqualify "),a.Qb(45,"span",15),a.Gc(46),a.Pb(),a.Pb(),a.Qb(47,"div",16),a.Qb(48,"div"),a.Qb(49,"textarea",23),a.Xb("ngModelChange",function(e){return t.requestComment=e}),a.Pb(),a.Pb(),a.Qb(50,"div",18),a.Lb(51,"div",19),a.Pb(),a.Pb(),a.Qb(52,"div",20),a.Qb(53,"button",21),a.Xb("click",function(){return t.hideDialog()}),a.Gc(54," Cancel "),a.Pb(),a.Qb(55,"button",22),a.Xb("click",function(){return t.requestDisqualification()}),a.Gc(56," Disqualify ! "),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(2),a.ic("responsive",!0)("value",t.students)("rows",10)("paginator",!1)("rowHover",!0)("showCurrentPageReport",!0),a.yb(6),a.ic("rows",t.pageSize)("rowsPerPageOptions",t.rowsPerPageOptions)("totalRecords",t.count),a.yb(1),a.Cc(a.lc(27,G)),a.ic("visible",t.banDialog)("modal",!0)("showHeader",!1),a.yb(7),a.Jc("",null==t.selectedStudent?null:t.selectedStudent.firstName," ",null==t.selectedStudent?null:t.selectedStudent.lastName,"?"),a.yb(6),a.Hc(null==t.selectedStudent?null:t.selectedStudent.firstName),a.yb(3),a.ic("ngModel",t.requestComment),a.yb(8),a.Cc(a.lc(28,G)),a.ic("visible",t.disqualificationDialog)("modal",!0)("showHeader",!1),a.yb(7),a.Jc("",null==t.selectedStudent?null:t.selectedStudent.firstName," ",null==t.selectedStudent?null:t.selectedStudent.lastName,"??"),a.yb(6),a.Hc(null==t.selectedStudent?null:t.selectedStudent.firstName),a.yb(3),a.ic("ngModel",t.requestComment))},directives:[p.d,h.i,g.a,f.a,m.b,m.v,m.o,m.r,p.c,p.b,P.l,I.a],styles:['.custom-filter-row[_ngcontent-%COMP%]{background-color:#d0d4e5;padding:.5rem}.content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:8px;background-color:#d1d5d8;width:300px}.pop-text[_ngcontent-%COMP%]{color:#bfbfbf}.Pop-img[_ngcontent-%COMP%]{width:220px;background:url("NoPath - Copy.7059a40d7bded12708bd.jpg") no-repeat;background-size:cover}.Pop-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.25882352941176473)}.pop-Button-container[_ngcontent-%COMP%]   .adler-btn[_ngcontent-%COMP%]{width:9rem}']}),e})()}}]);