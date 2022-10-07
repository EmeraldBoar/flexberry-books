(function(e,o,n){var r={url:"",headers:{},onError:function(e){console.error(e)}},a=function(n){n=e.extend(!0,r,n),e.ajax({url:encodeURI(n.url),type:"GET",headers:n.headers,processData:!1,xhrFields:{responseType:"blob"},success:function(r){var a={href:URL.createObjectURL(r),hidden:!0}
n.openFileInNewWindowInsteadOfLoading?a.target="_blank":a.download=n.fileName
var c=e("<a/>",a)
if(o.navigator.msSaveOrOpenBlob){var i=function(){o.navigator.msSaveOrOpenBlob(r,n.fileName)}
c.on("click",i),c.click(),c.off("click",i)}else e("body").append(c),c.get(0).click()
c.remove(),"function"==typeof n.onSuccess&&n.onSuccess()},error:function(e){"function"==typeof n.onError?n.onError(e):r.onError(e)}})}
a.defaultOptions=r,e.extend(!0,e,{flexberry:{downloadFile:a}})})(jQuery,this)
