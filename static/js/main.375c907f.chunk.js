(this.webpackJsonpteams=this.webpackJsonpteams||[]).push([[0],{100:function(e,t,n){},131:function(e,t){},133:function(e,t){},182:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(11),c=n.n(r),o=(n(98),n(99),n(100),n(92)),s=n(29),i=n(186),u=n(91);var m=function(){var e,t,n=[],r=[],c=[],m=[],h=[],E=Object(a.useState)([]),f=Object(s.a)(E,2),b=f[0],d=f[1],p=Object(a.useState)([]),v=Object(s.a)(p,2),y=v[0],g=v[1],N=Object(a.useState)([]),S=Object(s.a)(N,2),w=S[0];return S[1],Object(a.useEffect)((function(){var a=document.getElementById("input");a.addEventListener("change",(function(){Object(i.a)(a.files[0],{getSheets:!0}).then((function(l){l.forEach((function(s){Object(i.a)(a.files[0],{sheet:l[0].name}).then((function(u){(t=s.name)!=l[0].name&&(w.push(s.name),Object(i.a)(a.files[0],{sheet:t}).then((function(t){for(n=[],e=0;e<t.length;e++)n.push(t[e][0]);for(n=Object(o.a)(new Set(n)),h=[],m=[],e=0;e<u.length;e++)n.includes(u[e][1])?h.push(u[e][0]):m.push(u[e][0]);h=h.sort(),m=m.sort(),r.push(h),c.push(m)})))}))}))}),[])}))})),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",{style:{color:"#073590",fontFamily:"cursive"}},"GET  ATTENDANCE BY UPLOADING  FILE"),l.a.createElement("br",null),l.a.createElement("h5",null,"UPLOAD FILE \ud83d\udc49\ud83c\udffb\ud83d\udc49\ud83c\udffb\ud83d\udc49\ud83c\udffb ",l.a.createElement("input",{id:"input",type:"file"})),l.a.createElement("br",null),l.a.createElement(u.b,{onClick:function(){d(c),g(r),console.log(w)},color:"primary"},l.a.createElement("strong",null,"CLICK FOR ATTENDANCE")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:"form-inline justify-content-center"},l.a.createElement("div",{className:"card border-primary mb-3",style:{width:"35%",padding:"1%",fontSize:"17px",color:"#0000ff",fontFamily:"cursive",textAlign:"left"}},"\u25ba Make sure that the First sheet in your file contain all Students RollNumbers in the first column and Names in the Second column.",l.a.createElement("br",null),l.a.createElement("br",null),"\u25ba Copy Names of Students from the Downloaded Sheet of Teams and Paste in new sheet of the same file which contains your First Sheet.",l.a.createElement("br",null),l.a.createElement("br",null)," \u25ba Save sheet as DATE in the Downloaded Sheet from Teams.",l.a.createElement("br",null),l.a.createElement("br",null)," \u25ba You can have multiple sheets in File . Make sure Names of the Students in all the sheets are same . Upload the file and Click the button.")),l.a.createElement("br",null),l.a.createElement("br",null),y.map((function(e,t){return l.a.createElement("div",{className:"card"},l.a.createElement("table",null,l.a.createElement("br",null),l.a.createElement("th",null,l.a.createElement("h4",{style:{color:"blue",fontFamily:"cursive"}}," Present"),l.a.createElement("table",{className:"table table-striped"},e.map((function(e){return l.a.createElement("tr",null,l.a.createElement("strong",null,e))}))," ")),l.a.createElement("th",null,l.a.createElement("h4",{style:{fontFamily:"cursive"}},"DATE : ",w[t])),l.a.createElement("th",null,l.a.createElement("h4",{style:{color:"red",fontFamily:"cursive"}},"Absent"),l.a.createElement("table",{className:"table table-striped"},b[t].map((function(e){return l.a.createElement("tr",null,l.a.createElement("strong",null,e))}))," ")),l.a.createElement("br",null)))})))};var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(181);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,n){e.exports=n(182)},98:function(e,t,n){},99:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[93,1,2]]]);
//# sourceMappingURL=main.375c907f.chunk.js.map