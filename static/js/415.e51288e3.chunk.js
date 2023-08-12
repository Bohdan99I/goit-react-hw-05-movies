"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{835:function(r,t,e){e.d(t,{Z:function(){return h}});var n,a,c=e(689),o=e(168),i=e(686),s=e(87),u=i.Z.ul(n||(n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n"]))),l=(0,i.Z)(s.rU)(a||(a=(0,o.Z)(["\n  font-size: 18px;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    font-size: 20px;\n    color: green;\n  }\n"]))),f=e(184);var h=function(r){var t=r.movies,e=(0,c.TH)();return(0,f.jsx)(u,{children:t.map((function(r){var t=r.id,n=r.title;return n&&(0,f.jsx)("li",{children:(0,f.jsx)(l,{to:"/movies/".concat(t),state:{from:e},children:n},t)},t)}))})}},415:function(r,t,e){e.r(t);var n=e(439),a=e(835),c=e(791),o=e(992),i=e(184);t.default=function(){var r=(0,c.useState)([]),t=(0,n.Z)(r,2),e=t[0],s=t[1],u=(0,c.useState)(!0),l=(0,n.Z)(u,2),f=l[0],h=l[1],p=(0,c.useState)(null),v=(0,n.Z)(p,2),d=v[0],m=v[1];return(0,c.useEffect)((function(){(0,o.wr)().then((function(r){s(r),h(!1)})).catch((function(r){m(r),h(!1)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Trending today"}),f?(0,i.jsx)("div",{children:"Please wait..."}):d?(0,i.jsxs)("div",{children:["Error loading data: ",d.message]}):(0,i.jsx)(a.Z,{movies:e})]})}},992:function(r,t,e){e.d(t,{WK:function(){return u},Y5:function(){return l},nA:function(){return f},wr:function(){return s}});var n=e(861),a=e(687),c=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=o.Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZhZWIwMTA3MjQ3MzkyMGUyNzU3MzdhZmE3MDQwMCIsInN1YiI6IjY0ZDI2MmFiYzNiZmZlMGYwMjg2N2NkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak4ysbLjBJTalYzsYWQkuamX-ttKVaPC86KyFzbLchk"}}),s=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/trending/all/day");case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),u=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/search/movie",{params:{query:t}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies by query:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(t));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t,e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(t,"/").concat(e));case 3:return n=r.sent,r.abrupt("return",n.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching additional movie data:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t,e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.e51288e3.chunk.js.map