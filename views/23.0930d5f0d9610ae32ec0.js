(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"9OYF":function(e,t,i){"use strict";i.r(t),i.d(t,"BugsModule",function(){return J});var s=i("ofXK"),n=i("tyNb"),r=i("dJ3e"),o=i("j4EY");class b{}var a=i("fXoL"),l=i("LRne"),c=i("tVjc"),u=i("tk/3");let g=(()=>{class e{constructor(e){this.http=e,this.bugPrefix="Bug"}getAllBugsTypes(){return Object(l.a)([{label:"Inquiry",value:"Inquiry"},{label:"Bug",value:"Bug"},{label:"Not as defined",value:"Not as defined"},{label:"Change Request",value:"Change Request"}])}getAllBugsStatuses(){return Object(l.a)([{label:"Open",value:"Open"},{label:"In Progress",value:"In Progress"},{label:"Done",value:"Done"},{label:"Finished",value:"Finished"},{label:"Canceled",value:"Canceled"}])}getAllBugsPriorities(){return Object(l.a)([{label:"Low",value:"Low"},{label:"Medium",value:"Medium"},{label:"High",value:"High"},{label:"Critical",value:"Critical"}])}getAllBugs(e,t,i){let s=`PageNumber=${e}&PageSize=${t}`;const n=(e,t)=>{s+=`&${e}=${t}`};if(i)for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r)){const e=i[r];e&&n(r,e)}return this.http.get(`${c.a}/${this.bugPrefix}?${s}`)}getBugById(e){return this.http.get(`${c.a}/${this.bugPrefix}/${e}`)}updateBug(e){return this.http.put(`${c.a}/${this.bugPrefix}/${e.id}`,e)}createBug(e){return this.http.post(`${c.a}/${this.bugPrefix}`,e)}deleteBug(e){return this.http.delete(`${c.a}/${this.bugPrefix}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(u.b))},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac}),e})();var d=i("3Pt+"),p=i("arFO");const h=["fileInput"];function f(e,t){if(1&e&&(a.Qb(0,"h5",32),a.Hc(1),a.Pb()),2&e){const e=a.bc();a.yb(1),a.Jc("Edit bug #",e.bug.id,"")}}function m(e,t){1&e&&(a.Qb(0,"h5",33),a.Hc(1,"Please Help us by Filling the following form"),a.Pb())}function y(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",34),a.Qb(1,"label",35),a.Hc(2," Notes "),a.Pb(),a.Qb(3,"textarea",36),a.Xb("ngModelChange",function(t){return a.yc(e),a.bc().bug.notes=t}),a.Hc(4,"                  "),a.Pb(),a.Pb()}if(2&e){const e=a.bc();a.yb(3),a.ic("ngModel",e.bug.notes)}}const P=function(){return{width:"200px"}};function v(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",37),a.Qb(1,"label",38),a.Hc(2," Status "),a.Pb(),a.Qb(3,"p-dropdown",39),a.Xb("ngModelChange",function(t){return a.yc(e),a.bc().bug.status=t}),a.Pb(),a.Pb()}if(2&e){const e=a.bc();a.yb(3),a.Dc(a.lc(4,P)),a.ic("options",e.bugsStatuses)("ngModel",e.bug.status)}}function w(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",40),a.Qb(1,"div",41),a.Qb(2,"div"),a.Qb(3,"div",42),a.Lb(4,"img",43),a.Pb(),a.Pb(),a.Qb(5,"div",44),a.Qb(6,"p",45),a.Hc(7),a.Pb(),a.Pb(),a.Qb(8,"div"),a.Qb(9,"a",46),a.Xb("click",function(){return a.yc(e),a.bc().removeImage()}),a.Lb(10,"span",47),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=a.bc();a.yb(4),a.ic("src",e.imageAsBase64,a.Ac),a.yb(3),a.Ic(e.imageData.name)}}function Q(e,t){if(1&e){const e=a.Rb();a.Qb(0,"button",48),a.Xb("click",function(){a.yc(e);const t=a.bc(),i=a.vc(7);return t.onSubmit(i,!0)}),a.Hc(1," Submit & Add Another "),a.Qb(2,"span",49),a.Lb(3,"i",50),a.Pb(),a.Pb()}}const S=function(){return["/bug"]};function C(e,t){1&e&&(a.Qb(0,"a",51),a.Hc(1," Back to Report List "),a.Qb(2,"span",28),a.Lb(3,"i",29),a.Pb(),a.Pb()),2&e&&a.ic("routerLink",a.lc(1,S))}let B=(()=>{class e{constructor(e,t,i,s,n){this.bugService=e,this.alertService=t,this.authService=i,this.router=s,this.activatedRoute=n,this.isGuest=!0,this.bug=new b,this.bugsPriorities=[{label:"None",value:null}],this.bugsTypes=[{label:"None",value:null}],this.bugsStatuses=[{label:"None",value:null}],this.showListButton=!1,this.authService.loggedIn$.subscribe(e=>{this.isGuest=!e}),this.authService.userData$.subscribe(e=>{var t,i;this.showListButton=(null===(t=null==e?void 0:e.roles)||void 0===t?void 0:t.includes("Supervisor"))||(null===(i=null==e?void 0:e.roles)||void 0===i?void 0:i.includes("Superadmin"))})}ngOnInit(){this.getBugsTypes(),this.getBugsPriorities(),this.getBugsStatuses(),this.activatedRoute.params.subscribe(e=>{let t=e.id;t&&this.getBugById(t)})}getBugById(e){this.bugService.getBugById(e).subscribe(e=>{this.bug=Object.assign(new b,e.data),this.imageData={name:`Bug${this.bug.id}Attachment`},this.imageAsBase64=this.bug.image})}getBugsPriorities(){this.bugService.getAllBugsPriorities().subscribe(e=>{this.bugsPriorities.push(...e)})}getBugsTypes(){this.bugService.getAllBugsTypes().subscribe(e=>{this.bugsTypes.push(...e)})}getBugsStatuses(){this.bugService.getAllBugsStatuses().subscribe(e=>{this.bugsStatuses.push(...e)})}resetForm(){this.bug=new b,this.imageData=void 0,this.imageAsBase64=void 0,this.removeImage()}onSubmit(e,t=!1){if(e.invalid)return e.form.markAllAsTouched(),this.alertService.newAlert("error","Please complete all the required fields (*) first");this.bug.id?this.bugService.updateBug(this.bug).subscribe(e=>{this.alertService.newAlert("success","The bug updated successfully, Thanks for help"),this.router.navigate(["/bug"])}):this.bugService.createBug(this.bug).subscribe(e=>{if(this.alertService.newAlert("success","The bug reported successfully, Thanks for help"),t)return this.resetForm();this.router.navigate(["/bug"])})}onImageSelect(e){this.imageData=void 0,this.imageAsBase64=void 0,this.imageData=e.target.files[0];let t=new FileReader;t.readAsDataURL(this.imageData),t.onload=()=>{this.imageAsBase64=t.result,this.bug.image=this.imageAsBase64},t.onerror=function(e){}}removeImage(){this.imageAsBase64=void 0,this.imageData=void 0,this.bug.image=void 0,this.fileInput.value=null}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(g),a.Kb(r.a),a.Kb(r.c),a.Kb(n.c),a.Kb(n.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-bug-report"]],viewQuery:function(e,t){var i;1&e&&a.Lc(h,!0),2&e&&a.uc(i=a.Yb())&&(t.fileInput=i.first)},decls:43,vars:22,consts:[[1,"container","mb-5"],[1,"page-title"],[1,"text-primary","font-weight-bold"],[1,"row"],[1,"col-sm-10","col-xs-12"],[3,"ngSubmit"],["registerForm","ngForm"],["class","font-weight-bold mb-3",4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"col-12"],["autocomplete","off","required","","type","text","name","firstName","id","userName","aria-describedby","userName","placeholder","User Name *",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"],["autocomplete","off","required","","type","text","name","bugName","id","bugName","aria-describedby","bugName","placeholder","bug *",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"],[1,"col-6","mb-3"],["for","Type",1,"mr-3","d-block"],["id","type","name","type",3,"options","ngModel","required","ngModelChange"],["for","priority",1,"mr-3","d-block"],["id","priority","name","priority",3,"options","ngModel","required","ngModelChange"],["for","description",1,"mr-3","d-block"],["autocomplete","off","required","","name","description","id","description","rows","5","aria-describedby","description","placeholder","Description *",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"],["class","col-9",4,"ngIf"],["class","col-3",4,"ngIf"],[1,"col-6","mb-4"],[1,"custom-file"],["autocomplete","off","accept","image/*","type","file","id","customFileLang",1,"custom-file-input",3,"change"],["fileInput",""],["for","customFileLang",1,"custom-file-label"],["class","col-12 mb-4",4,"ngIf"],["type","submit",1,"btn","adler-btn"],[1,"ml-4"],[1,"fas","fa-arrow-right"],["type","button","class","btn adler-btn ml-4",3,"click",4,"ngIf"],["class","mt-3 d-block",3,"routerLink",4,"ngIf"],[1,"font-weight-bold","mb-3"],[1,"mb-4"],[1,"col-9"],["for","notes",1,"mr-3","d-block"],["autocomplete","off","name","notes","id","notes","rows","5","aria-describedby","notes","placeholder","Notes",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"],[1,"col-3"],["for","status",1,"mr-3","d-block"],["id","status","name","status",3,"options","ngModel","ngModelChange"],[1,"col-12","mb-4"],[1,"d-flex","align-items-center","justify-content-start"],[1,"image-wrapper"],["alt","",3,"src"],[1,"mr-4","ml-4"],[1,"mt-1","mb-1"],["title","Remove attachment",1,"mr-2","mr-3","text-danger",3,"click"],[1,"p-button-icon","pi","pi-trash","font-weight-bold"],["type","button",1,"btn","adler-btn","ml-4",3,"click"],[1,"ml-2"],[1,"fas","fa-plus"],[1,"mt-3","d-block",3,"routerLink"]],template:function(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"h1",2),a.Hc(3,"Bug Report"),a.Pb(),a.Pb(),a.Qb(4,"div",3),a.Qb(5,"div",4),a.Qb(6,"form",5,6),a.Xb("ngSubmit",function(){a.yc(e);const i=a.vc(7);return t.onSubmit(i)}),a.Fc(8,f,2,1,"h5",7),a.Fc(9,m,2,0,"h5",8),a.Qb(10,"div",3),a.Qb(11,"div",9),a.Qb(12,"input",10),a.Xb("ngModelChange",function(e){return t.bug.userName=e}),a.Pb(),a.Pb(),a.Qb(13,"div",9),a.Qb(14,"input",11),a.Xb("ngModelChange",function(e){return t.bug.bugName=e}),a.Pb(),a.Pb(),a.Qb(15,"div",12),a.Qb(16,"label",13),a.Hc(17," Type * "),a.Pb(),a.Qb(18,"p-dropdown",14),a.Xb("ngModelChange",function(e){return t.bug.type=e}),a.Pb(),a.Pb(),a.Qb(19,"div",12),a.Qb(20,"label",15),a.Hc(21," Priority * "),a.Pb(),a.Qb(22,"p-dropdown",16),a.Xb("ngModelChange",function(e){return t.bug.priority=e}),a.Pb(),a.Pb(),a.Qb(23,"div",9),a.Qb(24,"label",17),a.Hc(25," Description * "),a.Pb(),a.Qb(26,"textarea",18),a.Xb("ngModelChange",function(e){return t.bug.description=e}),a.Hc(27,"                    "),a.Pb(),a.Pb(),a.Fc(28,y,5,1,"div",19),a.Fc(29,v,4,5,"div",20),a.Qb(30,"div",21),a.Qb(31,"div",22),a.Qb(32,"input",23,24),a.Xb("change",function(e){return t.onImageSelect(e)}),a.Pb(),a.Qb(34,"label",25),a.Hc(35,"Add Attachment"),a.Pb(),a.Pb(),a.Pb(),a.Fc(36,w,11,2,"div",26),a.Pb(),a.Qb(37,"button",27),a.Hc(38,"Submit bug"),a.Qb(39,"span",28),a.Lb(40,"i",29),a.Pb(),a.Pb(),a.Fc(41,Q,4,0,"button",30),a.Pb(),a.Pb(),a.Pb(),a.Fc(42,C,4,2,"a",31),a.Pb()}2&e&&(a.yb(8),a.ic("ngIf",t.bug.id),a.yb(1),a.ic("ngIf",!t.bug.id),a.yb(3),a.ic("ngModel",t.bug.userName),a.yb(2),a.ic("ngModel",t.bug.bugName),a.yb(4),a.Dc(a.lc(20,P)),a.ic("options",t.bugsTypes)("ngModel",t.bug.type)("required",!0),a.yb(4),a.Dc(a.lc(21,P)),a.ic("options",t.bugsPriorities)("ngModel",t.bug.priority)("required",!0),a.yb(4),a.ic("ngModel",t.bug.description),a.yb(2),a.ic("ngIf",t.bug.id),a.yb(1),a.ic("ngIf",t.bug.id),a.yb(7),a.ic("ngIf",t.imageData&&t.imageAsBase64),a.yb(5),a.ic("ngIf",!t.bug.id&&!t.isGuest),a.yb(1),a.ic("ngIf",t.showListButton))},directives:[d.y,d.q,d.r,s.m,d.b,d.w,d.p,d.s,p.a,n.f],styles:[".image-wrapper[_ngcontent-%COMP%]{max-width:200px;max-height:500px}.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}"]}),e})();var M=i("XNiG");class I{constructor(){this.applyFiltersSubj=new M.a,this.applyFilters$=this.applyFiltersSubj.asObservable()}get status(){return this._status}set status(e){this._status=e,this.applyFilters()}get type(){return this._type}set type(e){this._type=e,this.applyFilters()}get priority(){return this._priority}set priority(e){this._priority=e,this.applyFilters()}applyFilters(e=!0){this.applyFiltersSubj.next(e)}get filtersData(){return{Type:this.type,Status:this.status,priority:this.priority}}}var k=i("XB66"),H=i("rEr+"),A=i("7zfz"),L=i("6t4m");function F(e,t){1&e&&(a.Qb(0,"tr"),a.Qb(1,"th",24),a.Hc(2," No "),a.Lb(3,"p-sortIcon",25),a.Pb(),a.Qb(4,"th",26),a.Hc(5," User Name "),a.Lb(6,"p-sortIcon",27),a.Pb(),a.Qb(7,"th",28),a.Hc(8," Bug Name "),a.Lb(9,"p-sortIcon",29),a.Pb(),a.Qb(10,"th",30),a.Hc(11," Description "),a.Lb(12,"p-sortIcon",31),a.Pb(),a.Qb(13,"th",32),a.Hc(14," note "),a.Lb(15,"p-sortIcon",33),a.Pb(),a.Qb(16,"th",34),a.Hc(17," Type "),a.Lb(18,"p-sortIcon",35),a.Pb(),a.Qb(19,"th",36),a.Hc(20," Priority "),a.Lb(21,"p-sortIcon",37),a.Pb(),a.Qb(22,"th",38),a.Hc(23," status "),a.Lb(24,"p-sortIcon",39),a.Pb(),a.Qb(25,"th",40),a.Hc(26," Actions "),a.Lb(27,"p-sortIcon",41),a.Pb(),a.Pb())}function O(e,t){1&e&&a.Lb(0,"i",55)}function N(e,t){1&e&&a.Lb(0,"i",56)}function T(e,t){1&e&&a.Lb(0,"i",57)}function x(e,t){1&e&&a.Lb(0,"i",58)}function D(e,t){1&e&&a.Lb(0,"i",59)}function $(e,t){if(1&e){const e=a.Rb();a.Qb(0,"a",60),a.Xb("click",function(){a.yc(e);const t=a.bc().$implicit;return a.bc().preview(t.image)}),a.Lb(1,"span",61),a.Pb()}}function R(e,t){if(1&e){const e=a.Rb();a.Qb(0,"tr"),a.Qb(1,"td"),a.Hc(2),a.Pb(),a.Qb(3,"td"),a.Hc(4),a.Pb(),a.Qb(5,"td"),a.Hc(6),a.Pb(),a.Qb(7,"td"),a.Hc(8),a.Pb(),a.Qb(9,"td"),a.Hc(10),a.Pb(),a.Qb(11,"td"),a.Qb(12,"span",42),a.Hc(13),a.Pb(),a.Pb(),a.Qb(14,"td"),a.Qb(15,"span",42),a.Hc(16),a.Pb(),a.Pb(),a.Qb(17,"td"),a.Qb(18,"span",42),a.Hc(19),a.Qb(20,"span",43),a.Fc(21,O,1,0,"i",44),a.Fc(22,N,1,0,"i",45),a.Fc(23,T,1,0,"i",46),a.Fc(24,x,1,0,"i",47),a.Fc(25,D,1,0,"i",48),a.Pb(),a.Pb(),a.Pb(),a.Qb(26,"td"),a.Qb(27,"div"),a.Fc(28,$,2,0,"a",49),a.Qb(29,"a",50),a.Xb("click",function(){a.yc(e);const i=t.$implicit;return a.bc().editBug(i.id)}),a.Qb(30,"span",51),a.Lb(31,"i",52),a.Pb(),a.Pb(),a.Qb(32,"a",53),a.Xb("click",function(){a.yc(e);const i=t.$implicit;return a.bc().askToConfirmDelete(i.id)}),a.Lb(33,"span",54),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=t.$implicit;a.yb(2),a.Ic(null==e?null:e.id),a.yb(2),a.Ic(null==e?null:e.userName),a.yb(2),a.Ic(null==e?null:e.bugName),a.yb(2),a.Ic(null==e?null:e.description),a.yb(2),a.Ic(null==e?null:e.notes),a.yb(2),a.ic("ngClass",null==e?null:e.type),a.yb(1),a.Jc(" ",null==e?null:e.type," "),a.yb(2),a.ic("ngClass",null==e?null:e.priority),a.yb(1),a.Jc(" ",null==e?null:e.priority," "),a.yb(2),a.ic("ngClass",null==e?null:e.status),a.yb(1),a.Jc(" ",null==e?null:e.status," "),a.yb(1),a.ic("ngSwitch",e.status),a.yb(1),a.ic("ngSwitchCase","Open"),a.yb(1),a.ic("ngSwitchCase","In Progress"),a.yb(1),a.ic("ngSwitchCase","Done"),a.yb(1),a.ic("ngSwitchCase","Finished"),a.yb(1),a.ic("ngSwitchCase","Canceled"),a.yb(3),a.ic("ngIf",e.image&&"string"!=e.image)}}function _(e,t){1&e&&(a.Qb(0,"tr"),a.Qb(1,"td",62),a.Hc(2,"No records found"),a.Pb(),a.Pb())}const X=function(){return{width:"200px"}},q=function(){return["/bug/create"]},j=[{path:"",component:(()=>{class e{constructor(e,t,i,s){this.bugService=e,this.router=t,this.alertService=i,this.confirmService=s,this.rowsPerPageOptions=[10,25,50,100],this.pageNo=1,this.pageSize=this.rowsPerPageOptions[0],this.filter=new I,this.bugList=[],this.bugsPriorities=[{label:"All",value:null}],this.bugsTypes=[{label:"All",value:null}],this.bugsStatuses=[{label:"All",value:null}]}ngOnInit(){this.getBugsPriorities(),this.getBugsTypes(),this.getBugsStatuses(),this.getAllBugs(),this.applyFiltersOnFiltersChange()}paginate(e){this.pageNo=e.page+1,this.pageSize=e.rows,this.getAllBugs()}applyFiltersOnFiltersChange(){this.filter.applyFilters$.subscribe(e=>{e&&this.getAllBugs()})}getBugsPriorities(){this.bugService.getAllBugsPriorities().subscribe(e=>{this.bugsPriorities.push(...e)})}getBugsTypes(){this.bugService.getAllBugsTypes().subscribe(e=>{this.bugsTypes.push(...e)})}getBugsStatuses(){this.bugService.getAllBugsStatuses().subscribe(e=>{this.bugsStatuses.push(...e)})}getAllBugs(){this.bugService.getAllBugs(this.pageNo,this.pageSize,this.filter.filtersData).subscribe(e=>{this.bugList=e.data,this.count=e.count})}download(e){let t=String(e).split(",")[1];window.open(t,"_blank")}preview(e){let t=window.open("about:blank"),i=new Image;i.src=e,setTimeout(function(){t.document.write(i.outerHTML)},0)}editBug(e){this.router.navigate(["/bug/edit",e])}askToConfirmDelete(e){this.confirmService.newConfirmation("Are you sure you want to delete this bug?",()=>this.deleteBug(e))}deleteBug(e){this.bugService.deleteBug(e).subscribe(e=>{this.alertService.newAlert("success","deleted successfully"),this.getAllBugs()})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(g),a.Kb(n.c),a.Kb(r.a),a.Kb(k.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-bugs-list"]],decls:30,vars:28,consts:[[1,"container-fluid","p-5"],[1,"page-title"],[1,"text-primary","font-weight-bold"],[1,"row","mb-4","mt-3","align-items-end","justify-content-between"],[1,"col","d-flex"],[1,"mr-5","ml-3"],["for","Type",1,"mr-3","d-block"],["id","Type","name","Type",3,"options","ngModel","ngModelChange"],[1,"mr-5"],["for","status",1,"mr-3","d-block"],["id","status","name","status",3,"options","ngModel","ngModelChange"],["for","priority",1,"mr-3","d-block"],["id","priority","name","priority",3,"options","ngModel","ngModelChange"],[1,"col","text-right"],["type","submit",1,"btn","adler-btn",3,"routerLink"],[1,"ml-4"],[1,"fas","fa-plus"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"responsive","value","rows","paginator","rowHover","showCurrentPageReport"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[3,"rows","first","rowsPerPageOptions","totalRecords","onPageChange"],["pSortableColumn","id",2,"width","4rem"],["field","id"],["pSortableColumn","userName",2,"width","10rem"],["field","userName"],["pSortableColumn","bugName",2,"width","18rem"],["field","bugName"],["pSortableColumn","description",2,"width","20rem"],["field","description"],["pSortableColumn","note",2,"width","18rem"],["field","note"],["pSortableColumn","type",2,"width","10rem"],["field","type"],["pSortableColumn","priority",2,"width","10rem"],["field","priority"],["pSortableColumn","status",2,"width","10rem"],["field","status"],["pSortableColumn","image",2,"width","7rem"],["field","image"],[1,"p-2",3,"ngClass"],[3,"ngSwitch"],["class","far fa-eye",4,"ngSwitchCase"],["class","fa fa-laptop-code",4,"ngSwitchCase"],["class","fas fa-check-square",4,"ngSwitchCase"],["class","fas fa-check-double",4,"ngSwitchCase"],["class","fas fa-ban",4,"ngSwitchCase"],["class","mr-2 mr-3 text-secondary","title","Preview",3,"click",4,"ngIf"],["title","Edit",1,"mr-2","mr-3","text-secondary",3,"click"],[1,"font-weight-bold"],[1,"fas","fa-edit"],["title","Delete",1,"mr-2","mr-3","text-secondary",3,"click"],[1,"p-button-icon","pi","pi-trash","font-weight-bold"],[1,"far","fa-eye"],[1,"fa","fa-laptop-code"],[1,"fas","fa-check-square"],[1,"fas","fa-check-double"],[1,"fas","fa-ban"],["title","Preview",1,"mr-2","mr-3","text-secondary",3,"click"],[1,"p-button-icon","pi","pi-images","font-weight-bold"],["colspan","9",1,"text-center","pt-4","pb-4"]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"h1",2),a.Hc(3,"Bug Report - List"),a.Pb(),a.Pb(),a.Qb(4,"div",3),a.Qb(5,"div",4),a.Qb(6,"div",5),a.Qb(7,"label",6),a.Hc(8," Type "),a.Pb(),a.Qb(9,"p-dropdown",7),a.Xb("ngModelChange",function(e){return t.filter.type=e}),a.Pb(),a.Pb(),a.Qb(10,"div",8),a.Qb(11,"label",9),a.Hc(12," Status "),a.Pb(),a.Qb(13,"p-dropdown",10),a.Xb("ngModelChange",function(e){return t.filter.status=e}),a.Pb(),a.Pb(),a.Qb(14,"div",8),a.Qb(15,"label",11),a.Hc(16," Priority "),a.Pb(),a.Qb(17,"p-dropdown",12),a.Xb("ngModelChange",function(e){return t.filter.priority=e}),a.Pb(),a.Pb(),a.Pb(),a.Qb(18,"div",13),a.Qb(19,"button",14),a.Hc(20,"New report"),a.Qb(21,"span",15),a.Lb(22,"i",16),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(23,"div",17),a.Qb(24,"p-table",18,19),a.Fc(26,F,28,0,"ng-template",20),a.Fc(27,R,34,18,"ng-template",21),a.Fc(28,_,3,0,"ng-template",22),a.Pb(),a.Qb(29,"p-paginator",23),a.Xb("onPageChange",function(e){return t.paginate(e)}),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(9),a.Dc(a.lc(24,X)),a.ic("options",t.bugsTypes)("ngModel",t.filter.type),a.yb(4),a.Dc(a.lc(25,X)),a.ic("options",t.bugsStatuses)("ngModel",t.filter.status),a.yb(4),a.Dc(a.lc(26,X)),a.ic("options",t.bugsPriorities)("ngModel",t.filter.priority),a.yb(2),a.ic("routerLink",a.lc(27,q)),a.yb(5),a.ic("responsive",!0)("value",t.bugList)("rows",10)("paginator",!0)("rowHover",!0)("paginator",!1)("showCurrentPageReport",!0),a.yb(5),a.ic("rows",t.pageSize)("first",1)("rowsPerPageOptions",t.rowsPerPageOptions)("totalRecords",t.count))},directives:[p.a,d.p,d.s,n.d,H.d,A.i,L.a,H.c,H.b,s.k,s.o,s.p,s.m],styles:[".Critical[_ngcontent-%COMP%]{background-color:#981e1e;color:#fff}.High[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.Medium[_ngcontent-%COMP%]{background-color:#ff9800;color:#fff}.Low[_ngcontent-%COMP%]{background-color:#ffc107;color:#fff}.Inquiry[_ngcontent-%COMP%]{color:#555}.Bug[_ngcontent-%COMP%], .Inquiry[_ngcontent-%COMP%]{font-weight:700}.Bug[_ngcontent-%COMP%]{color:#f10}.Not.as.defined[_ngcontent-%COMP%]{font-weight:700;color:#ff9100}.Change.Request[_ngcontent-%COMP%]{font-weight:700;color:#0717ff}.Open[_ngcontent-%COMP%]{color:#555}.In.Progress[_ngcontent-%COMP%]{color:#060af6}.Done[_ngcontent-%COMP%]{color:#28e906}.Finished[_ngcontent-%COMP%]{color:#038a3b}.Canceled[_ngcontent-%COMP%]{color:#ff0707}"]}),e})(),canActivate:[r.b],data:{roles:[o.a.SuperAdmin,o.a.Supervisor]}},{path:"create",component:B},{path:"edit/:id",component:B,canActivate:[r.b],data:{roles:[o.a.SuperAdmin,o.a.Supervisor]}},{path:"*",redirectTo:""}];let K=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[n.g.forChild(j)],n.g]}),e})();var z=i("PCNd");let J=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},providers:[g],imports:[[s.c,K,z.a]]}),e})()}}]);