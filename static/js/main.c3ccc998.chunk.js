(this.webpackJsonpdronehis=this.webpackJsonpdronehis||[]).push([[0],{73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},88:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(2),s=c(62),o=c.n(s),r=c(22),i=c(9),j=(c(73),c(37)),d=(c(74),function(){return Object(n.jsxs)("div",{className:"Bottom",children:[Object(n.jsx)("span",{children:"\xa92019 dronehi All right reserved."}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"\ub4dc\ub860\ud558\uc774 \uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 501-24-10856 \ub300\ud45c \ubc15\ud76c\ub9dd"})]})});c(75);var l=function(){return Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/"},children:Object(n.jsx)("li",{children:"DRONE HI"})})}),Object(n.jsxs)("div",{className:"menu",children:[Object(n.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/about"},children:Object(n.jsx)("li",{children:"ABOUT"})}),Object(n.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/service"},children:Object(n.jsx)("li",{children:"SERVICE"})}),Object(n.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/contact"},children:Object(n.jsx)("li",{children:"CONTACT"})})]})]})};c(80);var b=function(e){return Object(n.jsx)(r.b,{style:{textDecoration:"none"},to:{pathname:"/photo".concat(e.name)},children:Object(n.jsx)("img",{src:e.image,alt:"\uc774\ubbf8\uc9c0 \uc624\ub958"})})},h=c(21);c(81);function u(){var e=Object(j.a)(["{ getphotos{url,id}}"]);return u=function(){return e},e}var m=function(){var e=Object(h.gql)(u()),t=Object(h.useQuery)(e),c=t.loading,a=t.error,s=t.data,o=[];return console.log(c,a),c||(o=s.getphotos),Object(n.jsxs)("div",{className:"Wrap",children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{className:"Body",children:[Object(n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(n.jsx)("source",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/drone_1.mp4",type:"video/mp4"})}),Object(n.jsx)("div",{className:"BodyImages",children:o.map((function(e){return Object(n.jsx)(b,{image:e.url,name:e.id})}))})]}),Object(n.jsx)(d,{})]})},O=c(67),p=(c(88),c(89),c(66)),x=(c(90),function(e){return console.log(e.src),Object(n.jsx)("div",{className:"each-fade",children:Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{src:e.src})})})});function g(){var e=Object(j.a)(["\n   query getPhoto($id: Float!) {\n    getPhoto(id: $id) {\n        id\n        url\n     }\n   }\n "]);return g=function(){return e},e}var E=Object(h.gql)(g()),v=function(){var e=Object(i.e)(),t=parseFloat(e.id),c=Object(a.useState)([]),s=Object(O.a)(c,2),o=s[0],r=s[1],j=Object(h.useQuery)(E,{variables:{id:t}}),b=j.loading,u=j.data;return Object(a.useEffect)((function(){b||(r(u.getPhoto),console.log(o))}),[b,u]),Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)(l,{}),b?"Loading....":Object(n.jsx)("div",{className:"slide-container",children:Object(n.jsx)(p.Fade,{children:o.map((function(e){return Object(n.jsx)(x,{src:e.url})}))})}),Object(n.jsx)(d,{})]})},B=(c(91),function(){return Object(n.jsxs)("div",{className:"aboutwrap",children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{className:"body",children:[Object(n.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%ED%9D%AC%EB%A7%9D+%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C+%EB%B0%8F+%EC%9D%B4%EB%A0%A5+1.JPG"}),Object(n.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%ED%9D%AC%EB%A7%9D+%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C+%EB%B0%8F+%EC%9D%B4%EB%A0%A5+2.JPG"})]}),Object(n.jsx)(d,{})]})}),A=(c(92),function(){return Object(n.jsx)("div",{className:"wrapService",children:Object(n.jsx)(l,{})})}),f=(c(93),function(){return Object(n.jsxs)("div",{className:"contactWrap",children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{className:"contactBody",children:[Object(n.jsxs)("div",{className:"inputbody",children:[Object(n.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/contact1.JPG",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(n.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/contact2.JPG",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(n.jsxs)("div",{className:"input_trigger",children:[Object(n.jsx)("input",{placeholder:"\uc5c5\uccb4\uba85 \ubc0f \uc131\ud568"}),Object(n.jsx)("input",{placeholder:"EMAIL"}),Object(n.jsx)("input",{placeholder:"\uc804\ud654 \ubc88\ud638"})]})]}),Object(n.jsx)("textarea",{className:"description",placeholder:"\ud76c\ub9dd \uc758\ub8b0 \ub0b4\uc6a9"}),Object(n.jsx)("button",{className:"Btn",onClick:function(){},children:"\uacac\uc801 \uc758\ub8b0"}),Object(n.jsx)("a",{className:"kakao",href:"https://open.kakao.com/o/gttcsWOc",children:Object(n.jsx)("img",{src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/KakaoTalk_20210101_225157063.png",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"})})]}),Object(n.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%93%9C%EB%A1%A0+%EB%A6%AC%EB%A9%94%EC%9D%B4%ED%81%AC+6+(1+-+1).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(n.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EA%B1%B0%EC%8A%A4%EB%A5%B8+%EC%8B%9C%EA%B0%84+(1+-+1).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(n.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%93%9C%EB%A1%A0+%EB%A6%AC%EB%A9%94%EC%9D%B4%ED%81%AC+1+(1+-+7).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(n.jsx)("img",{className:"imga",src:"https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%93%9C%EB%A1%A0+%EB%A6%AC%EB%A9%94%EC%9D%B4%ED%81%AC+1+(2+-+7).jpg",alt:"\uc774\ubbf8\uc9c0 \ub85c\ub4dc \uc624\ub958"}),Object(n.jsx)(d,{})]})});var C=function(){return Object(n.jsxs)(r.a,{children:[Object(n.jsx)(i.a,{path:"/",exact:"true",component:m}),Object(n.jsx)(i.a,{path:"/photo:id",component:v}),Object(n.jsx)(i.a,{path:"/about",exact:"true",component:B}),Object(n.jsx)(i.a,{path:"/service",exact:"true",component:A}),Object(n.jsx)(i.a,{path:"/contact",exact:"true",component:f})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))},D=new h.ApolloClient({uri:"http://localhost:3000/graphql",cache:new h.InMemoryCache});o.a.render(Object(n.jsx)(h.ApolloProvider,{client:D,children:Object(n.jsx)(C,{})}),document.getElementById("root")),N()}},[[95,1,2]]]);
//# sourceMappingURL=main.c3ccc998.chunk.js.map