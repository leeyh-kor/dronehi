(this.webpackJsonpdronehis=this.webpackJsonpdronehis||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(2),s=n(66),o=n.n(s),r=n(22),i=n(9),j=(n(77),n(29)),l=(n(78),function(){return Object(c.jsxs)("div",{className:"Bottom",children:[Object(c.jsx)("span",{children:"\xa92019 dronehi All right reserved."}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"\ub4dc\ub860\ud558\uc774 \uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 501-24-10856 \ub300\ud45c \ubc15\ud76c\ub9dd"})]})});n(79);var d=function(){return Object(c.jsxs)("div",{className:"Header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/"},children:Object(c.jsx)("li",{children:"DRONE HI"})})}),Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/about"},children:Object(c.jsx)("li",{children:"ABOUT"})}),Object(c.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/service"},children:Object(c.jsx)("li",{children:"SERVICE"})}),Object(c.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/contact"},children:Object(c.jsx)("li",{children:"CONTACT"})})]})]})};n(84);var u=function(e){return Object(c.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/photo".concat(e.name)},children:Object(c.jsx)("img",{src:e.image,alt:"\uc774\ubbf8\uc9c0 \uc624\ub958"})})},b=n(14);n(85);function h(){var e=Object(j.a)(["{ getphotos{url,id}}"]);return h=function(){return e},e}var m=function(){var e=Object(b.gql)(h()),t=Object(b.useQuery)(e),n=t.loading,a=t.error,s=t.data,o=[];return console.log(n,a),n||(o=s.getphotos),Object(c.jsxs)("div",{className:"Wrap",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"Body",children:[Object(c.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(c.jsx)("source",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/drone_1.mp4",type:"video/mp4"})}),Object(c.jsx)("div",{className:"BodyImages",children:o.map((function(e){return Object(c.jsx)(u,{image:e.url,name:e.id})}))})]}),Object(c.jsx)(l,{})]})},p=n(34),O=(n(92),n(93),n(70)),x=(n(94),function(e){return console.log(e.src),Object(c.jsx)("div",{className:"each-fade",children:Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{src:e.src})})})});function g(){var e=Object(j.a)(["\n   query getPhoto($id: Float!) {\n    getPhoto(id: $id) {\n        id\n        url\n     }\n   }\n "]);return g=function(){return e},e}var v=Object(b.gql)(g()),E=function(){var e=Object(i.e)(),t=parseFloat(e.id),n=Object(a.useState)([]),s=Object(p.a)(n,2),o=s[0],r=s[1],j=Object(b.useQuery)(v,{variables:{id:t}}),u=j.loading,h=j.data;return Object(a.useEffect)((function(){u||(r(h.getPhoto),console.log(o))}),[u,h]),Object(c.jsxs)("div",{className:"wrap",children:[Object(c.jsx)(d,{}),u?"Loading....":Object(c.jsx)("div",{className:"slide-container",children:Object(c.jsx)(O.Fade,{children:o.map((function(e){return Object(c.jsx)(x,{src:e.url})}))})}),Object(c.jsx)(l,{})]})},f=(n(95),function(){return Object(c.jsxs)("div",{className:"aboutwrap",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%ED%9D%AC%EB%A7%9D+%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C+%EB%B0%8F+%EC%9D%B4%EB%A0%A5+1.JPG"}),Object(c.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%ED%9D%AC%EB%A7%9D+%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C+%EB%B0%8F+%EC%9D%B4%EB%A0%A5+2.JPG"})]}),Object(c.jsx)(l,{})]})}),B=(n(96),function(){return Object(c.jsx)("div",{className:"wrapService",children:Object(c.jsx)(d,{})})}),C=n(42),A=n(50),N=n(51),w=n.n(N),D=n(71);n(98);function k(){var e=Object(j.a)([" \nmutation createClientData($clientInput:clientInput!)\n{createClientData(clientInput:$clientInput)}"]);return k=function(){return e},e}var y=Object(b.gql)(k()),I=function(){var e=Object(a.useState)({name:"",email:"",phone:"",content:""}),t=Object(p.a)(e,2),n=t[0],s=t[1],o=n.name,r=n.email,i=n.phone,j=n.content,u=Object(b.useMutation)(y),h=Object(p.a)(u,2),m=h[0],O=(h[1].loading,function(){var e=Object(D.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({variables:{clientInput:{name:o,email:r,phone:i,description:j}}});case 2:t=e.sent,n=t.data,console.log(n),"undefined"!==typeof window&&window.alert("\uc811\uc218\uc644\ub8cc");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),x=function(e){var t=e.target,c=t.value,a=t.name;s(Object(A.a)(Object(A.a)({},n),{},Object(C.a)({},a,c)))};return Object(c.jsxs)("div",{className:"contactWrap",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"contactBody",children:[Object(c.jsxs)("div",{className:"inputbody",children:[Object(c.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/contact1.JPG",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(c.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/contact2.JPG",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(c.jsxs)("div",{className:"input_trigger",children:[Object(c.jsx)("input",{placeholder:"\uc5c5\uccb4\uba85 \ubc0f \uc131\ud568",onChange:x,value:o}),Object(c.jsx)("input",{placeholder:"EMAIL",onChange:x,value:r}),Object(c.jsx)("input",{placeholder:"\uc804\ud654 \ubc88\ud638",onChange:x,value:i})]})]}),Object(c.jsx)("textarea",{className:"description",placeholder:"\ud76c\ub9dd \uc758\ub8b0 \ub0b4\uc6a9",onChange:x,value:j}),Object(c.jsx)("button",{className:"Btn",onClick:O,children:"\uacac\uc801 \uc758\ub8b0"}),Object(c.jsx)("a",{className:"kakao",href:"https://open.kakao.com/o/gttcsWOc",children:Object(c.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/KakaoTalk_20210101_225157063.png",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"})})]}),Object(c.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%93%9C%EB%A1%A0+%EB%A6%AC%EB%A9%94%EC%9D%B4%ED%81%AC+6+(1+-+1).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(c.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EA%B1%B0%EC%8A%A4%EB%A5%B8+%EC%8B%9C%EA%B0%84+(1+-+1).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(c.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%93%9C%EB%A1%A0+%EB%A6%AC%EB%A9%94%EC%9D%B4%ED%81%AC+1+(1+-+7).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(c.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%93%9C%EB%A1%A0+%EB%A6%AC%EB%A9%94%EC%9D%B4%ED%81%AC+1+(2+-+7).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(c.jsx)(l,{})]})};var P=function(){return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(i.a,{path:"/",exact:"true",component:m}),Object(c.jsx)(i.a,{path:"/photo:id",component:E}),Object(c.jsx)(i.a,{path:"/about",exact:"true",component:f}),Object(c.jsx)(i.a,{path:"/service",exact:"true",component:B}),Object(c.jsx)(i.a,{path:"/contact",exact:"true",component:I})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))},F=new b.ApolloClient({uri:"http://15.164.100.109/graphql",cache:new b.InMemoryCache});o.a.render(Object(c.jsx)(b.ApolloProvider,{client:F,children:Object(c.jsx)(P,{})}),document.getElementById("root")),z()},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.1db430eb.chunk.js.map