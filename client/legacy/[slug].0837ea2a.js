import{w as t,_ as n,a as e,b as r,c as s,i as a,d as c,S as o,s as u,e as i,f,t as l,q as h,g as p,h as v,j as m,k as d,l as y,m as x,n as b,o as g,u as w,r as R,p as j}from"./client.790bc418.js";function k(t,n,e,r,s,a,c){try{var o=t[a](c),u=o.value}catch(t){return void e(t)}o.done?n(u):Promise.resolve(u).then(r,s)}function D(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function c(t){k(a,r,s,c,o,"next",t)}function o(t){k(a,r,s,c,o,"throw",t)}c(void 0)}))}}function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return r(this,s)}}function H(t){var n,e,r,s,a,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),r=f("h1"),s=l(o),a=i(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(p),e=v(t),r=m(t,"H1",{});var n=d(r);s=y(n,o),n.forEach(p),a=v(t),c=m(t,"DIV",{class:!0}),d(c).forEach(p),this.h()},h:function(){x(c,"class","content svelte-emm3f3")},m:function(t,n){b(t,e,n),b(t,r,n),g(r,s),b(t,a,n),b(t,c,n),c.innerHTML=u},p:function(t,e){var r=w(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&R(s,o),1&r&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:j,o:j,d:function(t){t&&p(e),t&&p(r),t&&p(a),t&&p(c)}}}function P(t){return L.apply(this,arguments)}function L(){return(L=D(t.mark((function n(e){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function M(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var S=function(t){n(r,o);var e=E(r);function r(t){var n;return s(this,r),n=e.call(this),a(c(n),t,M,H,u,{post:0}),n}return r}();export default S;export{P as preload};
