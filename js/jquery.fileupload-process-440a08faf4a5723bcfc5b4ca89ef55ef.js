(function(e){"use strict"
"function"==typeof define&&define.amd?define(["jquery","./jquery.fileupload"],e):"object"==typeof exports?e(require("jquery"),require("./jquery.fileupload")):e(window.jQuery)})(function(e){"use strict"
var r=e.blueimp.fileupload.prototype.options.add
e.widget("blueimp.fileupload",e.blueimp.fileupload,{options:{processQueue:[],add:function(s,i){var o=e(this)
i.process(function(){return o.fileupload("process",i)}),r.call(this,s,i)}},processActions:{},_processFile:function(r,s){var i=this,o=e.Deferred().resolveWith(i,[r]).promise()
return this._trigger("process",null,r),e.each(r.processQueue,function(r,t){var n=function(r){return s.errorThrown?e.Deferred().rejectWith(i,[s]).promise():i.processActions[t.action].call(i,r,t)}
o=o[i._promisePipe](n,t.always&&n)}),o.done(function(){i._trigger("processdone",null,r),i._trigger("processalways",null,r)}).fail(function(){i._trigger("processfail",null,r),i._trigger("processalways",null,r)}),o},_transformProcessQueue:function(r){var s=[]
e.each(r.processQueue,function(){var i={},o=this.action,t=!0===this.prefix?o:this.prefix
e.each(this,function(s,o){"string"===e.type(o)&&"@"===o.charAt(0)?i[s]=r[o.slice(1)||(t?t+s.charAt(0).toUpperCase()+s.slice(1):s)]:i[s]=o}),s.push(i)}),r.processQueue=s},processing:function(){return this._processing},process:function(r){var s=this,i=e.extend({},this.options,r)
return i.processQueue&&i.processQueue.length&&(this._transformProcessQueue(i),0===this._processing&&this._trigger("processstart"),e.each(r.files,function(o){var t=o?e.extend({},i):i,n=function(){return r.errorThrown?e.Deferred().rejectWith(s,[r]).promise():s._processFile(t,r)}
t.index=o,s._processing+=1,s._processingQueue=s._processingQueue[s._promisePipe](n,n).always(function(){s._processing-=1,0===s._processing&&s._trigger("processstop")})})),this._processingQueue},_create:function(){this._super(),this._processing=0,this._processingQueue=e.Deferred().resolveWith(this).promise()}})})
