_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{HfOp:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u})),n.d(t,"default",(function(){return g}));var i=n("nKUr"),r=n("vOnD"),o=n("g4pe"),c=n.n(o),s=n("f4ym"),l=n("sz6J"),a=n("oIFK"),f=Object(r.d)("h1").withConfig({displayName:"blog___StyledH",componentId:"gs9s1w-0"})(["text-align:center;"]),d=Object(r.d)("div").withConfig({displayName:"blog___StyledDiv",componentId:"gs9s1w-1"})(["flex-direction:column;display:flex;max-width:1200px;margin:0 auto;"]),u=!0;function g(e){var t=e.allPosts;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(c.a,{children:[Object(i.jsx)("title",{children:"Web Dev Blog - zzzachzzz"}),Object(i.jsx)("meta",{name:"description",content:"JavaScript, TypeScript, and React by example with code."})]}),Object(i.jsx)(l.a,{}),Object(i.jsx)(f,{children:"Recent Posts"}),Object(i.jsx)(d,{children:t.map((function(e,t){return Object(i.jsx)(_,{title:e.title,slug:e.slug,date:e.date},t)}))})]})}var p=Object(r.d)("div").withConfig({displayName:"blog___StyledDiv2",componentId:"gs9s1w-2"})(["display:flex;align-items:center;font-size:1.1em;"]),h=Object(r.d)("div").withConfig({displayName:"blog___StyledDiv3",componentId:"gs9s1w-3"})(["margin:0 1em;text-align:center;"]),b=Object(r.d)("div").withConfig({displayName:"blog___StyledDiv4",componentId:"gs9s1w-4"})(["margin-bottom:0.7em;"]),m=Object(r.d)("time").withConfig({displayName:"blog___StyledTime",componentId:"gs9s1w-5"})(["font-size:0.8em;"]),j=Object(r.d)("div").withConfig({displayName:"blog___StyledDiv5",componentId:"gs9s1w-6"})(["display:flex;align-items:center;font-size:1.1em;"]),_=function(e){var t=e.title,n=e.slug,r=e.date;return Object(i.jsxs)(w,{href:"/blog/".concat(n),children:[Object(i.jsxs)(p,{children:[Object(i.jsx)(x,{color:"prismRed"}),Object(i.jsx)(x,{color:"prismBlue"}),Object(i.jsx)(x,{color:"prismGreen"})]}),Object(i.jsxs)(h,{children:[Object(i.jsx)(b,{children:t}),Object(i.jsx)(m,{dateTime:r,children:Object(a.b)(r)})]}),Object(i.jsxs)(j,{children:[Object(i.jsx)(x,{color:"prismGreen",close:!0}),Object(i.jsx)(x,{color:"prismBlue",close:!0}),Object(i.jsx)(x,{color:"prismRed",close:!0})]})]})},v=Object(r.d)("span").withConfig({displayName:"blog___StyledSpan",componentId:"gs9s1w-7"})(["",""],(function(e){return e._css2})),x=function(e){var t=e.color,n=e.close,o=void 0!==n&&n,c=Object(r.c)(["color:",";"],(function(e){return e.theme[t]}));return Object(i.jsx)(v,{_css2:c,children:o?"}":"{"})},w=Object(r.d)(s.a).withConfig({displayName:"blog__BlogLink",componentId:"gs9s1w-8"})(["min-height:60px;background:#272822;border-radius:0.3em;margin:1.5em;padding:1.1em 0.7em;display:flex;flex-direction:row;justify-content:space-between;font-size:1.1em;color:white;&:hover{color:",";}"],(function(e){return e.theme.prismPurple}))},oIFK:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n("tpqs"),r=function(e){return e=(e=(e=(e=e.replace(/[^\w\s]/g,"")).trim()).replace(/\s+/g,"-")).toLowerCase()},o=(i.join(e.cwd(),"_posts"),function(e){if(!e)return"";var t=new Date(e);return"".concat(t.toLocaleString("default",{month:"long"})," ").concat(t.getDate(),", ").concat(t.getFullYear())})}).call(this,n("8oxB"))},sz6J:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("nKUr"),r=(n("q1tI"),n("vOnD")),o=n("f4ym"),c=Object(r.d)(o.a).withConfig({displayName:"Navigation___StyledLink",componentId:"sc-10fffhi-0"})(["margin:5px;"]),s=Object(r.d)(o.a).withConfig({displayName:"Navigation___StyledLink2",componentId:"sc-10fffhi-1"})(["margin:5px;"]),l=Object(r.d)(o.a).withConfig({displayName:"Navigation___StyledLink3",componentId:"sc-10fffhi-2"})(["margin:5px;"]);function a(e){var t=e.postSlug;return Object(i.jsxs)(f,{children:[Object(i.jsx)(c,{href:"/",children:"/"}),Object(i.jsx)(u,{}),Object(i.jsx)(s,{href:"/blog",children:"blog"}),t&&Object(i.jsx)(u,{}),t&&Object(i.jsx)(l,{href:"/blog/".concat(t),children:t})]})}var f=r.d.nav.withConfig({displayName:"Navigation__Nav",componentId:"sc-10fffhi-3"})(["display:flex;flex-direction:row;align-items:flex-start;font-size:1.2em;text-decoration:none;"]),d=Object(r.d)("span").withConfig({displayName:"Navigation___StyledSpan",componentId:"sc-10fffhi-4"})(["margin:5px;color:white;font-weight:500;line-height:1;"]),u=function(){return Object(i.jsx)(d,{children:">"})}},tpqs:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var c=o>=0?arguments[o]:e.cwd();if("string"!==typeof c)throw new TypeError("Arguments to path.resolve must be strings");c&&(t=c+"/"+t,r="/"===c.charAt(0))}return(r?"/":"")+(t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),c="/"===r(e,-1);return(e=n(i(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&c&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),o=i(n.split("/")),c=Math.min(r.length,o.length),s=c,l=0;l<c;l++)if(r[l]!==o[l]){s=l;break}var a=[];for(l=s;l<r.length;l++)a.push("..");return(a=a.concat(o.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!r){i=o;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,o=0,c=e.length-1;c>=0;--c){var s=e.charCodeAt(c);if(47!==s)-1===i&&(r=!1,i=c+1),46===s?-1===t?t=c:1!==o&&(o=1):-1!==t&&(o=-1);else if(!r){n=c+1;break}}return-1===t||-1===i||0===o||1===o&&t===i-1&&t===n+1?"":e.slice(t,i)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},uh6c:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("HfOp")}])}},[["uh6c",0,2,1,3,4]]]);