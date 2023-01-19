(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n(54),s=n.n(a),o=n(55),c=n(4),i=n(13),u=n(14),l=n(17),d=n(56),p=n.n(d),j=n(11),f=n(5),h=n.n(f),b=n(8),g=n(99),x="https://frontend-test-assignment-api.abz.agency/api/v1",m=g.a.create({baseURL:x}),O=function(e){return Object(b.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get(e);case 2:return n=t.sent,console.log("get",x+e),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},v=function(e,t){return Object(b.a)(h.a.mark((function n(){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.post(e,t);case 2:return r=n.sent,console.log("post",x+e,t),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))()},_={storage:[],statusLoading:"idle",error:null},y=Object(u.b)("users/getPositions",function(){var e=Object(b.a)(h.a.mark((function e(t,n){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O("/positions");case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r(e.t0);case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),k=Object(u.c)({name:"positions",initialState:_,reducers:{addPositions:function(e,t){var n;(n=e.storage).push.apply(n,Object(j.a)(t.payload))},setPositionsStatus:function(e,t){e.statusLoading=t.payload},setPositionsError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetPositionsState:function(){return _}},extraReducers:function(e){e.addCase(y.pending,(function(e){e.statusLoading="loading"})).addCase(y.fulfilled,(function(e,t){e.statusLoading="idle",t.payload&&t.payload.success&&(e.storage=t.payload.positions)})).addCase(y.rejected,(function(e){e.statusLoading="failed"}))}}),w=k.reducer,C=k.actions,S=(C.setPositionsStatus,C.setPositionsError,C.resetPositionsState,function(e,t){var n=Date.now();return!!e&&(console.log("selectTokenIsExpired/ time from last:",Math.floor((n-e)/1e3/60),"min,","is token active? ",n-e<60*t*1e3),n-e<60*t*1e3)}),L={storage:null,currentRequestId:null,setAt:null,statusLoading:"idle",error:null},N=Object(u.b)("token/fetchToken",function(){var e=Object(b.a)(h.a.mark((function e(t,n){var r,a,s,o,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.requestId,s=r(),o=S(s.token.setAt,40),a!==s.token.currentRequestId||o){e.next=8;break}return e.next=6,O("/token");case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),T=Object(u.c)({name:"token",initialState:L,reducers:{setToken:function(e,t){e.storage=t.payload.token},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetToken:function(){return L}},extraReducers:function(e){e.addCase(N.pending,(function(e,t){var n=t.meta.requestId;e.statusLoading="loading",e.currentRequestId||(e.currentRequestId=n)})).addCase(N.fulfilled,(function(e,t){t.payload&&(e.storage=t.payload.token,e.setAt=Date.now()),e.statusLoading="idle",e.currentRequestId=null})).addCase(N.rejected,(function(e){e.statusLoading="failed"}))}}),E=T.reducer,P=T.actions,A=(P.setToken,P.setStatus,P.setError,P.resetToken,function(e,t,n){return O(e||"/users?page=".concat(t,"&count=").concat(n))}),W={storage:[],payload:[],statusLoading:"idle",error:null,link_to_next_page:null,current_page:null,total_pages:null,positions:[],fails:{name:null,email:null,phone:null,images:null,position_id:null}},I=Object(u.b)("users/fetchUsers",function(){var e=Object(b.a)(h.a.mark((function e(t,n){var r,a,s,o,c,i,u,l,d,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.link_to_next_page,a=void 0===r?null:r,s=t.page,o=void 0===s?1:s,c=t.count,i=void 0===c?6:c,u=t.delay,l=void 0===u?5e3:u,d=n.rejectWithValue,e.prev=2,e.next=5,new Promise((function(e){return setTimeout(e,l)}));case 5:return e.next=7,A(a,o,i);case 7:return p=e.sent,e.abrupt("return",p);case 11:e.prev=11,e.t0=e.catch(2),d(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()),R=Object(u.b)("users/postUser",function(){var e=Object(b.a)(h.a.mark((function e(t,n){var r,a,s,o,c,i,u,l,d,p,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,a=r.name,s=r.email,o=r.phone,c=r.images,i=r.position_id,u=n.getState,l=n.rejectWithValue,console.log("postUserAsync",i),e.prev=3,d=u(),console.log("state.token.storage",d.token.storage),(p=new FormData).append("position_id",i),p.append("name",a),p.append("email",s),p.append("phone",o),p.append("photo",c[0]),console.log(p),e.next=15,f={body:p,headers:{Token:String(d.token.storage)}},v("/users",f);case 15:return j=e.sent,console.log("postUserAsync/ response",j),e.abrupt("return",j);case 20:e.prev=20,e.t0=e.catch(3),l(e.t0);case 23:case"end":return e.stop()}var f}),e,null,[[3,20]])})));return function(t,n){return e.apply(this,arguments)}}()),U=Object(u.c)({name:"user",initialState:W,reducers:{addUsers:function(e,t){var n;(n=e.storage).push.apply(n,Object(j.a)(t.payload))},addPayload:function(e){var t;(t=e.storage).push.apply(t,Object(j.a)(e.payload)),e.payload.length=0},setStatus:function(e,t){e.statusLoading=t.payload},resetState:function(){return W}},extraReducers:function(e){e.addCase(I.pending,(function(e){e.statusLoading="loading"})).addCase(I.fulfilled,(function(e,t){if(t.payload&&t.payload.success){var n,r=t.payload,a=r.users,s=r.links.next_url,o=r.total_pages,c=r.page;(n=e.payload).push.apply(n,Object(j.a)(a)),e.statusLoading="idle",e.link_to_next_page=s,e.total_pages=o,e.current_page=c}else e.error="getUsersAsync.fulfilled/ response.success = false"})).addCase(I.rejected,(function(e){e.statusLoading="failed"})).addCase(R.pending,(function(e){e.statusLoading="loading"})).addCase(R.fulfilled,(function(e,t){e.statusLoading="idle",console.log("postUserAsync.fulfilled/ action.payload",t.payload),t.payload})).addCase(R.rejected,(function(e){e.statusLoading="failed"}))}}),H=U.reducer,q=U.actions,G=(q.addUsers,q.addPayload),D=(q.setStatus,q.resetState,function(e){return e.users.storage}),F=function(e){return e.users.payload},B=function(e){return e.users.statusLoading},V=function(e){return e.users.error},z=function(e){return e.users.link_to_next_page},J=function(e){return e.users.current_page===e.users.total_pages},M={screen:null},K=Object(u.c)({name:"options",initialState:M,reducers:{setScreen:function(e,t){e.screen=t.payload},resetOptionsState:function(){return M}}}),Q=K.reducer,X=K.actions,Y=X.setScreen,Z=(X.resetOptionsState,Object(i.b)({users:H,token:E,positions:w,options:Q})),$={key:"root",storage:p.a,whitelist:["token"]},ee=Object(l.g)($,Z),te=Object(u.a)({reducer:ee,middleware:function(e){return e({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e,"posts"]}})}}),ne=te,re=Object(l.h)(te),ae=n(0),se=n(45),oe=r.b,ce=r.c,ie=n(24),ue=(n(86),n(3)),le=function(e){var t=e.children;return Object(ue.jsx)("div",{className:"Container",children:t})},de=(n(88),function(e){var t=e.children;return Object(ue.jsx)("div",{className:"Wrapper",children:t})}),pe=n(38),je=n.n(pe),fe=(n(89),function(e){var t=e.className,n=e.disabled,r=void 0!==n&&n,a=e.children,s=void 0===a?"":a,o=e.onClick,c=void 0===o?function(){return console.log("no onClick function")}:o,i=e.width;return Object(ue.jsx)("div",{className:je()("Button",{"Button--disabled":r},t),onClick:c,style:{width:i},onKeyDown:function(){},children:Object(ue.jsx)("div",{className:"Button__container",children:s})})}),he=n.p+"static/media/logo.85fd1d96.svg",be=(n(90),function(){return Object(ue.jsx)("header",{className:"Header",children:Object(ue.jsx)(le,{children:Object(ue.jsx)(de,{children:Object(ue.jsxs)("div",{className:"Header__container",children:[Object(ue.jsx)("div",{className:"Header__logo",children:Object(ue.jsx)("button",{type:"button",onClick:function(){ie.animateScroll.scrollToTop()},children:Object(ue.jsx)("img",{src:he,alt:"Logo"})})}),Object(ue.jsxs)("div",{className:"Header__nav",children:[Object(ue.jsx)(ie.Link,{activeClass:"active",to:"Get-Component",spy:!0,smooth:!0,duration:500,children:Object(ue.jsx)(fe,{className:"Header__button",disabled:!1,children:"Users"})}),Object(ue.jsx)(fe,{className:"Header__button",children:"Sign in"})]})]})})})})}),ge=(n(91),function(){return Object(ue.jsx)("article",{className:"Promo",children:Object(ue.jsx)(le,{children:Object(ue.jsx)("div",{className:"Promo__poster",children:Object(ue.jsxs)(de,{children:[Object(ue.jsx)("h1",{children:"Test assignment for front-end developer"}),Object(ue.jsx)("p",{children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(ue.jsx)(fe,{className:"Promo__button",children:"Sign up"})]})})})})}),xe=n(6),me=768,Oe=1024,ve=1170;n(92);var _e=function(e){var t=e.user,n=t.name,r=t.email,a=t.photo,s=t.phone,o=t.position,c={maxWidth:e.maxWidthContent,border:"1px solid transparent"};return Object(ue.jsxs)("div",{className:"Card",children:[Object(ue.jsx)("img",{className:"Card__photo",src:a,alt:a}),Object(ue.jsx)("p",{className:"Card__name",style:c,children:n}),Object(ue.jsx)("p",{className:"Card__position",children:o}),Object(ue.jsx)("p",{className:"Card__email",style:c,children:r}),Object(ue.jsx)("p",{className:"Card__phone",children:s})]})},ye=(n(93),function(e){var t=e.children;return Object(ue.jsx)("div",{className:"List",children:t})}),ke=(n(94),function(){var e=Object(ae.useRef)(null),t=oe(),n=ce(D),r=ce(F),a=ce(B),s=ce(z),o=ce(J),c=ce(V),i=Object(ae.useState)("160px"),u=Object(xe.a)(i,2),l=u[0],d=u[1];return Object(ae.useEffect)((function(){d("".concat(function(){var e=window.innerWidth;switch(!0){case e>ve:return 1112/3-40;case e>Oe:return(e-120-58)/3-40;case e>me:return(e-64-16)/2-40;default:return e-32-40}}(),"px"))}),[]),Object(ae.useEffect)((function(){setTimeout((function(){r.length>0&&t(G())}),1e3),null!==e.current&&e.current.scrollIntoView({behavior:"smooth"})}),[n.length,r,t]),console.log(l),Object(ue.jsx)("article",{className:je()("ArticleGet",{"ArticleGet--start":!n.length}),children:Object(ue.jsx)(ie.Element,{name:"Get-Component",children:Object(ue.jsx)(le,{children:Object(ue.jsx)(de,{children:Object(ue.jsxs)("div",{className:"ArticleGet__content",children:[Object(ue.jsx)("h2",{className:"ArticleGet__title",children:"Working with GET request"}),c&&Object(ue.jsx)("p",{children:c}),Object(ue.jsxs)(ye,{children:[n.map((function(e){return Object(ue.jsx)(_e,{user:e,maxWidthContent:l},e.id)})),r.map((function(e){return Object(ue.jsx)(_e,{user:e,maxWidthContent:l},e.id)}))]}),"loading"===a&&Object(ue.jsx)(ue.Fragment,{children:"Loading ....."}),Object(ue.jsx)("div",{className:"ArticleGet__button-container",children:!o&&Object(ue.jsx)(fe,{onClick:function(){return t(I({link_to_next_page:s}))},width:120,children:"Show More"})})]})})})})})}),we=(n(95),function(){return Object(ue.jsxs)("section",{className:"HomePage",children:[Object(ue.jsx)(ge,{}),Object(ue.jsx)(ke,{})]})}),Ce=function(){return Object(ue.jsx)("div",{children:"This page doesn't exist."})};function Se(){var e=oe();return Object(ae.useEffect)((function(){e(N()),e(I({page:1,count:6})),e(y()),e(Y(function(){var e=window.innerWidth;switch(!0){case e>ve:return"fullscreen";case e>Oe:return"desktop";case e>me:return"tablet";default:return"mobile"}}()))}),[e]),Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(be,{}),Object(ue.jsxs)("div",{style:{position:"fixed",top:"70px",left:"20px",zIndex:9999},children:[window.innerWidth,"x",window.innerHeight]}),Object(ue.jsx)("main",{children:Object(ue.jsx)(c.a,{})})]})}var Le=Object(se.a)([{path:"/",element:Object(ue.jsx)(Se,{}),errorElement:Object(ue.jsx)(Ce,{}),id:"App",children:[{path:"/",element:Object(ue.jsx)(we,{}),id:"homepage",errorElement:Object(ue.jsx)(ue.Fragment,{children:"Error on Homepage"})}]}]);n(96);s.a.createRoot(document.getElementById("root")).render(Object(ue.jsx)(r.a,{store:ne,children:Object(ue.jsx)(o.a,{loading:null,persistor:re,children:Object(ue.jsx)(c.c,{router:Le})})}))}},[[97,1,2]]]);
//# sourceMappingURL=main.d8d53edf.chunk.js.map