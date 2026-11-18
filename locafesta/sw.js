var V="locafesta-b20a9629c0",F=["./", "index.html", "styles.css", "shell.js", "app.js", "engine.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "img/loc_pula.jpg", "img/loc_mesas.jpg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x.indexOf("locafesta-")===0&&x!==V}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin||new URL(e.request.url).pathname.indexOf("/locafesta/")!==0)return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(V).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request,{ignoreSearch:true})}))});
