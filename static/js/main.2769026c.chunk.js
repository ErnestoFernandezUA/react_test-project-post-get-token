(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(29),o=n(57),i=n.n(o),c=n(58),l=n(4),u=n(15),d=n(13),p=n(20),j=n(59),f=n.n(j),h=n(17),m=n(8),b=n(5),g=n.n(b),v=n(9),O=n(108),x="https://frontend-test-assignment-api.abz.agency/api/v1",_=O.a.create({baseURL:x}),y=function(e,t){return Object(v.a)(g.a.mark((function n(){var r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("instance get",x+e),n.next=3,_.get(e,t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))()},N=function(e,t,n){return Object(v.a)(g.a.mark((function r(){var a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("instance post",x+e,t),r.next=3,_.post(e,t,n);case 3:return a=r.sent,r.abrupt("return",a.data);case 5:case"end":return r.stop()}}),r)})))()},k={storage:[],statusLoading:"idle",error:null},C=Object(d.b)("users/getPositions",function(){var e=Object(v.a)(g.a.mark((function e(t,n){var r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,y("/positions");case 4:if(!(a=e.sent).success){e.next=7;break}return e.abrupt("return",a.positions);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(e.t0);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(d.c)({name:"positions",initialState:k,reducers:{addPositions:function(e,t){var n;(n=e.storage).push.apply(n,Object(m.a)(t.payload))},setPositionsStatus:function(e,t){e.statusLoading=t.payload},setPositionsError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetPositionsState:function(){return k}},extraReducers:function(e){e.addCase(C.pending,(function(e){e.statusLoading="loading"})).addCase(C.fulfilled,(function(e,t){e.statusLoading="idle",e.storage=t.payload.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{id:String(e.id)})}))})).addCase(C.rejected,(function(e){e.statusLoading="failed"}))}}),w=F.reducer,S=F.actions,E=(S.setPositionsStatus,S.setPositionsError,S.resetPositionsState,function(e){return e.positions.storage}),P="/token",L="/users",A=function(e,t){return Boolean(e)&&Date.now()-Number(e)<60*t*1e3},I={storage:null,currentRequestId:null,timeOfLastSet:null,activeDuration:40,statusLoading:"idle",error:null},U=Object(d.b)("token/fetchToken",function(){var e=Object(v.a)(g.a.mark((function e(t,n){var r,a,s,o,i,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,s=n.requestId,e.prev=1,o=a(),i=A(o.token.timeOfLastSet,40),s!==o.token.currentRequestId||i){e.next=9;break}return e.next=7,y(P);case 7:return c=e.sent,e.abrupt("return",c);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),G=Object(d.c)({name:"token",initialState:I,reducers:{setToken:function(e,t){e.storage=t.payload.token},setStatus:function(e,t){e.statusLoading=t.payload},setError:function(e,t){e.error=t.payload,e.statusLoading="failed"},resetToken:function(){return I}},extraReducers:function(e){e.addCase(U.pending,(function(e,t){var n=t.meta.requestId;e.statusLoading="loading",e.error=null,e.currentRequestId||(e.currentRequestId=n)})).addCase(U.fulfilled,(function(e,t){t.payload&&(e.storage=t.payload.token,e.timeOfLastSet=Date.now()),e.statusLoading="idle",e.currentRequestId=null})).addCase(U.rejected,(function(e,t){e.statusLoading="failed",e.error=t.payload}))}}),T=G.reducer,W=G.actions,R=(W.setToken,W.setStatus,W.setError,W.resetToken,function(e,t,n){return e?y(e):y(L,{params:{page:t,count:n}})}),M={storage:[],payload:[],link_to_next_page:null,current_page:null,total_pages:null,statusLoading:"idle",errorMessageGet:null},B=Object(d.b)("users/fetchUsers",function(){var e=Object(v.a)(g.a.mark((function e(t,n){var r,a,s,o,i,c,l,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.link_to_next_page,a=void 0===r?null:r,s=t.page,o=void 0===s?1:s,i=t.count,c=void 0===i?6:i,l=n.rejectWithValue,e.prev=2,e.next=5,new Promise((function(e){return setTimeout(e,1e3)}));case 5:return e.next=7,R(a,o,c);case 7:return u=e.sent,console.log(u),e.abrupt("return",u);case 12:e.prev=12,e.t0=e.catch(2),l(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}()),q=Object(d.c)({name:"userGet",initialState:M,reducers:{addUsers:function(e,t){var n;(n=e.storage).push.apply(n,Object(m.a)(t.payload))},addPayload:function(e){var t;(t=e.storage).push.apply(t,Object(m.a)(e.payload)),e.payload.length=0},setStatusLoading:function(e,t){e.statusLoading=t.payload},resetUsers:function(e){e.storage=M.storage}},extraReducers:function(e){e.addCase(B.pending,(function(e){e.statusLoading="loading"})).addCase(B.fulfilled,(function(e,t){if(t.payload&&t.payload.success){var n,r=t.payload,a=r.users,s=r.links.next_url,o=r.total_pages,i=r.page;(n=e.payload).push.apply(n,Object(m.a)(a)),e.statusLoading="idle",e.link_to_next_page=s,e.total_pages=o,e.current_page=i}else e.errorMessageGet="getUsersAsync.fulfilled/ response.success = false"})).addCase(B.rejected,(function(e){e.statusLoading="failed"}))}}),X=q.reducer,D=q.actions,H=(D.addUsers,D.addPayload),V=(D.setStatusLoading,D.resetUsers),J=function(e){return e.usersGet.storage},Q=function(e){return e.usersGet.payload},z=function(e){return"loading"===e.usersGet.statusLoading},K=function(e){return e.usersGet.errorMessageGet},Y=function(e){return e.usersGet.link_to_next_page},Z=function(e){return e.usersGet.current_page===e.usersGet.total_pages},$=function(e,t){return N(L,e,{headers:{Token:t,"Content-Type":"multipart/form-data"}})},ee={statusUpLoading:"idle",serverMessage:null,validationFails:{name:[],email:[],phone:[],photo:[],position_id:[]}},te=Object(d.b)("usersPost/post",function(){var e=Object(v.a)(g.a.mark((function e(t,n){var r,a,s,o,i,c,l,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,a=n.getState,s=a(),o=String(s.token.storage),e.next=5,new Promise((function(e){return setTimeout(e,5e3)}));case 5:return e.prev=5,e.next=8,$(t,o);case 8:return i=e.sent,console.log("postUserAsync/ response",i),e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(5),u=e.t0,console.log("postUserAsync// rejectWithValue",null===(c=u.response)||void 0===c?void 0:c.data),e.abrupt("return",r(null===(l=u.response)||void 0===l?void 0:l.data));case 18:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),ne=Object(d.c)({name:"usersPost",initialState:ee,reducers:{clearError:function(e,t){var n=t.payload.property;e.validationFails[n]=ee.validationFails[n]||[]},clearAllErrors:function(e){e.validationFails=Object(h.a)({},ee.validationFails)},clearErrorMessage:function(e){e.serverMessage=null},addErrorName:function(e,t){e.validationFails.name.push(t.payload)},addErrorEmail:function(e,t){e.validationFails.email.push(t.payload)},addErrorPhone:function(e,t){e.validationFails.phone.push(t.payload)},addErrorPhoto:function(e,t){var n;null===(n=e.validationFails.photo)||void 0===n||n.push(t.payload)},addErrorPosition_Id:function(e,t){e.validationFails.position_id.push(t.payload)}},extraReducers:function(e){e.addCase(te.pending,(function(e){console.log("postUserAsync.pending/"),e.statusUpLoading="loading",e.serverMessage=null,e.validationFails=ee.validationFails})).addCase(te.fulfilled,(function(e,t){e.statusUpLoading="idle",console.log("postUserAsync.fulfilled/ action.payload",t),e.serverMessage=t.payload.message})).addCase(te.rejected,(function(e,t){console.log("postUserAsync.rejected/ action.payload",t.payload),e.statusUpLoading="failed",e.serverMessage=t.payload.message,e.validationFails=t.payload.fails||ee.validationFails}))}}),re=ne.reducer,ae=ne.actions,se=ae.clearError,oe=ae.clearErrorMessage,ie=(ae.clearAllErrors,ae.addErrorName),ce=ae.addErrorEmail,le=ae.addErrorPhone,ue=ae.addErrorPhoto,de=ae.addErrorPosition_Id,pe=function(e){return"loading"===e.usersPost.statusUpLoading},je=function(e){return"failed"===e.usersPost.statusUpLoading},fe=function(e){return e.usersPost.serverMessage},he=function(e){return e.usersPost.validationFails},me={name:ie,email:ce,phone:le,photo:ue,position_id:de},be={screen:null},ge=Object(d.c)({name:"options",initialState:be,reducers:{setScreen:function(e,t){e.screen=t.payload},resetOptionsState:function(){return be}}}),ve=ge.reducer,Oe=ge.actions,xe=Oe.setScreen,_e=(Oe.resetOptionsState,function(e){return e.options.screen}),ye=Object(u.b)({usersGet:X,usersPost:re,token:T,positions:w,options:ve}),Ne={key:"root",storage:f.a,whitelist:["token"]},ke=Object(p.g)(Ne,ye),Ce=Object(d.a)({reducer:ke,middleware:function(e){return e({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e,"posts"]}})}}),Fe=Ce,we=Object(p.h)(Ce),Se=n(48),Ee=s.b,Pe=s.c,Le=n(18),Ae=n(12),Ie=n.n(Ae),Ue=(n(89),n(1)),Ge=function(e){var t=e.tableIndex,n=e.disabled,a=void 0!==n&&n,s=e.children,o=void 0===s?"":s,i=e.onClick,c=void 0===i?function(){return console.log("no onClick function")}:i,l=e.width,u=e.className,d=void 0===u?"":u,p=Object(r.useRef)(d.trim().split(" ")).current;return Object(Ue.jsx)("div",{role:"button",tabIndex:t,className:Ie.a.apply(void 0,["Button",{"Button--disabled":a}].concat(Object(m.a)(p))),onClick:c,style:{width:l},onKeyDown:function(){},children:Object(Ue.jsx)("div",{className:"Button__container",children:o})})},Te=n.p+"static/media/logo.85fd1d96.svg",We=(n(91),n(46),n(35),function(){var e=function(e){Le.scroller.scrollTo(e,{duration:800,delay:0,smooth:"easeInOutQuart"})};return Object(Ue.jsx)("div",{className:"Header",children:Object(Ue.jsxs)("div",{className:"Header__container Container Wrapper",children:[Object(Ue.jsx)("div",{className:"Header__logo",children:Object(Ue.jsx)("button",{type:"button",onClick:function(){Le.animateScroll.scrollToTop()},children:Object(Ue.jsx)("img",{src:Te,alt:"Logo"})})}),Object(Ue.jsxs)("div",{className:"Header__nav",children:[Object(Ue.jsx)(Ge,{onClick:function(){return e("ArticleGet")},children:"Users"}),Object(Ue.jsx)(Ge,{onClick:function(){return e("ArticlePost")},children:"Sign up"})]})]})})}),Re=(n(92),function(){return Object(Ue.jsx)("article",{className:"Promo Container",children:Object(Ue.jsxs)("div",{className:"Promo__poster Wrapper",children:[Object(Ue.jsx)("h1",{children:"Test assignment for front-end developer"}),Object(Ue.jsx)("p",{children:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."}),Object(Ue.jsx)(Ge,{className:"Promo__button",width:120,onClick:function(){return e="ArticlePost",Le.scroller.scrollTo(e,{duration:800,delay:0,smooth:"easeInOutQuart"});var e},children:"Sign up"})]})})}),Me=768,Be=1024,qe=1170;n(93),n(94);var Xe=function(e){var t=e.user,n=t.name,a=t.email,s=t.photo,o=t.phone,i=t.position,c=e.maxWidthContent,l=void 0===c?"":c,u=e.className,d=void 0===u?"":u,p=Object(r.useRef)(d.trim().split(" ")).current,j={maxWidth:l,border:"1px solid transparent"};return Object(Ue.jsx)("div",{className:Ie.a.apply(void 0,["Card"].concat(Object(m.a)(p))),children:Object(Ue.jsxs)("div",{className:"Card__container",children:[Object(Ue.jsx)("img",{className:"Card__photo",src:s,alt:s}),Object(Ue.jsx)("p",{className:"Card__name",style:j,children:n}),Object(Ue.jsx)("p",{className:"Card__position",children:i}),Object(Ue.jsxs)("p",{className:"Card__email",style:j,children:[a,Object(Ue.jsx)("span",{className:"Card__email--hover",children:a})]}),Object(Ue.jsx)("p",{className:"Card__phone",children:o})]})})},De=(n(95),function(e){var t=e.children,n=e.className,a=void 0===n?"":n,s=Object(r.useRef)(a.trim().split(" ")).current;return Object(Ue.jsx)("div",{className:Ie.a.apply(void 0,["List"].concat(Object(m.a)(s))),children:t})}),He=(n(96),function(){return Object(Ue.jsx)("div",{className:"Loader",children:Object(Ue.jsx)("div",{className:"Loader__content"})})}),Ve=(n(97),function(){var e=Ee(),t=Pe(J),n=Pe(Q),a=Pe(z),s=Pe(Y),o=Pe(Z),i=Pe(K),c=Object(r.useRef)("".concat(function(){var e=window.innerWidth;switch(!0){case e>qe:return(qe-58)/3-40;case e>Be:return(e-120-58)/3-40;case e>Me:return(e-64-40)/2-40;default:return e-32-40-17}}(),"px"));return Object(r.useEffect)((function(){setTimeout((function(){var t;n.length>0&&(e(H()),t="ArticleGet__anchor",Le.scroller.scrollTo(t,{duration:500,delay:0,smooth:"easeInOutQuart"}))}),350)}),[t.length,n,e]),Object(Ue.jsx)(Le.Element,{name:"ArticleGet",children:Object(Ue.jsx)("article",{className:Ie()("ArticleGet",{"ArticleGet--first-load":!t.length},"Container","Wrapper"),children:Object(Ue.jsxs)("div",{className:"ArticleGet__content",children:[Object(Ue.jsx)("h2",{className:"ArticleGet__title",children:"Working with GET request"}),i&&Object(Ue.jsx)("p",{children:i}),Object(Ue.jsxs)(De,{children:[t.map((function(e){return Object(Ue.jsx)(Xe,{user:e,maxWidthContent:c.current},e.id)})),n.map((function(e){return Object(Ue.jsx)(Xe,{className:"Payload",user:e,maxWidthContent:c.current},e.id)}))]}),Object(Ue.jsx)("div",{className:Ie()("ArticleGet__button-container",{"ArticleGet__button-container--hidden":o&&t.length}),children:a?Object(Ue.jsx)(He,{}):Object(Ue.jsx)(Ue.Fragment,{children:(!t.length||!o)&&Object(Ue.jsx)(Ge,{onClick:function(){return e(B({link_to_next_page:s}))},width:120,disabled:a,children:"Show More"})})}),Object(Ue.jsx)("div",{id:"ArticleGet__anchor",className:"ArticleGet__anchor"})]})})})}),Je=n(10),Qe=n(6),ze=(n(98),function(e){var t=e.name,n=e.label,a=e.type,s=void 0===a?"text":a,o=e.value,i=e.helper,c=e.errors,l=void 0===c?[]:c,u=e.onChange,d=void 0===u?function(){return console.log("no input onChange function")}:u,p=e.onBlur,j=void 0===p?function(){return console.log("no input onBlur function")}:p,f=e.className,h=void 0===f?"":f,b=Object(r.useRef)(h.trim().split(" ")).current;return Object(Ue.jsxs)("div",{className:Ie.a.apply(void 0,["Input"].concat(Object(m.a)(b))),children:[Object(Ue.jsxs)("label",{htmlFor:"input",children:[o&&Object(Ue.jsx)("p",{className:"Input__label",children:n}),Object(Ue.jsx)("input",{name:t,id:"input",type:s,value:o,onChange:d,onBlur:j,className:Ie()("Input__input",{"Input__input--error":null===l||void 0===l?void 0:l.length}),placeholder:n})]}),Object(Ue.jsx)("div",{className:"Input__error-container",children:(null===l||void 0===l?void 0:l.length)?Object(Ue.jsx)(Ue.Fragment,{children:l.map((function(e){return Object(Ue.jsx)("div",{className:"Input__error",children:e},e)}))}):Object(Ue.jsx)("p",{className:"Input__helpers",children:i})})]})}),Ke=n.p+"static/media/selected.0e054581.svg",Ye=n.p+"static/media/notSelected.1abeeb93.svg",Ze=(n(99),function(e){var t=e.current,n=e.position,r=n.id,a=n.name,s=e.onChange;return Object(Ue.jsxs)("label",{htmlFor:a,className:"Radio",children:[Object(Ue.jsx)("img",{src:r===t?Ke:Ye,alt:"name"}),Object(Ue.jsx)("input",{id:a,name:"position_id",type:"radio",value:r,checked:r===t,onChange:s,className:"Select__radio"}),Object(Ue.jsx)("span",{children:a})]})}),$e=(n(100),function(e){var t=e.currentValue,n=e.onChange,a=e.className,s=void 0===a?"":a,o=e.fails,i=void 0===o?[]:o,c=Pe(E),l=Object(r.useRef)(s.trim().split(" ")).current;return Object(Ue.jsxs)("div",{className:Ie.a.apply(void 0,["Select"].concat(Object(m.a)(l))),children:[Object(Ue.jsx)("p",{className:"Select__title",children:"Select your position:"}),c.map((function(e){return Object(Ue.jsx)("div",{className:"Select__radio",children:Object(Ue.jsx)(Ze,{position:e,current:t,onChange:n})},e.id)})),Object(Ue.jsx)("div",{className:"Select__errors-container",children:i&&i.map((function(e){return Object(Ue.jsx)("p",{className:"Select__error",children:e},e)}))})]})}),et=(n(101),function(e){var t=e.fileName,n=e.isDisabled,a=e.onChange,s=e.fails,o=void 0===s?[]:s,i=e.className,c=void 0===i?"":i,l=Object(r.useRef)(c.trim().split(" ")).current;return Object(Ue.jsx)(Ue.Fragment,{children:Object(Ue.jsxs)("label",{htmlFor:"file",className:Ie.a.apply(void 0,["InputFile",{"InputFile--error":null===o||void 0===o?void 0:o.length}].concat(Object(m.a)(l))),children:[Object(Ue.jsx)("div",{className:"InputFile__button",children:"Upload"}),Object(Ue.jsx)("input",{id:"file",name:"photo",type:"file",onChange:a,accept:"image/jpg",multiple:!1,disabled:n,className:"InputFile__input",hidden:!0}),Object(Ue.jsx)("span",{className:Ie()("InputFile__value",{"InputFile__value--empty":!t}),children:t||"Upload your photo"}),Object(Ue.jsx)("div",{className:"InputFile__error-container",children:Boolean(o.length)&&o.map((function(e){return Object(Ue.jsx)("p",{className:"InputFile__error",children:e},e)}))})]})})}),tt=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="+38 ",n=2;n<Math.min(12,e.length);n++){var r=e[n];if(!["0","1","2","3","4","5","6","7","8","9"].includes(r))return t;2===n&&(t+="("),5===n&&(t+=")"),[5,8,10].includes(n)&&(t+=" "),t+=r}return t},nt="#E5E5E5",rt=(n(102),n.p+"static/media/success-image.7ae50975.svg"),at={name:"",email:"",phone:"",position_id:"",photo:void 0},st=function(){var e,t=Ee(),n=Pe(je),a=Pe(fe),s=Pe(he),o=Pe(pe),i=Object(r.useState)(at),c=Object(Qe.a)(i,2),l=c[0],u=c[1],d=Object(r.useState)(!1),p=Object(Qe.a)(d,2),j=p[0],f=p[1],m=Object(r.useRef)(function(){var e=window.innerWidth;return e<412?e-32:380}()),b=function(e){var n,r=e.target,a=r.name,o=r.value,i=r.files;(null===(n=s[a])||void 0===n?void 0:n.length)&&t(se({property:a})),u(Object(h.a)(Object(h.a)({},l),{},Object(Je.a)({},a,i?i[0]:"phone"===a?function(e){return e.split("").filter((function(e,t){return t<19&&" "!==e&&"("!==e&&")"!==e&&"+"!==e})).join("")}(o):o)))},O=function(e){var n=e.target.name;l[n]||(t(se({property:n})),t(me[n]("The ".concat(n," field is required."))))},x=function(){var e=!0;return Object.keys(me).forEach((function(n){t(se({property:n})),l[n]||(t(me[n]("The ".concat(n," field is required."))),e=!1)})),e},_=function(){var e=Object(v.a)(g.a.mark((function e(n){var r,a,s,o,i,c,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),x()){e.next=3;break}return e.abrupt("return");case 3:return r=l.name,a=l.email,s=l.phone,o=l.position_id,i=l.photo,(c=new FormData).append("name",r),c.append("email",a),c.append("phone",s),c.append("position_id",o),c.append("photo",i),e.prev=10,t(U()),e.next=14,t(te(c));case 14:if(u=e.sent,console.log("form/ addUser",u),!u.payload.success){e.next=22;break}return f(!0),t(V()),console.log("Form// getUsersAsync"),e.next=22,t(B({}));case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(10),console.log("errorPost",e.t0);case 27:return e.prev=27,setTimeout((function(){t(oe()),f(!1)}),2e3),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[10,24,27,30]])})));return function(t){return e.apply(this,arguments)}}();return Object(Ue.jsxs)("div",{className:"Form Wrapper",children:[o&&Object(Ue.jsx)(He,{}),n&&Object(Ue.jsx)("h2",{className:"Form__server-message",children:a}),j&&Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)("h2",{className:"Form__title-success",children:a}),Object(Ue.jsx)("img",{src:rt,alt:"success"})]}),!a&&!o&&!j&&Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(ze,{name:"name",label:"Your name",type:"text",value:l.name,errors:s.name,onChange:b,onBlur:O,backgroundColor:nt,className:"Form__input Form__input-name",maxWidthErrors:m.current}),Object(Ue.jsx)(ze,{name:"email",label:"Email",type:"text",value:l.email,errors:s.email,onChange:b,onBlur:O,backgroundColor:nt,className:"Form__input Form__input-email",maxWidthErrors:m.current}),Object(Ue.jsx)(ze,{name:"phone",label:"Phone",type:"text",value:tt(l.phone),helper:"+38 (XXX) XXX - XX - XX",errors:s.phone,onChange:b,onBlur:O,backgroundColor:nt,className:"Form__input Form__input-phone",maxWidthErrors:m.current}),Object(Ue.jsx)($e,{currentValue:l.position_id,onChange:b,className:"Form__input",fails:s.position_id}),Object(Ue.jsx)(et,{fileName:null===(e=l.photo)||void 0===e?void 0:e.name,isDisabled:o,onChange:b,fails:s.photo,className:"Form__input"}),Object(Ue.jsx)(Ge,{onClick:function(e){return _(e)},disabled:o,className:"Form__button-submit",children:"Sign up"})]})]})},ot=(n(103),function(){return Object(Ue.jsx)(Le.Element,{name:"ArticlePost",children:Object(Ue.jsx)("article",{className:"ArticlePost",children:Object(Ue.jsxs)("div",{className:"ArticlePost__content",children:[Object(Ue.jsx)("h2",{className:"ArticlePost__title",children:"Working with POST request"}),Object(Ue.jsx)(st,{})]})})})}),it=(n(104),function(){return Object(Ue.jsxs)("section",{className:"HomePage",children:[Object(Ue.jsx)(Re,{}),Object(Ue.jsx)(Ve,{}),Object(Ue.jsx)(ot,{})]})}),ct=function(){return Object(Ue.jsx)("div",{children:"This page doesn't exist."})};function lt(){var e=Ee(),t=Pe(_e);return Object(r.useEffect)((function(){e(xe(function(){var e=window.innerWidth;switch(!0){case e>qe:return"fullscreen";case e>Be:return"desktop";case e>Me:return"tablet";default:return"mobile"}}())),e(U()),e(C())}),[]),Object(r.useEffect)((function(){t&&"mobile"!==t&&"tablet"!==t&&(console.log("App// getUsersAsync"),e(B({})))}),[e,t]),Object(Ue.jsxs)(Ue.Fragment,{children:[Object(Ue.jsx)(We,{}),Object(Ue.jsx)("main",{children:Object(Ue.jsx)(l.a,{})})]})}var ut=Object(Se.a)([{path:"/",element:Object(Ue.jsx)(lt,{}),errorElement:Object(Ue.jsx)(ct,{}),id:"App",children:[{path:"/",element:Object(Ue.jsx)(it,{}),id:"homepage",errorElement:Object(Ue.jsx)(Ue.Fragment,{children:"Error on Homepage"})}]}]);n(105);i.a.createRoot(document.getElementById("root")).render(Object(Ue.jsx)(a.a.StrictMode,{children:Object(Ue.jsx)(s.a,{store:Fe,children:Object(Ue.jsx)(c.a,{loading:null,persistor:we,children:Object(Ue.jsx)(l.c,{router:ut})})})}))},35:function(e,t,n){},46:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.2769026c.chunk.js.map