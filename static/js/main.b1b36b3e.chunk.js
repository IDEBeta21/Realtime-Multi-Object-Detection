(this["webpackJsonprealtime-multi-object-detection"]=this["webpackJsonprealtime-multi-object-detection"]||[]).push([[0],{247:function(e,t,n){e.exports=n(274)},252:function(e,t,n){},258:function(e,t){},259:function(e,t){},267:function(e,t){},270:function(e,t){},271:function(e,t){},272:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var r=n(52),i=n.n(r),a=n(226),c=n.n(a),o=(n(252),n(5)),u=n.n(o),l=n(13),s=n(8),f=(n(273),n(246)),d=n(245),h=n.n(d),m=(n(272),function(e,t){e.forEach((function(e){var n=Object(s.a)(e.bbox,4),r=n[0],i=n[1],a=n[2],c=n[3],o=e.class,u=Math.floor(16777215*Math.random()).toString(16);t.strokeStyle="#"+u,t.font="18px Arial",t.beginPath(),t.fillStyle="#"+u,t.fillText(o,r,i),t.rect(r,i,a,c),t.stroke()})),document.getElementById("personText").innerHTML="... App Running..."});var p=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useState)(640),a=Object(s.a)(n,2),c=a[0],o=(a[1],Object(r.useState)(480)),d=Object(s.a)(o,2),p=d[0],g=(d[1],function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a();case 2:t=e.sent,console.log("Object model loaded."),setInterval((function(){b(t,{maxNumBoxes:1})}),10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),b=function(){var n=Object(l.a)(u.a.mark((function n(r){var i,a,c,o,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=13;break}return i=e.current.video,a=e.current.video.videoWidth,c=e.current.video.videoHeight,e.current.video.width=a,e.current.video.height=c,t.current.width=a,t.current.height=c,n.next=10,r.detect(i);case 10:o=n.sent,l=t.current.getContext("2d"),m(o,l);case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){g()}),[]),i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:c,height:p}}),i.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:c,height:p}}),i.a.createElement("div",{style:{paddingTop:500}},i.a.createElement("h1",{style:{color:"white"}},"Realtime Multi Object Detection"),i.a.createElement("p",{id:"personText",style:{color:"white",fontSize:20}},"Loading...")))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.b1b36b3e.chunk.js.map