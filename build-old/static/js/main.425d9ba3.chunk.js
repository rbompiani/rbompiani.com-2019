(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),l=(a(28),a(1)),s=a(2),o=a(5),m=a(3),d=a(14),u=a(6),p=(a(29),a(30),function(e){var t,a=e.skill;return console.log(a),t="threed"===a?"3":a.charAt(0),r.a.createElement("div",{className:"skill ".concat(a)},t)}),h=(a(31),a(4)),E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.b,{to:"/projects/"+this.props.id},r.a.createElement("article",{className:"card ".concat(this.props.major_skill)},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat("","images/projects/").concat(this.props.img[0],")")}}),r.a.createElement("div",{className:"snapshot ".concat(this.props.major_skill)},r.a.createElement("div",{className:"projHeadline"},r.a.createElement("h2",{className:"light"},this.props.title),r.a.createElement("div",{className:"skillBlock"},this.props.skills.map(function(e,t){return r.a.createElement(p,{skill:e,key:t})}))),r.a.createElement("p",{className:"light"},this.props.short_desc),r.a.createElement("p",{className:"light bold right"},"More ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"})," "))))}}]),t}(r.a.Component),f={projects:[{id:1,title:"Julia's Child",short_desc:"Search, save, and collect recipes. Just like Grandma used to do, but online.",long_desc:"Version 1.0 of this online recipe box allows users to search the Edamame API to find new and exciting recipes to add to their digital recipe collection, or add their own. Version 2.0 will include a weekly meal planner, and the ability to create a grocery list from each week's meal plan",year:2019,img:["recipe1.jpg","recipe2.jpg","recipe3.jpg"],github:"https://github.com/rbompiani/Project2",demo:"https://frozen-plateau-58578.herokuapp.com/index",wireframe:"https://xd.adobe.com/view/9b0cb70d-5cb6-45c9-4e9d-541deefa97d6-ed3d/",major_skill:"node",skills:["javascript","mysql","node"]},{id:2,title:"Cupboard Companion",short_desc:"Monitor and manage your inventory with sensors that log data in real time",long_desc:"With the help of Arduino and the Johnny5 Library, Users can track inventory by weight in real time. Each inventory item has an email reminder to reorder when the stock reaches a designated threshold.  Reorder inventory by clicking on the gauge's associated reorder link",year:2019,img:["cupboard1.jpg","cupboard2.jpg","cupboard3.jpg"],github:"https://github.com/rbompiani/CupboardCompanion",wireframe:"https://xd.adobe.com/view/f5930a4a-704d-4486-6a21-42cda84acba3-83a2/",major_skill:"react",skills:["react","node","mysql"]},{id:3,title:"Dynamic 3D",short_desc:"Shop for car accessories dynamically in 3d, from the comfort of your own home",long_desc:"Levarage webGL and javascript to build dynamic 3d models. Accessories turn on and off in real time, and the camera automatically adjusts to view those accessories. A running sidebar of options and pricing keeps you up to date as you add and remove parts ",year:2014,img:["auto1.jpg","auto2.jpg"],demo:"http://rbompiani.com/projects/chrysler/index.html",major_skill:"javascript",skills:["javascript","threed"]},{id:4,title:"Interactive Campus",short_desc:"An interactive map-based interface that would allow planners, registrars, and department members alike to view their campus data more succinctly",long_desc:"In 2011 Oregon State University was struggling to provide facilities for an explosive increase in student enrollment. By aggregating existing data into interactive and visual formats, we were able to provide recommendations for efficient expansion of the campus.",year:2011,img:["campus1.jpg","campus2.jpg","campus3.jpg"],demo:"http://rbompiani.com/projects/testing.html",major_skill:"javascript",skills:["javascript","mysql"]}]},g=(a(37),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=f,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"projectGrid"},this.state.projects.map(function(e,t){return r.a.createElement(E,{major_skill:e.major_skill,img:e.img,title:e.title,short_desc:e.short_desc,skills:e.skills,id:e.id,key:t})}))}}]),t}(r.a.Component)),v=(a(38),function(e){return r.a.createElement("div",{className:"slide"},r.a.createElement("img",{src:"/images/projects/"+e.img,style:{width:"100%"}}))}),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=f.projects.find(function(t){return t.id==e.props.match.params.id});this.setState(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"slideshow-container"},this.state.img.map(function(e){return r.a.createElement(v,{img:e})}))}}]),t}(r.a.Component),k=(a(39),function(){return r.a.createElement("div",{id:"resumeContainer"},r.a.createElement("h2",null,"RESUME"),r.a.createElement("div",{class:"resumeCategory"},"experience"),r.a.createElement("div",{class:"resumeEntry"},r.a.createElement("div",{class:"resumeEntryHeading"},"Minarik Architecture - Portland, OR"),r.a.createElement("div",{class:"resumeEntryPosition"},"Associate"),r.a.createElement("p",null,"Developed designs for a wide range of commercial, institutional, and residential clients. Responsible for modeling and visualizing designs for both iterative design and final presentations. Managed Consultants throughout the design and construction process.")),r.a.createElement("div",{class:"resumeDate"},"2013 - present"),r.a.createElement("div",{class:"resumeEntry"},r.a.createElement("div",{class:"resumeEntryHeading"},"Portland State University, School of Architecture - Portland, OR"),r.a.createElement("div",{class:"resumeEntryPosition"},"Adjunct Professor"),r.a.createElement("p",null,"Developed and taught emerging digital curriculum related to digital fabrication, parametric design, and storytelling via 3D modeling and visualization.")),r.a.createElement("div",{class:"resumeDate"},"2014 - 2017"),r.a.createElement("div",{class:"resumeEntry"},r.a.createElement("div",{class:"resumeEntryHeading"},"SRG Partnership - Portland, OR"),r.a.createElement("div",{class:"resumeEntryPosition"},"Associate"),r.a.createElement("p",null,"Assessed and master planned various University campuses.  Investigated digital information management, and developed custom interactive building mapping programs to help universities better understand their built environment.")),r.a.createElement("div",{class:"resumeDate"},"2014 - 2017"),r.a.createElement("div",{class:"resumeEntry"},r.a.createElement("div",{class:"resumeEntryHeading"},"Ankrom Moisan Associated Architects - Portland, OR"),r.a.createElement("div",{class:"resumeEntryPosition"},"Designer"),r.a.createElement("p",null,"Programmed and conceptualized early designs for large-scale commercial developments. Diagrammed and documented design concepts for client and consumer presentations.")),r.a.createElement("div",{class:"resumeDate"},"2014 - 2017"),r.a.createElement("div",{class:"resumeCategory"},"education"),r.a.createElement("div",{class:"resumeEntry"},r.a.createElement("div",{class:"resumeEntryHeading"},"University of Oregon - Portland, OR"),r.a.createElement("div",{class:"resumeEntryPosition"},"Full Stack Bootcamp"),r.a.createElement("p",null,"A six month, intensive full stack curriculum focused around the MERN stack.")),r.a.createElement("div",{class:"resumeDate"},"2019"),r.a.createElement("div",{class:"resumeEntry"},r.a.createElement("div",{class:"resumeEntryHeading"},"Virginia Tech - Blacksburg, VA"),r.a.createElement("div",{class:"resumeEntryPosition"},"Bachelor of Architecture"),r.a.createElement("p",null,"A five year professional degree focused on complex problem solving and reasoning, design cohesion, and graphic representation")),r.a.createElement("div",{class:"resumeDate"},"2007"),r.a.createElement("div",{class:"resumeCategory"},"knowledge"),r.a.createElement("div",{class:"resumeSubgrid"},r.a.createElement("div",null,"React"),r.a.createElement("div",null,"Node"),r.a.createElement("div",null,"Javascript"),r.a.createElement("div",null,"Git"),r.a.createElement("div",null,"HTML5"),r.a.createElement("div",null,"CSS3"),r.a.createElement("div",null,"jQuery"),r.a.createElement("div",null,"Adobe Suite"),r.a.createElement("div",null,"Unity3D"),r.a.createElement("div",null,"Digital Fabrication"),r.a.createElement("div",null,"3D Modeling")))});var y=function(){return r.a.createElement("section",null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"An architect turned full stack developer, I\u2019m as passionate about user experience as I am about clean and responsive code. I'm dedicated to creating engaging and intuitive interactions that promote early adoption and repeat usage."),r.a.createElement(h.b,{to:"/resume"},r.a.createElement("p",{className:"bold right"},"Resume ",r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"}))))};a(40),a(41);var j=function(){return r.a.createElement("span",{className:"galleryIcon"},r.a.createElement(h.b,{to:"/"},r.a.createElement("p",{className:"projectLinksText"},"Gallery "),r.a.createElement("i",{className:"fas fa-undo-alt"})))},w=a(11);var O=function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/bompiani/",target:"new"},r.a.createElement("img",{src:"/images/linkedin.svg",className:"social"})),r.a.createElement("a",{href:"https://www.instagram.com/bompiani/",target:"new"},r.a.createElement("img",{src:"/images/instagram.svg",className:"social"})),r.a.createElement("a",{href:"https://github.com/rbompiani",target:"new"},r.a.createElement("img",{src:"/images/github.svg",className:"social"})),r.a.createElement("a",{href:"mailto:info@rbompiani.com"},r.a.createElement("img",{src:"/images/email.svg",className:"social"})),r.a.createElement(w.a,{path:"/projects",component:j}))},N=(a(42),a(43),function(e){for(var t,a=e.skill,n=e.proficiency,i=(e.checked,[]),c=0;c<10;c++)c<n?i.push("full"):i.push("empty");return t="threeD"===a?"3D":a,r.a.createElement("div",null,r.a.createElement("h3",{className:"proficiency"},t),r.a.createElement("div",{className:"proficiencyMeter"},i.map(function(e){return"full"===e?r.a.createElement("span",{className:"bar ".concat(e," ").concat(a.toLowerCase())}):r.a.createElement("span",{className:"bar ".concat(e)})})))}),C={proficiencies:[{skill:"JavaScript",proficiency:8,checked:"checked"},{skill:"MySQL",proficiency:6,checked:"checked"},{skill:"Node",proficiency:5,checked:"checked"},{skill:"React",proficiency:4,checked:"checked"},{skill:"threeD",proficiency:9,checked:"checked"}]},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=C,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Skills"),r.a.createElement("div",null,this.state.proficiencies.map(function(e,t){return r.a.createElement(N,{skill:e.skill,proficiency:e.proficiency,key:t})})))}}]),t}(r.a.Component),A=(a(44),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mobileWrapper"},r.a.createElement(y,null),r.a.createElement(D,null),r.a.createElement(O,null))}}]),t}(r.a.Component)),P=(a(45),function(e){var t,a=e.skill;return t="threed"===a?"3D":a,r.a.createElement("div",{className:"skillName ".concat(a)},t)}),x=(a(46),function(e){return r.a.createElement("a",{href:e.link,target:"new"},r.a.createElement("img",{className:"projectLinks",src:""+"/images/".concat(e.type,".svg")}),r.a.createElement("p",{className:"projectLinksText"},e.type," "),r.a.createElement("i",{className:"fas fa-long-arrow-alt-right"}))}),_=(a(47),a(48),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=f.projects.find(function(t){return t.id==e.props.match.params.id});this.setState(t)}},{key:"render",value:function(){var e,t,a;return this.state.demo&&(t=r.a.createElement(x,{type:"demo",link:this.state.demo})),this.state.github&&(e=r.a.createElement(x,{type:"github",link:this.state.github})),this.state.wireframe&&(a=r.a.createElement(x,{type:"wireframe",link:this.state.wireframe})),r.a.createElement("section",null,r.a.createElement("h2",null,this.state.title),r.a.createElement("p",null,this.state.long_desc),r.a.createElement("h2",null,"Project Links"),r.a.createElement("div",{className:"projectLinksContainer"},t,e,a),r.a.createElement("h2",null,"Skills Used"),r.a.createElement("div",{className:"skillsUsed"},this.state.skills.map(function(e,t){return r.a.createElement(P,{skill:e,key:t})})))}}]),t}(r.a.Component)),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return this.props.isDesktop||(e=r.a.createElement("div",{className:"mobileWrapper"},r.a.createElement(w.a,{path:"/projects/:id",exact:!0,component:_}))),r.a.createElement("main",null,r.a.createElement(w.a,{path:"/",exact:!0,component:g}),e,r.a.createElement(w.a,{path:"/projects/:id",exact:!0,component:b}),r.a.createElement(w.a,{path:"/resume",exact:!0,component:k}),r.a.createElement(w.a,{path:"/about",exact:!0,component:A}))}}]),t}(r.a.Component),H=(a(49),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("h1",null,"Rebecca Bompiani")),r.a.createElement(w.a,{path:["/","/resume"],exact:!0,component:y}),r.a.createElement(w.a,{path:["/","/resume"],exact:!0,component:D}),r.a.createElement(w.a,{path:"/projects/:id",component:_}),r.a.createElement(O,null))}}]),t}(r.a.Component)),R=(a(50),a(51),function(e){return r.a.createElement("button",{className:"drawer-button",onClick:e.click},r.a.createElement("div",{className:"drawer-button_line"}),r.a.createElement("div",{className:"drawer-button_line"}),r.a.createElement("div",{className:"drawer-button_line"}))}),M=function(e){return r.a.createElement("header",null,r.a.createElement(h.b,{to:"/"},r.a.createElement("h1",null,"Rebecca Bompiani")),r.a.createElement("nav",null,r.a.createElement(R,{click:e.drawerClickHandler})))},L=(a(52),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),B=(a(53),function(e){return r.a.createElement("ul",{className:"slide-drawer",onClick:e.drawerClickHandler},r.a.createElement(h.b,{to:"/"},r.a.createElement("li",null,"Projects")),r.a.createElement(h.b,{to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(h.b,{to:"/resume"},r.a.createElement("li",null,"Resume")))}),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).drawerButtonClickHandler=function(){a.setState(function(e){return{slideDrawerOpen:!e.slideDrawerOpen}})},a.backdropClickHandler=function(){a.setState({slideDrawerOpen:!1})},a.state={isDesktop:!1,slideDrawerOpen:!1},a.updatePredicate=a.updatePredicate.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>767})}},{key:"render",value:function(){var e,t;return this.state.slideDrawerOpen&&(e=r.a.createElement(B,{drawerClickHandler:this.drawerButtonClickHandler}),t=r.a.createElement(L,{click:this.backdropClickHandler})),r.a.createElement(h.a,null,this.state.isDesktop?r.a.createElement(H,null):r.a.createElement(M,{drawerClickHandler:this.drawerButtonClickHandler}),r.a.createElement(S,{isDesktop:this.state.isDesktop}),e,t)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[23,1,2]]]);
//# sourceMappingURL=main.425d9ba3.chunk.js.map