(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5iNH":function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("tVjc"),o=r("fXoL"),u=r("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.prefix="HomeWork"}GetHomeworkForStudent(t,e){let r="";return t&&(r+="?StudentId="+t),e&&(r+=r?"&":"?",r+="GroupInstanceId="+e),this.http.get(`${n.a}/${this.prefix}/GetHomeworkForStudent${r}`)}GetHomeworkForStudentByGroupInstanceId(t,e){let r="";return t&&(r+="?StudentId="+t),e&&(r+=r?"&":"?",r+="GroupInstanceId="+e),this.http.get(`${n.a}/${this.prefix}/GetHomeworkForStudentByGroupInstanceId${r}`)}GetHomeworkSubmitionById(t){return this.http.get(`${n.a}/${this.prefix}/GetHomeworkSubmitionById?HomeWorkSubmitionId=${t}`)}SubmitHomeWorkForStudent(t){return this.http.post(`${n.a}/${this.prefix}/SubmitHomeWorkForStudent?id=${t.id}`,t)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(u.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xqMB:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("tVjc"),o=r("fXoL"),u=r("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.prefix="GroupInstance",this.rankPrefix="Rank"}GetLastByStudentId(t){return this.http.get(`${n.a}/${this.prefix}/GetLastByStudent?studentId=${t}`)}getAllLevels(){return this.http.get(n.a+"/Level/GetAll")}GetAllLastByStudent(t){return this.http.get(`${n.a}/${this.prefix}/GetAllLastByStudent?studentId=${t}`)}GetRankForStudentGroupInstance(t){return this.http.get(`${n.a}/${this.rankPrefix}/GetRankForStudentGroupInstance?StudentId=${t}`)}GetRankForStudentGroupDefinition(t){return this.http.get(`${n.a}/${this.rankPrefix}/GetRankForStudentGroupDefinition?StudentId=${t}`)}uploadImage(t,e){return this.http.put(n.a+"/Account/UpdatePhoto",{userId:t,base64photo:e})}msgToInstructor(t){return this.http.post(n.a+"/Account/SendMessageToInstructor",t)}msgToAdmin(t){return this.http.post(n.a+"/Account/SendMessageToAdmin",t)}getCurrentProgressForStudent(t){return this.http.get(`${n.a}/Account/GetCurrentProgress?studentId=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(u.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);