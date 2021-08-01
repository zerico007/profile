(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{24:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var i,r,o,a,s,c,l,d,b,u,j,p,h,f,m,x,g,O,w=t(0),y=t(16),v=t.n(y),k=t(18),S=(t(24),t(3)),z=t(7),I=t(4),L=t(32),C=t.p+"static/media/profilePic.9e39ad30.jpg",R=(t.p,t(1)),B=I.a.div(i||(i=Object(S.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 120px;\n  padding: 20px;\n  background: #3463ad;\n  z-index: 10;\n  box-sizing: border-box;\n"]))),_=I.a.div(r||(r=Object(S.a)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 100px;\n  border: 2px solid white;\n  padding: 5px;\n  overflow: hidden;\n  float: left;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),E=I.a.div(o||(o=Object(S.a)(["\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  background: none;\n  float: right;\n  margin-top: 0.75rem;\n  margin-right: 7rem;\n"]))),M=I.a.div(a||(a=Object(S.a)(["\n  width: ",";\n  height: ",";\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #3463ad;\n  border: none;\n  border-radius: 6px;\n  font-size: ",";\n  color: ",";\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  &:hover {\n    color: #ff6495;\n    transform: scale(1.2);\n  }\n  margin-right: ",";\n  margin-top: ",";\n  margin-left: ",";\n  text-align: center;\n  line-height: 1.5rem;\n"])),(function(e){return e.mobileSite?"100%":"120px"}),(function(e){return e.mobileSite?"2rem":"60px"}),(function(e){return e.mobileSite?"24px":"18px"}),(function(e){return e.selected?"#FF6495":"white"}),(function(e){return e.mobileSite?"0":"40px"}),(function(e){return e.mobileSite?"45px":"0"}),(function(e){return e.mobileSite?"auto":"0"})),F={position:"fixed",left:"0",paddingLeft:"40px",paddingTop:"10px",top:"94px",display:"flex",alignItems:"flex-start",flexDirection:"column",zIndex:"100",width:"110vw",transform:"translateX(-5px)",background:"#3463ad",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"90vh"},W=function(e){var n=e.mobile,t=e.setRoute,i=e.route,r=Object(w.useState)(!1),o=Object(z.a)(r,2),a=o[0],s=o[1],c=Object(w.useState)(!1),l=Object(z.a)(c,2),d=l[0],b=l[1],u=!d&&a,j=function(){b(!d),n&&a&&(p.current.classList.remove("enter"),p.current.classList.add("exit"),setTimeout((function(){p.current.classList.remove("exit"),s(!a)}),1e3)),n&&!a&&s(!a)},p=Object(w.useRef)();return Object(R.jsxs)(B,{children:[Object(R.jsx)(_,{onClick:function(){t("home"),s(!1),b(!1)},children:Object(R.jsx)("img",{src:C,alt:"profile-pic",style:{objectFit:"contain",width:"100px",transform:"translateY(30px)"}})}),!n&&Object(R.jsxs)(E,{children:[Object(R.jsxs)(M,{selected:"projects"===i,onClick:function(){return t("projects")},children:["projects"===i&&Object(R.jsx)(L.a,{size:16}),"Projects"]}),Object(R.jsxs)(M,{selected:"resume"===i,onClick:function(){return t("resume")},children:["resume"===i&&Object(R.jsx)(L.a,{size:16})," Resume"]}),Object(R.jsxs)(M,{selected:"contacts"===i,onClick:function(){return t("contacts")},children:["contacts"===i&&Object(R.jsx)(L.a,{size:16})," Contact Me"]})]}),n&&Object(R.jsx)(M,{onClick:!u&&j,style:{float:"right",marginRight:"0"},children:d?Object(R.jsx)("i",{className:"fas fa-times fa-2x"}):Object(R.jsx)("i",{className:"fas fa-bars fa-2x"})}),a&&Object(R.jsxs)("div",{ref:p,style:F,onClick:j,className:a?"enter":"",children:[Object(R.jsxs)(M,{mobileSite:!0,selected:"projects"===i,onClick:function(){return t("projects")},style:{animation:"enterLeft 1s"},children:["projects"===i&&Object(R.jsx)(L.a,{size:16}),"Projects"]}),Object(R.jsxs)(M,{mobileSite:!0,selected:"resume"===i,onClick:function(){return t("resume")},style:{animation:"enterLeft 1.25s"},children:["resume"===i&&Object(R.jsx)(L.a,{size:16})," Resume"]}),Object(R.jsxs)(M,{mobileSite:!0,selected:"contacts"===i,onClick:function(){return t("contacts")},style:{animation:"enterLeft 1.5s"},children:["contacts"===i&&Object(R.jsx)(L.a,{size:16})," Contact Me"]})]})]})},D=t(33),N=t.p+"static/media/resume.7fc20a84.jpg",P=t(17),V=I.a.div(s||(s=Object(S.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 70vw;\n  height: auto;\n  border: none;\n  padding: 10px;\n  border-radius: 6px;\n  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;\n  animation: enterBottom 1s;\n"]))),T=I.a.button(c||(c=Object(S.a)(["\n  position: relative;\n  margin: 50px auto;\n  width: 150px;\n  height: 35px;\n  background: #78fff1;\n  color: #3463ad;\n  border: 2px solid #3463ad;\n  border-radius: 20px;\n  outline: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n  animation: enterLeft 1s;\n  &:hover {\n    background: #3463ad;\n    color: #78fff1;\n    border: 2px solid #78fff1;\n    transform: scale(1.2);\n  }\n"]))),J=function(e){var n=e.mobile;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(T,{mobileSite:n,onClick:function(){Object(P.saveAs)("/profile/resume.pdf","resume.pdf")},children:[Object(R.jsx)(D.a,{size:16,style:{marginRight:"4px"}})," Download"]}),Object(R.jsx)(V,{children:Object(R.jsx)("img",{style:{width:"100%"},src:N,alt:"resume-pic"})})]})},A=t.p+"static/media/apple-shop.247f3682.jpg",Q=t.p+"static/media/auctions.dfece1f0.jpg",q=t.p+"static/media/gradebook.a03f3abc.jpg",H=I.a.div(l||(l=Object(S.a)(['\n  position: relative;\n  display: grid;\n  grid-template-areas:\n    "image"\n    "desc";\n  grid-template-rows: 1fr 1fr;\n  margin: 50px auto 0 auto;\n  width: 70vw;\n  max-width: 830px;\n  height: ',";\n  border: none;\n  padding: 10px;\n  border-radius: 6px;\n  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;\n  animation: enterTop 1.8s;\n"])),(function(e){return e.mobileSite?"auto":"600px"})),X=I.a.div(d||(d=Object(S.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  display: ",";\n  z-index: 9;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n"])),(function(e){return e.launch?"flex":"none"})),Y=I.a.p(b||(b=Object(S.a)(["\n  align-self: center;\n  text-align: center;\n  font-weight: bold;\n  line-height: 1.5rem;\n  grid-area: desc;\n"]))),G=I.a.button(u||(u=Object(S.a)(["\n  position: relative;\n  border: 2px solid white;\n  outline: none;\n  cursor: pointer;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background: none;\n  height: 32px;\n  width: 150px;\n  font-weight: bold;\n  transition: all ease-in-out 0.3s;\n  &:hover {\n    transform: scale(1.3);\n    background: white;\n    color: ",";\n  }\n"])),(function(e){return e.mobileSite?"white":"black"})),K=function(e){var n=e.mobile,t=Object(w.useState)(!1),i=Object(z.a)(t,2),r=i[0],o=i[1],a=Object(w.useState)(!1),s=Object(z.a)(a,2),c=s[0],l=s[1],d=Object(w.useState)(!1),b=Object(z.a)(d,2),u=b[0],j=b[1],p={width:"70vw",maxWidth:"830px",cursor:"pointer",gridArea:"image"};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(H,{onMouseEnter:function(){return!n&&o(!0)},onMouseLeave:function(){return o(!1)},mobileSite:n,children:[Object(R.jsx)("img",{src:A,alt:"apple-shop-pic",style:p}),Object(R.jsx)(Y,{children:"Web app for shopping apple products. Frontend built with React. Backend built with Node (includes REST APIs, jwt authentication, refresh tokens) and MongoDB"}),Object(R.jsx)(X,{launch:r,children:Object(R.jsx)("a",{href:"https://zerico007.github.io/apple_shop/",target:"_blank",rel:"noreferrer",children:Object(R.jsx)(G,{children:"Visit"})})}),n&&Object(R.jsx)("a",{href:"https://zerico007.github.io/apple_shop/",target:"_blank",rel:"noreferrer",style:{zIndex:"5"},children:Object(R.jsx)(G,{mobileSite:n,style:{background:"black",margin:"0 auto"},children:"Visit"})})]}),Object(R.jsxs)(H,{onMouseEnter:function(){return!n&&l(!0)},onMouseLeave:function(){return l(!1)},mobileSite:n,children:[Object(R.jsx)("img",{src:Q,alt:"auctions-pic",loading:"lazy",style:p}),Object(R.jsx)(Y,{children:"Web app similar to ebay for posting items for sale and bidding. Built with Python using Django. SQL DB used."}),Object(R.jsx)(X,{launch:c,children:Object(R.jsx)("a",{href:"http://zerico007.pythonanywhere.com/",target:"_blank",rel:"noreferrer",children:Object(R.jsx)(G,{children:"Visit"})})}),n&&Object(R.jsx)("a",{href:"http://zerico007.pythonanywhere.com/",target:"_blank",rel:"noreferrer",style:{zIndex:"5"},children:Object(R.jsx)(G,{mobileSite:n,style:{background:"black",margin:"0 auto"},children:"Visit"})})]}),Object(R.jsxs)(H,{onMouseEnter:function(){return!n&&j(!0)},onMouseLeave:function(){return j(!1)},mobileSite:n,style:{marginBottom:"100px"},children:[Object(R.jsx)("img",{src:q,alt:"gradebook-pic",loading:"lazy",style:p}),Object(R.jsx)(Y,{children:"Web app for recording student grades. Built with Python using Flask. SQL DB used."}),Object(R.jsx)(X,{launch:u,children:Object(R.jsx)("a",{href:"http://kabash.pythonanywhere.com/",target:"_blank",rel:"noreferrer",children:Object(R.jsx)(G,{children:"Visit"})})}),n&&Object(R.jsx)("a",{href:"http://kabash.pythonanywhere.com/",target:"_blank",rel:"noreferrer",style:{zIndex:"5"},children:Object(R.jsx)(G,{mobileSite:n,style:{background:"black",margin:"0 auto"},children:"Visit"})})]})]})},U=t(34),Z=t(35),$=t(36),ee=I.a.div(j||(j=Object(S.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin-top: 40px;\n  box-shadow: 0.3rem 0.3rem 0.3rem 0.5rem lightgrey;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  background: #78fff1;\n  color: #361999;\n  border: 2px solid #361999;\n  &:hover {\n    background: #361999;\n    color: #78fff1;\n    border: 2px solid #78fff1;\n    transform: scale(1.2);\n  }\n"]))),ne=I.a.div(p||(p=Object(S.a)(["\n  position: relative;\n  top: ",";\n  margin: 0 auto;\n  width: 70vw;\n  display: flex;\n  flex-direction: ",";\n  justify-content: space-evenly;\n  align-items: center;\n"])),(function(e){return e.mobileSite?"30px":"100px"}),(function(e){return e.mobileSite?"column":"row"})),te=function(e){var n=e.mobile;return Object(R.jsxs)(ne,{mobileSite:n,children:[Object(R.jsx)("a",{href:"https://github.com/zerico007",target:"_blank",rel:"noreferrer",style:{animation:"enterLeft 1s"},children:Object(R.jsx)(ee,{children:Object(R.jsx)(U.a,{size:40})})}),Object(R.jsx)("a",{href:"https://www.linkedin.com/in/bavin-edwards-777b23180/",target:"_blank",rel:"noreferrer",style:{animation:"enterBottom 1s"},children:Object(R.jsx)(ee,{children:Object(R.jsx)(Z.a,{size:40})})}),Object(R.jsx)("a",{href:"mailto:bavin_edwards@live.com",target:"_blank",rel:"noreferrer",style:{animation:"enterRight 1s"},children:Object(R.jsx)(ee,{children:Object(R.jsx)($.a,{size:40})})})]})},ie=(t.p,t(37)),re=I.a.div(h||(h=Object(S.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  align-items: center;\n"]))),oe=I.a.div(f||(f=Object(S.a)(["\n  position: relative;\n  display: flex;\n  margin: 1rem 0;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.2);\n  filter: drop-shadow(16px 16px 20px grey);\n  width: 70vw;\n  height: 40vh;\n  border: none;\n  padding: 10px;\n  color: #3463ad;\n  border-radius: 15px 50px;\n  line-height: 150%;\n  font-weight: bold;\n  text-align: center;\n  animation: enterBottom 5s;\n  @media (max-width: 400px) {\n    font-size: 14px;\n  }\n"]))),ae=I.a.div(m||(m=Object(S.a)(["\n  position: relative;\n  display: flex;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 80vw;\n  line-height: ",";\n  height: 32px;\n  border: none;\n  padding: 10px;\n  font-size: ",";\n  font-weight: bold;\n  text-align: center;\n  color: #3463ad;\n  @media (max-width: 400px) {\n    font-size: 36px;\n  }\n"])),(function(e){return e.mobileSite?"3rem":"4rem"}),(function(e){return e.mobileSite?"32px":"42px"})),se=I.a.div(x||(x=Object(S.a)(["\n  position: relative;\n  display: flex;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  height: 32px;\n  border: none;\n  padding: 10px;\n  font-size: ",";\n  font-weight: bold;\n  color: #3463ad;\n  @media (max-width: 400px) {\n    font-size: 24px;\n  }\n"])),(function(e){return e.mobileSite?"28px":"42px"})),ce=I.a.div(g||(g=Object(S.a)(["\n  position: relative;\n  display: flex;\n  margin: 20px 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 32px;\n  font-weight: bold;\n  color: #3463ad;\n  width: fit-content;\n  animation: bounce 1s infinite alternate;\n  cursor: pointer;\n  &:hover {\n    color: #78fff1;\n  }\n"]))),le=function(e){var n=e.mobile,t=e.setRoute;return Object(R.jsxs)(re,{children:[Object(R.jsxs)(ae,{mobileSite:n,children:[Object(R.jsx)("span",{style:{animation:"fadeIn 0.5s"},children:"Hi,"}),Object(R.jsx)("span",{style:{animation:"fadeIn 1s"},children:" my"}),Object(R.jsx)("span",{style:{animation:"fadeIn 1.5s"},children:" name"}),Object(R.jsx)("span",{style:{animation:"fadeIn 2s"},children:" is"}),Object(R.jsx)("span",{style:{animation:"fadeIn 2.5s"},children:" Bavin"}),Object(R.jsx)("span",{style:{animation:"fadeIn 3s"},children:" Edwards"})]}),Object(R.jsx)(se,{style:{animation:"fadeIn 3.8s"},mobileSite:n,children:"I am a Web Developer"}),Object(R.jsx)(oe,{mobileSite:n,style:{fontSize:window.matchMedia("(orientation: landscape)").matches&&n?"14px":n?"16px":n?void 0:"22px"},children:"We live in a data driven digital world, and thus success in any field requires us to be able to take full advantage of the profuse amount of data available to us through our digital connections within the world around us. My goal is to play an active role in solving real world problems through knowledge, innovation, data analysis and critical thinking."}),Object(R.jsxs)(ce,{onClick:function(){return t("projects")},children:[Object(R.jsx)("span",{children:"Take a look at my work"}),Object(R.jsx)(ie.a,{})]})]})};function de(e,n){var t=Object(w.useState)((function(){return JSON.parse(sessionStorage.getItem(e))||n})),i=Object(z.a)(t,2),r=i[0],o=i[1];return Object(w.useEffect)((function(){sessionStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]}var be=function(){var e=de("mobile",!1),n=Object(z.a)(e,2),t=n[0],i=n[1],r=de("route","home"),o=Object(z.a)(r,2),a=o[0],s=o[1],c=function(){return window.innerWidth<768?i(!0):i(!1)};Object(w.useEffect)((function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}})),Object(w.useEffect)((function(){window.innerWidth<900?i(!0):i(!1)}),[i]);var l=I.a.div(O||(O=Object(S.a)(["\n    position: absolute;\n    top: 100px;\n    width: 100vw;\n    height: 100vh;\n  "])));return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(W,{mobile:t,setRoute:s,route:a}),Object(R.jsxs)(l,{children:["home"===a&&Object(R.jsx)(le,{mobile:t,setRoute:s}),"resume"===a&&Object(R.jsx)(J,{mobile:t}),"projects"===a&&Object(R.jsx)(K,{mobile:t}),"contacts"===a&&Object(R.jsx)(te,{mobile:t})]})]})};v.a.render(Object(R.jsx)(k.a,{children:Object(R.jsx)(be,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.75c61fc1.chunk.js.map