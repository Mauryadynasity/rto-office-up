(()=>{var _o=Object.create,Yi=Object.defineProperty;var go=Object.getOwnPropertyDescriptor;var mo=Object.getOwnPropertyNames;var vo=Object.getPrototypeOf,bo=Object.prototype.hasOwnProperty;var yo=e=>Yi(e,"__esModule",{value:!0});var mt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var wo=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of mo(t))!bo.call(e,r)&&r!=="default"&&Yi(e,r,{get:()=>t[r],enumerable:!(n=go(t,r))||n.enumerable});return e},$t=e=>wo(yo(Yi(e!=null?_o(vo(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ln=mt((ra,Ci)=>{(function(e,t){"use strict";typeof Ci=="object"&&typeof Ci.exports=="object"?Ci.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}:t(e)})(typeof window!="undefined"?window:ra,function(e,t){"use strict";var n=[],r=Object.getPrototypeOf,s=n.slice,c=n.flat?function(i){return n.flat.call(i)}:function(i){return n.concat.apply([],i)},u=n.push,d=n.indexOf,C={},v=C.toString,p=C.hasOwnProperty,x=p.toString,A=x.call(Object),V={},ee=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},Se=function(a){return a!=null&&a===a.window},ve=e.document,Re={type:!0,src:!0,nonce:!0,noModule:!0};function Ve(i,a,o){o=o||ve;var f,h,g=o.createElement("script");if(g.text=i,a)for(f in Re)h=a[f]||a.getAttribute&&a.getAttribute(f),h&&g.setAttribute(f,h);o.head.appendChild(g).parentNode.removeChild(g)}function Ke(i){return i==null?i+"":typeof i=="object"||typeof i=="function"?C[v.call(i)]||"object":typeof i}var z="3.6.0",l=function(i,a){return new l.fn.init(i,a)};l.fn=l.prototype={jquery:z,constructor:l,length:0,toArray:function(){return s.call(this)},get:function(i){return i==null?s.call(this):i<0?this[i+this.length]:this[i]},pushStack:function(i){var a=l.merge(this.constructor(),i);return a.prevObject=this,a},each:function(i){return l.each(this,i)},map:function(i){return this.pushStack(l.map(this,function(a,o){return i.call(a,o,a)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(i,a){return(a+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(i,a){return a%2}))},eq:function(i){var a=this.length,o=+i+(i<0?a:0);return this.pushStack(o>=0&&o<a?[this[o]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var i,a,o,f,h,g,b=arguments[0]||{},N=1,D=arguments.length,Y=!1;for(typeof b=="boolean"&&(Y=b,b=arguments[N]||{},N++),typeof b!="object"&&!ee(b)&&(b={}),N===D&&(b=this,N--);N<D;N++)if((i=arguments[N])!=null)for(a in i)f=i[a],!(a==="__proto__"||b===f)&&(Y&&f&&(l.isPlainObject(f)||(h=Array.isArray(f)))?(o=b[a],h&&!Array.isArray(o)?g=[]:!h&&!l.isPlainObject(o)?g={}:g=o,h=!1,b[a]=l.extend(Y,g,f)):f!==void 0&&(b[a]=f));return b},l.extend({expando:"jQuery"+(z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(i){throw new Error(i)},noop:function(){},isPlainObject:function(i){var a,o;return!i||v.call(i)!=="[object Object]"?!1:(a=r(i),a?(o=p.call(a,"constructor")&&a.constructor,typeof o=="function"&&x.call(o)===A):!0)},isEmptyObject:function(i){var a;for(a in i)return!1;return!0},globalEval:function(i,a,o){Ve(i,{nonce:a&&a.nonce},o)},each:function(i,a){var o,f=0;if(W(i))for(o=i.length;f<o&&a.call(i[f],f,i[f])!==!1;f++);else for(f in i)if(a.call(i[f],f,i[f])===!1)break;return i},makeArray:function(i,a){var o=a||[];return i!=null&&(W(Object(i))?l.merge(o,typeof i=="string"?[i]:i):u.call(o,i)),o},inArray:function(i,a,o){return a==null?-1:d.call(a,i,o)},merge:function(i,a){for(var o=+a.length,f=0,h=i.length;f<o;f++)i[h++]=a[f];return i.length=h,i},grep:function(i,a,o){for(var f,h=[],g=0,b=i.length,N=!o;g<b;g++)f=!a(i[g],g),f!==N&&h.push(i[g]);return h},map:function(i,a,o){var f,h,g=0,b=[];if(W(i))for(f=i.length;g<f;g++)h=a(i[g],g,o),h!=null&&b.push(h);else for(g in i)h=a(i[g],g,o),h!=null&&b.push(h);return c(b)},guid:1,support:V}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,a){C["[object "+a+"]"]=a.toLowerCase()});function W(i){var a=!!i&&"length"in i&&i.length,o=Ke(i);return ee(i)||Se(i)?!1:o==="array"||a===0||typeof a=="number"&&a>0&&a-1 in i}var re=function(i){var a,o,f,h,g,b,N,D,Y,ie,Ae,J,ce,it,_t,rt,Wt,qt,pn,St="sizzle"+1*new Date,ht=i.document,sn=0,Et=0,jt=bi(),ai=bi(),gi=bi(),hn=bi(),qn=function(E,S){return E===S&&(Ae=!0),0},$n={}.hasOwnProperty,on=[],Bn=on.pop,bn=on.push,Fn=on.push,Kr=on.slice,Wn=function(E,S){for(var I=0,_e=E.length;I<_e;I++)if(E[I]===S)return I;return-1},Fi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Tt="[\\x20\\t\\r\\n\\f]",Un="(?:\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Xr="\\["+Tt+"*("+Un+")(?:"+Tt+"*([*^$|!~]?=)"+Tt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Un+"))|)"+Tt+"*\\]",zi=":("+Un+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Xr+")*)|.*)\\)|)",Zs=new RegExp(Tt+"+","g"),mi=new RegExp("^"+Tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Tt+"+$","g"),eo=new RegExp("^"+Tt+"*,"+Tt+"*"),Qr=new RegExp("^"+Tt+"*([>+~]|"+Tt+")"+Tt+"*"),to=new RegExp(Tt+"|>"),no=new RegExp(zi),ro=new RegExp("^"+Un+"$"),vi={ID:new RegExp("^#("+Un+")"),CLASS:new RegExp("^\\.("+Un+")"),TAG:new RegExp("^("+Un+"|[*])"),ATTR:new RegExp("^"+Xr),PSEUDO:new RegExp("^"+zi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Tt+"*(even|odd|(([+-]|)(\\d*)n|)"+Tt+"*(?:([+-]|)"+Tt+"*(\\d+)|))"+Tt+"*\\)|)","i"),bool:new RegExp("^(?:"+Fi+")$","i"),needsContext:new RegExp("^"+Tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Tt+"*((?:-\\d)?\\d*)"+Tt+"*\\)|)(?=[^-]|$)","i")},ao=/HTML$/i,so=/^(?:input|select|textarea|button)$/i,oo=/^h\d$/i,si=/^[^{]+\{\s*\[native \w/,lo=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Hi=/[+~]/,Ln=new RegExp("\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\([^\\r\\n\\f])","g"),Mn=function(E,S){var I="0x"+E.slice(1)-65536;return S||(I<0?String.fromCharCode(I+65536):String.fromCharCode(I>>10|55296,I&1023|56320))},Jr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Zr=function(E,S){return S?E==="\0"?"\uFFFD":E.slice(0,-1)+"\\"+E.charCodeAt(E.length-1).toString(16)+" ":"\\"+E},ea=function(){J()},fo=wi(function(E){return E.disabled===!0&&E.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Fn.apply(on=Kr.call(ht.childNodes),ht.childNodes),on[ht.childNodes.length].nodeType}catch(E){Fn={apply:on.length?function(S,I){bn.apply(S,Kr.call(I))}:function(S,I){for(var _e=S.length,G=0;S[_e++]=I[G++];);S.length=_e-1}}}function Ot(E,S,I,_e){var G,me,Te,Be,Ge,ft,st,ut=S&&S.ownerDocument,bt=S?S.nodeType:9;if(I=I||[],typeof E!="string"||!E||bt!==1&&bt!==9&&bt!==11)return I;if(!_e&&(J(S),S=S||ce,_t)){if(bt!==11&&(Ge=lo.exec(E)))if(G=Ge[1]){if(bt===9)if(Te=S.getElementById(G)){if(Te.id===G)return I.push(Te),I}else return I;else if(ut&&(Te=ut.getElementById(G))&&pn(S,Te)&&Te.id===G)return I.push(Te),I}else{if(Ge[2])return Fn.apply(I,S.getElementsByTagName(E)),I;if((G=Ge[3])&&o.getElementsByClassName&&S.getElementsByClassName)return Fn.apply(I,S.getElementsByClassName(G)),I}if(o.qsa&&!hn[E+" "]&&(!rt||!rt.test(E))&&(bt!==1||S.nodeName.toLowerCase()!=="object")){if(st=E,ut=S,bt===1&&(to.test(E)||Qr.test(E))){for(ut=Hi.test(E)&&$i(S.parentNode)||S,(ut!==S||!o.scope)&&((Be=S.getAttribute("id"))?Be=Be.replace(Jr,Zr):S.setAttribute("id",Be=St)),ft=b(E),me=ft.length;me--;)ft[me]=(Be?"#"+Be:":scope")+" "+yi(ft[me]);st=ft.join(",")}try{return Fn.apply(I,ut.querySelectorAll(st)),I}catch(Nt){hn(E,!0)}finally{Be===St&&S.removeAttribute("id")}}}return D(E.replace(mi,"$1"),S,I,_e)}function bi(){var E=[];function S(I,_e){return E.push(I+" ")>f.cacheLength&&delete S[E.shift()],S[I+" "]=_e}return S}function Tn(E){return E[St]=!0,E}function kn(E){var S=ce.createElement("fieldset");try{return!!E(S)}catch(I){return!1}finally{S.parentNode&&S.parentNode.removeChild(S),S=null}}function qi(E,S){for(var I=E.split("|"),_e=I.length;_e--;)f.attrHandle[I[_e]]=S}function ta(E,S){var I=S&&E,_e=I&&E.nodeType===1&&S.nodeType===1&&E.sourceIndex-S.sourceIndex;if(_e)return _e;if(I){for(;I=I.nextSibling;)if(I===S)return-1}return E?1:-1}function co(E){return function(S){var I=S.nodeName.toLowerCase();return I==="input"&&S.type===E}}function uo(E){return function(S){var I=S.nodeName.toLowerCase();return(I==="input"||I==="button")&&S.type===E}}function na(E){return function(S){return"form"in S?S.parentNode&&S.disabled===!1?"label"in S?"label"in S.parentNode?S.parentNode.disabled===E:S.disabled===E:S.isDisabled===E||S.isDisabled!==!E&&fo(S)===E:S.disabled===E:"label"in S?S.disabled===E:!1}}function Vn(E){return Tn(function(S){return S=+S,Tn(function(I,_e){for(var G,me=E([],I.length,S),Te=me.length;Te--;)I[G=me[Te]]&&(I[G]=!(_e[G]=I[G]))})})}function $i(E){return E&&typeof E.getElementsByTagName!="undefined"&&E}o=Ot.support={},g=Ot.isXML=function(E){var S=E&&E.namespaceURI,I=E&&(E.ownerDocument||E).documentElement;return!ao.test(S||I&&I.nodeName||"HTML")},J=Ot.setDocument=function(E){var S,I,_e=E?E.ownerDocument||E:ht;return _e==ce||_e.nodeType!==9||!_e.documentElement||(ce=_e,it=ce.documentElement,_t=!g(ce),ht!=ce&&(I=ce.defaultView)&&I.top!==I&&(I.addEventListener?I.addEventListener("unload",ea,!1):I.attachEvent&&I.attachEvent("onunload",ea)),o.scope=kn(function(G){return it.appendChild(G).appendChild(ce.createElement("div")),typeof G.querySelectorAll!="undefined"&&!G.querySelectorAll(":scope fieldset div").length}),o.attributes=kn(function(G){return G.className="i",!G.getAttribute("className")}),o.getElementsByTagName=kn(function(G){return G.appendChild(ce.createComment("")),!G.getElementsByTagName("*").length}),o.getElementsByClassName=si.test(ce.getElementsByClassName),o.getById=kn(function(G){return it.appendChild(G).id=St,!ce.getElementsByName||!ce.getElementsByName(St).length}),o.getById?(f.filter.ID=function(G){var me=G.replace(Ln,Mn);return function(Te){return Te.getAttribute("id")===me}},f.find.ID=function(G,me){if(typeof me.getElementById!="undefined"&&_t){var Te=me.getElementById(G);return Te?[Te]:[]}}):(f.filter.ID=function(G){var me=G.replace(Ln,Mn);return function(Te){var Be=typeof Te.getAttributeNode!="undefined"&&Te.getAttributeNode("id");return Be&&Be.value===me}},f.find.ID=function(G,me){if(typeof me.getElementById!="undefined"&&_t){var Te,Be,Ge,ft=me.getElementById(G);if(ft){if(Te=ft.getAttributeNode("id"),Te&&Te.value===G)return[ft];for(Ge=me.getElementsByName(G),Be=0;ft=Ge[Be++];)if(Te=ft.getAttributeNode("id"),Te&&Te.value===G)return[ft]}return[]}}),f.find.TAG=o.getElementsByTagName?function(G,me){if(typeof me.getElementsByTagName!="undefined")return me.getElementsByTagName(G);if(o.qsa)return me.querySelectorAll(G)}:function(G,me){var Te,Be=[],Ge=0,ft=me.getElementsByTagName(G);if(G==="*"){for(;Te=ft[Ge++];)Te.nodeType===1&&Be.push(Te);return Be}return ft},f.find.CLASS=o.getElementsByClassName&&function(G,me){if(typeof me.getElementsByClassName!="undefined"&&_t)return me.getElementsByClassName(G)},Wt=[],rt=[],(o.qsa=si.test(ce.querySelectorAll))&&(kn(function(G){var me;it.appendChild(G).innerHTML="<a id='"+St+"'></a><select id='"+St+"-\r\\' msallowcapture=''><option selected=''></option></select>",G.querySelectorAll("[msallowcapture^='']").length&&rt.push("[*^$]="+Tt+`*(?:''|"")`),G.querySelectorAll("[selected]").length||rt.push("\\["+Tt+"*(?:value|"+Fi+")"),G.querySelectorAll("[id~="+St+"-]").length||rt.push("~="),me=ce.createElement("input"),me.setAttribute("name",""),G.appendChild(me),G.querySelectorAll("[name='']").length||rt.push("\\["+Tt+"*name"+Tt+"*="+Tt+`*(?:''|"")`),G.querySelectorAll(":checked").length||rt.push(":checked"),G.querySelectorAll("a#"+St+"+*").length||rt.push(".#.+[+~]"),G.querySelectorAll("\\\f"),rt.push("[\\r\\n\\f]")}),kn(function(G){G.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var me=ce.createElement("input");me.setAttribute("type","hidden"),G.appendChild(me).setAttribute("name","D"),G.querySelectorAll("[name=d]").length&&rt.push("name"+Tt+"*[*^$|!~]?="),G.querySelectorAll(":enabled").length!==2&&rt.push(":enabled",":disabled"),it.appendChild(G).disabled=!0,G.querySelectorAll(":disabled").length!==2&&rt.push(":enabled",":disabled"),G.querySelectorAll("*,:x"),rt.push(",.*:")})),(o.matchesSelector=si.test(qt=it.matches||it.webkitMatchesSelector||it.mozMatchesSelector||it.oMatchesSelector||it.msMatchesSelector))&&kn(function(G){o.disconnectedMatch=qt.call(G,"*"),qt.call(G,"[s!='']:x"),Wt.push("!=",zi)}),rt=rt.length&&new RegExp(rt.join("|")),Wt=Wt.length&&new RegExp(Wt.join("|")),S=si.test(it.compareDocumentPosition),pn=S||si.test(it.contains)?function(G,me){var Te=G.nodeType===9?G.documentElement:G,Be=me&&me.parentNode;return G===Be||!!(Be&&Be.nodeType===1&&(Te.contains?Te.contains(Be):G.compareDocumentPosition&&G.compareDocumentPosition(Be)&16))}:function(G,me){if(me){for(;me=me.parentNode;)if(me===G)return!0}return!1},qn=S?function(G,me){if(G===me)return Ae=!0,0;var Te=!G.compareDocumentPosition-!me.compareDocumentPosition;return Te||(Te=(G.ownerDocument||G)==(me.ownerDocument||me)?G.compareDocumentPosition(me):1,Te&1||!o.sortDetached&&me.compareDocumentPosition(G)===Te?G==ce||G.ownerDocument==ht&&pn(ht,G)?-1:me==ce||me.ownerDocument==ht&&pn(ht,me)?1:ie?Wn(ie,G)-Wn(ie,me):0:Te&4?-1:1)}:function(G,me){if(G===me)return Ae=!0,0;var Te,Be=0,Ge=G.parentNode,ft=me.parentNode,st=[G],ut=[me];if(!Ge||!ft)return G==ce?-1:me==ce?1:Ge?-1:ft?1:ie?Wn(ie,G)-Wn(ie,me):0;if(Ge===ft)return ta(G,me);for(Te=G;Te=Te.parentNode;)st.unshift(Te);for(Te=me;Te=Te.parentNode;)ut.unshift(Te);for(;st[Be]===ut[Be];)Be++;return Be?ta(st[Be],ut[Be]):st[Be]==ht?-1:ut[Be]==ht?1:0}),ce},Ot.matches=function(E,S){return Ot(E,null,null,S)},Ot.matchesSelector=function(E,S){if(J(E),o.matchesSelector&&_t&&!hn[S+" "]&&(!Wt||!Wt.test(S))&&(!rt||!rt.test(S)))try{var I=qt.call(E,S);if(I||o.disconnectedMatch||E.document&&E.document.nodeType!==11)return I}catch(_e){hn(S,!0)}return Ot(S,ce,null,[E]).length>0},Ot.contains=function(E,S){return(E.ownerDocument||E)!=ce&&J(E),pn(E,S)},Ot.attr=function(E,S){(E.ownerDocument||E)!=ce&&J(E);var I=f.attrHandle[S.toLowerCase()],_e=I&&$n.call(f.attrHandle,S.toLowerCase())?I(E,S,!_t):void 0;return _e!==void 0?_e:o.attributes||!_t?E.getAttribute(S):(_e=E.getAttributeNode(S))&&_e.specified?_e.value:null},Ot.escape=function(E){return(E+"").replace(Jr,Zr)},Ot.error=function(E){throw new Error("Syntax error, unrecognized expression: "+E)},Ot.uniqueSort=function(E){var S,I=[],_e=0,G=0;if(Ae=!o.detectDuplicates,ie=!o.sortStable&&E.slice(0),E.sort(qn),Ae){for(;S=E[G++];)S===E[G]&&(_e=I.push(G));for(;_e--;)E.splice(I[_e],1)}return ie=null,E},h=Ot.getText=function(E){var S,I="",_e=0,G=E.nodeType;if(G){if(G===1||G===9||G===11){if(typeof E.textContent=="string")return E.textContent;for(E=E.firstChild;E;E=E.nextSibling)I+=h(E)}else if(G===3||G===4)return E.nodeValue}else for(;S=E[_e++];)I+=h(S);return I},f=Ot.selectors={cacheLength:50,createPseudo:Tn,match:vi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(E){return E[1]=E[1].replace(Ln,Mn),E[3]=(E[3]||E[4]||E[5]||"").replace(Ln,Mn),E[2]==="~="&&(E[3]=" "+E[3]+" "),E.slice(0,4)},CHILD:function(E){return E[1]=E[1].toLowerCase(),E[1].slice(0,3)==="nth"?(E[3]||Ot.error(E[0]),E[4]=+(E[4]?E[5]+(E[6]||1):2*(E[3]==="even"||E[3]==="odd")),E[5]=+(E[7]+E[8]||E[3]==="odd")):E[3]&&Ot.error(E[0]),E},PSEUDO:function(E){var S,I=!E[6]&&E[2];return vi.CHILD.test(E[0])?null:(E[3]?E[2]=E[4]||E[5]||"":I&&no.test(I)&&(S=b(I,!0))&&(S=I.indexOf(")",I.length-S)-I.length)&&(E[0]=E[0].slice(0,S),E[2]=I.slice(0,S)),E.slice(0,3))}},filter:{TAG:function(E){var S=E.replace(Ln,Mn).toLowerCase();return E==="*"?function(){return!0}:function(I){return I.nodeName&&I.nodeName.toLowerCase()===S}},CLASS:function(E){var S=jt[E+" "];return S||(S=new RegExp("(^|"+Tt+")"+E+"("+Tt+"|$)"))&&jt(E,function(I){return S.test(typeof I.className=="string"&&I.className||typeof I.getAttribute!="undefined"&&I.getAttribute("class")||"")})},ATTR:function(E,S,I){return function(_e){var G=Ot.attr(_e,E);return G==null?S==="!=":S?(G+="",S==="="?G===I:S==="!="?G!==I:S==="^="?I&&G.indexOf(I)===0:S==="*="?I&&G.indexOf(I)>-1:S==="$="?I&&G.slice(-I.length)===I:S==="~="?(" "+G.replace(Zs," ")+" ").indexOf(I)>-1:S==="|="?G===I||G.slice(0,I.length+1)===I+"-":!1):!0}},CHILD:function(E,S,I,_e,G){var me=E.slice(0,3)!=="nth",Te=E.slice(-4)!=="last",Be=S==="of-type";return _e===1&&G===0?function(Ge){return!!Ge.parentNode}:function(Ge,ft,st){var ut,bt,Nt,ct,Ut,Jt,_n=me!==Te?"nextSibling":"previousSibling",Lt=Ge.parentNode,oi=Be&&Ge.nodeName.toLowerCase(),li=!st&&!Be,gn=!1;if(Lt){if(me){for(;_n;){for(ct=Ge;ct=ct[_n];)if(Be?ct.nodeName.toLowerCase()===oi:ct.nodeType===1)return!1;Jt=_n=E==="only"&&!Jt&&"nextSibling"}return!0}if(Jt=[Te?Lt.firstChild:Lt.lastChild],Te&&li){for(ct=Lt,Nt=ct[St]||(ct[St]={}),bt=Nt[ct.uniqueID]||(Nt[ct.uniqueID]={}),ut=bt[E]||[],Ut=ut[0]===sn&&ut[1],gn=Ut&&ut[2],ct=Ut&&Lt.childNodes[Ut];ct=++Ut&&ct&&ct[_n]||(gn=Ut=0)||Jt.pop();)if(ct.nodeType===1&&++gn&&ct===Ge){bt[E]=[sn,Ut,gn];break}}else if(li&&(ct=Ge,Nt=ct[St]||(ct[St]={}),bt=Nt[ct.uniqueID]||(Nt[ct.uniqueID]={}),ut=bt[E]||[],Ut=ut[0]===sn&&ut[1],gn=Ut),gn===!1)for(;(ct=++Ut&&ct&&ct[_n]||(gn=Ut=0)||Jt.pop())&&!((Be?ct.nodeName.toLowerCase()===oi:ct.nodeType===1)&&++gn&&(li&&(Nt=ct[St]||(ct[St]={}),bt=Nt[ct.uniqueID]||(Nt[ct.uniqueID]={}),bt[E]=[sn,gn]),ct===Ge)););return gn-=G,gn===_e||gn%_e==0&&gn/_e>=0}}},PSEUDO:function(E,S){var I,_e=f.pseudos[E]||f.setFilters[E.toLowerCase()]||Ot.error("unsupported pseudo: "+E);return _e[St]?_e(S):_e.length>1?(I=[E,E,"",S],f.setFilters.hasOwnProperty(E.toLowerCase())?Tn(function(G,me){for(var Te,Be=_e(G,S),Ge=Be.length;Ge--;)Te=Wn(G,Be[Ge]),G[Te]=!(me[Te]=Be[Ge])}):function(G){return _e(G,0,I)}):_e}},pseudos:{not:Tn(function(E){var S=[],I=[],_e=N(E.replace(mi,"$1"));return _e[St]?Tn(function(G,me,Te,Be){for(var Ge,ft=_e(G,null,Be,[]),st=G.length;st--;)(Ge=ft[st])&&(G[st]=!(me[st]=Ge))}):function(G,me,Te){return S[0]=G,_e(S,null,Te,I),S[0]=null,!I.pop()}}),has:Tn(function(E){return function(S){return Ot(E,S).length>0}}),contains:Tn(function(E){return E=E.replace(Ln,Mn),function(S){return(S.textContent||h(S)).indexOf(E)>-1}}),lang:Tn(function(E){return ro.test(E||"")||Ot.error("unsupported lang: "+E),E=E.replace(Ln,Mn).toLowerCase(),function(S){var I;do if(I=_t?S.lang:S.getAttribute("xml:lang")||S.getAttribute("lang"))return I=I.toLowerCase(),I===E||I.indexOf(E+"-")===0;while((S=S.parentNode)&&S.nodeType===1);return!1}}),target:function(E){var S=i.location&&i.location.hash;return S&&S.slice(1)===E.id},root:function(E){return E===it},focus:function(E){return E===ce.activeElement&&(!ce.hasFocus||ce.hasFocus())&&!!(E.type||E.href||~E.tabIndex)},enabled:na(!1),disabled:na(!0),checked:function(E){var S=E.nodeName.toLowerCase();return S==="input"&&!!E.checked||S==="option"&&!!E.selected},selected:function(E){return E.parentNode&&E.parentNode.selectedIndex,E.selected===!0},empty:function(E){for(E=E.firstChild;E;E=E.nextSibling)if(E.nodeType<6)return!1;return!0},parent:function(E){return!f.pseudos.empty(E)},header:function(E){return oo.test(E.nodeName)},input:function(E){return so.test(E.nodeName)},button:function(E){var S=E.nodeName.toLowerCase();return S==="input"&&E.type==="button"||S==="button"},text:function(E){var S;return E.nodeName.toLowerCase()==="input"&&E.type==="text"&&((S=E.getAttribute("type"))==null||S.toLowerCase()==="text")},first:Vn(function(){return[0]}),last:Vn(function(E,S){return[S-1]}),eq:Vn(function(E,S,I){return[I<0?I+S:I]}),even:Vn(function(E,S){for(var I=0;I<S;I+=2)E.push(I);return E}),odd:Vn(function(E,S){for(var I=1;I<S;I+=2)E.push(I);return E}),lt:Vn(function(E,S,I){for(var _e=I<0?I+S:I>S?S:I;--_e>=0;)E.push(_e);return E}),gt:Vn(function(E,S,I){for(var _e=I<0?I+S:I;++_e<S;)E.push(_e);return E})}},f.pseudos.nth=f.pseudos.eq;for(a in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})f.pseudos[a]=co(a);for(a in{submit:!0,reset:!0})f.pseudos[a]=uo(a);function ia(){}ia.prototype=f.filters=f.pseudos,f.setFilters=new ia,b=Ot.tokenize=function(E,S){var I,_e,G,me,Te,Be,Ge,ft=ai[E+" "];if(ft)return S?0:ft.slice(0);for(Te=E,Be=[],Ge=f.preFilter;Te;){(!I||(_e=eo.exec(Te)))&&(_e&&(Te=Te.slice(_e[0].length)||Te),Be.push(G=[])),I=!1,(_e=Qr.exec(Te))&&(I=_e.shift(),G.push({value:I,type:_e[0].replace(mi," ")}),Te=Te.slice(I.length));for(me in f.filter)(_e=vi[me].exec(Te))&&(!Ge[me]||(_e=Ge[me](_e)))&&(I=_e.shift(),G.push({value:I,type:me,matches:_e}),Te=Te.slice(I.length));if(!I)break}return S?Te.length:Te?Ot.error(E):ai(E,Be).slice(0)};function yi(E){for(var S=0,I=E.length,_e="";S<I;S++)_e+=E[S].value;return _e}function wi(E,S,I){var _e=S.dir,G=S.next,me=G||_e,Te=I&&me==="parentNode",Be=Et++;return S.first?function(Ge,ft,st){for(;Ge=Ge[_e];)if(Ge.nodeType===1||Te)return E(Ge,ft,st);return!1}:function(Ge,ft,st){var ut,bt,Nt,ct=[sn,Be];if(st){for(;Ge=Ge[_e];)if((Ge.nodeType===1||Te)&&E(Ge,ft,st))return!0}else for(;Ge=Ge[_e];)if(Ge.nodeType===1||Te)if(Nt=Ge[St]||(Ge[St]={}),bt=Nt[Ge.uniqueID]||(Nt[Ge.uniqueID]={}),G&&G===Ge.nodeName.toLowerCase())Ge=Ge[_e]||Ge;else{if((ut=bt[me])&&ut[0]===sn&&ut[1]===Be)return ct[2]=ut[2];if(bt[me]=ct,ct[2]=E(Ge,ft,st))return!0}return!1}}function Wi(E){return E.length>1?function(S,I,_e){for(var G=E.length;G--;)if(!E[G](S,I,_e))return!1;return!0}:E[0]}function po(E,S,I){for(var _e=0,G=S.length;_e<G;_e++)Ot(E,S[_e],I);return I}function Ei(E,S,I,_e,G){for(var me,Te=[],Be=0,Ge=E.length,ft=S!=null;Be<Ge;Be++)(me=E[Be])&&(!I||I(me,_e,G))&&(Te.push(me),ft&&S.push(Be));return Te}function Ui(E,S,I,_e,G,me){return _e&&!_e[St]&&(_e=Ui(_e)),G&&!G[St]&&(G=Ui(G,me)),Tn(function(Te,Be,Ge,ft){var st,ut,bt,Nt=[],ct=[],Ut=Be.length,Jt=Te||po(S||"*",Ge.nodeType?[Ge]:Ge,[]),_n=E&&(Te||!S)?Ei(Jt,Nt,E,Ge,ft):Jt,Lt=I?G||(Te?E:Ut||_e)?[]:Be:_n;if(I&&I(_n,Lt,Ge,ft),_e)for(st=Ei(Lt,ct),_e(st,[],Ge,ft),ut=st.length;ut--;)(bt=st[ut])&&(Lt[ct[ut]]=!(_n[ct[ut]]=bt));if(Te){if(G||E){if(G){for(st=[],ut=Lt.length;ut--;)(bt=Lt[ut])&&st.push(_n[ut]=bt);G(null,Lt=[],st,ft)}for(ut=Lt.length;ut--;)(bt=Lt[ut])&&(st=G?Wn(Te,bt):Nt[ut])>-1&&(Te[st]=!(Be[st]=bt))}}else Lt=Ei(Lt===Be?Lt.splice(Ut,Lt.length):Lt),G?G(null,Be,Lt,ft):Fn.apply(Be,Lt)})}function Vi(E){for(var S,I,_e,G=E.length,me=f.relative[E[0].type],Te=me||f.relative[" "],Be=me?1:0,Ge=wi(function(ut){return ut===S},Te,!0),ft=wi(function(ut){return Wn(S,ut)>-1},Te,!0),st=[function(ut,bt,Nt){var ct=!me&&(Nt||bt!==Y)||((S=bt).nodeType?Ge(ut,bt,Nt):ft(ut,bt,Nt));return S=null,ct}];Be<G;Be++)if(I=f.relative[E[Be].type])st=[wi(Wi(st),I)];else{if(I=f.filter[E[Be].type].apply(null,E[Be].matches),I[St]){for(_e=++Be;_e<G&&!f.relative[E[_e].type];_e++);return Ui(Be>1&&Wi(st),Be>1&&yi(E.slice(0,Be-1).concat({value:E[Be-2].type===" "?"*":""})).replace(mi,"$1"),I,Be<_e&&Vi(E.slice(Be,_e)),_e<G&&Vi(E=E.slice(_e)),_e<G&&yi(E))}st.push(I)}return Wi(st)}function ho(E,S){var I=S.length>0,_e=E.length>0,G=function(me,Te,Be,Ge,ft){var st,ut,bt,Nt=0,ct="0",Ut=me&&[],Jt=[],_n=Y,Lt=me||_e&&f.find.TAG("*",ft),oi=sn+=_n==null?1:Math.random()||.1,li=Lt.length;for(ft&&(Y=Te==ce||Te||ft);ct!==li&&(st=Lt[ct])!=null;ct++){if(_e&&st){for(ut=0,!Te&&st.ownerDocument!=ce&&(J(st),Be=!_t);bt=E[ut++];)if(bt(st,Te||ce,Be)){Ge.push(st);break}ft&&(sn=oi)}I&&((st=!bt&&st)&&Nt--,me&&Ut.push(st))}if(Nt+=ct,I&&ct!==Nt){for(ut=0;bt=S[ut++];)bt(Ut,Jt,Te,Be);if(me){if(Nt>0)for(;ct--;)Ut[ct]||Jt[ct]||(Jt[ct]=Bn.call(Ge));Jt=Ei(Jt)}Fn.apply(Ge,Jt),ft&&!me&&Jt.length>0&&Nt+S.length>1&&Ot.uniqueSort(Ge)}return ft&&(sn=oi,Y=_n),Ut};return I?Tn(G):G}return N=Ot.compile=function(E,S){var I,_e=[],G=[],me=gi[E+" "];if(!me){for(S||(S=b(E)),I=S.length;I--;)me=Vi(S[I]),me[St]?_e.push(me):G.push(me);me=gi(E,ho(G,_e)),me.selector=E}return me},D=Ot.select=function(E,S,I,_e){var G,me,Te,Be,Ge,ft=typeof E=="function"&&E,st=!_e&&b(E=ft.selector||E);if(I=I||[],st.length===1){if(me=st[0]=st[0].slice(0),me.length>2&&(Te=me[0]).type==="ID"&&S.nodeType===9&&_t&&f.relative[me[1].type]){if(S=(f.find.ID(Te.matches[0].replace(Ln,Mn),S)||[])[0],S)ft&&(S=S.parentNode);else return I;E=E.slice(me.shift().value.length)}for(G=vi.needsContext.test(E)?0:me.length;G--&&(Te=me[G],!f.relative[Be=Te.type]);)if((Ge=f.find[Be])&&(_e=Ge(Te.matches[0].replace(Ln,Mn),Hi.test(me[0].type)&&$i(S.parentNode)||S))){if(me.splice(G,1),E=_e.length&&yi(me),!E)return Fn.apply(I,_e),I;break}}return(ft||N(E,st))(_e,S,!_t,I,!S||Hi.test(E)&&$i(S.parentNode)||S),I},o.sortStable=St.split("").sort(qn).join("")===St,o.detectDuplicates=!!Ae,J(),o.sortDetached=kn(function(E){return E.compareDocumentPosition(ce.createElement("fieldset"))&1}),kn(function(E){return E.innerHTML="<a href='#'></a>",E.firstChild.getAttribute("href")==="#"})||qi("type|href|height|width",function(E,S,I){if(!I)return E.getAttribute(S,S.toLowerCase()==="type"?1:2)}),(!o.attributes||!kn(function(E){return E.innerHTML="<input/>",E.firstChild.setAttribute("value",""),E.firstChild.getAttribute("value")===""}))&&qi("value",function(E,S,I){if(!I&&E.nodeName.toLowerCase()==="input")return E.defaultValue}),kn(function(E){return E.getAttribute("disabled")==null})||qi(Fi,function(E,S,I){var _e;if(!I)return E[S]===!0?S.toLowerCase():(_e=E.getAttributeNode(S))&&_e.specified?_e.value:null}),Ot}(e);l.find=re,l.expr=re.selectors,l.expr[":"]=l.expr.pseudos,l.uniqueSort=l.unique=re.uniqueSort,l.text=re.getText,l.isXMLDoc=re.isXML,l.contains=re.contains,l.escapeSelector=re.escape;var ge=function(i,a,o){for(var f=[],h=o!==void 0;(i=i[a])&&i.nodeType!==9;)if(i.nodeType===1){if(h&&l(i).is(o))break;f.push(i)}return f},se=function(i,a){for(var o=[];i;i=i.nextSibling)i.nodeType===1&&i!==a&&o.push(i);return o},te=l.expr.match.needsContext;function L(i,a){return i.nodeName&&i.nodeName.toLowerCase()===a.toLowerCase()}var R=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function F(i,a,o){return ee(a)?l.grep(i,function(f,h){return!!a.call(f,h,f)!==o}):a.nodeType?l.grep(i,function(f){return f===a!==o}):typeof a!="string"?l.grep(i,function(f){return d.call(a,f)>-1!==o}):l.filter(a,i,o)}l.filter=function(i,a,o){var f=a[0];return o&&(i=":not("+i+")"),a.length===1&&f.nodeType===1?l.find.matchesSelector(f,i)?[f]:[]:l.find.matches(i,l.grep(a,function(h){return h.nodeType===1}))},l.fn.extend({find:function(i){var a,o,f=this.length,h=this;if(typeof i!="string")return this.pushStack(l(i).filter(function(){for(a=0;a<f;a++)if(l.contains(h[a],this))return!0}));for(o=this.pushStack([]),a=0;a<f;a++)l.find(i,h[a],o);return f>1?l.uniqueSort(o):o},filter:function(i){return this.pushStack(F(this,i||[],!1))},not:function(i){return this.pushStack(F(this,i||[],!0))},is:function(i){return!!F(this,typeof i=="string"&&te.test(i)?l(i):i||[],!1).length}});var H,j=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,q=l.fn.init=function(i,a,o){var f,h;if(!i)return this;if(o=o||H,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?f=[null,i,null]:f=j.exec(i),f&&(f[1]||!a))if(f[1]){if(a=a instanceof l?a[0]:a,l.merge(this,l.parseHTML(f[1],a&&a.nodeType?a.ownerDocument||a:ve,!0)),R.test(f[1])&&l.isPlainObject(a))for(f in a)ee(this[f])?this[f](a[f]):this.attr(f,a[f]);return this}else return h=ve.getElementById(f[2]),h&&(this[0]=h,this.length=1),this;else return!a||a.jquery?(a||o).find(i):this.constructor(a).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(ee(i))return o.ready!==void 0?o.ready(i):i(l)}return l.makeArray(i,this)};q.prototype=l.fn,H=l(ve);var X=/^(?:parents|prev(?:Until|All))/,ne={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(i){var a=l(i,this),o=a.length;return this.filter(function(){for(var f=0;f<o;f++)if(l.contains(this,a[f]))return!0})},closest:function(i,a){var o,f=0,h=this.length,g=[],b=typeof i!="string"&&l(i);if(!te.test(i)){for(;f<h;f++)for(o=this[f];o&&o!==a;o=o.parentNode)if(o.nodeType<11&&(b?b.index(o)>-1:o.nodeType===1&&l.find.matchesSelector(o,i))){g.push(o);break}}return this.pushStack(g.length>1?l.uniqueSort(g):g)},index:function(i){return i?typeof i=="string"?d.call(l(i),this[0]):d.call(this,i.jquery?i[0]:i):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(i,a){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(i,a))))},addBack:function(i){return this.add(i==null?this.prevObject:this.prevObject.filter(i))}});function Oe(i,a){for(;(i=i[a])&&i.nodeType!==1;);return i}l.each({parent:function(i){var a=i.parentNode;return a&&a.nodeType!==11?a:null},parents:function(i){return ge(i,"parentNode")},parentsUntil:function(i,a,o){return ge(i,"parentNode",o)},next:function(i){return Oe(i,"nextSibling")},prev:function(i){return Oe(i,"previousSibling")},nextAll:function(i){return ge(i,"nextSibling")},prevAll:function(i){return ge(i,"previousSibling")},nextUntil:function(i,a,o){return ge(i,"nextSibling",o)},prevUntil:function(i,a,o){return ge(i,"previousSibling",o)},siblings:function(i){return se((i.parentNode||{}).firstChild,i)},children:function(i){return se(i.firstChild)},contents:function(i){return i.contentDocument!=null&&r(i.contentDocument)?i.contentDocument:(L(i,"template")&&(i=i.content||i),l.merge([],i.childNodes))}},function(i,a){l.fn[i]=function(o,f){var h=l.map(this,a,o);return i.slice(-5)!=="Until"&&(f=o),f&&typeof f=="string"&&(h=l.filter(f,h)),this.length>1&&(ne[i]||l.uniqueSort(h),X.test(i)&&h.reverse()),this.pushStack(h)}});var Fe=/[^\x20\t\r\n\f]+/g;function Ze(i){var a={};return l.each(i.match(Fe)||[],function(o,f){a[f]=!0}),a}l.Callbacks=function(i){i=typeof i=="string"?Ze(i):l.extend({},i);var a,o,f,h,g=[],b=[],N=-1,D=function(){for(h=h||i.once,f=a=!0;b.length;N=-1)for(o=b.shift();++N<g.length;)g[N].apply(o[0],o[1])===!1&&i.stopOnFalse&&(N=g.length,o=!1);i.memory||(o=!1),a=!1,h&&(o?g=[]:g="")},Y={add:function(){return g&&(o&&!a&&(N=g.length-1,b.push(o)),function ie(Ae){l.each(Ae,function(J,ce){ee(ce)?(!i.unique||!Y.has(ce))&&g.push(ce):ce&&ce.length&&Ke(ce)!=="string"&&ie(ce)})}(arguments),o&&!a&&D()),this},remove:function(){return l.each(arguments,function(ie,Ae){for(var J;(J=l.inArray(Ae,g,J))>-1;)g.splice(J,1),J<=N&&N--}),this},has:function(ie){return ie?l.inArray(ie,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return h=b=[],g=o="",this},disabled:function(){return!g},lock:function(){return h=b=[],!o&&!a&&(g=o=""),this},locked:function(){return!!h},fireWith:function(ie,Ae){return h||(Ae=Ae||[],Ae=[ie,Ae.slice?Ae.slice():Ae],b.push(Ae),a||D()),this},fire:function(){return Y.fireWith(this,arguments),this},fired:function(){return!!f}};return Y};function je(i){return i}function ye(i){throw i}function we(i,a,o,f){var h;try{i&&ee(h=i.promise)?h.call(i).done(a).fail(o):i&&ee(h=i.then)?h.call(i,a,o):a.apply(void 0,[i].slice(f))}catch(g){o.apply(void 0,[g])}}l.extend({Deferred:function(i){var a=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],o="pending",f={state:function(){return o},always:function(){return h.done(arguments).fail(arguments),this},catch:function(g){return f.then(null,g)},pipe:function(){var g=arguments;return l.Deferred(function(b){l.each(a,function(N,D){var Y=ee(g[D[4]])&&g[D[4]];h[D[1]](function(){var ie=Y&&Y.apply(this,arguments);ie&&ee(ie.promise)?ie.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[D[0]+"With"](this,Y?[ie]:arguments)})}),g=null}).promise()},then:function(g,b,N){var D=0;function Y(ie,Ae,J,ce){return function(){var it=this,_t=arguments,rt=function(){var qt,pn;if(!(ie<D)){if(qt=J.apply(it,_t),qt===Ae.promise())throw new TypeError("Thenable self-resolution");pn=qt&&(typeof qt=="object"||typeof qt=="function")&&qt.then,ee(pn)?ce?pn.call(qt,Y(D,Ae,je,ce),Y(D,Ae,ye,ce)):(D++,pn.call(qt,Y(D,Ae,je,ce),Y(D,Ae,ye,ce),Y(D,Ae,je,Ae.notifyWith))):(J!==je&&(it=void 0,_t=[qt]),(ce||Ae.resolveWith)(it,_t))}},Wt=ce?rt:function(){try{rt()}catch(qt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(qt,Wt.stackTrace),ie+1>=D&&(J!==ye&&(it=void 0,_t=[qt]),Ae.rejectWith(it,_t))}};ie?Wt():(l.Deferred.getStackHook&&(Wt.stackTrace=l.Deferred.getStackHook()),e.setTimeout(Wt))}}return l.Deferred(function(ie){a[0][3].add(Y(0,ie,ee(N)?N:je,ie.notifyWith)),a[1][3].add(Y(0,ie,ee(g)?g:je)),a[2][3].add(Y(0,ie,ee(b)?b:ye))}).promise()},promise:function(g){return g!=null?l.extend(g,f):f}},h={};return l.each(a,function(g,b){var N=b[2],D=b[5];f[b[1]]=N.add,D&&N.add(function(){o=D},a[3-g][2].disable,a[3-g][3].disable,a[0][2].lock,a[0][3].lock),N.add(b[3].fire),h[b[0]]=function(){return h[b[0]+"With"](this===h?void 0:this,arguments),this},h[b[0]+"With"]=N.fireWith}),f.promise(h),i&&i.call(h,h),h},when:function(i){var a=arguments.length,o=a,f=Array(o),h=s.call(arguments),g=l.Deferred(),b=function(N){return function(D){f[N]=this,h[N]=arguments.length>1?s.call(arguments):D,--a||g.resolveWith(f,h)}};if(a<=1&&(we(i,g.done(b(o)).resolve,g.reject,!a),g.state()==="pending"||ee(h[o]&&h[o].then)))return g.then();for(;o--;)we(h[o],b(o),g.reject);return g.promise()}});var K=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(i,a){e.console&&e.console.warn&&i&&K.test(i.name)&&e.console.warn("jQuery.Deferred exception: "+i.message,i.stack,a)},l.readyException=function(i){e.setTimeout(function(){throw i})};var Q=l.Deferred();l.fn.ready=function(i){return Q.then(i).catch(function(a){l.readyException(a)}),this},l.extend({isReady:!1,readyWait:1,ready:function(i){(i===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(i!==!0&&--l.readyWait>0)&&Q.resolveWith(ve,[l]))}}),l.ready.then=Q.then;function Ee(){ve.removeEventListener("DOMContentLoaded",Ee),e.removeEventListener("load",Ee),l.ready()}ve.readyState==="complete"||ve.readyState!=="loading"&&!ve.documentElement.doScroll?e.setTimeout(l.ready):(ve.addEventListener("DOMContentLoaded",Ee),e.addEventListener("load",Ee));var Ie=function(i,a,o,f,h,g,b){var N=0,D=i.length,Y=o==null;if(Ke(o)==="object"){h=!0;for(N in o)Ie(i,a,N,o[N],!0,g,b)}else if(f!==void 0&&(h=!0,ee(f)||(b=!0),Y&&(b?(a.call(i,f),a=null):(Y=a,a=function(ie,Ae,J){return Y.call(l(ie),J)})),a))for(;N<D;N++)a(i[N],o,b?f:f.call(i[N],N,a(i[N],o)));return h?i:Y?a.call(i):D?a(i[0],o):g},le=/^-ms-/,Ye=/-([a-z])/g;function dt(i,a){return a.toUpperCase()}function ot(i){return i.replace(le,"ms-").replace(Ye,dt)}var gt=function(i){return i.nodeType===1||i.nodeType===9||!+i.nodeType};function We(){this.expando=l.expando+We.uid++}We.uid=1,We.prototype={cache:function(i){var a=i[this.expando];return a||(a={},gt(i)&&(i.nodeType?i[this.expando]=a:Object.defineProperty(i,this.expando,{value:a,configurable:!0}))),a},set:function(i,a,o){var f,h=this.cache(i);if(typeof a=="string")h[ot(a)]=o;else for(f in a)h[ot(f)]=a[f];return h},get:function(i,a){return a===void 0?this.cache(i):i[this.expando]&&i[this.expando][ot(a)]},access:function(i,a,o){return a===void 0||a&&typeof a=="string"&&o===void 0?this.get(i,a):(this.set(i,a,o),o!==void 0?o:a)},remove:function(i,a){var o,f=i[this.expando];if(f!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(ot):(a=ot(a),a=a in f?[a]:a.match(Fe)||[]),o=a.length;o--;)delete f[a[o]];(a===void 0||l.isEmptyObject(f))&&(i.nodeType?i[this.expando]=void 0:delete i[this.expando])}},hasData:function(i){var a=i[this.expando];return a!==void 0&&!l.isEmptyObject(a)}};var Z=new We,He=new We,oe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ke=/[A-Z]/g;function ze(i){return i==="true"?!0:i==="false"?!1:i==="null"?null:i===+i+""?+i:oe.test(i)?JSON.parse(i):i}function Ue(i,a,o){var f;if(o===void 0&&i.nodeType===1)if(f="data-"+a.replace(ke,"-$&").toLowerCase(),o=i.getAttribute(f),typeof o=="string"){try{o=ze(o)}catch(h){}He.set(i,a,o)}else o=void 0;return o}l.extend({hasData:function(i){return He.hasData(i)||Z.hasData(i)},data:function(i,a,o){return He.access(i,a,o)},removeData:function(i,a){He.remove(i,a)},_data:function(i,a,o){return Z.access(i,a,o)},_removeData:function(i,a){Z.remove(i,a)}}),l.fn.extend({data:function(i,a){var o,f,h,g=this[0],b=g&&g.attributes;if(i===void 0){if(this.length&&(h=He.get(g),g.nodeType===1&&!Z.get(g,"hasDataAttrs"))){for(o=b.length;o--;)b[o]&&(f=b[o].name,f.indexOf("data-")===0&&(f=ot(f.slice(5)),Ue(g,f,h[f])));Z.set(g,"hasDataAttrs",!0)}return h}return typeof i=="object"?this.each(function(){He.set(this,i)}):Ie(this,function(N){var D;if(g&&N===void 0)return D=He.get(g,i),D!==void 0||(D=Ue(g,i),D!==void 0)?D:void 0;this.each(function(){He.set(this,i,N)})},null,a,arguments.length>1,null,!0)},removeData:function(i){return this.each(function(){He.remove(this,i)})}}),l.extend({queue:function(i,a,o){var f;if(i)return a=(a||"fx")+"queue",f=Z.get(i,a),o&&(!f||Array.isArray(o)?f=Z.access(i,a,l.makeArray(o)):f.push(o)),f||[]},dequeue:function(i,a){a=a||"fx";var o=l.queue(i,a),f=o.length,h=o.shift(),g=l._queueHooks(i,a),b=function(){l.dequeue(i,a)};h==="inprogress"&&(h=o.shift(),f--),h&&(a==="fx"&&o.unshift("inprogress"),delete g.stop,h.call(i,b,g)),!f&&g&&g.empty.fire()},_queueHooks:function(i,a){var o=a+"queueHooks";return Z.get(i,o)||Z.access(i,o,{empty:l.Callbacks("once memory").add(function(){Z.remove(i,[a+"queue",o])})})}}),l.fn.extend({queue:function(i,a){var o=2;return typeof i!="string"&&(a=i,i="fx",o--),arguments.length<o?l.queue(this[0],i):a===void 0?this:this.each(function(){var f=l.queue(this,i,a);l._queueHooks(this,i),i==="fx"&&f[0]!=="inprogress"&&l.dequeue(this,i)})},dequeue:function(i){return this.each(function(){l.dequeue(this,i)})},clearQueue:function(i){return this.queue(i||"fx",[])},promise:function(i,a){var o,f=1,h=l.Deferred(),g=this,b=this.length,N=function(){--f||h.resolveWith(g,[g])};for(typeof i!="string"&&(a=i,i=void 0),i=i||"fx";b--;)o=Z.get(g[b],i+"queueHooks"),o&&o.empty&&(f++,o.empty.add(N));return N(),h.promise(a)}});var ue=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,nt=new RegExp("^(?:([+-])=|)("+ue+")([a-z%]*)$","i"),Ce=["Top","Right","Bottom","Left"],Le=ve.documentElement,qe=function(i){return l.contains(i.ownerDocument,i)},Je={composed:!0};Le.getRootNode&&(qe=function(i){return l.contains(i.ownerDocument,i)||i.getRootNode(Je)===i.ownerDocument});var kt=function(i,a){return i=a||i,i.style.display==="none"||i.style.display===""&&qe(i)&&l.css(i,"display")==="none"};function Vt(i,a,o,f){var h,g,b=20,N=f?function(){return f.cur()}:function(){return l.css(i,a,"")},D=N(),Y=o&&o[3]||(l.cssNumber[a]?"":"px"),ie=i.nodeType&&(l.cssNumber[a]||Y!=="px"&&+D)&&nt.exec(l.css(i,a));if(ie&&ie[3]!==Y){for(D=D/2,Y=Y||ie[3],ie=+D||1;b--;)l.style(i,a,ie+Y),(1-g)*(1-(g=N()/D||.5))<=0&&(b=0),ie=ie/g;ie=ie*2,l.style(i,a,ie+Y),o=o||[]}return o&&(ie=+ie||+D||0,h=o[1]?ie+(o[1]+1)*o[2]:+o[2],f&&(f.unit=Y,f.start=ie,f.end=h)),h}var Ft={};function mn(i){var a,o=i.ownerDocument,f=i.nodeName,h=Ft[f];return h||(a=o.body.appendChild(o.createElement(f)),h=l.css(a,"display"),a.parentNode.removeChild(a),h==="none"&&(h="block"),Ft[f]=h,h)}function lt(i,a){for(var o,f,h=[],g=0,b=i.length;g<b;g++)f=i[g],!!f.style&&(o=f.style.display,a?(o==="none"&&(h[g]=Z.get(f,"display")||null,h[g]||(f.style.display="")),f.style.display===""&&kt(f)&&(h[g]=mn(f))):o!=="none"&&(h[g]="none",Z.set(f,"display",o)));for(g=0;g<b;g++)h[g]!=null&&(i[g].style.display=h[g]);return i}l.fn.extend({show:function(){return lt(this,!0)},hide:function(){return lt(this)},toggle:function(i){return typeof i=="boolean"?i?this.show():this.hide():this.each(function(){kt(this)?l(this).show():l(this).hide()})}});var vn=/^(?:checkbox|radio)$/i,yn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Zt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var i=ve.createDocumentFragment(),a=i.appendChild(ve.createElement("div")),o=ve.createElement("input");o.setAttribute("type","radio"),o.setAttribute("checked","checked"),o.setAttribute("name","t"),a.appendChild(o),V.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",V.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",V.option=!!a.lastChild})();var Yt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Yt.tbody=Yt.tfoot=Yt.colgroup=Yt.caption=Yt.thead,Yt.th=Yt.td,V.option||(Yt.optgroup=Yt.option=[1,"<select multiple='multiple'>","</select>"]);function Mt(i,a){var o;return typeof i.getElementsByTagName!="undefined"?o=i.getElementsByTagName(a||"*"):typeof i.querySelectorAll!="undefined"?o=i.querySelectorAll(a||"*"):o=[],a===void 0||a&&L(i,a)?l.merge([i],o):o}function zt(i,a){for(var o=0,f=i.length;o<f;o++)Z.set(i[o],"globalEval",!a||Z.get(a[o],"globalEval"))}var Zn=/<|&#?\w+;/;function zn(i,a,o,f,h){for(var g,b,N,D,Y,ie,Ae=a.createDocumentFragment(),J=[],ce=0,it=i.length;ce<it;ce++)if(g=i[ce],g||g===0)if(Ke(g)==="object")l.merge(J,g.nodeType?[g]:g);else if(!Zn.test(g))J.push(a.createTextNode(g));else{for(b=b||Ae.appendChild(a.createElement("div")),N=(yn.exec(g)||["",""])[1].toLowerCase(),D=Yt[N]||Yt._default,b.innerHTML=D[1]+l.htmlPrefilter(g)+D[2],ie=D[0];ie--;)b=b.lastChild;l.merge(J,b.childNodes),b=Ae.firstChild,b.textContent=""}for(Ae.textContent="",ce=0;g=J[ce++];){if(f&&l.inArray(g,f)>-1){h&&h.push(g);continue}if(Y=qe(g),b=Mt(Ae.appendChild(g),"script"),Y&&zt(b),o)for(ie=0;g=b[ie++];)Zt.test(g.type||"")&&o.push(g)}return Ae}var Rt=/^([^.]*)(?:\.(.+)|)/;function wt(){return!0}function On(){return!1}function fn(i,a){return i===y()==(a==="focus")}function y(){try{return ve.activeElement}catch(i){}}function k(i,a,o,f,h,g){var b,N;if(typeof a=="object"){typeof o!="string"&&(f=f||o,o=void 0);for(N in a)k(i,N,o,f,a[N],g);return i}if(f==null&&h==null?(h=o,f=o=void 0):h==null&&(typeof o=="string"?(h=f,f=void 0):(h=f,f=o,o=void 0)),h===!1)h=On;else if(!h)return i;return g===1&&(b=h,h=function(D){return l().off(D),b.apply(this,arguments)},h.guid=b.guid||(b.guid=l.guid++)),i.each(function(){l.event.add(this,a,h,f,o)})}l.event={global:{},add:function(i,a,o,f,h){var g,b,N,D,Y,ie,Ae,J,ce,it,_t,rt=Z.get(i);if(!!gt(i))for(o.handler&&(g=o,o=g.handler,h=g.selector),h&&l.find.matchesSelector(Le,h),o.guid||(o.guid=l.guid++),(D=rt.events)||(D=rt.events=Object.create(null)),(b=rt.handle)||(b=rt.handle=function(Wt){return typeof l!="undefined"&&l.event.triggered!==Wt.type?l.event.dispatch.apply(i,arguments):void 0}),a=(a||"").match(Fe)||[""],Y=a.length;Y--;)N=Rt.exec(a[Y])||[],ce=_t=N[1],it=(N[2]||"").split(".").sort(),!!ce&&(Ae=l.event.special[ce]||{},ce=(h?Ae.delegateType:Ae.bindType)||ce,Ae=l.event.special[ce]||{},ie=l.extend({type:ce,origType:_t,data:f,handler:o,guid:o.guid,selector:h,needsContext:h&&l.expr.match.needsContext.test(h),namespace:it.join(".")},g),(J=D[ce])||(J=D[ce]=[],J.delegateCount=0,(!Ae.setup||Ae.setup.call(i,f,it,b)===!1)&&i.addEventListener&&i.addEventListener(ce,b)),Ae.add&&(Ae.add.call(i,ie),ie.handler.guid||(ie.handler.guid=o.guid)),h?J.splice(J.delegateCount++,0,ie):J.push(ie),l.event.global[ce]=!0)},remove:function(i,a,o,f,h){var g,b,N,D,Y,ie,Ae,J,ce,it,_t,rt=Z.hasData(i)&&Z.get(i);if(!(!rt||!(D=rt.events))){for(a=(a||"").match(Fe)||[""],Y=a.length;Y--;){if(N=Rt.exec(a[Y])||[],ce=_t=N[1],it=(N[2]||"").split(".").sort(),!ce){for(ce in D)l.event.remove(i,ce+a[Y],o,f,!0);continue}for(Ae=l.event.special[ce]||{},ce=(f?Ae.delegateType:Ae.bindType)||ce,J=D[ce]||[],N=N[2]&&new RegExp("(^|\\.)"+it.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=g=J.length;g--;)ie=J[g],(h||_t===ie.origType)&&(!o||o.guid===ie.guid)&&(!N||N.test(ie.namespace))&&(!f||f===ie.selector||f==="**"&&ie.selector)&&(J.splice(g,1),ie.selector&&J.delegateCount--,Ae.remove&&Ae.remove.call(i,ie));b&&!J.length&&((!Ae.teardown||Ae.teardown.call(i,it,rt.handle)===!1)&&l.removeEvent(i,ce,rt.handle),delete D[ce])}l.isEmptyObject(D)&&Z.remove(i,"handle events")}},dispatch:function(i){var a,o,f,h,g,b,N=new Array(arguments.length),D=l.event.fix(i),Y=(Z.get(this,"events")||Object.create(null))[D.type]||[],ie=l.event.special[D.type]||{};for(N[0]=D,a=1;a<arguments.length;a++)N[a]=arguments[a];if(D.delegateTarget=this,!(ie.preDispatch&&ie.preDispatch.call(this,D)===!1)){for(b=l.event.handlers.call(this,D,Y),a=0;(h=b[a++])&&!D.isPropagationStopped();)for(D.currentTarget=h.elem,o=0;(g=h.handlers[o++])&&!D.isImmediatePropagationStopped();)(!D.rnamespace||g.namespace===!1||D.rnamespace.test(g.namespace))&&(D.handleObj=g,D.data=g.data,f=((l.event.special[g.origType]||{}).handle||g.handler).apply(h.elem,N),f!==void 0&&(D.result=f)===!1&&(D.preventDefault(),D.stopPropagation()));return ie.postDispatch&&ie.postDispatch.call(this,D),D.result}},handlers:function(i,a){var o,f,h,g,b,N=[],D=a.delegateCount,Y=i.target;if(D&&Y.nodeType&&!(i.type==="click"&&i.button>=1)){for(;Y!==this;Y=Y.parentNode||this)if(Y.nodeType===1&&!(i.type==="click"&&Y.disabled===!0)){for(g=[],b={},o=0;o<D;o++)f=a[o],h=f.selector+" ",b[h]===void 0&&(b[h]=f.needsContext?l(h,this).index(Y)>-1:l.find(h,this,null,[Y]).length),b[h]&&g.push(f);g.length&&N.push({elem:Y,handlers:g})}}return Y=this,D<a.length&&N.push({elem:Y,handlers:a.slice(D)}),N},addProp:function(i,a){Object.defineProperty(l.Event.prototype,i,{enumerable:!0,configurable:!0,get:ee(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[i]},set:function(o){Object.defineProperty(this,i,{enumerable:!0,configurable:!0,writable:!0,value:o})}})},fix:function(i){return i[l.expando]?i:new l.Event(i)},special:{load:{noBubble:!0},click:{setup:function(i){var a=this||i;return vn.test(a.type)&&a.click&&L(a,"input")&&M(a,"click",wt),!1},trigger:function(i){var a=this||i;return vn.test(a.type)&&a.click&&L(a,"input")&&M(a,"click"),!0},_default:function(i){var a=i.target;return vn.test(a.type)&&a.click&&L(a,"input")&&Z.get(a,"click")||L(a,"a")}},beforeunload:{postDispatch:function(i){i.result!==void 0&&i.originalEvent&&(i.originalEvent.returnValue=i.result)}}}};function M(i,a,o){if(!o){Z.get(i,a)===void 0&&l.event.add(i,a,wt);return}Z.set(i,a,!1),l.event.add(i,a,{namespace:!1,handler:function(f){var h,g,b=Z.get(this,a);if(f.isTrigger&1&&this[a]){if(b.length)(l.event.special[a]||{}).delegateType&&f.stopPropagation();else if(b=s.call(arguments),Z.set(this,a,b),h=o(this,a),this[a](),g=Z.get(this,a),b!==g||h?Z.set(this,a,!1):g={},b!==g)return f.stopImmediatePropagation(),f.preventDefault(),g&&g.value}else b.length&&(Z.set(this,a,{value:l.event.trigger(l.extend(b[0],l.Event.prototype),b.slice(1),this)}),f.stopImmediatePropagation())}})}l.removeEvent=function(i,a,o){i.removeEventListener&&i.removeEventListener(a,o)},l.Event=function(i,a){if(!(this instanceof l.Event))return new l.Event(i,a);i&&i.type?(this.originalEvent=i,this.type=i.type,this.isDefaultPrevented=i.defaultPrevented||i.defaultPrevented===void 0&&i.returnValue===!1?wt:On,this.target=i.target&&i.target.nodeType===3?i.target.parentNode:i.target,this.currentTarget=i.currentTarget,this.relatedTarget=i.relatedTarget):this.type=i,a&&l.extend(this,a),this.timeStamp=i&&i.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:On,isPropagationStopped:On,isImmediatePropagationStopped:On,isSimulated:!1,preventDefault:function(){var i=this.originalEvent;this.isDefaultPrevented=wt,i&&!this.isSimulated&&i.preventDefault()},stopPropagation:function(){var i=this.originalEvent;this.isPropagationStopped=wt,i&&!this.isSimulated&&i.stopPropagation()},stopImmediatePropagation:function(){var i=this.originalEvent;this.isImmediatePropagationStopped=wt,i&&!this.isSimulated&&i.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(i,a){l.event.special[i]={setup:function(){return M(this,i,fn),!1},trigger:function(){return M(this,i),!0},_default:function(){return!0},delegateType:a}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(i,a){l.event.special[i]={delegateType:a,bindType:a,handle:function(o){var f,h=this,g=o.relatedTarget,b=o.handleObj;return(!g||g!==h&&!l.contains(h,g))&&(o.type=b.origType,f=b.handler.apply(this,arguments),o.type=a),f}}}),l.fn.extend({on:function(i,a,o,f){return k(this,i,a,o,f)},one:function(i,a,o,f){return k(this,i,a,o,f,1)},off:function(i,a,o){var f,h;if(i&&i.preventDefault&&i.handleObj)return f=i.handleObj,l(i.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler),this;if(typeof i=="object"){for(h in i)this.off(h,a,i[h]);return this}return(a===!1||typeof a=="function")&&(o=a,a=void 0),o===!1&&(o=On),this.each(function(){l.event.remove(this,i,o,a)})}});var U=/<script|<style|<link/i,he=/checked\s*(?:[^=]|=\s*.checked.)/i,de=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function xe(i,a){return L(i,"table")&&L(a.nodeType!==11?a:a.firstChild,"tr")&&l(i).children("tbody")[0]||i}function Me(i){return i.type=(i.getAttribute("type")!==null)+"/"+i.type,i}function $e(i){return(i.type||"").slice(0,5)==="true/"?i.type=i.type.slice(5):i.removeAttribute("type"),i}function Qe(i,a){var o,f,h,g,b,N,D;if(a.nodeType===1){if(Z.hasData(i)&&(g=Z.get(i),D=g.events,D)){Z.remove(a,"handle events");for(h in D)for(o=0,f=D[h].length;o<f;o++)l.event.add(a,h,D[h][o])}He.hasData(i)&&(b=He.access(i),N=l.extend({},b),He.set(a,N))}}function at(i,a){var o=a.nodeName.toLowerCase();o==="input"&&vn.test(i.type)?a.checked=i.checked:(o==="input"||o==="textarea")&&(a.defaultValue=i.defaultValue)}function Xe(i,a,o,f){a=c(a);var h,g,b,N,D,Y,ie=0,Ae=i.length,J=Ae-1,ce=a[0],it=ee(ce);if(it||Ae>1&&typeof ce=="string"&&!V.checkClone&&he.test(ce))return i.each(function(_t){var rt=i.eq(_t);it&&(a[0]=ce.call(this,_t,rt.html())),Xe(rt,a,o,f)});if(Ae&&(h=zn(a,i[0].ownerDocument,!1,i,f),g=h.firstChild,h.childNodes.length===1&&(h=g),g||f)){for(b=l.map(Mt(h,"script"),Me),N=b.length;ie<Ae;ie++)D=h,ie!==J&&(D=l.clone(D,!0,!0),N&&l.merge(b,Mt(D,"script"))),o.call(i[ie],D,ie);if(N)for(Y=b[b.length-1].ownerDocument,l.map(b,$e),ie=0;ie<N;ie++)D=b[ie],Zt.test(D.type||"")&&!Z.access(D,"globalEval")&&l.contains(Y,D)&&(D.src&&(D.type||"").toLowerCase()!=="module"?l._evalUrl&&!D.noModule&&l._evalUrl(D.src,{nonce:D.nonce||D.getAttribute("nonce")},Y):Ve(D.textContent.replace(de,""),D,Y))}return i}function pt(i,a,o){for(var f,h=a?l.filter(a,i):i,g=0;(f=h[g])!=null;g++)!o&&f.nodeType===1&&l.cleanData(Mt(f)),f.parentNode&&(o&&qe(f)&&zt(Mt(f,"script")),f.parentNode.removeChild(f));return i}l.extend({htmlPrefilter:function(i){return i},clone:function(i,a,o){var f,h,g,b,N=i.cloneNode(!0),D=qe(i);if(!V.noCloneChecked&&(i.nodeType===1||i.nodeType===11)&&!l.isXMLDoc(i))for(b=Mt(N),g=Mt(i),f=0,h=g.length;f<h;f++)at(g[f],b[f]);if(a)if(o)for(g=g||Mt(i),b=b||Mt(N),f=0,h=g.length;f<h;f++)Qe(g[f],b[f]);else Qe(i,N);return b=Mt(N,"script"),b.length>0&&zt(b,!D&&Mt(i,"script")),N},cleanData:function(i){for(var a,o,f,h=l.event.special,g=0;(o=i[g])!==void 0;g++)if(gt(o)){if(a=o[Z.expando]){if(a.events)for(f in a.events)h[f]?l.event.remove(o,f):l.removeEvent(o,f,a.handle);o[Z.expando]=void 0}o[He.expando]&&(o[He.expando]=void 0)}}}),l.fn.extend({detach:function(i){return pt(this,i,!0)},remove:function(i){return pt(this,i)},text:function(i){return Ie(this,function(a){return a===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,i,arguments.length)},append:function(){return Xe(this,arguments,function(i){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=xe(this,i);a.appendChild(i)}})},prepend:function(){return Xe(this,arguments,function(i){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=xe(this,i);a.insertBefore(i,a.firstChild)}})},before:function(){return Xe(this,arguments,function(i){this.parentNode&&this.parentNode.insertBefore(i,this)})},after:function(){return Xe(this,arguments,function(i){this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling)})},empty:function(){for(var i,a=0;(i=this[a])!=null;a++)i.nodeType===1&&(l.cleanData(Mt(i,!1)),i.textContent="");return this},clone:function(i,a){return i=i??!1,a=a??i,this.map(function(){return l.clone(this,i,a)})},html:function(i){return Ie(this,function(a){var o=this[0]||{},f=0,h=this.length;if(a===void 0&&o.nodeType===1)return o.innerHTML;if(typeof a=="string"&&!U.test(a)&&!Yt[(yn.exec(a)||["",""])[1].toLowerCase()]){a=l.htmlPrefilter(a);try{for(;f<h;f++)o=this[f]||{},o.nodeType===1&&(l.cleanData(Mt(o,!1)),o.innerHTML=a);o=0}catch(g){}}o&&this.empty().append(a)},null,i,arguments.length)},replaceWith:function(){var i=[];return Xe(this,arguments,function(a){var o=this.parentNode;l.inArray(this,i)<0&&(l.cleanData(Mt(this)),o&&o.replaceChild(a,this))},i)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(i,a){l.fn[i]=function(o){for(var f,h=[],g=l(o),b=g.length-1,N=0;N<=b;N++)f=N===b?this:this.clone(!0),l(g[N])[a](f),u.apply(h,f.get());return this.pushStack(h)}});var et=new RegExp("^("+ue+")(?!px)[a-z%]+$","i"),tt=function(i){var a=i.ownerDocument.defaultView;return(!a||!a.opener)&&(a=e),a.getComputedStyle(i)},Ct=function(i,a,o){var f,h,g={};for(h in a)g[h]=i.style[h],i.style[h]=a[h];f=o.call(i);for(h in a)i.style[h]=g[h];return f},rn=new RegExp(Ce.join("|"),"i");(function(){function i(){if(!!Y){D.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",Y.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Le.appendChild(D).appendChild(Y);var ie=e.getComputedStyle(Y);o=ie.top!=="1%",N=a(ie.marginLeft)===12,Y.style.right="60%",g=a(ie.right)===36,f=a(ie.width)===36,Y.style.position="absolute",h=a(Y.offsetWidth/3)===12,Le.removeChild(D),Y=null}}function a(ie){return Math.round(parseFloat(ie))}var o,f,h,g,b,N,D=ve.createElement("div"),Y=ve.createElement("div");!Y.style||(Y.style.backgroundClip="content-box",Y.cloneNode(!0).style.backgroundClip="",V.clearCloneStyle=Y.style.backgroundClip==="content-box",l.extend(V,{boxSizingReliable:function(){return i(),f},pixelBoxStyles:function(){return i(),g},pixelPosition:function(){return i(),o},reliableMarginLeft:function(){return i(),N},scrollboxSize:function(){return i(),h},reliableTrDimensions:function(){var ie,Ae,J,ce;return b==null&&(ie=ve.createElement("table"),Ae=ve.createElement("tr"),J=ve.createElement("div"),ie.style.cssText="position:absolute;left:-11111px;border-collapse:separate",Ae.style.cssText="border:1px solid",Ae.style.height="1px",J.style.height="9px",J.style.display="block",Le.appendChild(ie).appendChild(Ae).appendChild(J),ce=e.getComputedStyle(Ae),b=parseInt(ce.height,10)+parseInt(ce.borderTopWidth,10)+parseInt(ce.borderBottomWidth,10)===Ae.offsetHeight,Le.removeChild(ie)),b}}))})();function Gt(i,a,o){var f,h,g,b,N=i.style;return o=o||tt(i),o&&(b=o.getPropertyValue(a)||o[a],b===""&&!qe(i)&&(b=l.style(i,a)),!V.pixelBoxStyles()&&et.test(b)&&rn.test(a)&&(f=N.width,h=N.minWidth,g=N.maxWidth,N.minWidth=N.maxWidth=N.width=b,b=o.width,N.width=f,N.minWidth=h,N.maxWidth=g)),b!==void 0?b+"":b}function Xt(i,a){return{get:function(){if(i()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var cn=["Webkit","Moz","ms"],Hn=ve.createElement("div").style,wn={};function Di(i){for(var a=i[0].toUpperCase()+i.slice(1),o=cn.length;o--;)if(i=cn[o]+a,i in Hn)return i}function jn(i){var a=l.cssProps[i]||wn[i];return a||(i in Hn?i:wn[i]=Di(i)||i)}var Ri=/^(none|table(?!-c[ea]).+)/,En=/^--/,Li={position:"absolute",visibility:"hidden",display:"block"},ci={letterSpacing:"0",fontWeight:"400"};function ei(i,a,o){var f=nt.exec(a);return f?Math.max(0,f[2]-(o||0))+(f[3]||"px"):a}function ti(i,a,o,f,h,g){var b=a==="width"?1:0,N=0,D=0;if(o===(f?"border":"content"))return 0;for(;b<4;b+=2)o==="margin"&&(D+=l.css(i,o+Ce[b],!0,h)),f?(o==="content"&&(D-=l.css(i,"padding"+Ce[b],!0,h)),o!=="margin"&&(D-=l.css(i,"border"+Ce[b]+"Width",!0,h))):(D+=l.css(i,"padding"+Ce[b],!0,h),o!=="padding"?D+=l.css(i,"border"+Ce[b]+"Width",!0,h):N+=l.css(i,"border"+Ce[b]+"Width",!0,h));return!f&&g>=0&&(D+=Math.max(0,Math.ceil(i["offset"+a[0].toUpperCase()+a.slice(1)]-g-D-N-.5))||0),D}function ui(i,a,o){var f=tt(i),h=!V.boxSizingReliable()||o,g=h&&l.css(i,"boxSizing",!1,f)==="border-box",b=g,N=Gt(i,a,f),D="offset"+a[0].toUpperCase()+a.slice(1);if(et.test(N)){if(!o)return N;N="auto"}return(!V.boxSizingReliable()&&g||!V.reliableTrDimensions()&&L(i,"tr")||N==="auto"||!parseFloat(N)&&l.css(i,"display",!1,f)==="inline")&&i.getClientRects().length&&(g=l.css(i,"boxSizing",!1,f)==="border-box",b=D in i,b&&(N=i[D])),N=parseFloat(N)||0,N+ti(i,a,o||(g?"border":"content"),b,f,N)+"px"}l.extend({cssHooks:{opacity:{get:function(i,a){if(a){var o=Gt(i,"opacity");return o===""?"1":o}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(i,a,o,f){if(!(!i||i.nodeType===3||i.nodeType===8||!i.style)){var h,g,b,N=ot(a),D=En.test(a),Y=i.style;if(D||(a=jn(N)),b=l.cssHooks[a]||l.cssHooks[N],o!==void 0){if(g=typeof o,g==="string"&&(h=nt.exec(o))&&h[1]&&(o=Vt(i,a,h),g="number"),o==null||o!==o)return;g==="number"&&!D&&(o+=h&&h[3]||(l.cssNumber[N]?"":"px")),!V.clearCloneStyle&&o===""&&a.indexOf("background")===0&&(Y[a]="inherit"),(!b||!("set"in b)||(o=b.set(i,o,f))!==void 0)&&(D?Y.setProperty(a,o):Y[a]=o)}else return b&&"get"in b&&(h=b.get(i,!1,f))!==void 0?h:Y[a]}},css:function(i,a,o,f){var h,g,b,N=ot(a),D=En.test(a);return D||(a=jn(N)),b=l.cssHooks[a]||l.cssHooks[N],b&&"get"in b&&(h=b.get(i,!0,o)),h===void 0&&(h=Gt(i,a,f)),h==="normal"&&a in ci&&(h=ci[a]),o===""||o?(g=parseFloat(h),o===!0||isFinite(g)?g||0:h):h}}),l.each(["height","width"],function(i,a){l.cssHooks[a]={get:function(o,f,h){if(f)return Ri.test(l.css(o,"display"))&&(!o.getClientRects().length||!o.getBoundingClientRect().width)?Ct(o,Li,function(){return ui(o,a,h)}):ui(o,a,h)},set:function(o,f,h){var g,b=tt(o),N=!V.scrollboxSize()&&b.position==="absolute",D=N||h,Y=D&&l.css(o,"boxSizing",!1,b)==="border-box",ie=h?ti(o,a,h,Y,b):0;return Y&&N&&(ie-=Math.ceil(o["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(b[a])-ti(o,a,"border",!1,b)-.5)),ie&&(g=nt.exec(f))&&(g[3]||"px")!=="px"&&(o.style[a]=f,f=l.css(o,a)),ei(o,f,ie)}}}),l.cssHooks.marginLeft=Xt(V.reliableMarginLeft,function(i,a){if(a)return(parseFloat(Gt(i,"marginLeft"))||i.getBoundingClientRect().left-Ct(i,{marginLeft:0},function(){return i.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(i,a){l.cssHooks[i+a]={expand:function(o){for(var f=0,h={},g=typeof o=="string"?o.split(" "):[o];f<4;f++)h[i+Ce[f]+a]=g[f]||g[f-2]||g[0];return h}},i!=="margin"&&(l.cssHooks[i+a].set=ei)}),l.fn.extend({css:function(i,a){return Ie(this,function(o,f,h){var g,b,N={},D=0;if(Array.isArray(f)){for(g=tt(o),b=f.length;D<b;D++)N[f[D]]=l.css(o,f[D],!1,g);return N}return h!==void 0?l.style(o,f,h):l.css(o,f)},i,a,arguments.length>1)}});function Qt(i,a,o,f,h){return new Qt.prototype.init(i,a,o,f,h)}l.Tween=Qt,Qt.prototype={constructor:Qt,init:function(i,a,o,f,h,g){this.elem=i,this.prop=o,this.easing=h||l.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=f,this.unit=g||(l.cssNumber[o]?"":"px")},cur:function(){var i=Qt.propHooks[this.prop];return i&&i.get?i.get(this):Qt.propHooks._default.get(this)},run:function(i){var a,o=Qt.propHooks[this.prop];return this.options.duration?this.pos=a=l.easing[this.easing](i,this.options.duration*i,0,1,this.options.duration):this.pos=a=i,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),o&&o.set?o.set(this):Qt.propHooks._default.set(this),this}},Qt.prototype.init.prototype=Qt.prototype,Qt.propHooks={_default:{get:function(i){var a;return i.elem.nodeType!==1||i.elem[i.prop]!=null&&i.elem.style[i.prop]==null?i.elem[i.prop]:(a=l.css(i.elem,i.prop,""),!a||a==="auto"?0:a)},set:function(i){l.fx.step[i.prop]?l.fx.step[i.prop](i):i.elem.nodeType===1&&(l.cssHooks[i.prop]||i.elem.style[jn(i.prop)]!=null)?l.style(i.elem,i.prop,i.now+i.unit):i.elem[i.prop]=i.now}}},Qt.propHooks.scrollTop=Qt.propHooks.scrollLeft={set:function(i){i.elem.nodeType&&i.elem.parentNode&&(i.elem[i.prop]=i.now)}},l.easing={linear:function(i){return i},swing:function(i){return .5-Math.cos(i*Math.PI)/2},_default:"swing"},l.fx=Qt.prototype.init,l.fx.step={};var Pn,Kn,Mi=/^(?:toggle|show|hide)$/,Ii=/queueHooks$/;function ni(){Kn&&(ve.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ni):e.setTimeout(ni,l.fx.interval),l.fx.tick())}function di(){return e.setTimeout(function(){Pn=void 0}),Pn=Date.now()}function Xn(i,a){var o,f=0,h={height:i};for(a=a?1:0;f<4;f+=2-a)o=Ce[f],h["margin"+o]=h["padding"+o]=i;return a&&(h.opacity=h.width=i),h}function pi(i,a,o){for(var f,h=(an.tweeners[a]||[]).concat(an.tweeners["*"]),g=0,b=h.length;g<b;g++)if(f=h[g].call(o,a,i))return f}function ji(i,a,o){var f,h,g,b,N,D,Y,ie,Ae="width"in a||"height"in a,J=this,ce={},it=i.style,_t=i.nodeType&&kt(i),rt=Z.get(i,"fxshow");o.queue||(b=l._queueHooks(i,"fx"),b.unqueued==null&&(b.unqueued=0,N=b.empty.fire,b.empty.fire=function(){b.unqueued||N()}),b.unqueued++,J.always(function(){J.always(function(){b.unqueued--,l.queue(i,"fx").length||b.empty.fire()})}));for(f in a)if(h=a[f],Mi.test(h)){if(delete a[f],g=g||h==="toggle",h===(_t?"hide":"show"))if(h==="show"&&rt&&rt[f]!==void 0)_t=!0;else continue;ce[f]=rt&&rt[f]||l.style(i,f)}if(D=!l.isEmptyObject(a),!(!D&&l.isEmptyObject(ce))){Ae&&i.nodeType===1&&(o.overflow=[it.overflow,it.overflowX,it.overflowY],Y=rt&&rt.display,Y==null&&(Y=Z.get(i,"display")),ie=l.css(i,"display"),ie==="none"&&(Y?ie=Y:(lt([i],!0),Y=i.style.display||Y,ie=l.css(i,"display"),lt([i]))),(ie==="inline"||ie==="inline-block"&&Y!=null)&&l.css(i,"float")==="none"&&(D||(J.done(function(){it.display=Y}),Y==null&&(ie=it.display,Y=ie==="none"?"":ie)),it.display="inline-block")),o.overflow&&(it.overflow="hidden",J.always(function(){it.overflow=o.overflow[0],it.overflowX=o.overflow[1],it.overflowY=o.overflow[2]})),D=!1;for(f in ce)D||(rt?"hidden"in rt&&(_t=rt.hidden):rt=Z.access(i,"fxshow",{display:Y}),g&&(rt.hidden=!_t),_t&&lt([i],!0),J.done(function(){_t||lt([i]),Z.remove(i,"fxshow");for(f in ce)l.style(i,f,ce[f])})),D=pi(_t?rt[f]:0,f,J),f in rt||(rt[f]=D.start,_t&&(D.end=D.start,D.start=0))}}function Pi(i,a){var o,f,h,g,b;for(o in i)if(f=ot(o),h=a[f],g=i[o],Array.isArray(g)&&(h=g[1],g=i[o]=g[0]),o!==f&&(i[f]=g,delete i[o]),b=l.cssHooks[f],b&&"expand"in b){g=b.expand(g),delete i[f];for(o in g)o in i||(i[o]=g[o],a[o]=h)}else a[f]=h}function an(i,a,o){var f,h,g=0,b=an.prefilters.length,N=l.Deferred().always(function(){delete D.elem}),D=function(){if(h)return!1;for(var Ae=Pn||di(),J=Math.max(0,Y.startTime+Y.duration-Ae),ce=J/Y.duration||0,it=1-ce,_t=0,rt=Y.tweens.length;_t<rt;_t++)Y.tweens[_t].run(it);return N.notifyWith(i,[Y,it,J]),it<1&&rt?J:(rt||N.notifyWith(i,[Y,1,0]),N.resolveWith(i,[Y]),!1)},Y=N.promise({elem:i,props:l.extend({},a),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},o),originalProperties:a,originalOptions:o,startTime:Pn||di(),duration:o.duration,tweens:[],createTween:function(Ae,J){var ce=l.Tween(i,Y.opts,Ae,J,Y.opts.specialEasing[Ae]||Y.opts.easing);return Y.tweens.push(ce),ce},stop:function(Ae){var J=0,ce=Ae?Y.tweens.length:0;if(h)return this;for(h=!0;J<ce;J++)Y.tweens[J].run(1);return Ae?(N.notifyWith(i,[Y,1,0]),N.resolveWith(i,[Y,Ae])):N.rejectWith(i,[Y,Ae]),this}}),ie=Y.props;for(Pi(ie,Y.opts.specialEasing);g<b;g++)if(f=an.prefilters[g].call(Y,i,ie,Y.opts),f)return ee(f.stop)&&(l._queueHooks(Y.elem,Y.opts.queue).stop=f.stop.bind(f)),f;return l.map(ie,pi,Y),ee(Y.opts.start)&&Y.opts.start.call(i,Y),Y.progress(Y.opts.progress).done(Y.opts.done,Y.opts.complete).fail(Y.opts.fail).always(Y.opts.always),l.fx.timer(l.extend(D,{elem:i,anim:Y,queue:Y.opts.queue})),Y}l.Animation=l.extend(an,{tweeners:{"*":[function(i,a){var o=this.createTween(i,a);return Vt(o.elem,i,nt.exec(a),o),o}]},tweener:function(i,a){ee(i)?(a=i,i=["*"]):i=i.match(Fe);for(var o,f=0,h=i.length;f<h;f++)o=i[f],an.tweeners[o]=an.tweeners[o]||[],an.tweeners[o].unshift(a)},prefilters:[ji],prefilter:function(i,a){a?an.prefilters.unshift(i):an.prefilters.push(i)}}),l.speed=function(i,a,o){var f=i&&typeof i=="object"?l.extend({},i):{complete:o||!o&&a||ee(i)&&i,duration:i,easing:o&&a||a&&!ee(a)&&a};return l.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration in l.fx.speeds?f.duration=l.fx.speeds[f.duration]:f.duration=l.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){ee(f.old)&&f.old.call(this),f.queue&&l.dequeue(this,f.queue)},f},l.fn.extend({fadeTo:function(i,a,o,f){return this.filter(kt).css("opacity",0).show().end().animate({opacity:a},i,o,f)},animate:function(i,a,o,f){var h=l.isEmptyObject(i),g=l.speed(a,o,f),b=function(){var N=an(this,l.extend({},i),g);(h||Z.get(this,"finish"))&&N.stop(!0)};return b.finish=b,h||g.queue===!1?this.each(b):this.queue(g.queue,b)},stop:function(i,a,o){var f=function(h){var g=h.stop;delete h.stop,g(o)};return typeof i!="string"&&(o=a,a=i,i=void 0),a&&this.queue(i||"fx",[]),this.each(function(){var h=!0,g=i!=null&&i+"queueHooks",b=l.timers,N=Z.get(this);if(g)N[g]&&N[g].stop&&f(N[g]);else for(g in N)N[g]&&N[g].stop&&Ii.test(g)&&f(N[g]);for(g=b.length;g--;)b[g].elem===this&&(i==null||b[g].queue===i)&&(b[g].anim.stop(o),h=!1,b.splice(g,1));(h||!o)&&l.dequeue(this,i)})},finish:function(i){return i!==!1&&(i=i||"fx"),this.each(function(){var a,o=Z.get(this),f=o[i+"queue"],h=o[i+"queueHooks"],g=l.timers,b=f?f.length:0;for(o.finish=!0,l.queue(this,i,[]),h&&h.stop&&h.stop.call(this,!0),a=g.length;a--;)g[a].elem===this&&g[a].queue===i&&(g[a].anim.stop(!0),g.splice(a,1));for(a=0;a<b;a++)f[a]&&f[a].finish&&f[a].finish.call(this);delete o.finish})}}),l.each(["toggle","show","hide"],function(i,a){var o=l.fn[a];l.fn[a]=function(f,h,g){return f==null||typeof f=="boolean"?o.apply(this,arguments):this.animate(Xn(a,!0),f,h,g)}}),l.each({slideDown:Xn("show"),slideUp:Xn("hide"),slideToggle:Xn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(i,a){l.fn[i]=function(o,f,h){return this.animate(a,o,f,h)}}),l.timers=[],l.fx.tick=function(){var i,a=0,o=l.timers;for(Pn=Date.now();a<o.length;a++)i=o[a],!i()&&o[a]===i&&o.splice(a--,1);o.length||l.fx.stop(),Pn=void 0},l.fx.timer=function(i){l.timers.push(i),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Kn||(Kn=!0,ni())},l.fx.stop=function(){Kn=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(i,a){return i=l.fx&&l.fx.speeds[i]||i,a=a||"fx",this.queue(a,function(o,f){var h=e.setTimeout(o,i);f.stop=function(){e.clearTimeout(h)}})},function(){var i=ve.createElement("input"),a=ve.createElement("select"),o=a.appendChild(ve.createElement("option"));i.type="checkbox",V.checkOn=i.value!=="",V.optSelected=o.selected,i=ve.createElement("input"),i.value="t",i.type="radio",V.radioValue=i.value==="t"}();var T,_=l.expr.attrHandle;l.fn.extend({attr:function(i,a){return Ie(this,l.attr,i,a,arguments.length>1)},removeAttr:function(i){return this.each(function(){l.removeAttr(this,i)})}}),l.extend({attr:function(i,a,o){var f,h,g=i.nodeType;if(!(g===3||g===8||g===2)){if(typeof i.getAttribute=="undefined")return l.prop(i,a,o);if((g!==1||!l.isXMLDoc(i))&&(h=l.attrHooks[a.toLowerCase()]||(l.expr.match.bool.test(a)?T:void 0)),o!==void 0){if(o===null){l.removeAttr(i,a);return}return h&&"set"in h&&(f=h.set(i,o,a))!==void 0?f:(i.setAttribute(a,o+""),o)}return h&&"get"in h&&(f=h.get(i,a))!==null?f:(f=l.find.attr(i,a),f??void 0)}},attrHooks:{type:{set:function(i,a){if(!V.radioValue&&a==="radio"&&L(i,"input")){var o=i.value;return i.setAttribute("type",a),o&&(i.value=o),a}}}},removeAttr:function(i,a){var o,f=0,h=a&&a.match(Fe);if(h&&i.nodeType===1)for(;o=h[f++];)i.removeAttribute(o)}}),T={set:function(i,a,o){return a===!1?l.removeAttr(i,o):i.setAttribute(o,o),o}},l.each(l.expr.match.bool.source.match(/\w+/g),function(i,a){var o=_[a]||l.find.attr;_[a]=function(f,h,g){var b,N,D=h.toLowerCase();return g||(N=_[D],_[D]=b,b=o(f,h,g)!=null?D:null,_[D]=N),b}});var w=/^(?:input|select|textarea|button)$/i,m=/^(?:a|area)$/i;l.fn.extend({prop:function(i,a){return Ie(this,l.prop,i,a,arguments.length>1)},removeProp:function(i){return this.each(function(){delete this[l.propFix[i]||i]})}}),l.extend({prop:function(i,a,o){var f,h,g=i.nodeType;if(!(g===3||g===8||g===2))return(g!==1||!l.isXMLDoc(i))&&(a=l.propFix[a]||a,h=l.propHooks[a]),o!==void 0?h&&"set"in h&&(f=h.set(i,o,a))!==void 0?f:i[a]=o:h&&"get"in h&&(f=h.get(i,a))!==null?f:i[a]},propHooks:{tabIndex:{get:function(i){var a=l.find.attr(i,"tabindex");return a?parseInt(a,10):w.test(i.nodeName)||m.test(i.nodeName)&&i.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),V.optSelected||(l.propHooks.selected={get:function(i){var a=i.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(i){var a=i.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function P(i){var a=i.match(Fe)||[];return a.join(" ")}function O(i){return i.getAttribute&&i.getAttribute("class")||""}function B(i){return Array.isArray(i)?i:typeof i=="string"?i.match(Fe)||[]:[]}l.fn.extend({addClass:function(i){var a,o,f,h,g,b,N,D=0;if(ee(i))return this.each(function(Y){l(this).addClass(i.call(this,Y,O(this)))});if(a=B(i),a.length){for(;o=this[D++];)if(h=O(o),f=o.nodeType===1&&" "+P(h)+" ",f){for(b=0;g=a[b++];)f.indexOf(" "+g+" ")<0&&(f+=g+" ");N=P(f),h!==N&&o.setAttribute("class",N)}}return this},removeClass:function(i){var a,o,f,h,g,b,N,D=0;if(ee(i))return this.each(function(Y){l(this).removeClass(i.call(this,Y,O(this)))});if(!arguments.length)return this.attr("class","");if(a=B(i),a.length){for(;o=this[D++];)if(h=O(o),f=o.nodeType===1&&" "+P(h)+" ",f){for(b=0;g=a[b++];)for(;f.indexOf(" "+g+" ")>-1;)f=f.replace(" "+g+" "," ");N=P(f),h!==N&&o.setAttribute("class",N)}}return this},toggleClass:function(i,a){var o=typeof i,f=o==="string"||Array.isArray(i);return typeof a=="boolean"&&f?a?this.addClass(i):this.removeClass(i):ee(i)?this.each(function(h){l(this).toggleClass(i.call(this,h,O(this),a),a)}):this.each(function(){var h,g,b,N;if(f)for(g=0,b=l(this),N=B(i);h=N[g++];)b.hasClass(h)?b.removeClass(h):b.addClass(h);else(i===void 0||o==="boolean")&&(h=O(this),h&&Z.set(this,"__className__",h),this.setAttribute&&this.setAttribute("class",h||i===!1?"":Z.get(this,"__className__")||""))})},hasClass:function(i){var a,o,f=0;for(a=" "+i+" ";o=this[f++];)if(o.nodeType===1&&(" "+P(O(o))+" ").indexOf(a)>-1)return!0;return!1}});var ae=/\r/g;l.fn.extend({val:function(i){var a,o,f,h=this[0];return arguments.length?(f=ee(i),this.each(function(g){var b;this.nodeType===1&&(f?b=i.call(this,g,l(this).val()):b=i,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=l.map(b,function(N){return N==null?"":N+""})),a=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,b,"value")===void 0)&&(this.value=b))})):h?(a=l.valHooks[h.type]||l.valHooks[h.nodeName.toLowerCase()],a&&"get"in a&&(o=a.get(h,"value"))!==void 0?o:(o=h.value,typeof o=="string"?o.replace(ae,""):o??"")):void 0}}),l.extend({valHooks:{option:{get:function(i){var a=l.find.attr(i,"value");return a??P(l.text(i))}},select:{get:function(i){var a,o,f,h=i.options,g=i.selectedIndex,b=i.type==="select-one",N=b?null:[],D=b?g+1:h.length;for(g<0?f=D:f=b?g:0;f<D;f++)if(o=h[f],(o.selected||f===g)&&!o.disabled&&(!o.parentNode.disabled||!L(o.parentNode,"optgroup"))){if(a=l(o).val(),b)return a;N.push(a)}return N},set:function(i,a){for(var o,f,h=i.options,g=l.makeArray(a),b=h.length;b--;)f=h[b],(f.selected=l.inArray(l.valHooks.option.get(f),g)>-1)&&(o=!0);return o||(i.selectedIndex=-1),g}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(i,a){if(Array.isArray(a))return i.checked=l.inArray(l(i).val(),a)>-1}},V.checkOn||(l.valHooks[this].get=function(i){return i.getAttribute("value")===null?"on":i.value})}),V.focusin="onfocusin"in e;var De=/^(?:focusinfocus|focusoutblur)$/,be=function(i){i.stopPropagation()};l.extend(l.event,{trigger:function(i,a,o,f){var h,g,b,N,D,Y,ie,Ae,J=[o||ve],ce=p.call(i,"type")?i.type:i,it=p.call(i,"namespace")?i.namespace.split("."):[];if(g=Ae=b=o=o||ve,!(o.nodeType===3||o.nodeType===8)&&!De.test(ce+l.event.triggered)&&(ce.indexOf(".")>-1&&(it=ce.split("."),ce=it.shift(),it.sort()),D=ce.indexOf(":")<0&&"on"+ce,i=i[l.expando]?i:new l.Event(ce,typeof i=="object"&&i),i.isTrigger=f?2:3,i.namespace=it.join("."),i.rnamespace=i.namespace?new RegExp("(^|\\.)"+it.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,i.result=void 0,i.target||(i.target=o),a=a==null?[i]:l.makeArray(a,[i]),ie=l.event.special[ce]||{},!(!f&&ie.trigger&&ie.trigger.apply(o,a)===!1))){if(!f&&!ie.noBubble&&!Se(o)){for(N=ie.delegateType||ce,De.test(N+ce)||(g=g.parentNode);g;g=g.parentNode)J.push(g),b=g;b===(o.ownerDocument||ve)&&J.push(b.defaultView||b.parentWindow||e)}for(h=0;(g=J[h++])&&!i.isPropagationStopped();)Ae=g,i.type=h>1?N:ie.bindType||ce,Y=(Z.get(g,"events")||Object.create(null))[i.type]&&Z.get(g,"handle"),Y&&Y.apply(g,a),Y=D&&g[D],Y&&Y.apply&&gt(g)&&(i.result=Y.apply(g,a),i.result===!1&&i.preventDefault());return i.type=ce,!f&&!i.isDefaultPrevented()&&(!ie._default||ie._default.apply(J.pop(),a)===!1)&&gt(o)&&D&&ee(o[ce])&&!Se(o)&&(b=o[D],b&&(o[D]=null),l.event.triggered=ce,i.isPropagationStopped()&&Ae.addEventListener(ce,be),o[ce](),i.isPropagationStopped()&&Ae.removeEventListener(ce,be),l.event.triggered=void 0,b&&(o[D]=b)),i.result}},simulate:function(i,a,o){var f=l.extend(new l.Event,o,{type:i,isSimulated:!0});l.event.trigger(f,null,a)}}),l.fn.extend({trigger:function(i,a){return this.each(function(){l.event.trigger(i,a,this)})},triggerHandler:function(i,a){var o=this[0];if(o)return l.event.trigger(i,a,o,!0)}}),V.focusin||l.each({focus:"focusin",blur:"focusout"},function(i,a){var o=function(f){l.event.simulate(a,f.target,l.event.fix(f))};l.event.special[a]={setup:function(){var f=this.ownerDocument||this.document||this,h=Z.access(f,a);h||f.addEventListener(i,o,!0),Z.access(f,a,(h||0)+1)},teardown:function(){var f=this.ownerDocument||this.document||this,h=Z.access(f,a)-1;h?Z.access(f,a,h):(f.removeEventListener(i,o,!0),Z.remove(f,a))}}});var fe=e.location,pe={guid:Date.now()},Ne=/\?/;l.parseXML=function(i){var a,o;if(!i||typeof i!="string")return null;try{a=new e.DOMParser().parseFromString(i,"text/xml")}catch(f){}return o=a&&a.getElementsByTagName("parsererror")[0],(!a||o)&&l.error("Invalid XML: "+(o?l.map(o.childNodes,function(f){return f.textContent}).join(`
`):i)),a};var yt=/\[\]$/,vt=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,xt=/^(?:input|select|textarea|keygen)/i;function It(i,a,o,f){var h;if(Array.isArray(a))l.each(a,function(g,b){o||yt.test(i)?f(i,b):It(i+"["+(typeof b=="object"&&b!=null?g:"")+"]",b,o,f)});else if(!o&&Ke(a)==="object")for(h in a)It(i+"["+h+"]",a[h],o,f);else f(i,a)}l.param=function(i,a){var o,f=[],h=function(g,b){var N=ee(b)?b():b;f[f.length]=encodeURIComponent(g)+"="+encodeURIComponent(N??"")};if(i==null)return"";if(Array.isArray(i)||i.jquery&&!l.isPlainObject(i))l.each(i,function(){h(this.name,this.value)});else for(o in i)It(o,i[o],a,h);return f.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var i=l.prop(this,"elements");return i?l.makeArray(i):this}).filter(function(){var i=this.type;return this.name&&!l(this).is(":disabled")&&xt.test(this.nodeName)&&!Dt.test(i)&&(this.checked||!vn.test(i))}).map(function(i,a){var o=l(this).val();return o==null?null:Array.isArray(o)?l.map(o,function(f){return{name:a.name,value:f.replace(vt,`\r
`)}}):{name:a.name,value:o.replace(vt,`\r
`)}}).get()}});var Ht=/%20/g,Pt=/#.*$/,Cn=/([?&])_=[^&]*/,en=/^(.*?):[ \t]*([^\r\n]*)$/mg,Pe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,At=/^(?:GET|HEAD)$/,Bt=/^\/\//,tn={},un={},Nn="*/".concat("*"),xn=ve.createElement("a");xn.href=fe.href;function An(i){return function(a,o){typeof a!="string"&&(o=a,a="*");var f,h=0,g=a.toLowerCase().match(Fe)||[];if(ee(o))for(;f=g[h++];)f[0]==="+"?(f=f.slice(1)||"*",(i[f]=i[f]||[]).unshift(o)):(i[f]=i[f]||[]).push(o)}}function dn(i,a,o,f){var h={},g=i===un;function b(N){var D;return h[N]=!0,l.each(i[N]||[],function(Y,ie){var Ae=ie(a,o,f);if(typeof Ae=="string"&&!g&&!h[Ae])return a.dataTypes.unshift(Ae),b(Ae),!1;if(g)return!(D=Ae)}),D}return b(a.dataTypes[0])||!h["*"]&&b("*")}function Kt(i,a){var o,f,h=l.ajaxSettings.flatOptions||{};for(o in a)a[o]!==void 0&&((h[o]?i:f||(f={}))[o]=a[o]);return f&&l.extend(!0,i,f),i}function Dn(i,a,o){for(var f,h,g,b,N=i.contents,D=i.dataTypes;D[0]==="*";)D.shift(),f===void 0&&(f=i.mimeType||a.getResponseHeader("Content-Type"));if(f){for(h in N)if(N[h]&&N[h].test(f)){D.unshift(h);break}}if(D[0]in o)g=D[0];else{for(h in o){if(!D[0]||i.converters[h+" "+D[0]]){g=h;break}b||(b=h)}g=g||b}if(g)return g!==D[0]&&D.unshift(g),o[g]}function Qn(i,a,o,f){var h,g,b,N,D,Y={},ie=i.dataTypes.slice();if(ie[1])for(b in i.converters)Y[b.toLowerCase()]=i.converters[b];for(g=ie.shift();g;)if(i.responseFields[g]&&(o[i.responseFields[g]]=a),!D&&f&&i.dataFilter&&(a=i.dataFilter(a,i.dataType)),D=g,g=ie.shift(),g){if(g==="*")g=D;else if(D!=="*"&&D!==g){if(b=Y[D+" "+g]||Y["* "+g],!b){for(h in Y)if(N=h.split(" "),N[1]===g&&(b=Y[D+" "+N[0]]||Y["* "+N[0]],b)){b===!0?b=Y[h]:Y[h]!==!0&&(g=N[0],ie.unshift(N[1]));break}}if(b!==!0)if(b&&i.throws)a=b(a);else try{a=b(a)}catch(Ae){return{state:"parsererror",error:b?Ae:"No conversion from "+D+" to "+g}}}}return{state:"success",data:a}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fe.href,type:"GET",isLocal:Pe.test(fe.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Nn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(i,a){return a?Kt(Kt(i,l.ajaxSettings),a):Kt(l.ajaxSettings,i)},ajaxPrefilter:An(tn),ajaxTransport:An(un),ajax:function(i,a){typeof i=="object"&&(a=i,i=void 0),a=a||{};var o,f,h,g,b,N,D,Y,ie,Ae,J=l.ajaxSetup({},a),ce=J.context||J,it=J.context&&(ce.nodeType||ce.jquery)?l(ce):l.event,_t=l.Deferred(),rt=l.Callbacks("once memory"),Wt=J.statusCode||{},qt={},pn={},St="canceled",ht={readyState:0,getResponseHeader:function(Et){var jt;if(D){if(!g)for(g={};jt=en.exec(h);)g[jt[1].toLowerCase()+" "]=(g[jt[1].toLowerCase()+" "]||[]).concat(jt[2]);jt=g[Et.toLowerCase()+" "]}return jt==null?null:jt.join(", ")},getAllResponseHeaders:function(){return D?h:null},setRequestHeader:function(Et,jt){return D==null&&(Et=pn[Et.toLowerCase()]=pn[Et.toLowerCase()]||Et,qt[Et]=jt),this},overrideMimeType:function(Et){return D==null&&(J.mimeType=Et),this},statusCode:function(Et){var jt;if(Et)if(D)ht.always(Et[ht.status]);else for(jt in Et)Wt[jt]=[Wt[jt],Et[jt]];return this},abort:function(Et){var jt=Et||St;return o&&o.abort(jt),sn(0,jt),this}};if(_t.promise(ht),J.url=((i||J.url||fe.href)+"").replace(Bt,fe.protocol+"//"),J.type=a.method||a.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(Fe)||[""],J.crossDomain==null){N=ve.createElement("a");try{N.href=J.url,N.href=N.href,J.crossDomain=xn.protocol+"//"+xn.host!=N.protocol+"//"+N.host}catch(Et){J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=l.param(J.data,J.traditional)),dn(tn,J,a,ht),D)return ht;Y=l.event&&J.global,Y&&l.active++==0&&l.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!At.test(J.type),f=J.url.replace(Pt,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Ht,"+")):(Ae=J.url.slice(f.length),J.data&&(J.processData||typeof J.data=="string")&&(f+=(Ne.test(f)?"&":"?")+J.data,delete J.data),J.cache===!1&&(f=f.replace(Cn,"$1"),Ae=(Ne.test(f)?"&":"?")+"_="+pe.guid+++Ae),J.url=f+Ae),J.ifModified&&(l.lastModified[f]&&ht.setRequestHeader("If-Modified-Since",l.lastModified[f]),l.etag[f]&&ht.setRequestHeader("If-None-Match",l.etag[f])),(J.data&&J.hasContent&&J.contentType!==!1||a.contentType)&&ht.setRequestHeader("Content-Type",J.contentType),ht.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+Nn+"; q=0.01":""):J.accepts["*"]);for(ie in J.headers)ht.setRequestHeader(ie,J.headers[ie]);if(J.beforeSend&&(J.beforeSend.call(ce,ht,J)===!1||D))return ht.abort();if(St="abort",rt.add(J.complete),ht.done(J.success),ht.fail(J.error),o=dn(un,J,a,ht),!o)sn(-1,"No Transport");else{if(ht.readyState=1,Y&&it.trigger("ajaxSend",[ht,J]),D)return ht;J.async&&J.timeout>0&&(b=e.setTimeout(function(){ht.abort("timeout")},J.timeout));try{D=!1,o.send(qt,sn)}catch(Et){if(D)throw Et;sn(-1,Et)}}function sn(Et,jt,ai,gi){var hn,qn,$n,on,Bn,bn=jt;D||(D=!0,b&&e.clearTimeout(b),o=void 0,h=gi||"",ht.readyState=Et>0?4:0,hn=Et>=200&&Et<300||Et===304,ai&&(on=Dn(J,ht,ai)),!hn&&l.inArray("script",J.dataTypes)>-1&&l.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),on=Qn(J,on,ht,hn),hn?(J.ifModified&&(Bn=ht.getResponseHeader("Last-Modified"),Bn&&(l.lastModified[f]=Bn),Bn=ht.getResponseHeader("etag"),Bn&&(l.etag[f]=Bn)),Et===204||J.type==="HEAD"?bn="nocontent":Et===304?bn="notmodified":(bn=on.state,qn=on.data,$n=on.error,hn=!$n)):($n=bn,(Et||!bn)&&(bn="error",Et<0&&(Et=0))),ht.status=Et,ht.statusText=(jt||bn)+"",hn?_t.resolveWith(ce,[qn,bn,ht]):_t.rejectWith(ce,[ht,bn,$n]),ht.statusCode(Wt),Wt=void 0,Y&&it.trigger(hn?"ajaxSuccess":"ajaxError",[ht,J,hn?qn:$n]),rt.fireWith(ce,[ht,bn]),Y&&(it.trigger("ajaxComplete",[ht,J]),--l.active||l.event.trigger("ajaxStop")))}return ht},getJSON:function(i,a,o){return l.get(i,a,o,"json")},getScript:function(i,a){return l.get(i,void 0,a,"script")}}),l.each(["get","post"],function(i,a){l[a]=function(o,f,h,g){return ee(f)&&(g=g||h,h=f,f=void 0),l.ajax(l.extend({url:o,type:a,dataType:g,data:f,success:h},l.isPlainObject(o)&&o))}}),l.ajaxPrefilter(function(i){var a;for(a in i.headers)a.toLowerCase()==="content-type"&&(i.contentType=i.headers[a]||"")}),l._evalUrl=function(i,a,o){return l.ajax({url:i,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(f){l.globalEval(f,a,o)}})},l.fn.extend({wrapAll:function(i){var a;return this[0]&&(ee(i)&&(i=i.call(this[0])),a=l(i,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var o=this;o.firstElementChild;)o=o.firstElementChild;return o}).append(this)),this},wrapInner:function(i){return ee(i)?this.each(function(a){l(this).wrapInner(i.call(this,a))}):this.each(function(){var a=l(this),o=a.contents();o.length?o.wrapAll(i):a.append(i)})},wrap:function(i){var a=ee(i);return this.each(function(o){l(this).wrapAll(a?i.call(this,o):i)})},unwrap:function(i){return this.parent(i).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(i){return!l.expr.pseudos.visible(i)},l.expr.pseudos.visible=function(i){return!!(i.offsetWidth||i.offsetHeight||i.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(i){}};var ii={0:200,1223:204},Rn=l.ajaxSettings.xhr();V.cors=!!Rn&&"withCredentials"in Rn,V.ajax=Rn=!!Rn,l.ajaxTransport(function(i){var a,o;if(V.cors||Rn&&!i.crossDomain)return{send:function(f,h){var g,b=i.xhr();if(b.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(g in i.xhrFields)b[g]=i.xhrFields[g];i.mimeType&&b.overrideMimeType&&b.overrideMimeType(i.mimeType),!i.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");for(g in f)b.setRequestHeader(g,f[g]);a=function(N){return function(){a&&(a=o=b.onload=b.onerror=b.onabort=b.ontimeout=b.onreadystatechange=null,N==="abort"?b.abort():N==="error"?typeof b.status!="number"?h(0,"error"):h(b.status,b.statusText):h(ii[b.status]||b.status,b.statusText,(b.responseType||"text")!=="text"||typeof b.responseText!="string"?{binary:b.response}:{text:b.responseText},b.getAllResponseHeaders()))}},b.onload=a(),o=b.onerror=b.ontimeout=a("error"),b.onabort!==void 0?b.onabort=o:b.onreadystatechange=function(){b.readyState===4&&e.setTimeout(function(){a&&o()})},a=a("abort");try{b.send(i.hasContent&&i.data||null)}catch(N){if(a)throw N}},abort:function(){a&&a()}}}),l.ajaxPrefilter(function(i){i.crossDomain&&(i.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(i){return l.globalEval(i),i}}}),l.ajaxPrefilter("script",function(i){i.cache===void 0&&(i.cache=!1),i.crossDomain&&(i.type="GET")}),l.ajaxTransport("script",function(i){if(i.crossDomain||i.scriptAttrs){var a,o;return{send:function(f,h){a=l("<script>").attr(i.scriptAttrs||{}).prop({charset:i.scriptCharset,src:i.url}).on("load error",o=function(g){a.remove(),o=null,g&&h(g.type==="error"?404:200,g.type)}),ve.head.appendChild(a[0])},abort:function(){o&&o()}}}});var ri=[],Jn=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var i=ri.pop()||l.expando+"_"+pe.guid++;return this[i]=!0,i}}),l.ajaxPrefilter("json jsonp",function(i,a,o){var f,h,g,b=i.jsonp!==!1&&(Jn.test(i.url)?"url":typeof i.data=="string"&&(i.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Jn.test(i.data)&&"data");if(b||i.dataTypes[0]==="jsonp")return f=i.jsonpCallback=ee(i.jsonpCallback)?i.jsonpCallback():i.jsonpCallback,b?i[b]=i[b].replace(Jn,"$1"+f):i.jsonp!==!1&&(i.url+=(Ne.test(i.url)?"&":"?")+i.jsonp+"="+f),i.converters["script json"]=function(){return g||l.error(f+" was not called"),g[0]},i.dataTypes[0]="json",h=e[f],e[f]=function(){g=arguments},o.always(function(){h===void 0?l(e).removeProp(f):e[f]=h,i[f]&&(i.jsonpCallback=a.jsonpCallback,ri.push(f)),g&&ee(h)&&h(g[0]),g=h=void 0}),"script"}),V.createHTMLDocument=function(){var i=ve.implementation.createHTMLDocument("").body;return i.innerHTML="<form></form><form></form>",i.childNodes.length===2}(),l.parseHTML=function(i,a,o){if(typeof i!="string")return[];typeof a=="boolean"&&(o=a,a=!1);var f,h,g;return a||(V.createHTMLDocument?(a=ve.implementation.createHTMLDocument(""),f=a.createElement("base"),f.href=ve.location.href,a.head.appendChild(f)):a=ve),h=R.exec(i),g=!o&&[],h?[a.createElement(h[1])]:(h=zn([i],a,g),g&&g.length&&l(g).remove(),l.merge([],h.childNodes))},l.fn.load=function(i,a,o){var f,h,g,b=this,N=i.indexOf(" ");return N>-1&&(f=P(i.slice(N)),i=i.slice(0,N)),ee(a)?(o=a,a=void 0):a&&typeof a=="object"&&(h="POST"),b.length>0&&l.ajax({url:i,type:h||"GET",dataType:"html",data:a}).done(function(D){g=arguments,b.html(f?l("<div>").append(l.parseHTML(D)).find(f):D)}).always(o&&function(D,Y){b.each(function(){o.apply(this,g||[D.responseText,Y,D])})}),this},l.expr.pseudos.animated=function(i){return l.grep(l.timers,function(a){return i===a.elem}).length},l.offset={setOffset:function(i,a,o){var f,h,g,b,N,D,Y,ie=l.css(i,"position"),Ae=l(i),J={};ie==="static"&&(i.style.position="relative"),N=Ae.offset(),g=l.css(i,"top"),D=l.css(i,"left"),Y=(ie==="absolute"||ie==="fixed")&&(g+D).indexOf("auto")>-1,Y?(f=Ae.position(),b=f.top,h=f.left):(b=parseFloat(g)||0,h=parseFloat(D)||0),ee(a)&&(a=a.call(i,o,l.extend({},N))),a.top!=null&&(J.top=a.top-N.top+b),a.left!=null&&(J.left=a.left-N.left+h),"using"in a?a.using.call(i,J):Ae.css(J)}},l.fn.extend({offset:function(i){if(arguments.length)return i===void 0?this:this.each(function(h){l.offset.setOffset(this,i,h)});var a,o,f=this[0];if(!!f)return f.getClientRects().length?(a=f.getBoundingClientRect(),o=f.ownerDocument.defaultView,{top:a.top+o.pageYOffset,left:a.left+o.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var i,a,o,f=this[0],h={top:0,left:0};if(l.css(f,"position")==="fixed")a=f.getBoundingClientRect();else{for(a=this.offset(),o=f.ownerDocument,i=f.offsetParent||o.documentElement;i&&(i===o.body||i===o.documentElement)&&l.css(i,"position")==="static";)i=i.parentNode;i&&i!==f&&i.nodeType===1&&(h=l(i).offset(),h.top+=l.css(i,"borderTopWidth",!0),h.left+=l.css(i,"borderLeftWidth",!0))}return{top:a.top-h.top-l.css(f,"marginTop",!0),left:a.left-h.left-l.css(f,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var i=this.offsetParent;i&&l.css(i,"position")==="static";)i=i.offsetParent;return i||Le})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(i,a){var o=a==="pageYOffset";l.fn[i]=function(f){return Ie(this,function(h,g,b){var N;if(Se(h)?N=h:h.nodeType===9&&(N=h.defaultView),b===void 0)return N?N[a]:h[g];N?N.scrollTo(o?N.pageXOffset:b,o?b:N.pageYOffset):h[g]=b},i,f,arguments.length)}}),l.each(["top","left"],function(i,a){l.cssHooks[a]=Xt(V.pixelPosition,function(o,f){if(f)return f=Gt(o,a),et.test(f)?l(o).position()[a]+"px":f})}),l.each({Height:"height",Width:"width"},function(i,a){l.each({padding:"inner"+i,content:a,"":"outer"+i},function(o,f){l.fn[f]=function(h,g){var b=arguments.length&&(o||typeof h!="boolean"),N=o||(h===!0||g===!0?"margin":"border");return Ie(this,function(D,Y,ie){var Ae;return Se(D)?f.indexOf("outer")===0?D["inner"+i]:D.document.documentElement["client"+i]:D.nodeType===9?(Ae=D.documentElement,Math.max(D.body["scroll"+i],Ae["scroll"+i],D.body["offset"+i],Ae["offset"+i],Ae["client"+i])):ie===void 0?l.css(D,Y,N):l.style(D,Y,ie,N)},a,b?h:void 0,b)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,a){l.fn[a]=function(o){return this.on(a,o)}}),l.fn.extend({bind:function(i,a,o){return this.on(i,null,a,o)},unbind:function(i,a){return this.off(i,null,a)},delegate:function(i,a,o,f){return this.on(a,i,o,f)},undelegate:function(i,a,o){return arguments.length===1?this.off(i,"**"):this.off(a,i||"**",o)},hover:function(i,a){return this.mouseenter(i).mouseleave(a||i)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(i,a){l.fn[a]=function(o,f){return arguments.length>0?this.on(a,null,o,f):this.trigger(a)}});var hi=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;l.proxy=function(i,a){var o,f,h;if(typeof a=="string"&&(o=i[a],a=i,i=o),!!ee(i))return f=s.call(arguments,2),h=function(){return i.apply(a||this,f.concat(s.call(arguments)))},h.guid=i.guid=i.guid||l.guid++,h},l.holdReady=function(i){i?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=L,l.isFunction=ee,l.isWindow=Se,l.camelCase=ot,l.type=Ke,l.now=Date.now,l.isNumeric=function(i){var a=l.type(i);return(a==="number"||a==="string")&&!isNaN(i-parseFloat(i))},l.trim=function(i){return i==null?"":(i+"").replace(hi,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return l});var _i=e.jQuery,Bi=e.$;return l.noConflict=function(i){return e.$===l&&(e.$=Bi),i&&e.jQuery===l&&(e.jQuery=_i),l},typeof t=="undefined"&&(e.jQuery=e.$=l),l})});var Sn=mt((Gi,Ki)=>{(function(e,t){typeof Gi=="object"&&typeof Ki!="undefined"?Ki.exports=t(ln()):typeof define=="function"&&define.amd?define(["jquery"],t):(e=e||self,e.Util=t(e.jQuery))})(Gi,function(e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var t="transitionend",n=1e6,r=1e3;function s(v){return v===null||typeof v=="undefined"?""+v:{}.toString.call(v).match(/\s([a-z]+)/i)[1].toLowerCase()}function c(){return{bindType:t,delegateType:t,handle:function(p){if(e(p.target).is(this))return p.handleObj.handler.apply(this,arguments)}}}function u(v){var p=this,x=!1;return e(this).one(C.TRANSITION_END,function(){x=!0}),setTimeout(function(){x||C.triggerTransitionEnd(p)},v),this}function d(){e.fn.emulateTransitionEnd=u,e.event.special[C.TRANSITION_END]=c()}var C={TRANSITION_END:"bsTransitionEnd",getUID:function(p){do p+=~~(Math.random()*n);while(document.getElementById(p));return p},getSelectorFromElement:function(p){var x=p.getAttribute("data-target");if(!x||x==="#"){var A=p.getAttribute("href");x=A&&A!=="#"?A.trim():""}try{return document.querySelector(x)?x:null}catch(V){return null}},getTransitionDurationFromElement:function(p){if(!p)return 0;var x=e(p).css("transition-duration"),A=e(p).css("transition-delay"),V=parseFloat(x),ee=parseFloat(A);return!V&&!ee?0:(x=x.split(",")[0],A=A.split(",")[0],(parseFloat(x)+parseFloat(A))*r)},reflow:function(p){return p.offsetHeight},triggerTransitionEnd:function(p){e(p).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(p){return(p[0]||p).nodeType},typeCheckConfig:function(p,x,A){for(var V in A)if(Object.prototype.hasOwnProperty.call(A,V)){var ee=A[V],Se=x[V],ve=Se&&C.isElement(Se)?"element":s(Se);if(!new RegExp(ee).test(ve))throw new Error(p.toUpperCase()+": "+('Option "'+V+'" provided type "'+ve+'" ')+('but expected type "'+ee+'".'))}},findShadowRoot:function(p){if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){var x=p.getRootNode();return x instanceof ShadowRoot?x:null}return p instanceof ShadowRoot?p:p.parentNode?C.findShadowRoot(p.parentNode):null},jQueryDetection:function(){if(typeof e=="undefined")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var p=e.fn.jquery.split(" ")[0].split("."),x=1,A=2,V=9,ee=1,Se=4;if(p[0]<A&&p[1]<V||p[0]===x&&p[1]===V&&p[2]<ee||p[0]>=Se)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return C.jQueryDetection(),d(),C})});var aa=mt((Xi,Qi)=>{(function(e,t){typeof Xi=="object"&&typeof Qi!="undefined"?Qi.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.Alert=t(e.jQuery,e.Util))})(Xi,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(Ve,Ke){for(var z=0;z<Ke.length;z++){var l=Ke[z];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(Ve,l.key,l)}}function r(Ve,Ke,z){return Ke&&n(Ve.prototype,Ke),z&&n(Ve,z),Ve}var s="alert",c="4.5.0",u="bs.alert",d="."+u,C=".data-api",v=e.fn[s],p='[data-dismiss="alert"]',x="close"+d,A="closed"+d,V="click"+d+C,ee="alert",Se="fade",ve="show",Re=function(){function Ve(z){this._element=z}var Ke=Ve.prototype;return Ke.close=function(l){var W=this._element;l&&(W=this._getRootElement(l));var re=this._triggerCloseEvent(W);re.isDefaultPrevented()||this._removeElement(W)},Ke.dispose=function(){e.removeData(this._element,u),this._element=null},Ke._getRootElement=function(l){var W=t.getSelectorFromElement(l),re=!1;return W&&(re=document.querySelector(W)),re||(re=e(l).closest("."+ee)[0]),re},Ke._triggerCloseEvent=function(l){var W=e.Event(x);return e(l).trigger(W),W},Ke._removeElement=function(l){var W=this;if(e(l).removeClass(ve),!e(l).hasClass(Se)){this._destroyElement(l);return}var re=t.getTransitionDurationFromElement(l);e(l).one(t.TRANSITION_END,function(ge){return W._destroyElement(l,ge)}).emulateTransitionEnd(re)},Ke._destroyElement=function(l){e(l).detach().trigger(A).remove()},Ve._jQueryInterface=function(l){return this.each(function(){var W=e(this),re=W.data(u);re||(re=new Ve(this),W.data(u,re)),l==="close"&&re[l](this)})},Ve._handleDismiss=function(l){return function(W){W&&W.preventDefault(),l.close(this)}},r(Ve,null,[{key:"VERSION",get:function(){return c}}]),Ve}();return e(document).on(V,p,Re._handleDismiss(new Re)),e.fn[s]=Re._jQueryInterface,e.fn[s].Constructor=Re,e.fn[s].noConflict=function(){return e.fn[s]=v,Re._jQueryInterface},Re})});var sa=mt((Ji,Zi)=>{(function(e,t){typeof Ji=="object"&&typeof Zi!="undefined"?Zi.exports=t(ln()):typeof define=="function"&&define.amd?define(["jquery"],t):(e=e||self,e.Button=t(e.jQuery))})(Ji,function(e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;function t(re,ge){for(var se=0;se<ge.length;se++){var te=ge[se];te.enumerable=te.enumerable||!1,te.configurable=!0,"value"in te&&(te.writable=!0),Object.defineProperty(re,te.key,te)}}function n(re,ge,se){return ge&&t(re.prototype,ge),se&&t(re,se),re}var r="button",s="4.5.0",c="bs.button",u="."+c,d=".data-api",C=e.fn[r],v="active",p="btn",x="focus",A='[data-toggle^="button"]',V='[data-toggle="buttons"]',ee='[data-toggle="button"]',Se='[data-toggle="buttons"] .btn',ve='input:not([type="hidden"])',Re=".active",Ve=".btn",Ke="click"+u+d,z="focus"+u+d+" "+("blur"+u+d),l="load"+u+d,W=function(){function re(se){this._element=se}var ge=re.prototype;return ge.toggle=function(){var te=!0,L=!0,R=e(this._element).closest(V)[0];if(R){var F=this._element.querySelector(ve);if(F){if(F.type==="radio")if(F.checked&&this._element.classList.contains(v))te=!1;else{var H=R.querySelector(Re);H&&e(H).removeClass(v)}te&&((F.type==="checkbox"||F.type==="radio")&&(F.checked=!this._element.classList.contains(v)),e(F).trigger("change")),F.focus(),L=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(L&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(v)),te&&e(this._element).toggleClass(v))},ge.dispose=function(){e.removeData(this._element,c),this._element=null},re._jQueryInterface=function(te){return this.each(function(){var L=e(this).data(c);L||(L=new re(this),e(this).data(c,L)),te==="toggle"&&L[te]()})},n(re,null,[{key:"VERSION",get:function(){return s}}]),re}();return e(document).on(Ke,A,function(re){var ge=re.target,se=ge;if(e(ge).hasClass(p)||(ge=e(ge).closest(Ve)[0]),!ge||ge.hasAttribute("disabled")||ge.classList.contains("disabled"))re.preventDefault();else{var te=ge.querySelector(ve);if(te&&(te.hasAttribute("disabled")||te.classList.contains("disabled"))){re.preventDefault();return}se.tagName==="LABEL"&&te&&te.type==="checkbox"&&re.preventDefault(),W._jQueryInterface.call(e(ge),"toggle")}}).on(z,A,function(re){var ge=e(re.target).closest(Ve)[0];e(ge).toggleClass(x,/^focus(in)?$/.test(re.type))}),e(window).on(l,function(){for(var re=[].slice.call(document.querySelectorAll(Se)),ge=0,se=re.length;ge<se;ge++){var te=re[ge],L=te.querySelector(ve);L.checked||L.hasAttribute("checked")?te.classList.add(v):te.classList.remove(v)}re=[].slice.call(document.querySelectorAll(ee));for(var R=0,F=re.length;R<F;R++){var H=re[R];H.getAttribute("aria-pressed")==="true"?H.classList.add(v):H.classList.remove(v)}}),e.fn[r]=W._jQueryInterface,e.fn[r].Constructor=W,e.fn[r].noConflict=function(){return e.fn[r]=C,W._jQueryInterface},W})});var oa=mt((er,tr)=>{(function(e,t){typeof er=="object"&&typeof tr!="undefined"?tr.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.Carousel=t(e.jQuery,e.Util))})(er,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(ke,ze){for(var Ue=0;Ue<ze.length;Ue++){var ue=ze[Ue];ue.enumerable=ue.enumerable||!1,ue.configurable=!0,"value"in ue&&(ue.writable=!0),Object.defineProperty(ke,ue.key,ue)}}function r(ke,ze,Ue){return ze&&n(ke.prototype,ze),Ue&&n(ke,Ue),ke}function s(ke,ze,Ue){return ze in ke?Object.defineProperty(ke,ze,{value:Ue,enumerable:!0,configurable:!0,writable:!0}):ke[ze]=Ue,ke}function c(ke,ze){var Ue=Object.keys(ke);if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(ke);ze&&(ue=ue.filter(function(nt){return Object.getOwnPropertyDescriptor(ke,nt).enumerable})),Ue.push.apply(Ue,ue)}return Ue}function u(ke){for(var ze=1;ze<arguments.length;ze++){var Ue=arguments[ze]!=null?arguments[ze]:{};ze%2?c(Object(Ue),!0).forEach(function(ue){s(ke,ue,Ue[ue])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ke,Object.getOwnPropertyDescriptors(Ue)):c(Object(Ue)).forEach(function(ue){Object.defineProperty(ke,ue,Object.getOwnPropertyDescriptor(Ue,ue))})}return ke}var d="carousel",C="4.5.0",v="bs.carousel",p="."+v,x=".data-api",A=e.fn[d],V=37,ee=39,Se=500,ve=40,Re={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Ve={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ke="next",z="prev",l="left",W="right",re="slide"+p,ge="slid"+p,se="keydown"+p,te="mouseenter"+p,L="mouseleave"+p,R="touchstart"+p,F="touchmove"+p,H="touchend"+p,j="pointerdown"+p,q="pointerup"+p,X="dragstart"+p,ne="load"+p+x,Oe="click"+p+x,Fe="carousel",Ze="active",je="slide",ye="carousel-item-right",we="carousel-item-left",K="carousel-item-next",Q="carousel-item-prev",Ee="pointer-event",Ie=".active",le=".active.carousel-item",Ye=".carousel-item",dt=".carousel-item img",ot=".carousel-item-next, .carousel-item-prev",gt=".carousel-indicators",We="[data-slide], [data-slide-to]",Z='[data-ride="carousel"]',He={TOUCH:"touch",PEN:"pen"},oe=function(){function ke(Ue,ue){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(ue),this._element=Ue,this._indicatorsElement=this._element.querySelector(gt),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var ze=ke.prototype;return ze.next=function(){this._isSliding||this._slide(Ke)},ze.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&e(this._element).css("visibility")!=="hidden"&&this.next()},ze.prev=function(){this._isSliding||this._slide(z)},ze.pause=function(ue){ue||(this._isPaused=!0),this._element.querySelector(ot)&&(t.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},ze.cycle=function(ue){ue||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},ze.to=function(ue){var nt=this;this._activeElement=this._element.querySelector(le);var Ce=this._getItemIndex(this._activeElement);if(!(ue>this._items.length-1||ue<0)){if(this._isSliding){e(this._element).one(ge,function(){return nt.to(ue)});return}if(Ce===ue){this.pause(),this.cycle();return}var Le=ue>Ce?Ke:z;this._slide(Le,this._items[ue])}},ze.dispose=function(){e(this._element).off(p),e.removeData(this._element,v),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},ze._getConfig=function(ue){return ue=u(u({},Re),ue),t.typeCheckConfig(d,ue,Ve),ue},ze._handleSwipe=function(){var ue=Math.abs(this.touchDeltaX);if(!(ue<=ve)){var nt=ue/this.touchDeltaX;this.touchDeltaX=0,nt>0&&this.prev(),nt<0&&this.next()}},ze._addEventListeners=function(){var ue=this;this._config.keyboard&&e(this._element).on(se,function(nt){return ue._keydown(nt)}),this._config.pause==="hover"&&e(this._element).on(te,function(nt){return ue.pause(nt)}).on(L,function(nt){return ue.cycle(nt)}),this._config.touch&&this._addTouchEventListeners()},ze._addTouchEventListeners=function(){var ue=this;if(!!this._touchSupported){var nt=function(Je){ue._pointerEvent&&He[Je.originalEvent.pointerType.toUpperCase()]?ue.touchStartX=Je.originalEvent.clientX:ue._pointerEvent||(ue.touchStartX=Je.originalEvent.touches[0].clientX)},Ce=function(Je){Je.originalEvent.touches&&Je.originalEvent.touches.length>1?ue.touchDeltaX=0:ue.touchDeltaX=Je.originalEvent.touches[0].clientX-ue.touchStartX},Le=function(Je){ue._pointerEvent&&He[Je.originalEvent.pointerType.toUpperCase()]&&(ue.touchDeltaX=Je.originalEvent.clientX-ue.touchStartX),ue._handleSwipe(),ue._config.pause==="hover"&&(ue.pause(),ue.touchTimeout&&clearTimeout(ue.touchTimeout),ue.touchTimeout=setTimeout(function(kt){return ue.cycle(kt)},Se+ue._config.interval))};e(this._element.querySelectorAll(dt)).on(X,function(qe){return qe.preventDefault()}),this._pointerEvent?(e(this._element).on(j,function(qe){return nt(qe)}),e(this._element).on(q,function(qe){return Le(qe)}),this._element.classList.add(Ee)):(e(this._element).on(R,function(qe){return nt(qe)}),e(this._element).on(F,function(qe){return Ce(qe)}),e(this._element).on(H,function(qe){return Le(qe)}))}},ze._keydown=function(ue){if(!/input|textarea/i.test(ue.target.tagName))switch(ue.which){case V:ue.preventDefault(),this.prev();break;case ee:ue.preventDefault(),this.next();break}},ze._getItemIndex=function(ue){return this._items=ue&&ue.parentNode?[].slice.call(ue.parentNode.querySelectorAll(Ye)):[],this._items.indexOf(ue)},ze._getItemByDirection=function(ue,nt){var Ce=ue===Ke,Le=ue===z,qe=this._getItemIndex(nt),Je=this._items.length-1,kt=Le&&qe===0||Ce&&qe===Je;if(kt&&!this._config.wrap)return nt;var Vt=ue===z?-1:1,Ft=(qe+Vt)%this._items.length;return Ft===-1?this._items[this._items.length-1]:this._items[Ft]},ze._triggerSlideEvent=function(ue,nt){var Ce=this._getItemIndex(ue),Le=this._getItemIndex(this._element.querySelector(le)),qe=e.Event(re,{relatedTarget:ue,direction:nt,from:Le,to:Ce});return e(this._element).trigger(qe),qe},ze._setActiveIndicatorElement=function(ue){if(this._indicatorsElement){var nt=[].slice.call(this._indicatorsElement.querySelectorAll(Ie));e(nt).removeClass(Ze);var Ce=this._indicatorsElement.children[this._getItemIndex(ue)];Ce&&e(Ce).addClass(Ze)}},ze._slide=function(ue,nt){var Ce=this,Le=this._element.querySelector(le),qe=this._getItemIndex(Le),Je=nt||Le&&this._getItemByDirection(ue,Le),kt=this._getItemIndex(Je),Vt=Boolean(this._interval),Ft,mn,lt;if(ue===Ke?(Ft=we,mn=K,lt=l):(Ft=ye,mn=Q,lt=W),Je&&e(Je).hasClass(Ze)){this._isSliding=!1;return}var vn=this._triggerSlideEvent(Je,lt);if(!vn.isDefaultPrevented()&&!(!Le||!Je)){this._isSliding=!0,Vt&&this.pause(),this._setActiveIndicatorElement(Je);var yn=e.Event(ge,{relatedTarget:Je,direction:lt,from:qe,to:kt});if(e(this._element).hasClass(je)){e(Je).addClass(mn),t.reflow(Je),e(Le).addClass(Ft),e(Je).addClass(Ft);var Zt=parseInt(Je.getAttribute("data-interval"),10);Zt?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=Zt):this._config.interval=this._config.defaultInterval||this._config.interval;var Yt=t.getTransitionDurationFromElement(Le);e(Le).one(t.TRANSITION_END,function(){e(Je).removeClass(Ft+" "+mn).addClass(Ze),e(Le).removeClass(Ze+" "+mn+" "+Ft),Ce._isSliding=!1,setTimeout(function(){return e(Ce._element).trigger(yn)},0)}).emulateTransitionEnd(Yt)}else e(Le).removeClass(Ze),e(Je).addClass(Ze),this._isSliding=!1,e(this._element).trigger(yn);Vt&&this.cycle()}},ke._jQueryInterface=function(ue){return this.each(function(){var nt=e(this).data(v),Ce=u(u({},Re),e(this).data());typeof ue=="object"&&(Ce=u(u({},Ce),ue));var Le=typeof ue=="string"?ue:Ce.slide;if(nt||(nt=new ke(this,Ce),e(this).data(v,nt)),typeof ue=="number")nt.to(ue);else if(typeof Le=="string"){if(typeof nt[Le]=="undefined")throw new TypeError('No method named "'+Le+'"');nt[Le]()}else Ce.interval&&Ce.ride&&(nt.pause(),nt.cycle())})},ke._dataApiClickHandler=function(ue){var nt=t.getSelectorFromElement(this);if(!!nt){var Ce=e(nt)[0];if(!(!Ce||!e(Ce).hasClass(Fe))){var Le=u(u({},e(Ce).data()),e(this).data()),qe=this.getAttribute("data-slide-to");qe&&(Le.interval=!1),ke._jQueryInterface.call(e(Ce),Le),qe&&e(Ce).data(v).to(qe),ue.preventDefault()}}},r(ke,null,[{key:"VERSION",get:function(){return C}},{key:"Default",get:function(){return Re}}]),ke}();return e(document).on(Oe,We,oe._dataApiClickHandler),e(window).on(ne,function(){for(var ke=[].slice.call(document.querySelectorAll(Z)),ze=0,Ue=ke.length;ze<Ue;ze++){var ue=e(ke[ze]);oe._jQueryInterface.call(ue,ue.data())}}),e.fn[d]=oe._jQueryInterface,e.fn[d].Constructor=oe,e.fn[d].noConflict=function(){return e.fn[d]=A,oe._jQueryInterface},oe})});var la=mt((nr,ir)=>{(function(e,t){typeof nr=="object"&&typeof ir!="undefined"?ir.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.Collapse=t(e.jQuery,e.Util))})(nr,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(F,H){for(var j=0;j<H.length;j++){var q=H[j];q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(F,q.key,q)}}function r(F,H,j){return H&&n(F.prototype,H),j&&n(F,j),F}function s(F,H,j){return H in F?Object.defineProperty(F,H,{value:j,enumerable:!0,configurable:!0,writable:!0}):F[H]=j,F}function c(F,H){var j=Object.keys(F);if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(F);H&&(q=q.filter(function(X){return Object.getOwnPropertyDescriptor(F,X).enumerable})),j.push.apply(j,q)}return j}function u(F){for(var H=1;H<arguments.length;H++){var j=arguments[H]!=null?arguments[H]:{};H%2?c(Object(j),!0).forEach(function(q){s(F,q,j[q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(j)):c(Object(j)).forEach(function(q){Object.defineProperty(F,q,Object.getOwnPropertyDescriptor(j,q))})}return F}var d="collapse",C="4.5.0",v="bs.collapse",p="."+v,x=".data-api",A=e.fn[d],V={toggle:!0,parent:""},ee={toggle:"boolean",parent:"(string|element)"},Se="show"+p,ve="shown"+p,Re="hide"+p,Ve="hidden"+p,Ke="click"+p+x,z="show",l="collapse",W="collapsing",re="collapsed",ge="width",se="height",te=".show, .collapsing",L='[data-toggle="collapse"]',R=function(){function F(j,q){this._isTransitioning=!1,this._element=j,this._config=this._getConfig(q),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+j.id+'"],'+('[data-toggle="collapse"][data-target="#'+j.id+'"]')));for(var X=[].slice.call(document.querySelectorAll(L)),ne=0,Oe=X.length;ne<Oe;ne++){var Fe=X[ne],Ze=t.getSelectorFromElement(Fe),je=[].slice.call(document.querySelectorAll(Ze)).filter(function(ye){return ye===j});Ze!==null&&je.length>0&&(this._selector=Ze,this._triggerArray.push(Fe))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var H=F.prototype;return H.toggle=function(){e(this._element).hasClass(z)?this.hide():this.show()},H.show=function(){var q=this;if(!(this._isTransitioning||e(this._element).hasClass(z))){var X,ne;if(this._parent&&(X=[].slice.call(this._parent.querySelectorAll(te)).filter(function(K){return typeof q._config.parent=="string"?K.getAttribute("data-parent")===q._config.parent:K.classList.contains(l)}),X.length===0&&(X=null)),!(X&&(ne=e(X).not(this._selector).data(v),ne&&ne._isTransitioning))){var Oe=e.Event(Se);if(e(this._element).trigger(Oe),!Oe.isDefaultPrevented()){X&&(F._jQueryInterface.call(e(X).not(this._selector),"hide"),ne||e(X).data(v,null));var Fe=this._getDimension();e(this._element).removeClass(l).addClass(W),this._element.style[Fe]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(re).attr("aria-expanded",!0),this.setTransitioning(!0);var Ze=function(){e(q._element).removeClass(W).addClass(l+" "+z),q._element.style[Fe]="",q.setTransitioning(!1),e(q._element).trigger(ve)},je=Fe[0].toUpperCase()+Fe.slice(1),ye="scroll"+je,we=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,Ze).emulateTransitionEnd(we),this._element.style[Fe]=this._element[ye]+"px"}}}},H.hide=function(){var q=this;if(!(this._isTransitioning||!e(this._element).hasClass(z))){var X=e.Event(Re);if(e(this._element).trigger(X),!X.isDefaultPrevented()){var ne=this._getDimension();this._element.style[ne]=this._element.getBoundingClientRect()[ne]+"px",t.reflow(this._element),e(this._element).addClass(W).removeClass(l+" "+z);var Oe=this._triggerArray.length;if(Oe>0)for(var Fe=0;Fe<Oe;Fe++){var Ze=this._triggerArray[Fe],je=t.getSelectorFromElement(Ze);if(je!==null){var ye=e([].slice.call(document.querySelectorAll(je)));ye.hasClass(z)||e(Ze).addClass(re).attr("aria-expanded",!1)}}this.setTransitioning(!0);var we=function(){q.setTransitioning(!1),e(q._element).removeClass(W).addClass(l).trigger(Ve)};this._element.style[ne]="";var K=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,we).emulateTransitionEnd(K)}}},H.setTransitioning=function(q){this._isTransitioning=q},H.dispose=function(){e.removeData(this._element,v),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},H._getConfig=function(q){return q=u(u({},V),q),q.toggle=Boolean(q.toggle),t.typeCheckConfig(d,q,ee),q},H._getDimension=function(){var q=e(this._element).hasClass(ge);return q?ge:se},H._getParent=function(){var q=this,X;t.isElement(this._config.parent)?(X=this._config.parent,typeof this._config.parent.jquery!="undefined"&&(X=this._config.parent[0])):X=document.querySelector(this._config.parent);var ne='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',Oe=[].slice.call(X.querySelectorAll(ne));return e(Oe).each(function(Fe,Ze){q._addAriaAndCollapsedClass(F._getTargetFromElement(Ze),[Ze])}),X},H._addAriaAndCollapsedClass=function(q,X){var ne=e(q).hasClass(z);X.length&&e(X).toggleClass(re,!ne).attr("aria-expanded",ne)},F._getTargetFromElement=function(q){var X=t.getSelectorFromElement(q);return X?document.querySelector(X):null},F._jQueryInterface=function(q){return this.each(function(){var X=e(this),ne=X.data(v),Oe=u(u(u({},V),X.data()),typeof q=="object"&&q?q:{});if(!ne&&Oe.toggle&&typeof q=="string"&&/show|hide/.test(q)&&(Oe.toggle=!1),ne||(ne=new F(this,Oe),X.data(v,ne)),typeof q=="string"){if(typeof ne[q]=="undefined")throw new TypeError('No method named "'+q+'"');ne[q]()}})},r(F,null,[{key:"VERSION",get:function(){return C}},{key:"Default",get:function(){return V}}]),F}();return e(document).on(Ke,L,function(F){F.currentTarget.tagName==="A"&&F.preventDefault();var H=e(this),j=t.getSelectorFromElement(this),q=[].slice.call(document.querySelectorAll(j));e(q).each(function(){var X=e(this),ne=X.data(v),Oe=ne?"toggle":H.data();R._jQueryInterface.call(X,Oe)})}),e.fn[d]=R._jQueryInterface,e.fn[d].Constructor=R,e.fn[d].noConflict=function(){return e.fn[d]=A,R._jQueryInterface},R})});var sr=mt((rr,ar)=>{(function(e,t){typeof rr=="object"&&typeof ar!="undefined"?ar.exports=t():typeof define=="function"&&define.amd?define(t):e.Popper=t()})(rr,function(){"use strict";var e=typeof window!="undefined"&&typeof document!="undefined"&&typeof navigator!="undefined",t=function(){for(var y=["Edge","Trident","Firefox"],k=0;k<y.length;k+=1)if(e&&navigator.userAgent.indexOf(y[k])>=0)return 1;return 0}();function n(y){var k=!1;return function(){k||(k=!0,window.Promise.resolve().then(function(){k=!1,y()}))}}function r(y){var k=!1;return function(){k||(k=!0,setTimeout(function(){k=!1,y()},t))}}var s=e&&window.Promise,c=s?n:r;function u(y){var k={};return y&&k.toString.call(y)==="[object Function]"}function d(y,k){if(y.nodeType!==1)return[];var M=y.ownerDocument.defaultView,U=M.getComputedStyle(y,null);return k?U[k]:U}function C(y){return y.nodeName==="HTML"?y:y.parentNode||y.host}function v(y){if(!y)return document.body;switch(y.nodeName){case"HTML":case"BODY":return y.ownerDocument.body;case"#document":return y.body}var k=d(y),M=k.overflow,U=k.overflowX,he=k.overflowY;return/(auto|scroll|overlay)/.test(M+he+U)?y:v(C(y))}function p(y){return y&&y.referenceNode?y.referenceNode:y}var x=e&&!!(window.MSInputMethodContext&&document.documentMode),A=e&&/MSIE 10/.test(navigator.userAgent);function V(y){return y===11?x:y===10?A:x||A}function ee(y){if(!y)return document.documentElement;for(var k=V(10)?document.body:null,M=y.offsetParent||null;M===k&&y.nextElementSibling;)M=(y=y.nextElementSibling).offsetParent;var U=M&&M.nodeName;return!U||U==="BODY"||U==="HTML"?y?y.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(M.nodeName)!==-1&&d(M,"position")==="static"?ee(M):M}function Se(y){var k=y.nodeName;return k==="BODY"?!1:k==="HTML"||ee(y.firstElementChild)===y}function ve(y){return y.parentNode!==null?ve(y.parentNode):y}function Re(y,k){if(!y||!y.nodeType||!k||!k.nodeType)return document.documentElement;var M=y.compareDocumentPosition(k)&Node.DOCUMENT_POSITION_FOLLOWING,U=M?y:k,he=M?k:y,de=document.createRange();de.setStart(U,0),de.setEnd(he,0);var xe=de.commonAncestorContainer;if(y!==xe&&k!==xe||U.contains(he))return Se(xe)?xe:ee(xe);var Me=ve(y);return Me.host?Re(Me.host,k):Re(y,ve(k).host)}function Ve(y){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",M=k==="top"?"scrollTop":"scrollLeft",U=y.nodeName;if(U==="BODY"||U==="HTML"){var he=y.ownerDocument.documentElement,de=y.ownerDocument.scrollingElement||he;return de[M]}return y[M]}function Ke(y,k){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,U=Ve(k,"top"),he=Ve(k,"left"),de=M?-1:1;return y.top+=U*de,y.bottom+=U*de,y.left+=he*de,y.right+=he*de,y}function z(y,k){var M=k==="x"?"Left":"Top",U=M==="Left"?"Right":"Bottom";return parseFloat(y["border"+M+"Width"])+parseFloat(y["border"+U+"Width"])}function l(y,k,M,U){return Math.max(k["offset"+y],k["scroll"+y],M["client"+y],M["offset"+y],M["scroll"+y],V(10)?parseInt(M["offset"+y])+parseInt(U["margin"+(y==="Height"?"Top":"Left")])+parseInt(U["margin"+(y==="Height"?"Bottom":"Right")]):0)}function W(y){var k=y.body,M=y.documentElement,U=V(10)&&getComputedStyle(M);return{height:l("Height",k,M,U),width:l("Width",k,M,U)}}var re=function(y,k){if(!(y instanceof k))throw new TypeError("Cannot call a class as a function")},ge=function(){function y(k,M){for(var U=0;U<M.length;U++){var he=M[U];he.enumerable=he.enumerable||!1,he.configurable=!0,"value"in he&&(he.writable=!0),Object.defineProperty(k,he.key,he)}}return function(k,M,U){return M&&y(k.prototype,M),U&&y(k,U),k}}(),se=function(y,k,M){return k in y?Object.defineProperty(y,k,{value:M,enumerable:!0,configurable:!0,writable:!0}):y[k]=M,y},te=Object.assign||function(y){for(var k=1;k<arguments.length;k++){var M=arguments[k];for(var U in M)Object.prototype.hasOwnProperty.call(M,U)&&(y[U]=M[U])}return y};function L(y){return te({},y,{right:y.left+y.width,bottom:y.top+y.height})}function R(y){var k={};try{if(V(10)){k=y.getBoundingClientRect();var M=Ve(y,"top"),U=Ve(y,"left");k.top+=M,k.left+=U,k.bottom+=M,k.right+=U}else k=y.getBoundingClientRect()}catch(Xe){}var he={left:k.left,top:k.top,width:k.right-k.left,height:k.bottom-k.top},de=y.nodeName==="HTML"?W(y.ownerDocument):{},xe=de.width||y.clientWidth||he.width,Me=de.height||y.clientHeight||he.height,$e=y.offsetWidth-xe,Qe=y.offsetHeight-Me;if($e||Qe){var at=d(y);$e-=z(at,"x"),Qe-=z(at,"y"),he.width-=$e,he.height-=Qe}return L(he)}function F(y,k){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,U=V(10),he=k.nodeName==="HTML",de=R(y),xe=R(k),Me=v(y),$e=d(k),Qe=parseFloat($e.borderTopWidth),at=parseFloat($e.borderLeftWidth);M&&he&&(xe.top=Math.max(xe.top,0),xe.left=Math.max(xe.left,0));var Xe=L({top:de.top-xe.top-Qe,left:de.left-xe.left-at,width:de.width,height:de.height});if(Xe.marginTop=0,Xe.marginLeft=0,!U&&he){var pt=parseFloat($e.marginTop),et=parseFloat($e.marginLeft);Xe.top-=Qe-pt,Xe.bottom-=Qe-pt,Xe.left-=at-et,Xe.right-=at-et,Xe.marginTop=pt,Xe.marginLeft=et}return(U&&!M?k.contains(Me):k===Me&&Me.nodeName!=="BODY")&&(Xe=Ke(Xe,k)),Xe}function H(y){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,M=y.ownerDocument.documentElement,U=F(y,M),he=Math.max(M.clientWidth,window.innerWidth||0),de=Math.max(M.clientHeight,window.innerHeight||0),xe=k?0:Ve(M),Me=k?0:Ve(M,"left"),$e={top:xe-U.top+U.marginTop,left:Me-U.left+U.marginLeft,width:he,height:de};return L($e)}function j(y){var k=y.nodeName;if(k==="BODY"||k==="HTML")return!1;if(d(y,"position")==="fixed")return!0;var M=C(y);return M?j(M):!1}function q(y){if(!y||!y.parentElement||V())return document.documentElement;for(var k=y.parentElement;k&&d(k,"transform")==="none";)k=k.parentElement;return k||document.documentElement}function X(y,k,M,U){var he=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,de={top:0,left:0},xe=he?q(y):Re(y,p(k));if(U==="viewport")de=H(xe,he);else{var Me=void 0;U==="scrollParent"?(Me=v(C(k)),Me.nodeName==="BODY"&&(Me=y.ownerDocument.documentElement)):U==="window"?Me=y.ownerDocument.documentElement:Me=U;var $e=F(Me,xe,he);if(Me.nodeName==="HTML"&&!j(xe)){var Qe=W(y.ownerDocument),at=Qe.height,Xe=Qe.width;de.top+=$e.top-$e.marginTop,de.bottom=at+$e.top,de.left+=$e.left-$e.marginLeft,de.right=Xe+$e.left}else de=$e}M=M||0;var pt=typeof M=="number";return de.left+=pt?M:M.left||0,de.top+=pt?M:M.top||0,de.right-=pt?M:M.right||0,de.bottom-=pt?M:M.bottom||0,de}function ne(y){var k=y.width,M=y.height;return k*M}function Oe(y,k,M,U,he){var de=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(y.indexOf("auto")===-1)return y;var xe=X(M,U,de,he),Me={top:{width:xe.width,height:k.top-xe.top},right:{width:xe.right-k.right,height:xe.height},bottom:{width:xe.width,height:xe.bottom-k.bottom},left:{width:k.left-xe.left,height:xe.height}},$e=Object.keys(Me).map(function(pt){return te({key:pt},Me[pt],{area:ne(Me[pt])})}).sort(function(pt,et){return et.area-pt.area}),Qe=$e.filter(function(pt){var et=pt.width,tt=pt.height;return et>=M.clientWidth&&tt>=M.clientHeight}),at=Qe.length>0?Qe[0].key:$e[0].key,Xe=y.split("-")[1];return at+(Xe?"-"+Xe:"")}function Fe(y,k,M){var U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,he=U?q(k):Re(k,p(M));return F(M,he,U)}function Ze(y){var k=y.ownerDocument.defaultView,M=k.getComputedStyle(y),U=parseFloat(M.marginTop||0)+parseFloat(M.marginBottom||0),he=parseFloat(M.marginLeft||0)+parseFloat(M.marginRight||0),de={width:y.offsetWidth+he,height:y.offsetHeight+U};return de}function je(y){var k={left:"right",right:"left",bottom:"top",top:"bottom"};return y.replace(/left|right|bottom|top/g,function(M){return k[M]})}function ye(y,k,M){M=M.split("-")[0];var U=Ze(y),he={width:U.width,height:U.height},de=["right","left"].indexOf(M)!==-1,xe=de?"top":"left",Me=de?"left":"top",$e=de?"height":"width",Qe=de?"width":"height";return he[xe]=k[xe]+k[$e]/2-U[$e]/2,M===Me?he[Me]=k[Me]-U[Qe]:he[Me]=k[je(Me)],he}function we(y,k){return Array.prototype.find?y.find(k):y.filter(k)[0]}function K(y,k,M){if(Array.prototype.findIndex)return y.findIndex(function(he){return he[k]===M});var U=we(y,function(he){return he[k]===M});return y.indexOf(U)}function Q(y,k,M){var U=M===void 0?y:y.slice(0,K(y,"name",M));return U.forEach(function(he){he.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var de=he.function||he.fn;he.enabled&&u(de)&&(k.offsets.popper=L(k.offsets.popper),k.offsets.reference=L(k.offsets.reference),k=de(k,he))}),k}function Ee(){if(!this.state.isDestroyed){var y={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};y.offsets.reference=Fe(this.state,this.popper,this.reference,this.options.positionFixed),y.placement=Oe(this.options.placement,y.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),y.originalPlacement=y.placement,y.positionFixed=this.options.positionFixed,y.offsets.popper=ye(this.popper,y.offsets.reference,y.placement),y.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",y=Q(this.modifiers,y),this.state.isCreated?this.options.onUpdate(y):(this.state.isCreated=!0,this.options.onCreate(y))}}function Ie(y,k){return y.some(function(M){var U=M.name,he=M.enabled;return he&&U===k})}function le(y){for(var k=[!1,"ms","Webkit","Moz","O"],M=y.charAt(0).toUpperCase()+y.slice(1),U=0;U<k.length;U++){var he=k[U],de=he?""+he+M:y;if(typeof document.body.style[de]!="undefined")return de}return null}function Ye(){return this.state.isDestroyed=!0,Ie(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[le("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function dt(y){var k=y.ownerDocument;return k?k.defaultView:window}function ot(y,k,M,U){var he=y.nodeName==="BODY",de=he?y.ownerDocument.defaultView:y;de.addEventListener(k,M,{passive:!0}),he||ot(v(de.parentNode),k,M,U),U.push(de)}function gt(y,k,M,U){M.updateBound=U,dt(y).addEventListener("resize",M.updateBound,{passive:!0});var he=v(y);return ot(he,"scroll",M.updateBound,M.scrollParents),M.scrollElement=he,M.eventsEnabled=!0,M}function We(){this.state.eventsEnabled||(this.state=gt(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(y,k){return dt(y).removeEventListener("resize",k.updateBound),k.scrollParents.forEach(function(M){M.removeEventListener("scroll",k.updateBound)}),k.updateBound=null,k.scrollParents=[],k.scrollElement=null,k.eventsEnabled=!1,k}function He(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function oe(y){return y!==""&&!isNaN(parseFloat(y))&&isFinite(y)}function ke(y,k){Object.keys(k).forEach(function(M){var U="";["width","height","top","right","bottom","left"].indexOf(M)!==-1&&oe(k[M])&&(U="px"),y.style[M]=k[M]+U})}function ze(y,k){Object.keys(k).forEach(function(M){var U=k[M];U!==!1?y.setAttribute(M,k[M]):y.removeAttribute(M)})}function Ue(y){return ke(y.instance.popper,y.styles),ze(y.instance.popper,y.attributes),y.arrowElement&&Object.keys(y.arrowStyles).length&&ke(y.arrowElement,y.arrowStyles),y}function ue(y,k,M,U,he){var de=Fe(he,k,y,M.positionFixed),xe=Oe(M.placement,de,k,y,M.modifiers.flip.boundariesElement,M.modifiers.flip.padding);return k.setAttribute("x-placement",xe),ke(k,{position:M.positionFixed?"fixed":"absolute"}),M}function nt(y,k){var M=y.offsets,U=M.popper,he=M.reference,de=Math.round,xe=Math.floor,Me=function(Gt){return Gt},$e=de(he.width),Qe=de(U.width),at=["left","right"].indexOf(y.placement)!==-1,Xe=y.placement.indexOf("-")!==-1,pt=$e%2==Qe%2,et=$e%2==1&&Qe%2==1,tt=k?at||Xe||pt?de:xe:Me,Ct=k?de:Me;return{left:tt(et&&!Xe&&k?U.left-1:U.left),top:Ct(U.top),bottom:Ct(U.bottom),right:tt(U.right)}}var Ce=e&&/Firefox/i.test(navigator.userAgent);function Le(y,k){var M=k.x,U=k.y,he=y.offsets.popper,de=we(y.instance.modifiers,function(cn){return cn.name==="applyStyle"}).gpuAcceleration;de!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var xe=de!==void 0?de:k.gpuAcceleration,Me=ee(y.instance.popper),$e=R(Me),Qe={position:he.position},at=nt(y,window.devicePixelRatio<2||!Ce),Xe=M==="bottom"?"top":"bottom",pt=U==="right"?"left":"right",et=le("transform"),tt=void 0,Ct=void 0;if(Xe==="bottom"?Me.nodeName==="HTML"?Ct=-Me.clientHeight+at.bottom:Ct=-$e.height+at.bottom:Ct=at.top,pt==="right"?Me.nodeName==="HTML"?tt=-Me.clientWidth+at.right:tt=-$e.width+at.right:tt=at.left,xe&&et)Qe[et]="translate3d("+tt+"px, "+Ct+"px, 0)",Qe[Xe]=0,Qe[pt]=0,Qe.willChange="transform";else{var rn=Xe==="bottom"?-1:1,Gt=pt==="right"?-1:1;Qe[Xe]=Ct*rn,Qe[pt]=tt*Gt,Qe.willChange=Xe+", "+pt}var Xt={"x-placement":y.placement};return y.attributes=te({},Xt,y.attributes),y.styles=te({},Qe,y.styles),y.arrowStyles=te({},y.offsets.arrow,y.arrowStyles),y}function qe(y,k,M){var U=we(y,function(Me){var $e=Me.name;return $e===k}),he=!!U&&y.some(function(Me){return Me.name===M&&Me.enabled&&Me.order<U.order});if(!he){var de="`"+k+"`",xe="`"+M+"`";console.warn(xe+" modifier is required by "+de+" modifier in order to work, be sure to include it before "+de+"!")}return he}function Je(y,k){var M;if(!qe(y.instance.modifiers,"arrow","keepTogether"))return y;var U=k.element;if(typeof U=="string"){if(U=y.instance.popper.querySelector(U),!U)return y}else if(!y.instance.popper.contains(U))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),y;var he=y.placement.split("-")[0],de=y.offsets,xe=de.popper,Me=de.reference,$e=["left","right"].indexOf(he)!==-1,Qe=$e?"height":"width",at=$e?"Top":"Left",Xe=at.toLowerCase(),pt=$e?"left":"top",et=$e?"bottom":"right",tt=Ze(U)[Qe];Me[et]-tt<xe[Xe]&&(y.offsets.popper[Xe]-=xe[Xe]-(Me[et]-tt)),Me[Xe]+tt>xe[et]&&(y.offsets.popper[Xe]+=Me[Xe]+tt-xe[et]),y.offsets.popper=L(y.offsets.popper);var Ct=Me[Xe]+Me[Qe]/2-tt/2,rn=d(y.instance.popper),Gt=parseFloat(rn["margin"+at]),Xt=parseFloat(rn["border"+at+"Width"]),cn=Ct-y.offsets.popper[Xe]-Gt-Xt;return cn=Math.max(Math.min(xe[Qe]-tt,cn),0),y.arrowElement=U,y.offsets.arrow=(M={},se(M,Xe,Math.round(cn)),se(M,pt,""),M),y}function kt(y){return y==="end"?"start":y==="start"?"end":y}var Vt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Ft=Vt.slice(3);function mn(y){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,M=Ft.indexOf(y),U=Ft.slice(M+1).concat(Ft.slice(0,M));return k?U.reverse():U}var lt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function vn(y,k){if(Ie(y.instance.modifiers,"inner")||y.flipped&&y.placement===y.originalPlacement)return y;var M=X(y.instance.popper,y.instance.reference,k.padding,k.boundariesElement,y.positionFixed),U=y.placement.split("-")[0],he=je(U),de=y.placement.split("-")[1]||"",xe=[];switch(k.behavior){case lt.FLIP:xe=[U,he];break;case lt.CLOCKWISE:xe=mn(U);break;case lt.COUNTERCLOCKWISE:xe=mn(U,!0);break;default:xe=k.behavior}return xe.forEach(function(Me,$e){if(U!==Me||xe.length===$e+1)return y;U=y.placement.split("-")[0],he=je(U);var Qe=y.offsets.popper,at=y.offsets.reference,Xe=Math.floor,pt=U==="left"&&Xe(Qe.right)>Xe(at.left)||U==="right"&&Xe(Qe.left)<Xe(at.right)||U==="top"&&Xe(Qe.bottom)>Xe(at.top)||U==="bottom"&&Xe(Qe.top)<Xe(at.bottom),et=Xe(Qe.left)<Xe(M.left),tt=Xe(Qe.right)>Xe(M.right),Ct=Xe(Qe.top)<Xe(M.top),rn=Xe(Qe.bottom)>Xe(M.bottom),Gt=U==="left"&&et||U==="right"&&tt||U==="top"&&Ct||U==="bottom"&&rn,Xt=["top","bottom"].indexOf(U)!==-1,cn=!!k.flipVariations&&(Xt&&de==="start"&&et||Xt&&de==="end"&&tt||!Xt&&de==="start"&&Ct||!Xt&&de==="end"&&rn),Hn=!!k.flipVariationsByContent&&(Xt&&de==="start"&&tt||Xt&&de==="end"&&et||!Xt&&de==="start"&&rn||!Xt&&de==="end"&&Ct),wn=cn||Hn;(pt||Gt||wn)&&(y.flipped=!0,(pt||Gt)&&(U=xe[$e+1]),wn&&(de=kt(de)),y.placement=U+(de?"-"+de:""),y.offsets.popper=te({},y.offsets.popper,ye(y.instance.popper,y.offsets.reference,y.placement)),y=Q(y.instance.modifiers,y,"flip"))}),y}function yn(y){var k=y.offsets,M=k.popper,U=k.reference,he=y.placement.split("-")[0],de=Math.floor,xe=["top","bottom"].indexOf(he)!==-1,Me=xe?"right":"bottom",$e=xe?"left":"top",Qe=xe?"width":"height";return M[Me]<de(U[$e])&&(y.offsets.popper[$e]=de(U[$e])-M[Qe]),M[$e]>de(U[Me])&&(y.offsets.popper[$e]=de(U[Me])),y}function Zt(y,k,M,U){var he=y.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),de=+he[1],xe=he[2];if(!de)return y;if(xe.indexOf("%")===0){var Me=void 0;switch(xe){case"%p":Me=M;break;case"%":case"%r":default:Me=U}var $e=L(Me);return $e[k]/100*de}else if(xe==="vh"||xe==="vw"){var Qe=void 0;return xe==="vh"?Qe=Math.max(document.documentElement.clientHeight,window.innerHeight||0):Qe=Math.max(document.documentElement.clientWidth,window.innerWidth||0),Qe/100*de}else return de}function Yt(y,k,M,U){var he=[0,0],de=["right","left"].indexOf(U)!==-1,xe=y.split(/(\+|\-)/).map(function(at){return at.trim()}),Me=xe.indexOf(we(xe,function(at){return at.search(/,|\s/)!==-1}));xe[Me]&&xe[Me].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var $e=/\s*,\s*|\s+/,Qe=Me!==-1?[xe.slice(0,Me).concat([xe[Me].split($e)[0]]),[xe[Me].split($e)[1]].concat(xe.slice(Me+1))]:[xe];return Qe=Qe.map(function(at,Xe){var pt=(Xe===1?!de:de)?"height":"width",et=!1;return at.reduce(function(tt,Ct){return tt[tt.length-1]===""&&["+","-"].indexOf(Ct)!==-1?(tt[tt.length-1]=Ct,et=!0,tt):et?(tt[tt.length-1]+=Ct,et=!1,tt):tt.concat(Ct)},[]).map(function(tt){return Zt(tt,pt,k,M)})}),Qe.forEach(function(at,Xe){at.forEach(function(pt,et){oe(pt)&&(he[Xe]+=pt*(at[et-1]==="-"?-1:1))})}),he}function Mt(y,k){var M=k.offset,U=y.placement,he=y.offsets,de=he.popper,xe=he.reference,Me=U.split("-")[0],$e=void 0;return oe(+M)?$e=[+M,0]:$e=Yt(M,de,xe,Me),Me==="left"?(de.top+=$e[0],de.left-=$e[1]):Me==="right"?(de.top+=$e[0],de.left+=$e[1]):Me==="top"?(de.left+=$e[0],de.top-=$e[1]):Me==="bottom"&&(de.left+=$e[0],de.top+=$e[1]),y.popper=de,y}function zt(y,k){var M=k.boundariesElement||ee(y.instance.popper);y.instance.reference===M&&(M=ee(M));var U=le("transform"),he=y.instance.popper.style,de=he.top,xe=he.left,Me=he[U];he.top="",he.left="",he[U]="";var $e=X(y.instance.popper,y.instance.reference,k.padding,M,y.positionFixed);he.top=de,he.left=xe,he[U]=Me,k.boundaries=$e;var Qe=k.priority,at=y.offsets.popper,Xe={primary:function(et){var tt=at[et];return at[et]<$e[et]&&!k.escapeWithReference&&(tt=Math.max(at[et],$e[et])),se({},et,tt)},secondary:function(et){var tt=et==="right"?"left":"top",Ct=at[tt];return at[et]>$e[et]&&!k.escapeWithReference&&(Ct=Math.min(at[tt],$e[et]-(et==="right"?at.width:at.height))),se({},tt,Ct)}};return Qe.forEach(function(pt){var et=["left","top"].indexOf(pt)!==-1?"primary":"secondary";at=te({},at,Xe[et](pt))}),y.offsets.popper=at,y}function Zn(y){var k=y.placement,M=k.split("-")[0],U=k.split("-")[1];if(U){var he=y.offsets,de=he.reference,xe=he.popper,Me=["bottom","top"].indexOf(M)!==-1,$e=Me?"left":"top",Qe=Me?"width":"height",at={start:se({},$e,de[$e]),end:se({},$e,de[$e]+de[Qe]-xe[Qe])};y.offsets.popper=te({},xe,at[U])}return y}function zn(y){if(!qe(y.instance.modifiers,"hide","preventOverflow"))return y;var k=y.offsets.reference,M=we(y.instance.modifiers,function(U){return U.name==="preventOverflow"}).boundaries;if(k.bottom<M.top||k.left>M.right||k.top>M.bottom||k.right<M.left){if(y.hide===!0)return y;y.hide=!0,y.attributes["x-out-of-boundaries"]=""}else{if(y.hide===!1)return y;y.hide=!1,y.attributes["x-out-of-boundaries"]=!1}return y}function Rt(y){var k=y.placement,M=k.split("-")[0],U=y.offsets,he=U.popper,de=U.reference,xe=["left","right"].indexOf(M)!==-1,Me=["top","left"].indexOf(M)===-1;return he[xe?"left":"top"]=de[M]-(Me?he[xe?"width":"height"]:0),y.placement=je(k),y.offsets.popper=L(he),y}var wt={shift:{order:100,enabled:!0,fn:Zn},offset:{order:200,enabled:!0,fn:Mt,offset:0},preventOverflow:{order:300,enabled:!0,fn:zt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:yn},arrow:{order:500,enabled:!0,fn:Je,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:vn,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Rt},hide:{order:800,enabled:!0,fn:zn},computeStyle:{order:850,enabled:!0,fn:Le,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:Ue,onLoad:ue,gpuAcceleration:void 0}},On={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:wt},fn=function(){function y(k,M){var U=this,he=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};re(this,y),this.scheduleUpdate=function(){return requestAnimationFrame(U.update)},this.update=c(this.update.bind(this)),this.options=te({},y.Defaults,he),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=k&&k.jquery?k[0]:k,this.popper=M&&M.jquery?M[0]:M,this.options.modifiers={},Object.keys(te({},y.Defaults.modifiers,he.modifiers)).forEach(function(xe){U.options.modifiers[xe]=te({},y.Defaults.modifiers[xe]||{},he.modifiers?he.modifiers[xe]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(xe){return te({name:xe},U.options.modifiers[xe])}).sort(function(xe,Me){return xe.order-Me.order}),this.modifiers.forEach(function(xe){xe.enabled&&u(xe.onLoad)&&xe.onLoad(U.reference,U.popper,U.options,xe,U.state)}),this.update();var de=this.options.eventsEnabled;de&&this.enableEventListeners(),this.state.eventsEnabled=de}return ge(y,[{key:"update",value:function(){return Ee.call(this)}},{key:"destroy",value:function(){return Ye.call(this)}},{key:"enableEventListeners",value:function(){return We.call(this)}},{key:"disableEventListeners",value:function(){return He.call(this)}}]),y}();return fn.Utils=(typeof window!="undefined"?window:global).PopperUtils,fn.placements=Vt,fn.Defaults=On,fn})});var fa=mt((or,lr)=>{(function(e,t){typeof or=="object"&&typeof lr!="undefined"?lr.exports=t(ln(),sr(),Sn()):typeof define=="function"&&define.amd?define(["jquery","popper.js","./util.js"],t):(e=e||self,e.Dropdown=t(e.jQuery,e.Popper,e.Util))})(or,function(e,t,n){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function r(We,Z){for(var He=0;He<Z.length;He++){var oe=Z[He];oe.enumerable=oe.enumerable||!1,oe.configurable=!0,"value"in oe&&(oe.writable=!0),Object.defineProperty(We,oe.key,oe)}}function s(We,Z,He){return Z&&r(We.prototype,Z),He&&r(We,He),We}function c(We,Z,He){return Z in We?Object.defineProperty(We,Z,{value:He,enumerable:!0,configurable:!0,writable:!0}):We[Z]=He,We}function u(We,Z){var He=Object.keys(We);if(Object.getOwnPropertySymbols){var oe=Object.getOwnPropertySymbols(We);Z&&(oe=oe.filter(function(ke){return Object.getOwnPropertyDescriptor(We,ke).enumerable})),He.push.apply(He,oe)}return He}function d(We){for(var Z=1;Z<arguments.length;Z++){var He=arguments[Z]!=null?arguments[Z]:{};Z%2?u(Object(He),!0).forEach(function(oe){c(We,oe,He[oe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(We,Object.getOwnPropertyDescriptors(He)):u(Object(He)).forEach(function(oe){Object.defineProperty(We,oe,Object.getOwnPropertyDescriptor(He,oe))})}return We}var C="dropdown",v="4.5.0",p="bs.dropdown",x="."+p,A=".data-api",V=e.fn[C],ee=27,Se=32,ve=9,Re=38,Ve=40,Ke=3,z=new RegExp(Re+"|"+Ve+"|"+ee),l="hide"+x,W="hidden"+x,re="show"+x,ge="shown"+x,se="click"+x,te="click"+x+A,L="keydown"+x+A,R="keyup"+x+A,F="disabled",H="show",j="dropup",q="dropright",X="dropleft",ne="dropdown-menu-right",Oe="position-static",Fe='[data-toggle="dropdown"]',Ze=".dropdown form",je=".dropdown-menu",ye=".navbar-nav",we=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",K="top-start",Q="top-end",Ee="bottom-start",Ie="bottom-end",le="right-start",Ye="left-start",dt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},ot={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},gt=function(){function We(He,oe){this._element=He,this._popper=null,this._config=this._getConfig(oe),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var Z=We.prototype;return Z.toggle=function(){if(!(this._element.disabled||e(this._element).hasClass(F))){var oe=e(this._menu).hasClass(H);We._clearMenus(),!oe&&this.show(!0)}},Z.show=function(oe){if(oe===void 0&&(oe=!1),!(this._element.disabled||e(this._element).hasClass(F)||e(this._menu).hasClass(H))){var ke={relatedTarget:this._element},ze=e.Event(re,ke),Ue=We._getParentFromElement(this._element);if(e(Ue).trigger(ze),!ze.isDefaultPrevented()){if(!this._inNavbar&&oe){if(typeof t=="undefined")throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var ue=this._element;this._config.reference==="parent"?ue=Ue:n.isElement(this._config.reference)&&(ue=this._config.reference,typeof this._config.reference.jquery!="undefined"&&(ue=this._config.reference[0])),this._config.boundary!=="scrollParent"&&e(Ue).addClass(Oe),this._popper=new t(ue,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&e(Ue).closest(ye).length===0&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(H),e(Ue).toggleClass(H).trigger(e.Event(ge,ke))}}},Z.hide=function(){if(!(this._element.disabled||e(this._element).hasClass(F)||!e(this._menu).hasClass(H))){var oe={relatedTarget:this._element},ke=e.Event(l,oe),ze=We._getParentFromElement(this._element);e(ze).trigger(ke),!ke.isDefaultPrevented()&&(this._popper&&this._popper.destroy(),e(this._menu).toggleClass(H),e(ze).toggleClass(H).trigger(e.Event(W,oe)))}},Z.dispose=function(){e.removeData(this._element,p),e(this._element).off(x),this._element=null,this._menu=null,this._popper!==null&&(this._popper.destroy(),this._popper=null)},Z.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},Z._addEventListeners=function(){var oe=this;e(this._element).on(se,function(ke){ke.preventDefault(),ke.stopPropagation(),oe.toggle()})},Z._getConfig=function(oe){return oe=d(d(d({},this.constructor.Default),e(this._element).data()),oe),n.typeCheckConfig(C,oe,this.constructor.DefaultType),oe},Z._getMenuElement=function(){if(!this._menu){var oe=We._getParentFromElement(this._element);oe&&(this._menu=oe.querySelector(je))}return this._menu},Z._getPlacement=function(){var oe=e(this._element.parentNode),ke=Ee;return oe.hasClass(j)?ke=e(this._menu).hasClass(ne)?Q:K:oe.hasClass(q)?ke=le:oe.hasClass(X)?ke=Ye:e(this._menu).hasClass(ne)&&(ke=Ie),ke},Z._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},Z._getOffset=function(){var oe=this,ke={};return typeof this._config.offset=="function"?ke.fn=function(ze){return ze.offsets=d(d({},ze.offsets),oe._config.offset(ze.offsets,oe._element)||{}),ze}:ke.offset=this._config.offset,ke},Z._getPopperConfig=function(){var oe={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(oe.modifiers.applyStyle={enabled:!1}),d(d({},oe),this._config.popperConfig)},We._jQueryInterface=function(oe){return this.each(function(){var ke=e(this).data(p),ze=typeof oe=="object"?oe:null;if(ke||(ke=new We(this,ze),e(this).data(p,ke)),typeof oe=="string"){if(typeof ke[oe]=="undefined")throw new TypeError('No method named "'+oe+'"');ke[oe]()}})},We._clearMenus=function(oe){if(!(oe&&(oe.which===Ke||oe.type==="keyup"&&oe.which!==ve)))for(var ke=[].slice.call(document.querySelectorAll(Fe)),ze=0,Ue=ke.length;ze<Ue;ze++){var ue=We._getParentFromElement(ke[ze]),nt=e(ke[ze]).data(p),Ce={relatedTarget:ke[ze]};if(oe&&oe.type==="click"&&(Ce.clickEvent=oe),!!nt){var Le=nt._menu;if(!!e(ue).hasClass(H)&&!(oe&&(oe.type==="click"&&/input|textarea/i.test(oe.target.tagName)||oe.type==="keyup"&&oe.which===ve)&&e.contains(ue,oe.target))){var qe=e.Event(l,Ce);e(ue).trigger(qe),!qe.isDefaultPrevented()&&("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),ke[ze].setAttribute("aria-expanded","false"),nt._popper&&nt._popper.destroy(),e(Le).removeClass(H),e(ue).removeClass(H).trigger(e.Event(W,Ce)))}}}},We._getParentFromElement=function(oe){var ke,ze=n.getSelectorFromElement(oe);return ze&&(ke=document.querySelector(ze)),ke||oe.parentNode},We._dataApiKeydownHandler=function(oe){if(!(/input|textarea/i.test(oe.target.tagName)?oe.which===Se||oe.which!==ee&&(oe.which!==Ve&&oe.which!==Re||e(oe.target).closest(je).length):!z.test(oe.which))&&!(this.disabled||e(this).hasClass(F))){var ke=We._getParentFromElement(this),ze=e(ke).hasClass(H);if(!(!ze&&oe.which===ee)){if(oe.preventDefault(),oe.stopPropagation(),!ze||ze&&(oe.which===ee||oe.which===Se)){oe.which===ee&&e(ke.querySelector(Fe)).trigger("focus"),e(this).trigger("click");return}var Ue=[].slice.call(ke.querySelectorAll(we)).filter(function(nt){return e(nt).is(":visible")});if(Ue.length!==0){var ue=Ue.indexOf(oe.target);oe.which===Re&&ue>0&&ue--,oe.which===Ve&&ue<Ue.length-1&&ue++,ue<0&&(ue=0),Ue[ue].focus()}}}},s(We,null,[{key:"VERSION",get:function(){return v}},{key:"Default",get:function(){return dt}},{key:"DefaultType",get:function(){return ot}}]),We}();return e(document).on(L,Fe,gt._dataApiKeydownHandler).on(L,je,gt._dataApiKeydownHandler).on(te+" "+R,gt._clearMenus).on(te,Fe,function(We){We.preventDefault(),We.stopPropagation(),gt._jQueryInterface.call(e(this),"toggle")}).on(te,Ze,function(We){We.stopPropagation()}),e.fn[C]=gt._jQueryInterface,e.fn[C].Constructor=gt,e.fn[C].noConflict=function(){return e.fn[C]=V,gt._jQueryInterface},gt})});var ca=mt((fr,cr)=>{(function(e,t){typeof fr=="object"&&typeof cr!="undefined"?cr.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.Modal=t(e.jQuery,e.Util))})(fr,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(Q,Ee){for(var Ie=0;Ie<Ee.length;Ie++){var le=Ee[Ie];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(Q,le.key,le)}}function r(Q,Ee,Ie){return Ee&&n(Q.prototype,Ee),Ie&&n(Q,Ie),Q}function s(Q,Ee,Ie){return Ee in Q?Object.defineProperty(Q,Ee,{value:Ie,enumerable:!0,configurable:!0,writable:!0}):Q[Ee]=Ie,Q}function c(Q,Ee){var Ie=Object.keys(Q);if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(Q);Ee&&(le=le.filter(function(Ye){return Object.getOwnPropertyDescriptor(Q,Ye).enumerable})),Ie.push.apply(Ie,le)}return Ie}function u(Q){for(var Ee=1;Ee<arguments.length;Ee++){var Ie=arguments[Ee]!=null?arguments[Ee]:{};Ee%2?c(Object(Ie),!0).forEach(function(le){s(Q,le,Ie[le])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Q,Object.getOwnPropertyDescriptors(Ie)):c(Object(Ie)).forEach(function(le){Object.defineProperty(Q,le,Object.getOwnPropertyDescriptor(Ie,le))})}return Q}var d="modal",C="4.5.0",v="bs.modal",p="."+v,x=".data-api",A=e.fn[d],V=27,ee={backdrop:!0,keyboard:!0,focus:!0,show:!0},Se={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ve="hide"+p,Re="hidePrevented"+p,Ve="hidden"+p,Ke="show"+p,z="shown"+p,l="focusin"+p,W="resize"+p,re="click.dismiss"+p,ge="keydown.dismiss"+p,se="mouseup.dismiss"+p,te="mousedown.dismiss"+p,L="click"+p+x,R="modal-dialog-scrollable",F="modal-scrollbar-measure",H="modal-backdrop",j="modal-open",q="fade",X="show",ne="modal-static",Oe=".modal-dialog",Fe=".modal-body",Ze='[data-toggle="modal"]',je='[data-dismiss="modal"]',ye=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",we=".sticky-top",K=function(){function Q(Ie,le){this._config=this._getConfig(le),this._element=Ie,this._dialog=Ie.querySelector(Oe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var Ee=Q.prototype;return Ee.toggle=function(le){return this._isShown?this.hide():this.show(le)},Ee.show=function(le){var Ye=this;if(!(this._isShown||this._isTransitioning)){e(this._element).hasClass(q)&&(this._isTransitioning=!0);var dt=e.Event(Ke,{relatedTarget:le});e(this._element).trigger(dt),!(this._isShown||dt.isDefaultPrevented())&&(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(re,je,function(ot){return Ye.hide(ot)}),e(this._dialog).on(te,function(){e(Ye._element).one(se,function(ot){e(ot.target).is(Ye._element)&&(Ye._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return Ye._showElement(le)}))}},Ee.hide=function(le){var Ye=this;if(le&&le.preventDefault(),!(!this._isShown||this._isTransitioning)){var dt=e.Event(ve);if(e(this._element).trigger(dt),!(!this._isShown||dt.isDefaultPrevented())){this._isShown=!1;var ot=e(this._element).hasClass(q);if(ot&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(l),e(this._element).removeClass(X),e(this._element).off(re),e(this._dialog).off(te),ot){var gt=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(We){return Ye._hideModal(We)}).emulateTransitionEnd(gt)}else this._hideModal()}}},Ee.dispose=function(){[window,this._element,this._dialog].forEach(function(le){return e(le).off(p)}),e(document).off(l),e.removeData(this._element,v),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},Ee.handleUpdate=function(){this._adjustDialog()},Ee._getConfig=function(le){return le=u(u({},ee),le),t.typeCheckConfig(d,le,Se),le},Ee._triggerBackdropTransition=function(){var le=this;if(this._config.backdrop==="static"){var Ye=e.Event(Re);if(e(this._element).trigger(Ye),Ye.defaultPrevented)return;this._element.classList.add(ne);var dt=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,function(){le._element.classList.remove(ne)}).emulateTransitionEnd(dt),this._element.focus()}else this.hide()},Ee._showElement=function(le){var Ye=this,dt=e(this._element).hasClass(q),ot=this._dialog?this._dialog.querySelector(Fe):null;(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass(R)&&ot?ot.scrollTop=0:this._element.scrollTop=0,dt&&t.reflow(this._element),e(this._element).addClass(X),this._config.focus&&this._enforceFocus();var gt=e.Event(z,{relatedTarget:le}),We=function(){Ye._config.focus&&Ye._element.focus(),Ye._isTransitioning=!1,e(Ye._element).trigger(gt)};if(dt){var Z=t.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(t.TRANSITION_END,We).emulateTransitionEnd(Z)}else We()},Ee._enforceFocus=function(){var le=this;e(document).off(l).on(l,function(Ye){document!==Ye.target&&le._element!==Ye.target&&e(le._element).has(Ye.target).length===0&&le._element.focus()})},Ee._setEscapeEvent=function(){var le=this;this._isShown?e(this._element).on(ge,function(Ye){le._config.keyboard&&Ye.which===V?(Ye.preventDefault(),le.hide()):!le._config.keyboard&&Ye.which===V&&le._triggerBackdropTransition()}):this._isShown||e(this._element).off(ge)},Ee._setResizeEvent=function(){var le=this;this._isShown?e(window).on(W,function(Ye){return le.handleUpdate(Ye)}):e(window).off(W)},Ee._hideModal=function(){var le=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(j),le._resetAdjustments(),le._resetScrollbar(),e(le._element).trigger(Ve)})},Ee._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},Ee._showBackdrop=function(le){var Ye=this,dt=e(this._element).hasClass(q)?q:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=H,dt&&this._backdrop.classList.add(dt),e(this._backdrop).appendTo(document.body),e(this._element).on(re,function(Z){if(Ye._ignoreBackdropClick){Ye._ignoreBackdropClick=!1;return}Z.target===Z.currentTarget&&Ye._triggerBackdropTransition()}),dt&&t.reflow(this._backdrop),e(this._backdrop).addClass(X),!le)return;if(!dt){le();return}var ot=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,le).emulateTransitionEnd(ot)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(X);var gt=function(){Ye._removeBackdrop(),le&&le()};if(e(this._element).hasClass(q)){var We=t.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(t.TRANSITION_END,gt).emulateTransitionEnd(We)}else gt()}else le&&le()},Ee._adjustDialog=function(){var le=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&le&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!le&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},Ee._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},Ee._checkScrollbar=function(){var le=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(le.left+le.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},Ee._setScrollbar=function(){var le=this;if(this._isBodyOverflowing){var Ye=[].slice.call(document.querySelectorAll(ye)),dt=[].slice.call(document.querySelectorAll(we));e(Ye).each(function(We,Z){var He=Z.style.paddingRight,oe=e(Z).css("padding-right");e(Z).data("padding-right",He).css("padding-right",parseFloat(oe)+le._scrollbarWidth+"px")}),e(dt).each(function(We,Z){var He=Z.style.marginRight,oe=e(Z).css("margin-right");e(Z).data("margin-right",He).css("margin-right",parseFloat(oe)-le._scrollbarWidth+"px")});var ot=document.body.style.paddingRight,gt=e(document.body).css("padding-right");e(document.body).data("padding-right",ot).css("padding-right",parseFloat(gt)+this._scrollbarWidth+"px")}e(document.body).addClass(j)},Ee._resetScrollbar=function(){var le=[].slice.call(document.querySelectorAll(ye));e(le).each(function(ot,gt){var We=e(gt).data("padding-right");e(gt).removeData("padding-right"),gt.style.paddingRight=We||""});var Ye=[].slice.call(document.querySelectorAll(""+we));e(Ye).each(function(ot,gt){var We=e(gt).data("margin-right");typeof We!="undefined"&&e(gt).css("margin-right",We).removeData("margin-right")});var dt=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=dt||""},Ee._getScrollbarWidth=function(){var le=document.createElement("div");le.className=F,document.body.appendChild(le);var Ye=le.getBoundingClientRect().width-le.clientWidth;return document.body.removeChild(le),Ye},Q._jQueryInterface=function(le,Ye){return this.each(function(){var dt=e(this).data(v),ot=u(u(u({},ee),e(this).data()),typeof le=="object"&&le?le:{});if(dt||(dt=new Q(this,ot),e(this).data(v,dt)),typeof le=="string"){if(typeof dt[le]=="undefined")throw new TypeError('No method named "'+le+'"');dt[le](Ye)}else ot.show&&dt.show(Ye)})},r(Q,null,[{key:"VERSION",get:function(){return C}},{key:"Default",get:function(){return ee}}]),Q}();return e(document).on(L,Ze,function(Q){var Ee=this,Ie,le=t.getSelectorFromElement(this);le&&(Ie=document.querySelector(le));var Ye=e(Ie).data(v)?"toggle":u(u({},e(Ie).data()),e(this).data());(this.tagName==="A"||this.tagName==="AREA")&&Q.preventDefault();var dt=e(Ie).one(Ke,function(ot){ot.isDefaultPrevented()||dt.one(Ve,function(){e(Ee).is(":visible")&&Ee.focus()})});K._jQueryInterface.call(e(Ie),Ye,this)}),e.fn[d]=K._jQueryInterface,e.fn[d].Constructor=K,e.fn[d].noConflict=function(){return e.fn[d]=A,K._jQueryInterface},K})});var pr=mt((ur,dr)=>{(function(e,t){typeof ur=="object"&&typeof dr!="undefined"?dr.exports=t(ln(),sr(),Sn()):typeof define=="function"&&define.amd?define(["jquery","popper.js","./util.js"],t):(e=e||self,e.Tooltip=t(e.jQuery,e.Popper,e.Util))})(ur,function(e,t,n){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function r(je,ye){for(var we=0;we<ye.length;we++){var K=ye[we];K.enumerable=K.enumerable||!1,K.configurable=!0,"value"in K&&(K.writable=!0),Object.defineProperty(je,K.key,K)}}function s(je,ye,we){return ye&&r(je.prototype,ye),we&&r(je,we),je}function c(je,ye,we){return ye in je?Object.defineProperty(je,ye,{value:we,enumerable:!0,configurable:!0,writable:!0}):je[ye]=we,je}function u(je,ye){var we=Object.keys(je);if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(je);ye&&(K=K.filter(function(Q){return Object.getOwnPropertyDescriptor(je,Q).enumerable})),we.push.apply(we,K)}return we}function d(je){for(var ye=1;ye<arguments.length;ye++){var we=arguments[ye]!=null?arguments[ye]:{};ye%2?u(Object(we),!0).forEach(function(K){c(je,K,we[K])}):Object.getOwnPropertyDescriptors?Object.defineProperties(je,Object.getOwnPropertyDescriptors(we)):u(Object(we)).forEach(function(K){Object.defineProperty(je,K,Object.getOwnPropertyDescriptor(we,K))})}return je}var C=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],v=/^aria-[\w-]*$/i,p={"*":["class","dir","id","lang","role",v],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},x=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,A=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function V(je,ye){var we=je.nodeName.toLowerCase();if(ye.indexOf(we)!==-1)return C.indexOf(we)!==-1?Boolean(je.nodeValue.match(x)||je.nodeValue.match(A)):!0;for(var K=ye.filter(function(Ie){return Ie instanceof RegExp}),Q=0,Ee=K.length;Q<Ee;Q++)if(we.match(K[Q]))return!0;return!1}function ee(je,ye,we){if(je.length===0)return je;if(we&&typeof we=="function")return we(je);for(var K=new window.DOMParser,Q=K.parseFromString(je,"text/html"),Ee=Object.keys(ye),Ie=[].slice.call(Q.body.querySelectorAll("*")),le=function(We,Z){var He=Ie[We],oe=He.nodeName.toLowerCase();if(Ee.indexOf(He.nodeName.toLowerCase())===-1)return He.parentNode.removeChild(He),"continue";var ke=[].slice.call(He.attributes),ze=[].concat(ye["*"]||[],ye[oe]||[]);ke.forEach(function(Ue){V(Ue,ze)||He.removeAttribute(Ue.nodeName)})},Ye=0,dt=Ie.length;Ye<dt;Ye++)var ot=le(Ye);return Q.body.innerHTML}var Se="tooltip",ve="4.5.0",Re="bs.tooltip",Ve="."+Re,Ke=e.fn[Se],z="bs-tooltip",l=new RegExp("(^|\\s)"+z+"\\S+","g"),W=["sanitize","whiteList","sanitizeFn"],re={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},ge={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},se={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:p,popperConfig:null},te="show",L="out",R={HIDE:"hide"+Ve,HIDDEN:"hidden"+Ve,SHOW:"show"+Ve,SHOWN:"shown"+Ve,INSERTED:"inserted"+Ve,CLICK:"click"+Ve,FOCUSIN:"focusin"+Ve,FOCUSOUT:"focusout"+Ve,MOUSEENTER:"mouseenter"+Ve,MOUSELEAVE:"mouseleave"+Ve},F="fade",H="show",j=".tooltip-inner",q=".arrow",X="hover",ne="focus",Oe="click",Fe="manual",Ze=function(){function je(we,K){if(typeof t=="undefined")throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=we,this.config=this._getConfig(K),this.tip=null,this._setListeners()}var ye=je.prototype;return ye.enable=function(){this._isEnabled=!0},ye.disable=function(){this._isEnabled=!1},ye.toggleEnabled=function(){this._isEnabled=!this._isEnabled},ye.toggle=function(K){if(!!this._isEnabled)if(K){var Q=this.constructor.DATA_KEY,Ee=e(K.currentTarget).data(Q);Ee||(Ee=new this.constructor(K.currentTarget,this._getDelegateConfig()),e(K.currentTarget).data(Q,Ee)),Ee._activeTrigger.click=!Ee._activeTrigger.click,Ee._isWithActiveTrigger()?Ee._enter(null,Ee):Ee._leave(null,Ee)}else{if(e(this.getTipElement()).hasClass(H)){this._leave(null,this);return}this._enter(null,this)}},ye.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},ye.show=function(){var K=this;if(e(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var Q=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(Q);var Ee=n.findShadowRoot(this.element),Ie=e.contains(Ee!==null?Ee:this.element.ownerDocument.documentElement,this.element);if(Q.isDefaultPrevented()||!Ie)return;var le=this.getTipElement(),Ye=n.getUID(this.constructor.NAME);le.setAttribute("id",Ye),this.element.setAttribute("aria-describedby",Ye),this.setContent(),this.config.animation&&e(le).addClass(F);var dt=typeof this.config.placement=="function"?this.config.placement.call(this,le,this.element):this.config.placement,ot=this._getAttachment(dt);this.addAttachmentClass(ot);var gt=this._getContainer();e(le).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(le).appendTo(gt),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new t(this.element,le,this._getPopperConfig(ot)),e(le).addClass(H),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var We=function(){K.config.animation&&K._fixTransition();var oe=K._hoverState;K._hoverState=null,e(K.element).trigger(K.constructor.Event.SHOWN),oe===L&&K._leave(null,K)};if(e(this.tip).hasClass(F)){var Z=n.getTransitionDurationFromElement(this.tip);e(this.tip).one(n.TRANSITION_END,We).emulateTransitionEnd(Z)}else We()}},ye.hide=function(K){var Q=this,Ee=this.getTipElement(),Ie=e.Event(this.constructor.Event.HIDE),le=function(){Q._hoverState!==te&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),Q._cleanTipClass(),Q.element.removeAttribute("aria-describedby"),e(Q.element).trigger(Q.constructor.Event.HIDDEN),Q._popper!==null&&Q._popper.destroy(),K&&K()};if(e(this.element).trigger(Ie),!Ie.isDefaultPrevented()){if(e(Ee).removeClass(H),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[Oe]=!1,this._activeTrigger[ne]=!1,this._activeTrigger[X]=!1,e(this.tip).hasClass(F)){var Ye=n.getTransitionDurationFromElement(Ee);e(Ee).one(n.TRANSITION_END,le).emulateTransitionEnd(Ye)}else le();this._hoverState=""}},ye.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},ye.isWithContent=function(){return Boolean(this.getTitle())},ye.addAttachmentClass=function(K){e(this.getTipElement()).addClass(z+"-"+K)},ye.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},ye.setContent=function(){var K=this.getTipElement();this.setElementContent(e(K.querySelectorAll(j)),this.getTitle()),e(K).removeClass(F+" "+H)},ye.setElementContent=function(K,Q){if(typeof Q=="object"&&(Q.nodeType||Q.jquery)){this.config.html?e(Q).parent().is(K)||K.empty().append(Q):K.text(e(Q).text());return}this.config.html?(this.config.sanitize&&(Q=ee(Q,this.config.whiteList,this.config.sanitizeFn)),K.html(Q)):K.text(Q)},ye.getTitle=function(){var K=this.element.getAttribute("data-original-title");return K||(K=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),K},ye._getPopperConfig=function(K){var Q=this,Ee={placement:K,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:q},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(le){le.originalPlacement!==le.placement&&Q._handlePopperPlacementChange(le)},onUpdate:function(le){return Q._handlePopperPlacementChange(le)}};return d(d({},Ee),this.config.popperConfig)},ye._getOffset=function(){var K=this,Q={};return typeof this.config.offset=="function"?Q.fn=function(Ee){return Ee.offsets=d(d({},Ee.offsets),K.config.offset(Ee.offsets,K.element)||{}),Ee}:Q.offset=this.config.offset,Q},ye._getContainer=function(){return this.config.container===!1?document.body:n.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},ye._getAttachment=function(K){return ge[K.toUpperCase()]},ye._setListeners=function(){var K=this,Q=this.config.trigger.split(" ");Q.forEach(function(Ee){if(Ee==="click")e(K.element).on(K.constructor.Event.CLICK,K.config.selector,function(Ye){return K.toggle(Ye)});else if(Ee!==Fe){var Ie=Ee===X?K.constructor.Event.MOUSEENTER:K.constructor.Event.FOCUSIN,le=Ee===X?K.constructor.Event.MOUSELEAVE:K.constructor.Event.FOCUSOUT;e(K.element).on(Ie,K.config.selector,function(Ye){return K._enter(Ye)}).on(le,K.config.selector,function(Ye){return K._leave(Ye)})}}),this._hideModalHandler=function(){K.element&&K.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=d(d({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},ye._fixTitle=function(){var K=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||K!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},ye._enter=function(K,Q){var Ee=this.constructor.DATA_KEY;if(Q=Q||e(K.currentTarget).data(Ee),Q||(Q=new this.constructor(K.currentTarget,this._getDelegateConfig()),e(K.currentTarget).data(Ee,Q)),K&&(Q._activeTrigger[K.type==="focusin"?ne:X]=!0),e(Q.getTipElement()).hasClass(H)||Q._hoverState===te){Q._hoverState=te;return}if(clearTimeout(Q._timeout),Q._hoverState=te,!Q.config.delay||!Q.config.delay.show){Q.show();return}Q._timeout=setTimeout(function(){Q._hoverState===te&&Q.show()},Q.config.delay.show)},ye._leave=function(K,Q){var Ee=this.constructor.DATA_KEY;if(Q=Q||e(K.currentTarget).data(Ee),Q||(Q=new this.constructor(K.currentTarget,this._getDelegateConfig()),e(K.currentTarget).data(Ee,Q)),K&&(Q._activeTrigger[K.type==="focusout"?ne:X]=!1),!Q._isWithActiveTrigger()){if(clearTimeout(Q._timeout),Q._hoverState=L,!Q.config.delay||!Q.config.delay.hide){Q.hide();return}Q._timeout=setTimeout(function(){Q._hoverState===L&&Q.hide()},Q.config.delay.hide)}},ye._isWithActiveTrigger=function(){for(var K in this._activeTrigger)if(this._activeTrigger[K])return!0;return!1},ye._getConfig=function(K){var Q=e(this.element).data();return Object.keys(Q).forEach(function(Ee){W.indexOf(Ee)!==-1&&delete Q[Ee]}),K=d(d(d({},this.constructor.Default),Q),typeof K=="object"&&K?K:{}),typeof K.delay=="number"&&(K.delay={show:K.delay,hide:K.delay}),typeof K.title=="number"&&(K.title=K.title.toString()),typeof K.content=="number"&&(K.content=K.content.toString()),n.typeCheckConfig(Se,K,this.constructor.DefaultType),K.sanitize&&(K.template=ee(K.template,K.whiteList,K.sanitizeFn)),K},ye._getDelegateConfig=function(){var K={};if(this.config)for(var Q in this.config)this.constructor.Default[Q]!==this.config[Q]&&(K[Q]=this.config[Q]);return K},ye._cleanTipClass=function(){var K=e(this.getTipElement()),Q=K.attr("class").match(l);Q!==null&&Q.length&&K.removeClass(Q.join(""))},ye._handlePopperPlacementChange=function(K){this.tip=K.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(K.placement))},ye._fixTransition=function(){var K=this.getTipElement(),Q=this.config.animation;K.getAttribute("x-placement")===null&&(e(K).removeClass(F),this.config.animation=!1,this.hide(),this.show(),this.config.animation=Q)},je._jQueryInterface=function(K){return this.each(function(){var Q=e(this).data(Re),Ee=typeof K=="object"&&K;if(!(!Q&&/dispose|hide/.test(K))&&(Q||(Q=new je(this,Ee),e(this).data(Re,Q)),typeof K=="string")){if(typeof Q[K]=="undefined")throw new TypeError('No method named "'+K+'"');Q[K]()}})},s(je,null,[{key:"VERSION",get:function(){return ve}},{key:"Default",get:function(){return se}},{key:"NAME",get:function(){return Se}},{key:"DATA_KEY",get:function(){return Re}},{key:"Event",get:function(){return R}},{key:"EVENT_KEY",get:function(){return Ve}},{key:"DefaultType",get:function(){return re}}]),je}();return e.fn[Se]=Ze._jQueryInterface,e.fn[Se].Constructor=Ze,e.fn[Se].noConflict=function(){return e.fn[Se]=Ke,Ze._jQueryInterface},Ze})});var ua=mt((hr,_r)=>{(function(e,t){typeof hr=="object"&&typeof _r!="undefined"?_r.exports=t(ln(),pr()):typeof define=="function"&&define.amd?define(["jquery","./tooltip.js"],t):(e=e||self,e.Popover=t(e.jQuery,e.Tooltip))})(hr,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(re,ge){for(var se=0;se<ge.length;se++){var te=ge[se];te.enumerable=te.enumerable||!1,te.configurable=!0,"value"in te&&(te.writable=!0),Object.defineProperty(re,te.key,te)}}function r(re,ge,se){return ge&&n(re.prototype,ge),se&&n(re,se),re}function s(re,ge,se){return ge in re?Object.defineProperty(re,ge,{value:se,enumerable:!0,configurable:!0,writable:!0}):re[ge]=se,re}function c(re,ge){var se=Object.keys(re);if(Object.getOwnPropertySymbols){var te=Object.getOwnPropertySymbols(re);ge&&(te=te.filter(function(L){return Object.getOwnPropertyDescriptor(re,L).enumerable})),se.push.apply(se,te)}return se}function u(re){for(var ge=1;ge<arguments.length;ge++){var se=arguments[ge]!=null?arguments[ge]:{};ge%2?c(Object(se),!0).forEach(function(te){s(re,te,se[te])}):Object.getOwnPropertyDescriptors?Object.defineProperties(re,Object.getOwnPropertyDescriptors(se)):c(Object(se)).forEach(function(te){Object.defineProperty(re,te,Object.getOwnPropertyDescriptor(se,te))})}return re}function d(re,ge){re.prototype=Object.create(ge.prototype),re.prototype.constructor=re,re.__proto__=ge}var C="popover",v="4.5.0",p="bs.popover",x="."+p,A=e.fn[C],V="bs-popover",ee=new RegExp("(^|\\s)"+V+"\\S+","g"),Se=u(u({},t.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ve=u(u({},t.DefaultType),{},{content:"(string|element|function)"}),Re="fade",Ve="show",Ke=".popover-header",z=".popover-body",l={HIDE:"hide"+x,HIDDEN:"hidden"+x,SHOW:"show"+x,SHOWN:"shown"+x,INSERTED:"inserted"+x,CLICK:"click"+x,FOCUSIN:"focusin"+x,FOCUSOUT:"focusout"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x},W=function(re){d(ge,re);function ge(){return re.apply(this,arguments)||this}var se=ge.prototype;return se.isWithContent=function(){return this.getTitle()||this._getContent()},se.addAttachmentClass=function(L){e(this.getTipElement()).addClass(V+"-"+L)},se.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},se.setContent=function(){var L=e(this.getTipElement());this.setElementContent(L.find(Ke),this.getTitle());var R=this._getContent();typeof R=="function"&&(R=R.call(this.element)),this.setElementContent(L.find(z),R),L.removeClass(Re+" "+Ve)},se._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},se._cleanTipClass=function(){var L=e(this.getTipElement()),R=L.attr("class").match(ee);R!==null&&R.length>0&&L.removeClass(R.join(""))},ge._jQueryInterface=function(L){return this.each(function(){var R=e(this).data(p),F=typeof L=="object"?L:null;if(!(!R&&/dispose|hide/.test(L))&&(R||(R=new ge(this,F),e(this).data(p,R)),typeof L=="string")){if(typeof R[L]=="undefined")throw new TypeError('No method named "'+L+'"');R[L]()}})},r(ge,null,[{key:"VERSION",get:function(){return v}},{key:"Default",get:function(){return Se}},{key:"NAME",get:function(){return C}},{key:"DATA_KEY",get:function(){return p}},{key:"Event",get:function(){return l}},{key:"EVENT_KEY",get:function(){return x}},{key:"DefaultType",get:function(){return ve}}]),ge}(t);return e.fn[C]=W._jQueryInterface,e.fn[C].Constructor=W,e.fn[C].noConflict=function(){return e.fn[C]=A,W._jQueryInterface},W})});var da=mt((gr,mr)=>{(function(e,t){typeof gr=="object"&&typeof mr!="undefined"?mr.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.ScrollSpy=t(e.jQuery,e.Util))})(gr,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(j,q){for(var X=0;X<q.length;X++){var ne=q[X];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(j,ne.key,ne)}}function r(j,q,X){return q&&n(j.prototype,q),X&&n(j,X),j}function s(j,q,X){return q in j?Object.defineProperty(j,q,{value:X,enumerable:!0,configurable:!0,writable:!0}):j[q]=X,j}function c(j,q){var X=Object.keys(j);if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(j);q&&(ne=ne.filter(function(Oe){return Object.getOwnPropertyDescriptor(j,Oe).enumerable})),X.push.apply(X,ne)}return X}function u(j){for(var q=1;q<arguments.length;q++){var X=arguments[q]!=null?arguments[q]:{};q%2?c(Object(X),!0).forEach(function(ne){s(j,ne,X[ne])}):Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(X)):c(Object(X)).forEach(function(ne){Object.defineProperty(j,ne,Object.getOwnPropertyDescriptor(X,ne))})}return j}var d="scrollspy",C="4.5.0",v="bs.scrollspy",p="."+v,x=".data-api",A=e.fn[d],V={offset:10,method:"auto",target:""},ee={offset:"number",method:"string",target:"(string|element)"},Se="activate"+p,ve="scroll"+p,Re="load"+p+x,Ve="dropdown-item",Ke="active",z='[data-spy="scroll"]',l=".nav, .list-group",W=".nav-link",re=".nav-item",ge=".list-group-item",se=".dropdown",te=".dropdown-item",L=".dropdown-toggle",R="offset",F="position",H=function(){function j(X,ne){var Oe=this;this._element=X,this._scrollElement=X.tagName==="BODY"?window:X,this._config=this._getConfig(ne),this._selector=this._config.target+" "+W+","+(this._config.target+" "+ge+",")+(this._config.target+" "+te),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(ve,function(Fe){return Oe._process(Fe)}),this.refresh(),this._process()}var q=j.prototype;return q.refresh=function(){var ne=this,Oe=this._scrollElement===this._scrollElement.window?R:F,Fe=this._config.method==="auto"?Oe:this._config.method,Ze=Fe===F?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var je=[].slice.call(document.querySelectorAll(this._selector));je.map(function(ye){var we,K=t.getSelectorFromElement(ye);if(K&&(we=document.querySelector(K)),we){var Q=we.getBoundingClientRect();if(Q.width||Q.height)return[e(we)[Fe]().top+Ze,K]}return null}).filter(function(ye){return ye}).sort(function(ye,we){return ye[0]-we[0]}).forEach(function(ye){ne._offsets.push(ye[0]),ne._targets.push(ye[1])})},q.dispose=function(){e.removeData(this._element,v),e(this._scrollElement).off(p),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},q._getConfig=function(ne){if(ne=u(u({},V),typeof ne=="object"&&ne?ne:{}),typeof ne.target!="string"&&t.isElement(ne.target)){var Oe=e(ne.target).attr("id");Oe||(Oe=t.getUID(d),e(ne.target).attr("id",Oe)),ne.target="#"+Oe}return t.typeCheckConfig(d,ne,ee),ne},q._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},q._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},q._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},q._process=function(){var ne=this._getScrollTop()+this._config.offset,Oe=this._getScrollHeight(),Fe=this._config.offset+Oe-this._getOffsetHeight();if(this._scrollHeight!==Oe&&this.refresh(),ne>=Fe){var Ze=this._targets[this._targets.length-1];this._activeTarget!==Ze&&this._activate(Ze);return}if(this._activeTarget&&ne<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(var je=this._offsets.length;je--;){var ye=this._activeTarget!==this._targets[je]&&ne>=this._offsets[je]&&(typeof this._offsets[je+1]=="undefined"||ne<this._offsets[je+1]);ye&&this._activate(this._targets[je])}},q._activate=function(ne){this._activeTarget=ne,this._clear();var Oe=this._selector.split(",").map(function(Ze){return Ze+'[data-target="'+ne+'"],'+Ze+'[href="'+ne+'"]'}),Fe=e([].slice.call(document.querySelectorAll(Oe.join(","))));Fe.hasClass(Ve)?(Fe.closest(se).find(L).addClass(Ke),Fe.addClass(Ke)):(Fe.addClass(Ke),Fe.parents(l).prev(W+", "+ge).addClass(Ke),Fe.parents(l).prev(re).children(W).addClass(Ke)),e(this._scrollElement).trigger(Se,{relatedTarget:ne})},q._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(ne){return ne.classList.contains(Ke)}).forEach(function(ne){return ne.classList.remove(Ke)})},j._jQueryInterface=function(ne){return this.each(function(){var Oe=e(this).data(v),Fe=typeof ne=="object"&&ne;if(Oe||(Oe=new j(this,Fe),e(this).data(v,Oe)),typeof ne=="string"){if(typeof Oe[ne]=="undefined")throw new TypeError('No method named "'+ne+'"');Oe[ne]()}})},r(j,null,[{key:"VERSION",get:function(){return C}},{key:"Default",get:function(){return V}}]),j}();return e(window).on(Re,function(){for(var j=[].slice.call(document.querySelectorAll(z)),q=j.length,X=q;X--;){var ne=e(j[X]);H._jQueryInterface.call(ne,ne.data())}}),e.fn[d]=H._jQueryInterface,e.fn[d].Constructor=H,e.fn[d].noConflict=function(){return e.fn[d]=A,H._jQueryInterface},H})});var pa=mt((vr,br)=>{(function(e,t){typeof vr=="object"&&typeof br!="undefined"?br.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.Tab=t(e.jQuery,e.Util))})(vr,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(R,F){for(var H=0;H<F.length;H++){var j=F[H];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(R,j.key,j)}}function r(R,F,H){return F&&n(R.prototype,F),H&&n(R,H),R}var s="tab",c="4.5.0",u="bs.tab",d="."+u,C=".data-api",v=e.fn[s],p="hide"+d,x="hidden"+d,A="show"+d,V="shown"+d,ee="click"+d+C,Se="dropdown-menu",ve="active",Re="disabled",Ve="fade",Ke="show",z=".dropdown",l=".nav, .list-group",W=".active",re="> li > .active",ge='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',se=".dropdown-toggle",te="> .dropdown-menu .active",L=function(){function R(H){this._element=H}var F=R.prototype;return F.show=function(){var j=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(ve)||e(this._element).hasClass(Re))){var q,X,ne=e(this._element).closest(l)[0],Oe=t.getSelectorFromElement(this._element);if(ne){var Fe=ne.nodeName==="UL"||ne.nodeName==="OL"?re:W;X=e.makeArray(e(ne).find(Fe)),X=X[X.length-1]}var Ze=e.Event(p,{relatedTarget:this._element}),je=e.Event(A,{relatedTarget:X});if(X&&e(X).trigger(Ze),e(this._element).trigger(je),!(je.isDefaultPrevented()||Ze.isDefaultPrevented())){Oe&&(q=document.querySelector(Oe)),this._activate(this._element,ne);var ye=function(){var K=e.Event(x,{relatedTarget:j._element}),Q=e.Event(V,{relatedTarget:X});e(X).trigger(K),e(j._element).trigger(Q)};q?this._activate(q,q.parentNode,ye):ye()}}},F.dispose=function(){e.removeData(this._element,u),this._element=null},F._activate=function(j,q,X){var ne=this,Oe=q&&(q.nodeName==="UL"||q.nodeName==="OL")?e(q).find(re):e(q).children(W),Fe=Oe[0],Ze=X&&Fe&&e(Fe).hasClass(Ve),je=function(){return ne._transitionComplete(j,Fe,X)};if(Fe&&Ze){var ye=t.getTransitionDurationFromElement(Fe);e(Fe).removeClass(Ke).one(t.TRANSITION_END,je).emulateTransitionEnd(ye)}else je()},F._transitionComplete=function(j,q,X){if(q){e(q).removeClass(ve);var ne=e(q.parentNode).find(te)[0];ne&&e(ne).removeClass(ve),q.getAttribute("role")==="tab"&&q.setAttribute("aria-selected",!1)}if(e(j).addClass(ve),j.getAttribute("role")==="tab"&&j.setAttribute("aria-selected",!0),t.reflow(j),j.classList.contains(Ve)&&j.classList.add(Ke),j.parentNode&&e(j.parentNode).hasClass(Se)){var Oe=e(j).closest(z)[0];if(Oe){var Fe=[].slice.call(Oe.querySelectorAll(se));e(Fe).addClass(ve)}j.setAttribute("aria-expanded",!0)}X&&X()},R._jQueryInterface=function(j){return this.each(function(){var q=e(this),X=q.data(u);if(X||(X=new R(this),q.data(u,X)),typeof j=="string"){if(typeof X[j]=="undefined")throw new TypeError('No method named "'+j+'"');X[j]()}})},r(R,null,[{key:"VERSION",get:function(){return c}}]),R}();return e(document).on(ee,ge,function(R){R.preventDefault(),L._jQueryInterface.call(e(this),"show")}),e.fn[s]=L._jQueryInterface,e.fn[s].Constructor=L,e.fn[s].noConflict=function(){return e.fn[s]=v,L._jQueryInterface},L})});var ha=mt((yr,wr)=>{(function(e,t){typeof yr=="object"&&typeof wr!="undefined"?wr.exports=t(ln(),Sn()):typeof define=="function"&&define.amd?define(["jquery","./util.js"],t):(e=e||self,e.Toast=t(e.jQuery,e.Util))})(yr,function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(se,te){for(var L=0;L<te.length;L++){var R=te[L];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(se,R.key,R)}}function r(se,te,L){return te&&n(se.prototype,te),L&&n(se,L),se}function s(se,te,L){return te in se?Object.defineProperty(se,te,{value:L,enumerable:!0,configurable:!0,writable:!0}):se[te]=L,se}function c(se,te){var L=Object.keys(se);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(se);te&&(R=R.filter(function(F){return Object.getOwnPropertyDescriptor(se,F).enumerable})),L.push.apply(L,R)}return L}function u(se){for(var te=1;te<arguments.length;te++){var L=arguments[te]!=null?arguments[te]:{};te%2?c(Object(L),!0).forEach(function(R){s(se,R,L[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(se,Object.getOwnPropertyDescriptors(L)):c(Object(L)).forEach(function(R){Object.defineProperty(se,R,Object.getOwnPropertyDescriptor(L,R))})}return se}var d="toast",C="4.5.0",v="bs.toast",p="."+v,x=e.fn[d],A="click.dismiss"+p,V="hide"+p,ee="hidden"+p,Se="show"+p,ve="shown"+p,Re="fade",Ve="hide",Ke="show",z="showing",l={animation:"boolean",autohide:"boolean",delay:"number"},W={animation:!0,autohide:!0,delay:500},re='[data-dismiss="toast"]',ge=function(){function se(L,R){this._element=L,this._config=this._getConfig(R),this._timeout=null,this._setListeners()}var te=se.prototype;return te.show=function(){var R=this,F=e.Event(Se);if(e(this._element).trigger(F),!F.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Re);var H=function(){R._element.classList.remove(z),R._element.classList.add(Ke),e(R._element).trigger(ve),R._config.autohide&&(R._timeout=setTimeout(function(){R.hide()},R._config.delay))};if(this._element.classList.remove(Ve),t.reflow(this._element),this._element.classList.add(z),this._config.animation){var j=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,H).emulateTransitionEnd(j)}else H()}},te.hide=function(){if(!!this._element.classList.contains(Ke)){var R=e.Event(V);e(this._element).trigger(R),!R.isDefaultPrevented()&&this._close()}},te.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Ke)&&this._element.classList.remove(Ke),e(this._element).off(A),e.removeData(this._element,v),this._element=null,this._config=null},te._getConfig=function(R){return R=u(u(u({},W),e(this._element).data()),typeof R=="object"&&R?R:{}),t.typeCheckConfig(d,R,this.constructor.DefaultType),R},te._setListeners=function(){var R=this;e(this._element).on(A,re,function(){return R.hide()})},te._close=function(){var R=this,F=function(){R._element.classList.add(Ve),e(R._element).trigger(ee)};if(this._element.classList.remove(Ke),this._config.animation){var H=t.getTransitionDurationFromElement(this._element);e(this._element).one(t.TRANSITION_END,F).emulateTransitionEnd(H)}else F()},se._jQueryInterface=function(R){return this.each(function(){var F=e(this),H=F.data(v),j=typeof R=="object"&&R;if(H||(H=new se(this,j),F.data(v,H)),typeof R=="string"){if(typeof H[R]=="undefined")throw new TypeError('No method named "'+R+'"');H[R](this)}})},r(se,null,[{key:"VERSION",get:function(){return C}},{key:"DefaultType",get:function(){return l}},{key:"Default",get:function(){return W}}]),se}();return e.fn[d]=ge._jQueryInterface,e.fn[d].Constructor=ge,e.fn[d].noConflict=function(){return e.fn[d]=x,ge._jQueryInterface},ge})});var ga=mt(_a=>{(function(e){"use strict";function t(z,l){var W=(65535&z)+(65535&l),re=(z>>16)+(l>>16)+(W>>16);return re<<16|65535&W}function n(z,l){return z<<l|z>>>32-l}function r(z,l,W,re,ge,se){return t(n(t(t(l,z),t(re,se)),ge),W)}function s(z,l,W,re,ge,se,te){return r(l&W|~l&re,z,l,ge,se,te)}function c(z,l,W,re,ge,se,te){return r(l&re|W&~re,z,l,ge,se,te)}function u(z,l,W,re,ge,se,te){return r(l^W^re,z,l,ge,se,te)}function d(z,l,W,re,ge,se,te){return r(W^(l|~re),z,l,ge,se,te)}function C(z,l){z[l>>5]|=128<<l%32,z[(l+64>>>9<<4)+14]=l;var W,re,ge,se,te,L=1732584193,R=-271733879,F=-1732584194,H=271733878;for(W=0;W<z.length;W+=16)re=L,ge=R,se=F,te=H,L=s(L,R,F,H,z[W],7,-680876936),H=s(H,L,R,F,z[W+1],12,-389564586),F=s(F,H,L,R,z[W+2],17,606105819),R=s(R,F,H,L,z[W+3],22,-1044525330),L=s(L,R,F,H,z[W+4],7,-176418897),H=s(H,L,R,F,z[W+5],12,1200080426),F=s(F,H,L,R,z[W+6],17,-1473231341),R=s(R,F,H,L,z[W+7],22,-45705983),L=s(L,R,F,H,z[W+8],7,1770035416),H=s(H,L,R,F,z[W+9],12,-1958414417),F=s(F,H,L,R,z[W+10],17,-42063),R=s(R,F,H,L,z[W+11],22,-1990404162),L=s(L,R,F,H,z[W+12],7,1804603682),H=s(H,L,R,F,z[W+13],12,-40341101),F=s(F,H,L,R,z[W+14],17,-1502002290),R=s(R,F,H,L,z[W+15],22,1236535329),L=c(L,R,F,H,z[W+1],5,-165796510),H=c(H,L,R,F,z[W+6],9,-1069501632),F=c(F,H,L,R,z[W+11],14,643717713),R=c(R,F,H,L,z[W],20,-373897302),L=c(L,R,F,H,z[W+5],5,-701558691),H=c(H,L,R,F,z[W+10],9,38016083),F=c(F,H,L,R,z[W+15],14,-660478335),R=c(R,F,H,L,z[W+4],20,-405537848),L=c(L,R,F,H,z[W+9],5,568446438),H=c(H,L,R,F,z[W+14],9,-1019803690),F=c(F,H,L,R,z[W+3],14,-187363961),R=c(R,F,H,L,z[W+8],20,1163531501),L=c(L,R,F,H,z[W+13],5,-1444681467),H=c(H,L,R,F,z[W+2],9,-51403784),F=c(F,H,L,R,z[W+7],14,1735328473),R=c(R,F,H,L,z[W+12],20,-1926607734),L=u(L,R,F,H,z[W+5],4,-378558),H=u(H,L,R,F,z[W+8],11,-2022574463),F=u(F,H,L,R,z[W+11],16,1839030562),R=u(R,F,H,L,z[W+14],23,-35309556),L=u(L,R,F,H,z[W+1],4,-1530992060),H=u(H,L,R,F,z[W+4],11,1272893353),F=u(F,H,L,R,z[W+7],16,-155497632),R=u(R,F,H,L,z[W+10],23,-1094730640),L=u(L,R,F,H,z[W+13],4,681279174),H=u(H,L,R,F,z[W],11,-358537222),F=u(F,H,L,R,z[W+3],16,-722521979),R=u(R,F,H,L,z[W+6],23,76029189),L=u(L,R,F,H,z[W+9],4,-640364487),H=u(H,L,R,F,z[W+12],11,-421815835),F=u(F,H,L,R,z[W+15],16,530742520),R=u(R,F,H,L,z[W+2],23,-995338651),L=d(L,R,F,H,z[W],6,-198630844),H=d(H,L,R,F,z[W+7],10,1126891415),F=d(F,H,L,R,z[W+14],15,-1416354905),R=d(R,F,H,L,z[W+5],21,-57434055),L=d(L,R,F,H,z[W+12],6,1700485571),H=d(H,L,R,F,z[W+3],10,-1894986606),F=d(F,H,L,R,z[W+10],15,-1051523),R=d(R,F,H,L,z[W+1],21,-2054922799),L=d(L,R,F,H,z[W+8],6,1873313359),H=d(H,L,R,F,z[W+15],10,-30611744),F=d(F,H,L,R,z[W+6],15,-1560198380),R=d(R,F,H,L,z[W+13],21,1309151649),L=d(L,R,F,H,z[W+4],6,-145523070),H=d(H,L,R,F,z[W+11],10,-1120210379),F=d(F,H,L,R,z[W+2],15,718787259),R=d(R,F,H,L,z[W+9],21,-343485551),L=t(L,re),R=t(R,ge),F=t(F,se),H=t(H,te);return[L,R,F,H]}function v(z){var l,W="";for(l=0;l<32*z.length;l+=8)W+=String.fromCharCode(z[l>>5]>>>l%32&255);return W}function p(z){var l,W=[];for(W[(z.length>>2)-1]=void 0,l=0;l<W.length;l+=1)W[l]=0;for(l=0;l<8*z.length;l+=8)W[l>>5]|=(255&z.charCodeAt(l/8))<<l%32;return W}function x(z){return v(C(p(z),8*z.length))}function A(z,l){var W,re,ge=p(z),se=[],te=[];for(se[15]=te[15]=void 0,ge.length>16&&(ge=C(ge,8*z.length)),W=0;16>W;W+=1)se[W]=909522486^ge[W],te[W]=1549556828^ge[W];return re=C(se.concat(p(l)),512+8*l.length),v(C(te.concat(re),640))}function V(z){var l,W,re="0123456789abcdef",ge="";for(W=0;W<z.length;W+=1)l=z.charCodeAt(W),ge+=re.charAt(l>>>4&15)+re.charAt(15&l);return ge}function ee(z){return unescape(encodeURIComponent(z))}function Se(z){return x(ee(z))}function ve(z){return V(Se(z))}function Re(z,l){return A(ee(z),ee(l))}function Ve(z,l){return V(Re(z,l))}function Ke(z,l,W){return l?W?Re(l,z):Ve(l,z):W?Se(z):ve(z)}typeof define=="function"&&define.amd?define(function(){return Ke}):e.md5=Ke})(_a)});var xa=mt((cc,wa)=>{"use strict";var Ea=Array.isArray,Ca=Object.keys,zo=Object.prototype.hasOwnProperty;wa.exports=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){var r=Ea(t),s=Ea(n),c,u,d;if(r&&s){if(u=t.length,u!=n.length)return!1;for(c=u;c--!=0;)if(!e(t[c],n[c]))return!1;return!0}if(r!=s)return!1;var C=t instanceof Date,v=n instanceof Date;if(C!=v)return!1;if(C&&v)return t.getTime()==n.getTime();var p=t instanceof RegExp,x=n instanceof RegExp;if(p!=x)return!1;if(p&&x)return t.toString()==n.toString();var A=Ca(t);if(u=A.length,u!==Ca(n).length)return!1;for(c=u;c--!=0;)if(!zo.call(n,A[c]))return!1;for(c=u;c--!=0;)if(d=A[c],!e(t[d],n[d]))return!1;return!0}return t!==t&&n!==n}});var ka=mt((uc,Ta)=>{(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(n,r){return n<<r|n>>>32-r},rotr:function(n,r){return n<<32-r|n>>>r},endian:function(n){if(n.constructor==Number)return t.rotl(n,8)&16711935|t.rotl(n,24)&4278255360;for(var r=0;r<n.length;r++)n[r]=t.endian(n[r]);return n},randomBytes:function(n){for(var r=[];n>0;n--)r.push(Math.floor(Math.random()*256));return r},bytesToWords:function(n){for(var r=[],s=0,c=0;s<n.length;s++,c+=8)r[c>>>5]|=n[s]<<24-c%32;return r},wordsToBytes:function(n){for(var r=[],s=0;s<n.length*32;s+=8)r.push(n[s>>>5]>>>24-s%32&255);return r},bytesToHex:function(n){for(var r=[],s=0;s<n.length;s++)r.push((n[s]>>>4).toString(16)),r.push((n[s]&15).toString(16));return r.join("")},hexToBytes:function(n){for(var r=[],s=0;s<n.length;s+=2)r.push(parseInt(n.substr(s,2),16));return r},bytesToBase64:function(n){for(var r=[],s=0;s<n.length;s+=3)for(var c=n[s]<<16|n[s+1]<<8|n[s+2],u=0;u<4;u++)s*8+u*6<=n.length*8?r.push(e.charAt(c>>>6*(3-u)&63)):r.push("=");return r.join("")},base64ToBytes:function(n){n=n.replace(/[^A-Z0-9+\/]/ig,"");for(var r=[],s=0,c=0;s<n.length;c=++s%4)c!=0&&r.push((e.indexOf(n.charAt(s-1))&Math.pow(2,-2*c+8)-1)<<c*2|e.indexOf(n.charAt(s))>>>6-c*2);return r}};Ta.exports=t})()});var Ar=mt((dc,Sa)=>{var xr={utf8:{stringToBytes:function(e){return xr.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(xr.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n)&255);return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};Sa.exports=xr});var Da=mt((pc,Oa)=>{Oa.exports=function(e){return e!=null&&(Na(e)||Ho(e)||!!e._isBuffer)};function Na(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Ho(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Na(e.slice(0,0))}});var La=mt((hc,Ra)=>{(function(){var e=ka(),t=Ar().utf8,n=Da(),r=Ar().bin,s=function(c,u){c.constructor==String?u&&u.encoding==="binary"?c=r.stringToBytes(c):c=t.stringToBytes(c):n(c)?c=Array.prototype.slice.call(c,0):!Array.isArray(c)&&c.constructor!==Uint8Array&&(c=c.toString());for(var d=e.bytesToWords(c),C=c.length*8,v=1732584193,p=-271733879,x=-1732584194,A=271733878,V=0;V<d.length;V++)d[V]=(d[V]<<8|d[V]>>>24)&16711935|(d[V]<<24|d[V]>>>8)&4278255360;d[C>>>5]|=128<<C%32,d[(C+64>>>9<<4)+14]=C;for(var ee=s._ff,Se=s._gg,ve=s._hh,Re=s._ii,V=0;V<d.length;V+=16){var Ve=v,Ke=p,z=x,l=A;v=ee(v,p,x,A,d[V+0],7,-680876936),A=ee(A,v,p,x,d[V+1],12,-389564586),x=ee(x,A,v,p,d[V+2],17,606105819),p=ee(p,x,A,v,d[V+3],22,-1044525330),v=ee(v,p,x,A,d[V+4],7,-176418897),A=ee(A,v,p,x,d[V+5],12,1200080426),x=ee(x,A,v,p,d[V+6],17,-1473231341),p=ee(p,x,A,v,d[V+7],22,-45705983),v=ee(v,p,x,A,d[V+8],7,1770035416),A=ee(A,v,p,x,d[V+9],12,-1958414417),x=ee(x,A,v,p,d[V+10],17,-42063),p=ee(p,x,A,v,d[V+11],22,-1990404162),v=ee(v,p,x,A,d[V+12],7,1804603682),A=ee(A,v,p,x,d[V+13],12,-40341101),x=ee(x,A,v,p,d[V+14],17,-1502002290),p=ee(p,x,A,v,d[V+15],22,1236535329),v=Se(v,p,x,A,d[V+1],5,-165796510),A=Se(A,v,p,x,d[V+6],9,-1069501632),x=Se(x,A,v,p,d[V+11],14,643717713),p=Se(p,x,A,v,d[V+0],20,-373897302),v=Se(v,p,x,A,d[V+5],5,-701558691),A=Se(A,v,p,x,d[V+10],9,38016083),x=Se(x,A,v,p,d[V+15],14,-660478335),p=Se(p,x,A,v,d[V+4],20,-405537848),v=Se(v,p,x,A,d[V+9],5,568446438),A=Se(A,v,p,x,d[V+14],9,-1019803690),x=Se(x,A,v,p,d[V+3],14,-187363961),p=Se(p,x,A,v,d[V+8],20,1163531501),v=Se(v,p,x,A,d[V+13],5,-1444681467),A=Se(A,v,p,x,d[V+2],9,-51403784),x=Se(x,A,v,p,d[V+7],14,1735328473),p=Se(p,x,A,v,d[V+12],20,-1926607734),v=ve(v,p,x,A,d[V+5],4,-378558),A=ve(A,v,p,x,d[V+8],11,-2022574463),x=ve(x,A,v,p,d[V+11],16,1839030562),p=ve(p,x,A,v,d[V+14],23,-35309556),v=ve(v,p,x,A,d[V+1],4,-1530992060),A=ve(A,v,p,x,d[V+4],11,1272893353),x=ve(x,A,v,p,d[V+7],16,-155497632),p=ve(p,x,A,v,d[V+10],23,-1094730640),v=ve(v,p,x,A,d[V+13],4,681279174),A=ve(A,v,p,x,d[V+0],11,-358537222),x=ve(x,A,v,p,d[V+3],16,-722521979),p=ve(p,x,A,v,d[V+6],23,76029189),v=ve(v,p,x,A,d[V+9],4,-640364487),A=ve(A,v,p,x,d[V+12],11,-421815835),x=ve(x,A,v,p,d[V+15],16,530742520),p=ve(p,x,A,v,d[V+2],23,-995338651),v=Re(v,p,x,A,d[V+0],6,-198630844),A=Re(A,v,p,x,d[V+7],10,1126891415),x=Re(x,A,v,p,d[V+14],15,-1416354905),p=Re(p,x,A,v,d[V+5],21,-57434055),v=Re(v,p,x,A,d[V+12],6,1700485571),A=Re(A,v,p,x,d[V+3],10,-1894986606),x=Re(x,A,v,p,d[V+10],15,-1051523),p=Re(p,x,A,v,d[V+1],21,-2054922799),v=Re(v,p,x,A,d[V+8],6,1873313359),A=Re(A,v,p,x,d[V+15],10,-30611744),x=Re(x,A,v,p,d[V+6],15,-1560198380),p=Re(p,x,A,v,d[V+13],21,1309151649),v=Re(v,p,x,A,d[V+4],6,-145523070),A=Re(A,v,p,x,d[V+11],10,-1120210379),x=Re(x,A,v,p,d[V+2],15,718787259),p=Re(p,x,A,v,d[V+9],21,-343485551),v=v+Ve>>>0,p=p+Ke>>>0,x=x+z>>>0,A=A+l>>>0}return e.endian([v,p,x,A])};s._ff=function(c,u,d,C,v,p,x){var A=c+(u&d|~u&C)+(v>>>0)+x;return(A<<p|A>>>32-p)+u},s._gg=function(c,u,d,C,v,p,x){var A=c+(u&C|d&~C)+(v>>>0)+x;return(A<<p|A>>>32-p)+u},s._hh=function(c,u,d,C,v,p,x){var A=c+(u^d^C)+(v>>>0)+x;return(A<<p|A>>>32-p)+u},s._ii=function(c,u,d,C,v,p,x){var A=c+(d^(u|~C))+(v>>>0)+x;return(A<<p|A>>>32-p)+u},s._blocksize=16,s._digestsize=16,Ra.exports=function(c,u){if(c==null)throw new Error("Illegal argument "+c);var d=e.wordsToBytes(s(c,u));return u&&u.asBytes?d:u&&u.asString?r.bytesToString(d):e.bytesToHex(d)}})()});var Ka=mt((Pr,Br)=>{(function(e,t){typeof Pr=="object"&&typeof Br!="undefined"?Br.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.Cropper=t())})(Pr,function(){"use strict";function e(T,_){var w=Object.keys(T);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(T);_&&(m=m.filter(function(P){return Object.getOwnPropertyDescriptor(T,P).enumerable})),w.push.apply(w,m)}return w}function t(T){for(var _=1;_<arguments.length;_++){var w=arguments[_]!=null?arguments[_]:{};_%2?e(Object(w),!0).forEach(function(m){u(T,m,w[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(w)):e(Object(w)).forEach(function(m){Object.defineProperty(T,m,Object.getOwnPropertyDescriptor(w,m))})}return T}function n(T){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(_){return typeof _}:n=function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},n(T)}function r(T,_){if(!(T instanceof _))throw new TypeError("Cannot call a class as a function")}function s(T,_){for(var w=0;w<_.length;w++){var m=_[w];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(T,m.key,m)}}function c(T,_,w){return _&&s(T.prototype,_),w&&s(T,w),T}function u(T,_,w){return _ in T?Object.defineProperty(T,_,{value:w,enumerable:!0,configurable:!0,writable:!0}):T[_]=w,T}function d(T){return C(T)||v(T)||p(T)||A()}function C(T){if(Array.isArray(T))return x(T)}function v(T){if(typeof Symbol!="undefined"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)}function p(T,_){if(!!T){if(typeof T=="string")return x(T,_);var w=Object.prototype.toString.call(T).slice(8,-1);if(w==="Object"&&T.constructor&&(w=T.constructor.name),w==="Map"||w==="Set")return Array.from(T);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return x(T,_)}}function x(T,_){(_==null||_>T.length)&&(_=T.length);for(var w=0,m=new Array(_);w<_;w++)m[w]=T[w];return m}function A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var V=typeof window!="undefined"&&typeof window.document!="undefined",ee=V?window:{},Se=V&&ee.document.documentElement?"ontouchstart"in ee.document.documentElement:!1,ve=V?"PointerEvent"in ee:!1,Re="cropper",Ve="all",Ke="crop",z="move",l="zoom",W="e",re="w",ge="s",se="n",te="ne",L="nw",R="se",F="sw",H="".concat(Re,"-crop"),j="".concat(Re,"-disabled"),q="".concat(Re,"-hidden"),X="".concat(Re,"-hide"),ne="".concat(Re,"-invisible"),Oe="".concat(Re,"-modal"),Fe="".concat(Re,"-move"),Ze="".concat(Re,"Action"),je="".concat(Re,"Preview"),ye="crop",we="move",K="none",Q="crop",Ee="cropend",Ie="cropmove",le="cropstart",Ye="dblclick",dt=Se?"touchstart":"mousedown",ot=Se?"touchmove":"mousemove",gt=Se?"touchend touchcancel":"mouseup",We=ve?"pointerdown":dt,Z=ve?"pointermove":ot,He=ve?"pointerup pointercancel":gt,oe="ready",ke="resize",ze="wheel",Ue="zoom",ue="image/jpeg",nt=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Ce=/^data:/,Le=/^data:image\/jpeg;base64,/,qe=/^img|canvas$/i,Je=200,kt=100,Vt={viewMode:0,dragMode:ye,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:Je,minContainerHeight:kt,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ft='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',mn=Number.isNaN||ee.isNaN;function lt(T){return typeof T=="number"&&!mn(T)}var vn=function(_){return _>0&&_<Infinity};function yn(T){return typeof T=="undefined"}function Zt(T){return n(T)==="object"&&T!==null}var Yt=Object.prototype.hasOwnProperty;function Mt(T){if(!Zt(T))return!1;try{var _=T.constructor,w=_.prototype;return _&&w&&Yt.call(w,"isPrototypeOf")}catch(m){return!1}}function zt(T){return typeof T=="function"}var Zn=Array.prototype.slice;function zn(T){return Array.from?Array.from(T):Zn.call(T)}function Rt(T,_){return T&&zt(_)&&(Array.isArray(T)||lt(T.length)?zn(T).forEach(function(w,m){_.call(T,w,m,T)}):Zt(T)&&Object.keys(T).forEach(function(w){_.call(T,T[w],w,T)})),T}var wt=Object.assign||function(_){for(var w=arguments.length,m=new Array(w>1?w-1:0),P=1;P<w;P++)m[P-1]=arguments[P];return Zt(_)&&m.length>0&&m.forEach(function(O){Zt(O)&&Object.keys(O).forEach(function(B){_[B]=O[B]})}),_},On=/\.\d*(?:0|9){12}\d*$/;function fn(T){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return On.test(T)?Math.round(T*_)/_:T}var y=/^width|height|left|top|marginLeft|marginTop$/;function k(T,_){var w=T.style;Rt(_,function(m,P){y.test(P)&&lt(m)&&(m="".concat(m,"px")),w[P]=m})}function M(T,_){return T.classList?T.classList.contains(_):T.className.indexOf(_)>-1}function U(T,_){if(!!_){if(lt(T.length)){Rt(T,function(m){U(m,_)});return}if(T.classList){T.classList.add(_);return}var w=T.className.trim();w?w.indexOf(_)<0&&(T.className="".concat(w," ").concat(_)):T.className=_}}function he(T,_){if(!!_){if(lt(T.length)){Rt(T,function(w){he(w,_)});return}if(T.classList){T.classList.remove(_);return}T.className.indexOf(_)>=0&&(T.className=T.className.replace(_,""))}}function de(T,_,w){if(!!_){if(lt(T.length)){Rt(T,function(m){de(m,_,w)});return}w?U(T,_):he(T,_)}}var xe=/([a-z\d])([A-Z])/g;function Me(T){return T.replace(xe,"$1-$2").toLowerCase()}function $e(T,_){return Zt(T[_])?T[_]:T.dataset?T.dataset[_]:T.getAttribute("data-".concat(Me(_)))}function Qe(T,_,w){Zt(w)?T[_]=w:T.dataset?T.dataset[_]=w:T.setAttribute("data-".concat(Me(_)),w)}function at(T,_){if(Zt(T[_]))try{delete T[_]}catch(w){T[_]=void 0}else if(T.dataset)try{delete T.dataset[_]}catch(w){T.dataset[_]=void 0}else T.removeAttribute("data-".concat(Me(_)))}var Xe=/\s\s*/,pt=function(){var T=!1;if(V){var _=!1,w=function(){},m=Object.defineProperty({},"once",{get:function(){return T=!0,_},set:function(O){_=O}});ee.addEventListener("test",w,m),ee.removeEventListener("test",w,m)}return T}();function et(T,_,w){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},P=w;_.trim().split(Xe).forEach(function(O){if(!pt){var B=T.listeners;B&&B[O]&&B[O][w]&&(P=B[O][w],delete B[O][w],Object.keys(B[O]).length===0&&delete B[O],Object.keys(B).length===0&&delete T.listeners)}T.removeEventListener(O,P,m)})}function tt(T,_,w){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},P=w;_.trim().split(Xe).forEach(function(O){if(m.once&&!pt){var B=T.listeners,ae=B===void 0?{}:B;P=function(){delete ae[O][w],T.removeEventListener(O,P,m);for(var be=arguments.length,fe=new Array(be),pe=0;pe<be;pe++)fe[pe]=arguments[pe];w.apply(T,fe)},ae[O]||(ae[O]={}),ae[O][w]&&T.removeEventListener(O,ae[O][w],m),ae[O][w]=P,T.listeners=ae}T.addEventListener(O,P,m)})}function Ct(T,_,w){var m;return zt(Event)&&zt(CustomEvent)?m=new CustomEvent(_,{detail:w,bubbles:!0,cancelable:!0}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(_,!0,!0,w)),T.dispatchEvent(m)}function rn(T){var _=T.getBoundingClientRect();return{left:_.left+(window.pageXOffset-document.documentElement.clientLeft),top:_.top+(window.pageYOffset-document.documentElement.clientTop)}}var Gt=ee.location,Xt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function cn(T){var _=T.match(Xt);return _!==null&&(_[1]!==Gt.protocol||_[2]!==Gt.hostname||_[3]!==Gt.port)}function Hn(T){var _="timestamp=".concat(new Date().getTime());return T+(T.indexOf("?")===-1?"?":"&")+_}function wn(T){var _=T.rotate,w=T.scaleX,m=T.scaleY,P=T.translateX,O=T.translateY,B=[];lt(P)&&P!==0&&B.push("translateX(".concat(P,"px)")),lt(O)&&O!==0&&B.push("translateY(".concat(O,"px)")),lt(_)&&_!==0&&B.push("rotate(".concat(_,"deg)")),lt(w)&&w!==1&&B.push("scaleX(".concat(w,")")),lt(m)&&m!==1&&B.push("scaleY(".concat(m,")"));var ae=B.length?B.join(" "):"none";return{WebkitTransform:ae,msTransform:ae,transform:ae}}function Di(T){var _=t({},T),w=0;return Rt(T,function(m,P){delete _[P],Rt(_,function(O){var B=Math.abs(m.startX-O.startX),ae=Math.abs(m.startY-O.startY),De=Math.abs(m.endX-O.endX),be=Math.abs(m.endY-O.endY),fe=Math.sqrt(B*B+ae*ae),pe=Math.sqrt(De*De+be*be),Ne=(pe-fe)/fe;Math.abs(Ne)>Math.abs(w)&&(w=Ne)})}),w}function jn(T,_){var w=T.pageX,m=T.pageY,P={endX:w,endY:m};return _?P:t({startX:w,startY:m},P)}function Ri(T){var _=0,w=0,m=0;return Rt(T,function(P){var O=P.startX,B=P.startY;_+=O,w+=B,m+=1}),_/=m,w/=m,{pageX:_,pageY:w}}function En(T){var _=T.aspectRatio,w=T.height,m=T.width,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",O=vn(m),B=vn(w);if(O&&B){var ae=w*_;P==="contain"&&ae>m||P==="cover"&&ae<m?w=m/_:m=w*_}else O?w=m/_:B&&(m=w*_);return{width:m,height:w}}function Li(T){var _=T.width,w=T.height,m=T.degree;if(m=Math.abs(m)%180,m===90)return{width:w,height:_};var P=m%90*Math.PI/180,O=Math.sin(P),B=Math.cos(P),ae=_*B+w*O,De=_*O+w*B;return m>90?{width:De,height:ae}:{width:ae,height:De}}function ci(T,_,w,m){var P=_.aspectRatio,O=_.naturalWidth,B=_.naturalHeight,ae=_.rotate,De=ae===void 0?0:ae,be=_.scaleX,fe=be===void 0?1:be,pe=_.scaleY,Ne=pe===void 0?1:pe,yt=w.aspectRatio,vt=w.naturalWidth,Dt=w.naturalHeight,xt=m.fillColor,It=xt===void 0?"transparent":xt,Ht=m.imageSmoothingEnabled,Pt=Ht===void 0?!0:Ht,Cn=m.imageSmoothingQuality,en=Cn===void 0?"low":Cn,Pe=m.maxWidth,At=Pe===void 0?Infinity:Pe,Bt=m.maxHeight,tn=Bt===void 0?Infinity:Bt,un=m.minWidth,Nn=un===void 0?0:un,xn=m.minHeight,An=xn===void 0?0:xn,dn=document.createElement("canvas"),Kt=dn.getContext("2d"),Dn=En({aspectRatio:yt,width:At,height:tn}),Qn=En({aspectRatio:yt,width:Nn,height:An},"cover"),ii=Math.min(Dn.width,Math.max(Qn.width,vt)),Rn=Math.min(Dn.height,Math.max(Qn.height,Dt)),ri=En({aspectRatio:P,width:At,height:tn}),Jn=En({aspectRatio:P,width:Nn,height:An},"cover"),hi=Math.min(ri.width,Math.max(Jn.width,O)),_i=Math.min(ri.height,Math.max(Jn.height,B)),Bi=[-hi/2,-_i/2,hi,_i];return dn.width=fn(ii),dn.height=fn(Rn),Kt.fillStyle=It,Kt.fillRect(0,0,ii,Rn),Kt.save(),Kt.translate(ii/2,Rn/2),Kt.rotate(De*Math.PI/180),Kt.scale(fe,Ne),Kt.imageSmoothingEnabled=Pt,Kt.imageSmoothingQuality=en,Kt.drawImage.apply(Kt,[T].concat(d(Bi.map(function(i){return Math.floor(fn(i))})))),Kt.restore(),dn}var ei=String.fromCharCode;function ti(T,_,w){var m="";w+=_;for(var P=_;P<w;P+=1)m+=ei(T.getUint8(P));return m}var ui=/^data:.*,/;function Qt(T){var _=T.replace(ui,""),w=atob(_),m=new ArrayBuffer(w.length),P=new Uint8Array(m);return Rt(P,function(O,B){P[B]=w.charCodeAt(B)}),m}function Pn(T,_){for(var w=[],m=8192,P=new Uint8Array(T);P.length>0;)w.push(ei.apply(null,zn(P.subarray(0,m)))),P=P.subarray(m);return"data:".concat(_,";base64,").concat(btoa(w.join("")))}function Kn(T){var _=new DataView(T),w;try{var m,P,O;if(_.getUint8(0)===255&&_.getUint8(1)===216)for(var B=_.byteLength,ae=2;ae+1<B;){if(_.getUint8(ae)===255&&_.getUint8(ae+1)===225){P=ae;break}ae+=1}if(P){var De=P+4,be=P+10;if(ti(_,De,4)==="Exif"){var fe=_.getUint16(be);if(m=fe===18761,(m||fe===19789)&&_.getUint16(be+2,m)===42){var pe=_.getUint32(be+4,m);pe>=8&&(O=be+pe)}}}if(O){var Ne=_.getUint16(O,m),yt,vt;for(vt=0;vt<Ne;vt+=1)if(yt=O+vt*12+2,_.getUint16(yt,m)===274){yt+=8,w=_.getUint16(yt,m),_.setUint16(yt,1,m);break}}}catch(Dt){w=1}return w}function Mi(T){var _=0,w=1,m=1;switch(T){case 2:w=-1;break;case 3:_=-180;break;case 4:m=-1;break;case 5:_=90,m=-1;break;case 6:_=90;break;case 7:_=90,w=-1;break;case 8:_=-90;break}return{rotate:_,scaleX:w,scaleY:m}}var Ii={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var _=this.element,w=this.options,m=this.container,P=this.cropper,O=Number(w.minContainerWidth),B=Number(w.minContainerHeight);U(P,q),he(_,q);var ae={width:Math.max(m.offsetWidth,O>=0?O:Je),height:Math.max(m.offsetHeight,B>=0?B:kt)};this.containerData=ae,k(P,{width:ae.width,height:ae.height}),U(_,q),he(P,q)},initCanvas:function(){var _=this.containerData,w=this.imageData,m=this.options.viewMode,P=Math.abs(w.rotate)%180==90,O=P?w.naturalHeight:w.naturalWidth,B=P?w.naturalWidth:w.naturalHeight,ae=O/B,De=_.width,be=_.height;_.height*ae>_.width?m===3?De=_.height*ae:be=_.width/ae:m===3?be=_.width/ae:De=_.height*ae;var fe={aspectRatio:ae,naturalWidth:O,naturalHeight:B,width:De,height:be};this.canvasData=fe,this.limited=m===1||m===2,this.limitCanvas(!0,!0),fe.width=Math.min(Math.max(fe.width,fe.minWidth),fe.maxWidth),fe.height=Math.min(Math.max(fe.height,fe.minHeight),fe.maxHeight),fe.left=(_.width-fe.width)/2,fe.top=(_.height-fe.height)/2,fe.oldLeft=fe.left,fe.oldTop=fe.top,this.initialCanvasData=wt({},fe)},limitCanvas:function(_,w){var m=this.options,P=this.containerData,O=this.canvasData,B=this.cropBoxData,ae=m.viewMode,De=O.aspectRatio,be=this.cropped&&B;if(_){var fe=Number(m.minCanvasWidth)||0,pe=Number(m.minCanvasHeight)||0;ae>1?(fe=Math.max(fe,P.width),pe=Math.max(pe,P.height),ae===3&&(pe*De>fe?fe=pe*De:pe=fe/De)):ae>0&&(fe?fe=Math.max(fe,be?B.width:0):pe?pe=Math.max(pe,be?B.height:0):be&&(fe=B.width,pe=B.height,pe*De>fe?fe=pe*De:pe=fe/De));var Ne=En({aspectRatio:De,width:fe,height:pe});fe=Ne.width,pe=Ne.height,O.minWidth=fe,O.minHeight=pe,O.maxWidth=Infinity,O.maxHeight=Infinity}if(w)if(ae>(be?0:1)){var yt=P.width-O.width,vt=P.height-O.height;O.minLeft=Math.min(0,yt),O.minTop=Math.min(0,vt),O.maxLeft=Math.max(0,yt),O.maxTop=Math.max(0,vt),be&&this.limited&&(O.minLeft=Math.min(B.left,B.left+(B.width-O.width)),O.minTop=Math.min(B.top,B.top+(B.height-O.height)),O.maxLeft=B.left,O.maxTop=B.top,ae===2&&(O.width>=P.width&&(O.minLeft=Math.min(0,yt),O.maxLeft=Math.max(0,yt)),O.height>=P.height&&(O.minTop=Math.min(0,vt),O.maxTop=Math.max(0,vt))))}else O.minLeft=-O.width,O.minTop=-O.height,O.maxLeft=P.width,O.maxTop=P.height},renderCanvas:function(_,w){var m=this.canvasData,P=this.imageData;if(w){var O=Li({width:P.naturalWidth*Math.abs(P.scaleX||1),height:P.naturalHeight*Math.abs(P.scaleY||1),degree:P.rotate||0}),B=O.width,ae=O.height,De=m.width*(B/m.naturalWidth),be=m.height*(ae/m.naturalHeight);m.left-=(De-m.width)/2,m.top-=(be-m.height)/2,m.width=De,m.height=be,m.aspectRatio=B/ae,m.naturalWidth=B,m.naturalHeight=ae,this.limitCanvas(!0,!1)}(m.width>m.maxWidth||m.width<m.minWidth)&&(m.left=m.oldLeft),(m.height>m.maxHeight||m.height<m.minHeight)&&(m.top=m.oldTop),m.width=Math.min(Math.max(m.width,m.minWidth),m.maxWidth),m.height=Math.min(Math.max(m.height,m.minHeight),m.maxHeight),this.limitCanvas(!1,!0),m.left=Math.min(Math.max(m.left,m.minLeft),m.maxLeft),m.top=Math.min(Math.max(m.top,m.minTop),m.maxTop),m.oldLeft=m.left,m.oldTop=m.top,k(this.canvas,wt({width:m.width,height:m.height},wn({translateX:m.left,translateY:m.top}))),this.renderImage(_),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(_){var w=this.canvasData,m=this.imageData,P=m.naturalWidth*(w.width/w.naturalWidth),O=m.naturalHeight*(w.height/w.naturalHeight);wt(m,{width:P,height:O,left:(w.width-P)/2,top:(w.height-O)/2}),k(this.image,wt({width:m.width,height:m.height},wn(wt({translateX:m.left,translateY:m.top},m)))),_&&this.output()},initCropBox:function(){var _=this.options,w=this.canvasData,m=_.aspectRatio||_.initialAspectRatio,P=Number(_.autoCropArea)||.8,O={width:w.width,height:w.height};m&&(w.height*m>w.width?O.height=O.width/m:O.width=O.height*m),this.cropBoxData=O,this.limitCropBox(!0,!0),O.width=Math.min(Math.max(O.width,O.minWidth),O.maxWidth),O.height=Math.min(Math.max(O.height,O.minHeight),O.maxHeight),O.width=Math.max(O.minWidth,O.width*P),O.height=Math.max(O.minHeight,O.height*P),O.left=w.left+(w.width-O.width)/2,O.top=w.top+(w.height-O.height)/2,O.oldLeft=O.left,O.oldTop=O.top,this.initialCropBoxData=wt({},O)},limitCropBox:function(_,w){var m=this.options,P=this.containerData,O=this.canvasData,B=this.cropBoxData,ae=this.limited,De=m.aspectRatio;if(_){var be=Number(m.minCropBoxWidth)||0,fe=Number(m.minCropBoxHeight)||0,pe=ae?Math.min(P.width,O.width,O.width+O.left,P.width-O.left):P.width,Ne=ae?Math.min(P.height,O.height,O.height+O.top,P.height-O.top):P.height;be=Math.min(be,P.width),fe=Math.min(fe,P.height),De&&(be&&fe?fe*De>be?fe=be/De:be=fe*De:be?fe=be/De:fe&&(be=fe*De),Ne*De>pe?Ne=pe/De:pe=Ne*De),B.minWidth=Math.min(be,pe),B.minHeight=Math.min(fe,Ne),B.maxWidth=pe,B.maxHeight=Ne}w&&(ae?(B.minLeft=Math.max(0,O.left),B.minTop=Math.max(0,O.top),B.maxLeft=Math.min(P.width,O.left+O.width)-B.width,B.maxTop=Math.min(P.height,O.top+O.height)-B.height):(B.minLeft=0,B.minTop=0,B.maxLeft=P.width-B.width,B.maxTop=P.height-B.height))},renderCropBox:function(){var _=this.options,w=this.containerData,m=this.cropBoxData;(m.width>m.maxWidth||m.width<m.minWidth)&&(m.left=m.oldLeft),(m.height>m.maxHeight||m.height<m.minHeight)&&(m.top=m.oldTop),m.width=Math.min(Math.max(m.width,m.minWidth),m.maxWidth),m.height=Math.min(Math.max(m.height,m.minHeight),m.maxHeight),this.limitCropBox(!1,!0),m.left=Math.min(Math.max(m.left,m.minLeft),m.maxLeft),m.top=Math.min(Math.max(m.top,m.minTop),m.maxTop),m.oldLeft=m.left,m.oldTop=m.top,_.movable&&_.cropBoxMovable&&Qe(this.face,Ze,m.width>=w.width&&m.height>=w.height?z:Ve),k(this.cropBox,wt({width:m.width,height:m.height},wn({translateX:m.left,translateY:m.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Ct(this.element,Q,this.getData())}},ni={initPreview:function(){var _=this.element,w=this.crossOrigin,m=this.options.preview,P=w?this.crossOriginUrl:this.url,O=_.alt||"The image to preview",B=document.createElement("img");if(w&&(B.crossOrigin=w),B.src=P,B.alt=O,this.viewBox.appendChild(B),this.viewBoxImage=B,!!m){var ae=m;typeof m=="string"?ae=_.ownerDocument.querySelectorAll(m):m.querySelector&&(ae=[m]),this.previews=ae,Rt(ae,function(De){var be=document.createElement("img");Qe(De,je,{width:De.offsetWidth,height:De.offsetHeight,html:De.innerHTML}),w&&(be.crossOrigin=w),be.src=P,be.alt=O,be.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',De.innerHTML="",De.appendChild(be)})}},resetPreview:function(){Rt(this.previews,function(_){var w=$e(_,je);k(_,{width:w.width,height:w.height}),_.innerHTML=w.html,at(_,je)})},preview:function(){var _=this.imageData,w=this.canvasData,m=this.cropBoxData,P=m.width,O=m.height,B=_.width,ae=_.height,De=m.left-w.left-_.left,be=m.top-w.top-_.top;!this.cropped||this.disabled||(k(this.viewBoxImage,wt({width:B,height:ae},wn(wt({translateX:-De,translateY:-be},_)))),Rt(this.previews,function(fe){var pe=$e(fe,je),Ne=pe.width,yt=pe.height,vt=Ne,Dt=yt,xt=1;P&&(xt=Ne/P,Dt=O*xt),O&&Dt>yt&&(xt=yt/O,vt=P*xt,Dt=yt),k(fe,{width:vt,height:Dt}),k(fe.getElementsByTagName("img")[0],wt({width:B*xt,height:ae*xt},wn(wt({translateX:-De*xt,translateY:-be*xt},_))))}))}},di={bind:function(){var _=this.element,w=this.options,m=this.cropper;zt(w.cropstart)&&tt(_,le,w.cropstart),zt(w.cropmove)&&tt(_,Ie,w.cropmove),zt(w.cropend)&&tt(_,Ee,w.cropend),zt(w.crop)&&tt(_,Q,w.crop),zt(w.zoom)&&tt(_,Ue,w.zoom),tt(m,We,this.onCropStart=this.cropStart.bind(this)),w.zoomable&&w.zoomOnWheel&&tt(m,ze,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),w.toggleDragModeOnDblclick&&tt(m,Ye,this.onDblclick=this.dblclick.bind(this)),tt(_.ownerDocument,Z,this.onCropMove=this.cropMove.bind(this)),tt(_.ownerDocument,He,this.onCropEnd=this.cropEnd.bind(this)),w.responsive&&tt(window,ke,this.onResize=this.resize.bind(this))},unbind:function(){var _=this.element,w=this.options,m=this.cropper;zt(w.cropstart)&&et(_,le,w.cropstart),zt(w.cropmove)&&et(_,Ie,w.cropmove),zt(w.cropend)&&et(_,Ee,w.cropend),zt(w.crop)&&et(_,Q,w.crop),zt(w.zoom)&&et(_,Ue,w.zoom),et(m,We,this.onCropStart),w.zoomable&&w.zoomOnWheel&&et(m,ze,this.onWheel,{passive:!1,capture:!0}),w.toggleDragModeOnDblclick&&et(m,Ye,this.onDblclick),et(_.ownerDocument,Z,this.onCropMove),et(_.ownerDocument,He,this.onCropEnd),w.responsive&&et(window,ke,this.onResize)}},Xn={resize:function(){if(!this.disabled){var _=this.options,w=this.container,m=this.containerData,P=w.offsetWidth/m.width,O=w.offsetHeight/m.height,B=Math.abs(P-1)>Math.abs(O-1)?P:O;if(B!==1){var ae,De;_.restore&&(ae=this.getCanvasData(),De=this.getCropBoxData()),this.render(),_.restore&&(this.setCanvasData(Rt(ae,function(be,fe){ae[fe]=be*B})),this.setCropBoxData(Rt(De,function(be,fe){De[fe]=be*B})))}}},dblclick:function(){this.disabled||this.options.dragMode===K||this.setDragMode(M(this.dragBox,H)?we:ye)},wheel:function(_){var w=this,m=Number(this.options.wheelZoomRatio)||.1,P=1;this.disabled||(_.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){w.wheeling=!1},50),_.deltaY?P=_.deltaY>0?1:-1:_.wheelDelta?P=-_.wheelDelta/120:_.detail&&(P=_.detail>0?1:-1),this.zoom(-P*m,_)))},cropStart:function(_){var w=_.buttons,m=_.button;if(!(this.disabled||(_.type==="mousedown"||_.type==="pointerdown"&&_.pointerType==="mouse")&&(lt(w)&&w!==1||lt(m)&&m!==0||_.ctrlKey))){var P=this.options,O=this.pointers,B;_.changedTouches?Rt(_.changedTouches,function(ae){O[ae.identifier]=jn(ae)}):O[_.pointerId||0]=jn(_),Object.keys(O).length>1&&P.zoomable&&P.zoomOnTouch?B=l:B=$e(_.target,Ze),!!nt.test(B)&&Ct(this.element,le,{originalEvent:_,action:B})!==!1&&(_.preventDefault(),this.action=B,this.cropping=!1,B===Ke&&(this.cropping=!0,U(this.dragBox,Oe)))}},cropMove:function(_){var w=this.action;if(!(this.disabled||!w)){var m=this.pointers;_.preventDefault(),Ct(this.element,Ie,{originalEvent:_,action:w})!==!1&&(_.changedTouches?Rt(_.changedTouches,function(P){wt(m[P.identifier]||{},jn(P,!0))}):wt(m[_.pointerId||0]||{},jn(_,!0)),this.change(_))}},cropEnd:function(_){if(!this.disabled){var w=this.action,m=this.pointers;_.changedTouches?Rt(_.changedTouches,function(P){delete m[P.identifier]}):delete m[_.pointerId||0],!!w&&(_.preventDefault(),Object.keys(m).length||(this.action=""),this.cropping&&(this.cropping=!1,de(this.dragBox,Oe,this.cropped&&this.options.modal)),Ct(this.element,Ee,{originalEvent:_,action:w}))}}},pi={change:function(_){var w=this.options,m=this.canvasData,P=this.containerData,O=this.cropBoxData,B=this.pointers,ae=this.action,De=w.aspectRatio,be=O.left,fe=O.top,pe=O.width,Ne=O.height,yt=be+pe,vt=fe+Ne,Dt=0,xt=0,It=P.width,Ht=P.height,Pt=!0,Cn;!De&&_.shiftKey&&(De=pe&&Ne?pe/Ne:1),this.limited&&(Dt=O.minLeft,xt=O.minTop,It=Dt+Math.min(P.width,m.width,m.left+m.width),Ht=xt+Math.min(P.height,m.height,m.top+m.height));var en=B[Object.keys(B)[0]],Pe={x:en.endX-en.startX,y:en.endY-en.startY},At=function(tn){switch(tn){case W:yt+Pe.x>It&&(Pe.x=It-yt);break;case re:be+Pe.x<Dt&&(Pe.x=Dt-be);break;case se:fe+Pe.y<xt&&(Pe.y=xt-fe);break;case ge:vt+Pe.y>Ht&&(Pe.y=Ht-vt);break}};switch(ae){case Ve:be+=Pe.x,fe+=Pe.y;break;case W:if(Pe.x>=0&&(yt>=It||De&&(fe<=xt||vt>=Ht))){Pt=!1;break}At(W),pe+=Pe.x,pe<0&&(ae=re,pe=-pe,be-=pe),De&&(Ne=pe/De,fe+=(O.height-Ne)/2);break;case se:if(Pe.y<=0&&(fe<=xt||De&&(be<=Dt||yt>=It))){Pt=!1;break}At(se),Ne-=Pe.y,fe+=Pe.y,Ne<0&&(ae=ge,Ne=-Ne,fe-=Ne),De&&(pe=Ne*De,be+=(O.width-pe)/2);break;case re:if(Pe.x<=0&&(be<=Dt||De&&(fe<=xt||vt>=Ht))){Pt=!1;break}At(re),pe-=Pe.x,be+=Pe.x,pe<0&&(ae=W,pe=-pe,be-=pe),De&&(Ne=pe/De,fe+=(O.height-Ne)/2);break;case ge:if(Pe.y>=0&&(vt>=Ht||De&&(be<=Dt||yt>=It))){Pt=!1;break}At(ge),Ne+=Pe.y,Ne<0&&(ae=se,Ne=-Ne,fe-=Ne),De&&(pe=Ne*De,be+=(O.width-pe)/2);break;case te:if(De){if(Pe.y<=0&&(fe<=xt||yt>=It)){Pt=!1;break}At(se),Ne-=Pe.y,fe+=Pe.y,pe=Ne*De}else At(se),At(W),Pe.x>=0?yt<It?pe+=Pe.x:Pe.y<=0&&fe<=xt&&(Pt=!1):pe+=Pe.x,Pe.y<=0?fe>xt&&(Ne-=Pe.y,fe+=Pe.y):(Ne-=Pe.y,fe+=Pe.y);pe<0&&Ne<0?(ae=F,Ne=-Ne,pe=-pe,fe-=Ne,be-=pe):pe<0?(ae=L,pe=-pe,be-=pe):Ne<0&&(ae=R,Ne=-Ne,fe-=Ne);break;case L:if(De){if(Pe.y<=0&&(fe<=xt||be<=Dt)){Pt=!1;break}At(se),Ne-=Pe.y,fe+=Pe.y,pe=Ne*De,be+=O.width-pe}else At(se),At(re),Pe.x<=0?be>Dt?(pe-=Pe.x,be+=Pe.x):Pe.y<=0&&fe<=xt&&(Pt=!1):(pe-=Pe.x,be+=Pe.x),Pe.y<=0?fe>xt&&(Ne-=Pe.y,fe+=Pe.y):(Ne-=Pe.y,fe+=Pe.y);pe<0&&Ne<0?(ae=R,Ne=-Ne,pe=-pe,fe-=Ne,be-=pe):pe<0?(ae=te,pe=-pe,be-=pe):Ne<0&&(ae=F,Ne=-Ne,fe-=Ne);break;case F:if(De){if(Pe.x<=0&&(be<=Dt||vt>=Ht)){Pt=!1;break}At(re),pe-=Pe.x,be+=Pe.x,Ne=pe/De}else At(ge),At(re),Pe.x<=0?be>Dt?(pe-=Pe.x,be+=Pe.x):Pe.y>=0&&vt>=Ht&&(Pt=!1):(pe-=Pe.x,be+=Pe.x),Pe.y>=0?vt<Ht&&(Ne+=Pe.y):Ne+=Pe.y;pe<0&&Ne<0?(ae=te,Ne=-Ne,pe=-pe,fe-=Ne,be-=pe):pe<0?(ae=R,pe=-pe,be-=pe):Ne<0&&(ae=L,Ne=-Ne,fe-=Ne);break;case R:if(De){if(Pe.x>=0&&(yt>=It||vt>=Ht)){Pt=!1;break}At(W),pe+=Pe.x,Ne=pe/De}else At(ge),At(W),Pe.x>=0?yt<It?pe+=Pe.x:Pe.y>=0&&vt>=Ht&&(Pt=!1):pe+=Pe.x,Pe.y>=0?vt<Ht&&(Ne+=Pe.y):Ne+=Pe.y;pe<0&&Ne<0?(ae=L,Ne=-Ne,pe=-pe,fe-=Ne,be-=pe):pe<0?(ae=F,pe=-pe,be-=pe):Ne<0&&(ae=te,Ne=-Ne,fe-=Ne);break;case z:this.move(Pe.x,Pe.y),Pt=!1;break;case l:this.zoom(Di(B),_),Pt=!1;break;case Ke:if(!Pe.x||!Pe.y){Pt=!1;break}Cn=rn(this.cropper),be=en.startX-Cn.left,fe=en.startY-Cn.top,pe=O.minWidth,Ne=O.minHeight,Pe.x>0?ae=Pe.y>0?R:te:Pe.x<0&&(be-=pe,ae=Pe.y>0?F:L),Pe.y<0&&(fe-=Ne),this.cropped||(he(this.cropBox,q),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}Pt&&(O.width=pe,O.height=Ne,O.left=be,O.top=fe,this.action=ae,this.renderCropBox()),Rt(B,function(Bt){Bt.startX=Bt.endX,Bt.startY=Bt.endY})}},ji={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&U(this.dragBox,Oe),he(this.cropBox,q),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=wt({},this.initialImageData),this.canvasData=wt({},this.initialCanvasData),this.cropBoxData=wt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(wt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),he(this.dragBox,Oe),U(this.cropBox,q)),this},replace:function(_){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&_&&(this.isImg&&(this.element.src=_),w?(this.url=_,this.image.src=_,this.ready&&(this.viewBoxImage.src=_,Rt(this.previews,function(m){m.getElementsByTagName("img")[0].src=_}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(_))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,he(this.cropper,j)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,U(this.cropper,j)),this},destroy:function(){var _=this.element;return _[Re]?(_[Re]=void 0,this.isImg&&this.replaced&&(_.src=this.originalUrl),this.uncreate(),this):this},move:function(_){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_,m=this.canvasData,P=m.left,O=m.top;return this.moveTo(yn(_)?_:P+Number(_),yn(w)?w:O+Number(w))},moveTo:function(_){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_,m=this.canvasData,P=!1;return _=Number(_),w=Number(w),this.ready&&!this.disabled&&this.options.movable&&(lt(_)&&(m.left=_,P=!0),lt(w)&&(m.top=w,P=!0),P&&this.renderCanvas(!0)),this},zoom:function(_,w){var m=this.canvasData;return _=Number(_),_<0?_=1/(1-_):_=1+_,this.zoomTo(m.width*_/m.naturalWidth,null,w)},zoomTo:function(_,w,m){var P=this.options,O=this.canvasData,B=O.width,ae=O.height,De=O.naturalWidth,be=O.naturalHeight;if(_=Number(_),_>=0&&this.ready&&!this.disabled&&P.zoomable){var fe=De*_,pe=be*_;if(Ct(this.element,Ue,{ratio:_,oldRatio:B/De,originalEvent:m})===!1)return this;if(m){var Ne=this.pointers,yt=rn(this.cropper),vt=Ne&&Object.keys(Ne).length?Ri(Ne):{pageX:m.pageX,pageY:m.pageY};O.left-=(fe-B)*((vt.pageX-yt.left-O.left)/B),O.top-=(pe-ae)*((vt.pageY-yt.top-O.top)/ae)}else Mt(w)&&lt(w.x)&&lt(w.y)?(O.left-=(fe-B)*((w.x-O.left)/B),O.top-=(pe-ae)*((w.y-O.top)/ae)):(O.left-=(fe-B)/2,O.top-=(pe-ae)/2);O.width=fe,O.height=pe,this.renderCanvas(!0)}return this},rotate:function(_){return this.rotateTo((this.imageData.rotate||0)+Number(_))},rotateTo:function(_){return _=Number(_),lt(_)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=_%360,this.renderCanvas(!0,!0)),this},scaleX:function(_){var w=this.imageData.scaleY;return this.scale(_,lt(w)?w:1)},scaleY:function(_){var w=this.imageData.scaleX;return this.scale(lt(w)?w:1,_)},scale:function(_){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_,m=this.imageData,P=!1;return _=Number(_),w=Number(w),this.ready&&!this.disabled&&this.options.scalable&&(lt(_)&&(m.scaleX=_,P=!0),lt(w)&&(m.scaleY=w,P=!0),P&&this.renderCanvas(!0,!0)),this},getData:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,w=this.options,m=this.imageData,P=this.canvasData,O=this.cropBoxData,B;if(this.ready&&this.cropped){B={x:O.left-P.left,y:O.top-P.top,width:O.width,height:O.height};var ae=m.width/m.naturalWidth;if(Rt(B,function(fe,pe){B[pe]=fe/ae}),_){var De=Math.round(B.y+B.height),be=Math.round(B.x+B.width);B.x=Math.round(B.x),B.y=Math.round(B.y),B.width=be-B.x,B.height=De-B.y}}else B={x:0,y:0,width:0,height:0};return w.rotatable&&(B.rotate=m.rotate||0),w.scalable&&(B.scaleX=m.scaleX||1,B.scaleY=m.scaleY||1),B},setData:function(_){var w=this.options,m=this.imageData,P=this.canvasData,O={};if(this.ready&&!this.disabled&&Mt(_)){var B=!1;w.rotatable&&lt(_.rotate)&&_.rotate!==m.rotate&&(m.rotate=_.rotate,B=!0),w.scalable&&(lt(_.scaleX)&&_.scaleX!==m.scaleX&&(m.scaleX=_.scaleX,B=!0),lt(_.scaleY)&&_.scaleY!==m.scaleY&&(m.scaleY=_.scaleY,B=!0)),B&&this.renderCanvas(!0,!0);var ae=m.width/m.naturalWidth;lt(_.x)&&(O.left=_.x*ae+P.left),lt(_.y)&&(O.top=_.y*ae+P.top),lt(_.width)&&(O.width=_.width*ae),lt(_.height)&&(O.height=_.height*ae),this.setCropBoxData(O)}return this},getContainerData:function(){return this.ready?wt({},this.containerData):{}},getImageData:function(){return this.sized?wt({},this.imageData):{}},getCanvasData:function(){var _=this.canvasData,w={};return this.ready&&Rt(["left","top","width","height","naturalWidth","naturalHeight"],function(m){w[m]=_[m]}),w},setCanvasData:function(_){var w=this.canvasData,m=w.aspectRatio;return this.ready&&!this.disabled&&Mt(_)&&(lt(_.left)&&(w.left=_.left),lt(_.top)&&(w.top=_.top),lt(_.width)?(w.width=_.width,w.height=_.width/m):lt(_.height)&&(w.height=_.height,w.width=_.height*m),this.renderCanvas(!0)),this},getCropBoxData:function(){var _=this.cropBoxData,w;return this.ready&&this.cropped&&(w={left:_.left,top:_.top,width:_.width,height:_.height}),w||{}},setCropBoxData:function(_){var w=this.cropBoxData,m=this.options.aspectRatio,P,O;return this.ready&&this.cropped&&!this.disabled&&Mt(_)&&(lt(_.left)&&(w.left=_.left),lt(_.top)&&(w.top=_.top),lt(_.width)&&_.width!==w.width&&(P=!0,w.width=_.width),lt(_.height)&&_.height!==w.height&&(O=!0,w.height=_.height),m&&(P?w.height=w.width/m:O&&(w.width=w.height*m)),this.renderCropBox()),this},getCroppedCanvas:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var w=this.canvasData,m=ci(this.image,this.imageData,w,_);if(!this.cropped)return m;var P=this.getData(),O=P.x,B=P.y,ae=P.width,De=P.height,be=m.width/Math.floor(w.naturalWidth);be!==1&&(O*=be,B*=be,ae*=be,De*=be);var fe=ae/De,pe=En({aspectRatio:fe,width:_.maxWidth||Infinity,height:_.maxHeight||Infinity}),Ne=En({aspectRatio:fe,width:_.minWidth||0,height:_.minHeight||0},"cover"),yt=En({aspectRatio:fe,width:_.width||(be!==1?m.width:ae),height:_.height||(be!==1?m.height:De)}),vt=yt.width,Dt=yt.height;vt=Math.min(pe.width,Math.max(Ne.width,vt)),Dt=Math.min(pe.height,Math.max(Ne.height,Dt));var xt=document.createElement("canvas"),It=xt.getContext("2d");xt.width=fn(vt),xt.height=fn(Dt),It.fillStyle=_.fillColor||"transparent",It.fillRect(0,0,vt,Dt);var Ht=_.imageSmoothingEnabled,Pt=Ht===void 0?!0:Ht,Cn=_.imageSmoothingQuality;It.imageSmoothingEnabled=Pt,Cn&&(It.imageSmoothingQuality=Cn);var en=m.width,Pe=m.height,At=O,Bt=B,tn,un,Nn,xn,An,dn;At<=-ae||At>en?(At=0,tn=0,Nn=0,An=0):At<=0?(Nn=-At,At=0,tn=Math.min(en,ae+At),An=tn):At<=en&&(Nn=0,tn=Math.min(ae,en-At),An=tn),tn<=0||Bt<=-De||Bt>Pe?(Bt=0,un=0,xn=0,dn=0):Bt<=0?(xn=-Bt,Bt=0,un=Math.min(Pe,De+Bt),dn=un):Bt<=Pe&&(xn=0,un=Math.min(De,Pe-Bt),dn=un);var Kt=[At,Bt,tn,un];if(An>0&&dn>0){var Dn=vt/ae;Kt.push(Nn*Dn,xn*Dn,An*Dn,dn*Dn)}return It.drawImage.apply(It,[m].concat(d(Kt.map(function(Qn){return Math.floor(fn(Qn))})))),xt},setAspectRatio:function(_){var w=this.options;return!this.disabled&&!yn(_)&&(w.aspectRatio=Math.max(0,_)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(_){var w=this.options,m=this.dragBox,P=this.face;if(this.ready&&!this.disabled){var O=_===ye,B=w.movable&&_===we;_=O||B?_:K,w.dragMode=_,Qe(m,Ze,_),de(m,H,O),de(m,Fe,B),w.cropBoxMovable||(Qe(P,Ze,_),de(P,H,O),de(P,Fe,B))}return this}},Pi=ee.Cropper,an=function(){function T(_){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(r(this,T),!_||!qe.test(_.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=_,this.options=wt({},Vt,Mt(w)&&w),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return c(T,[{key:"init",value:function(){var w=this.element,m=w.tagName.toLowerCase(),P;if(!w[Re]){if(w[Re]=this,m==="img"){if(this.isImg=!0,P=w.getAttribute("src")||"",this.originalUrl=P,!P)return;P=w.src}else m==="canvas"&&window.HTMLCanvasElement&&(P=w.toDataURL());this.load(P)}}},{key:"load",value:function(w){var m=this;if(!!w){this.url=w,this.imageData={};var P=this.element,O=this.options;if(!O.rotatable&&!O.scalable&&(O.checkOrientation=!1),!O.checkOrientation||!window.ArrayBuffer){this.clone();return}if(Ce.test(w)){Le.test(w)?this.read(Qt(w)):this.clone();return}var B=new XMLHttpRequest,ae=this.clone.bind(this);this.reloading=!0,this.xhr=B,B.onabort=ae,B.onerror=ae,B.ontimeout=ae,B.onprogress=function(){B.getResponseHeader("content-type")!==ue&&B.abort()},B.onload=function(){m.read(B.response)},B.onloadend=function(){m.reloading=!1,m.xhr=null},O.checkCrossOrigin&&cn(w)&&P.crossOrigin&&(w=Hn(w)),B.open("GET",w,!0),B.responseType="arraybuffer",B.withCredentials=P.crossOrigin==="use-credentials",B.send()}}},{key:"read",value:function(w){var m=this.options,P=this.imageData,O=Kn(w),B=0,ae=1,De=1;if(O>1){this.url=Pn(w,ue);var be=Mi(O);B=be.rotate,ae=be.scaleX,De=be.scaleY}m.rotatable&&(P.rotate=B),m.scalable&&(P.scaleX=ae,P.scaleY=De),this.clone()}},{key:"clone",value:function(){var w=this.element,m=this.url,P=w.crossOrigin,O=m;this.options.checkCrossOrigin&&cn(m)&&(P||(P="anonymous"),O=Hn(m)),this.crossOrigin=P,this.crossOriginUrl=O;var B=document.createElement("img");P&&(B.crossOrigin=P),B.src=O||m,B.alt=w.alt||"The image to crop",this.image=B,B.onload=this.start.bind(this),B.onerror=this.stop.bind(this),U(B,X),w.parentNode.insertBefore(B,w.nextSibling)}},{key:"start",value:function(){var w=this,m=this.image;m.onload=null,m.onerror=null,this.sizing=!0;var P=ee.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(ee.navigator.userAgent),O=function(be,fe){wt(w.imageData,{naturalWidth:be,naturalHeight:fe,aspectRatio:be/fe}),w.initialImageData=wt({},w.imageData),w.sizing=!1,w.sized=!0,w.build()};if(m.naturalWidth&&!P){O(m.naturalWidth,m.naturalHeight);return}var B=document.createElement("img"),ae=document.body||document.documentElement;this.sizingImage=B,B.onload=function(){O(B.width,B.height),P||ae.removeChild(B)},B.src=m.src,P||(B.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",ae.appendChild(B))}},{key:"stop",value:function(){var w=this.image;w.onload=null,w.onerror=null,w.parentNode.removeChild(w),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var w=this.element,m=this.options,P=this.image,O=w.parentNode,B=document.createElement("div");B.innerHTML=Ft;var ae=B.querySelector(".".concat(Re,"-container")),De=ae.querySelector(".".concat(Re,"-canvas")),be=ae.querySelector(".".concat(Re,"-drag-box")),fe=ae.querySelector(".".concat(Re,"-crop-box")),pe=fe.querySelector(".".concat(Re,"-face"));this.container=O,this.cropper=ae,this.canvas=De,this.dragBox=be,this.cropBox=fe,this.viewBox=ae.querySelector(".".concat(Re,"-view-box")),this.face=pe,De.appendChild(P),U(w,q),O.insertBefore(ae,w.nextSibling),this.isImg||he(P,X),this.initPreview(),this.bind(),m.initialAspectRatio=Math.max(0,m.initialAspectRatio)||NaN,m.aspectRatio=Math.max(0,m.aspectRatio)||NaN,m.viewMode=Math.max(0,Math.min(3,Math.round(m.viewMode)))||0,U(fe,q),m.guides||U(fe.getElementsByClassName("".concat(Re,"-dashed")),q),m.center||U(fe.getElementsByClassName("".concat(Re,"-center")),q),m.background&&U(ae,"".concat(Re,"-bg")),m.highlight||U(pe,ne),m.cropBoxMovable&&(U(pe,Fe),Qe(pe,Ze,Ve)),m.cropBoxResizable||(U(fe.getElementsByClassName("".concat(Re,"-line")),q),U(fe.getElementsByClassName("".concat(Re,"-point")),q)),this.render(),this.ready=!0,this.setDragMode(m.dragMode),m.autoCrop&&this.crop(),this.setData(m.data),zt(m.ready)&&tt(w,oe,m.ready,{once:!0}),Ct(w,oe)}}},{key:"unbuild",value:function(){!this.ready||(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),he(this.element,q))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Pi,T}},{key:"setDefaults",value:function(w){wt(Vt,Mt(w)&&w)}}]),T}();return wt(an.prototype,Ii,ni,di,Xn,pi,ji),an})});var ns=mt((exports,module)=>{frappe.provide("frappe.model");$.extend(frappe.model,{no_value_type:["Section Break","Column Break","Tab Break","HTML","Table","Table MultiSelect","Button","Image","Fold","Heading"],layout_fields:["Section Break","Column Break","Tab Break","Fold"],std_fields_list:["name","owner","creation","modified","modified_by","_user_tags","_comments","_assign","_liked_by","docstatus","parent","parenttype","parentfield","idx"],core_doctypes_list:["DocType","DocField","DocPerm","User","Role","Has Role","Page","Module Def","Print Format","Report","Customize Form","Customize Form Field","Property Setter","Custom Field","Client Script"],std_fields:[{fieldname:"name",fieldtype:"Link",label:__("ID")},{fieldname:"owner",fieldtype:"Link",label:__("Created By"),options:"User"},{fieldname:"idx",fieldtype:"Int",label:__("Index")},{fieldname:"creation",fieldtype:"Date",label:__("Created On")},{fieldname:"modified",fieldtype:"Date",label:__("Last Updated On")},{fieldname:"modified_by",fieldtype:"Data",label:__("Last Updated By")},{fieldname:"_user_tags",fieldtype:"Data",label:__("Tags")},{fieldname:"_liked_by",fieldtype:"Data",label:__("Liked By")},{fieldname:"_comments",fieldtype:"Text",label:__("Comments")},{fieldname:"_assign",fieldtype:"Text",label:__("Assigned To")},{fieldname:"docstatus",fieldtype:"Int",label:__("Document Status")}],numeric_fieldtypes:["Int","Float","Currency","Percent","Duration"],std_fields_table:[{fieldname:"parent",fieldtype:"Data",label:__("Parent")}],table_fields:["Table","Table MultiSelect"],new_names:{},events:{},user_settings:{},init:function(){frappe.realtime.on("doc_update",function(e){frappe.views.ListView.trigger_list_update(e);var t=locals[e.doctype]&&locals[e.doctype][e.name];t&&(frappe.get_route()[0]==="Form"&&cur_frm.doc.doctype===t.doctype&&cur_frm.doc.name===t.name?!frappe.ui.form.is_saving&&e.modified!=cur_frm.doc.modified&&(t.__needs_refresh=!0,cur_frm.check_doctype_conflict()):t.__unsaved?t.__needs_refresh=!0:frappe.model.remove_from_locals(t.doctype,t.name))}),frappe.realtime.on("list_update",function(e){frappe.views.ListView.trigger_list_update(e)})},is_value_type:function(e){return typeof e=="object"&&(e=e.fieldtype),frappe.model.no_value_type.indexOf(e)===-1},is_non_std_field:function(e){return!frappe.model.std_fields_list.includes(e)},get_std_field:function(e,t=!1){var n=$.map([].concat(frappe.model.std_fields).concat(frappe.model.std_fields_table),function(r){if(r.fieldname==e)return r});if(!n.length){if(t)return{fieldname:e};frappe.msgprint(__("Unknown Column: {0}",[e]))}return n[0]},get_from_localstorage:function(e){if(localStorage["_doctype:"+e])return JSON.parse(localStorage["_doctype:"+e])},set_in_localstorage:function(e,t){try{localStorage["_doctype:"+e]=JSON.stringify(t)}catch(n){console.warn("localStorage quota exceeded, clearing doctype cache"),frappe.model.clear_local_storage(),localStorage["_doctype:"+e]=JSON.stringify(t)}},clear_local_storage:function(){for(var e in localStorage)e.startsWith("_doctype:")&&localStorage.removeItem(e)},with_doctype:function(e,t,n){if(locals.DocType[e])return t&&t(),Promise.resolve();{let r=null,s=null,c=frappe.model.get_from_localstorage(e);return c&&(s=c.filter(u=>u.name===e)[0],s&&(r=s.modified)),frappe.call({method:"frappe.desk.form.load.getdoctype",type:"GET",args:{doctype:e,with_parent:1,cached_timestamp:r},async:n,callback:function(u){if(u.exc)throw frappe.msgprint(__("Unable to load: {0}",[__(e)])),"No doctype";u.message=="use_cache"?frappe.model.sync(s):frappe.model.set_in_localstorage(e,u.docs),frappe.model.init_doctype(e),u.user_settings&&(frappe.model.user_settings[e]=JSON.parse(u.user_settings),frappe.model.user_settings[e].updated_on=moment().toString()),t&&t(u)}})}},init_doctype:function(doctype){var meta=locals.DocType[doctype];meta.__list_js&&eval(meta.__list_js),meta.__custom_list_js&&eval(meta.__custom_list_js),meta.__calendar_js&&eval(meta.__calendar_js),meta.__map_js&&eval(meta.__map_js),meta.__tree_js&&eval(meta.__tree_js),meta.__templates&&$.extend(frappe.templates,meta.__templates)},with_doc:function(e,t,n){return new Promise(r=>{if(t||(t=e),locals[e]&&locals[e][t]&&frappe.model.get_docinfo(e,t))n&&n(t),r(frappe.get_doc(e,t));else return frappe.call({method:"frappe.desk.form.load.getdoc",type:"GET",args:{doctype:e,name:t},callback:function(s){n&&n(t,s),r(frappe.get_doc(e,t))}})})},get_docinfo:function(e,t){return frappe.model.docinfo[e]&&frappe.model.docinfo[e][t]||null},set_docinfo:function(e,t,n,r){frappe.model.docinfo[e]&&frappe.model.docinfo[e][t]&&(frappe.model.docinfo[e][t][n]=r)},get_shared:function(e,t){return frappe.model.get_docinfo(e,t).shared},get_server_module_name:function(e){var t=frappe.model.scrub(e),n=frappe.model.scrub(locals.DocType[e].module),r=frappe.boot.module_app[n];return r+"."+n+".doctype."+t+"."+t},scrub:function(e){return e.replace(/ /g,"_").toLowerCase()},unscrub:function(e){return __(e||"").replace(/-|_/g," ").replace(/\w*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})},can_create:function(e){return frappe.boot.user.can_create.indexOf(e)!==-1},can_select:function(e){if(frappe.boot.user)return frappe.boot.user.can_select.indexOf(e)!==-1},can_read:function(e){if(frappe.boot.user)return frappe.boot.user.can_read.indexOf(e)!==-1},can_write:function(e){return frappe.boot.user.can_write.indexOf(e)!==-1},can_get_report:function(e){return frappe.boot.user.can_get_report.indexOf(e)!==-1},can_delete:function(e){return e?frappe.boot.user.can_delete.indexOf(e)!==-1:!1},can_cancel:function(e){return e?frappe.boot.user.can_cancel.indexOf(e)!==-1:!1},has_workflow:function(e){return frappe.get_list("Workflow",{document_type:e,is_active:1}).length},is_submittable:function(e){return e?locals.DocType[e]&&locals.DocType[e].is_submittable:!1},is_table:function(e){return e?locals.DocType[e]&&locals.DocType[e].istable:!1},is_single:function(e){return e?frappe.boot.single_types.indexOf(e)!=-1:!1},is_tree:function(e){return e?frappe.boot.treeviews.indexOf(e)!=-1:!1},is_fresh(e){return e&&e.__last_sync_on&&new Date-e.__last_sync_on<5e3},can_import:function(e,t,n=null){return n&&!n.allow_import?!1:frappe.user_roles.includes("System Manager")?!0:t?t.perm[0].import===1:frappe.boot.user.can_import.indexOf(e)!==-1},can_export:function(e,t){return frappe.user_roles.includes("System Manager")?!0:t?t.perm[0].export===1:frappe.boot.user.can_export.indexOf(e)!==-1},can_print:function(e,t){return t?t.perm[0].print===1:frappe.boot.user.can_print.indexOf(e)!==-1},can_email:function(e,t){return t?t.perm[0].email===1:frappe.boot.user.can_email.indexOf(e)!==-1},can_share:function(e,t){return t?t.perm[0].share===1:frappe.boot.user.can_share.indexOf(e)!==-1},can_set_user_permissions:function(e,t){return frappe.user_roles.includes("System Manager")?!0:t?t.perm[0].set_user_permissions===1:frappe.boot.user.can_set_user_permissions.indexOf(e)!==-1},has_value:function(e,t,n){var r=locals[e]&&locals[e][t]&&locals[e][t][n],s=frappe.meta.get_docfield(e,n,t);if(frappe.model.table_fields.includes(s.fieldtype)){var c=!1;$.each(locals[s.options]||{},function(u,d){if(d.parent==t&&d.parenttype==e&&d.parentfield==s.fieldname)return c=!0,!1})}else var c=!is_null(r);return!!c},get_list:function(e,t){var n=locals[e]||locals[":"+e]||{};return $.isEmptyObject(n)?[]:frappe.utils.filter_dict(n,t)},get_value:function(e,t,n,r){if(r)frappe.call({method:"frappe.client.get_value",args:{doctype:e,fieldname:n,filters:t},callback:function(c){c.exc||r(c.message)}});else{if(typeof t=="string"&&locals[e]&&locals[e][t])return locals[e][t][n];var s=frappe.get_list(e,t);return s.length&&s[0]?s[0][n]:null}},set_value:function(e,t,n,r,s){var c;$.isPlainObject(e)?(c=e,n=t,r=n):c=locals[e]&&locals[e][t];let u=n,d=[];return $.isPlainObject(u)||(u={},u[n]=r),$.each(u,(C,v)=>{c&&c[C]!==v?(c.__unedited&&!(!c[C]&&!v)&&(c.__unedited=!1),c[C]=v,d.push(()=>frappe.model.trigger(C,v,c))):in_list(["Link","Dynamic Link"],s)&&c&&d.push(()=>frappe.model.trigger(C,v,c))}),frappe.run_serially(d)},on:function(e,t,n){frappe.provide("frappe.model.events."+e),frappe.model.events[e][t]||(frappe.model.events[e][t]=[]),frappe.model.events[e][t].push(n)},trigger:function(e,t,n){let r=[];function s(c){if(!!c)for(let u of c)!u||r.push(()=>{let d=u(e,t,n);return d&&d.then?d:frappe.after_server_call()})}return frappe.model.events[n.doctype]&&(s(frappe.model.events[n.doctype][e]),s(frappe.model.events[n.doctype]["*"])),frappe.run_serially(r)},get_doc:function(e,t){if(t||(t=e),$.isPlainObject(t)){var n=frappe.get_list(e,t);return n&&n.length?n[0]:null}return locals[e]?locals[e][t]:null},get_children:function(e,t,n,r){if($.isPlainObject(e))var s=e,r=n,n=t;else var s=frappe.get_doc(e,t);var c=s[n]||[];return r?frappe.utils.filter_dict(c,r):c},clear_table:function(e,t){for(var n=0,r=(e[t]||[]).length;n<r;n++){var s=e[t][n];delete locals[s.doctype][s.name]}e[t]=[]},remove_from_locals:function(e,t){this.clear_doc(e,t),frappe.views.formview[e]&&delete frappe.views.formview[e].frm.opendocs[t]},clear_doc:function(e,t){var n=locals[e]&&locals[e][t];if(!!n){var r=null;if(n.parenttype)var r=n.parent,s=n.parenttype,c=n.parentfield;if(delete locals[e][t],r){var u=locals[s][r],d=[],C=1;$.each(u[c],function(v,p){p.name!=t&&(d.push(p),p.idx=C,C++),u[c]=d})}}},get_no_copy_list:function(e){for(var t=["name","amended_from","amendment_date","cancel_reason"],n=frappe.get_doc("DocType",e).fields||[],r=0,s=n.length;r<s;r++){var c=n[r];cint(c.no_copy)&&t.push(c.fieldname)}return t},delete_doc:function(e,t,n){var r=t,s=frappe.get_meta(e).title_field;if(frappe.get_meta(e).autoname=="hash"&&s){var r=frappe.model.get_value(e,t,s);r+=" ("+t+")"}frappe.confirm(__("Permanently delete {0}?",[r]),function(){return frappe.call({method:"frappe.client.delete",args:{doctype:e,name:t},callback:function(c,u){c.exc||(frappe.utils.play_sound("delete"),frappe.model.clear_doc(e,t),n&&n(c,u))}})})},rename_doc:function(e,t,n){let r=__("Merge with existing"),s=__("This cannot be undone"),c=r+" <b>("+s+")</b>";var u=new frappe.ui.Dialog({title:__("Rename {0}",[__(t)]),fields:[{label:__("New Name"),fieldname:"new_name",fieldtype:"Data",reqd:1,default:t},{label:c,fieldtype:"Check",fieldname:"merge"}]});u.set_primary_action(__("Rename"),function(){var d=u.get_values();if(!!d)return frappe.call({method:"frappe.rename_doc",args:{doctype:e,old:t,new:d.new_name,merge:d.merge},btn:u.get_primary_btn(),callback:function(C,v){C.exc||($(document).trigger("rename",[e,t,C.message||d.new_name]),locals[e]&&locals[e][t]&&delete locals[e][t],u.hide(),n&&n(C.message))}})}),u.show()},round_floats_in:function(e,t){t||(t=frappe.meta.get_fieldnames(e.doctype,e.parent,{fieldtype:["in",["Currency","Float"]]}));for(var n=0,r=t.length;n<r;n++){var s=t[n];e[s]=flt(e[s],precision(s,e))}},validate_missing:function(e,t){e[t]||frappe.throw(__("Please specify")+": "+__(frappe.meta.get_label(e.doctype,t,e.parent||e.name)))},get_all_docs:function(e){var t=[e];for(var n in e)if($.isArray(e[n]))for(var r=e[n],s=0,c=r.length;s<c;s++)t.push(r[s]);return t},get_full_column_name:function(e,t){return e.includes("`tab")?e:"`tab"+t+"`.`"+e+"`"},is_numeric_field:function(e){if(!!e)return typeof e=="object"&&(e=e.fieldtype),frappe.model.numeric_fieldtypes.includes(e)}});frappe.get_doc=frappe.model.get_doc;frappe.get_children=frappe.model.get_children;frappe.get_list=frappe.model.get_list;var getchildren=function(e,t,n){var r=[];return $.each(locals[e]||{},function(s,c){c.parent===t&&c.parentfield===n&&r.push(c)}),r}});var gs=mt((Yc,is)=>{function qr(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];typeof n=="object"&&!Object.isFrozen(n)&&qr(n)}),e}var rs=qr,Yl=qr;rs.default=Yl;var $r=class{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data}ignoreMatch(){this.ignore=!0}};function Yn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function In(e,...t){let n=Object.create(null);for(let r in e)n[r]=e[r];return t.forEach(function(r){for(let s in r)n[s]=r[s]}),n}function Wr(e){return e.nodeName.toLowerCase()}function Gl(e){let t=[];return function n(r,s){for(let c=r.firstChild;c;c=c.nextSibling)c.nodeType===3?s+=c.nodeValue.length:c.nodeType===1&&(t.push({event:"start",offset:s,node:c}),s=n(c,s),Wr(c).match(/br|hr|img|input/)||t.push({event:"stop",offset:s,node:c}));return s}(e,0),t}function Kl(e,t,n){let r=0,s="",c=[];function u(){return!e.length||!t.length?e.length?e:t:e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:t[0].event==="start"?e:t}function d(p){function x(A){return" "+A.nodeName+'="'+Yn(A.value)+'"'}s+="<"+Wr(p)+[].map.call(p.attributes,x).join("")+">"}function C(p){s+="</"+Wr(p)+">"}function v(p){(p.event==="start"?d:C)(p.node)}for(;e.length||t.length;){let p=u();if(s+=Yn(n.substring(r,p[0].offset)),r=p[0].offset,p===e){c.reverse().forEach(C);do v(p.splice(0,1)[0]),p=u();while(p===e&&p.length&&p[0].offset===r);c.reverse().forEach(d)}else p[0].event==="start"?c.push(p[0].node):c.pop(),v(p.splice(0,1)[0])}return s+Yn(n.substr(r))}var Xl=Object.freeze({__proto__:null,escapeHTML:Yn,inherit:In,nodeStream:Gl,mergeStreams:Kl}),Ql="</span>",as=e=>!!e.kind,ss=class{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Yn(t)}openNode(t){if(!as(t))return;let n=t.kind;t.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(t){!as(t)||(this.buffer+=Ql)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}},ki=class{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){let n={kind:t,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(r=>this._walk(t,r)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&(!t.children||(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{ki._collapse(n)})))}},os=class extends ki{constructor(t){super();this.options=t}addKeyword(t,n){t!==""&&(this.openNode(n),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,n){let r=t.root;r.kind=n,r.sublanguage=!0,this.add(r)}toHTML(){return new ss(this,this.options).value()}finalize(){return!0}};function Jl(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function Si(e){return e?typeof e=="string"?e:e.source:null}function Zl(...e){return e.map(n=>Si(n)).join("")}function ef(e){return new RegExp(e.toString()+"|").exec("").length-1}function tf(e,t){let n=e&&e.exec(t);return n&&n.index===0}function nf(e,t="|"){let n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,s="";for(let c=0;c<e.length;c++){r+=1;let u=r,d=Si(e[c]);for(c>0&&(s+=t),s+="(";d.length>0;){let C=n.exec(d);if(C==null){s+=d;break}s+=d.substring(0,C.index),d=d.substring(C.index+C[0].length),C[0][0]==="\\"&&C[1]?s+="\\"+String(Number(C[1])+u):(s+=C[0],C[0]==="("&&r++)}s+=")"}return s}var ls="[a-zA-Z]\\w*",Ur="[a-zA-Z_]\\w*",Vr="\\b\\d+(\\.\\d+)?",fs="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",cs="\\b(0b[01]+)",rf="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",af=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=Zl(t,/.*\b/,e.binary,/\b.*/)),In({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},e)},fi={begin:"\\\\[\\s\\S]",relevance:0},sf={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[fi]},of={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[fi]},us={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Oi=function(e,t,n={}){let r=In({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(us),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},lf=Oi("//","$"),ff=Oi("/\\*","\\*/"),cf=Oi("#","$"),uf={className:"number",begin:Vr,relevance:0},df={className:"number",begin:fs,relevance:0},pf={className:"number",begin:cs,relevance:0},hf={className:"number",begin:Vr+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},_f={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[fi,{begin:/\[/,end:/\]/,relevance:0,contains:[fi]}]}]},gf={className:"title",begin:ls,relevance:0},mf={className:"title",begin:Ur,relevance:0},vf={begin:"\\.\\s*"+Ur,relevance:0},bf=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})},Ni=Object.freeze({__proto__:null,IDENT_RE:ls,UNDERSCORE_IDENT_RE:Ur,NUMBER_RE:Vr,C_NUMBER_RE:fs,BINARY_NUMBER_RE:cs,RE_STARTERS_RE:rf,SHEBANG:af,BACKSLASH_ESCAPE:fi,APOS_STRING_MODE:sf,QUOTE_STRING_MODE:of,PHRASAL_WORDS_MODE:us,COMMENT:Oi,C_LINE_COMMENT_MODE:lf,C_BLOCK_COMMENT_MODE:ff,HASH_COMMENT_MODE:cf,NUMBER_MODE:uf,C_NUMBER_MODE:df,BINARY_NUMBER_MODE:pf,CSS_NUMBER_MODE:hf,REGEXP_MODE:_f,TITLE_MODE:gf,UNDERSCORE_TITLE_MODE:mf,METHOD_GUARD:vf,END_SAME_AS_BEGIN:bf}),yf=["of","and","for","in","not","or","if","then","parent","list","value"];function Cf(e){function t(d,C){return new RegExp(Si(d),"m"+(e.case_insensitive?"i":"")+(C?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(C,v){v.position=this.position++,this.matchIndexes[this.matchAt]=v,this.regexes.push([v,C]),this.matchAt+=ef(C)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let C=this.regexes.map(v=>v[1]);this.matcherRe=t(nf(C),!0),this.lastIndex=0}exec(C){this.matcherRe.lastIndex=this.lastIndex;let v=this.matcherRe.exec(C);if(!v)return null;let p=v.findIndex((A,V)=>V>0&&A!==void 0),x=this.matchIndexes[p];return v.splice(0,p),Object.assign(v,x)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(C){if(this.multiRegexes[C])return this.multiRegexes[C];let v=new n;return this.rules.slice(C).forEach(([p,x])=>v.addRule(p,x)),v.compile(),this.multiRegexes[C]=v,v}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(C,v){this.rules.push([C,v]),v.type==="begin"&&this.count++}exec(C){let v=this.getMatcher(this.regexIndex);v.lastIndex=this.lastIndex;let p=v.exec(C);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){let x=this.getMatcher(0);x.lastIndex=this.lastIndex+1,p=x.exec(C)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}function s(d){let C=new r;return d.contains.forEach(v=>C.addRule(v.begin,{rule:v,type:"begin"})),d.terminator_end&&C.addRule(d.terminator_end,{type:"end"}),d.illegal&&C.addRule(d.illegal,{type:"illegal"}),C}function c(d,C){d.input[d.index-1]==="."&&C.ignoreMatch()}function u(d,C){let v=d;if(d.compiled)return v;d.compiled=!0,d.__beforeBegin=null,d.keywords=d.keywords||d.beginKeywords;let p=null;if(typeof d.keywords=="object"&&(p=d.keywords.$pattern,delete d.keywords.$pattern),d.keywords&&(d.keywords=Ef(d.keywords,e.case_insensitive)),d.lexemes&&p)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return v.keywordPatternRe=t(d.lexemes||p||/\w+/,!0),C&&(d.beginKeywords&&(d.begin="\\b("+d.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",d.__beforeBegin=c),d.begin||(d.begin=/\B|\b/),v.beginRe=t(d.begin),d.endSameAsBegin&&(d.end=d.begin),!d.end&&!d.endsWithParent&&(d.end=/\B|\b/),d.end&&(v.endRe=t(d.end)),v.terminator_end=Si(d.end)||"",d.endsWithParent&&C.terminator_end&&(v.terminator_end+=(d.end?"|":"")+C.terminator_end)),d.illegal&&(v.illegalRe=t(d.illegal)),d.relevance===void 0&&(d.relevance=1),d.contains||(d.contains=[]),d.contains=[].concat(...d.contains.map(function(x){return wf(x==="self"?d:x)})),d.contains.forEach(function(x){u(x,v)}),d.starts&&u(d.starts,C),v.matcher=s(v),v}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=In(e.classNameAliases||{}),u(e)}function ds(e){return e?e.endsWithParent||ds(e.starts):!1}function wf(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return In(e,{variants:null},t)})),e.cached_variants?e.cached_variants:ds(e)?In(e,{starts:e.starts?In(e.starts):null}):Object.isFrozen(e)?In(e):e}function Ef(e,t){let n={};return typeof e=="string"?r("keyword",e):Object.keys(e).forEach(function(s){r(s,e[s])}),n;function r(s,c){t&&(c=c.toLowerCase()),c.split(" ").forEach(function(u){let d=u.split("|");n[d[0]]=[s,xf(d[0],d[1])]})}}function xf(e,t){return t?Number(t):Af(e)?0:1}function Af(e){return yf.includes(e.toLowerCase())}var Tf="10.4.1";function kf(e){return Boolean(e||e==="")}function Sf(e){let t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Yn(this.code);let r;return this.autoDetect?(r=e.highlightAuto(this.code),this.detectedLanguage=r.language):(r=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),r.value},autoDetect(){return!this.language||kf(this.autodetect)},ignoreIllegals(){return!0}},render(r){return r("pre",{},[r("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(r){r.component("highlightjs",t)}}}}var Yr=Yn,ps=In,{nodeStream:hs,mergeStreams:Of}=Xl,_s=Symbol("nomatch"),Nf=function(e){let t=[],n=Object.create(null),r=Object.create(null),s=[],c=!0,u=/(^(<[^>]+>|\t|)+|\n)/gm,d="Could not find the language '{}', did you forget to load/include a language module?",C={disableAutodetect:!0,name:"Plain text",contains:[]},v={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:os};function p(j){return v.noHighlightRe.test(j)}function x(j){let q=j.className+" ";q+=j.parentNode?j.parentNode.className:"";let X=v.languageDetectRe.exec(q);if(X){let ne=se(X[1]);return ne||(console.warn(d.replace("{}",X[1])),console.warn("Falling back to no-highlight mode for this block.",j)),ne?X[1]:"no-highlight"}return q.split(/\s+/).find(ne=>p(ne)||se(ne))}function A(j,q,X,ne){let Oe={code:q,language:j};F("before:highlight",Oe);let Fe=Oe.result?Oe.result:V(Oe.language,Oe.code,X,ne);return Fe.code=Oe.code,F("after:highlight",Fe),Fe}function V(j,q,X,ne){let Oe=q;function Fe(Ce,Le){let qe=ot.case_insensitive?Le[0].toLowerCase():Le[0];return Object.prototype.hasOwnProperty.call(Ce.keywords,qe)&&Ce.keywords[qe]}function Ze(){if(!Z.keywords){oe.addText(ke);return}let Ce=0;Z.keywordPatternRe.lastIndex=0;let Le=Z.keywordPatternRe.exec(ke),qe="";for(;Le;){qe+=ke.substring(Ce,Le.index);let Je=Fe(Z,Le);if(Je){let[kt,Vt]=Je;oe.addText(qe),qe="",ze+=Vt;let Ft=ot.classNameAliases[kt]||kt;oe.addKeyword(Le[0],Ft)}else qe+=Le[0];Ce=Z.keywordPatternRe.lastIndex,Le=Z.keywordPatternRe.exec(ke)}qe+=ke.substr(Ce),oe.addText(qe)}function je(){if(ke==="")return;let Ce=null;if(typeof Z.subLanguage=="string"){if(!n[Z.subLanguage]){oe.addText(ke);return}Ce=V(Z.subLanguage,ke,!0,He[Z.subLanguage]),He[Z.subLanguage]=Ce.top}else Ce=Se(ke,Z.subLanguage.length?Z.subLanguage:null);Z.relevance>0&&(ze+=Ce.relevance),oe.addSublanguage(Ce.emitter,Ce.language)}function ye(){Z.subLanguage!=null?je():Ze(),ke=""}function we(Ce){return Ce.className&&oe.openNode(ot.classNameAliases[Ce.className]||Ce.className),Z=Object.create(Ce,{parent:{value:Z}}),Z}function K(Ce,Le,qe){let Je=tf(Ce.endRe,qe);if(Je){if(Ce["on:end"]){let kt=new $r(Ce);Ce["on:end"](Le,kt),kt.ignore&&(Je=!1)}if(Je){for(;Ce.endsParent&&Ce.parent;)Ce=Ce.parent;return Ce}}if(Ce.endsWithParent)return K(Ce.parent,Le,qe)}function Q(Ce){return Z.matcher.regexIndex===0?(ke+=Ce[0],1):(nt=!0,0)}function Ee(Ce){let Le=Ce[0],qe=Ce.rule,Je=new $r(qe),kt=[qe.__beforeBegin,qe["on:begin"]];for(let Vt of kt)if(!!Vt&&(Vt(Ce,Je),Je.ignore))return Q(Le);return qe&&qe.endSameAsBegin&&(qe.endRe=Jl(Le)),qe.skip?ke+=Le:(qe.excludeBegin&&(ke+=Le),ye(),!qe.returnBegin&&!qe.excludeBegin&&(ke=Le)),we(qe),qe.returnBegin?0:Le.length}function Ie(Ce){let Le=Ce[0],qe=Oe.substr(Ce.index),Je=K(Z,Ce,qe);if(!Je)return _s;let kt=Z;kt.skip?ke+=Le:(kt.returnEnd||kt.excludeEnd||(ke+=Le),ye(),kt.excludeEnd&&(ke=Le));do Z.className&&oe.closeNode(),!Z.skip&&!Z.subLanguage&&(ze+=Z.relevance),Z=Z.parent;while(Z!==Je.parent);return Je.starts&&(Je.endSameAsBegin&&(Je.starts.endRe=Je.endRe),we(Je.starts)),kt.returnEnd?0:Le.length}function le(){let Ce=[];for(let Le=Z;Le!==ot;Le=Le.parent)Le.className&&Ce.unshift(Le.className);Ce.forEach(Le=>oe.openNode(Le))}let Ye={};function dt(Ce,Le){let qe=Le&&Le[0];if(ke+=Ce,qe==null)return ye(),0;if(Ye.type==="begin"&&Le.type==="end"&&Ye.index===Le.index&&qe===""){if(ke+=Oe.slice(Le.index,Le.index+1),!c){let Je=new Error("0 width match regex");throw Je.languageName=j,Je.badRule=Ye.rule,Je}return 1}if(Ye=Le,Le.type==="begin")return Ee(Le);if(Le.type==="illegal"&&!X){let Je=new Error('Illegal lexeme "'+qe+'" for mode "'+(Z.className||"<unnamed>")+'"');throw Je.mode=Z,Je}else if(Le.type==="end"){let Je=Ie(Le);if(Je!==_s)return Je}if(Le.type==="illegal"&&qe==="")return 1;if(ue>1e5&&ue>Le.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ke+=qe,qe.length}let ot=se(j);if(!ot)throw console.error(d.replace("{}",j)),new Error('Unknown language: "'+j+'"');let gt=Cf(ot),We="",Z=ne||gt,He={},oe=new v.__emitter(v);le();let ke="",ze=0,Ue=0,ue=0,nt=!1;try{for(Z.matcher.considerAll();;){ue++,nt?nt=!1:Z.matcher.considerAll(),Z.matcher.lastIndex=Ue;let Ce=Z.matcher.exec(Oe);if(!Ce)break;let Le=Oe.substring(Ue,Ce.index),qe=dt(Le,Ce);Ue=Ce.index+qe}return dt(Oe.substr(Ue)),oe.closeAllNodes(),oe.finalize(),We=oe.toHTML(),{relevance:ze,value:We,language:j,illegal:!1,emitter:oe,top:Z}}catch(Ce){if(Ce.message&&Ce.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:Ce.message,context:Oe.slice(Ue-100,Ue+100),mode:Ce.mode},sofar:We,relevance:0,value:Yr(Oe),emitter:oe};if(c)return{illegal:!1,relevance:0,value:Yr(Oe),emitter:oe,language:j,top:Z,errorRaised:Ce};throw Ce}}function ee(j){let q={relevance:0,emitter:new v.__emitter(v),value:Yr(j),illegal:!1,top:C};return q.emitter.addText(j),q}function Se(j,q){q=q||v.languages||Object.keys(n);let X=ee(j),ne=q.filter(se).filter(L).map(ye=>V(ye,j,!1));ne.unshift(X);let Oe=ne.sort((ye,we)=>{if(ye.relevance!==we.relevance)return we.relevance-ye.relevance;if(ye.language&&we.language){if(se(ye.language).supersetOf===we.language)return 1;if(se(we.language).supersetOf===ye.language)return-1}return 0}),[Fe,Ze]=Oe,je=Fe;return je.second_best=Ze,je}function ve(j){return v.tabReplace||v.useBR?j.replace(u,q=>q===`
`?v.useBR?"<br>":q:v.tabReplace?q.replace(/\t/g,v.tabReplace):q):j}function Re(j,q,X){let ne=q?r[q]:X,Oe=[j.trim()];return j.match(/\bhljs\b/)||Oe.push("hljs"),j.includes(ne)||Oe.push(ne),Oe.join(" ").trim()}function Ve(j){let q=null,X=x(j);if(p(X))return;F("before:highlightBlock",{block:j,language:X}),v.useBR?(q=document.createElement("div"),q.innerHTML=j.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`)):q=j;let ne=q.textContent,Oe=X?A(X,ne,!0):Se(ne),Fe=hs(q);if(Fe.length){let Ze=document.createElement("div");Ze.innerHTML=Oe.value,Oe.value=Of(Fe,hs(Ze),ne)}Oe.value=ve(Oe.value),F("after:highlightBlock",{block:j,result:Oe}),j.innerHTML=Oe.value,j.className=Re(j.className,X,Oe.language),j.result={language:Oe.language,re:Oe.relevance,relavance:Oe.relevance},Oe.second_best&&(j.second_best={language:Oe.second_best.language,re:Oe.second_best.relevance,relavance:Oe.second_best.relevance})}function Ke(j){j.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),v=ps(v,j)}let z=()=>{if(z.called)return;z.called=!0;let j=document.querySelectorAll("pre code");t.forEach.call(j,Ve)};function l(){window.addEventListener("DOMContentLoaded",z,!1)}function W(j,q){let X=null;try{X=q(e)}catch(ne){if(console.error("Language definition for '{}' could not be registered.".replace("{}",j)),c)console.error(ne);else throw ne;X=C}X.name||(X.name=j),n[j]=X,X.rawDefinition=q.bind(null,e),X.aliases&&te(X.aliases,{languageName:j})}function re(){return Object.keys(n)}function ge(j){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");let q=se(j);if(q)return q;throw new Error("The '{}' language is required, but not loaded.".replace("{}",j))}function se(j){return j=(j||"").toLowerCase(),n[j]||n[r[j]]}function te(j,{languageName:q}){typeof j=="string"&&(j=[j]),j.forEach(X=>{r[X]=q})}function L(j){let q=se(j);return q&&!q.disableAutodetect}function R(j){s.push(j)}function F(j,q){let X=j;s.forEach(function(ne){ne[X]&&ne[X](q)})}function H(j){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),ve(j)}Object.assign(e,{highlight:A,highlightAuto:Se,fixMarkup:H,highlightBlock:Ve,configure:Ke,initHighlighting:z,initHighlightingOnLoad:l,registerLanguage:W,listLanguages:re,getLanguage:se,registerAliases:te,requireLanguage:ge,autoDetection:L,inherit:ps,addPlugin:R,vuePlugin:Sf(e).VuePlugin}),e.debugMode=function(){c=!1},e.safeMode=function(){c=!0},e.versionString=Tf;for(let j in Ni)typeof Ni[j]=="object"&&rs(Ni[j]);return Object.assign(e,Ni),e},Df=Nf({});is.exports=Df});var ys=mt((Gc,ms)=>{var vs="[A-Za-z$_][0-9A-Za-z$_]*",Rf=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Lf=["true","false","null","undefined","NaN","Infinity"],Mf=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],If=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],jf=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Pf=["arguments","this","super","console","window","document","localStorage","module","global"],Bf=[].concat(jf,Pf,Mf,If);function Ff(e){return e?typeof e=="string"?e:e.source:null}function bs(e){return Gr("(?=",e,")")}function Gr(...e){return e.map(n=>Ff(n)).join("")}function zf(e){let t=(z,{after:l})=>{let W="</"+z[0].slice(1);return z.input.indexOf(W,l)!==-1},n=vs,r={begin:"<>",end:"</>"},s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(z,l)=>{let W=z[0].length+z.index,re=z.input[W];if(re==="<"){l.ignoreMatch();return}re===">"&&(t(z,{after:W})||l.ignoreMatch())}},c={$pattern:vs,keyword:Rf.join(" "),literal:Lf.join(" "),built_in:Bf.join(" ")},u="[0-9](_?[0-9])*",d=`\\.(${u})`,C="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${C})((${d})|\\.)?|(${d}))[eE][+-]?(${u})\\b`},{begin:`\\b(${C})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},x={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},A={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},V={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},ee=e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),Se={className:"comment",variants:[ee,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},ve=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,x,A,V,v,e.REGEXP_MODE];p.contains=ve.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(ve)});let Re=[].concat(Se,p.contains),Ve=Re.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(Re)}]),Ke={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:Ve};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:Ve},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,x,A,V,Se,v,{begin:Gr(/[{,\n]\s*/,bs(Gr(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+bs("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[Se,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:Ve}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:r.begin,end:r.end},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),Ke],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[Ke,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",Ke]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},Ke]},{begin:/\$[(.]/}]}}ms.exports=zf});var Es=mt((Kc,ws)=>{function Hf(e){let t=["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],n=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],r=["__debug__","Ellipsis","False","None","NotImplemented","True"],s={keyword:t.join(" "),built_in:n.join(" "),literal:r.join(" ")},c={className:"meta",begin:/^(>>>|\.\.\.) /},u={className:"subst",begin:/\{/,end:/\}/,keywords:s,illegal:/#/},d={begin:/\{\{/,relevance:0},C={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,c],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,c,d,u]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,c,d,u]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,d,u]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,d,u]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},v="[0-9](_?[0-9])*",p=`(\\b(${v}))?\\.(${v})|\\b(${v})\\.`,x={className:"number",relevance:0,variants:[{begin:`(\\b(${v})|(${p}))[eE][+-]?(${v})[jJ]?\\b`},{begin:`(${p})[jJ]?`},{begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${v})[jJ]\\b`}]},A={className:"params",variants:[{begin:/\(\s*\)/,skip:!0,className:null},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:["self",c,x,C,e.HASH_COMMENT_MODE]}]};return u.contains=[C,x,c],{name:"Python",aliases:["py","gyp","ipython"],keywords:s,illegal:/(<\/|->|\?)|=>/,contains:[c,x,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},C,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,A,{begin:/->/,endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[x,A,C]},{begin:/\b(print|exec)\(/}]}}ws.exports=Hf});var Ts=mt((Xc,Cs)=>{function xs(e){return e?typeof e=="string"?e:e.source:null}function As(e){return Gn("(?=",e,")")}function qf(e){return Gn("(",e,")?")}function Gn(...e){return e.map(n=>xs(n)).join("")}function $f(...e){return"("+e.map(n=>xs(n)).join("|")+")"}function Wf(e){let t=Gn(/[A-Z_]/,qf(/[A-Z0-9_.-]+:/),/[A-Z0-9_.-]*/),n="[A-Za-z0-9\\._:-]+",r={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},s={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},c=e.inherit(s,{begin:"\\(",end:"\\)"}),u=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),d=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),C={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:n,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[s,d,u,c,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[s,c,d,u]}]}]},e.COMMENT("<!--","-->",{relevance:10}),{begin:"<!\\[CDATA\\[",end:"\\]\\]>",relevance:10},r,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[C],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[C],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:Gn(/</,As(Gn(t,$f(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:C}]},{className:"tag",begin:Gn(/<\//,As(Gn(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0}]}]}}Cs.exports=Wf});var Ss=mt((Qc,ks)=>{function Uf(e){let t={begin:/\|[A-Za-z]+:?/,keywords:{name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"},contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE]};return{name:"Django",aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{%\s*comment\s*%\}/,/\{%\s*endcomment\s*%\}/),e.COMMENT(/\{#/,/#\}/),{className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",begin:/\w+/,keywords:{name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"},starts:{endsWithParent:!0,keywords:"in by as",contains:[t],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}ks.exports=Uf});var Ns=mt((Jc,Os)=>{function Vf(e){return e?typeof e=="string"?e:e.source:null}function Yf(...e){return e.map(n=>Vf(n)).join("")}function Gf(e){let t={},n={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:Yf(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});let r={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},s={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,r]};r.contains.push(c);let u={className:"",begin:/\\"/},d={className:"string",begin:/'/,end:/'/},C={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},v=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],p=e.SHEBANG({binary:`(${v.join("|")})`,relevance:10}),x={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"},contains:[p,e.SHEBANG(),x,C,e.HASH_COMMENT_MODE,s,c,u,d,t]}}Os.exports=Gf});var Rs=mt((Zc,Ds)=>{function Kf(e){var t={begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},n={className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[t,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}},r="@[a-z-]+",s="and or not only",c=/@-?\w[\w]*(-\w+)*/,u="[a-zA-Z-][a-zA-Z0-9_-]*",d={begin:/([*]\s?)?(?:[A-Z_.\-\\]+|--[a-zA-Z0-9_-]+)\s*(\/\*\*\/)?:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[n]};return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:"\\."+u},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9_+()"'.-]+/},{begin:"@(page|font-face)",lexemes:r,keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:!0,contains:[{className:"keyword",begin:c},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:s,contains:[{begin:/[a-z-]+:/,className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:u,relevance:0},{begin:/\{/,end:/\}/,illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,{begin:/;/},d]}]}}Ds.exports=Kf});var Ms=mt((eu,Ls)=>{function Xf(e){return e?typeof e=="string"?e:e.source:null}function Qf(...e){return e.map(n=>Xf(n)).join("")}function Jf(e){let t={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},n={begin:"^[-\\*]{3,}",end:"$"},r={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},c={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},d={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:Qf(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.+?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},C={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},v={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};C.contains.push(v),v.contains.push(C);let p=[t,d];return C.contains=C.contains.concat(p),v.contains=v.contains.concat(p),p=p.concat(C,v),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:p},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:p}]}]},t,s,C,v,{className:"quote",begin:"^>\\s+",contains:p,end:"$"},r,n,d,c]}}Ls.exports=Jf});var js=mt((tu,Is)=>{function Zf(e){return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,variants:[{begin:/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/},{begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{begin:/^--- +\d+,\d+ +----$/}]},{className:"comment",variants:[{begin:/Index: /,end:/$/},{begin:/^index/,end:/$/},{begin:/={3,}/,end:/$/},{begin:/^-{3}/,end:/$/},{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{begin:/^\*{15}$/},{begin:/^diff --git/,end:/$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}Is.exports=Zf});var Bs=mt((nu,Ps)=>{function ec(e){let t={literal:"true false null"},n=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],r=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],s={end:",",endsWithParent:!0,excludeEnd:!0,contains:r,keywords:t},c={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(s,{begin:/:/})].concat(n),illegal:"\\S"},u={begin:"\\[",end:"\\]",contains:[e.inherit(s)],illegal:"\\S"};return r.push(c,u),n.forEach(function(d){r.push(d)}),{name:"JSON",contains:r,keywords:t,illegal:"\\S"}}Ps.exports=ec});var zs=mt((iu,Fs)=>{function tc(e){var t="[\\w-]+",n="("+t+"|@\\{"+t+"\\})",r=[],s=[],c=function(ee){return{className:"string",begin:"~?"+ee+".*?"+ee}},u=function(ee,Se,ve){return{className:ee,begin:Se,relevance:ve}},d={begin:"\\(",end:"\\)",contains:s,relevance:0};s.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,c("'"),c('"'),e.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},u("number","#[0-9A-Fa-f]+\\b"),d,u("variable","@@?"+t,10),u("variable","@\\{"+t+"\\}"),u("built_in","~?`[^`]*?`"),{className:"attribute",begin:t+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0},{className:"meta",begin:"!important"});var C=s.concat({begin:/\{/,end:/\}/,contains:r}),v={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(s)},p={begin:n+"\\s*:",returnBegin:!0,end:"[;}]",relevance:0,contains:[{className:"attribute",begin:n,end:":",excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:s}}]},x={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",returnEnd:!0,contains:s,relevance:0}},A={className:"variable",variants:[{begin:"@"+t+"\\s*:",relevance:15},{begin:"@"+t}],starts:{end:"[;}]",returnEnd:!0,contains:C}},V={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:n,end:/\{/}],returnBegin:!0,returnEnd:!0,illegal:`[<='$"]`,relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,v,u("keyword","all\\b"),u("variable","@\\{"+t+"\\}"),u("selector-tag",n+"%?",0),u("selector-id","#"+n),u("selector-class","\\."+n,0),u("selector-tag","&",0),{className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9_\-+()"'.]+/},{begin:"\\(",end:"\\)",contains:C},{begin:"!important"}]};return r.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,x,A,p,V),{name:"Less",case_insensitive:!0,illegal:`[=>'/<($"]`,contains:r}}Fs.exports=tc});var qs=mt((ru,Hs)=>{function nc(e){let t={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/\}/},{begin:/[$@]/+e.UNDERSCORE_IDENT_RE}]},n={endsWithParent:!0,keywords:{$pattern:"[a-z/_]+",literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[t]},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"\\s\\^",end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},t]};return{name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{begin:e.UNDERSCORE_IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\{/,contains:[{className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|\\{",returnBegin:!0,contains:[{className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:n}],relevance:0}],illegal:"[^\\s\\}]"}}Hs.exports=nc});var Ws=mt((au,$s)=>{function ic(e){var t="@[a-z-]+",n="and or not only",r="[a-zA-Z-][a-zA-Z0-9_-]*",s={className:"variable",begin:"(\\$"+r+")\\b"},c={className:"number",begin:"#[0-9A-Fa-f]+"},u={className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:!0,illegal:"[^\\s]",starts:{endsWithParent:!0,excludeEnd:!0,contains:[c,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"!important"}]}};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{className:"selector-tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{className:"selector-pseudo",begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{className:"selector-pseudo",begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},s,{className:"attribute",begin:"\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:":",end:";",contains:[s,c,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"meta",begin:"!important"}]},{begin:"@(page|font-face)",lexemes:t,keywords:"@page @font-face"},{begin:"@",end:"[{;]",returnBegin:!0,keywords:n,contains:[{begin:t,className:"keyword"},s,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,c,e.CSS_NUMBER_MODE]}]}}$s.exports=ic});var Vs=mt((su,Us)=>{function rc(e){return{name:"Shell Session",aliases:["console"],contains:[{className:"meta",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}Us.exports=rc});var Gs=mt((ou,Ys)=>{function ac(e){var t=e.COMMENT("--","$");return{name:"SQL",case_insensitive:!0,illegal:/[<>{}*]/,contains:[{beginKeywords:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",end:/;/,endsWithParent:!0,keywords:{$pattern:/[\w\.]+/,keyword:"as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null unknown",built_in:"array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void"},contains:[{className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},{className:"string",begin:'"',end:'"',contains:[{begin:'""'}]},{className:"string",begin:"`",end:"`"},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]},e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]}}Ys.exports=ac});var Xs=mt((lu,Ks)=>{var nn=gs();nn.registerLanguage("javascript",ys());nn.registerLanguage("python",Es());nn.registerLanguage("xml",Ts());nn.registerLanguage("django",Ss());nn.registerLanguage("bash",Ns());nn.registerLanguage("css",Rs());nn.registerLanguage("markdown",Ms());nn.registerLanguage("diff",js());nn.registerLanguage("json",Bs());nn.registerLanguage("less",zs());nn.registerLanguage("nginx",qs());nn.registerLanguage("scss",Ws());nn.registerLanguage("shell",Vs());nn.registerLanguage("sql",Gs());Ks.exports=nn});var Js=mt((exports,module)=>{frappe.socketio={open_tasks:{},open_docs:[],emit_queue:[],init:function(port=3e3){if(!!window.io&&!frappe.boot.disable_async&&!frappe.socketio.socket){if(window.location.protocol=="https:"?frappe.socketio.socket=io.connect(frappe.socketio.get_host(port),{secure:!0}):window.location.protocol=="http:"?frappe.socketio.socket=io.connect(frappe.socketio.get_host(port)):window.location.protocol=="file:"&&(frappe.socketio.socket=io.connect(window.localStorage.server)),!frappe.socketio.socket){console.log("Unable to connect to "+frappe.socketio.get_host(port));return}frappe.socketio.socket.on("msgprint",function(e){frappe.msgprint(e)}),frappe.socketio.socket.on("eval_js",function(message){eval(message)}),frappe.socketio.socket.on("progress",function(e){e.progress&&(e.percent=flt(e.progress[0])/e.progress[1]*100),e.percent&&(e.percent==100?frappe.hide_progress():frappe.show_progress(e.title||__("Progress"),e.percent,100,e.description))}),frappe.socketio.setup_listeners(),frappe.socketio.setup_reconnect(),$(document).on("form-load form-rename",function(e,t){if(!t.is_new()){for(var n=0,r=frappe.socketio.open_docs.length;n<r;n++){var s=frappe.socketio.open_docs[n];if(t.doctype==s.doctype&&t.docname==s.name)return!1}frappe.socketio.doc_subscribe(t.doctype,t.docname)}}),$(document).on("form-refresh",function(e,t){t.is_new()||frappe.socketio.doc_open(t.doctype,t.docname)}),$(document).on("form-unload",function(e,t){t.is_new()||frappe.socketio.doc_close(t.doctype,t.docname)}),$(document).on("form-typing",function(e,t){frappe.socketio.form_typing(t.doctype,t.docname)}),$(document).on("form-stopped-typing",function(e,t){frappe.socketio.form_stopped_typing(t.doctype,t.docname)}),window.addEventListener("beforeunload",()=>{!cur_frm||cur_frm.is_new()||cur_frm.doc&&frappe.socketio.doc_close(cur_frm.doctype,cur_frm.docname)})}},get_host:function(e=3e3){var t=window.location.origin;if(window.dev_server){var n=t.split(":");e=frappe.boot.socketio_port||e.toString()||"3000",n.length>2&&(t=n[0]+":"+n[1]),t=t+":"+e}return t},subscribe:function(e,t){frappe.socketio.socket.emit("task_subscribe",e),frappe.socketio.socket.emit("progress_subscribe",e),frappe.socketio.open_tasks[e]=t},task_subscribe:function(e){frappe.socketio.socket.emit("task_subscribe",e)},task_unsubscribe:function(e){frappe.socketio.socket.emit("task_unsubscribe",e)},doc_subscribe:function(e,t){if(frappe.flags.doc_subscribe){console.log("throttled");return}frappe.flags.doc_subscribe=!0,setTimeout(function(){frappe.flags.doc_subscribe=!1},1e3),frappe.socketio.socket.emit("doc_subscribe",e,t),frappe.socketio.open_docs.push({doctype:e,docname:t})},doc_unsubscribe:function(e,t){frappe.socketio.socket.emit("doc_unsubscribe",e,t),frappe.socketio.open_docs=$.filter(frappe.socketio.open_docs,function(n){return n.doctype===e&&n.name===t?null:n})},doc_open:function(e,t){(!frappe.socketio.last_doc||frappe.socketio.last_doc[0]!=e||frappe.socketio.last_doc[1]!=t)&&(frappe.socketio.socket.emit("doc_open",e,t),frappe.socketio.last_doc&&frappe.socketio.doc_close(frappe.socketio.last_doc[0],frappe.socketio.last_doc[1])),frappe.socketio.last_doc=[e,t]},doc_close:function(e,t){frappe.socketio.socket.emit("doc_close",e,t),frappe.socketio.socket.emit("doc_typing_stopped",e,t)},form_typing:function(e,t){frappe.socketio.socket.emit("doc_typing",e,t)},form_stopped_typing:function(e,t){frappe.socketio.socket.emit("doc_typing_stopped",e,t)},setup_listeners:function(){frappe.socketio.socket.on("task_status_change",function(e){frappe.socketio.process_response(e,e.status.toLowerCase())}),frappe.socketio.socket.on("task_progress",function(e){frappe.socketio.process_response(e,"progress")})},setup_reconnect:function(){frappe.socketio.socket.on("connect",function(){setTimeout(function(){$.each(frappe.socketio.open_tasks,function(e,t){frappe.socketio.subscribe(e,t)}),$.each(frappe.socketio.open_docs,function(e){locals[e.doctype]&&locals[e.doctype][e.name]&&frappe.socketio.doc_subscribe(e.doctype,e.name)}),cur_frm&&cur_frm.doc&&frappe.socketio.doc_open(cur_frm.doc.doctype,cur_frm.doc.name)},5e3)})},process_response:function(e,t){if(!!e){var n=frappe.socketio.open_tasks[e.task_id];n[t]&&n[t](e),t==="success"&&n.callback&&n.callback(e),frappe.request.cleanup(n,e),n.always&&n.always(e),e.status_code&&e.status_code>400&&n.error&&n.error(e)}}};frappe.provide("frappe.realtime");frappe.realtime.on=function(e,t){frappe.socketio.socket&&frappe.socketio.socket.on(e,t)};frappe.realtime.off=function(e,t){frappe.socketio.socket&&frappe.socketio.socket.off(e,t)};frappe.realtime.publish=function(e,t){frappe.socketio.socket&&frappe.socketio.socket.emit(e,t)}});var Er=$t(ln()),Eo=$t(aa()),Co=$t(sa()),xo=$t(oa()),Ao=$t(la()),To=$t(fa()),ko=$t(ca()),So=$t(ua()),Oo=$t(da()),No=$t(pa()),Do=$t(ha()),Ro=$t(pr()),Lo=$t(Sn());window.jQuery=Er.default;window.$=Er.default;(function(e){"use strict";var t=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;function n(){}n.extend=function(r){var s=this.prototype,c=Object.create(s);for(var u in r)c[u]=typeof r[u]=="function"&&typeof s[u]=="function"&&t.test(r[u])?function(C,v){return function(){var p=this._super;this._super=s[C];var x=v.apply(this,arguments);return this._super=p,x}}(u,r[u]):r[u];var d=typeof c.init=="function"?c.hasOwnProperty("init")?c.init:function(){s.init.apply(this,arguments)}:function(){};return d.prototype=c,c.constructor=d,d.extend=n.extend,d},e.Class=n})(window);String.prototype.includes||(String.prototype.includes=function(e,t){"use strict";return typeof t!="number"&&(t=0),t+e.length>this.length?!1:this.indexOf(e,t)!==-1});Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(r===0)return!1;for(var s=t|0,c=Math.max(s>=0?s:r-Math.abs(s),0);c<r;){if(n[c]===e)return!0;c++}return!1}});typeof String.prototype.trimLeft!="function"&&(String.prototype.trimLeft=function(){return this.replace(/^\s+/,"")});typeof String.prototype.trimRight!="function"&&(String.prototype.trimRight=function(){return this.replace(/\s+$/,"")});typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(t){"use strict";if(t==null)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var s=arguments[r];if(s!=null)for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(n[c]=s[c])}return n},writable:!0,configurable:!0});var du=$t(ga());window.frappe||(window.frappe={});frappe.provide=function(e){for(var t=e.split("."),n=window,r=0;r<t.length;r++){var s=t[r];n[s]||(n[s]={}),n=n[s]}return n};frappe.provide("locals");frappe.provide("frappe.flags");frappe.provide("frappe.settings");frappe.provide("frappe.utils");frappe.provide("frappe.ui.form");frappe.provide("frappe.modules");frappe.provide("frappe.templates");frappe.provide("frappe.test_data");frappe.provide("frappe.utils");frappe.provide("frappe.model");frappe.provide("frappe.user");frappe.provide("frappe.session");frappe.provide("frappe._messages");frappe.provide("locals.DocType");frappe.provide("frappe.listview_settings");frappe.provide("frappe.tour");frappe.provide("frappe.listview_parent_route");window.NEWLINE=`
`;window.TAB=9;window.UP_ARROW=38;window.DOWN_ARROW=40;window.cur_frm=null;function Mo(e,t){return e==null?e:(this.unkeyed_index=0,e.replace(/\{(\w*)\}/g,function(n,r){if(r===""&&(r=this.unkeyed_index,this.unkeyed_index++),r==+r)return t[r]!==void 0?t[r]:n}.bind(this)))}jQuery&&(jQuery.format=Mo);window.cstr=function(e){return e==null?"":e+""};window.cint=function(e,t){return e===!0?1:e===!1?0:(e=e+"",e!=="0"&&(e=lstrip(e,["0"])),e=parseInt(e),isNaN(e)&&(e=t===void 0?0:t),e)};window.toTitle=function(e){var t=e.split(" "),n=[];for(var r in t)n[r]=t[r].charAt(0).toUpperCase()+t[r].slice(1);return n.join(" ")};window.is_null=function(e){if(e==null||cstr(e).trim()==="")return!0};window.copy_dict=function(e){var t={};for(var n in e)t[n]=e[n];return t};window.validate_email=function(e){return frappe.utils.validate_type(e,"email")};window.validate_phone=function(e){return frappe.utils.validate_type(e,"phone")};window.validate_name=function(e){return frappe.utils.validate_type(e,"name")};window.validate_url=function(e){return frappe.utils.validate_type(e,"url")};window.nth=function(e){e=cint(e);var t="th";return(e+"").substr(-1)=="1"&&(t="st"),(e+"").substr(-1)=="2"&&(t="nd"),(e+"").substr(-1)=="3"&&(t="rd"),e+t};window.has_words=function(e,t){if(!t)return!0;if(!e)return!1;for(var n=0,r=e.length;n<r;n++)if(t.indexOf(e[n])!=-1)return!0;return!1};window.has_common=function(e,t){if(!e||!t)return!1;for(var n=0,r=e.length;n<r;n++)if(in_list(t,e[n]))return!0;return!1};window.frappe||(window.frappe={});function Ai(e,t,n){if(e==null||e=="")return 0;if(!(typeof e=="number"||String(parseFloat(e))==e)){if(e=e+"",e.indexOf(" ")!=-1){var r=e.split(" ");e=isNaN(parseFloat(r[0]))?r.slice(r.length-1).join(" "):e}e=ma(e,n),e=parseFloat(e),isNaN(e)&&(e=0)}return e=parseFloat(e),t!=null?xi(e,t):e}function ma(e,t){t||(t=Ti());var n=Cr(t),r=new RegExp(n.group_sep==="."?"\\.":n.group_sep,"g");if(e=e.replace(r,""),n.decimal_str!=="."&&n.decimal_str!==""){var s=new RegExp(n.decimal_str,"g");e=e.replace(s,".")}return e}frappe.number_format_info={"#,###.##":{decimal_str:".",group_sep:","},"#.###,##":{decimal_str:",",group_sep:"."},"# ###.##":{decimal_str:".",group_sep:" "},"# ###,##":{decimal_str:",",group_sep:" "},"#'###.##":{decimal_str:".",group_sep:"'"},"#, ###.##":{decimal_str:".",group_sep:", "},"#,##,###.##":{decimal_str:".",group_sep:","},"#,###.###":{decimal_str:".",group_sep:","},"#.###":{decimal_str:"",group_sep:"."},"#,###":{decimal_str:"",group_sep:","}};window.format_number=function(e,t,n){t||(t=Ti(),n==null&&(n=cint(frappe.defaults.get_default("float_precision"))||3));var r=Cr(t);n==null&&(n=r.precision),e=Ai(e,n,t);let s=!1;e<0&&(s=!0),e=Math.abs(e),e=e.toFixed(n);var c=e.split("."),u=r.group_sep?3:0;if(u){for(var d=c[0],C="",v=d.length%u,p=d.length;p>=0;p--){var x=replace_all(C,r.group_sep,"").length;t=="#,##,###.##"&&C.indexOf(",")!=-1&&(u=2,x+=1),C+=d.charAt(p),x&&!((x+1)%u)&&p!=0&&(C+=r.group_sep)}c[0]=C.split("").reverse().join("")}return c[0]+""==""&&(c[0]="0"),c[1]=c[1]&&r.decimal_str?r.decimal_str+c[1]:"",(s?"-":"")+c[0]+c[1]};function ba(e,t,n){var r=Ti(t),s=va(t);return n===void 0&&(n=frappe.boot.sysdefaults.currency_precision||null),s?__(s)+" "+format_number(e,r,n):format_number(e,r,n)}function va(e){return frappe.boot?frappe.boot.sysdefaults&&frappe.boot.sysdefaults.hide_currency_symbol=="Yes"?null:(e||(e=frappe.boot.sysdefaults.currency),frappe.model.get_value(":Currency",e,"symbol")||e):frappe.currency_symbols[e]}function Ti(e){return frappe.boot&&frappe.boot.sysdefaults&&frappe.boot.sysdefaults.number_format||"#,###.##"}function Cr(e){var t=frappe.number_format_info[e];return t||(t={decimal_str:".",group_sep:","}),t.precision=e.split(t.decimal_str).slice(1)[0].length,t}function xi(e,t){var n=e<0,r=cint(t),s=Math.pow(10,r),c=+(r?Math.abs(e)*s:Math.abs(e)).toFixed(8),u=Math.floor(c),d=c-u,C=!t&&d==.5?u%2==0?u:u+1:Math.round(c);return C=r?C/s:C,n?-C:C}function Io(e,t){return xi(e,t)}function jo(e,t){if(cur_frm){t||(t=cur_frm.doc);var n=frappe.meta.get_docfield(t.doctype,e,t.parent||t.name);return n||console.log(e+": could not find docfield in method precision()"),frappe.meta.get_field_precision(n,t)}else return frappe.boot.sysdefaults.float_precision}function Po(e,t){return e.includes(t)}function ya(e,t,n){n=cint(n);var r=Math.pow(10,n);if(n)var s=e*r%(t*r)/r;else var s=e%t;return Ai(s,n)}function Bo(e,t,n){var r=Ai(frappe.model.get_value(":Currency",t,"smallest_currency_fraction_value"));if(r){var s=ya(e,r,n);s>r/2?e+=r-s:e-=s}else e=xi(e);return e}function Fo(e,t){return ba(e,t)}Object.assign(window,{flt:Ai,cint,strip_number_groups:ma,format_currency:ba,fmt_money:Fo,get_currency_symbol:va,get_number_format:Ti,get_number_format_info:Cr,_round:xi,roundNumber:Io,precision:jo,remainder:ya,round_based_on_smallest_currency_fraction:Bo,in_list:Po});var Aa=$t(xa());frappe.provide("frappe.utils");Array.prototype.uniqBy||(Object.defineProperty(Array.prototype,"uniqBy",{value:function(e){var t={};return this.filter(function(n){var r=e(n);return r in t?!1:t[r]=!0})}}),Object.defineProperty(Array.prototype,"move",{value:function(e,t){this.splice(t,0,this.splice(e,1)[0])}}));Object.defineProperty(Object.prototype,"setDefault",{value:function(e,t){return e in this||(this[e]=t),this[e]},writable:!0});String.prototype.plural=function(e){let t={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},n={"(quiz)zes$":"$1","(matr)ices$":"$1ix","(vert|ind)ices$":"$1ex","^(ox)en$":"$1","(alias)es$":"$1","(octop|vir)i$":"$1us","(cris|ax|test)es$":"$1is","(shoe)s$":"$1","(o)es$":"$1","(bus)es$":"$1","([m|l])ice$":"$1ouse","(x|ch|ss|sh)es$":"$1","(m)ovies$":"$1ovie","(s)eries$":"$1eries","([^aeiouy]|qu)ies$":"$1y","([lr])ves$":"$1f","(tive)s$":"$1","(hive)s$":"$1","(li|wi|kni)ves$":"$1fe","(shea|loa|lea|thie)ves$":"$1f","(^analy)ses$":"$1sis","((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$":"$1$2sis","([ti])a$":"$1um","(n)ews$":"$1ews","(h|bl)ouses$":"$1ouse","(corpse)s$":"$1","(us)es$":"$1",s$:""},r={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment"].indexOf(this.toLowerCase())>=0)return this;let c,u,d;for(c in r)if(e?(u=new RegExp(r[c]+"$","i"),d=c):(u=new RegExp(c+"$","i"),d=r[c]),u.test(this))return this.replace(u,d);let C;e?C=n:C=t;let v;for(v in C)if(u=new RegExp(v,"i"),u.test(this))return this.replace(u,C[v]);return this};Object.assign(frappe.utils,{get_random:function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},get_file_link:function(e){return e=cstr(e),frappe.utils.is_url(e)?e:e.indexOf("/")===-1?"files/"+e:e},replace_newlines(e){return e?e.replace(/\n/g,"<br>"):""},is_html:function(e){return!(!e||e.indexOf("<br>")==-1&&e.indexOf("<p")==-1&&e.indexOf("<img")==-1&&e.indexOf("<div")==-1&&!e.includes("<span"))},is_mac:function(){return window.navigator.platform==="MacIntel"},is_xs:function(){return $(document).width()<768},is_sm:function(){return $(document).width()<991&&$(document).width()>=768},is_md:function(){return $(document).width()<1199&&$(document).width()>=991},is_json:function(e){try{JSON.parse(e)}catch(t){return!1}return!0},strip_whitespace:function(e){return(e||"").replace(/<p>\s*<\/p>/g,"").replace(/<br>(\s*<br>\s*)+/g,"<br><br>")},encode_tags:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;"};function n(r){return t[r]||r}return e.replace(/[&<>]/g,n)},strip_original_content:function(e){var t=[],n=[],r=e.indexOf("<br>")===-1?`
`:"<br>";return $.each(e.split(r),function(s,c){var u=strip(c);u&&(u.substr(0,1)===">"||u.substr(0,4)==="&gt;")?n.push(c):(t.concat(n),t.push(c),n=[])}),t.join(r)},escape_html:function(e){let t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(e).replace(/[&<>"'`=/]/g,function(n){return t[n]})},html2text:function(e){let t=document.createElement("div");return t.innerHTML=e,t.textContent},is_url:function(e){return e.toLowerCase().substr(0,7)=="http://"||e.toLowerCase().substr(0,8)=="https://"},to_title_case:function(e,t=!1){let n=e.toLowerCase().replace(/(?:^|[\s-/])\w/g,function(s){return s.toUpperCase()}),r=t?" ":"";return n.replace(/-|_/g,r)},toggle_blockquote:function(e){if(!e)return e;var t=$("<div></div>").html(e);return t.find("blockquote").parent("blockquote").addClass("hidden").before('<p><a class="text-muted btn btn-default toggle-blockquote" style="padding: 2px 7px 0px; line-height: 1;"> 					\u2022 \u2022 \u2022 				</a></p>'),t.html()},scroll_to:function(e,t=!0,n,r,s,c=!1){if(frappe.flags.disable_auto_scroll)return;r=r||$("html, body");let u=0;e&&(u=typeof e=="number"?e-cint(n):this.get_scroll_position(e,n)),u<0&&(u=0),u!=r.scrollTop()&&(t?r.animate({scrollTop:u}).promise().then(()=>{c&&($(e).addClass("highlight"),document.addEventListener("click",function(){$(e).removeClass("highlight")},{once:!0})),s&&s()}):r.scrollTop(u))},get_scroll_position:function(e,t){let n=$(".navbar").height()+$(".page-head:visible").height()||$(".navbar").height();return $(e).offset().top-n-cint(t)},filter_dict:function(e,t){var n=[];return typeof t=="string"?[e[t]]:($.each(e,function(r,s){for(var c in t)if($.isArray(t[c])){if(t[c][0]=="in"){if(t[c][1].indexOf(s[c])==-1)return}else if(t[c][0]=="not in"){if(t[c][1].indexOf(s[c])!=-1)return}else if(t[c][0]=="<"){if(!(s[c]<t[c]))return}else if(t[c][0]=="<="){if(!(s[c]<=t[c]))return}else if(t[c][0]==">"){if(!(s[c]>t[c]))return}else if(t[c][0]==">="&&!(s[c]>=t[c]))return}else if(s[c]!=t[c])return;n.push(s)}),n)},comma_or:function(e){return frappe.utils.comma_sep(e," "+__("or")+" ")},comma_and:function(e){return frappe.utils.comma_sep(e," "+__("and")+" ")},comma_sep:function(e,t){return e instanceof Array?e.length==0?"":e.length==1?e[0]:e.slice(0,e.length-1).join(", ")+t+e.slice(-1)[0]:e},set_footnote:function(e,t,n){return e||(e=$('<div class="text-muted footnote-area level">').appendTo(t)),n?e.html(n):(e.remove(),e=null),e},get_args_dict_from_url:function(e){var t={};return $.each(decodeURIComponent(e).split("&"),function(n,r){r=r.split("="),t[r[0]]=r[1]}),t},get_url_from_dict:function(e){return $.map(e,function(t,n){return t!==null?encodeURIComponent(n)+"="+encodeURIComponent(t):null}).join("&")||""},validate_type:function(e,t){var n;switch(t){case"phone":n=/^([0-9 +_\-,.*#()]){1,20}$/;break;case"name":n=/^[\w][\w'-]*([ \w][\w'-]+)*$/;break;case"number":n=/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;break;case"digits":n=/^\d+$/;break;case"alphanum":n=/^\w+$/;break;case"email":n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;break;case"url":n=/^((([A-Za-z0-9.+-]+:(?:\/\/)?)(?:[-;:&=\+\,\w]@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/i;break;case"dateIso":n=/^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;break;default:return!1}return e!==""?n.test(e):!1},guess_style:function(e,t,n){var r=t||"default",s="gray";return e&&(has_words(["Pending","Review","Medium","Not Approved"],e)?(r="warning",s="orange"):has_words(["Open","Urgent","High","Failed","Rejected","Error"],e)?(r="danger",s="red"):has_words(["Closed","Finished","Converted","Completed","Complete","Confirmed","Approved","Yes","Active","Available","Paid","Success"],e)?(r="success",s="green"):has_words(["Submitted"],e)&&(r="info",s="blue")),n?s:r},guess_colour:function(e){return frappe.utils.guess_style(e,null,!0)},get_indicator_color:function(e){return frappe.db.get_list("Workflow State",{filters:{name:e},fields:["name","style"]}).then(t=>{let n=t[0];if(!n.style)return frappe.utils.guess_colour(n.name);let r=n.style;return{Success:"green",Warning:"orange",Danger:"red",Primary:"blue"}[r]})},sort:function(e,t,n,r){if(!e||e.length<2)return e||[];var s={string:function(c,u){return cstr(c[t]).localeCompare(cstr(u[t]))},number:function(c,u){return flt(c[t])-flt(u[t])}};return n||(n=typeof e[0][t]=="string"?"string":"number"),e.sort(s[n]),r&&e.reverse(),e},unique:function(e){for(var t={},n=[],r=0,s=e.length;r<s;r++)e[r]in t||(t[e[r]]=null,n.push(e[r]));return n},remove_nulls:function(e){for(var t=[],n=0,r=e.length;n<r;n++)is_null(e[n])||t.push(e[n]);return t},all:function(e){for(var t=0,n=e.length;t<n;t++)if(!e[t])return!1;return!0},dict:function(e,t){var n=[];return $.each(t,function(r,s){var c={};$.each(e,function(u,d){c[d]=s[u]}),n.push(c)}),n},sum:function(e){return e.reduce(function(t,n){return flt(t)+flt(n)},0)},arrays_equal:function(e,t){if(!e||!t||e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if($.isArray(e[n])){if(!frappe.utils.arrays_equal(e[n],t[n]))return!1}else if(e[n]!==t[n])return!1;return!0},intersection:function(e,t){var n=0,r=0,s=new Array;for(e=[].concat(e).sort(),t=[].concat(t).sort();n<e.length&&r<t.length;)e[n]<t[r]?n++:(e[n]>t[r]||(s.push(e[n]),n++),r++);return s},resize_image:function(e,t,n,r){var s=new Image;n||(n=600),r||(r=400),s.src=e.result,s.onload=function(){var c=s.width,u=s.height;c>u?c>n&&(u*=n/c,c=n):u>r&&(c*=r/u,u=r);var d=document.createElement("canvas");d.width=c,d.height=u;var C=d.getContext("2d");C.drawImage(this,0,0,c,u);var v=d.toDataURL("image/jpeg");setTimeout(function(){t(v)},10)}},csv_to_array:function(e,t){t=t||",";for(var n=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),r=[[]],s=null;s=n.exec(e);){var c=s[1];c.length&&c!==t&&r.push([]);var u;s[2]?u=s[2].replace(new RegExp('""',"g"),'"'):u=s[3],r[r.length-1].push(u)}return r},warn_page_name_change:function(){frappe.msgprint(__("Note: Changing the Page Name will break previous URL to this page."))},notify:function(e,t,n,r){console.log("push notifications are evil and deprecated")},set_title:function(e){frappe._original_title=e,frappe._title_prefix&&(e=frappe._title_prefix+" "+e.replace(/<[^>]*>/g,"")),document.title=e;let t=frappe.router.get_sub_path();frappe.route_titles[t]=e},set_title_prefix:function(e){frappe._title_prefix=e,frappe.utils.set_title(frappe._original_title)},is_image_file:function(e){return e?(e=e.split("?")[0],/\.(gif|jpg|jpeg|tiff|png|svg)$/i.test(e)):!1},play_sound:function(e){try{if(frappe.boot.user.mute_sounds)return;var t=$("#sound-"+e)[0];t.volume=t.getAttribute("volume"),t.play()}catch(n){console.log("Cannot play sound",e,n)}},split_emails:function(e){var t=[];return e&&e.split(/[,\n](?=(?:[^"]|"[^"]*")*$)/g).forEach(function(n){n=n.trim(),n&&t.push(n)}),t},supportsES6:function(){try{return new Function("(a = 0) => a"),!0}catch(e){return!1}}(),throttle:function(e,t,n){var r,s,c,u=null,d=0;n||(n={});let C=function(){d=n.leading===!1?0:Date.now(),u=null,c=e.apply(r,s),u||(r=s=null)};return function(){var v=Date.now();!d&&n.leading===!1&&(d=v);let p=t-(v-d);return r=this,s=arguments,p<=0||p>t?(u&&(clearTimeout(u),u=null),d=v,c=e.apply(r,s),u||(r=s=null)):!u&&n.trailing!==!1&&(u=setTimeout(C,p)),c}},debounce:function(e,t,n){var r;return function(){var s=this,c=arguments,u=function(){r=null,n||e.apply(s,c)},d=n&&!r;clearTimeout(r),r=setTimeout(u,t),d&&e.apply(s,c)}},get_form_link:function(e,t,n=!1,r=null,s=null){r=r||t,t=encodeURIComponent(t);let c=`/app/${encodeURIComponent(e.toLowerCase().replace(/ /g,"-"))}/${t}`;return s&&(c+=frappe.utils.make_query_string(s)),n?`<a href="${c}">${r}</a>`:c},get_route_label(e){let t=e.split("/");return t[2]==="Report"||t[0]==="query-report"?__("{0} Report",[t[3]||t[1]]):t[0]==="List"?__("{0} List",[t[1]]):t[0]==="modules"?__("{0} Modules",[t[1]]):t[0]==="dashboard"?__("{0} Dashboard",[t[1]]):__(frappe.utils.to_title_case(t[0],!0))},report_column_total:function(e,t,n){return t.column.disable_total?"":e.length>0?t.column.fieldtype=="Percent"||n==="mean"?e.reduce((r,s)=>r+flt(s))/e.length:t.column.fieldtype=="Int"?e.reduce((r,s)=>r+cint(s)):frappe.model.is_numeric_field(t.column.fieldtype)?e.reduce((r,s)=>r+flt(s)):null:null},setup_search(e,t,n,r){let s=e.find('[data-element="search"]').show();s.focus().val("");let c=e.find(t).show();s.off("keyup").on("keyup",()=>{let u=s.val().toLowerCase();u=u.replace(/^\s+|\s+$/g,"");for(let d=0;d<c.length;d++){let C=c.eq(d).find(n),v=C.text().toLowerCase(),p="";r&&C.attr(r)&&(p=C.attr(r).toLowerCase()),v.includes(u)||p.includes(u)?c.eq(d).css("display",""):c.eq(d).css("display","none")}})},deep_equal(e,t){return(0,Aa.default)(e,t)},file_name_ellipsis(e,t){let n=t*2/3,r=t-n,s=e.split("."),c=s.pop(),u=s.join(""),d=u.slice(0,n),C=u.slice(-r);return u.length>t?`${d}...${C}.${c}`:e},get_decoded_string(e){let n=e.split(",")[1],r=atob(n);try{let s=escape(r);r=decodeURIComponent(s)}catch(s){}return r},copy_to_clipboard(e){let t=()=>{frappe.show_alert({indicator:"green",message:__("Copied to clipboard.")})};if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(e).then(t);else{let n=$("<textarea>");$("body").append(n),n.val(e).select(),document.execCommand("copy"),t(),n.remove()}},is_rtl(e=null){return["ar","he","fa","ps"].includes(e||frappe.boot.lang)},bind_actions_with_object(e,t){return $(e).off("click.class_actions"),$(e).on("click.class_actions","[data-action]",n=>{let r=$(n.currentTarget),s=r.data("action");t[s]&&t[s](n,r)}),e},eval(e,t={}){let n=Object.keys(t),r=Object.values(t);e=`let out = ${e}; return out`;try{return new Function(...n,e)(...r)}catch(s){throw console.log("Error evaluating the following expression:"),console.error(e),s}},get_browser(){let e=navigator.userAgent,t,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],{name:"IE",version:t[1]||""}):n[1]==="Chrome"&&(t=e.match(/\bOPR|Edge\/(\d+)/),t!=null)?{name:"Opera",version:t[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],(t=e.match(/version\/(\d+)/i))!=null&&n.splice(1,1,t[1]),{name:n[0],version:n[1]})},get_formatted_duration(e,t=null){let n="";if(t||(t={hide_days:0,hide_seconds:0}),e){let r=frappe.utils.seconds_to_duration(e,t);r.days&&(n+=r.days+__("d",null,"Days (Field: Duration)")),r.hours&&(n+=n.length?" ":"",n+=r.hours+__("h",null,"Hours (Field: Duration)")),r.minutes&&(n+=n.length?" ":"",n+=r.minutes+__("m",null,"Minutes (Field: Duration)")),r.seconds&&(n+=n.length?" ":"",n+=r.seconds+__("s",null,"Seconds (Field: Duration)"))}return n},seconds_to_duration(e,t){let n=e>0?Math.floor:Math.ceil,r={days:n(e/86400),hours:n(e%86400/3600),minutes:n(e%3600/60),seconds:n(e%60)};return t.hide_days&&(r.hours=n(e/3600),r.days=0),r},duration_to_seconds(e=0,t=0,n=0,r=0){let s=0;return e&&(s+=e*24*60*60),t&&(s+=t*60*60),n&&(s+=n*60),r&&(s+=r),s},get_duration_options:function(e){return{hide_days:e.hide_days,hide_seconds:e.hide_seconds}},get_number_system:function(e){let t={India:[{divisor:1e7,symbol:"Cr"},{divisor:1e5,symbol:"Lakh"}],"":[{divisor:1e12,symbol:"T"},{divisor:1e9,symbol:"B"},{divisor:1e6,symbol:"M"},{divisor:1e3,symbol:"K"}]};return Object.keys(t).includes(e)||(e=""),t[e]},map_defaults:{center:[19.08,72.8961],zoom:13,tiles:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",options:{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},icon(e,t="sm",n="",r="",s=""){let c="";return typeof t=="object"?r+=` width: ${t.width}; height: ${t.height}`:c=`icon-${t}`,`<svg class="icon ${s} ${c}" style="${r}">
			<use class="${n}" href="#icon-${e}"></use>
		</svg>`},make_chart(e,t={}){let n={type:"bar",colors:["light-blue"],axisOptions:{xIsSeries:1,shortenYAxisNumbers:1,xAxisMode:"tick"}};for(let r in t)typeof n[r]=="object"&&typeof t[r]=="object"?n[r]=Object.assign(n[r],t[r]):n[r]=t[r];return new frappe.Chart(e,n)},generate_route(e){let t=e.type.toLowerCase();t==="doctype"&&(e.doctype=e.name);let n="";if(e.route)n=e.route;else if(e.link)n=strip(e.link,"#");else if(t==="doctype"){let r=frappe.router.slug(e.doctype);if(frappe.model.is_single(e.doctype))n=r;else switch(e.doc_view||(frappe.model.is_tree(e.doctype)?e.doc_view="Tree":e.doc_view="List"),e.doc_view){case"List":e.filters&&(frappe.route_options=e.filters),n=r;break;case"Tree":n=`${r}/view/tree`;break;case"Report Builder":n=`${r}/view/report`;break;case"Dashboard":n=`${r}/view/dashboard`;break;case"New":n=`${r}/new`;break;case"Calendar":n=`${r}/view/calendar/default`;break;default:frappe.throw({message:__("Not a valid view:")+e.doc_view,title:__("Unknown View")}),n=""}}else t==="report"?e.is_query_report?n="query-report/"+e.name:e.doctype?n=frappe.router.slug(e.doctype)+"/view/report/"+e.name:n="/report/"+e.name:t==="page"?n=e.name:t==="dashboard"&&(n=`dashboard-view/${e.name}`);return e.route_options&&(n+="?"+$.map(e.route_options,function(r,s){return encodeURIComponent(s)+"="+encodeURIComponent(r)}).join("&")),`/app/${n}`},shorten_number:function(e,t,n=4,r=2){if(String(e).match(/\d/g).length<n)return e.toString();let c=this.get_number_system(t),u=Math.abs(Math.round(e));for(let d of c)if(u>=d.divisor){let C=e/d.divisor;return C=this.get_number_of_decimals(C)>r?C.toFixed(r):C,C+" "+d.symbol}return e.toFixed(r)},get_number_of_decimals:function(e){return Math.floor(e)===e?0:e.toString().split(".")[1].length||0},build_summary_item(e){if(e.type=="separator")return $(`<div class="summary-separator">
				<div class="summary-value ${e.color?e.color.toLowerCase():"text-muted"}">${e.value}</div>
			</div>`);let t={fieldtype:e.datatype},n=null;e.datatype=="Currency"&&(t.options="currency",n={currency:e.currency});let r=frappe.format(e.value,t,{only_value:!0},n),s=e.indicator?e.indicator.toLowerCase():e.color?e.color.toLowerCase():"";return $(`<div class="summary-item">
			<span class="summary-label">${e.label}</span>
			<div class="summary-value ${s}">${r}</div>
		</div>`)},print(e,t,n,r,s){if(!window.open(frappe.urllib.get_full_url("/printview?doctype="+encodeURIComponent(e)+"&name="+encodeURIComponent(t)+"&trigger_print=1&format="+encodeURIComponent(n)+"&no_letterhead="+(r?"0":"1")+"&letterhead="+encodeURIComponent(r)+(s?"&_lang="+s:"")))){frappe.msgprint(__("Please enable pop-ups"));return}},get_clipboard_data(e){let t=e;return(t.clipboardData||window.clipboardData||t.originalEvent.clipboardData).getData("Text")},add_custom_button(e,t,n="",r="",s,c,u){s||(s="btn-secondary");let d=$(`<button class="btn ${s} btn-xs ${n}" title="${r}">${e}</button>`);d.click(C=>{C.stopPropagation(),t&&t(C)}),!u&&d.appendTo(c),u&&c.prepend(d)},sleep(e){return new Promise(t=>setTimeout(t,e))},parse_array(e){if(e&&e.length!==0)return e},range(e,t){t||(t=e,e=0);let n=[];for(let r=e;r<t;r++)n.push(r);return n}});var Tr=$t(La());frappe.avatar=function(e,t,n,r=null,s=!1,c=!1){let u;if(e)u=frappe.user_info(e);else{let C=n||frappe.get_cookie("full_name");u={image:r===null?frappe.get_cookie("user_image"):r,fullname:C,abbr:frappe.get_abbr(C),color:frappe.get_palette(C)}}n||(n=u.fullname);let d="";return c&&(t+=" filterable",d=`data-filter="_assign,like,%${e}%"`),frappe.get_avatar(t,n,r||u.image,s,d)};frappe.get_avatar=function(e,t,n=null,r,s){if(e||(e="avatar-small"),n){let c=window.cordova&&n.indexOf("http")===-1?frappe.base_url+n:n;return`<span class="avatar ${e}" title="${t}" ${s}>
				<span class="avatar-frame" style='background-image: url("${c}")'
					title="${t}"></span>
			</span>`}else{let c=frappe.get_abbr(t),u="";if(!r){let d=frappe.get_palette(t);u=`background-color: var(${d[0]}); color: var(${d[1]})`}return(e==="avatar-small"||e=="avatar-xs")&&(c=c.substr(0,1)),`<span class="avatar ${e}" title="${t}" ${s}>
			<div class="avatar-frame standard-image"
				style="${u}">
					${c}
			</div>
		</span>`}};frappe.avatar_group=function(e,t=4,n={}){let r="",s=e.slice(0,t),c=e.slice(t),u=n.css_class||"",d=s.map(v=>frappe.avatar(v,"avatar-small "+u,null,null,!1,n.filterable)).join("");c.length===1?d+=frappe.avatar(c[0],"avatar-small "+u,null,null,!1,n.filterable):c.length>1&&(d=`
			${d}
			<span class="avatar avatar-small ${u}">
				<div class="avatar-frame standard-image avatar-extra-count"
					title="${c.map(v=>frappe.user_info(v).fullname).join(", ")}">
					+${c.length}
				</div>
			</span>
		`),n.action_icon&&(r=`
			<span class="avatar avatar-small">
				<div class="avatar-frame avatar-action">
					${frappe.utils.icon(n.action_icon,"sm")}
				</div>
			</span>
		`);let C=$(`<div class="avatar-group ${n.align||"right"} ${n.overlap!=!1?"overlap":""}">
			${d}
			${r}
		</div>`);return C.find(".avatar-action").on("click",n.action),C};frappe.ui.scroll=function(e,t,n){var r=$(".navbar").height()+$(".page-head").height(),s=$(e).offset().top-r-cint(n);t?$("html, body").animate({scrollTop:s}):$(window).scrollTop(s)};frappe.palette=[["--orange-avatar-bg","--orange-avatar-color"],["--pink-avatar-bg","--pink-avatar-color"],["--blue-avatar-bg","--blue-avatar-color"],["--green-avatar-bg","--green-avatar-color"],["--dark-green-avatar-bg","--dark-green-avatar-color"],["--red-avatar-bg","--red-avatar-color"],["--yellow-avatar-bg","--yellow-avatar-color"],["--purple-avatar-bg","--purple-avatar-color"],["--gray-avatar-bg","--gray-avatar-color0"]];frappe.get_palette=function(e){var t=cint((parseInt((0,Tr.default)(e).substr(4,2),16)+1)/5.33);return frappe.palette[t%8]};frappe.get_abbr=function(e,t){if(!e)return"";var n="";return $.each(e.split(" "),function(r,s){if(n.length>=(t||2))return!1;if(!s.trim().length)return!0;n+=s.trim()[0]}),n||"?"};frappe.gravatars={};frappe.get_gravatar=function(e,t=0){var n=t?"s="+t:"d=retro";return frappe.gravatars[e]||(frappe.gravatars[e]="https://secure.gravatar.com/avatar/"+(0,Tr.default)(e)+"?"+n),frappe.gravatars[e]};window.repl=function(t,n){if(t==null)return"";for(var r in n)t=t.split("%("+r+")s").join(n[r]);return t};window.replace_all=function(e,t,n){return e.split(t).join(n)};window.strip_html=function(e){return cstr(e).replace(/<[^>]*>/g,"")};window.strip=function(e,t){if(e)return e=lstrip(e,t),e=rstrip(e,t),e};window.lstrip=function(t,n){n||(n=[`
`,"	"," "]);let r=t.substr(0,1);for(;in_list(n,r);)t=t.substr(1),r=t.substr(0,1);return t};window.rstrip=function(e,t){t||(t=[`
`,"	"," "]);let n=e.substr(e.length-1);for(;in_list(t,n);)e=e.substr(0,e.length-1),n=e.substr(e.length-1);return e};frappe.get_cookie=function(t){return frappe.get_cookies()[t]};frappe.get_cookies=function(){var t=document.cookie,n=0,r={};return document.cookie.match(/^\s*\$Version=(?:"1"|1);\s*(.*)/)&&(t=RegExp.$1,n=1),n===0?t.split(/[,;]/).map(function(s){var c=s.split(/=/,2),u=decodeURIComponent(c[0].trimLeft()),d=c.length>1?decodeURIComponent(c[1].trimRight()):null;d&&d.charAt(0)==='"'&&(d=d.substr(1,d.length-2)),r[u]=d}):t.match(/(?:^|\s+)([!#$%&'*+\-.0-9A-Z^`a-z|~]+)=([!#$%&'*+\-.0-9A-Z^`a-z|~]*|"(?:[\x20-\x7E\x80\xFF]|\\[\x00-\x7F])*")(?=\s*[,;]|$)/g).map(function(s,c){var u=s,d=c.charAt(0)==='"'?c.substr(1,-1).replace(/\\(.)/g,"$1"):c;r[u]=d}),r};frappe.is_mobile=function(){return $(document).width()<768};frappe.utils.xss_sanitise=function(e,t){let n=e,r={strategies:["html","js"]},s={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},c=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;if(t=Object.assign({},r,t),t.strategies.includes("html"))for(let u in s){let d=s[u],C=new RegExp(u,"g");n=n.replace(C,d)}return t.strategies.includes("js")&&(n=n.replace(c,"")),n};frappe.utils.sanitise_redirect=e=>{let t=(()=>r=>{function s(u){let d=/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/img.exec(u);return d==null?"":d[1]}function c(u){return/^(?:[a-z]+:)?\/\//i.test(u)}return c(r)?s(location.href)!==s(r):!1})(),n=r=>{let s=/j[\s]*(&#x.{1,7})?a[\s]*(&#x.{1,7})?v[\s]*(&#x.{1,7})?a[\s]*(&#x.{1,7})?s[\s]*(&#x.{1,7})?c[\s]*(&#x.{1,7})?r[\s]*(&#x.{1,7})?i[\s]*(&#x.{1,7})?p[\s]*(&#x.{1,7})?t/gi;return r.replace(s,"")};return e=frappe.utils.strip_url(e),t(e)?"":n(frappe.utils.xss_sanitise(e,{strategies:["js"]}))};frappe.utils.strip_url=e=>e.replace(/^[^A-Za-z0-9(//)#]+/g,"");frappe.utils.new_auto_repeat_prompt=function(e){let t=[{fieldname:"frequency",fieldtype:"Select",label:__("Frequency"),reqd:1,options:[{label:__("Daily"),value:"Daily"},{label:__("Weekly"),value:"Weekly"},{label:__("Monthly"),value:"Monthly"},{label:__("Quarterly"),value:"Quarterly"},{label:__("Half-yearly"),value:"Half-yearly"},{label:__("Yearly"),value:"Yearly"}]},{fieldname:"start_date",fieldtype:"Date",label:__("Start Date"),reqd:1,default:frappe.datetime.nowdate()},{fieldname:"end_date",fieldtype:"Date",label:__("End Date")}];frappe.prompt(t,function(n){frappe.call({method:"frappe.automation.doctype.auto_repeat.auto_repeat.make_auto_repeat",args:{doctype:e.doc.doctype,docname:e.doc.name,frequency:n.frequency,start_date:n.start_date,end_date:n.end_date},callback:function(r){r.message&&(frappe.show_alert({message:__("Auto Repeat created for this document"),indicator:"green"}),e.reload_doc())}})},__("Auto Repeat"),__("Save"))};frappe.utils.get_page_view_count=function(e){return frappe.call("frappe.website.doctype.web_page_view.web_page_view.get_page_view_count",{path:e})};var kr=class{constructor(t,n,r,s){this.layout=s,this.card_layout=r,this.parent=t,this.df=n||{},this.fields_list=[],this.fields_dict={},this.make(),this.df.label&&this.df.collapsible&&localStorage.getItem(n.css_class+"-closed")&&this.collapse(),this.row={wrapper:this.wrapper},this.refresh()}make(){let t=this.card_layout;this.wrapper=$(`<div class="row
				${this.df.is_dashboard_section?"form-dashboard-section":"form-section"}
				${t?"card-section":""}">
			`).appendTo(this.parent),this.layout&&this.layout.sections.push(this),this.df&&(this.df.label&&this.make_head(),this.df.description&&(this.description_wrapper=$(`<div class="col-sm-12 form-section-description">
						${__(this.df.description)}
					</div>`),this.wrapper.append(this.description_wrapper)),this.df.css_class&&this.wrapper.addClass(this.df.css_class),this.df.hide_border&&this.wrapper.toggleClass("hide-border",!0)),this.body=$('<div class="section-body">').appendTo(this.wrapper),this.df.body_html&&this.body.append(this.df.body_html)}make_head(){this.head=$(`
			<div class="section-head">
				${__(this.df.label)}
				<span class="ml-2 collapse-indicator mb-1"></span>
			</div>
		`),this.head.appendTo(this.wrapper),this.indicator=this.head.find(".collapse-indicator"),this.indicator.hide(),this.df.collapsible&&(this.collapse_link=this.head.on("click",()=>{this.collapse()}),this.set_icon(),this.indicator.show())}refresh(t){!this.df||(t=t||this.df.hidden||this.df.hidden_due_to_dependency,this.wrapper.toggleClass("hide-control",!!t))}collapse(t){!(this.head&&this.body)||(t===void 0&&(t=!this.body.hasClass("hide")),this.body.toggleClass("hide",t),this.head&&this.head.toggleClass("collapsed",t),this.set_icon(t),this.fields_list.forEach(n=>{n.df.fieldtype=="Signature"&&n.refresh()}),this.df.css_class&&localStorage.setItem(this.df.css_class+"-closed",t?"1":""))}set_icon(t){let n=t?"down":"up-line";this.indicator&&this.indicator.html(frappe.utils.icon(n,"sm","mb-1"))}is_collapsed(){return this.body.hasClass("hide")}has_missing_mandatory(){let t=!1;for(let n=0,r=this.fields_list.length;n<r;n++){let s=this.fields_list[n].df;if(s.reqd&&this.layout.doc[s.fieldname]==null){t=!0;break}}return t}hide(){this.on_section_toggle(!1)}show(){this.on_section_toggle(!0)}on_section_toggle(t){this.wrapper.toggleClass("hide-control",!t)}},Ma=kr;var Sr=class{constructor(t,n,r,s,c){this.parent=t,this.df=n||{},this.frm=r,this.doctype="User",this.label=this.df&&this.df.label,this.tabs_list=s,this.tabs_content=c,this.fields_list=[],this.fields_dict={},this.make(),this.refresh()}make(){let t=`${frappe.scrub(this.doctype,"-")}-${this.df.fieldname}`;this.parent=$(`
			<li class="nav-item">
				<a class="nav-link ${this.df.active?"active":""}" id="${t}-tab"
					data-toggle="tab"
					href="#${t}"
					role="tab"
					aria-controls="${this.label}">
						${__(this.label)}
				</a>
			</li>
		`).appendTo(this.tabs_list),this.wrapper=$(`<div class="tab-pane fade show ${this.df.active?"active":""}"
			id="${t}" role="tabpanel" aria-labelledby="${t}-tab">`).appendTo(this.tabs_content)}refresh(){if(!this.df)return;let t=this.df.hidden||this.df.hidden_due_to_dependency;!t&&this.frm&&!this.frm.get_perm(this.df.permlevel||0,"read")&&(t=!0),t&&this.toggle(!1)}toggle(t){this.parent.toggleClass("hide",!t),this.wrapper.toggleClass("hide",!t),this.parent.toggleClass("show",t),this.wrapper.toggleClass("show",t),this.hidden=!t}show(){this.parent.show()}hide(){this.parent.hide()}set_active(){this.parent.find(".nav-link").tab("show"),this.wrapper.addClass("show")}is_active(){return this.wrapper.hasClass("active")}is_hidden(){this.wrapper.hasClass("hide")&&this.parent.hasClass("hide")}},Ia=Sr;var Or=class{constructor(t,n){n||(n={}),this.df=n,this.section=t,this.make(),this.resize_all_columns()}make(){this.wrapper=$(`
			<div class="form-column">
				<form>
				</form>
			</div>
		`).appendTo(this.section.body).find("form").on("submit",function(){return!1}),this.df.label&&$(`
				<label class="control-label">
					${__(this.df.label)}
				</label>
			`).appendTo(this.wrapper)}resize_all_columns(){let t=cint(12/this.section.wrapper.find(".form-column").length);this.section.wrapper.find(".form-column").removeClass().addClass("form-column").addClass("col-sm-"+t)}refresh(){this.section.refresh()}},ja=Or;frappe.ui.form.Layout=class{constructor(t){this.views={},this.pages=[],this.tabs=[],this.sections=[],this.fields_list=[],this.fields_dict={},$.extend(this,t)}make(){!this.parent&&this.body&&(this.parent=this.body),this.wrapper=$('<div class="form-layout">').appendTo(this.parent),this.message=$('<div class="form-message hidden"></div>').appendTo(this.wrapper),this.page=$('<div class="form-page"></div>').appendTo(this.wrapper),this.fields||(this.fields=this.get_doctype_fields()),this.is_tabbed_layout()&&this.setup_tabbed_layout(),this.setup_tab_events(),this.render()}setup_tabbed_layout(){$(`
			<div class="form-tabs-list">
				<ul class="nav form-tabs" id="form-tabs" role="tablist"></ul>
			</div>
		`).appendTo(this.page),this.tabs_list=this.page.find(".form-tabs"),this.tabs_content=$('<div class="form-tab-content tab-content"></div>').appendTo(this.page),this.setup_events()}show_empty_form_message(){this.wrapper.find(".frappe-control:visible").length||this.wrapper.find(".section-head.collapsed").length||this.show_message(__("This form does not have any input"))}get_doctype_fields(){let t=[this.get_new_name_field()];return this.doctype_layout?t=t.concat(this.get_fields_from_layout()):t=t.concat(frappe.meta.sort_docfields(frappe.meta.docfield_map[this.doctype])),t}get_new_name_field(){return{parent:this.frm.doctype,fieldtype:"Data",fieldname:"__newname",reqd:1,hidden:1,label:__("Name"),get_status:function(t){return t.frm&&t.frm.is_new()&&t.frm.meta.autoname&&["prompt","name"].includes(t.frm.meta.autoname.toLowerCase())?"Write":"None"}}}get_fields_from_layout(){let t=[];for(let n of this.doctype_layout.fields){let r=copy_dict(frappe.meta.docfield_map[this.doctype][n.fieldname]);r.label=n.label,t.push(r)}return t}show_message(t,n){this.message_color&&this.message.removeClass(this.message_color),this.message_color=n&&["yellow","blue"].includes(n)?n:"blue",t?(t.substr(0,1)!=="<"&&(t="<div>"+t+"</div>"),this.message.removeClass("hidden").addClass(this.message_color),$(t).appendTo(this.message)):this.message.empty().addClass("hidden")}render(t){let n=t||this.fields;if(this.section=null,this.column=null,this.no_opening_section()&&!this.is_tabbed_layout()&&this.fields.unshift({fieldtype:"Section Break"}),this.is_tabbed_layout()){let r={label:__("Details"),fieldname:"details",fieldtype:"Tab Break"};(this.fields[1].fieldtype==="Tab Break"?this.fields[1]:null)||this.fields.splice(1,0,r)}n.forEach(r=>{switch(r.fieldtype){case"Fold":this.make_page(r);break;case"Section Break":this.make_section(r);break;case"Column Break":this.make_column(r);break;case"Tab Break":this.make_tab(r);break;default:this.make_field(r)}})}no_opening_section(){return this.fields[0]&&this.fields[0].fieldtype!="Section Break"||!this.fields.length}no_opening_tab(){return this.fields[1]&&this.fields[1].fieldtype!="Tab Break"||!this.fields.length}is_tabbed_layout(){return this.fields.find(t=>t.fieldtype==="Tab Break")}replace_field(t,n,r){if(n.fieldname=t,this.fields_dict[t]&&this.fields_dict[t].df){let s=this.init_field(n,r);this.fields_dict[t].$wrapper.remove(),this.fields_list.splice(this.fields_dict[t],1,s),this.fields_dict[t]=s,this.frm&&(s.perm=this.frm.perm),this.section.fields_list.splice(this.section.fields_dict[t],1,s),this.section.fields_dict[t]=s,this.refresh_fields([n])}}make_field(t,n,r){!this.section&&this.make_section(),!this.column&&this.make_column();let s=this.init_field(t,r);this.fields_list.push(s),this.fields_dict[t.fieldname]=s,this.frm&&(s.perm=this.frm.perm),this.section.fields_list.push(s),this.section.fields_dict[t.fieldname]=s,s.section=this.section,this.current_tab&&(s.tab=this.current_tab,this.current_tab.fields_list.push(s),this.current_tab.fields_dict[t.fieldname]=s)}init_field(t,n=!1){let r=frappe.ui.form.make_control({df:t,doctype:this.doctype,parent:this.column.wrapper.get(0),frm:this.frm,render_input:n,doc:this.doc,layout:this});return r.layout=this,r}make_page(t){let n=this,r=$('<div class="form-clickable-section text-center">				<a class="btn-fold h6 text-muted">'+__("Show more details")+"</a>			</div>").appendTo(this.wrapper);this.page=$('<div class="form-page second-page hide"></div>').appendTo(this.wrapper),this.fold_btn=r.find(".btn-fold").on("click",function(){let s=$(this).parent().next();s.hasClass("hide")?($(this).removeClass("btn-fold").html(__("Hide details")),s.removeClass("hide"),frappe.utils.scroll_to($(this),!0,30),n.folded=!1):($(this).addClass("btn-fold").html(__("Show more details")),s.addClass("hide"),n.folded=!0)}),this.section=null,this.folded=!0}unfold(){this.fold_btn.trigger("click")}make_section(t){this.section=new Ma(this.current_tab?this.current_tab.wrapper:this.page,t,this.card_layout,this),t&&(this.fields_dict[t.fieldname]=this.section,this.fields_list.push(this.section)),this.column=null}make_column(t){this.column=new ja(this.section,t),t&&t.fieldname&&this.fields_list.push(this.column)}make_tab(t){this.section=null;let n=new Ia(this,t,this.frm,this.tabs_list,this.tabs_content);return this.current_tab=n,this.make_section({fieldtype:"Section Break"}),this.tabs.push(n),n}refresh(t){t&&(this.doc=t),this.frm&&this.wrapper.find(".empty-form-alert").remove(),this.attach_doc_and_docfields(!0),this.frm&&this.frm.wrapper&&$(this.frm.wrapper).trigger("refresh-fields"),this.refresh_dependency(),this.refresh_sections(),this.tabbed_layout&&this.refresh_tabs(),this.frm&&this.refresh_section_collapse(),document.activeElement&&document.activeElement.tagName=="INPUT"&&this.is_numeric_field_active()&&document.activeElement.select()}is_numeric_field_active(){let n=($(document.activeElement).closest(".frappe-control").data()||{}).fieldtype;return frappe.model.numeric_fieldtypes.includes(n)}refresh_sections(){this.wrapper.find(".form-section:not(.hide-control)").each(function(){let t=$(this).removeClass("empty-section visible-section");t.find(".frappe-control:not(.hide-control)").length?t.addClass("visible-section"):t.addClass("empty-section")})}refresh_tabs(){this.tabs.forEach(n=>{(!n.wrapper.hasClass("hide")||!n.parent.hasClass("hide"))&&(n.parent.removeClass("show hide"),n.wrapper.removeClass("show hide"),n.wrapper.find(".form-section:not(.hide-control, .empty-section), .form-dashboard-section:not(.hide-control, .empty-section)").length?n.toggle(!0):n.toggle(!1))});let t=this.tabs.filter(n=>!n.hidden);t&&t.length==1&&t[0].parent.toggleClass("hide show")}refresh_fields(t){let n=t.map(r=>{if(r.fieldname)return r.fieldname});this.fields_list.map(r=>{n.includes(r.df.fieldname)&&(r.refresh(),r.df.default&&r.set_input(r.df.default))})}add_fields(t){this.render(t),this.refresh_fields(t)}refresh_section_collapse(){if(!!(this.sections&&this.sections.length))for(let t=0;t<this.sections.length;t++){let n=this.sections[t],r=n.df;if(r&&r.collapsible){let s=!0;r.collapsible_depends_on&&(s=!this.evaluate_depends_on_value(r.collapsible_depends_on)),s&&n.has_missing_mandatory()&&(s=!1),n.collapse(s)}}}attach_doc_and_docfields(t){let n=this;for(let r=0,s=this.fields_list.length;r<s;r++){let c=this.fields_list[r];n.doc&&(c.doc=n.doc,c.doctype=n.doc.doctype,c.docname=n.doc.name,c.df=frappe.meta.get_docfield(n.doc.doctype,c.df.fieldname,n.doc.name)||c.df,n.frm&&(c.perm=n.frm.perm)),t&&c.df&&c.refresh&&c.refresh()}}refresh_section_count(){this.wrapper.find(".section-count-label:visible").each(function(t){$(this).html(t+1)})}setup_events(){this.tabs_list.off("click").on("click",".nav-link",t=>{t.preventDefault(),t.stopImmediatePropagation(),$(t.currentTarget).tab("show")})}setup_tab_events(){this.wrapper.on("keydown",t=>{if(t.which==9){let n=$(t.target),r=n.attr("data-doctype"),s=n.attr("data-fieldname");if(r)return this.handle_tab(r,s,t.shiftKey)}})}handle_tab(t,n,r){let s=null,c=null,u=this.fields_list,d=!1;if(t!=this.doctype){if(s=this.get_open_grid_row(),!s||!s.layout)return;u=s.layout.fields_list}for(let C=0,v=u.length;C<v;C++){if(u[C].df.fieldname==n){if(r){c?this.set_focus(c):$(this.primary_button).focus();break}if(C<v-1&&(d=this.focus_on_next_field(C,u)),d)break}this.is_visible(u[C])&&(c=u[C])}return d||(s?s.doc.idx==s.grid.grid_rows.length?s.toggle_view(!1,function(){s.grid.frm.layout.handle_tab(s.grid.df.parent,s.grid.df.fieldname)}):s.grid.grid_rows[s.doc.idx].toggle_view(!0):r||$(this.primary_button).focus()),!1}focus_on_next_field(t,n){for(let r=t+1,s=n.length;r<s;r++){let c=n[r];if(this.is_visible(c)){if(c.df.fieldtype==="Table")return c.grid.grid_rows&&c.grid.grid_rows.length||c.grid.add_new_row(),c.grid.grid_rows[0].show_form(),!0;if(!in_list(frappe.model.no_value_type,c.df.fieldtype))return this.set_focus(c),!0}}}is_visible(t){return t.disp_status==="Write"&&t.df&&"hidden"in t.df&&!t.df.hidden}set_focus(t){t.tab&&t.tab.set_active(),t.df.fieldtype=="Table"?t.grid.grid_rows.length?t.grid.grid_rows[0].toggle_view(!0):t.grid.add_new_row(1):t.editor?t.editor.set_focus():t.$input&&t.$input.focus()}get_open_grid_row(){return $(".grid-row-open").data("grid_row")}refresh_dependency(){let t=!1;for(let n in this.fields_list){let r=this.fields_list[n];r.dependencies_clear=!0,(r.df.depends_on||r.df.mandatory_depends_on||r.df.read_only_depends_on)&&(t=!0)}if(!!t){for(let n=this.fields_list.length-1;n>=0;n--){let r=this.fields_list[n];r.guardian_has_value=!0,r.df.depends_on&&(r.guardian_has_value=this.evaluate_depends_on_value(r.df.depends_on),r.guardian_has_value?r.df.hidden_due_to_dependency&&(r.df.hidden_due_to_dependency=!1,r.refresh()):r.df.hidden_due_to_dependency||(r.df.hidden_due_to_dependency=!0,r.refresh())),r.df.mandatory_depends_on&&this.set_dependant_property(r.df.mandatory_depends_on,r.df.fieldname,"reqd"),r.df.read_only_depends_on&&this.set_dependant_property(r.df.read_only_depends_on,r.df.fieldname,"read_only")}this.refresh_section_count()}}set_dependant_property(t,n,r){let c=this.evaluate_depends_on_value(t)?1:0,u;this.frm?u=this.frm:(this.is_dialog||this.doctype==="Web Form")&&(u=this),u&&(this.doc&&this.doc.parent&&this.doc.parentfield?(u.setting_dependency=!0,u.set_df_property(this.doc.parentfield,r,c,this.doc.parent,n,this.doc.name),u.setting_dependency=!1,this.fields_dict[n]&&this.fields_dict[n].refresh()):u.set_df_property(n,r,c))}evaluate_depends_on_value(t){let n=null,r=this.doc;if(!r&&this.get_values&&(r=this.get_values(!0)),!r)return;let s=this.frm?this.frm.doc:this.doc||null;if(typeof t=="boolean")n=t;else if(typeof t=="function")n=t(r);else if(t.substr(0,5)=="eval:")try{n=frappe.utils.eval(t.substr(5),{doc:r,parent:s}),s&&s.istable&&t.includes("is_submittable")&&(n=!0)}catch(u){frappe.throw(__('Invalid "depends_on" expression'))}else if(t.substr(0,3)=="fn:"&&this.frm)n=this.frm.script_manager.trigger(t.substr(3),this.doctype,this.docname);else{var c=r[t];$.isArray(c)?n=!!c.length:n=!!c}return n}};frappe.provide("frappe.ui");frappe.ui.FieldGroup=class extends frappe.ui.form.Layout{constructor(t){super(t);this.dirty=!1,$.each(this.fields||[],function(n,r){!r.fieldname&&r.label&&(r.fieldname=r.label.replace(/ /g,"_").toLowerCase())}),this.values&&this.set_values(this.values)}make(){var t=this;this.fields&&(super.make(),this.refresh(),$.each(this.fields_list,function(n,r){if(r.df.default){let s=r.df.default;s=="Today"&&r.df.fieldtype=="Date"&&(s=frappe.datetime.get_today()),r.set_input(s),t.refresh_dependency()}}),this.no_submit_on_enter||this.catch_enter_as_submit(),$(this.wrapper).find("input, select").on("change awesomplete-selectcomplete",()=>{this.dirty=!0,frappe.run_serially([()=>frappe.timeout(.1),()=>t.refresh_dependency()])}))}focus_on_first_input(){this.no_focus||$.each(this.fields_list,function(t,n){if(!in_list(["Date","Datetime","Time","Check"],n.df.fieldtype)&&n.set_focus)return n.set_focus(),!1})}catch_enter_as_submit(){var t=this;$(this.body).find('input[type="text"], input[type="password"], select').keypress(function(n){n.which==13&&t.has_primary_action&&(n.preventDefault(),t.get_primary_btn().trigger("click"))})}get_input(t){var n=this.fields_dict[t];return $(n.txt?n.txt:n.input)}get_field(t){return this.fields_dict[t]}get_values(t){var n={},r=[];for(var s in this.fields_dict){var c=this.fields_dict[s];if(c.get_value){var u=c.get_value();c.df.reqd&&is_null(typeof u=="string"?strip_html(u):u)&&r.push(__(c.df.label)),c.df.reqd&&c.df.fieldtype==="Text Editor"&&is_null(strip_html(cstr(u)))&&r.push(__(c.df.label)),is_null(u)||(n[c.df.fieldname]=u)}}return r.length&&!t?(frappe.msgprint({title:__("Missing Values Required"),message:__("Following fields have missing values:")+"<br><br><ul><li>"+r.join("<li>")+"</ul>",indicator:"orange"}),null):n}get_value(t){var n=this.fields_dict[t];return n&&(n.get_value?n.get_value():null)}set_value(t,n){return new Promise(r=>{var s=this.fields_dict[t];s?s.set_value(n).then(()=>{s.set_input(n),this.refresh_dependency(),r()}):r()})}set_input(t,n){return this.set_value(t,n)}set_values(t){let n=[];for(var r in t)this.fields_dict[r]&&n.push(this.set_value(r,t[r]));return Promise.all(n)}clear(){for(var t in this.fields_dict){var n=this.fields_dict[t];n&&n.set_input&&n.set_input(n.df.default||"")}}set_df_property(t,n,r){let s=this.get_field(t);s.df[n]=r,s.refresh()}};frappe.provide("frappe.dom");frappe.dom={id_count:0,freeze_count:0,by_id:function(e){return document.getElementById(e)},get_unique_id:function(){let e="unique-"+frappe.dom.id_count;return frappe.dom.id_count++,e},set_unique_id:function(e){var t=$(e);if(t.attr("id"))return t.attr("id");var n="unique-"+frappe.dom.id_count;return t.attr("id",n),frappe.dom.id_count++,n},eval:function(e){if(!!e){var t=document.createElement("script");t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)}},remove_script_and_style:function(e){let t=["script","style","noscript","title","meta","base","head"];if(!new RegExp(t.map(d=>`<${d}>.*<\\/${d}>`).join("|"),"s").test(e))return e;var r=document.createElement("div");r.innerHTML=e;var s=!1;t.forEach(function(d){var C=r.getElementsByTagName(d);for(u=C.length;u--;)s=!0,C[u].parentNode.removeChild(C[u])});for(var c=r.getElementsByTagName("link"),u=c.length;u--;)c[u].getAttribute("rel")=="stylesheet"&&(s=!0,c[u].parentNode.removeChild(c[u]));return s?r.innerHTML:e},is_element_in_viewport:function(e,t=0){typeof jQuery=="function"&&e instanceof jQuery&&(e=e[0]);var n=e.getBoundingClientRect();return n.top+t>=0&&n.left+t>=0&&n.bottom-t<=$(window).height()&&n.right-t<=$(window).width()},is_element_in_modal(e){return Boolean($(e).parents(".modal").length)},set_style:function(e,t){if(!!e){var n=document.createElement("style");if(n.type="text/css",t){var r=document.getElementById(t);r&&r.parentNode.removeChild(r),n.id=t}return n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(n),n}},add:function(e,t,n,r,s,c){e&&e.substr&&(e=frappe.dom.by_id(e));var u=document.createElement(t);return e&&e.appendChild(u),n&&(t.toLowerCase()=="img"?u.src=n:u.className=n),r&&frappe.dom.css(u,r),s&&(u.innerHTML=s),c&&(u.onclick=c),u},css:function(e,t){return e&&t&&$.extend(e.style,t),e},activate:function(e,t,n,r="active"){e.find(`.${n}.${r}`).removeClass(r),t.addClass(r)},freeze:function(e,t){if($("#freeze").length)$("#freeze").addClass("in");else{var n=$('<div id="freeze" class="modal-backdrop fade"></div>').on("click",function(){if(cur_frm&&cur_frm.cur_grid)return cur_frm.cur_grid.toggle_view(),!1}).appendTo("#body");n.html(repl('<div class="freeze-message-container"><div class="freeze-message"><p class="lead">%(msg)s</p></div></div>',{msg:e||""})),setTimeout(function(){n.addClass("in")},1)}t&&$("#freeze").addClass(t),frappe.dom.freeze_count++},unfreeze:function(){if(!!frappe.dom.freeze_count&&(frappe.dom.freeze_count--,!frappe.dom.freeze_count))var e=$("#freeze").removeClass("in").remove()},save_selection:function(){if(window.getSelection){var e=window.getSelection();if(e.getRangeAt&&e.rangeCount){for(var t=[],n=0,r=e.rangeCount;n<r;++n)t.push(e.getRangeAt(n));return t}}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null},restore_selection:function(e){if(e)if(window.getSelection){var t=window.getSelection();t.removeAllRanges();for(var n=0,r=e.length;n<r;++n)t.addRange(e[n])}else document.selection&&e.select&&e.select()},is_touchscreen:function(){return"ontouchstart"in window},handle_broken_images(e){$(e).find("img").on("error",t=>{$(t.currentTarget).addClass("no-image")})},scroll_to_bottom(e){let t=$(e);t.scrollTop(t[0].scrollHeight)},file_to_base64(e){return new Promise(t=>{let n=new FileReader;n.onload=function(){t(n.result)},n.readAsDataURL(e)})},scroll_to_section(e){setTimeout(()=>{let t=$(`a:contains("${e}")`);t.length&&(t.parent().hasClass("collapsed")&&t.click(),frappe.ui.scroll(t.parent().parent()))},200)},pixel_to_inches(e){let t=$('<div id="dpi" style="height: 1in; width: 1in; left: 100%; position: fixed; top: 100%;"></div>');t.appendTo(document.body);let n=document.getElementById("dpi").offsetWidth,r=e/n;return t.remove(),r}};frappe.ellipsis=function(e,t){return t||(t=20),e=cstr(e),e.length>t&&(e=e.substr(0,t)+"..."),e};frappe.run_serially=function(e){var t=Promise.resolve();return e.forEach(n=>{n&&(t=t.then?t.then(n):Promise.resolve())}),t};frappe.load_image=(e,t,n,r=()=>{})=>{var s=new Image;s.onload=function(){t(this)},s.onerror=n,r(s),s.src=e};frappe.timeout=e=>new Promise(t=>{setTimeout(()=>t(),e*1e3)});frappe.scrub=function(e,t="_"){return e.replace(/ /g,t).toLowerCase()};frappe.unscrub=function(e){return frappe.model.unscrub(e)};frappe.get_data_pill=(e,t=null,n=null,r=null)=>{let s=$(`
		<button class="data-pill btn">
			<div class="flex align-center ellipsis">
				${r||""}
				<span class="pill-label ${r?"ml-2":""}">${e}</span>
			</div>
		</button>
	`);if(n){let c=$(`
			<span class="remove-btn cursor-pointer">
				${frappe.utils.icon("close","sm")}
			</span>
		`).click(()=>{n(t||e,s)});s.append(c)}return s};frappe.get_modal=function(e,t){return $(`<div class="modal fade" style="overflow: auto;" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<div class="fill-width flex title-section">
						<span class="indicator hidden"></span>
						<h4 class="modal-title">${e}</h4>
					</div>
					<div class="modal-actions">
						<button class="btn btn-modal-minimize btn-link hide">
							${frappe.utils.icon("collapse")}
						</button>
						<button class="btn btn-modal-close btn-link" data-dismiss="modal">
							${frappe.utils.icon("close-alt","sm","close-alt")}
						</button>
					</div>
				</div>
				<div class="modal-body ui-front">${t}</div>
				<div class="modal-footer hide">
					<div class="custom-actions"></div>
					<div class="standard-actions">
						<button type="button" class="btn btn-secondary btn-sm hide btn-modal-secondary">
						</button>
						<button type="button" class="btn btn-primary btn-sm hide btn-modal-primary">
							${__("Confirm")}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>`)};frappe.is_online=function(){return frappe.boot.developer_mode==1?!0:"onLine"in navigator?navigator.onLine:!0};$(window).on("online",function(){frappe.show_alert({indicator:"green",message:__("You are connected to internet.")})});$(window).on("offline",function(){frappe.show_alert({indicator:"orange",message:__("Connection lost. Some features might not work.")})});frappe.provide("frappe.ui");window.cur_dialog=null;frappe.ui.open_dialogs=[];frappe.ui.Dialog=class extends frappe.ui.FieldGroup{constructor(t){super();this.display=!1,this.is_dialog=!0,$.extend(this,{animate:!0,size:null},t),this.make()}make(){this.$wrapper=frappe.get_modal("",""),this.static&&(this.$wrapper.modal({backdrop:"static",keyboard:!1}),this.get_close_btn().hide()),this.wrapper=this.$wrapper.find(".modal-dialog").get(0),this.size=="small"?$(this.wrapper).addClass("modal-sm"):this.size=="large"?$(this.wrapper).addClass("modal-lg"):this.size=="extra-large"&&$(this.wrapper).addClass("modal-xl"),this.make_head(),this.modal_body=this.$wrapper.find(".modal-body"),this.$body=$("<div></div>").appendTo(this.modal_body),this.body=this.$body.get(0),this.$message=$('<div class="hide modal-message"></div>').appendTo(this.modal_body),this.header=this.$wrapper.find(".modal-header"),this.footer=this.$wrapper.find(".modal-footer"),this.standard_actions=this.footer.find(".standard-actions"),this.custom_actions=this.footer.find(".custom-actions"),this.set_indicator(),super.make(),this.refresh_section_collapse(),this.action=this.action||{primary:{},secondary:{}},(this.primary_action||this.action.primary&&this.action.primary.onsubmit)&&this.set_primary_action(this.primary_action_label||this.action.primary.label||__("Submit",null,"Primary action in dialog"),this.primary_action||this.action.primary.onsubmit),this.secondary_action&&this.set_secondary_action(this.secondary_action),(this.secondary_action_label||this.action.secondary&&this.action.secondary.label)&&this.set_secondary_action_label(this.secondary_action_label||this.action.secondary.label),this.minimizable&&(this.header.find(".title-section").click(()=>this.is_minimized&&this.toggle_minimize()),this.get_minimize_btn().removeClass("hide").on("click",()=>this.toggle_minimize()));var t=this;this.$wrapper.on("hide.bs.modal",function(){t.display=!1,t.is_minimized=!1,t.hide_scrollbar(!1),frappe.ui.open_dialogs[frappe.ui.open_dialogs.length-1]===t&&(frappe.ui.open_dialogs.pop(),frappe.ui.open_dialogs.length?window.cur_dialog=frappe.ui.open_dialogs[frappe.ui.open_dialogs.length-1]:window.cur_dialog=null),t.onhide&&t.onhide(),t.on_hide&&t.on_hide()}).on("shown.bs.modal",function(){t.display=!0,window.cur_dialog=t,frappe.ui.open_dialogs.push(t),t.focus_on_first_input(),t.hide_scrollbar(!0),t.on_page_show&&t.on_page_show(),$(document).trigger("frappe.ui.Dialog:shown"),$(document).off("focusin.modal")}).on("scroll",function(){var n=$("input:focus");n.length&&["Date","Datetime","Time"].includes(n.attr("data-fieldtype"))&&n.blur()})}get_primary_btn(){return this.standard_actions.find(".btn-primary")}get_minimize_btn(){return this.$wrapper.find(".modal-header .btn-modal-minimize")}set_message(t){this.$message.removeClass("hide"),this.$body.addClass("hide"),this.$message.text(t)}clear_message(){this.$message.addClass("hide"),this.$body.removeClass("hide")}clear(){super.clear(),this.clear_message()}set_primary_action(t,n){this.footer.removeClass("hide"),this.has_primary_action=!0;var r=this;return this.get_primary_btn().removeClass("hide").html(t).click(function(){r.primary_action_fulfilled=!0;var s=r.get_values();!s||n&&n.apply(r,[s])})}set_secondary_action(t){this.footer.removeClass("hide"),this.get_secondary_btn().removeClass("hide").off("click").on("click",t)}set_secondary_action_label(t){this.get_secondary_btn().removeClass("hide").html(t)}disable_primary_action(){this.get_primary_btn().addClass("disabled")}enable_primary_action(){this.get_primary_btn().removeClass("disabled")}make_head(){this.set_title(this.title)}set_title(t){this.$wrapper.find(".modal-title").html(t)}set_indicator(){this.indicator&&this.header.find(".indicator").removeClass().addClass("indicator "+this.indicator)}show(){return this.animate?this.$wrapper.addClass("fade"):this.$wrapper.removeClass("fade"),this.$wrapper.modal("show"),this.$wrapper.removeClass("modal-minimize"),this.minimizable&&this.is_minimized&&($(".modal-backdrop").toggle(),this.is_minimized=!1),this.clear_message(),this.primary_action_fulfilled=!1,this.is_visible=!0,this}hide(){this.$wrapper.modal("hide"),this.is_visible=!1}get_close_btn(){return this.$wrapper.find(".btn-modal-close")}get_secondary_btn(){return this.standard_actions.find(".btn-modal-secondary")}no_cancel(){this.get_close_btn().toggle(!1)}cancel(){this.get_close_btn().trigger("click")}toggle_minimize(){$(".modal-backdrop").toggle();let t=this.$wrapper.closest(".modal").toggleClass("modal-minimize");t.attr("tabindex")?t.removeAttr("tabindex"):t.attr("tabindex",-1),this.is_minimized=!this.is_minimized;let n=this.is_minimized?"expand":"collapse";this.get_minimize_btn().html(frappe.utils.icon(n)),this.on_minimize_toggle&&this.on_minimize_toggle(this.is_minimized),this.header.find(".modal-title").toggleClass("cursor-pointer"),this.hide_scrollbar(!this.is_minimized)}hide_scrollbar(t){$("body").css("overflow",t?"hidden":"auto")}add_custom_action(t,n,r=null){this.footer.removeClass("hide");let s=$(`
			<button class="btn btn-secondary btn-sm ${r||""}">
				${t}
			</button>
		`);this.custom_actions.append(s),n&&s.click(n)}};frappe.ui.hide_open_dialog=()=>{window.cur_dialog&&(cur_dialog.minimizable?cur_dialog.is_minimized||cur_dialog.toggle_minimize():cur_dialog.hide())};frappe.provide("frappe.messages");frappe.messages.waiting=function(e,t){return $(frappe.messages.get_waiting_message(t)).appendTo(e)};frappe.messages.get_waiting_message=function(e){return repl('<div class="msg-box" style="width: 63%; margin: 30px auto;">		<p class="text-center">%(msg)s</p></div>',{msg:e})};frappe.throw=function(e){throw typeof e=="string"&&(e={message:e,title:__("Error")}),e.indicator||(e.indicator="red"),frappe.msgprint(e),new Error(e.message)};frappe.confirm=function(e,t,n){var r=new frappe.ui.Dialog({title:__("Confirm",null,"Title of confirmation dialog"),primary_action_label:__("Yes",null,"Approve confirmation dialog"),primary_action:()=>{t&&t(),r.hide()},secondary_action_label:__("No",null,"Dismiss confirmation dialog"),secondary_action:()=>r.hide()});return r.$body.append(`<p class="frappe-confirm-message">${e}</p>`),r.show(),r.confirm_dialog=!0,n&&(r.onhide=()=>{r.primary_action_fulfilled||n()}),r};frappe.warn=function(e,t,n,r,s){let c=new frappe.ui.Dialog({title:e,indicator:"red",primary_action_label:r,primary_action:()=>{n&&n(),c.hide()},secondary_action_label:__("Cancel",null,"Secondary button in warning dialog"),secondary_action:()=>c.hide(),minimizable:s});return c.$body.append(`<div class="frappe-confirm-message">${t}</div>`),c.standard_actions.find(".btn-primary").removeClass("btn-primary").addClass("btn-danger"),c.standard_actions.find(".btn-primary").removeClass("btn-primary").addClass("btn-danger"),c.show(),c};frappe.prompt=function(e,t,n,r){typeof e=="string"&&(e=[{label:e,fieldname:"value",fieldtype:"Data",reqd:1}]),$.isArray(e)||(e=[e]);var s=new frappe.ui.Dialog({fields:e,title:n||__("Enter Value",null,"Title of prompt dialog")});return s.set_primary_action(r||__("Submit",null,"Primary action of prompt dialog"),function(){var c=s.get_values();!c||(s.hide(),t(c))}),s.show(),s};frappe.msgprint=function(e,t,n){if(!!e){if($.isPlainObject(e))var r=e;else if(typeof e=="string"&&e.substr(0,1)==="{")var r=JSON.parse(e);else var r={message:e,title:t};if(r.indicator||(r.indicator="blue"),r.as_list){let c=r.message.map(u=>`<li>${u}</li>`).join("");r.message=`<ul style="padding-left: 20px">${c}</ul>`}if(r.as_table){let c=r.message.map(u=>`<tr>${u.map(C=>`<td>${C}</td>`).join("")}</tr>`).join("");r.message=`<table class="table table-bordered" style="margin: 0;">${c}</table>`}if(r.message instanceof Array){r.message.forEach(function(c){frappe.msgprint(c)});return}if(r.alert||r.toast){frappe.show_alert(r);return}if(frappe.msg_dialog||(frappe.msg_dialog=new frappe.ui.Dialog({title:__("Message"),onhide:function(){frappe.msg_dialog.custom_onhide&&frappe.msg_dialog.custom_onhide(),frappe.msg_dialog.msg_area.empty()},minimizable:r.is_minimizable||n}),frappe.msg_dialog.msg_area=$('<div class="msgprint">').appendTo(frappe.msg_dialog.body),frappe.msg_dialog.clear=function(){frappe.msg_dialog.msg_area.empty()},frappe.msg_dialog.indicator=frappe.msg_dialog.header.find(".indicator")),r.primary_action){if(r.primary_action.server_action&&typeof r.primary_action.server_action=="string"&&(r.primary_action.action=()=>{frappe.call({method:r.primary_action.server_action,args:{args:r.primary_action.args},callback(){r.primary_action.hide_on_success&&frappe.hide_msgprint()}})}),r.primary_action.client_action&&typeof r.primary_action.client_action=="string"){let c=r.primary_action.client_action.split("."),u=window;for(let d of c)u=u[d];r.primary_action.action=()=>{typeof u=="function"&&u(r.primary_action.args)}}frappe.msg_dialog.set_primary_action(__(r.primary_action.label||r.primary_action_label||"Done"),r.primary_action.action)}else frappe.msg_dialog.has_primary_action&&(frappe.msg_dialog.get_primary_btn().addClass("hide"),frappe.msg_dialog.has_primary_action=!1);r.secondary_action&&(frappe.msg_dialog.set_secondary_action(r.secondary_action.action),frappe.msg_dialog.set_secondary_action_label(__(r.secondary_action.label||"Close"))),r.message==null&&(r.message=""),r.message.search(/<br>|<p>|<li>/)==-1&&(e=frappe.utils.replace_newlines(r.message));var s=!1;return r.clear?frappe.msg_dialog.msg_area.empty():s=frappe.msg_dialog.msg_area.html(),(r.title||!s)&&frappe.msg_dialog.set_title(r.title||__("Message")),r.indicator?frappe.msg_dialog.indicator.removeClass().addClass("indicator "+r.indicator):frappe.msg_dialog.indicator.removeClass().addClass("hidden"),r.wide?frappe.msg_dialog.wrapper.classList.contains("msgprint-dialog")&&frappe.msg_dialog.wrapper.classList.remove("msgprint-dialog"):frappe.msg_dialog.wrapper.classList.add("msgprint-dialog"),s&&frappe.msg_dialog.msg_area.append("<hr>"),frappe.msg_dialog.msg_area.append(r.message),frappe.msg_dialog.$wrapper.css("z-index",2e3),frappe.msg_dialog.show(),frappe.msg_dialog}};window.msgprint=frappe.msgprint;frappe.hide_msgprint=function(e){frappe.msg_dialog&&frappe.msg_dialog.msg_area&&frappe.msg_dialog.msg_area.empty(),frappe.msg_dialog&&frappe.msg_dialog.$wrapper.is(":visible")&&(e&&frappe.msg_dialog.$wrapper.removeClass("fade"),frappe.msg_dialog.hide(),e&&frappe.msg_dialog.$wrapper.addClass("fade"))};frappe.update_msgprint=function(e){!frappe.msg_dialog||frappe.msg_dialog&&!frappe.msg_dialog.$wrapper.is(":visible")?frappe.msgprint(e):frappe.msg_dialog.msg_area.html(e)};frappe.verify_password=function(e){frappe.prompt({fieldname:"password",label:__("Enter your password"),fieldtype:"Password",reqd:1},function(t){frappe.call({method:"frappe.core.doctype.user.user.verify_password",args:{password:t.password},callback:function(n){n.exc||e()}})},__("Verify Password"),__("Verify"))};frappe.show_progress=(e,t,n=100,r,s=!1)=>{let c;return frappe.cur_progress&&frappe.cur_progress.title===e&&frappe.cur_progress.is_visible?c=frappe.cur_progress:(c=new frappe.ui.Dialog({title:e}),c.progress=$(`<div>
			<div class="progress">
				<div class="progress-bar"></div>
			</div>
			<p class="description text-muted small"></p>
		</div`).appendTo(c.body),c.progress_bar=c.progress.css({"margin-top":"10px"}).find(".progress-bar"),c.$wrapper.removeClass("fade"),c.show(),frappe.cur_progress=c),r&&c.progress.find(".description").text(r),c.percent=cint(flt(t)*100/n),c.progress_bar.css({width:c.percent+"%"}),s&&c.percent===100&&setTimeout(frappe.hide_progress,500),c};frappe.hide_progress=function(){frappe.cur_progress&&(frappe.cur_progress.hide(),frappe.cur_progress=null)};frappe.show_alert=frappe.toast=function(e,t=7,n={}){let r={orange:"solid-warning",yellow:"solid-warning",blue:"solid-info",green:"solid-success",red:"solid-error"};typeof e=="string"&&(e={message:e}),$("#dialog-container").length||$('<div id="dialog-container"><div id="alert-container"></div></div>').appendTo("body");let s;e.indicator?s=r[e.indicator.toLowerCase()]||"solid-"+e.indicator:s="solid-info";let c=e.indicator||"blue",u=$(`
		<div class="alert desk-alert ${c}" role="alert">
			<div class="alert-message-container">
				<div class="alert-title-container">
					<div>${frappe.utils.icon(s,"lg")}</div>
					<div class="alert-message">${e.message}</div>
				</div>
				<div class="alert-subtitle">${e.subtitle||""}</div>
			</div>
			<div class="alert-body" style="display: none"></div>
			<a class="close">${frappe.utils.icon("close-alt")}</a>
		</div>
	`);return u.hide().appendTo("#alert-container").show(),e.body&&u.find(".alert-body").show().html(e.body),u.find(".close, button").click(function(){return u.addClass("out"),setTimeout(()=>u.remove(),800),!1}),Object.keys(n).map(d=>{u.find(`[data-action=${d}]`).on("click",n[d])}),t>2&&(t=t-.8),setTimeout(()=>(u.addClass("out"),setTimeout(()=>u.remove(),800),!1),t*1e3),u};Object.defineProperty(window,"show_alert",{get:function(){return console.warn("Please use `frappe.show_alert` instead of `show_alert`. It will be deprecated soon."),frappe.show_alert}});frappe._=function(e,t,n=null){if(!e||typeof e!="string")return e;let r="",s=e;return n&&(r=frappe._messages[`${s}:${n}`]),r||(r=frappe._messages[s]||e),t&&typeof t=="object"&&(r=$.format(r,t)),r};window.__=frappe._;frappe.get_languages=function(){return frappe.languages||(frappe.languages=[],$.each(frappe.boot.lang_dict,function(e,t){frappe.languages.push({label:e,value:t})}),frappe.languages=frappe.languages.sort(function(e,t){return e.value<t.value?-1:1})),frappe.languages};function Nr(e,t){if(!e)return"";typeof e=="string"&&(e=frappe.datetime.convert_to_user_tz(e),e=new Date((e||"").replace(/-/g,"/").replace(/[TZ]/g," ").replace(/\.[0-9]*/,"")));let n=(new Date(frappe.datetime.now_datetime()).getTime()-e.getTime())/1e3,r=Math.floor(n/86400);if(isNaN(r)||r<0)return"";if(t)if(r==0){if(n<60)return __("now");if(n<3600)return __("{0} m",[Math.floor(n/60)]);if(n<86400)return __("{0} h",[Math.floor(n/3600)])}else return r<7?__("{0} d",[r]):r<31?__("{0} w",[Math.floor(r/7)]):r<365?__("{0} M",[Math.floor(r/30)]):__("{0} y",[Math.floor(r/365)]);else if(r==0){if(n<60)return __("just now");if(n<120)return __("1 minute ago");if(n<3600)return __("{0} minutes ago",[Math.floor(n/60)]);if(n<7200)return __("1 hour ago");if(n<86400)return __("{0} hours ago",[Math.floor(n/3600)])}else return r==1?__("yesterday"):r<7?__("{0} days ago",[r]):r<14?__("1 week ago"):r<31?__("{0} weeks ago",[Math.floor(r/7)]):r<62?__("1 month ago"):r<365?__("{0} months ago",[Math.floor(r/30)]):r<730?__("1 year ago"):__("{0} years ago",[Math.floor(r/365)])}frappe.provide("frappe.datetime");window.comment_when=function(e,t){var n=frappe.datetime.str_to_user?frappe.datetime.str_to_user(e):e;return'<span class="frappe-timestamp '+(t?" mini":"")+'" data-timestamp="'+e+'" title="'+n+'">'+Nr(e,t)+"</span>"};frappe.datetime.comment_when=comment_when;frappe.datetime.prettyDate=Nr;frappe.datetime.refresh_when=function(){jQuery&&$(".frappe-timestamp").each(function(){$(this).html(Nr($(this).attr("data-timestamp"),$(this).hasClass("mini")))})};setInterval(function(){frappe.datetime.refresh_when()},6e4);frappe.provide("frappe.datetime");frappe.defaultDateFormat="YYYY-MM-DD";frappe.defaultTimeFormat="HH:mm:ss";frappe.defaultDatetimeFormat=frappe.defaultDateFormat+" "+frappe.defaultTimeFormat;moment.defaultFormat=frappe.defaultDateFormat;frappe.provide("frappe.datetime");$.extend(frappe.datetime,{convert_to_user_tz:function(e,t){let n=null;return frappe.boot.time_zone&&frappe.boot.time_zone.system&&frappe.boot.time_zone.user?n=moment.tz(e,frappe.boot.time_zone.system).clone().tz(frappe.boot.time_zone.user):n=moment(e),t===!1?n:n.format(frappe.defaultDatetimeFormat)},convert_to_system_tz:function(e,t){let n=null;return frappe.boot.time_zone&&frappe.boot.time_zone.system&&frappe.boot.time_zone.user?n=moment.tz(e,frappe.boot.time_zone.user).clone().tz(frappe.boot.time_zone.system):n=moment(e),t===!1?n:n.format(frappe.defaultDatetimeFormat)},is_system_time_zone:function(){return frappe.boot.time_zone&&frappe.boot.time_zone.system&&frappe.boot.time_zone.user?moment().tz(frappe.boot.time_zone.system).utcOffset()===moment().tz(frappe.boot.time_zone.user).utcOffset():!0},is_timezone_same:function(){return frappe.datetime.is_system_time_zone()},str_to_obj:function(e){return moment(e,frappe.defaultDatetimeFormat)._d},obj_to_str:function(e){return moment(e).locale("en").format()},obj_to_user:function(e){return moment(e).format(frappe.datetime.get_user_date_fmt().toUpperCase())},get_diff:function(e,t){return moment(e).diff(t,"days")},get_hour_diff:function(e,t){return moment(e).diff(t,"hours")},get_day_diff:function(e,t){return moment(e).diff(t,"days")},add_days:function(e,t){return moment(e).add(t,"days").format()},add_months:function(e,t){return moment(e).add(t,"months").format()},week_start:function(){return moment().startOf("week").format()},week_end:function(){return moment().endOf("week").format()},month_start:function(){return moment().startOf("month").format()},month_end:function(){return moment().endOf("month").format()},quarter_start:function(){return moment().startOf("quarter").format()},quarter_end:function(){return moment().endOf("quarter").format()},year_start:function(){return moment().startOf("year").format()},year_end:function(){return moment().endOf("year").format()},get_user_time_fmt:function(){return frappe.sys_defaults&&frappe.sys_defaults.time_format||"HH:mm:ss"},get_user_date_fmt:function(){return frappe.sys_defaults&&frappe.sys_defaults.date_format||"yyyy-mm-dd"},get_user_fmt:function(){return frappe.sys_defaults&&frappe.sys_defaults.date_format||"yyyy-mm-dd"},str_to_user:function(e,t=!1){if(!e)return"";let n=frappe.datetime.get_user_date_fmt().toUpperCase(),r=frappe.datetime.get_user_time_fmt(),s=r;if(t)return moment(e,frappe.defaultTimeFormat).format(s);{let c=moment.tz(e,frappe.boot.time_zone.system);return typeof e!="string"||e.indexOf(" ")===-1?s=n:s=n+" "+r,c.clone().tz(frappe.boot.time_zone.user).format(s)}},get_datetime_as_string:function(e){return moment(e).format("YYYY-MM-DD HH:mm:ss")},user_to_str:function(e,t=!1){var n=frappe.datetime.get_user_time_fmt();if(t)return moment(e,n).format(frappe.defaultTimeFormat);var r=frappe.datetime.get_user_date_fmt().toUpperCase(),s="YYYY-MM-DD";return e.indexOf(" ")!==-1&&(r+=" "+n,s+=" HH:mm:ss"),moment(e,[r.replace("YYYY","YY"),r]).locale("en").format(s)},user_to_obj:function(e){return frappe.datetime.str_to_obj(frappe.datetime.user_to_str(e))},global_date_format:function(e){var t=moment(e);return t._f&&t._f.indexOf("HH")!==-1?t.format("Do MMMM YYYY, h:mma"):t.format("Do MMMM YYYY")},now_date:function(e=!1){return frappe.datetime._date(frappe.defaultDateFormat,e)},now_time:function(e=!1){return frappe.datetime._date(frappe.defaultTimeFormat,e)},now_datetime:function(e=!1){return frappe.datetime._date(frappe.defaultDatetimeFormat,e)},_date:function(e,t=!1){let n=frappe.boot.time_zone?frappe.boot.time_zone.user||frappe.boot.time_zone.system:frappe.sys_defaults.time_zone,r=moment.tz(n);return t?frappe.datetime.moment_to_date_obj(r):r.format(e)},moment_to_date_obj:function(e){let t=new Date,n=e.toArray();return t.setFullYear(n[0]),t.setMonth(n[1]),t.setDate(n[2]),t.setHours(n[3]),t.setMinutes(n[4]),t.setSeconds(n[5]),t.setMilliseconds(n[6]),t},nowdate:function(){return frappe.datetime.now_date()},get_today:function(){return frappe.datetime.now_date()},get_time:e=>moment(e).format("hh:mm A"),validate:function(e){return moment(e,[frappe.defaultDateFormat,frappe.defaultDatetimeFormat,frappe.defaultTimeFormat],!0).isValid()},get_first_day_of_the_week_index(){let e=frappe.sys_defaults.first_day_of_the_week||"Sunday";return moment.weekdays().indexOf(e)}});Object.defineProperties(window,{dateutil:{get:function(){return console.warn("Please use `frappe.datetime` instead of `dateutil`. It will be deprecated soon."),frappe.datetime},configurable:!0},date:{get:function(){return console.warn("Please use `frappe.datetime` instead of `date`. It will be deprecated soon."),frappe.datetime},configurable:!0},get_today:{get:function(){return console.warn("Please use `frappe.datetime.get_today` instead of `get_today`. It will be deprecated soon."),frappe.datetime.get_today},configurable:!0}});frappe.template={compiled:{},debug:{}};frappe.template.compile=function(e,t){var n=t||e;if(!frappe.template.compiled[n]){let c=function(u,d,C,v,p){var x=frappe.utils.get_random(3),A=frappe.utils.get_random(3);return"{% for (var "+x+"=0, "+A+"="+C+".length; "+x+"<"+A+"; "+x+"++) { var "+d+" = "+C+"["+x+"]; "+d+"._index = "+x+"; %}"};var s=c;e.indexOf("'")!==-1&&e.replace(/'/g,"\\'"),e=e.replace(/{{/g,"{%=").replace(/}}/g,"%}"),e=e.replace(/{%\s?if\s?\s?not\s?([^\(][^%{]+)\s?%}/g,"{% if (! $1) { %}"),e=e.replace(/{%\s?if\s?([^\(][^%{]+)\s?%}/g,"{% if ($1) { %}"),e=e.replace(/{%\s?for\s([a-z._]+)\sin\s([a-z._]+)\s?%}/g,c),e=e.replace(/{%\s?endif\s?%}/g,"{% }; %}"),e=e.replace(/{%\s?else\s?%}/g,"{% } else { %}"),e=e.replace(/{%\s?endfor\s?%}/g,"{% }; %}");var r=`var _p=[],print=function(){_p.push.apply(_p,arguments)};with(obj){
_p.push('`+e.replace(/[\r\t\n]/g," ").split("{%").join("	").replace(/((^|%})[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%}/g,"',$1,'").split("	").join(`');
`).split("%}").join(`
_p.push('`).split("\r").join("\\'")+"');}return _p.join('');";frappe.template.debug[t]=r;try{frappe.template.compiled[n]=new Function("obj",r)}catch(u){console.log("Error in Template:"),console.log(r),u.lineNumber&&(console.log("Error in Line "+u.lineNumber+", Col "+u.columnNumber+":"),console.log(r.split(`
`)[u.lineNumber-1]))}}return frappe.template.compiled[n]};frappe.render=function(e,t,n){return frappe.template.compile(e,n)(t)};frappe.render_template=function(e,t){if(e.indexOf(" ")!==-1)var n=e;else var n=frappe.templates[e];return t===void 0&&(t={}),n||frappe.throw(`Template <b>${e}</b> not found.`),frappe.render(n,t,e)};frappe.render_grid=function(e){e.grid&&(e.columns=e.grid.getColumns(),e.data=e.grid.getData().getItems()),e.print_settings&&e.print_settings.orientation&&e.print_settings.orientation.toLowerCase()==="landscape"&&(e.landscape=!0),e.landscape==null&&(e.columns&&e.columns.length>10?e.landscape=!0:e.landscape=!1),e.content||(e.content=frappe.render_template(e.template||"print_grid",e)),e.base_url=frappe.urllib.get_base_url(),e.print_css=frappe.boot.print_css,e.lang=e.lang||frappe.boot.lang,e.layout_direction=e.layout_direction||frappe.utils.is_rtl()?"rtl":"ltr";var t=frappe.render_template("print_template",e),n=window.open();n||frappe.msgprint(__("Please enable pop-ups in your browser")),n.document.write(t),n.document.close()},frappe.render_tree=function(e){e.base_url=frappe.urllib.get_base_url(),e.landscape=!1,e.print_css=frappe.boot.print_css;var t=frappe.render_template("print_tree",e),n=window.open();n||frappe.msgprint(__("Please enable pop-ups in your browser")),n.document.write(t),n.document.close()};frappe.render_pdf=function(e,t={}){var n=new FormData;n.append("html",e),t.orientation&&n.append("orientation",t.orientation);var r=new Blob([],{type:"text/xml"});n.append("blob",r);var s=new XMLHttpRequest;s.open("POST","/api/method/frappe.utils.print_format.report_to_pdf"),s.setRequestHeader("X-Frappe-CSRF-Token",frappe.csrf_token),s.responseType="arraybuffer",s.onload=function(c){if(this.status===200){var u=new Blob([c.currentTarget.response],{type:"application/pdf"}),d=URL.createObjectURL(u);window.open(d)}},s.send(n)};frappe.provide("frappe.utils");function qo(e){return Pa()[e]||""}function $o(e){return e.includes("?")?e.slice(e.indexOf("?")+1):""}function Pa(e){var t={};e||(e=location.search.substring(1));for(var n=e.split("&"),r=0,s=n.length;r<s;r++){var c=n[r].split(/=(.+)/),u=c[0];if(!!u){var d=c[1];if(typeof d=="string"){d=d.replace(/\+/g,"%20");try{d=decodeURIComponent(d)}catch(C){}}u in t?(typeof t[u]=="undefined"?t[u]=[]:typeof t[u]=="string"&&(t[u]=[t[u]]),t[u].push(d)):t[u]=d}}return t}function Wo(e,t=!0){let n=[];for(let r in e){let s=e[r];s===void 0||s===""||s===null||(typeof s=="object"&&(s=JSON.stringify(s)),t&&(r=encodeURIComponent(r),s=encodeURIComponent(s)),n.push(`${r}=${s}`))}return"?"+n.join("&")}Object.assign(frappe.utils,{get_url_arg:qo,get_query_string:$o,get_query_params:Pa,make_query_string:Wo});var Uo={name:"ProgressRing",props:{primary:String,secondary:String,radius:Number,progress:Number,stroke:Number},data(){let e=this.radius-this.stroke*2,t=e*2*Math.PI;return{normalizedRadius:e,circumference:t}},computed:{strokeDashoffset(){return this.circumference-this.progress/100*this.circumference}}},Ba=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{height:e.radius*2,width:e.radius*2}},[n("circle",{style:{stroke:e.secondary,strokeDashoffset:0},attrs:{"stroke-dasharray":e.circumference+" "+e.circumference,"stroke-width":e.stroke,fill:"transparent",r:e.normalizedRadius,cx:e.radius,cy:e.radius}}),e._v(" "),n("circle",{style:{stroke:e.primary,strokeDashoffset:e.strokeDashoffset},attrs:{"stroke-dasharray":e.circumference+" "+e.circumference,"stroke-width":e.stroke,fill:"transparent",r:e.normalizedRadius,cx:e.radius,cy:e.radius}}),e._v(" "),n("text",{style:{color:"var(--text-color)",fontSize:"var(--text-xs)",fontWeight:"var(--text-bold)"},attrs:{"dominant-baseline":"middle","text-anchor":"middle",x:e.radius,y:e.radius}},[e._v(`
		`+e._s(e.progress)+`%
	`)])])},Vo=[];Ba._withStripped=!0;var Yo=function(e){!e||e("data-v-0f538d8f_0",{source:`
circle[data-v-0f538d8f] {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/ProgressRing.vue"],names:[],mappings:";AAsEA;CACA,mCAAA;CACA,yBAAA;CACA,yBAAA;AACA",file:"ProgressRing.vue",sourcesContent:[`<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)'
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference
		};
	},
	computed: {
		strokeDashoffset() {
			return (
				this.circumference - (this.progress / 100) * this.circumference
			);
		}
	}
};
</script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
</style>
`]},media:void 0})},Go="data-v-0f538d8f",Ko=void 0,Xo=!1;function Qo(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)'
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference
		};
	},
	computed: {
		strokeDashoffset() {
			return (
				this.circumference - (this.progress / 100) * this.circumference
			);
		}
	}
};
</script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function Dr(){let e=Dr.styles||(Dr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var Jo=Qo({render:Ba,staticRenderFns:Vo},Yo,Uo,Go,Xo,Ko,!1,Dr,void 0,void 0),Fa=Jo;var Zo={name:"FilePreview",props:["file"],components:{ProgressRing:Fa},data(){return{src:null,optimize:this.file.optimize}},mounted(){if(this.is_image&&window.FileReader){let e=new FileReader;e.onload=()=>this.src=e.result,e.readAsDataURL(this.file.file_obj)}},filters:{file_size(e){return frappe.form.formatters.FileSize(e)},file_name(e){return e}},computed:{private_icon(){return frappe.utils.icon(this.is_private?"lock":"unlock")},is_private(){return this.file.doc?this.file.doc.is_private:this.file.private},uploaded(){return this.file.request_succeeded},is_image(){return this.file.file_obj.type.startsWith("image")},is_optimizable(){let e=this.file.file_obj.type=="image/svg+xml";return this.is_image&&!e&&!this.uploaded&&!this.file.failed},is_cropable(){let e=["image/jpeg","image/png"];return!this.uploaded&&!this.file.uploading&&!this.file.failed&&e.includes(this.file.file_obj.type)},progress(){let e=Math.round(this.file.progress*100/this.file.total);return isNaN(e)&&(e=0),e}}},za=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-preview"},[n("div",{staticClass:"file-icon"},[e.is_image?n("img",{attrs:{src:e.src,alt:e.file.name}}):n("div",{staticClass:"fallback",domProps:{innerHTML:e._s(e.frappe.utils.icon("file","md"))}})]),e._v(" "),n("div",[n("div",[e.file.doc?n("a",{staticClass:"flex",attrs:{href:e.file.doc.file_url,target:"_blank"}},[n("span",{staticClass:"file-name"},[e._v(e._s(e._f("file_name")(e.file.name)))]),e._v(" "),n("div",{staticClass:"ml-2",domProps:{innerHTML:e._s(e.private_icon)}})]):n("span",{staticClass:"flex"},[n("span",{staticClass:"file-name"},[e._v(e._s(e._f("file_name")(e.file.name)))]),e._v(" "),n("button",{staticClass:"ml-2 btn-reset",attrs:{title:e.__("Toggle Public/Private")},on:{click:function(r){return e.$emit("toggle_private")}}},[n("div",{domProps:{innerHTML:e._s(e.private_icon)}})])])]),e._v(" "),n("div",[n("span",{staticClass:"file-size"},[e._v(`
				`+e._s(e._f("file_size")(e.file.file_obj.size))+`
			`)])]),e._v(" "),e.is_optimizable?n("label",{staticClass:"optimize-checkbox"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.optimize},on:{change:function(r){return e.$emit("toggle_optimize")}}}),e._v("Optimize")]):e._e(),e._v(" "),n("div",[e.file.error_message?n("span",{staticClass:"file-error text-danger"},[e._v(`
				`+e._s(e.file.error_message)+`
			`)]):e._e()])]),e._v(" "),n("div",{staticClass:"file-actions"},[n("ProgressRing",{directives:[{name:"show",rawName:"v-show",value:e.file.uploading&&!e.uploaded&&!e.file.failed,expression:"file.uploading && !uploaded && !file.failed"}],attrs:{primary:"var(--primary-color)",secondary:"var(--gray-200)",radius:24,progress:e.progress,stroke:3}}),e._v(" "),e.uploaded?n("div",{domProps:{innerHTML:e._s(e.frappe.utils.icon("solid-success","lg"))}}):e._e(),e._v(" "),e.file.failed?n("div",{domProps:{innerHTML:e._s(e.frappe.utils.icon("solid-error","lg"))}}):e._e(),e._v(" "),n("div",{staticClass:"file-action-buttons"},[e.is_cropable?n("button",{staticClass:"btn btn-crop muted",domProps:{innerHTML:e._s(e.frappe.utils.icon("crop","md"))},on:{click:function(r){return e.$emit("toggle_image_cropper")}}}):e._e(),e._v(" "),!e.uploaded&&!e.file.uploading&&!e.file.failed?n("button",{staticClass:"btn muted",domProps:{innerHTML:e._s(e.frappe.utils.icon("delete","md"))},on:{click:function(r){return e.$emit("remove")}}}):e._e()])],1)])},el=[];za._withStripped=!0;var tl=function(e){!e||e("data-v-681a589e_0",{source:`
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}
.file-preview + .file-preview {
	border-top-color: var(--border-color);
}
.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}
.file-preview:hover + .file-preview {
	border-top-color: transparent;
}
.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}
.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}
.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}
.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}
.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}
.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}
.muted {
	opacity: 0.5;
	transition: 0.3s;
}
.muted:hover {
	opacity: 1;
}
.optimize-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}
.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/FilePreview.vue"],names:[],mappings:";AAyHA;CACA,aAAA;CACA,mBAAA;CACA,gBAAA;CACA,6BAAA;AACA;AAEA;CACA,qCAAA;AACA;AAEA;CACA,iCAAA;CACA,sCAAA;CACA,mCAAA;AACA;AAEA;CACA,6BAAA;AACA;AAEA;CACA,mCAAA;CACA,eAAA;CACA,gBAAA;CACA,gBAAA;CACA,8BAAA;CACA,cAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,iBAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,qCAAA;CACA,mCAAA;AACA;AAEA;CACA,2BAAA;CACA,6BAAA;CACA,wBAAA;CACA,oBAAA;CACA,qBAAA;CACA,4BAAA;CACA,gBAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;AACA;AAEA;CACA,WAAA;CACA,cAAA;CACA,iBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,gBAAA;AACA;AAEA;CACA,aAAA;CACA,yBAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;AACA;AAEA;CACA,UAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;CACA,aAAA;CACA,mBAAA;CACA,oBAAA;AACA;AAEA;CACA,yBAAA;CACA,6BAAA;AACA",file:"FilePreview.vue",sourcesContent:[`<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
					<div class="ml-2" v-html="private_icon"></div>
				</a>
				<span class="flex" v-else>
					<span class="file-name">{{ file.name | file_name }}</span>
					<button class="ml-2 btn-reset" @click="$emit('toggle_private')" :title="__('Toggle Public/Private')">
						<div v-html="private_icon"></div>
					</button>
				</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>
			<label v-if="is_optimizable" class="optimize-checkbox"><input type="checkbox" :checked="optimize" @change="$emit('toggle_optimize')">Optimize</label>
			<div>
				<span v-if="file.error_message" class="file-error text-danger">
					{{ file.error_message }}
				</span>
			</div>
		</div>
		<div class="file-actions">
			<ProgressRing
				v-show="file.uploading && !uploaded && !file.failed"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				:radius="24"
				:progress="progress"
				:stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-error', 'lg')"></div>
			<div class="file-action-buttons">
				<button v-if="is_cropable" class="btn btn-crop muted" @click="$emit('toggle_image_cropper')" v-html="frappe.utils.icon('crop', 'md')"></button>
				<button v-if="!uploaded && !file.uploading && !file.failed" class="btn muted" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressRing from './ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null,
			optimize: this.file.optimize
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		private_icon() {
			return frappe.utils.icon(this.is_private ? 'lock' : 'unlock');
		},
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.request_succeeded;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		is_optimizable() {
			let is_svg = this.file.file_obj.type == 'image/svg+xml';
			return this.is_image && !is_svg && !this.uploaded && !this.file.failed;
		},
		is_cropable() {
			let croppable_types = ['image/jpeg', 'image/png'];
			return !this.uploaded && !this.file.uploading && !this.file.failed && croppable_types.includes(this.file.file_obj.type);
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		}
	}
}
</script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}

.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}

.muted {
	opacity: 0.5;
	transition: 0.3s;
}

.muted:hover {
	opacity: 1;
}

.optimize-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}

.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}
</style>
`]},media:void 0})},nl=void 0,il=void 0,rl=!1;function al(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
					<div class="ml-2" v-html="private_icon"></div>
				</a>
				<span class="flex" v-else>
					<span class="file-name">{{ file.name | file_name }}</span>
					<button class="ml-2 btn-reset" @click="$emit('toggle_private')" :title="__('Toggle Public/Private')">
						<div v-html="private_icon"></div>
					</button>
				</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>
			<label v-if="is_optimizable" class="optimize-checkbox"><input type="checkbox" :checked="optimize" @change="$emit('toggle_optimize')">Optimize</label>
			<div>
				<span v-if="file.error_message" class="file-error text-danger">
					{{ file.error_message }}
				</span>
			</div>
		</div>
		<div class="file-actions">
			<ProgressRing
				v-show="file.uploading && !uploaded && !file.failed"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				:radius="24"
				:progress="progress"
				:stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-error', 'lg')"></div>
			<div class="file-action-buttons">
				<button v-if="is_cropable" class="btn btn-crop muted" @click="$emit('toggle_image_cropper')" v-html="frappe.utils.icon('crop', 'md')"></button>
				<button v-if="!uploaded && !file.uploading && !file.failed" class="btn muted" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressRing from './ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null,
			optimize: this.file.optimize
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		private_icon() {
			return frappe.utils.icon(this.is_private ? 'lock' : 'unlock');
		},
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.request_succeeded;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		is_optimizable() {
			let is_svg = this.file.file_obj.type == 'image/svg+xml';
			return this.is_image && !is_svg && !this.uploaded && !this.file.failed;
		},
		is_cropable() {
			let croppable_types = ['image/jpeg', 'image/png'];
			return !this.uploaded && !this.file.uploading && !this.file.failed && croppable_types.includes(this.file.file_obj.type);
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		}
	}
}
</script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}

.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}

.muted {
	opacity: 0.5;
	transition: 0.3s;
}

.muted:hover {
	opacity: 1;
}

.optimize-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}

.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function Rr(){let e=Rr.styles||(Rr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var sl=al({render:za,staticRenderFns:el},tl,Zo,nl,rl,il,!1,Rr,void 0,void 0),Ha=sl;var ol={name:"TreeNode",props:["node","selected_node"],components:{TreeNode:()=>frappe.ui.components.TreeNode},computed:{icon(){let e={open:frappe.utils.icon("folder-open","md"),closed:frappe.utils.icon("folder-normal","md"),leaf:frappe.utils.icon("primitive-dot","xs"),search:frappe.utils.icon("search")};return this.node.by_search?e.search:this.node.is_leaf?e.leaf:this.node.open?e.open:e.closed}}},qa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-node",class:{opened:e.node.open}},[n("span",{staticClass:"tree-link",class:{active:e.node.value===e.selected_node.value},attrs:{disabled:e.node.fetching},on:{click:function(r){return e.$emit("node-click",e.node)}}},[n("div",{domProps:{innerHTML:e._s(e.icon)}}),e._v(" "),n("a",{staticClass:"tree-label"},[e._v(e._s(e.node.label))])]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.node.open,expression:"node.open"}],staticClass:"tree-children"},[e._l(e.node.children,function(r){return n("TreeNode",{key:r.value,attrs:{node:r,selected_node:e.selected_node},on:{"node-click":function(s){return e.$emit("node-click",s)},"load-more":function(s){return e.$emit("load-more",s)}}})}),e._v(" "),e.node.has_more_children?n("button",{staticClass:"btn btn-xs btn-load-more",attrs:{disabled:e.node.children_loading},on:{click:function(r){return e.$emit("load-more",e.node)}}},[e._v(`
			`+e._s(e.node.children_loading?e.__("Loading..."):e.__("Load more"))+`
		`)]):e._e()],2)])},ll=[];qa._withStripped=!0;var fl=function(e){!e||e("data-v-23974a16_0",{source:`
.btn-load-more[data-v-23974a16] {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/TreeNode.vue"],names:[],mappings:";AAwDA;CACA,mBAAA;CACA,kBAAA;AACA",file:"TreeNode.vue",sourcesContent:[`<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="n => $emit('node-click', n)"
				@load-more="n => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search")
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		}
	}
};
</script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
</style>
`]},media:void 0})},cl="data-v-23974a16",ul=void 0,dl=!1;function pl(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="n => $emit('node-click', n)"
				@load-more="n => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search")
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		}
	}
};
</script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function Lr(){let e=Lr.styles||(Lr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var hl=pl({render:qa,staticRenderFns:ll},fl,ol,cl,dl,ul,!1,Lr,void 0,void 0),$a=hl;var _l={name:"FileBrowser",components:{TreeNode:$a},data(){return{node:{label:__("Home"),value:"Home",children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1,filtered:!0},selected_node:{},search_text:"",page_length:10}},mounted(){this.toggle_node(this.node)},methods:{toggle_node(e){!e.fetched&&!e.is_leaf?(e.fetching=!0,e.children_start=0,e.children_loading=!1,this.get_files_in_folder(e.value,0).then(({files:t,has_more:n})=>{e.open=!0,e.children=t,e.fetched=!0,e.fetching=!1,e.children_start+=this.page_length,e.has_more_children=n})):(e.open=!e.open,this.select_node(e))},load_more(e){if(e.has_more_children){let t=e.children_start;e.children_loading=!0,this.get_files_in_folder(e.value,t).then(({files:n,has_more:r})=>{e.children=e.children.concat(n),e.children_start+=this.page_length,e.has_more_children=r,e.children_loading=!1})}},select_node(e){e.is_leaf&&(this.selected_node=e)},get_files_in_folder(e,t){return frappe.call("frappe.core.doctype.file.file.get_files_in_folder",{folder:e,start:t,page_length:this.page_length}).then(n=>{let{files:r=[],has_more:s=!1}=n.message||{};return r.sort((c,u)=>c.is_folder&&u.is_folder?c.modified<u.modified?-1:1:c.is_folder?-1:u.is_folder?1:0),r=r.map(c=>this.make_file_node(c)),{files:r,has_more:s}})},search_by_name:frappe.utils.debounce(function(){if(this.search_text===""){this.node=this.folder_node;return}this.search_text.length<3||frappe.call("frappe.core.doctype.file.file.get_files_by_search_text",{text:this.search_text}).then(e=>{let t=e.message||[];t=t.map(n=>this.make_file_node(n)),this.folder_node||(this.folder_node=this.node),this.node={label:__("Search Results"),value:"",children:t,by_search:!0,open:!0,filtered:!0}})},300),make_file_node(e){let t=e.file_name||e.name;return{label:frappe.utils.file_name_ellipsis(t,40),filename:t,file_url:e.file_url,value:e.name,is_leaf:!e.is_folder,fetched:!e.is_folder,children:[],children_loading:!1,children_start:0,open:!1,fetching:!1,filtered:!0}}}},Wa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-browser"},[n("div",[n("a",{staticClass:"text-muted text-medium",attrs:{href:""},on:{click:function(r){return r.preventDefault(),e.$emit("hide-browser")}}},[e._v(`
			`+e._s(e.__("\u2190 Back to upload files"))+`
		`)])]),e._v(" "),n("div",{staticClass:"file-browser-list"},[n("div",{staticClass:"file-filter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search_text,expression:"search_text"}],staticClass:"form-control input-xs",attrs:{type:"search",placeholder:e.__("Search by filename or extension")},domProps:{value:e.search_text},on:{input:[function(r){r.target.composing||(e.search_text=r.target.value)},e.search_by_name]}})]),e._v(" "),n("TreeNode",{staticClass:"tree with-skeleton",attrs:{node:e.node,selected_node:e.selected_node},on:{"node-click":function(r){return e.toggle_node(r)},"load-more":function(r){return e.load_more(r)}}})],1)])},gl=[];Wa._withStripped=!0;var ml=function(e){!e||e("data-v-0fedeac3_0",{source:`
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}
.file-filter {
	padding: 3px;
}
.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/FileBrowser.vue"],names:[],mappings:";AAkLA;CACA,aAAA;CACA,gBAAA;CACA,gBAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;CACA,eAAA;CACA,gBAAA;CACA,oBAAA;AACA",file:"FileBrowser.vue",sourcesContent:[`<template>
	<div class="file-browser">
		<div>
			<a
				href=""
				class="text-muted text-medium"
				@click.prevent="$emit('hide-browser')"
			>
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="n => toggle_node(n)"
				@load-more="n => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true
			},
			selected_node: {},
			search_text: "",
			page_length: 10
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(
					({ files, has_more }) => {
						node.open = true;
						node.children = files;
						node.fetched = true;
						node.fetching = false;
						node.children_start += this.page_length;
						node.has_more_children = has_more;
					}
				);
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(
					({ files, has_more }) => {
						node.children = node.children.concat(files);
						node.children_start += this.page_length;
						node.has_more_children = has_more;
						node.children_loading = false;
					}
				);
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.doctype.file.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length
				})
				.then(r => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map(file => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function() {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call(
					"frappe.core.doctype.file.file.get_files_by_search_text",
					{
						text: this.search_text
					}
				)
				.then(r => {
					let files = r.message || [];
					files = files.map(file => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true
			};
		}
	}
};
</script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
</style>
`]},media:void 0})},vl=void 0,bl=void 0,yl=!1;function wl(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<div class="file-browser">
		<div>
			<a
				href=""
				class="text-muted text-medium"
				@click.prevent="$emit('hide-browser')"
			>
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="n => toggle_node(n)"
				@load-more="n => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true
			},
			selected_node: {},
			search_text: "",
			page_length: 10
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(
					({ files, has_more }) => {
						node.open = true;
						node.children = files;
						node.fetched = true;
						node.fetching = false;
						node.children_start += this.page_length;
						node.has_more_children = has_more;
					}
				);
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(
					({ files, has_more }) => {
						node.children = node.children.concat(files);
						node.children_start += this.page_length;
						node.has_more_children = has_more;
						node.children_loading = false;
					}
				);
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.doctype.file.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length
				})
				.then(r => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map(file => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function() {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call(
					"frappe.core.doctype.file.file.get_files_by_search_text",
					{
						text: this.search_text
					}
				)
				.then(r => {
					let files = r.message || [];
					files = files.map(file => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true
			};
		}
	}
};
</script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function Mr(){let e=Mr.styles||(Mr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var El=wl({render:Wa,staticRenderFns:gl},ml,_l,vl,yl,bl,!1,Mr,void 0,void 0),Ua=El;var Cl={name:"WebLink",data(){return{url:""}}},Va=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-web-link margin-bottom"},[n("a",{staticClass:"text-muted text-medium",attrs:{href:""},on:{click:function(r){return r.preventDefault(),e.$emit("hide-web-link")}}},[e._v(`
		`+e._s(e.__("\u2190 Back to upload files"))+`
	`)]),e._v(" "),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.__("Attach a web link")},domProps:{value:e.url},on:{input:function(r){r.target.composing||(e.url=r.target.value)}}})])])},xl=[];Va._withStripped=!0;var Al=function(e){!e||e("data-v-3d6cb693_0",{source:`
.file-web-link .input-group {
	margin-top: 10px;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/WebLink.vue"],names:[],mappings:";AA6BA;CACA,gBAAA;AACA",file:"WebLink.vue",sourcesContent:[`<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium"
			@click.prevent="$emit('hide-web-link')"
		>
			{{ __('\u2190 Back to upload files') }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WebLink',
	data() {
		return {
			url: '',
		}
	}
}
</script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
}
</style>
`]},media:void 0})},Tl=void 0,kl=void 0,Sl=!1;function Ol(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium"
			@click.prevent="$emit('hide-web-link')"
		>
			{{ __('\u2190 Back to upload files') }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WebLink',
	data() {
		return {
			url: '',
		}
	}
}
</script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function Ir(){let e=Ir.styles||(Ir.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var Nl=Ol({render:Va,staticRenderFns:xl},Al,Cl,Tl,Sl,kl,!1,Ir,void 0,void 0),Ya=Nl;var jr=class{constructor({pickerCallback:t,enabled:n,appId:r,developerKey:s,clientId:c}={}){this.scope=["https://www.googleapis.com/auth/drive.readonly"],this.pickerApiLoaded=!1,this.enabled=n,this.appId=r,this.pickerCallback=t,this.developerKey=s,this.clientId=c}loadPicker(){$.ajax({method:"GET",url:"https://apis.google.com/js/api.js",dataType:"script",cache:!0}).done(this.loadGapi.bind(this))}loadGapi(){frappe.boot.user.google_drive_token||gapi.load("auth",this.onAuthApiLoad.bind(this)),gapi.load("picker",this.onPickerApiLoad.bind(this))}onAuthApiLoad(){gapi.auth.authorize({client_id:this.clientId,scope:this.scope,immediate:!1},this.handleAuthResult.bind(this))}handleAuthResult(t){t&&!t.error&&(frappe.boot.user.google_drive_token=t.access_token,this.createPicker())}onPickerApiLoad(){this.pickerApiLoaded=!0,this.createPicker()}createPicker(){if(this.pickerApiLoaded&&frappe.boot.user.google_drive_token){var t=new google.picker.DocsView(google.picker.ViewId.DOCS).setParent("root").setIncludeFolders(!0),n=new google.picker.PickerBuilder().setAppId(this.appId).setDeveloperKey(this.developerKey).setOAuthToken(frappe.boot.user.google_drive_token).addView(t).setLocale(frappe.boot.lang).setCallback(this.pickerCallback).build();n.setVisible(!0)}}},Ga=jr;var Xa=$t(Ka()),Dl={name:"ImageCropper",props:["file","attach_doc_image"],data(){return{src:null,cropper:null,image:null}},mounted(){if(window.FileReader){let e=new FileReader;e.onload=()=>this.src=e.result,e.readAsDataURL(this.file.cropper_file)}aspect_ratio=this.attach_doc_image?1:NaN,crop_box=this.file.crop_box_data,this.image=this.$refs.image,this.image.onload=()=>{this.cropper=new Xa.default(this.image,{zoomable:!1,scalable:!1,viewMode:1,data:crop_box,aspectRatio:aspect_ratio})}},computed:{crop_button_text(){return this.attach_doc_image?"Upload":"Crop"}},methods:{crop_image(){this.file.crop_box_data=this.cropper.getData();let e=this.cropper.getCroppedCanvas(),t=this.file.file_obj.type;e.toBlob(n=>{var r=new File([n],this.file.name,{type:n.type});this.file.file_obj=r,this.$emit("toggle_image_cropper"),this.attach_doc_image&&this.$emit("upload_after_crop")},t)}}},Qa=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("img",{ref:"image",attrs:{src:e.src,alt:e.file.name}})]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"image-cropper-actions"},[e.attach_doc_image?e._e():n("button",{staticClass:"btn btn-sm margin-right",on:{click:function(r){return e.$emit("toggle_image_cropper")}}},[e._v("Back")]),e._v(" "),n("button",{staticClass:"btn btn-primary btn-sm margin-right",domProps:{innerHTML:e._s(e.crop_button_text)},on:{click:e.crop_image}})])])},Rl=[];Qa._withStripped=!0;var Ll=function(e){!e||e("data-v-73f300af_0",{source:`
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}
.image-cropper-actions {
	display: flex;
	justify-content: flex-end;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/ImageCropper.vue"],names:[],mappings:";AAqEA;CACA,cAAA;CACA,eAAA;CACA,iBAAA;AACA;AAEA;CACA,aAAA;CACA,yBAAA;AACA",file:"ImageCropper.vue",sourcesContent:[`<template>
	<div>
		<div>
			<img ref="image" :src="src" :alt="file.name"/>
		</div>
		<br/>
		<div class="image-cropper-actions">
			<button class="btn btn-sm margin-right" v-if="!attach_doc_image" @click="$emit('toggle_image_cropper')">Back</button>
			<button class="btn btn-primary btn-sm margin-right" @click="crop_image" v-html="crop_button_text"></button>
		</div>
	</div>
</template>

<script>
import Cropper from "cropperjs";
export default {
	name: "ImageCropper",
	props: ["file", "attach_doc_image"],
	data() {
		return {
			src: null,
			cropper: null,
			image: null
		};
	},
	mounted() {
		if (window.FileReader) {
			let fr = new FileReader();
			fr.onload = () => (this.src = fr.result);
			fr.readAsDataURL(this.file.cropper_file);
		}
		aspect_ratio = this.attach_doc_image ? 1 : NaN;
		crop_box = this.file.crop_box_data;
		this.image = this.$refs.image;
		this.image.onload = () => {
			this.cropper = new Cropper(this.image, {
				zoomable: false,
				scalable: false,
				viewMode: 1,
				data: crop_box,
				aspectRatio: aspect_ratio
			});
		};
	},
	computed: {
		crop_button_text() {
			return this.attach_doc_image ? "Upload" : "Crop";
		}
	},
	methods: {
		crop_image() {
			this.file.crop_box_data = this.cropper.getData();
			const canvas = this.cropper.getCroppedCanvas();
			const file_type = this.file.file_obj.type;
			canvas.toBlob(blob => {
				var cropped_file_obj = new File([blob], this.file.name, {
					type: blob.type
				});
				this.file.file_obj = cropped_file_obj;
				this.$emit("toggle_image_cropper");
				if(this.attach_doc_image) {
					this.$emit("upload_after_crop");
				}
			}, file_type);
		}
	}
};
</script>
<style>
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}

.image-cropper-actions {
	display: flex;
	justify-content: flex-end;
}
</style>
`]},media:void 0})},Ml=void 0,Il=void 0,jl=!1;function Pl(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<div>
		<div>
			<img ref="image" :src="src" :alt="file.name"/>
		</div>
		<br/>
		<div class="image-cropper-actions">
			<button class="btn btn-sm margin-right" v-if="!attach_doc_image" @click="$emit('toggle_image_cropper')">Back</button>
			<button class="btn btn-primary btn-sm margin-right" @click="crop_image" v-html="crop_button_text"></button>
		</div>
	</div>
</template>

<script>
import Cropper from "cropperjs";
export default {
	name: "ImageCropper",
	props: ["file", "attach_doc_image"],
	data() {
		return {
			src: null,
			cropper: null,
			image: null
		};
	},
	mounted() {
		if (window.FileReader) {
			let fr = new FileReader();
			fr.onload = () => (this.src = fr.result);
			fr.readAsDataURL(this.file.cropper_file);
		}
		aspect_ratio = this.attach_doc_image ? 1 : NaN;
		crop_box = this.file.crop_box_data;
		this.image = this.$refs.image;
		this.image.onload = () => {
			this.cropper = new Cropper(this.image, {
				zoomable: false,
				scalable: false,
				viewMode: 1,
				data: crop_box,
				aspectRatio: aspect_ratio
			});
		};
	},
	computed: {
		crop_button_text() {
			return this.attach_doc_image ? "Upload" : "Crop";
		}
	},
	methods: {
		crop_image() {
			this.file.crop_box_data = this.cropper.getData();
			const canvas = this.cropper.getCroppedCanvas();
			const file_type = this.file.file_obj.type;
			canvas.toBlob(blob => {
				var cropped_file_obj = new File([blob], this.file.name, {
					type: blob.type
				});
				this.file.file_obj = cropped_file_obj;
				this.$emit("toggle_image_cropper");
				if(this.attach_doc_image) {
					this.$emit("upload_after_crop");
				}
			}, file_type);
		}
	}
};
</script>
<style>
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}

.image-cropper-actions {
	display: flex;
	justify-content: flex-end;
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function Fr(){let e=Fr.styles||(Fr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var Bl=Pl({render:Qa,staticRenderFns:Rl},Ll,Dl,Ml,jl,Il,!1,Fr,void 0,void 0),Ja=Bl;var Fl={name:"FileUploader",props:{show_upload_button:{default:!0},disable_file_browser:{default:!1},allow_multiple:{default:!0},as_dataurl:{default:!1},doctype:{default:null},docname:{default:null},fieldname:{default:null},folder:{default:"Home"},method:{default:null},on_success:{default:null},restrictions:{default:()=>({max_file_size:null,max_number_of_files:null,allowed_file_types:[]})},attach_doc_image:{default:!1},upload_notes:{default:null}},components:{FilePreview:Ha,FileBrowser:Ua,WebLink:Ya,ImageCropper:Ja},data(){return{files:[],is_dragging:!1,currently_uploading:-1,show_file_browser:!1,show_web_link:!1,show_image_cropper:!1,crop_image_with_index:-1,trigger_upload:!1,close_dialog:!1,hide_dialog_footer:!1,allow_take_photo:!1,allow_web_link:!0,google_drive_settings:{enabled:!1}}},created(){this.allow_take_photo=window.navigator.mediaDevices,frappe.user_id!=="Guest"&&frappe.call({method:"frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",callback:e=>{e.exc||(this.google_drive_settings=e.message)}}),this.restrictions.max_file_size==null&&frappe.call("frappe.core.doctype.file.file.get_max_file_size").then(e=>{this.restrictions.max_file_size=Number(e.message)})},watch:{files(e,t){!this.allow_multiple&&e.length>1&&(this.files=[e[e.length-1]])}},computed:{upload_complete(){return this.files.length>0&&this.files.every(e=>e.total!==0&&e.progress===e.total)}},methods:{dragover(){this.is_dragging=!0},dragleave(){this.is_dragging=!1},dropfiles(e){this.is_dragging=!1,this.add_files(e.dataTransfer.files)},browse_files(){this.$refs.file_input.click()},on_file_input(e){this.add_files(this.$refs.file_input.files)},remove_file(e){this.files=this.files.filter(t=>t!==e)},toggle_image_cropper(e){this.crop_image_with_index=this.show_image_cropper?-1:e,this.hide_dialog_footer=!this.show_image_cropper,this.show_image_cropper=!this.show_image_cropper},toggle_all_private(){let e;this.files.filter(n=>n.private).length<this.files.length?e=!0:e=!1,this.files=this.files.map(n=>(n.private=e,n))},add_files(e){let t=Array.from(e).filter(this.check_restrictions).map(n=>{let r=n.type.startsWith("image");return{file_obj:n,cropper_file:n,crop_box_data:null,optimize:!!this.attach_doc_image,name:n.name,doc:null,progress:0,total:0,failed:!1,request_succeeded:!1,error_message:null,uploading:!1,private:!r}});this.files=this.files.concat(t),this.files.length!=0&&this.attach_doc_image&&this.toggle_image_cropper(0)},check_restrictions(e){let{max_file_size:t,allowed_file_types:n}=this.restrictions,r=e.type,s="."+e.name.split(".").pop(),c=!0,u=!0;return n.length&&(c=n.some(d=>d.includes("/")?e.type?e.type.match(d):!1:d[0]==="."?e.name.endsWith(d):!1)),t&&e.size!=null&&(u=e.size<t),c||(console.warn("File skipped because of invalid file type",e),frappe.show_alert({message:__('File "{0}" was skipped because of invalid file type',[e.name]),indicator:"orange"})),u||(console.warn("File skipped because of invalid file size",e.size,e),frappe.show_alert({message:__('File "{0}" was skipped because size exceeds {1} MB',[e.name,t/(1024*1024)]),indicator:"orange"})),c&&u},upload_files(){return this.show_file_browser?this.upload_via_file_browser():this.show_web_link?this.upload_via_web_link():this.as_dataurl?this.return_as_dataurl():frappe.run_serially(this.files.map((e,t)=>()=>this.upload_file(e,t)))},upload_via_file_browser(){let e=this.$refs.file_browser.selected_node;return e.value?(this.close_dialog=!0,this.upload_file({file_url:e.file_url})):(frappe.msgprint(__("Click on a file to select it.")),this.close_dialog=!0,Promise.reject())},upload_via_web_link(){let e=this.$refs.web_link.url;return e?(e=decodeURI(e),this.close_dialog=!0,this.upload_file({file_url:e})):(frappe.msgprint(__("Invalid URL")),this.close_dialog=!0,Promise.reject())},return_as_dataurl(){let e=this.files.map(t=>frappe.dom.file_to_base64(t.file_obj).then(n=>{t.dataurl=n,this.on_success&&this.on_success(t)}));return this.close_dialog=!0,Promise.all(e)},upload_file(e,t){return this.currently_uploading=t,new Promise((n,r)=>{let s=new XMLHttpRequest;s.upload.addEventListener("loadstart",u=>{e.uploading=!0}),s.upload.addEventListener("progress",u=>{u.lengthComputable&&(e.progress=u.loaded,e.total=u.total)}),s.upload.addEventListener("load",u=>{e.uploading=!1,n()}),s.addEventListener("error",u=>{e.failed=!0,r()}),s.onreadystatechange=()=>{if(s.readyState==XMLHttpRequest.DONE)if(s.status===200){e.request_succeeded=!0;let u=null,d=null;try{u=JSON.parse(s.responseText),u.message.doctype==="File"&&(d=u.message)}catch(C){u=s.responseText}e.doc=d,this.on_success&&this.on_success(d,u),t==this.files.length-1&&this.files.every(C=>C.request_succeeded)&&(this.close_dialog=!0)}else if(s.status===403){e.failed=!0;let u=JSON.parse(s.responseText);e.error_message=`Not permitted. ${u._error_message||""}`}else if(s.status===413)e.failed=!0,e.error_message="Size exceeds the maximum allowed file size.";else{e.failed=!0,e.error_message=s.status===0?"XMLHttpRequest Error":`${s.status} : ${s.statusText}`;let u=null;try{u=JSON.parse(s.responseText)}catch(d){}frappe.request.cleanup({},u)}},s.open("POST","/api/method/upload_file",!0),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("X-Frappe-CSRF-Token",frappe.csrf_token);let c=new FormData;e.file_obj&&c.append("file",e.file_obj,e.name),c.append("is_private",+e.private),c.append("folder",this.folder),e.file_url&&c.append("file_url",e.file_url),e.file_name&&c.append("file_name",e.file_name),this.doctype&&this.docname&&(c.append("doctype",this.doctype),c.append("docname",this.docname)),this.fieldname&&c.append("fieldname",this.fieldname),this.method&&c.append("method",this.method),e.optimize&&c.append("optimize",!0),this.attach_doc_image&&(c.append("max_width",200),c.append("max_height",200)),s.send(c)})},capture_image(){let e=new frappe.ui.Capture({animate:!1,error:!0});e.show(),e.submit(t=>{let n=`capture_${frappe.datetime.now_datetime().replaceAll(/[: -]/g,"_")}.png`;this.url_to_file(t,n,"image/png").then(r=>this.add_files([r]))})},show_google_drive_picker(){let e=cur_dialog;e.hide(),new Ga({pickerCallback:n=>this.google_drive_callback(n,e),...this.google_drive_settings}).loadPicker()},google_drive_callback(e,t){e.action==google.picker.Action.PICKED?this.upload_file({file_url:e.docs[0].url,file_name:e.docs[0].name}):e.action==google.picker.Action.CANCEL&&t.show()},url_to_file(e,t,n){return fetch(e).then(r=>r.arrayBuffer()).then(r=>new File([r],t,{type:n}))}}},Za=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-uploader",on:{dragover:function(r){return r.preventDefault(),e.dragover(r)},dragleave:function(r){return r.preventDefault(),e.dragleave(r)},drop:function(r){return r.preventDefault(),e.dropfiles(r)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.files.length===0&&!e.show_file_browser&&!e.show_web_link,expression:"files.length === 0 && !show_file_browser && !show_web_link"}],staticClass:"file-upload-area"},[e.is_dragging?n("div",[e._v(`
			`+e._s(e.__("Drop files here"))+`
		`)]):n("div",[n("div",{staticClass:"text-center"},[e._v(`
				`+e._s(e.__("Drag and drop files here or upload from"))+`
			`)]),e._v(" "),n("div",{staticClass:"mt-2 text-center"},[n("button",{staticClass:"btn btn-file-upload",on:{click:e.browse_files}},[n("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"url(#paint0_linear)"}}),e._v(" "),n("path",{attrs:{d:"M13.5 22V19",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{d:"M16.5 22V19",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{d:"M10.5 22H19.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{d:"M7.5 16H22.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{d:"M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear",x1:"0",y1:"0",x2:"0",y2:"30",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#2C9AF1"}}),e._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#2490EF"}})],1)],1)]),e._v(" "),n("div",{staticClass:"mt-1"},[e._v(e._s(e.__("My Device")))])]),e._v(" "),n("input",{ref:"file_input",staticClass:"hidden",attrs:{type:"file",multiple:e.allow_multiple,accept:e.restrictions.allowed_file_types.join(", ")},on:{change:e.on_file_input}}),e._v(" "),e.disable_file_browser?e._e():n("button",{staticClass:"btn btn-file-upload",on:{click:function(r){e.show_file_browser=!0}}},[n("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"#48BB74"}}),e._v(" "),n("path",{attrs:{d:"M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z",stroke:"white","stroke-miterlimit":"10","stroke-linecap":"square"}}),e._v(" "),n("path",{attrs:{d:"M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12",stroke:"white","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),e._v(" "),n("div",{staticClass:"mt-1"},[e._v(e._s(e.__("Library")))])]),e._v(" "),e.allow_web_link?n("button",{staticClass:"btn btn-file-upload",on:{click:function(r){e.show_web_link=!0}}},[n("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"#ECAC4B"}}),e._v(" "),n("path",{attrs:{d:"M12.0469 17.9543L17.9558 12.0454",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{d:"M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),n("path",{attrs:{d:"M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}})]),e._v(" "),n("div",{staticClass:"mt-1"},[e._v(e._s(e.__("Link")))])]):e._e(),e._v(" "),e.allow_take_photo?n("button",{staticClass:"btn btn-file-upload",on:{click:e.capture_image}},[n("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"#CE315B"}}),e._v(" "),n("path",{attrs:{d:"M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z",stroke:"white","stroke-linejoin":"round"}}),e._v(" "),n("circle",{attrs:{cx:"15",cy:"16",r:"2.5",stroke:"white"}})]),e._v(" "),n("div",{staticClass:"mt-1"},[e._v(e._s(e.__("Camera")))])]):e._e(),e._v(" "),e.google_drive_settings.enabled?n("button",{staticClass:"btn btn-file-upload",on:{click:e.show_google_drive_picker}},[n("svg",{attrs:{width:"30",height:"30"}},[n("image",{attrs:{"xlink:href":"/assets/frappe/icons/social/google_drive.svg",width:"30",height:"30"}})]),e._v(" "),n("div",{staticClass:"mt-1"},[e._v(e._s(e.__("Google Drive")))])]):e._e()]),e._v(" "),n("div",{staticClass:"text-muted text-medium"},[e._v(`
				`+e._s(e.upload_notes)+`
			`)])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.files.length&&!e.show_file_browser&&!e.show_web_link,expression:"files.length && !show_file_browser && !show_web_link"}],staticClass:"file-preview-area"},[e.show_image_cropper?e._e():n("div",{staticClass:"file-preview-container"},e._l(e.files,function(r,s){return n("FilePreview",{key:r.name,attrs:{file:r},on:{remove:function(c){return e.remove_file(r)},toggle_private:function(c){r.private=!r.private},toggle_optimize:function(c){r.optimize=!r.optimize},toggle_image_cropper:function(c){return e.toggle_image_cropper(s)}}})}),1),e._v(" "),e.show_upload_button&&e.currently_uploading===-1?n("div",{staticClass:"flex align-center"},[n("button",{staticClass:"btn btn-primary btn-sm margin-right",on:{click:e.upload_files}},[e.files.length===1?n("span",[e._v(`
					`+e._s(e.__("Upload file"))+`
				`)]):n("span",[e._v(`
					`+e._s(e.__("Upload {0} files",[e.files.length]))+`
				`)])]),e._v(" "),n("div",{staticClass:"text-muted text-medium"},[e._v(`
				`+e._s(e.__("Click on the lock icon to toggle public/private"))+`
			`)])]):e._e()]),e._v(" "),e.show_image_cropper?n("ImageCropper",{attrs:{file:e.files[e.crop_image_with_index],attach_doc_image:e.attach_doc_image},on:{toggle_image_cropper:function(r){return e.toggle_image_cropper(-1)},upload_after_crop:function(r){e.trigger_upload=!0}}}):e._e(),e._v(" "),e.show_file_browser&&!e.disable_file_browser?n("FileBrowser",{ref:"file_browser",on:{"hide-browser":function(r){e.show_file_browser=!1}}}):e._e(),e._v(" "),e.show_web_link?n("WebLink",{ref:"web_link",on:{"hide-web-link":function(r){e.show_web_link=!1}}}):e._e()],1)},zl=[];Za._withStripped=!0;var Hl=function(e){!e||e("data-v-cff48c14_0",{source:`
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}
.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/FileUploader.vue"],names:[],mappings:";AAmjBA;CACA,iBAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,2CAAA;CACA,mCAAA;CACA,eAAA;CACA,iCAAA;AACA;AAEA;CACA,6BAAA;CACA,YAAA;CACA,gBAAA;CACA,yBAAA;AACA",file:"FileUploader.vue",sourcesContent:[`<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="restrictions.allowed_file_types.join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" v-if="allow_web_link" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
					<button v-if="google_drive_settings.enabled" class="btn btn-file-upload" @click="show_google_drive_picker">
						<svg width="30" height="30">
							<image xlink:href="/assets/frappe/icons/social/google_drive.svg" width="30" height="30"/>
						</svg>
						<div class="mt-1">{{ __('Google Drive') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container" v-if="!show_image_cropper">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
					@toggle_optimize="file.optimize = !file.optimize"
					@toggle_image_cropper="toggle_image_cropper(i)"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<ImageCropper
			v-if="show_image_cropper"
			:file="files[crop_image_with_index]"
			:attach_doc_image="attach_doc_image"
			@toggle_image_cropper="toggle_image_cropper(-1)"
			@upload_after_crop="trigger_upload=true"
		/>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from './FileBrowser.vue';
import WebLink from './WebLink.vue';
import GoogleDrivePicker from '../../integrations/google_drive_picker';
import ImageCropper from './ImageCropper.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [] // ['image/*', 'video/*', '.jpg', '.gif', '.pdf']
			})
		},
		attach_doc_image: {
			default: false
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink,
		ImageCropper
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
			show_image_cropper: false,
			crop_image_with_index: -1,
			trigger_upload: false,
			close_dialog: false,
			hide_dialog_footer: false,
			allow_take_photo: false,
			allow_web_link: true,
			google_drive_settings: {
				enabled: false
			}
		}
	},
	created() {
		this.allow_take_photo = window.navigator.mediaDevices;
		if (frappe.user_id !== "Guest") {
			frappe.call({
				// method only available after login
				method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
				callback: (resp) => {
					if (!resp.exc) {
						this.google_drive_settings = resp.message;
					}
				}
			});
		}
		if (this.restrictions.max_file_size == null) {
			frappe.call('frappe.core.doctype.file.file.get_max_file_size')
				.then(res => {
					this.restrictions.max_file_size = Number(res.message);
				});
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_image_cropper(index) {
			this.crop_image_with_index = this.show_image_cropper ? -1 : index;
			this.hide_dialog_footer = !this.show_image_cropper;
			this.show_image_cropper = !this.show_image_cropper;
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					return {
						file_obj: file,
						cropper_file: file,
						crop_box_data: null,
						optimize: this.attach_doc_image ? true : false,
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						request_succeeded: false,
						error_message: null,
						uploading: false,
						private: !is_image
					}
				});
			this.files = this.files.concat(files);
			if(this.files.length != 0 && this.attach_doc_image) {
				this.toggle_image_cropper(0);
			}
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types } = this.restrictions;

			let mime_type = file.type;
			let extension = '.' + file.name.split('.').pop();

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because of invalid file type', [file.name]),
					indicator: 'orange'
				});
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because size exceeds {1} MB', [file.name, max_file_size / (1024 * 1024)]),
					indicator: 'orange'
				});
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				this.close_dialog = true;
				return Promise.reject();
			}
			this.close_dialog = true;
			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				this.close_dialog = true;
				return Promise.reject();
			}
			file_url = decodeURI(file_url)
			this.close_dialog = true;
			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			this.close_dialog = true;
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							file.request_succeeded = true;
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}

							if (i == this.files.length - 1 && this.files.every(file => file.request_succeeded)) {
								this.close_dialog = true;
							}

						} else if (xhr.status === 403) {
							file.failed = true;
							let response = JSON.parse(xhr.responseText);
							file.error_message = \`Not permitted. \${response._error_message || ''}\`;

						} else if (xhr.status === 413) {
							file.failed = true;
							file.error_message = 'Size exceeds the maximum allowed file size.';

						} else {
							file.failed = true;
							file.error_message = xhr.status === 0 ? 'XMLHttpRequest Error' : \`\${xhr.status} : \${xhr.statusText}\`;

							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (file.file_name) {
					form_data.append('file_name', file.file_name);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				if (file.optimize) {
					form_data.append('optimize', true);
				}

				if (this.attach_doc_image) {
					form_data.append('max_width', 200);
					form_data.append('max_height', 200);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_url => {
				let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
				this.url_to_file(data_url, filename, 'image/png').then((file) =>
					this.add_files([file])
				);
			});
		},
		show_google_drive_picker() {
			let dialog = cur_dialog;
			dialog.hide();
			let google_drive = new GoogleDrivePicker({
				pickerCallback: data => this.google_drive_callback(data, dialog),
				...this.google_drive_settings
			});
			google_drive.loadPicker();
		},
		google_drive_callback(data, dialog) {
			if (data.action == google.picker.Action.PICKED) {
				this.upload_file({
					file_url: data.docs[0].url,
					file_name: data.docs[0].name
				});
			} else if (data.action == google.picker.Action.CANCEL) {
				dialog.show();
			}
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
</script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
</style>
`]},media:void 0})},ql=void 0,$l=void 0,Wl=!1;function Ul(e,t,n,r,s,c,u,d,C,v){let p=(typeof n=="function"?n.options:n)||{};p.__file=`<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="restrictions.allowed_file_types.join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" v-if="allow_web_link" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
					<button v-if="google_drive_settings.enabled" class="btn btn-file-upload" @click="show_google_drive_picker">
						<svg width="30" height="30">
							<image xlink:href="/assets/frappe/icons/social/google_drive.svg" width="30" height="30"/>
						</svg>
						<div class="mt-1">{{ __('Google Drive') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container" v-if="!show_image_cropper">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
					@toggle_optimize="file.optimize = !file.optimize"
					@toggle_image_cropper="toggle_image_cropper(i)"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<ImageCropper
			v-if="show_image_cropper"
			:file="files[crop_image_with_index]"
			:attach_doc_image="attach_doc_image"
			@toggle_image_cropper="toggle_image_cropper(-1)"
			@upload_after_crop="trigger_upload=true"
		/>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from './FileBrowser.vue';
import WebLink from './WebLink.vue';
import GoogleDrivePicker from '../../integrations/google_drive_picker';
import ImageCropper from './ImageCropper.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [] // ['image/*', 'video/*', '.jpg', '.gif', '.pdf']
			})
		},
		attach_doc_image: {
			default: false
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink,
		ImageCropper
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
			show_image_cropper: false,
			crop_image_with_index: -1,
			trigger_upload: false,
			close_dialog: false,
			hide_dialog_footer: false,
			allow_take_photo: false,
			allow_web_link: true,
			google_drive_settings: {
				enabled: false
			}
		}
	},
	created() {
		this.allow_take_photo = window.navigator.mediaDevices;
		if (frappe.user_id !== "Guest") {
			frappe.call({
				// method only available after login
				method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
				callback: (resp) => {
					if (!resp.exc) {
						this.google_drive_settings = resp.message;
					}
				}
			});
		}
		if (this.restrictions.max_file_size == null) {
			frappe.call('frappe.core.doctype.file.file.get_max_file_size')
				.then(res => {
					this.restrictions.max_file_size = Number(res.message);
				});
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_image_cropper(index) {
			this.crop_image_with_index = this.show_image_cropper ? -1 : index;
			this.hide_dialog_footer = !this.show_image_cropper;
			this.show_image_cropper = !this.show_image_cropper;
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					return {
						file_obj: file,
						cropper_file: file,
						crop_box_data: null,
						optimize: this.attach_doc_image ? true : false,
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						request_succeeded: false,
						error_message: null,
						uploading: false,
						private: !is_image
					}
				});
			this.files = this.files.concat(files);
			if(this.files.length != 0 && this.attach_doc_image) {
				this.toggle_image_cropper(0);
			}
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types } = this.restrictions;

			let mime_type = file.type;
			let extension = '.' + file.name.split('.').pop();

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because of invalid file type', [file.name]),
					indicator: 'orange'
				});
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because size exceeds {1} MB', [file.name, max_file_size / (1024 * 1024)]),
					indicator: 'orange'
				});
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				this.close_dialog = true;
				return Promise.reject();
			}
			this.close_dialog = true;
			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				this.close_dialog = true;
				return Promise.reject();
			}
			file_url = decodeURI(file_url)
			this.close_dialog = true;
			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			this.close_dialog = true;
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							file.request_succeeded = true;
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}

							if (i == this.files.length - 1 && this.files.every(file => file.request_succeeded)) {
								this.close_dialog = true;
							}

						} else if (xhr.status === 403) {
							file.failed = true;
							let response = JSON.parse(xhr.responseText);
							file.error_message = \`Not permitted. \${response._error_message || ''}\`;

						} else if (xhr.status === 413) {
							file.failed = true;
							file.error_message = 'Size exceeds the maximum allowed file size.';

						} else {
							file.failed = true;
							file.error_message = xhr.status === 0 ? 'XMLHttpRequest Error' : \`\${xhr.status} : \${xhr.statusText}\`;

							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (file.file_name) {
					form_data.append('file_name', file.file_name);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				if (file.optimize) {
					form_data.append('optimize', true);
				}

				if (this.attach_doc_image) {
					form_data.append('max_width', 200);
					form_data.append('max_height', 200);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_url => {
				let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
				this.url_to_file(data_url, filename, 'image/png').then((file) =>
					this.add_files([file])
				);
			});
		},
		show_google_drive_picker() {
			let dialog = cur_dialog;
			dialog.hide();
			let google_drive = new GoogleDrivePicker({
				pickerCallback: data => this.google_drive_callback(data, dialog),
				...this.google_drive_settings
			});
			google_drive.loadPicker();
		},
		google_drive_callback(data, dialog) {
			if (data.action == google.picker.Action.PICKED) {
				this.upload_file({
					file_url: data.docs[0].url,
					file_name: data.docs[0].name
				});
			} else if (data.action == google.picker.Action.CANCEL) {
				dialog.show();
			}
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
</script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
</style>
`,p.render||(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,s&&(p.functional=!0)),p._scopeId=r;{let x;if(t&&(x=u?function(A){t.call(this,v(A,this.$root.$options.shadowRoot))}:function(A){t.call(this,d(A))}),x!==void 0)if(p.functional){let A=p.render;p.render=function(ee,Se){return x.call(Se),A(ee,Se)}}else{let A=p.beforeCreate;p.beforeCreate=A?[].concat(A,x):[x]}}return p}function zr(){let e=zr.styles||(zr.styles={}),t=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,s){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let c=t?s.media||"default":r,u=e[c]||(e[c]={ids:[],parts:[],element:void 0});if(!u.ids.includes(r)){let d=s.source,C=u.ids.length;if(u.ids.push(r),t&&(u.element=u.element||document.querySelector("style[data-group="+c+"]")),!u.element){let v=document.head||document.getElementsByTagName("head")[0],p=u.element=document.createElement("style");p.type="text/css",s.media&&p.setAttribute("media",s.media),t&&(p.setAttribute("data-group",c),p.setAttribute("data-next-index","0")),v.appendChild(p)}if(t&&(C=parseInt(u.element.getAttribute("data-next-index")),u.element.setAttribute("data-next-index",C+1)),u.element.styleSheet)u.parts.push(d),u.element.styleSheet.cssText=u.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(d),p=u.element.childNodes;p[C]&&u.element.removeChild(p[C]),p.length?u.element.insertBefore(v,p[C]):u.element.appendChild(v)}}}}var Vl=Ul({render:Za,staticRenderFns:zl},Hl,Fl,ql,Wl,$l,!1,zr,void 0,void 0),es=Vl;var Hr=class{constructor({wrapper:t,method:n,on_success:r,doctype:s,docname:c,fieldname:u,files:d,folder:C,restrictions:v,upload_notes:p,allow_multiple:x,as_dataurl:A,disable_file_browser:V,attach_doc_image:ee,frm:Se}={}){Se&&Se.attachments.max_reached(!0),t?this.wrapper=t.get?t.get(0):t:this.make_dialog(),ee&&(v.allowed_file_types=["image/jpeg","image/png"]),this.$fileuploader=new Vue({el:this.wrapper,render:ve=>ve(es,{props:{show_upload_button:!Boolean(this.dialog),doctype:s,docname:c,fieldname:u,method:n,folder:C,on_success:r,restrictions:v,upload_notes:p,allow_multiple:x,as_dataurl:A,disable_file_browser:V,attach_doc_image:ee}})}),this.uploader=this.$fileuploader.$children[0],this.uploader.$watch("files",ve=>{let Re=ve.every(Ve=>Ve.private);this.dialog&&this.dialog.set_secondary_action_label(Re?__("Set all public"):__("Set all private"))},{deep:!0}),this.uploader.$watch("trigger_upload",ve=>{ve&&this.upload_files()}),this.uploader.$watch("close_dialog",ve=>{ve&&this.dialog&&this.dialog.hide()}),this.uploader.$watch("hide_dialog_footer",ve=>{ve?(this.dialog&&this.dialog.footer.addClass("hide"),this.dialog.$wrapper.data("bs.modal")._config.backdrop="static"):(this.dialog&&this.dialog.footer.removeClass("hide"),this.dialog.$wrapper.data("bs.modal")._config.backdrop=!0)}),d&&d.length&&this.uploader.add_files(d)}upload_files(){return this.dialog&&this.dialog.get_primary_btn().prop("disabled",!0),this.dialog&&this.dialog.get_secondary_btn().prop("disabled",!0),this.uploader.upload_files()}make_dialog(){this.dialog=new frappe.ui.Dialog({title:__("Upload"),primary_action_label:__("Upload"),primary_action:()=>this.upload_files(),secondary_action_label:__("Set all private"),secondary_action:()=>{this.uploader.toggle_all_private()}}),this.wrapper=this.dialog.body,this.dialog.show(),this.dialog.$wrapper.on("hidden.bs.modal",function(){$(this).data("bs.modal",null),$(this).remove()})}},ts=Hr;frappe.provide("frappe.ui");frappe.ui.FileUploader=ts;frappe.provide("frappe.meta.docfield_map");frappe.provide("frappe.meta.docfield_copy");frappe.provide("frappe.meta.docfield_list");frappe.provide("frappe.meta.doctypes");frappe.provide("frappe.meta.precision_map");frappe.get_meta=function(e){return locals.DocType?locals.DocType[e]:null};$.extend(frappe.meta,{sync:function(e){$.each(e.fields,function(t,n){frappe.meta.add_field(n)}),frappe.meta.sync_messages(e),e.__print_formats&&frappe.model.sync(e.__print_formats),e.__workflow_docs&&frappe.model.sync(e.__workflow_docs)},add_field:function(e){frappe.provide("frappe.meta.docfield_map."+e.parent),frappe.meta.docfield_map[e.parent][e.fieldname||e.label]=e,frappe.meta.docfield_list[e.parent]||(frappe.meta.docfield_list[e.parent]=[]);for(var t in frappe.meta.docfield_list[e.parent]){var n=frappe.meta.docfield_list[e.parent][t];if(e.fieldname==n.fieldname)return}frappe.meta.docfield_list[e.parent].push(e)},make_docfield_copy_for:function(e,t,n=null){var r=frappe.meta.docfield_copy;r[e]||(r[e]={}),r[e][t]||(r[e][t]={}),n=n||frappe.meta.docfield_list[e]||[];for(var s=0,c=n.length;s<c;s++){var u=n[s];r[e][t][u.fieldname||u.label]=copy_dict(u)}},get_field:function(e,t,n){var r=frappe.meta.get_docfield(e,t,n);return r||frappe.model.std_fields.every(function(s){return s.fieldname===t?(r=s,!1):!0}),r},get_docfield:function(e,t,n){var r=frappe.meta.get_docfield_copy(e,n);return r?r[t]:null},set_formatter:function(e,t,n,r){frappe.meta.get_docfield(e,t,n).formatter=r},set_indicator_formatter:function(e,t,n,r,s){frappe.meta.get_docfield(e,t,n).formatter=function(c,u,d,C){return repl('<span class="indicator %(color)s">%(name)s</span>',{color:s(),name:r()})}},get_docfields:function(e,t,n){var r=frappe.meta.get_docfield_copy(e,t),s=frappe.meta.sort_docfields(r);return n&&(s=frappe.utils.filter_dict(s,n)),s},get_linked_fields:function(e){return $.map(frappe.get_meta(e).fields,function(t){return t.fieldtype=="Link"?t.options:null})},get_fields_to_check_permissions:function(e){var t=$.map(frappe.meta.get_docfields(e,name),function(n){return n.fieldtype==="Link"&&n.ignore_user_permissions!==1?n:null});return t=t.concat({label:"Name",fieldname:name,options:e}),t},sort_docfields:function(e){return $.map(e,function(t){return t}).sort(function(t,n){return t.idx-n.idx})},get_docfield_copy:function(e,t){return t?(frappe.meta.docfield_copy[e]&&frappe.meta.docfield_copy[e][t]||frappe.meta.make_docfield_copy_for(e,t),frappe.meta.docfield_copy[e][t]):frappe.meta.docfield_map[e]},get_fieldnames:function(e,t,n){return $.map(frappe.utils.filter_dict(frappe.meta.docfield_map[e],n),function(r){return r.fieldname})},has_field:function(e,t){let n=frappe.meta.docfield_map[e];return n&&n[t]},get_table_fields:function(e){return $.map(frappe.meta.docfield_list[e],function(t){return frappe.model.table_fields.includes(t.fieldtype)?t:null})},get_doctype_for_field:function(e,t){var n=null;return in_list(frappe.model.std_fields_list,t)||frappe.meta.has_field(e,t)?n=e:(frappe.meta.get_table_fields(e).every(function(r){return frappe.meta.has_field(r.options,t)?(n=r.options,!1):!0}),n||console.log(__("Warning: Unable to find {0} in any table related to {1}",[t,__(e)]))),n},get_parentfield:function(e,t){var n=(frappe.get_doc("DocType",e).fields||[]).filter(r=>frappe.model.table_fields.includes(r.fieldtype)&&r.options===t);if(!n.length)throw"parentfield not found for "+e+", "+t;return n[0].fieldname},get_label:function(e,t,n){var r={owner:__("Owner"),creation:__("Created On"),modified:__("Last Modified On"),idx:__("Idx"),name:__("Name"),modified_by:__("Last Modified By")};if(r[t])return r[t];var s=this.get_docfield(e,t,n);return(s?s.label:"")||t},get_print_sizes:function(){return["A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","B0","B1","B2","B3","B4","B5","B6","B7","B8","B9","B10","C5E","Comm10E","DLE","Executive","Folio","Ledger","Legal","Letter","Tabloid","Custom"]},get_print_formats:function(e){var t=["Standard"],n=locals.DocType[e].default_print_format;let r=frappe.model.get_doc(":Print Settings","Print Settings").enable_raw_printing;var s=frappe.get_list("Print Format",{doc_type:e}).sort(function(u,d){return u>d?1:-1});if($.each(s,function(u,d){!in_list(t,d.name)&&d.print_format_type!=="JS"&&(cint(r)||!d.raw_printing)&&t.push(d.name)}),n&&n!="Standard"){var c=t.indexOf(n);t.splice(c,1).sort(),t.unshift(n)}return t},sync_messages:function(e){e.__messages&&$.extend(frappe._messages,e.__messages)},get_field_currency:function(e,t){var n=frappe.boot.sysdefaults.currency;if(!t&&cur_frm&&(t=cur_frm.doc),e&&e.options)if(t&&e.options.indexOf(":")!=-1){var r=e.options.split(":");if(r.length==3){var s=t[r[1]];!s&&cur_frm&&(s=cur_frm.doc[r[1]]),n=frappe.model.get_value(r[0],s,r[2])||frappe.model.get_value(":"+r[0],s,r[2])||n}}else t&&t[e.options]?n=t[e.options]:cur_frm&&cur_frm.doc[e.options]&&(n=cur_frm.doc[e.options]);return n},get_field_precision:function(e,t){var n=null;if(e&&e.precision)n=cint(e.precision);else if(e&&e.fieldtype==="Currency"){if(n=cint(frappe.defaults.get_default("currency_precision")),!n){var r=get_number_format(),s=get_number_format_info(r);n=s.precision}}else n=cint(frappe.defaults.get_default("float_precision"))||3;return n}});var Tu=$t(ns());frappe.provide("frappe.perm");Object.assign(window,{READ:"read",WRITE:"write",CREATE:"create",DELETE:"delete",SUBMIT:"submit",CANCEL:"cancel",AMEND:"amend"});$.extend(frappe.perm,{rights:["select","read","write","create","delete","submit","cancel","amend","report","import","export","print","email","share","set_user_permissions"],doctype_perm:{},has_perm:(e,t,n,r)=>{t||(t=0),frappe.perm.doctype_perm[e]||(frappe.perm.doctype_perm[e]=frappe.perm.get_perm(e));let s=frappe.perm.doctype_perm[e];if(!s||!s[t])return!1;let c=!!s[t][n];if(t===0&&c&&r){let u=frappe.model.get_docinfo(e,r.name);u&&!u.permissions[n]&&(c=!1)}return c},get_perm:(e,t)=>{let n=[{read:0,permlevel:0}],r=frappe.get_doc("DocType",e),s=frappe.session.user;if((s==="Administrator"||frappe.user_roles.includes("Administrator"))&&(n[0].read=1),!r)return n;if(n=frappe.perm.get_role_permissions(r),t){let c=frappe.model.get_docinfo(e,t.name);if(c&&c.permissions&&Object.keys(c.permissions).forEach(u=>{n[0][u]=c.permissions[u]}),$.isEmptyObject(n[0].if_owner)||(t.owner===s?$.extend(n[0],n[0].if_owner):$.each(n[0].if_owner,u=>{n[0].if_owner[u]&&(n[0][u]=0)})),c&&c.shared)for(let u=0;u<c.shared.length;u++){let d=c.shared[u];d.user===s&&(n[0].read=n[0].read||d.read,n[0].write=n[0].write||d.write,n[0].submit=n[0].submit||d.submit,n[0].share=n[0].share||d.share,d.read&&(n[0].email=frappe.boot.user.can_email.indexOf(e)!==-1?1:0,n[0].print=frappe.boot.user.can_print.indexOf(e)!==-1?1:0))}}return frappe.model.can_read(e)&&!n[0].read&&(n[0].read=1),n},get_role_permissions:e=>{let t=[{read:0,permlevel:0}];return(e.permissions||[]).forEach(n=>{let r=cint(n.permlevel);t[r]||(t[r]={},t[r].permlevel=r),frappe.user_roles.includes(n.role)&&frappe.perm.rights.forEach(s=>{let c=t[r][s]||n[s]||0;c&&(t[r][s]=c)})}),t=t.map(n=>n||{}),t},get_match_rules:(e,t)=>{let n=[];t||(t="read");let r=frappe.perm.get_perm(e),s=frappe.defaults.get_user_permissions();if(s&&!$.isEmptyObject(s)){let c={},u=frappe.meta.get_fields_to_check_permissions(e);$.each(u,(d,C)=>{let v=s[C.options]||[],p=frappe.perm.get_allowed_docs_for_doctype(v,e);p.length&&(c[C.label]=p)}),$.isEmptyObject(c)||n.push(c)}return r[0].if_owner&&r[0].read&&n.push({Owner:frappe.session.user}),n},get_field_display_status:(e,t,n,r)=>{if(!n&&t&&(n=frappe.perm.get_perm(t.doctype,t)),!n)return e&&(cint(e.hidden)||cint(e.hidden_due_to_dependency))?"None":"Write";e.permlevel||(e.permlevel=0);let s=n[e.permlevel],c="None";if(s&&(s.write&&!e.disabled?c="Write":s.read&&(c="Read")),r&&console.log("By Permission:"+c),cint(e.hidden)&&(c="None"),r&&console.log("By Hidden:"+c),cint(e.hidden_due_to_dependency)&&(c="None"),r&&console.log("By Hidden Due To Dependency:"+c),!t)return c;c==="Write"&&cint(t.docstatus)>0&&(c="Read"),r&&console.log("By Submit:"+c);let u=cint(e.allow_on_submit);return c==="Read"&&u&&cint(t.docstatus)===1&&s.write&&(c="Write"),r&&console.log("By Allow on Submit:"+c),c==="Read"&&cur_frm&&cur_frm.state_fieldname&&(cint(cur_frm.read_only)||in_list(cur_frm.states.update_fields,e.fieldname)||e.fieldname==cur_frm.state_fieldname)&&(c="Read"),r&&console.log("By Workflow:"+c),c==="Write"&&cint(e.read_only)&&(c="Read"),r&&console.log("By Read Only:"+c),c==="Write"&&e.set_only_once&&!t.__islocal&&(c="Read"),r&&console.log("By Set Only Once:"+c),c},is_visible:(e,t,n)=>(typeof e=="string"&&(e=frappe.meta.get_docfield(t.doctype,e,t.parent||t.name)),frappe.perm.get_field_display_status(e,t,n)!=="None"),get_allowed_docs_for_doctype:(e,t)=>frappe.perm.filter_allowed_docs_for_doctype(e,t,!1),filter_allowed_docs_for_doctype:(e,t,n=!0)=>{let r=(e||[]).filter(c=>c.applicable_for===t||!c.applicable_for),s=r.map(c=>c.doc);if(n){let c=s.length===1?s:r.filter(u=>u.is_default).map(u=>u.doc);return{allowed_records:s,default_doc:c[0]}}else return s}});$(".dropdown-menu a.dropdown-toggle").on("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),$(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show");var t=$(this).next(".dropdown-menu");return t.toggleClass("show"),$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(){$(".dropdown-submenu .show").removeClass("show")}),!1});frappe.get_modal=function(e,t){return $(`<div class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-dialog-scrollable" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">${e}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						${frappe.utils.icon("close-alt","sm","close-alt")}
						</button>
					</div>
					<div class="modal-body">
						${t}
					</div>
					<div class="modal-footer hidden">
						<button type="button" class="btn btn-default btn-sm btn-modal-close" data-dismiss="modal">
							<i class="octicon octicon-x visible-xs" style="padding: 1px 0px;"></i>
							<span class="hidden-xs">${__("Close")}</span>
						</button>
						<button type="button" class="btn btn-sm btn-primary hidden"></button>
					</div>
				</div>
			</div>
		</div>`)};frappe.ui.Dialog=class extends frappe.ui.Dialog{get_primary_btn(){return this.$wrapper.find(".modal-footer .btn-primary")}set_primary_action(t,n){return this.$wrapper.find(".modal-footer").removeClass("hidden"),super.set_primary_action(t,n).removeClass("hidden")}make(){super.make(),this.fields&&this.$wrapper.find(".section-body").addClass("w-100")}};var Qs=$t(Xs());frappe.provide("website");frappe.provide("frappe.awesome_bar_path");window.cur_frm=null;$.extend(frappe,{boot:{lang:"en"},_assets_loaded:[],require:async function(e,t){typeof e=="string"&&(e=[e]);for(let n of e)await this.add_asset_to_head(n);t&&t()},add_asset_to_head(e){return new Promise(t=>{if(frappe._assets_loaded.includes(e))return t();let n;e.split(".").pop()==="js"?(n=document.createElement("script"),n.type="text/javascript",n.src=e):(n=document.createElement("link"),n.type="text/css",n.rel="stylesheet",n.href=e),document.getElementsByTagName("head")[0].appendChild(n),n.onload=()=>{frappe._assets_loaded.push(e),t()}})},hide_message:function(){$(".message-overlay").remove()},xcall:function(e,t){return new Promise((n,r)=>{frappe.call({method:e,args:t,callback:s=>{n(s.message)},error:s=>{r(s.message)}})})},call:function(e){return typeof arguments[0]=="string"&&(e={method:arguments[0],args:arguments[1],callback:arguments[2]}),frappe.prepare_call(e),e.freeze&&frappe.freeze(),$.ajax({type:e.type||"POST",url:"/",data:e.args,dataType:"json",headers:{"X-Frappe-CSRF-Token":frappe.csrf_token,"X-Frappe-CMD":e.args&&e.args.cmd||""||""},statusCode:e.statusCode||{404:function(){frappe.msgprint(__("Not found"))},403:function(){frappe.msgprint(__("Not permitted"))},200:function(t){e.callback&&e.callback(t),e.success&&e.success(t)}}}).always(function(t){if(e.freeze&&frappe.unfreeze(),t.responseText)try{t=JSON.parse(t.responseText)}catch(n){t={}}frappe.process_response(e,t)})},prepare_call:function(e){e.btn&&$(e.btn).prop("disabled",!0),e.msg&&$(e.msg).toggle(!1),e.args||(e.args={}),e.method&&(e.args.cmd=e.method),$.each(e.args,function(t,n){typeof n!="string"&&n!==null&&(e.args[t]=JSON.stringify(n))}),!e.no_spinner},process_response:function(e,t){if(e.btn&&$(e.btn).prop("disabled",!1),t._server_messages){var n=JSON.parse(t._server_messages||"[]");n.map(s=>{try{return JSON.parse(s)}catch(c){return s}}).join("<br>"),e.error_msg?$(e.error_msg).html(n).toggle(!0):frappe.msgprint(n)}if(t.exc)try{var r=JSON.parse(t.exc);$.isArray(r)&&(r=r.join(`
`)),console.error?console.error(r):console.log(r)}catch(s){console.log(t.exc)}e.msg&&t.message&&$(e.msg).html(t.message).toggle(!0),e.always&&e.always(t)},show_message:function(e,t){t||(t="fa fa-refresh fa-spin"),frappe.hide_message(),$('<div class="message-overlay"></div>').html('<div class="content"><i class="'+t+' text-muted"></i><br>'+e+"</div>").appendTo(document.body)},send_message:function(e,t){return frappe.call({type:"POST",method:"frappe.www.contact.send_message",btn:t,args:e,callback:e.callback})},has_permission:function(e,t,n,r){return frappe.call({type:"GET",method:"frappe.client.has_permission",no_spinner:!0,args:{doctype:e,docname:t,perm_type:n},callback:function(s){if(!s.exc&&s.message.has_permission&&r)return r(s)}})},render_user:function(){frappe.is_user_logged_in()&&($(".btn-login-area").toggle(!1),$(".logged-in").toggle(!0),$(".user-image").attr("src",frappe.get_cookie("user_image")),$(".user-image-wrapper").html(frappe.avatar(null,"avatar-medium",null,null,null,!0)),$(".user-image-sidebar").html(frappe.avatar(null,"avatar-medium",null,null,null,!0)),$(".user-image-myaccount").html(frappe.avatar(null,"avatar-large",null,null,null,!0)))},freeze_count:0,freeze:function(e){if($("#freeze").length)$("#freeze").addClass("in");else{var t=$('<div id="freeze" class="modal-backdrop fade"></div>').appendTo("body");t.html(repl('<div class="freeze-message-container"><div class="freeze-message">%(msg)s</div></div>',{msg:e||""})),setTimeout(function(){t.addClass("in")},1)}frappe.freeze_count++},unfreeze:function(){if(!!frappe.freeze_count&&(frappe.freeze_count--,!frappe.freeze_count)){var e=$("#freeze").removeClass("in");setTimeout(function(){frappe.freeze_count||e.remove()},150)}},trigger_ready:function(){frappe.ready_events.forEach(function(e){e()})},highlight_code_blocks:function(){Qs.default.initHighlighting()},bind_filters:function(){$(".filter").each(function(){var t=$(this).attr("data-key"),n=frappe.utils.get_url_arg(t).replace(/\+/g," ");n&&$(this).val(n)});var e=function(){var t={};$(".filter").each(function(){var n=$(this).val();n&&(t[$(this).attr("data-key")]=n)}),window.location.href=location.pathname+"?"+$.param(t)};$(".filter").on("change",function(){e()})},bind_navbar_search:function(){frappe.get_navbar_search().on("keypress",function(e){var t=$(this).val();if(e.which===13&&t)return $(this).val("").blur(),frappe.do_search(t),!1})},do_search:function(e){var t=frappe.awesome_bar_path&&frappe.awesome_bar_path[location.pathname]||window.search_path||location.pathname;window.location.href=t+"?txt="+encodeURIComponent(e)},set_search_path:function(e){frappe.awesome_bar_path[location.pathname]=e},make_navbar_active:function(){var e=window.location.pathname;$(".navbar-nav a.active").removeClass("active"),$(".navbar-nav a").each(function(){var t=$(this).attr("href");if(t===e)return $(this).addClass("active"),!1})},get_navbar_search:function(){return $(".navbar .search, .sidebar .search")},is_user_logged_in:function(){return frappe.get_cookie("user_id")!=="Guest"&&frappe.session.user!=="Guest"},add_switch_to_desk:function(){$(".switch-to-desk").removeClass("hidden")},add_link_to_headings:function(){$(".doc-content .from-markdown").find("h2, h3, h4, h5, h6").each((e,t)=>{let n=t.id,r=$('<a class="no-underline">').prop("href","#"+n).attr("aria-hidden","true").html(`
					<svg xmlns="http://www.w3.org/2000/svg" style="width: 0.8em; height: 0.8em;" viewBox="0 0 24 24" fill="none" stroke="currentColor"
						stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link">
						<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
						<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
					</svg>
				`);$(t).append(r)})},setup_lazy_images:function(){function e(n){let r=$(n),s=r.data(),c=Object.keys(s).map(u=>`${u}="${s[u]}"`).join(" ");r.replaceWith(`<img ${c}>`)}if(!window.IntersectionObserver){$(".website-image-lazy").each((n,r)=>{e(r)});return}let t=new IntersectionObserver(n=>{n.forEach(r=>{r.intersectionRatio>0&&(t.unobserve(r.target),e(r.target))})},{threshold:[0,.2,.4,.6]});$(".website-image-lazy").each((n,r)=>{t.observe(r)})},show_language_picker(){frappe.session.user==="Guest"&&window.show_language_picker&&frappe.call("frappe.translate.get_all_languages",{with_language_name:!0}).then(e=>{let t=e.message,n=frappe.get_cookie("preferred_language"),r=[],s=$("#language-switcher .form-control");t.forEach(c=>{r.push(c.language_code),s.append($("<option></option>").attr("value",c.language_code).text(c.language_name))}),$("#language-switcher").removeClass("hide"),n=n||(r.includes(navigator.language)?navigator.language:"en"),s.val(n),document.documentElement.lang=n,s.change(()=>{let c=s.val();frappe.call("frappe.translate.set_preferred_language_cookie",{preferred_language:c}).then(()=>{window.location.reload()})})})}});frappe.setup_search=function(e,t){typeof e=="string"&&(e=$(e));let n=$(`<div class="dropdown" id="dropdownMenuSearch">
			<input type="search" class="form-control" placeholder="Search the docs (Press / to focus)" />
			<div class="overflow-hidden shadow dropdown-menu w-100" aria-labelledby="dropdownMenuSearch">
			</div>
			<div class="search-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-search">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
			</div>
		</div>`);e.empty(),n.appendTo(e);let r=n.find(".dropdown-menu"),s=n.find("input"),c,u=0;$(document).on("keypress",v=>{$(v.target).is("textarea, input, select")||v.key==="/"&&(v.preventDefault(),s.focus())}),s.on("input",frappe.utils.debounce(()=>{if(!s.val()){C();return}frappe.call({method:"frappe.search.web_search",args:{scope:t||null,query:s.val(),limit:5}}).then(v=>{let p=v.message||[],x;p.length==0?x='<div class="dropdown-item">No results found</div>':x=p.map(A=>`<a class="dropdown-item" href="/${A.path}">
						<h6>${A.title_highlights||A.title}</h6>
						<div style="white-space: normal;">${A.content_highlights}</div>
					</a>`).join(""),r.html(x),r.addClass("show"),c=r.find(".dropdown-item")})},500)),s.on("focus",()=>{s.val()?s.trigger("input"):C()}),s.keydown(function(v){v.which==40&&d(0)}),r.keydown(function(v){v.which==38?d(-1):v.which==40?d(1):v.which==27&&setTimeout(()=>{C()},300)}),$(window).click(function(){C()}),n.click(function(v){v.stopPropagation()});var d=function(v){u+=v,u>=c.length&&(u=0),u<0&&(u=c.length-1),s.off("blur"),c.eq(u).focus()};function C(){u=0,r.html(""),r.removeClass("show"),c=void 0}r.mouseover(function(){c.blur()})};window.valid_email=function(e){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(e.toLowerCase())};window.validate_email=valid_email;window.cstr=function(e){return e==null?"":e+""};window.is_null=function(t){if(t==null||cstr(t).trim()==="")return!0};window.is_html=function(t){return!(t.indexOf("<br>")==-1&&t.indexOf("<p")==-1&&t.indexOf("<img")==-1&&t.indexOf("<div")==-1)};window.ask_to_login=function(){frappe.is_user_logged_in()||(localStorage&&localStorage.setItem("last_visited",window.location.href.replace(window.location.origin,"")),window.location.href="login")};$(document).ready(function(){window.full_name=frappe.get_cookie("full_name");var e=frappe.is_user_logged_in();$("#website-login").toggleClass("hide",!!e),$("#website-post-login").toggleClass("hide",!e),$(".logged-in").toggleClass("hide",!e),frappe.bind_navbar_search(),frappe.get_cookie("system_user")==="yes"&&e&&frappe.add_switch_to_desk(),frappe.render_user(),frappe.setup_lazy_images(),$(document).trigger("page-change")});$(document).on("page-change",function(){if($(document).trigger("apply_permissions"),$(".dropdown-toggle").dropdown(),$(".dropdown-menu .dropdown-submenu .dropdown-toggle").on("click",function(t){t.stopPropagation(),$(this).parent().parent().parent().addClass("open")}),$.extend(frappe,frappe.get_cookies()),frappe.session={user:frappe.user_id},frappe.datetime.refresh_when(),frappe.trigger_ready(),frappe.bind_filters(),frappe.highlight_code_blocks(),frappe.add_link_to_headings(),frappe.make_navbar_active(),window.location.hash){var e=document.getElementById(window.location.hash.substring(1));e&&e.scrollIntoView(!0)}});frappe.ready(function(){frappe.show_language_picker(),frappe.socketio.init(window.socketio_port)});var Nu=$t(Js());})();
/*!
  * Bootstrap alert.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap button.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap carousel.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap collapse.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap dropdown.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap modal.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap popover.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap scrollspy.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap tab.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap toast.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap tooltip.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
  * Bootstrap util.js v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
//# sourceMappingURL=frappe-web.bundle.UP7HHWO7.js.map
