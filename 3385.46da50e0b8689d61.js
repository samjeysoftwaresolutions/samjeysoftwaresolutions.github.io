"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3385],{3385:(F,f,t)=>{t.r(f),t.d(f,{SignupPage:()=>P});var g=t(2594),n=t(5036),v=t(9941),l=t(712),m=t(829),u=t(5109),p=t(5440),c=t(1062);class w{static isNotPresent(o){let s=o.value;return null==s||""===s}static isPresent(o){return null!=o}}class y{static pwdEqual(o){let s=!1;return a=>{if(a.root instanceof n.J3&&a.root.controls[o]instanceof n.hs){let i=a.root.controls[o];return s||(s=!0,i.valueChanges.subscribe(()=>{a.updateValueAndValidity()})),w.isPresent(n.k0.required(a))||i.value==a.value?null:{pwdEqual:!0}}return null}}}var d=t(5355),e=t(7762);let P=(()=>{var r;class o{constructor(){}ngOnInit(){this.formInitialize()}formInitialize(){this.fg=new n.J3({mobile_no_email:new n.hs(null,n.k0.required),psw:new n.hs(null,n.k0.required),con_psw:new n.hs(null,[n.k0.required,y.pwdEqual("psw")])})}}return(r=o).\u0275fac=function(a){return new(a||r)},r.\u0275cmp=e.VBU({type:r,selectors:[["app-signup"]],standalone:!0,features:[e.aNF],decls:30,vars:5,consts:[["fxLayout","row","fxLayoutAlign","center center",2,"height","100%"],[2,"width","360px"],["fxLayout","row","fxLayoutAlign","center center",2,"gap","1%",3,"formGroup"],["fxLayout","column"],["type","text","matInput","","formControlName","mobile_no_email","autocomplete","off"],["matInput","","formControlName","psw","autocomplete","off",3,"type"],["matIconSuffix","","color","primary",2,"cursor","pointer",3,"click"],["matInput","","formControlName","con_psw","autocomplete","off",3,"type"],["fxLayout","row","fxLayoutAlign","end center",2,"gap","1%"],["mat-button","","routerLink","/login"],["size","small","color","primary"]],template:function(a,i){1&a&&(e.j41(0,"ion-content")(1,"div",0)(2,"ion-card",1)(3,"ion-card-header")(4,"ion-card-title"),e.EFF(5," SignUp "),e.k0s()(),e.j41(6,"ion-card-content")(7,"form",2)(8,"div",3)(9,"mat-form-field")(10,"mat-label"),e.EFF(11,"Mobile No / Email"),e.k0s(),e.nrm(12,"input",4),e.k0s(),e.j41(13,"mat-form-field")(14,"mat-label"),e.EFF(15,"Password"),e.k0s(),e.nrm(16,"input",5),e.j41(17,"mat-icon",6),e.bIt("click",function(){return i.isSeePsw=!i.isSeePsw}),e.EFF(18),e.k0s()(),e.j41(19,"mat-form-field")(20,"mat-label"),e.EFF(21,"Confirm Password"),e.k0s(),e.nrm(22,"input",7),e.j41(23,"mat-icon",6),e.bIt("click",function(){return i.isSeeConPsw=!i.isSeeConPsw}),e.EFF(24),e.k0s()()()(),e.j41(25,"div",8)(26,"button",9),e.EFF(27,"Already hava account? Login"),e.k0s(),e.j41(28,"ion-button",10),e.EFF(29,"SignUp"),e.k0s()()()()()()),2&a&&(e.R7$(7),e.Y8G("formGroup",i.fg),e.R7$(9),e.Y8G("type",i.isSeePsw?"text":"password"),e.R7$(2),e.SpI(" ",i.isSeePsw?"visibility":"visibility_off"," "),e.R7$(4),e.Y8G("type",i.isSeeConPsw?"text":"password"),e.R7$(2),e.SpI(" ",i.isSeeConPsw?"visibility":"visibility_off"," "))},dependencies:[v.W9,g.MD,n.YN,n.qT,n.me,n.BC,n.cb,l.bv,l.Jm,l.b_,l.I9,l.ME,l.tN,l.W9,l.N7,n.X1,n.j4,n.JD,d.iI,d.Wk,u.RG,u.rl,u.nJ,u.yw,p.fS,p.fg,m.Hl,m.$z,c.m_,c.An]}),o})()}}]);