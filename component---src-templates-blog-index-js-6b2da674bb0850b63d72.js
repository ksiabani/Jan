(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);n(147),n(146),n(73),n(32);var a=n(171),i=n(0),o=n.n(i),r=n(150),s=function(e){var t=e.data,n=t.heading,a=t.description,i=e.elemId;return o.a.createElement("section",{className:"generic-banner relative",id:i},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row height align-items-center justify-content-center"},o.a.createElement("div",{className:"col-lg-10"},o.a.createElement("div",{className:"generic-banner-content"},o.a.createElement("h2",{className:"text-white"},n),o.a.createElement("p",{className:"text-white"},a))))))},l=n(145),c=(n(172),function(e){var t=e.heading,n=e.html,a=e.slug;return o.a.createElement("div",{className:"excerpt"},o.a.createElement(l.Link,{to:a},o.a.createElement("h3",{className:"excerpt__heading"},t)),o.a.createElement("div",{className:"excerpt__content",dangerouslySetInnerHTML:{__html:n.substring(0,240)+"..."}}))}),d=function(e){var t=e.excerpts,n=e.elemId;return o.a.createElement("section",{className:"excerpts",id:n},o.a.createElement("div",{className:"container"},t.map(function(e,t){var n=e.heading,a=e.html,i=e.slug;return o.a.createElement(c,{heading:n,html:a,slug:i,key:t})})))},h="719188845";t.default=function(e){var t=e.pageContext;return o.a.createElement(l.StaticQuery,{query:h,render:function(e){var n=e.allPagesJson.edges.filter(function(e){return"blogPost"===e.node.template}).map(function(e){return Object.assign({},e.node.components.find(function(e){return"editor"===e.name}).data,{slug:e.node.slug})}),a=e.allPagesJson.edges.find(function(e){return e.node.id===t.id}).node.components.sort(function(e,t){return e.position-t.position});return o.a.createElement(r.a,null,a.map(function(e,t){switch(e.name.toLowerCase()){case"hero":return o.a.createElement(s,{data:e.data,elemId:e.title.toLowerCase(),key:t});case"excerpts":return o.a.createElement(d,{excerpts:n,elemId:e.title.toLowerCase(),key:t});default:return""}}))},data:a})}},146:function(e,t,n){var a=n(25).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},147:function(e,t,n){"use strict";var a=n(11),i=n(26),o=n(27),r=n(24),s=[].sort,l=[1,2,3];a(a.P+a.F*(r(function(){l.sort(void 0)})||!r(function(){l.sort(null)})||!n(148)(s)),"Array",{sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),i(e))}})},148:function(e,t,n){"use strict";var a=n(24);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},171:function(e){e.exports={data:{allPagesJson:{edges:[{node:{id:"a2h45d7e9e",template:"generic",slug:"/generic/",components:[{name:"editor",title:"Text Editor",position:2,data:{heading:"We offer the best services",description:"Who are in extremely love with eco friendly system",html:"<p>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. </p><p><br></p><blockquote>Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. </blockquote><p><br></p><p>A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.</p>"}}]}},{node:{id:"g5shhgl021",template:"blogIndex",slug:"/blog/",components:[{name:"hero",title:"Hero",position:1,data:{heading:"Our blog",description:"This is our blog page. You can find the latest news here.",html:null}},{name:"excerpts",title:"Excerpts",position:2,data:null}]}},{node:{id:"32d23we2e2",template:"blogPost",slug:"/blog/health-effects-of-friendship/",components:[{name:"editor",title:"Text Editor",position:2,data:{heading:"We offer the best services",description:"How does friendship play a role in your health?",html:"<p>Conventional wisdom suggests that good friendships enhance an individual’s sense of happiness and overall well-being. Indeed, a number of studies have found that strong social supports improve a woman’s prospects for good health and longevity. Conversely, loneliness and a lack of social supports have been linked to an increased risk of heart disease, viral infections, and cancer, as well as higher mortality rates overall. </p><p><br></p><p>Two researchers have even termed friendship networks a “behavioral vaccine” that boosts both physical and mental health. Man While there is an impressive body of research linking friendship and health, the precise reasons for the connection remain unclear. Most of the studies in this area are large prospective studies that follow people over a period of time, and while there may be a correlation between the two variables (friendship and health status), researchers still do not know if there is a cause and effect relationship, such as the notion that good friendships actually improve health.</p>"}}]}},{node:{id:"at3B9E95H3",template:"index",slug:"/",components:[{name:"banner",title:"Banner",position:1,data:{heading:"Hello there!",description:"Some vague description for my gorgeous banner!",html:null}},{name:"grid",title:"Services",position:2,data:{heading:"Our services",description:"this is some description for my banner!",html:null}}]}}]}}}},172:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-6b2da674bb0850b63d72.js.map