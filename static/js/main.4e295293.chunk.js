(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),l=n.n(c),u=(n(12),n(1)),s=n.n(u),o=n(2),i=n(3),m=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Weather app"))},p=function(e){var t=e.city,n=e.weatherMethod,r=e.setCityCallback;return a.a.createElement("form",{onSubmit:n},a.a.createElement("input",{type:"text",name:"city",placeholder:"City name",value:t,onChange:function(e){r(e.target.value)}}),a.a.createElement("button",{className:"btn btn-warning"},"Check weather"))},f=function(e){var t=e.city,n=e.country,r=e.temp,c=e.pressure,l=e.sunset,u=e.error;return a.a.createElement("div",{className:"margin-below-xl"},t&&a.a.createElement("div",null,a.a.createElement("p",null,"Location: ",t,",",n),a.a.createElement("p",null,"Temperature: ",r),a.a.createElement("p",null,"Pressure: ",c),a.a.createElement("p",null,"Sunset: ",l)),a.a.createElement("p",{className:"text-warning"},u))},h={getWeather:function(){var e=Object(o.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("0ee6bd66c4f2ef133f03d43e9c14f56e","&units=metric"));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(r.useState)({temp:null,city:null,country:null,pressure:null,sunset:null,error:null}),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(""),u=Object(i.a)(l,2),y=u[0],d=u[1],w=function(){var e=Object(o.a)(s.a.mark(function e(t){var n,r,a,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!y){e.next=8;break}return e.next=4,h.getWeather(y);case 4:200===(n=e.sent).cod?(r=n.sys.sunset,a=new Date(1e3*r),l=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes(),u=a.getHours()+":"+l,c({temp:n.main.temp,city:n.name,country:n.sys.country,pressure:n.main.pressure,sunset:u,error:null})):c({temp:null,city:null,country:null,pressure:null,sunset:null,error:n.message}),e.next=9;break;case 8:c({temp:null,city:null,country:null,pressure:null,sunset:null,error:"Enter the name of the city"});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-5 info"},a.a.createElement(m,null)),a.a.createElement("div",{className:"col-lg-7 form"},a.a.createElement(p,{weatherMethod:w,city:y,setCityCallback:function(e){d(e)}}),a.a.createElement(f,{temp:n.temp,city:n.city,country:n.country,pressure:n.pressure,sunset:n.sunset,error:n.error}))))))};n(15),n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.4e295293.chunk.js.map