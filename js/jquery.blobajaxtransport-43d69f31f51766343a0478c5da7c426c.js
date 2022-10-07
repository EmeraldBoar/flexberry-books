jQuery.ajaxTransport("+*",function(t,a,e){var r
if(window.FormData&&(t.dataType&&("blob"==t.dataType||"arraybuffer"==t.dataType)||t.data&&(window.Blob&&t.data instanceof Blob||window.ArrayBuffer&&t.data instanceof ArrayBuffer)))return{send:function(a,e){var n=t.url||window.location.href,s=t.type||"GET",o=t.dataType||"text",u=t.data||null,d=t.async||!0
for(var f in(r=new XMLHttpRequest).addEventListener("load",function(){var t={}
r.status>=200&&r.status<300||304===r.status?t[o]=r.response:t.text=r.statusText,e(r.status,r.statusText,t,r.getAllResponseHeaders())}),r.addEventListener("error",function(){"number"!=typeof r.status?e(0,"error"):e(r.status,r.statusText)}),r.open(s,n,d),r.responseType=o,a)a.hasOwnProperty(f)&&r.setRequestHeader(f,a[f])
r.send(u)},abort:function(){r&&r.abort()}}})
