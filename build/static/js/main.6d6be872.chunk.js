(this["webpackJsonpreact-web"]=this["webpackJsonpreact-web"]||[]).push([[0],{188:function(t,e,n){},190:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(25),r=n.n(i),s=n(95),o=n(10),u=n(35),j=n(36),h=n(40),l=n(39),p=(n(63),n.p+"static/media/100.aa0c6558.png"),b=n.p+"static/media/beian.0c577066.png",d=n(45),O=n(193),m=n(88),f=n.n(m).a.create({baseURL:"http://shimuhong.com:8090/",timeout:1e4,headers:{},accessToken:null});var x=n(6),g=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).setPost=function(t){(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,c){return f({method:"post",url:t,data:e}).then((function(t){n(t.data)})).catch((function(t){c(t)}))}))})("/api3",{ee:"22244"}).then((function(t){console.log(t)})).catch((function(t){console.error(t)}))},c.setGet=function(t){(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise((function(n,c){return f({method:"get",url:t,params:e}).then((function(t){n(t.data)})).catch((function(t){c(t)}))}))})("/api2",{ee:"22244"}).then((function(t){console.log(t)})).catch((function(t){console.error(t)}))},c.detail=function(t){c.props.history.push({pathname:"/detail",state:{id:3}})},c.state={},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)(c.Fragment,{children:Object(x.jsxs)(d.Header,{className:"header",children:[Object(x.jsx)("span",{children:"\u6b63\u5728\u51c6\u5907\u4e0a\u7ebf\u66f4\u65b0\u5185\u5bb9,\u656c\u8bf7\u671f\u5f85!"}),Object(x.jsxs)("span",{children:[Object(x.jsx)("sapn",{children:"Ant Design \u6d4b\u8bd5 "}),Object(x.jsx)(O.a,{type:"primary",onClick:this.setPost,children:"post\u8bf7\u6c42"}),Object(x.jsx)(O.a,{type:"primary",onClick:this.setGet,children:"get\u8bf7\u6c42"}),Object(x.jsx)(O.a,{type:"primary",onClick:this.detail,children:"\u8df3\u8f6c\u8be6\u60c5\u9875"})]})]})})}}]),n}(c.Component),v=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).state={},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(g,{history:this.props.history}),Object(x.jsx)("img",{className:"img",alt:"is a images!",src:p})]}),Object(x.jsxs)(d.Footer,{className:"footer",children:[Object(x.jsx)("img",{alt:"beian!",src:b}),"\u6d25ICP\u590718003125\u53f7"]})]})}}]),n}(c.Component),y=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Detail",children:"\u8fd9\u91cc\u662f\u8be6\u60c5!!"})}}]),n}(c.Component),C=function(){return Object(x.jsx)(s.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(o.a,{exact:!0,path:"/detail",component:y}),Object(x.jsx)(o.a,{exact:!0,path:"/test",component:g})]})})},k=(n(188),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))});r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),k()},63:function(t,e,n){}},[[190,1,2]]]);
//# sourceMappingURL=main.6d6be872.chunk.js.map