(function(){
var A=window.APP,$=function(s){return document.querySelector(s)};
var IC={home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M22 20c0-3-2-5-5-5.4"/>',
coin:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c-.5-1-1.7-1.5-3-1.5s-3 .6-3 2 1.3 1.8 3 2 3 .6 3 2-1.4 2-3 2-2.6-.5-3-1.5"/>',chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',tick:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',x:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',plus:'<path d="M12 5v14M5 12h14"/>',
send:'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',link:'<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1"/><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>',copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',truck:'<path d="M2 6h11v10H2zM13 10h5l3 3v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',map:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
paw:'<circle cx="7" cy="9" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="17" cy="9" r="2"/><path d="M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3z"/>',heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
whistle:'<circle cx="9" cy="14" r="5"/><path d="M13 11l8-4v5l-7 2"/><path d="M9 9V5"/>',ball:'<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 4.5h-5L8 10z"/>',party:'<path d="M4 20l5-14 9 9z"/><path d="M14 4l1 2M19 9l2-1M17 3l-1 3"/>',
bus:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M3 11h18M7 17v2M17 17v2"/>',book:'<path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"/><path d="M5 18a2 2 0 0 1 2-2h12M9 8h6"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3"/>',
doc:'<path d="M7 3h8l4 4v14H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'};
function ic(n,s){s=s||22;return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[n]||IC.list)+'</svg>'}
function esc(t){return String(t==null?"":t).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function money(v){return "R$ "+Number(v||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}
function num(s){var t=String(s==null?"":s).trim();if(t.indexOf(",")>-1||/^\d{1,3}(\.\d{3})+$/.test(t))t=t.replace(/\./g,"").replace(",",".");var n=parseFloat(t);return isNaN(n)?0:n}
function pad(n){return (n<10?"0":"")+n}
function fd(s){if(!s)return "";var p=String(s).split("-");return p.length===3?p[2]+"/"+p[1]+"/"+p[0]:s}
function dshort(s){var p=String(s).split("-");return p[2]+"/"+p[1]}
function addDays(s,n){var p=s.split("-"),d=new Date(+p[0],+p[1]-1,+p[2]+n);return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
function dias(a,b){var p=a.split("-"),q=b.split("-");return Math.round((new Date(+p[0],+p[1]-1,+p[2])-new Date(+q[0],+q[1]-1,+q[2]))/864e5)}
function wk(s){var p=s.split("-");return ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"][new Date(+p[0],+p[1]-1,+p[2]).getDay()]}
function chip(t,k){return '<span class="chip '+(k||"")+'">'+t+'</span>'}
function toast(t){var el=$("#toast");el.textContent=t;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(function(){el.hidden=true},3200)}
function src(k,cat){if(k&&String(k).indexOf("data:")===0)return k;if(k&&window.IMG&&IMG[k])return IMG[k];var n=cat||A.icon||"list";return "data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect width="600" height="400" fill="'+(A.tile||"#94a3b8")+'"/><g transform="translate(240 140) scale(5)" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(IC[n]||IC.list)+'</g></svg>')}
function gal(a){return a&&a.length?'<div class="gal">'+a.map(function(s){return '<button type="button" class="gb" data-act="zoom" aria-label="Ampliar foto"><img src="'+src(s)+'" alt="Foto"></button>'}).join("")+'</div>':""}
var TODAY=A.today||"2026-11-18",KEY=A.key+"-v1",SK=KEY+"-sessao";
var D=null;try{D=JSON.parse(localStorage.getItem(KEY)||"null")}catch(e){}
if(!D||D.v!==A.version)D=A.seed();D.v=A.version;
var U={page:"login",user:null,tab:null,stack:[],q:{},flt:{},op:{},opOut:"",acts:[],noSave:false,lu:"",lp:""};
function save(){if(U.noSave)return;try{localStorage.setItem(KEY,JSON.stringify(D))}catch(e){if(!save.w){save.w=1;toast("A memória do navegador encheu. As últimas fotos podem não ficar salvas.")}}}
function link(id){return location.origin+location.pathname+"?"+A.public.param+"="+encodeURIComponent(id)}
function waDlg(title,text){$("#dlgc").innerHTML='<h2 class="h2" style="font-size:21px">'+esc(title)+'</h2><p class="sub" style="margin-bottom:10px">Confira a mensagem e mande pelo WhatsApp.</p><textarea class="out" id="dmsg" readonly>'+esc(text)+'</textarea><a class="btn lg block" href="https://wa.me/?text='+encodeURIComponent(text)+'" target="_blank" rel="noopener">'+ic("chat")+'Abrir no WhatsApp</a><button type="button" class="btn ghost lg block" data-act="copiar" data-v="dmsg">'+ic("copy")+'Copiar mensagem</button><button type="button" class="btn ghost lg block" data-act="dclose">Fechar</button>';$("#dlg").showModal()}
var C={D:function(){return D},U:U,A:A,today:TODAY,money:money,fd:fd,dshort:dshort,addDays:addDays,dias:dias,wk:wk,chip:chip,esc:esc,ic:ic,src:src,gal:gal,num:num,toast:toast,wa:waDlg,link:link,
save:function(){save()},render:function(){render()},open:function(e,id){U.stack.push({v:"detail",e:e,id:id});render();top()},create:function(e,pre){U.q=Object.assign({},pre||{});U.stack.push({v:"new",e:e});render();top()},
go:function(t){U.tab=t;U.stack=[];render();top()},back:function(){U.stack.pop();render();top()},role:function(){return U.user?U.user.role:null},uid:function(p){D.nid=(D.nid||100)+1;return (p||"x")+D.nid}};
C.pix=function(v,tag){var code="00020126580014BR.GOV.BCB.PIX0136demonstracao-"+A.key+"520400005303986540"+Number(v).toFixed(2)+"5802BR5915"+A.name.toUpperCase().replace(/[^A-Z]/g,"").slice(0,15)+"6009CAMPOGRAN62"+String(tag||"").replace(/\W/g,"").slice(0,20)+"6304ABCD";
return '<div class="card" style="margin:12px 0"><div class="t">Pix copia e cola · '+money(v)+'</div><textarea class="out" id="pix" readonly style="min-height:72px;margin:8px 0">'+code+'</textarea><button type="button" class="btn ghost block" data-act="copiar" data-v="pix">'+ic("copy")+'Copiar código Pix</button><p class="m" style="margin-top:8px">Demonstração: este código não cobra nada.</p></div>'};
C.find=function(k,id){return find(k,id)};
function ent(k){return A.ents[k]}
function find(k,id){return ent(k).all(D).filter(function(r){return String(r.id)===String(id)})[0]}
function top(){window.scrollTo(0,0)}
function card(k,r){var E=ent(k),ch=E.chips?E.chips(r,C):[],th=E.thumb?E.thumb(r,C):null;
return '<button type="button" class="path dcard" data-act="open" data-e="'+k+'" data-id="'+esc(r.id)+'">'+(th?'<img class="thumb" src="'+src(th,E.icon)+'" alt="">':'<span class="tico">'+ic(E.icon||A.icon)+'</span>')+'<span class="dc"><span class="tt">'+esc(E.title(r,C))+'</span>'+(E.sub?'<span class="pd">'+esc(E.sub(r,C))+'</span>':'')+(ch.length?'<span class="choices">'+ch.map(function(c){return chip(esc(c[0]),c[1])}).join("")+'</span>':'')+'</span></button>'}
C.card=card;
function vList(T){var E=ent(T.ent),items=E.all(D).filter(function(r){return !E.visible||E.visible(r,C)}),f=T.filters,cur=U.flt[T.key]||(f?f[0][0]:null);
if(f){var fn=f.filter(function(x){return x[0]===cur})[0];if(fn)items=items.filter(function(r){return fn[2](r,C)})}
if(E.sort)items.sort(function(a,b){return E.sort(a,b,C)});
var canNew=E.form&&(!E.canNew||E.canNew(C));
return '<h1 class="h2">'+esc(T.title||T.label)+'</h1>'+(T.sub?'<p class="sub">'+T.sub+'</p>':'')+(canNew?'<button type="button" class="btn lg block" style="margin-bottom:14px" data-act="new" data-e="'+T.ent+'">'+ic("plus")+esc(E.newLabel||"Novo")+'</button>':'')+
(f?'<div class="choices" style="margin-bottom:14px">'+f.map(function(x){var n=E.all(D).filter(function(r){return (!E.visible||E.visible(r,C))&&x[2](r,C)}).length;return '<button type="button" class="ch" data-act="flt" data-k="'+T.key+'" data-v="'+x[0]+'" aria-pressed="'+(cur===x[0])+'">'+esc(x[1])+' ('+n+')</button>'}).join("")+'</div>':'')+
(items.length?items.map(function(r){return card(T.ent,r)}).join(""):'<div class="card">'+esc(T.empty||"Nada por aqui.")+'</div>')}
function vDetail(s){var E=ent(s.e),r=find(s.e,s.id);if(!r){U.stack.pop();return vBody()}
var ch=E.chips?E.chips(r,C):[],acts=E.actions?E.actions(r,C).filter(Boolean):[];U.acts=acts;
var h='<button type="button" class="back" data-act="back">'+ic("left",20)+'Voltar</button>'+(E.hero?'<img class="pimg" src="'+src(E.hero(r,C),E.icon)+'" alt="">':'')+'<h1 class="h2">'+esc(E.title(r,C))+'</h1>'+(E.sub?'<p class="sub" style="margin-bottom:8px">'+esc(E.sub(r,C))+'</p>':'')+(ch.length?'<div class="choices" style="margin-bottom:12px">'+ch.map(function(c){return chip(esc(c[0]),c[1])}).join("")+'</div>':'');
var fl=E.fields?E.fields(r,C):[];if(fl.length)h+='<div class="card" style="margin-bottom:12px">'+fl.map(function(x){return '<div class="line"><span>'+esc(x[0])+'</span><b>'+esc(x[1])+'</b></div>'}).join("")+'</div>';
if(E.body)h+=E.body(r,C);
if(acts.length)h+='<div class="stack" style="gap:8px;margin-top:14px">'+acts.map(function(a,i){return '<button type="button" class="btn lg block'+(a.ghost?' ghost':'')+'" data-act="act" data-i="'+i+'">'+ic(a.icon||"check")+esc(a.label)+'</button>'}).join("")+'</div>';
return h}
function field(f){var v=U.q[f.k];if(v==null&&f.def!=null){v=typeof f.def==="function"?f.def(C):f.def;U.q[f.k]=v}
var lab='<span class="lab">'+esc(f.label)+(f.opt?' <span class="hint">(opcional)</span>':'')+'</span>';
if(f.type==="choice"||f.type==="pick"){var opts=f.type==="pick"?ent(f.ent).all(D).filter(function(r){return !f.where||f.where(r,C)}).map(function(r){return [String(r.id),ent(f.ent).title(r,C)]}):(typeof f.opts==="function"?f.opts(C):f.opts).map(function(o){return Array.isArray(o)?o:[o,o]});
return '<div class="fld">'+lab+'<div class="choices">'+opts.map(function(o){return '<button type="button" class="ch" data-act="fset" data-k="'+f.k+'" data-v="'+esc(o[0])+'" aria-pressed="'+(String(v)===String(o[0]))+'">'+esc(o[1])+'</button>'}).join("")+'</div>'+(f.hint?'<span class="hint">'+f.hint+'</span>':'')+'</div>'}
if(f.type==="multi"){var mo=typeof f.opts==="function"?f.opts(C):f.opts,arr=v||[];return '<div class="fld">'+lab+'<div class="choices">'+mo.map(function(o){var oo=Array.isArray(o)?o:[o,o];return '<button type="button" class="ch" data-act="fmulti" data-k="'+f.k+'" data-v="'+esc(oo[0])+'" aria-pressed="'+(arr.indexOf(oo[0])>-1)+'">'+esc(oo[1])+'</button>'}).join("")+'</div></div>'}
if(f.type==="step")return '<div class="fld">'+lab+'<div class="stepper"><button type="button" class="btn ghost" data-act="fstep" data-k="'+f.k+'" data-d="-1" aria-label="Menos">−</button><input type="text" readonly value="'+esc(v)+'" aria-label="'+esc(f.label)+'"><button type="button" class="btn ghost" data-act="fstep" data-k="'+f.k+'" data-d="1" aria-label="Mais">+</button></div></div>';
if(f.type==="textarea")return '<div class="fld"><label for="f_'+f.k+'">'+esc(f.label)+(f.opt?' <span class="hint">(opcional)</span>':'')+'</label><textarea id="f_'+f.k+'" data-f="'+f.k+'" placeholder="'+esc(f.ph||"")+'">'+esc(v||"")+'</textarea></div>';
return '<div class="fld"><label for="f_'+f.k+'">'+esc(f.label)+(f.opt?' <span class="hint">(opcional)</span>':'')+'</label><input type="text" id="f_'+f.k+'" data-f="'+f.k+'"'+(f.type==="money"||f.type==="num"?' inputmode="decimal"':'')+' placeholder="'+esc(f.ph||"")+'" value="'+esc(v==null?"":v)+'">'+(f.hint?'<span class="hint">'+f.hint+'</span>':'')+'</div>'}
function vNew(s){var E=ent(s.e),F=E.form(C);return '<button type="button" class="back" data-act="back">'+ic("left",20)+'Voltar</button><h1 class="h2">'+esc(E.newLabel||"Novo")+'</h1>'+(E.newSub?'<p class="sub">'+E.newSub+'</p>':'')+F.map(field).join("")+(E.preview?'<div id="pv">'+E.preview(U.q,C)+'</div>':'')+'<button type="button" class="btn lg block" data-act="submit" data-e="'+s.e+'">'+ic("tick")+esc(E.submitLabel||"Salvar")+'</button>'}
function vOp(){var Q=A.questions,h='<h1 class="h2">Sua opinião</h1><p class="sub">Leva dois minutos. Suas respostas ajudam a decidir o que entra primeiro.</p>';
Q.forEach(function(q){h+='<div class="fld"><span class="lab">'+esc(q.t)+'</span>'+(q.txt?'<textarea data-op="'+q.k+'" placeholder="Escreva aqui.">'+esc(U.op[q.k]||"")+'</textarea>':'<div class="choices">'+q.o.map(function(o){var on=q.m?(U.op[q.k]||[]).indexOf(o)>-1:U.op[q.k]===o;return '<button type="button" class="ch" data-act="op" data-k="'+q.k+'" data-m="'+(q.m?1:0)+'" data-v="'+esc(o)+'" aria-pressed="'+on+'">'+esc(o)+'</button>'}).join("")+'</div>')+'</div>'});
h+='<button type="button" class="btn lg block" data-act="gerar">Gerar minhas respostas</button>';if(U.opOut)h+='<div class="fld" style="margin-top:16px"><label for="out">Copie e mande para quem te enviou este protótipo</label><textarea class="out" id="out" readonly>'+esc(U.opOut)+'</textarea><button type="button" class="btn ghost lg" data-act="copiar" data-v="out">'+ic("copy")+'Copiar respostas</button></div>';return h}
function tabsFor(){return U.user?U.user.tabs:[]}
function vBody(){var s=U.stack[U.stack.length-1];if(s)return s.v==="detail"?vDetail(s):vNew(s);if(U.tab==="op")return vOp();var T=A.tabs[U.tab];T.key=U.tab;return T.list?vList(T):T.render(C)}
function vLogin(){return Shell.bar({title:A.name,sub:"Demonstração",right:Shell.hub()})+'<h1 class="h2">Entrar</h1><p class="sub">'+esc(A.loginSub)+'</p>'+
'<div class="fld"><label for="lu">Usuário</label><input type="text" id="lu" autocomplete="username" autocapitalize="none" value="'+esc(U.lu)+'"></div><div class="fld"><label for="lp">Senha</label><input type="password" id="lp" autocomplete="current-password" value="'+esc(U.lp)+'"></div>'+
'<button type="button" class="btn lg block" data-act="login">'+ic("check")+'Entrar</button><div class="card" style="margin-top:16px"><div class="t">Acessos de demonstração</div><div class="m" style="margin-bottom:10px">Toque para preencher. A senha de todos é <b>demo</b>.</div><div class="choices">'+A.users.map(function(u){return '<button type="button" class="ch" data-act="fill" data-v="'+u.u+'">'+esc(u.chip)+'</button>'}).join("")+'</div></div>'+
'<div class="sec">'+esc(A.public.loginTitle)+'</div><p class="m" style="margin:0 0 10px">'+esc(A.public.loginText)+'</p><a class="bigact" href="?'+A.public.param+'='+encodeURIComponent(A.public.example)+'"><span class="ico">'+ic(A.public.icon||"link",24)+'</span><span>'+esc(A.public.loginButton)+'<small>Sem login e sem cadastro</small></span></a>'+Shell.installHint()}
function view(){if(U.page==="login")return vLogin();if(U.page==="pub")return Shell.bar({title:A.name,sub:A.public.title})+A.public.render(U.pid,C);
var u=U.user;return Shell.bar({title:A.name,sub:u.sub,user:{name:u.nome,role:u.roleLabel},items:[{label:"Dar opinião",icon:"chat",run:function(){C.go("op")}}]})+vBody()+
nav(u.tabs.map(function(t){var T=A.tabs[t];return [t,T.label,T.icon,T.badge?T.badge(C):""]}),U.stack.length?null:U.tab)}
function nav(items,cur){return '<nav class="nav" aria-label="Menu principal">'+items.map(function(t){return '<button type="button" data-act="tab" data-v="'+t[0]+'"'+(cur===t[0]?' aria-current="page"':'')+'><span class="ib">'+ic(t[2],24)+(t[3]?'<i class="bdg">'+t[3]+'</i>':'')+'</span><span>'+esc(t[1])+'</span></button>'}).join("")+'</nav>'}
function render(){$("#app").innerHTML=view();Shell.after()}
var H={
tab:function(d){U.tab=d.v;U.stack=[];try{history.replaceState(history.state,"","#"+d.v)}catch(e){}render();top()},
open:function(d){C.open(d.e,d.id)},back:function(){C.back()},new:function(d){C.create(d.e)},
flt:function(d){U.flt[d.k]=d.v;render()},
act:function(d){var a=U.acts[+d.i];if(a){var r=a.run(C);save();if(r!==false)render()}},
fset:function(d){U.q[d.k]=d.v;render()},fmulti:function(d){var a=U.q[d.k]||[],i=a.indexOf(d.v);if(i>-1)a.splice(i,1);else a.push(d.v);U.q[d.k]=a;render()},
fstep:function(d){U.q[d.k]=Math.max(0,num(U.q[d.k])+ +d.d);render()},
submit:function(d){var E=ent(d.e),F=E.form(C);for(var i=0;i<F.length;i++){var f=F[i],v=U.q[f.k];if(!f.opt&&(v==null||String(v).trim()===""||(f.type==="money"&&num(v)<=0))){toast("Preencha: "+f.label+".");return}}
var id=E.create(U.q,C);if(id===false)return;save();U.stack.pop();U.q={};if(id!=null){var tg=typeof id==="object"?id:{e:d.e,id:id},tp=U.stack[U.stack.length-1];if(!(tp&&tp.v==="detail"&&tp.e===tg.e&&String(tp.id)===String(tg.id)))U.stack.push({v:"detail",e:tg.e,id:tg.id})}render();top();toast(E.createdMsg||"Salvo.")},
fill:function(d){U.lu=d.v;U.lp="demo";render()},
login:function(){var a=$("#lu"),b=$("#lp");U.lu=a?a.value:U.lu;U.lp=b?b.value:U.lp;var u=A.users.filter(function(x){return x.u===String(U.lu).trim().toLowerCase()})[0];
if(!u||String(U.lp).trim()!=="demo"){toast("Usuário ou senha não conferem. Use um dos acessos de demonstração.");return}
U.user=u;try{localStorage.setItem(SK,u.u)}catch(e){}U.page="app";U.tab=u.tabs[0];U.stack=[];render();top()},
zoom:function(d,el){$("#dzimg").src=el.querySelector("img").src;$("#dz").showModal()},fechar:function(){$("#dz").close()},dclose:function(){$("#dlg").close()},
op:function(d){var k=d.k;if(d.m==="1"){var a=U.op[k]||[],i=a.indexOf(d.v);if(i>-1)a.splice(i,1);else a.push(d.v);U.op[k]=a}else U.op[k]=d.v;render()},
gerar:function(){var t=A.name+", minhas respostas:\n";A.questions.forEach(function(q){var v=U.op[q.k];if(v&&v.length)t+="\n"+q.t+"\n"+(Array.isArray(v)?v.join("; "):v)+"\n"});if(t.length<A.name.length+30){toast("Responda pelo menos uma pergunta.");return}U.opOut=t;render();var o=$("#out");if(o)o.scrollIntoView({block:"center"})},
copiar:function(d){var o=document.getElementById(d.v);function sel(){o.focus();o.select();toast("Selecione e copie o texto.")}if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(o.value).then(function(){toast("Copiado.")},sel);else sel()},
x:function(d,el){var f=A.acts&&A.acts[d.v];if(f){var r=f(d,C,el);save();if(r!==false)render()}}};
document.addEventListener("click",function(e){var a=e.target.closest("[data-act]");if(!a)return;var f=H[a.dataset.act];if(f)f(a.dataset,a)});
document.addEventListener("input",function(e){var t=e.target;if(t.dataset.f){U.q[t.dataset.f]=t.value;var s=U.stack[U.stack.length-1],pv=$("#pv");if(pv&&s&&s.v==="new"&&ent(s.e).preview)pv.innerHTML=ent(s.e).preview(U.q,C)}else if(t.dataset.op)U.op[t.dataset.op]=t.value;else if(t.dataset.x&&A.inputs&&A.inputs[t.dataset.x])A.inputs[t.dataset.x](t.value,C,t)});
document.addEventListener("keydown",function(e){if(e.key==="Enter"&&(e.target.id==="lp"||e.target.id==="lu"))H.login()});
var qs=new URLSearchParams(location.search),sess=null;try{sess=localStorage.getItem(SK)}catch(e){}
var su=A.users.filter(function(x){return x.u===sess})[0];
if(qs.get(A.public.param)){U.page="pub";U.pid=qs.get(A.public.param)}else if(su){U.user=su;U.page="app";var h0=location.hash.slice(1);U.tab=su.tabs.indexOf(h0)>-1||h0==="op"?h0:su.tabs[0]}
Shell.init({render:render,onReset:function(){try{localStorage.removeItem(KEY)}catch(e){}U.noSave=true;location.href=location.pathname},onLogout:function(){try{localStorage.removeItem(SK)}catch(e){}location.href=location.pathname}});
render();
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(function(){});
})();
