(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),o=(a(13),a(14),a(1)),l=a(2),s=a(4),m=a(3),u=a(5),h=(a(15),function(e){var t=e.skill,a=t.charAt(0);return c.a.createElement("div",{className:"skill ".concat(t)},a)}),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("article",{className:"card ".concat(this.props.major_skill)},c.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat("/portfolio2","images/").concat(this.props.img,")")}}),c.a.createElement("div",{className:"snapshot"},c.a.createElement("h2",{className:"light"},this.props.title),c.a.createElement("p",{className:"light"},this.props.short_desc),c.a.createElement("a",{className:"light",href:"#"},"More")),c.a.createElement("div",{className:"skillBlock"},this.props.skills.map(function(e,t){return c.a.createElement(h,{skill:e,key:t})})))}}]),t}(c.a.Component),d={projects:[{id:1,title:"Project 1",short_desc:"This is a short description of how the project functions",long_desc:"This is a much longer description of the project, lessons learned, and future steps",year:2019,img:"flower.jpg",github:"www.github.com",demo:"www.rbompiani.com",major_skill:"javascript",skills:["javascript","react","threed"]},{id:2,title:"Project 2",short_desc:"This is a short description of how the project functions",long_desc:"This is a much longer description of the project, lessons learned, and future steps",year:2019,img:"flower.jpg",github:"www.github.com",demo:"www.rbompiani.com",major_skill:"react",skills:["react","node","mysql"]},{id:3,title:"Project 3",short_desc:"what's the big deal",long_desc:"This is a much longer description of the project, lessons learned, and future steps",year:2019,img:"rabbit.jpg",github:"www.github.com",demo:"www.rbompiani.com",major_skill:"node",skills:["node","javascript"]},{id:2,title:"Project 2",short_desc:"This is a short description of how the project functions",long_desc:"This is a much longer description of the project, lessons learned, and future steps",year:2019,img:"flower.jpg",github:"www.github.com",demo:"www.rbompiani.com",major_skill:"react",skills:["react","node","mysql"]},{id:2,title:"Project 2",short_desc:"This is a short description of how the project functions",long_desc:"This is a much longer description of the project, lessons learned, and future steps",year:2019,img:"flower.jpg",github:"www.github.com",demo:"www.rbompiani.com",major_skill:"react",skills:["react","node","mysql"]}]},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state=d,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("main",null,this.state.projects.map(function(e,t){return c.a.createElement(p,{major_skill:e.major_skill,img:e.img,title:e.title,short_desc:e.short_desc,skills:e.skills,key:t})}))}}]),t}(c.a.Component);var w=function(){return c.a.createElement("section",null,c.a.createElement("h2",null,"About"),c.a.createElement("p",null,"This is my about text. Include my previous experience, and how it relates to programming. Also talk about my passions, intrests, and abilities."),c.a.createElement("a",null,"Resume",c.a.createElement("img",{src:"#"})))},k=(a(16),function(e){for(var t=e.skill,a=e.proficiency,n=e.checked,r=[],i=0;i<10;i++)i<a?r.push("full"):r.push("empty");return console.log(r),c.a.createElement("div",null,c.a.createElement("h3",null,t),r.map(function(e){return"full"===e?c.a.createElement("span",{className:"bar ".concat(e," ").concat(t.toLowerCase())}):c.a.createElement("span",{className:"bar ".concat(e)})}),c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",checked:n}),c.a.createElement("span",{className:"".concat(t.toLowerCase()," slider round")})))}),g={proficiencies:[{skill:"JavaScript",proficiency:8,checked:"checked"},{skill:"MySQL",proficiency:6,checked:"checked"},{skill:"Node",proficiency:5,checked:"checked"},{skill:"React",proficiency:4,checked:"checked"},{skill:"threeD",proficiency:9,checked:"checked"}]},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state=g,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Skills"),c.a.createElement("div",null,this.state.proficiencies.map(function(e,t){return c.a.createElement(k,{skill:e.skill,proficiency:e.proficiency,key:t})})))}}]),t}(c.a.Component);var b=function(){return c.a.createElement("aside",null,c.a.createElement("header",null,c.a.createElement("h1",null,"Rebecca Bompiani")),c.a.createElement(w,null),c.a.createElement(j,null))};var E=function(){return c.a.createElement("div",{id:"content"},c.a.createElement(b,null),c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.c26f2423.chunk.js.map