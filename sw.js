if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DFW8JIAk.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"f5f425067b0e6801e479a4b45fc6cb67"},{url:"registerSW.js",revision:"7187b9457e8c77bfa5e809a7321122fc"},{url:"favicon.ico",revision:"e56c80e6c4443fb339710a42adfdb7c6"},{url:"maskable-icon-512x512.png",revision:"b8f0730274c9d1ea39b6ea4b1cf3c872"},{url:"pwa-192x192.png",revision:"6004903bdbedb7077f13d23a85ffcec9"},{url:"pwa-512x512.png",revision:"38bd414a63a6b8ef177a79d708d61513"},{url:"pwa-64x64.png",revision:"c6ae576a364945b64bad18ca1876bd69"},{url:"manifest.webmanifest",revision:"bbf6691755975320e34a063e30ac5d66"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
