"use strict";(()=>{var e={};e.id=697,e.ids=[697],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3745:e=>{e.exports=import("firebase/app")},1492:e=>{e.exports=import("firebase/firestore")},364:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{config:()=>l,default:()=>u,routeModule:()=>p});var i=t(1802),o=t(7153),r=t(6249),n=t(4165),d=e([n]);n=(d.then?(await d)():d)[0];let u=(0,r.l)(n,"default"),l=(0,r.l)(n,"config"),p=new i.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/submission",pathname:"/api/submission",bundlePath:"",filename:""},userland:n});s()}catch(e){s(e)}})},4165:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{default:()=>handler});var i=t(5715),o=e([i]);async function handler(e,a){"POST"===e.method?(console.log(e.body),await (0,i.Mt)(e.body,({status:e,message:t})=>{e?a.status(200).json({status:e,message:t}):a.status(400).json({status:e,message:t})})):a.status(405).json({status:!1,message:"Method not allowedd"})}i=(o.then?(await o)():o)[0],s()}catch(e){s(e)}})}};var a=require("../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[222,715],()=>__webpack_exec__(364));module.exports=t})();