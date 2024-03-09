"use strict";(()=>{var e={};e.id=748,e.ids=[748],e.modules={2113:e=>{e.exports=require("next-auth/next")},7449:e=>{e.exports=require("next-auth/providers/credentials")},3598:e=>{e.exports=require("next-auth/providers/google")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},7692:(e,a,r)=>{r.a(e,async(e,s)=>{try{r.r(a),r.d(a,{config:()=>m,default:()=>p,routeModule:()=>d});var t=r(1802),i=r(7153),n=r(6249),l=r(7075),o=e([l]);l=(o.then?(await o)():o)[0];let u=t.PagesAPIRouteModule,p=(0,n.l)(l,"default"),m=(0,n.l)(l,"config"),d=new u({definition:{kind:i.x.PAGES_API,page:"/api/auth/[...nextauth]",pathname:"/api/auth/[...nextauth]",bundlePath:"",filename:""},userland:l});s()}catch(e){s(e)}})},7075:(e,a,r)=>{r.a(e,async(e,s)=>{try{r.r(a),r.d(a,{default:()=>c});var t=r(7826),i=r(2113),n=r.n(i),l=r(7449),o=r.n(l),u=r(3598),p=r.n(u),m=e([t]);t=(m.then?(await m)():m)[0];let d={session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET,providers:[o()({type:"credentials",name:"Credentials",credentials:{username:{label:"Username",type:"text"},email:{label:"Email",type:"email"},password:{label:"Password",type:"password"},confirmpassword:{label:"Confirm Password",type:"password"}},async authorize(e){let{email:a,password:r}=e,s=await (0,t.zB)({email:a});return s&&r===s.userPassword?s:null}}),p()({clientId:process.env.GOOGLE_OAUTH_CLIENT_ID||"",clientSecret:process.env.GOOGLE_OAUTH_CLIENT_SECRET||""})],callbacks:{async jwt({token:e,account:a,profile:r,user:s}){if(a?.provider==="credentials"&&(e.email=s.email,e.username=s.username),a?.provider==="google"){let a={username:s.name,email:s.email,image:s.image,type:"google"};await (0,t.qj)(a,a=>{a.status?(e.email=a.data.email,e.username=a.data.username,e.image=a.data.image,e.type=a.data.type):console.log(a.message)})}return e},session:async({session:e,token:a})=>("email"in a&&(e.user.email=a.email),"username"in a&&(e.user.username=a.username),"image"in a&&(e.user.image=a.image),e)},pages:{signIn:"/auth/login"}},c=n()(d);s()}catch(e){s(e)}})}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),r=a.X(0,[222,826],()=>__webpack_exec__(7692));module.exports=r})();