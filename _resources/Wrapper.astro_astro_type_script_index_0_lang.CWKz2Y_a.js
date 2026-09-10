function ys(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function r0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ca={duration:.5,overwrite:!1,delay:0},op,pi,Pt,Qn=1e8,bi=1/Qn,Dd=Math.PI*2,ky=Dd/4,Vy=0,o0=Math.sqrt,Hy=Math.cos,Gy=Math.sin,ui=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},Ds=function(e){return typeof e=="number"},ap=function(e){return typeof e>"u"},ns=function(e){return typeof e=="object"},Vi=function(e){return e!==!1},lp=function(){return typeof window<"u"},Xl=function(e){return Ot(e)||ui(e)},a0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ti=Array.isArray,Nd=/(?:-?\.?\d|\.)+/gi,l0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,c0=/[+-]=-?[.\d]+/,h0=/[^,'"\[\]\s]+/gi,Wy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Xn,Fd,cp,hn={},xh={},u0,d0=function(e){return(xh=ha(e,hn))&&qi},hp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ml=function(e,t){return!t&&console.warn(e)},f0=function(e,t){return e&&(hn[e]=t)&&xh&&(xh[e]=t)||hn},Sl=function(){return 0},Xy={suppressEvents:!0,isStart:!0,kill:!1},eh={suppressEvents:!0,kill:!1},qy={suppressEvents:!0},up={},or=[],Ud={},p0,tn={},iu={},cm=30,th=[],dp="",fp=function(e){var t=e[0],i,n;if(ns(t)||Ot(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=th.length;n--&&!th[n].targetTest(t););i=th[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new B0(e[n],i)))||e.splice(n,1);return e},Xr=function(e){return e._gsap||fp(Mn(e))[0]._gsap},m0=function(e,t,i){return(i=e[t])&&Ot(i)?e[t]():ap(i)&&e.getAttribute&&e.getAttribute(t)||i},Hi=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Qo=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Yy=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},yh=function(){var e=or.length,t=or.slice(0),i,n;for(Ud={},or.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},pp=function(e){return!!(e._initted||e._startAt||e.add)},g0=function(e,t,i,n){or.length&&!pi&&yh(),e.render(t,i,!!(pi&&t<0&&pp(e))),or.length&&!pi&&yh()},_0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(h0).length<2?t:ui(e)?e.trim():e},x0=function(e){return e},un=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$y=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ha=function(e,t){for(var i in t)e[i]=t[i];return e},hm=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ns(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},vh=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ol=function(e){var t=e.parent||Lt,i=e.keyframes?$y(Ti(e.keyframes)):un;if(Vi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},jy=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},y0=function(e,t,i,n,s){var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Hh=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Ky=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Od=function(e,t,i,n){return e._startAt&&(pi?e._startAt.revert(eh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Zy=function r(e){return!e||e._ts&&r(e.parent)},um=function(e){return e._repeat?ua(e._tTime,e=e.duration()+e._rDelay)*e:0},ua=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},Mh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gh=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bi)||0))},Wh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gh(e),i._dirty||qr(i,e)),e},v0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Mh(e.rawTime(),t),(!t._dur||zl(0,t.totalDuration(),i)-t._tTime>bi)&&t.render(i,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},jn=function(e,t,i,n){return t.parent&&ur(t),t._start=jt((Ds(i)?i:i||e!==Lt?_n(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),y0(e,t,"_first","_last",e._sort?"_start":0),Bd(t)||(e._recent=t),n||v0(e,t),e._ts<0&&Wh(e,e._tTime),e},M0=function(e,t){return(hn.ScrollTrigger||hp("scrollTrigger",t))&&hn.ScrollTrigger.create(t,e)},S0=function(e,t,i,n,s){if(gp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!pi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&p0!==rn.frame)return or.push(e),e._lazy=[s,n],1},Jy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Bd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Qy=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&Jy(e)&&!(!e._initted&&Bd(e))||(e._ts<0||e._dp._ts<0)&&!Bd(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=zl(0,e._tDur,t),h=ua(l,a),e._yoyo&&h&1&&(o=1-o),h!==ua(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||pi||n||e._zTime===bi||!t&&e._zTime){if(!e._initted&&S0(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?bi:0),i||(i=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Od(e,t,i,!0),e._onUpdate&&!i&&an(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ur(e,1),!i&&!pi&&(an(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ev=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},da=function(e,t,i,n){var s=e._repeat,o=jt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!n&&Wh(e,e._tTime=e._tDur*a),e.parent&&Gh(e),i||qr(e.parent,e),e},dm=function(e){return e instanceof Fi?qr(e):da(e,e._dur)},tv={_start:0,endTime:Sl,totalDuration:Sl},_n=function r(e,t,i){var n=e.labels,s=e._recent||tv,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return ui(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Ti(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},al=function(e,t,i){var n=Ds(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vi(l.vars.inherit)&&l.parent;o.immediateRender=Vi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},_r=function(e,t){return e||e===0?t(e):t},zl=function(e,t,i){return i<e?e:i>t?t:i},Mi=function(e,t){return!ui(e)||!(t=Wy.exec(e))?"":t[1]},iv=function(e,t,i){return _r(i,function(n){return zl(e,t,n)})},zd=[].slice,b0=function(e,t){return e&&ns(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ns(e[0]))&&!e.nodeType&&e!==Xn},nv=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ui(n)&&!t||b0(n,1)?(s=i).push.apply(s,Mn(n)):i.push(n)})||i},Mn=function(e,t,i){return Pt&&!t&&Pt.selector?Pt.selector(e):ui(e)&&!i&&(Fd||!fa())?zd.call((t||cp).querySelectorAll(e),0):Ti(e)?nv(e,i):b0(e)?zd.call(e,0):e?[e]:[]},kd=function(e){return e=Mn(e)[0]||Ml("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Mn(t,i.querySelectorAll?i:i===e?Ml("Invalid scope")||cp.createElement("div"):e)}},T0=function(e){return e.sort(function(){return .5-Math.random()})},w0=function(e){if(Ot(e))return e;var t=ns(e)?e:{each:e},i=Yr(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,u=n;return ui(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(d,f,p){var _=(p||t).length,m=o[_],g,y,v,x,E,w,S,R,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!b){for(S=-1e8;S<(S=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=o[_]=[],g=l?Math.min(b,_)*h-.5:n%b,y=b===Qn?0:l?_*u/b-.5:n/b|0,S=0,R=Qn,w=0;w<_;w++)v=w%b-g,x=y-(w/b|0),m[w]=E=c?Math.abs(c==="y"?x:v):o0(v*v+x*x),E>S&&(S=E),E<R&&(R=E);n==="random"&&T0(m),m.max=S-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(n==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Mi(t.amount||t.each)||0,i=i&&_<0?F0(i):i}return _=(m[d]-m.min)/m.max||0,jt(m.b+(i?i(_):_)*m.v)+m.u}},Vd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=jt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Ds(i)?0:Mi(i))}},E0=function(e,t){var i=Ti(e),n,s;return!i&&ns(e)&&(n=i=e.radius||Qn,e.values?(e=Mn(e.values),(s=!Ds(e[0]))&&(n*=n)):e=Vd(e.increment)),_r(t,i?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:o,s||h===o||Ds(o)?h:h+Mi(o)}:Vd(e))},A0=function(e,t,i,n){return _r(Ti(e)?!t:i===!0?!!(i=0):!n,function(){return Ti(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},sv=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},rv=function(e,t){return function(i){return e(parseFloat(i))+(t||Mi(i))}},ov=function(e,t,i){return C0(e,t,0,1,i)},R0=function(e,t,i){return _r(i,function(n){return e[~~t(n)]})},av=function r(e,t,i){var n=t-e;return Ti(e)?R0(e,r(0,e.length),t):_r(i,function(s){return(n+(s-e)%n)%n+e})},lv=function r(e,t,i){var n=t-e,s=n*2;return Ti(e)?R0(e,r(0,e.length-1),t):_r(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},bl=function(e){for(var t=0,i="",n,s,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(a?h0:Nd),i+=e.substr(t,n-t)+A0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},C0=function(e,t,i,n,s){var o=t-e,a=n-i;return _r(s,function(l){return i+((l-e)/o*a||0)})},cv=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=ui(e),a={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Ti(e)&&!Ti(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(p){p*=u;var _=Math.min(d,~~p);return h[_](p-_)},i=t}else n||(e=ha(Ti(e)?[]:{},e));if(!h){for(l in t)mp.call(a,e,l,"get",t[l]);s=function(p){return yp(p,a)||(o?e.p:e)}}}return _r(i,s)},fm=function(e,t,i){var n=e.labels,s=Qn,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},an=function(e,t,i){var n=e.vars,s=n[t],o=Pt,a=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&or.length&&yh(),a&&(Pt=a),h=l?s.apply(c,l):s.call(c),Pt=o,h},Za=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pi),e.progress()<1&&an(e,"onInterrupt"),e},qo,P0=[],I0=function(e){if(e)if(e=!e.name&&e.default||e,lp()||e.headless){var t=e.name,i=Ot(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Sl,render:yp,add:mp,kill:wv,modifier:Tv,rawVars:0},o={targetTest:0,get:0,getSetter:xp,aliases:{},register:0};if(fa(),e!==n){if(tn[t])return;un(n,un(vh(e,s),o)),ha(n.prototype,ha(s,vh(e,o))),tn[n.prop=t]=n,e.targetTest&&(th.push(n),up[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}f0(t,n),e.register&&e.register(qi,n,Gi)}else P0.push(e)},wt=255,Ja={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},nu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},L0=function(e,t,i){var n=e?Ds(e)?[e>>16,e>>8&wt,e&wt]:0:Ja.black,s,o,a,l,c,h,u,d,f,p;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ja[e])n=Ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&wt,n&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(n=p=e.match(Nd),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=nu(l+1/3,s,o),n[1]=nu(l,s,o),n[2]=nu(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(l0),i&&n.length<4&&(n[3]=1),n}else n=e.match(Nd)||Ja.transparent;n=n.map(Number)}return t&&!p&&(s=n[0]/wt,o=n[1]/wt,a=n[2]/wt,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},D0=function(e){var t=[],i=[],n=-1;return e.split(ar).forEach(function(s){var o=s.match(Xo)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},pm=function(e,t,i){var n="",s=(e+n).match(ar),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=L0(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=D0(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(ar,"1").split(Xo),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(ar),u=c.length-1;a<u;a++)n+=c[a]+s[a];return n+c[u]},ar=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ja)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),hv=/hsl[a]?\(/,N0=function(e){var t=e.join(" "),i;if(ar.lastIndex=0,ar.test(t))return i=hv.test(t),e[1]=pm(e[1],i),e[0]=pm(e[0],i,D0(e[1])),!0},Tl,rn=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,u,d,f,p=function _(m){var g=r()-n,y=m===!0,v,x,E,w;if((g>e||g<0)&&(i+=g-t),n+=g,E=n-i,v=E-o,(v>0||y)&&(w=++u.frame,d=E-u.time*1e3,u.time=E=E/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](E,d,w,m)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){u0&&(!Fd&&lp()&&(Xn=Fd=window,cp=Xn.document||{},hn.gsap=qi,(Xn.gsapVersions||(Xn.gsapVersions=[])).push(qi.version),d0(xh||Xn.GreenSockGlobals||!Xn.gsap&&Xn||{}),P0.forEach(I0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Tl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Tl=0,c=Sl},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,g,y){var v=g?function(x,E,w,S){m(x,E,w,S),u.remove(v)}:m;return u.remove(m),a[y?"unshift":"push"](v),fa(),v},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},u}(),fa=function(){return!Tl&&rn.wake()},lt={},uv=/^[\d.\-M][\d.\-,\s]/,dv=/["']/g,fv=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(dv,"").trim():+c,n=l.substr(a+1).trim();return t},pv=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},mv=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[fv(t[1])]:pv(e).split(",").map(_0)):lt._CE&&uv.test(e)?lt._CE("",e):i},F0=function(e){return function(t){return 1-e(1-t)}},U0=function r(e,t){for(var i=e._first,n;i;)i instanceof Fi?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Yr=function(e,t){return e&&(Ot(e)?e:lt[e]||mv(e))||t},ro=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return Hi(e,function(a){lt[a]=hn[a]=s,lt[o=a.toLowerCase()]=i;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},O0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},su=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Dd*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*Gy((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:O0(a);return s=Dd/s,l.config=function(c,h){return r(e,c,h)},l},ru=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:O0(i);return n.config=function(s){return r(e,s)},n};Hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ro(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ro("Elastic",su("in"),su("out"),su());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ro("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ro("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ro("Circ",function(r){return-(o0(1-r*r)-1)});ro("Sine",function(r){return r===1?1:-Hy(r*ky)+1});ro("Back",ru("in"),ru("out"),ru());lt.SteppedEase=lt.steps=hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-bi;return function(a){return((n*zl(0,o,a)|0)+s)*i}}};ca.ease=lt["quad.out"];Hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dp+=r+","+r+"Params,"});var B0=function(e,t){this.id=Vy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:m0,this.set=t?t.getSetter:xp},wl=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,da(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Tl||rn.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,da(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wh(this,i),!s._dp||s.parent||v0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===bi||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),g0(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+um(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+um(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ua(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Mh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(zl(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),Gh(this),Ky(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bi&&(this._tTime-=bi)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&jn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Vi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mh(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=qy);var n=pi;return pi=i,pp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),pi=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,dm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,dm(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(_n(this,i),Vi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Vi(n)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-bi)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(s){var o=Ot(i)?i:x0,a=function(){var c=n.then;n.then=null,Ot(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),s(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){Za(this)},r}();un(wl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Fi=function(r){r0(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Vi(i.sortChildren),Lt&&jn(i.parent||Lt,ys(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&M0(ys(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return al(0,arguments,this),this},t.from=function(n,s,o){return al(1,arguments,this),this},t.fromTo=function(n,s,o,a){return al(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,ol(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(n,s,_n(this,o),1),this},t.call=function(n,s,o){return jn(this,$t.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new $t(n,o,_n(this,l)),this},t.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,ol(o).immediateRender=Vi(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},t.staggerFromTo=function(n,s,o,a,l,c,h,u){return a.startAt=o,ol(a).immediateRender=Vi(a.immediateRender),this.staggerTo(n,s,a,l,c,h,u)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:jt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,p,_,m,g,y,v,x,E,w,S;if(this!==Lt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),d=h,x=this._start,v=this._ts,g=!v,u&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(d=jt(h%m),h===l?(_=this._repeat,d=c):(E=jt(h/m),_=~~E,_&&_===E&&(d=c,_--),d>c&&(d=c)),E=ua(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(d=c-d,S=1),_!==E&&!this._lock){var R=w&&E&1,b=R===(w&&_&1);if(_<E&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(S?0:jt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;U0(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ev(this,jt(a),jt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&!s&&!E&&(an(this,"onStart"),this._tTime!==h))return this;if(d>=a&&n>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=-1e-8);break}}f=p}else{f=this._last;for(var M=n<0?n:d;f;){if(p=f._prev,(f._act||M<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,o||pi&&pp(f)),d!==this._time||!this._ts&&!g){y=0,p&&(h+=this._zTime=M?-1e-8:bi);break}}f=p}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=x,Gh(this),this.render(n,s,o);this._onUpdate&&!s&&an(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(an(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(Ds(s)||(s=_n(this,s,n)),!(n instanceof wl)){if(Ti(n))return n.forEach(function(a){return o.add(a,s)}),this;if(ui(n))return this.addLabel(n,s);if(Ot(n))n=$t.delayedCall(0,n);else return this}return this!==n?jn(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return ui(n)?this.removeLabel(n):Ot(n)?this.killTweensOf(n):(n.parent===this&&Hh(this,n),n===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(rn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=_n(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=$t.delayedCall(0,s||Sl,o);return a.data="isPause",this._hasPause=1,jn(this,a,_n(this,n))},t.removePause=function(n){var s=this._first;for(n=_n(this,n);s;)s._start===n&&s.data==="isPause"&&ur(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)er!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=Mn(n),l=this._first,c=Ds(s),h;l;)l instanceof $t?Yy(l._targets,a)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=_n(o,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,p=$t.to(o,un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bi,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&da(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,u||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,un({startAt:{time:_n(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),fm(this,_n(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),fm(this,_n(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+bi)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return qr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),qr(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=Qn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;da(o,o===Lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Lt._ts&&(g0(Lt,Mh(n,Lt)),p0=rn.frame),rn.frame>=cm){cm+=ln.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&ln.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(wl);un(Fi.prototype,{_lock:0,_hasPause:0,_forcing:0});var gv=function(e,t,i,n,s,o,a){var l=new Gi(this._pt,e,t,0,1,W0,null,s),c=0,h=0,u,d,f,p,_,m,g,y;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=bl(n)),o&&(y=[i,n],o(y,e,t),i=y[0],n=y[1]),d=i.match(tu)||[];u=tu.exec(n);)p=u[0],_=n.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Qo(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=tu.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(c0.test(n)||g)&&(l.e=0),this._pt=l,l},mp=function(e,t,i,n,s,o,a,l,c,h){Ot(n)&&(n=n(s||0,e,o));var u=e[t],d=i!=="get"?i:Ot(u)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Ot(u)?c?Mv:H0:_p,p;if(ui(n)&&(~n.indexOf("random(")&&(n=bl(n)),n.charAt(1)==="="&&(p=Qo(d,n)+(Mi(d)||0),(p||p===0)&&(n=p))),!h||d!==n||Hd)return!isNaN(d*n)&&n!==""?(p=new Gi(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?bv:G0,0,f),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!u&&!(t in e)&&hp(t,n),gv.call(this,e,t,d,n,f,l||ln.stringFilter,c))},_v=function(e,t,i,n,s){if(Ot(e)&&(e=ll(e,s,t,i,n)),!ns(e)||e.style&&e.nodeType||Ti(e)||a0(e))return ui(e)?ll(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=ll(e[a],s,t,i,n);return o},z0=function(e,t,i,n,s,o){var a,l,c,h;if(tn[e]&&(a=new tn[e]).init(s,a.rawVars?t[e]:_v(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Gi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==qo))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},er,Hd,gp=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:m,v=e._overwrite==="auto"&&!op,x=e.timeline,E,w,S,R,b,M,P,N,U,G,Y,H,W;if(x&&(!d||!s)&&(s="none"),e._ease=Yr(s,ca.ease),e._yEase=u?F0(Yr(u===!0?s:u,ca.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!x&&!!n.runBackwards,!x||d&&!n.stagger){if(N=m[0]?Xr(m[0]).harness:0,H=N&&n[N.prop],E=vh(n,up),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?eh:Xy),_._lazy=0),o){if(ur(e._startAt=$t.set(m,un({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Vi(l),startAt:null,delay:0,onUpdate:c&&function(){return an(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pi||!a&&!f)&&e._startAt.revert(eh),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(a=!1),S=un({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Vi(l),immediateRender:a,stagger:0,parent:g},E),H&&(S[N.prop]=H),ur(e._startAt=$t.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pi?e._startAt.revert(eh):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bi,bi);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Vi(l)||l&&!p,w=0;w<m.length;w++){if(b=m[w],P=b._gsap||fp(m)[w]._gsap,e._ptLookup[w]=G={},Ud[P.id]&&or.length&&yh(),Y=y===m?w:y.indexOf(b),N&&(U=new N).init(b,H||E,e,Y,y)!==!1&&(e._pt=R=new Gi(e._pt,b,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){G[z]=R}),U.priority&&(M=1)),!N||H)for(S in E)tn[S]&&(U=z0(S,E,e,Y,b,y))?U.priority&&(M=1):G[S]=R=mp.call(e,b,S,"get",E[S],Y,y,0,n.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),v&&e._pt&&(er=e,Lt.killTweensOf(b,G,e.globalTime(t)),W=!e.parent,er=0),e._pt&&l&&(Ud[P.id]=1)}M&&X0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&x.render(Qn,!0,!0)},xv=function(e,t,i,n,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Hd=1,e.vars[t]="+=0",gp(e,a),Hd=0,l?Ml(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,u.e&&(u.e=zt(i)+Mi(u.e)),u.b&&(u.b=h.s+Mi(u.b))},yv=function(e,t){var i=e[0]?Xr(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=ha({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vv=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(Ti(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ll=function(e,t,i,n,s){return Ot(e)?e.call(t,i,n,s):ui(e)&&~e.indexOf("random(")?bl(e):e},k0=dp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",V0={};Hi(k0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return V0[r]=1});var $t=function(r){r0(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:ol(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,y=n.parent||Lt,v=(Ti(i)||a0(i)?Ds(i[0]):"length"in n)?[i]:Mn(i),x,E,w,S,R,b,M,P;if(a._targets=v.length?fp(v):Ml("GSAP target "+i+" not found. https://gsap.com",!ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||d||Xl(c)||Xl(h)){if(n=a.vars,x=a.timeline=new Fi({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=ys(a),x._start=0,d||Xl(c)||Xl(h)){if(S=v.length,M=d&&w0(d),ns(d))for(R in d)~k0.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(E=0;E<S;E++)w=vh(n,V0),w.stagger=0,g&&(w.yoyoEase=g),P&&ha(w,P),b=v[E],w.duration=+ll(c,ys(a),E,b,v),w.delay=(+ll(h,ys(a),E,b,v)||0)-a._delay,!d&&S===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),x.to(b,w,M?M(E,b,v):0),x._ease=lt.none;x.duration()?c=h=0:a.timeline=0}else if(p){ol(un(x.vars.defaults,{ease:"none"})),x._ease=Yr(p.ease||n.ease||"none");var N=0,U,G,Y;if(Ti(p))p.forEach(function(H){return x.to(v,H,">")}),x.duration();else{w={};for(R in p)R==="ease"||R==="easeEach"||vv(R,p[R],w,p.easeEach);for(R in w)for(U=w[R].sort(function(H,W){return H.t-W.t}),N=0,E=0;E<U.length;E++)G=U[E],Y={ease:G.e,duration:(G.t-(E?U[E-1].t:0))/100*c},Y[R]=G.v,x.to(v,Y,N),N+=Y.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!op&&(er=ys(a),Lt.killTweensOf(v),er=0),jn(y,ys(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!p&&a._start===jt(y._time)&&Vi(u)&&Zy(ys(a))&&y.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),m&&M0(ys(a),m),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-bi&&!h?l:n<bi?0:n,d,f,p,_,m,g,y,v,x;if(!c)Qy(this,n,s,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,s,o);if(d=jt(u%_),u===l?(p=this._repeat,d=c):(m=jt(u/_),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),g=this._yoyo&&p&1,g&&(x=this._yEase,d=c-d),m=ua(this._tTime,_),d===a&&!o&&this._initted&&p===m)return this._tTime=u,this;p!==m&&(v&&this._yEase&&U0(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(jt(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(S0(this,h?n:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!a&&u&&!s&&!m&&(an(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(n<0?n:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Od(this,n,s,o),an(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Od(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(h&&!a)&&(u||a||g)&&(an(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a,l){Tl||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||gp(this,c),h=this._ease(c/this._dur),xv(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(Wh(this,0),this.parent||y0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Za(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pi),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,er&&er.vars.overwrite!==!0)._first||Za(this),this.parent&&o!==this.timeline.totalDuration()&&da(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Mn(n):a,c=this._ptLookup,h=this._pt,u,d,f,p,_,m,g;if((!s||s==="all")&&jy(a,l))return s==="all"&&(this._pt=0),Za(this);for(u=this._op=this._op||[],s!=="all"&&(ui(s)&&(_={},Hi(s,function(y){return _[y]=1}),s=_),s=yv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){d=c[g],s==="all"?(u[g]=s,p=d,f={}):(f=u[g]=u[g]||{},p=s);for(_ in p)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Hh(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Za(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return al(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return al(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return Lt.killTweensOf(n,s,o)},e}(wl);un($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hi("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new Fi,t=zd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var _p=function(e,t,i){return e[t]=i},H0=function(e,t,i){return e[t](i)},Mv=function(e,t,i,n){return e[t](n.fp,i)},Sv=function(e,t,i){return e.setAttribute(t,i)},xp=function(e,t){return Ot(e[t])?H0:ap(e[t])&&e.setAttribute?Sv:_p},G0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},W0=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},yp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Tv=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},wv=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Hh(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Ev=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},X0=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},Gi=function(){function r(t,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||G0,this.d=l||this,this.set=c||_p,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Ev,this.m=i,this.mt=s,this.tween=n},r}();Hi(dp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return up[r]=1});hn.TweenMax=hn.TweenLite=$t;hn.TimelineLite=hn.TimelineMax=Fi;Lt=new Fi({sortChildren:!1,defaults:ca,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=N0;var $r=[],ih={},Av=[],mm=0,Rv=0,ou=function(e){return(ih[e]||Av).map(function(t){return t()})},Gd=function(){var e=Date.now(),t=[];e-mm>2&&(ou("matchMediaInit"),$r.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=Xn.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),ou("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),mm=e,ou("matchMedia"))},q0=function(){function r(t,i){this.selector=i&&kd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Rv++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){Ot(i)&&(s=n,n=i,i=Ot);var o=this,a=function(){var c=Pt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=kd(s)),Pt=o,u=n.apply(o,arguments),Ot(u)&&o._r.push(u),Pt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===Ot?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=Pt;Pt=null,i(this),Pt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof $t&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=$r.length;o--;)$r[o].id===this.id&&$r.splice(o,1)},e.revert=function(i){this.kill(i||{})},r}(),Cv=function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){ns(i)||(i={matches:i});var o=new q0(0,s||this.scope),a=o.conditions={},l,c,h;Pt&&!o.selector&&(o.selector=Pt.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Xn.matchMedia(i[c]),l&&($r.indexOf(o)<0&&$r.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Gd):l.addEventListener("change",Gd)));return h&&n(o,function(u){return o.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Sh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return I0(n)})},timeline:function(e){return new Fi(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,i,n){ui(e)&&(e=Mn(e)[0]);var s=Xr(e||{}).get,o=i?x0:_0;return i==="native"&&(i=""),e&&(t?o((tn[t]&&tn[t].get||s)(e,t,i,n)):function(a,l,c){return o((tn[a]&&tn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Mn(e),e.length>1){var n=e.map(function(h){return qi.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var o=tn[t],a=Xr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;qo._pt=0,u.init(e,i?h+i:h,qo,0,[e]),u.render(1,u),qo._pt&&yp(1,qo)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,s=qi.to(e,un((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,ca.ease)),hm(ca,e||{})},config:function(e){return hm(ln,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!tn[a]&&!hn[a]&&Ml(t+" effect requires "+a+" plugin.")}),iu[t]=function(a,l,c){return i(Mn(a),un(l||{},s),c)},o&&(Fi.prototype[t]=function(a,l,c){return this.add(iu[t](a,ns(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):lt},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Fi(e),n,s;for(i.smoothChildTiming=Vi(e.smoothChildTiming),Lt.remove(i),i._dp=0,i._time=i._tTime=Lt._time,n=Lt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof $t&&n.vars.onComplete===n._targets[0]))&&jn(i,n,n._start-n._delay),n=s;return jn(Lt,i,0),i},context:function(e,t){return e?new q0(e,t):Pt},matchMedia:function(e){return new Cv(e)},matchMediaRefresh:function(){return $r.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Gd()},addEventListener:function(e,t){var i=ih[e]||(ih[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ih[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:av,wrapYoyo:lv,distribute:w0,random:A0,snap:E0,normalize:ov,getUnit:Mi,clamp:iv,splitColor:L0,toArray:Mn,selector:kd,mapRange:C0,pipe:sv,unitize:rv,interpolate:cv,shuffle:T0},install:d0,effects:iu,ticker:rn,updateRoot:Fi.updateRoot,plugins:tn,globalTimeline:Lt,core:{PropTween:Gi,globals:f0,Tween:$t,Timeline:Fi,Animation:wl,getCache:Xr,_removeLinkedListItem:Hh,reverting:function(){return pi},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return op=e}}};Hi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Sh[r]=$t[r]});rn.add(Fi.updateRoot);qo=Sh.to({},{duration:0});var Pv=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Iv=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=Pv(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},au=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(ui(s)&&(l={},Hi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Iv(a,s)}}}},qi=Sh.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)pi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},au("roundProps",Vd),au("modifiers"),au("snap",E0))||Sh;$t.version=Fi.version=qi.version="3.13.0";u0=1;lp()&&fa();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gm,tr,ea,vp,kr,_m,Mp,Lv=function(){return typeof window<"u"},Ns={},Dr=180/Math.PI,ta=Math.PI/180,ho=Math.atan2,xm=1e8,Sp=/([A-Z])/g,Dv=/(left|right|width|margin|padding|x)/i,Nv=/[\s,\(]\S/,Kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ov=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Y0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Bv=function(e,t,i){return e.style[t]=i},zv=function(e,t,i){return e.style.setProperty(t,i)},kv=function(e,t,i){return e._gsap[t]=i},Vv=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Hv=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Gv=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Dt="transform",Wi=Dt+"Origin",Wv=function r(e,t){var i=this,n=this.target,s=n.style,o=n._gsap;if(e in Ns&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ms(n,a)}):this.tfm[e]=o.x?o[e]:Ms(n,e),e===Wi&&(this.tfm.zOrigin=o.zOrigin);else return Kn.transform.split(",").forEach(function(a){return r.call(i,a,t)});if(this.props.indexOf(Dt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Wi,t,"")),e=Dt}(s||t)&&this.props.push(e,t,s[e])},j0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xv=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Sp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Mp(),(!s||!s.isStart)&&!i[Dt]&&(j0(i),n.zOrigin&&i[Wi]&&(i[Wi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},K0=function(e,t){var i={target:e,props:[],revert:Xv,save:Wv};return e._gsap||qi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Z0,Xd=function(e,t){var i=tr.createElementNS?tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):tr.createElement(e);return i&&i.style?i:tr.createElement(e)},Sn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Sp,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,pa(t)||t,1)||""},ym="O,Moz,ms,Ms,Webkit".split(","),pa=function(e,t,i){var n=t||kr,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ym[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ym[o]:"")+e},qd=function(){Lv()&&window.document&&(gm=window,tr=gm.document,ea=tr.documentElement,kr=Xd("div")||{style:{}},Xd("div"),Dt=pa(Dt),Wi=Dt+"Origin",kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z0=!!pa("perspective"),Mp=qi.core.reverting,vp=1)},vm=function(e){var t=e.ownerSVGElement,i=Xd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),ea.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),ea.removeChild(i),s},Mm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},J0=function(e){var t,i;try{t=e.getBBox()}catch{t=vm(e),i=1}return t&&(t.width||t.height)||i||(t=vm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mm(e,["x","cx","x1"])||0,y:+Mm(e,["y","cy","y1"])||0,width:0,height:0}:t},Q0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&J0(e))},Qr=function(e,t){if(t){var i=e.style,n;t in Ns&&t!==Wi&&(t=Dt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Sp,"-$1").toLowerCase())):i.removeAttribute(t)}},ir=function(e,t,i,n,s,o){var a=new Gi(e._pt,t,i,0,1,o?$0:Y0);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},Sm={deg:1,rad:1,turn:1},qv={grid:1,flex:1},dr=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=kr.style,l=Dv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",p,_,m,g;if(n===o||!s||Sm[n]||Sm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,i,"px")),g=e.getCTM&&Q0(e),(f||o==="%")&&(Ns[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],zt(f?s/p*u:s/100*p);if(a[l?"width":"height"]=u+(d?o:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===tr||!_.appendChild)&&(_=tr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===rn.time&&!m.uncache)return zt(s/m.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+n,p=e[h],y?e.style[t]=y:Qr(e,t)}else(f||o==="%")&&!qv[Sn(_,"display")]&&(a.position=Sn(e,"position")),_===e&&(a.position="static"),_.appendChild(kr),p=kr[h],_.removeChild(kr),a.position="absolute";return l&&f&&(m=Xr(_),m.time=rn.time,m.width=_[h]),zt(d?p*s/u:p&&s?u/p*s:0)},Ms=function(e,t,i,n){var s;return vp||qd(),t in Kn&&t!=="transform"&&(t=Kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ns[t]&&t!=="transform"?(s=Al(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Th(Sn(e,Wi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=bh[t]&&bh[t](e,t,i)||Sn(e,t)||m0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?dr(e,t,s,i)+i:s},Yv=function(e,t,i,n){if(!i||i==="none"){var s=pa(t,e,1),o=s&&Sn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Sn(e,"borderTopColor"))}var a=new Gi(this._pt,e.style,t,0,1,W0),l=0,c=0,h,u,d,f,p,_,m,g,y,v,x,E;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Sn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=Sn(e,t)||n,_?e.style[t]=_:Qr(e,t)),h=[i,n],N0(h),i=h[0],n=h[1],d=i.match(Xo)||[],E=n.match(Xo)||[],E.length){for(;u=Xo.exec(n);)m=u[0],y=n.substring(l,u.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Qo(f,m)+x),g=parseFloat(m),v=m.substr((g+"").length),l=Xo.lastIndex-v.length,v||(v=v||ln.units[t]||x,l===n.length&&(n+=v,a.e+=v)),x!==v&&(f=dr(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?$0:Y0;return c0.test(n)&&(a.e=0),this._pt=a,a},bm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$v=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=bm[i]||i,t[1]=bm[n]||n,t.join(" ")},jv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ns[a]&&(l=1,a=a==="transformOrigin"?Wi:Dt),Qr(i,a);l&&(Qr(i,Dt),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Al(i,1),o.uncache=1,j0(n)))}},bh={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new Gi(e._pt,t,i,0,0,jv);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},El=[1,0,0,1,0,0],ex={},tx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tm=function(e){var t=Sn(e,Dt);return tx(t)?El:t.substr(7).match(l0).map(zt)},bp=function(e,t){var i=e._gsap||Xr(e),n=e.style,s=Tm(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?El:s):(s===El&&!e.offsetParent&&e!==ea&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ea.appendChild(e)),s=Tm(e),l?n.display=l:Qr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ea.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yd=function(e,t,i,n,s,o){var a=e._gsap,l=s||bp(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,E=parseFloat(v[1])||0,w,S,R,b;i?l!==El&&(S=f*m-p*_)&&(R=x*(m/S)+E*(-_/S)+(_*y-m*g)/S,b=x*(-p/S)+E*(f/S)-(f*y-p*g)/S,x=R,E=b):(w=J0(e),x=w.x+(~v[0].indexOf("%")?x/100*w.width:x),E=w.y+(~(v[1]||v[0]).indexOf("%")?E/100*w.height:E)),n||n!==!1&&a.smooth?(g=x-c,y=E-h,a.xOffset=u+(g*f+y*_)-g,a.yOffset=d+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[Wi]="0px 0px",o&&(ir(o,a,"xOrigin",c,x),ir(o,a,"yOrigin",h,E),ir(o,a,"xOffset",u,a.xOffset),ir(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},Al=function(e,t){var i=e._gsap||new B0(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Sn(e,Wi)||"0",h,u,d,f,p,_,m,g,y,v,x,E,w,S,R,b,M,P,N,U,G,Y,H,W,z,te,I,oe,Ne,je,K,ne;return h=u=d=_=m=g=y=v=x=0,f=p=1,i.svg=!!(e.getCTM&&Q0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Dt]!=="none"?l[Dt]:"")),n.scale=n.rotate=n.translate="none"),S=bp(e,i.svg),i.svg&&(i.uncache?(z=e.getBBox(),c=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Yd(e,W||c,!!W||i.originIsAbsolute,i.smooth!==!1,S)),E=i.xOrigin||0,w=i.yOrigin||0,S!==El&&(P=S[0],N=S[1],U=S[2],G=S[3],h=Y=S[4],u=H=S[5],S.length===6?(f=Math.sqrt(P*P+N*N),p=Math.sqrt(G*G+U*U),_=P||N?ho(N,P)*Dr:0,y=U||G?ho(U,G)*Dr+_:0,y&&(p*=Math.abs(Math.cos(y*ta))),i.svg&&(h-=E-(E*P+w*U),u-=w-(E*N+w*G))):(ne=S[6],je=S[7],I=S[8],oe=S[9],Ne=S[10],K=S[11],h=S[12],u=S[13],d=S[14],R=ho(ne,Ne),m=R*Dr,R&&(b=Math.cos(-R),M=Math.sin(-R),W=Y*b+I*M,z=H*b+oe*M,te=ne*b+Ne*M,I=Y*-M+I*b,oe=H*-M+oe*b,Ne=ne*-M+Ne*b,K=je*-M+K*b,Y=W,H=z,ne=te),R=ho(-U,Ne),g=R*Dr,R&&(b=Math.cos(-R),M=Math.sin(-R),W=P*b-I*M,z=N*b-oe*M,te=U*b-Ne*M,K=G*M+K*b,P=W,N=z,U=te),R=ho(N,P),_=R*Dr,R&&(b=Math.cos(R),M=Math.sin(R),W=P*b+N*M,z=Y*b+H*M,N=N*b-P*M,H=H*b-Y*M,P=W,Y=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=zt(Math.sqrt(P*P+N*N+U*U)),p=zt(Math.sqrt(H*H+ne*ne)),R=ho(Y,H),y=Math.abs(R)>2e-4?R*Dr:0,x=K?1/(K<0?-K:K):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!tx(Sn(e,Dt)),W&&e.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=zt(f),i.scaleY=zt(p),i.rotation=zt(_)+a,i.rotationX=zt(m)+a,i.rotationY=zt(g)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Wi]=Th(c)),i.xOffset=i.yOffset=0,i.force3D=ln.force3D,i.renderTransform=i.svg?Zv:Z0?ix:Kv,i.uncache=0,i},Th=function(e){return(e=e.split(" "))[0]+" "+e[1]},lu=function(e,t,i){var n=Mi(t);return zt(parseFloat(t)+parseFloat(dr(e,"x",i+"px",n)))+n},Kv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ix(e,t)},vr="0deg",Da="0px",Mr=") ",ix=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,y=i.target,v=i.zOrigin,x="",E=g==="auto"&&e&&e!==1||g===!0;if(v&&(u!==vr||h!==vr)){var w=parseFloat(h)*ta,S=Math.sin(w),R=Math.cos(w),b;w=parseFloat(u)*ta,b=Math.cos(w),o=lu(y,o,S*b*-v),a=lu(y,a,-Math.sin(w)*-v),l=lu(y,l,R*b*-v+v)}m!==Da&&(x+="perspective("+m+Mr),(n||s)&&(x+="translate("+n+"%, "+s+"%) "),(E||o!==Da||a!==Da||l!==Da)&&(x+=l!==Da||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==vr&&(x+="rotate("+c+Mr),h!==vr&&(x+="rotateY("+h+Mr),u!==vr&&(x+="rotateX("+u+Mr),(d!==vr||f!==vr)&&(x+="skew("+d+", "+f+Mr),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Mr),y.style[Dt]=x||"translate(0, 0)"},Zv=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,y=i.forceCSS,v=parseFloat(o),x=parseFloat(a),E,w,S,R,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ta,c*=ta,E=Math.cos(l)*u,w=Math.sin(l)*u,S=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=ta,b=Math.tan(c-h),b=Math.sqrt(1+b*b),S*=b,R*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),E*=b,w*=b)),E=zt(E),w=zt(w),S=zt(S),R=zt(R)):(E=u,R=d,w=S=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=dr(f,"x",o,"px"),x=dr(f,"y",a,"px")),(p||_||m||g)&&(v=zt(v+p-(p*E+_*S)+m),x=zt(x+_-(p*w+_*R)+g)),(n||s)&&(b=f.getBBox(),v=zt(v+n/100*b.width),x=zt(x+s/100*b.height)),b="matrix("+E+","+w+","+S+","+R+","+v+","+x+")",f.setAttribute("transform",b),y&&(f.style[Dt]=b)},Jv=function(e,t,i,n,s){var o=360,a=ui(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Dr:1),c=l-n,h=n+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*xm)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*xm)%o-~~(c/o)*o)),e._pt=d=new Gi(e._pt,t,i,n,c,Fv),d.e=h,d.u="deg",e._props.push(i),d},wm=function(e,t){for(var i in t)e[i]=t[i];return e},Qv=function(e,t,i){var n=wm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,d,f,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Dt]=t,a=Al(i,1),Qr(i,Dt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Dt],o[Dt]=t,a=Al(i,1),o[Dt]=c);for(l in Ns)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Mi(c),p=Mi(h),u=f!==p?dr(i,l,c,p):parseFloat(c),d=parseFloat(h),e._pt=new Gi(e._pt,a,l,u,d-u,Wd),e._pt.u=p||0,e._props.push(l));wm(a,n)};Hi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});bh[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(p){return Ms(a,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var nx={name:"css",register:qd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,c,h,u,d,f,p,_,m,g,y,v,x,E,w,S,R;vp||qd(),this.styles=this.styles||K0(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(tn[_]&&z0(_,t,i,n,e,s)))){if(f=typeof h,p=bh[_],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=bl(h)),p)p(this,e,_,h,i)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ar.lastIndex=0,ar.test(c)||(m=Mi(c),g=Mi(h)),g?m!==g&&(c=dr(e,_,c,g)+g):m&&(h+=m),this.add(a,"setProperty",c,h,n,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,s):l[_],ui(c)&&~c.indexOf("random(")&&(c=bl(c)),Mi(c+"")||c==="auto"||(c+=ln.units[_]||Mi(Ms(e,_))||""),(c+"").charAt(1)==="="&&(c=Ms(e,_))):c=Ms(e,_),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),_ in Kn&&(_==="autoAlpha"&&(d===1&&Ms(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,a.visibility),ir(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ns,v){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=Sn(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(E=e._gsap,E.renderTransform&&!t.parseTransform||Al(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new Gi(this._pt,a,Dt,0,1,E.renderTransform,E,0,-1),x.dep=1),_==="scale")this._pt=new Gi(this._pt,E,"scaleY",E.scaleY,(y?Qo(E.scaleY,y+u):u)-E.scaleY||0,Wd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Wi,0,a[Wi]),h=$v(h),E.svg?Yd(e,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==E.zOrigin&&ir(this,E,"zOrigin",E.zOrigin,g),ir(this,a,_,Th(c),Th(h)));continue}else if(_==="svgOrigin"){Yd(e,h,1,w,0,this);continue}else if(_ in ex){Jv(this,E,_,d,y?Qo(d,y+h):h);continue}else if(_==="smoothOrigin"){ir(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){Qv(this,h,e);continue}}else _ in a||(_=pa(_)||_);if(v||(u||u===0)&&(d||d===0)&&!Nv.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),g=Mi(h)||(_ in ln.units?ln.units[_]:m),m!==g&&(d=dr(e,_,c,g)),this._pt=new Gi(this._pt,v?E:a,_,d,(y?Qo(d,y+u):u)-d,!v&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?Ov:Wd),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Uv);else if(_ in a)Yv.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,n,s);else if(_!=="parseTransform"){hp(_,h);continue}v||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}S&&X0(this)},render:function(e,t){if(t.tween._time||!Mp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ms,aliases:Kn,getSetter:function(e,t,i){var n=Kn[t];return n&&n.indexOf(",")<0&&(t=n),t in Ns&&t!==Wi&&(e._gsap.x||Ms(e,"x"))?i&&_m===i?t==="scale"?Vv:kv:(_m=i||{})&&(t==="scale"?Hv:Gv):e.style&&!ap(e.style[t])?Bv:~t.indexOf("-")?zv:xp(e,t)},core:{_removeProperty:Qr,_getMatrix:bp}};qi.utils.checkPrefix=pa;qi.core.getStyleSaver=K0;(function(r,e,t,i){var n=Hi(r+","+e+","+t,function(s){Ns[s]=1});Hi(e,function(s){ln.units[s]="deg",ex[s]=1}),Kn[n[13]]=r+","+e,Hi(i,function(s){var o=s.split(":");Kn[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});qi.registerPlugin(nx);var Ut=qi.registerPlugin(nx)||qi;Ut.core.Tween;function eM(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function tM(r,e,t){return e&&eM(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fi,nh,on,nr,sr,ia,sx,Nr,cl,rx,ws,Fn,ox,ax=function(){return fi||typeof window<"u"&&(fi=window.gsap)&&fi.registerPlugin&&fi},lx=1,Yo=[],tt=[],es=[],hl=Date.now,$d=function(e,t){return t},iM=function(){var e=cl.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,tt),n.push.apply(n,es),tt=i,es=n,$d=function(o,a){return t[o](a)}},lr=function(e,t){return~es.indexOf(e)&&es[es.indexOf(e)+1][t]},ul=function(e){return!!~rx.indexOf(e)},Ci=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:n!==!1,capture:!!s})},Ai=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},ql="scrollLeft",Yl="scrollTop",jd=function(){return ws&&ws.isPressed||tt.cache++},wh=function(e,t){var i=function n(s){if(s||s===0){lx&&(on.history.scrollRestoration="manual");var o=ws&&ws.isPressed;s=n.v=Math.round(s)||(ws&&ws.iOS?1:0),e(s),n.cacheID=tt.cache,o&&$d("ss",s)}else(t||tt.cache!==n.cacheID||$d("ref"))&&(n.cacheID=tt.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Ui={s:ql,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wh(function(r){return arguments.length?on.scrollTo(r,ii.sc()):on.pageXOffset||nr[ql]||sr[ql]||ia[ql]||0})},ii={s:Yl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ui,sc:wh(function(r){return arguments.length?on.scrollTo(Ui.sc(),r):on.pageYOffset||nr[Yl]||sr[Yl]||ia[Yl]||0})},ki=function(e,t){return(t&&t._ctx&&t._ctx.selector||fi.utils.toArray)(e)[0]||(typeof e=="string"&&fi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},nM=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},fr=function(e,t){var i=t.s,n=t.sc;ul(e)&&(e=nr.scrollingElement||sr);var s=tt.indexOf(e),o=n===ii.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+o]||Ci(e,"scroll",jd);var a=tt[s+o],l=a||(tt[s+o]=wh(lr(e,i),!0)||(ul(e)?n:wh(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=fi.getProperty(e,"scrollBehavior")==="smooth"),l},Kd=function(e,t,i){var n=e,s=e,o=hl(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,_){var m=hl();_||m-o>l?(s=n,n=p,a=o,o=m):i?n+=p:n=s+(p-s)/(m-a)*(o-a)},u=function(){s=n=i?0:n,a=o=0},d=function(p){var _=a,m=s,g=hl();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-_)*1e3};return{update:h,reset:u,getVelocity:d}},Na=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Em=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},cx=function(){cl=fi.core.globals().ScrollTrigger,cl&&cl.core&&iM()},hx=function(e){return fi=e||ax(),!nh&&fi&&typeof document<"u"&&document.body&&(on=window,nr=document,sr=nr.documentElement,ia=nr.body,rx=[on,nr,sr,ia],fi.utils.clamp,ox=fi.core.context||function(){},Nr="onpointerenter"in ia?"pointer":"mouse",sx=kt.isTouch=on.matchMedia&&on.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in on||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fn=kt.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lx=0},500),cx(),nh=1),nh};Ui.op=ii;tt.cache=0;var kt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){nh||hx(fi)||console.warn("Please gsap.registerPlugin(Observer)"),cl||cx();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,u=i.onStop,d=i.onStopDelay,f=i.ignore,p=i.wheelSpeed,_=i.event,m=i.onDragStart,g=i.onDragEnd,y=i.onDrag,v=i.onPress,x=i.onRelease,E=i.onRight,w=i.onLeft,S=i.onUp,R=i.onDown,b=i.onChangeX,M=i.onChangeY,P=i.onChange,N=i.onToggleX,U=i.onToggleY,G=i.onHover,Y=i.onHoverEnd,H=i.onMove,W=i.ignoreCheck,z=i.isNormalizer,te=i.onGestureStart,I=i.onGestureEnd,oe=i.onWheel,Ne=i.onEnable,je=i.onDisable,K=i.onClick,ne=i.scrollSpeed,fe=i.capture,re=i.allowClicks,be=i.lockAxis,ze=i.onLockAxis;this.target=a=ki(a)||sr,this.vars=i,f&&(f=fi.utils.toArray(f)),n=n||1e-9,s=s||0,p=p||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(on.getComputedStyle(ia).lineHeight)||22);var Le,it,Je,ve,L,St,Ve,B=this,Se=0,rt=0,we=i.passive||!h&&i.passive!==!1,C=fr(a,Ui),T=fr(a,ii),k=C(),J=T(),ee=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fn[0]==="pointerdown",Z=ul(a),he=a.ownerDocument||nr,le=[0,0,0],Ee=[0,0,0],Ce=0,se=function(){return Ce=hl()},ae=function(Ae,Ye){return(B.event=Ae)&&f&&nM(Ae.target,f)||Ye&&ee&&Ae.pointerType!=="touch"||W&&W(Ae,Ye)},Fe=function(){B._vx.reset(),B._vy.reset(),it.pause(),u&&u(B)},De=function(){var Ae=B.deltaX=Em(le),Ye=B.deltaY=Em(Ee),pe=Math.abs(Ae)>=n,Ge=Math.abs(Ye)>=n;P&&(pe||Ge)&&P(B,Ae,Ye,le,Ee),pe&&(E&&B.deltaX>0&&E(B),w&&B.deltaX<0&&w(B),b&&b(B),N&&B.deltaX<0!=Se<0&&N(B),Se=B.deltaX,le[0]=le[1]=le[2]=0),Ge&&(R&&B.deltaY>0&&R(B),S&&B.deltaY<0&&S(B),M&&M(B),U&&B.deltaY<0!=rt<0&&U(B),rt=B.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(ve||Je)&&(H&&H(B),Je&&(m&&Je===1&&m(B),y&&y(B),Je=0),ve=!1),St&&!(St=!1)&&ze&&ze(B),L&&(oe(B),L=!1),Le=0},xe=function(Ae,Ye,pe){le[pe]+=Ae,Ee[pe]+=Ye,B._vx.update(Ae),B._vy.update(Ye),c?Le||(Le=requestAnimationFrame(De)):De()},qe=function(Ae,Ye){be&&!Ve&&(B.axis=Ve=Math.abs(Ae)>Math.abs(Ye)?"x":"y",St=!0),Ve!=="y"&&(le[2]+=Ae,B._vx.update(Ae,!0)),Ve!=="x"&&(Ee[2]+=Ye,B._vy.update(Ye,!0)),c?Le||(Le=requestAnimationFrame(De)):De()},Be=function(Ae){if(!ae(Ae,1)){Ae=Na(Ae,h);var Ye=Ae.clientX,pe=Ae.clientY,Ge=Ye-B.x,Re=pe-B.y,He=B.isDragging;B.x=Ye,B.y=pe,(He||(Ge||Re)&&(Math.abs(B.startX-Ye)>=s||Math.abs(B.startY-pe)>=s))&&(Je=He?2:1,He||(B.isDragging=!0),qe(Ge,Re))}},ht=B.onPress=function(_e){ae(_e,1)||_e&&_e.button||(B.axis=Ve=null,it.pause(),B.isPressed=!0,_e=Na(_e),Se=rt=0,B.startX=B.x=_e.clientX,B.startY=B.y=_e.clientY,B._vx.reset(),B._vy.reset(),Ci(z?a:he,Fn[1],Be,we,!0),B.deltaX=B.deltaY=0,v&&v(B))},D=B.onRelease=function(_e){if(!ae(_e,1)){Ai(z?a:he,Fn[1],Be,!0);var Ae=!isNaN(B.y-B.startY),Ye=B.isDragging,pe=Ye&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Ge=Na(_e);!pe&&Ae&&(B._vx.reset(),B._vy.reset(),h&&re&&fi.delayedCall(.08,function(){if(hl()-Ce>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(he.createEvent){var Re=he.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,on,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Re)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,u&&Ye&&!z&&it.restart(!0),Je&&De(),g&&Ye&&g(B),x&&x(B,pe)}},ue=function(Ae){return Ae.touches&&Ae.touches.length>1&&(B.isGesturing=!0)&&te(Ae,B.isDragging)},j=function(){return(B.isGesturing=!1)||I(B)},Q=function(Ae){if(!ae(Ae)){var Ye=C(),pe=T();xe((Ye-k)*ne,(pe-J)*ne,1),k=Ye,J=pe,u&&it.restart(!0)}},ce=function(Ae){if(!ae(Ae)){Ae=Na(Ae,h),oe&&(L=!0);var Ye=(Ae.deltaMode===1?l:Ae.deltaMode===2?on.innerHeight:1)*p;xe(Ae.deltaX*Ye,Ae.deltaY*Ye,0),u&&!z&&it.restart(!0)}},de=function(Ae){if(!ae(Ae)){var Ye=Ae.clientX,pe=Ae.clientY,Ge=Ye-B.x,Re=pe-B.y;B.x=Ye,B.y=pe,ve=!0,u&&it.restart(!0),(Ge||Re)&&qe(Ge,Re)}},ke=function(Ae){B.event=Ae,G(B)},ut=function(Ae){B.event=Ae,Y(B)},Nt=function(Ae){return ae(Ae)||Na(Ae,h)&&K(B)};it=B._dc=fi.delayedCall(d||.25,Fe).pause(),B.deltaX=B.deltaY=0,B._vx=Kd(0,50,!0),B._vy=Kd(0,50,!0),B.scrollX=C,B.scrollY=T,B.isDragging=B.isGesturing=B.isPressed=!1,ox(this),B.enable=function(_e){return B.isEnabled||(Ci(Z?he:a,"scroll",jd),o.indexOf("scroll")>=0&&Ci(Z?he:a,"scroll",Q,we,fe),o.indexOf("wheel")>=0&&Ci(a,"wheel",ce,we,fe),(o.indexOf("touch")>=0&&sx||o.indexOf("pointer")>=0)&&(Ci(a,Fn[0],ht,we,fe),Ci(he,Fn[2],D),Ci(he,Fn[3],D),re&&Ci(a,"click",se,!0,!0),K&&Ci(a,"click",Nt),te&&Ci(he,"gesturestart",ue),I&&Ci(he,"gestureend",j),G&&Ci(a,Nr+"enter",ke),Y&&Ci(a,Nr+"leave",ut),H&&Ci(a,Nr+"move",de)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=ve=Je=!1,B._vx.reset(),B._vy.reset(),k=C(),J=T(),_e&&_e.type&&ht(_e),Ne&&Ne(B)),B},B.disable=function(){B.isEnabled&&(Yo.filter(function(_e){return _e!==B&&ul(_e.target)}).length||Ai(Z?he:a,"scroll",jd),B.isPressed&&(B._vx.reset(),B._vy.reset(),Ai(z?a:he,Fn[1],Be,!0)),Ai(Z?he:a,"scroll",Q,fe),Ai(a,"wheel",ce,fe),Ai(a,Fn[0],ht,fe),Ai(he,Fn[2],D),Ai(he,Fn[3],D),Ai(a,"click",se,!0),Ai(a,"click",Nt),Ai(he,"gesturestart",ue),Ai(he,"gestureend",j),Ai(a,Nr+"enter",ke),Ai(a,Nr+"leave",ut),Ai(a,Nr+"move",de),B.isEnabled=B.isPressed=B.isDragging=!1,je&&je(B))},B.kill=B.revert=function(){B.disable();var _e=Yo.indexOf(B);_e>=0&&Yo.splice(_e,1),ws===B&&(ws=0)},Yo.push(B),z&&ul(a)&&(ws=B),B.enable(_)},tM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();kt.version="3.13.0";kt.create=function(r){return new kt(r)};kt.register=hx;kt.getAll=function(){return Yo.slice()};kt.getById=function(r){return Yo.filter(function(e){return e.vars.id===r})[0]};ax()&&fi.registerPlugin(kt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Te,Vo,et,At,sn,xt,Tp,Eh,Rl,dl,Qa,$l,yi,Xh,Zd,Li,Am,Rm,Ho,ux,cu,dx,Ii,Jd,fx,px,Js,Qd,wp,na,Ep,Ah,ef,hu,jl=1,vi=Date.now,uu=vi(),Tn=0,el=0,Cm=function(e,t,i){var n=en(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},Pm=function(e,t){return t&&(!en(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},sM=function r(){return el&&requestAnimationFrame(r)},Im=function(){return Xh=1},Lm=function(){return Xh=0},qn=function(e){return e},tl=function(e){return Math.round(e*1e5)/1e5||0},mx=function(){return typeof window<"u"},gx=function(){return Te||mx()&&(Te=window.gsap)&&Te.registerPlugin&&Te},eo=function(e){return!!~Tp.indexOf(e)},_x=function(e){return(e==="Height"?Ep:et["inner"+e])||sn["client"+e]||xt["client"+e]},xx=function(e){return lr(e,"getBoundingClientRect")||(eo(e)?function(){return lh.width=et.innerWidth,lh.height=Ep,lh}:function(){return Ss(e)})},rM=function(e,t,i){var n=i.d,s=i.d2,o=i.a;return(o=lr(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?_x(s):e["client"+s])||0}},oM=function(e,t){return!t||~es.indexOf(e)?xx(e):function(){return lh}},Zn=function(e,t){var i=t.s,n=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=lr(e,i))?o()-xx(e)()[s]:eo(e)?(sn[i]||xt[i])-_x(n):e[i]-e["offset"+n])},Kl=function(e,t){for(var i=0;i<Ho.length;i+=3)(!t||~t.indexOf(Ho[i+1]))&&e(Ho[i],Ho[i+1],Ho[i+2])},en=function(e){return typeof e=="string"},Si=function(e){return typeof e=="function"},il=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},Fa=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},du=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},uo=Math.abs,yx="left",vx="top",Ap="right",Rp="bottom",jr="width",Kr="height",fl="Right",pl="Left",ml="Top",gl="Bottom",qt="padding",yn="margin",ma="Width",Cp="Height",ti="px",vn=function(e){return et.getComputedStyle(e)},aM=function(e){var t=vn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Dm=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ss=function(e,t){var i=t&&vn(e)[Zd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return i&&i.progress(0).kill(),n},Rh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Mx=function(e){var t=[],i=e.labels,n=e.duration(),s;for(s in i)t.push(i[s]/n);return t},lM=function(e){return function(t){return Te.utils.snap(Mx(e),t)}},Pp=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return t(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=t(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:t(s<0?n-e:n+e)}},cM=function(e){return function(t,i){return Pp(Mx(e))(t,i.direction)}},Zl=function(e,t,i,n){return i.split(",").forEach(function(s){return e(t,s,n)})},hi=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},ci=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Jl=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Nm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ql={toggleActions:"play",anticipatePin:0},Ch={top:0,left:0,center:.5,bottom:1,right:1},sh=function(e,t){if(en(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in Ch?Ch[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ec=function(e,t,i,n,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,p=At.createElement("div"),_=eo(i)||lr(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=_?xt:i,y=e.indexOf("start")!==-1,v=y?c:h,x="border-color:"+v+";font-size:"+u+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(n===ii?Ap:Rp)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],rh(p,0,n,y),p},rh=function(e,t,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+ma]=1,s["border"+a+ma]=0,s[i.p]=t+"px",Te.set(e,s)},Ke=[],tf={},Cl,Fm=function(){return vi()-Tn>34&&(Cl||(Cl=requestAnimationFrame(Cs)))},fo=function(){(!Ii||!Ii.isPressed||Ii.startX>xt.clientWidth)&&(tt.cache++,Ii?Cl||(Cl=requestAnimationFrame(Cs)):Cs(),Tn||io("scrollStart"),Tn=vi())},fu=function(){px=et.innerWidth,fx=et.innerHeight},nl=function(e){tt.cache++,(e===!0||!yi&&!dx&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!Jd||px!==et.innerWidth||Math.abs(et.innerHeight-fx)>et.innerHeight*.25))&&Eh.restart(!0)},to={},hM=[],Sx=function r(){return ci(Xe,"scrollEnd",r)||Vr(!0)},io=function(e){return to[e]&&to[e].map(function(t){return t()})||hM},Qi=[],bx=function(e){for(var t=0;t<Qi.length;t+=5)(!e||Qi[t+4]&&Qi[t+4].query===e)&&(Qi[t].style.cssText=Qi[t+1],Qi[t].getBBox&&Qi[t].setAttribute("transform",Qi[t+2]||""),Qi[t+3].uncache=1)},Ip=function(e,t){var i;for(Li=0;Li<Ke.length;Li++)i=Ke[Li],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Ah=!0,t&&bx(t),t||io("revert")},Tx=function(e,t){tt.cache++,(t||!Di)&&tt.forEach(function(i){return Si(i)&&i.cacheID++&&(i.rec=0)}),en(e)&&(et.history.scrollRestoration=wp=e)},Di,Zr=0,Um,uM=function(){if(Um!==Zr){var e=Um=Zr;requestAnimationFrame(function(){return e===Zr&&Vr(!0)})}},wx=function(){xt.appendChild(na),Ep=!Ii&&na.offsetHeight||et.innerHeight,xt.removeChild(na)},Om=function(e){return Rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Vr=function(e,t){if(sn=At.documentElement,xt=At.body,Tp=[et,At,sn,xt],Tn&&!e&&!Ah){hi(Xe,"scrollEnd",Sx);return}wx(),Di=Xe.isRefreshing=!0,tt.forEach(function(n){return Si(n)&&++n.cacheID&&(n.rec=n())});var i=io("refreshInit");ux&&Xe.sort(),t||Ip(),tt.forEach(function(n){Si(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),Ke.slice(0).forEach(function(n){return n.refresh()}),Ah=!1,Ke.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),ef=1,Om(!0),Ke.forEach(function(n){var s=Zn(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),Om(!1),ef=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),tt.forEach(function(n){Si(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Tx(wp,1),Eh.pause(),Zr++,Di=2,Cs(2),Ke.forEach(function(n){return Si(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Di=Xe.isRefreshing=!1,io("refresh")},nf=0,oh=1,_l,Cs=function(e){if(e===2||!Di&&!Ah){Xe.isUpdating=!0,_l&&_l.update(0);var t=Ke.length,i=vi(),n=i-uu>=50,s=t&&Ke[0].scroll();if(oh=nf>s?-1:1,Di||(nf=s),n&&(Tn&&!Xh&&i-Tn>200&&(Tn=0,io("scrollEnd")),Qa=uu,uu=i),oh<0){for(Li=t;Li-- >0;)Ke[Li]&&Ke[Li].update(0,n);oh=1}else for(Li=0;Li<t;Li++)Ke[Li]&&Ke[Li].update(0,n);Xe.isUpdating=!1}Cl=0},sf=[yx,vx,Rp,Ap,yn+gl,yn+fl,yn+ml,yn+pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ah=sf.concat([jr,Kr,"boxSizing","max"+ma,"max"+Cp,"position",yn,qt,qt+ml,qt+fl,qt+gl,qt+pl]),dM=function(e,t,i){sa(i);var n=e._gsap;if(n.spacerIsNative)sa(n.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},pu=function(e,t,i,n){if(!e._gsap.swappedIn){for(var s=sf.length,o=t.style,a=e.style,l;s--;)l=sf[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Rp]=a[Ap]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jr]=Rh(e,Ui)+ti,o[Kr]=Rh(e,ii)+ti,o[qt]=a[yn]=a[vx]=a[yx]="0",sa(n),a[jr]=a["max"+ma]=i[jr],a[Kr]=a["max"+Cp]=i[Kr],a[qt]=i[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fM=/([A-Z])/g,sa=function(e){if(e){var t=e.t.style,i=e.length,n=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],s=e[n],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fM,"-$1").toLowerCase())}},tc=function(e){for(var t=ah.length,i=e.style,n=[],s=0;s<t;s++)n.push(ah[s],i[ah[s]]);return n.t=e,n},pM=function(e,t,i){for(var n=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},lh={left:0,top:0},Bm=function(e,t,i,n,s,o,a,l,c,h,u,d,f,p){Si(e)&&(e=e(l)),en(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?sh("0"+e.substr(3),i):0));var _=f?f.time():0,m,g,y;if(f&&f.seek(0),isNaN(e)||(e=+e),il(e))f&&(e=Te.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&rh(a,i,n,!0);else{Si(t)&&(t=t(l));var v=(e||"0").split(" "),x,E,w,S;y=ki(t,l)||xt,x=Ss(y)||{},(!x||!x.left&&!x.top)&&vn(y).display==="none"&&(S=y.style.display,y.style.display="block",x=Ss(y),S?y.style.display=S:y.style.removeProperty("display")),E=sh(v[0],x[n.d]),w=sh(v[1]||"0",i),e=x[n.p]-c[n.p]-h+E+s-w,a&&rh(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var R=e+i,b=o._isStart;m="scroll"+n.d2,rh(o,R,n,b&&R>20||!b&&(u?Math.max(xt[m],sn[m]):o.parentNode[m])<=R+1),u&&(c=Ss(a),u&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+ti))}return f&&y&&(m=Ss(y),f.seek(d),g=Ss(y),f._caScrollDist=m[n.p]-g[n.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},mM=/(webkit|moz|length|cssText|inset)/i,zm=function(e,t,i,n){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=vn(e);for(o in a)!+o&&!mM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},Ex=function(e,t,i){var n=t,s=n;return function(o){var a=Math.round(e());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},ic=function(e,t,i){var n={};n[t.p]="+="+i,Te.set(e,n)},km=function(e,t){var i=fr(e,t),n="_scroll"+t.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,p={};c=c||i();var _=Ex(i,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return _(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&Cs()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Te.to(e,l),d};return e[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hi(e,"wheel",i.wheelHandler),Xe.isTouch&&hi(e,"touchmove",i.wheelHandler),s},Xe=function(){function r(t,i){Vo||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qd(this),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!el){this.update=this.refresh=this.kill=qn;return}i=Dm(en(i)||il(i)||i.nodeType?{trigger:i}:i,Ql);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,v=s.once,x=s.snap,E=s.pinReparent,w=s.pinSpacer,S=s.containerAnimation,R=s.fastScrollEnd,b=s.preventOverlaps,M=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ui:ii,P=!u&&u!==0,N=ki(i.scroller||et),U=Te.core.getCache(N),G=eo(N),Y=("pinType"in i?i.pinType:lr(N,"pinType")||G&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],W=P&&i.toggleActions.split(" "),z="markers"in i?i.markers:Ql.markers,te=G?0:parseFloat(vn(N)["border"+M.p2+ma])||0,I=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(I)},Ne=rM(N,G,M),je=oM(N,G),K=0,ne=0,fe=0,re=fr(N,M),be,ze,Le,it,Je,ve,L,St,Ve,B,Se,rt,we,C,T,k,J,ee,Z,he,le,Ee,Ce,se,ae,Fe,De,xe,qe,Be,ht,D,ue,j,Q,ce,de,ke,ut;if(I._startClamp=I._endClamp=!1,I._dir=M,m*=45,I.scroller=N,I.scroll=S?S.time.bind(S):re,it=re(),I.vars=i,n=n||i.animation,"refreshPriority"in i&&(ux=1,i.refreshPriority===-9999&&(_l=I)),U.tweenScroll=U.tweenScroll||{top:km(N,ii),left:km(N,Ui)},I.tweenTo=be=U.tweenScroll[M.p],I.scrubDuration=function(pe){ue=il(pe)&&pe,ue?D?D.duration(pe):D=Te.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return g&&g(I)}}):(D&&D.progress(1).kill(),D=0)},n&&(n.vars.lazy=!1,n._initted&&!I.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),I.animation=n.pause(),n.scrollTrigger=I,I.scrubDuration(u),Be=0,l||(l=n.vars.id)),x&&((!Fr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xt.style&&Te.set(G?[xt,sn]:N,{scrollBehavior:"auto"}),tt.forEach(function(pe){return Si(pe)&&pe.target===(G?At.scrollingElement||sn:N)&&(pe.smooth=!1)}),Le=Si(x.snapTo)?x.snapTo:x.snapTo==="labels"?lM(n):x.snapTo==="labelsDirectional"?cM(n):x.directional!==!1?function(pe,Ge){return Pp(x.snapTo)(pe,vi()-ne<500?0:Ge.direction)}:Te.utils.snap(x.snapTo),j=x.duration||{min:.1,max:2},j=Fr(j)?dl(j.min,j.max):dl(j,j),Q=Te.delayedCall(x.delay||ue/2||.1,function(){var pe=re(),Ge=vi()-ne<500,Re=be.tween;if((Ge||Math.abs(I.getVelocity())<10)&&!Re&&!Xh&&K!==pe){var He=(pe-ve)/C,Bt=n&&!P?n.totalProgress():He,Qe=Ge?0:(Bt-ht)/(vi()-Qa)*1e3||0,Et=Te.utils.clamp(-He,1-He,uo(Qe/2)*Qe/.185),Jt=He+(x.inertia===!1?0:Et),bt,Tt,mt=x,Yi=mt.onStart,Rt=mt.onInterrupt,wi=mt.onComplete;if(bt=Le(Jt,I),il(bt)||(bt=Jt),Tt=Math.max(0,Math.round(ve+bt*C)),pe<=L&&pe>=ve&&Tt!==pe){if(Re&&!Re._initted&&Re.data<=uo(Tt-pe))return;x.inertia===!1&&(Et=bt-He),be(Tt,{duration:j(uo(Math.max(uo(Jt-Bt),uo(bt-Bt))*.185/Qe/.05||0)),ease:x.ease||"power3",data:uo(Tt-pe),onInterrupt:function(){return Q.restart(!0)&&Rt&&Rt(I)},onComplete:function(){I.update(),K=re(),n&&!P&&(D?D.resetTo("totalProgress",bt,n._tTime/n._tDur):n.progress(bt)),Be=ht=n&&!P?n.totalProgress():I.progress,y&&y(I),wi&&wi(I)}},pe,Et*C,Tt-pe-Et*C),Yi&&Yi(I,be.tween)}}else I.isActive&&K!==pe&&Q.restart(!0)}).pause()),l&&(tf[l]=I),d=I.trigger=ki(d||f!==!0&&f),ut=d&&d._gsap&&d._gsap.stRevert,ut&&(ut=ut(I)),f=f===!0?d:ki(f),en(a)&&(a={targets:d,className:a}),f&&(p===!1||p===yn||(p=!p&&f.parentNode&&f.parentNode.style&&vn(f.parentNode).display==="flex"?!1:qt),I.pin=f,ze=Te.core.getCache(f),ze.spacer?T=ze.pinState:(w&&(w=ki(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ze.spacerIsNative=!!w,w&&(ze.spacerState=tc(w))),ze.spacer=ee=w||At.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),ze.pinState=T=tc(f)),i.force3D!==!1&&Te.set(f,{force3D:!0}),I.spacer=ee=ze.spacer,qe=vn(f),se=qe[p+M.os2],he=Te.getProperty(f),le=Te.quickSetter(f,M.a,ti),pu(f,ee,qe),J=tc(f)),z){rt=Fr(z)?Dm(z,Nm):Nm,B=ec("scroller-start",l,N,M,rt,0),Se=ec("scroller-end",l,N,M,rt,0,B),Z=B["offset"+M.op.d2];var Nt=ki(lr(N,"content")||N);St=this.markerStart=ec("start",l,Nt,M,rt,Z,0,S),Ve=this.markerEnd=ec("end",l,Nt,M,rt,Z,0,S),S&&(ke=Te.quickSetter([St,Ve],M.a,ti)),!Y&&!(es.length&&lr(N,"fixedMarkers")===!0)&&(aM(G?xt:N),Te.set([B,Se],{force3D:!0}),Fe=Te.quickSetter(B,M.a,ti),xe=Te.quickSetter(Se,M.a,ti))}if(S){var _e=S.vars.onUpdate,Ae=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){I.update(0,0,1),_e&&_e.apply(S,Ae||[])})}if(I.previous=function(){return Ke[Ke.indexOf(I)-1]},I.next=function(){return Ke[Ke.indexOf(I)+1]},I.revert=function(pe,Ge){if(!Ge)return I.kill(!0);var Re=pe!==!1||!I.enabled,He=yi;Re!==I.isReverted&&(Re&&(ce=Math.max(re(),I.scroll.rec||0),fe=I.progress,de=n&&n.progress()),St&&[St,Ve,B,Se].forEach(function(Bt){return Bt.style.display=Re?"none":"block"}),Re&&(yi=I,I.update(Re)),f&&(!E||!I.isActive)&&(Re?dM(f,ee,T):pu(f,ee,vn(f),ae)),Re||I.update(Re),yi=He,I.isReverted=Re)},I.refresh=function(pe,Ge,Re,He){if(!((yi||!I.enabled)&&!Ge)){if(f&&pe&&Tn){hi(r,"scrollEnd",Sx);return}!Di&&oe&&oe(I),yi=I,be.tween&&!Re&&(be.tween.kill(),be.tween=0),D&&D.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(We){return We.vars.immediateRender&&We.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Bt=Ne(),Qe=je(),Et=S?S.duration():Zn(N,M),Jt=C<=.01||!C,bt=0,Tt=He||0,mt=Fr(Re)?Re.end:i.end,Yi=i.endTrigger||d,Rt=Fr(Re)?Re.start:i.start||(i.start===0||!d?0:f?"0 0":"0 100%"),wi=I.pinnedContainer=i.pinnedContainer&&ki(i.pinnedContainer,I),dn=d&&Math.max(0,Ke.indexOf(I))||0,Qt=dn,ei,A,O,X,V,F,ie,me,Me,ye,Ie,Ue,Pe;for(z&&Fr(Re)&&(Ue=Te.getProperty(B,M.p),Pe=Te.getProperty(Se,M.p));Qt-- >0;)F=Ke[Qt],F.end||F.refresh(0,1)||(yi=I),ie=F.pin,ie&&(ie===d||ie===f||ie===wi)&&!F.isReverted&&(ye||(ye=[]),ye.unshift(F),F.revert(!0,!0)),F!==Ke[Qt]&&(dn--,Qt--);for(Si(Rt)&&(Rt=Rt(I)),Rt=Cm(Rt,"start",I),ve=Bm(Rt,d,Bt,M,re(),St,B,I,Qe,te,Y,Et,S,I._startClamp&&"_startClamp")||(f?-.001:0),Si(mt)&&(mt=mt(I)),en(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(en(Rt)?Rt.split(" ")[0]:"")+mt:(bt=sh(mt.substr(2),Bt),mt=en(Rt)?Rt:(S?Te.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,ve):ve)+bt,Yi=d)),mt=Cm(mt,"end",I),L=Math.max(ve,Bm(mt||(Yi?"100% 0":Et),Yi,Bt,M,re()+bt,Ve,Se,I,Qe,te,Y,Et,S,I._endClamp&&"_endClamp"))||-.001,bt=0,Qt=dn;Qt--;)F=Ke[Qt],ie=F.pin,ie&&F.start-F._pinPush<=ve&&!S&&F.end>0&&(ei=F.end-(I._startClamp?Math.max(0,F.start):F.start),(ie===d&&F.start-F._pinPush<ve||ie===wi)&&isNaN(Rt)&&(bt+=ei*(1-F.progress)),ie===f&&(Tt+=ei));if(ve+=bt,L+=bt,I._startClamp&&(I._startClamp+=bt),I._endClamp&&!Di&&(I._endClamp=L||-.001,L=Math.min(L,Zn(N,M))),C=L-ve||(ve-=.01)&&.001,Jt&&(fe=Te.utils.clamp(0,1,Te.utils.normalize(ve,L,ce))),I._pinPush=Tt,St&&bt&&(ei={},ei[M.a]="+="+bt,wi&&(ei[M.p]="-="+re()),Te.set([St,Ve],ei)),f&&!(ef&&I.end>=Zn(N,M)))ei=vn(f),X=M===ii,O=re(),Ee=parseFloat(he(M.a))+Tt,!Et&&L>1&&(Ie=(G?At.scrollingElement||sn:N).style,Ie={style:Ie,value:Ie["overflow"+M.a.toUpperCase()]},G&&vn(xt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Ie.style["overflow"+M.a.toUpperCase()]="scroll")),pu(f,ee,ei),J=tc(f),A=Ss(f,!0),me=Y&&fr(N,X?Ui:ii)(),p?(ae=[p+M.os2,C+Tt+ti],ae.t=ee,Qt=p===qt?Rh(f,M)+C+Tt:0,Qt&&(ae.push(M.d,Qt+ti),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=Qt+ti)),sa(ae),wi&&Ke.forEach(function(We){We.pin===wi&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),Y&&re(ce)):(Qt=Rh(f,M),Qt&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=Qt+ti)),Y&&(V={top:A.top+(X?O-ve:me)+ti,left:A.left+(X?me:O-ve)+ti,boxSizing:"border-box",position:"fixed"},V[jr]=V["max"+ma]=Math.ceil(A.width)+ti,V[Kr]=V["max"+Cp]=Math.ceil(A.height)+ti,V[yn]=V[yn+ml]=V[yn+fl]=V[yn+gl]=V[yn+pl]="0",V[qt]=ei[qt],V[qt+ml]=ei[qt+ml],V[qt+fl]=ei[qt+fl],V[qt+gl]=ei[qt+gl],V[qt+pl]=ei[qt+pl],k=pM(T,V,E),Di&&re(0)),n?(Me=n._initted,cu(1),n.render(n.duration(),!0,!0),Ce=he(M.a)-Ee+C+Tt,De=Math.abs(C-Ce)>1,Y&&De&&k.splice(k.length-2,2),n.render(0,!0,!0),Me||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),cu(0)):Ce=C,Ie&&(Ie.value?Ie.style["overflow"+M.a.toUpperCase()]=Ie.value:Ie.style.removeProperty("overflow-"+M.a));else if(d&&re()&&!S)for(A=d.parentNode;A&&A!==xt;)A._pinOffset&&(ve-=A._pinOffset,L-=A._pinOffset),A=A.parentNode;ye&&ye.forEach(function(We){return We.revert(!1,!0)}),I.start=ve,I.end=L,it=Je=Di?ce:re(),!S&&!Di&&(it<ce&&re(ce),I.scroll.rec=0),I.revert(!1,!0),ne=vi(),Q&&(K=-1,Q.restart(!0)),yi=0,n&&P&&(n._initted||de)&&n.progress()!==de&&n.progress(de||0,!0).render(n.time(),!0,!0),(Jt||fe!==I.progress||S||_||n&&!n._initted)&&(n&&!P&&(n._initted||fe||n.vars.immediateRender!==!1)&&n.totalProgress(S&&ve<-.001&&!fe?Te.utils.normalize(ve,L,0):fe,!0),I.progress=Jt||(it-ve)/C===fe?0:fe),f&&p&&(ee._pinOffset=Math.round(I.progress*Ce)),D&&D.invalidate(),isNaN(Ue)||(Ue-=Te.getProperty(B,M.p),Pe-=Te.getProperty(Se,M.p),ic(B,M,Ue),ic(St,M,Ue-(He||0)),ic(Se,M,Pe),ic(Ve,M,Pe-(He||0))),Jt&&!Di&&I.update(),h&&!Di&&!we&&(we=!0,h(I),we=!1)}},I.getVelocity=function(){return(re()-Je)/(vi()-Qa)*1e3||0},I.endAnimation=function(){Fa(I.callbackAnimation),n&&(D?D.progress(1):n.paused()?P||Fa(n,I.direction<0,1):Fa(n,n.reversed()))},I.labelToScroll=function(pe){return n&&n.labels&&(ve||I.refresh()||ve)+n.labels[pe]/n.duration()*C||0},I.getTrailing=function(pe){var Ge=Ke.indexOf(I),Re=I.direction>0?Ke.slice(0,Ge).reverse():Ke.slice(Ge+1);return(en(pe)?Re.filter(function(He){return He.vars.preventOverlaps===pe}):Re).filter(function(He){return I.direction>0?He.end<=ve:He.start>=L})},I.update=function(pe,Ge,Re){if(!(S&&!Re&&!pe)){var He=Di===!0?ce:I.scroll(),Bt=pe?0:(He-ve)/C,Qe=Bt<0?0:Bt>1?1:Bt||0,Et=I.progress,Jt,bt,Tt,mt,Yi,Rt,wi,dn;if(Ge&&(Je=it,it=S?re():He,x&&(ht=Be,Be=n&&!P?n.totalProgress():Qe)),m&&f&&!yi&&!jl&&Tn&&(!Qe&&ve<He+(He-Je)/(vi()-Qa)*m?Qe=1e-4:Qe===1&&L>He+(He-Je)/(vi()-Qa)*m&&(Qe=.9999)),Qe!==Et&&I.enabled){if(Jt=I.isActive=!!Qe&&Qe<1,bt=!!Et&&Et<1,Rt=Jt!==bt,Yi=Rt||!!Qe!=!!Et,I.direction=Qe>Et?1:-1,I.progress=Qe,Yi&&!yi&&(Tt=Qe&&!Et?0:Qe===1?1:Et===1?2:3,P&&(mt=!Rt&&W[Tt+1]!=="none"&&W[Tt+1]||W[Tt],dn=n&&(mt==="complete"||mt==="reset"||mt in n))),b&&(Rt||dn)&&(dn||u||!n)&&(Si(b)?b(I):I.getTrailing(b).forEach(function(O){return O.endAnimation()})),P||(D&&!yi&&!jl?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",Qe,n._tTime/n._tDur):(D.vars.totalProgress=Qe,D.invalidate().restart())):n&&n.totalProgress(Qe,!!(yi&&(ne||pe)))),f){if(pe&&p&&(ee.style[p+M.os2]=se),!Y)le(tl(Ee+Ce*Qe));else if(Yi){if(wi=!pe&&Qe>Et&&L+1>He&&He+1>=Zn(N,M),E)if(!pe&&(Jt||wi)){var Qt=Ss(f,!0),ei=He-ve;zm(f,xt,Qt.top+(M===ii?ei:0)+ti,Qt.left+(M===ii?0:ei)+ti)}else zm(f,ee);sa(Jt||wi?k:J),De&&Qe<1&&Jt||le(Ee+(Qe===1&&!wi?Ce:0))}}x&&!be.tween&&!yi&&!jl&&Q.restart(!0),a&&(Rt||v&&Qe&&(Qe<1||!hu))&&Rl(a.targets).forEach(function(O){return O.classList[Jt||v?"add":"remove"](a.className)}),o&&!P&&!pe&&o(I),Yi&&!yi?(P&&(dn&&(mt==="complete"?n.pause().totalProgress(1):mt==="reset"?n.restart(!0).pause():mt==="restart"?n.restart(!0):n[mt]()),o&&o(I)),(Rt||!hu)&&(c&&Rt&&du(I,c),H[Tt]&&du(I,H[Tt]),v&&(Qe===1?I.kill(!1,1):H[Tt]=0),Rt||(Tt=Qe===1?1:3,H[Tt]&&du(I,H[Tt]))),R&&!Jt&&Math.abs(I.getVelocity())>(il(R)?R:2500)&&(Fa(I.callbackAnimation),D?D.progress(1):Fa(n,mt==="reverse"?1:!Qe,1))):P&&o&&!yi&&o(I)}if(xe){var A=S?He/S.duration()*(S._caScrollDist||0):He;Fe(A+(B._isFlipped?1:0)),xe(A)}ke&&ke(-He/S.duration()*(S._caScrollDist||0))}},I.enable=function(pe,Ge){I.enabled||(I.enabled=!0,hi(N,"resize",nl),G||hi(N,"scroll",fo),oe&&hi(r,"refreshInit",oe),pe!==!1&&(I.progress=fe=0,it=Je=K=re()),Ge!==!1&&I.refresh())},I.getTween=function(pe){return pe&&be?be.tween:D},I.setPositions=function(pe,Ge,Re,He){if(S){var Bt=S.scrollTrigger,Qe=S.duration(),Et=Bt.end-Bt.start;pe=Bt.start+Et*pe/Qe,Ge=Bt.start+Et*Ge/Qe}I.refresh(!1,!1,{start:Pm(pe,Re&&!!I._startClamp),end:Pm(Ge,Re&&!!I._endClamp)},He),I.update()},I.adjustPinSpacing=function(pe){if(ae&&pe){var Ge=ae.indexOf(M.d)+1;ae[Ge]=parseFloat(ae[Ge])+pe+ti,ae[1]=parseFloat(ae[1])+pe+ti,sa(ae)}},I.disable=function(pe,Ge){if(I.enabled&&(pe!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Ge||D&&D.pause(),ce=0,ze&&(ze.uncache=1),oe&&ci(r,"refreshInit",oe),Q&&(Q.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!G)){for(var Re=Ke.length;Re--;)if(Ke[Re].scroller===N&&Ke[Re]!==I)return;ci(N,"resize",nl),G||ci(N,"scroll",fo)}},I.kill=function(pe,Ge){I.disable(pe,Ge),D&&!Ge&&D.kill(),l&&delete tf[l];var Re=Ke.indexOf(I);Re>=0&&Ke.splice(Re,1),Re===Li&&oh>0&&Li--,Re=0,Ke.forEach(function(He){return He.scroller===I.scroller&&(Re=1)}),Re||Di||(I.scroll.rec=0),n&&(n.scrollTrigger=null,pe&&n.revert({kill:!1}),Ge||n.kill()),St&&[St,Ve,B,Se].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),_l===I&&(_l=0),f&&(ze&&(ze.uncache=1),Re=0,Ke.forEach(function(He){return He.pin===f&&Re++}),Re||(ze.spacer=0)),i.onKill&&i.onKill(I)},Ke.push(I),I.enable(!1,!1),ut&&ut(I),n&&n.add&&!C){var Ye=I.update;I.update=function(){I.update=Ye,tt.cache++,ve||L||I.refresh()},Te.delayedCall(.01,I.update),C=.01,ve=L=0}else I.refresh();f&&uM()},r.register=function(i){return Vo||(Te=i||gx(),mx()&&window.document&&r.enable(),Vo=el),Vo},r.defaults=function(i){if(i)for(var n in i)Ql[n]=i[n];return Ql},r.disable=function(i,n){el=0,Ke.forEach(function(o){return o[n?"kill":"disable"](i)}),ci(et,"wheel",fo),ci(At,"scroll",fo),clearInterval($l),ci(At,"touchcancel",qn),ci(xt,"touchstart",qn),Zl(ci,At,"pointerdown,touchstart,mousedown",Im),Zl(ci,At,"pointerup,touchend,mouseup",Lm),Eh.kill(),Kl(ci);for(var s=0;s<tt.length;s+=3)Jl(ci,tt[s],tt[s+1]),Jl(ci,tt[s],tt[s+2])},r.enable=function(){if(et=window,At=document,sn=At.documentElement,xt=At.body,Te&&(Rl=Te.utils.toArray,dl=Te.utils.clamp,Qd=Te.core.context||qn,cu=Te.core.suppressOverwrites||qn,wp=et.history.scrollRestoration||"auto",nf=et.pageYOffset||0,Te.core.globals("ScrollTrigger",r),xt)){el=1,na=document.createElement("div"),na.style.height="100vh",na.style.position="absolute",wx(),sM(),kt.register(Te),r.isTouch=kt.isTouch,Js=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jd=kt.isTouch===1,hi(et,"wheel",fo),Tp=[et,At,sn,xt],Te.matchMedia?(r.matchMedia=function(c){var h=Te.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Te.addEventListener("matchMediaInit",function(){return Ip()}),Te.addEventListener("matchMediaRevert",function(){return bx()}),Te.addEventListener("matchMedia",function(){Vr(0,1),io("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return fu(),fu})):console.warn("Requires GSAP 3.11.0 or later"),fu(),hi(At,"scroll",fo);var i=xt.hasAttribute("style"),n=xt.style,s=n.borderTopStyle,o=Te.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ss(xt),ii.m=Math.round(a.top+ii.sc())||0,Ui.m=Math.round(a.left+Ui.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),$l=setInterval(Fm,250),Te.delayedCall(.5,function(){return jl=0}),hi(At,"touchcancel",qn),hi(xt,"touchstart",qn),Zl(hi,At,"pointerdown,touchstart,mousedown",Im),Zl(hi,At,"pointerup,touchend,mouseup",Lm),Zd=Te.utils.checkPrefix("transform"),ah.push(Zd),Vo=vi(),Eh=Te.delayedCall(.2,Vr).pause(),Ho=[At,"visibilitychange",function(){var c=et.innerWidth,h=et.innerHeight;At.hidden?(Am=c,Rm=h):(Am!==c||Rm!==h)&&nl()},At,"DOMContentLoaded",Vr,et,"load",Vr,et,"resize",nl],Kl(hi),Ke.forEach(function(c){return c.enable(0,1)}),l=0;l<tt.length;l+=3)Jl(ci,tt[l],tt[l+1]),Jl(ci,tt[l],tt[l+2])}},r.config=function(i){"limitCallbacks"in i&&(hu=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval($l)||($l=n)&&setInterval(Fm,n),"ignoreMobileResize"in i&&(Jd=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Kl(ci)||Kl(hi,i.autoRefreshEvents||"none"),dx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=ki(i),o=tt.indexOf(s),a=eo(s);~o&&tt.splice(o,a?6:2),n&&(a?es.unshift(et,n,xt,n,sn,n):es.unshift(s,n))},r.clearMatchMedia=function(i){Ke.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(en(i)?ki(i):i).getBoundingClientRect(),a=o[s?jr:Kr]*n||0;return s?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},r.positionInViewport=function(i,n,s){en(i)&&(i=ki(i));var o=i.getBoundingClientRect(),a=o[s?jr:Kr],l=n==null?a/2:n in Ch?Ch[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},r.killAll=function(i){if(Ke.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=to.killAll||[];to={},n.forEach(function(s){return s()})}},r}();Xe.version="3.13.0";Xe.saveStyles=function(r){return r?Rl(r).forEach(function(e){if(e&&e.style){var t=Qi.indexOf(e);t>=0&&Qi.splice(t,5),Qi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),Qd())}}):Qi};Xe.revert=function(r,e){return Ip(!r,e)};Xe.create=function(r,e){return new Xe(r,e)};Xe.refresh=function(r){return r?nl(!0):(Vo||Xe.register())&&Vr(!0)};Xe.update=function(r){return++tt.cache&&Cs(r===!0?2:0)};Xe.clearScrollMemory=Tx;Xe.maxScroll=function(r,e){return Zn(r,e?Ui:ii)};Xe.getScrollFunc=function(r,e){return fr(ki(r),e?Ui:ii)};Xe.getById=function(r){return tf[r]};Xe.getAll=function(){return Ke.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!Tn};Xe.snapDirectional=Pp;Xe.addEventListener=function(r,e){var t=to[r]||(to[r]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(r,e){var t=to[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Xe.batch=function(r,e){var t=[],i={},n=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Te.delayedCall(n,function(){h(u,d),u=[],d=[]}).pause();return function(p){u.length||f.restart(!0),u.push(p.trigger),d.push(p),s<=u.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Si(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Si(s)&&(s=s(),hi(Xe,"refresh",function(){return s=e.batchMax()})),Rl(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(Xe.create(c))}),t};var Vm=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},mu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===sn&&r(xt,t)},nc={auto:1,scroll:1},gM=function(e){var t=e.event,i=e.target,n=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=vi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nc[(l=vn(s)).overflowY]||nc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!eo(s)&&(nc[(l=vn(s)).overflowY]||nc[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ax=function(e,t,i,n){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&gM,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&hi(At,kt.eventTypes[0],Gm,!1,!0)},onDisable:function(){return ci(At,kt.eventTypes[0],Gm,!0)}})},_M=/(input|label|select|textarea)/i,Hm,Gm=function(e){var t=_M.test(e.target.tagName);(t||Hm)&&(e._gsapAllow=!0,Hm=t)},xM=function(e){Fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ki(e.target)||sn,h=Te.core.globals().ScrollSmoother,u=h&&h.get(),d=Js&&(e.content&&ki(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=fr(c,ii),p=fr(c,Ui),_=1,m=(kt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,g=0,y=Si(n)?function(){return n(a)}:function(){return n||2.8},v,x,E=Ax(c,e.type,!0,s),w=function(){return x=!1},S=qn,R=qn,b=function(){l=Zn(c,ii),R=dl(Js?1:0,l),i&&(S=dl(0,Zn(c,Ui))),v=Zr},M=function(){d._gsap.y=tl(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(w);var z=tl(a.deltaY/2),te=R(f.v-z);if(d&&te!==f.v+f.offset){f.offset=te-f.v;var I=tl((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=tt.cache,Cs()}return!0}f.offset&&M(),x=!0},N,U,G,Y,H=function(){b(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&Te.set(d,{y:"+=0"}),e.ignoreCheck=function(W){return Js&&W.type==="touchmove"&&P()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){x=!1;var W=_;_=tl((et.visualViewport&&et.visualViewport.scale||1)/m),N.pause(),W!==_&&mu(c,_>1.01?!0:i?!1:"x"),U=p(),G=f(),b(),v=Zr},e.onRelease=e.onGestureStart=function(W,z){if(f.offset&&M(),!z)Y.restart(!0);else{tt.cache++;var te=y(),I,oe;i&&(I=p(),oe=I+te*.05*-W.velocityX/.227,te*=Vm(p,I,oe,Zn(c,Ui)),N.vars.scrollX=S(oe)),I=f(),oe=I+te*.05*-W.velocityY/.227,te*=Vm(f,I,oe,Zn(c,ii)),N.vars.scrollY=R(oe),N.invalidate().duration(te).play(.01),(Js&&N.vars.scrollY>=l||I>=l-1)&&Te.to({},{onUpdate:H,duration:te})}o&&o(W)},e.onWheel=function(){N._ts&&N.pause(),vi()-g>1e3&&(v=0,g=vi())},e.onChange=function(W,z,te,I,oe){if(Zr!==v&&b(),z&&i&&p(S(I[2]===z?U+(W.startX-W.x):p()+z-I[1])),te){f.offset&&M();var Ne=oe[2]===te,je=Ne?G+W.startY-W.y:f()+te-oe[1],K=R(je);Ne&&je!==K&&(G+=K-je),f(K)}(te||z)&&Cs()},e.onEnable=function(){mu(c,i?!1:"x"),Xe.addEventListener("refresh",H),hi(et,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),E.enable()},e.onDisable=function(){mu(c,!0),ci(et,"resize",H),Xe.removeEventListener("refresh",H),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=Js,Js&&!f()&&f(1),Js&&Te.ticker.add(qn),Y=a._dc,N=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ex(f,f(),function(){return N.pause()})},onUpdate:Cs,onComplete:Y.vars.onComplete}),a};Xe.sort=function(r){if(Si(r))return Ke.sort(r);var e=et.pageYOffset||0;return Xe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Ke.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(r){return new kt(r)};Xe.normalizeScroll=function(r){if(typeof r>"u")return Ii;if(r===!0&&Ii)return Ii.enable();if(r===!1){Ii&&Ii.kill(),Ii=r;return}var e=r instanceof kt?r:xM(r);return Ii&&Ii.target===e.target&&Ii.kill(),eo(e.target)&&(Ii=e),e};Xe.core={_getVelocityProp:Kd,_inputObserver:Ax,_scrollers:tt,_proxies:es,bridge:{ss:function(){Tn||io("scrollStart"),Tn=vi()},ref:function(){return yi}}};gx()&&Te.registerPlugin(Xe);var yM="1.3.3";function Rx(r,e,t){return Math.max(r,Math.min(e,t))}function vM(r,e,t){return(1-t)*r+t*e}function MM(r,e,t,i){return vM(r,e,1-Math.exp(-t*i))}function SM(r,e){return(r%e+e)%e}var bM=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Rx(0,this.currentTime/this.duration,1);e=t>=1;const i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=MM(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function TM(r,e){let t;return function(...i){let n=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(n,i)},e)}}var wM=class{constructor(r,e,{autoResize:t=!0,debounce:i=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=TM(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Cx=class{events={};emit(r,...e){let t=this.events[r]||[];for(let i=0,n=t.length;i<n;i++)t[i]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Wm=100/6,Os={passive:!1},EM=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Os),this.element.addEventListener("touchstart",this.onTouchStart,Os),this.element.addEventListener("touchmove",this.onTouchMove,Os),this.element.addEventListener("touchend",this.onTouchEnd,Os)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Cx;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Os),this.element.removeEventListener("touchstart",this.onTouchStart,Os),this.element.removeEventListener("touchmove",this.onTouchMove,Os),this.element.removeEventListener("touchend",this.onTouchEnd,Os)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:i}=r;const n=i===1?Wm:i===2?this.window.width:1,s=i===1?Wm:i===2?this.window.height:1;e*=n,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Xm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),AM=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new bM;emitter=new Cx;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:y=!0,autoRaf:v=!1,anchors:x=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:S=!1}={}){window.lenisVersion=yM,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Xm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:y,autoRaf:v,anchors:x,autoToggle:E,allowNestedScroll:w,__experimental__naiveDimensions:S},this.dimensions=new wM(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new EM(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.stop():this.start()}};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().find(i=>i instanceof HTMLAnchorElement&&(i.getAttribute("href")?.startsWith("#")||i.getAttribute("href")?.startsWith("/#")||i.getAttribute("href")?.startsWith("./#")));if(t){const i=t.getAttribute("href");if(i){const n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${i.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(i)&&(s=0),this.scrollTo(s,n)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||n&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.preventDefault();const f=n&&this.options.syncTouch,_=n&&i.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:i=!1,duration:n=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const p=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?p.left:p.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=Rx(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=r),typeof n=="number"&&typeof s!="function"?s=Xm:typeof s=="function"&&typeof n!="number"&&(n=1),this.animate.fromTo(this.animatedScroll,r,{duration:n,easing:s,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const i=Date.now(),n=r._lenis??={};let s,o,a,l,c,h,u,d;const f=this.options.gestureOrientation;if(i-(n.time??0)>2e3){n.time=Date.now();const E=window.getComputedStyle(r);n.computedStyle=E;const w=E.overflowX,S=E.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(S),n.hasOverflowX=s,n.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,h=r.scrollHeight,u=r.clientWidth,d=r.clientHeight,a=c>u,l=h>d,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=c,n.scrollHeight=h,n.clientWidth=u,n.clientHeight=d}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,c=n.scrollWidth,h=n.scrollHeight,u=n.clientWidth,d=n.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let p;if(f==="horizontal")p="x";else if(f==="vertical")p="y";else{const E=e!==0,w=t!==0;E&&s&&a&&(p="x"),w&&o&&l&&(p="y")}if(!p)return!1;let _,m,g,y,v;if(p==="x")_=r.scrollLeft,m=c-u,g=e,y=s,v=a;else if(p==="y")_=r.scrollTop,m=h-d,g=t,y=o,v=l;else return!1;return(g>0?_<m:_>0)&&y&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?SM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const qm=(r,e,t,i,n)=>(r-e)/(t-e)*(n-i)+i,Ym=(r,e,t)=>Math.max(Math.min(r,t),e);class RM{constructor({scrollWrapper:e=window,scrollContent:t=document.documentElement,background:i,thumb:n,direction:s="vertical",lenis:o,autoFade:a=!0}){if(s!=="vertical"&&s!=="horizontal")throw new Error("invalid direction");this.isVertical=s==="vertical",this.scrollWrapperEl=null,this.scrollContentEl=null,this.scrollWrapperSize=0,this.scrollContentSize=0,this.backgroundSize=0,this.scrollProp="",this.scrollWrapperSizeProp="",this.scrollContentSizeProp="",this.backgroundEl=i,this.backgroundSizeProps=this.isVertical?"clientHeight":"clientWidth",this.thumbEl=n,this.autoFade=a,this.lenis=o,this.thumbLength=0,this.thumbMinLength=40,this.maxScroll=0,this.isHover=!1,this.isHandling=!1,this.isMoving=!1,this.isExist=!1,this.grabOffset=0,this.prevTranslate=0,this.prevScrollWrapperSize=0,this.prevScrollContentSize=0,this.moveStep=200,this.moveTimeoutId=0,this.moveIntervalId=0,this.fadeTimeoutId=0,this.setScrollContainer(e,t),this.setSize(),this.backgroundEl.addEventListener("mouseenter",this.handleMouseEnter),this.backgroundEl.addEventListener("mouseleave",this.handleMouseLeave),this.backgroundEl.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),this.dragEndEvent=new CustomEvent("myscrollbar:dragend")}setScrollContainer=(e=window,t=document.body)=>{this.scrollWrapperEl=e,this.scrollContentEl=t,this.scrollProp="",this.scrollWrapperEl===window?this.scrollProp=this.isVertical?"scrollY":"scrollX":this.scrollProp=this.isVertical?"scrollTop":"scrollLeft",this.scrollWrapperSizeProp="",this.scrollWrapperEl===window?this.scrollWrapperSizeProp=this.isVertical?"innerHeight":"innerWidth":this.scrollWrapperSizeProp=this.isVertical?"clientHeight":"clientWidth",this.scrollContentSizeProp=this.isVertical?"scrollHeight":"scrollWidth"};getScrollTarget=e=>{const t=window.innerHeight-this.backgroundSize,i=qm(e,t*.5+this.thumbLength*.5,this.scrollWrapperSize-this.thumbLength*.5-t*.5,0,this.maxScroll);return Ym(i,0,this.maxScroll)};getThumbTranslate=e=>{const t=qm(e,0,this.maxScroll,0,this.backgroundSize-this.thumbLength);return Ym(t,0,this.backgroundSize-this.thumbLength)};handleMouseEnter=()=>{this.isHover=!0};handleMouseLeave=()=>{this.isHover=!1};handleMouseDown=e=>{this.isHandling=!0,document.body.style.userSelect="none";const t=this.isVertical?e.clientY:e.clientX;if(e.target===this.thumbEl){const i=this.thumbEl.getBoundingClientRect(),n=i[this.isVertical?"top":"left"]+i[this.isVertical?"height":"width"]*.5;this.grabOffset=t-n,window.addEventListener("mousemove",this.handleMouseMove)}else{const i=this.getScrollTarget(t);this.moveStepCloser(i),this.moveTimeoutId=setTimeout(()=>{this.moveIntervalId=setInterval(()=>{this.moveStepCloser(i)},20)},200)}};moveStepCloser=e=>{const n=Math.sign(e-this.scrollWrapperEl[this.scrollProp])*this.moveStep+this.scrollWrapperEl[this.scrollProp];Math.abs(e-n)<this.moveStep||(this.lenis?this.lenis.scrollTo(n):this.scrollWrapperEl.scrollTo(this.isVertical?0:n,this.isVertical?n:0))};handleMouseMove=e=>{const t=this.isVertical?e.clientY:e.clientX,i=this.getScrollTarget(t-this.grabOffset);this.lenis?this.lenis.scrollTo(i):this.scrollWrapperEl.scrollTo(this.isVertical?0:i,this.isVertical?i:0)};handleMouseUp=()=>{window.dispatchEvent(this.dragEndEvent),window.removeEventListener("mousemove",this.handleMouseMove),this.isHandling=!1,clearTimeout(this.moveTimeoutId),clearInterval(this.moveIntervalId),!(typeof window.ontouchstart<"u")&&(document.body.style.userSelect="")};setSize=()=>{this.scrollWrapperSize=this.scrollWrapperEl[this.scrollWrapperSizeProp],this.scrollContentSize=this.scrollContentEl[this.scrollContentSizeProp],this.backgroundSize=this.backgroundEl[this.backgroundSizeProps];const e=this.scrollWrapperSize/this.scrollContentSize;this.isExist=e<1,this.isExist?this.backgroundEl.style.visibility="":this.backgroundEl.style.visibility="hidden",this.thumbLength=Math.max(e*this.scrollWrapperSize,this.thumbMinLength),this.maxScroll=this.scrollContentSize-this.scrollWrapperSize,this.isVertical?this.thumbEl.style.height=`${this.thumbLength}px`:this.thumbEl.style.width=`${this.thumbLength}px`};raf=()=>{if((this.scrollWrapperEl[this.scrollWrapperSizeProp]!==this.prevScrollWrapperSize||this.scrollContentEl[this.scrollContentSizeProp]!==this.prevScrollContentSize)&&this.resize(),this.prevScrollWrapperSize=this.scrollWrapperSize,this.prevScrollContentSize=this.scrollContentSize,!this.isExist)return;const e=this.scrollWrapperEl[this.scrollProp],t=this.getThumbTranslate(e);if(this.thumbEl.style.transform=this.isVertical?`translate3d(0, ${t}px, 0)`:`translate3d(${t}px, 0, 0)`,this.isMoving=t!==this.prevTranslate&&this.prevTranslate!==0,this.autoFade){const i=this.isHover||this.isHandling||this.isMoving;this.backgroundEl.setAttribute("data-visible",i)}this.prevTranslate=t};resize=()=>{this.setSize()}}let rf=null;const CM=({direction:r,lenis:e,autoFade:t})=>{rf||(rf=new RM({background:document.querySelector('[data-scrollbar="container"]'),thumb:document.querySelector('[data-scrollbar="thumb"]'),direction:r,lenis:e,autoFade:t}))},PM=768,Px=`(max-width: ${PM}px)`,Ix="not all and (hover: hover) and (pointer: fine)",gu=.5,_u=.035,$m="back.out(3.2)",IM="back.in(3.2)";let jm=0;const LM=(r,e)=>()=>{clearTimeout(jm),jm=setTimeout(r,e)},Km=375,DM=()=>{const r=()=>{const t=window.outerWidth>Km?"width=device-width,initial-scale=1":`width=${Km}`,i=document.querySelector('meta[name="viewport"]');i&&i.getAttribute("content")!==t&&i.setAttribute("content",t)},e=LM(r,250);window.addEventListener("resize",e,!1),r()},NM=()=>{let r=0;const e=new CustomEvent("my:resizeIgnoreMobileVertical"),t=()=>{const i=window.matchMedia(Ix).matches,n=window.innerWidth===r;i&&n||window.dispatchEvent(e),r=window.innerWidth};r=window.innerWidth,window.addEventListener("resize",t)},FM=()=>{NM()},UM=20;let of=0;const OM=16,Lp=new CustomEvent("my:gesture:next"),Dp=new CustomEvent("my:gesture:prev"),Zm=r=>{of=r.touches[0].clientY},Jm=r=>{const e=r.touches[0].clientY,t=e-of;of=e,t<-16?window.dispatchEvent(Lp):t>OM&&window.dispatchEvent(Dp)},Qm=r=>{const e=r.deltaY;e>UM?window.dispatchEvent(Lp):e<-20&&window.dispatchEvent(Dp)},eg=r=>{if(r.repeat)return;const e=r.key;e==="ArrowDown"?window.dispatchEvent(Lp):e==="ArrowUp"&&window.dispatchEvent(Dp)};class tg{static addEvent=()=>{window.addEventListener("wheel",Qm),window.addEventListener("touchstart",Zm),window.addEventListener("touchmove",Jm),window.addEventListener("keydown",eg)};static removeEvent=()=>{window.removeEventListener("wheel",Qm),window.removeEventListener("touchstart",Zm),window.removeEventListener("touchmove",Jm),window.removeEventListener("keydown",eg)}}class BM{constructor(){this._relativePosition={x:window.innerWidth*.5,y:window.innerHeight*.5},this._previousPosition={x:this._relativePosition.x,y:this._relativePosition.y},this._velocity={x:0,y:0},this.isTouched=!1,this._timeoutId=0,window.addEventListener("touchstart",this._handleTouchStart),window.addEventListener("touchmove",this._handleMouseMove),window.addEventListener("touchend",this._handleTouchEnd),window.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseleave",this._handleMouseLeave)}_handleTouchStart=e=>{this.isTouched=!0;const t=e.touches?e.touches[0]:e;this._relativePosition.x=t.clientX,this._relativePosition.y=t.clientY};_handleTouchEnd=()=>{this.isTouched=!1};_handleMouseMove=e=>{const t=e.touches?e.touches[0]:e;this._relativePosition.x=t.clientX,this._relativePosition.y=t.clientY,this._velocity.x=this._relativePosition.x-this._previousPosition.x,this._velocity.y=this._relativePosition.y-this._previousPosition.y,this._previousPosition.x=this._relativePosition.x,this._previousPosition.y=this._relativePosition.y,clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this._velocity.x=0,this._velocity.y=0},100)};_handleMouseLeave=()=>{this._velocity.x=0,this._velocity.y=0};get normalizedPosition(){return{x:this._relativePosition.x/window.innerWidth*2-1,y:-(this._relativePosition.y/window.innerHeight*2-1)}}get relativePosition(){return{x:this._relativePosition.x,y:this._relativePosition.y}}get relativePositionForGL(){return{x:this._relativePosition.x-window.innerWidth/2,y:-(this._relativePosition.y-window.innerHeight/2)}}get absolutePosition(){return{x:this._relativePosition.x+window.scrollX,y:this._relativePosition.y+window.scrollY}}get velocity(){return{x:this._velocity.x,y:this._velocity.y}}dispose=()=>{}}const Yt={isSp:!1,isTouch:!1,mouse:null},zM=()=>{const r=window.matchMedia(Px);Yt.isSp=r.matches},kM=r=>{Yt.isTouch=r.matches},VM=()=>{const r=window.matchMedia(Px),e=window.matchMedia(Ix);Yt.isSp=r.matches,Yt.isTouch=e.matches,window.addEventListener("resize",zM),e.addEventListener("change",kM),Yt.mouse=new BM},HM="176",GM=0,ig=1,WM=2,Lx=1,XM=2,xs=3,pr=0,Xi=1,bs=2,cr=0,ra=1,ng=2,sg=3,rg=4,qM=5,Br=100,YM=101,$M=102,jM=103,KM=104,ZM=200,JM=201,QM=202,eS=203,af=204,lf=205,tS=206,iS=207,nS=208,sS=209,rS=210,oS=211,aS=212,lS=213,cS=214,cf=0,hf=1,uf=2,ga=3,df=4,ff=5,pf=6,mf=7,Dx=0,hS=1,uS=2,hr=0,dS=1,fS=2,pS=3,Nx=4,mS=5,gS=6,_S=7,Fx=300,_a=301,xa=302,gf=303,_f=304,qh=306,xf=1e3,Hr=1001,yf=1002,kn=1003,xS=1004,sc=1005,bn=1006,xu=1007,Gr=1008,ss=1009,Ux=1010,Ox=1011,Pl=1012,Np=1013,no=1014,Es=1015,kl=1016,Fp=1017,Up=1018,Il=1020,Bx=35902,zx=1021,kx=1022,zn=1023,Ll=1026,Dl=1027,Vx=1028,Op=1029,Hx=1030,Bp=1031,zp=1033,ch=33776,hh=33777,uh=33778,dh=33779,vf=35840,Mf=35841,Sf=35842,bf=35843,Tf=36196,wf=37492,Ef=37496,Af=37808,Rf=37809,Cf=37810,Pf=37811,If=37812,Lf=37813,Df=37814,Nf=37815,Ff=37816,Uf=37817,Of=37818,Bf=37819,zf=37820,kf=37821,fh=36492,Vf=36494,Hf=36495,Gx=36283,Gf=36284,Wf=36285,Xf=36286,qf=2200,yS=2201,vS=2202,Ph=2300,Yf=2301,yu=2302,$o=2400,jo=2401,Ih=2402,kp=2500,MS=2501,SS=3200,bS=3201,Wx=0,TS=1,Qs="",nn="srgb",ya="srgb-linear",Lh="linear",Mt="srgb",po=7680,og=519,wS=512,ES=513,AS=514,Xx=515,RS=516,CS=517,PS=518,IS=519,ag=35044,lg="300 es",As=2e3,Dh=2001,mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,$f=180/Math.PI;function Ta(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mi[r&255]+mi[r>>8&255]+mi[r>>16&255]+mi[r>>24&255]+"-"+mi[e&255]+mi[e>>8&255]+"-"+mi[e>>16&15|64]+mi[e>>24&255]+"-"+mi[t&63|128]+mi[t>>8&255]+"-"+mi[t>>16&255]+mi[t>>24&255]+mi[i&255]+mi[i>>8&255]+mi[i>>16&255]+mi[i>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function LS(r,e){return(r%e+e)%e}function Mu(r,e,t){return(1-t)*r+t*e}function Ua(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}let Ze=class qx{constructor(e,t,i,n,s,o,a,l,c){qx.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=n[0],m=n[3],g=n[6],y=n[1],v=n[4],x=n[7],E=n[2],w=n[5],S=n[8];return s[0]=o*_+a*y+l*E,s[3]=o*m+a*v+l*w,s[6]=o*g+a*x+l*S,s[1]=c*_+h*y+u*E,s[4]=c*m+h*v+u*w,s[7]=c*g+h*x+u*S,s[2]=d*_+f*y+p*E,s[5]=d*m+f*v+p*w,s[8]=d*g+f*x+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,p=t*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(a*i-n*o)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Su.makeScale(e,t)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,t){return this.premultiply(Su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Su=new Ze,cg=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hg=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DS(){const r={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(n.r=Ps(n.r),n.g=Ps(n.g),n.b=Ps(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(n.r=oa(n.r),n.g=oa(n.g),n.b=oa(n.b))),n},fromWorkingColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},toWorkingColorSpace:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qs?Lh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ya]:{primaries:e,whitePoint:i,transfer:Lh,toXYZ:cg,fromXYZ:hg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:cg,fromXYZ:hg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),r}const ft=DS();function Ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},rc={h:0,s:0,l:0};function bu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let at=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ft.workingColorSpace){if(e=LS(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=bu(o,s,e+1/3),this.g=bu(o,s,e),this.b=bu(o,s,e-1/3)}return ft.toWorkingColorSpace(this,n),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Yx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return ft.fromWorkingColorSpace(gi.copy(this),e),Math.round(ot(gi.r*255,0,255))*65536+Math.round(ot(gi.g*255,0,255))*256+Math.round(ot(gi.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(gi.copy(this),t);const i=gi.r,n=gi.g,s=gi.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(gi.copy(this),t),e.r=gi.r,e.g=gi.g,e.b=gi.b,e}getStyle(e=nn){ft.fromWorkingColorSpace(gi.copy(this),e);const t=gi.r,i=gi.g,n=gi.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+t,Bs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bs),e.getHSL(rc);const i=Mu(Bs.h,rc.h,t),n=Mu(Bs.s,rc.s,t),s=Mu(Bs.l,rc.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gi=new at;at.NAMES=Yx;let Is=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let m=1-a;const g=l*d+c*f+h*p+u*_,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,g*y);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+p*x,u=u*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class $x{constructor(e=0,t=0,i=0){$x.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ug.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Tu=new $,ug=new Is;let Vl=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),ac.subVectors(this.max,Oa),mo.subVectors(e.a,Oa),go.subVectors(e.b,Oa),_o.subVectors(e.c,Oa),zs.subVectors(go,mo),ks.subVectors(_o,go),Sr.subVectors(mo,_o);let t=[0,-zs.z,zs.y,0,-ks.z,ks.y,0,-Sr.z,Sr.y,zs.z,0,-zs.x,ks.z,0,-ks.x,Sr.z,0,-Sr.x,-zs.y,zs.x,0,-ks.y,ks.x,0,-Sr.y,Sr.x,0];return!wu(t,mo,go,_o,ac)||(t=[1,0,0,0,1,0,0,0,1],!wu(t,mo,go,_o,ac))?!1:(lc.crossVectors(zs,ks),t=[lc.x,lc.y,lc.z],wu(t,mo,go,_o,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(as),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const as=[new $,new $,new $,new $,new $,new $,new $,new $],Cn=new $,oc=new Vl,mo=new $,go=new $,_o=new $,zs=new $,ks=new $,Sr=new $,Oa=new $,ac=new $,lc=new $,br=new $;function wu(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){br.fromArray(r,s);const a=n.x*Math.abs(br.x)+n.y*Math.abs(br.y)+n.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),h=i.dot(br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const NS=new Vl,Ba=new $,Eu=new $;let Vp=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):NS.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ba,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(Eu)),this.expandByPoint(Ba.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Au=new $,FS=new $,US=new Ze;let Ur=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Au.subVectors(i,t).cross(FS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Au),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||US.getNormalMatrix(e),n=this.coplanarPoint(Au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Tr=new Vp,cc=new $;let Hp=class{constructor(e=new Ur,t=new Ur,i=new Ur,n=new Ur,s=new Ur,o=new Ur){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=As){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],_=n[10],m=n[11],g=n[12],y=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-s,d-c,m-f,x-g).normalize(),i[1].setComponents(l+s,d+c,m+f,x+g).normalize(),i[2].setComponents(l+o,d+h,m+p,x+y).normalize(),i[3].setComponents(l-o,d-h,m-p,x-y).normalize(),i[4].setComponents(l-a,d-u,m-_,x-v).normalize(),t===As)i[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(t===Dh)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(cc.x=n.normal.x>0?e.max.x:e.min.x,cc.y=n.normal.y>0?e.max.y:e.min.y,cc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},si=class jf{constructor(e,t,i,n,s,o,a,l,c,h,u,d,f,p,_,m){jf.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,u,d,f,p,_,m)}set(e,t,i,n,s,o,a,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jf().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/xo.setFromMatrixColumn(e,0).length(),s=1/xo.setFromMatrixColumn(e,1).length(),o=1/xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,BS)}lookAt(e,t,i){const n=this.elements;return ji.subVectors(e,t),ji.lengthSq()===0&&(ji.z=1),ji.normalize(),Vs.crossVectors(i,ji),Vs.lengthSq()===0&&(Math.abs(i.z)===1?ji.x+=1e-4:ji.z+=1e-4,ji.normalize(),Vs.crossVectors(i,ji)),Vs.normalize(),hc.crossVectors(ji,Vs),n[0]=Vs.x,n[4]=hc.x,n[8]=ji.x,n[1]=Vs.y,n[5]=hc.y,n[9]=ji.y,n[2]=Vs.z,n[6]=hc.z,n[10]=ji.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],v=i[7],x=i[11],E=i[15],w=n[0],S=n[4],R=n[8],b=n[12],M=n[1],P=n[5],N=n[9],U=n[13],G=n[2],Y=n[6],H=n[10],W=n[14],z=n[3],te=n[7],I=n[11],oe=n[15];return s[0]=o*w+a*M+l*G+c*z,s[4]=o*S+a*P+l*Y+c*te,s[8]=o*R+a*N+l*H+c*I,s[12]=o*b+a*U+l*W+c*oe,s[1]=h*w+u*M+d*G+f*z,s[5]=h*S+u*P+d*Y+f*te,s[9]=h*R+u*N+d*H+f*I,s[13]=h*b+u*U+d*W+f*oe,s[2]=p*w+_*M+m*G+g*z,s[6]=p*S+_*P+m*Y+g*te,s[10]=p*R+_*N+m*H+g*I,s[14]=p*b+_*U+m*W+g*oe,s[3]=y*w+v*M+x*G+E*z,s[7]=y*S+v*P+x*Y+E*te,s[11]=y*R+v*N+x*H+E*I,s[15]=y*b+v*U+x*W+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+_*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+g*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*g+a*d*g,v=p*d*c-h*m*c-p*l*f+o*m*f+h*l*g-o*d*g,x=h*_*c-p*u*c+p*a*f-o*_*f-h*a*g+o*u*g,E=p*u*l-h*_*l-p*a*d+o*_*d+h*a*m-o*u*m,w=t*y+i*v+n*x+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=y*S,e[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*g-i*d*g)*S,e[2]=(a*m*s-_*l*s+_*n*c-i*m*c-a*n*g+i*l*g)*S,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*S,e[4]=v*S,e[5]=(h*m*s-p*d*s+p*n*f-t*m*f-h*n*g+t*d*g)*S,e[6]=(p*l*s-o*m*s-p*n*c+t*m*c+o*n*g-t*l*g)*S,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=x*S,e[9]=(p*u*s-h*_*s-p*i*f+t*_*f+h*i*g-t*u*g)*S,e[10]=(o*_*s-p*a*s+p*i*c-t*_*c-o*i*g+t*a*g)*S,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*S,e[12]=E*S,e[13]=(h*_*n-p*u*n+p*i*d-t*_*d-h*i*m+t*u*m)*S,e[14]=(p*a*n-o*_*n-p*i*l+t*_*l+o*i*m-t*a*m)*S,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,p=s*u,_=o*h,m=o*u,g=a*u,y=l*c,v=l*h,x=l*u,E=i.x,w=i.y,S=i.z;return n[0]=(1-(_+g))*E,n[1]=(f+x)*E,n[2]=(p-v)*E,n[3]=0,n[4]=(f-x)*w,n[5]=(1-(d+g))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(p+v)*S,n[9]=(m-y)*S,n[10]=(1-(d+_))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=xo.set(n[0],n[1],n[2]).length();const o=xo.set(n[4],n[5],n[6]).length(),a=xo.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Pn.copy(this);const c=1/s,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=As){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,p;if(a===As)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Dh)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=As){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(o-s),d=(t+e)*c,f=(i+n)*h;let p,_;if(a===As)p=(o+s)*u,_=-2*u;else if(a===Dh)p=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const xo=new $,Pn=new si,OS=new $(0,0,0),BS=new $(1,1,1),Vs=new $,hc=new $,ji=new $;let Kt=class jx{constructor(e=0,t=0,i=0,n=1){jx.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(f+1)/2,E=(g+1)/2,w=(h+d)/4,S=(u+_)/4,R=(p+m)/4;return v>x&&v>E?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=w/i,s=S/i):x>E?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=w/n,s=R/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=S/s,n=R/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};function Kx(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zS(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}let pt=class Zx{constructor(e=0,t=0){Zx.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}};const Wt=new $,uc=new pt;let kS=0,ts=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ag,this.updateRanges=[],this.gpuType=Es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ua(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),i=Bi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),i=Bi(i,this.array),n=Bi(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),i=Bi(i,this.array),n=Bi(n,this.array),s=Bi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ag&&(e.usage=this.usage),e}},Jx=class extends ts{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Qx=class extends ts{constructor(e,t,i){super(new Uint32Array(e),t,i)}},is=class extends ts{constructor(e,t,i){super(new Float32Array(e),t,i)}};const dg=new si,fg=new Is;let mr=class ey{constructor(e=0,t=0,i=0,n=ey.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mr.DEFAULT_ORDER="XYZ";let ty=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VS=0;const pg=new $,yo=new Is,ls=new si,dc=new $,za=new $,HS=new $,GS=new Is,mg=new $(1,0,0),gg=new $(0,1,0),_g=new $(0,0,1),xg={type:"added"},WS={type:"removed"},vo={type:"childadded",child:null},Ru={type:"childremoved",child:null};let wn=class ph extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ph.DEFAULT_UP.clone();const e=new $,t=new mr,i=new Is,n=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new si},normalMatrix:{value:new Ze}}),this.matrix=new si,this.matrixWorld=new si,this.matrixAutoUpdate=ph.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ph.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(gg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,t){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(gg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dc.copy(e):dc.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(za,dc,this.up):ls.lookAt(dc,za,this.up),this.quaternion.setFromRotationMatrix(ls),n&&(ls.extractRotation(n.matrixWorld),yo.setFromRotationMatrix(ls),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xg),vo.child=e,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(WS),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xg),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,HS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,GS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}};wn.DEFAULT_UP=new $(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function iy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XS(){const r=Nl("canvas");return r.style.display="block",r}const yg={};function mh(r){r in yg||(yg[r]=!0,console.warn(r))}function qS(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function YS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $S(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}let jS=0;const mn=new si,Cu=new wn,Mo=new $,Ki=new Vl,ka=new Vl,ai=new $;let wa=class ny extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iy(e)?Qx:Jx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new is(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ki.setFromBufferAttribute(s),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Ki.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ka.setFromBufferAttribute(a),this.morphTargetsRelative?(ai.addVectors(Ki.min,ka.min),Ki.expandByPoint(ai),ai.addVectors(Ki.max,ka.max),Ki.expandByPoint(ai)):(Ki.expandByPoint(ka.min),Ki.expandByPoint(ka.max))}Ki.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)ai.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ai));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ai.fromBufferAttribute(a,c),l&&(Mo.fromBufferAttribute(e,c),ai.add(Mo)),n=Math.max(n,i.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ts(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new $,l[R]=new $;const c=new $,h=new $,u=new $,d=new pt,f=new pt,p=new pt,_=new $,m=new $;function g(R,b,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[R].add(_),a[b].add(_),a[M].add(_),l[R].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,b=y.length;R<b;++R){const M=y[R],P=M.start,N=M.count;for(let U=P,G=P+N;U<G;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new $,x=new $,E=new $,w=new $;function S(R){E.fromBufferAttribute(n,R),w.copy(E);const b=a[R];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(w,b);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,b=y.length;R<b;++R){const M=y[R],P=M.start,N=M.count;for(let U=P,G=P+N;U<G;U+=3)S(e.getX(U+0)),S(e.getX(U+1)),S(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new $,s=new $,o=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new ts(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ny,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Hl extends wa{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,s,4),p("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new is(c,3)),this.setAttribute("normal",new is(h,3)),this.setAttribute("uv",new is(u,2));function p(_,m,g,y,v,x,E,w,S,R,b){const M=x/S,P=E/R,N=x/2,U=E/2,G=w/2,Y=S+1,H=R+1;let W=0,z=0;const te=new $;for(let I=0;I<H;I++){const oe=I*P-U;for(let Ne=0;Ne<Y;Ne++){const je=Ne*M-N;te[_]=je*y,te[m]=oe*v,te[g]=G,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[g]=w>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ne/S),u.push(1-I/R),W+=1}}for(let I=0;I<R;I++)for(let oe=0;oe<S;oe++){const Ne=d+oe+Y*I,je=d+oe+Y*(I+1),K=d+(oe+1)+Y*(I+1),ne=d+(oe+1)+Y*I;l.push(Ne,je,ne),l.push(je,K,ne),z+=6}a.addGroup(f,z,b),f+=z,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yh extends wa{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const y=g*d-o;for(let v=0;v<c;v++){const x=v*u-s;p.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const v=y+c*g,x=y+c*(g+1),E=y+1+c*(g+1),w=y+1+c*g;f.push(v,x,w),f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new is(p,3)),this.setAttribute("normal",new is(_,3)),this.setAttribute("uv",new is(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.width,e.height,e.widthSegments,e.heightSegments)}}let KS=0,Gl=class extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=ra,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==af&&(i.blendSrc=this.blendSrc),this.blendDst!==lf&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==og&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};function va(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Pi(r){const e={};for(let t=0;t<r.length;t++){const i=va(r[t]);for(const n in i)e[n]=i[n]}return e}function ZS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const JS={clone:va,merge:Pi},QS=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,eb=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class gr extends Gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QS,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=ZS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const cs=new $,Pu=new $,fc=new $,Hs=new $,Iu=new $,pc=new $,Lu=new $;let tb=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Pu.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),Hs.copy(this.origin).sub(Pu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fc),a=Hs.dot(this.direction),l=-Hs.dot(fc),c=Hs.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=s*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Pu).addScaledVector(fc,d),f}intersectSphere(e,t){cs.subVectors(e.center,this.origin);const i=cs.dot(this.direction),n=cs.dot(cs)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,n,s){Iu.subVectors(t,e),pc.subVectors(i,e),Lu.crossVectors(Iu,pc);let o=this.direction.dot(Lu),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hs.subVectors(this.origin,e);const l=a*this.direction.dot(pc.crossVectors(Hs,pc));if(l<0)return null;const c=a*this.direction.dot(Iu.cross(Hs));if(c<0||l+c>o)return null;const h=-a*Hs.dot(Lu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};const In=new $,hs=new $,Du=new $,us=new $,So=new $,bo=new $,vg=new $,Nu=new $,Fu=new $,Uu=new $,Ou=new Kt,Bu=new Kt,zu=new Kt;let Va=class Go{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),In.subVectors(e,t),n.cross(In);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){In.subVectors(n,t),hs.subVectors(i,t),Du.subVectors(e,t);const o=In.dot(In),a=In.dot(hs),l=In.dot(Du),c=hs.dot(hs),h=hs.dot(Du),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,us)===null?!1:us.x>=0&&us.y>=0&&us.x+us.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,us.x),l.addScaledVector(o,us.y),l.addScaledVector(a,us.z),l)}static getInterpolatedAttribute(e,t,i,n,s,o){return Ou.setScalar(0),Bu.setScalar(0),zu.setScalar(0),Ou.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,i),zu.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(Bu,s.y),o.addScaledVector(zu,s.z),o}static isFrontFacing(e,t,i,n){return In.subVectors(i,t),hs.subVectors(e,t),In.cross(hs).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),In.cross(hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Go.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Go.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Go.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Go.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Go.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;So.subVectors(n,i),bo.subVectors(s,i),Nu.subVectors(e,i);const l=So.dot(Nu),c=bo.dot(Nu);if(l<=0&&c<=0)return t.copy(i);Fu.subVectors(e,n);const h=So.dot(Fu),u=bo.dot(Fu);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(So,o);Uu.subVectors(e,s);const f=So.dot(Uu),p=bo.dot(Uu);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(bo,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return vg.subVectors(s,n),a=(u-h)/(u-h+(f-p)),t.copy(n).addScaledVector(vg,a);const g=1/(m+_+d);return o=_*g,a=d*g,t.copy(i).addScaledVector(So,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ry=class extends Gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=Dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const Mg=new si,wr=new tb,mc=new Vp,Sg=new $,gc=new $,_c=new $,xc=new $,ku=new $,yc=new $,bg=new $,vc=new $;let Jn=class extends wn{constructor(e=new wa,t=new ry){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){yc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ku.fromBufferAttribute(u,e),o?yc.addScaledVector(ku,h):yc.addScaledVector(ku.sub(t),h))}t.add(yc)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(mc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(mc,Sg)===null||wr.origin.distanceToSquared(Sg)>(e.far-e.near)**2))&&(Mg.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Mg),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const w=a.getX(x),S=a.getX(x+1),R=a.getX(x+2);n=Mc(this,g,e,i,c,h,u,w,S,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);n=Mc(this,o,e,i,c,h,u,y,v,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const w=x,S=x+1,R=x+2;n=Mc(this,g,e,i,c,h,u,w,S,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=m,v=m+1,x=m+2;n=Mc(this,o,e,i,c,h,u,y,v,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function ib(r,e,t,i,n,s,o,a){let l;if(e.side===Xi?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===pr,a),l===null)return null;vc.copy(a),vc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(vc);return c<t.near||c>t.far?null:{distance:c,point:vc.clone(),object:r}}function Mc(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,gc),r.getVertexPosition(l,_c),r.getVertexPosition(c,xc);const h=ib(r,e,t,i,gc,_c,xc,bg);if(h){const u=new $;Va.getBarycoord(bg,gc,_c,xc,u),n&&(h.uv=Va.getInterpolatedAttribute(n,a,l,c,u,new pt)),s&&(h.uv1=Va.getInterpolatedAttribute(s,a,l,c,u,new pt)),o&&(h.normal=Va.getInterpolatedAttribute(o,a,l,c,u,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new $,materialIndex:0};Va.getNormal(gc,_c,xc,d.normal),h.face=d,h.barycoord=u}return h}const nb=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,sb=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (ατ)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids ατ == 0. Could also do ατ =1-ατ
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,rb=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,ob=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,ab=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,lb=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,cb=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,hb=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,ub=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;

	}

#endif
`,db=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,fb=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,pb=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,mb=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,gb=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,_b=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,xb=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`,yb=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,vb=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Mb=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Sb=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,bb=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Tb=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,wb=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif

#ifdef USE_BATCHING_COLOR

	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );

	vColor.xyz *= batchingColor.xyz;

#endif
`,Eb=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,Ab=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Rb=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Cb=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Pb=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,Ib=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Lb=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Db=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Nb=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Fb=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Ub=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Ob=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,Bb=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,zb=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,kb=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,Vb=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Hb=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Gb=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,Wb=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,Xb=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,qb=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,Yb=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,$b=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,jb=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,Kb=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,Zb=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,Jb=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,Qb=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,eT=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,tT=`

struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );

		return saturate(v);

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	#endif

	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,iT=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,nT=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometryNormal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,sT=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,rT=`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,oT=`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,aT=`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,lT=`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,cT=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,hT=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,uT=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,dT=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,fT=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,pT=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,mT=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,gT=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,_T=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,xT=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`,yT=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,vT=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,MT=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,ST=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,bT=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,TT=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,wT=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,ET=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,AT=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,RT=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,CT=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,PT=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,IT=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,LT=`
#ifdef PREMULTIPLIED_ALPHA

	// Get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,DT=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,NT=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,FT=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,UT=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,OT=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,BT=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
			vec3 bd3D = normalize( lightToPosition );

			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`,zT=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,kT=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`,VT=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,HT=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,GT=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`,WT=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,XT=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,qT=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,YT=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,$T=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,jT=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,KT=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`,ZT=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,JT=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,QT=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,ew=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`,tw=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,iw=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,nw=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,sw=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,rw=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,ow=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,aw=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,lw=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,cw=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`,hw=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,uw=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,dw=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,fw=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,pw=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,mw=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,gw=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,_w=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,xw=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,yw=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,vw=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Mw=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Sw=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,bw=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Tw=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,ww=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Ew=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Aw=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Rw=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Cw=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Pw=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,Iw=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Lw=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Dw=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,Nw=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Fw=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`,$e={alphahash_fragment:nb,alphahash_pars_fragment:sb,alphamap_fragment:rb,alphamap_pars_fragment:ob,alphatest_fragment:ab,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:hb,batching_pars_vertex:ub,batching_vertex:db,begin_vertex:fb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:_b,clipping_planes_fragment:xb,clipping_planes_pars_fragment:yb,clipping_planes_pars_vertex:vb,clipping_planes_vertex:Mb,color_fragment:Sb,color_pars_fragment:bb,color_pars_vertex:Tb,color_vertex:wb,common:Eb,cube_uv_reflection_fragment:Ab,defaultnormal_vertex:Rb,displacementmap_pars_vertex:Cb,displacementmap_vertex:Pb,emissivemap_fragment:Ib,emissivemap_pars_fragment:Lb,colorspace_fragment:Db,colorspace_pars_fragment:Nb,envmap_fragment:Fb,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Ob,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:jb,envmap_vertex:zb,fog_vertex:kb,fog_pars_vertex:Vb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Xb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:Yb,lights_pars_begin:$b,lights_toon_fragment:Kb,lights_toon_pars_fragment:Zb,lights_phong_fragment:Jb,lights_phong_pars_fragment:Qb,lights_physical_fragment:eT,lights_physical_pars_fragment:tT,lights_fragment_begin:iT,lights_fragment_maps:nT,lights_fragment_end:sT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:lT,map_fragment:cT,map_pars_fragment:hT,map_particle_fragment:uT,map_particle_pars_fragment:dT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:pT,morphinstance_vertex:mT,morphcolor_vertex:gT,morphnormal_vertex:_T,morphtarget_pars_vertex:xT,morphtarget_vertex:yT,normal_fragment_begin:vT,normal_fragment_maps:MT,normal_pars_fragment:ST,normal_pars_vertex:bT,normal_vertex:TT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:CT,opaque_fragment:PT,packing:IT,premultiplied_alpha_fragment:LT,project_vertex:DT,dithering_fragment:NT,dithering_pars_fragment:FT,roughnessmap_fragment:UT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:BT,shadowmap_pars_vertex:zT,shadowmap_vertex:kT,shadowmask_pars_fragment:VT,skinbase_vertex:HT,skinning_pars_vertex:GT,skinning_vertex:WT,skinnormal_vertex:XT,specularmap_fragment:qT,specularmap_pars_fragment:YT,tonemapping_fragment:$T,tonemapping_pars_fragment:jT,transmission_fragment:KT,transmission_pars_fragment:ZT,uv_pars_fragment:JT,uv_pars_vertex:QT,uv_vertex:ew,worldpos_vertex:tw,background_vert:iw,background_frag:nw,backgroundCube_vert:sw,backgroundCube_frag:rw,cube_vert:ow,cube_frag:aw,depth_vert:lw,depth_frag:cw,distanceRGBA_vert:hw,distanceRGBA_frag:uw,equirect_vert:dw,equirect_frag:fw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:_w,meshlambert_vert:xw,meshlambert_frag:yw,meshmatcap_vert:vw,meshmatcap_frag:Mw,meshnormal_vert:Sw,meshnormal_frag:bw,meshphong_vert:Tw,meshphong_frag:ww,meshphysical_vert:Ew,meshphysical_frag:Aw,meshtoon_vert:Rw,meshtoon_frag:Cw,points_vert:Pw,points_frag:Iw,shadow_vert:Lw,shadow_frag:Dw,sprite_vert:Nw,sprite_frag:Fw},ge={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},$n={basic:{uniforms:Pi([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Pi([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Pi([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Pi([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Pi([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Pi([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Pi([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Pi([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Pi([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Pi([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Pi([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Pi([ge.common,ge.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Pi([ge.lights,ge.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};$n.physical={uniforms:Pi([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Sc={r:0,b:0,g:0},Er=new mr,Uw=new si;function Ow(r,e,t,i,n,s,o){const a=new at(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const E=p(v);E===null?g(a,l):E&&E.isColor&&(g(E,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,x){const E=p(x);E&&(E.isCubeTexture||E.mapping===qh)?(h===void 0&&(h=new Jn(new Hl(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:va($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Er.copy(x.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uw.makeRotationFromEuler(Er)),h.material.toneMapped=ft.getTransfer(E.colorSpace)!==Mt,(u!==E||d!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Jn(new Yh(2,2),new gr({name:"BackgroundMaterial",uniforms:va($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,x){v.getRGB(Sc,sy(r)),i.buffers.color.setClear(Sc.r,Sc.g,Sc.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(a,l)},render:_,addToRenderList:m,dispose:y}}function Bw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,o=!1;function a(M,P,N,U,G){let Y=!1;const H=u(U,N,P);s!==H&&(s=H,c(s.object)),Y=f(M,U,N,G),Y&&p(M,U,N,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(M,P,N,U),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,N){const U=N.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let Y=G[P.id];Y===void 0&&(Y={},G[P.id]=Y);let H=Y[U];return H===void 0&&(H=d(l()),Y[U]=H),H}function d(M){const P=[],N=[],U=[];for(let G=0;G<t;G++)P[G]=0,N[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,P,N,U){const G=s.attributes,Y=P.attributes;let H=0;const W=N.getAttributes();for(const z in W)if(W[z].location>=0){const I=G[z];let oe=Y[z];if(oe===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),I===void 0||I.attribute!==oe||oe&&I.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function p(M,P,N,U){const G={},Y=P.attributes;let H=0;const W=N.getAttributes();for(const z in W)if(W[z].location>=0){let I=Y[z];I===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(I=M.instanceColor));const oe={};oe.attribute=I,I&&I.data&&(oe.data=I.data),G[z]=oe,H++}s.attributes=G,s.attributesNum=H,s.index=U}function _(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){g(M,0)}function g(M,P){const N=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;N[M]=1,U[M]===0&&(r.enableVertexAttribArray(M),U[M]=1),G[M]!==P&&(r.vertexAttribDivisor(M,P),G[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==M[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function v(M,P,N,U,G,Y,H){H===!0?r.vertexAttribIPointer(M,P,N,G,Y):r.vertexAttribPointer(M,P,N,U,G,Y)}function x(M,P,N,U){_();const G=U.attributes,Y=N.getAttributes(),H=P.defaultAttributeValues;for(const W in Y){const z=Y[W];if(z.location>=0){let te=G[W];if(te===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const I=te.normalized,oe=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;const je=Ne.buffer,K=Ne.type,ne=Ne.bytesPerElement,fe=K===r.INT||K===r.UNSIGNED_INT||te.gpuType===Np;if(te.isInterleavedBufferAttribute){const re=te.data,be=re.stride,ze=te.offset;if(re.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)g(z.location+Le,re.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Le=0;Le<z.locationSize;Le++)m(z.location+Le);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Le=0;Le<z.locationSize;Le++)v(z.location+Le,oe/z.locationSize,K,I,be*ne,(ze+oe/z.locationSize*Le)*ne,fe)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)g(z.location+re,te.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<z.locationSize;re++)m(z.location+re);r.bindBuffer(r.ARRAY_BUFFER,je);for(let re=0;re<z.locationSize;re++)v(z.location+re,oe/z.locationSize,K,I,oe*ne,oe/z.locationSize*re*ne,fe)}}else if(H!==void 0){const I=H[W];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(z.location,I);break;case 3:r.vertexAttrib3fv(z.location,I);break;case 4:r.vertexAttrib4fv(z.location,I);break;default:r.vertexAttrib1fv(z.location,I)}}}}y()}function E(){R();for(const M in i){const P=i[M];for(const N in P){const U=P[N];for(const G in U)h(U[G].object),delete U[G];delete P[N]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const N in P){const U=P[N];for(const G in U)h(U[G].object),delete U[G];delete P[N]}delete i[M.id]}function S(M){for(const P in i){const N=i[P];if(N[M.id]===void 0)continue;const U=N[M.id];for(const G in U)h(U[G].object),delete U[G];delete N[M.id]}}function R(){b(),o=!0,s!==n&&(s=n,c(s.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function zw(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];t.update(p,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kw(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(S){return!(S!==zn&&i.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const R=S===kl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ss&&i.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Es&&!R)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:w}}function Vw(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Ur,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,v=y*4;let x=g.clippingState||null;l.value=x,x=h(p,d,v,f);for(let E=0;E!==v;++E)x[E]=t[E];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}let To,Hw=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{To===void 0&&(To=Nl("canvas")),To.width=e.width,To.height=e.height;const n=To.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=To}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ps(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ps(t[i]/255)*255):t[i]=Ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gw=0,Gp=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Vu(n[o].image)):s.push(Vu(n[o]))}else s=Vu(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Vu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hw.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ww=0,An=class gh extends oo{constructor(e=gh.DEFAULT_IMAGE,t=gh.DEFAULT_MAPPING,i=Hr,n=Hr,s=bn,o=Gr,a=zn,l=ss,c=gh.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=Ta(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Fx;An.DEFAULT_ANISOTROPY=1;class Xw extends oo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const n={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new An(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gp(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class so extends Xw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}let oy=class extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new si,this.projectionMatrix=new si,this.projectionMatrixInverse=new si,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Gs=new $,Tg=new pt,wg=new pt;let Un=class extends oy{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gs.x,Gs.y).multiplyScalar(-e/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gs.x,Gs.y).multiplyScalar(-e/Gs.z)}getViewSize(e,t){return this.getViewBounds(e,Tg,wg),t.subVectors(wg,Tg)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vu*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const wo=-90,Eo=1;class qw extends wn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Un(wo,Eo,e,t);n.layers=this.layers,this.add(n);const s=new Un(wo,Eo,e,t);s.layers=this.layers,this.add(s);const o=new Un(wo,Eo,e,t);o.layers=this.layers,this.add(o);const a=new Un(wo,Eo,e,t);a.layers=this.layers,this.add(a);const l=new Un(wo,Eo,e,t);l.layers=this.layers,this.add(l);const c=new Un(wo,Eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===As)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dh)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class ay extends An{constructor(e=[],t=_a,i,n,s,o,a,l,c,h){super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yw extends so{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ay(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Hl(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:va(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xi,blending:cr});s.uniforms.tEquirect.value=t;const o=new Jn(n,s),a=t.minFilter;return t.minFilter===Gr&&(t.minFilter=bn),new qw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}function $w(r){let e=new WeakMap;function t(o,a){return a===gf?o.mapping=_a:a===_f&&(o.mapping=xa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gf||a===_f)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yw(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}let Wp=class extends oy{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};const Ko=4,Eg=[.125,.215,.35,.446,.526,.582],zr=20,Hu=new Wp,Ag=new at;let Gu=null,Wu=0,Xu=0,qu=!1;const Or=(1+Math.sqrt(5))/2,Ao=1/Or,Rg=[new $(-Or,Ao,0),new $(Or,Ao,0),new $(-Ao,0,Or),new $(Ao,0,Or),new $(0,Or,-Ao),new $(0,Or,Ao),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],jw=new $;class Cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,s={}){const{size:o=256,position:a=jw}=s;Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=qu,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_a||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:kl,format:zn,colorSpace:ya,depthBuffer:!1},n=Pg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kw(s)),this._blurMaterial=Zw(s,e,t)}return n}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,Hu)}_sceneToCubeUV(e,t,i,n,s){const l=new Un(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ag),u.toneMapping=hr,u.autoClear=!1;const p=new ry({name:"PMREM.Background",side:Xi,depthWrite:!1,depthTest:!1}),_=new Jn(new Hl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Ag),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const x=this._cubeSize;bc(n,v*x,y>2?x:0,x,x),u.setRenderTarget(n),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===_a||e.mapping===xa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rg[(n-s-1)%Rg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jn(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zr-1),_=s/p,m=isFinite(s)?1+Math.floor(h*_):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const g=[];let y=0;for(let S=0;S<zr;++S){const R=S/_,b=Math.exp(-R*R/2);g.push(b),S===0?y+=b:S<m&&(y+=2*b)}for(let S=0;S<g.length;S++)g[S]=g[S]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;const x=this._sizeLods[n],E=3*x*(n>v-Ko?n-v+Ko:0),w=4*(this._cubeSize-x);bc(t,E,w,3*x,2*x),l.setRenderTarget(t),l.render(u,Hu)}}function Kw(r){const e=[],t=[],i=[];let n=r;const s=r-Ko+1+Eg.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-Ko?l=Eg[o-r+Ko-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,m=2,g=1,y=new Float32Array(_*p*f),v=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let w=0;w<f;w++){const S=w%3*2/3-1,R=w>2?0:-1,b=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];y.set(b,_*p*w),v.set(d,m*p*w);const M=[w,w,w,w,w,w];x.set(M,g*p*w)}const E=new wa;E.setAttribute("position",new ts(y,_)),E.setAttribute("uv",new ts(v,m)),E.setAttribute("faceIndex",new ts(x,g)),e.push(E),n>Ko&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pg(r,e,t){const i=new so(r,e,t);return i.texture.mapping=qh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bc(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Zw(r,e,t){const i=new Float32Array(zr),n=new $(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Ig(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Lg(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Xp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jw(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gf||l===_f,h=l===_a||l===xa;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cg(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Cg(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qw(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&mh("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function eE(r,e,t,i){const n={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const E=y[v+0],w=y[v+1],S=y[v+2];d.push(E,w,w,S,S,E)}}else if(p!==void 0){const y=p.array;_=p.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const E=v+0,w=v+1,S=v+2;d.push(E,w,w,S,S,E)}}else return;const m=new(iy(d)?Qx:Jx)(d,1);m.version=_;const g=s.get(u);g&&e.remove(g),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function tE(r,e,t){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,i,1)}function u(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y]*_[y];t.update(g,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}class ly extends An{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kn,this.minFilter=kn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}function nE(r,e,t){const i=new WeakMap,n=new Kt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const S=new Float32Array(E*w*4*u),R=new ly(S,E,w,u);R.type=Es,R.needsUpdate=!0;const b=x*4;for(let P=0;P<u;P++){const N=g[P],U=y[P],G=v[P],Y=E*w*4*P;for(let H=0;H<N.count;H++){const W=H*b;p===!0&&(n.fromBufferAttribute(N,H),S[Y+W+0]=n.x,S[Y+W+1]=n.y,S[Y+W+2]=n.z,S[Y+W+3]=0),_===!0&&(n.fromBufferAttribute(U,H),S[Y+W+4]=n.x,S[Y+W+5]=n.y,S[Y+W+6]=n.z,S[Y+W+7]=0),m===!0&&(n.fromBufferAttribute(G,H),S[Y+W+8]=n.x,S[Y+W+9]=n.y,S[Y+W+10]=n.z,S[Y+W+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new pt(E,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function sE(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class rE extends An{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kn,this.minFilter=kn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cy extends An{constructor(e,t,i=no,n,s,o,a=kn,l=kn,c,h=Ll){if(h!==Ll&&h!==Dl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hy=new An,Dg=new cy(1,1),uy=new ly,dy=new rE,fy=new ay,Ng=[],Fg=[],Ug=new Float32Array(16),Og=new Float32Array(9),Bg=new Float32Array(4);function Ea(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Ng[n];if(s===void 0&&(s=new Float32Array(n),Ng[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ri(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function oi(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function $h(r,e){let t=Fg[e];t===void 0&&(t=new Int32Array(e),Fg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function oE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;r.uniform2fv(this.addr,e),oi(t,e)}}function lE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ri(t,e))return;r.uniform3fv(this.addr,e),oi(t,e)}}function cE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;r.uniform4fv(this.addr,e),oi(t,e)}}function hE(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),oi(t,e)}else{if(ri(t,i))return;Bg.set(i),r.uniformMatrix2fv(this.addr,!1,Bg),oi(t,i)}}function uE(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),oi(t,e)}else{if(ri(t,i))return;Og.set(i),r.uniformMatrix3fv(this.addr,!1,Og),oi(t,i)}}function dE(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ri(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),oi(t,e)}else{if(ri(t,i))return;Ug.set(i),r.uniformMatrix4fv(this.addr,!1,Ug),oi(t,i)}}function fE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;r.uniform2iv(this.addr,e),oi(t,e)}}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ri(t,e))return;r.uniform3iv(this.addr,e),oi(t,e)}}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;r.uniform4iv(this.addr,e),oi(t,e)}}function _E(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ri(t,e))return;r.uniform2uiv(this.addr,e),oi(t,e)}}function yE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ri(t,e))return;r.uniform3uiv(this.addr,e),oi(t,e)}}function vE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ri(t,e))return;r.uniform4uiv(this.addr,e),oi(t,e)}}function ME(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Dg.compareFunction=Xx,s=Dg):s=hy,t.setTexture2D(e||s,n)}function SE(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||dy,n)}function bE(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||fy,n)}function TE(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||uy,n)}function wE(r){switch(r){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return hE;case 35675:return uE;case 35676:return dE;case 5124:case 35670:return fE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return _E;case 36294:return xE;case 36295:return yE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return TE}}function EE(r,e){r.uniform1fv(this.addr,e)}function AE(r,e){const t=Ea(e,this.size,2);r.uniform2fv(this.addr,t)}function RE(r,e){const t=Ea(e,this.size,3);r.uniform3fv(this.addr,t)}function CE(r,e){const t=Ea(e,this.size,4);r.uniform4fv(this.addr,t)}function PE(r,e){const t=Ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IE(r,e){const t=Ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function LE(r,e){const t=Ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function DE(r,e){r.uniform1iv(this.addr,e)}function NE(r,e){r.uniform2iv(this.addr,e)}function FE(r,e){r.uniform3iv(this.addr,e)}function UE(r,e){r.uniform4iv(this.addr,e)}function OE(r,e){r.uniform1uiv(this.addr,e)}function BE(r,e){r.uniform2uiv(this.addr,e)}function zE(r,e){r.uniform3uiv(this.addr,e)}function kE(r,e){r.uniform4uiv(this.addr,e)}function VE(r,e,t){const i=this.cache,n=e.length,s=$h(t,n);ri(i,s)||(r.uniform1iv(this.addr,s),oi(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||hy,s[o])}function HE(r,e,t){const i=this.cache,n=e.length,s=$h(t,n);ri(i,s)||(r.uniform1iv(this.addr,s),oi(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||dy,s[o])}function GE(r,e,t){const i=this.cache,n=e.length,s=$h(t,n);ri(i,s)||(r.uniform1iv(this.addr,s),oi(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||fy,s[o])}function WE(r,e,t){const i=this.cache,n=e.length,s=$h(t,n);ri(i,s)||(r.uniform1iv(this.addr,s),oi(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||uy,s[o])}function XE(r){switch(r){case 5126:return EE;case 35664:return AE;case 35665:return RE;case 35666:return CE;case 35674:return PE;case 35675:return IE;case 35676:return LE;case 5124:case 35670:return DE;case 35667:case 35671:return NE;case 35668:case 35672:return FE;case 35669:case 35673:return UE;case 5125:return OE;case 36294:return BE;case 36295:return zE;case 36296:return kE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}class qE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wE(t.type)}}class YE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XE(t.type)}}class $E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function zg(r,e){r.seq.push(e),r.map[e.id]=e}function jE(r,e,t){const i=r.name,n=i.length;for(Yu.lastIndex=0;;){const s=Yu.exec(i),o=Yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){zg(t,c===void 0?new qE(a,r,e):new YE(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new $E(a),zg(t,u)),t=u}}}class _h{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);jE(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function kg(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const KE=37297;let ZE=0;function JE(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Vg=new Ze;function QE(r){ft._getMatrix(Vg,ft.workingColorSpace,r);const e=`mat3( ${Vg.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Lh:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Hg(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+JE(r.getShaderSource(e),o)}else return n}function e1(r,e){const t=QE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t1(r,e){let t;switch(e){case dS:t="Linear";break;case fS:t="Reinhard";break;case pS:t="Cineon";break;case Nx:t="ACESFilmic";break;case gS:t="AgX";break;case _S:t="Neutral";break;case mS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new $;function i1(){ft.getLuminanceCoefficients(Tc);const r=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function s1(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r1(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function sl(r){return r!==""}function Gg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(r){return r.replace(o1,l1)}const a1=new Map;function l1(r,e){let t=$e[e];if(t===void 0){const i=a1.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(t)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(r){return r.replace(c1,h1)}function h1(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function qg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===XM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xs&&(e="SHADOWMAP_TYPE_VSM"),e}function d1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _a:case xa:e="ENVMAP_TYPE_CUBE";break;case qh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xa:e="ENVMAP_MODE_REFRACTION";break}return e}function p1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dx:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case uS:e="ENVMAP_BLENDING_ADD";break}return e}function m1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function g1(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=u1(t),c=d1(t),h=f1(t),u=p1(t),d=m1(t),f=n1(t),p=s1(s),_=n.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sl).join(`
`),g.length>0&&(g+=`
`)):(m=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),g=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?$e.tonemapping_pars_fragment:"",t.toneMapping!==hr?t1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,e1("linearToOutputTexel",t.outputColorSpace),i1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sl).join(`
`)),o=Kf(o),o=Gg(o,t),o=Wg(o,t),a=Kf(a),a=Gg(a,t),a=Wg(a,t),o=Xg(o),a=Xg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=y+m+o,x=y+g+a,E=kg(n,n.VERTEX_SHADER,v),w=kg(n,n.FRAGMENT_SHADER,x);n.attachShader(_,E),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function S(P){if(r.debug.checkShaderErrors){const N=n.getProgramInfoLog(_).trim(),U=n.getShaderInfoLog(E).trim(),G=n.getShaderInfoLog(w).trim();let Y=!0,H=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,E,w);else{const W=Hg(n,E,"vertex"),z=Hg(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+W+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||G==="")&&(H=!1);H&&(P.diagnostics={runnable:Y,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:g}})}n.deleteShader(E),n.deleteShader(w),R=new _h(n,_),b=r1(n,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,KE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let _1=0;class x1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new y1(e),t.set(e,i)),i}}class y1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function v1(r,e,t,i,n,s,o){const a=new ty,l=new x1,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,N,U){const G=N.fog,Y=U.geometry,H=b.isMeshStandardMaterial?N.environment:null,W=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),z=W&&W.mapping===qh?W.image.height:null,te=p[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=I!==void 0?I.length:0;let Ne=0;Y.morphAttributes.position!==void 0&&(Ne=1),Y.morphAttributes.normal!==void 0&&(Ne=2),Y.morphAttributes.color!==void 0&&(Ne=3);let je,K,ne,fe;if(te){const _e=$n[te];je=_e.vertexShader,K=_e.fragmentShader}else je=b.vertexShader,K=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),fe=l.getFragmentShaderID(b);const re=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,Le=U.isBatchedMesh===!0,it=!!b.map,Je=!!b.matcap,ve=!!W,L=!!b.aoMap,St=!!b.lightMap,Ve=!!b.bumpMap,B=!!b.normalMap,Se=!!b.displacementMap,rt=!!b.emissiveMap,we=!!b.metalnessMap,C=!!b.roughnessMap,T=b.anisotropy>0,k=b.clearcoat>0,J=b.dispersion>0,ee=b.iridescence>0,Z=b.sheen>0,he=b.transmission>0,le=T&&!!b.anisotropyMap,Ee=k&&!!b.clearcoatMap,Ce=k&&!!b.clearcoatNormalMap,se=k&&!!b.clearcoatRoughnessMap,ae=ee&&!!b.iridescenceMap,Fe=ee&&!!b.iridescenceThicknessMap,De=Z&&!!b.sheenColorMap,xe=Z&&!!b.sheenRoughnessMap,qe=!!b.specularMap,Be=!!b.specularColorMap,ht=!!b.specularIntensityMap,D=he&&!!b.transmissionMap,ue=he&&!!b.thicknessMap,j=!!b.gradientMap,Q=!!b.alphaMap,ce=b.alphaTest>0,de=!!b.alphaHash,ke=!!b.extensions;let ut=hr;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ut=r.toneMapping);const Nt={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:K,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Le,batchingColor:Le&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ya,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:Je,envMap:ve,envMapMode:ve&&W.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:St,bumpMap:Ve,normalMap:B,displacementMap:d&&Se,emissiveMap:rt,normalMapObjectSpace:B&&b.normalMapType===TS,normalMapTangentSpace:B&&b.normalMapType===Wx,metalnessMap:we,roughnessMap:C,anisotropy:T,anisotropyMap:le,clearcoat:k,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:se,dispersion:J,iridescence:ee,iridescenceMap:ae,iridescenceThicknessMap:Fe,sheen:Z,sheenColorMap:De,sheenRoughnessMap:xe,specularMap:qe,specularColorMap:Be,specularIntensityMap:ht,transmission:he,transmissionMap:D,thicknessMap:ue,gradientMap:j,opaque:b.transparent===!1&&b.blending===ra&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:de,combine:b.combine,mapUv:it&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:St&&_(b.lightMap.channel),bumpMapUv:Ve&&_(b.bumpMap.channel),normalMapUv:B&&_(b.normalMap.channel),displacementMapUv:Se&&_(b.displacementMap.channel),emissiveMapUv:rt&&_(b.emissiveMap.channel),metalnessMapUv:we&&_(b.metalnessMap.channel),roughnessMapUv:C&&_(b.roughnessMap.channel),anisotropyMapUv:le&&_(b.anisotropyMap.channel),clearcoatMapUv:Ee&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(b.sheenRoughnessMap.channel),specularMapUv:qe&&_(b.specularMap.channel),specularColorMapUv:Be&&_(b.specularColorMap.channel),specularIntensityMapUv:ht&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:ue&&_(b.thicknessMap.channel),alphaMapUv:Q&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(B||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(it||Q),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:rt&&b.emissiveMap.isVideoTexture===!0&&ft.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bs,flipSided:b.side===Xi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function g(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=p[b.type];let P;if(M){const N=$n[M];P=JS.clone(N.uniforms)}else P=b.uniforms;return P}function E(b,M){let P;for(let N=0,U=h.length;N<U;N++){const G=h[N];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new g1(r,M,b,s),h.push(P)),P}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:R}}function M1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function S1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Yg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $g(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,p,_,m){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},r[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function a(u,d,f,p,_,m){const g=o(u,d,f,p,_,m);f.transmission>0?i.push(g):f.transparent===!0?n.push(g):t.push(g)}function l(u,d,f,p,_,m){const g=o(u,d,f,p,_,m);f.transmission>0?i.unshift(g):f.transparent===!0?n.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||S1),i.length>1&&i.sort(d||Yg),n.length>1&&n.sort(d||Yg)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function b1(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new $g,r.set(i,[o])):n>=s.length?(o=new $g,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function T1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new at};break;case"SpotLight":t={position:new $,direction:new $,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function w1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let E1=0;function A1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function R1(r){const e=new T1,t=w1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const n=new $,s=new si,o=new si;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,v=0,x=0,E=0,w=0,S=0;c.sort(A1);for(let b=0,M=c.length;b<M;b++){const P=c[b],N=P.color,U=P.intensity,G=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],U);S++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,z=t.get(P);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=H,f++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(U),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const W=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,W.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=W.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Y,x++}_++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(N).multiplyScalar(U),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const W=P.shadow,z=t.get(P);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,i.pointShadow[p]=z,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=P.shadow.matrix,v++}i.point[p]=H,p++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(U),H.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[g]=H,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==E||R.numLightProbes!==S)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=S,R.directionalLength=f,R.pointLength=p,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=E,R.numLightProbes=S,i.version=E1++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const v=c[g];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function jg(r){const e=new R1(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function C1(r){let e=new WeakMap;function t(n,s=0){const o=e.get(n);let a;return o===void 0?(a=new jg(r),e.set(n,[a])):s>=o.length?(a=new jg(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class P1 extends Gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends Gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,D1=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function N1(r,e,t){let i=new Hp;const n=new pt,s=new pt,o=new Kt,a=new P1({depthPacking:bS}),l=new I1,c={},h=t.maxTextureSize,u={[pr]:Xi,[Xi]:pr,[bs]:bs},d=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:L1,fragmentShader:D1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new wa;p.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lx;let g=this.type;this.render=function(w,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(cr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=g!==xs&&this.type===xs,G=g===xs&&this.type!==xs;for(let Y=0,H=w.length;Y<H;Y++){const W=w[Y],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const te=z.getFrameExtents();if(n.multiply(te),s.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/te.x),n.x=s.x*te.x,z.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/te.y),n.y=s.y*te.y,z.mapSize.y=s.y)),z.map===null||U===!0||G===!0){const oe=this.type!==xs?{minFilter:kn,magFilter:kn}:{};z.map!==null&&z.map.dispose(),z.map=new so(n.x,n.y,oe),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const I=z.getViewportCount();for(let oe=0;oe<I;oe++){const Ne=z.getViewport(oe);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),N.viewport(o),z.updateMatrices(W,oe),i=z.getFrustum(),x(S,R,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===xs&&y(z,R),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(b,M,P)};function y(w,S){const R=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new so(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,R,f,_,null)}function v(w,S,R,b){let M=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const N=M.uuid,U=S.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let Y=G[U];Y===void 0&&(Y=M.clone(),G[U]=Y,S.addEventListener("dispose",E)),M=Y}if(M.visible=S.visible,M.wireframe=S.wireframe,b===xs?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=r.properties.get(M);N.light=R}return M}function x(w,S,R,b,M){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===xs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const U=e.update(w),G=w.material;if(Array.isArray(G)){const Y=U.groups;for(let H=0,W=Y.length;H<W;H++){const z=Y[H],te=G[z.materialIndex];if(te&&te.visible){const I=v(w,te,b,M);w.onBeforeShadow(r,w,S,R,U,I,z),r.renderBufferDirect(R,null,U,I,w,z),w.onAfterShadow(r,w,S,R,U,I,z)}}}else if(G.visible){const Y=v(w,G,b,M);w.onBeforeShadow(r,w,S,R,U,Y,null),r.renderBufferDirect(R,null,U,Y,w,null),w.onAfterShadow(r,w,S,R,U,Y,null)}}const N=w.children;for(let U=0,G=N.length;U<G;U++)x(N[U],S,R,b,M)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const b=c[R],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const F1={[cf]:hf,[uf]:pf,[df]:mf,[ga]:ff,[hf]:cf,[pf]:uf,[mf]:df,[ff]:ga};function U1(r,e){function t(){let D=!1;const ue=new Kt;let j=null;const Q=new Kt(0,0,0,0);return{setMask:function(ce){j!==ce&&!D&&(r.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){D=ce},setClear:function(ce,de,ke,ut,Nt){Nt===!0&&(ce*=ut,de*=ut,ke*=ut),ue.set(ce,de,ke,ut),Q.equals(ue)===!1&&(r.clearColor(ce,de,ke,ut),Q.copy(ue))},reset:function(){D=!1,j=null,Q.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,j=null,Q=null,ce=null;return{setReversed:function(de){if(ue!==de){const ke=e.get("EXT_clip_control");de?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ue=de;const ut=ce;ce=null,this.setClear(ut)}},getReversed:function(){return ue},setTest:function(de){de?re(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(de){j!==de&&!D&&(r.depthMask(de),j=de)},setFunc:function(de){if(ue&&(de=F1[de]),Q!==de){switch(de){case cf:r.depthFunc(r.NEVER);break;case hf:r.depthFunc(r.ALWAYS);break;case uf:r.depthFunc(r.LESS);break;case ga:r.depthFunc(r.LEQUAL);break;case df:r.depthFunc(r.EQUAL);break;case ff:r.depthFunc(r.GEQUAL);break;case pf:r.depthFunc(r.GREATER);break;case mf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=de}},setLocked:function(de){D=de},setClear:function(de){ce!==de&&(ue&&(de=1-de),r.clearDepth(de),ce=de)},reset:function(){D=!1,j=null,Q=null,ce=null,ue=!1}}}function n(){let D=!1,ue=null,j=null,Q=null,ce=null,de=null,ke=null,ut=null,Nt=null;return{setTest:function(_e){D||(_e?re(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(_e){ue!==_e&&!D&&(r.stencilMask(_e),ue=_e)},setFunc:function(_e,Ae,Ye){(j!==_e||Q!==Ae||ce!==Ye)&&(r.stencilFunc(_e,Ae,Ye),j=_e,Q=Ae,ce=Ye)},setOp:function(_e,Ae,Ye){(de!==_e||ke!==Ae||ut!==Ye)&&(r.stencilOp(_e,Ae,Ye),de=_e,ke=Ae,ut=Ye)},setLocked:function(_e){D=_e},setClear:function(_e){Nt!==_e&&(r.clearStencil(_e),Nt=_e)},reset:function(){D=!1,ue=null,j=null,Q=null,ce=null,de=null,ke=null,ut=null,Nt=null}}}const s=new t,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,y=null,v=null,x=null,E=null,w=null,S=new at(0,0,0),R=0,b=!1,M=null,P=null,N=null,U=null,G=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=W>=2);let te=null,I={};const oe=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),je=new Kt().fromArray(oe),K=new Kt().fromArray(Ne);function ne(D,ue,j,Q){const ce=new Uint8Array(4),de=r.createTexture();r.bindTexture(D,de),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<j;ke++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ue+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return de}const fe={};fe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(ga),Ve(!1),B(ig),re(r.CULL_FACE),L(cr);function re(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function be(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function ze(D,ue){return u[D]!==ue?(r.bindFramebuffer(D,ue),u[D]=ue,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Le(D,ue){let j=f,Q=!1;if(D){j=d.get(ue),j===void 0&&(j=[],d.set(ue,j));const ce=D.textures;if(j.length!==ce.length||j[0]!==r.COLOR_ATTACHMENT0){for(let de=0,ke=ce.length;de<ke;de++)j[de]=r.COLOR_ATTACHMENT0+de;j.length=ce.length,Q=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,Q=!0);Q&&r.drawBuffers(j)}function it(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const Je={[Br]:r.FUNC_ADD,[YM]:r.FUNC_SUBTRACT,[$M]:r.FUNC_REVERSE_SUBTRACT};Je[jM]=r.MIN,Je[KM]=r.MAX;const ve={[ZM]:r.ZERO,[JM]:r.ONE,[QM]:r.SRC_COLOR,[af]:r.SRC_ALPHA,[rS]:r.SRC_ALPHA_SATURATE,[nS]:r.DST_COLOR,[tS]:r.DST_ALPHA,[eS]:r.ONE_MINUS_SRC_COLOR,[lf]:r.ONE_MINUS_SRC_ALPHA,[sS]:r.ONE_MINUS_DST_COLOR,[iS]:r.ONE_MINUS_DST_ALPHA,[oS]:r.CONSTANT_COLOR,[aS]:r.ONE_MINUS_CONSTANT_COLOR,[lS]:r.CONSTANT_ALPHA,[cS]:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,ue,j,Q,ce,de,ke,ut,Nt,_e){if(D===cr){_===!0&&(be(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),D!==qM){if(D!==m||_e!==b){if((g!==Br||x!==Br)&&(r.blendEquation(r.FUNC_ADD),g=Br,x=Br),_e)switch(D){case ra:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ng:r.blendFunc(r.ONE,r.ONE);break;case sg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ra:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ng:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,E=null,w=null,S.set(0,0,0),R=0,m=D,b=_e}return}ce=ce||ue,de=de||j,ke=ke||Q,(ue!==g||ce!==x)&&(r.blendEquationSeparate(Je[ue],Je[ce]),g=ue,x=ce),(j!==y||Q!==v||de!==E||ke!==w)&&(r.blendFuncSeparate(ve[j],ve[Q],ve[de],ve[ke]),y=j,v=Q,E=de,w=ke),(ut.equals(S)===!1||Nt!==R)&&(r.blendColor(ut.r,ut.g,ut.b,Nt),S.copy(ut),R=Nt),m=D,b=!1}function St(D,ue){D.side===bs?be(r.CULL_FACE):re(r.CULL_FACE);let j=D.side===Xi;ue&&(j=!j),Ve(j),D.blending===ra&&D.transparent===!1?L(cr):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function B(D){D!==GM?(re(r.CULL_FACE),D!==P&&(D===ig?r.cullFace(r.BACK):D===WM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),P=D}function Se(D){D!==N&&(H&&r.lineWidth(D),N=D)}function rt(D,ue,j){D?(re(r.POLYGON_OFFSET_FILL),(U!==ue||G!==j)&&(r.polygonOffset(ue,j),U=ue,G=j)):be(r.POLYGON_OFFSET_FILL)}function we(D){D?re(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function C(D){D===void 0&&(D=r.TEXTURE0+Y-1),te!==D&&(r.activeTexture(D),te=D)}function T(D,ue,j){j===void 0&&(te===null?j=r.TEXTURE0+Y-1:j=te);let Q=I[j];Q===void 0&&(Q={type:void 0,texture:void 0},I[j]=Q),(Q.type!==D||Q.texture!==ue)&&(te!==j&&(r.activeTexture(j),te=j),r.bindTexture(D,ue||fe[D]),Q.type=D,Q.texture=ue)}function k(){const D=I[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){je.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function xe(D){K.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function qe(D,ue){let j=c.get(ue);j===void 0&&(j=new WeakMap,c.set(ue,j));let Q=j.get(D);Q===void 0&&(Q=r.getUniformBlockIndex(ue,D.name),j.set(D,Q))}function Be(D,ue){const Q=c.get(ue).get(D);l.get(ue)!==Q&&(r.uniformBlockBinding(ue,Q,D.__bindingPointIndex),l.set(ue,Q))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,I={},u={},d=new WeakMap,f=[],p=null,_=!1,m=null,g=null,y=null,v=null,x=null,E=null,w=null,S=new at(0,0,0),R=0,b=!1,M=null,P=null,N=null,U=null,G=null,je.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:ze,drawBuffers:Le,useProgram:it,setBlending:L,setMaterial:St,setFlipSided:Ve,setCullFace:B,setLineWidth:Se,setPolygonOffset:rt,setScissorTest:we,activeTexture:C,bindTexture:T,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:ae,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:Ce,texStorage3D:se,texSubImage2D:Z,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:Ee,scissor:De,viewport:xe,reset:ht}}function Kg(r,e,t,i){const n=O1(i);switch(t){case zx:return r*e;case Vx:return r*e/n.components*n.byteLength;case Op:return r*e/n.components*n.byteLength;case Hx:return r*e*2/n.components*n.byteLength;case Bp:return r*e*2/n.components*n.byteLength;case kx:return r*e*3/n.components*n.byteLength;case zn:return r*e*4/n.components*n.byteLength;case zp:return r*e*4/n.components*n.byteLength;case ch:case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uh:case dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mf:case bf:return Math.max(r,16)*Math.max(e,8)/4;case vf:case Sf:return Math.max(r,8)*Math.max(e,8)/2;case Tf:case wf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ef:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fh:case Vf:case Hf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gx:case Gf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O1(r){switch(r){case ss:case Ux:return{byteLength:1,components:1};case Pl:case Ox:case kl:return{byteLength:2,components:1};case Fp:case Up:return{byteLength:2,components:4};case no:case Np:case Es:return{byteLength:4,components:1};case Bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function B1(r,e,t,i,n,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return f?new OffscreenCanvas(C,T):Nl("canvas")}function _(C,T,k){let J=1;const ee=we(C);if((ee.width>k||ee.height>k)&&(J=k/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*ee.width),he=Math.floor(J*ee.height);u===void 0&&(u=p(Z,he));const le=T?p(Z,he):u;return le.width=Z,le.height=he,le.getContext("2d").drawImage(C,0,0,Z,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+he+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(C,T,k,J,ee=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=T;if(T===r.RED&&(k===r.FLOAT&&(Z=r.R32F),k===r.HALF_FLOAT&&(Z=r.R16F),k===r.UNSIGNED_BYTE&&(Z=r.R8)),T===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.R8UI),k===r.UNSIGNED_SHORT&&(Z=r.R16UI),k===r.UNSIGNED_INT&&(Z=r.R32UI),k===r.BYTE&&(Z=r.R8I),k===r.SHORT&&(Z=r.R16I),k===r.INT&&(Z=r.R32I)),T===r.RG&&(k===r.FLOAT&&(Z=r.RG32F),k===r.HALF_FLOAT&&(Z=r.RG16F),k===r.UNSIGNED_BYTE&&(Z=r.RG8)),T===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RG8UI),k===r.UNSIGNED_SHORT&&(Z=r.RG16UI),k===r.UNSIGNED_INT&&(Z=r.RG32UI),k===r.BYTE&&(Z=r.RG8I),k===r.SHORT&&(Z=r.RG16I),k===r.INT&&(Z=r.RG32I)),T===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),k===r.UNSIGNED_INT&&(Z=r.RGB32UI),k===r.BYTE&&(Z=r.RGB8I),k===r.SHORT&&(Z=r.RGB16I),k===r.INT&&(Z=r.RGB32I)),T===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),k===r.UNSIGNED_INT&&(Z=r.RGBA32UI),k===r.BYTE&&(Z=r.RGBA8I),k===r.SHORT&&(Z=r.RGBA16I),k===r.INT&&(Z=r.RGBA32I)),T===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),T===r.RGBA){const he=ee?Lh:ft.getTransfer(J);k===r.FLOAT&&(Z=r.RGBA32F),k===r.HALF_FLOAT&&(Z=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Z=he===Mt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(C,T){let k;return C?T===null||T===no||T===Il?k=r.DEPTH24_STENCIL8:T===Es?k=r.DEPTH32F_STENCIL8:T===Pl&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===no||T===Il?k=r.DEPTH_COMPONENT24:T===Es?k=r.DEPTH_COMPONENT32F:T===Pl&&(k=r.DEPTH_COMPONENT16),k}function E(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){const T=C.target;T.removeEventListener("dispose",w),R(T),T.isVideoTexture&&h.delete(T)}function S(C){const T=C.target;T.removeEventListener("dispose",S),M(T)}function R(C){const T=i.get(C);if(T.__webglInit===void 0)return;const k=C.source,J=d.get(k);if(J){const ee=J[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys(J).length===0&&d.delete(k)}i.remove(C)}function b(C){const T=i.get(C);r.deleteTexture(T.__webglTexture);const k=C.source,J=d.get(k);delete J[T.__cacheKey],o.memory.textures--}function M(C){const T=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ee=0;ee<T.__webglFramebuffer[J].length;ee++)r.deleteFramebuffer(T.__webglFramebuffer[J][ee]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=C.textures;for(let J=0,ee=k.length;J<ee;J++){const Z=i.get(k[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(C)}let P=0;function N(){P=0}function U(){const C=P;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function G(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function Y(C,T){const k=i.get(C);if(C.isVideoTexture&&Se(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,C,T);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+T)}function H(C,T){const k=i.get(C);if(C.version>0&&k.__version!==C.version){K(k,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+T)}function W(C,T){const k=i.get(C);if(C.version>0&&k.__version!==C.version){K(k,C,T);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+T)}function z(C,T){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ne(k,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+T)}const te={[xf]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[yf]:r.MIRRORED_REPEAT},I={[kn]:r.NEAREST,[xS]:r.NEAREST_MIPMAP_NEAREST,[sc]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[xu]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},oe={[wS]:r.NEVER,[IS]:r.ALWAYS,[ES]:r.LESS,[Xx]:r.LEQUAL,[AS]:r.EQUAL,[PS]:r.GEQUAL,[RS]:r.GREATER,[CS]:r.NOTEQUAL};function Ne(C,T){if(T.type===Es&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===xu||T.magFilter===sc||T.magFilter===Gr||T.minFilter===bn||T.minFilter===xu||T.minFilter===sc||T.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,I[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,I[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===kn||T.minFilter!==sc&&T.minFilter!==Gr||T.type===Es&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function je(C,T){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const J=T.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const Z=G(T);if(Z!==C.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[Z].usedTimes++;const he=ee[C.__cacheKey];he!==void 0&&(ee[C.__cacheKey].usedTimes--,he.usedTimes===0&&b(T)),C.__cacheKey=Z,C.__webglTexture=ee[Z].texture}return k}function K(C,T,k){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const ee=je(C,T),Z=T.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+k);const he=i.get(Z);if(Z.version!==he.__version||ee===!0){t.activeTexture(r.TEXTURE0+k);const le=ft.getPrimaries(ft.workingColorSpace),Ee=T.colorSpace===Qs?null:ft.getPrimaries(T.colorSpace),Ce=T.colorSpace===Qs||le===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let se=_(T.image,!1,n.maxTextureSize);se=rt(T,se);const ae=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let De=v(T.internalFormat,ae,Fe,T.colorSpace,T.isVideoTexture);Ne(J,T);let xe;const qe=T.mipmaps,Be=T.isVideoTexture!==!0,ht=he.__version===void 0||ee===!0,D=Z.dataReady,ue=E(T,se);if(T.isDepthTexture)De=x(T.format===Dl,T.type),ht&&(Be?t.texStorage2D(r.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ae,Fe,null));else if(T.isDataTexture)if(qe.length>0){Be&&ht&&t.texStorage2D(r.TEXTURE_2D,ue,De,qe[0].width,qe[0].height);for(let j=0,Q=qe.length;j<Q;j++)xe=qe[j],Be?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,xe.width,xe.height,ae,Fe,xe.data):t.texImage2D(r.TEXTURE_2D,j,De,xe.width,xe.height,0,ae,Fe,xe.data);T.generateMipmaps=!1}else Be?(ht&&t.texStorage2D(r.TEXTURE_2D,ue,De,se.width,se.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ae,Fe,se.data)):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,ae,Fe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,De,qe[0].width,qe[0].height,se.depth);for(let j=0,Q=qe.length;j<Q;j++)if(xe=qe[j],T.format!==zn)if(ae!==null)if(Be){if(D)if(T.layerUpdates.size>0){const ce=Kg(xe.width,xe.height,T.format,T.type);for(const de of T.layerUpdates){const ke=xe.data.subarray(de*ce/xe.data.BYTES_PER_ELEMENT,(de+1)*ce/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,de,xe.width,xe.height,1,ae,ke)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,se.depth,ae,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,De,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,se.depth,ae,Fe,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,De,xe.width,xe.height,se.depth,0,ae,Fe,xe.data)}else{Be&&ht&&t.texStorage2D(r.TEXTURE_2D,ue,De,qe[0].width,qe[0].height);for(let j=0,Q=qe.length;j<Q;j++)xe=qe[j],T.format!==zn?ae!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,xe.width,xe.height,ae,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,j,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,xe.width,xe.height,ae,Fe,xe.data):t.texImage2D(r.TEXTURE_2D,j,De,xe.width,xe.height,0,ae,Fe,xe.data)}else if(T.isDataArrayTexture)if(Be){if(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,De,se.width,se.height,se.depth),D)if(T.layerUpdates.size>0){const j=Kg(se.width,se.height,T.format,T.type);for(const Q of T.layerUpdates){const ce=se.data.subarray(Q*j/se.data.BYTES_PER_ELEMENT,(Q+1)*j/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ae,Fe,ce)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ae,Fe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,ae,Fe,se.data);else if(T.isData3DTexture)Be?(ht&&t.texStorage3D(r.TEXTURE_3D,ue,De,se.width,se.height,se.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ae,Fe,se.data)):t.texImage3D(r.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,ae,Fe,se.data);else if(T.isFramebufferTexture){if(ht)if(Be)t.texStorage2D(r.TEXTURE_2D,ue,De,se.width,se.height);else{let j=se.width,Q=se.height;for(let ce=0;ce<ue;ce++)t.texImage2D(r.TEXTURE_2D,ce,De,j,Q,0,ae,Fe,null),j>>=1,Q>>=1}}else if(qe.length>0){if(Be&&ht){const j=we(qe[0]);t.texStorage2D(r.TEXTURE_2D,ue,De,j.width,j.height)}for(let j=0,Q=qe.length;j<Q;j++)xe=qe[j],Be?D&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ae,Fe,xe):t.texImage2D(r.TEXTURE_2D,j,De,ae,Fe,xe);T.generateMipmaps=!1}else if(Be){if(ht){const j=we(se);t.texStorage2D(r.TEXTURE_2D,ue,De,j.width,j.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Fe,se)}else t.texImage2D(r.TEXTURE_2D,0,De,ae,Fe,se);m(T)&&g(J),he.__version=Z.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ne(C,T,k){if(T.image.length!==6)return;const J=je(C,T),ee=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const Z=i.get(ee);if(ee.version!==Z.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const he=ft.getPrimaries(ft.workingColorSpace),le=T.colorSpace===Qs?null:ft.getPrimaries(T.colorSpace),Ee=T.colorSpace===Qs||he===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ce=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Ce&&!se?ae[Q]=_(T.image[Q],!0,n.maxCubemapSize):ae[Q]=se?T.image[Q].image:T.image[Q],ae[Q]=rt(T,ae[Q]);const Fe=ae[0],De=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),qe=v(T.internalFormat,De,xe,T.colorSpace),Be=T.isVideoTexture!==!0,ht=Z.__version===void 0||J===!0,D=ee.dataReady;let ue=E(T,Fe);Ne(r.TEXTURE_CUBE_MAP,T);let j;if(Ce){Be&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,qe,Fe.width,Fe.height);for(let Q=0;Q<6;Q++){j=ae[Q].mipmaps;for(let ce=0;ce<j.length;ce++){const de=j[ce];T.format!==zn?De!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,de.width,de.height,De,xe,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,qe,de.width,de.height,0,De,xe,de.data)}}}else{if(j=T.mipmaps,Be&&ht){j.length>0&&ue++;const Q=we(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,De,xe,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,ae[Q].width,ae[Q].height,0,De,xe,ae[Q].data);for(let ce=0;ce<j.length;ce++){const ke=j[ce].image[Q].image;Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,ke.width,ke.height,De,xe,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,qe,ke.width,ke.height,0,De,xe,ke.data)}}else{Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,xe,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,De,xe,ae[Q]);for(let ce=0;ce<j.length;ce++){const de=j[ce];Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,De,xe,de.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,qe,De,xe,de.image[Q])}}}m(T)&&g(r.TEXTURE_CUBE_MAP),Z.__version=ee.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function fe(C,T,k,J,ee,Z){const he=s.convert(k.format,k.colorSpace),le=s.convert(k.type),Ee=v(k.internalFormat,he,le,k.colorSpace),Ce=i.get(T),se=i.get(k);if(se.__renderTarget=T,!Ce.__hasExternalTextures){const ae=Math.max(1,T.width>>Z),Fe=Math.max(1,T.height>>Z);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,Ee,ae,Fe,T.depth,0,he,le,null):t.texImage2D(ee,Z,Ee,ae,Fe,0,he,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),B(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ee,se.__webglTexture,0,Ve(T)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ee,se.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(C,T,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const J=T.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Z=x(T.stencilBuffer,ee),he=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ve(T);B(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,Z,T.width,T.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,Z,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Z,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,C)}else{const J=T.textures;for(let ee=0;ee<J.length;ee++){const Z=J[ee],he=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),Ee=v(Z.internalFormat,he,le,Z.colorSpace),Ce=Ve(T);k&&B(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,Ee,T.width,T.height):B(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,Ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const ee=J.__webglTexture,Z=Ve(T);if(T.depthTexture.format===Ll)B(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Dl)B(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ze(C){const T=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),T.__depthDisposeCallback=ee}T.__boundDepthTexture=J}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const J=C.texture.mipmaps;J&&J.length>0?be(T.__webglFramebuffer[0],C):be(T.__webglFramebuffer,C)}else if(k){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=r.createRenderbuffer(),re(T.__webglDepthbuffer[J],C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,Z)}}else{const J=C.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),re(T.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,T,k){const J=i.get(C);T!==void 0&&fe(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ze(C)}function it(C){const T=C.texture,k=i.get(C),J=i.get(T);C.addEventListener("dispose",S);const ee=C.textures,Z=C.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)k.__webglFramebuffer[le][Ee]=r.createFramebuffer()}else k.__webglFramebuffer[le]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)k.__webglFramebuffer[le]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(he)for(let le=0,Ee=ee.length;le<Ee;le++){const Ce=i.get(ee[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&B(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const Ee=ee[le];k.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const Ce=s.convert(Ee.format,Ee.colorSpace),se=s.convert(Ee.type),ae=v(Ee.internalFormat,Ce,se,Ee.colorSpace,C.isXRRenderTarget===!0),Fe=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,k.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),re(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)fe(k.__webglFramebuffer[le][Ee],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee);else fe(k.__webglFramebuffer[le],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let le=0,Ee=ee.length;le<Ee;le++){const Ce=ee[le],se=i.get(Ce);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Ne(r.TEXTURE_2D,Ce),fe(k.__webglFramebuffer,C,Ce,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(Ce)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),Ne(le,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)fe(k.__webglFramebuffer[Ee],C,T,r.COLOR_ATTACHMENT0,le,Ee);else fe(k.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,le,0);m(T)&&g(le),t.unbindTexture()}C.depthBuffer&&ze(C)}function Je(C){const T=C.textures;for(let k=0,J=T.length;k<J;k++){const ee=T[k];if(m(ee)){const Z=y(C),he=i.get(ee).__webglTexture;t.bindTexture(Z,he),g(Z),t.unbindTexture()}}}const ve=[],L=[];function St(C){if(C.samples>0){if(B(C)===!1){const T=C.textures,k=C.width,J=C.height;let ee=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=i.get(C),le=T.length>1;if(le)for(let Ce=0;Ce<T.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const se=i.get(T[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,ee,r.NEAREST),l===!0&&(ve.length=0,L.length=0,ve.push(r.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ve.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<T.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const se=i.get(T[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,he.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ve(C){return Math.min(n.maxSamples,C.samples)}function B(C){const T=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Se(C){const T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function rt(C,T){const k=C.colorSpace,J=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ya&&k!==Qs&&(ft.getTransfer(k)===Mt?(J!==zn||ee!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=Le,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=B}function z1(r,e){function t(i,n=Qs){let s;const o=ft.getTransfer(n);if(i===ss)return r.UNSIGNED_BYTE;if(i===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Up)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Bx)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Ux)return r.BYTE;if(i===Ox)return r.SHORT;if(i===Pl)return r.UNSIGNED_SHORT;if(i===Np)return r.INT;if(i===no)return r.UNSIGNED_INT;if(i===Es)return r.FLOAT;if(i===kl)return r.HALF_FLOAT;if(i===zx)return r.ALPHA;if(i===kx)return r.RGB;if(i===zn)return r.RGBA;if(i===Ll)return r.DEPTH_COMPONENT;if(i===Dl)return r.DEPTH_STENCIL;if(i===Vx)return r.RED;if(i===Op)return r.RED_INTEGER;if(i===Hx)return r.RG;if(i===Bp)return r.RG_INTEGER;if(i===zp)return r.RGBA_INTEGER;if(i===ch||i===hh||i===uh||i===dh)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ch)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ch)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vf||i===Mf||i===Sf||i===bf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tf||i===wf||i===Ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tf||i===wf)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Af||i===Rf||i===Cf||i===Pf||i===If||i===Lf||i===Df||i===Nf||i===Ff||i===Uf||i===Of||i===Bf||i===zf||i===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Af)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===If)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ff)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Of)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fh||i===Vf||i===Hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fh)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gx||i===Gf||i===Wf||i===Xf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Il?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class k1 extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let Zo=class extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}};const V1={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new An,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gr({vertexShader:H1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Yh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X1 extends oo{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new W1,m=t.getContextAttributes();let g=null,y=null;const v=[],x=[],E=new pt;let w=null;const S=new Un;S.viewport=new Kt;const R=new Un;R.viewport=new Kt;const b=[S,R],M=new k1;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=v[K];return ne===void 0&&(ne=new $u,v[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=v[K];return ne===void 0&&(ne=new $u,v[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=v[K];return ne===void 0&&(ne=new $u,v[K]=ne),ne.getHandSpace()};function U(K){const ne=x.indexOf(K.inputSource);if(ne===-1)return;const fe=v[ne];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",Y);for(let K=0;K<v.length;K++){const ne=x[K];ne!==null&&(x[K]=null,v[K].disconnect(ne))}P=null,N=null,_.reset(),e.setRenderTarget(g),f=null,d=null,u=null,n=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",G),n.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,re=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Dl:Ll,re=m.stencil?Il:no);const ze={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ze),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new so(d.textureWidth,d.textureHeight,{format:zn,type:ss,depthTexture:new cy(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,fe),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new so(f.framebufferWidth,f.framebufferHeight,{format:zn,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),je.setContext(n),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let ne=0;ne<K.removed.length;ne++){const fe=K.removed[ne],re=x.indexOf(fe);re>=0&&(x[re]=null,v[re].disconnect(fe))}for(let ne=0;ne<K.added.length;ne++){const fe=K.added[ne];let re=x.indexOf(fe);if(re===-1){for(let ze=0;ze<v.length;ze++)if(ze>=x.length){x.push(fe),re=ze;break}else if(x[ze]===null){x[ze]=fe,re=ze;break}if(re===-1)break}const be=v[re];be&&be.connect(fe)}}const H=new $,W=new $;function z(K,ne,fe){H.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(fe.matrixWorld);const re=H.distanceTo(W),be=ne.projectionMatrix.elements,ze=fe.projectionMatrix.elements,Le=be[14]/(be[10]-1),it=be[14]/(be[10]+1),Je=(be[9]+1)/be[5],ve=(be[9]-1)/be[5],L=(be[8]-1)/be[0],St=(ze[8]+1)/ze[0],Ve=Le*L,B=Le*St,Se=re/(-L+St),rt=Se*-L;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(rt),K.translateZ(Se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const we=Le+Se,C=it+Se,T=Ve-rt,k=B+(re-rt),J=Je*it/C*we,ee=ve*it/C*we;K.projectionMatrix.makePerspective(T,k,J,ee,we,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let ne=K.near,fe=K.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),M.near=R.near=S.near=ne,M.far=R.far=S.far=fe,(P!==M.near||N!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),S.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,M.layers.mask=S.layers.mask|R.layers.mask;const re=K.parent,be=M.cameras;te(M,re);for(let ze=0;ze<be.length;ze++)te(be[ze],re);be.length===2?z(M,S,R):M.projectionMatrix.copy(S.projectionMatrix),I(K,M,re)};function I(K,ne,fe){fe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$f*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let oe=null;function Ne(K,ne){if(h=ne.getViewerPose(c||o),p=ne,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let re=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Le=0;Le<fe.length;Le++){const it=fe[Le];let Je=null;if(f!==null)Je=f.getViewport(it);else{const L=u.getViewSubImage(d,it);Je=L.viewport,Le===0&&(e.setRenderTargetTextures(y,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(y))}let ve=b[Le];ve===void 0&&(ve=new Un,ve.layers.enable(Le),ve.viewport=new Kt,b[Le]=ve),ve.matrix.fromArray(it.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(it.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Je.x,Je.y,Je.width,Je.height),Le===0&&(M.matrix.copy(ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(ve)}const be=n.enabledFeatures;if(be&&be.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,n.renderState)}}for(let fe=0;fe<v.length;fe++){const re=x[fe],be=v[fe];re!==null&&be!==void 0&&be.update(re,ne,c||o)}oe&&oe(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}const je=new Kx;je.setAnimationLoop(Ne),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}const Ar=new mr,q1=new si;function Y1(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,sy(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,v,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Xi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Xi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ar.copy(x),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(Ar)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $1(r,e,t,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=n[y.id];x===void 0&&(p(y),x=h(y),n[y.id]=x,y.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(y,E);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const x=r.createBuffer(),E=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=n[y.id],x=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,S=x.length;w<S;w++){const R=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,M=R.length;b<M;b++){const P=R[b];if(f(P,w,b,E)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let Y=0;Y<U.length;Y++){const H=U[Y],W=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,N+G,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,x,E){const w=y.value,S=v+"_"+x;if(E[S]===void 0)return typeof w=="number"||typeof w=="boolean"?E[S]=w:E[S]=w.clone(),!0;{const R=E[S];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[S]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function p(y){const v=y.uniforms;let x=0;const E=16;for(let S=0,R=v.length;S<R;S++){const b=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,P=b.length;M<P;M++){const N=b[M],U=Array.isArray(N.value)?N.value:[N.value];for(let G=0,Y=U.length;G<Y;G++){const H=U[G],W=_(H),z=x%E,te=z%W.boundary,I=z+te;x+=te,I!==0&&E-I<W.storage&&(x+=E-I),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=W.storage}}}const w=x%E;return w>0&&(x+=E-w),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function g(){for(const y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:g}}class j1{constructor(e={}){const{canvas:t=XS(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=nn;let w=0,S=0,R=null,b=-1,M=null;const P=new Kt,N=new Kt;let U=null;const G=new at(0);let Y=0,H=t.width,W=t.height,z=1,te=null,I=null;const oe=new Kt(0,0,H,W),Ne=new Kt(0,0,H,W);let je=!1;const K=new Hp;let ne=!1,fe=!1;const re=new si,be=new si,ze=new $,Le=new Kt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ve(){return R===null?z:1}let L=i;function St(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${HM}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const O="webgl2";if(L=St(O,A),L===null)throw St(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ve,B,Se,rt,we,C,T,k,J,ee,Z,he,le,Ee,Ce,se,ae,Fe,De,xe,qe,Be,ht,D;function ue(){Ve=new Qw(L),Ve.init(),Be=new z1(L,Ve),B=new kw(L,Ve,e,Be),Se=new U1(L,Ve),B.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),rt=new iE(L),we=new M1,C=new B1(L,Ve,Se,we,B,Be,rt),T=new $w(x),k=new Jw(x),J=new zS(L),ht=new Bw(L,J),ee=new eE(L,J,rt,ht),Z=new sE(L,ee,J,rt),De=new nE(L,B,C),se=new Vw(we),he=new v1(x,T,k,Ve,B,ht,se),le=new Y1(x,we),Ee=new b1,Ce=new C1(Ve),Fe=new Ow(x,T,k,Se,Z,f,l),ae=new N1(x,Z,B),D=new $1(L,rt,B,Se),xe=new zw(L,Ve,rt),qe=new tE(L,Ve,rt),rt.programs=he.programs,x.capabilities=B,x.extensions=Ve,x.properties=we,x.renderLists=Ee,x.shadowMap=ae,x.state=Se,x.info=rt}ue();const j=new X1(x,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(H,W,!1))},this.getSize=function(A){return A.set(H,W)},this.setSize=function(A,O,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,W=O,t.width=Math.floor(A*z),t.height=Math.floor(O*z),X===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(H*z,W*z).floor()},this.setDrawingBufferSize=function(A,O,X){H=A,W=O,z=X,t.width=Math.floor(A*X),t.height=Math.floor(O*X),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,O,X,V){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,O,X,V),Se.viewport(P.copy(oe).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,O,X,V){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,O,X,V),Se.scissor(N.copy(Ne).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){Se.setScissorTest(je=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,X=!0){let V=0;if(A){let F=!1;if(R!==null){const ie=R.texture.format;F=ie===zp||ie===Bp||ie===Op}if(F){const ie=R.texture.type,me=ie===ss||ie===no||ie===Pl||ie===Il||ie===Fp||ie===Up,Me=Fe.getClearColor(),ye=Fe.getClearAlpha(),Ie=Me.r,Ue=Me.g,Pe=Me.b;me?(p[0]=Ie,p[1]=Ue,p[2]=Pe,p[3]=ye,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Ie,_[1]=Ue,_[2]=Pe,_[3]=ye,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT),X&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Fe.dispose(),Ee.dispose(),Ce.dispose(),we.dispose(),T.dispose(),k.dispose(),Z.dispose(),ht.dispose(),D.dispose(),he.dispose(),j.dispose(),j.removeEventListener("sessionstart",pe),j.removeEventListener("sessionend",Ge),Re.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=rt.autoReset,O=ae.enabled,X=ae.autoUpdate,V=ae.needsUpdate,F=ae.type;ue(),rt.autoReset=A,ae.enabled=O,ae.autoUpdate=X,ae.needsUpdate=V,ae.type=F}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const O=A.target;O.removeEventListener("dispose",ke),ut(O)}function ut(A){Nt(A),we.remove(A)}function Nt(A){const O=we.get(A).programs;O!==void 0&&(O.forEach(function(X){he.releaseProgram(X)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,X,V,F,ie){O===null&&(O=it);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=Yi(A,O,X,V,F);Se.setMaterial(V,me);let ye=X.index,Ie=1;if(V.wireframe===!0){if(ye=ee.getWireframeAttribute(X),ye===void 0)return;Ie=2}const Ue=X.drawRange,Pe=X.attributes.position;let We=Ue.start*Ie,gt=(Ue.start+Ue.count)*Ie;ie!==null&&(We=Math.max(We,ie.start*Ie),gt=Math.min(gt,(ie.start+ie.count)*Ie)),ye!==null?(We=Math.max(We,0),gt=Math.min(gt,ye.count)):Pe!=null&&(We=Math.max(We,0),gt=Math.min(gt,Pe.count));const Gt=gt-We;if(Gt<0||Gt===1/0)return;ht.setup(F,V,Me,X,ye);let Ft,dt=xe;if(ye!==null&&(Ft=J.get(ye),dt=qe,dt.setIndex(Ft)),F.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*ve()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(F.isLine){let Oe=V.linewidth;Oe===void 0&&(Oe=1),Se.setLineWidth(Oe*ve()),F.isLineSegments?dt.setMode(L.LINES):F.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else F.isPoints?dt.setMode(L.POINTS):F.isSprite&&dt.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)mh("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Oe=F._multiDrawStarts,di=F._multiDrawCounts,_t=F._multiDrawCount,Rn=ye?J.get(ye).bytesPerElement:1,co=we.get(V).currentProgram.getUniforms();for(let $i=0;$i<_t;$i++)co.setValue(L,"_gl_DrawID",$i),dt.render(Oe[$i]/Rn,di[$i])}else if(F.isInstancedMesh)dt.renderInstances(We,Gt,F.count);else if(X.isInstancedBufferGeometry){const Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,di=Math.min(X.instanceCount,Oe);dt.renderInstances(We,Gt,di)}else dt.render(We,Gt)};function _e(A,O,X){A.transparent===!0&&A.side===bs&&A.forceSinglePass===!1?(A.side=Xi,A.needsUpdate=!0,bt(A,O,X),A.side=pr,A.needsUpdate=!0,bt(A,O,X),A.side=bs):bt(A,O,X)}this.compile=function(A,O,X=null){X===null&&(X=A),g=Ce.get(X),g.init(O),v.push(g),X.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),A!==X&&A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const V=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Me=ie[me];_e(Me,X,F),V.add(Me)}else _e(ie,X,F),V.add(ie)}),g=v.pop(),V},this.compileAsync=function(A,O,X=null){const V=this.compile(A,O,X);return new Promise(F=>{function ie(){if(V.forEach(function(me){we.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){F(A);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ae=null;function Ye(A){Ae&&Ae(A)}function pe(){Re.stop()}function Ge(){Re.start()}const Re=new Kx;Re.setAnimationLoop(Ye),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(A){Ae=A,j.setAnimationLoop(A),A===null?Re.stop():Re.start()},j.addEventListener("sessionstart",pe),j.addEventListener("sessionend",Ge),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,R),g=Ce.get(A,v.length),g.init(O),v.push(g),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(be),fe=this.localClippingEnabled,ne=se.init(this.clippingPlanes,fe),m=Ee.get(A,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&He(ie,O,-1/0,x.sortObjects)}He(A,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,I),Je=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Je&&Fe.addToRenderList(m,A),this.info.render.frame++,ne===!0&&se.beginShadows();const X=g.state.shadowsArray;ae.render(X,A,O),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(g.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let me=0,Me=ie.length;me<Me;me++){const ye=ie[me];Qe(V,F,A,ye)}Je&&Fe.render(A);for(let me=0,Me=ie.length;me<Me;me++){const ye=ie[me];Bt(m,A,ye,ye.viewport)}}else F.length>0&&Qe(V,F,A,O),Je&&Fe.render(A),Bt(m,A,O);R!==null&&S===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,O),ht.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(g=v[v.length-1],ne===!0&&se.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function He(A,O,X,V){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){V&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const me=Z.update(A),Me=A.material;Me.visible&&m.push(A,me,Me,X,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const me=Z.update(A),Me=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Me)){const ye=me.groups;for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++){const Pe=ye[Ie],We=Me[Pe.materialIndex];We&&We.visible&&m.push(A,me,We,X,Le.z,Pe)}}else Me.visible&&m.push(A,me,Me,X,Le.z,null)}}const ie=A.children;for(let me=0,Me=ie.length;me<Me;me++)He(ie[me],O,X,V)}function Bt(A,O,X,V){const F=A.opaque,ie=A.transmissive,me=A.transparent;g.setupLightsView(X),ne===!0&&se.setGlobalState(x.clippingPlanes,X),V&&Se.viewport(P.copy(V)),F.length>0&&Et(F,O,X),ie.length>0&&Et(ie,O,X),me.length>0&&Et(me,O,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Qe(A,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new so(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?kl:ss,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const ie=g.state.transmissionRenderTarget[V.id],me=V.viewport||P;ie.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const Me=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(G),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Je&&Fe.render(X);const ye=x.toneMapping;x.toneMapping=hr;const Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),ne===!0&&se.setGlobalState(x.clippingPlanes,V),Et(A,X,V),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Pe=0,We=O.length;Pe<We;Pe++){const gt=O[Pe],Gt=gt.object,Ft=gt.geometry,dt=gt.material,Oe=gt.group;if(dt.side===bs&&Gt.layers.test(V.layers)){const di=dt.side;dt.side=Xi,dt.needsUpdate=!0,Jt(Gt,X,V,Ft,dt,Oe),dt.side=di,dt.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}x.setRenderTarget(Me),x.setClearColor(G,Y),Ie!==void 0&&(V.viewport=Ie),x.toneMapping=ye}function Et(A,O,X){const V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=A.length;F<ie;F++){const me=A[F],Me=me.object,ye=me.geometry,Ie=me.group;let Ue=me.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),Me.layers.test(X.layers)&&Jt(Me,O,X,ye,Ue,Ie)}}function Jt(A,O,X,V,F,ie){A.onBeforeRender(x,O,X,V,F,ie),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,O,X,V,A,ie),F.transparent===!0&&F.side===bs&&F.forceSinglePass===!1?(F.side=Xi,F.needsUpdate=!0,x.renderBufferDirect(X,O,V,F,A,ie),F.side=pr,F.needsUpdate=!0,x.renderBufferDirect(X,O,V,F,A,ie),F.side=bs):x.renderBufferDirect(X,O,V,F,A,ie),A.onAfterRender(x,O,X,V,F,ie)}function bt(A,O,X){O.isScene!==!0&&(O=it);const V=we.get(A),F=g.state.lights,ie=g.state.shadowsArray,me=F.state.version,Me=he.getParameters(A,F.state,ie,O,X),ye=he.getProgramCacheKey(Me);let Ie=V.programs;V.environment=A.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(A.isMeshStandardMaterial?k:T).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",ke),Ie=new Map,V.programs=Ie);let Ue=Ie.get(ye);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===me)return mt(A,Me),Ue}else Me.uniforms=he.getUniforms(A),A.onBeforeCompile(Me,x),Ue=he.acquireProgram(Me,ye),Ie.set(ye,Ue),V.uniforms=Me.uniforms;const Pe=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=se.uniform),mt(A,Me),V.needsLights=wi(A),V.lightsStateVersion=me,V.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function Tt(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=_h.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function mt(A,O){const X=we.get(A);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Yi(A,O,X,V,F){O.isScene!==!0&&(O=it),C.resetTextureUnits();const ie=O.fog,me=V.isMeshStandardMaterial?O.environment:null,Me=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ya,ye=(V.isMeshStandardMaterial?k:T).get(V.envMap||me),Ie=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!X.morphAttributes.position,We=!!X.morphAttributes.normal,gt=!!X.morphAttributes.color;let Gt=hr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Gt=x.toneMapping);const Ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=Ft!==void 0?Ft.length:0,Oe=we.get(V),di=g.state.lights;if(ne===!0&&(fe===!0||A!==M)){const Ei=A===M&&V.id===b;se.setState(V,A,Ei)}let _t=!1;V.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==di.state.version||Oe.outputColorSpace!==Me||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==ye||V.fog===!0&&Oe.fog!==ie||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==se.numPlanes||Oe.numIntersection!==se.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==Ue||Oe.morphTargets!==Pe||Oe.morphNormals!==We||Oe.morphColors!==gt||Oe.toneMapping!==Gt||Oe.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Oe.__version=V.version);let Rn=Oe.currentProgram;_t===!0&&(Rn=bt(V,O,F));let co=!1,$i=!1,La=!1;const Ct=Rn.getUniforms(),fn=Oe.uniforms;if(Se.useProgram(Rn.program)&&(co=!0,$i=!0,La=!0),V.id!==b&&(b=V.id,$i=!0),co||M!==A){Se.buffers.depth.getReversed()?(re.copy(A.projectionMatrix),YS(re),$S(re),Ct.setValue(L,"projectionMatrix",re)):Ct.setValue(L,"projectionMatrix",A.projectionMatrix),Ct.setValue(L,"viewMatrix",A.matrixWorldInverse);const Oi=Ct.map.cameraPosition;Oi!==void 0&&Oi.setValue(L,ze.setFromMatrixPosition(A.matrixWorld)),B.logarithmicDepthBuffer&&Ct.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ct.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,$i=!0,La=!0)}if(F.isSkinnedMesh){Ct.setOptional(L,F,"bindMatrix"),Ct.setOptional(L,F,"bindMatrixInverse");const Ei=F.skeleton;Ei&&(Ei.boneTexture===null&&Ei.computeBoneTexture(),Ct.setValue(L,"boneTexture",Ei.boneTexture,C))}F.isBatchedMesh&&(Ct.setOptional(L,F,"batchingTexture"),Ct.setValue(L,"batchingTexture",F._matricesTexture,C),Ct.setOptional(L,F,"batchingIdTexture"),Ct.setValue(L,"batchingIdTexture",F._indirectTexture,C),Ct.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(L,"batchingColorTexture",F._colorsTexture,C));const pn=X.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&De.update(F,X,Rn),($i||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,Ct.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(fn.envMap.value=ye,fn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(fn.envMapIntensity.value=O.environmentIntensity),$i&&(Ct.setValue(L,"toneMappingExposure",x.toneMappingExposure),Oe.needsLights&&Rt(fn,La),ie&&V.fog===!0&&le.refreshFogUniforms(fn,ie),le.refreshMaterialUniforms(fn,V,z,W,g.state.transmissionRenderTarget[A.id]),_h.upload(L,Tt(Oe),fn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_h.upload(L,Tt(Oe),fn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ct.setValue(L,"center",F.center),Ct.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(L,"normalMatrix",F.normalMatrix),Ct.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ei=V.uniformsGroups;for(let Oi=0,eu=Ei.length;Oi<eu;Oi++){const yr=Ei[Oi];D.update(yr,Rn),D.bind(yr,Rn)}}return Rn}function Rt(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function wi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,O,X){const V=we.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),we.get(A.texture).__webglTexture=O,we.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const X=we.get(A);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const dn=L.createFramebuffer();this.setRenderTarget=function(A,O=0,X=0){R=A,w=O,S=X;let V=!0,F=null,ie=!1,me=!1;if(A){const ye=we.get(A);if(ye.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(ye.__hasExternalTextures)C.rebindTextures(A,we.get(A.texture).__webglTexture,we.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(ye.__boundDepthTexture!==Pe){if(Pe!==null&&we.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Ue=we.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?F=Ue[O][X]:F=Ue[O],ie=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?F=we.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[X]:F=Ue,P.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else P.copy(oe).multiplyScalar(z).floor(),N.copy(Ne).multiplyScalar(z).floor(),U=je;if(X!==0&&(F=dn),Se.bindFramebuffer(L.FRAMEBUFFER,F)&&V&&Se.drawBuffers(A,F),Se.viewport(P),Se.scissor(N),Se.setScissorTest(U),ie){const ye=we.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,X)}else if(me){const ye=we.get(A.texture),Ie=O;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,X,Ie)}else if(A!==null&&X!==0){const ye=we.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(A,O,X,V,F,ie,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Se.bindFramebuffer(L.FRAMEBUFFER,Me);try{const ye=A.texture,Ie=ye.format,Ue=ye.type;if(!B.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-V&&X>=0&&X<=A.height-F&&L.readPixels(O,X,V,F,Be.convert(Ie),Be.convert(Ue),ie)}finally{const ye=R!==null?we.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(A,O,X,V,F,ie,me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(O>=0&&O<=A.width-V&&X>=0&&X<=A.height-F){Se.bindFramebuffer(L.FRAMEBUFFER,Me);const ye=A.texture,Ie=ye.format,Ue=ye.type;if(!B.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pe),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(O,X,V,F,Be.convert(Ie),Be.convert(Ue),0);const We=R!==null?we.get(R).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,We);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qS(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Pe),L.deleteSync(gt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,X=0){const V=Math.pow(2,-X),F=Math.floor(A.image.width*V),ie=Math.floor(A.image.height*V),me=O!==null?O.x:0,Me=O!==null?O.y:0;C.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,me,Me,F,ie),Se.unbindTexture()};const Qt=L.createFramebuffer(),ei=L.createFramebuffer();this.copyTextureToTexture=function(A,O,X=null,V=null,F=0,ie=null){ie===null&&(F!==0?(mh("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let me,Me,ye,Ie,Ue,Pe,We,gt,Gt;const Ft=A.isCompressedTexture?A.mipmaps[ie]:A.image;if(X!==null)me=X.max.x-X.min.x,Me=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,Ue=X.min.y,Pe=X.isBox3?X.min.z:0;else{const pn=Math.pow(2,-F);me=Math.floor(Ft.width*pn),Me=Math.floor(Ft.height*pn),A.isDataArrayTexture?ye=Ft.depth:A.isData3DTexture?ye=Math.floor(Ft.depth*pn):ye=1,Ie=0,Ue=0,Pe=0}V!==null?(We=V.x,gt=V.y,Gt=V.z):(We=0,gt=0,Gt=0);const dt=Be.convert(O.format),Oe=Be.convert(O.type);let di;O.isData3DTexture?(C.setTexture3D(O,0),di=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),di=L.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),di=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const _t=L.getParameter(L.UNPACK_ROW_LENGTH),Rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),co=L.getParameter(L.UNPACK_SKIP_PIXELS),$i=L.getParameter(L.UNPACK_SKIP_ROWS),La=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);const Ct=A.isDataArrayTexture||A.isData3DTexture,fn=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const pn=we.get(A),Ei=we.get(O),Oi=we.get(pn.__renderTarget),eu=we.get(Ei.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Oi.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,eu.__webglFramebuffer);for(let yr=0;yr<ye;yr++)Ct&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(A).__webglTexture,F,Pe+yr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(O).__webglTexture,ie,Gt+yr)),L.blitFramebuffer(Ie,Ue,me,Me,We,gt,me,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||A.isRenderTargetTexture||we.has(A)){const pn=we.get(A),Ei=we.get(O);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Qt),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei);for(let Oi=0;Oi<ye;Oi++)Ct?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pn.__webglTexture,F,Pe+Oi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pn.__webglTexture,F),fn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ei.__webglTexture,ie,Gt+Oi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ei.__webglTexture,ie),F!==0?L.blitFramebuffer(Ie,Ue,me,Me,We,gt,me,Me,L.COLOR_BUFFER_BIT,L.NEAREST):fn?L.copyTexSubImage3D(di,ie,We,gt,Gt+Oi,Ie,Ue,me,Me):L.copyTexSubImage2D(di,ie,We,gt,Ie,Ue,me,Me);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(di,ie,We,gt,Gt,me,Me,ye,dt,Oe,Ft.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(di,ie,We,gt,Gt,me,Me,ye,dt,Ft.data):L.texSubImage3D(di,ie,We,gt,Gt,me,Me,ye,dt,Oe,Ft):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,We,gt,me,Me,dt,Oe,Ft.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,We,gt,Ft.width,Ft.height,dt,Ft.data):L.texSubImage2D(L.TEXTURE_2D,ie,We,gt,me,Me,dt,Oe,Ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,co),L.pixelStorei(L.UNPACK_SKIP_ROWS,$i),L.pixelStorei(L.UNPACK_SKIP_IMAGES,La),ie===0&&O.generateMipmaps&&L.generateMipmap(di),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,O,X=null,V=null,F=0){return mh('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,X,V,F)},this.initRenderTarget=function(A){we.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,Se.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}class K1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qp extends wa{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new $,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new is(o,3)),this.setAttribute("normal",new is(a,3)),this.setAttribute("uv",new is(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}let py=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};const ju=new si,Zg=new $,Jg=new $;let Z1=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=ss,this.map=null,this.mapPass=null,this.matrix=new si,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zg),Jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jg),t.updateMatrixWorld(),ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},J1=class extends Z1{constructor(){super(new Wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Q1=class extends py{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new J1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class eA extends py{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let tA=class extends Gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wx,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};class iA extends An{constructor(e,t,i,n,s=bn,o=bn,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const Qg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};let my=class{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}};const nA=new my;let Yp=class{constructor(e){this.manager=e!==void 0?e:nA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yp.DEFAULT_MATERIAL_NAME="__DEFAULT";let sA=class extends Yp{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Nl("img");function l(){h(),Qg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},gy=class extends Yp{constructor(e){super(e)}load(e,t,i,n){const s=new An,o=new sA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _y="176",Nh=0,rA=1,oA=2,e_=1,t_=100,i_=204,n_=205,s_=3,aA=0,r_="attached",lA="detached",xy=300,Fl=1e3,rl=1001,Zf=1002,Fh=1003,cA=1004,hA=1005,Uh=1006,uA=1007,$p=1008,yy=1009,jp=1015,vy=1023,dA=1028,Ul=2300,Ol=2301,Ku=2302,o_=2400,a_=2401,l_=2402,fA=2500,pA=0,My=1,Jf=2,mA=0,Sy="",ni="srgb",En="srgb-linear",c_="linear",Zu="srgb",Ro=7680,h_=519,Qf=35044,Wr=2e3,ep=2001;class jh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let u_=1234567;const xl=Math.PI/180,Bl=180/Math.PI;function Vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[t&63|128]+_i[t>>8&255]+"-"+_i[t>>16&255]+_i[t>>24&255]+_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function Kp(r,e){return(r%e+e)%e}function gA(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function _A(r,e,t){return r!==e?(t-r)/(e-r):0}function yl(r,e,t){return(1-t)*r+t*e}function xA(r,e,t,i){return yl(r,e,1-Math.exp(-t*i))}function yA(r,e=1){return e-Math.abs(Kp(r,e*2)-e)}function vA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function MA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function SA(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bA(r,e){return r+Math.random()*(e-r)}function TA(r){return r*(.5-Math.random())}function wA(r){r!==void 0&&(u_=r);let e=u_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EA(r){return r*xl}function AA(r){return r*Bl}function RA(r){return(r&r-1)===0&&r!==0}function CA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function IA(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),p=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const LA={DEG2RAD:xl,RAD2DEG:Bl,generateUUID:Vn,clamp:nt,euclideanModulo:Kp,mapLinear:gA,inverseLerp:_A,lerp:yl,damp:xA,pingpong:yA,smoothstep:vA,smootherstep:MA,randInt:SA,randFloat:bA,randFloatSpread:TA,seededRandom:wA,degToRad:EA,radToDeg:AA,isPowerOfTwo:RA,ceilPowerOfTwo:CA,floorPowerOfTwo:PA,setQuaternionFromProperEuler:IA,normalize:yt,denormalize:On};class Zt{constructor(e=0,t=0){Zt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(e,t,i,n,s,o,a,l,c){Fs.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=n[0],m=n[3],g=n[6],y=n[1],v=n[4],x=n[7],E=n[2],w=n[5],S=n[8];return s[0]=o*_+a*y+l*E,s[3]=o*m+a*v+l*w,s[6]=o*g+a*x+l*S,s[1]=c*_+h*y+u*E,s[4]=c*m+h*v+u*w,s[7]=c*g+h*x+u*S,s[2]=d*_+f*y+p*E,s[5]=d*m+f*v+p*w,s[8]=d*g+f*x+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,p=t*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(a*i-n*o)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new Fs;function DA(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tp(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const d_=new Fs().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new Fs().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NA(){const r={enabled:!0,workingColorSpace:En,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Zu&&(n.r=Ls(n.r),n.g=Ls(n.g),n.b=Ls(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zu&&(n.r=aa(n.r),n.g=aa(n.g),n.b=aa(n.b))),n},fromWorkingColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},toWorkingColorSpace:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Sy?c_:this.spaces[n].transfer},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[En]:{primaries:e,whitePoint:i,transfer:c_,toXYZ:d_,fromXYZ:f_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:Zu,toXYZ:d_,fromXYZ:f_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const zi=NA();function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function aa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Co;class FA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Co===void 0&&(Co=tp("canvas")),Co.width=e.width,Co.height=e.height;const n=Co.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Co}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tp("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ls(t[i]/255)*255):t[i]=Ls(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UA=0;class OA{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Qu(n[o].image)):s.push(Qu(n[o]))}else s=Qu(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FA.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BA=0;class Hn extends jh{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=rl,n=rl,s=Uh,o=$p,a=vy,l=yy,c=Hn.DEFAULT_ANISOTROPY,h=Sy){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Vn(),this.name="",this.source=new OA(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fs,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case rl:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case rl:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=xy;Hn.DEFAULT_ANISOTROPY=1;class Ni{constructor(e=0,t=0,i=0,n=1){Ni.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(f+1)/2,E=(g+1)/2,w=(h+d)/4,S=(u+_)/4,R=(p+m)/4;return v>x&&v>E?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=w/i,s=S/i):x>E?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=w/n,s=R/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=S/s,n=R/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let m=1-a;const g=l*d+c*f+h*p+u*_,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const E=Math.sqrt(v),w=Math.atan2(E,g*y);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+p*x,u=u*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(p_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new q,p_=new xr;class Us{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wc.copy(i.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),Ec.subVectors(this.max,Ha),Po.subVectors(e.a,Ha),Io.subVectors(e.b,Ha),Lo.subVectors(e.c,Ha),Ws.subVectors(Io,Po),Xs.subVectors(Lo,Io),Rr.subVectors(Po,Lo);let t=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-Rr.z,Rr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,Rr.z,0,-Rr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-Rr.y,Rr.x,0];return!td(t,Po,Io,Lo,Ec)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Po,Io,Lo,Ec))?!1:(Ac.crossVectors(Ws,Xs),t=[Ac.x,Ac.y,Ac.z],td(t,Po,Io,Lo,Ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ds),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ds=[new q,new q,new q,new q,new q,new q,new q,new q],Ln=new q,wc=new Us,Po=new q,Io=new q,Lo=new q,Ws=new q,Xs=new q,Rr=new q,Ha=new q,Ec=new q,Ac=new q,Cr=new q;function td(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Cr.fromArray(r,s);const a=n.x*Math.abs(Cr.x)+n.y*Math.abs(Cr.y)+n.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zA=new Us,Ga=new q,id=new q;class rs{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zA.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const t=Ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ga,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(id)),this.expandByPoint(Ga.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fs=new q,nd=new q,Rc=new q,qs=new q,sd=new q,Cc=new q,rd=new q;class Kh{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){nd.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(nd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rc),a=qs.dot(this.direction),l=-qs.dot(Rc),c=qs.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=s*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(nd).addScaledVector(Rc,d),f}intersectSphere(e,t){fs.subVectors(e.center,this.origin);const i=fs.dot(this.direction),n=fs.dot(fs)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,i,n,s){sd.subVectors(t,e),Cc.subVectors(i,e),rd.crossVectors(sd,Cc);let o=this.direction.dot(rd),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qs.subVectors(this.origin,e);const l=a*this.direction.dot(Cc.crossVectors(qs,Cc));if(l<0)return null;const c=a*this.direction.dot(sd.cross(qs));if(c<0||l+c>o)return null;const h=-a*qs.dot(rd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,n,s,o,a,l,c,h,u,d,f,p,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,u,d,f,p,_,m)}set(e,t,i,n,s,o,a,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Do.setFromMatrixColumn(e,0).length(),s=1/Do.setFromMatrixColumn(e,1).length(),o=1/Do.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kA,e,VA)}lookAt(e,t,i){const n=this.elements;return Zi.subVectors(e,t),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),Ys.crossVectors(i,Zi),Ys.lengthSq()===0&&(Math.abs(i.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),Ys.crossVectors(i,Zi)),Ys.normalize(),Pc.crossVectors(Zi,Ys),n[0]=Ys.x,n[4]=Pc.x,n[8]=Zi.x,n[1]=Ys.y,n[5]=Pc.y,n[9]=Zi.y,n[2]=Ys.z,n[6]=Pc.z,n[10]=Zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],v=i[7],x=i[11],E=i[15],w=n[0],S=n[4],R=n[8],b=n[12],M=n[1],P=n[5],N=n[9],U=n[13],G=n[2],Y=n[6],H=n[10],W=n[14],z=n[3],te=n[7],I=n[11],oe=n[15];return s[0]=o*w+a*M+l*G+c*z,s[4]=o*S+a*P+l*Y+c*te,s[8]=o*R+a*N+l*H+c*I,s[12]=o*b+a*U+l*W+c*oe,s[1]=h*w+u*M+d*G+f*z,s[5]=h*S+u*P+d*Y+f*te,s[9]=h*R+u*N+d*H+f*I,s[13]=h*b+u*U+d*W+f*oe,s[2]=p*w+_*M+m*G+g*z,s[6]=p*S+_*P+m*Y+g*te,s[10]=p*R+_*N+m*H+g*I,s[14]=p*b+_*U+m*W+g*oe,s[3]=y*w+v*M+x*G+E*z,s[7]=y*S+v*P+x*Y+E*te,s[11]=y*R+v*N+x*H+E*I,s[15]=y*b+v*U+x*W+E*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+_*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+g*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*g+a*d*g,v=p*d*c-h*m*c-p*l*f+o*m*f+h*l*g-o*d*g,x=h*_*c-p*u*c+p*a*f-o*_*f-h*a*g+o*u*g,E=p*u*l-h*_*l-p*a*d+o*_*d+h*a*m-o*u*m,w=t*y+i*v+n*x+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=y*S,e[1]=(_*d*s-u*m*s-_*n*f+i*m*f+u*n*g-i*d*g)*S,e[2]=(a*m*s-_*l*s+_*n*c-i*m*c-a*n*g+i*l*g)*S,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*S,e[4]=v*S,e[5]=(h*m*s-p*d*s+p*n*f-t*m*f-h*n*g+t*d*g)*S,e[6]=(p*l*s-o*m*s-p*n*c+t*m*c+o*n*g-t*l*g)*S,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*S,e[8]=x*S,e[9]=(p*u*s-h*_*s-p*i*f+t*_*f+h*i*g-t*u*g)*S,e[10]=(o*_*s-p*a*s+p*i*c-t*_*c-o*i*g+t*a*g)*S,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*S,e[12]=E*S,e[13]=(h*_*n-p*u*n+p*i*d-t*_*d-h*i*m+t*u*m)*S,e[14]=(p*a*n-o*_*n-p*i*l+t*_*l+o*i*m-t*a*m)*S,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*S,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,p=s*u,_=o*h,m=o*u,g=a*u,y=l*c,v=l*h,x=l*u,E=i.x,w=i.y,S=i.z;return n[0]=(1-(_+g))*E,n[1]=(f+x)*E,n[2]=(p-v)*E,n[3]=0,n[4]=(f-x)*w,n[5]=(1-(d+g))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(p+v)*S,n[9]=(m-y)*S,n[10]=(1-(d+_))*S,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Do.set(n[0],n[1],n[2]).length();const o=Do.set(n[4],n[5],n[6]).length(),a=Do.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Dn.copy(this);const c=1/s,h=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Wr){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,p;if(a===Wr)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===ep)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Wr){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(o-s),d=(t+e)*c,f=(i+n)*h;let p,_;if(a===Wr)p=(o+s)*u,_=-2*u;else if(a===ep)p=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Do=new q,Dn=new ct,kA=new q(0,0,0),VA=new q(1,1,1),Ys=new q,Pc=new q,Zi=new q,m_=new ct,g_=new xr;class Aa{constructor(e=0,t=0,i=0,n=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class HA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GA=0;const __=new q,No=new xr,ps=new ct,Ic=new q,Wa=new q,WA=new q,XA=new xr,x_=new q(1,0,0),y_=new q(0,1,0),v_=new q(0,0,1),M_={type:"added"},qA={type:"removed"},Fo={type:"childadded",child:null},od={type:"childremoved",child:null};class Vt extends jh{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new q,t=new Aa,i=new xr,n=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new Fs}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new HA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.multiply(No),this}rotateOnWorldAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.premultiply(No),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,t){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ic.copy(e):Ic.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(Wa,Ic,this.up):ps.lookAt(Ic,Wa,this.up),this.quaternion.setFromRotationMatrix(ps),n&&(ps.extractRotation(n.matrixWorld),No.setFromRotationMatrix(ps),this.quaternion.premultiply(No.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M_),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qA),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M_),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,WA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,XA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Vt.DEFAULT_UP=new q(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new q,ms=new q,ad=new q,gs=new q,Uo=new q,Oo=new q,S_=new q,ld=new q,cd=new q,hd=new q,ud=new Ni,dd=new Ni,fd=new Ni;class Bn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Nn.subVectors(e,t),n.cross(Nn);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Nn.subVectors(n,t),ms.subVectors(i,t),ad.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(ms),l=Nn.dot(ad),c=ms.dot(ms),h=ms.dot(ad),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gs.x),l.addScaledVector(o,gs.y),l.addScaledVector(a,gs.z),l)}static getInterpolatedAttribute(e,t,i,n,s,o){return ud.setScalar(0),dd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,i),fd.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(ud,s.x),o.addScaledVector(dd,s.y),o.addScaledVector(fd,s.z),o}static isFrontFacing(e,t,i,n){return Nn.subVectors(i,t),ms.subVectors(e,t),Nn.cross(ms).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Nn.cross(ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Uo.subVectors(n,i),Oo.subVectors(s,i),ld.subVectors(e,i);const l=Uo.dot(ld),c=Oo.dot(ld);if(l<=0&&c<=0)return t.copy(i);cd.subVectors(e,n);const h=Uo.dot(cd),u=Oo.dot(cd);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Uo,o);hd.subVectors(e,s);const f=Uo.dot(hd),p=Oo.dot(hd);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Oo,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return S_.subVectors(s,n),a=(u-h)/(u-h+(f-p)),t.copy(n).addScaledVector(S_,a);const g=1/(m+_+d);return o=_*g,a=d*g,t.copy(i).addScaledVector(Uo,o).addScaledVector(Oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const by={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function pd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=zi.workingColorSpace){return this.r=e,this.g=t,this.b=i,zi.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=zi.workingColorSpace){if(e=Kp(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pd(o,s,e+1/3),this.g=pd(o,s,e),this.b=pd(o,s,e-1/3)}return zi.toWorkingColorSpace(this,n),this}setStyle(e,t=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=by[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return zi.fromWorkingColorSpace(xi.copy(this),e),Math.round(nt(xi.r*255,0,255))*65536+Math.round(nt(xi.g*255,0,255))*256+Math.round(nt(xi.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zi.workingColorSpace){zi.fromWorkingColorSpace(xi.copy(this),t);const i=xi.r,n=xi.g,s=xi.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zi.workingColorSpace){return zi.fromWorkingColorSpace(xi.copy(this),t),e.r=xi.r,e.g=xi.g,e.b=xi.b,e}getStyle(e=ni){zi.fromWorkingColorSpace(xi.copy(this),e);const t=xi.r,i=xi.g,n=xi.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(Lc);const i=yl($s.h,Lc.h,t),n=yl($s.s,Lc.s,t),s=yl($s.l,Lc.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xi=new Ht;Ht.NAMES=by;let YA=0;class Jr extends jh{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=e_,this.side=Nh,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i_,this.blendDst=n_,this.blendEquation=t_,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=s_,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==e_&&(i.blending=this.blending),this.side!==Nh&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==i_&&(i.blendSrc=this.blendSrc),this.blendDst!==n_&&(i.blendDst=this.blendDst),this.blendEquation!==t_&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==s_&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ro&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ro&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ro&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jo extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=aA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new q,Dc=new Zt;let $A=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$A++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qf,this.updateRanges=[],this.gpuType=jp,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dc.fromBufferAttribute(this,t),Dc.applyMatrix3(e),this.setXY(t,Dc.x,Dc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=On(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qf&&(e.usage=this.usage),e}}class jA extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class KA extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zp extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ZA=0;const gn=new ct,md=new Vt,Bo=new q,Ji=new Us,Xa=new Us,li=new q;class ao extends jh{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DA(e)?KA:jA)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fs().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zp(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ji.setFromBufferAttribute(s),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ji.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xa.setFromBufferAttribute(a),this.morphTargetsRelative?(li.addVectors(Ji.min,Xa.min),Ji.expandByPoint(li),li.addVectors(Ji.max,Xa.max),Ji.expandByPoint(li)):(Ji.expandByPoint(Xa.min),Ji.expandByPoint(Xa.max))}Ji.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)li.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(li));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)li.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(e,c),li.add(Bo)),n=Math.max(n,i.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new q,l[R]=new q;const c=new q,h=new q,u=new q,d=new Zt,f=new Zt,p=new Zt,_=new q,m=new q;function g(R,b,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[R].add(_),a[b].add(_),a[M].add(_),l[R].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,b=y.length;R<b;++R){const M=y[R],P=M.start,N=M.count;for(let U=P,G=P+N;U<G;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new q,x=new q,E=new q,w=new q;function S(R){E.fromBufferAttribute(n,R),w.copy(E);const b=a[R];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(w,b);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,b=y.length;R<b;++R){const M=y[R],P=M.start,N=M.count;for(let U=P,G=P+N;U<G;U+=3)S(e.getX(U+0)),S(e.getX(U+1)),S(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new q,s=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ao,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b_=new ct,Pr=new Kh,Nc=new rs,T_=new q,Fc=new q,Uc=new q,Oc=new q,gd=new q,Bc=new q,w_=new q,zc=new q;class Zh extends Vt{constructor(e=new ao,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Bc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(gd.fromBufferAttribute(u,e),o?Bc.addScaledVector(gd,h):Bc.addScaledVector(gd.sub(t),h))}t.add(Bc)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(Nc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Nc,T_)===null||Pr.origin.distanceToSquared(T_)>(e.far-e.near)**2))&&(b_.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(b_),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const w=a.getX(x),S=a.getX(x+1),R=a.getX(x+2);n=kc(this,g,e,i,c,h,u,w,S,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);n=kc(this,o,e,i,c,h,u,y,v,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const w=x,S=x+1,R=x+2;n=kc(this,g,e,i,c,h,u,w,S,R),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=m,v=m+1,x=m+2;n=kc(this,o,e,i,c,h,u,y,v,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function JA(r,e,t,i,n,s,o,a){let l;if(e.side===rA?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Nh,a),l===null)return null;zc.copy(a),zc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(zc);return c<t.near||c>t.far?null:{distance:c,point:zc.clone(),object:r}}function kc(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Fc),r.getVertexPosition(l,Uc),r.getVertexPosition(c,Oc);const h=JA(r,e,t,i,Fc,Uc,Oc,w_);if(h){const u=new q;Bn.getBarycoord(w_,Fc,Uc,Oc,u),n&&(h.uv=Bn.getInterpolatedAttribute(n,a,l,c,u,new Zt)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,a,l,c,u,new Zt)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};Bn.getNormal(Fc,Uc,Oc,d.normal),h.face=d,h.barycoord=u}return h}class Ty extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const js=new q,E_=new Zt,A_=new Zt;class Jp extends Ty{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,E_,A_),t.subVectors(A_,E_)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xl*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _d extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class QA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qf,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ri=new q;class Qp{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ri.fromBufferAttribute(this,t),Ri.applyMatrix4(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ri.fromBufferAttribute(this,t),Ri.applyNormalMatrix(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ri.fromBufferAttribute(this,t),Ri.transformDirection(e),this.setXYZ(t,Ri.x,Ri.y,Ri.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=On(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const R_=new q,C_=new Ni,P_=new Ni,eR=new q,I_=new ct,Vc=new q,xd=new rs,L_=new ct,yd=new Kh;class tR extends Zh{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=r_,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Us),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Vc),this.boundingBox.expandByPoint(Vc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Vc),this.boundingSphere.expandByPoint(Vc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xd.copy(this.boundingSphere),xd.applyMatrix4(n),e.ray.intersectsSphere(xd)!==!1&&(L_.copy(n).invert(),yd.copy(e.ray).applyMatrix4(L_),!(this.boundingBox!==null&&yd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ni,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===r_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lA?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;C_.fromBufferAttribute(n.attributes.skinIndex,e),P_.fromBufferAttribute(n.attributes.skinWeight,e),R_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=P_.getComponent(s);if(o!==0){const a=C_.getComponent(s);I_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(eR.copy(R_).applyMatrix4(I_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wy extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ey extends Hn{constructor(e=null,t=1,i=1,n,s,o,a,l,c=Fh,h=Fh,u,d){super(null,o,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const D_=new ct,iR=new ct;class em{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:iR;D_.multiplyMatrices(a,t[s]),D_.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new em(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ey(t,e,e,vy,jp);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wy),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class ip extends cn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zo=new ct,N_=new ct,Hc=[],F_=new Us,nR=new ct,qa=new Zh,Ya=new rs;class sR extends Zh{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ip(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,nR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Us),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zo),F_.copy(e.boundingBox).applyMatrix4(zo),this.boundingBox.union(F_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zo),Ya.copy(e.boundingSphere).applyMatrix4(zo),this.boundingSphere.union(Ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(i),e.ray.intersectsSphere(Ya)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,zo),N_.multiplyMatrices(i,zo),qa.matrixWorld=N_,qa.raycast(e,Hc);for(let o=0,a=Hc.length;o<a;o++){const l=Hc[o];l.instanceId=s,l.object=this,t.push(l)}Hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ip(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ey(new Float32Array(n*this.count),n,this.count,dA,jp));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vd=new q,rR=new q,oR=new Fs;class ko{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=vd.subVectors(i,t).cross(rR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vd),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oR.getNormalMatrix(e),n=this.coplanarPoint(vd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new rs,Gc=new q;class aR{constructor(e=new ko,t=new ko,i=new ko,n=new ko,s=new ko,o=new ko){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wr){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],p=n[9],_=n[10],m=n[11],g=n[12],y=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-s,d-c,m-f,x-g).normalize(),i[1].setComponents(l+s,d+c,m+f,x+g).normalize(),i[2].setComponents(l+o,d+h,m+p,x+y).normalize(),i[3].setComponents(l-o,d-h,m-p,x-y).normalize(),i[4].setComponents(l-a,d-u,m-_,x-v).normalize(),t===Wr)i[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(t===ep)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Gc.x=n.normal.x>0?e.max.x:e.min.x,Gc.y=n.normal.y>0?e.max.y:e.min.y,Gc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ay extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oh=new q,Bh=new q,U_=new ct,$a=new Kh,Wc=new rs,Md=new q,O_=new q;class tm extends Vt{constructor(e=new ao,t=new Ay){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Oh.fromBufferAttribute(t,n-1),Bh.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Oh.distanceTo(Bh);e.setAttribute("lineDistance",new Zp(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wc.copy(i.boundingSphere),Wc.applyMatrix4(n),Wc.radius+=s,e.ray.intersectsSphere(Wc)===!1)return;U_.copy(n).invert(),$a.copy(e.ray).applyMatrix4(U_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),y=h.getX(_+1),v=Xc(this,e,$a,l,g,y,_);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=Xc(this,e,$a,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=Xc(this,e,$a,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Xc(this,e,$a,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xc(r,e,t,i,n,s,o){const a=r.geometry.attributes.position;if(Oh.fromBufferAttribute(a,n),Bh.fromBufferAttribute(a,s),t.distanceSqToSegment(Oh,Bh,Md,O_)>i)return;Md.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Md);if(!(c<e.near||c>e.far))return{distance:c,point:O_.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const B_=new q,z_=new q;class lR extends tm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)B_.fromBufferAttribute(t,n),z_.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+B_.distanceTo(z_);e.setAttribute("lineDistance",new Zp(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cR extends tm{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ry extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k_=new ct,np=new Kh,qc=new rs,Yc=new q;class hR extends Vt{constructor(e=new ao,t=new Ry){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(n),qc.radius+=s,e.ray.intersectsSphere(qc)===!1)return;k_.copy(n).invert(),np.copy(e.ray).applyMatrix4(k_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const m=c.getX(p);Yc.fromBufferAttribute(u,m),V_(Yc,m,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Yc.fromBufferAttribute(u,p),V_(Yc,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function V_(r,e,t,i,n,s,o){const a=np.distanceSqToPoint(r);if(a<t){const l=new q;np.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class im extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mA,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class os extends im{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function $c(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function uR(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function dR(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function H_(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function Cy(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}let Wl=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fR=class extends Wl{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:o_,endingEnd:o_}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case a_:s=e,a=2*t-i;break;case l_:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case a_:o=e,l=2*i-t;break;case l_:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let E=0;E!==a;++E)s[E]=g*o[h+E]+y*o[c+E]+v*o[l+E]+x*o[u+E];return s}},pR=class extends Wl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},mR=class extends Wl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$c(t,this.TimeBufferType),this.values=$c(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$c(e.times,Array),values:$c(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ul:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case Ku:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ul;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&uR(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ku,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Ol;let Ra=class extends Gn{constructor(e,t,i){super(e,t,i)}};Ra.prototype.ValueTypeName="bool";Ra.prototype.ValueBufferType=Array;Ra.prototype.DefaultInterpolation=Ul;Ra.prototype.InterpolantFactoryMethodLinear=void 0;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;let Py=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}};Py.prototype.ValueTypeName="color";let Ma=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}};Ma.prototype.ValueTypeName="number";let gR=class extends Wl{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)xr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Sa=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new gR(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;let Ca=class extends Gn{constructor(e,t,i){super(e,t,i)}};Ca.prototype.ValueTypeName="string";Ca.prototype.ValueBufferType=Array;Ca.prototype.DefaultInterpolation=Ul;Ca.prototype.InterpolantFactoryMethodLinear=void 0;Ca.prototype.InterpolantFactoryMethodSmooth=void 0;let ba=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}};ba.prototype.ValueTypeName="vector";let _R=class{constructor(e="",t=-1,i=[],n=fA){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(yR(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Gn.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=dR(l);l=H_(l,1,h),c=H_(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ma(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];Cy(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const v=d[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}n.push(new Ma(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(ba,f+".position",d,"pos",n),i(Sa,f+".quaternion",d,"rot",n),i(ba,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function xR(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ma;case"vector":case"vector2":case"vector3":case"vector4":return ba;case"color":return Py;case"quaternion":return Sa;case"bool":case"boolean":return Ra;case"string":return Ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function yR(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xR(r.type);if(r.times===void 0){const t=[],i=[];Cy(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const rr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vR{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const MR=new vR;class lo{constructor(e){this.manager=e!==void 0?e:MR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s={};class SR extends Error{constructor(e,t){super(e),this.response=t}}class zh extends lo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=rr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_s[e]!==void 0){_s[e].push({onLoad:t,onProgress:i,onError:n});return}_s[e]=[],_s[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=_s[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){y();function y(){u.read().then(({done:v,value:x})=>{if(v)g.close();else{_+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let w=0,S=h.length;w<S;w++){const R=h[w];R.onProgress&&R.onProgress(E)}g.enqueue(x),y()}},v=>{g.error(v)})}}});return new Response(m)}else throw new SR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{rr.add(e,c);const h=_s[e];delete _s[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=_s[e];if(h===void 0)throw this.manager.itemError(e),c;delete _s[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bR extends lo{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=tp("img");function l(){h(),rr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class TR extends lo{constructor(e){super(e)}load(e,t,i,n){const s=new Hn,o=new bR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class nm extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sd=new ct,G_=new q,W_=new q;class sm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=yy,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aR,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ni(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;G_.setFromMatrixPosition(e.matrixWorld),t.position.copy(G_),W_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(W_),t.updateMatrixWorld(),Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wR extends sm{constructor(){super(new Jp(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Bl*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ER extends nm{constructor(e,t,i=0,n=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const X_=new ct,ja=new q,bd=new q;class AR extends sm{constructor(){super(new Jp(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Zt(4,2),this._viewportCount=6,this._viewports=[new Ni(2,1,1,1),new Ni(0,1,1,1),new Ni(3,1,1,1),new Ni(1,1,1,1),new Ni(3,0,1,1),new Ni(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ja.setFromMatrixPosition(e.matrixWorld),i.position.copy(ja),bd.copy(i.position),bd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bd),i.updateMatrixWorld(),n.makeTranslation(-ja.x,-ja.y,-ja.z),X_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X_)}}class RR extends nm{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new AR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iy extends Ty{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class CR extends sm{constructor(){super(new Iy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class PR extends nm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new CR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class IR extends lo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=rr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return rr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),rr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});rr.add(e,l),s.manager.itemStart(e)}}const rm="\\[\\]\\.:\\/",LR=new RegExp("["+rm+"]","g"),om="[^"+rm+"]",DR="[^"+rm.replace("\\.","")+"]",NR=/((?:WC+[\/:])*)/.source.replace("WC",om),FR=/(WCOD+)?/.source.replace("WCOD",DR),UR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",om),OR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",om),BR=new RegExp("^"+NR+FR+UR+OR+"$"),zR=["material","materials","bones","map"];let kR=class{constructor(e,t,i){const n=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class Wo{constructor(e,t,i){this.path=t,this.parsedPath=i||Wo.parseTrackName(t),this.node=Wo.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Wo.Composite(e,t,i):new Wo(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LR,"")}static parseTrackName(e){const t=BR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);zR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Wo.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=kR;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_y}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_y);function q_(r,e){if(e===pA)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Jf||e===My){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===Jf)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class VR extends lo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qR(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new iC(t)}),this.register(function(t){return new nC(t)}),this.register(function(t){return new sC(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new QR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new tC(t)}),this.register(function(t){return new eC(t)}),this.register(function(t){return new GR(t)}),this.register(function(t){return new rC(t)}),this.register(function(t){return new oC(t)})}load(e,t,i,n){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=vl.extractUrlBase(e);o=vl.resolveURL(c,this.path)}else o=vl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ly){try{o[st.KHR_BINARY_GLTF]=new aC(e)}catch(u){n&&n(u);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new WR;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new lC(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new cC;break;case st.KHR_MESH_QUANTIZATION:o[u]=new hC;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function HR(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GR{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ht(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],En);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new PR(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new RR(h),c.distance=u;break;case"spot":c=new ER(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class WR{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Jo}extendParams(e,t,i){const n=[];e.color=new Ht(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],En),e.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,ni))}return Promise.all(n)}}class XR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class qR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Zt(a,a)}return Promise.all(s)}}class YR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class $R{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class jR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ht(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],En)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ni)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class KR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ZR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ht().setRGB(a[0],a[1],a[2],En),Promise.all(s)}}class JR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class QR{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ht().setRGB(a[0],a[1],a[2],En),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ni)),Promise.all(s)}}class eC{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class tC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:os}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class iC{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class nC{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class sC{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class rC{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class oC{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const _=new ct,m=new q,g=new xr,y=new q(1,1,1),v=new sR(p.geometry,p.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,g,y));for(const x in l)if(x==="_COLOR_0"){const E=l[x];v.instanceColor=new ip(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,l[x]);Vt.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ly="glTF",Ka=12,Y_={JSON:1313821514,BIN:5130562};class aC{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ka),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ly)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ka,s=new DataView(e,Ka);let o=0;for(;o<n;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Y_.JSON){const c=new Uint8Array(e,Ka+o,a);this.content=i.decode(c)}else if(l===Y_.BIN){const c=Ka+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=sp[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=sp[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=la[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(f)},a,c,En,d)})})}}class cC{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hC{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Dy extends Wl{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,y=1-m,v=g-d+u;for(let x=0;x!==a;x++){const E=o[_+x+a],w=o[_+x+l]*h,S=o[p+x+a],R=o[p+x]*h;s[x]=y*E+v*w+m*S+g*R}return s}}const uC=new xr;class dC extends Dy{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return uC.fromArray(s).normalize().toArray(s),s}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},la={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$_={9728:Fh,9729:Uh,9984:cA,9985:uA,9986:hA,9987:$p},j_={33071:rl,33648:Zf,10497:Fl},Td={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ks={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fC={CUBICSPLINE:void 0,LINEAR:Ol,STEP:Ul},wd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pC(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new im({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nh})),r.DefaultMaterial}function Lr(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function vs(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mC(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function gC(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _C(r){let e;const t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ed(t.attributes):e=r.indices+":"+Ed(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+Ed(r.targets[i]);return e}function Ed(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function rp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xC(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yC=new ct;class vC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&o<98?this.textureLoader=new TR(this.options.manager):this.textureLoader=new IR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return Lr(s,a,n),vs(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,o){i.load(vl.resolveURL(t.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=Td[n.type],a=la[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new cn(c,o,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Td[n.type],c=la[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let v=t.cache.get(y);v||(_=new c(a,g*f,n.count*f/h),v=new QA(_,f/h),t.cache.add(y,v)),m=new Qp(v,l,d%f/h,p)}else a===null?_=new c(n.count*l):_=new c(a,d,n.count*l),m=new cn(_,l,p);if(n.sparse!==void 0){const g=Td.SCALAR,y=la[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,x=n.sparse.values.byteOffset||0,E=new y(o[1],v,n.sparse.count*g),w=new c(o[2],x,n.sparse.count*l);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,R=E.length;S<R;S++){const b=E[S];if(m.setX(b,w[S*l]),l>=2&&m.setY(b,w[S*l+1]),l>=3&&m.setZ(b,w[S*l+2]),l>=4&&m.setW(b,w[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const n=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=$_[d.magFilter]||Uh,h.minFilter=$_[d.minFilter]||$p,h.wrapS=j_[d.wrapS]||Fl,h.wrapT=j_[d.wrapT]||Fl,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Fh&&h.minFilter!==Uh,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const m=new Hn(_);m.needsUpdate=!0,d(m)}),t.load(vl.resolveURL(u,s.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),vs(u,o),u.userData.mimeType=o.mimeType||xC(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ry,Jr.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ay,Jr.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return im}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const u=n[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ht(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],En),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ni)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=oA);const h=s.alphaMode||wd.OPAQUE;if(h===wd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Jo&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Zt(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Jo&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Jo){const u=s.emissiveFactor;a.emissive=new Ht().setRGB(u[0],u[1],u[2],En)}return s.emissiveTexture!==void 0&&o!==Jo&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ni)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),vs(u,s),t.associations.set(u,{materials:e}),s.extensions&&Lr(n,u,s),u})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return K_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=_C(c),u=n[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=K_(new ao,c,t),n[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?pC(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],m=o[f];let g;const y=c[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new tR(_,y):new Zh(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?g.geometry=q_(g.geometry,My):m.mode===xn.TRIANGLE_FAN&&(g.geometry=q_(g.geometry,Jf));else if(m.mode===xn.LINES)g=new lR(_,y);else if(m.mode===xn.LINE_STRIP)g=new tm(_,y);else if(m.mode===xn.LINE_LOOP)g=new cR(_,y);else if(m.mode===xn.POINTS)g=new hR(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&gC(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),vs(g,s),m.extensions&&Lr(n,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Lr(n,u[0],s),u[0];const d=new _d;s.extensions&&Lr(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jp(LA.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Iy(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),vs(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new ct;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new em(a,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],p=n.samplers[f.sampler],_=f.target,m=_.node,g=n.parameters!==void 0?n.parameters[p.input]:p.input,y=n.parameters!==void 0?n.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let y=0,v=d.length;y<v;y++){const x=d[y],E=f[y],w=p[y],S=_[y],R=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=i._createAnimationTracks(x,E,w,S,R);if(b)for(let M=0;M<b.length;M++)g.push(b[M])}return new _R(s,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yC)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new wy:c.length>1?h=new _d:c.length===1?h=c[0]:h=new Vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),vs(h,s),s.extensions&&Lr(i,h,s),s.matrix!==void 0){const u=new ct;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new _d;i.name&&(s.name=n.createUniqueName(i.name)),vs(s,i),i.extensions&&Lr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof Jr||d instanceof Hn)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ks[s.path]===Ks.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ks[s.path]){case Ks.weights:c=Ma;break;case Ks.rotation:c=Sa;break;case Ks.translation:case Ks.scale:c=ba;break;default:switch(i.itemSize){case 1:c=Ma;break;case 2:case 3:default:c=ba;break}break}const h=n.interpolation!==void 0?fC[n.interpolation]:Ol,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+Ks[s.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=rp(t.constructor),n=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof Sa?dC:Dy;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MC(r,e,t){const i=e.attributes,n=new Us;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new q(l[0],l[1],l[2]),new q(c[0],c[1],c[2])),a.normalized){const h=rp(la[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new q,l=new q;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=rp(la[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;const o=new rs;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function K_(r,e,t){const i=e.attributes,n=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in i){const a=sp[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});n.push(o)}return zi.workingColorSpace!==En&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zi.workingColorSpace}" not supported.`),vs(r,e),MC(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?mC(r,e.targets,t):r})}const Ad=new WeakMap;class SC extends lo{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new zh(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,ni,i).catch(i)}decodeDracoFile(e,t,i,n,s=En,o=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Ad.has(e)){const l=Ad.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),Ad.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new ao;e.index&&t.setIndex(new cn(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,o=n.array,a=n.itemSize,l=new cn(o,a);s==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==ni)return;const i=new Ht;for(let n=0,s=e.count;n<s;n++)i.fromBufferAttribute(e,n),zi.toWorkingColorSpace(i,ni),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new zh(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=bC.toString(),o=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const o=s.data;switch(o.type){case"decode":n._callbacks[o.id].resolve(o);break;case"error":n._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function bC(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),p=f.attributes.map(_=>_.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const p=a.GetEncodedGeometryType(l);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const g=self[u[m]];let y,v;if(c.useUniqueIDs)v=h[m],y=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[m]]),v===-1)continue;y=a.GetAttribute(d,v)}const x=n(o,a,d,m,g,y);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return p===o.TRIANGULAR_MESH&&(_.index=i(o,a,d)),o.destroy(d),_}function i(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function n(o,a,l,c,h,u){const d=u.num_components(),p=l.num_points()*d,_=p*h.BYTES_PER_ELEMENT,m=s(o,h),g=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,m,_,g);const y=new h(o.HEAPF32.buffer,g,p).slice();return o._free(g),{name:c,array:y,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class TC{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:$o,endingEnd:$o};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=yS,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,s=e._clip.duration,o=s/n,a=n/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case MS:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case kp:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const o=i===vS;if(e===0)return s===-1?n:o&&(s&1)===1?t-n:n;if(i===qf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));i:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break i}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(o&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=jo,n.endingEnd=jo):(e?n.endingStart=this.zeroSlopeAtStart?jo:$o:n.endingStart=Ih,t?n.endingEnd=this.zeroSlopeAtEnd?jo:$o:n.endingEnd=Ih)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}class Jh{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ny extends Jh{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}const am="\\[\\]\\.:\\/",wC=new RegExp("["+am+"]","g"),lm="[^"+am+"]",EC="[^"+am.replace("\\.","")+"]",AC=/((?:WC+[\/:])*)/.source.replace("WC",lm),RC=/(WCOD+)?/.source.replace("WCOD",EC),CC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lm),PC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lm),IC=new RegExp("^"+AC+RC+CC+PC+"$"),LC=["material","materials","bones","map"];class DC{constructor(e,t,i){const n=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class vt{constructor(e,t,i){this.path=t,this.parsedPath=i||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,i):new vt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wC,"")}static parseTrackName(e){const t=IC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);LC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=DC;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class NC{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,o;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,o=n;s!==o;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,n){Is.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const o=this._workIndex*s;Is.multiplyQuaternionsFlat(e,o,e,t,e,i),Is.slerpFlat(e,t,e,t,e,o,n)}_lerp(e,t,i,n,s){const o=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*n}}}function jc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function FC(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function UC(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Z_(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function Fy(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}class OC extends Jh{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case jo:s=e,a=2*t-i;break;case Ih:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:o=e,l=2*i-t;break;case Ih:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let E=0;E!==a;++E)s[E]=g*o[h+E]+y*o[c+E]+v*o[l+E]+x*o[u+E];return s}}class BC extends Jh{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jc(t,this.TimeBufferType),this.values=jc(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jc(e.times,Array),values:jc(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new BC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ny(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ph:t=this.InterpolantFactoryMethodDiscrete;break;case Yf:t=this.InterpolantFactoryMethodLinear;break;case yu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ph;case this.InterpolantFactoryMethodLinear:return Yf;case this.InterpolantFactoryMethodSmooth:return yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&FC(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===yu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Yf;class Pa extends Wn{constructor(e,t,i){super(e,t,i)}}Pa.prototype.ValueTypeName="bool";Pa.prototype.ValueBufferType=Array;Pa.prototype.DefaultInterpolation=Ph;Pa.prototype.InterpolantFactoryMethodLinear=void 0;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;class Uy extends Wn{constructor(e,t,i,n){super(e,t,i,n)}}Uy.prototype.ValueTypeName="color";class kh extends Wn{constructor(e,t,i,n){super(e,t,i,n)}}kh.prototype.ValueTypeName="number";class zC extends Jh{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Is.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Qh extends Wn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new zC(this.times,this.values,this.getValueSize(),e)}}Qh.prototype.ValueTypeName="quaternion";Qh.prototype.InterpolantFactoryMethodSmooth=void 0;class Ia extends Wn{constructor(e,t,i){super(e,t,i)}}Ia.prototype.ValueTypeName="string";Ia.prototype.ValueBufferType=Array;Ia.prototype.DefaultInterpolation=Ph;Ia.prototype.InterpolantFactoryMethodLinear=void 0;Ia.prototype.InterpolantFactoryMethodSmooth=void 0;class Vh extends Wn{constructor(e,t,i,n){super(e,t,i,n)}}Vh.prototype.ValueTypeName="vector";class J_{constructor(e="",t=-1,i=[],n=kp){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Ta(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(VC(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Wn.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=UC(l);l=Z_(l,1,h),c=Z_(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new kh(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];Fy(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const v=d[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}n.push(new kh(".morphTargetInfluence["+_+"]",m,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(Vh,f+".position",d,"pos",n),i(Qh,f+".quaternion",d,"rot",n),i(Vh,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kC(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kh;case"vector":case"vector2":case"vector3":case"vector4":return Vh;case"color":return Uy;case"quaternion":return Qh;case"bool":case"boolean":return Pa;case"string":return Ia}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function VC(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kC(r.type);if(r.times===void 0){const t=[],i=[];Fy(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const HC=new Float32Array(1);class GC extends oo{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new NC(vt.create(i,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let o=n[t];o===void 0&&(o={},n[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ny(new Float32Array(2),new Float32Array(2),1,HC),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let o=typeof e=="string"?J_.findByName(n,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=kp),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new TC(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?J_.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Q_=`uniform vec2 uResolution;
uniform float uVisible;
uniform sampler2D uTexture;
uniform float uTextureAspect;

vec3 baseColor = vec3(0.22); // 少しだけ明るい黒

// containなuv → max()
// coverなuv → min()
vec2 fixUv(vec2 uv, float aspect, float textureAspect) {
  vec2 uvScale = vec2(
    max(aspect / textureAspect, 1.0),
    max((1.0 / aspect) / (1.0 / textureAspect), 1.0)
  );

  return (uv - 0.5) * uvScale + 0.5;
}

`,WC=`// all of variables in monitorVriables.frag
// main関数の中に差し込む

float aspect = uResolution.x / uResolution.y;
vec2 fixedUv = fixUv(vUv, aspect, uTextureAspect);

vec3 texture = texture2D(uTexture, fixedUv).rgb;

// 合成（通常）を行う。vec4(mix(ベースレイヤー, 重ねるレイヤー, 重ねるレイヤーの不透明度), 1.0)
vec3 color = vec3(mix(baseColor, texture, uVisible));

// vignette
float vignette = min(pow(vUv.x * (1.0 - vUv.x) * vUv.y * (1.0 - vUv.y), 0.1) + 0.4, 1.0);
color *= vignette;

gl_FragColor.rgb = color;
`,XC=`// all of variables in monitorVriables.frag
// main関数の中に差し込む

float aspect = uResolution.x / uResolution.y;
vec2 fixedUv = fixUv(vUv, aspect, uTextureAspect);

vec3 texture = texture2D(uTexture, fixedUv).rgb;

// 合成（通常）を行う。vec4(mix(ベースレイヤー, 重ねるレイヤー, 重ねるレイヤーの不透明度), 1.0)
vec3 color = vec3(mix(baseColor, texture, uVisible));

gl_FragColor.rgb = color;
`,Rd=`uniform float uTime;
uniform float uVisible;
uniform vec2 uResolution;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

// Gradient Noise by Inigo Quilez - iq/2013
// https://thebookofshaders.com/edit.php#11/splatter.frag
// https://www.shadertoy.com/view/XdXGW8
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

float circle(vec2 uv, vec2 pos, float r, float edge) {
 return 1. - smoothstep(r - edge * .5, r + edge * .5, length(uv - pos));
}

float shape(vec2 st, vec2 pos, float rad, float edge, int N){
    st = st - pos;

    // Angle and radius from the current pixel
    float a = atan(st.x,st.y)+PI;
    float r = 2.0 * PI / float(N);

    // Shaping function that modulate the distance
    float d = cos(floor(.5+a/r)*r-a)*length(st) / rad;

    return 1.0 - smoothstep(r - edge * .5, r + edge * .5, d);
}`,qC=`// main関数の中に差し込む
vec2 uv = vUv;

// 原点を0.5,0.5に移す
uv -= vec2(0.5);
uv.y *= uResolution.y / uResolution.x; // 縦長なので縦方向を調整

// uvをタイル上に分割する
float scale = 3.0;
uv *= scale;

vec2 i_uv = floor(uv);
vec2 f_uv = fract(uv);

float m_dist = 1.;  // minimum distance

// メタボール作成
for (int y= -1; y <= 1; y++) {
    for (int x= -1; x <= 1; x++) {
        // すぐ隣のグリッドの座標
        vec2 neighbor = vec2(float(x),float(y));

        // そのグリッドの中のランダムな点
        vec2 point = random2(i_uv + neighbor);

        // 点を動かす
        point.x = 0.5 + 0.5 * cos(uTime + point.x * 30.);
        point.y = 0.5 + 0.5 * sin(uTime + point.y * 30.);

        // ピクセルと点との距離
        vec2 diff = neighbor + point - f_uv;
        float dist = length(diff) * 1.; // ここの係数が大きいとボールが小さく

        // メタボールにする
        m_dist = min(m_dist, m_dist * dist);
        
    }
}

// 中央の図形
float shapeRadius = 0.3;
float shapeEdge = 0.1; // 歪み具合
float rotateSpeed = uTime * 0.5;
vec2 uv_default = uv / scale;
m_dist -= min(m_dist, circle(uv_default * rotate2d(rotateSpeed), vec2(0.0), shapeRadius, shapeEdge) * m_dist);


// 描画色を決定
vec3 color = vec3(251., 244., 228.) / 255.;

// 該当セクションでのみ表示
float visible = uVisible * (1. - step(0.06, m_dist));

// 合成（通常）を行う。vec4(mix(ベースレイヤー, 重ねるレイヤー, 重ねるレイヤーの不透明度), 1.0)
vec4 finalColor = vec4(mix(gl_FragColor.rgb, color, visible), 1.0);

gl_FragColor.rgb = finalColor.rgb;`,YC=`// main関数の中に差し込む
vec2 uv = vUv;

// 原点を0.5,0.5に移す
uv -= vec2(0.5);
uv.x *= uResolution.x / uResolution.y; // 横長なので横方向を調整

// uvをタイル上に分割する
float scale = 3.0;
uv *= scale;

vec2 i_uv = floor(uv);
vec2 f_uv = fract(uv);

float m_dist = 1.;  // minimum distance

// メタボール作成
for (int y= -1; y <= 1; y++) {
    for (int x= -1; x <= 1; x++) {
        // すぐ隣のグリッドの座標
        vec2 neighbor = vec2(float(x),float(y));

        // そのグリッドの中のランダムな点
        vec2 point = random2(i_uv + neighbor);

        // 点を動かす
        point.x = 0.5 + 0.5 * cos(uTime + point.x * 40.);
        point.y = 0.5 + 0.5 * sin(uTime + point.y * 40.);

        // ピクセルと点との距離
        vec2 diff = neighbor + point - f_uv;
        float dist = length(diff) * 1.; // ここの係数が大きいとボールが小さく

        // メタボールにする
        m_dist = min(m_dist, m_dist * dist);
        
    }
}

// 中央の図形
float shapeRadius = 0.14;
float shapeEdge = 0.6; // 歪み具合
float rotateSpeed = uTime * 0.5;
vec2 uv_default = uv / scale;
m_dist -= min(m_dist, shape(uv_default * rotate2d(rotateSpeed), vec2(0.0), shapeRadius, shapeEdge, 4) * m_dist);


// 描画色を決定
vec3 color = vec3(251., 244., 228.) / 255.;

// 該当セクションでのみ表示
float visible = uVisible * (1. - step(0.06, m_dist));

// 合成（通常）を行う。vec4(mix(ベースレイヤー, 重ねるレイヤー, 重ねるレイヤーの不透明度), 1.0)
vec4 finalColor = vec4(mix(gl_FragColor.rgb, color, visible), 1.0);

gl_FragColor.rgb = finalColor.rgb;`,$C=`// main関数の中に差し込む
vec2 uv = vUv;

// 原点を0.5,0.5に移す
uv -= vec2(0.5);

// uvをタイル上に分割する
float scale = 3.0;
uv *= scale;

vec2 i_uv = floor(uv);
vec2 f_uv = fract(uv);

float m_dist = 1.;  // minimum distance

// メタボール作成
for (int y= -1; y <= 1; y++) {
    for (int x= -1; x <= 1; x++) {
        // すぐ隣のグリッドの座標
        vec2 neighbor = vec2(float(x),float(y));

        // そのグリッドの中のランダムな点
        vec2 point = random2(i_uv + neighbor);

        // 点を動かす
        point.x = 0.5 + 0.5 * cos(uTime + point.x * 18.);
        point.y = 0.5 + 0.5 * sin(uTime + point.y * 18.);

        // ピクセルと点との距離
        vec2 diff = neighbor + point - f_uv;
        float dist = length(diff) * 1.; // ここの係数が大きいとボールが小さく

        // メタボールにする
        m_dist = min(m_dist, m_dist * dist);
        
    }
}

// 中央の図形
float shapeRadius = 0.08;
float shapeEdge = 0.6; // 歪み具合
float rotateSpeed = uTime * 0.5;
vec2 uv_default = uv / scale;
m_dist -= min(m_dist, shape(uv_default * rotate2d(rotateSpeed), vec2(0.0), shapeRadius, shapeEdge, 3) * m_dist);


// 描画色を決定
vec3 color = vec3(251., 244., 228.) / 255.;

// 該当セクションでのみ表示
float visible = uVisible * (1. - step(0.06, m_dist));

// 合成（通常）を行う。vec4(mix(ベースレイヤー, 重ねるレイヤー, 重ねるレイヤーの不透明度), 1.0)
vec4 finalColor = vec4(mix(gl_FragColor.rgb, color, visible), 1.0);

gl_FragColor.rgb = finalColor.rgb;`,e0=`
varying vec2 vUv;
`,Cd=(r,e,t)=>i=>{i.uniforms={...i.uniforms,...r};const n="void main() {";i.vertexShader=i.vertexShader.replace(n,`${e0}
        ${e}
        ${n}
        vUv = uv;
      `);const s="void main() {";i.fragmentShader=i.fragmentShader.replace(s,`${e0}
        ${e}
        ${s}
      `);const o="#include <dithering_fragment>";i.fragmentShader=i.fragmentShader.replace(o,`${o}
        ${t}
      `)},Oy=new my,By=new VR(Oy),zy=new SC;zy.setDecoderPath("./_assets/draco/");By.setDRACOLoader(zy);const jC=new gy;class KC{constructor({onLoad:e=()=>{}}){this.mesh=null,this.tableLampIntensity={value:0},this.entranceLampIntensity={value:0},this.tableLampEmissive={value:0},this.entranceLampEmissive={value:0},this.tableLampValue={value:0},this.entranceLampValue={value:0},this.monitorUniforms={},this.phoneUniforms={},this.pictureCommonUniforms={},this.videoTexture=null,this.isReady=!1,this.isBlenderAnimating=!1;const t=document.querySelector('[data-js="loading"]'),i=t.querySelector('[data-js="loading-bar"]');Oy.onProgress=function(n,s,o){const a=s===o?()=>{t.setAttribute("data-visible","false"),e()}:()=>{};Ut.to(i,{scaleX:s/o,duration:.6,ease:"power2.out",overwrite:!0,onComplete:a})},By.load("./_assets/models/room.glb",n=>{this.onGLTFReady(n)})}onGLTFReady(e){this.mesh=e.scene,this.nodes={},e.scene.traverse(l=>{l.name&&(this.nodes[l.name]=l)}),this.animations=e.animations,this.mixer=new GC(e.scene),this.actions={},this.animations.forEach(l=>{this.actions[l.name]=this.mixer.clipAction(l),this.actions[l.name].setLoop(qf),this.actions[l.name].clampWhenFinished=!0});const t=l=>{l.action._clip.name=="MainTrack"?(Ut.to(this.tableLampValue,{value:1,duration:.3,ease:"power2.out"}),this.isBlenderAnimating=!1):l.action._clip.name=="MainGhostTrack"?window.dispatchEvent(new CustomEvent("my:blender:end")):l.action._clip.name=="OutsideTrack"&&(Ut.to(this.entranceLampValue,{value:1,duration:.3,ease:"power2.out"}),this.isBlenderAnimating=!1)};this.mixer.addEventListener("finished",t),this.nodes.stage.children[0].castShadow=!0,this.nodes.stage.children[1].castShadow=!0,this.nodes.stage.children[2].receiveShadow=!0,this.nodes.stage.children[3].receiveShadow=!0,this.nodes["stage-mask"].children[0].castShadow=!0,this.nodes["stage-mask"].children[1].castShadow=!0,this.nodes["window-mask01"].children[0].receiveShadow=!0,this.nodes["window-mask02"].children[0].receiveShadow=!0,this.nodes.carpet.receiveShadow=!0,this.nodes["entrance-mat"].receiveShadow=!0,this.nodes.outside_floor.children[0].castShadow=!0,this.nodes.outside_floor.children[1].castShadow=!0,this.nodes.outside_floor.children[2].receiveShadow=!0,this.nodes.outside_post.children[0].castShadow=!0,this.nodes.outside_post.children[1].castShadow=!0,this.nodes.outside_post.children[2].castShadow=!0,this.nodes.outside_lamp.children[0].castShadow=!0,this.nodes.outside_lamp.children[1].castShadow=!0,this.nodes.desk.children[0].castShadow=!0,this.nodes.desk.children[1].castShadow=!0,this.nodes.desk.children[2].receiveShadow=!0,this.nodes.monitor_bottom.castShadow=!0,this.nodes.cup_body.castShadow=!0,this.nodes.mouse.children[0].castShadow=!0,this.nodes.desk_book.children[0].castShadow=!0,this.nodes.desk_book.children[1].castShadow=!0,this.nodes.pen.children[0].castShadow=!0,this.nodes.phone.children[0].castShadow=!0,this.nodes["side-table"].castShadow=!0,this.nodes.bed_frame.children[0].castShadow=!0,this.nodes.trash.children[0].castShadow=!0,this.nodes.clock_base.castShadow=!0,this.nodes.closet_body.children[0].castShadow=!0,this.nodes.chair_seat.castShadow=!0,this.nodes.chair_axis.castShadow=!0,this.nodes.table_body.children[0].castShadow=!0,this.nodes.table_body.children[1].castShadow=!0,this.nodes.cushion01.castShadow=!0,this.nodes.cushion02.castShadow=!0,this.nodes["wall-shelf01_base"].castShadow=!0,this.nodes["wall-shelf02_base"].castShadow=!0,this.nodes.picture01.castShadow=!0,this.nodes.picture02.castShadow=!0,this.nodes.picture03.castShadow=!0;for(const l of Object.values(this.actions))l.setLoop(qf),l.clampWhenFinished=!0;setInterval(()=>{const l=new Date,c=l.getMinutes(),h=l.getHours(),u=c/60*Math.PI*2,d=h%12/12*Math.PI*2+Math.PI/12*(c/60);this.nodes.clock_long.rotation.z=-u,this.nodes.clock_short.rotation.z=-d},1e3);const i=this.nodes.monitor_screen,n=document.createElement("video");n.src="./_assets/videos/room_16-9.mp4",n.crossOrigin="Anonymous",n.loop=!0,n.muted=!0,n.playsInline=!0,n.onloadeddata=()=>{this.videoTexture=new iA(n);const l=i.geometry.boundingBox.max.z,c=i.geometry.boundingBox.max.y;this.monitorUniforms={uResolution:{value:new pt(l,c)},uVisible:{value:0},uTime:{value:0},uTexture:{value:this.videoTexture},uTextureAspect:{value:n.videoWidth/n.videoHeight}},i.material=i.material.clone(),i.material.onBeforeCompile=Cd(this.monitorUniforms,Q_,WC),i.material.customProgramCacheKey=()=>"monitor"},n.load();const s=this.nodes.phone_screen;jC.load("./_assets/images/room_sp.webp",l=>{const c=s.geometry.boundingBox.max.x,h=s.geometry.boundingBox.max.z;this.phoneUniforms={uResolution:{value:new pt(c,h)},uVisible:{value:0},uTime:{value:0},uTexture:{value:l},uTextureAspect:{value:l.image.width/l.image.height}},s.material=s.material.clone(),s.material.onBeforeCompile=Cd(this.phoneUniforms,Q_,XC),s.material.customProgramCacheKey=()=>"phone"}),this.pictureCommonUniforms={uTime:{value:0},uVisible:{value:0}};const o=[{variables:Rd,main:qC},{variables:Rd,main:YC},{variables:Rd,main:$C}],a=[this.nodes.picture01_plane,this.nodes.picture02_plane,this.nodes.picture03_plane];for(let l=0;l<a.length;l++){const c=a[l].geometry.boundingBox.max.x,h=a[l].geometry.boundingBox.max.y;a[l].material=a[l].material.clone(),a[l].material.onBeforeCompile=Cd({...this.pictureCommonUniforms,uResolution:{value:new pt(c,h)}},o[l].variables,o[l].main),a[l].material.customProgramCacheKey=()=>`picture${l}`}this.tableLampMesh=this.nodes.lamp_head,this.tableLampLight=this.nodes.lamp_head.children[0].children[0],this.entranceLampMesh=this.nodes.outside_lamp.children[1],this.entranceLampLight=this.nodes.outside_lamp.children[2].children[0],this.nodes.trash.children[1].material.color.addScalar(.06),e.scene.traverse(m=>{m.isMesh&&m.material&&(m.material.name==="pink"||m.material.name==="pink-no-cast")&&(m.material.color.setHex(0x2563eb))}),this.isReady=!0}playKeyVisualAnimation=()=>{this.actions.MainTrack.play(),this.actions.MainGhostTrack.play(),this.isBlenderAnimating=!0};playContactAnimation=()=>{this.actions.OutsideTrack.play(),this.isBlenderAnimating=!0};enableMonitorAndPhone=()=>{this.isReady&&(Ut.to([this.monitorUniforms.uVisible,this.phoneUniforms.uVisible],{value:1,duration:.3,ease:"power2.out",overwrite:!0}),this.videoTexture&&(this.videoTexture.needsUpdate=!0,this.videoTexture.image.play()))};disableMonitorAndPhone=()=>{this.isReady&&Ut.to([this.monitorUniforms.uVisible,this.phoneUniforms.uVisible],{value:0,duration:.3,ease:"power2.out",overwrite:!0,onComplete:()=>{this.videoTexture&&(this.videoTexture.image.pause(),this.videoTexture.image.currentTime=0)}})};toggleLight=e=>{const t=e==="dark",i="power2.out",n=.3;Ut.timeline().to(this.tableLampIntensity,{value:t?.06:0,duration:n,ease:i}).to(this.tableLampEmissive,{value:t?.6:0,duration:n,ease:i},"<").to(this.entranceLampIntensity,{value:t?.1:0,duration:n,ease:i},"<").to(this.entranceLampEmissive,{value:t?1:0,duration:n,ease:i},"<")};update=e=>{this.tableLampLight.intensity=this.tableLampIntensity.value*this.tableLampValue.value,this.tableLampMesh.material.emissiveIntensity=this.tableLampEmissive.value*this.tableLampValue.value,this.entranceLampLight.intensity=this.entranceLampIntensity.value*this.entranceLampValue.value,this.entranceLampMesh.material.emissiveIntensity=this.entranceLampEmissive.value*this.entranceLampValue.value,this.isBlenderAnimating&&this.mixer.update(e*1.2/1e3)}}class Yn{static random(e,t){return typeof e>"u"?Math.random():typeof t>"u"?Math.random()*e:e+Math.random()*(t-e)}static randomInt(e,t){return Math.floor(Yn.random(e,t))}static clamp=(e,t,i)=>Math.max(e,Math.min(t,i));static map(e,t,i,n,s){return(e-t)/(i-t)*(s-n)+n}static radians(e){return e*(2*Math.PI/360)}static magnitude(e,t){return Yn.dist(0,0,e,t)}static dist(e,t,i,n){return Math.sqrt((e-i)*(e-i)+(t-n)*(t-n))}static lerp(e,t,i){return e+(t-e)*i}static lerp2d=(e,t,i)=>{const n=this.lerp(e.x,t.x,i),s=this.lerp(e.y,t.y,i);return{x:n,y:s}};static lerp3d=(e,t,i)=>{const n=this.lerp(e.x,t.x,i),s=this.lerp(e.y,t.y,i),o=this.lerp(e.z,t.z,i);return{x:n,y:s,z:o}}}const Kc=r=>{const e=r.replace("#","0x");return parseInt(e,16)};class ZC{constructor(){this.progressData=[{progress:t=>t},{progress:t=>t*.5},{progress:t=>Math.min(t*1.6,1)},{progress:t=>t},{progress:t=>t>.99?1:Math.max(0,t-.7)*.6},{progress:t=>t>.98?1:Math.max(0,t-.3)*.65}];const e=new qp(10,128);this.group=new Zo,this.group.rotation.x=-Math.PI*.5,this.group.position.y=-.45,this.progressData.forEach((t,i)=>{const n=new Jn(e,new tA({toneMapped:!1,depthWrite:!1}));n.receiveShadow=!0,n.renderOrder=i,this.group.add(n)}),this.setColor(),window.addEventListener("load",this.setColor)}setColor=()=>{const e=getComputedStyle(document.documentElement),t=Kc(e.getPropertyValue("--color-bg")),i=Kc(e.getPropertyValue("--color-pink")),n=Kc(e.getPropertyValue("--color-green")),s=Kc(e.getPropertyValue("--color-blue"));[{color:t,colorAdjust:-.1},{color:i,colorAdjust:-.1},{color:n,colorAdjust:0},{color:n,colorAdjust:0},{color:s,colorAdjust:0},{color:t,colorAdjust:-.1}].forEach(({color:a,colorAdjust:l},c)=>{const h=this.group.children[c];h.material.color=new Ht(a).addScalar(l)})};update=({viewSize:e,scrollValues:t})=>{const n=Yt.isSp?1:Math.max(1,e.width/1400*.9);this.group.children.forEach((s,o)=>{if(o===0){s.scale.x=10*n,s.scale.y=10*n;return}const a=t[o-1].value*n,l=this.progressData[o].progress(a);s.scale.x=l,s.scale.y=l})}}class JC extends Wp{constructor({viewSize:e}){super(),this.setSize(e)}setSize=e=>{const{width:t,height:i}=e;this.left=-t*.5,this.right=t*.5,this.top=i*.5,this.bottom=-i*.5,this.near=.1,this.far=1e3,this.aspect=t/i,this.position.set(0,60,100),this.updateProjectionMatrix()}}class QC{constructor({wrapperEl:e,el:t,alpha:i=!1}){this.wrapperEl=e,this.viewSize={width:0,height:0},this.setupViewSize(),this.renderer=null,this.setupRenderer({el:t,alpha:i})}setupViewSize=()=>{const e=this.wrapperEl.clientWidth,t=this.wrapperEl.clientHeight;this.viewSize={width:e,height:t}};setupRenderer=({el:e,alpha:t})=>{this.renderer||(this.renderer=new j1({canvas:e,alpha:t})),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.viewSize.width,this.viewSize.height)};offscreenRender=({renderTarget:e,scene:t,camera:i})=>{this.renderer.setRenderTarget(e),this.renderer.render(t,i),this.renderer.setRenderTarget(null),this.renderer.clear()};render=({scene:e,camera:t})=>{this.renderer.render(e,t)};resize=()=>{this.setupViewSize(),this.setupRenderer({})};dispose=()=>{this.renderer.forceContextLoss(),this.renderer.context=null,this.renderer.domElement=null,this.renderer.dispose()}}const eP=new gy;eP.setCrossOrigin("anonymous");const Zc={light:new at(16777215),dark:new at(4805795)},Jc={light:new at(16777215),dark:new at(6982121)},tP=1.7,iP=2.1,Pd={opening:{x:0,y:-.35,z:-.8},greeting:{x:-1.7,y:-.35,z:-.8},kv:{x:0,y:-.35,z:-.2},about:{x:64e-5,y:-.35,z:-.2},work01:{x:360,y:-.35,z:-.3,xInverse:!0},work02:{x:6e-5,y:-.35,z:.45},contact:{x:4e-4,y:-.35,z:-1.55},last:{x:-7e-4,y:-.35,z:-.3}},Id={opening:{x:0,y:-.3,z:-.8},greeting:{x:0,y:-.3,z:-1.5},kv:{x:0,y:-.35,z:-.7},about:{x:0,y:-.35,z:-.2},work01:{x:.48,y:-.35,z:-.3},work02:{x:-.22,y:-.35,z:.34},contact:{x:.27,y:-.35,z:-1.8},last:{x:0,y:-.35,z:-.2}},Zs={opening:0,greeting:.04,kv:.1},Qc={opening:-.5,greeting:-.16,kv:.22},t0={opening:130,greeting:130,kv:360,about:400,work01:2e3,work02:1200,contact:1200,last:360},i0={opening:130,greeting:130,kv:210,about:250,work01:1200,work02:800,contact:800,last:210};class nP{constructor({wrapper:e,onLoad:t}){this.wrapperEl=e,this.glCanvas=new QC({wrapperEl:e,el:e.querySelector("canvas")}),this.glCanvas.renderer.outputColorSpace=nn,this.glCanvas.renderer.toneMapping=Nx,this.glCanvas.renderer.shadowMap.enabled=!0,this.glCanvas.renderer.toneMappingExposure=1;const{viewSize:i}=this.glCanvas;this.isReady=!1,this.isGreetingEnd=!1,this.isFirstScrolled=!1,this.kvFirstScrollProgress={value:0},this.camera=new JC({viewSize:i}),this.scene=new K1,this.aLight=new eA(Zc.light,tP),this.dLight=new Q1(Jc.light,iP),this.dLight.position.set(-.2,1,.6),this.dLight.castShadow=!0,this.dLight.shadow.mapSize.width=4096,this.dLight.shadow.mapSize.height=4096,this.dLight.shadow.camera.near=.1,this.dLight.shadow.camera.far=10;const n=4;this.dLight.shadow.camera.left=-4,this.dLight.shadow.camera.right=n,this.dLight.shadow.camera.top=n,this.dLight.shadow.camera.bottom=-4,this.scene.add(this.aLight),this.scene.add(this.dLight),this.group=new Zo,this.floor=new ZC,this.model=new KC({onLoad:()=>{this.model.mesh.position.set(0,Qc.opening,0),this.model.mesh.scale.set(Zs.opening,Zs.opening,Zs.opening),this.group.position.set(this.positionArray[0].x,this.positionArray[0].y,this.positionArray[0].z),this.isReady=!0,this.group.add(this.model.mesh),this.group.add(this.floor.group),this.scene.add(this.group),t()}}),this.positionArray=Object.values(Yt.isSp?Id:Pd),this.cameraZoomArray=Object.values(Yt.isSp?i0:t0),this.prevMousePosition=Yt.mouse.normalizedPosition,window.addEventListener("my:resizeIgnoreMobileVertical",this.resize)}greeting=({onComplete:e=()=>{}})=>{const i=(Yt.isSp?Id:Pd).greeting;Ut.timeline({delay:.6,onComplete:()=>{this.isGreetingEnd=!0}}).to(this.model.mesh.scale,{x:Zs.greeting,y:Zs.greeting,z:Zs.greeting,duration:.6,ease:"back.out(2.0)"}).to(this.model.mesh.position,{y:Qc.greeting,duration:.6,ease:"back.out(2.0)"},"<").to(this.group.position,{x:i.x,z:i.z,duration:1.4,ease:"power3.inOut"},">-=0.3").to({},{onStart:e},">-=0.5")};keyVisualAnimation=({onComplete:e=()=>{}})=>{Ut.timeline().to(this.kvFirstScrollProgress,{value:1,ease:"power4.inOut",duration:1.2,onComplete:()=>{this.isFirstScrolled=!0}}).to({},{onStart:e},">-=0.2")};update=({deltaTime:e,scrollValues:t})=>{if(this.isReady){if(this.model.update(e),this.floor.update({viewSize:this.glCanvas.viewSize,scrollValues:t}),!this.isGreetingEnd)this.camera.zoom=this.cameraZoomArray[0];else if(this.isFirstScrolled){let i=this.positionArray[2],n=this.cameraZoomArray[2];for(let a=0;a<t.length;a++){const l=i,c={...this.positionArray[a+3]};c.xInverse&&(c.x*=1/window.innerWidth**2),i=Yn.lerp3d(l,c,t[a].value);const h=n,u=this.cameraZoomArray[a+3];n=Yn.lerp(h,u,t[a].value)}this.group.position.set(i.x*(Yt.isSp?1:window.innerWidth),i.y,i.z),this.camera.zoom=n;const s=2.8,o=1.7;this.model.pictureCommonUniforms.uVisible.value=Math.min(t[2].value**s*o,1),this.model.pictureCommonUniforms.uTime.value+=e/1e3*1.2}else{const i=this.cameraZoomArray[1],n=this.cameraZoomArray[2],s=Yn.lerp(i,n,this.kvFirstScrollProgress.value);this.camera.zoom=s;const o=Zs.greeting,a=Zs.kv,l=Yn.lerp(o,a,this.kvFirstScrollProgress.value);this.model.mesh.scale.set(l,l,l);const c=Qc.greeting,h=Qc.kv,u=Yn.lerp(c,h,this.kvFirstScrollProgress.value);this.model.mesh.position.y=u;const d=this.positionArray[1],f=this.positionArray[2],p=Yn.lerp3d(d,f,this.kvFirstScrollProgress.value);this.group.position.set(p.x,p.y,p.z),this.model.mesh.rotation.y=this.kvFirstScrollProgress.value*Math.PI*2}if(Yt.mouse&&!Yt.isTouch){const i=Math.min(20/this.camera.zoom,.06),n=Yn.lerp2d(this.prevMousePosition,Yt.mouse.normalizedPosition,e/1e3*4);this.group.rotation.y=n.x*i,this.prevMousePosition=n}this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.draw()}};draw=()=>{this.glCanvas.render({scene:this.scene,camera:this.camera})};toggleTheme=(e="light")=>{const i="power2.out";Ut.timeline().to(this.aLight.color,{r:Zc[e].r,g:Zc[e].g,b:Zc[e].b,duration:.3,ease:i},"<").to(this.dLight.color,{r:Jc[e].r,g:Jc[e].g,b:Jc[e].b,duration:.3,ease:i},"<"),this.model.toggleLight(e)};onEnterWorks01=()=>{this.model.enableMonitorAndPhone()};onLeaveWorks01=()=>{this.model.disableMonitorAndPhone()};onEnterSectionContact=()=>{this.model.playContactAnimation()};resize=()=>{this.glCanvas.resize();const e=this.glCanvas.viewSize;this.camera.setSize(e),this.positionArray=Object.values(Yt.isSp?Id:Pd),this.cameraZoomArray=Object.values(Yt.isSp?i0:t0)};dispose=()=>{this.renderer.forceContextLoss(),this.renderer.context=null,this.renderer.domElement=null,this.renderer.dispose(),Ut.ticker.remove(this.update),window.removeEventListener("my:resizeIgnoreMobileVertical",this.resize),window.removeEventListener("load",this.resize)}}const sP=()=>{const r=document.querySelector('[data-js="greeting"]'),e=document.querySelector('[data-js="scroll-down"]'),t=document.querySelector('[data-js="theme-toggle"]'),i=document.querySelector('[data-js="theme-toggle-button"]'),n=document.querySelector('[data-js="title-ja"]'),s=[...document.querySelectorAll('[data-js="title-en"]')],o=document.querySelector('[data-js="desc-ja"]'),a=[...document.querySelectorAll('[data-js="margin"]')],l=[...document.querySelectorAll('[data-js="section"]')],c=[...document.querySelectorAll('[data-js="section-background"]')],h=[...document.querySelectorAll('[data-js="section-background-scrollbar"]')],u=document.querySelector('[data-js="gl-wrapper"]'),d=a.map(()=>({value:0}));a.forEach((w,S)=>{const R=d[S];Ut.to(R,{value:1,ease:"power2.inOut",scrollTrigger:{scrub:.2,start:"top center",end:"bottom bottom",trigger:w,invalidateOnRefresh:!0}})});const f=()=>{m.greeting({onComplete:()=>{Ut.to(r.children,{translateY:0,ease:$m,duration:gu,stagger:_u,onComplete:()=>{e.setAttribute("data-visible","true"),t.setAttribute("data-visible","true"),tg.addEvent()}})}})},p=()=>{tg.removeEvent(),window.removeEventListener("my:gesture:next",p),e.setAttribute("data-visible","false"),Ut.timeline().to(r.children,{translateY:"100%",ease:IM,duration:gu,stagger:_u}).to({},{onStart:()=>{m.keyVisualAnimation({onComplete:()=>{m.model.playKeyVisualAnimation()}})}},"<+=0.3")};window.addEventListener("my:gesture:next",p);const _=()=>{const S={translateY:0,duration:gu,ease:$m,stagger:_u};Ut.timeline({onComplete:()=>{e.setAttribute("data-visible","true"),window.dispatchEvent(new CustomEvent("my:kvanimation:end"))}}).to(n.children,{...S}).to(o.children,{...S},`<+=${.2}`).to(s[0].children,{...S},`<+=${.2}`).to(s[1].children,{...S},`<+=${.2}`)};window.addEventListener("my:blender:end",_);const m=new nP({wrapper:u,onLoad:f}),g=(w,S)=>{m.update({deltaTime:S,scrollValues:d})};Ut.ticker.add(g),l.forEach((w,S)=>{Xe.create({trigger:w,start:"top bottom",onEnter:()=>{const R=w.querySelector('[data-js="hero"]');R&&R.setAttribute("data-active","true")},once:!0}),S===l.length-2&&Xe.create({trigger:w,start:`top top+=${window.innerHeight+1200}`,onEnter:()=>{m.onEnterSectionContact()},once:!0})});const y=800,v=600;c.forEach((w,S)=>{Ut.fromTo(w,{scaleY:.4,translateY:"40%",borderRadius:()=>w.getAttribute("data-side")==="right"&&!Yt.isSp?`${w.clientWidth}px 0 0 0`:`0 ${w.clientWidth}px 0 0`},{scaleY:1,translateY:0,borderRadius:0,scrollTrigger:{trigger:l[S],start:()=>`top bottom+=${Yt.isSp?v:y}px`,end:"top bottom",scrub:!0,invalidateOnRefresh:!0,onEnter:()=>{w.setAttribute("data-visible","true"),w.setAttribute("data-origin-top","false")},onEnterBack:()=>{w.setAttribute("data-origin-top","false")},onLeaveBack:()=>{w.setAttribute("data-visible","false")}}});let R=1.5;const b=()=>{R=Math.abs(l[S].clientHeight+window.innerHeight)/l[S].clientHeight};b();const M=w.getAttribute("data-name")==="finally"?R:1;Xe.create({trigger:l[S],start:"top bottom",end:"bottom top",scrub:!0,invalidateOnRefresh:!0,onUpdate:({progress:P})=>{h[S].style.transform=`scale3d(1, ${P*M}, 1)`},onRefresh:()=>{b()}}),Ut.fromTo(w,{scaleY:1,translateY:0,borderRadius:0},{scaleY:.4,translateY:"-40%",borderRadius:()=>w.getAttribute("data-side")==="right"||Yt.isSp?`0 0 0 ${w.clientWidth}px`:`0 0 ${w.clientWidth}px 0`,scrollTrigger:{trigger:l[S],start:"bottom top",end:()=>`bottom top-=${Yt.isSp?v:y}px`,scrub:!0,invalidateOnRefresh:!0,onEnter:()=>{w.setAttribute("data-origin-top","true")},onEnterBack:()=>{w.setAttribute("data-visible","true"),w.setAttribute("data-origin-top","true")},onLeave:()=>{w.setAttribute("data-visible","false")}}})}),new IntersectionObserver(w=>{w.forEach(S=>{S.isIntersecting?m.onEnterWorks01():m.onLeaveWorks01()})},{root:null,rootMargin:"999999px 0px 200%"}).observe(l[1]);const E=()=>{const S=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",S),m.toggleTheme(S)};i.addEventListener("click",E)};let Ts=null,Rs=null;const n0=()=>{const r=document.documentElement,e=document.body;Ts===null&&(Ts={position:window.getComputedStyle(e).position,top:window.getComputedStyle(e).top,left:window.getComputedStyle(e).left},Rs={top:r.scrollTop||e.scrollTop,left:r.scrollLeft||e.scrollLeft})},rP=()=>{if(!Ts||!Rs)return;const r=document.body;r.style.position=Ts.position,r.style.top=Ts.top,r.style.left=Ts.left,window.scrollTo(Rs.left,Rs.top),Ts=null,Rs=null},oP=()=>{if(!Ts||!Rs)return;const r=document.body;r.style.position="fixed",r.style.top=`${-Rs.top}px`,r.style.left=`${-Rs.left}px`};let Ld=!0;const s0=r=>{(!Ts||!Rs)&&n0(),Ld=typeof r=="boolean"?r:!Ld,Ld?rP():(n0(),oP())};Ut.registerPlugin(Xe);Ut.ticker.fps(60);const aP=()=>{const r=new Event("resize"),e=()=>{window.dispatchEvent(r)};window.addEventListener("load",e),window.addEventListener("pageshow",e),new ResizeObserver(Xe.refresh).observe(document.body),window.scrollTo(0,0),s0(!1),VM(),DM(),FM();const i=new AM({lerp:.24});window.addEventListener("my:kvanimation:end",()=>{s0(!0),i.on("scroll",Xe.update),Ut.ticker.add(n=>{i.raf(n*1e3)})}),CM({lenis:i}),Ut.ticker.add(rf.raf),sP()};aP();
