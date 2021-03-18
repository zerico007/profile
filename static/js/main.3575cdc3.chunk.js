(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{24:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var i,r,o,c,a,s,l,d,b,u,p,j,h,f,x,m,g,O,w=t(0),v=t(16),y=t.n(v),k=t(18),S=(t(24),t(7)),F=t(4),z=t(5),C=t(32),B=t.p+"static/media/profilePic.9e39ad30.jpg",E=t(1),M=z.a.div(i||(i=Object(F.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 64px;\n    padding: 20px;\n    background: #361999;\n    margin-bottom: 3rem;\n    z-index: 10;\n"]))),R=z.a.div(r||(r=Object(F.a)(["\n    width: 60px;\n    height: 60px;\n    border-radius: 100px;\n    border: 2px solid #78FFF1;\n    padding: 5px;\n    overflow: hidden;\n    float: left;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    &:hover {\n        transform: scale(1.1);\n    }\n"]))),L=z.a.div(o||(o=Object(F.a)(["\n    width: fit-content;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    background: none;\n    float: right;\n    margin-right: 7rem;\n"]))),W=z.a.div(c||(c=Object(F.a)(["\n    width: ",";\n    height: ",";\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: #361999;\n    border: none;\n    border-radius: 6px;\n    font-size: ",";\n    color: ",";\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n    &:hover {\n        color: #FF6495;\n        transform: scale(1.2);\n    }\n    margin-right: ",";\n    margin-top: ",";\n    margin-left: ",";\n    text-align: center;\n    line-height: 1.5rem;\n"])),(function(e){return e.mobileSite?"100%":"120px"}),(function(e){return e.mobileSite?"2rem":"60px"}),(function(e){return e.mobileSite?"24px":"18px"}),(function(e){return e.selected?"#FF6495":"#78FFF1"}),(function(e){return e.mobileSite?"0":"40px"}),(function(e){return e.mobileSite?"45px":"10px"}),(function(e){return e.mobileSite?"auto":"0"})),_=z.a.div(a||(a=Object(F.a)(["\n    position: fixed;\n    left: 0;\n    padding-left: 40px;\n    padding-top: 10px;\n    top: 100px;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    z-index: 100;\n    width: 105vw;\n    background-color: #361999;\n    height: 100vh;\n"]))),D=function(e){var n=e.mobile,t=e.setRoute,i=e.route,r=Object(w.useState)(!1),o=Object(S.a)(r,2),c=o[0],a=o[1];return Object(E.jsxs)(M,{children:[Object(E.jsx)(R,{onClick:function(){t("home"),a(!1)},children:Object(E.jsx)("img",{src:B,alt:"profile-pic",style:{objectFit:"contain",width:"100px",transform:"translateY(30px)"}})}),!n&&Object(E.jsxs)(L,{children:[Object(E.jsxs)(W,{selected:"projects"===i,onClick:function(){return t("projects")},children:["projects"===i&&Object(E.jsx)(C.a,{size:16}),"Projects"]}),Object(E.jsxs)(W,{selected:"resume"===i,onClick:function(){return t("resume")},children:["resume"===i&&Object(E.jsx)(C.a,{size:16})," Resume"]}),Object(E.jsxs)(W,{selected:"contacts"===i,onClick:function(){return t("contacts")},children:["contacts"===i&&Object(E.jsx)(C.a,{size:16})," Contact Me"]})]}),n&&Object(E.jsx)(W,{onClick:function(){return a(!c)},style:{float:"right"},children:c?Object(E.jsx)("i",{className:"fas fa-times fa-2x"}):Object(E.jsx)("i",{className:"fas fa-bars fa-2x"})}),c&&Object(E.jsxs)(_,{onClick:function(){return n&&a(!c)},children:[Object(E.jsxs)(W,{mobileSite:!0,selected:"projects"===i,onClick:function(){return t("projects")},children:["projects"===i&&Object(E.jsx)(C.a,{size:16}),"Projects"]}),Object(E.jsxs)(W,{mobileSite:!0,selected:"resume"===i,onClick:function(){return t("resume")},children:["resume"===i&&Object(E.jsx)(C.a,{size:16})," Resume"]}),Object(E.jsxs)(W,{mobileSite:!0,selected:"contacts"===i,onClick:function(){return t("contacts")},children:["contacts"===i&&Object(E.jsx)(C.a,{size:16})," Contact Me"]})]})]})},P=t(33),I=t.p+"static/media/resume.1022a32f.jpg",N=t(17),J=z.a.div(s||(s=Object(F.a)(["\n    position: relative;\n    margin: 0 auto;\n    width: 70vw;\n    height: auto;\n    border: none;\n    padding: 10px;\n    border-radius: 6px;\n    box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;\n    animation: enterBottom 1s;\n"]))),A=z.a.button(l||(l=Object(F.a)(["\n    position: relative;\n    margin: 150px auto 50px auto;\n    width: 150px;\n    height: 35px;\n    background: #78FFF1;\n    color: #361999;\n    border: 2px solid #361999;\n    border-radius: 20px;\n    outline: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease-in-out;\n    animation: enterLeft 1s;\n    &:hover {\n        background: #361999;\n        color: #78FFF1;\n        border: 2px solid #78FFF1;\n        transform: scale(1.2);\n    }\n"]))),T=function(e){var n=e.mobile;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(A,{mobileSite:n,onClick:function(){Object(N.saveAs)("/profile/resume.pdf","resume.pdf")},children:[Object(E.jsx)(P.a,{size:16,style:{marginRight:"4px"}})," Download"]}),Object(E.jsx)(J,{children:Object(E.jsx)("img",{style:{width:"70vw"},src:I,alt:"resume-pic"})})]})},V=t.p+"static/media/apple-shop.247f3682.jpg",Q=t.p+"static/media/auctions.dfece1f0.jpg",q=t.p+"static/media/gradebook.a03f3abc.jpg",Y=z.a.div(d||(d=Object(F.a)(['\n  position: relative;\n  top: 100px;\n  display: grid;\n  grid-template-areas:\n    "image"\n    "desc";\n  grid-template-rows: 1fr 1fr;\n  margin: 50px auto 0 auto;\n  width: 70vw;\n  max-width: 830px;\n  height: ',";\n  border: none;\n  padding: 10px;\n  border-radius: 6px;\n  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;\n  animation: enterTop 1.8s;\n"])),(function(e){return e.mobileSite?"auto":"600px"})),G=z.a.div(b||(b=Object(F.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  display: ",";\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n"])),(function(e){return e.launch?"flex":"none"})),H=z.a.p(u||(u=Object(F.a)(["\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  line-height: 1.5rem;\n  grid-area: desc;\n"]))),K=z.a.button(p||(p=Object(F.a)(["\n  position: relative;\n  border: 2px solid white;\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background: none;\n  height: 32px;\n  width: 150px;\n  font-weight: bold;\n  transition: all ease-in-out 0.3s;\n  &:hover {\n    transform: scale(1.3);\n    background: white;\n    color: black;\n  }\n"]))),U=function(e){var n=e.mobile,t=Object(w.useState)(!1),i=Object(S.a)(t,2),r=i[0],o=i[1],c=Object(w.useState)(!1),a=Object(S.a)(c,2),s=a[0],l=a[1],d=Object(w.useState)(!1),b=Object(S.a)(d,2),u=b[0],p=b[1],j={width:"70vw",maxWidth:"830px",cursor:"pointer",gridArea:"image"};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(Y,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},mobileSite:n,children:[Object(E.jsx)("img",{src:V,alt:"apple-shop-pic",style:j}),Object(E.jsx)(H,{children:"Web app for shopping apple products. Frontend built with React. Backend built with Node (includes REST APIs, jwt authentication, refresh tokens) and MongoDB"}),Object(E.jsx)(G,{launch:r,children:Object(E.jsx)("a",{href:"https://zerico007.github.io/apple_shop/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)(K,{children:"Visit"})})})]}),Object(E.jsxs)(Y,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},mobileSite:n,children:[Object(E.jsx)("img",{src:Q,alt:"auctions-pic",loading:"lazy",style:j}),Object(E.jsx)(H,{children:"Web app similar to ebay for posting items for sale and bidding. Built with Python using Django. SQL DB used."}),Object(E.jsx)(G,{launch:s,children:Object(E.jsx)("a",{href:"http://zerico007.pythonanywhere.com/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)(K,{children:"Visit"})})})]}),Object(E.jsxs)(Y,{onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},mobileSite:n,style:{marginBottom:"100px"},children:[Object(E.jsx)("img",{src:q,alt:"gradebook-pic",loading:"lazy",style:j}),Object(E.jsx)(H,{children:"Web app for recording student grades. Built with Python using Flask. SQL DB used."}),Object(E.jsx)(G,{launch:u,children:Object(E.jsx)("a",{href:"http://kabash.pythonanywhere.com/",target:"_blank",rel:"noreferrer",children:Object(E.jsx)(K,{children:"Visit"})})})]})]})},X=t(34),Z=t(35),$=t(36),ee=z.a.div(j||(j=Object(F.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin-top: 40px;\n  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  background: #78fff1;\n  color: #361999;\n  border: 2px solid #361999;\n  &:hover {\n    background: #361999;\n    color: #78fff1;\n    border: 2px solid #78fff1;\n    transform: scale(1.2);\n  }\n"]))),ne=z.a.div(h||(h=Object(F.a)(["\n  position: relative;\n  top: ",";\n  margin: 0 auto;\n  width: 70vw;\n  display: flex;\n  flex-direction: ",";\n  justify-content: space-evenly;\n  align-items: center;\n"])),(function(e){return e.mobileSite?"100px":"200px"}),(function(e){return e.mobileSite?"column":"row"})),te=function(e){var n=e.mobile;return Object(E.jsxs)(ne,{mobileSite:n,children:[Object(E.jsx)("a",{href:"https://github.com/zerico007",target:"_blank",rel:"noreferrer",style:{animation:"enterLeft 1s"},children:Object(E.jsx)(ee,{children:Object(E.jsx)(X.a,{size:40})})}),Object(E.jsx)("a",{href:"https://www.linkedin.com/in/bavin-edwards-777b23180/",target:"_blank",rel:"noreferrer",style:{animation:"enterBottom 1s"},children:Object(E.jsx)(ee,{children:Object(E.jsx)(Z.a,{size:40})})}),Object(E.jsx)("a",{href:"mailto:bavin_edwards@live.com",target:"_blank",rel:"noreferrer",style:{animation:"enterRight 1s"},children:Object(E.jsx)(ee,{children:Object(E.jsx)($.a,{size:40})})})]})},ie=t.p+"static/media/hero.9decca57.jpg",re=t(37),oe=z.a.div(f||(f=Object(F.a)(["\n    position: relative;\n    top: 95px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0, 0.4);\n    background-size: ",";\n    background-repeat: no-repeat;\n"])),(function(e){return e.mobileSite?"fill":"contain"})),ce=z.a.div(x||(x=Object(F.a)(["\n    position: absolute;\n    top: 170px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ",";\n    height: 40vh;\n    border: none;\n    border: 3px solid #f1f1f1;\n    padding: 10px;\n    color: white;\n    border-radius: 6px;\n    font-size: ",";\n    line-height: 150%;\n    font-weight: bold;\n    text-align: center;\n    animation: enterBottom 1s;\n"])),(function(e){return e.mobileSite?"70vw":"50vw"}),(function(e){return e.mobileSite?"18px":"22px"})),ae=z.a.div(m||(m=Object(F.a)(["\n    position: absolute;\n    top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: fit-content;\n    height: 32px;\n    border: none;\n    padding: 10px;\n    font-size: ",";\n    font-weight: bold;\n    text-align: center;\n    color: white;\n"])),(function(e){return e.mobileSite?"48px":"62px"})),se=z.a.div(g||(g=Object(F.a)(["\n    position: absolute;\n    top: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: fit-content;\n    height: 32px;\n    border: none;\n    padding: 10px;\n    font-size: ",";\n    font-weight: bold;\n    color: white;\n    \n"])),(function(e){return e.mobileSite?"36px":"42px"})),le=z.a.div(O||(O=Object(F.a)(["\n    position: absolute;\n    top: 550px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 32px;\n    font-weight: bold;\n    color: white;\n    width: fit-content;\n    animation: bounce 1s infinite alternate;\n    cursor: pointer;\n    &:hover {\n        color: #78FFF1;\n    }\n"]))),de=function(e){var n=e.mobile,t=e.setRoute;return Object(E.jsxs)(oe,{mobileSite:n,children:[Object(E.jsx)("img",{src:ie,alt:"background",style:{width:"105vw",zIndex:"-1",filter:"blur(4px)"}}),Object(E.jsx)(ae,{mobileSite:n,children:"Bavin Edwards"}),Object(E.jsx)(se,{mobileSite:n,children:"Web Developer"}),Object(E.jsx)(ce,{mobileSite:n,children:"We live in a data driven digital world, and thus success in any field requires us to be able to take full advantage of the profuse amount of data available to us through our digital connections within the world around us. My goal is to play an active role in solving real world problems through knowledge, innovation, data analysis and critical thinking."}),Object(E.jsxs)(le,{onClick:function(){return t("projects")},children:[Object(E.jsx)("span",{children:"Take a look at my work"}),Object(E.jsx)(re.a,{})]})]})};function be(e,n){var t=Object(w.useState)((function(){return JSON.parse(sessionStorage.getItem(e))||n})),i=Object(S.a)(t,2),r=i[0],o=i[1];return Object(w.useEffect)((function(){sessionStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]}var ue=function(){var e=be("mobile",!1),n=Object(S.a)(e,2),t=n[0],i=n[1],r=be("route","home"),o=Object(S.a)(r,2),c=o[0],a=o[1];return Object(w.useEffect)((function(){window.addEventListener("resize",(function(){return window.innerWidth<768?i(!0):i(!1)}))})),Object(w.useEffect)((function(){window.innerWidth<768?i(!0):i(!1)}),[i]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(D,{mobile:t,setRoute:a,route:c}),"home"===c&&Object(E.jsx)(de,{mobile:t,setRoute:a}),"resume"===c&&Object(E.jsx)(T,{mobile:t}),"projects"===c&&Object(E.jsx)(U,{mobile:t}),"contacts"===c&&Object(E.jsx)(te,{mobile:t})]})};y.a.render(Object(E.jsx)(k.a,{children:Object(E.jsx)(ue,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3575cdc3.chunk.js.map