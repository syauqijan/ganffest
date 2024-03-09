exports.id=317,exports.ids=[317],exports.modules={401:a=>{a.exports={footerContainer:"Footer_footerContainer__iMybK",contentScomed:"Footer_contentScomed__2ztx8",socmed:"Footer_socmed__fGSEi",address:"Footer_address__NebbU",title:"Footer_title__3J_Qx",addressContainer:"Footer_addressContainer__gSlKY",titleSocmed:"Footer_titleSocmed__Llg39",socialIcon:"Footer_socialIcon__0Cpic"}},2078:a=>{a.exports={navbar:"Navbar_navbar__YVq4W",navbarContainer:"Navbar_navbarContainer__AokPG",hamburger:"Navbar_hamburger__krzmF",dropdownWrapMobile:"Navbar_dropdownWrapMobile__rjUgF",navPage:"Navbar_navPage__jAREt",buttonAuth:"Navbar_buttonAuth__CrveK",logo:"Navbar_logo__RJqOS",contentNavbar:"Navbar_contentNavbar__hah_N",boldLink:"Navbar_boldLink__jVLFz",avatar:"Navbar_avatar__ZWnRq",avatarButton:"Navbar_avatarButton__e_Wzr",dropdownWrap:"Navbar_dropdownWrap__0H6og",dropdown:"Navbar_dropdown__DLTbL",dropdownVisible:"Navbar_dropdownVisible__qfrlH",activeLink:"Navbar_activeLink__oxXdU",authButton:"Navbar_authButton__ZLS_V",dropdownMobile:"Navbar_dropdownMobile__7GMZe",navPageMobile:"Navbar_navPageMobile__BTzd7",buttonSignout:"Navbar_buttonSignout__z4ztr"}},9317:(a,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>App});var s=o(997),n=o(6689),r=o(1649),i=o(2078),l=o.n(i),t=o(1664),c=o.n(t),d=o(1163),_=o(5675),b=o.n(_),h=o(3365),v=o.n(h),m=o(4779),N=o.n(m);let layouts_Navbar=()=>{let a=(0,d.useRouter)(),[e,o]=(0,n.useState)(!1),[i,t]=(0,n.useState)(!1),{data:_}=(0,r.useSession)(),closeDropdown=()=>{o(!1)},toggleDropdownMobile=()=>{t(!i)},handleNavPageMobileClick=()=>{t(!1)};return s.jsx("div",{className:l().navbar,style:{position:"/"===a.pathname?"absolute":"relative",zIndex:2},children:(0,s.jsxs)("div",{className:l().navbarContainer,children:[s.jsx("div",{className:l().logo,children:s.jsx(b(),{src:"/logonavbar.svg",width:30,height:30,alt:"Logo",className:l().logo})}),(0,s.jsxs)("div",{className:l().contentNavbar,children:[s.jsx(c(),{href:"/",className:`${l().navPage} ${"/"===a.pathname?l().activeLink:""}`,children:"Homepage"}),s.jsx(c(),{href:"/submission",className:`${l().navPage} ${"/submission"===a.pathname?l().activeLink:""}`,children:"Submission"}),s.jsx(c(),{href:"/about",className:`${l().navPage} ${"/about"===a.pathname?l().activeLink:""}`,children:"About Us"}),s.jsx("div",{className:l().hamburger,onClick:()=>toggleDropdownMobile(),children:i?s.jsx(N(),{className:l().hamburgerIcon,style:{fontSize:"40px",color:"white"}}):s.jsx(v(),{className:l().hamburgerIcon,style:{fontSize:"40px",color:"white"}})}),i&&s.jsx("div",{className:l().dropdownWrapMobile,onClick:()=>closeDropdown(),children:(0,s.jsxs)("div",{className:l().dropdownMobile,children:[s.jsx(c(),{href:"/",className:`${l().navPageMobile} ${"/"===a.pathname?l().boldLink:""}`,onClick:handleNavPageMobileClick,children:"Homepage"}),s.jsx(c(),{href:"/submission",className:`${l().navPageMobile} ${"/submission"===a.pathname?l().boldLink:""}`,onClick:handleNavPageMobileClick,children:"Submission"}),s.jsx(c(),{href:"/about",className:`${l().navPageMobile} ${"/about"===a.pathname?l().boldLink:""}`,onClick:handleNavPageMobileClick,children:"About Us"})]})})]})]})})};var u=o(401),g=o.n(u),x=o(3281),p=o.n(x),j=o(5631),f=o.n(j),k=o(9226),w=o.n(k);let layouts_Footer=()=>(0,s.jsxs)("footer",{className:g().footerContainer,children:[(0,s.jsxs)("div",{className:g().addressContainer,children:[s.jsx("p",{className:g().title,children:"Ganesha Film Festival"}),s.jsx("p",{className:g().address,children:"Jl. Ganesha No.10, Lb. Siliwangi, Coblong "}),s.jsx("p",{className:g().address,children:"Bandung,  JawaBarat "}),s.jsx("p",{className:g().address,children:"40132"})]}),(0,s.jsxs)("div",{className:g().socmed,children:[s.jsx("div",{className:g().titleSocmed,children:s.jsx("p",{children:"Find Us On Social Media"})}),(0,s.jsxs)("div",{className:g().contentScomed,children:[s.jsx("div",{className:g().socmedIcon,children:s.jsx("a",{href:"mailto:mail.ganffest@gmail.com",target:"_blank",rel:"noreferrer",children:s.jsx(w(),{className:"socialIcons",style:{color:"#222536"}})})}),s.jsx("div",{className:g().socmedIcon,children:s.jsx("a",{href:"https://www.instagram.com/ganffest/",target:"_blank",rel:"noreferrer",children:s.jsx(p(),{className:"socialIcons",style:{color:"#222536"}})})}),s.jsx("div",{className:g().socmedIcon,children:s.jsx("a",{href:"https://twitter.com/ganffest",target:"_blank",rel:"noreferrer",children:s.jsx(f(),{className:"socialIcons",style:{color:"#222536"}})})})]})]})]});var M=o(968),S=o.n(M);let C=["/404"],L=["/404","/auth/login","/auth/register"],layouts_MainLayout=a=>{let{children:e}=a,{pathname:o}=(0,d.useRouter)();return(0,s.jsxs)("div",{className:"container",children:[s.jsx(S(),{children:s.jsx("link",{rel:"icon",href:"/gffhead.png",type:"image/png"})}),(0,s.jsxs)("div",{children:[!C.includes(o)&&s.jsx(layouts_Navbar,{}),s.jsx("main",{children:e})]}),!L.includes(o)&&s.jsx(layouts_Footer,{})]})};function App({Component:a,pageProps:{session:e,...o}}){return s.jsx(r.SessionProvider,{session:e,children:s.jsx(layouts_MainLayout,{children:s.jsx(a,{...o})})})}o(108)},108:()=>{}};