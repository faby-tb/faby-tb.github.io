(this["webpackJsonpproyecto-music-streaming"]=this["webpackJsonpproyecto-music-streaming"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/The Weeknd - False Alarm (Audio).aff5432b.mp3"},23:function(e,a,t){e.exports=t.p+"static/media/the-weeknd-blinding-lights.7038a845.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/the-weeknd.a7ed7802.jpg"},25:function(e,a,t){e.exports=t(36)},3:function(e,a,t){e.exports=t.p+"static/media/placeholder_600x400.439750f9.svg"},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),o=(t(30),t(9)),s=t(20),i=t(11),m=t(10),d=t(7),u=t(1),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).componentDidMount=function(){var e=localStorage.getItem("darkMode"),a=document.querySelector("#dark-mode-toggle"),t=function(){document.querySelector(".main").dataset.mode="darkmode",document.querySelector("#dark-mode-toggle").innerHTML='<p><i class="fas fa-moon"></i> Darkmode</p>',localStorage.setItem("darkMode","enabled")},n=function(){document.querySelector(".main").dataset.mode="",document.querySelector("#dark-mode-toggle").innerHTML='<p><i class="fas fa-sun"></i> Lightmode</p>',localStorage.setItem("darkMode",null)};"enabled"===e?t():n(),a.addEventListener("click",(function(){"enabled"!==(e=localStorage.getItem("darkMode"))?t():n()}))},e.render=function(){return l.a.createElement("ul",{className:"nav position-fixed flex-column text-white col-sm-1 col-md-0 p-0"},l.a.createElement(d.b,{to:"./../",className:"text-decoration-none"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement("h4",{className:"logo text-center py-2 rounded-pill titulos"},l.a.createElement("i",{className:"fas fa-music"}),"RMB"))),l.a.createElement("li",{className:"list-group-item p-0"},l.a.createElement("h6",{className:"pl-2 pt-2"},"Browse menu"),l.a.createElement(d.b,{className:"nav-link text-decoration-none",to:"./../"},l.a.createElement("i",{className:"fas fa-home"})," Home")),l.a.createElement("li",{className:"list-group-item p-0"},l.a.createElement("a",{className:"nav-link text-decoration-none disabled",href:"."},l.a.createElement("i",{className:"fas fa-chart-line"})," Top Trending"),l.a.createElement("a",{className:"nav-link text-decoration-none disabled",href:"."},l.a.createElement("i",{className:"fas fa-list-ul"})," Playlist"),l.a.createElement("a",{className:"nav-link text-decoration-none disabled",href:"."},l.a.createElement("i",{className:"fas fa-wave-square"})," Radio")),l.a.createElement("li",{className:"list-group-item p-0"},l.a.createElement("button",{id:"dark-mode-toggle",className:"btn nav-link dark-mode-toggle "},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-moon"})," Darkmode"))))},e}return t}(l.a.Component),E=t(22),g=t.n(E),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).handlePlay=function(e){document.getElementById("progress").addEventListener("click",(function(e){var a=(e.pageX-this.offsetLeft)/this.offsetWidth*document.getElementById("player").duration;document.getElementById("player").currentTime=a})),document.getElementById("player").addEventListener("timeupdate",(function(){document.getElementById("bar").style.width=parseInt(document.getElementById("player").currentTime/document.getElementById("player").duration*100,10)+"%"})),!0===document.getElementById("player").paused?(document.getElementById("player").play(),document.getElementById("playButton").innerHTML="<i class='fas fa-pause'></i>",document.getElementById("audioPlayerSong").innerHTML=" False Alarm - The Weeknd "):(document.getElementById("player").pause(),document.getElementById("playButton").innerHTML="<i class='fas fa-play'></i>")},e.handleVolumeUp=function(e){document.getElementById("player").volume<1&&(document.getElementById("player").volume+=.1)},e.handleVolumeDown=function(e){document.getElementById("player").volume>.1&&(document.getElementById("player").volume-=.1)},e.handlePreviousSong=function(e){},e.handleNextSong=function(e){},e.render=function(){return l.a.createElement("div",{className:"audioPlayer container text-white col-12  text-center row mx-0 px-0"},l.a.createElement("audio",{id:"player"},l.a.createElement("source",{src:g.a,autoPlay:!0}),"Your browser does not support the audio element."),l.a.createElement("div",{className:"col-1 my-auto row justify-content-center controls"},l.a.createElement("button",{className:"btn playerButton",id:"previousButton",onClick:e.handlePreviousSong},l.a.createElement("i",{className:"fas fa-backward"})),l.a.createElement("button",{className:"btn playerButton",id:"playButton",onClick:e.handlePlay},l.a.createElement("i",{className:"fas fa-play"})),l.a.createElement("button",{className:"btn playerButton",id:"nextButton",onClick:e.handleNextSong},l.a.createElement("i",{className:"fas fa-forward"}))),l.a.createElement("div",{id:"progress",className:"col-8"},l.a.createElement("div",{id:"bg-bar"}),l.a.createElement("div",{id:"bar"})),l.a.createElement("h6",{id:"audioPlayerSong",className:"col-2 my-auto"}," "),l.a.createElement("div",{className:"col-1 my-auto volume-controls"},l.a.createElement("button",{className:"btn playerButton",onClick:e.handleVolumeDown},l.a.createElement("i",{className:"fas fa-volume-down"})),l.a.createElement("button",{className:"btn playerButton",onClick:e.handleVolumeUp},l.a.createElement("i",{className:"fas fa-volume-up"}))))},e}return t}(l.a.Component),f=t(23),y=t.n(f),b=function(e){var a=Object(u.f)().id,t=e.component[a],n={background:'url("'+y.a+'")',backgroundSize:"cover",backgroundPosition:"center"};return l.a.createElement("div",{className:"artist col-11 mb-5 pb-5 px-0"},l.a.createElement("div",{className:"artistCover d-flex flex-column align-items-end justify-content-end",style:n},l.a.createElement("h1",{className:"text-capitalize display-1 px-5 titulos"},t.nombre),l.a.createElement("p",{className:"px-5 genero"},t.genero),l.a.createElement("div",{className:"gradient container-fluid py-4"})),l.a.createElement("div",{className:"container-fluid artistContentHeader"},l.a.createElement("h4",{className:"pt-4 titulos"},"Informacion General")),l.a.createElement("div",{className:"container artistContent"},t.bio))},N=t(13),v=t(3),x=t.n(v),k=function(){var e=[l.a.createElement("div",{className:"card mb-3 mx-4"},l.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body position-relative"},l.a.createElement("h5",{className:"card-title"},"Card title"),l.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))),l.a.createElement("div",{className:"card mb-3 mx-4"},l.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body position-relative"},l.a.createElement("h5",{className:"card-title"},"Card title"),l.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))),l.a.createElement("div",{className:"card mb-3 mx-4"},l.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body position-relative"},l.a.createElement("h5",{className:"card-title"},"Card title"),l.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))),l.a.createElement("div",{className:"card mb-3 mx-4"},l.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body position-relative"},l.a.createElement("h5",{className:"card-title"},"Card title"),l.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago")))),l.a.createElement("div",{className:"card mb-3 mx-4"},l.a.createElement("img",{src:x.a,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body position-relative"},l.a.createElement("h5",{className:"card-title"},"Card title"),l.a.createElement("p",{className:"card-text"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-muted"},"Last updated 3 mins ago"))))],a=Object(n.useState)(0),t=Object(N.a)(a,2),r=t[0],c=t[1],o={transform:"translateX("+r+"%)"};return l.a.createElement("div",{className:"slider"},e.map((function(e,a){return l.a.createElement("div",{key:a,className:"slide",style:o},e)})),l.a.createElement("button",{id:"goLeft",onClick:function(){c(0===r?-101*(e.length-3):r+101)}},l.a.createElement("div",{className:"slider-arrow"},l.a.createElement("i",{className:"fas fa-chevron-left"}))),l.a.createElement("button",{id:"goRight",onClick:function(){r===-101*(e.length-3)?c(0):c(r-101)}},l.a.createElement("div",{className:"slider-arrow"},l.a.createElement("i",{className:"fas fa-chevron-right"}))))},w=function(e){var a=e.src;return l.a.createElement("img",{src:a,alt:"slide-img",style:{width:"100%",height:"auto"}})},B=function(){var e=[l.a.createElement(w,{src:x.a}),l.a.createElement(w,{src:x.a}),l.a.createElement(w,{src:x.a}),l.a.createElement(w,{src:x.a}),l.a.createElement(w,{src:x.a}),l.a.createElement(w,{src:x.a}),l.a.createElement(w,{src:x.a})],a=Object(n.useState)(0),t=Object(N.a)(a,2),r=t[0],c=t[1],o={transform:"translateX("+r+"%)"};return l.a.createElement("div",{className:"header-container mb-3"},e.map((function(e,a){return l.a.createElement("div",{key:a,className:"header",style:o},e)})),l.a.createElement("button",{id:"goLeftHeader",onClick:function(){c(0===r?-100*(e.length-3):r+100)}},l.a.createElement("i",{className:"fas fa-chevron-left"})),l.a.createElement("button",{id:"goRightHeader",onClick:function(){r===-100*(e.length-3)?c(0):c(r-100)}},l.a.createElement("i",{className:"fas fa-chevron-right"})))},T=t(24),C=t.n(T),I=function(e){var a=e.props.props;return console.log(a),l.a.createElement("div",{className:"content col-xl-11 mb-5 pb-5 px-0"},l.a.createElement(B,null),l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"Fluid jumbotron"),l.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))),l.a.createElement("div",{className:"row container-fluid justify-content-center"},a.length>0?a.map((function(e){return l.a.createElement("div",{key:e.id,className:"card mb-3 col-3 mx-4 pt-2 rounded-lg"},l.a.createElement(d.b,{to:{pathname:"/artista/"+e.id}},l.a.createElement("img",{src:C.a,className:"card-img-top rounded-0 clickable",alt:"TheWeeknd"})),l.a.createElement("div",{className:"card-body position-relative"},l.a.createElement(d.b,{to:"/artista/"+e.id,className:"text-decoration-none stretched-link"},l.a.createElement("h4",{className:"card-title text-center clickable text-capitalize titulos"},e.nombre)),l.a.createElement("p",{className:"card-text"},e.descripcion)))})):l.a.createElement("li",{className:"list-group-item border-0"}," No hay artistas")),l.a.createElement(k,null),l.a.createElement("h3",{className:"text-center"},"Example Video"),l.a.createElement("div",{className:"container embed-responsive embed-responsive-16by9"},l.a.createElement("iframe",{title:"ExampleVideo",className:"embed-responsive-item",src:"https://www.youtube.com/embed/CW5oGRx9CLM"})))},j=function(e){return l.a.createElement(I,{props:e})},S=function(){return l.a.createElement("div",{className:"col-11 mt-3 mb-5 pb-5 not-found d-flex flex-column align-items-center justify-content-center"},l.a.createElement("h1",{className:"p-2 titulos"},l.a.createElement("i",{className:"fas fa-times-circle highlight"}),"  NotFound"),l.a.createElement("h3",{className:"p-2 titulos"},"Volver al ",l.a.createElement(d.b,{to:"./../",className:"text-decoration-none highlight"},"Home")))},M=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={artistas:[{nombre:"the weeknd",id:"0",genero:"R&B Alternativo",descripcion:"Con algunos de sus \xe9xitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.\u200b",bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."},{nombre:"the weeknd2",id:"1",genero:"R&B Alternativo",descripcion:"Con algunos de sus \xe9xitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.\u200b",bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."},{nombre:"the weeknd3",id:"2",genero:"R&B Alternativo",descripcion:"Con algunos de sus \xe9xitos como Blinding Lights, Call Out My Name, Starboy, The Hills, Can't Feel My Face y I Feel It Coming.\u200b",bio:"Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. He began his recording career in 2010, anonymously uploading several songs to YouTube. A year later, The Weeknd released the mixtapes House of Balloons, Thursday, and Echoes of Silence, and quickly earned a following and critical recognition from several mainstream publications due to his dark style of R&B and the mystique surrounding his identity."}]},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"text-white main"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(p,null),l.a.createElement("div",{id:"navSpace",className:"col-sm-1"}),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(j,{props:this.state.artistas})),l.a.createElement(u.a,{exact:!0,path:"/artista/:id"},l.a.createElement(b,{component:this.state.artistas})),l.a.createElement(u.a,{path:"*"},l.a.createElement(S,null)))),l.a.createElement("div",{className:"d-flex fixed-bottom"},l.a.createElement(h,null))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e0a1ac39.chunk.js.map