(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ejW6:function(e,n,t){"use strict";t.r(n),t.d(n,"StudentModule",function(){return f});var o=t("ofXK"),r=t("fXoL");function c(e,n){1&e&&(r.Qb(0,"div",4),r.Qb(1,"div",5),r.Qb(2,"div",6),r.Qb(3,"div",7),r.Gc(4,"Lesson 1"),r.Pb(),r.Qb(5,"div",8),r.Gc(6,"05 Dec 2020"),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"div",9),r.Qb(8,"a"),r.Lb(9,"i",10),r.Pb(),r.Pb(),r.Pb())}function i(e,n){if(1&e&&(r.Qb(0,"div",2),r.Ec(1,c,10,0,"div",3),r.Pb()),2&e){const e=r.bc();r.yb(1),r.ic("ngForOf",e.groupInstances)}}let a=(()=>{class e{constructor(){this.groupInstances=new Array(6)}ngOnInit(){this.groupInstances.fill("data")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-syllabus-matrial"]],decls:3,vars:1,consts:[["class","rounded p-4 mb-2",4,"ngIf"],[1,"text-center","p-5","m-5"],[1,"rounded","p-4","mb-2"],["class","lesson-instance-card border row p-3 mb-3",4,"ngFor","ngForOf"],[1,"lesson-instance-card","border","row","p-3","mb-3"],[1,"lesson-details","col-10"],[1,"position-relative","d-flex"],[1,"text-secondary","font-weight-bold"],[1,"ml-5"],[1,"download-lesson-icon","text-secondary","d-flex","justify-content-end","col"],[1,"fa","fa-download"]],template:function(e,n){1&e&&(r.Ec(0,i,2,1,"div",0),r.Qb(1,"div",1),r.Gc(2," No Materials added yet\n"),r.Pb()),2&e&&r.ic("ngIf",!1)},directives:[o.l,o.k],styles:[".lesson-instance-card[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 2px 4px 0 rgba(0,0,0,.16);border:1px solid rgba(26,58,63,.16);background-color:#fafafa}.points-tag[_ngcontent-%COMP%]{height:20px;width:20px;background-image:linear-gradient(0deg,#fd5900,#ffde00);color:#fff}.download-lesson-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:40px;font-weight:700}"]}),e})();var d=t("tyNb");const s=function(){return["homework"]},l=function(){return["test"]},b=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-progress"]],decls:14,vars:4,consts:[[1,"Progress","container"],[1,"page-title","mb-3"],[1,"text-primary","font-weight-bold"],[1,"tabs","row","border","d-flex","justify-content-around","flex-wrap","align-items-center","mb-4","py-2","px-2","m-auto"],["routerLinkActive","active",1,"eduTab","col-12","col-md-3","text-center",3,"routerLink"],[1,"eduTab","col-12","col-md-2","text-center","comingSoon-RedMenuLink"],[1,"red-menu-pBadge"]],template:function(e,n){1&e&&(r.Qb(0,"div",0),r.Qb(1,"div",1),r.Qb(2,"h1",2),r.Gc(3,"Progress"),r.Pb(),r.Pb(),r.Qb(4,"div",3),r.Qb(5,"a",4),r.Gc(6,"Homework "),r.Pb(),r.Qb(7,"a",4),r.Gc(8,"Test "),r.Pb(),r.Qb(9,"a",5),r.Qb(10,"span",6),r.Gc(11,"Coming Soon"),r.Pb(),r.Gc(12," Feedback "),r.Pb(),r.Pb(),r.Lb(13,"router-outlet"),r.Pb()),2&e&&(r.yb(5),r.ic("routerLink",r.lc(2,s)),r.yb(2),r.ic("routerLink",r.lc(3,l)))},directives:[d.f,d.e,d.h],styles:[".tabs[_ngcontent-%COMP%]{width:75%;height:auto;border-radius:50px;background-image:linear-gradient(270deg,#2c3e90,#b4002b)}.eduTab[_ngcontent-%COMP%]{line-height:40px;color:#fff}.eduTab[_ngcontent-%COMP%]:hover{text-decoration:none}.eduTab.active[_ngcontent-%COMP%]{font-weight:600;background-color:#fff!important;border-radius:50px;color:#2c3e90!important}"]}),e})(),children:[{path:"",redirectTo:"homework",pathMatch:"full"},{path:"syllabus-material",component:a},{path:"homework",loadChildren:()=>Promise.all([t.e(5),t.e(22)]).then(t.bind(null,"pr+G")).then(e=>e.HomeworkModule)},{path:"test",loadChildren:()=>Promise.all([t.e(0),t.e(23)]).then(t.bind(null,"7/hU")).then(e=>e.TestModule)},{path:"community",loadChildren:()=>t.e(4).then(t.bind(null,"rPnq")).then(e=>e.CommunityModule)}]}];let u=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(n){return new(n||e)},imports:[[d.g.forChild(b)],d.g]}),e})();var p=t("PCNd");let f=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(n){return new(n||e)},imports:[[o.c,u,p.a]]}),e})()}}]);