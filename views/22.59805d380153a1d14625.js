(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{lhKH:function(e,t,n){"use strict";n.r(t),n.d(t,"ContactUsModule",function(){return f});var o=n("ofXK"),c=n("PCNd"),r=n("tyNb"),s=n("mcSX");class i{}var a=n("fXoL"),b=n("dJ3e"),l=n("3Pt+");function u(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",8),a.Qb(1,"label",16),a.Hc(2,"Your Email"),a.Qb(3,"span",10),a.Hc(4,"*"),a.Pb(),a.Pb(),a.Qb(5,"input",17),a.Xb("ngModelChange",function(t){return a.yc(e),a.bc().contactUsReq.email=t}),a.Pb(),a.Pb()}if(2&e){const e=a.bc();a.yb(5),a.ic("ngModel",e.contactUsReq.email)}}const d=[{path:"",component:(()=>{class e{constructor(e,t,n,o){this.alertService=e,this.authService=t,this.router=n,this.authenticationApiService=o,this.contactUsReq=new i}ngOnInit(){this.authService.userData$.subscribe(e=>{e&&(this.contactUsReq.email=e.email,this.contactUsReq.studentId=e.id)}),this.authService.loggedIn$.subscribe(e=>{this.isLoggedIn=e})}onSubmit(e){if(e.form.invalid)return this.alertService.newAlert("error","Please, Complete all the required fields (*)");this.authenticationApiService.contactUs(this.contactUsReq).subscribe(e=>{this.alertService.newAlert("success","Your message sent successfully, wait a response from us as soon as possible"),this.router.navigate(["/home"])})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(b.a),a.Kb(b.c),a.Kb(r.c),a.Kb(s.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-contact-us"]],features:[a.xb([s.a])],decls:27,vars:3,consts:[[1,"container"],[1,"page-title"],[1,"text-primary","font-weight-bold"],[1,"row"],[1,"col-8"],[3,"ngSubmit"],["contactUs","ngForm"],["class","form-group",4,"ngIf"],[1,"form-group"],["for","subject"],[1,"text-danger"],["required","","type","text","name","subject","id","subject","placeholder","Enter a subject",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"],["required","","name","message","id","body","placeholder","Enter a message body",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","adler-btn","mt-3","mb-3"],[1,"ml-1"],[1,"far","fa-envelope"],["for","email"],["required","","type","email","name","email","autocomplete","off","id","email","aria-describedby","emailHelp","placeholder","Email",1,"form-control","adler-form-control",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"h1",2),a.Hc(3,"Contact-us"),a.Pb(),a.Qb(4,"p"),a.Hc(5,"Please Fill the following form"),a.Pb(),a.Pb(),a.Qb(6,"div",3),a.Qb(7,"div",4),a.Qb(8,"form",5,6),a.Xb("ngSubmit",function(){a.yc(e);const n=a.vc(9);return t.onSubmit(n)}),a.Fc(10,u,6,1,"div",7),a.Qb(11,"div",8),a.Qb(12,"label",9),a.Hc(13,"Subject"),a.Qb(14,"span",10),a.Hc(15,"*"),a.Pb(),a.Pb(),a.Qb(16,"input",11),a.Xb("ngModelChange",function(e){return t.contactUsReq.subject=e}),a.Pb(),a.Pb(),a.Qb(17,"div",8),a.Qb(18,"label",9),a.Hc(19,"Your Message"),a.Qb(20,"span",10),a.Hc(21,"*"),a.Pb(),a.Pb(),a.Qb(22,"textarea",12),a.Xb("ngModelChange",function(e){return t.contactUsReq.message=e}),a.Pb(),a.Pb(),a.Qb(23,"button",13),a.Hc(24,"Send "),a.Qb(25,"span",14),a.Lb(26,"i",15),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()}2&e&&(a.yb(10),a.ic("ngIf",!t.isLoggedIn),a.yb(6),a.ic("ngModel",t.contactUsReq.subject),a.yb(6),a.ic("ngModel",t.contactUsReq.message))},directives:[l.y,l.q,l.r,o.m,l.b,l.w,l.p,l.s],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(d)],r.g]}),e})(),f=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[o.c,m,c.a]]}),e})()}}]);