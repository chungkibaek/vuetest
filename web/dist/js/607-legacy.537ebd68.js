"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[607],{7607:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",staticStyle:{padding:"50px"},attrs:{align:"center"}},[s("div",{staticClass:"card align-middle",staticStyle:{width:"20rem","border-radius":"20px"}},[s("div",{staticClass:"card-title",staticStyle:{"margin-top":"30px"}},[s("h2",{staticClass:"card-title text-center",staticStyle:{color:"#113366"}},[t._v(t._s(t.pageTitleData))])]),s("span",[t._v("로그인 아이디 : "+t._s(this.loginid))]),s("div",{staticClass:"card-body"},[s("form",[s("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("아이디")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.userid,expression:"userinfo.userid"}],ref:"idctl",staticClass:"form-control",attrs:{type:"text",placeholder:"id를 입력하세요",required:"",autofocus:""},domProps:{value:t.userinfo.userid},on:{input:function(e){e.target.composing||t.$set(t.userinfo,"userid",e.target.value)}}}),s("br"),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("비밀번호")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userinfo.passwd,expression:"userinfo.passwd"}],ref:"pwdctl",staticClass:"form-control",attrs:{type:"password",autoComplete:"off",placeholder:"비밀번호를 입력하세요",required:""},domProps:{value:t.userinfo.passwd},on:{input:function(e){e.target.composing||t.$set(t.userinfo,"passwd",e.target.value)}}}),s("br"),s("div",{staticClass:"d-flex align-items-center justify-content-between mt-4 mb-0"},[s("a",{staticClass:"small",attrs:{href:"password.html"}},[t._v("비밀번호 찾기")]),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{id:"btn-Yes",type:"button"},on:{click:function(e){return e.preventDefault(),t.loginClick.apply(null,arguments)}}},[t._v("로 그 인")])])])]),t._m(0)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-footer text-center py-3"},[s("div",{staticClass:"small"},[s("a",{attrs:{href:"/memberRegist"}},[t._v("회원가입")])])])}],i=s(6198),n=s(3019),o=(s(5666),s(629)),l="userInfoStore",u={name:"logintest",data:function(){return{pageTitleData:"로그인",userinfo:{userid:"",passwd:""},loginid:{}}},computed:(0,n.Z)({},(0,o.Se)(l,{storeUser:"GE_USER"})),created:function(){this.loginid=this.storeUser.user.userid},watch:{storeUser:function(t){this.loginid=t.user.userid}},methods:(0,n.Z)((0,n.Z)({},(0,o.nv)(l,["AC_USER"])),{},{loginClick:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.userinfo.userid){e.next=3;break}return t.$refs.idctl.focus(),e.abrupt("return",t.$swal("아이디를 입력하세요."));case 3:if(""!=t.userinfo.password){e.next=6;break}return t.$refs.pwdctl.focus(),e.abrupt("return",t.$swal("비밀번호를 입력하세요."));case 6:return s=[t.userinfo.userid,t.userinfo.passwd],e.next=9,t.$api("/user/login2/login",{param:s});case 9:r=e.sent,r.length>0&&(console.log(r[0].userid),a={user:r[0]},t.AC_USER(a),t.$router.push({path:"/"}));case 11:case"end":return e.stop()}}),e)})))()}})},c=u,d=s(1001),p=(0,d.Z)(c,r,a,!1,null,null,null),f=p.exports}}]);
//# sourceMappingURL=607-legacy.537ebd68.js.map