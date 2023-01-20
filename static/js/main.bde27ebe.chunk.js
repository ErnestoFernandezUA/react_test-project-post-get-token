(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n(56),s=n.n(a),o=n(57),i=n(4),c=n(13),d=n(14),u=n(18),l=n(58),p=n.n(l),j=n(11),f=n(5),b=n.n(f),h=n(8),m=n(102),g="https://frontend-test-assignment-api.abz.agency/api/v1",O=m.a.create({baseURL:g}),x=function(e){return Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("get",g+e),t.next=3,O.get(e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},v=function(e,t,n){return Object(h.a)(b.a.mark((function r(){var a;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("post",g+e,t),r.next=3,O.post(e,t,n);case 3:return a=r.sent,r.abrupt("return",a.data);case 5:case"end":return r.stop()}}),r)})))()},_={storage:[],statusLoading:"idle",error:null},y=Object(d.b)("users/getPositions",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,x("/positions");case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r(e.t0);case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),k=Object(d.c)({name:"positions",initialState:_,reducers:{addPositions:function(e,t){var n;(n=e.storage).push.apply(n,Object(j.a)(t.payload))},setPositionsStatus:function(e,t){e.statusLoading=t.payload},setPositionsError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetPositionsState:function(){return _}},extraReducers:function(e){e.addCase(y.pending,(function(e){e.statusLoading="loading"})).addCase(y.fulfilled,(function(e,t){e.statusLoading="idle",t.payload&&t.payload.success&&(e.storage=t.payload.positions)})).addCase(y.rejected,(function(e){e.statusLoading="failed"}))}}),w=k.reducer,C=k.actions,S=(C.setPositionsStatus,C.setPositionsError,C.resetPositionsState,function(e){return e.positions.storage}),N=function(e,t){var n=Date.now();if(e){var r=n-e<60*t*1e3;return console.log("selectTokenIsExpired/ time from last:",Math.floor((n-e)/1e3/60),"min,","is token active? ",r),r}return!1},L={storage:null,currentRequestId:null,timeOfLastSet:null,statusLoading:"idle",error:null},E=Object(d.b)("token/fetchToken",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a,s,o,i,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,s=n.requestId,e.prev=1,o=a(),i=N(o.token.timeOfLastSet,40),s!==o.token.currentRequestId||i){e.next=9;break}return e.next=7,x("/token");case 7:return c=e.sent,e.abrupt("return",c);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),W=Object(d.c)({name:"token",initialState:L,reducers:{setToken:function(e,t){e.storage=t.payload.token},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetToken:function(){return L}},extraReducers:function(e){e.addCase(E.pending,(function(e,t){var n=t.meta.requestId;e.statusLoading="loading",e.error=null,e.currentRequestId||(e.currentRequestId=n)})).addCase(E.fulfilled,(function(e,t){t.payload&&(e.storage=t.payload.token,e.timeOfLastSet=Date.now()),e.statusLoading="idle",e.currentRequestId=null})).addCase(E.rejected,(function(e,t){e.statusLoading="failed",e.error=t.payload}))}}),P=W.reducer,T=W.actions,I=(T.setToken,T.setStatus,T.setError,T.resetToken,function(e,t,n){return x(e||"/users?page=".concat(t,"&count=").concat(n))}),A={storage:[],payload:[],statusLoading:"idle",error:null,link_to_next_page:null,current_page:null,total_pages:null,positions:[],fails:{name:null,email:null,phone:null,images:null,position_id:null}},F=Object(d.b)("users/fetchUsers",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a,s,o,i,c,d,u,l,p;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.link_to_next_page,a=void 0===r?null:r,s=t.page,o=void 0===s?1:s,i=t.count,c=void 0===i?6:i,d=t.delay,u=void 0===d?5e3:d,l=n.rejectWithValue,e.prev=2,e.next=5,new Promise((function(e){return setTimeout(e,u)}));case 5:return e.next=7,I(a,o,c);case 7:return p=e.sent,e.abrupt("return",p);case 11:e.prev=11,e.t0=e.catch(2),l(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()),U=Object(d.b)("users/postUser",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,a,s,o,i,c,d,u,l,p,j,f,h;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,a=r.name,s=r.email,o=r.phone,i=r.images,c=r.position_id,d=t.delay,u=void 0===d?1e3:d,l=n.getState,p=n.rejectWithValue,console.log("postUserAsync",c),e.prev=3,j=l(),console.log("state.token.storage",j.token.storage),e.next=8,new Promise((function(e){return setTimeout(e,u)}));case 8:return(f=new FormData).append("position_id",c),f.append("name",a),f.append("email",s),f.append("phone",o),f.append("photo",i[0]),console.log(f),e.next=17,b={body:f,headers:{Token:String(j.token.storage)}},v("/users",b,void 0);case 17:return h=e.sent,console.log("postUserAsync/ response",h),e.abrupt("return",h);case 22:e.prev=22,e.t0=e.catch(3),p(e.t0);case 25:case"end":return e.stop()}var b}),e,null,[[3,22]])})));return function(t,n){return e.apply(this,arguments)}}()),R=Object(d.c)({name:"user",initialState:A,reducers:{addUsers:function(e,t){var n;(n=e.storage).push.apply(n,Object(j.a)(t.payload))},addPayload:function(e){var t;(t=e.storage).push.apply(t,Object(j.a)(e.payload)),e.payload.length=0},setStatus:function(e,t){e.statusLoading=t.payload},resetState:function(){return A}},extraReducers:function(e){e.addCase(F.pending,(function(e){e.statusLoading="loading"})).addCase(F.fulfilled,(function(e,t){if(t.payload&&t.payload.success){var n,r=t.payload,a=r.users,s=r.links.next_url,o=r.total_pages,i=r.page;(n=e.payload).push.apply(n,Object(j.a)(a)),e.statusLoading="idle",e.link_to_next_page=s,e.total_pages=o,e.current_page=i}else e.error="getUsersAsync.fulfilled/ response.success = false"})).addCase(F.rejected,(function(e){e.statusLoading="failed"})).addCase(U.pending,(function(e){e.statusLoading="loading"})).addCase(U.fulfilled,(function(e,t){e.statusLoading="idle",console.log("postUserAsync.fulfilled/ action.payload",t.payload),t.payload})).addCase(U.rejected,(function(e){e.statusLoading="failed"}))}}),H=R.reducer,q=R.actions,G=(q.addUsers,q.addPayload),D=(q.setStatus,q.resetState,function(e){return e.users.storage}),V=function(e){return e.users.payload},B=function(e){return e.users.statusLoading},z=function(e){return e.users.error},J=function(e){return e.users.link_to_next_page},M=function(e){return e.users.current_page===e.users.total_pages},K=function(e){return e.users.fails},Y={screen:null},Q=Object(d.c)({name:"options",initialState:Y,reducers:{setScreen:function(e,t){e.screen=t.payload},resetOptionsState:function(){return Y}}}),X=Q.reducer,Z=Q.actions,$=Z.setScreen,ee=(Z.resetOptionsState,function(e){return e.options.screen}),te=Object(c.b)({users:H,token:P,positions:w,options:X}),ne={key:"root",storage:p.a,whitelist:["token"]},re=Object(u.g)(ne,te),ae=Object(d.a)({reducer:re,middleware:function(e){return e({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e,"posts"]}})}}),se=ae,oe=Object(u.h)(ae),ie=n(0),ce=n(46),de=r.b,ue=r.c,le=n(49),pe=n(17),je=n.n(pe),fe=(n(88),n(2)),be=function(e){var t=e.className,n=e.disabled,r=void 0!==n&&n,a=e.children,s=void 0===a?"":a,o=e.onClick,i=void 0===o?function(){return console.log("no onClick function")}:o,c=e.width;return Object(fe.jsx)("div",{className:je()("Button",{"Button--disabled":r},t),onClick:i,style:{width:c},onKeyDown:function(){},children:Object(fe.jsx)("div",{className:"Button__container",children:s})})},he=n.p+"static/media/logo.85fd1d96.svg",me=(n(90),n(43),n(44),function(){return Object(fe.jsx)("div",{className:"Header",children:Object(fe.jsxs)("div",{className:"Header__container Container Wrapper",children:[Object(fe.jsx)("div",{className:"Header__logo",children:Object(fe.jsx)("button",{type:"button",onClick:function(){le.animateScroll.scrollToTop()},children:Object(fe.jsx)("img",{src:he,alt:"Logo"})})}),Object(fe.jsxs)("div",{className:"Header__nav",children:[Object(fe.jsx)(be,{onClick:function(){return le.animateScroll.scrollTo(window.innerHeight)},children:"Users"}),Object(fe.jsx)(be,{children:"Sign in"})]})]})})}),ge=(n(91),function(){return Object(fe.jsx)("article",{className:"Promo Container",children:Object(fe.jsxs)("div",{className:"Promo__poster Wrapper",children:[Object(fe.jsx)("h1",{children:"Test assignment for front-end developer"}),Object(fe.jsx)("p",{children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(fe.jsx)(be,{className:"Promo__button",children:"Sign up"})]})})}),Oe=n(6),xe=768,ve=1024,_e=1170;n(92);var ye=function(e){var t=e.user,n=t.name,r=t.email,a=t.photo,s=t.phone,o=t.position,i=e.maxWidthContent,c={maxWidth:void 0===i?"":i,border:"1px solid transparent"};return Object(fe.jsxs)("div",{className:"Card",children:[Object(fe.jsx)("img",{className:"Card__photo",src:a,alt:a}),Object(fe.jsx)("p",{className:"Card__name",style:c,children:n}),Object(fe.jsx)("p",{className:"Card__position",children:o}),Object(fe.jsx)("p",{className:"Card__email",style:c,children:r}),Object(fe.jsx)("p",{className:"Card__phone",children:s})]})},ke=(n(93),function(e){var t=e.children,n=e.className;return Object(fe.jsx)("div",{className:je()("List",n),children:t})}),we=(n(94),function(){var e=Object(ie.useRef)(null),t=de(),n=ue(D),r=ue(V),a=ue(B),s=ue(J),o=ue(M),i=ue(z),c=Object(ie.useState)(""),d=Object(Oe.a)(c,2),u=d[0],l=d[1];return console.log("ArticleGet/ maxWidthContent",u),Object(ie.useEffect)((function(){l("".concat(function(){var e=window.innerWidth;switch(console.log("widthContentColumns/ width",e),!0){case e>_e:return 1112/3-40;case e>ve:return(e-120-58)/3-40;case e>xe:return(e-64-16)/2-40;default:return e-32-40-17}}(),"px"))}),[]),Object(ie.useEffect)((function(){setTimeout((function(){r.length>0&&t(G())}),1e3),null!==e.current&&e.current.scrollIntoView({behavior:"smooth"})}),[n.length,r,t]),Object(fe.jsx)("article",{className:je()("ArticleGet",{"ArticleGet--first-load":!n.length},"Container","Wrapper"),children:Object(fe.jsxs)("div",{className:"ArticleGet__content",children:[Object(fe.jsx)("h2",{className:"ArticleGet__title",children:"Working with GET request"}),i&&Object(fe.jsx)("p",{children:i}),Object(fe.jsxs)(ke,{className:"Get-Component",children:[n.map((function(e){return Object(fe.jsx)(ye,{user:e,maxWidthContent:u},e.id)})),r.map((function(e){return Object(fe.jsx)(ye,{user:e,maxWidthContent:u},e.id)}))]}),"loading"===a&&Object(fe.jsx)(fe.Fragment,{children:"Loading ....."}),Object(fe.jsx)("div",{className:"ArticleGet__button-container",children:(!n.length||!o)&&Object(fe.jsx)(be,{onClick:function(){return t(F({link_to_next_page:s}))},width:120,children:"Show More"})}),Object(fe.jsx)("div",{ref:e})]})})}),Ce="#E5E5E5",Se=(n(95),function(e){var t=e.label,n=e.type,r=void 0===n?"text":n,a=e.value,s=e.helper,o=e.errors,i=e.onChange,c=void 0===i?function(){return console.log("no input onChange function")}:i,d=e.className;return Object(fe.jsxs)("div",{className:je()("Input",d),children:[Object(fe.jsxs)("label",{htmlFor:"input",children:[a&&Object(fe.jsx)("p",{className:"Input__label",children:t}),Object(fe.jsx)("input",{id:"input",type:r,value:a,onChange:c,className:je()("Input__input",{"Input__input--error":null===o||void 0===o?void 0:o.length}),placeholder:t})]}),(null===o||void 0===o?void 0:o.length)?Object(fe.jsx)("div",{className:"Input__error-container"}):Object(fe.jsx)("p",{className:"Input__helpers",children:s})]})}),Ne=(n(96),function(){var e=de(),t=ue(S),n=ue(K),r=Object(ie.useState)("Tom"),a=Object(Oe.a)(r,2),s=a[0],o=a[1],i=Object(ie.useState)("tom@valid.et"),c=Object(Oe.a)(i,2),d=c[0],u=c[1],l=Object(ie.useState)("+380955388485"),p=Object(Oe.a)(l,2),j=p[0],f=p[1],m=Object(ie.useState)("1"),g=Object(Oe.a)(m,2),O=g[0],x=g[1],v=Object(ie.useState)(),_=Object(Oe.a)(v,2),y=_[0],k=_[1],w=Object(ie.useState)(!1),C=Object(Oe.a)(w,2),N=C[0],L=C[1],E=Object(ie.useRef)(),W=Object(ie.useState)(328),P=Object(Oe.a)(W,2),T=P[0],I=P[1];Object(ie.useEffect)((function(){I(function(){var e=window.innerWidth;return e<412?e-32:380}())}),[e]);var A=function(){E.current.click()},R=function(){var t=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(!0),t.prev=1,console.log("handleUpload",{user:{name:s,email:d,phone:j,images:y,position_id:O}}),e(U({user:{name:s,email:d,phone:j,images:y,position_id:O}})),t.next=6,e(F({page:1,count:6}));case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:return t.prev=10,L(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[1,8,10,13]])})));return function(){return t.apply(this,arguments)}}();return Object(fe.jsxs)("div",{className:"Form",children:[Object(fe.jsx)(Se,{label:"Your name",type:"text",value:s,errors:n.name,onChange:function(e){return o(e.target.value)},backgroundColor:Ce,className:"Form__input-name",maxWidthErrors:T}),Object(fe.jsx)(Se,{label:"Email",type:"text",value:s,errors:["Error1","Error2dsdfsdfsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd","Error3"],onChange:function(e){return o(e.target.value)},backgroundColor:Ce,className:"Form__input-email",maxWidthErrors:T}),Object(fe.jsxs)("label",{htmlFor:"name",children:["name:\xa0",Object(fe.jsx)("input",{id:"name",type:"text",value:s,onChange:function(e){return o(e.target.value)}}),n.name&&n.name.map((function(e){return Object(fe.jsx)("p",{children:e},e)}))]}),Object(fe.jsxs)("label",{htmlFor:"email",children:["email:\xa0",Object(fe.jsx)("input",{id:"email",type:"text",value:d,onChange:function(e){return u(e.target.value)}}),n.email&&n.email.map((function(e){return Object(fe.jsx)("p",{children:e},e)}))]}),Object(fe.jsxs)("label",{htmlFor:"phone",children:["phone:\xa0",Object(fe.jsx)("input",{id:"phone",type:"text",value:j,onChange:function(e){return f(e.target.value)}}),n.phone&&n.phone.map((function(e){return Object(fe.jsx)("p",{children:e},e)}))]}),Object(fe.jsxs)("label",{htmlFor:"positions",children:["positions:\xa0",Object(fe.jsx)("select",{id:"positions",value:O,onChange:function(e){return x(e.target.value)},children:t.map((function(e){return Object(fe.jsx)("option",{value:e.id,children:e.name},e.id)}))}),n.position_id&&n.position_id.map((function(e){return Object(fe.jsx)("p",{children:e},e)}))]}),Object(fe.jsxs)("label",{htmlFor:"file",children:[Object(fe.jsx)("div",{style:{visibility:"hidden"},children:Object(fe.jsx)("input",{type:"file",onChange:function(e){return k(e.target.files)},accept:"image/*",ref:E,multiple:!0,disabled:N})}),n.images&&n.images.map((function(e){return Object(fe.jsx)("p",{children:e},e)}))]}),(null===y||void 0===y?void 0:y.length)?Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)("div",{className:"img-preview",children:Array.from(y).map((function(e){return Object(fe.jsx)("img",{alt:e,src:URL.createObjectURL(e)},e)}))}),Object(fe.jsx)("div",{className:"action-buttons",children:Object(fe.jsx)("button",{type:"button",onClick:A,disabled:N,children:"Change"})})]}):Object(fe.jsx)("button",{type:"button",onClick:A,children:"Chose Images"}),Object(fe.jsx)("button",{type:"button",onClick:function(){return R()},disabled:N,children:"Post User"})]})}),Le=(n(97),function(){return Object(fe.jsxs)("article",{className:"ArticlePost",children:[Object(fe.jsx)("h2",{className:"ArticlePost__title",children:"Working with POST request"}),Object(fe.jsx)(Ne,{})]})}),Ee=(n(98),function(){return Object(fe.jsxs)("section",{className:"HomePage",children:[Object(fe.jsx)(ge,{}),Object(fe.jsx)(we,{}),Object(fe.jsx)(Le,{})]})}),We=function(){return Object(fe.jsx)("div",{children:"This page doesn't exist."})};function Pe(){var e=de(),t=ue(ee);return Object(ie.useEffect)((function(){e($(function(){var e=window.innerWidth;switch(!0){case e>_e:return"fullscreen";case e>ve:return"desktop";case e>xe:return"tablet";default:return"mobile"}}())),e(E()),e(y())}),[]),Object(ie.useEffect)((function(){t&&"mobile"!==t&&"tablet"!==t&&e(F({page:1,count:6}))}),[e,t]),Object(fe.jsxs)(fe.Fragment,{children:[Object(fe.jsx)(me,{}),Object(fe.jsx)("div",{style:{position:"fixed",top:"70px",left:"20px",zIndex:9999},children:"window.innerWidth ".concat(window.innerWidth," x window.innerHeight ").concat(window.innerHeight)}),Object(fe.jsx)("main",{children:Object(fe.jsx)(i.a,{})})]})}localStorage.clear();var Te=Object(ce.a)([{path:"/",element:Object(fe.jsx)(Pe,{}),errorElement:Object(fe.jsx)(We,{}),id:"App",children:[{path:"/",element:Object(fe.jsx)(Ee,{}),id:"homepage",errorElement:Object(fe.jsx)(fe.Fragment,{children:"Error on Homepage"})}]}]);n(99);s.a.createRoot(document.getElementById("root")).render(Object(fe.jsx)(r.a,{store:se,children:Object(fe.jsx)(o.a,{loading:null,persistor:oe,children:Object(fe.jsx)(i.c,{router:Te})})}))},43:function(e,t,n){},44:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.bde27ebe.chunk.js.map