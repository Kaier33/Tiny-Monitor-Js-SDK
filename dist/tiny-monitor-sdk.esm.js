function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a={exports:{}},u=i,c=Object.defineProperty,s=function(e,t){try{c(u,e,{value:t,configurable:!0,writable:!0})}catch(r){u[e]=t}return t},l=s,f=i["__core-js_shared__"]||l("__core-js_shared__",{}),p=f;(a.exports=function(e,t){return p[e]||(p[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var d,h,g=Function.prototype,v=g.bind,y=g.call,m=v&&v.bind(y),b=v?function(e){return e&&m(y,e)}:function(e){return e&&function(){return y.apply(e,arguments)}},E=i.TypeError,O=function(e){if(null==e)throw E("Can't call method on "+e);return e},R=O,S=i.Object,w=function(e){return S(R(e))},_=w,I=b({}.hasOwnProperty),x=Object.hasOwn||function(e,t){return I(_(e),t)},j=b,T=0,k=Math.random(),P=j(1..toString),C=function(e){return"Symbol("+(void 0===e?"":e)+")_"+P(++T+k,36)},A=function(e){return"function"==typeof e},F=i,D=A,L=function(e){return D(e)?e:void 0},N=function(e,t){return arguments.length<2?L(F[e]):F[e]&&F[e][t]},M=i,H=N("navigator","userAgent")||"",q=M.process,U=M.Deno,V=q&&q.versions||U&&U.version,z=V&&V.v8;z&&(h=(d=z.split("."))[0]>0&&d[0]<4?1:+(d[0]+d[1])),!h&&H&&(!(d=H.match(/Edge\/(\d+)/))||d[1]>=74)&&(d=H.match(/Chrome\/(\d+)/))&&(h=+d[1]);var B=h,G=function(e){try{return!!e()}catch(e){return!0}},W=B,X=G,$=!!Object.getOwnPropertySymbols&&!X((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&W&&W<41})),J=$&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,K=i,Y=a.exports,Q=x,Z=C,ee=$,te=J,re=Y("wks"),ne=K.Symbol,oe=ne&&ne.for,ie=te?ne:ne&&ne.withoutSetter||Z,ae=function(e){if(!Q(re,e)||!ee&&"string"!=typeof re[e]){var t="Symbol."+e;ee&&Q(ne,e)?re[e]=ne[e]:re[e]=te&&oe?oe(t):ie(t)}return re[e]},ue={};ue[ae("toStringTag")]="z";var ce="[object z]"===String(ue),se={exports:{}},le=!G((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),fe={},pe=A,de=function(e){return"object"==typeof e?null!==e:pe(e)},he=de,ge=i.document,ve=he(ge)&&he(ge.createElement),ye=function(e){return ve?ge.createElement(e):{}},me=ye,be=!le&&!G((function(){return 7!=Object.defineProperty(me("div"),"a",{get:function(){return 7}}).a})),Ee=i,Oe=de,Re=Ee.String,Se=Ee.TypeError,we=function(e){if(Oe(e))return e;throw Se(Re(e)+" is not an object")},_e=Function.prototype.call,Ie=_e.bind?_e.bind(_e):function(){return _e.apply(_e,arguments)},xe=b({}.isPrototypeOf),je=N,Te=A,ke=xe,Pe=J,Ce=i.Object,Ae=Pe?function(e){return"symbol"==typeof e}:function(e){var t=je("Symbol");return Te(t)&&ke(t.prototype,Ce(e))},Fe=i.String,De=A,Le=function(e){try{return Fe(e)}catch(e){return"Object"}},Ne=i.TypeError,Me=function(e){if(De(e))return e;throw Ne(Le(e)+" is not a function")},He=Ie,qe=A,Ue=de,Ve=i.TypeError,ze=Ie,Be=de,Ge=Ae,We=function(e,t){var r=e[t];return null==r?void 0:Me(r)},Xe=function(e,t){var r,n;if("string"===t&&qe(r=e.toString)&&!Ue(n=He(r,e)))return n;if(qe(r=e.valueOf)&&!Ue(n=He(r,e)))return n;if("string"!==t&&qe(r=e.toString)&&!Ue(n=He(r,e)))return n;throw Ve("Can't convert object to primitive value")},$e=ae,Je=i.TypeError,Ke=$e("toPrimitive"),Ye=function(e,t){if(!Be(e)||Ge(e))return e;var r,n=We(e,Ke);if(n){if(void 0===t&&(t="default"),r=ze(n,e,t),!Be(r)||Ge(r))return r;throw Je("Can't convert object to primitive value")}return void 0===t&&(t="number"),Xe(e,t)},Qe=Ae,Ze=function(e){var t=Ye(e,"string");return Qe(t)?t:t+""},et=le,tt=be,rt=we,nt=Ze,ot=i.TypeError,it=Object.defineProperty;fe.f=et?it:function(e,t,r){if(rt(e),t=nt(t),rt(r),tt)try{return it(e,t,r)}catch(e){}if("get"in r||"set"in r)throw ot("Accessors not supported");return"value"in r&&(e[t]=r.value),e};var at=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},ut=fe,ct=at,st=le?function(e,t,r){return ut.f(e,t,ct(1,r))}:function(e,t,r){return e[t]=r,e},lt=A,ft=f,pt=b(Function.toString);lt(ft.inspectSource)||(ft.inspectSource=function(e){return pt(e)});var dt,ht,gt,vt=ft.inspectSource,yt=A,mt=vt,bt=i.WeakMap,Et=yt(bt)&&/native code/.test(mt(bt)),Ot=a.exports,Rt=C,St=Ot("keys"),wt=function(e){return St[e]||(St[e]=Rt(e))},_t={},It=Et,xt=i,jt=b,Tt=de,kt=st,Pt=x,Ct=f,At=wt,Ft=_t,Dt=xt.TypeError,Lt=xt.WeakMap;if(It||Ct.state){var Nt=Ct.state||(Ct.state=new Lt),Mt=jt(Nt.get),Ht=jt(Nt.has),qt=jt(Nt.set);dt=function(e,t){if(Ht(Nt,e))throw new Dt("Object already initialized");return t.facade=e,qt(Nt,e,t),t},ht=function(e){return Mt(Nt,e)||{}},gt=function(e){return Ht(Nt,e)}}else{var Ut=At("state");Ft[Ut]=!0,dt=function(e,t){if(Pt(e,Ut))throw new Dt("Object already initialized");return t.facade=e,kt(e,Ut,t),t},ht=function(e){return Pt(e,Ut)?e[Ut]:{}},gt=function(e){return Pt(e,Ut)}}var Vt={set:dt,get:ht,has:gt,enforce:function(e){return gt(e)?ht(e):dt(e,{})},getterFor:function(e){return function(t){var r;if(!Tt(t)||(r=ht(t)).type!==e)throw Dt("Incompatible receiver, "+e+" required");return r}}},zt=le,Bt=x,Gt=Function.prototype,Wt=zt&&Object.getOwnPropertyDescriptor,Xt=Bt(Gt,"name"),$t={EXISTS:Xt,PROPER:Xt&&"something"===function(){}.name,CONFIGURABLE:Xt&&(!zt||zt&&Wt(Gt,"name").configurable)},Jt=i,Kt=A,Yt=x,Qt=st,Zt=s,er=vt,tr=$t.CONFIGURABLE,rr=Vt.get,nr=Vt.enforce,or=String(String).split("String");(se.exports=function(e,t,r,n){var o,i=!!n&&!!n.unsafe,a=!!n&&!!n.enumerable,u=!!n&&!!n.noTargetGet,c=n&&void 0!==n.name?n.name:t;Kt(r)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Yt(r,"name")||tr&&r.name!==c)&&Qt(r,"name",c),(o=nr(r)).source||(o.source=or.join("string"==typeof c?c:""))),e!==Jt?(i?!u&&e[t]&&(a=!0):delete e[t],a?e[t]=r:Qt(e,t,r)):a?e[t]=r:Zt(t,r)})(Function.prototype,"toString",(function(){return Kt(this)&&rr(this).source||er(this)}));var ir=b,ar=ir({}.toString),ur=ir("".slice),cr=function(e){return ur(ar(e),8,-1)},sr=i,lr=ce,fr=A,pr=cr,dr=ae("toStringTag"),hr=sr.Object,gr="Arguments"==pr(function(){return arguments}()),vr=lr?pr:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=hr(e),dr))?r:gr?pr(t):"Object"==(n=pr(t))&&fr(t.callee)?"Arguments":n},yr=vr,mr=ce?{}.toString:function(){return"[object "+yr(this)+"]"},br=ce,Er=se.exports,Or=mr;br||Er(Object.prototype,"toString",Or,{unsafe:!0});var Rr={},Sr={},wr={}.propertyIsEnumerable,_r=Object.getOwnPropertyDescriptor,Ir=_r&&!wr.call({1:2},1);Sr.f=Ir?function(e){var t=_r(this,e);return!!t&&t.enumerable}:wr;var xr=b,jr=G,Tr=cr,kr=i.Object,Pr=xr("".split),Cr=jr((function(){return!kr("z").propertyIsEnumerable(0)}))?function(e){return"String"==Tr(e)?Pr(e,""):kr(e)}:kr,Ar=O,Fr=function(e){return Cr(Ar(e))},Dr=le,Lr=Ie,Nr=Sr,Mr=at,Hr=Fr,qr=Ze,Ur=x,Vr=be,zr=Object.getOwnPropertyDescriptor;Rr.f=Dr?zr:function(e,t){if(e=Hr(e),t=qr(t),Vr)try{return zr(e,t)}catch(e){}if(Ur(e,t))return Mr(!Lr(Nr.f,e,t),e[t])};var Br={},Gr=Math.ceil,Wr=Math.floor,Xr=function(e){var t=+e;return t!=t||0===t?0:(t>0?Wr:Gr)(t)},$r=Xr,Jr=Math.max,Kr=Math.min,Yr=Xr,Qr=Math.min,Zr=function(e){return e>0?Qr(Yr(e),9007199254740991):0},en=function(e){return Zr(e.length)},tn=Fr,rn=function(e,t){var r=$r(e);return r<0?Jr(r+t,0):Kr(r,t)},nn=en,on=function(e){return function(t,r,n){var o,i=tn(t),a=nn(i),u=rn(n,a);if(e&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((e||u in i)&&i[u]===r)return e||u||0;return!e&&-1}},an={includes:on(!0),indexOf:on(!1)},un=x,cn=Fr,sn=an.indexOf,ln=_t,fn=b([].push),pn=function(e,t){var r,n=cn(e),o=0,i=[];for(r in n)!un(ln,r)&&un(n,r)&&fn(i,r);for(;t.length>o;)un(n,r=t[o++])&&(~sn(i,r)||fn(i,r));return i},dn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hn=pn,gn=dn.concat("length","prototype");Br.f=Object.getOwnPropertyNames||function(e){return hn(e,gn)};var vn={};vn.f=Object.getOwnPropertySymbols;var yn=N,mn=Br,bn=vn,En=we,On=b([].concat),Rn=yn("Reflect","ownKeys")||function(e){var t=mn.f(En(e)),r=bn.f;return r?On(t,r(e)):t},Sn=x,wn=Rn,_n=Rr,In=fe,xn=G,jn=A,Tn=/#|\.prototype\./,kn=function(e,t){var r=Cn[Pn(e)];return r==Fn||r!=An&&(jn(t)?xn(t):!!t)},Pn=kn.normalize=function(e){return String(e).replace(Tn,".").toLowerCase()},Cn=kn.data={},An=kn.NATIVE="N",Fn=kn.POLYFILL="P",Dn=kn,Ln=i,Nn=Rr.f,Mn=st,Hn=se.exports,qn=s,Un=function(e,t,r){for(var n=wn(t),o=In.f,i=_n.f,a=0;a<n.length;a++){var u=n[a];Sn(e,u)||r&&Sn(r,u)||o(e,u,i(t,u))}},Vn=Dn,zn=function(e,t){var r,n,o,i,a,u=e.target,c=e.global,s=e.stat;if(r=c?Ln:s?Ln[u]||qn(u,{}):(Ln[u]||{}).prototype)for(n in t){if(i=t[n],o=e.noTargetGet?(a=Nn(r,n))&&a.value:r[n],!Vn(c?n:u+(s?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Un(i,o)}(e.sham||o&&o.sham)&&Mn(i,"sham",!0),Hn(r,n,i,e)}},Bn=cr,Gn=Array.isArray||function(e){return"Array"==Bn(e)},Wn=Ze,Xn=fe,$n=at,Jn=b,Kn=G,Yn=A,Qn=vr,Zn=vt,eo=function(){},to=[],ro=N("Reflect","construct"),no=/^\s*(?:class|function)\b/,oo=Jn(no.exec),io=!no.exec(eo),ao=function(e){if(!Yn(e))return!1;try{return ro(eo,to,e),!0}catch(e){return!1}},uo=function(e){if(!Yn(e))return!1;switch(Qn(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return io||!!oo(no,Zn(e))}catch(e){return!0}};uo.sham=!0;var co=!ro||Kn((function(){var e;return ao(ao.call)||!ao(Object)||!ao((function(){e=!0}))||e}))?uo:ao,so=i,lo=Gn,fo=co,po=de,ho=ae("species"),go=so.Array,vo=function(e){var t;return lo(e)&&(t=e.constructor,(fo(t)&&(t===go||lo(t.prototype))||po(t)&&null===(t=t[ho]))&&(t=void 0)),void 0===t?go:t},yo=G,mo=B,bo=ae("species"),Eo=zn,Oo=i,Ro=G,So=Gn,wo=de,_o=w,Io=en,xo=function(e,t,r){var n=Wn(t);n in e?Xn.f(e,n,$n(0,r)):e[n]=r},jo=function(e,t){return new(vo(e))(0===t?0:t)},To=function(e){return mo>=51||!yo((function(){var t=[];return(t.constructor={})[bo]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},ko=B,Po=ae("isConcatSpreadable"),Co=Oo.TypeError,Ao=ko>=51||!Ro((function(){var e=[];return e[Po]=!1,e.concat()[0]!==e})),Fo=To("concat"),Do=function(e){if(!wo(e))return!1;var t=e[Po];return void 0!==t?!!t:So(e)};Eo({target:"Array",proto:!0,forced:!Ao||!Fo},{concat:function(e){var t,r,n,o,i,a=_o(this),u=jo(a,0),c=0;for(t=-1,n=arguments.length;t<n;t++)if(Do(i=-1===t?a:arguments[t])){if(c+(o=Io(i))>9007199254740991)throw Co("Maximum allowed index exceeded");for(r=0;r<o;r++,c++)r in i&&xo(u,c,i[r])}else{if(c>=9007199254740991)throw Co("Maximum allowed index exceeded");xo(u,c++,i)}return u.length=c,u}});var Lo=vr,No=i.String,Mo=function(e){if("Symbol"===Lo(e))throw TypeError("Cannot convert a Symbol value to a string");return No(e)},Ho=we,qo=function(){var e=Ho(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Uo=b,Vo=$t.PROPER,zo=se.exports,Bo=we,Go=xe,Wo=Mo,Xo=G,$o=qo,Jo=RegExp.prototype,Ko=Jo.toString,Yo=Uo($o),Qo=Xo((function(){return"/a/b"!=Ko.call({source:"a",flags:"b"})})),Zo=Vo&&"toString"!=Ko.name;(Qo||Zo)&&zo(RegExp.prototype,"toString",(function(){var e=Bo(this),t=Wo(e.source),r=e.flags;return"/"+t+"/"+Wo(void 0===r&&Go(Jo,e)&&!("flags"in Jo)?Yo(e):r)}),{unsafe:!0});var ei,ti=G,ri=i.RegExp,ni=ti((function(){var e=ri("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),oi=ni||ti((function(){return!ri("a","y").sticky})),ii={BROKEN_CARET:ni||ti((function(){var e=ri("^r","gy");return e.lastIndex=2,null!=e.exec("str")})),MISSED_STICKY:oi,UNSUPPORTED_Y:ni},ai=pn,ui=dn,ci=Object.keys||function(e){return ai(e,ui)},si=fe,li=we,fi=Fr,pi=ci,di=le?Object.defineProperties:function(e,t){li(e);for(var r,n=fi(t),o=pi(t),i=o.length,a=0;i>a;)si.f(e,r=o[a++],n[r]);return e},hi=N("document","documentElement"),gi=we,vi=di,yi=dn,mi=_t,bi=hi,Ei=ye,Oi=wt("IE_PROTO"),Ri=function(){},Si=function(e){return"<script>"+e+"<\/script>"},wi=function(e){e.write(Si("")),e.close();var t=e.parentWindow.Object;return e=null,t},_i=function(){try{ei=new ActiveXObject("htmlfile")}catch(e){}var e,t;_i="undefined"!=typeof document?document.domain&&ei?wi(ei):((t=Ei("iframe")).style.display="none",bi.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Si("document.F=Object")),e.close(),e.F):wi(ei);for(var r=yi.length;r--;)delete _i.prototype[yi[r]];return _i()};mi[Oi]=!0;var Ii,xi,ji=Object.create||function(e,t){var r;return null!==e?(Ri.prototype=gi(e),r=new Ri,Ri.prototype=null,r[Oi]=e):r=_i(),void 0===t?r:vi(r,t)},Ti=G,ki=i.RegExp,Pi=Ti((function(){var e=ki(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),Ci=G,Ai=i.RegExp,Fi=Ci((function(){var e=Ai("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),Di=Ie,Li=b,Ni=Mo,Mi=qo,Hi=ii,qi=a.exports,Ui=ji,Vi=Vt.get,zi=Pi,Bi=Fi,Gi=qi("native-string-replace",String.prototype.replace),Wi=RegExp.prototype.exec,Xi=Wi,$i=Li("".charAt),Ji=Li("".indexOf),Ki=Li("".replace),Yi=Li("".slice),Qi=(xi=/b*/g,Di(Wi,Ii=/a/,"a"),Di(Wi,xi,"a"),0!==Ii.lastIndex||0!==xi.lastIndex),Zi=Hi.BROKEN_CARET,ea=void 0!==/()??/.exec("")[1];(Qi||ea||Zi||zi||Bi)&&(Xi=function(e){var t,r,n,o,i,a,u,c=this,s=Vi(c),l=Ni(e),f=s.raw;if(f)return f.lastIndex=c.lastIndex,t=Di(Xi,f,l),c.lastIndex=f.lastIndex,t;var p=s.groups,d=Zi&&c.sticky,h=Di(Mi,c),g=c.source,v=0,y=l;if(d&&(h=Ki(h,"y",""),-1===Ji(h,"g")&&(h+="g"),y=Yi(l,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==$i(l,c.lastIndex-1))&&(g="(?: "+g+")",y=" "+y,v++),r=new RegExp("^(?:"+g+")",h)),ea&&(r=new RegExp("^"+g+"$(?!\\s)",h)),Qi&&(n=c.lastIndex),o=Di(Wi,d?r:c,y),d?o?(o.input=Yi(o.input,v),o[0]=Yi(o[0],v),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:Qi&&o&&(c.lastIndex=c.global?o.index+o[0].length:n),ea&&o&&o.length>1&&Di(Gi,o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=Ui(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o});function ta(e){var t,r=null===(t=e)?"NULL":void 0===t?"UNDEFINED":"string"==typeof t||t instanceof String?"".concat(t):t.toString();if(!r)return 0;var n,o=0;if(0===r.length)return o;for(n=0;n<r.length;n++)o=(o<<5)-o+r.charCodeAt(n),o|=0;return o<0?"n"+Math.abs(o):"p"+o}function ra(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{if(navigator.sendBeacon&&"function"==typeof navigator.sendBeacon)navigator.sendBeacon(e,JSON.stringify(t));else{var r=new XMLHttpRequest;r.open("POST",e),r.setRequestHeader("content-type","application/json"),r.withCredentials=!0,r.send(JSON.stringify(t))}}catch(e){console.log("post err")}}zn({target:"RegExp",proto:!0,forced:/./.exec!==Xi},{exec:Xi});var na=function(){function t(r){var n=r.dsn,o=r.key,i=r.Vue;e(this,t),this.userId="",this.dsn=n,this.key=o,this.Vue=i,this._ERROR_STORE=[],this._DEVICE_INFO={screen_info:{availHeight:screen.availHeight||"",availWidth:screen.availWidth||"",height:screen.height,width:screen.width},language:navigator.language,userAgent:navigator.userAgent.toLocaleLowerCase()},this.initialize()}return r(t,[{key:"initialize",value:function(){this.polyfillRequestIdleCallback(),this.generateUserId(),this.proxyErrorStore(),this.collectCatchErrorFn()}},{key:"polyfillRequestIdleCallback",value:function(){window.requestIdleCallback=window.requestIdleCallback||function(e){return setTimeout((function(){e()}),1)}}},{key:"proxyErrorStore",value:function(){var e=Array.prototype,t=Object.create(e);["push","clear"].forEach((function(r){t[r]=function(){"push"===r?e[r].apply(this,arguments):"clear"===r&&(this.length=0)}})),this._ERROR_STORE.__proto__=t}},{key:"collectCatchErrorFn",value:function(){this.unhandledrejectionHandle(),this.listenErrorHandle(),this.vueErrorHandle(),this.overwriteXHR()}},{key:"generateUserId",value:function(){localStorage.getItem("___monitor-js-uid___")?this.userId=localStorage.getItem("___monitor-js-uid___"):(this.userId=ta(String((new Date).getTime())+navigator.userAgent),localStorage.setItem("___monitor-js-uid___",this.userId))}},{key:"manualPost",value:function(){var e=this;e._ERROR_STORE.length&&(ra(e.dsn+"/post",e._ERROR_STORE),e._ERROR_STORE.clear())}},{key:"clearErrorStore",value:function(){this._ERROR_STORE.clear()}},{key:"reportError",value:function(e){var t=this;window.requestIdleCallback((function(){ra(t.dsn+"/report-err",e)}))}},{key:"generateReportData",value:function(e){var t=e.type,r=e.errorInfo;if(t||r)return{type:t,errorInfo:r,url:location.href,userId:this.userId,key:this.key,deviceInfo:this._DEVICE_INFO,timestamp:(new Date).getTime(),errorId:ta(t+JSON.stringify(r)+location.href)}}},{key:"unhandledrejectionHandle",value:function(){var e=this;window.addEventListener("unhandledrejection",(function(t){console.error("promise异常::",t.reason);var r=e.generateReportData({type:"unhandledrejection",errorInfo:{error:t.reason}});return e.reportError(r),e._ERROR_STORE.push(r),!0}))}},{key:"listenErrorHandle",value:function(){var e=this;window.addEventListener("error",(function(t){if(console.error("异常::",t),t instanceof ErrorEvent){var r=e.generateReportData({type:"script_error",errorInfo:{colno:t.colno,lineno:t.lineno,message:t.message,filename:t.filename}});e.reportError(r),e._ERROR_STORE.push(r)}else if(t.target.localName){var n=e.generateReportData({type:"resource_error",errorInfo:{error:t.target.outerHTML}});e.reportError(n),e._ERROR_STORE.push(n)}}),!0)}},{key:"vueErrorHandle",value:function(){var e=this;this.Vue&&this.Vue.config&&(this.Vue.config.errorHandler=function(t,r,n){console.error("Vue_err::",t);var o="";r.$route&&(o=r.$route.path);var i=e.generateReportData({type:"vue_error",errorInfo:{vue_stack_err:t.stack,vue_info:"".concat(t.toString(),"-----\x3e").concat(n),route:o}});e.reportError(i),e._ERROR_STORE.push(i)})}},{key:"overwriteXHR",value:function(){if(!(!1 in window)){var e=this,t=window.XMLHttpRequest.prototype,r=t.open;t.open=function(){this._httpInfo={method:arguments[0],startTime:Date.now()},r.apply(this,arguments)};var n=t.send,o=this.replaceOriginalFn(n,"loadend",(function(){if(4===this.readyState&&this.status>=400){console.log("接口响应粗错了",this);var t=/'application\/json'/.test(this.getResponseHeader("content-type")),r=e.generateReportData({type:"request_error",errorInfo:{status:this.status,response:t?JSON.parse(this.response):this.response,responseURL:this.responseURL,requestMethod:this._httpInfo.method,spendTime:Date.now()-this._httpInfo.startTime}});e.reportError(r),e._ERROR_STORE.push(r)}}));t.send=o}}},{key:"replaceOriginalFn",value:function(e,t,r){return function(){this.addEventListener(t,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];e.apply(this,o)}}}]),t}(),oa=function(){function t(){e(this,t),this.monitorInstance=null}return r(t,null,[{key:"init",value:function(e){var t=e.dsn,r=e.key,n=e.Vue;t&&r&&(this.monitorInstance=new na({dsn:t,key:r,Vue:n}))}},{key:"instance",value:function(){return this.monitorInstance}},{key:"errorStore",value:function(){return this.monitorInstance._ERROR_STORE}},{key:"manualPost",value:function(){this.monitorInstance.manualPost()}},{key:"clearErrorStore",value:function(){this.monitorInstance.clearErrorStore()}}]),t}();export{oa as default};
