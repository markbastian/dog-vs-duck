if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

(function e$$0(x,Q,k){function h(a,b){if(!Q[a]){if(!x[a]){var d="function"==typeof require&&require;if(!b&&d)return d(a,!0);if(m)return m(a,!0);throw Error("Cannot find module '"+a+"'");}d=Q[a]={exports:{}};x[a][0].call(d.exports,function(f){var b=x[a][1][f];return h(b?b:f)},d,d.exports,e$$0,x,Q,k)}return Q[a].exports}for(var m="function"==typeof require&&require,n=0;n<k.length;n++)h(k[n]);return h})({1:[function(D,x,Q){x={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(k){var h=
new XMLHttpRequest;h.open("GET",k,!1);h.overrideMimeType&&h.overrideMimeType("text/plain");h.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");h.send(null);if(200!==h.status&&0!==h.status)throw"XMLHttpRequest failed, status code "+h.status;return h.responseText}};window.Processing=D("./src/")(x)},{"./src/":27}],2:[function(D,x,Q){x.exports={name:"Processing.js",version:"1.4.8",dependencies:{argv:"~0.0.2",browserify:"~2.18.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",
open:"0.0.3"},devDependencies:{grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"}}},{}],3:[function(D,x,Q){x.exports=function(k){if(k instanceof Array){var h=-1;this.hasNext=function(){return++h<k.length};this.next=function(){return k[h]}}else{if(k.iterator instanceof Function)return k.iterator();throw"Unable to iterate: "+k;}}},{}],4:[function(D,x,Q){x.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,
VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1E-4,MAX_FLOAT:3.4028235E38,MIN_FLOAT:-3.4028235E38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f\u00a0",RGB:1,ARGB:2,
HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,
QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,
DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,
ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(D,x,Q){x.exports=function(k){function h(){}function m(a,d,f){if(a.hasOwnProperty(d)&&
"function"===typeof a[d]){var l=a[d];if("$overloads"in l)l.$defaultOverload=f;else if("$overloads"in f||l.length!==f.length){var p;"$overloads"in f?(p=f.$overloads.slice(0),p[l.length]=l,l=f.$defaultOverload):(p=[],p[f.length]=f,p[l.length]=l);var r=function(){return(r.$overloads[arguments.length]||("$methodArgsIndex"in r&&arguments.length>r.$methodArgsIndex?r.$overloads[r.$methodArgsIndex]:null)||r.$defaultOverload).apply(this,arguments)};r.$overloads=p;"$methodArgsIndex"in f&&(r.$methodArgsIndex=
f.$methodArgsIndex);r.$defaultOverload=l;r.name=d;a[d]=r}}else a[d]=f}function n(b,d){function f(f){a.defineProperty(b,f,{get:function(){return d[f]},set:function(c){d[f]=c},enumerable:!0})}var l=[],p;for(p in d)"function"===typeof d[p]?m(b,p,d[p]):"$"===p.charAt(0)||p in b||l.push(p);for(;0<l.length;)f(l.shift());b.$super=d}h.prototype=k.PConstants;var a=new h;Object.keys(k).forEach(function(b){a[b]=k[b]});a.defineProperty=function(a,d,f){"defineProperty"in Object?Object.defineProperty(a,d,f):(f.hasOwnProperty("get")&&
a.__defineGetter__(d,f.get),f.hasOwnProperty("set")&&a.__defineSetter__(d,f.set))};a.extendClassChain=function(a){for(var d=[a],f=a.$upcast;f;f=f.$upcast)n(f,a),d.push(f),a=f;for(;0<d.length;)d.pop().$self=a};a.extendStaticMembers=function(a,d){n(a,d)};a.extendInterfaceMembers=function(a,d){n(a,d)};a.addMethod=function(a,d,f,l){var p=a[d];if(p||l){var r=f.length;if("$overloads"in p)p.$overloads[r]=f;else{var c=function(){return(c.$overloads[arguments.length]||("$methodArgsIndex"in c&&arguments.length>
c.$methodArgsIndex?c.$overloads[c.$methodArgsIndex]:null)||c.$defaultOverload).apply(this,arguments)},h=[];p&&(h[p.length]=p);h[r]=f;c.$overloads=h;c.$defaultOverload=p||f;l&&(c.$methodArgsIndex=r);c.name=d;a[d]=c}}else a[d]=f};a.createJavaArray=function(b,d){var f=null,l=null;if("string"===typeof b)if("boolean"===b)l=!1;else{var p;p="string"!==typeof b?!1:-1!=="byte int char color float long double".split(" ").indexOf(b);p&&(l=0)}if("number"===typeof d[0])if(p=0|d[0],1>=d.length){f=[];f.length=p;
for(var r=0;r<p;++r)f[r]=l}else for(f=[],l=d.slice(1),r=0;r<p;++r)f.push(a.createJavaArray(b,l));return f};a.defineProperty(a,"screenWidth",{get:function(){return window.innerWidth}});a.defineProperty(a,"screenHeight",{get:function(){return window.innerHeight}});return a}},{}],6:[function(D,x,Q){x.exports=function(k,h){var m=h.window,n=h.document,a=m.XMLHttpRequest,b=h.noop,d=h.isDOMPresent,f=h.version;k.version=f?f:"@DEV-VERSION@";k.lib={};k.registerLibrary=function(f,c){k.lib[f]=c;c.hasOwnProperty("init")&&
c.init(defaultScope)};k.Sketch=function(f){this.attachFunction=f;this.options={pauseOnBlur:!1,globalKeyEvents:!1};this.onExit=this.onFrameEnd=this.onFrameStart=this.onLoop=this.onPause=this.onSetup=this.onLoad=b;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(c,f){if(!this.images[c]&&(d||(this.images[c]=null),f||(f=new Image,f.onload=function(c){return function(){c.pending--}}(this),this.pending++,f.src=c),this.images[c]=f,m.opera)){var a=n.createElement("div");a.appendChild(f);
a.style.position="absolute";a.style.opacity=0;a.style.width="1px";a.style.height="1px";this.operaCache[c]||(n.body.appendChild(a),this.operaCache[c]=a)}}};this.sourceCode=void 0;this.attach=function(c){if("function"===typeof this.attachFunction)this.attachFunction(c);else if(this.sourceCode){var f=(new Function("return ("+this.sourceCode+");"))();f(c);this.attachFunction=f}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var c,f;f="((function(Sketch) {\n"+
("var sketch = new Sketch(\n"+this.sourceCode+");\n");for(c in this.options)if(this.options.hasOwnProperty(c)){var a=this.options[c];f+="sketch.options."+c+" = "+("string"===typeof a?'"'+a+'"':""+a)+";\n"}for(c in this.imageCache)this.options.hasOwnProperty(c)&&(f+='sketch.imageCache.add("'+c+'");\n');return f+"return sketch;\n})(Processing.Sketch))"}};var l=k.loadSketchFromSources=function(f,c){function d(c,f){var b=new a;b.onreadystatechange=function(){if(4===b.readyState){var c;200!==b.status&&
0!==b.status?c="Invalid XHR status "+b.status:""===b.responseText&&(c="withCredentials"in new a&&!1===(new a).withCredentials&&"file:"===m.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty.");f(b.responseText,c)}};b.open("GET",c,!0);b.overrideMimeType&&
b.overrideMimeType("application/json");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null)}function b(c,a){function m(d,b){l[c]=d;++v;b&&p.push(a+" ==> "+b);if(v===h)if(0===p.length)try{return new k(f,l.join("\n"))}catch(md){throw console.log("Processing.js: Unable to execute pjs sketch."),md;}else throw"Processing.js: Unable to load pjs sketch files: "+p.join("\n");}if("#"===a.charAt(0)){var ca=n.getElementById(a.substring(1));ca?m(ca.text||ca.textContent):m("","Unable to load pjs sketch: element with id '"+
a.substring(1)+"' was not found")}else d(a,m)}for(var l=[],p=[],h=c.length,v=0,ga=0;ga<h;++ga)b(ga,c[ga])},p=function(){n.removeEventListener("DOMContentLoaded",p,!1);processingInstances=[];k.instances=processingInstances;for(var f=n.getElementsByTagName("canvas"),c,a=0,d=f.length;a<d;a++){var b=f[a].getAttribute("data-processing-sources");null===b&&(b=f[a].getAttribute("data-src"),null===b&&(b=f[a].getAttribute("datasrc")));if(b){c=b.split(/\s+/g);for(b=0;b<c.length;)c[b]?b++:c.splice(b,1);l(f[a],
c)}}f=n.getElementsByTagName("script");d=[];for(a=f.length-1;0<=a;a--)d.push(f[a]);a=0;for(b=d.length;a<b;a++)if(c=d[a],c.getAttribute&&(f=c.getAttribute("type"))&&("text/processing"===f.toLowerCase()||"application/processing"===f.toLowerCase())){var h=c.getAttribute("data-processing-target"),f=void 0;if(h)f=n.getElementById(h);else{for(h=c.nextSibling;h&&1!==h.nodeType;)h=h.nextSibling;h&&"canvas"===h.nodeName.toLowerCase()&&(f=h)}f&&(c.getAttribute("src")?(c=c.getAttribute("src").split(/\s+/),l(f,
c)):(c=c.textContent||c.text,new k(f,c)))}};n.addEventListener("DOMContentLoaded",p,!1);k.reload=function(){if(0<processingInstances.length)for(var f=processingInstances.length-1;0<=f;f--)processingInstances[f]&&processingInstances[f].exit();p()};k.disableInit=function(){n.removeEventListener("DOMContentLoaded",p,!1)};return k}},{}],7:[function(D,x,Q){x.exports=function(k,h){return null===k||null===h?null===k&&null===h:"string"===typeof k||"object"!==typeof k?k===h:k.equals instanceof Function?k.equals(h):
k===h}},{}],8:[function(D,x,Q){x.exports=function(k,h){if("string"===typeof k){for(var m=0,n=0;n<k.length;++n)m=31*m+k.charCodeAt(n)&4294967295;return m}if("object"!==typeof k)return k&4294967295;if(k.hashCode instanceof Function)return k.hashCode();k.$id===h&&(k.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return k.$id}},{}],9:[function(D,x,Q){x.exports=function(k){function h(a){var b=-1;this.hasNext=function(){return b+1<a.length};this.next=function(){return a[++b]};
this.remove=function(){a.splice(b--,1)}}function m(a){var b=[];a&&a.toArray&&(b=a.toArray());this.get=function(a){return b[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var f=0,l=b.length;f<l;++f)if(n(a,b[f]))return f;return-1};this.lastIndexOf=function(a){for(var f=b.length-1;0<=f;--f)if(n(a,b[f]))return f;return-1};this.add=function(){if(1===arguments.length)b.push(arguments[0]);else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=
a&&a<=b.length)b.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.addAll=function(a,f){var l;if("number"===typeof a){if(0>a||a>b.length)throw"Index out of bounds for addAll: "+a+" greater or equal than "+b.length;for(l=new ObjectIterator(f);l.hasNext();)b.splice(a++,0,l.next())}else for(l=new ObjectIterator(a);l.hasNext();)b.push(l.next())};this.set=function(){if(2===arguments.length){var a=
arguments[0];if("number"===typeof a)if(0<=a&&a<b.length)b.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.size=function(){return b.length};this.clear=function(){b.length=0};this.remove=function(a){if("number"===typeof a)return b.splice(a,1)[0];a=this.indexOf(a);return-1<a?(b.splice(a,1),!0):!1};this.removeAll=function(a){var f,b,p,r=new m;r.addAll(this);this.clear();for(b=f=0;f<r.size();f++)p=
r.get(f),a.contains(p)||this.add(b++,p);return this.size()<r.size()?!0:!1};this.isEmpty=function(){return!b.length};this.clone=function(){return new m(this)};this.toArray=function(){return b.slice(0)};this.iterator=function(){return new h(b)}}var n=k.virtEquals;return m}},{}],10:[function(D,x,Q){x.exports=function(k,h){var m=function(n){this.code="string"===typeof n&&1===n.length?n.charCodeAt(0):"number"===typeof n?n:n instanceof m?n:NaN;return k[this.code]===h?k[this.code]=this:k[this.code]};m.prototype.toString=
function(){return String.fromCharCode(this.code)};m.prototype.valueOf=function(){return this.code};return m}({})},{}],11:[function(D,x,Q){x.exports=function(k){function h(){function a(f){f=m(f)%c.length;return 0>f?c.length+f:f}function b(){if(!(k<=r*c.length)){for(var f=[],b=0;b<c.length;++b)void 0!==c[b]&&(f=f.concat(c[b]));b=2*c.length;c=[];c.length=b;for(b=0;b<f.length;++b){var d=a(f[b].key),l=c[d];void 0===l&&(c[d]=l=[]);l.push(f[b])}}}function d(f,a){function b(){for(;!p;)if(++l,d>=c.length)p=
!0;else if(void 0===c[d]||l>=c[d].length)l=-1,++d;else break}var d=0,l=-1,p=!1,r;this.hasNext=function(){return!p};this.next=function(){r=f(c[d][l]);b();return r};this.remove=function(){void 0!==r&&(a(r),--l,b())};b()}function f(c,f,a){this.clear=function(){ca.clear()};this.contains=function(c){return f(c)};this.containsAll=function(c){for(c=c.iterator();c.hasNext();)if(!this.contains(c.next()))return!1;return!0};this.isEmpty=function(){return ca.isEmpty()};this.iterator=function(){return new d(c,
a)};this.remove=function(c){return this.contains(c)?(a(c),!0):!1};this.removeAll=function(c){for(c=c.iterator();c.hasNext();){var f=c.next();this.contains(f)&&a(f)}return!0};this.retainAll=function(c){for(var f=this.iterator(),b=[];f.hasNext();){var d=f.next();c.contains(d)||b.push(d)}for(c=0;c<b.length;++c)a(b[c]);return 0<b.length};this.size=function(){return ca.size()};this.toArray=function(){for(var c=[],f=this.iterator();f.hasNext();)c.push(f.next());return c}}function l(c){this._isIn=function(f){return f===
ca&&void 0===c.removed};this.equals=function(f){return n(c.key,f.getKey())};this.getKey=function(){return c.key};this.getValue=function(){return c.value};this.hashCode=function(f){return m(c.key)};this.setValue=function(f){var a=c.value;c.value=f;return a}}if(1===arguments.length&&arguments[0]instanceof h)return arguments[0].clone();var p=0<arguments.length?arguments[0]:16,r=1<arguments.length?arguments[1]:0.75,c=[];c.length=p;var k=0,ca=this;this.clear=function(){k=0;c=[];c.length=p};this.clone=
function(){var c=new h;c.putAll(this);return c};this.containsKey=function(f){var b=a(f),b=c[b];if(void 0===b)return!1;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return!0;return!1};this.containsValue=function(f){for(var a=0;a<c.length;++a){var b=c[a];if(void 0!==b)for(var d=0;d<b.length;++d)if(n(b[d].value,f))return!0}return!1};this.entrySet=function(){return new f(function(c){return new l(c)},function(c){return c instanceof l&&c._isIn(ca)},function(c){return ca.remove(c.getKey())})};this.get=function(f){var b=
a(f),b=c[b];if(void 0===b)return null;for(var d=0;d<b.length;++d)if(n(b[d].key,f))return b[d].value;return null};this.isEmpty=function(){return 0===k};this.keySet=function(){return new f(function(c){return c.key},function(c){return ca.containsKey(c)},function(c){return ca.remove(c)})};this.values=function(){return new f(function(c){return c.value},function(c){return ca.containsValue(c)},function(c){return ca.removeByValue(c)})};this.put=function(f,d){var l=a(f),p=c[l];if(void 0===p)return++k,c[l]=
[{key:f,value:d}],b(),null;for(l=0;l<p.length;++l)if(n(p[l].key,f)){var r=p[l].value;p[l].value=d;return r}++k;p.push({key:f,value:d});b();return null};this.putAll=function(c){for(c=c.entrySet().iterator();c.hasNext();){var f=c.next();this.put(f.getKey(),f.getValue())}};this.remove=function(f){var b=a(f),d=c[b];if(void 0===d)return null;for(var l=0;l<d.length;++l)if(n(d[l].key,f))return--k,f=d[l].value,d[l].removed=!0,1<d.length?d.splice(l,1):c[b]=void 0,f;return null};this.removeByValue=function(f){var a,
b,d,l;for(a in c)if(c.hasOwnProperty(a))for(b=0,d=c[a].length;b<d;b++)if(l=c[a][b],l.value===f)return c[a].splice(b,1),!0;return!1};this.size=function(){return k}}var m=k.virtHashCode,n=k.virtEquals;return h}},{}],12:[function(D,x,Q){x.exports=function(k,h){function m(b,d){b===h&&(b="");this.name=b;d===h&&(d=0);this.size=d;this.glyph=!1;this.descent=this.ascent=0;this.leading=1.2*d;var f=b.indexOf(" Italic Bold");-1!==f&&(b=b.substring(0,f));this.style="normal";f=b.indexOf(" Italic");-1!==f&&(b=b.substring(0,
f),this.style="italic");this.weight="normal";f=b.indexOf(" Bold");-1!==f&&(b=b.substring(0,f),this.weight="bold");this.family="sans-serif";if(b!==h)switch(b){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.family=b;break;default:this.family='"'+b+'", sans-serif'}var f=this.size/250,l=n.createElement("canvas");l.width=500;l.height=500;l.style.opacity=0;var p=this.getCSSDefinition("250px","normal"),r=l.getContext("2d");r.font=p;l.width=r.measureText("dbflkhyjqpg").width;
r.font=p;p=n.createElement("div");p.style.position="absolute";p.style.opacity=0;p.style.fontFamily='"'+this.name+'"';p.style.fontSize="250px";p.innerHTML="dbflkhyjqpg<br/>dbflkhyjqpg";n.body.appendChild(p);var c=l.width,k=l.height,l=k/2;r.fillStyle="white";r.fillRect(0,0,c,k);r.fillStyle="black";r.fillText("dbflkhyjqpg",0,l);for(var k=r.getImageData(0,0,c,k).data,m=0,G=4*c,A=k.length;++m<A&&255===k[m];)a();c=Math.round(m/G);for(m=A-1;0<--m&&255===k[m];)a();k=Math.round(m/G);this.ascent=f*(l-c);this.descent=
f*(k-l);n.defaultView.getComputedStyle&&(l=n.defaultView.getComputedStyle(p,null).getPropertyValue("height"),l=f*l.replace("px",""),l>=2*this.size&&(this.leading=Math.round(l/2)));n.body.removeChild(p);f=this.caching?r:void 0;this.context2d=f;this.css=this.getCSSDefinition();this.context2d&&(this.context2d.font=this.css)}var n=k.Browser.document,a=k.noop;m.prototype.caching=!0;m.prototype.getCSSDefinition=function(a,d){a===h&&(a=this.size+"px");d===h&&(d=this.leading+"px");return[this.style,"normal",
this.weight,a+"/"+d,this.family].join(" ")};m.prototype.measureTextWidth=function(a){return this.context2d.measureText(a).width};m.prototype.measureTextWidthFallback=function(a){var d=n.createElement("canvas").getContext("2d");d.font=this.css;return d.measureText(a).width};m.PFontCache={length:0};m.get=function(a,d){d=(10*d+0.5|0)/10;var f=m.PFontCache,l=a+"/"+d;if(!f[l]){f[l]=new m(a,d);f.length++;if(50===f.length){m.prototype.measureTextWidth=m.prototype.measureTextWidthFallback;m.prototype.caching=
!1;for(var p in f)"length"!==p&&(f[p].context2d=null);return new m(a,d)}if(400===f.length)return m.PFontCache={},m.get=m.getFallback,new m(a,d)}return f[l]};m.getFallback=function(a,d){return new m(a,d)};m.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};m.preloading={template:{},initialized:!1,initialize:function(){var a=n.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+
function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";n.head.appendChild(a);a=n.createElement("span");a.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.template=a;this.initialized=!0},getElementWidth:function(a){return n.defaultView.getComputedStyle(a,"").getPropertyValue("width")},timeAttempted:0,pending:function(a){this.initialized||this.initialize();for(var d,f,l=this.getElementWidth(this.template),p=0;p<this.fontList.length;p++){d=this.fontList[p];f=this.getElementWidth(d);if(4E3>this.timeAttempted&&f===l)return this.timeAttempted+=a,!0;n.body.removeChild(d);this.fontList.splice(p--,1);this.timeAttempted=
0}return 0===this.fontList.length?!1:!0},fontList:[],addedList:{},add:function(a){this.initialized||this.initialize();var d="object"===typeof a?a.fontFace:a;a="object"===typeof a?a.url:a;if(!this.addedList[d]){var f=n.createElement("style");f.setAttribute("type","text/css");f.innerHTML="@font-face{\n  font-family: '"+d+"';\n  src:  url('"+a+"');\n}\n";n.head.appendChild(f);this.addedList[d]=!0;a=n.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily=
'"'+d+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";n.body.appendChild(a);this.fontList.push(a)}}};return m}},{}],13:[function(D,x,Q){x.exports=function(k,h){var m=k.p,n=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof n?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};n.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],
a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},
invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var d,f;a instanceof PVector?(d=a.x,f=a.y,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2],b[1]=this.elements[3]*d+this.elements[4]*f+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2],b.y=this.elements[3]*d+this.elements[4]*f+this.elements[5],b.z=0);return b},multX:function(a,
b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>PConstants.MIN_INT){var b=
this.elements[0],d=this.elements[1],f=this.elements[2],l=this.elements[3],p=this.elements[4],r=this.elements[5];this.elements[0]=p/a;this.elements[3]=-l/a;this.elements[1]=-d/a;this.elements[4]=b/a;this.elements[2]=(d*r-p*f)/a;this.elements[5]=(l*f-b*r)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof
n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],d=0,f=0;2>f;f++)for(var l=0;3>l;l++,d++)b[d]+=this.elements[3*f+0]*a[l+0]+this.elements[3*f+1]*a[l+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&
arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var d=this.elements[0],f=this.elements[1];this.elements[0]=
b*d+a*f;this.elements[1]=-a*d+b*f;d=this.elements[3];f=this.elements[4];this.elements[3]=b*d+a*f;this.elements[4]=-a*d+b*f},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+"\n"+m.nfs(this.elements[3],a,4)+" "+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+"\n\n";m.println(a)}};return n}},{}],14:[function(D,
x,Q){x.exports=function(k,h){var m=k.p,n=function(){this.reset()};n.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof n?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new n;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},
translate:function(a,b,d){d===h&&(d=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+d*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+d*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+d*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+d*this.elements[14]},transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=
a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var d,f,l,p;a instanceof PVector?(d=a.x,f=a.y,l=a.z,p=1,b||(b=new PVector)):a instanceof Array&&(d=a[0],f=a[1],l=a[2],p=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof
Array&&(3===b.length?(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3]*p,b[1]=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7]*p,b[2]=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+
this.elements[11]*p,b[3]=this.elements[12]*d+this.elements[13]*f+this.elements[14]*l+this.elements[15]*p));b instanceof PVector&&(b.x=this.elements[0]*d+this.elements[1]*f+this.elements[2]*l+this.elements[3],b.y=this.elements[4]*d+this.elements[5]*f+this.elements[6]*l+this.elements[7],b.z=this.elements[8]*d+this.elements[9]*f+this.elements[10]*l+this.elements[11]);return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):
1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[l+0]*a[4*f+0]+this.elements[l+4]*a[4*f+1]+this.elements[l+8]*a[4*f+2]+this.elements[l+12]*a[4*f+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&arguments[0]instanceof n?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&
(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=0,f=0;4>f;f++)for(var l=0;4>l;l++,d++)b[d]+=this.elements[4*f+0]*a[l+0]+this.elements[4*f+1]*a[l+4]+this.elements[4*f+2]*a[l+8]+this.elements[4*f+3]*a[l+12];this.elements=b.slice()},rotate:function(a,b,d,f){if(d){var l=Math.cos(a);a=Math.sin(a);var p=1-l;this.apply(p*b*b+l,p*b*d-a*f,p*b*f+a*d,0,p*b*d+a*f,p*d*d+l,p*d*f-a*b,0,p*b*f-a*d,p*d*f+a*b,p*f*f+l,0,0,0,0,1)}else this.rotateZ(a)},invApply:function(){inverseCopy===h&&(inverseCopy=new n);
var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.invert())return!1;this.preApply(inverseCopy);return!0},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,
b,d){!a||b||d?a&&(b&&!d)&&(d=1):b=d=a;a&&(b&&d)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=d,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=d,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=d,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=d)},skewX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,
0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,d,f){return d?f?this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]*f:this.elements[0]*a+this.elements[1]*b+this.elements[2]*d+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},multY:function(a,b,d,f){return d?f?this.elements[4]*a+this.elements[5]*b+this.elements[6]*d+this.elements[7]*f:this.elements[4]*a+this.elements[5]*b+this.elements[6]*
d+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,d,f){return f?this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]*f:this.elements[8]*a+this.elements[9]*b+this.elements[10]*d+this.elements[11]},multW:function(a,b,d,f){return f?this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]*f:this.elements[12]*a+this.elements[13]*b+this.elements[14]*d+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-
this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],d=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],f=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],l=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],p=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],r=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],c=this.elements[8]*this.elements[14]-this.elements[10]*
this.elements[12],h=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],m=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],x=a*n-b*m+d*k+f*h-l*c+p*r;if(1E-9>=Math.abs(x))return!1;var v=[];v[0]=+this.elements[5]*n-this.elements[6]*m+this.elements[7]*k;v[4]=-this.elements[4]*n+this.elements[6]*h-this.elements[7]*c;
v[8]=+this.elements[4]*m-this.elements[5]*h+this.elements[7]*r;v[12]=-this.elements[4]*k+this.elements[5]*c-this.elements[6]*r;v[1]=-this.elements[1]*n+this.elements[2]*m-this.elements[3]*k;v[5]=+this.elements[0]*n-this.elements[2]*h+this.elements[3]*c;v[9]=-this.elements[0]*m+this.elements[1]*h-this.elements[3]*r;v[13]=+this.elements[0]*k-this.elements[1]*c+this.elements[2]*r;v[2]=+this.elements[13]*p-this.elements[14]*l+this.elements[15]*f;v[6]=-this.elements[12]*p+this.elements[14]*d-this.elements[15]*
b;v[10]=+this.elements[12]*l-this.elements[13]*d+this.elements[15]*a;v[14]=-this.elements[12]*f+this.elements[13]*b-this.elements[14]*a;v[3]=-this.elements[9]*p+this.elements[10]*l-this.elements[11]*f;v[7]=+this.elements[8]*p-this.elements[10]*d+this.elements[11]*b;v[11]=-this.elements[8]*l+this.elements[9]*d-this.elements[11]*a;v[15]=+this.elements[8]*f-this.elements[9]*b+this.elements[10]*a;a=1/x;v[0]*=a;v[1]*=a;v[2]*=a;v[3]*=a;v[4]*=a;v[5]*=a;v[6]*=a;v[7]*=a;v[8]*=a;v[9]*=a;v[10]*=a;v[11]*=a;v[12]*=
a;v[13]*=a;v[14]*=a;v[15]*=a;this.elements=v.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=printMatrixHelper(this.elements),a=""+m.nfs(this.elements[0],a,4)+" "+m.nfs(this.elements[1],a,4)+" "+m.nfs(this.elements[2],a,4)+" "+m.nfs(this.elements[3],a,4)+"\n"+m.nfs(this.elements[4],a,4)+" "+m.nfs(this.elements[5],a,4)+" "+m.nfs(this.elements[6],a,4)+" "+m.nfs(this.elements[7],a,4)+"\n"+m.nfs(this.elements[8],
a,4)+" "+m.nfs(this.elements[9],a,4)+" "+m.nfs(this.elements[10],a,4)+" "+m.nfs(this.elements[11],a,4)+"\n"+m.nfs(this.elements[12],a,4)+" "+m.nfs(this.elements[13],a,4)+" "+m.nfs(this.elements[14],a,4)+" "+m.nfs(this.elements[15],a,4)+"\n\n";m.println(a)},invTranslate:function(a,b,d){this.preApply(1,0,0,-a,0,1,0,-b,0,0,1,-d,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);
this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,d){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/d,0,0,0,0,1])}};return n}},{}],15:[function(D,x,Q){x.exports=function(k){var h=k.PConstants,m=k.PMatrix2D,n=k.PMatrix3D;k=function(a){this.family=a||h.GROUP;this.style=this.visible=!0;this.children=[];this.nameTable=[];this.params=[];this.name="";this.parent=this.height=this.width=
this.close=this.kind=this.matrix=this.image=null};k.prototype={isVisible:function(){return this.visible},setVisible:function(a){this.visible=a},disableStyle:function(){this.style=!1;for(var a=0,b=this.children.length;a<b;a++)this.children[a].disableStyle()},enableStyle:function(){this.style=!0;for(var a=0,b=this.children.length;a<b;a++)this.children[a].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(a){this.name=
a},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.pre(a),this.drawImpl(a),this.post(a))},drawImpl:function(a){this.family===h.GROUP?this.drawGroup(a):this.family===h.PRIMITIVE?this.drawPrimitive(a):this.family===h.GEOMETRY?this.drawGeometry(a):this.family===h.PATH&&this.drawPath(a)},drawPath:function(a){var b,d;if(0!==this.vertices.length){a.beginShape();if(0===this.vertexCodes.length)if(2===this.vertices[0].length)for(b=
0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1]);else for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b][0],this.vertices[b][1],this.vertices[b][2]);else{var f=0;if(2===this.vertices[0].length)for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f].moveTo),a.breakShape=!1,f++):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+
0][1],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+2][0],this.vertices[f+2][1]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0);else for(b=0,d=this.vertexCodes.length;b<d;b++)this.vertexCodes[b]===h.VERTEX?(a.vertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),!0===this.vertices[f].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.vertices[f].moveTo&&(vertArray[vertArray.length-
1].moveTo=!1),a.breakShape=!1):this.vertexCodes[b]===h.BEZIER_VERTEX?(a.bezierVertex(this.vertices[f+0][0],this.vertices[f+0][1],this.vertices[f+0][2],this.vertices[f+1][0],this.vertices[f+1][1],this.vertices[f+1][2],this.vertices[f+2][0],this.vertices[f+2][1],this.vertices[f+2][2]),f+=3):this.vertexCodes[b]===h.CURVE_VERTEX?(a.curveVertex(this.vertices[f][0],this.vertices[f][1],this.vertices[f][2]),f++):this.vertexCodes[b]===h.BREAK&&(a.breakShape=!0)}a.endShape(this.close?h.CLOSE:h.OPEN)}},drawGeometry:function(a){var b,
d;a.beginShape(this.kind);if(this.style)for(b=0,d=this.vertices.length;b<d;b++)a.vertex(this.vertices[b]);else for(b=0,d=this.vertices.length;b<d;b++){var f=this.vertices[b];0===f[2]?a.vertex(f[0],f[1]):a.vertex(f[0],f[1],f[2])}a.endShape()},drawGroup:function(a){for(var b=0,d=this.children.length;b<d;b++)this.children[b].draw(a)},drawPrimitive:function(a){if(this.kind===h.POINT)a.point(this.params[0],this.params[1]);else if(this.kind===h.LINE)4===this.params.length?a.line(this.params[0],this.params[1],
this.params[2],this.params[3]):a.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.TRIANGLE)a.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);else if(this.kind===h.QUAD)a.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7]);else if(this.kind===h.RECT)if(null!==this.image){var b=imageModeConvert;a.imageMode(h.CORNER);
a.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);imageModeConvert=b}else b=a.curRectMode,a.rectMode(h.CORNER),a.rect(this.params[0],this.params[1],this.params[2],this.params[3]),a.curRectMode=b;else this.kind===h.ELLIPSE?(b=a.curEllipseMode,a.ellipseMode(h.CORNER),a.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),a.curEllipseMode=b):this.kind===h.ARC?(b=curEllipseMode,a.ellipseMode(h.CORNER),a.arc(this.params[0],this.params[1],this.params[2],this.params[3],
this.params[4],this.params[5]),curEllipseMode=b):this.kind===h.BOX?1===this.params.length?a.box(this.params[0]):a.box(this.params[0],this.params[1],this.params[2]):this.kind===h.SPHERE&&a.sphere(this.params[0])},pre:function(a){this.matrix&&(a.pushMatrix(),a.transform(this.matrix));this.style&&(a.pushStyle(),this.styles(a))},post:function(a){this.matrix&&a.popMatrix();this.style&&a.popStyle()},styles:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),
a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,d;if("number"===typeof a)return this.children[a];var f;if(""===a||this.name===a)return this;if(0<this.nameTable.length){b=0;for(d=this.nameTable.length;b<d||f;b++)if(this.nameTable[b].getName===a){f=this.nameTable[b];break}if(f)return f}b=0;for(d=this.children.length;b<d;b++)if(f=this.children[b].getChild(a))return f;return null},getChildCount:function(){return this.children.length},
addChild:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.addName(a.getName(),a)},addName:function(a,b){null!==this.parent?this.parent.addName(a,b):this.nameTable.push([a,b])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(a){null===this.matrix?this.matrix=2===a?new m:new n:3===a&&this.matrix instanceof m&&(this.matrix=
new n)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],
arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(a){1===arguments.length?this.applyMatrix(a.elements[0],a.elements[1],0,a.elements[2],a.elements[3],a.elements[4],0,a.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}};return k}},{}],16:[function(D,x,Q){x.exports=function(k){var h=k.CommonFunctions,m=k.PConstants,n=k.PShape,a=k.XMLElement,b=k.colors,d=function(){n.call(this);if(1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,
this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillName=this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&
(this.element=new a(!0,arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=m.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=m.SQUARE,this.strokeJoin=m.MITER,this.strokeName=this.strokeGradientPaint=this.strokeGradient="",this.strokeOpacity=1,this.fill=!0,this.fillColor=m.ALPHA_MASK,this.fillGradientPaint=this.fillGradient=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),
this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,
this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity));this.name=this.element.getStringAttribute("id");this.visible="none"!==this.element.getStringAttribute("display","inline");var f=this.element.getAttribute("transform");f&&(this.matrix=this.parseMatrix(f));f=this.element.getStringAttribute("viewBox");null!==f&&(f=f.split(" "),this.width=f[2],this.height=f[3]);var f=this.element.getStringAttribute("width"),
b=this.element.getStringAttribute("height");if(null!==f)this.width=this.parseUnitSize(f),this.height=this.parseUnitSize(b);else if(0===this.width||0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the <svg> tag of this file.";this.parseColors(this.element);this.parseChildren(this.element)};d.prototype=new n;d.prototype.parseMatrix=function(){function f(f){var a=[];f.replace(/\((.*?)\)/,function(){return function(f,c){a=c.replace(/,+/g," ").split(/\s+/)}}());
return a}return function(a){this.checkMatrix(2);var b=[];a.replace(/\s*(\w+)\((.*?)\)/g,function(c){b.push(h.trim(c))});if(0===b.length)return null;a=0;for(var d=b.length;a<d;a++){var c=f(b[a]);if(-1!==b[a].indexOf("matrix"))this.matrix.set(c[0],c[2],c[4],c[1],c[3],c[5]);else if(-1!==b[a].indexOf("translate"))this.matrix.translate(c[0],2===c.length?c[1]:0);else if(-1!==b[a].indexOf("scale"))this.matrix.scale(c[0],2===c.length?c[1]:c[0]);else if(-1!==b[a].indexOf("rotate")){var k=c[0];1===c.length?
this.matrix.rotate(h.radians(k)):3===c.length&&(this.matrix.translate(c[1],c[2]),this.matrix.rotate(h.radians(c[0])),this.matrix.translate(-c[1],-c[2]))}else-1!==b[a].indexOf("skewX")?this.matrix.skewX(parseFloat(c[0])):-1!==b[a].indexOf("skewY")?this.matrix.skewY(c[0]):-1!==b[a].indexOf("shearX")?this.matrix.shearX(c[0]):-1!==b[a].indexOf("shearY")&&this.matrix.shearY(c[0])}return this.matrix}}();d.prototype.parseChildren=function(f){f=f.getChildren();var a=new n,b,d;b=0;for(d=f.length;b<d;b++){var c=
this.parseChild(f[b]);c&&a.addChild(c)}b=0;for(d=a.children.length;b<d;b++)this.children.push(a.children[b])};d.prototype.getName=function(){return this.name};d.prototype.parseChild=function(f){var a=f.getName(),b;"g"===a?b=new d(this,f):"defs"===a?b=new d(this,f):"line"===a?(b=new d(this,f),b.parseLine()):"circle"===a?(b=new d(this,f),b.parseEllipse(!0)):"ellipse"===a?(b=new d(this,f),b.parseEllipse(!1)):"rect"===a?(b=new d(this,f),b.parseRect()):"polygon"===a?(b=new d(this,f),b.parsePoly(!0)):"polyline"===
a?(b=new d(this,f),b.parsePoly(!1)):"path"===a?(b=new d(this,f),b.parsePath()):"radialGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===a?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===a?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===a?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===a&&unimplemented("PShapeSVG.prototype.parseChild, name = mask");return b};d.prototype.parsePath=
function(){this.family=m.PATH;this.kind=0;var f=h.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(null!==f)for(var f=f.split(""),a=0,b=0,d=0,c=0,k=c=d=0,n=0,G=0,A=0,x=A=c=G=d=0,v=0,ga="",q=[],D=!1,M,nc,u;x<f.length;)if(v=f[x].charCodeAt(0),65<=v&&90>=v||97<=v&&122>=v){u=x;x++;if(x<f.length)for(q=[],v=f[x].charCodeAt(0);!(65<=v&&90>=v||97<=v&&100>=v||102<=v&&122>=v)&&!1===D;)32===v?""!==ga&&(q.push(parseFloat(ga)),ga=""):45===v?101===f[x-1].charCodeAt(0)?ga+=f[x].toString():(""!==
ga&&q.push(parseFloat(ga)),ga=f[x].toString()):ga+=f[x].toString(),x++,x===f.length?D=!0:v=f[x].charCodeAt(0);""!==ga&&(q.push(parseFloat(ga)),ga="");nc=f[u];v=nc.charCodeAt(0);if(77===v){if(2<=q.length&&0===q.length%2&&(a=q[0],b=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(109===v){if(2<=q.length&&0===q.length%2&&(a+=q[0],b+=q[1],this.parsePathMoveto(a,b),2<q.length))for(u=2,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,
b)}else if(76===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a=q[u],b=q[u+1],this.parsePathLineto(a,b)}else if(108===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)a+=q[u],b+=q[u+1],this.parsePathLineto(a,b)}else if(72===v)for(u=0,v=q.length;u<v;u++)a=q[u],this.parsePathLineto(a,b);else if(104===v)for(u=0,v=q.length;u<v;u++)a+=q[u],this.parsePathLineto(a,b);else if(86===v)for(u=0,v=q.length;u<v;u++)b=q[u],this.parsePathLineto(a,b);else if(118===v)for(u=0,v=q.length;u<
v;u++)b+=q[u],this.parsePathLineto(a,b);else if(67===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=q[u],k=q[u+1],c=q[u+2],n=q[u+3],G=q[u+4],A=q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(99===v){if(6<=q.length&&0===q.length%6)for(u=0,v=q.length;u<v;u+=6)d=a+q[u],k=b+q[u+1],c=a+q[u+2],n=b+q[u+3],G=a+q[u+4],A=b+q[u+5],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(83===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?
(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=q[u],n=q[u+1],G=q[u+2],A=q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(115===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)"c"===M.toLowerCase()||"s"===M.toLowerCase()?(d=this.vertices[this.vertices.length-
2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),k=A+(A-G)):(d=this.vertices[this.vertices.length-1][0],k=this.vertices[this.vertices.length-1][1]),c=a+q[u],n=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathCurveto(d,k,c,n,G,A),a=G,b=A}else if(81===v){if(4<=q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=q[u],c=q[u+1],G=q[u+2],A=q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(113===v){if(4<=
q.length&&0===q.length%4)for(u=0,v=q.length;u<v;u+=4)d=a+q[u],c=b+q[u+1],G=a+q[u+2],A=b+q[u+3],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(84===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=q[u],A=q[u+1],this.parsePathQuadto(a,b,
d,c,G,A),a=G,b=A}else if(116===v){if(2<=q.length&&0===q.length%2)for(u=0,v=q.length;u<v;u+=2)"q"===M.toLowerCase()||"t"===M.toLowerCase()?(d=this.vertices[this.vertices.length-2][0],G=this.vertices[this.vertices.length-2][1],c=this.vertices[this.vertices.length-1][0],A=this.vertices[this.vertices.length-1][1],d=c+(c-d),c=A+(A-G)):(d=a,c=b),G=a+q[u],A=b+q[u+1],this.parsePathQuadto(a,b,d,c,G,A),a=G,b=A}else if(90===v||122===v)this.close=!0;M=nc.toString()}else x++};d.prototype.parsePathQuadto=function(a,
b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a+2*(d-a)/3,b+2*(r-b)/3),this.parsePathVertex(c+2*(d-c)/3,h+2*(r-h)/3),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathCurveto=function(a,b,d,r,c,h){if(0<this.vertices.length)this.parsePathCode(m.BEZIER_VERTEX),this.parsePathVertex(a,b),this.parsePathVertex(d,r),this.parsePathVertex(c,h);else throw"Path must start with M/m";};d.prototype.parsePathLineto=function(a,b){if(0<
this.vertices.length)this.parsePathCode(m.VERTEX),this.parsePathVertex(a,b),this.vertices[this.vertices.length-1].moveTo=!1;else throw"Path must start with M/m";};d.prototype.parsePathMoveto=function(a,b){0<this.vertices.length&&this.parsePathCode(m.BREAK);this.parsePathCode(m.VERTEX);this.parsePathVertex(a,b);this.vertices[this.vertices.length-1].moveTo=!0};d.prototype.parsePathVertex=function(a,b){var d=[];d[0]=a;d[1]=b;this.vertices.push(d)};d.prototype.parsePathCode=function(a){this.vertexCodes.push(a)};
d.prototype.parsePoly=function(a){this.family=m.PATH;this.close=a;a=h.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(null!==a)if(a=a.split(" "),0===a.length%2)for(var b=0,d=a.length;b<d;b++){var r=[];r[0]=a[b];r[1]=a[++b];this.vertices.push(r)}else throw"Error parsing polygon points: odd number of coordinates provided";};d.prototype.parseRect=function(){this.kind=m.RECT;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=
this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(0>this.params[2]||0>this.params[3])throw"svg error: negative width or height found while parsing <rect>";};d.prototype.parseEllipse=function(a){this.kind=m.ELLIPSE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var b;if(a){if(a=b=this.element.getFloatAttribute("r"),
0>a)throw"svg error: negative radius found while parsing <circle>";}else if(a=this.element.getFloatAttribute("rx"),b=this.element.getFloatAttribute("ry"),0>a||0>b)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";this.params[0]-=a;this.params[1]-=b;this.params[2]=2*a;this.params[3]=2*b};d.prototype.parseLine=function(){this.kind=m.LINE;this.family=m.PRIMITIVE;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");
this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};d.prototype.parseColors=function(a){a.hasAttribute("opacity")&&this.setOpacity(a.getAttribute("opacity"));a.hasAttribute("stroke")&&this.setStroke(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.setStrokeWeight(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.setStrokeCap(a.getStringAttribute("stroke-linecap"));
a.hasAttribute("fill")&&this.setFill(a.getStringAttribute("fill"));if(a.hasAttribute("style")){a=a.getStringAttribute("style").toString().split(";");for(var b=0,d=a.length;b<d;b++){var r=h.trim(a[b].split(":"));"fill"===r[0]?this.setFill(r[1]):"fill-opacity"===r[0]?this.setFillOpacity(r[1]):"stroke"===r[0]?this.setStroke(r[1]):"stroke-width"===r[0]?this.setStrokeWeight(r[1]):"stroke-linecap"===r[0]?this.setStrokeCap(r[1]):"stroke-linejoin"===r[0]?this.setStrokeJoin(r[1]):"stroke-opacity"===r[0]?this.setStrokeOpacity(r[1]):
"opacity"===r[0]&&this.setOpacity(r[1])}}};d.prototype.setFillOpacity=function(a){this.fillOpacity=parseFloat(a);this.fillColor=255*this.fillOpacity<<24|this.fillColor&16777215};d.prototype.setFill=function(a){var d=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=d|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?
this.fillName=a.substring(5,a.length-1):b[a]&&(this.fill=!0,this.fillColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setOpacity=function(a){this.strokeColor=255*parseFloat(a)<<24|this.strokeColor&16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};d.prototype.setStroke=function(a){var d=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=d|parseInt(a.substring(1),
16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=d|this.parseRGB(a)):0===a.indexOf("url(#")?this.strokeName=a.substring(5,a.length-1):b[a]&&(this.stroke=!0,this.strokeColor=d|parseInt(b[a].substring(1),16)&16777215)};d.prototype.setStrokeWeight=function(a){this.strokeWeight=this.parseUnitSize(a)};d.prototype.setStrokeJoin=function(a){"miter"===a?this.strokeJoin=m.MITER:"round"===a?this.strokeJoin=m.ROUND:"bevel"===a&&(this.strokeJoin=m.BEVEL)};d.prototype.setStrokeCap=function(a){"butt"===
a?this.strokeCap=m.SQUARE:"round"===a?this.strokeCap=m.ROUND:"square"===a&&(this.strokeCap=m.PROJECT)};d.prototype.setStrokeOpacity=function(a){this.strokeOpacity=parseFloat(a);this.strokeColor=255*this.strokeOpacity<<24|this.strokeColor&16777215};d.prototype.parseRGB=function(a){a=a.substring(a.indexOf("(")+1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};d.prototype.parseUnitSize=function(a){var b=a.length-2;return 0>b?a:a.indexOf("pt")===b?1.25*parseFloat(a.substring(0,b)):a.indexOf("pc")===
b?15*parseFloat(a.substring(0,b)):a.indexOf("mm")===b?3.543307*parseFloat(a.substring(0,b)):a.indexOf("cm")===b?35.43307*parseFloat(a.substring(0,b)):a.indexOf("in")===b?90*parseFloat(a.substring(0,b)):a.indexOf("px")===b?parseFloat(a.substring(0,b)):parseFloat(a)};return d}},{}],17:[function(D,x,Q){x.exports=function(k,h){function m(a,b,l){this.x=a||0;this.y=b||0;this.z=l||0}function n(a){return function(b,l){var p=b.get();p[a](l);return p}}var a=k.PConstants;m.fromAngle=function(a,b){if(b===h||
null===b)b=new m;b.x=Math.cos(a);b.y=Math.sin(a);return b};m.random2D=function(b){return m.fromAngle(Math.random()*a.TWO_PI,b)};m.random3D=function(b){var f=Math.random()*a.TWO_PI,l=2*Math.random()-1,p=Math.sqrt(1-l*l),r=p*Math.cos(f),f=p*Math.sin(f);b===h||null===b?b=new m(r,f,l):b.set(r,f,l);return b};m.dist=function(a,b){return a.dist(b)};m.dot=function(a,b){return a.dot(b)};m.cross=function(a,b){return a.cross(b)};m.sub=function(a,b){return new m(a.x-b.x,a.y-b.y,a.z-b.z)};m.angleBetween=function(a,
b){return Math.acos(a.dot(b)/(a.mag()*b.mag()))};m.lerp=function(a,b,l){a=new m(a.x,a.y,a.z);a.lerp(b,l);return a};m.prototype={set:function(a,b,l){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||0,a.z||a[2]||0):(this.x=a,this.y=b,this.z=l)},get:function(){return new m(this.x,this.y,this.z)},mag:function(){var a=this.x,b=this.y,l=this.z;return Math.sqrt(a*a+b*b+l*l)},magSq:function(){var a=this.x,b=this.y,l=this.z;return a*a+b*b+l*l},setMag:function(a,b){if(b===h)b=a,this.normalize(),this.mult(b);
else return a.normalize(),a.mult(b),a},add:function(a,b,l){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):(this.x+=a,this.y+=b,this.z+=l)},sub:function(a,b,l){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):(this.x-=a,this.y-=b,this.z-=l)},mult:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},div:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var b=
this.x,l=Math.cos(a);a=Math.sin(a);this.x=l*this.x-a*this.y;this.y=a*b+l*this.y},dist:function(a){var b=this.x-a.x,l=this.y-a.y;a=this.z-a.z;return Math.sqrt(b*b+l*l+a*a)},dot:function(a,b,l){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*b+this.z*l},cross:function(a){var b=this.x,l=this.y,p=this.z;return new m(l*a.z-a.y*p,p*a.x-a.z*b,b*a.y-a.x*l)},lerp:function(a,b,l,p){var r,c;2===arguments.length?(p=b,r=a.x,c=a.y,l=a.z):(r=a,c=b);this.x+=(r-this.x)*p;this.y+=(c-this.y)*
p;this.z+=(l-this.z)*p},normalize:function(){var a=this.mag();0<a&&this.div(a)},limit:function(a){this.mag()>a&&(this.normalize(),this.mult(a))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};for(var b in m.prototype)m.prototype.hasOwnProperty(b)&&!m.hasOwnProperty(b)&&(m[b]=n(b));return m}},{}],18:[function(D,x,Q){x.exports=function(){var k=
function(h,k,n,a,b){this.fullName=h||"";this.name=k||"";this.namespace=n||"";this.value=a;this.type=b};k.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(h){this.value=h}};return k}},{}],19:[function(D,x,Q){x.exports=function(k,h){var m=k.Browser,n=m.ajax,a=m.window.DOMParser,b=k.XMLAttribute,d=function(a,b,d,r){this.attributes=
[];this.children=[];this.name=this.fullName=null;this.namespace="";this.parent=this.content=null;this.systemID=this.lineNr="";this.type="ELEMENT";a&&("string"===typeof a?b===h&&-1<a.indexOf("<")?this.parse(a):(this.fullName=a,this.namespace=b,this.systemId=d,this.lineNr=r):this.parse(b))};d.prototype={parse:function(b){var d;try{var p=b.substring(b.length-4);if(".xml"===p||".svg"===p)b=n(b);d=(new a).parseFromString(b,"text/xml");var r=d.documentElement;if(r)this.parseChildrenRecursive(null,r);else throw"Error loading document";
return this}catch(c){throw c;}},parseChildrenRecursive:function(a,l){var p,r,c,h;a?(p=new d(l.nodeName),p.parent=a):(this.fullName=l.localName,this.name=l.nodeName,p=this);if(3===l.nodeType&&""!==l.textContent)return this.createPCDataElement(l.textContent);if(4===l.nodeType)return this.createCDataElement(l.textContent);if(l.attributes)for(c=0,h=l.attributes.length;c<h;c++)r=l.attributes[c],r=new b(r.getname,r.nodeName,r.namespaceURI,r.nodeValue,r.nodeType),p.attributes.push(r);if(l.childNodes)for(c=
0,h=l.childNodes.length;c<h;c++)r=p.parseChildrenRecursive(p,l.childNodes[c]),null!==r&&p.children.push(r);return p},createElement:function(a,b,p,r){return p===h?new d(a,b):new d(a,b,p,r)},createPCDataElement:function(a,b){if(""===a.replace(/^\s+$/g,""))return null;var p=new d;p.type="TEXT";p.content=a;return p},createCDataElement:function(a){var b=this.createPCDataElement(a);if(null===b)return null;b.type="CDATA";var d={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},r;for(r in d)Object.hasOwnProperty(d,
r)||(a=a.replace(RegExp(r,"g"),d[r]));b.cdata=a;return b},hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},equals:function(a){if(!(a instanceof d))return!1;var b,p;if(this.fullName!==a.fullName||this.attributes.length!==a.getAttributeCount()||this.attributes.length!==a.attributes.length)return!1;var r,c;b=0;for(p=this.attributes.length;b<p;b++)if(r=this.attributes[b].getName(),
c=this.attributes[b].getNamespace(),r=a.findAttribute(r,c),null===r||this.attributes[b].getValue()!==r.getValue()||this.attributes[b].getType()!==r.getType())return!1;if(this.children.length!==a.getChildCount())return!1;if(0<this.children.length){b=0;for(p=this.children.length;b<p;b++)if(r=this.getChild(b),c=a.getChild(b),!r.equals(c))return!1;return!0}return this.content===a.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content;var a=this.children;return 1!==
a.length||"TEXT"!==a[0].type&&"CDATA"!==a[0].type?null:a[0].content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():arguments[1];if(1===arguments.length)return(a=this.findAttribute(arguments[0]))?a.getValue():null;if(3===arguments.length)return(a=this.findAttribute(arguments[0],arguments[1]))?a.getValue():arguments[2]},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],
arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(a){return this.getStringAttribute(a)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(a){return this.getFloatAttribute(a)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):
2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(a){return this.getIntAttribute(a)},hasChildren:function(){return 0<this.children.length},addChild:function(a){null!==a&&(a.parent=this,this.children.push(a))},insertChild:function(a,b){if(a){if(null===a.getLocalName()&&!this.hasChildren()){var d=this.children[this.children.length-1];if(null===d.getLocalName()){d.setContent(d.getContent()+a.getContent());return}}a.parent=
this;this.children.splice(b,0,a)}},getChild:function(a){if("number"===typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.getChildRecursive(a.split("/"),0);for(var b,d,r=0,c=this.getChildCount();r<c;r++)if(b=this.getChild(r),d=b.getName(),null!==d&&d===a)return b;return null},getChildren:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.getChildrenRecursive(arguments[0].split("/"),
0);for(var a=[],b,d,r=0,c=this.getChildCount();r<c;r++)b=this.getChild(r),d=b.getName(),null!==d&&d===arguments[0]&&a.push(b);return a}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(a,b){if(b===a.length)return this;for(var d,r,c=a[b],h=0,k=this.getChildCount();h<k;h++)if(d=this.getChild(h),r=d.getName(),null!==r&&r===c)return d.getChildRecursive(a,b+1);return null},getChildrenRecursive:function(a,b){if(b===a.length-1)return this.getChildren(a[b]);
for(var d=this.getChildren(a[b]),r=[],c=0;c<d.length;c++)r=r.concat(d[c].getChildrenRecursive(a,b+1));return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var a=[],b=0,d=this.children.length;b<d;b++)a.push(this.getChild(b).getName());return a},removeAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace){this.attributes.splice(d,1);break}},removeChild:function(a){if(a)for(var b=
0,d=this.children.length;b<d;b++)if(this.children[b].equals(a)){this.children.splice(b,1);break}},removeChildAtIndex:function(a){this.children.length>a&&this.children.splice(a,1)},findAttribute:function(a,b){this.namespace=b||"";for(var d=0,r=this.attributes.length;d<r;d++)if(this.attributes[d].getName()===a&&this.attributes[d].getNamespace()===this.namespace)return this.attributes[d];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var d=arguments[0].substring(a+
1);(a=this.findAttribute(d,arguments[1]))?a.setValue(arguments[2]):(a=new b(arguments[0],d,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.findAttribute(arguments[0]))?a.setValue(arguments[1]):(a=new b(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},setString:function(a,b){this.setAttribute(a,b)},setInt:function(a,b){this.setAttribute(a,b)},setFloat:function(a,b){this.setAttribute(a,b)},setContent:function(a){0<this.children.length&&Processing.debug("Tried to set content for XMLElement with children");
this.content=a},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null;else{var a=arguments[0].indexOf(":");this.name=null===arguments[1]||0>a?arguments[0]:arguments[0].substring(a+1);this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content;
if("CDATA"===this.type)return this.cdata;var a=this.fullName,b="<"+a,d;for(d=0;d<this.attributes.length;d++)var r=this.attributes[d],b=b+(" "+r.getName()+'="'+r.getValue()+'"');if(0===this.children.length)b=""===this.content?b+"/>":b+(">"+this.content+"</"+a+">");else{b+=">";for(d=0;d<this.children.length;d++)b+=this.children[d].toString();b+="</"+a+">"}return b}};d.parse=function(a){var b=new d;b.parse(a);return b};return d}},{}],20:[function(D,x,Q){x.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",
aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",
darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",
hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",
linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",
palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",
tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],21:[function(D,x,Q){x.exports=function(k,h,m){return function(n,a){n.__contains=function(b,d){return"string"!==typeof b?b.contains.apply(b,a(arguments)):null!==b&&null!==d&&"string"===typeof d&&-1<b.indexOf(d)};n.__replaceAll=function(b,d,f){return"string"!==typeof b?b.replaceAll.apply(b,a(arguments)):
b.replace(RegExp(d,"g"),f)};n.__replaceFirst=function(b,d,f){return"string"!==typeof b?b.replaceFirst.apply(b,a(arguments)):b.replace(RegExp(d,""),f)};n.__replace=function(b,d,f){if("string"!==typeof b)return b.replace.apply(b,a(arguments));if(d instanceof RegExp)return b.replace(d,f);"string"!==typeof d&&(d=d.toString());if(""===d)return b;var h=b.indexOf(d);if(0>h)return b;var k=0,r="";do r+=b.substring(k,h)+f,k=h+d.length;while(0<=(h=b.indexOf(d,k)));return r+b.substring(k)};n.__equals=function(b,
d){return b.equals instanceof Function?b.equals.apply(b,a(arguments)):h(b,d)};n.__equalsIgnoreCase=function(b,d){return"string"!==typeof b?b.equalsIgnoreCase.apply(b,a(arguments)):b.toLowerCase()===d.toLowerCase()};n.__toCharArray=function(b){if("string"!==typeof b)return b.toCharArray.apply(b,a(arguments));for(var d=[],f=0,h=b.length;f<h;++f)d[f]=new Char(b.charAt(f));return d};n.__split=function(b,d,f){if("string"!==typeof b)return b.split.apply(b,a(arguments));var h=RegExp(d);if(f===m||1>f)return b.split(h);
for(var k=[],r=b,c;-1!==(c=r.search(h))&&k.length<f-1;){var n=h.exec(r).toString();k.push(r.substring(0,c));r=r.substring(c+n.length)}-1===c&&""===r||k.push(r);return k};n.__codePointAt=function(a,d){var f=a.charCodeAt(d),h;return 55296<=f&&56319>=f?(h=a.charCodeAt(d+1),1024*(f-55296)+(h-56320)+65536):f};n.__matches=function(a,d){return RegExp(d).test(a)};n.__startsWith=function(b,d,f){if("string"!==typeof b)return b.startsWith.apply(b,a(arguments));f=f||0;return 0>f||f>b.length?!1:""===d||d===b?
!0:b.indexOf(d)===f};n.__endsWith=function(b,d){if("string"!==typeof b)return b.endsWith.apply(b,a(arguments));var f=d?d.length:0;return""===d||d===b?!0:b.indexOf(d)===b.length-f};n.__hashCode=function(b){return b.hashCode instanceof Function?b.hashCode.apply(b,a(arguments)):k(b)};n.__printStackTrace=function(a){n.println("Exception: "+a.toString())}}}},{}],22:[function(D,x,Q){x.exports=function(k,h){function m(a,b){var c=a||362436069,d=b||521288629,f=function(){c=36969*(c&65535)+(c>>>16)&4294967295;
d=18E3*(d&65535)+(d>>>16)&4294967295;return((c&65535)<<16|d&65535)&4294967295};this.doubleGenerator=function(){var a=f()/4294967296;return 0>a?1+a:a};this.intGenerator=f}function n(a){function b(a,c,d,f){a&=15;var r=8>a?c:d;c=4>a?d:12===a||14===a?c:f;return(0===(a&1)?r:-r)+(0===(a&2)?c:-c)}function c(a,b,c){b=0===(a&1)?b:c;return 0===(a&2)?-b:b}function d(a,b,c){return b+a*(c-b)}a=a!==h?new m(a):m.createRandomized();var f,k,l=new Uint8Array(512);for(f=0;256>f;++f)l[f]=f;for(f=0;256>f;++f){var n=l[k=
a.intGenerator()&255];l[k]=l[f];l[f]=n}for(f=0;256>f;++f)l[f+256]=l[f];this.noise3d=function(a,c,f){var h=Math.floor(a)&255,k=Math.floor(c)&255,p=Math.floor(f)&255;a-=Math.floor(a);c-=Math.floor(c);f-=Math.floor(f);var m=(3-2*a)*a*a,n=(3-2*c)*c*c,G=l[h]+k,ca=l[G]+p,G=l[G+1]+p,k=l[h+1]+k,h=l[k]+p,p=l[k+1]+p;return d((3-2*f)*f*f,d(n,d(m,b(l[ca],a,c,f),b(l[h],a-1,c,f)),d(m,b(l[G],a,c-1,f),b(l[p],a-1,c-1,f))),d(n,d(m,b(l[ca+1],a,c,f-1),b(l[h+1],a-1,c,f-1)),d(m,b(l[G+1],a,c-1,f-1),b(l[p+1],a-1,c-1,f-1))))};
this.noise2d=function(a,b){var f=Math.floor(a)&255,r=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);var h=(3-2*a)*a*a,k=l[f]+r,f=l[f+1]+r;return d((3-2*b)*b*b,d(h,c(l[k],a,b),c(l[f],a-1,b)),d(h,c(l[k+1],a,b-1),c(l[f+1],a-1,b-1)))};this.noise1d=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return d((3-2*a)*a*a,0===(l[b]&1)?-a:a,0===(l[b+1]&1)?-(a-1):a-1)}}var a=function(){return Math.random()};k.abs=Math.abs;k.ceil=Math.ceil;k.exp=Math.exp;k.floor=Math.floor;k.log=Math.log;k.pow=Math.pow;
k.round=Math.round;k.sqrt=Math.sqrt;k.acos=Math.acos;k.asin=Math.asin;k.atan=Math.atan;k.atan2=Math.atan2;k.cos=Math.cos;k.sin=Math.sin;k.tan=Math.tan;k.constrain=function(a,b,c){return a>c?c:a<b?b:a};k.dist=function(){var a,b,c;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],c=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+c*c)};k.lerp=function(a,b,c){return(b-
a)*c+a};k.mag=function(a,b,c){return c?Math.sqrt(a*a+b*b+c*c):Math.sqrt(a*a+b*b)};k.map=function(a,b,c,d,f){return d+(f-d)*((a-b)/(c-b))};k.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b<a[d]&&(b=a[d]);return b};k.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:
arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b>a[d]&&(b=a[d]);return b};k.norm=function(a,b,c){return(a-b)/(c-b)};k.sq=function(a){return a*a};k.degrees=function(a){return 180*a/Math.PI};k.random=function(){if(0===arguments.length)return a();if(1===arguments.length)return a()*arguments[0];var b=arguments[0],d=arguments[1];return a()*(d-b)+b};m.createRandomized=function(){var a=
new Date;return new m(a/6E4&4294967295,a&4294967295)};k.randomSeed=function(b){a=(new m(b)).doubleGenerator;this.haveNextNextGaussian=!1};k.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian;var b,d,c;do b=2*a()-1,d=2*a()-1,c=b*b+d*d;while(1<=c||0===c);c=Math.sqrt(-2*Math.log(c)/c);this.nextNextGaussian=d*c;this.haveNextNextGaussian=!0;return b*c};var b=h,d=4,f=0.5,l=h;k.noise=function(a,k,c){b===h&&(b=new n(l));for(var m=b,ca=1,G=1,A=
0,x=0;x<d;++x){ca*=f;switch(arguments.length){case 1:A+=ca*(1+m.noise1d(G*a))/2;break;case 2:A+=ca*(1+m.noise2d(G*a,G*k))/2;break;case 3:A+=ca*(1+m.noise3d(G*a,G*k,G*c))/2}G*=2}return A};k.noiseDetail=function(a,b){d=a;b!==h&&(f=b)};k.noiseSeed=function(a){l=a;b=h}}},{}],23:[function(D,x,Q){x.exports=function(k){var h={trim:function(h){if(h instanceof Array){for(var k=[],a=0;a<h.length;a++)k.push(h[a].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return k}return h.replace(/^\s*/,"").replace(/\s*$/,
"").replace(/\r*$/,"")},radians:function(h){return h/180*Math.PI},nfCoreScalar:function(h,n,a,b,d,f){n=0>h?a:n;a=0===d;d=d===k||0>d?0:d;h=Math.abs(h);if(a)for(d=1,h*=10;1E-6<Math.abs(Math.round(h)-h)&&7>d;)++d,h*=10;else 0!==d&&(h*=Math.pow(10,d));a=2*h;Math.floor(h)===h?a=h:Math.floor(a)===a?(h=Math.floor(h),a=h+h%2):a=Math.round(h);h="";for(b+=d;0<b||0<a;)b--,h=""+a%10+h,a=Math.floor(a/10);if(f!==k)for(b=h.length-3-d;0<b;)h=h.substring(0,b)+f+h.substring(b),b-=3;return 0<d?n+h.substring(0,h.length-
d)+"."+h.substring(h.length-d,h.length):n+h},nfCore:function(k,n,a,b,d,f){if(k instanceof Array){for(var l=[],p=0,r=k.length;p<r;p++)l.push(h.nfCoreScalar(k[p],n,a,b,d,f));return l}return h.nfCoreScalar(k,n,a,b,d,f)},nf:function(k,n,a){return h.nfCore(k,"","-",n,a)},nfs:function(k,n,a){return h.nfCore(k," ","-",n,a)},nfp:function(k,n,a){return h.nfCore(k,"+","-",n,a)},nfc:function(k,n){return h.nfCore(k,"","-",0,n,",")},withCommonFunctions:function(k){"trim radians nf nfs nfp nfc".split(" ").forEach(function(n){k[n]=
h[n]})}};return h}()},{}],24:[function(D,x,Q){x.exports=function(k,h,m,n,a,b){function d(a,b){var d=a,f=0,h=0;k.pmouseX=k.mouseX;k.pmouseY=k.mouseY;if(d.offsetParent){do f+=d.offsetLeft,h+=d.offsetTop;while(d=d.offsetParent)}d=a;do f-=d.scrollLeft||0,h-=d.scrollTop||0;while(d=d.parentNode);var l,p,m,x;n.defaultView&&n.defaultView.getComputedStyle&&(l=parseInt(n.defaultView.getComputedStyle(a,null).paddingLeft,10)||0,p=parseInt(n.defaultView.getComputedStyle(a,null).paddingTop,10)||0,m=parseInt(n.defaultView.getComputedStyle(a,
null).borderLeftWidth,10)||0,x=parseInt(n.defaultView.getComputedStyle(a,null).borderTopWidth,10)||0);f=f+l+m;h=h+p+x;f+=window.pageXOffset;h+=window.pageYOffset;return{X:f,Y:h}}function f(a,b){var f=d(a,b);k.mouseX=b.pageX-f.X;k.mouseY=b.pageY-f.Y}function l(a){var b=d(a.changedTouches[0].target,a.changedTouches[0]),f;for(f=0;f<a.touches.length;f++){var h=a.touches[f];h.offsetX=h.pageX-b.X;h.offsetY=h.pageY-b.Y}for(f=0;f<a.targetTouches.length;f++)h=a.targetTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=
h.pageY-b.Y;for(f=0;f<a.changedTouches.length;f++)h=a.changedTouches[f],h.offsetX=h.pageX-b.X,h.offsetY=h.pageY-b.Y;return a}m(h,"touchstart",function(d){h.setAttribute("style","-webkit-user-select: none");h.setAttribute("onclick","void(0)");h.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var c=0,p=eventHandlers.length;c<p;c++){var n=eventHandlers[c].type;"mouseout"!==n&&"mousemove"!==n&&"mousedown"!==n&&"mouseup"!==n&&"DOMMouseScroll"!==n&&"mousewheel"!==n&&"touchstart"!==
n||detachEventHandler(eventHandlers[c])}k.touchStart!==b||k.touchMove!==b||k.touchEnd!==b||k.touchCancel!==b?(m(h,"touchstart",function(a){k.touchStart!==b&&(a=l(a),k.touchStart(a))}),m(h,"touchmove",function(a){k.touchMove!==b&&(a.preventDefault(),a=l(a),k.touchMove(a))}),m(h,"touchend",function(a){k.touchEnd!==b&&(a=l(a),k.touchEnd(a))}),m(h,"touchcancel",function(a){k.touchCancel!==b&&(a=l(a),k.touchCancel(a))})):(m(h,"touchstart",function(b){f(h,b.touches[0]);k.__mousePressed=!0;k.mouseDragging=
!1;k.mouseButton=a.LEFT;"function"===typeof k.mousePressed&&k.mousePressed()}),m(h,"touchmove",function(a){a.preventDefault();f(h,a.touches[0]);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)}),m(h,"touchend",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&k.mouseReleased()}));h.dispatchEvent(d)});
(function(){var a=!0,b=function(a){a.preventDefault();a.stopPropagation()};k.disableContextMenu=function(){a&&(m(h,"contextmenu",b),a=!1)};k.enableContextMenu=function(){a||(detachEventHandler({elem:h,type:"contextmenu",fn:b}),a=!0)}})();m(h,"mousemove",function(a){f(h,a);"function"!==typeof k.mouseMoved||k.__mousePressed||k.mouseMoved();"function"===typeof k.mouseDragged&&k.__mousePressed&&(k.mouseDragged(),k.mouseDragging=!0)});m(h,"mouseout",function(a){"function"===typeof k.mouseOut&&k.mouseOut()});
m(h,"mouseover",function(a){f(h,a);"function"===typeof k.mouseOver&&k.mouseOver()});h.onmousedown=function(){h.focus();return!1};m(h,"mousedown",function(b){k.__mousePressed=!0;k.mouseDragging=!1;switch(b.which){case 1:k.mouseButton=a.LEFT;break;case 2:k.mouseButton=a.CENTER;break;case 3:k.mouseButton=a.RIGHT}"function"===typeof k.mousePressed&&k.mousePressed()});m(h,"mouseup",function(a){k.__mousePressed=!1;"function"!==typeof k.mouseClicked||k.mouseDragging||k.mouseClicked();"function"===typeof k.mouseReleased&&
k.mouseReleased()});var p=function(a){var b=0;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&(b=-b)):a.detail&&(b=-a.detail/3);(k.mouseScroll=b)&&"function"===typeof k.mouseScrolled&&k.mouseScrolled()};m(n,"DOMMouseScroll",p);m(n,"mousewheel",p)}},{}],25:[function(D,x,Q){x.exports=function(k,h){function m(){var a="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
f&&Object.keys(f).forEach(function(b){a.push(b)});var b={},d,h;d=0;for(h=a.length;d<h;++d)b[a[d]]=null;for(var l in k.lib)if(k.lib.hasOwnProperty(l)&&k.lib[l].exports){var p=k.lib[l].exports;d=0;for(h=p.length;d<h;++d)b[p[d]]=null}return b}function n(a){function c(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],middle:"",right:""};else{var c=/\s*$/.exec(a);a={left:b[0],middle:a.substring(b[0].length,c.index),right:c[0]}}a.untrim=function(a){return this.left+a+this.right};return a}function f(a){return a.replace(/^\s+/,
"").replace(/\s+$/,"")}function h(a,b){for(var c=0,e=b.length;c<e;++c)a[b[c]]=null;return a}function k(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function l(a){return a.substring(2,a.length-1)}function n(a,b){var c=N.length;N.push(a);return'"'+b+c+'"'}function v(a){a=a.replace(qa,function(a){return n(a,"E")});a=a.replace(la,function(a){return n(a,"D")});return a=a.replace(jb,function(a){return n(a,"H")})}function x(a,b){return a.replace(Eb,function(a,c,e,d,f,tb){return e!==b?a:n(a,
"G")})}function q(a){this.name=a}function D(a,b){this.params=a;this.methodArgsParam=b}function M(a){var b=f(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),e=0;e<b.length;++e){var d=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[e]);if(e===b.length-1&&0<=b[e].indexOf("...")){c=new q(d[1]);break}a.push(new q(d[1]))}return new D(a,c)}function Q(a){function b(a,e,f,tb){a=N[tb];d=!0;a=c(a.substring(1,a.length-1));return"__"+f+(""===a.middle?n("("+e.replace(/\.\s*$/,
"")+")","B"):n("("+e.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function e(a,b,c){d=!0;return"__instanceof"+n("("+b+", "+c+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a,b,c){return n(a,"F")});a=a.replace(jb,function(a){return n(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return N[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");a="{"+a.substring(1,a.length-1)+"}";b="('"+b+"', "+n(a,"A")+")";return"$p.createJavaArray"+n(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=N[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(N[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var e=c(b);return e.untrim("__int_cast("+e.middle+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=
a.replace(/([^\s])%([^=\s])/g,"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,e,d,f){return c?(a=N[e],d?"pixels.setPixel"+n("("+a.substring(1,a.length-1)+","+f+")","B"):"pixels.getPixel"+n("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+
n("()","B"):d?"pixels.set"+n("("+f+")","B"):"pixels.toArray"+n("()","B")});var d;do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(d);do d=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
e);while(d);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function u(a,b){this.baseInterfaceName=a;this.body=b;b.owner=this}function nd(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=ja;var c="class"+ ++ab;ja=c;var e=b[1]+"$"+c,b=new u(e,ea(N[b[2]],e,"","implements "+b[1]));b.classId=c;b.scopeId=a;X[c]=b;ja=a;return b}function Ia(a,b,c){this.name=a;this.params=b;this.body=c}function T(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);
return new Ia("function"!==a[1]?a[1]:null,M(N[a[2]]),ra(N[a[3]]))}function Y(a){this.members=a}function U(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:ma(a[b])}:{label:f(a[b].substring(0,c)),value:ma(f(a[b].substring(c+1)))}}return new Y(a)}function Z(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+Z(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+n(a.substring(1,a.length-
1),"I")+"}":"["+Z(a.substring(1,a.length-1))+"]";a=c(a);var b=Q(a.middle),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return Z(N[b])});return a.untrim(b)}function sa(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,e,d,f){return b?a:C({name:c,member:d,callSign:!!f})+(e===p?"":e)})}function ta(a,b){this.expr=a;this.transforms=b}function $b(a,b,c){this.name=a;this.value=b;this.isDefault=c}function bb(a,b){var c=a.indexOf("="),e,d;0>c?(e=a,c=
b,d=!0):(e=a.substring(0,c),c=ma(a.substring(c+1)),d=!1);return new $b(f(e.replace(/(\s*"C\d+")+/g,"")),c,d)}function Sa(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function cb(a,b){this.definitions=a;this.varType=b}function Fb(a){this.expression=a}function db(a){if(Gb.test(a)){var b=ub.exec(a);a=a.substring(b[0].length).split(",");for(var c=Sa(b[2]),e=0;e<a.length;++e)a[e]=bb(a[e],c);return new cb(a,b[2])}return new Fb(ma(a))}function Hb(a,b,c){this.initStatement=
a;this.condition=b;this.step=c}function Ib(a,b){this.initStatement=a;this.container=b}function wa(a,b){this.initStatement=a;this.container=b}function za(a){if(/\bin\b/.test(a))return a=a.substring(1,a.length-1).split(/\bin\b/g),new Ib(db(f(a[0])),ma(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new wa(db(f(a[0])),ma(a[1]));a=a.substring(1,a.length-1).split(";");return new Hb(db(f(a[0])),ma(a[1]),ma(a[2]))}function Ta(a){a.sort(function(a,b){return b.weight-
a.weight})}function Ja(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Jb(a,b,c){this.name=a;this.body=b;this.isStatic=c;b.owner=this}function Kb(a){var b=qa.exec(a);qa.lastIndex=0;var c=0<=b[1].indexOf("static"),e=N[l(b[6])];a=ja;var d="class"+ ++ab;ja=d;b="interface"===b[2]?new Ja(b[3],eb(e,b[3],b[4]),c):new Jb(b[3],ea(e,b[3],b[4],b[5]),c);b.classId=d;b.scopeId=a;X[d]=b;ja=a;return b}function Lb(a,b,c,e){this.name=a;this.params=b;this.body=c;this.isStatic=e}function fb(a){a=
la.exec(a);la.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?N[l(a[6])]:"{}";return new Lb(a[3],M(N[l(a[4])]),ra(c),b)}function Mb(a,b,c){this.definitions=a;this.fieldType=b;this.isStatic=c}function Ua(a){var b=ub.exec(a),c=0<=b[1].indexOf("static");a=a.substring(b[0].length).split(/,\s*/g);for(var e=Sa(b[2]),d=0;d<a.length;++d)a[d]=bb(a[d],e);return new Mb(a,b[2],c)}function Nb(a,b){this.params=a;this.body=b}function ac(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=M(N[a[1]]);return new Nb(b,
ra(N[a[2]]))}function Ka(a,b,c,e,d,f){this.name=a;this.interfacesNames=b;this.methodsNames=c;this.fields=e;this.innerClasses=d;this.misc=f;a=0;for(b=e.length;a<b;++a)e[a].owner=this}function H(a,b,c,e,d,f,g,h,k){this.name=a;this.baseClassName=b;this.interfacesNames=c;this.functions=e;this.methods=d;this.fields=f;this.cstrs=g;this.innerClasses=h;this.misc=k;a=0;for(b=f.length;a<b;++a)f[a].owner=this}function lb(a,b){this.name=a;this.body=b;b.owner=this}function mb(a,b){this.name=a;this.body=b;b.owner=
this}function Ob(a){var b=qa.exec(a);qa.lastIndex=0;var c=N[l(b[6])];a=ja;var e="class"+ ++ab;ja=e;b="interface"===b[2]?new lb(b[3],eb(c,b[3],b[4])):new mb(b[3],ea(c,b[3],b[4],b[5]));b.classId=e;b.scopeId=a;X[e]=b;ja=a;return b}function vb(a,b,c){this.name=a;this.params=b;this.body=c}function rc(a){a=la.exec(a);la.lastIndex=0;return new vb(a[3],M(N[l(a[4])]),ra(N[l(a[6])]))}function Pb(a,b){this.argument=a;this.misc=b}function bc(a,b){this.argument=a;this.misc=b}function S(a,b,c){this.name=a;this.argument=
b;this.misc=c}function Qb(a){this.expr=a}function wb(a){this.label=a}function e(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c];d instanceof cb?b=b.concat(d.getNames()):d instanceof Pb&&d.argument.initStatement instanceof cb?b=b.concat(d.argument.initStatement.getNames()):(d instanceof Ja||d instanceof Jb||d instanceof lb||d instanceof mb||d instanceof vb||d instanceof Ia)&&b.push(d.name)}return h({},b)}function g(a){this.statements=a}function da(a){this.statements=a}var ha=m(),R=[];a=a.replace(/\r\n?|\n\r/g,
"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,e,d,f,g,h){return b||c?(b=R.length,R.push(a),"'"+b+"'"):e?(b=R.length,R.push(f),d+"'"+b+"'"):""!==h?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var ka,La=function(a,b,c,e){if(b||e)return a;ka=!0;return""};do ka=
!1,a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,La);while(ka);var N=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],e=[],d=1;d<a.length;d+=2){var f=a[d];if("["===f||"{"===f||"("===f)e.push(c),c=
f;else if("]"===f||"}"===f||")"===f){var g="}"===f?"A":")"===f?"B":"C",h=b.length;b.push(c+f);c=e.pop()+'"'+g+(h+1)+'"'}c+=a[d+1]}b.unshift(c);return b}(a),C,X={},ja,ab=0,ea,eb,ra,Da,ma,qa=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
la=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Gb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
Eb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,ub=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,jb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;q.prototype.toString=function(){return this.name};
D.prototype.getNames=function(){for(var a=[],b=0,c=this.params.length;b<c;++b)a.push(this.params[b].name);return a};D.prototype.prependMethodArgs=function(a){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+a.substring(1):a};D.prototype.toString=function(){if(0===this.params.length)return"()";for(var a="(",b=0,c=this.params.length;b<c;++b)a+=this.params[b]+", ";return a.substring(0,a.length-2)+")"};u.prototype.toString=
function(){return"new ("+this.body+")"};Ia.prototype.toString=function(){var a=C,b=h({"this":null},this.params.getNames());C=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);var e=this.params.prependMethodArgs(this.body.toString()),c=c+(this.params+" "+e);C=a;return c};Y.prototype.toString=function(){var a=C;C=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,e=this.members.length;c<e;++c)this.members[c].label&&(b+=this.members[c].label+
": "),b+=this.members[c].value.toString()+", ";C=a;return b.substring(0,b.length-2)};ta.prototype.toString=function(){var a=this.transforms;return sa(this.expr).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};ma=function(a){var b=[];a=Z(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(T(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(nd(N[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(U(N[c]));return'"!'+(b.length-1)+'"'});
return new ta(a,b)};$b.prototype.toString=function(){return this.name+" = "+this.value};cb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};cb.prototype.toString=function(){return"var "+this.definitions.join(",")};Fb.prototype.toString=function(){return this.expression.toString()};Hb.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};Ib.prototype.toString=function(){var a=this.initStatement.toString();
0<=a.indexOf("=")&&(a=a.substring(0,a.indexOf("=")));return"("+a+" in "+this.container+")"};wa.iteratorId=0;wa.prototype.toString=function(){var a=this.initStatement.toString(),b="$it"+wa.iteratorId++,a=a.replace(/^\s*var\s*/,"").split("=")[0];return"("+("var "+b+" = new $p.ObjectIterator("+this.container+"), "+a+" = void(0)")+"; "+(b+".hasNext() && (("+a+" = "+b+".next()) || true)")+";)"};Ja.prototype.toString=function(){return""+this.body};Jb.prototype.toString=function(){return""+this.body};Lb.prototype.toString=
function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.methodId+this.params+" "+c+"\n";C=b;return c};Mb.prototype.getNames=function(){for(var a=[],b=0,c=this.definitions.length;b<c;++b)a.push(this.definitions[b].name);return a};Mb.prototype.toString=function(){var a=C({name:"[this]"});if(this.isStatic){for(var b=this.owner.name,c=[],e=0,d=this.definitions.length;e<d;++e){var f=
this.definitions[e],g=f.name,h=b+"."+g;c.push("if("+h+" === void(0)) {\n "+h+" = "+f.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+h+";}, set: function(val){"+h+" = val;} });\n")}return c.join("")}return a+"."+this.definitions.join("; "+a+".")};Nb.prototype.toString=function(){var a=h({},this.params.getNames()),b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.params.params.length+this.params.toString(),e=this.params.prependMethodArgs(this.body.toString());
/\$(superCstr|constr)\b/.test(e)||(e="{\n$superCstr();\n"+e.substring(1));C=b;return c+e+"\n"};Ka.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methodsNames.length;e<f;++e)b[this.methodsNames[e]]=!0;e=0;for(f=this.innerClasses.length;e<f;++e)a=this.innerClasses[e],c[a.name]=a};Ka.prototype.toString=function(){for(var a=
this.owner,b=0;a;)++b,a=a.scope;var a=this.name,c=b="";this.getMembers({},{},{});var e,d;if(this.owner.interfaces){var f=[],g;e=0;for(d=this.interfacesNames.length;e<d;++e)this.owner.interfaces[e]&&(g=C({name:this.interfacesNames[e]}),f.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces = ["+f.join(", ")+"];\n"}c=c+(a+".$isInterface = true;\n")+(a+".$methods = ['"+this.methodsNames.join("', '")+"'];\n");Ta(this.innerClasses);e=0;for(d=this.innerClasses.length;e<d;++e)f=this.innerClasses[e],
f.isStatic&&(b+=a+"."+f.name+" = "+f+";\n");e=0;for(d=this.fields.length;e<d;++e)f=this.fields[e],f.isStatic&&(b+=a+"."+f.definitions.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};eb=function(a,b,e){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var d=[],f=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?d.push(c):"E"===b&&f.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,h;e!==p&&(g=e.replace(/^\s*extends\s+(.+?)\s*$/g,
"$1").split(/\s*,\s*/g));e=0;for(h=d.length;e<h;++e){var k=fb(N[d[e]]);d[e]=k.name}e=0;for(h=a.length-1;e<h;++e)k=c(a[e]),a[e]=Ua(k.middle);k=a.pop();e=0;for(h=f.length;e<h;++e)f[e]=Kb(N[f[e]]);return new Ka(b,g,d,a,f,{tail:k})};H.prototype.getMembers=function(a,b,c){this.owner.base&&this.owner.base.body.getMembers(a,b,c);var e,d,f,g;e=0;for(f=this.fields.length;e<f;++e){var h=this.fields[e].getNames();d=0;for(g=h.length;d<g;++d)a[h[d]]=this.fields[e]}e=0;for(f=this.methods.length;e<f;++e)a=this.methods[e],
b[a.name]=a;e=0;for(f=this.innerClasses.length;e<f;++e)b=this.innerClasses[e],c[b.name]=b};H.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.owner),b=this.name,c="var "+a+" = this;\n",e="",d="",g={},h={},k={};this.getMembers(g,h,k);var l=C;C=function(c){var e=c.name;return"this"===e?c.callSign||!c.member?a+".$self":a:g.hasOwnProperty(e)?g[e].isStatic?b+"."+e:a+"."+e:k.hasOwnProperty(e)?a+"."+e:h.hasOwnProperty(e)?h[e].isStatic?b+"."+e:a+".$self."+
e:l(c)};var p;this.baseClassName?(p=l({name:this.baseClassName}),c=c+("var $super = { $upcast: "+a+" };\n")+("function $superCstr(){"+p+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),d+=b+".$base = "+p+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.owner.base&&(e+="$p.extendStaticMembers("+b+", "+p+");\n");var r,n,m;if(this.owner.interfaces){n=[];p=0;for(r=this.interfacesNames.length;p<r;++p)this.owner.interfaces[p]&&(m=l({name:this.interfacesNames[p]}),
n.push(m),e+="$p.extendInterfaceMembers("+b+", "+m+");\n");d+=b+".$interfaces = ["+n.join(", ")+"];\n"}0<this.functions.length&&(c+=this.functions.join("\n")+"\n");Ta(this.innerClasses);p=0;for(r=this.innerClasses.length;p<r;++p)n=this.innerClasses[p],n.isStatic?(e+=b+"."+n.name+" = "+n+";\n",c+=a+"."+n.name+" = "+b+"."+n.name+";\n"):c+=a+"."+n.name+" = "+n+";\n";p=0;for(r=this.fields.length;p<r;++p){var v=this.fields[p];if(v.isStatic)for(e+=b+"."+v.definitions.join(";\n"+b+".")+";\n",n=0,m=v.definitions.length;n<
m;++n)var u=v.definitions[n].name,q=b+"."+u,c=c+("$p.defineProperty("+a+", '"+u+"', {get: function(){return "+q+"}, set: function(val){"+q+" = val}});\n");else c+=a+"."+v.definitions.join(";\n"+a+".")+";\n"}n={};p=0;for(r=this.methods.length;p<r;++p)m=this.methods[p],v=n[m.name],u=m.name+"$"+m.params.params.length,q=!!m.params.methodArgsParam,v?(++v,u+="_"+v):v=1,m.methodId=u,n[m.name]=v,m.isStatic?(e+=m,e+="$p.addMethod("+b+", '"+m.name+"', "+u+", "+q+");\n"):c+=m,c+="$p.addMethod("+a+", '"+m.name+
"', "+u+", "+q+");\n";c+=f(this.misc.tail);0<this.cstrs.length&&(c+=this.cstrs.join("\n")+"\n");c+="function $constr() {\n";n=[];p=0;for(r=this.cstrs.length;p<r;++p)m=this.cstrs[p].params.params.length,n.push("if(arguments.length "+(this.cstrs[p].params.methodArgsParam?">=":"===")+" "+m+") { $constr_"+m+".apply("+a+", arguments); }");0<n.length&&(c+=n.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";C=l;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+e+d+
"return "+b+";\n})()"};ea=function(a,b,e,d){a=a.substring(1,a.length-1);a=v(a);a=x(a,b);var f=[],g=[],h=[],k=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b?g.push(c):"H"===b?k.push(c):h.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var l,n;e!==p&&(l=e.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));d!==p&&(n=d.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(e=0;e<k.length;++e)k[e]=T(N[k[e]]);
for(e=0;e<f.length;++e)f[e]=fb(N[f[e]]);for(e=0;e<a.length-1;++e)d=c(a[e]),a[e]=Ua(d.middle);d=a.pop();for(e=0;e<h.length;++e)h[e]=ac(N[h[e]]);for(e=0;e<g.length;++e)g[e]=Kb(N[g[e]]);return new H(b,l,n,k,f,a,h,g,{tail:d})};lb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};mb.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};vb.prototype.toString=function(){var a=h({},this.params.getNames()),
b=C;C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c=this.params.prependMethodArgs(this.body.toString()),c="function "+this.name+this.params+" "+c+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);";C=b;return c};Pb.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};bc.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};S.prototype.toString=function(){var a=this.misc.prefix;this.argument!==p&&(a+=this.argument.toString());
return a};Qb.prototype.toString=function(){return"case "+this.expr+":"};wb.prototype.toString=function(){return this.label};Da=function(a,b,e){var d=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),g=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var h=0,k,l;null!==(k=d.exec(a));){if(k[1]!==p)l=a.lastIndexOf('"B',d.lastIndex),h=a.substring(h,
l),"for"===k[1]?g.push(new Pb(za(N[k[2]]),{prefix:h})):"catch"===k[1]?g.push(new bc(M(N[k[2]]),{prefix:h})):g.push(new S(k[1],ma(N[k[2]]),{prefix:h}));else if(k[3]!==p)g.push(new S(k[3],p,{prefix:a.substring(h,d.lastIndex)}));else if(k[4]!==p){l=a.substring(h,d.lastIndex-k[4].length);if(0!==f(l).length)continue;g.push(l);h=k[4].charAt(1);k=k[5];"D"===h?g.push(b(N[k])):"E"===h?g.push(e(N[k])):"H"===h?g.push(T(N[k])):g.push(ra(N[k]))}else if(k[6]!==p)g.push(new Qb(ma(f(k[7]))));else if(k[8]!==p){l=
a.substring(h,d.lastIndex-k[8].length);if(0!==f(l).length)continue;g.push(new wb(a.substring(h,d.lastIndex)))}else k=c(a.substring(h,d.lastIndex-1)),g.push(k.left),g.push(db(k.middle)),g.push(k.right+";");h=d.lastIndex}b=c(a.substring(h));g.push(b.left);""!==b.middle&&(g.push(db(b.middle)),g.push(";"+b.right));return g};g.prototype.toString=function(){var a=e(this.statements),b=C;k(a)||(C=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.statements.join("")+"\n}";C=b;return c};
ra=function(a){a=c(a.substring(1,a.length-1));return new g(Da(a.middle))};da.prototype.toString=function(){for(var a=[],c=[],f,g=0,h=this.statements.length;g<h;++g)f=this.statements[g],f instanceof mb||f instanceof lb?a.push(f):c.push(f);Ta(a);var k=e(this.statements);C=function(a){a=a.name;return k.hasOwnProperty(a)?a:ha.hasOwnProperty(a)||d.hasOwnProperty(a)||b.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+c.join("")+"\n})";C=null;return a};
a=function(){var a=v(N[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new da(Da(a,rc,Ob))}();(function(a){function b(a,e){for(var d=e.split("."),f=a.scope,g;f;){if(f.hasOwnProperty(d[0])){g=f[d[0]];break}f=f.scope}g===p&&(g=c[d[0]]);for(var f=1,h=d.length;f<h&&g;++f)g=g.inScope[d[f]];return g}var c={},e;for(e in X)if(X.hasOwnProperty(e)){a=X[e];var d=a.scopeId,f=a.name;d?(d=X[d],a.scope=d,d.inScope===p&&(d.inScope={}),d.inScope[f]=a):c[f]=a}for(e in X)if(X.hasOwnProperty(e)){a=X[e];if(f=a.body.baseClassName)if(f=
b(a,f))a.base=f,f.derived||(f.derived=[]),f.derived.push(a);var f=a.body.interfacesNames,d=[],g,h;if(f&&0<f.length){g=0;for(h=f.length;g<h;++g){var k=b(a,f[g]);d.push(k);k&&(k.derived||(k.derived=[]),k.derived.push(a))}0<d.length&&(a.interfaces=d)}}})(a);(function(a){function b(a,e){var d=c[a];if(!d)return!1;var f=d.indexOf(e);if(0>f)return!1;d.splice(f,1);if(0<d.length)return!1;delete c[a];return!0}a=[];var c={},e,d,f;for(e in X)if(X.hasOwnProperty(e))if(f=X[e],f.inScope||f.derived){var g=[];if(f.inScope)for(d in f.inScope)f.inScope.hasOwnProperty(d)&&
g.push(f.inScope[d]);f.derived&&(g=g.concat(f.derived));c[e]=g}else a.push(e),f.weight=0;for(;0<a.length;)if(e=a.shift(),f=X[e],f.scopeId&&b(f.scopeId,f)&&(a.push(f.scopeId),X[f.scopeId].weight=f.weight+1),f.base&&b(f.base.classId,f)&&(a.push(f.base.classId),f.base.weight=f.weight+1),f.interfaces)for(e=0,d=f.interfaces.length;e<d;++e)f.interfaces[e]&&b(f.interfaces[e].classId,f)&&(a.push(f.interfaces[e].classId),f.interfaces[e].weight=f.weight+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,
"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var e=b[c];return"/"===e.charAt(0)?e:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(e)?"(new $p.Character("+e+"))":e})}(a,R)}function a(a,b){var d=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(d&&2===d.length)for(var f=[],d=d.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(a,b){f.push(b);return"{"+(f.length-
1)+"}"}}()).replace("\n","").replace("\r","").split(";"),h=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},k=0,l=d.length;k<l;k++){var p=d[k].split("=");if(p&&2===p.length){var n=h(p[0]),m=h(p[1]),p=[];if("preload"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]);b.imageCache.add(x)}else if("font"===n)for(p=m.split(","),n=0,m=p.length;n<m;n++){var x=h(p[n]),D=/^\{(\d*?)\}$/.exec(x);PFont.preloading.add(D?JSON.parse("{"+f[D[1]]+"}"):x)}else"pauseOnBlur"===n?b.options.pauseOnBlur=
"true"===m:"globalKeyEvents"===n?b.options.globalKeyEvents="true"===m:"param-"===n.substring(0,6)?b.params[n.substring(6)]=m:b.options[n]=m}}return a}var b=h.defaultScope,d=b.PConstants,f=h.aFunctions,l=h.Browser.document,p;k.compile=function(b){var c=new k.Sketch;b=a(b,c);b=n(b);c.sourceCode=b;return c};k.logger=new function(a){var b={BufferMax:200};b.wrapper=a.createElement("div");b.wrapper.setAttribute("style","opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");
b.dragger=a.createElement("div");b.dragger.setAttribute("style","display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");b.closer=a.createElement("div");b.closer.onmouseover=function(){b.closer.style.setProperty("background-color","#ccc")};b.closer.onmouseout=function(){b.closer.style.setProperty("background-color","#ddd")};b.closer.innerHTML="&#10006;";b.closer.setAttribute("style","opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");
b.javaconsole=a.createElement("div");b.javaconsole.setAttribute("style","overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");b.wrapper.appendChild(b.dragger);b.wrapper.appendChild(b.javaconsole);b.wrapper.appendChild(b.closer);b.dragger.onmousedown=function(d){b.divheight=b.wrapper.style.height;a.selection?a.selection.empty():window.getSelection().removeAllRanges();var f=d.screenY;window.onmousemove=function(a){b.wrapper.style.height=
parseFloat(b.divheight)+(f-a.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-a.screenY)-10+"px"};window.onmouseup=function(d){a.selection?a.selection.empty():window.getSelection().removeAllRanges();b.wrapper.style.height=parseFloat(b.divheight)+(f-d.screenY)+"px";b.javaconsole.style.height=parseFloat(b.divheight)+(f-d.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};b.BufferArray=[];b.print=b.log=function(a){b.BufferArray[b.BufferArray.length-1]?b.BufferArray[b.BufferArray.length-
1]+=a+"":b.BufferArray.push(a);b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.println=function(d){a.body.appendChild(b.wrapper);b.print(d);b.BufferArray.push("<br/>");b.javaconsole.innerHTML=b.BufferArray.join("");"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible");b.BufferArray.length>b.BufferMax?b.BufferArray.splice(0,
1):b.javaconsole.scrollTop=b.javaconsole.scrollHeight;"hidden"===b.wrapper.style.visibility&&(b.wrapper.style.visibility="visible")};b.showconsole=function(){b.wrapper.style.visibility="visible"};b.hideconsole=function(){b.wrapper.style.visibility="hidden"};b.closer.onclick=function(){b.hideconsole()};b.hideconsole();return b}(l);return k}},{}],26:[function(D,x,Q){x.exports=function(k,h){function m(a,b){return a in l?l[a]:"function"===typeof l[b]?l[b]:function(a){if(a instanceof Array)return a;if("number"===
typeof a){var b=[];b.length=a;return b}}}var n=k.defaultScope,a=k.extend,b=k.Browser,d=b.ajax,f=b.navigator,l=b.window,p=b.document,r=k.noop,c=n.PConstants;PFont=n.PFont;PShapeSVG=n.PShapeSVG;PVector=n.PVector;Char=Character=n.Char;ObjectIterator=n.ObjectIterator;XMLElement=n.XMLElement;XML=n.XML;var x=l.HTMLCanvasElement,D=l.HTMLImageElement,G=l.localStorage;p.head||(p.head=p.getElementsByTagName("head")[0]);var A=m("Float32Array","WebGLFloatArray"),Q=m("Int32Array","WebGLIntArray"),v=m("Uint16Array",
"WebGLUnsignedShortArray"),ga=m("Uint8Array","WebGLUnsignedByteArray");if(9<=p.documentMode&&!p.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";var q=[],Zb={},M=this.Processing=function(b,k,m){function Ia(a,b,z){a.addEventListener?a.addEventListener(b,z,!1):a.attachEvent("on"+b,z);wb.push({elem:a,type:b,fn:z})}function T(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&
(4===c.length?g.uniform4fv(e,c):3===c.length?g.uniform3fv(e,c):2===c.length?g.uniform2fv(e,c):g.uniform1f(e,c))}function Y(a,b,z,c){var e=Fa.locations[a];e===h&&(e=g.getUniformLocation(b,z),Fa.locations[a]=e);null!==e&&(4===c.length?g.uniform4iv(e,c):3===c.length?g.uniform3iv(e,c):2===c.length?g.uniform2iv(e,c):g.uniform1i(e,c))}function U(a,b,z,c,e){var d=Fa.locations[a];d===h&&(d=g.getUniformLocation(b,z),Fa.locations[a]=d);-1!==d&&(16===e.length?g.uniformMatrix4fv(d,c,e):9===e.length?g.uniformMatrix3fv(d,
c,e):g.uniformMatrix2fv(d,c,e))}function Z(a,b,z,c,e){var d=Fa.attributes[a];d===h&&(d=g.getAttribLocation(b,z),Fa.attributes[a]=d);-1!==d&&(g.bindBuffer(g.ARRAY_BUFFER,e),g.vertexAttribPointer(d,c,g.FLOAT,!1,0,0),g.enableVertexAttribArray(d))}function sa(a,b,z){var c=Fa.attributes[a];c===h&&(c=g.getAttribLocation(b,z),Fa.attributes[a]=c);-1!==c&&g.disableVertexAttribArray(c)}function ta(a,b,z,$){Va===c.HSB?(z=e.color.toRGB(a,b,z),a=z[0],b=z[1],z=z[2]):(a=Math.round(255*(a/xa)),b=Math.round(255*(b/
Ea)),z=Math.round(255*(z/ya)));$=Math.round(255*($/ia));a=0>a?0:a;b=0>b?0:b;z=0>z?0:z;$=0>$?0:$;return(255<$?255:$)<<24&c.ALPHA_MASK|(255<a?255:a)<<16&c.RED_MASK|(255<b?255:b)<<8&c.GREEN_MASK|(255<z?255:z)&c.BLUE_MASK}function $b(a){if(a<=xa&&0<=a){if(Va===c.RGB)return ta(a,a,a,ia);if(Va===c.HSB)return ta(0,0,a/xa*ya,ia)}if(a)return 2147483647<a&&(a-=4294967296),a}function bb(a){var b,z,$;b=((a&c.RED_MASK)>>>16)/255;z=((a&c.GREEN_MASK)>>>8)/255;$=(a&c.BLUE_MASK)/255;a=e.max(e.max(b,z),$);var d=e.min(e.min(b,
z),$);if(d===a)return[0,0,a*ya];b=(b===a?(z-$)/(a-d):z===a?2+($-b)/(a-d):4+(b-z)/(a-d))/6;0>b?b+=1:1<b&&(b-=1);return[b*xa,(a-d)/a*Ea,a*ya]}function Sa(){g.restore();N=ab=!0}function cb(){var a=(Date.now()-tc)/1E3;ec++;var b=ec/a;0.5<a&&(tc=Date.now(),ec=0,e.__frameRate=b);e.frameCount++}function Fb(a){a=parseInt("0x"+a,16);2147483647<a&&(a-=4294967296);return a}function db(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();
if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function Hb(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function Ib(a,b){if("number"===typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseInt(a,b||10)&4294967295;if(a instanceof Char)return a.code}function wa(){R&&(N&&(g.fillStyle=e.color.toString(La),N=!1),g.fill())}function za(){C&&
(ab&&(g.strokeStyle=e.color.toString(ja),ab=!1),g.stroke())}function Ta(){wa();za();g.closePath()}function Ja(a,b,z){var c=Mc.shift();c===h&&(c={},c.canvas=p.createElement("canvas"),c.context=c.canvas.getContext("2d"));Mc.push(c);var e=c.canvas,d=c.context;b=b||a.width;z=z||a.height;e.width=b;e.height=z;a?"data"in a?d.putImageData(a,0,0):(d.clearRect(0,0,b,z),d.drawImage(a,0,0,b,z)):d.clearRect(0,0,b,z);return c}function Jb(a){return{getLength:function(a){return function(){if(a.isRemote)throw"Image is loaded remotely. Cannot get length.";
return a.imageData.data.length?a.imageData.data.length/4:0}}(a),getPixel:function(a){return function(L){L*=4;var b=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";return b[L+3]<<24&c.ALPHA_MASK|b[L]<<16&c.RED_MASK|b[L+1]<<8&c.GREEN_MASK|b[L+2]&c.BLUE_MASK}}(a),setPixel:function(a){return function(L,b){var e=4*L,d=a.imageData.data;if(a.isRemote)throw"Image is loaded remotely. Cannot set pixel.";d[e+0]=(b&c.RED_MASK)>>>16;d[e+1]=(b&c.GREEN_MASK)>>>8;d[e+2]=b&c.BLUE_MASK;
d[e+3]=(b&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a),toArray:function(a){return function(){var L=[],b=a.imageData.data,e=a.width*a.height;if(a.isRemote)throw"Image is loaded remotely. Cannot get pixels.";for(var d=0,f=0;d<e;d++,f+=4)L.push(b[f+3]<<24&c.ALPHA_MASK|b[f]<<16&c.RED_MASK|b[f+1]<<8&c.GREEN_MASK|b[f+2]&c.BLUE_MASK);return L}}(a),set:function(a){return function(L){var b,e,d;if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels.";e=a.imageData.data;for(var f=0,g=L.length;f<g;f++)d=
L[f],b=4*f,e[b+0]=(d&c.RED_MASK)>>>16,e[b+1]=(d&c.GREEN_MASK)>>>8,e[b+2]=d&c.BLUE_MASK,e[b+3]=(d&c.ALPHA_MASK)>>>24;a.__isDirty=!0}}(a)}}function Kb(a,b,z,$){var d=new Ga(z,$,c.ARGB);d.fromImageData(e.toImageData(a,b,z,$));return d}function Lb(a,b,z,e,d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h.";var f=new Ga(z,e,c.ARGB),g=f.imageData.data,h=d.width,s=d.height;d=d.imageData.data;var k=Math.max(0,-b),l=Math.max(0,-a);e=Math.min(e,s-b);for(s=Math.min(z,h-a);k<e;++k)for(var n=
4*((b+k)*h+(a+l)),p=4*(k*z+l),m=l;m<s;++m)g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++],g[p++]=d[n++];f.__isDirty=!0;return f}function fb(){Rb&&(g=Nc,Rb=!1,e.updatePixels())}function Mb(){function a(L,b){L[b]=function(){fb();g[b].apply(g,arguments)}}function b(a,L){e.defineProperty(a,L,{get:function(){fb();return g[L]},set:function(a){fb();g[L]=a}})}for(var z in g)"function"===typeof g[z]?a(this,z):b(this,z)}function Ua(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():e.nf(a,
0,3):null===a||a===h?"":a.toString()}function Nb(a,b,z,e){var d;0>a.indexOf("\n")?(a=[a],d=1):(a=a.split(/\r?\n/g),d=a.length);var f=0;Wa===c.TOP?f=Xa+Ma:Wa===c.CENTER?f=Xa/2-(d-1)*Aa/2:Wa===c.BOTTOM&&(f=-(Ma+(d-1)*Aa));for(var g=0;g<d;++g)ha.text$line(a[g],b,z+f,e,nb),f+=Aa}function ac(a,b,z,e,d,f){if(0!==a.length&&(0!==e&&0!==d)&&!(Na>d)){for(var g=-1,h=0,s=0,k=[],l=0,n=a.length;l<n;l++){var p=a[l],m=" "===p,r=ba.measureTextWidth(p);if("\n"!==p&&s+r<=e)m&&(g=l),s+=r;else{if(g+1===h)if(0<l)g=l;else return;
"\n"===p?(k.push({text:a.substring(h,l),width:s}),h=l+1):(k.push({text:a.substring(h,g+1),width:s}),h=g+1);s=0;l=h-1}}h<n&&k.push({text:a.substring(h),width:s});a=1;g=Xa;nb===c.CENTER?a=e/2:nb===c.RIGHT&&(a=e);e=k.length;h=Math.min(e,Math.floor(d/Aa));Wa===c.TOP?g=Xa+Ma:Wa===c.CENTER?g=d/2-Aa*(h/2-1):Wa===c.BOTTOM&&(g=Ma+Aa);for(h=0;h<e;h++){l=h*Aa;if(g+l>d-Ma)break;s=k[h];ha.text$line(s.text,b+a,z+g+l,f,nb)}}}function Ka(a){ha="3D"===a?new B:"2D"===a?new E:new F;for(var b in F.prototype)F.prototype.hasOwnProperty(b)&&
0>b.indexOf("$")&&(e[b]=ha[b]);ha.$init()}function H(a){return function(){Ka("2D");return ha[a].apply(this,arguments)}}function lb(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function mb(a){"function"===typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function Ob(){for(var a in hb)if(hb.hasOwnProperty(a)){e.__keyPressed=!0;return}e.__keyPressed=
!1}function vb(a,b){hb[a]=b;ob=null;e.key=b;e.keyCode=a;e.keyPressed();e.keyCode=0;e.keyTyped();Ob()}function rc(a){var b=lb(a);if(b===c.DELETE)vb(b,new Char(127));else if(0>qd.indexOf(b))ob=b;else{var z=new Char(c.CODED);e.key=z;e.keyCode=b;hb[b]=z;e.keyPressed();ob=null;Ob();return mb(a)}}function Pb(a){if(null!==ob){var b=ob,z;z=a.which||a.keyCode;var c=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(z){case 13:z=c?13:10;break;case 8:z=c?127:8}z=new Char(z);vb(b,z);return mb(a)}}function bc(a){a=
lb(a);var b=hb[a];b!==h&&(e.key=b,e.keyCode=a,e.keyReleased(),delete hb[a],Ob())}if(!(this instanceof M))throw"called Processing constructor as if it were a function: missing 'new'.";var S={},Qb=b===h&&k===h,S=Qb?p.createElement("canvas"):"string"===typeof b?p.getElementById(b):b;if(!("getContext"in S))throw"called Processing constructor without passing canvas element reference or id.";var wb=[],e=this;e.Char=e.Character=Char;a.withCommonFunctions(e);a.withMath(e);a.withProxyFunctions(e,function(a){return Array.prototype.slice.call(a,
1)});a.withTouch(e,S,Ia,p,c);m&&Object.keys(m).forEach(function(a){e[a]=m[a]});e.externals={canvas:S,context:h,sketch:h,window:l};e.name="Processing.js Instance";e.use3DContext=!1;e.focused=!1;e.breakShape=!1;e.glyphTable={};e.pmouseX=0;e.pmouseY=0;e.mouseX=0;e.mouseY=0;e.mouseButton=0;e.mouseScroll=0;e.mouseClicked=h;e.mouseDragged=h;e.mouseMoved=h;e.mousePressed=h;e.mouseReleased=h;e.mouseScrolled=h;e.mouseOver=h;e.mouseOut=h;e.touchStart=h;e.touchEnd=h;e.touchMove=h;e.touchCancel=h;e.key=h;e.keyCode=
h;e.keyPressed=r;e.keyReleased=r;e.keyTyped=r;e.draw=h;e.setup=h;e.__mousePressed=!1;e.__keyPressed=!1;e.__frameRate=60;e.frameCount=0;e.width=100;e.height=100;var g,da,ha,R=!0,ka=[1,1,1,1],La=4294967295,N=!0,C=!0,X=[0,0,0,1],ja=4278190080,ab=!0,ea=1,eb=!1,ra=!1,Da=!0,ma=0,qa=c.CORNER,la=c.CENTER,Gb=0,Eb=0,ub=0,jb=c.NORMAL_MODE_AUTO,tb=60,Kc=1E3/tb,od=S.style.cursor,aa=c.POLYGON,oc=0,pc=20,Lc=!1,kb=-3355444,qc=20,ia=255,xa=255,Ea=255,ya=255,cc=0,dc=0,Va=c.RGB,gb=null,sc=null,Oc=Date.now(),tc=Oc,ec=
0,Ba,Sb,fc,xb,yb,uc,vc,Fa={attributes:{},locations:{}},y,J,na,wc,xc,yc,gc,zc,Tb,Ac,Pc,Bc,Qc,hc,Rc,Sc,Tc,Uc=0,Vc=0,Wc=c.IMAGE,ua=!1,Cc,Dc,Ec,nb=c.LEFT,Wa=c.BASELINE,ic=c.MODEL,zb="Arial",Na=12,Xa=9,Ma=2,Aa=14,ba=PFont.get(zb,Na),Nc,Fc=null,Rb=!1,Xc,Yc=1E3,hb=[],ob=null,qd=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],O=0,jc=0,pb=0,Oa=[],Pa=[],Qa=[],Ub=new A(c.SINCOS_LENGTH),
Vb=new A(c.SINCOS_LENGTH),P,qb,Ra,K,fa,Ab,Bb,Wb,Ha,kc=!1,lc=60*(Math.PI/180),Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,t=[],va=[],oa=0,Cb=!1,Db=!1,ib=!0,Xb=c.CORNER,bd=[],cd=new A([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,
0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),dd=new A([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,
-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),rd=new A([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Hc=new A([0,0,0,0,1,0,1,1,0,1,0,0]),sd=new A([0,0,1,0,0,1,0,0,1,0,0,1]),td="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+
(/Windows/.test(f.userAgent)?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
Ic=function(a,b,z){var c=a.createShader(a.VERTEX_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw a.getShaderInfoLog(c);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,z);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);z=a.createProgram();a.attachShader(z,c);a.attachShader(z,b);a.linkProgram(z);if(!a.getProgramParameter(z,a.LINK_STATUS))throw"Error linking shaders.";return z},ed=function(a,b,z,c,e){return{x:a,
y:b,w:z,h:c}},mc=ed,ud=function(a,b,z,c,e){return{x:a,y:b,w:e?z:z-a,h:e?c:c-b}},vd=function(a,b,z,c,e){return{x:a-z/2,y:b-c/2,w:z,h:c}},W=function(){},E=function(){},B=function(){},F=function(){};E.prototype=new W;E.prototype.constructor=E;B.prototype=new W;B.prototype.constructor=B;F.prototype=new W;F.prototype.constructor=F;W.prototype.a3DOnlyFunction=r;e.shape=function(a,b,z,$,d){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(e.pushMatrix(),Xb===c.CENTER?5===arguments.length?(e.translate(b-
$/2,z-d/2),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length?e.translate(b-a.getWidth()/2,-a.getHeight()/2):e.translate(-a.getWidth()/2,-a.getHeight()/2):Xb===c.CORNER?5===arguments.length?(e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z):Xb===c.CORNERS&&(5===arguments.length?($-=b,d-=z,e.translate(b,z),e.scale($/a.getWidth(),d/a.getHeight())):3===arguments.length&&e.translate(b,z)),a.draw(e),(1===arguments.length&&Xb===c.CENTER||1<arguments.length)&&
e.popMatrix())};e.shapeMode=function(a){Xb=a};e.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};e.loadXML=function(a){return new XML(e,a)};var fd=function(a){for(var b=0,z=0;z<a.length;z++)b=0!==z?Math.max(b,Math.abs(a[z])):Math.abs(a[z]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a},Ya=e.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof Ya?this.set(arguments[0].array()):6===
arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};Ya.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof Ya?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new Ya;a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},
translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},invTranslate:function(a,b){this.translate(-a,-b)},transpose:function(){},mult:function(a,b){var z,c;a instanceof PVector?(z=a.x,c=a.y,b||(b=new PVector)):a instanceof Array&&(z=a[0],c=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*z+this.elements[1]*c+this.elements[2],b[1]=this.elements[3]*z+this.elements[4]*c+this.elements[5]):
b instanceof PVector&&(b.x=this.elements[0]*z+this.elements[1]*c+this.elements[2],b.y=this.elements[3]*z+this.elements[4]*c+this.elements[5],b.z=0);return b},multX:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},multY:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},skewX:function(a){this.apply(1,0,1,a,0,0)},skewY:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,
Math.tan(a),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var a=this.determinant();if(Math.abs(a)>c.MIN_INT){var b=this.elements[0],z=this.elements[1],e=this.elements[2],d=this.elements[3],f=this.elements[4],g=this.elements[5];this.elements[0]=f/a;this.elements[3]=-d/a;this.elements[1]=-z/a;this.elements[4]=b/a;this.elements[2]=(z*g-f*e)/a;this.elements[5]=(d*e-b*g)/a;return!0}return!1},scale:function(a,b){a&&!b&&(b=a);a&&
b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},invScale:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],z=0,c=0;2>c;c++)for(var e=0;3>e;e++,z++)b[z]+=this.elements[3*c+0]*a[e+0]+this.elements[3*
c+1]*a[e+3];this.elements=b.slice()},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof Ya?a=arguments[0].array():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];b[1]=
this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],e=this.elements[1];this.elements[0]=b*c+a*e;this.elements[1]=-a*c+b*e;c=this.elements[3];e=this.elements[4];this.elements[3]=b*c+a*e;this.elements[4]=-a*c+b*e},rotateZ:function(a){this.rotate(a)},invRotateZ:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],
a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+"\n"+e.nfs(this.elements[3],a,4)+" "+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+"\n\n";e.println(a)}};var I=e.PMatrix3D=function(){this.reset()};I.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof I?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},
get:function(){var a=new I;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(a,b,c){c===h&&(c=0);this.elements[3]+=a*this.elements[0]+b*this.elements[1]+c*this.elements[2];this.elements[7]+=a*this.elements[4]+b*this.elements[5]+c*this.elements[6];this.elements[11]+=a*this.elements[8]+b*this.elements[9]+c*this.elements[10];this.elements[15]+=a*this.elements[12]+b*this.elements[13]+c*this.elements[14]},
transpose:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},mult:function(a,b){var c,e,d,f;a instanceof
PVector?(c=a.x,e=a.y,d=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],e=a[1],d=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3]*
f,b[1]=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*e+this.elements[14]*d+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*e+this.elements[2]*d+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*e+this.elements[6]*d+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*e+this.elements[10]*d+this.elements[11]);
return b},preApply:function(){var a;1===arguments.length&&arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[d+0]*a[4*e+0]+this.elements[d+4]*a[4*e+1]+this.elements[d+8]*a[4*e+2]+this.elements[d+12]*a[4*e+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&
arguments[0]instanceof I?a=arguments[0].array():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,e=0;4>e;e++)for(var d=0;4>d;d++,c++)b[c]+=this.elements[4*e+0]*a[d+0]+this.elements[4*e+1]*a[d+4]+this.elements[4*e+2]*a[d+8]+this.elements[4*e+3]*a[d+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(4>arguments.length)this.rotateZ(a);else{var f=new PVector(b,c,d),g=
f.mag();if(0!==g){1!=g&&(f.normalize(),b=f.x,c=f.y,d=f.z);var f=e.cos(a),g=e.sin(a),h=1-f;this.apply(h*b*b+f,h*b*c-g*d,h*b*d+g*c,0,h*b*c+g*d,h*c*c+f,h*c*d-g*b,0,h*b*d-g*c,h*c*d+g*b,h*d*d+f,0,0,0,0,1)}}},invApply:function(){Wb===h&&(Wb=new I);var a=arguments;Wb.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!Wb.invert())return!1;this.preApply(Wb);return!0},rotateX:function(a){var b=e.cos(a);a=e.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=
e.cos(a);a=e.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&(b&&!c)&&(c=1):b=c=a;a&&(b&&c)&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},skewX:function(a){a=
Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},multX:function(a,b,c,e){return c?e?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*e:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*
b+this.elements[3]},multY:function(a,b,c,e){return c?e?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*e:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},multZ:function(a,b,c,e){return e?this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]*e:this.elements[8]*a+this.elements[9]*b+this.elements[10]*c+this.elements[11]},multW:function(a,b,c,e){return e?this.elements[12]*a+
this.elements[13]*b+this.elements[14]*c+this.elements[15]*e:this.elements[12]*a+this.elements[13]*b+this.elements[14]*c+this.elements[15]},invert:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],e=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],d=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],
f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],h=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],s=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],k=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],l=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],n=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],
p=a*n-b*l+c*k+e*s-d*h+f*g;if(1E-9>=Math.abs(p))return!1;var m=[];m[0]=+this.elements[5]*n-this.elements[6]*l+this.elements[7]*k;m[4]=-this.elements[4]*n+this.elements[6]*s-this.elements[7]*h;m[8]=+this.elements[4]*l-this.elements[5]*s+this.elements[7]*g;m[12]=-this.elements[4]*k+this.elements[5]*h-this.elements[6]*g;m[1]=-this.elements[1]*n+this.elements[2]*l-this.elements[3]*k;m[5]=+this.elements[0]*n-this.elements[2]*s+this.elements[3]*h;m[9]=-this.elements[0]*l+this.elements[1]*s-this.elements[3]*
g;m[13]=+this.elements[0]*k-this.elements[1]*h+this.elements[2]*g;m[2]=+this.elements[13]*f-this.elements[14]*d+this.elements[15]*e;m[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;m[10]=+this.elements[12]*d-this.elements[13]*c+this.elements[15]*a;m[14]=-this.elements[12]*e+this.elements[13]*b-this.elements[14]*a;m[3]=-this.elements[9]*f+this.elements[10]*d-this.elements[11]*e;m[7]=+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;m[11]=-this.elements[8]*d+this.elements[9]*
c-this.elements[11]*a;m[15]=+this.elements[8]*e-this.elements[9]*b+this.elements[10]*a;a=1/p;m[0]*=a;m[1]*=a;m[2]*=a;m[3]*=a;m[4]*=a;m[5]*=a;m[6]*=a;m[7]*=a;m[8]*=a;m[9]*=a;m[10]*=a;m[11]*=a;m[12]*=a;m[13]*=a;m[14]*=a;m[15]*=a;this.elements=m.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=fd(this.elements),a=""+e.nfs(this.elements[0],a,4)+" "+e.nfs(this.elements[1],a,4)+" "+e.nfs(this.elements[2],a,4)+" "+
e.nfs(this.elements[3],a,4)+"\n"+e.nfs(this.elements[4],a,4)+" "+e.nfs(this.elements[5],a,4)+" "+e.nfs(this.elements[6],a,4)+" "+e.nfs(this.elements[7],a,4)+"\n"+e.nfs(this.elements[8],a,4)+" "+e.nfs(this.elements[9],a,4)+" "+e.nfs(this.elements[10],a,4)+" "+e.nfs(this.elements[11],a,4)+"\n"+e.nfs(this.elements[12],a,4)+" "+e.nfs(this.elements[13],a,4)+" "+e.nfs(this.elements[14],a,4)+" "+e.nfs(this.elements[15],a,4)+"\n\n";e.println(a)},invTranslate:function(a,b,c){this.preApply(1,0,0,-a,0,1,0,-b,
0,0,1,-c,0,0,0,1)},invRotateX:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},invRotateY:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},invRotateZ:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.preApply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},invScale:function(a,b,c){this.preApply([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};var Za=e.PMatrixStack=function(){this.matrixStack=[]};Za.prototype.load=function(){var a=
ha.$newPMatrix();1===arguments.length?a.set(arguments[0]):a.set(arguments);this.matrixStack.push(a)};E.prototype.$newPMatrix=function(){return new Ya};B.prototype.$newPMatrix=function(){return new I};Za.prototype.push=function(){this.matrixStack.push(this.peek())};Za.prototype.pop=function(){return this.matrixStack.pop()};Za.prototype.peek=function(){var a=ha.$newPMatrix();a.set(this.matrixStack[this.matrixStack.length-1]);return a};Za.prototype.mult=function(a){this.matrixStack[this.matrixStack.length-
1].apply(a)};e.split=function(a,b){return a.split(b)};e.splitTokens=function(a,b){if(b===h)return a.split(/\s+/g);var c=b.split(/()/g),e="",d=a.length,f,g,k=[];for(f=0;f<d;f++)g=a[f],-1<c.indexOf(g)?(""!==e&&k.push(e),e=""):e+=g;""!==e&&k.push(e);return k};e.append=function(a,b){a[a.length]=b;return a};e.concat=function(a,b){return a.concat(b)};e.sort=function(a,b){var c=[];if(0<a.length){for(var e=0<b?b:a.length,d=0;d<e;d++)c.push(a[d]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-
b});if(0<b)for(e=c.length;e<a.length;e++)c.push(a[e])}return c};e.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var e=0;e<b.length;c++,e++)a.splice(c,0,b[e]);else a.splice(c,0,b);return a};e.subset=function(a,b,c){return a.slice(b,c!==h?b+c:a.length)};e.join=function(a,b){return a.join(b)};e.shorten=function(a){for(var b=[],c=a.length,e=0;e<c;e++)b[e]=a[e];b.pop();return b};e.expand=function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};e.arrayCopy=function(){var a,
b=0,c,e=0,d;2===arguments.length?(a=arguments[0],c=arguments[1],d=a.length):3===arguments.length?(a=arguments[0],c=arguments[1],d=arguments[2]):5===arguments.length&&(a=arguments[0],b=arguments[1],c=arguments[2],e=arguments[3],d=arguments[4]);for(var f=b;f<d+b;f++,e++)if(c[e]!==h)c[e]=a[f];else throw"array index out of bounds exception";};e.reverse=function(a){return a.reverse()};e.mix=function(a,b,c){return a+((b-a)*c>>8)};e.peg=function(a){return 0>a?0:255<a?255:a};e.modes=function(){function a(b,
L,c,e,d,yd,z,f,$,h,pd){b=g(((b&4278190080)>>>24)+L,255)<<24;c+=($-c)*L>>8;e+=(h-e)*L>>8;L=d+((pd-d)*L>>8);return b|(0>c?0:255<c?255:c)<<16|(0>e?0:255<e?255:e)<<8|(0>L?0:255<L?255:L)}var b=c.ALPHA_MASK,e=c.RED_MASK,d=c.GREEN_MASK,f=c.BLUE_MASK,g=Math.min,h=Math.max;return{replace:function(a,b){return b},blend:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=L&e,m=L&d,n=L&f;return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},add:function(a,L){var c=(L&b)>>>24;return g(((a&
b)>>>24)+c,255)<<24|g((a&e)+((L&e)>>8)*c,e)&e|g((a&d)+((L&d)>>8)*c,d)&d|g((a&f)+((L&f)*c>>8),f)},subtract:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h((a&e)-((L&e)>>8)*c,d)&e|h((a&d)-((L&d)>>8)*c,f)&d|h((a&f)-((L&f)*c>>8),0)},lightest:function(a,L){var c=(L&b)>>>24;return g(((a&b)>>>24)+c,255)<<24|h(a&e,((L&e)>>8)*c)&e|h(a&d,((L&d)>>8)*c)&d|h(a&f,(L&f)*c>>8)},darkest:function(a,L){var c=(L&b)>>>24,h=a&e,k=a&d,w=a&f,l=g(a&e,((L&e)>>8)*c),m=g(a&d,((L&d)>>8)*c),n=g(a&f,(L&f)*c>>
8);return g(((a&b)>>>24)+c,255)<<24|h+((l-h)*c>>8)&e|k+((m-k)*c>>8)&d|w+((n-w)*c>>8)&f},difference:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h>V?h-V:V-h,k>l?k-l:l-k,w>m?w-m:m-w)},exclusion:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,h+V-(h*V>>7),k+l-(k*l>>7),w+m-(w*m>>7))},multiply:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,
(g&b)>>>24,h,k,w,V,l,m,h*V>>8,k*l>>8,w*m>>8)},screen:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,255-((255-h)*(255-V)>>8),255-((255-k)*(255-l)>>8),255-((255-w)*(255-m)>>8))},hard_light:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>V?h*V>>7:255-((255-h)*(255-V)>>7),128>l?k*l>>7:255-((255-k)*(255-l)>>7),128>m?w*m>>7:255-((255-w)*(255-m)>>7))},soft_light:function(c,g){var h=
(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,(h*V>>7)+(h*h>>8)-(h*h*V>>15),(k*l>>7)+(k*k>>8)-(k*k*l>>15),(w*m>>7)+(w*w>>8)-(w*w*m>>15))},overlay:function(c,g){var h=(c&e)>>16,k=(c&d)>>8,w=c&f,V=(g&e)>>16,l=(g&d)>>8,m=g&f;return a(c,(g&b)>>>24,h,k,w,V,l,m,128>h?h*V>>7:255-((255-h)*(255-V)>>7),128>k?k*l>>7:255-((255-k)*(255-l)>>7),128>w?w*m>>7:255-((255-w)*(255-m)>>7))},dodge:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>
8,n=g&f,p=255;255!==l&&(p=(k<<8)/(255-l),p=0>p?0:255<p?255:p);var r=255;255!==m&&(r=(w<<8)/(255-m),r=0>r?0:255<r?255:r);var t=255;255!==n&&(t=(V<<8)/(255-n),t=0>t?0:255<t?255:t);return a(c,h,k,w,V,l,m,n,p,r,t)},burn:function(c,g){var h=(g&b)>>>24,k=(c&e)>>16,w=(c&d)>>8,V=c&f,l=(g&e)>>16,m=(g&d)>>8,n=g&f,p=0;0!==l&&(p=(255-k<<8)/l,p=255-(0>p?0:255<p?255:p));var r=0;0!==m&&(r=(255-w<<8)/m,r=255-(0>r?0:255<r?255:r));var t=0;0!==n&&(t=(255-V<<8)/n,t=255-(0>t?0:255<t?255:t));return a(c,h,k,w,V,l,m,n,p,
r,t)}}}();e.color=function(a,b,e,d){return a!==h&&b!==h&&e!==h&&d!==h?ta(a,b,e,d):a!==h&&b!==h&&e!==h?ta(a,b,e,ia):a!==h&&b!==h?(a&c.ALPHA_MASK?(b=Math.round(255*(b/ia)),b=255<b?255:b,a=a-(a&c.ALPHA_MASK)+((0>b?0:b)<<24&c.ALPHA_MASK)):a=Va===c.RGB?ta(a,a,a,b):Va===c.HSB?ta(0,0,a/xa*ya,b):void 0,a):"number"===typeof a?$b(a):ta(xa,Ea,ya,ia)};e.color.toString=function(a){return"rgba("+((a&c.RED_MASK)>>>16)+","+((a&c.GREEN_MASK)>>>8)+","+(a&c.BLUE_MASK)+","+((a&c.ALPHA_MASK)>>>24)/255+")"};e.color.toInt=
function(a,b,e,d){return d<<24&c.ALPHA_MASK|a<<16&c.RED_MASK|b<<8&c.GREEN_MASK|e&c.BLUE_MASK};e.color.toArray=function(a){return[(a&c.RED_MASK)>>>16,(a&c.GREEN_MASK)>>>8,a&c.BLUE_MASK,(a&c.ALPHA_MASK)>>>24]};e.color.toGLArray=function(a){return[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255,((a&c.ALPHA_MASK)>>>24)/255]};e.color.toRGB=function(a,b,c){a=a>xa?xa:a;b=b>Ea?Ea:b;c=c>ya?ya:c;a=360*(a/xa);b=100*(b/Ea);c=100*(c/ya);var e=Math.round(255*(c/100));if(0===b)return[e,
e,e];a%=360;var d=a%60,f=Math.round(255*(c*(100-b)/1E4)),g=Math.round(255*(c*(6E3-b*d)/6E5));b=Math.round(255*(c*(6E3-b*(60-d))/6E5));switch(Math.floor(a/60)){case 0:return[e,b,f];case 1:return[g,e,f];case 2:return[f,e,b];case 3:return[f,g,e];case 4:return[b,f,e];case 5:return[e,f,g]}};e.brightness=function(a){return bb(a)[2]};e.saturation=function(a){return bb(a)[1]};e.hue=function(a){return bb(a)[0]};e.red=function(a){return((a&c.RED_MASK)>>>16)/255*xa};e.green=function(a){return((a&c.GREEN_MASK)>>>
8)/255*Ea};e.blue=function(a){return(a&c.BLUE_MASK)/255*ya};e.alpha=function(a){return((a&c.ALPHA_MASK)>>>24)/255*ia};e.lerpColor=function(a,b,d){var f,g,h,k,l,s;a=e.color(a);b=e.color(b);if(Va===c.HSB)return h=bb(a),a=((a&c.ALPHA_MASK)>>>24)/ia,g=bb(b),b=((b&c.ALPHA_MASK)>>>24)/ia,s=e.lerp(h[0],g[0],d),f=e.lerp(h[1],g[1],d),h=e.lerp(h[2],g[2],d),h=e.color.toRGB(s,f,h),d=e.lerp(a,b,d)*ia,d<<24&c.ALPHA_MASK|h[0]<<16&c.RED_MASK|h[1]<<8&c.GREEN_MASK|h[2]&c.BLUE_MASK;f=(a&c.RED_MASK)>>>16;g=(a&c.GREEN_MASK)>>>
8;h=a&c.BLUE_MASK;a=((a&c.ALPHA_MASK)>>>24)/ia;k=(b&c.RED_MASK)>>>16;l=(b&c.GREEN_MASK)>>>8;s=b&c.BLUE_MASK;b=((b&c.ALPHA_MASK)>>>24)/ia;f=e.lerp(f,k,d)|0;g=e.lerp(g,l,d)|0;h=e.lerp(h,s,d)|0;d=e.lerp(a,b,d)*ia;return d<<24&c.ALPHA_MASK|f<<16&c.RED_MASK|g<<8&c.GREEN_MASK|h&c.BLUE_MASK};e.colorMode=function(){Va=arguments[0];1<arguments.length&&(xa=arguments[1],Ea=arguments[2]||arguments[1],ya=arguments[3]||arguments[1],ia=arguments[4]||arguments[1])};e.blendColor=function(a,b,d){if(d===c.REPLACE)return e.modes.replace(a,
b);if(d===c.BLEND)return e.modes.blend(a,b);if(d===c.ADD)return e.modes.add(a,b);if(d===c.SUBTRACT)return e.modes.subtract(a,b);if(d===c.LIGHTEST)return e.modes.lightest(a,b);if(d===c.DARKEST)return e.modes.darkest(a,b);if(d===c.DIFFERENCE)return e.modes.difference(a,b);if(d===c.EXCLUSION)return e.modes.exclusion(a,b);if(d===c.MULTIPLY)return e.modes.multiply(a,b);if(d===c.SCREEN)return e.modes.screen(a,b);if(d===c.HARD_LIGHT)return e.modes.hard_light(a,b);if(d===c.SOFT_LIGHT)return e.modes.soft_light(a,
b);if(d===c.OVERLAY)return e.modes.overlay(a,b);if(d===c.DODGE)return e.modes.dodge(a,b);if(d===c.BURN)return e.modes.burn(a,b)};e.printMatrix=function(){K.print()};E.prototype.translate=function(a,b){K.translate(a,b);fa.invTranslate(a,b);g.translate(a,b)};B.prototype.translate=function(a,b,c){K.translate(a,b,c);fa.invTranslate(a,b,c)};E.prototype.scale=function(a,b){K.scale(a,b);fa.invScale(a,b);g.scale(a,b||a)};B.prototype.scale=function(a,b,c){K.scale(a,b,c);fa.invScale(a,b,c)};E.prototype.transform=
function(a){a=a.array();g.transform(a[0],a[3],a[1],a[4],a[2],a[5])};B.prototype.transformm=function(a){throw"p.transform is currently not supported in 3D mode";};E.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa);g.save()};B.prototype.pushMatrix=function(){Ab.load(K);Bb.load(fa)};E.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop());Sa()};B.prototype.popMatrix=function(){K.set(Ab.pop());fa.set(Bb.pop())};E.prototype.resetMatrix=function(){K.reset();fa.reset();g.setTransform(1,0,
0,1,0,0)};B.prototype.resetMatrix=function(){K.reset();fa.reset()};W.prototype.applyMatrix=function(){var a=arguments;K.apply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);fa.invApply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])};E.prototype.applyMatrix=function(){for(var a=arguments,b=a.length;16>b;b++)a[b]=0;a[10]=a[15]=1;W.prototype.applyMatrix.apply(this,a)};e.rotateX=function(a){K.rotateX(a);fa.invRotateX(a)};
E.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};B.prototype.rotateZ=function(a){K.rotateZ(a);fa.invRotateZ(a)};e.rotateY=function(a){K.rotateY(a);fa.invRotateY(a)};E.prototype.rotate=function(a){K.rotateZ(a);fa.invRotateZ(a);g.rotate(a)};B.prototype.rotate=function(a){4>arguments.length?e.rotateZ(a):(K.rotate(a,arguments[1],arguments[2],arguments[3]),fa.rotate(-a,arguments[1],arguments[2],arguments[3]))};E.prototype.shearX=function(a){K.shearX(a);
g.transform(1,0,a,1,0,0)};B.prototype.shearX=function(a){K.shearX(a)};E.prototype.shearY=function(a){K.shearY(a);g.transform(1,a,0,1,0,0)};B.prototype.shearY=function(a){K.shearY(a)};e.pushStyle=function(){g.save();e.pushMatrix();bd.push({doFill:R,currentFillColor:La,doStroke:C,currentStrokeColor:ja,curTint:gb,curRectMode:qa,curColorMode:Va,colorModeX:xa,colorModeZ:ya,colorModeY:Ea,colorModeA:ia,curTextFont:ba,horizontalTextAlignment:nb,verticalTextAlignment:Wa,textMode:ic,curFontName:zb,curTextSize:Na,
curTextAscent:Xa,curTextDescent:Ma,curTextLeading:Aa})};e.popStyle=function(){var a=bd.pop();if(a)Sa(),e.popMatrix(),R=a.doFill,La=a.currentFillColor,C=a.doStroke,ja=a.currentStrokeColor,gb=a.curTint,qa=a.curRectMode,Va=a.curColorMode,xa=a.colorModeX,ya=a.colorModeZ,Ea=a.colorModeY,ia=a.colorModeA,ba=a.curTextFont,zb=a.curFontName,Na=a.curTextSize,nb=a.horizontalTextAlignment,Wa=a.verticalTextAlignment,ic=a.textMode,Xa=a.curTextAscent,Ma=a.curTextDescent,Aa=a.curTextLeading;else throw"Too many popStyle() without enough pushStyle()";
};e.year=function(){return(new Date).getFullYear()};e.month=function(){return(new Date).getMonth()+1};e.day=function(){return(new Date).getDate()};e.hour=function(){return(new Date).getHours()};e.minute=function(){return(new Date).getMinutes()};e.second=function(){return(new Date).getSeconds()};e.millis=function(){return Date.now()-Oc};E.prototype.redraw=function(){cb();g.lineWidth=ea;var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.save();e.draw();Sa();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;
e.pmouseY=b};B.prototype.redraw=function(){cb();var a=e.pmouseX,b=e.pmouseY;e.pmouseX=cc;e.pmouseY=dc;g.clear(g.DEPTH_BUFFER_BIT);Fa={attributes:{},locations:{}};e.noLights();e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);e.camera();e.draw();cc=e.mouseX;dc=e.mouseY;e.pmouseX=a;e.pmouseY=b};e.noLoop=function(){eb=Da=!1;clearInterval(ma);da.onPause()};e.loop=function(){eb||(tc=Date.now(),ec=0,ma=l.setInterval(function(){try{da.onFrameStart(),e.redraw(),
da.onFrameEnd()}catch(a){throw l.clearInterval(ma),a;}},Kc),eb=Da=!0,da.onLoop())};e.frameRate=function(a){tb=a;Kc=1E3/tb;Da&&(e.noLoop(),e.loop())};e.exit=function(){l.clearInterval(ma);var a=e.externals.canvas.id;q.splice(Zb[a],1);delete Zb[a];delete S.onmousedown;for(var b in M.lib)M.lib.hasOwnProperty(b)&&M.lib[b].hasOwnProperty("detach")&&M.lib[b].detach(e);for(a=wb.length;a--;){var c=wb[a];b=c.elem;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+
d,c)}da.onExit()};e.cursor=function(){if(1<arguments.length||1===arguments.length&&arguments[0]instanceof e.PImage){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";S.style.cursor=a}else S.style.cursor=1===arguments.length?arguments[0]:od};e.noCursor=function(){S.style.cursor=
c.NOCURSOR};e.link=function(a,b){b!==h?l.open(a,b):l.location=a};e.beginDraw=r;e.endDraw=r;E.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;return g.getImageData(a,b,c,d)};B.prototype.toImageData=function(a,b,c,d){a=a!==h?a:0;b=b!==h?b:0;c=c!==h?c:e.width;d=d!==h?d:e.height;var f=p.createElement("canvas").getContext("2d").createImageData(c,d),k=new ga(4*c*d);g.readPixels(a,b,c,d,g.RGBA,g.UNSIGNED_BYTE,k);a=0;b=k.length;for(var w=f.data;a<b;a++)w[a]=
k[4*(d-1-Math.floor(a/4/c))*c+a%(4*c)];return f};e.status=function(a){l.status=a};e.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var e="";0<c;)e+=a>>>--c&1?"1":"0";return e};e.unbinary=function(a){for(var b=a.length-1,c=1,e=0;0<=b;){var d=a[b--];if("0"!==d&&"1"!==d)throw"the value passed into unbinary was not an 8 bit binary number";"1"===d&&(e+=c);c<<=1}return e};e.hex=function(a,b){1===arguments.length&&(b=a instanceof Char?4:
8);var c=a,e=b,e=e===h||null===e?e=8:e;0>c&&(c=4294967295+c+1);for(c=Number(c).toString(16).toUpperCase();c.length<e;)c="0"+c;c.length>=e&&(c=c.substring(c.length-e,c.length));return c};e.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Fb(a[c]));return b}return Fb(a)};e.loadStrings=function(a){if(G[a])return G[a].split("\n");a=d(a);if("string"!==typeof a||""===a)return[];a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};e.saveStrings=function(a,b){G[a]=
b.join("\n")};e.loadBytes=function(a){a=d(a);for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};e.matchAll=function(a,b){for(var c=[],e,d=RegExp(b,"g");null!==(e=d.exec(a));)c.push(e),0===e[0].length&&++d.lastIndex;return 0<c.length?c:null};e.match=function(a,b){return a.match(b)};e.println=function(a){M.logger.println(a)};e.print=function(a){M.logger.print(a)};e.str=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+
""};e.parseBoolean=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(db(a[c]));return b}return db(a)};e.parseByte=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};e.parseChar=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";
};e.parseFloat=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(Hb(a[c]));return b}return Hb(a)};e.parseInt=function(a,b){if(a instanceof Array){for(var c=[],e=0;e<a.length;e++)"string"!==typeof a[e]||/^\s*[+\-]?\d+\s*$/.test(a[e])?c.push(Ib(a[e],b)):c.push(0);return c}return Ib(a,b)};e.__int_cast=function(a){return 0|a};e.__instanceof=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===
Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.$isInterface){for(var e=[];c;)c.$interfaces&&(e=e.concat(c.$interfaces)),c=c.$base;for(;0<e.length;){c=e.shift();if(c===b)return!0;c.$interfaces&&(e=e.concat(c.$interfaces))}return!1}for(;c.hasOwnProperty("$base");)if(c=c.$base,c===b)return!0;return!1};W.prototype.size=function(a,b,d){C&&e.stroke(0);R&&e.fill(255);d={fillStyle:g.fillStyle,strokeStyle:g.strokeStyle,lineCap:g.lineCap,lineJoin:g.lineJoin};
0<S.style.length&&(S.style.removeProperty("width"),S.style.removeProperty("height"));S.width=e.width=a||100;S.height=e.height=b||100;for(var f in d)d.hasOwnProperty(f)&&(g[f]=d[f]);e.textFont(ba);e.background();Yc=Math.max(1E3,0.05*a*b);e.externals.context=g;for(a=0;a<c.SINCOS_LENGTH;a++)Ub[a]=e.sin(0.5*a*(c.PI/180)),Vb[a]=e.cos(0.5*a*(c.PI/180))};E.prototype.size=function(a,b,c){g===h&&(g=S.getContext("2d"),Ab=new Za,Bb=new Za,K=new Ya,fa=new Ya);W.prototype.size.apply(this,arguments)};B.prototype.size=
function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{S.width=e.width=b||100;S.height=e.height=c||100;for(var f=S,h=["experimental-webgl","webgl","webkit-3d"],k,l=0,s=h.length;l<s&&!(k=f.getContext(h[l],{antialias:!1,preserveDrawingBuffer:!0}));l++);g=k;Sc=g.createTexture();Tc=g.createTexture()}catch(m){M.debug(m)}if(!g)throw"WebGL context is not supported on this browser.";g.viewport(0,0,S.width,S.height);g.enable(g.DEPTH_TEST);g.enable(g.BLEND);
g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);J=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}");
na=Ic(g,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}");
e.strokeWeight(1);y=Ic(g,td,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}");g.useProgram(y);Y("usingTexture3d",y,"usingTexture",ua);e.lightFalloff(1,0,0);e.shininess(1);e.ambient(255,255,255);e.specular(0,0,0);e.emissive(0,0,0);wc=g.createBuffer();
g.bindBuffer(g.ARRAY_BUFFER,wc);g.bufferData(g.ARRAY_BUFFER,cd,g.STATIC_DRAW);xc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,xc);g.bufferData(g.ARRAY_BUFFER,rd,g.STATIC_DRAW);yc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,yc);g.bufferData(g.ARRAY_BUFFER,dd,g.STATIC_DRAW);gc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,gc);g.bufferData(g.ARRAY_BUFFER,Hc,g.STATIC_DRAW);zc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,zc);g.bufferData(g.ARRAY_BUFFER,sd,g.STATIC_DRAW);Tb=g.createBuffer();Ac=g.createBuffer();
Pc=g.createBuffer();Bc=g.createBuffer();Qc=g.createBuffer();Rc=g.createBuffer();hc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,hc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,0]),g.STATIC_DRAW);Cc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Cc);g.bufferData(g.ARRAY_BUFFER,new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),g.STATIC_DRAW);Dc=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,Dc);g.bufferData(g.ARRAY_BUFFER,new A([0,0,1,0,1,1,0,1]),g.STATIC_DRAW);Ec=g.createBuffer();g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,Ec);
g.bufferData(g.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),g.STATIC_DRAW);qb=new I;Ra=new I;K=new I;fa=new I;Ha=new I;e.camera();e.perspective();Ab=new Za;Bb=new Za;Sb=new I;fc=new I;xb=new I;yb=new I;uc=new I;vc=new I;vc.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);W.prototype.size.apply(this,arguments)}}();E.prototype.ambientLight=W.prototype.a3DOnlyFunction;B.prototype.ambientLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,
-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",0);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.directionalLight=W.prototype.a3DOnlyFunction;B.prototype.directionalLight=function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+
" lights";g.useProgram(y);var k=new I;k.scale(1,-1,1);k.apply(K.array());k=k.array();d=[k[0]*d+k[4]*f+k[8]*h,k[1]*d+k[5]*f+k[9]*h,k[2]*d+k[6]*f+k[10]*h];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d);Y("uLights.type.3d."+O,y,"uLights"+O+".type",1);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.lightFalloff=W.prototype.a3DOnlyFunction;B.prototype.lightFalloff=
function(a,b,c){g.useProgram(y);T("uFalloff3d",y,"uFalloff",[a,b,c])};E.prototype.lightSpecular=W.prototype.a3DOnlyFunction;B.prototype.lightSpecular=function(a,b,e){a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uSpecular3d",y,"uSpecular",a)};e.lights=function(){e.ambientLight(128,128,128);e.directionalLight(128,128,128,0,0,-1);e.lightFalloff(1,0,0);e.lightSpecular(0,0,0)};E.prototype.pointLight=W.prototype.a3DOnlyFunction;B.prototype.pointLight=
function(a,b,e,d,f,h){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);a=ta(a,b,e,0);a=[((a&c.RED_MASK)>>>16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255];g.useProgram(y);T("uLights.color.3d."+O,y,"uLights"+O+".color",a);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());Y("uLights.type.3d."+O,y,"uLights"+O+".type",2);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.noLights=W.prototype.a3DOnlyFunction;
B.prototype.noLights=function(){O=0;g.useProgram(y);Y("uLightCount3d",y,"uLightCount",O)};E.prototype.spotLight=W.prototype.a3DOnlyFunction;B.prototype.spotLight=function(a,b,e,d,f,h,k,l,s,m,n){if(O===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights";g.useProgram(y);d=new PVector(d,f,h);f=new I;f.scale(1,-1,1);f.apply(K.array());f.mult(d,d);f=f.array();k=[f[0]*k+f[4]*l+f[8]*s,f[1]*k+f[5]*l+f[9]*s,f[2]*k+f[6]*l+f[10]*s];a=ta(a,b,e,0);T("uLights.color.3d."+O,y,"uLights"+O+".color",[((a&c.RED_MASK)>>>
16)/255,((a&c.GREEN_MASK)>>>8)/255,(a&c.BLUE_MASK)/255]);T("uLights.position.3d."+O,y,"uLights"+O+".position",d.array());T("uLights.direction.3d."+O,y,"uLights"+O+".direction",k);T("uLights.concentration.3d."+O,y,"uLights"+O+".concentration",n);T("uLights.angle.3d."+O,y,"uLights"+O+".angle",m);Y("uLights.type.3d."+O,y,"uLights"+O+".type",3);Y("uLightCount3d",y,"uLightCount",++O)};E.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode";};B.prototype.beginCamera=function(){if(kc)throw"You cannot call beginCamera() again before calling endCamera()";
kc=!0;K=Ra;fa=qb};E.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode";};B.prototype.endCamera=function(){if(!kc)throw"You cannot call endCamera() before calling beginCamera()";K.set(qb);fa.set(Ra);kc=!1};e.camera=function(a,b,c,d,f,g,k,l,s){a===h&&(Gc=e.width/2,rb=e.height/2,sb=rb/Math.tan(lc/2),a=Gc,b=rb,c=sb,d=Gc,f=rb,k=g=0,l=1,s=0);d=new PVector(a-d,b-f,c-g);var m=new PVector(k,l,s);d.normalize();s=PVector.cross(m,d);m=PVector.cross(d,s);s.normalize();m.normalize();
k=s.x;l=s.y;s=s.z;f=m.x;g=m.y;var m=m.z,n=d.x,p=d.y;d=d.z;qb.set(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);qb.translate(-a,-b,-c);Ra.reset();Ra.invApply(k,l,s,0,f,g,m,0,n,p,d,0,0,0,0,1);Ra.translate(a,b,c);K.set(qb);fa.set(Ra)};e.perspective=function(a,b,c,d){0===arguments.length&&(rb=S.height/2,sb=rb/Math.tan(lc/2),Zc=sb/10,$c=10*sb,ad=e.width/e.height,a=lc,b=ad,c=Zc,d=$c);var f,g;f=c*Math.tan(a/2);g=-f;e.frustum(g*b,f*b,g,f,c,d)};E.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";
};B.prototype.frustum=function(a,b,c,e,d,f){Ha=new I;Ha.set(2*d/(b-a),0,(b+a)/(b-a),0,0,2*d/(e-c),(e+c)/(e-c),0,0,0,-(f+d)/(f-d),-(2*f*d)/(f-d),0,0,-1,0);a=new I;a.set(Ha);a.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,a.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,a.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,a.array())};e.ortho=function(a,b,c,d,f,h){0===arguments.length&&(a=0,b=e.width,c=0,d=e.height,f=-10,h=10);var k=2/(b-a),l=2/(d-c),s=-2/
(h-f),m=-(b+a)/(b-a),n=-(d+c)/(d-c),p=-(h+f)/(h-f);Ha=new I;Ha.set(k,0,0,m,0,l,0,n,0,0,s,p,0,0,0,1);k=new I;k.set(Ha);k.transpose();g.useProgram(J);U("projection2d",J,"uProjection",!1,k.array());g.useProgram(y);U("projection3d",y,"uProjection",!1,k.array());g.useProgram(na);U("uProjectionUS",na,"uProjection",!1,k.array())};e.printProjection=function(){Ha.print()};e.printCamera=function(){qb.print()};E.prototype.box=W.prototype.a3DOnlyFunction;B.prototype.box=function(a,b,c){b&&c||(b=c=a);var e=new I;
e.scale(a,b,c);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();R&&(g.useProgram(y),U("model3d",y,"uModel",!1,e.array()),U("view3d",y,"uView",!1,a.array()),g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(b=new I,b.set(a),c=new I,c.set(e),b.mult(c),c=new I,c.set(b),c.invert(),c.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,c.array()),Z("aNormal3d",y,"aNormal",3,xc)):sa("aNormal3d",y,"aNormal"),Z("aVertex3d",y,"aVertex",3,wc),sa("aColor3d",y,
"aColor"),sa("aTexture3d",y,"aTexture"),g.drawArrays(g.TRIANGLES,0,cd.length/3),g.disable(g.POLYGON_OFFSET_FILL));0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,e.array()),U("uView2d",J,"uView",!1,a.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("vertex2d",J,"aVertex",3,yc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINES,0,dd.length/3))};e.sphereDetail=function(a,b){var e;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==pb||
b!==jc){var d=c.SINCOS_LENGTH/a,f=new A(a),h=new A(a);for(e=0;e<a;e++)f[e]=Vb[e*d%c.SINCOS_LENGTH|0],h[e]=Ub[e*d%c.SINCOS_LENGTH|0];e=a*(b-1)+2;d=0;Oa=new A(e);Pa=new A(e);Qa=new A(e);var k=0.5*c.SINCOS_LENGTH/b,l=k;for(e=1;e<b;e++){for(var s=Ub[l%c.SINCOS_LENGTH|0],m=-Vb[l%c.SINCOS_LENGTH|0],n=0;n<a;n++)Oa[d]=f[n]*s,Pa[d]=m,Qa[d++]=h[n]*s;l+=k}pb=a;jc=b;P=[];for(f=0;f<pb;f++)P.push(0),P.push(-1),P.push(0),P.push(Oa[f]),P.push(Pa[f]),P.push(Qa[f]);P.push(0);P.push(-1);P.push(0);P.push(Oa[0]);P.push(Pa[0]);
P.push(Qa[0]);k=0;for(f=2;f<jc;f++){h=e=k;d=k+=pb;for(l=0;l<pb;l++)P.push(Oa[h]),P.push(Pa[h]),P.push(Qa[h++]),P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d++]);h=e;d=k;P.push(Oa[h]);P.push(Pa[h]);P.push(Qa[h]);P.push(Oa[d]);P.push(Pa[d]);P.push(Qa[d])}for(f=0;f<pb;f++)d=k+f,P.push(Oa[d]),P.push(Pa[d]),P.push(Qa[d]),P.push(0),P.push(1),P.push(0);P.push(Oa[k]);P.push(Pa[k]);P.push(Qa[k]);P.push(0);P.push(1);P.push(0);g.bindBuffer(g.ARRAY_BUFFER,Tb);g.bufferData(g.ARRAY_BUFFER,new A(P),g.STATIC_DRAW)}};E.prototype.sphere=
W.prototype.a3DOnlyFunction;B.prototype.sphere=function(a){(3>pb||2>jc)&&e.sphereDetail(30);var b=new I;b.scale(a,a,a);a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();if(R){if(0<O){var c=new I;c.set(a);var d=new I;d.set(b);c.mult(d);d=new I;d.set(c);d.invert();d.transpose();U("uNormalTransform3d",y,"uNormalTransform",!1,d.array());Z("aNormal3d",y,"aNormal",3,Tb)}else sa("aNormal3d",y,"aNormal");g.useProgram(y);sa("aTexture3d",y,"aTexture");U("uModel3d",y,"uModel",!1,b.array());U("uView3d",
y,"uView",!1,a.array());Z("aVertex3d",y,"aVertex",3,Tb);sa("aColor3d",y,"aColor");g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("uColor3d",y,"uColor",ka);g.drawArrays(g.TRIANGLE_STRIP,0,P.length/3);g.disable(g.POLYGON_OFFSET_FILL)}0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,b.array()),U("uView2d",J,"uView",!1,a.array()),Z("aVertex2d",J,"aVertex",3,Tb),sa("aTextureCoord2d",J,"aTextureCoord"),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),g.drawArrays(g.LINE_STRIP,
0,P.length/3))};e.modelX=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[0]*f+d[1]*g+d[2]*h+d[3]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};e.modelY=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[4]*f+d[5]*g+d[6]*h+d[7]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*
b;return 0!==d?a/d:a};e.modelZ=function(a,b,c){var e=K.array(),d=Ra.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*g+d[14]*h+d[15]*b;return 0!==d?a/d:a};E.prototype.ambient=W.prototype.a3DOnlyFunction;B.prototype.ambient=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialAmbient3d",y,"uMaterialAmbient",e.color.toGLArray(a).slice(0,
3))};E.prototype.emissive=W.prototype.a3DOnlyFunction;B.prototype.emissive=function(a,b,c){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialEmissive3d",y,"uMaterialEmissive",e.color.toGLArray(a).slice(0,3))};E.prototype.shininess=W.prototype.a3DOnlyFunction;B.prototype.shininess=function(a){g.useProgram(y);Y("uUsingMat3d",y,"uUsingMat",!0);T("uShininess3d",y,"uShininess",a)};E.prototype.specular=W.prototype.a3DOnlyFunction;B.prototype.specular=function(a,b,c){g.useProgram(y);
Y("uUsingMat3d",y,"uUsingMat",!0);a=e.color(a,b,c);T("uMaterialSpecular3d",y,"uMaterialSpecular",e.color.toGLArray(a).slice(0,3))};e.screenX=function(a,b,c){var d=K.array();if(16===d.length){var f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[0]*f+c[1]*g+c[2]*h+c[3]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.width*(1+a)/2}return K.multX(a,b)};e.screenY=function(a,b,c){var d=K.array();if(16===d.length){var f=
d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],h=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=Ha.array();a=c[4]*f+c[5]*g+c[6]*h+c[7]*b;f=c[12]*f+c[13]*g+c[14]*h+c[15]*b;0!==f&&(a/=f);return e.height*(1+a)/2}return K.multY(a,b)};e.screenZ=function(a,b,c){var e=K.array();if(16!==e.length)return 0;var d=Ha.array(),f=e[0]*a+e[1]*b+e[2]*c+e[3],g=e[4]*a+e[5]*b+e[6]*c+e[7],h=e[8]*a+e[9]*b+e[10]*c+e[11];b=e[12]*a+e[13]*b+e[14]*c+e[15];a=d[8]*f+d[9]*g+d[10]*h+d[11]*b;d=d[12]*f+d[13]*
g+d[14]*h+d[15]*b;0!==d&&(a/=d);return(a+1)/2};W.prototype.fill=function(){var a=e.color.apply(this,arguments);a===La&&R||(R=!0,La=a)};E.prototype.fill=function(){W.prototype.fill.apply(this,arguments);N=!0};B.prototype.fill=function(){W.prototype.fill.apply(this,arguments);ka=e.color.toGLArray(La)};e.noFill=function(){R=!1};W.prototype.stroke=function(){var a=e.color.apply(this,arguments);a===ja&&C||(C=!0,ja=a)};E.prototype.stroke=function(){W.prototype.stroke.apply(this,arguments);ab=!0};B.prototype.stroke=
function(){W.prototype.stroke.apply(this,arguments);X=e.color.toGLArray(ja)};e.noStroke=function(){C=!1};W.prototype.strokeWeight=function(a){ea=a};E.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.lineWidth=a};B.prototype.strokeWeight=function(a){W.prototype.strokeWeight.apply(this,arguments);g.useProgram(J);T("pointSize2d",J,"uPointSize",a);g.useProgram(na);T("pointSizeUnlitShape",na,"uPointSize",a);g.lineWidth(a)};e.strokeCap=function(a){ha.$ensureContext().lineCap=
a};e.strokeJoin=function(a){ha.$ensureContext().lineJoin=a};E.prototype.smooth=function(){ra=!0;var a=S.style;a.setProperty("image-rendering","optimizeQuality","important");a.setProperty("-ms-interpolation-mode","bicubic","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!0)};B.prototype.smooth=function(){ra=!0};E.prototype.noSmooth=function(){ra=!1;var a=S.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges",
"important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor","important");g.hasOwnProperty("mozImageSmoothingEnabled")&&(g.mozImageSmoothingEnabled=!1)};B.prototype.noSmooth=function(){ra=!1};E.prototype.point=function(a,b){C&&(a=Math.round(a),b=Math.round(b),g.fillStyle=e.color.toString(ja),N=!0,1<ea?(g.beginPath(),g.arc(a,b,ea/2,0,c.TWO_PI,!1),g.fill()):
g.fillRect(a,b,1,1))};B.prototype.point=function(a,b,c){var e=new I;e.translate(a,b,c||0);e.transpose();a=new I;a.scale(1,-1,1);a.apply(K.array());a.transpose();g.useProgram(J);U("uModel2d",J,"uModel",!1,e.array());U("uView2d",J,"uView",!1,a.array());0<ea&&C&&(T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Y("uSmooth2d",J,"uSmooth",ra),Z("aVertex2d",J,"aVertex",3,hc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.POINTS,0,1))};e.beginShape=function(a){aa=a;t=[]};E.prototype.vertex=
function(a,b,c){var e=[];ib&&(ib=!1);e.isVert=!0;e[0]=a;e[1]=b;e[2]=0;e[3]=0;e[4]=0;e[5]=La;e[6]=ja;t.push(e);c&&(t[t.length-1].moveTo=c)};B.prototype.vertex=function(a,b,e,d,f){var g=[];ib&&(ib=!1);g.isVert=!0;f===h&&ua&&(f=d,d=e,e=0);d!==h&&f!==h&&(Wc===c.IMAGE&&(d/=Uc,f/=Vc),d=1<d?1:d,d=0>d?0:d,f=1<f?1:f,f=0>f?0:f);g[0]=a;g[1]=b;g[2]=e||0;g[3]=d||0;g[4]=f||0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.push(g)};var gd=function(a,
b){var c=new I;c.scale(1,-1,1);c.apply(K.array());c.transpose();g.useProgram(na);U("uViewUS",na,"uView",!1,c.array());Y("uSmoothUS",na,"uSmooth",ra);Z("aVertexUS",na,"aVertex",3,hc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(b),g.STREAM_DRAW);g.drawArrays(g.POINTS,0,a.length/3)},Ca=function(a,b,c){b="LINES"===b?g.LINES:"LINE_LOOP"===b?g.LINE_LOOP:g.LINE_STRIP;var e=new I;e.scale(1,-1,1);e.apply(K.array());e.transpose();g.useProgram(na);
U("uViewUS",na,"uView",!1,e.array());Z("aVertexUS",na,"aVertex",3,Ac);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);Z("aColorUS",na,"aColor",4,Qc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);g.drawArrays(b,0,a.length/3)},$a=function(a,b,c,e){b="TRIANGLES"===b?g.TRIANGLES:"TRIANGLE_FAN"===b?g.TRIANGLE_FAN:g.TRIANGLE_STRIP;var d=new I;d.scale(1,-1,1);d.apply(K.array());d.transpose();g.useProgram(y);U("model3d",y,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);U("view3d",y,"uView",!1,d.array());
g.enable(g.POLYGON_OFFSET_FILL);g.polygonOffset(1,1);T("color3d",y,"uColor",[-1,0,0,0]);Z("vertex3d",y,"aVertex",3,Pc);g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW);ua&&null!==gb&&sc(c);Z("aColor3d",y,"aColor",4,Bc);g.bufferData(g.ARRAY_BUFFER,new A(c),g.STREAM_DRAW);sa("aNormal3d",y,"aNormal");ua&&(Y("uUsingTexture3d",y,"uUsingTexture",ua),Z("aTexture3d",y,"aTexture",2,Rc),g.bufferData(g.ARRAY_BUFFER,new A(e),g.STREAM_DRAW));g.drawArrays(b,0,a.length/3);g.disable(g.POLYGON_OFFSET_FILL)};E.prototype.endShape=
function(a){if(0!==t.length){(a=a===c.CLOSE)&&t.push(t[0]);var b=[],d=[],f=[],k=[],l;ib=!0;var w,m,s=t.length;for(w=0;w<s;w++)for(l=t[w],m=0;3>m;m++)b.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=5;9>m;m++)d.push(l[m]);for(w=0;w<s;w++)for(l=t[w],m=9;13>m;m++)f.push(l[m]);for(w=0;w<s;w++)l=t[w],k.push(l[3]),k.push(l[4]);if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h)if(aa===c.POINTS)for(w=0;w<s;w++)l=t[w],C&&e.stroke(l[6]),e.point(l[0],l[1]);else if(aa===c.LINES)for(w=0;w+1<s;w+=2)l=t[w],
C&&e.stroke(t[w+1][6]),e.line(l[0],l[1],t[w+1][0],t[w+1][1]);else if(aa===c.TRIANGLES)for(w=0;w+2<s;w+=3)l=t[w],g.beginPath(),g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),R&&(e.fill(t[w+2][5]),wa()),C&&(e.stroke(t[w+2][6]),za()),g.closePath();else if(aa===c.TRIANGLE_STRIP)for(w=0;w+1<s;w++)l=t[w],g.beginPath(),g.moveTo(t[w+1][0],t[w+1][1]),g.lineTo(l[0],l[1]),C&&e.stroke(t[w+1][6]),R&&e.fill(t[w+1][5]),w+2<s&&(g.lineTo(t[w+2][0],t[w+2][1]),C&&
e.stroke(t[w+2][6]),R&&e.fill(t[w+2][5])),Ta();else if(aa===c.TRIANGLE_FAN){if(2<s)for(g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[1][0],t[1][1]),g.lineTo(t[2][0],t[2][1]),R&&(e.fill(t[2][5]),wa()),C&&(e.stroke(t[2][6]),za()),g.closePath(),w=3;w<s;w++)l=t[w],g.beginPath(),g.moveTo(t[0][0],t[0][1]),g.lineTo(t[w-1][0],t[w-1][1]),g.lineTo(l[0],l[1]),R&&(e.fill(l[5]),wa()),C&&(e.stroke(l[6]),za()),g.closePath()}else if(aa===c.QUADS)for(w=0;w+3<s;w+=4){l=t[w];g.beginPath();g.moveTo(l[0],l[1]);for(m=
1;4>m;m++)g.lineTo(t[w+m][0],t[w+m][1]);g.lineTo(l[0],l[1]);R&&(e.fill(t[w+3][5]),wa());C&&(e.stroke(t[w+3][6]),za());g.closePath()}else if(aa===c.QUAD_STRIP){if(3<s)for(w=0;w+1<s;w+=2)l=t[w],g.beginPath(),w+3<s?(g.moveTo(t[w+2][0],t[w+2][1]),g.lineTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1]),g.lineTo(t[w+3][0],t[w+3][1]),R&&e.fill(t[w+3][5]),C&&e.stroke(t[w+3][6])):(g.moveTo(l[0],l[1]),g.lineTo(t[w+1][0],t[w+1][1])),Ta()}else{g.beginPath();g.moveTo(t[0][0],t[0][1]);for(w=1;w<s;w++)l=t[w],l.isVert&&
(l.moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]));Ta()}else{g.beginPath();for(w=0;w<s;w++)l=t[w],t[w].isVert?t[w].moveTo?g.moveTo(l[0],l[1]):g.lineTo(l[0],l[1]):g.bezierCurveTo(t[w][0],t[w][1],t[w][2],t[w][3],t[w][4],t[w][5]);Ta()}else if(3<s){b=[];d=1-oc;g.beginPath();g.moveTo(t[1][0],t[1][1]);for(w=1;w+2<s;w++)l=t[w],b[0]=[l[0],l[1]],b[1]=[l[0]+(d*t[w+1][0]-d*t[w-1][0])/6,l[1]+(d*t[w+1][1]-d*t[w-1][1])/6],b[2]=[t[w+1][0]+(d*t[w][0]-d*t[w+2][0])/6,t[w+1][1]+(d*t[w][1]-d*t[w+2][1])/6],b[3]=[t[w+
1][0],t[w+1][1]],g.bezierCurveTo(b[1][0],b[1][1],b[2][0],b[2][1],b[3][0],b[3][1]);Ta()}Db=Cb=!1;va=[];oa=0;a&&t.pop()}};B.prototype.endShape=function(a){if(0!==t.length){var b=a===c.CLOSE;a=[];var e=[],d=[],f=[],k=[],l;ib=!0;var m,s,n=t.length;for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)e.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);for(m=0;m<n;m++)l=t[m],k.push(l[3]),k.push(l[4]);if(b){e.push(t[0][0]);e.push(t[0][1]);e.push(t[0][2]);
for(m=5;9>m;m++)d.push(t[0][m]);for(m=9;13>m;m++)f.push(t[0][m]);k.push(t[0][3]);k.push(t[0][4])}if(!Cb||aa!==c.POLYGON&&aa!==h)if(!Db||aa!==c.POLYGON&&aa!==h){if(aa===c.POINTS){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);gd(a,f)}else if(aa===c.LINES){for(m=0;m<n;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;m<n;m++)for(l=t[m],s=5;9>s;s++)d.push(l[s]);Ca(a,"LINES",f)}else if(aa===c.TRIANGLES){if(2<n)for(m=0;m+2<n;m+=3){e=[];k=[];a=[];d=[];f=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+
s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)d.push(t[m+s][b]),f.push(t[m+s][b+4]);C&&Ca(a,"LINE_LOOP",f);(R||ua)&&$a(e,"TRIANGLES",d,k)}}else if(aa===c.TRIANGLE_STRIP){if(2<n)for(m=0;m+2<n;m++){a=[];e=[];f=[];d=[];k=[];for(s=0;3>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]),e.push(t[m+s][b]);for(s=0;3>s;s++)for(b=3;5>b;b++)k.push(t[m+s][b]);for(s=0;3>s;s++)for(b=5;9>b;b++)f.push(t[m+s][b+4]),d.push(t[m+s][b]);(R||ua)&&$a(e,"TRIANGLE_STRIP",
d,k);C&&Ca(a,"LINE_LOOP",f)}}else if(aa===c.TRIANGLE_FAN){if(2<n){for(m=0;3>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;3>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);C&&Ca(a,"LINE_LOOP",f);for(m=2;m+1<n;m++){a=[];f=[];a.push(t[0][0]);a.push(t[0][1]);a.push(t[0][2]);f.push(t[0][9]);f.push(t[0][10]);f.push(t[0][11]);f.push(t[0][12]);for(s=0;2>s;s++)for(b=0;3>b;b++)a.push(t[m+s][b]);for(s=0;2>s;s++)for(b=9;13>b;b++)f.push(t[m+s][b]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}}else if(aa===
c.QUADS)for(m=0;m+3<n;m+=4){a=[];for(s=0;4>s;s++)for(l=t[m+s],b=0;3>b;b++)a.push(l[b]);C&&Ca(a,"LINE_LOOP",f);if(R){e=[];d=[];k=[];for(s=0;3>s;s++)e.push(t[m][s]);for(s=5;9>s;s++)d.push(t[m][s]);for(s=0;3>s;s++)e.push(t[m+1][s]);for(s=5;9>s;s++)d.push(t[m+1][s]);for(s=0;3>s;s++)e.push(t[m+3][s]);for(s=5;9>s;s++)d.push(t[m+3][s]);for(s=0;3>s;s++)e.push(t[m+2][s]);for(s=5;9>s;s++)d.push(t[m+2][s]);ua&&(k.push(t[m+0][3]),k.push(t[m+0][4]),k.push(t[m+1][3]),k.push(t[m+1][4]),k.push(t[m+3][3]),k.push(t[m+
3][4]),k.push(t[m+2][3]),k.push(t[m+2][4]));$a(e,"TRIANGLE_STRIP",d,k)}}else if(aa===c.QUAD_STRIP){if(3<n){for(m=0;2>m;m++)for(l=t[m],s=0;3>s;s++)a.push(l[s]);for(m=0;2>m;m++)for(l=t[m],s=9;13>s;s++)f.push(l[s]);Ca(a,"LINE_STRIP",f);4<n&&0<n%2&&(e.splice(e.length-3),t.pop());for(m=0;m+3<n;m+=2){a=[];f=[];for(s=0;3>s;s++)a.push(t[m+1][s]);for(s=0;3>s;s++)a.push(t[m+3][s]);for(s=0;3>s;s++)a.push(t[m+2][s]);for(s=0;3>s;s++)a.push(t[m+0][s]);for(s=9;13>s;s++)f.push(t[m+1][s]);for(s=9;13>s;s++)f.push(t[m+
3][s]);for(s=9;13>s;s++)f.push(t[m+2][s]);for(s=9;13>s;s++)f.push(t[m+0][s]);C&&Ca(a,"LINE_STRIP",f)}(R||ua)&&$a(e,"TRIANGLE_LIST",d,k)}}else if(1===n){for(s=0;3>s;s++)a.push(t[0][s]);for(s=9;13>s;s++)f.push(t[0][s]);gd(a,f)}else{for(m=0;m<n;m++){l=t[m];for(s=0;3>s;s++)a.push(l[s]);for(s=5;9>s;s++)f.push(l[s])}C&&b?Ca(a,"LINE_LOOP",f):C&&!b&&Ca(a,"LINE_STRIP",f);(R||ua)&&$a(e,"TRIANGLE_FAN",d,k)}ua=!1;g.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)}else a=e,a.splice(a.length-3),f.splice(f.length-
4),C&&Ca(a,null,f),R&&$a(e,"TRIANGLES",d);else C&&Ca(e,null,f),R&&$a(e,null,d);Db=Cb=!1;va=[];oa=0}};var hd=function(a,b){var c=1/a,e=c*c,d=e*c;b.set(0,0,0,1,d,e,c,0,6*d,2*e,0,0,6*d,0,0,0)},id=function(){xb||(Sb=new I,xb=new I,Lc=!0);var a=oc;Sb.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);hd(pc,xb);uc||(fc=new I);fc.set(Sb);fc.preApply(uc);xb.apply(Sb)};E.prototype.bezierVertex=function(){Db=!0;var a=[];if(ib)throw"vertex() must be used at least once before calling bezierVertex()";
for(var b=0;b<arguments.length;b++)a[b]=arguments[b];t.push(a);t[t.length-1].isVert=!1};B.prototype.bezierVertex=function(){Db=!0;if(ib)throw"vertex() must be used at least once before calling bezierVertex()";if(9===arguments.length){yb===h&&(yb=new I);var a=t.length-1;hd(qc,yb);yb.apply(vc);for(var b=yb.array(),c=t[a][0],d=t[a][1],a=t[a][2],f=b[4]*c+b[5]*arguments[0]+b[6]*arguments[3]+b[7]*arguments[6],g=b[8]*c+b[9]*arguments[0]+b[10]*arguments[3]+b[11]*arguments[6],k=b[12]*c+b[13]*arguments[0]+
b[14]*arguments[3]+b[15]*arguments[6],l=b[4]*d+b[5]*arguments[1]+b[6]*arguments[4]+b[7]*arguments[7],m=b[8]*d+b[9]*arguments[1]+b[10]*arguments[4]+b[11]*arguments[7],n=b[12]*d+b[13]*arguments[1]+b[14]*arguments[4]+b[15]*arguments[7],p=b[4]*a+b[5]*arguments[2]+b[6]*arguments[5]+b[7]*arguments[8],r=b[8]*a+b[9]*arguments[2]+b[10]*arguments[5]+b[11]*arguments[8],b=b[12]*a+b[13]*arguments[2]+b[14]*arguments[5]+b[15]*arguments[8],v=0;v<qc;v++)c+=f,f+=g,g+=k,d+=l,l+=m,m+=n,a+=p,p+=r,r+=b,e.vertex(c,d,a);
e.vertex(arguments[6],arguments[7],arguments[8])}};e.texture=function(a){var b=ha.$ensureContext();if(a.__texture)b.bindTexture(b.TEXTURE_2D,a.__texture);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Sc),b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),e=p.createElement("canvas"),d=e.getContext("2d"),
f;if(a.width&0===a.width-1)e.width=a.width;else{for(f=1;f<a.width;)f*=2;e.width=f}if(a.height&0===a.height-1)e.height=a.height;else{for(f=1;f<a.height;)f*=2;e.height=f}d.drawImage(a.sourceImg,0,0,a.width,a.height,0,0,e.width,e.height);b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,
b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,e);b.generateMipmap(b.TEXTURE_2D);a.__texture=c}Uc=a.width;Vc=a.height}ua=!0;b.useProgram(y);Y("usingTexture3d",y,"uUsingTexture",ua)};e.textureMode=function(a){Wc=a};E.prototype.curveVertex=function(a,b){Cb=!0;e.vertex(a,b)};B.prototype.curveVertex=function(a,b,c){Cb=!0;Lc||id();var d=[];d[0]=a;d[1]=b;d[2]=c;va.push(d);oa++;if(3<oa){var f=va[oa-4][0],g=va[oa-4][1],h=va[oa-4][2],k=va[oa-3][0],l=va[oa-3][1],m=va[oa-3][2],n=
va[oa-2][0],p=va[oa-2][1],r=va[oa-2][2],t=va[oa-1][0],v=va[oa-1][1],u=va[oa-1][2];a=k;b=l;c=m;var q=xb.array(),d=q[4]*f+q[5]*k+q[6]*n+q[7]*t,x=q[8]*f+q[9]*k+q[10]*n+q[11]*t,f=q[12]*f+q[13]*k+q[14]*n+q[15]*t,k=q[4]*g+q[5]*l+q[6]*p+q[7]*v,n=q[8]*g+q[9]*l+q[10]*p+q[11]*v,g=q[12]*g+q[13]*l+q[14]*p+q[15]*v,l=q[4]*h+q[5]*m+q[6]*r+q[7]*u,p=q[8]*h+q[9]*m+q[10]*r+q[11]*u,h=q[12]*h+q[13]*m+q[14]*r+q[15]*u;e.vertex(a,b,c);for(m=0;m<pc;m++)a+=d,d+=x,x+=f,b+=k,k+=n,n+=g,c+=l,l+=p,p+=h,e.vertex(a,b,c)}};E.prototype.curve=
function(a,b,c,d,f,g,h,k){e.beginShape();e.curveVertex(a,b);e.curveVertex(c,d);e.curveVertex(f,g);e.curveVertex(h,k);e.endShape()};B.prototype.curve=function(a,b,c,d,f,g,k,l,m,n,p,r){r!==h?(e.beginShape(),e.curveVertex(a,b,c),e.curveVertex(d,f,g),e.curveVertex(k,l,m),e.curveVertex(n,p,r)):(e.beginShape(),e.curveVertex(a,b),e.curveVertex(c,d),e.curveVertex(f,g),e.curveVertex(k,l));e.endShape()};e.curveTightness=function(a){oc=a};e.curveDetail=function(a){pc=a;id()};e.rectMode=function(a){qa=a};e.imageMode=
function(a){switch(a){case c.CORNER:mc=ed;break;case c.CORNERS:mc=ud;break;case c.CENTER:mc=vd;break;default:throw"Invalid imageMode";}};e.ellipseMode=function(a){la=a};e.arc=function(a,b,d,f,g,h){if(!(0>=d||h<g)){la===c.CORNERS?(d-=a,f-=b):la===c.RADIUS?(a-=d,b-=f,d*=2,f*=2):la===c.CENTER&&(a-=d/2,b-=f/2);for(;0>g;)g+=c.TWO_PI,h+=c.TWO_PI;h-g>c.TWO_PI&&(g=0,h=c.TWO_PI);d/=2;f/=2;a+=d;b+=f;g=0|0.5+2*g*e.RAD_TO_DEG;h=0|0.5+2*h*e.RAD_TO_DEG;var k,l;if(R){var m=C;C=!1;e.beginShape();e.vertex(a,b);for(k=
g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape(c.CLOSE);C=m}if(C){m=R;R=!1;e.beginShape();for(k=g;k<=h;k++)l=k%c.SINCOS_LENGTH,e.vertex(a+Vb[l]*d,b+Ub[l]*f);e.endShape();R=m}}};E.prototype.line=function(a,b,c,d){if(C)if(a=Math.round(a),c=Math.round(c),b=Math.round(b),d=Math.round(d),a===c&&b===d)e.point(a,b);else{for(var f=h,k=h,l=!0,f=K.array(),m=[1,0,0,0,1,0],s=0;6>s&&l;s++)l=f[s]===m[s];l&&(a===c?(b>d&&(f=b,b=d,d=f),d++,1===ea%2&&g.translate(0.5,0)):b===d&&(a>c&&(f=a,a=
c,c=f),c++,1===ea%2&&g.translate(0,0.5)),1===ea&&(k=g.lineCap,g.lineCap="butt"));g.beginPath();g.moveTo(a||0,b||0);g.lineTo(c||0,d||0);za();l&&(a===c&&1===ea%2?g.translate(-0.5,0):b===d&&1===ea%2&&g.translate(0,-0.5),1===ea&&(g.lineCap=k))}};B.prototype.line=function(a,b,c,d,f,k){if(f===h||k===h)k=0,f=d,d=c,c=0;a===d&&b===f&&c===k?e.point(a,b,c):(a=[a,b,c,d,f,k],b=new I,b.scale(1,-1,1),b.apply(K.array()),b.transpose(),0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,
0,0,1]),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,Ac),sa("aTextureCoord2d",J,"aTextureCoord"),g.bufferData(g.ARRAY_BUFFER,new A(a),g.STREAM_DRAW),g.drawArrays(g.LINES,0,2)))};E.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode";e.beginShape();e.vertex(arguments[0],arguments[1]);e.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],
arguments[7]);e.endShape()};B.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode";e.beginShape();e.vertex(arguments[0],arguments[1],arguments[2]);e.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);e.endShape()};e.bezierDetail=function(a){qc=a};e.bezierPoint=function(a,b,c,e,d){return(1-d)*(1-d)*(1-d)*a+3*(1-d)*(1-d)*d*b+3*(1-d)*d*d*c+d*d*d*e};e.bezierTangent=
function(a,b,c,e,d){return 3*d*d*(-a+3*b-3*c+e)+6*d*(a-2*b+c)+3*(-a+b)};e.curvePoint=function(a,b,c,e,d){return 0.5*(2*b+(-a+c)*d+(2*a-5*b+4*c-e)*d*d+(-a+3*b-3*c+e)*d*d*d)};e.curveTangent=function(a,b,c,e,d){return 0.5*(-a+c+2*(2*a-5*b+4*c-e)*d+3*(-a+3*b-3*c+e)*d*d)};e.triangle=function(a,b,d,f,g,h){e.beginShape(c.TRIANGLES);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.endShape()};e.quad=function(a,b,d,f,g,h,k,l){e.beginShape(c.QUADS);e.vertex(a,b,0);e.vertex(d,f,0);e.vertex(g,h,0);e.vertex(k,
l,0);e.endShape()};E.prototype.rect=function(a,b,e,d,f,k,l,m){if(e||d)if(qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=e/2,b-=d/2),a=Math.round(a),b=Math.round(b),e=Math.round(e),d=Math.round(d),f!==h){m===h&&(m=l=k=f);var s=e/2,n=d/2;if(f>s||f>n)f=Math.min(s,n);if(k>s||k>n)k=Math.min(s,n);if(l>s||l>n)l=Math.min(s,n);if(m>s||m>n)m=Math.min(s,n);R&&!C||g.translate(0.5,0.5);g.beginPath();g.moveTo(a+f,b);g.lineTo(a+e-k,b);g.quadraticCurveTo(a+e,b,a+e,b+k);g.lineTo(a+
e,b+d-l);g.quadraticCurveTo(a+e,b+d,a+e-l,b+d);g.lineTo(a+m,b+d);g.quadraticCurveTo(a,b+d,a,b+d-m);g.lineTo(a,b+f);g.quadraticCurveTo(a,b,a+f,b);R&&!C||g.translate(-0.5,-0.5);wa();za()}else C&&1===ea%2&&g.translate(0.5,0.5),g.beginPath(),g.rect(a,b,e,d),wa(),za(),C&&1===ea%2&&g.translate(-0.5,-0.5)};B.prototype.rect=function(a,b,e,d,f,k,l,m){if(f!==h)throw"rect() with rounded corners is not supported in 3D mode";qa===c.CORNERS?(e-=a,d-=b):qa===c.RADIUS?(e*=2,d*=2,a-=e/2,b-=d/2):qa===c.CENTER&&(a-=
e/2,b-=d/2);f=new I;f.translate(a,b,0);f.scale(e,d,1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();0<ea&&C&&(g.useProgram(J),U("uModel2d",J,"uModel",!1,f.array()),U("uView2d",J,"uView",!1,b.array()),T("uColor2d",J,"uColor",X),Y("uIsDrawingText2d",J,"uIsDrawingText",!1),Z("aVertex2d",J,"aVertex",3,gc),sa("aTextureCoord2d",J,"aTextureCoord"),g.drawArrays(g.LINE_LOOP,0,Hc.length/3));R&&(g.useProgram(y),U("uModel3d",y,"uModel",!1,f.array()),U("uView3d",y,"uView",!1,b.array()),
g.enable(g.POLYGON_OFFSET_FILL),g.polygonOffset(1,1),T("color3d",y,"uColor",ka),0<O?(a=new I,a.set(b),b=new I,b.set(f),a.mult(b),b=new I,b.set(a),b.invert(),b.transpose(),U("uNormalTransform3d",y,"uNormalTransform",!1,b.array()),Z("aNormal3d",y,"aNormal",3,zc)):sa("normal3d",y,"aNormal"),Z("vertex3d",y,"aVertex",3,gc),g.drawArrays(g.TRIANGLE_FAN,0,Hc.length/3),g.disable(g.POLYGON_OFFSET_FILL))};E.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f))if(la===c.RADIUS?(d*=2,f*=2):la===
c.CORNERS?(d-=a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2),d===f)g.beginPath(),g.arc(a,b,d/2,0,c.TWO_PI,!1),wa(),za();else{d/=2;f/=2;var h=0.5522847498307933*d,k=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-k,a+h,b-f,a,b-f);e.bezierVertex(a-h,b-f,a-d,b-k,a-d,b);e.bezierVertex(a-d,b+k,a-h,b+f,a,b+f);e.bezierVertex(a+h,b+f,a+d,b+k,a+d,b);e.endShape()}};B.prototype.ellipse=function(a,b,d,f){a=a||0;b=b||0;if(!(0>=d&&0>=f)){la===c.RADIUS?(d*=2,f*=2):la===c.CORNERS?(d-=
a,f-=b,a+=d/2,b+=f/2):la===c.CORNER&&(a+=d/2,b+=f/2);d/=2;f/=2;var g=0.5522847498307933*d,h=0.5522847498307933*f;e.beginShape();e.vertex(a+d,b);e.bezierVertex(a+d,b-h,0,a+g,b-f,0,a,b-f,0);e.bezierVertex(a-g,b-f,0,a-d,b-h,0,a-d,b,0);e.bezierVertex(a-d,b+h,0,a-g,b+f,0,a,b+f,0);e.bezierVertex(a+g,b+f,0,a+d,b+h,0,a+d,b,0);e.endShape();if(R){for(g=f=d=0;g<t.length;g++)d+=t[g][0],f+=t[g][1];d/=t.length;f/=t.length;g=[];a=[];b=[];g[0]=d;g[1]=f;g[2]=0;g[3]=0;g[4]=0;g[5]=ka[0];g[6]=ka[1];g[7]=ka[2];g[8]=ka[3];
g[9]=X[0];g[10]=X[1];g[11]=X[2];g[12]=X[3];g[13]=Gb;g[14]=Eb;g[15]=ub;t.unshift(g);for(g=0;g<t.length;g++){for(d=0;3>d;d++)a.push(t[g][d]);for(d=5;9>d;d++)b.push(t[g][d])}$a(a,"TRIANGLE_FAN",b)}}};e.normal=function(a,b,d){if(3!==arguments.length||"number"!==typeof a||"number"!==typeof b||"number"!==typeof d)throw"normal() requires three numeric arguments.";Gb=a;Eb=b;ub=d;0!==aa&&(jb===c.NORMAL_MODE_AUTO?jb=c.NORMAL_MODE_SHAPE:jb===c.NORMAL_MODE_SHAPE&&(jb=c.NORMAL_MODE_VERTEX))};e.save=function(a,
b){return b!==h?l.open(b.toDataURL(),"_blank"):l.open(e.externals.canvas.toDataURL(),"_blank")};var wd=0;e.saveFrame=function(a){a===h&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+wd++;b.length<a.length;)b="0"+b;return b});e.save(a)};var xd=p.createElement("canvas").getContext("2d"),Mc=[h,h,h],Ga=function(a,b,d){this.__isDirty=!1;if(a instanceof D)this.fromHTMLImageData(a);else if(b||d){this.width=a||1;this.height=b||1;a=this.sourceImg=p.createElement("canvas");a.width=this.width;
a.height=this.height;this.imageData=a.getContext("2d").createImageData(this.width,this.height);this.format=d===c.ARGB||d===c.ALPHA?d:c.RGB;if(this.format===c.RGB)for(d=3,a=this.imageData.data,b=a.length;d<b;d+=4)a[d]=255;this.__isDirty=!0;this.updatePixels()}else this.height=this.width=0,this.imageData=xd.createImageData(1,1),this.format=c.ARGB;this.pixels=Jb(this)};Ga.prototype={__isPImage:!0,updatePixels:function(){var a=this.sourceImg;a&&(a instanceof x&&this.__isDirty)&&a.getContext("2d").putImageData(this.imageData,
0,0);this.__isDirty=!1},fromHTMLImageData:function(a){var b=Ja(a);try{var c=b.context.getImageData(0,0,a.width,a.height);this.fromImageData(c)}catch(d){a.width&&a.height&&(this.isRemote=!0,this.width=a.width,this.height=a.height)}this.sourceImg=a},get:function(a,b,c,d){if(!arguments.length)return e.get(this);if(2===arguments.length)return e.get(a,b,this);if(4===arguments.length)return e.get(a,b,c,d,this)},set:function(a,b,c){e.set(a,b,c,this);this.__isDirty=!0},blend:function(a,b,c,d,f,g,h,k,l,m){9===
arguments.length?e.blend(this,a,b,c,d,f,g,h,k,l,this):10===arguments.length&&e.blend(a,b,c,d,f,g,h,k,l,m,this);delete this.sourceImg},copy:function(a,b,d,f,g,h,k,l,m){8===arguments.length?e.blend(this,a,b,d,f,g,h,k,l,c.REPLACE,this):9===arguments.length&&e.blend(a,b,d,f,g,h,k,l,m,c.REPLACE,this);delete this.sourceImg},filter:function(a,b){2===arguments.length?e.filter(a,b,this):1===arguments.length&&e.filter(a,null,this);delete this.sourceImg},save:function(a){e.save(a,this)},resize:function(a,b){if(this.isRemote)throw"Image is loaded remotely. Cannot resize.";
if(0!==this.width||0!==this.height){0===a&&0!==b?a=Math.floor(this.width/this.height*b):0===b&&0!==a&&(b=Math.floor(this.height/this.width*a));var c=Ja(this.imageData).canvas,c=Ja(c,a,b).context.getImageData(0,0,a,b);this.fromImageData(c)}},mask:function(a){var b=this.toImageData(),c,d;if(a instanceof Ga||a.__isPImage)if(a.width===this.width&&a.height===this.height)for(a=a.toImageData(),c=2,d=4*this.width*this.height;c<d;c+=4)b.data[c+1]=a.data[c];else throw"mask must have the same dimensions as PImage.";
else if(a instanceof Array)if(this.width*this.height===a.length)for(c=0,d=a.length;c<d;++c)b.data[4*c+3]=a[c];else throw"mask array must be the same length as PImage pixels array.";this.fromImageData(b)},loadPixels:r,toImageData:function(){return this.isRemote?this.sourceImg:this.__isDirty?Ja(this.sourceImg).context.getImageData(0,0,this.width,this.height):this.imageData},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI.";return Ja(this.imageData).canvas.toDataURL()},
fromImageData:function(a){var b=a.width,d=a.height,e=p.createElement("canvas"),f=e.getContext("2d");this.width=e.width=b;this.height=e.height=d;f.putImageData(a,0,0);this.format=c.ARGB;this.imageData=a;this.sourceImg=e}};e.PImage=Ga;e.createImage=function(a,b,c){return new Ga(a,b,c)};e.loadImage=function(a,b,c){if(da.imageCache.images[a])return b=new Ga(da.imageCache.images[a]),b.loaded=!0,b;b=new Ga;var d=p.createElement("img");b.sourceImg=d;d.onload=function(a,b,c){return function(){b.fromHTMLImageData(a);
b.loaded=!0;c&&c()}}(d,b,c);d.src=a;return b};e.requestImage=e.loadImage;e.get=function(a,b,d,f,g){if(void 0!==g)return Lb(a,b,d,f,g);if(void 0!==f)return Kb(a,b,d,f);if(void 0!==d){if(d.isRemote)throw"Image is loaded remotely. Cannot get x,y.";a=4*b*d.width+4*a;d=d.imageData.data;return d[a+3]<<24&c.ALPHA_MASK|d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK}return void 0!==b?(a>=e.width||0>a||0>b||b>=e.height?d=0:Rb?(a=4*((0|a)+e.width*(0|b)),d=e.imageData.data,d=d[a+3]<<24&c.ALPHA_MASK|
d[a]<<16&c.RED_MASK|d[a+1]<<8&c.GREEN_MASK|d[a+2]&c.BLUE_MASK):(d=e.toImageData(0|a,0|b,1,1).data,d=d[3]<<24&c.ALPHA_MASK|d[0]<<16&c.RED_MASK|d[1]<<8&c.GREEN_MASK|d[2]&c.BLUE_MASK),d):void 0!==a?Lb(0,0,a.width,a.height,a):Kb(0,0,e.width,e.height)};e.createGraphics=function(a,b,c){var d=new M;d.size(a,b,c);d.background(0,0);return d};e.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<e.width&&(0<=a&&0<=b&&b<e.height)&&(Rb||(e.loadPixels(),null===Fc&&(Nc=g,Fc=new Mb),Rb=!0,g=Fc,Xc=
0),e.pixels.setPixel((0|a)+e.width*(0|b),c),++Xc>Yc&&fb()):(c instanceof Ga||c.__isPImage)&&e.image(c,a,b);else if(4===arguments.length){if(d.isRemote)throw"Image is loaded remotely. Cannot set x,y.";var f=e.color.toArray(c),h=4*b*d.width+4*a,k=d.imageData.data;k[h]=f[0];k[h+1]=f[1];k[h+2]=f[2];k[h+3]=f[3]}};e.imageData={};e.pixels={getLength:function(){return e.imageData.data.length?e.imageData.data.length/4:0},getPixel:function(a){a*=4;var b=e.imageData.data;return b[a+3]<<24&4278190080|b[a+0]<<
16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=e.imageData.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=e.imageData.width*e.imageData.height,c=e.imageData.data,d=0,f=0;d<b;d++,f+=4)a.push(c[f+3]<<24&4278190080|c[f+0]<<16&16711680|c[f+1]<<8&65280|c[f+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};e.loadPixels=function(){e.imageData=ha.$ensureContext().getImageData(0,
0,e.width,e.height)};e.updatePixels=function(){e.imageData&&ha.$ensureContext().putImageData(e.imageData,0,0)};e.hint=function(a){var b=ha.$ensureContext();a===c.DISABLE_DEPTH_TEST?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):a===c.ENABLE_DEPTH_TEST?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===c.ENABLE_OPENGL_2X_SMOOTH||a===c.ENABLE_OPENGL_4X_SMOOTH?ra=!0:a===c.DISABLE_OPENGL_2X_SMOOTH&&(ra=!1)};var jd=function(a,b,c,d){if(a instanceof Ga||a.__isPImage){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";
if(a.width!==e.width||a.height!==e.height)throw"Background image must be the same dimensions as the canvas.";}else a=e.color(a,b,c,d);kb=a};E.prototype.background=function(a,b,c,d){a!==h&&jd(a,b,c,d);kb instanceof Ga||kb.__isPImage?(g.save(),g.setTransform(1,0,0,1,0,0),e.image(kb,0,0)):(g.save(),g.setTransform(1,0,0,1,0,0),e.alpha(kb)!==ia&&g.clearRect(0,0,e.width,e.height),g.fillStyle=e.color.toString(kb),g.fillRect(0,0,e.width,e.height),N=!0);Sa()};B.prototype.background=function(a,b,c,d){0<arguments.length&&
jd(a,b,c,d);var f=e.color.toGLArray(kb);g.clearColor(f[0],f[1],f[2],f[3]);g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT)};E.prototype.image=function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);if(0<a.width){var f=mc(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.sourceImg&&null===gb){var h=a.sourceImg;a.__isDirty&&a.updatePixels();g.drawImage(h,0,0,h.width,h.height,f.x,f.y,f.w,f.h)}else h=a.toImageData(),null!==gb&&(gb(h),a.__isDirty=!0),g.drawImage(Ja(h).canvas,0,0,a.width,a.height,f.x,
f.y,f.w,f.h)}};B.prototype.image=function(a,b,c,d,f){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,f=f||a.height,e.beginShape(e.QUADS),e.texture(a),e.vertex(b,c,0,0,0),e.vertex(b,c+f,0,0,f),e.vertex(b+d,c+f,0,d,f),e.vertex(b+d,c,0,d,0),e.endShape())};e.tint=function(a,b,c,d){a=e.color(a,b,c,d);var f=e.red(a)/xa,g=e.green(a)/Ea,h=e.blue(a)/ya,k=e.alpha(a)/ia;gb=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=f,b[c++]*=g,b[c++]*=h,b[c++]*=k};sc=function(a){for(var b=
0;b<a.length;)a[b++]=f,a[b++]=g,a[b++]=h,a[b++]=k}};e.noTint=function(){sc=gb=null};e.copy=function(a,b,d,f,g,k,l,m,n){n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=b,b=a,a=e);e.blend(a,b,d,f,g,k,l,m,n,c.REPLACE)};e.blend=function(a,b,c,d,f,g,k,l,m,n,p){if(a.isRemote)throw"Image is loaded remotely. Cannot blend image.";n===h&&(n=m,m=l,l=k,k=g,g=f,f=d,d=c,c=b,b=a,a=e);d=b+d;f=c+f;l=g+l;m=k+m;var r=p||e;p!==h&&n!==h||e.loadPixels();a.loadPixels();a===e&&e.intersect(b,c,d,f,g,k,l,m)?e.blit_resize(e.get(b,c,d-b,
f-c),0,0,d-b-1,f-c-1,r.imageData.data,r.width,r.height,g,k,l,m,n):e.blit_resize(a,b,c,d,f,r.imageData.data,r.width,r.height,g,k,l,m,n);p===h&&e.updatePixels()};var kd=function(a,b){var c=0,d=b.pixels.getLength(),e=new Q(d),f,g,h,k,l,m,n,p,r,t,q,v;if(a)for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),h=77*(h>>16&255)+
151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t<h&&(k=m,h=t),r<h&&(k=l,h=r),q<h&&(k=n,h=q),v<h&&(k=p),e[c++]=k;else for(;c<d;)for(f=c,g=c+b.width;c<g;)h=k=b.pixels.getPixel(c),m=c-1,l=c+1,n=c-b.width,p=c+b.width,m<f&&(m=c),l>=g&&(l=c),0>n&&(n=0),p>=d&&(p=c),n=b.pixels.getPixel(n),m=b.pixels.getPixel(m),p=b.pixels.getPixel(p),l=b.pixels.getPixel(l),
h=77*(h>>16&255)+151*(h>>8&255)+28*(h&255),t=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),r=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),q=77*(n>>16&255)+151*(n>>8&255)+28*(n&255),v=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),t>h&&(k=m,h=t),r>h&&(k=l,h=r),q>h&&(k=n,h=q),v>h&&(k=p),e[c++]=k;b.pixels.set(e)};e.filter=function(a,b,d){var f,g,k,l;3===arguments.length?(d.loadPixels(),f=d):(e.loadPixels(),f=e);b===h&&(b=null);if(f.isRemote)throw"Image is loaded remotely. Cannot filter image.";var m=f.pixels.getLength();
switch(a){case c.BLUR:var n=b||1,p=f,r,t,q,v,u,x,y,C,D;k=p.pixels.getLength();l=new A(k);m=new A(k);g=new A(k);k=new A(k);var F=0,G,E,H,n=e.floor(3.5*n),B,n=1>n?1:248>n?n:248;if(e.shared.blurRadius!==n){e.shared.blurRadius=n;e.shared.blurKernelSize=1+(e.shared.blurRadius<<1);e.shared.blurKernel=new A(e.shared.blurKernelSize);var I=e.shared.blurKernel,J=e.shared.blurKernelSize;for(B=0;B<J;B++)I[B]=0;J=(n-1)*(n-1);for(B=1;B<n;B++)I[n+B]=I[void 0]=J;I[n]=n*n}n=p.height;B=p.width;I=e.shared.blurKernelSize;
C=e.shared.blurRadius;var J=e.shared.blurKernel,K=p.imageData.data;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;x=G-C;if(0>x)u=-x,x=0;else{if(x>=B)break;u=0}for(H=u;H<I&&!(x>=B);H++)y=4*(x+F),u=J[H],v+=u*K[y+3],r+=u*K[y],t+=u*K[y+1],q+=u*K[y+2],p+=u,x++;y=F+G;k[y]=v/p;l[y]=r/p;m[y]=t/p;g[y]=q/p}F+=B}F=0;C=-C;D=C*B;for(E=0;E<n;E++){for(G=0;G<B;G++){q=t=r=v=p=0;if(0>C)u=y=-C,x=G;else{if(C>=n)break;u=0;y=C;x=G+D}for(H=u;H<I&&!(y>=n);H++)u=J[H],v+=u*k[x],r+=u*l[x],t+=u*m[x],q+=u*g[x],p+=u,y++,x+=B;y=
4*(G+F);K[y]=r/p;K[y+1]=t/p;K[y+2]=q/p;K[y+3]=v/p}F+=B;D+=B;C++}break;case c.GRAY:if(f.format===c.ALPHA){for(l=0;l<m;l++)g=255-f.pixels.getPixel(l),f.pixels.setPixel(l,4278190080|g<<16|g<<8|g);f.format=c.RGB}else for(l=0;l<m;l++)g=f.pixels.getPixel(l),k=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)>>8,f.pixels.setPixel(l,g&c.ALPHA_MASK|k<<16|k<<8|k);break;case c.INVERT:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)^16777215);break;case c.POSTERIZE:if(null===b)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
g=e.floor(b);if(2>g||255<g)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";k=g-1;for(l=0;l<m;l++)F=f.pixels.getPixel(l)>>16&255,n=f.pixels.getPixel(l)>>8&255,B=f.pixels.getPixel(l)&255,F=255*(F*g>>8)/k,n=255*(n*g>>8)/k,B=255*(B*g>>8)/k,f.pixels.setPixel(l,4278190080&f.pixels.getPixel(l)|F<<16|n<<8|B);break;case c.OPAQUE:for(l=0;l<m;l++)f.pixels.setPixel(l,f.pixels.getPixel(l)|4278190080);f.format=c.RGB;break;case c.THRESHOLD:null===b&&(b=0.5);if(0>b||1<b)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
g=e.floor(255*b);for(l=0;l<m;l++)k=e.max((f.pixels.getPixel(l)&c.RED_MASK)>>16,e.max((f.pixels.getPixel(l)&c.GREEN_MASK)>>8,f.pixels.getPixel(l)&c.BLUE_MASK)),f.pixels.setPixel(l,f.pixels.getPixel(l)&c.ALPHA_MASK|(k<g?0:16777215));break;case c.ERODE:kd(!0,f);break;case c.DILATE:kd(!1,f)}f.updatePixels()};e.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,
blurKernelSize:0,blurKernel:null};e.intersect=function(a,b,c,d,e,f,g,h){c=c-a+1;d=d-b+1;g=g-e+1;h=h-f+1;e<a?(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&(g=a));f<b?(h+=f-b,h>d&&(h=d)):(b=d+b-f,h>b&&(h=b));return!(0>=g||0>=h)};var pa={};pa[c.BLEND]=e.modes.blend;pa[c.ADD]=e.modes.add;pa[c.SUBTRACT]=e.modes.subtract;pa[c.LIGHTEST]=e.modes.lightest;pa[c.DARKEST]=e.modes.darkest;pa[c.REPLACE]=e.modes.replace;pa[c.DIFFERENCE]=e.modes.difference;pa[c.EXCLUSION]=e.modes.exclusion;pa[c.MULTIPLY]=e.modes.multiply;pa[c.SCREEN]=
e.modes.screen;pa[c.OVERLAY]=e.modes.overlay;pa[c.HARD_LIGHT]=e.modes.hard_light;pa[c.SOFT_LIGHT]=e.modes.soft_light;pa[c.DODGE]=e.modes.dodge;pa[c.BURN]=e.modes.burn;e.blit_resize=function(a,b,d,f,g,h,k,l,m,n,p,r,t){0>b&&(b=0);0>d&&(d=0);f>=a.width&&(f=a.width-1);g>=a.height&&(g=a.height-1);f-=b;g-=d;p-=m;r-=n;if(!(0>=p||0>=r||0>=f||0>=g||m>=k||n>=l||b>=a.width||d>=a.height)){f=Math.floor(f/p*c.PRECISIONF);g=Math.floor(g/r*c.PRECISIONF);var q=e.shared;q.srcXOffset=Math.floor(0>m?-m*f:b*c.PRECISIONF);
q.srcYOffset=Math.floor(0>n?-n*g:d*c.PRECISIONF);0>m&&(p+=m,m=0);0>n&&(r+=n,n=0);p=Math.min(p,k-m);r=Math.min(r,l-n);b=n*k+m;var v;q.srcBuffer=a.imageData.data;q.iw=a.width;q.iw1=a.width-1;q.ih1=a.height-1;d=pa[t];var u,x,y,C;m=c.ALPHA_MASK;n=c.RED_MASK;var A=c.GREEN_MASK,B=c.BLUE_MASK,F=c.PREC_MAXVAL,D=c.PRECISIONB,G=c.PREC_RED_SHIFT,H=c.PREC_ALPHA_SHIFT,E=q.srcBuffer,I=Math.min;for(t=0;t<r;t++){q.sX=q.srcXOffset;q.fracV=q.srcYOffset&F;q.ifV=F-q.fracV;q.v1=(q.srcYOffset>>D)*q.iw;q.v2=I((q.srcYOffset>>
D)+1,q.ih1)*q.iw;for(a=0;a<p;a++)l=4*(b+a),v=h[l+3]<<24&m|h[l]<<16&n|h[l+1]<<8&A|h[l+2]&B,q.fracU=q.sX&F,q.ifU=F-q.fracU,q.ul=q.ifU*q.ifV>>D,q.ll=q.ifU*q.fracV>>D,q.ur=q.fracU*q.ifV>>D,q.lr=q.fracU*q.fracV>>D,q.u1=q.sX>>D,q.u2=I(q.u1+1,q.iw1),u=4*(q.v1+q.u1),x=4*(q.v1+q.u2),y=4*(q.v2+q.u1),C=4*(q.v2+q.u2),q.cUL=E[u+3]<<24&m|E[u]<<16&n|E[u+1]<<8&A|E[u+2]&B,q.cUR=E[x+3]<<24&m|E[x]<<16&n|E[x+1]<<8&A|E[x+2]&B,q.cLL=E[y+3]<<24&m|E[y]<<16&n|E[y+1]<<8&A|E[y+2]&B,q.cLR=E[C+3]<<24&m|E[C]<<16&n|E[C+1]<<8&A|
E[C+2]&B,q.r=q.ul*((q.cUL&n)>>16)+q.ll*((q.cLL&n)>>16)+q.ur*((q.cUR&n)>>16)+q.lr*((q.cLR&n)>>16)<<G&n,q.g=q.ul*(q.cUL&A)+q.ll*(q.cLL&A)+q.ur*(q.cUR&A)+q.lr*(q.cLR&A)>>>D&A,q.b=q.ul*(q.cUL&B)+q.ll*(q.cLL&B)+q.ur*(q.cUR&B)+q.lr*(q.cLR&B)>>>D,q.a=q.ul*((q.cUL&m)>>>24)+q.ll*((q.cLL&m)>>>24)+q.ur*((q.cUR&m)>>>24)+q.lr*((q.cLR&m)>>>24)<<H&m,v=d(v,q.a|q.r|q.g|q.b),h[l]=(v&n)>>>16,h[l+1]=(v&A)>>>8,h[l+2]=v&B,h[l+3]=(v&m)>>>24,q.sX+=f;b+=k;q.srcYOffset+=g}}};e.loadFont=function(a,b){if(a===h)throw"font name required in loadFont.";
if(-1===a.indexOf(".svg"))return b===h&&(b=ba.size),PFont.get(a,b);var c=e.loadGlyphs(a);return{name:a,css:"12px sans-serif",glyph:!0,units_per_em:c.units_per_em,horiz_adv_x:1/c.units_per_em*c.horiz_adv_x,ascent:c.ascent,descent:c.descent,width:function(b){for(var c=0,d=b.length,f=0;f<d;f++)try{c+=parseFloat(e.glyphLook(e.glyphTable[a],b[f]).horiz_adv_x)}catch(g){M.debug(g)}return c/e.glyphTable[a].units_per_em}}};e.createFont=function(a,b){return e.loadFont(a,b)};e.textFont=function(a,b){b!==h&&
(a.glyph||(a=PFont.get(a.name,b)),Na=b);ba=a;zb=ba.name;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textSize=function(a){ba=PFont.get(zb,a);Na=a;Xa=ba.ascent;Ma=ba.descent;Aa=ba.leading;ha.$ensureContext().font=ba.css};e.textAscent=function(){return Xa};e.textDescent=function(){return Ma};e.textLeading=function(a){Aa=a};e.textAlign=function(a,b){nb=a;Wa=b||c.BASELINE};E.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;g.font=ba.css;for(c=
0;c<d;++c)b=Math.max(b,ba.measureTextWidth(a[c]));return b|0};B.prototype.textWidth=function(a){a=Ua(a).split(/\r?\n/g);var b=0,c,d=a.length;Ba===h&&(Ba=p.createElement("canvas"));var e=Ba.getContext("2d");e.font=ba.css;for(c=0;c<d;++c)b=Math.max(b,e.measureText(a[c]).width);return b|0};e.glyphLook=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.two;case "3":return a.three;case "4":return a.four;case "5":return a.five;case "6":return a.six;case "7":return a.seven;case "8":return a.eight;
case "9":return a.nine;case "0":return a.zero;case " ":return a.space;case "$":return a.dollar;case "!":return a.exclam;case '"':return a.quotedbl;case "#":return a.numbersign;case "%":return a.percent;case "&":return a.ampersand;case "'":return a.quotesingle;case "(":return a.parenleft;case ")":return a.parenright;case "*":return a.asterisk;case "+":return a.plus;case ",":return a.comma;case "-":return a.hyphen;case ".":return a.period;case "/":return a.slash;case "_":return a.underscore;case ":":return a.colon;
case ";":return a.semicolon;case "<":return a.less;case "=":return a.equal;case ">":return a.greater;case "?":return a.question;case "@":return a.at;case "[":return a.bracketleft;case "\\":return a.backslash;case "]":return a.bracketright;case "^":return a.asciicircum;case "`":return a.grave;case "{":return a.braceleft;case "|":return a.bar;case "}":return a.braceright;case "~":return a.asciitilde;default:return a[b]}}catch(c){M.debug(c)}};E.prototype.text$line=function(a,b,d,f,h){f=f=0;if(ba.glyph){f=
e.glyphTable[zb];g.save();g.translate(b,d+Na);h!==c.RIGHT&&h!==c.CENTER||f.width(a);b=1/f.units_per_em*Na;g.scale(b,b);b=0;for(d=a.length;b<d;b++)try{e.glyphLook(f,a[b]).draw()}catch(k){M.debug(k)}Sa()}else if(a&&"fillText"in g){N&&(g.fillStyle=e.color.toString(La),N=!1);if(h===c.RIGHT||h===c.CENTER)f=ba.measureTextWidth(a),f=h===c.RIGHT?-f:-f/2;g.fillText(a,b+f,d)}};B.prototype.text$line=function(a,b,d,e,f){Ba===h&&(Ba=p.createElement("canvas"));var k=g;g=Ba.getContext("2d");g.font=ba.css;var l=
ba.measureTextWidth(a);Ba.width=l;Ba.height=Na;g=Ba.getContext("2d");g.font=ba.css;g.textBaseline="top";E.prototype.text$line(a,0,0,0,c.LEFT);a=Ba.width/Ba.height;g=k;g.bindTexture(g.TEXTURE_2D,Tc);g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,Ba);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE);g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE);
k=0;f===c.RIGHT?k=-l:f===c.CENTER&&(k=-l/2);f=new I;l=0.5*Na;f.translate(b+k-l/2,d-l,e);f.scale(-a*l,-l,l);f.translate(-1,-1,-1);f.transpose();b=new I;b.scale(1,-1,1);b.apply(K.array());b.transpose();g.useProgram(J);Z("aVertex2d",J,"aVertex",3,Cc);Z("aTextureCoord2d",J,"aTextureCoord",2,Dc);Y("uSampler2d",J,"uSampler",[0]);Y("uIsDrawingText2d",J,"uIsDrawingText",!0);U("uModel2d",J,"uModel",!1,f.array());U("uView2d",J,"uView",!1,b.array());T("uColor2d",J,"uColor",ka);g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,
Ec);g.drawElements(g.TRIANGLES,6,g.UNSIGNED_SHORT,0)};e.text=function(){ic!==c.SHAPE&&(3===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?Nb(Ua(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&ac(Ua(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};e.textMode=function(a){ic=a};e.loadGlyphs=function(a){var b,
c,d,f,k,m,n,q,r,t,v,u,x=function(a,b){var c=0,d=[],e,f=RegExp(a,"g");for(e=d[c]=f.exec(b);e;)c++,e=d[c]=f.exec(b);return d},y=function(a){var e=x("[A-Za-z][0-9\\- ]+|Z",a);u="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";q=a=m=k=f=d=c=b=0;r="";t=e.length-1;for(var h=0;h<t;h++){var l=e[h][0];a=x("[0-9\\-]+",l);switch(l[0]){case "M":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);u+="curContext.moveTo("+b+","+-c+");";break;case "L":b=parseFloat(a[0][0]);c=parseFloat(a[1][0]);
u+="curContext.lineTo("+b+","+-c+");";break;case "H":b=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "V":c=parseFloat(a[0][0]);u+="curContext.lineTo("+b+","+-c+");";break;case "T":k=parseFloat(a[0][0]);m=parseFloat(a[1][0]);"Q"===r||"T"===r?(a=Math.sqrt(Math.pow(b-d,2)+Math.pow(f-c,2)),q=Math.PI+Math.atan2(d-b,f-c),d=b+Math.sin(q)*a,f=c+Math.cos(q)*a):(d=b,f=c);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Q":d=parseFloat(a[0][0]);f=parseFloat(a[1][0]);
k=parseFloat(a[2][0]);m=parseFloat(a[3][0]);u+="curContext.quadraticCurveTo("+d+","+-f+","+k+","+-m+");";b=k;c=m;break;case "Z":u+="curContext.closePath();"}r=l[0]}u+="afterPathDraw();";u+="curContext.translate("+v+",0);";u+="}}";return(new Function("beforePathDraw","afterPathDraw",u))(function(){g.save();return ha.$ensureContext()},function(){wa();za();Sa()})},A=function(b){var c=b.getElementsByTagName("font");e.glyphTable[a].horiz_adv_x=c[0].getAttribute("horiz-adv-x");c=b.getElementsByTagName("font-face")[0];
e.glyphTable[a].units_per_em=parseFloat(c.getAttribute("units-per-em"));e.glyphTable[a].ascent=parseFloat(c.getAttribute("ascent"));e.glyphTable[a].descent=parseFloat(c.getAttribute("descent"));b=b.getElementsByTagName("glyph");for(var c=b.length,d=0;d<c;d++){var f=b[d].getAttribute("unicode"),g=b[d].getAttribute("glyph-name");v=b[d].getAttribute("horiz-adv-x");null===v&&(v=e.glyphTable[a].horiz_adv_x);n=b[d].getAttribute("d");n!==h&&(u=y(n),e.glyphTable[a][g]={name:g,unicode:f,horiz_adv_x:v,draw:u.draw})}};
e.glyphTable[a]={};(function(){var b;try{b=p.implementation.createDocument("","",null)}catch(c){M.debug(c.message);return}try{b.async=!1,b.load(a),A(b.getElementsByTagName("svg")[0])}catch(d){M.debug(d);try{var e=new l.XMLHttpRequest;e.open("GET",a,!1);e.send(null);A(e.responseXML.documentElement)}catch(f){M.debug(d)}}})(a);return e.glyphTable[a]};e.param=function(a){var b="data-processing-"+a;if(S.hasAttribute(b))return S.getAttribute(b);for(var b=0,c=S.childNodes.length;b<c;++b){var d=S.childNodes.item(b);
if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return da.params.hasOwnProperty(a)?da.params[a]:null};F.prototype.translate=H("translate");F.prototype.transform=H("transform");F.prototype.scale=H("scale");F.prototype.pushMatrix=H("pushMatrix");F.prototype.popMatrix=H("popMatrix");F.prototype.resetMatrix=H("resetMatrix");F.prototype.applyMatrix=H("applyMatrix");F.prototype.rotate=H("rotate");F.prototype.rotateZ=H("rotateZ");F.prototype.shearX=
H("shearX");F.prototype.shearY=H("shearY");F.prototype.redraw=H("redraw");F.prototype.toImageData=H("toImageData");F.prototype.ambientLight=H("ambientLight");F.prototype.directionalLight=H("directionalLight");F.prototype.lightFalloff=H("lightFalloff");F.prototype.lightSpecular=H("lightSpecular");F.prototype.pointLight=H("pointLight");F.prototype.noLights=H("noLights");F.prototype.spotLight=H("spotLight");F.prototype.beginCamera=H("beginCamera");F.prototype.endCamera=H("endCamera");F.prototype.frustum=
H("frustum");F.prototype.box=H("box");F.prototype.sphere=H("sphere");F.prototype.ambient=H("ambient");F.prototype.emissive=H("emissive");F.prototype.shininess=H("shininess");F.prototype.specular=H("specular");F.prototype.fill=H("fill");F.prototype.stroke=H("stroke");F.prototype.strokeWeight=H("strokeWeight");F.prototype.smooth=H("smooth");F.prototype.noSmooth=H("noSmooth");F.prototype.point=H("point");F.prototype.vertex=H("vertex");F.prototype.endShape=H("endShape");F.prototype.bezierVertex=H("bezierVertex");
F.prototype.curveVertex=H("curveVertex");F.prototype.curve=H("curve");F.prototype.line=H("line");F.prototype.bezier=H("bezier");F.prototype.rect=H("rect");F.prototype.ellipse=H("ellipse");F.prototype.background=H("background");F.prototype.image=H("image");F.prototype.textWidth=H("textWidth");F.prototype.text$line=H("text$line");F.prototype.$ensureContext=H("$ensureContext");F.prototype.$newPMatrix=H("$newPMatrix");F.prototype.size=function(a,b,d){Ka(d===c.WEBGL?"3D":"2D");e.size(a,b,d)};F.prototype.$init=
r;E.prototype.$init=function(){e.size(e.width,e.height);g.lineCap="round";e.noSmooth();e.disableContextMenu()};B.prototype.$init=function(){e.use3DContext=!0;e.disableContextMenu()};W.prototype.$ensureContext=function(){return g};S.getAttribute("tabindex")||S.setAttribute("tabindex",0);if(Qb)da=new M.Sketch,Ka(),e.size=function(a,b,d){d&&d===c.WEBGL?Ka("3D"):Ka("2D");e.size(a,b,d)};else{da=k instanceof M.Sketch?k:"function"===typeof k?new M.Sketch(k):k?M.compile(k):new M.Sketch(function(){});e.externals.sketch=
da;Ka();S.onfocus=function(){e.focused=!0};S.onblur=function(){e.focused=!1;da.options.globalKeyEvents||(e.__keyPressed=!1,hb=[],ob=null)};da.options.pauseOnBlur&&(Ia(l,"focus",function(){Da&&e.loop()}),Ia(l,"blur",function(){Da&&eb&&(e.noLoop(),Da=!0);e.__keyPressed=!1;hb=[];ob=null}));var Jc=da.options.globalKeyEvents?l:S;Ia(Jc,"keydown",rc);Ia(Jc,"keypress",Pb);Ia(Jc,"keyup",bc);for(var Yb in M.lib)M.lib.hasOwnProperty(Yb)&&(M.lib[Yb].hasOwnProperty("attach")?M.lib[Yb].attach(e):M.lib[Yb]instanceof
Function&&M.lib[Yb].call(this));var ld=function(a){if(da.imageCache.pending||PFont.preloading.pending(100))l.setTimeout(function(){ld(a)},100);else{if(l.opera){var b,c,d=da.imageCache.operaCache;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&p.body.removeChild(c),delete d[b])}da.attach(a,n);da.onLoad(a);a.setup&&(a.setup(),a.resetMatrix(),da.onSetup());fb();a.draw&&(Da?a.loop():a.redraw())}};this.externals.canvas.id!==h&&this.externals.canvas.id.length||(this.externals.canvas.id="__processing"+
q.length);Zb[this.externals.canvas.id]=q.length;q.push(this);ld(e)}};M.debug=function(){return"console"in l?function(a){l.console.log("Processing.js: "+a)}:r}();M.prototype=n;M.instances=q;M.getInstanceById=function(a){return q[Zb[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),
d=c.length,f,h;d--;)f=c[d],h=f.replace("()",""),a[h]=b(f)})(n);return M}},{}],27:[function(D,x,Q){var k={virtEquals:D("./Helpers/virtEquals"),virtHashCode:D("./Helpers/virtHashCode"),ObjectIterator:D("./Helpers/ObjectIterator"),PConstants:D("./Helpers/PConstants"),ArrayList:D("./Objects/ArrayList"),HashMap:D("./Objects/HashMap"),PVector:D("./Objects/PVector"),PFont:D("./Objects/PFont"),Char:D("./Objects/Char"),XMLAttribute:D("./Objects/XMLAttribute"),XMLElement:D("./Objects/XMLElement"),PMatrix2D:D("./Objects/PMatrix2D"),
PMatrix3D:D("./Objects/PMatrix3D"),PShape:D("./Objects/PShape"),colors:D("./Objects/webcolors"),PShapeSVG:D("./Objects/PShapeSVG"),CommonFunctions:D("./P5Functions/commonFunctions"),defaultScope:D("./Helpers/defaultScope"),Processing:D("./Processing"),setupParser:D("./Parser/Parser"),finalize:D("./Helpers/finalizeProcessing")};k.extend={withMath:D("./P5Functions/Math.js"),withProxyFunctions:D("./P5Functions/JavaProxyFunctions")(k.virtHashCode,k.virtEquals),withTouch:D("./P5Functions/touchmouse"),
withCommonFunctions:k.CommonFunctions.withCommonFunctions};x.exports=function(h,m){var n=function(){},a=k.virtEquals,b=k.virtHashCode,d=k.PConstants,f=k.CommonFunctions,l=k.ObjectIterator,p=k.Char,r=k.XMLAttribute(),c=k.ArrayList({virtHashCode:b,virtEquals:a}),a=k.HashMap({virtHashCode:b,virtEquals:a}),b=k.PVector({PConstants:d}),x=k.PFont({Browser:h,noop:n}),r=k.XMLElement({Browser:h,XMLAttribute:r}),Q=k.PMatrix2D({p:f}),G=k.PMatrix3D({p:f}),Q=k.PShape({PConstants:d,PMatrix2D:Q,PMatrix3D:G}),f=k.PShapeSVG({CommonFunctions:f,
PConstants:d,PShape:Q,XMLElement:r,colors:k.colors}),d=k.defaultScope({ArrayList:c,HashMap:a,PVector:b,PFont:x,PShapeSVG:f,ObjectIterator:l,PConstants:d,Char:p,XMLElement:r,XML:r}),l=k.Processing({defaultScope:d,Browser:h,extend:k.extend,noop:n}),l=k.setupParser(l,{Browser:h,aFunctions:m,defaultScope:d});return l=k.finalize(l,{version:D("../package.json").version,isDomPresent:h.isDomPresent,window:h.window,document:h.document,noop:n})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,
"./Helpers/defaultScope":5,"./Helpers/finalizeProcessing":6,"./Helpers/virtEquals":7,"./Helpers/virtHashCode":8,"./Objects/ArrayList":9,"./Objects/Char":10,"./Objects/HashMap":11,"./Objects/PFont":12,"./Objects/PMatrix2D":13,"./Objects/PMatrix3D":14,"./Objects/PShape":15,"./Objects/PShapeSVG":16,"./Objects/PVector":17,"./Objects/XMLAttribute":18,"./Objects/XMLElement":19,"./Objects/webcolors":20,"./P5Functions/JavaProxyFunctions":21,"./P5Functions/Math.js":22,"./P5Functions/commonFunctions":23,"./P5Functions/touchmouse":24,
"./Parser/Parser":25,"./Processing":26}]},{},[1]);

;(function(){
var h, aa = this;
function u(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  return "string" == typeof a;
}
function da(a) {
  return "function" == u(a);
}
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
var ia = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function la(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
Math.random();
function ma(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function na(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function qa(a) {
  var b = arguments.length;
  if (1 == b && "array" == u(arguments[0])) {
    return qa.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;function ra(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = ra.prototype;
h.Qa = "";
h.set = function(a) {
  this.Qa = "" + a;
};
h.append = function(a, b, c) {
  this.Qa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Qa += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.Qa = "";
};
h.toString = function() {
  return this.Qa;
};
var sa = Array.prototype, ua = sa.indexOf ? function(a, b, c) {
  return sa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
function va(a, b) {
  a.sort(b || wa);
}
function ya(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || wa;
  va(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function wa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;var za;
if ("undefined" === typeof Ba) {
  var Ba = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
if ("undefined" === typeof Ca) {
  var Ca = function() {
    throw Error("No *print-err-fn* fn set for evaluation environment");
  }
}
var Da = null;
if ("undefined" === typeof Fa) {
  var Fa = null
}
function Ga() {
  return new Ha(null, 5, [Ia, !0, Ja, !0, La, !1, Ma, !1, Na, null], null);
}
function v(a) {
  return null != a && !1 !== a;
}
function Oa(a) {
  return null == a;
}
function Pa(a) {
  return a instanceof Array;
}
function Qa(a) {
  return null == a ? !0 : !1 === a ? !0 : !1;
}
function z(a, b) {
  return a[u(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function A(a, b) {
  var c = null == b ? null : b.constructor, c = v(v(c) ? c.Tb : c) ? c.vb : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ra(a) {
  var b = a.vb;
  return v(b) ? b : "" + B(a);
}
var Sa = "undefined" !== typeof Symbol && "function" === u(Symbol) ? Symbol.iterator : "@@iterator";
function Ta(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ua = {}, Va = function Va(b) {
  if (null != b && null != b.X) {
    return b.X(b);
  }
  var c = Va[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Va._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("ICounted.-count", b);
}, Wa = function Wa(b) {
  if (null != b && null != b.Y) {
    return b.Y(b);
  }
  var c = Wa[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Wa._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IEmptyableCollection.-empty", b);
}, Xa = function Xa(b, c) {
  if (null != b && null != b.T) {
    return b.T(b, c);
  }
  var d = Xa[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Xa._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("ICollection.-conj", b);
}, Ya = {}, D = function D() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return D.b(arguments[0], arguments[1]);
    case 3:
      return D.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
D.b = function(a, b) {
  if (null != a && null != a.O) {
    return a.O(a, b);
  }
  var c = D[u(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = D._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw A("IIndexed.-nth", a);
};
D.c = function(a, b, c) {
  if (null != a && null != a.ya) {
    return a.ya(a, b, c);
  }
  var d = D[u(null == a ? null : a)];
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  d = D._;
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  throw A("IIndexed.-nth", a);
};
D.A = 3;
var Za = function Za(b) {
  if (null != b && null != b.Z) {
    return b.Z(b);
  }
  var c = Za[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Za._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("ISeq.-first", b);
}, ab = function ab(b) {
  if (null != b && null != b.va) {
    return b.va(b);
  }
  var c = ab[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ab._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("ISeq.-rest", b);
}, bb = {}, cb = {}, db = function db() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return db.b(arguments[0], arguments[1]);
    case 3:
      return db.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
db.b = function(a, b) {
  if (null != a && null != a.P) {
    return a.P(a, b);
  }
  var c = db[u(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = db._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw A("ILookup.-lookup", a);
};
db.c = function(a, b, c) {
  if (null != a && null != a.K) {
    return a.K(a, b, c);
  }
  var d = db[u(null == a ? null : a)];
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  d = db._;
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  throw A("ILookup.-lookup", a);
};
db.A = 3;
var eb = function eb(b, c) {
  if (null != b && null != b.Ab) {
    return b.Ab(b, c);
  }
  var d = eb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = eb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IAssociative.-contains-key?", b);
}, fb = function fb(b, c, d) {
  if (null != b && null != b.bb) {
    return b.bb(b, c, d);
  }
  var e = fb[u(null == b ? null : b)];
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  e = fb._;
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  throw A("IAssociative.-assoc", b);
}, gb = {}, hb = function hb(b, c) {
  if (null != b && null != b.Fb) {
    return b.Fb(b, c);
  }
  var d = hb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = hb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IMap.-dissoc", b);
}, ib = {}, jb = function jb(b) {
  if (null != b && null != b.Gb) {
    return b.Gb();
  }
  var c = jb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = jb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IMapEntry.-key", b);
}, kb = function kb(b) {
  if (null != b && null != b.Hb) {
    return b.Hb();
  }
  var c = kb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = kb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IMapEntry.-val", b);
}, lb = {}, mb = function mb(b, c) {
  if (null != b && null != b.Pb) {
    return b.Pb(0, c);
  }
  var d = mb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = mb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("ISet.-disjoin", b);
}, nb = {}, pb = function pb(b, c, d) {
  if (null != b && null != b.Ib) {
    return b.Ib(b, c, d);
  }
  var e = pb[u(null == b ? null : b)];
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  e = pb._;
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  throw A("IVector.-assoc-n", b);
}, qb = function qb(b) {
  if (null != b && null != b.Zb) {
    return b.state;
  }
  var c = qb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = qb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IDeref.-deref", b);
}, rb = {}, sb = function sb(b) {
  if (null != b && null != b.R) {
    return b.R(b);
  }
  var c = sb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = sb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IMeta.-meta", b);
}, tb = function tb(b, c) {
  if (null != b && null != b.S) {
    return b.S(b, c);
  }
  var d = tb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = tb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IWithMeta.-with-meta", b);
}, ub = {}, vb = function vb() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return vb.b(arguments[0], arguments[1]);
    case 3:
      return vb.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
vb.b = function(a, b) {
  if (null != a && null != a.oa) {
    return a.oa(a, b);
  }
  var c = vb[u(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = vb._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw A("IReduce.-reduce", a);
};
vb.c = function(a, b, c) {
  if (null != a && null != a.pa) {
    return a.pa(a, b, c);
  }
  var d = vb[u(null == a ? null : a)];
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  d = vb._;
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  throw A("IReduce.-reduce", a);
};
vb.A = 3;
var wb = function wb(b, c) {
  if (null != b && null != b.w) {
    return b.w(b, c);
  }
  var d = wb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = wb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IEquiv.-equiv", b);
}, xb = function xb(b) {
  if (null != b && null != b.L) {
    return b.L(b);
  }
  var c = xb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = xb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IHash.-hash", b);
}, yb = {}, zb = function zb(b) {
  if (null != b && null != b.V) {
    return b.V(b);
  }
  var c = zb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = zb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("ISeqable.-seq", b);
}, Ab = {}, Bb = {}, Cb = {}, Eb = function Eb(b) {
  if (null != b && null != b.ub) {
    return b.ub(b);
  }
  var c = Eb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Eb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IReversible.-rseq", b);
}, Fb = function Fb(b, c) {
  if (null != b && null != b.Sb) {
    return b.Sb(0, c);
  }
  var d = Fb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Fb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IWriter.-write", b);
}, Gb = function Gb(b, c, d) {
  if (null != b && null != b.M) {
    return b.M(b, c, d);
  }
  var e = Gb[u(null == b ? null : b)];
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  e = Gb._;
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  throw A("IPrintWithWriter.-pr-writer", b);
}, Hb = function Hb(b, c, d) {
  if (null != b && null != b.Rb) {
    return b.Rb(0, c, d);
  }
  var e = Hb[u(null == b ? null : b)];
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  e = Hb._;
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  throw A("IWatchable.-notify-watches", b);
}, Ib = function Ib(b) {
  if (null != b && null != b.Wa) {
    return b.Wa(b);
  }
  var c = Ib[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Ib._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IEditableCollection.-as-transient", b);
}, Jb = function Jb(b, c) {
  if (null != b && null != b.Ra) {
    return b.Ra(b, c);
  }
  var d = Jb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Jb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("ITransientCollection.-conj!", b);
}, Kb = function Kb(b) {
  if (null != b && null != b.Xa) {
    return b.Xa(b);
  }
  var c = Kb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Kb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("ITransientCollection.-persistent!", b);
}, Lb = function Lb(b, c, d) {
  if (null != b && null != b.hb) {
    return b.hb(b, c, d);
  }
  var e = Lb[u(null == b ? null : b)];
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  e = Lb._;
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  throw A("ITransientAssociative.-assoc!", b);
}, Mb = function Mb(b, c, d) {
  if (null != b && null != b.Qb) {
    return b.Qb(0, c, d);
  }
  var e = Mb[u(null == b ? null : b)];
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  e = Mb._;
  if (null != e) {
    return e.c ? e.c(b, c, d) : e.call(null, b, c, d);
  }
  throw A("ITransientVector.-assoc-n!", b);
}, Nb = {}, Ob = function Ob(b, c) {
  if (null != b && null != b.Va) {
    return b.Va(b, c);
  }
  var d = Ob[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Ob._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IComparable.-compare", b);
}, Pb = function Pb(b) {
  if (null != b && null != b.Nb) {
    return b.Nb();
  }
  var c = Pb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Pb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IChunk.-drop-first", b);
}, Qb = function Qb(b) {
  if (null != b && null != b.Cb) {
    return b.Cb(b);
  }
  var c = Qb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Qb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IChunkedSeq.-chunked-first", b);
}, Rb = function Rb(b) {
  if (null != b && null != b.Db) {
    return b.Db(b);
  }
  var c = Rb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Rb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IChunkedSeq.-chunked-rest", b);
}, Sb = function Sb(b) {
  if (null != b && null != b.Bb) {
    return b.Bb(b);
  }
  var c = Sb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Sb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IChunkedNext.-chunked-next", b);
}, Tb = function Tb(b) {
  if (null != b && null != b.fb) {
    return b.fb(b);
  }
  var c = Tb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Tb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("INamed.-name", b);
}, Ub = function Ub(b) {
  if (null != b && null != b.gb) {
    return b.gb(b);
  }
  var c = Ub[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Ub._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("INamed.-namespace", b);
}, Vb = function Vb(b, c) {
  if (null != b && null != b.fc) {
    return b.fc(b, c);
  }
  var d = Vb[u(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Vb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw A("IReset.-reset!", b);
}, Wb = function Wb() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Wb.b(arguments[0], arguments[1]);
    case 3:
      return Wb.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Wb.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Wb.F(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Wb.b = function(a, b) {
  if (null != a && null != a.hc) {
    return a.hc(a, b);
  }
  var c = Wb[u(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = Wb._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw A("ISwap.-swap!", a);
};
Wb.c = function(a, b, c) {
  if (null != a && null != a.ic) {
    return a.ic(a, b, c);
  }
  var d = Wb[u(null == a ? null : a)];
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  d = Wb._;
  if (null != d) {
    return d.c ? d.c(a, b, c) : d.call(null, a, b, c);
  }
  throw A("ISwap.-swap!", a);
};
Wb.u = function(a, b, c, d) {
  if (null != a && null != a.jc) {
    return a.jc(a, b, c, d);
  }
  var e = Wb[u(null == a ? null : a)];
  if (null != e) {
    return e.u ? e.u(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = Wb._;
  if (null != e) {
    return e.u ? e.u(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw A("ISwap.-swap!", a);
};
Wb.F = function(a, b, c, d, e) {
  if (null != a && null != a.kc) {
    return a.kc(a, b, c, d, e);
  }
  var f = Wb[u(null == a ? null : a)];
  if (null != f) {
    return f.F ? f.F(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = Wb._;
  if (null != f) {
    return f.F ? f.F(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw A("ISwap.-swap!", a);
};
Wb.A = 5;
var Yb = function Yb(b) {
  if (null != b && null != b.Ea) {
    return b.Ea(b);
  }
  var c = Yb[u(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Yb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw A("IIterable.-iterator", b);
};
function Zb(a) {
  this.qc = a;
  this.i = 1073741824;
  this.C = 0;
}
Zb.prototype.Sb = function(a, b) {
  return this.qc.append(b);
};
function $b(a) {
  var b = new ra;
  a.M(null, new Zb(b), Ga());
  return "" + B(b);
}
var ac = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function bc(a) {
  a = ac(a | 0, -862048943);
  return ac(a << 15 | a >>> -15, 461845907);
}
function cc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return ac(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function dc(a, b) {
  var c = (a | 0) ^ b, c = ac(c ^ c >>> 16, -2048144789), c = ac(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function fc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = cc(c, bc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ bc(a.charCodeAt(a.length - 1)) : b;
  return dc(b, ac(2, a.length));
}
var gc = {}, hc = 0;
function ic(a) {
  255 < hc && (gc = {}, hc = 0);
  var b = gc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = ac(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    gc[a] = b;
    hc += 1;
  }
  return a = b;
}
function jc(a) {
  null != a && (a.i & 4194304 || a.vc) ? a = a.L(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = ic(a), 0 !== a && (a = bc(a), a = cc(0, a), a = dc(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : xb(a);
  return a;
}
function kc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function lc(a, b) {
  if (a.Ha === b.Ha) {
    return 0;
  }
  var c = Qa(a.qa);
  if (v(c ? b.qa : c)) {
    return -1;
  }
  if (v(a.qa)) {
    if (Qa(b.qa)) {
      return 1;
    }
    c = wa(a.qa, b.qa);
    return 0 === c ? wa(a.name, b.name) : c;
  }
  return wa(a.name, b.name);
}
function mc(a, b, c, d, e) {
  this.qa = a;
  this.name = b;
  this.Ha = c;
  this.Ua = d;
  this.ua = e;
  this.i = 2154168321;
  this.C = 4096;
}
h = mc.prototype;
h.toString = function() {
  return this.Ha;
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.w = function(a, b) {
  return b instanceof mc ? this.Ha === b.Ha : !1;
};
h.call = function() {
  function a(a, b, c) {
    return nc ? nc(b, this, c) : oc.call(null, b, this, c);
  }
  function b(a, b) {
    return F ? F(b, this) : oc.call(null, b, this);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return F ? F(a, this) : oc.call(null, a, this);
};
h.b = function(a, b) {
  return nc ? nc(a, this, b) : oc.call(null, a, this, b);
};
h.R = function() {
  return this.ua;
};
h.S = function(a, b) {
  return new mc(this.qa, this.name, this.Ha, this.Ua, b);
};
h.L = function() {
  var a = this.Ua;
  return null != a ? a : this.Ua = a = kc(fc(this.name), ic(this.qa));
};
h.fb = function() {
  return this.name;
};
h.gb = function() {
  return this.qa;
};
h.M = function(a, b) {
  return Fb(b, this.Ha);
};
var pc = function pc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return pc.a(arguments[0]);
    case 2:
      return pc.b(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
pc.a = function(a) {
  if (a instanceof mc) {
    return a;
  }
  var b = a.indexOf("/");
  return -1 === b ? pc.b(null, a) : pc.b(a.substring(0, b), a.substring(b + 1, a.length));
};
pc.b = function(a, b) {
  var c = null != a ? [B(a), B("/"), B(b)].join("") : b;
  return new mc(a, b, c, null, null);
};
pc.A = 2;
function G(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.i & 8388608 || a.gc)) {
    return a.V(null);
  }
  if (Pa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new I(a, 0);
  }
  if (z(yb, a)) {
    return zb(a);
  }
  throw Error([B(a), B(" is not ISeqable")].join(""));
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.i & 64 || a.H)) {
    return a.Z(null);
  }
  a = G(a);
  return null == a ? null : Za(a);
}
function qc(a) {
  return null != a ? null != a && (a.i & 64 || a.H) ? a.va(null) : (a = G(a)) ? ab(a) : rc : rc;
}
function K(a) {
  return null == a ? null : null != a && (a.i & 128 || a.tb) ? a.sa(null) : G(qc(a));
}
var sc = function sc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return sc.a(arguments[0]);
    case 2:
      return sc.b(arguments[0], arguments[1]);
    default:
      return sc.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
sc.a = function() {
  return !0;
};
sc.b = function(a, b) {
  return null == a ? null == b : a === b || wb(a, b);
};
sc.m = function(a, b, c) {
  for (;;) {
    if (sc.b(a, b)) {
      if (K(c)) {
        a = b, b = J(c), c = K(c);
      } else {
        return sc.b(b, J(c));
      }
    } else {
      return !1;
    }
  }
};
sc.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return sc.m(b, a, c);
};
sc.A = 2;
function tc(a) {
  this.D = a;
}
tc.prototype.next = function() {
  if (null != this.D) {
    var a = J(this.D);
    this.D = K(this.D);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function uc(a) {
  return new tc(G(a));
}
function vc(a, b) {
  var c = bc(a), c = cc(0, c);
  return dc(c, b);
}
function wc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = ac(31, c) + jc(J(a)) | 0, a = K(a);
    } else {
      return vc(c, b);
    }
  }
}
var xc = vc(1, 0);
function yc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + jc(J(a)) | 0, a = K(a);
    } else {
      return vc(c, b);
    }
  }
}
var zc = vc(0, 0);
Ua["null"] = !0;
Va["null"] = function() {
  return 0;
};
Date.prototype.w = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.cb = !0;
Date.prototype.Va = function(a, b) {
  if (b instanceof Date) {
    return wa(this.valueOf(), b.valueOf());
  }
  throw Error([B("Cannot compare "), B(this), B(" to "), B(b)].join(""));
};
wb.number = function(a, b) {
  return a === b;
};
rb["function"] = !0;
sb["function"] = function() {
  return null;
};
xb._ = function(a) {
  return a[ea] || (a[ea] = ++ga);
};
function L(a) {
  return qb(a);
}
function Bc(a, b) {
  var c = Va(a);
  if (0 === c) {
    return b.s ? b.s() : b.call(null);
  }
  for (var d = D.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = D.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Cc(a, b, c) {
  var d = Va(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = D.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Dc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.s ? b.s() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Ec(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Fc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.b ? b.b(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function Gc(a) {
  return null != a ? a.i & 2 || a.Yb ? !0 : a.i ? !1 : z(Ua, a) : z(Ua, a);
}
function Hc(a) {
  return null != a ? a.i & 16 || a.Ob ? !0 : a.i ? !1 : z(Ya, a) : z(Ya, a);
}
function Ic(a, b) {
  this.f = a;
  this.l = b;
}
Ic.prototype.wa = function() {
  return this.l < this.f.length;
};
Ic.prototype.next = function() {
  var a = this.f[this.l];
  this.l += 1;
  return a;
};
function I(a, b) {
  this.f = a;
  this.l = b;
  this.i = 166199550;
  this.C = 8192;
}
h = I.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.O = function(a, b) {
  var c = b + this.l;
  return c < this.f.length ? this.f[c] : null;
};
h.ya = function(a, b, c) {
  a = b + this.l;
  return a < this.f.length ? this.f[a] : c;
};
h.Ea = function() {
  return new Ic(this.f, this.l);
};
h.sa = function() {
  return this.l + 1 < this.f.length ? new I(this.f, this.l + 1) : null;
};
h.X = function() {
  var a = this.f.length - this.l;
  return 0 > a ? 0 : a;
};
h.ub = function() {
  var a = Va(this);
  return 0 < a ? new Jc(this, a - 1, null) : null;
};
h.L = function() {
  return wc(this);
};
h.w = function(a, b) {
  return Kc.b ? Kc.b(this, b) : Kc.call(null, this, b);
};
h.Y = function() {
  return rc;
};
h.oa = function(a, b) {
  return Fc(this.f, b, this.f[this.l], this.l + 1);
};
h.pa = function(a, b, c) {
  return Fc(this.f, b, c, this.l);
};
h.Z = function() {
  return this.f[this.l];
};
h.va = function() {
  return this.l + 1 < this.f.length ? new I(this.f, this.l + 1) : rc;
};
h.V = function() {
  return this.l < this.f.length ? this : null;
};
h.T = function(a, b) {
  return M.b ? M.b(b, this) : M.call(null, b, this);
};
I.prototype[Sa] = function() {
  return uc(this);
};
function Lc(a, b) {
  return b < a.length ? new I(a, b) : null;
}
function Mc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return Lc(arguments[0], 0);
    case 2:
      return Lc(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Jc(a, b, c) {
  this.sb = a;
  this.l = b;
  this.o = c;
  this.i = 32374990;
  this.C = 8192;
}
h = Jc.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  return 0 < this.l ? new Jc(this.sb, this.l - 1, null) : null;
};
h.X = function() {
  return this.l + 1;
};
h.L = function() {
  return wc(this);
};
h.w = function(a, b) {
  return Kc.b ? Kc.b(this, b) : Kc.call(null, this, b);
};
h.Y = function() {
  var a = this.o;
  return Nc.b ? Nc.b(rc, a) : Nc.call(null, rc, a);
};
h.oa = function(a, b) {
  return Oc ? Oc(b, this) : Pc.call(null, b, this);
};
h.pa = function(a, b, c) {
  return Qc ? Qc(b, c, this) : Pc.call(null, b, c, this);
};
h.Z = function() {
  return D.b(this.sb, this.l);
};
h.va = function() {
  return 0 < this.l ? new Jc(this.sb, this.l - 1, null) : rc;
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Jc(this.sb, this.l, b);
};
h.T = function(a, b) {
  return M.b ? M.b(b, this) : M.call(null, b, this);
};
Jc.prototype[Sa] = function() {
  return uc(this);
};
wb._ = function(a, b) {
  return a === b;
};
var Rc = function Rc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return Rc.s();
    case 1:
      return Rc.a(arguments[0]);
    case 2:
      return Rc.b(arguments[0], arguments[1]);
    default:
      return Rc.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Rc.s = function() {
  return Sc;
};
Rc.a = function(a) {
  return a;
};
Rc.b = function(a, b) {
  return null != a ? Xa(a, b) : Xa(rc, b);
};
Rc.m = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = Rc.b(a, b), b = J(c), c = K(c);
    } else {
      return Rc.b(a, b);
    }
  }
};
Rc.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Rc.m(b, a, c);
};
Rc.A = 2;
function O(a) {
  if (null != a) {
    if (null != a && (a.i & 2 || a.Yb)) {
      a = a.X(null);
    } else {
      if (Pa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (null != a && (a.i & 8388608 || a.gc)) {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (Gc(a)) {
                  a = b + Va(a);
                  break a;
                }
                a = K(a);
                b += 1;
              }
            }
          } else {
            a = Va(a);
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Tc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return G(a) ? J(a) : c;
    }
    if (Hc(a)) {
      return D.c(a, b, c);
    }
    if (G(a)) {
      var d = K(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Uc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (null != a && (a.i & 16 || a.Ob)) {
    return a.O(null, b);
  }
  if (Pa(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.i & 64 || a.H)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (G(c)) {
            c = J(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Hc(c)) {
          c = D.b(c, d);
          break a;
        }
        if (G(c)) {
          c = K(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  if (z(Ya, a)) {
    return D.b(a, b);
  }
  throw Error([B("nth not supported on this type "), B(Ra(null == a ? null : a.constructor))].join(""));
}
function P(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (null != a && (a.i & 16 || a.Ob)) {
    return a.ya(null, b, null);
  }
  if (Pa(a)) {
    return b < a.length ? a[b] : null;
  }
  if ("string" === typeof a) {
    return b < a.length ? a.charAt(b) : null;
  }
  if (null != a && (a.i & 64 || a.H)) {
    return Tc(a, b);
  }
  if (z(Ya, a)) {
    return D.b(a, b);
  }
  throw Error([B("nth not supported on this type "), B(Ra(null == a ? null : a.constructor))].join(""));
}
function oc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return F(arguments[0], arguments[1]);
    case 3:
      return nc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function F(a, b) {
  return null == a ? null : null != a && (a.i & 256 || a.$b) ? a.P(null, b) : Pa(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : z(cb, a) ? db.b(a, b) : null;
}
function nc(a, b, c) {
  return null != a ? null != a && (a.i & 256 || a.$b) ? a.K(null, b, c) : Pa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : z(cb, a) ? db.c(a, b, c) : c : c;
}
var Vc = function Vc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return Vc.c(arguments[0], arguments[1], arguments[2]);
    default:
      return Vc.m(arguments[0], arguments[1], arguments[2], new I(b.slice(3), 0));
  }
};
Vc.c = function(a, b, c) {
  return null != a ? fb(a, b, c) : Wc([b], [c]);
};
Vc.m = function(a, b, c, d) {
  for (;;) {
    if (a = Vc.c(a, b, c), v(d)) {
      b = J(d), c = J(K(d)), d = K(K(d));
    } else {
      return a;
    }
  }
};
Vc.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), d = K(d);
  return Vc.m(b, a, c, d);
};
Vc.A = 3;
var Xc = function Xc() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Xc.a(arguments[0]);
    case 2:
      return Xc.b(arguments[0], arguments[1]);
    default:
      return Xc.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Xc.a = function(a) {
  return a;
};
Xc.b = function(a, b) {
  return null == a ? null : hb(a, b);
};
Xc.m = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Xc.b(a, b);
    if (v(c)) {
      b = J(c), c = K(c);
    } else {
      return a;
    }
  }
};
Xc.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Xc.m(b, a, c);
};
Xc.A = 2;
function Yc(a, b) {
  this.g = a;
  this.o = b;
  this.i = 393217;
  this.C = 0;
}
h = Yc.prototype;
h.R = function() {
  return this.o;
};
h.S = function(a, b) {
  return new Yc(this.g, b);
};
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H, N) {
    a = this;
    return Zc.eb ? Zc.eb(a.g, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H, N) : Zc.call(null, a.g, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H, N);
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H) {
    a = this;
    return a.g.ka ? a.g.ka(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E) {
    a = this;
    return a.g.ja ? a.g.ja(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y) {
    a = this;
    return a.g.ia ? a.g.ia(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) {
    a = this;
    return a.g.ha ? a.g.ha(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) {
    a = this;
    return a.g.ga ? a.g.ga(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) {
    a = this;
    return a.g.fa ? a.g.fa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
    a = this;
    return a.g.ea ? a.g.ea(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
    a = this;
    return a.g.da ? a.g.da(b, c, d, e, f, g, k, l, m, n, p, q, r) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    a = this;
    return a.g.ca ? a.g.ca(b, c, d, e, f, g, k, l, m, n, p, q) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    return a.g.ba ? a.g.ba(b, c, d, e, f, g, k, l, m, n, p) : a.g.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    return a.g.aa ? a.g.aa(b, c, d, e, f, g, k, l, m, n) : a.g.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.g.na ? a.g.na(b, c, d, e, f, g, k, l, m) : a.g.call(null, b, c, d, e, f, g, k, l, m);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.g.ma ? a.g.ma(b, c, d, e, f, g, k, l) : a.g.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    return a.g.la ? a.g.la(b, c, d, e, f, g, k) : a.g.call(null, b, c, d, e, f, g, k);
  }
  function w(a, b, c, d, e, f, g) {
    a = this;
    return a.g.N ? a.g.N(b, c, d, e, f, g) : a.g.call(null, b, c, d, e, f, g);
  }
  function x(a, b, c, d, e, f) {
    a = this;
    return a.g.F ? a.g.F(b, c, d, e, f) : a.g.call(null, b, c, d, e, f);
  }
  function C(a, b, c, d, e) {
    a = this;
    return a.g.u ? a.g.u(b, c, d, e) : a.g.call(null, b, c, d, e);
  }
  function E(a, b, c, d) {
    a = this;
    return a.g.c ? a.g.c(b, c, d) : a.g.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    return a.g.b ? a.g.b(b, c) : a.g.call(null, b, c);
  }
  function N(a, b) {
    a = this;
    return a.g.a ? a.g.a(b) : a.g.call(null, b);
  }
  function pa(a) {
    a = this;
    return a.g.s ? a.g.s() : a.g.call(null);
  }
  var y = null, y = function(Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob, Db, Xb, Ac, rd, Xe) {
    switch(arguments.length) {
      case 1:
        return pa.call(this, Aa);
      case 2:
        return N.call(this, Aa, S);
      case 3:
        return H.call(this, Aa, S, U);
      case 4:
        return E.call(this, Aa, S, U, Y);
      case 5:
        return C.call(this, Aa, S, U, Y, ba);
      case 6:
        return x.call(this, Aa, S, U, Y, ba, fa);
      case 7:
        return w.call(this, Aa, S, U, Y, ba, fa, ha);
      case 8:
        return t.call(this, Aa, S, U, Y, ba, fa, ha, ja);
      case 9:
        return r.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka);
      case 10:
        return q.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa);
      case 11:
        return p.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta);
      case 12:
        return n.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa);
      case 13:
        return m.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea);
      case 14:
        return l.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka);
      case 15:
        return k.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y);
      case 16:
        return g.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a);
      case 17:
        return f.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob);
      case 18:
        return e.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob, Db);
      case 19:
        return d.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob, Db, Xb);
      case 20:
        return c.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob, Db, Xb, Ac);
      case 21:
        return b.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob, Db, Xb, Ac, rd);
      case 22:
        return a.call(this, Aa, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, y, $a, ob, Db, Xb, Ac, rd, Xe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.a = pa;
  y.b = N;
  y.c = H;
  y.u = E;
  y.F = C;
  y.N = x;
  y.la = w;
  y.ma = t;
  y.na = r;
  y.aa = q;
  y.ba = p;
  y.ca = n;
  y.da = m;
  y.ea = l;
  y.fa = k;
  y.ga = g;
  y.ha = f;
  y.ia = e;
  y.ja = d;
  y.ka = c;
  y.Eb = b;
  y.eb = a;
  return y;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.s = function() {
  return this.g.s ? this.g.s() : this.g.call(null);
};
h.a = function(a) {
  return this.g.a ? this.g.a(a) : this.g.call(null, a);
};
h.b = function(a, b) {
  return this.g.b ? this.g.b(a, b) : this.g.call(null, a, b);
};
h.c = function(a, b, c) {
  return this.g.c ? this.g.c(a, b, c) : this.g.call(null, a, b, c);
};
h.u = function(a, b, c, d) {
  return this.g.u ? this.g.u(a, b, c, d) : this.g.call(null, a, b, c, d);
};
h.F = function(a, b, c, d, e) {
  return this.g.F ? this.g.F(a, b, c, d, e) : this.g.call(null, a, b, c, d, e);
};
h.N = function(a, b, c, d, e, f) {
  return this.g.N ? this.g.N(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f);
};
h.la = function(a, b, c, d, e, f, g) {
  return this.g.la ? this.g.la(a, b, c, d, e, f, g) : this.g.call(null, a, b, c, d, e, f, g);
};
h.ma = function(a, b, c, d, e, f, g, k) {
  return this.g.ma ? this.g.ma(a, b, c, d, e, f, g, k) : this.g.call(null, a, b, c, d, e, f, g, k);
};
h.na = function(a, b, c, d, e, f, g, k, l) {
  return this.g.na ? this.g.na(a, b, c, d, e, f, g, k, l) : this.g.call(null, a, b, c, d, e, f, g, k, l);
};
h.aa = function(a, b, c, d, e, f, g, k, l, m) {
  return this.g.aa ? this.g.aa(a, b, c, d, e, f, g, k, l, m) : this.g.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.ba = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.g.ba ? this.g.ba(a, b, c, d, e, f, g, k, l, m, n) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.ca = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.g.ca ? this.g.ca(a, b, c, d, e, f, g, k, l, m, n, p) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.da = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.g.da ? this.g.da(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.ea = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  return this.g.ea ? this.g.ea(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.fa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  return this.g.fa ? this.g.fa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.ga = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) {
  return this.g.ga ? this.g.ga(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
};
h.ha = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) {
  return this.g.ha ? this.g.ha(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x);
};
h.ia = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) {
  return this.g.ia ? this.g.ia(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C);
};
h.ja = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) {
  return this.g.ja ? this.g.ja(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E);
};
h.ka = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) {
  return this.g.ka ? this.g.ka(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) : this.g.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H);
};
h.Eb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N) {
  return Zc.eb ? Zc.eb(this.g, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N) : Zc.call(null, this.g, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N);
};
function Nc(a, b) {
  return da(a) ? new Yc(a, b) : null == a ? null : tb(a, b);
}
function $c(a) {
  var b = null != a;
  return (b ? null != a ? a.i & 131072 || a.cc || (a.i ? 0 : z(rb, a)) : z(rb, a) : b) ? sb(a) : null;
}
function ad(a) {
  return null == a ? !1 : null != a ? a.i & 4096 || a.zc ? !0 : a.i ? !1 : z(lb, a) : z(lb, a);
}
function bd(a) {
  return null != a ? a.i & 16777216 || a.yc ? !0 : a.i ? !1 : z(Ab, a) : z(Ab, a);
}
function cd(a) {
  return null == a ? !1 : null != a ? a.i & 1024 || a.ac ? !0 : a.i ? !1 : z(gb, a) : z(gb, a);
}
function dd(a) {
  return null != a ? a.i & 16384 || a.Ac ? !0 : a.i ? !1 : z(nb, a) : z(nb, a);
}
function ed(a) {
  return null != a ? a.C & 512 || a.tc ? !0 : !1 : !1;
}
function fd(a) {
  var b = [];
  ma(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function gd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var hd = {};
function id(a) {
  return null == a ? !1 : !1 === a ? !1 : !0;
}
function jd(a, b) {
  return nc(a, b, hd) === hd ? !1 : !0;
}
function kd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return wa(a, b);
    }
    throw Error([B("Cannot compare "), B(a), B(" to "), B(b)].join(""));
  }
  if (null != a ? a.C & 2048 || a.cb || (a.C ? 0 : z(Nb, a)) : z(Nb, a)) {
    return Ob(a, b);
  }
  if ("string" !== typeof a && !Pa(a) && !0 !== a && !1 !== a || (null == a ? null : a.constructor) !== (null == b ? null : b.constructor)) {
    throw Error([B("Cannot compare "), B(a), B(" to "), B(b)].join(""));
  }
  return wa(a, b);
}
function ld(a, b) {
  var c = O(a), d = O(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = kd(Uc(a, d), Uc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function md() {
  return sc.b(kd, kd) ? kd : function(a, b) {
    var c = kd.b ? kd.b(a, b) : kd.call(null, a, b);
    return "number" === typeof c ? c : v(c) ? -1 : v(kd.b ? kd.b(b, a) : kd.call(null, b, a)) ? 1 : 0;
  };
}
function nd(a) {
  if (G(a)) {
    a = od.a ? od.a(a) : od.call(null, a);
    var b = md();
    ya(a, b);
    a = G(a);
  } else {
    a = rc;
  }
  return a;
}
function Pc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return Oc(arguments[0], arguments[1]);
    case 3:
      return Qc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Oc(a, b) {
  var c = G(b);
  if (c) {
    var d = J(c), c = K(c);
    return pd ? pd(a, d, c) : qd.call(null, a, d, c);
  }
  return a.s ? a.s() : a.call(null);
}
function Qc(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = J(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = K(c);
    } else {
      return b;
    }
  }
}
function qd() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return sd(arguments[0], arguments[1]);
    case 3:
      return pd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function sd(a, b) {
  return null != b && (b.i & 524288 || b.ec) ? b.oa(null, a) : Pa(b) ? Dc(b, a) : "string" === typeof b ? Dc(b, a) : z(ub, b) ? vb.b(b, a) : Oc(a, b);
}
function pd(a, b, c) {
  return null != c && (c.i & 524288 || c.ec) ? c.pa(null, a, b) : Pa(c) ? Ec(c, a, b) : "string" === typeof c ? Ec(c, a, b) : z(ub, c) ? vb.c(c, a, b) : Qc(a, b, c);
}
function td(a) {
  return a;
}
var ud = function ud() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return ud.s();
    case 1:
      return ud.a(arguments[0]);
    case 2:
      return ud.b(arguments[0], arguments[1]);
    default:
      return ud.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
ud.s = function() {
  return 0;
};
ud.a = function(a) {
  return a;
};
ud.b = function(a, b) {
  return a + b;
};
ud.m = function(a, b, c) {
  return pd(ud, a + b, c);
};
ud.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return ud.m(b, a, c);
};
ud.A = 2;
var vd = function vd() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return vd.a(arguments[0]);
    case 2:
      return vd.b(arguments[0], arguments[1]);
    default:
      return vd.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
vd.a = function(a) {
  return -a;
};
vd.b = function(a, b) {
  return a - b;
};
vd.m = function(a, b, c) {
  return pd(vd, a - b, c);
};
vd.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return vd.m(b, a, c);
};
vd.A = 2;
var wd = function wd() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return wd.s();
    case 1:
      return wd.a(arguments[0]);
    case 2:
      return wd.b(arguments[0], arguments[1]);
    default:
      return wd.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
wd.s = function() {
  return 1;
};
wd.a = function(a) {
  return a;
};
wd.b = function(a, b) {
  return a * b;
};
wd.m = function(a, b, c) {
  return pd(wd, a * b, c);
};
wd.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return wd.m(b, a, c);
};
wd.A = 2;
function xd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function yd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function zd(a) {
  var b = 1;
  for (a = G(a);;) {
    if (a && 0 < b) {
      --b, a = K(a);
    } else {
      return a;
    }
  }
}
var B = function B() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return B.s();
    case 1:
      return B.a(arguments[0]);
    default:
      return B.m(arguments[0], new I(b.slice(1), 0));
  }
};
B.s = function() {
  return "";
};
B.a = function(a) {
  return null == a ? "" : "" + a;
};
B.m = function(a, b) {
  for (var c = new ra("" + B(a)), d = b;;) {
    if (v(d)) {
      c = c.append("" + B(J(d))), d = K(d);
    } else {
      return c.toString();
    }
  }
};
B.B = function(a) {
  var b = J(a);
  a = K(a);
  return B.m(b, a);
};
B.A = 1;
function Kc(a, b) {
  var c;
  if (bd(b)) {
    if (Gc(a) && Gc(b) && O(a) !== O(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && sc.b(J(c), J(d))) {
            c = K(c), d = K(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return id(c);
}
function Ad(a, b, c, d, e) {
  this.o = a;
  this.first = b;
  this.La = c;
  this.count = d;
  this.v = e;
  this.i = 65937646;
  this.C = 8192;
}
h = Ad.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  return 1 === this.count ? null : this.La;
};
h.X = function() {
  return this.count;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return tb(rc, this.o);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return this.first;
};
h.va = function() {
  return 1 === this.count ? rc : this.La;
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Ad(b, this.first, this.La, this.count, this.v);
};
h.T = function(a, b) {
  return new Ad(this.o, b, this, this.count + 1, null);
};
Ad.prototype[Sa] = function() {
  return uc(this);
};
function Bd(a) {
  this.o = a;
  this.i = 65937614;
  this.C = 8192;
}
h = Bd.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  return null;
};
h.X = function() {
  return 0;
};
h.L = function() {
  return xc;
};
h.w = function(a, b) {
  return (null != b ? b.i & 33554432 || b.wc || (b.i ? 0 : z(Bb, b)) : z(Bb, b)) || bd(b) ? null == G(b) : !1;
};
h.Y = function() {
  return this;
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return null;
};
h.va = function() {
  return rc;
};
h.V = function() {
  return null;
};
h.S = function(a, b) {
  return new Bd(b);
};
h.T = function(a, b) {
  return new Ad(this.o, b, null, 1, null);
};
var rc = new Bd(null);
Bd.prototype[Sa] = function() {
  return uc(this);
};
function Cd(a) {
  return (null != a ? a.i & 134217728 || a.xc || (a.i ? 0 : z(Cb, a)) : z(Cb, a)) ? Eb(a) : pd(Rc, rc, a);
}
function Dd() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  a: {
    b = 0 < a.length ? new I(a.slice(0), 0) : null;
    if (b instanceof I && 0 === b.l) {
      a = b.f;
    } else {
      b: {
        for (a = [];;) {
          if (null != b) {
            a.push(b.Z(null)), b = b.sa(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var b = a.length, d = rc;;) {
      if (0 < b) {
        c = b - 1, d = d.T(null, a[b - 1]), b = c;
      } else {
        break a;
      }
    }
  }
  return d;
}
function Ed(a, b, c, d) {
  this.o = a;
  this.first = b;
  this.La = c;
  this.v = d;
  this.i = 65929452;
  this.C = 8192;
}
h = Ed.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  return null == this.La ? null : G(this.La);
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.o);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return this.first;
};
h.va = function() {
  return null == this.La ? rc : this.La;
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Ed(b, this.first, this.La, this.v);
};
h.T = function(a, b) {
  return new Ed(null, b, this, this.v);
};
Ed.prototype[Sa] = function() {
  return uc(this);
};
function M(a, b) {
  var c = null == b;
  return (c ? c : null != b && (b.i & 64 || b.H)) ? new Ed(null, a, b, null) : new Ed(null, a, G(b), null);
}
function Fd(a, b) {
  if (a.Fa === b.Fa) {
    return 0;
  }
  var c = Qa(a.qa);
  if (v(c ? b.qa : c)) {
    return -1;
  }
  if (v(a.qa)) {
    if (Qa(b.qa)) {
      return 1;
    }
    c = wa(a.qa, b.qa);
    return 0 === c ? wa(a.name, b.name) : c;
  }
  return wa(a.name, b.name);
}
function Q(a, b, c, d) {
  this.qa = a;
  this.name = b;
  this.Fa = c;
  this.Ua = d;
  this.i = 2153775105;
  this.C = 4096;
}
h = Q.prototype;
h.toString = function() {
  return [B(":"), B(this.Fa)].join("");
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.w = function(a, b) {
  return b instanceof Q ? this.Fa === b.Fa : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return F(c, this);
      case 3:
        return nc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return F(c, this);
  };
  a.c = function(a, c, d) {
    return nc(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return F(a, this);
};
h.b = function(a, b) {
  return nc(a, this, b);
};
h.L = function() {
  var a = this.Ua;
  return null != a ? a : this.Ua = a = kc(fc(this.name), ic(this.qa)) + 2654435769 | 0;
};
h.fb = function() {
  return this.name;
};
h.gb = function() {
  return this.qa;
};
h.M = function(a, b) {
  return Fb(b, [B(":"), B(this.Fa)].join(""));
};
var Gd = function Gd() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Gd.a(arguments[0]);
    case 2:
      return Gd.b(arguments[0], arguments[1]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Gd.a = function(a) {
  if (a instanceof Q) {
    return a;
  }
  if (a instanceof mc) {
    var b;
    if (null != a && (a.C & 4096 || a.dc)) {
      b = a.gb(null);
    } else {
      throw Error([B("Doesn't support namespace: "), B(a)].join(""));
    }
    return new Q(b, Hd.a ? Hd.a(a) : Hd.call(null, a), a.Ha, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new Q(b[0], b[1], a, null) : new Q(null, b[0], a, null)) : null;
};
Gd.b = function(a, b) {
  return new Q(a, b, [B(v(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null);
};
Gd.A = 2;
function Id(a, b, c, d) {
  this.o = a;
  this.Za = b;
  this.D = c;
  this.v = d;
  this.i = 32374988;
  this.C = 0;
}
h = Id.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
function Jd(a) {
  null != a.Za && (a.D = a.Za.s ? a.Za.s() : a.Za.call(null), a.Za = null);
  return a.D;
}
h.R = function() {
  return this.o;
};
h.sa = function() {
  zb(this);
  return null == this.D ? null : K(this.D);
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.o);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  zb(this);
  return null == this.D ? null : J(this.D);
};
h.va = function() {
  zb(this);
  return null != this.D ? qc(this.D) : rc;
};
h.V = function() {
  Jd(this);
  if (null == this.D) {
    return null;
  }
  for (var a = this.D;;) {
    if (a instanceof Id) {
      a = Jd(a);
    } else {
      return this.D = a, G(this.D);
    }
  }
};
h.S = function(a, b) {
  return new Id(b, this.Za, this.D, this.v);
};
h.T = function(a, b) {
  return M(b, this);
};
Id.prototype[Sa] = function() {
  return uc(this);
};
function Kd(a, b) {
  this.yb = a;
  this.end = b;
  this.i = 2;
  this.C = 0;
}
Kd.prototype.add = function(a) {
  this.yb[this.end] = a;
  return this.end += 1;
};
Kd.prototype.W = function() {
  var a = new Ld(this.yb, 0, this.end);
  this.yb = null;
  return a;
};
Kd.prototype.X = function() {
  return this.end;
};
function Md(a) {
  return new Kd(Array(a), 0);
}
function Ld(a, b, c) {
  this.f = a;
  this.$ = b;
  this.end = c;
  this.i = 524306;
  this.C = 0;
}
h = Ld.prototype;
h.X = function() {
  return this.end - this.$;
};
h.O = function(a, b) {
  return this.f[this.$ + b];
};
h.ya = function(a, b, c) {
  return 0 <= b && b < this.end - this.$ ? this.f[this.$ + b] : c;
};
h.Nb = function() {
  if (this.$ === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Ld(this.f, this.$ + 1, this.end);
};
h.oa = function(a, b) {
  return Fc(this.f, b, this.f[this.$], this.$ + 1);
};
h.pa = function(a, b, c) {
  return Fc(this.f, b, c, this.$);
};
function Nd(a, b, c, d) {
  this.W = a;
  this.Ga = b;
  this.o = c;
  this.v = d;
  this.i = 31850732;
  this.C = 1536;
}
h = Nd.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  if (1 < Va(this.W)) {
    return new Nd(Pb(this.W), this.Ga, this.o, null);
  }
  var a = zb(this.Ga);
  return null == a ? null : a;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.o);
};
h.Z = function() {
  return D.b(this.W, 0);
};
h.va = function() {
  return 1 < Va(this.W) ? new Nd(Pb(this.W), this.Ga, this.o, null) : null == this.Ga ? rc : this.Ga;
};
h.V = function() {
  return this;
};
h.Cb = function() {
  return this.W;
};
h.Db = function() {
  return null == this.Ga ? rc : this.Ga;
};
h.S = function(a, b) {
  return new Nd(this.W, this.Ga, b, this.v);
};
h.T = function(a, b) {
  return M(b, this);
};
h.Bb = function() {
  return null == this.Ga ? null : this.Ga;
};
Nd.prototype[Sa] = function() {
  return uc(this);
};
function Od(a, b) {
  return 0 === Va(a) ? b : new Nd(a, b, null, null);
}
function Pd(a, b) {
  a.add(b);
}
function od(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function Qd(a, b) {
  if (Gc(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = K(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Rd = function Rd(b) {
  return null == b ? null : null == K(b) ? G(J(b)) : M(J(b), Rd(K(b)));
}, Sd = function Sd() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return Sd.s();
    case 1:
      return Sd.a(arguments[0]);
    case 2:
      return Sd.b(arguments[0], arguments[1]);
    default:
      return Sd.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Sd.s = function() {
  return new Id(null, function() {
    return null;
  }, null, null);
};
Sd.a = function(a) {
  return new Id(null, function() {
    return a;
  }, null, null);
};
Sd.b = function(a, b) {
  return new Id(null, function() {
    var c = G(a);
    return c ? ed(c) ? Od(Qb(c), Sd.b(Rb(c), b)) : M(J(c), Sd.b(qc(c), b)) : b;
  }, null, null);
};
Sd.m = function(a, b, c) {
  return function e(a, b) {
    return new Id(null, function() {
      var c = G(a);
      return c ? ed(c) ? Od(Qb(c), e(Rb(c), b)) : M(J(c), e(qc(c), b)) : v(b) ? e(J(b), K(b)) : null;
    }, null, null);
  }(Sd.b(a, b), c);
};
Sd.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Sd.m(b, a, c);
};
Sd.A = 2;
function Td(a) {
  return Kb(a);
}
var Ud = function Ud() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return Ud.s();
    case 1:
      return Ud.a(arguments[0]);
    case 2:
      return Ud.b(arguments[0], arguments[1]);
    default:
      return Ud.m(arguments[0], arguments[1], new I(b.slice(2), 0));
  }
};
Ud.s = function() {
  return Ib(Sc);
};
Ud.a = function(a) {
  return a;
};
Ud.b = function(a, b) {
  return Jb(a, b);
};
Ud.m = function(a, b, c) {
  for (;;) {
    if (a = Jb(a, b), v(c)) {
      b = J(c), c = K(c);
    } else {
      return a;
    }
  }
};
Ud.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Ud.m(b, a, c);
};
Ud.A = 2;
function Vd(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.s ? a.s() : a.call(null);
  }
  c = Za(d);
  var e = ab(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Za(e), f = ab(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Za(f), g = ab(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Za(g), k = ab(g);
  if (4 === b) {
    return a.u ? a.u(c, d, e, f) : a.u ? a.u(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Za(k), l = ab(k);
  if (5 === b) {
    return a.F ? a.F(c, d, e, f, g) : a.F ? a.F(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Za(l), m = ab(l);
  if (6 === b) {
    return a.N ? a.N(c, d, e, f, g, k) : a.N ? a.N(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Za(m), n = ab(m);
  if (7 === b) {
    return a.la ? a.la(c, d, e, f, g, k, l) : a.la ? a.la(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = Za(n), p = ab(n);
  if (8 === b) {
    return a.ma ? a.ma(c, d, e, f, g, k, l, m) : a.ma ? a.ma(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Za(p), q = ab(p);
  if (9 === b) {
    return a.na ? a.na(c, d, e, f, g, k, l, m, n) : a.na ? a.na(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = Za(q), r = ab(q);
  if (10 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l, m, n, p) : a.aa ? a.aa(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = Za(r), t = ab(r);
  if (11 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, m, n, p, q) : a.ba ? a.ba(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var r = Za(t), w = ab(t);
  if (12 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, m, n, p, q, r) : a.ca ? a.ca(c, d, e, f, g, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  var t = Za(w), x = ab(w);
  if (13 === b) {
    return a.da ? a.da(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.da ? a.da(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  var w = Za(x), C = ab(x);
  if (14 === b) {
    return a.ea ? a.ea(c, d, e, f, g, k, l, m, n, p, q, r, t, w) : a.ea ? a.ea(c, d, e, f, g, k, l, m, n, p, q, r, t, w) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
  }
  var x = Za(C), E = ab(C);
  if (15 === b) {
    return a.fa ? a.fa(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : a.fa ? a.fa(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x);
  }
  var C = Za(E), H = ab(E);
  if (16 === b) {
    return a.ga ? a.ga(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : a.ga ? a.ga(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C);
  }
  var E = Za(H), N = ab(H);
  if (17 === b) {
    return a.ha ? a.ha(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) : a.ha ? a.ha(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E);
  }
  var H = Za(N), pa = ab(N);
  if (18 === b) {
    return a.ia ? a.ia(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) : a.ia ? a.ia(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H);
  }
  N = Za(pa);
  pa = ab(pa);
  if (19 === b) {
    return a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N) : a.ja ? a.ja(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N);
  }
  var y = Za(pa);
  ab(pa);
  if (20 === b) {
    return a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N, y) : a.ka ? a.ka(c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N, y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N, y);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Zc() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return R(arguments[0], arguments[1]);
    case 3:
      return Wd(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Xd(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Yd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Zd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(a.slice(5), 0));
  }
}
function R(a, b) {
  var c = a.A;
  if (a.B) {
    var d = Qd(b, c + 1);
    return d <= c ? Vd(a, d, b) : a.B(b);
  }
  return a.apply(a, od(b));
}
function Wd(a, b, c) {
  b = M(b, c);
  c = a.A;
  if (a.B) {
    var d = Qd(b, c + 1);
    return d <= c ? Vd(a, d, b) : a.B(b);
  }
  return a.apply(a, od(b));
}
function Xd(a, b, c, d) {
  b = M(b, M(c, d));
  c = a.A;
  return a.B ? (d = Qd(b, c + 1), d <= c ? Vd(a, d, b) : a.B(b)) : a.apply(a, od(b));
}
function Yd(a, b, c, d, e) {
  b = M(b, M(c, M(d, e)));
  c = a.A;
  return a.B ? (d = Qd(b, c + 1), d <= c ? Vd(a, d, b) : a.B(b)) : a.apply(a, od(b));
}
function Zd(a, b, c, d, e, f) {
  b = M(b, M(c, M(d, M(e, Rd(f)))));
  c = a.A;
  return a.B ? (d = Qd(b, c + 1), d <= c ? Vd(a, d, b) : a.B(b)) : a.apply(a, od(b));
}
var $d = function $d() {
  "undefined" === typeof za && (za = function(b, c) {
    this.oc = b;
    this.nc = c;
    this.i = 393216;
    this.C = 0;
  }, za.prototype.S = function(b, c) {
    return new za(this.oc, c);
  }, za.prototype.R = function() {
    return this.nc;
  }, za.prototype.wa = function() {
    return !1;
  }, za.prototype.next = function() {
    return Error("No such element");
  }, za.prototype.remove = function() {
    return Error("Unsupported operation");
  }, za.Bc = function() {
    return new T(null, 2, 5, V, [Nc(ae, new Ha(null, 1, [be, Dd(ce, Dd(Sc))], null)), de], null);
  }, za.Tb = !0, za.vb = "cljs.core/t_cljs$core10962", za.lc = function(b) {
    return Fb(b, "cljs.core/t_cljs$core10962");
  });
  return new za($d, ee);
};
function fe(a, b) {
  for (;;) {
    if (null == G(b)) {
      return !0;
    }
    var c;
    c = J(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (v(c)) {
      c = a;
      var d = K(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function ge(a, b) {
  for (;;) {
    if (G(b)) {
      var c;
      c = J(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (v(c)) {
        return c;
      }
      c = a;
      var d = K(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function he(a) {
  return function() {
    function b(b, c) {
      return Qa(a.b ? a.b(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Qa(a.a ? a.a(b) : a.call(null, b));
    }
    function d() {
      return Qa(a.s ? a.s() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
            g[f] = arguments[f + 2], ++f;
          }
          f = new I(g, 0);
        }
        return c.call(this, a, d, f);
      }
      function c(b, d, e) {
        return Qa(Xd(a, b, d, e));
      }
      b.A = 2;
      b.B = function(a) {
        var b = J(a);
        a = K(a);
        var d = J(a);
        a = qc(a);
        return c(b, d, a);
      };
      b.m = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var m = null;
          if (2 < arguments.length) {
            for (var m = 0, n = Array(arguments.length - 2);m < n.length;) {
              n[m] = arguments[m + 2], ++m;
            }
            m = new I(n, 0);
          }
          return f.m(a, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.A = 2;
    e.B = f.B;
    e.s = d;
    e.a = c;
    e.b = b;
    e.m = f.m;
    return e;
  }();
}
var ie = function ie() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 0:
      return ie.s();
    case 1:
      return ie.a(arguments[0]);
    case 2:
      return ie.b(arguments[0], arguments[1]);
    case 3:
      return ie.c(arguments[0], arguments[1], arguments[2]);
    default:
      return ie.m(arguments[0], arguments[1], arguments[2], new I(b.slice(3), 0));
  }
};
ie.s = function() {
  return td;
};
ie.a = function(a) {
  return a;
};
ie.b = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.c ? b.c(c, d, e) : b.call(null, c, d, e);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.b ? b.b(c, d) : b.call(null, c, d);
      return a.a ? a.a(e) : a.call(null, e);
    }
    function e(c) {
      c = b.a ? b.a(c) : b.call(null, c);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function f() {
      var c = b.s ? b.s() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new I(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Yd(b, c, e, f, g);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.A = 3;
      c.B = function(a) {
        var b = J(a);
        a = K(a);
        var c = J(a);
        a = K(a);
        var e = J(a);
        a = qc(a);
        return d(b, c, e, a);
      };
      c.m = d;
      return c;
    }(), g = function(a, b, g, p) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new I(r, 0);
          }
          return k.m(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.A = 3;
    g.B = k.B;
    g.s = f;
    g.a = e;
    g.b = d;
    g.c = c;
    g.m = k.m;
    return g;
  }();
};
ie.c = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.c ? c.c(d, e, f) : c.call(null, d, e, f);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.b ? c.b(d, e) : c.call(null, d, e);
      f = b.a ? b.a(f) : b.call(null, f);
      return a.a ? a.a(f) : a.call(null, f);
    }
    function f(d) {
      d = c.a ? c.a(d) : c.call(null, d);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function g() {
      var d;
      d = c.s ? c.s() : c.call(null);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new I(k, 0);
        }
        return e.call(this, a, b, c, g);
      }
      function e(d, f, g, k) {
        d = Yd(c, d, f, g, k);
        d = b.a ? b.a(d) : b.call(null, d);
        return a.a ? a.a(d) : a.call(null, d);
      }
      d.A = 3;
      d.B = function(a) {
        var b = J(a);
        a = K(a);
        var c = J(a);
        a = K(a);
        var d = J(a);
        a = qc(a);
        return e(b, c, d, a);
      };
      d.m = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, t = Array(arguments.length - 3);r < t.length;) {
              t[r] = arguments[r + 3], ++r;
            }
            r = new I(t, 0);
          }
          return l.m(a, b, c, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.A = 3;
    k.B = l.B;
    k.s = g;
    k.a = f;
    k.b = e;
    k.c = d;
    k.m = l.m;
    return k;
  }();
};
ie.m = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new I(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = R(J(a), b);
        for (var d = K(a);;) {
          if (d) {
            b = J(d).call(null, b), d = K(d);
          } else {
            return b;
          }
        }
      }
      b.A = 0;
      b.B = function(a) {
        a = G(a);
        return c(a);
      };
      b.m = c;
      return b;
    }();
  }(Cd(M(a, M(b, M(c, d)))));
};
ie.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), d = K(d);
  return ie.m(b, a, c, d);
};
ie.A = 3;
function je(a, b, c, d) {
  this.state = a;
  this.o = b;
  this.sc = c;
  this.Xb = d;
  this.C = 16386;
  this.i = 6455296;
}
h = je.prototype;
h.equiv = function(a) {
  return this.w(null, a);
};
h.w = function(a, b) {
  return this === b;
};
h.Zb = function() {
  return this.state;
};
h.R = function() {
  return this.o;
};
h.Rb = function(a, b, c) {
  a = G(this.Xb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.O(null, f), k = P(g, 0), g = P(g, 1);
      g.u ? g.u(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = G(a)) {
        ed(a) ? (d = Qb(a), a = Rb(a), k = d, e = O(d), d = k) : (d = J(a), k = P(d, 0), g = P(d, 1), g.u ? g.u(k, this, b, c) : g.call(null, k, this, b, c), a = K(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.L = function() {
  return this[ea] || (this[ea] = ++ga);
};
function ke() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return le(arguments[0]);
    default:
      return b = arguments[0], a = new I(a.slice(1), 0), c = null != a && (a.i & 64 || a.H) ? R(me, a) : a, a = F(c, La), c = F(c, ne), new je(b, a, c, null);
  }
}
function le(a) {
  return new je(a, null, null, null);
}
function oe(a, b) {
  if (a instanceof je) {
    var c = a.sc;
    if (null != c && !v(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(function() {
        var a = Dd(pe, qe);
        return re.a ? re.a(a) : re.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Xb && Hb(a, c, b);
    return b;
  }
  return Vb(a, b);
}
var se = function se() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return se.b(arguments[0], arguments[1]);
    case 3:
      return se.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return se.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return se.m(arguments[0], arguments[1], arguments[2], arguments[3], new I(b.slice(4), 0));
  }
};
se.b = function(a, b) {
  var c;
  a instanceof je ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = oe(a, c)) : c = Wb.b(a, b);
  return c;
};
se.c = function(a, b, c) {
  if (a instanceof je) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = oe(a, b);
  } else {
    a = Wb.c(a, b, c);
  }
  return a;
};
se.u = function(a, b, c, d) {
  if (a instanceof je) {
    var e = a.state;
    b = b.c ? b.c(e, c, d) : b.call(null, e, c, d);
    a = oe(a, b);
  } else {
    a = Wb.u(a, b, c, d);
  }
  return a;
};
se.m = function(a, b, c, d, e) {
  return a instanceof je ? oe(a, Yd(b, a.state, c, d, e)) : Wb.F(a, b, c, d, e);
};
se.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return se.m(b, a, c, d, e);
};
se.A = 4;
var te = function te() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return te.a(arguments[0]);
    case 2:
      return te.b(arguments[0], arguments[1]);
    case 3:
      return te.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return te.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return te.m(arguments[0], arguments[1], arguments[2], arguments[3], new I(b.slice(4), 0));
  }
};
te.a = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.a ? a.a(d) : a.call(null, d);
        return b.b ? b.b(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      function e() {
        return b.s ? b.s() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new I(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Wd(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.A = 2;
        c.B = function(a) {
          var b = J(a);
          a = K(a);
          var c = J(a);
          a = qc(a);
          return d(b, c, a);
        };
        c.m = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new I(p, 0);
            }
            return g.m(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.A = 2;
      f.B = g.B;
      f.s = e;
      f.a = d;
      f.b = c;
      f.m = g.m;
      return f;
    }();
  };
};
te.b = function(a, b) {
  return new Id(null, function() {
    var c = G(b);
    if (c) {
      if (ed(c)) {
        for (var d = Qb(c), e = O(d), f = Md(e), g = 0;;) {
          if (g < e) {
            Pd(f, function() {
              var b = D.b(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return Od(f.W(), te.b(a, Rb(c)));
      }
      return M(function() {
        var b = J(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), te.b(a, qc(c)));
    }
    return null;
  }, null, null);
};
te.c = function(a, b, c) {
  return new Id(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = M, g;
      g = J(d);
      var k = J(e);
      g = a.b ? a.b(g, k) : a.call(null, g, k);
      d = f(g, te.c(a, qc(d), qc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
te.u = function(a, b, c, d) {
  return new Id(null, function() {
    var e = G(b), f = G(c), g = G(d);
    if (e && f && g) {
      var k = M, l;
      l = J(e);
      var m = J(f), n = J(g);
      l = a.c ? a.c(l, m, n) : a.call(null, l, m, n);
      e = k(l, te.u(a, qc(e), qc(f), qc(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
te.m = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Id(null, function() {
      var b = te.b(G, a);
      return fe(td, b) ? M(te.b(J, b), k(te.b(qc, b))) : null;
    }, null, null);
  };
  return te.b(function() {
    return function(b) {
      return R(a, b);
    };
  }(f), f(Rc.m(e, d, Mc([c, b], 0))));
};
te.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return te.m(b, a, c, d, e);
};
te.A = 4;
function ue(a, b) {
  return new Id(null, function() {
    var c = G(b);
    if (c) {
      if (ed(c)) {
        for (var d = Qb(c), e = O(d), f = Md(e), g = 0;;) {
          if (g < e) {
            var k;
            k = D.b(d, g);
            k = a.a ? a.a(k) : a.call(null, k);
            v(k) && (k = D.b(d, g), f.add(k));
            g += 1;
          } else {
            break;
          }
        }
        return Od(f.W(), ue(a, Rb(c)));
      }
      d = J(c);
      c = qc(c);
      return v(a.a ? a.a(d) : a.call(null, d)) ? M(d, ue(a, c)) : ue(a, c);
    }
    return null;
  }, null, null);
}
function ve(a, b) {
  return ue(he(a), b);
}
function we(a, b) {
  return null != a ? null != a && (a.C & 4 || a.uc) ? Nc(Td(pd(Jb, Ib(a), b)), $c(a)) : pd(Xa, a, b) : pd(Rc, rc, b);
}
var xe = function xe() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return xe.b(arguments[0], arguments[1]);
    case 3:
      return xe.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return xe.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return xe.m(arguments[0], arguments[1], arguments[2], arguments[3], new I(b.slice(4), 0));
  }
};
xe.b = function(a, b) {
  return Td(pd(function(b, d) {
    return Ud.b(b, a.a ? a.a(d) : a.call(null, d));
  }, Ib(Sc), b));
};
xe.c = function(a, b, c) {
  return we(Sc, te.c(a, b, c));
};
xe.u = function(a, b, c, d) {
  return we(Sc, te.u(a, b, c, d));
};
xe.m = function(a, b, c, d, e) {
  return we(Sc, Zd(te, a, b, c, d, Mc([e], 0)));
};
xe.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return xe.m(b, a, c, d, e);
};
xe.A = 4;
var ye = function ye(b, c, d) {
  var e = P(c, 0);
  c = zd(c);
  return v(c) ? Vc.c(b, e, ye(F(b, e), c, d)) : Vc.c(b, e, d);
}, ze = function ze() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return ze.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ze.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ze.F(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return ze.N(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return ze.m(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new I(b.slice(6), 0));
  }
};
ze.c = function(a, b, c) {
  var d = P(b, 0);
  b = zd(b);
  return v(b) ? Vc.c(a, d, ze.c(F(a, d), b, c)) : Vc.c(a, d, function() {
    var b = F(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
ze.u = function(a, b, c, d) {
  var e = P(b, 0);
  b = zd(b);
  return v(b) ? Vc.c(a, e, ze.u(F(a, e), b, c, d)) : Vc.c(a, e, function() {
    var b = F(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
ze.F = function(a, b, c, d, e) {
  var f = P(b, 0);
  b = zd(b);
  return v(b) ? Vc.c(a, f, ze.F(F(a, f), b, c, d, e)) : Vc.c(a, f, function() {
    var b = F(a, f);
    return c.c ? c.c(b, d, e) : c.call(null, b, d, e);
  }());
};
ze.N = function(a, b, c, d, e, f) {
  var g = P(b, 0);
  b = zd(b);
  return v(b) ? Vc.c(a, g, ze.N(F(a, g), b, c, d, e, f)) : Vc.c(a, g, function() {
    var b = F(a, g);
    return c.u ? c.u(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
ze.m = function(a, b, c, d, e, f, g) {
  var k = P(b, 0);
  b = zd(b);
  return v(b) ? Vc.c(a, k, Zd(ze, F(a, k), b, c, d, Mc([e, f, g], 0))) : Vc.c(a, k, Zd(c, F(a, k), d, e, f, Mc([g], 0)));
};
ze.B = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), f = K(e), e = J(f), g = K(f), f = J(g), g = K(g);
  return ze.m(b, a, c, d, e, f, g);
};
ze.A = 6;
function Ae(a, b) {
  var c = Be;
  return Vc.c(a, c, function() {
    var d = F(a, c);
    return b.a ? b.a(d) : b.call(null, d);
  }());
}
function Ce(a, b) {
  this.I = a;
  this.f = b;
}
function De(a) {
  return new Ce(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ee(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Fe(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = De(a);
    d.f[0] = c;
    c = d;
    b -= 5;
  }
}
var Ge = function Ge(b, c, d, e) {
  var f = new Ce(d.I, Ta(d.f)), g = b.j - 1 >>> c & 31;
  5 === c ? f.f[g] = e : (d = d.f[g], b = null != d ? Ge(b, c - 5, d, e) : Fe(null, c - 5, e), f.f[g] = b);
  return f;
};
function He(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function Ie(a, b) {
  if (b >= Ee(a)) {
    return a.ra;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.f[b >>> d & 31], d = e
    } else {
      return c.f;
    }
  }
}
function Je(a, b) {
  return 0 <= b && b < a.j ? Ie(a, b) : He(b, a.j);
}
var Ke = function Ke(b, c, d, e, f) {
  var g = new Ce(d.I, Ta(d.f));
  if (0 === c) {
    g.f[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Ke(b, c - 5, d.f[k], e, f);
    g.f[k] = b;
  }
  return g;
};
function Le(a, b, c, d, e, f) {
  this.l = a;
  this.qb = b;
  this.f = c;
  this.Ia = d;
  this.start = e;
  this.end = f;
}
Le.prototype.wa = function() {
  return this.l < this.end;
};
Le.prototype.next = function() {
  32 === this.l - this.qb && (this.f = Ie(this.Ia, this.l), this.qb += 32);
  var a = this.f[this.l & 31];
  this.l += 1;
  return a;
};
function T(a, b, c, d, e, f) {
  this.o = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.ra = e;
  this.v = f;
  this.i = 167668511;
  this.C = 8196;
}
h = T.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  return "number" === typeof b ? D.c(this, b, c) : c;
};
h.O = function(a, b) {
  return Je(this, b)[b & 31];
};
h.ya = function(a, b, c) {
  return 0 <= b && b < this.j ? Ie(this, b)[b & 31] : c;
};
h.Ib = function(a, b, c) {
  if (0 <= b && b < this.j) {
    return Ee(this) <= b ? (a = Ta(this.ra), a[b & 31] = c, new T(this.o, this.j, this.shift, this.root, a, null)) : new T(this.o, this.j, this.shift, Ke(this, this.shift, this.root, b, c), this.ra, null);
  }
  if (b === this.j) {
    return Xa(this, c);
  }
  throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.j), B("]")].join(""));
};
h.Ea = function() {
  var a = this.j;
  return new Le(0, 0, 0 < O(this) ? Ie(this, 0) : null, this, 0, a);
};
h.R = function() {
  return this.o;
};
h.X = function() {
  return this.j;
};
h.Gb = function() {
  return D.b(this, 0);
};
h.Hb = function() {
  return D.b(this, 1);
};
h.ub = function() {
  return 0 < this.j ? new Jc(this, this.j - 1, null) : null;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  if (b instanceof T) {
    if (this.j === O(b)) {
      for (var c = Yb(this), d = Yb(b);;) {
        if (v(c.wa())) {
          var e = c.next(), f = d.next();
          if (!sc.b(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Kc(this, b);
  }
};
h.Wa = function() {
  return new Me(this.j, this.shift, Ne.a ? Ne.a(this.root) : Ne.call(null, this.root), Oe.a ? Oe.a(this.ra) : Oe.call(null, this.ra));
};
h.Y = function() {
  return Nc(Sc, this.o);
};
h.oa = function(a, b) {
  return Bc(this, b);
};
h.pa = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.j) {
      var e = Ie(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.b ? b.b(d, g) : b.call(null, d, g), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.bb = function(a, b, c) {
  if ("number" === typeof b) {
    return pb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.V = function() {
  if (0 === this.j) {
    return null;
  }
  if (32 >= this.j) {
    return new I(this.ra, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.f[0];
      } else {
        a = a.f;
        break a;
      }
    }
  }
  return Pe ? Pe(this, a, 0, 0) : Qe.call(null, this, a, 0, 0);
};
h.S = function(a, b) {
  return new T(b, this.j, this.shift, this.root, this.ra, this.v);
};
h.T = function(a, b) {
  if (32 > this.j - Ee(this)) {
    for (var c = this.ra.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ra[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new T(this.o, this.j + 1, this.shift, this.root, d, null);
  }
  c = (d = this.j >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = De(null), d.f[0] = this.root, e = Fe(null, this.shift, new Ce(null, this.ra)), d.f[1] = e) : d = Ge(this, this.shift, this.root, new Ce(null, this.ra));
  return new T(this.o, this.j + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.ya(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.O(null, c);
  };
  a.c = function(a, c, d) {
    return this.ya(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return this.O(null, a);
};
h.b = function(a, b) {
  return this.ya(null, a, b);
};
var V = new Ce(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Sc = new T(null, 0, 5, V, [], xc);
function Re(a) {
  var b = a.length;
  if (32 > b) {
    return new T(null, b, 5, V, a, null);
  }
  for (var c = 32, d = (new T(null, 32, 5, V, a.slice(0, 32), null)).Wa(null);;) {
    if (c < b) {
      var e = c + 1, d = Ud.b(d, a[c]), c = e
    } else {
      return Kb(d);
    }
  }
}
T.prototype[Sa] = function() {
  return uc(this);
};
function Se(a) {
  return Pa(a) ? Re(a) : Kb(pd(Jb, Ib(Sc), a));
}
var Te = function Te() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  return Te.m(0 < b.length ? new I(b.slice(0), 0) : null);
};
Te.m = function(a) {
  return a instanceof I && 0 === a.l ? Re(a.f) : Se(a);
};
Te.A = 0;
Te.B = function(a) {
  return Te.m(G(a));
};
function Ue(a, b, c, d, e, f) {
  this.za = a;
  this.node = b;
  this.l = c;
  this.$ = d;
  this.o = e;
  this.v = f;
  this.i = 32375020;
  this.C = 1536;
}
h = Ue.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  if (this.$ + 1 < this.node.length) {
    var a;
    a = this.za;
    var b = this.node, c = this.l, d = this.$ + 1;
    a = Pe ? Pe(a, b, c, d) : Qe.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Sb(this);
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(Sc, this.o);
};
h.oa = function(a, b) {
  var c;
  c = this.za;
  var d = this.l + this.$, e = O(this.za);
  c = Ve ? Ve(c, d, e) : We.call(null, c, d, e);
  return Bc(c, b);
};
h.pa = function(a, b, c) {
  a = this.za;
  var d = this.l + this.$, e = O(this.za);
  a = Ve ? Ve(a, d, e) : We.call(null, a, d, e);
  return Cc(a, b, c);
};
h.Z = function() {
  return this.node[this.$];
};
h.va = function() {
  if (this.$ + 1 < this.node.length) {
    var a;
    a = this.za;
    var b = this.node, c = this.l, d = this.$ + 1;
    a = Pe ? Pe(a, b, c, d) : Qe.call(null, a, b, c, d);
    return null == a ? rc : a;
  }
  return Rb(this);
};
h.V = function() {
  return this;
};
h.Cb = function() {
  var a = this.node;
  return new Ld(a, this.$, a.length);
};
h.Db = function() {
  var a = this.l + this.node.length;
  if (a < Va(this.za)) {
    var b = this.za, c = Ie(this.za, a);
    return Pe ? Pe(b, c, a, 0) : Qe.call(null, b, c, a, 0);
  }
  return rc;
};
h.S = function(a, b) {
  return Ye ? Ye(this.za, this.node, this.l, this.$, b) : Qe.call(null, this.za, this.node, this.l, this.$, b);
};
h.T = function(a, b) {
  return M(b, this);
};
h.Bb = function() {
  var a = this.l + this.node.length;
  if (a < Va(this.za)) {
    var b = this.za, c = Ie(this.za, a);
    return Pe ? Pe(b, c, a, 0) : Qe.call(null, b, c, a, 0);
  }
  return null;
};
Ue.prototype[Sa] = function() {
  return uc(this);
};
function Qe() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 3:
      return a = arguments[0], b = arguments[1], c = arguments[2], new Ue(a, Je(a, b), b, c, null, null);
    case 4:
      return Pe(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ye(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Pe(a, b, c, d) {
  return new Ue(a, b, c, d, null, null);
}
function Ye(a, b, c, d, e) {
  return new Ue(a, b, c, d, e, null);
}
function Ze(a, b, c, d, e) {
  this.o = a;
  this.Ia = b;
  this.start = c;
  this.end = d;
  this.v = e;
  this.i = 167666463;
  this.C = 8192;
}
h = Ze.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  return "number" === typeof b ? D.c(this, b, c) : c;
};
h.O = function(a, b) {
  return 0 > b || this.end <= this.start + b ? He(b, this.end - this.start) : D.b(this.Ia, this.start + b);
};
h.ya = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : D.c(this.Ia, this.start + b, c);
};
h.Ib = function(a, b, c) {
  var d = this.start + b;
  a = this.o;
  c = Vc.c(this.Ia, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return $e.F ? $e.F(a, c, b, d, null) : $e.call(null, a, c, b, d, null);
};
h.R = function() {
  return this.o;
};
h.X = function() {
  return this.end - this.start;
};
h.ub = function() {
  return this.start !== this.end ? new Jc(this, this.end - this.start - 1, null) : null;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(Sc, this.o);
};
h.oa = function(a, b) {
  return Bc(this, b);
};
h.pa = function(a, b, c) {
  return Cc(this, b, c);
};
h.bb = function(a, b, c) {
  if ("number" === typeof b) {
    return pb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.V = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : M(D.b(a.Ia, e), new Id(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.S = function(a, b) {
  return $e.F ? $e.F(b, this.Ia, this.start, this.end, this.v) : $e.call(null, b, this.Ia, this.start, this.end, this.v);
};
h.T = function(a, b) {
  var c = this.o, d = pb(this.Ia, this.end, b), e = this.start, f = this.end + 1;
  return $e.F ? $e.F(c, d, e, f, null) : $e.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(null, c);
      case 3:
        return this.ya(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.O(null, c);
  };
  a.c = function(a, c, d) {
    return this.ya(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return this.O(null, a);
};
h.b = function(a, b) {
  return this.ya(null, a, b);
};
Ze.prototype[Sa] = function() {
  return uc(this);
};
function $e(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ze) {
      c = b.start + c, d = b.start + d, b = b.Ia;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Ze(a, b, c, d, e);
    }
  }
}
function We() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 2:
      return a = arguments[0], Ve(a, arguments[1], O(a));
    case 3:
      return Ve(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Ve(a, b, c) {
  return $e(null, a, b, c, null);
}
function af(a, b) {
  return a === b.I ? b : new Ce(a, Ta(b.f));
}
function Ne(a) {
  return new Ce({}, Ta(a.f));
}
function Oe(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  gd(a, 0, b, 0, a.length);
  return b;
}
var bf = function bf(b, c, d, e) {
  d = af(b.root.I, d);
  var f = b.j - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.f[f];
    b = null != g ? bf(b, c - 5, g, e) : Fe(b.root.I, c - 5, e);
  }
  d.f[f] = b;
  return d;
};
function Me(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.ra = d;
  this.C = 88;
  this.i = 275;
}
h = Me.prototype;
h.Ra = function(a, b) {
  if (this.root.I) {
    if (32 > this.j - Ee(this)) {
      this.ra[this.j & 31] = b;
    } else {
      var c = new Ce(this.root.I, this.ra), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ra = d;
      if (this.j >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Fe(this.root.I, this.shift, c);
        this.root = new Ce(this.root.I, d);
        this.shift = e;
      } else {
        this.root = bf(this, this.shift, this.root, c);
      }
    }
    this.j += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Xa = function() {
  if (this.root.I) {
    this.root.I = null;
    var a = this.j - Ee(this), b = Array(a);
    gd(this.ra, 0, b, 0, a);
    return new T(null, this.j, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.hb = function(a, b, c) {
  if ("number" === typeof b) {
    return Mb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.Qb = function(a, b, c) {
  var d = this;
  if (d.root.I) {
    if (0 <= b && b < d.j) {
      return Ee(this) <= b ? d.ra[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = af(d.root.I, k);
          if (0 === a) {
            l.f[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.f[m]);
            l.f[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.j) {
      return Jb(this, c);
    }
    throw Error([B("Index "), B(b), B(" out of bounds for TransientVector of length"), B(d.j)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.X = function() {
  if (this.root.I) {
    return this.j;
  }
  throw Error("count after persistent!");
};
h.O = function(a, b) {
  if (this.root.I) {
    return Je(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ya = function(a, b, c) {
  return 0 <= b && b < this.j ? D.b(this, b) : c;
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  return "number" === typeof b ? D.c(this, b, c) : c;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.P(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return this.P(null, a);
};
h.b = function(a, b) {
  return this.K(null, a, b);
};
function cf() {
  this.i = 2097152;
  this.C = 0;
}
cf.prototype.equiv = function(a) {
  return this.w(null, a);
};
cf.prototype.w = function() {
  return !1;
};
var df = new cf;
function ef(a, b) {
  return id(cd(b) ? O(a) === O(b) ? fe(td, te.b(function(a) {
    return sc.b(nc(b, J(a), df), J(K(a)));
  }, a)) : null : null);
}
function ff(a) {
  this.D = a;
}
ff.prototype.next = function() {
  if (null != this.D) {
    var a = J(this.D), b = P(a, 0), a = P(a, 1);
    this.D = K(this.D);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function gf(a) {
  return new ff(G(a));
}
function hf(a) {
  this.D = a;
}
hf.prototype.next = function() {
  if (null != this.D) {
    var a = J(this.D);
    this.D = K(this.D);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function jf(a, b) {
  var c;
  if (b instanceof Q) {
    a: {
      c = a.length;
      for (var d = b.Fa, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        if (a[e] instanceof Q && d === a[e].Fa) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (ca(b) || "number" === typeof b) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof mc) {
        a: {
          for (c = a.length, d = b.Ha, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            if (a[e] instanceof mc && d === a[e].Ha) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (sc.b(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function kf(a, b, c) {
  this.f = a;
  this.l = b;
  this.ua = c;
  this.i = 32374990;
  this.C = 0;
}
h = kf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.ua;
};
h.sa = function() {
  return this.l < this.f.length - 2 ? new kf(this.f, this.l + 2, this.ua) : null;
};
h.X = function() {
  return (this.f.length - this.l) / 2;
};
h.L = function() {
  return wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.ua);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return new T(null, 2, 5, V, [this.f[this.l], this.f[this.l + 1]], null);
};
h.va = function() {
  return this.l < this.f.length - 2 ? new kf(this.f, this.l + 2, this.ua) : rc;
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new kf(this.f, this.l, b);
};
h.T = function(a, b) {
  return M(b, this);
};
kf.prototype[Sa] = function() {
  return uc(this);
};
function lf(a, b, c) {
  this.f = a;
  this.l = b;
  this.j = c;
}
lf.prototype.wa = function() {
  return this.l < this.j;
};
lf.prototype.next = function() {
  var a = new T(null, 2, 5, V, [this.f[this.l], this.f[this.l + 1]], null);
  this.l += 2;
  return a;
};
function Ha(a, b, c, d) {
  this.o = a;
  this.j = b;
  this.f = c;
  this.v = d;
  this.i = 16647951;
  this.C = 8196;
}
h = Ha.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.keys = function() {
  return uc(mf.a ? mf.a(this) : mf.call(null, this));
};
h.entries = function() {
  return gf(G(this));
};
h.values = function() {
  return uc(nf.a ? nf.a(this) : nf.call(null, this));
};
h.has = function(a) {
  return jd(this, a);
};
h.get = function(a, b) {
  return this.K(null, a, b);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), g = P(f, 0), f = P(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        ed(b) ? (c = Qb(b), b = Rb(b), g = c, d = O(c), c = g) : (c = J(b), g = P(c, 0), f = P(c, 1), a.b ? a.b(f, g) : a.call(null, f, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  a = jf(this.f, b);
  return -1 === a ? c : this.f[a + 1];
};
h.Ea = function() {
  return new lf(this.f, 0, 2 * this.j);
};
h.R = function() {
  return this.o;
};
h.X = function() {
  return this.j;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = yc(this);
};
h.w = function(a, b) {
  if (null != b && (b.i & 1024 || b.ac)) {
    var c = this.f.length;
    if (this.j === b.X(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.K(null, this.f[d], hd);
          if (e !== hd) {
            if (sc.b(this.f[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return ef(this, b);
  }
};
h.Wa = function() {
  return new of({}, this.f.length, Ta(this.f));
};
h.Y = function() {
  return tb(ee, this.o);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Fb = function(a, b) {
  if (0 <= jf(this.f, b)) {
    var c = this.f.length, d = c - 2;
    if (0 === d) {
      return Wa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new Ha(this.o, this.j - 1, d, null);
      }
      sc.b(b, this.f[e]) || (d[f] = this.f[e], d[f + 1] = this.f[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.bb = function(a, b, c) {
  a = jf(this.f, b);
  if (-1 === a) {
    if (this.j < pf) {
      a = this.f;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Ha(this.o, this.j + 1, e, null);
    }
    return tb(fb(we(qf, this), b, c), this.o);
  }
  if (c === this.f[a + 1]) {
    return this;
  }
  b = Ta(this.f);
  b[a + 1] = c;
  return new Ha(this.o, this.j, b, null);
};
h.Ab = function(a, b) {
  return -1 !== jf(this.f, b);
};
h.V = function() {
  var a = this.f;
  return 0 <= a.length - 2 ? new kf(a, 0, null) : null;
};
h.S = function(a, b) {
  return new Ha(b, this.j, this.f, this.v);
};
h.T = function(a, b) {
  if (dd(b)) {
    return fb(this, D.b(b, 0), D.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (dd(e)) {
      c = fb(c, D.b(e, 0), D.b(e, 1)), d = K(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.P(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return this.P(null, a);
};
h.b = function(a, b) {
  return this.K(null, a, b);
};
var ee = new Ha(null, 0, [], zc), pf = 8;
Ha.prototype[Sa] = function() {
  return uc(this);
};
function of(a, b, c) {
  this.Ya = a;
  this.Ta = b;
  this.f = c;
  this.i = 258;
  this.C = 56;
}
h = of.prototype;
h.X = function() {
  if (v(this.Ya)) {
    return xd(this.Ta);
  }
  throw Error("count after persistent!");
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  if (v(this.Ya)) {
    return a = jf(this.f, b), -1 === a ? c : this.f[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Ra = function(a, b) {
  if (v(this.Ya)) {
    if (null != b ? b.i & 2048 || b.bc || (b.i ? 0 : z(ib, b)) : z(ib, b)) {
      return Lb(this, rf.a ? rf.a(b) : rf.call(null, b), sf.a ? sf.a(b) : sf.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (v(e)) {
        c = K(c), d = Lb(d, rf.a ? rf.a(e) : rf.call(null, e), sf.a ? sf.a(e) : sf.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Xa = function() {
  if (v(this.Ya)) {
    return this.Ya = !1, new Ha(null, xd(this.Ta), this.f, null);
  }
  throw Error("persistent! called twice");
};
h.hb = function(a, b, c) {
  if (v(this.Ya)) {
    a = jf(this.f, b);
    if (-1 === a) {
      if (this.Ta + 2 <= 2 * pf) {
        return this.Ta += 2, this.f.push(b), this.f.push(c), this;
      }
      a = tf.b ? tf.b(this.Ta, this.f) : tf.call(null, this.Ta, this.f);
      return Lb(a, b, c);
    }
    c !== this.f[a + 1] && (this.f[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function tf(a, b) {
  for (var c = Ib(qf), d = 0;;) {
    if (d < a) {
      c = Lb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function uf() {
  this.Ja = !1;
}
function vf(a, b) {
  return a === b ? !0 : a === b || a instanceof Q && b instanceof Q && a.Fa === b.Fa ? !0 : sc.b(a, b);
}
function wf(a, b, c) {
  a = Ta(a);
  a[b] = c;
  return a;
}
function xf(a, b) {
  var c = Array(a.length - 2);
  gd(a, 0, c, 0, 2 * b);
  gd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function yf(a, b, c, d) {
  a = a.Sa(b);
  a.f[c] = d;
  return a;
}
function zf(a, b, c, d) {
  this.f = a;
  this.l = b;
  this.nb = c;
  this.Da = d;
}
zf.prototype.advance = function() {
  for (var a = this.f.length;;) {
    if (this.l < a) {
      var b = this.f[this.l], c = this.f[this.l + 1];
      null != b ? b = this.nb = new T(null, 2, 5, V, [b, c], null) : null != c ? (b = Yb(c), b = b.wa() ? this.Da = b : !1) : b = !1;
      this.l += 2;
      if (b) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
zf.prototype.wa = function() {
  var a = null != this.nb;
  return a ? a : (a = null != this.Da) ? a : this.advance();
};
zf.prototype.next = function() {
  if (null != this.nb) {
    var a = this.nb;
    this.nb = null;
    return a;
  }
  if (null != this.Da) {
    return a = this.Da.next(), this.Da.wa() || (this.Da = null), a;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
zf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Af(a, b, c) {
  this.I = a;
  this.J = b;
  this.f = c;
}
h = Af.prototype;
h.Sa = function(a) {
  if (a === this.I) {
    return this;
  }
  var b = yd(this.J), c = Array(0 > b ? 4 : 2 * (b + 1));
  gd(this.f, 0, c, 0, 2 * b);
  return new Af(a, this.J, c);
};
h.kb = function() {
  return Bf ? Bf(this.f) : Cf.call(null, this.f);
};
h.Oa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.J & e)) {
    return d;
  }
  var f = yd(this.J & e - 1), e = this.f[2 * f], f = this.f[2 * f + 1];
  return null == e ? f.Oa(a + 5, b, c, d) : vf(c, e) ? f : d;
};
h.Ba = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = yd(this.J & g - 1);
  if (0 === (this.J & g)) {
    var l = yd(this.J);
    if (2 * l < this.f.length) {
      a = this.Sa(a);
      b = a.f;
      f.Ja = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.J |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Df.Ba(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.J >>> d & 1) && (k[d] = null != this.f[e] ? Df.Ba(a, b + 5, jc(this.f[e]), this.f[e], this.f[e + 1], f) : this.f[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ef(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    gd(this.f, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    gd(this.f, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.Ja = !0;
    a = this.Sa(a);
    a.f = b;
    a.J |= g;
    return a;
  }
  l = this.f[2 * k];
  g = this.f[2 * k + 1];
  if (null == l) {
    return l = g.Ba(a, b + 5, c, d, e, f), l === g ? this : yf(this, a, 2 * k + 1, l);
  }
  if (vf(d, l)) {
    return e === g ? this : yf(this, a, 2 * k + 1, e);
  }
  f.Ja = !0;
  f = b + 5;
  d = Ff ? Ff(a, f, l, g, c, d, e) : Gf.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Sa(a);
  a.f[e] = null;
  a.f[k] = d;
  return a;
};
h.Aa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = yd(this.J & f - 1);
  if (0 === (this.J & f)) {
    var k = yd(this.J);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Df.Aa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.J >>> c & 1) && (g[c] = null != this.f[d] ? Df.Aa(a + 5, jc(this.f[d]), this.f[d], this.f[d + 1], e) : this.f[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ef(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    gd(this.f, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    gd(this.f, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.Ja = !0;
    return new Af(null, this.J | f, a);
  }
  var l = this.f[2 * g], f = this.f[2 * g + 1];
  if (null == l) {
    return k = f.Aa(a + 5, b, c, d, e), k === f ? this : new Af(null, this.J, wf(this.f, 2 * g + 1, k));
  }
  if (vf(c, l)) {
    return d === f ? this : new Af(null, this.J, wf(this.f, 2 * g + 1, d));
  }
  e.Ja = !0;
  e = this.J;
  k = this.f;
  a += 5;
  a = Hf ? Hf(a, l, f, b, c, d) : Gf.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ta(k);
  d[c] = null;
  d[g] = a;
  return new Af(null, e, d);
};
h.lb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.J & d)) {
    return this;
  }
  var e = yd(this.J & d - 1), f = this.f[2 * e], g = this.f[2 * e + 1];
  return null == f ? (a = g.lb(a + 5, b, c), a === g ? this : null != a ? new Af(null, this.J, wf(this.f, 2 * e + 1, a)) : this.J === d ? null : new Af(null, this.J ^ d, xf(this.f, e))) : vf(c, f) ? new Af(null, this.J ^ d, xf(this.f, e)) : this;
};
h.Ea = function() {
  return new zf(this.f, 0, null, null);
};
var Df = new Af(null, 0, []);
function If(a, b, c) {
  this.f = a;
  this.l = b;
  this.Da = c;
}
If.prototype.wa = function() {
  for (var a = this.f.length;;) {
    if (null != this.Da && this.Da.wa()) {
      return !0;
    }
    if (this.l < a) {
      var b = this.f[this.l];
      this.l += 1;
      null != b && (this.Da = Yb(b));
    } else {
      return !1;
    }
  }
};
If.prototype.next = function() {
  if (this.wa()) {
    return this.Da.next();
  }
  throw Error("No such element");
};
If.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Ef(a, b, c) {
  this.I = a;
  this.j = b;
  this.f = c;
}
h = Ef.prototype;
h.Sa = function(a) {
  return a === this.I ? this : new Ef(a, this.j, Ta(this.f));
};
h.kb = function() {
  return Jf ? Jf(this.f) : Kf.call(null, this.f);
};
h.Oa = function(a, b, c, d) {
  var e = this.f[b >>> a & 31];
  return null != e ? e.Oa(a + 5, b, c, d) : d;
};
h.Ba = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.f[g];
  if (null == k) {
    return a = yf(this, a, g, Df.Ba(a, b + 5, c, d, e, f)), a.j += 1, a;
  }
  b = k.Ba(a, b + 5, c, d, e, f);
  return b === k ? this : yf(this, a, g, b);
};
h.Aa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.f[f];
  if (null == g) {
    return new Ef(null, this.j + 1, wf(this.f, f, Df.Aa(a + 5, b, c, d, e)));
  }
  a = g.Aa(a + 5, b, c, d, e);
  return a === g ? this : new Ef(null, this.j, wf(this.f, f, a));
};
h.lb = function(a, b, c) {
  var d = b >>> a & 31, e = this.f[d];
  if (null != e) {
    a = e.lb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.j) {
          a: {
            e = this.f;
            a = e.length;
            b = Array(2 * (this.j - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Af(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Ef(null, this.j - 1, wf(this.f, d, a));
        }
      } else {
        d = new Ef(null, this.j, wf(this.f, d, a));
      }
    }
    return d;
  }
  return this;
};
h.Ea = function() {
  return new If(this.f, 0, null);
};
function Lf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (vf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Mf(a, b, c, d) {
  this.I = a;
  this.Ka = b;
  this.j = c;
  this.f = d;
}
h = Mf.prototype;
h.Sa = function(a) {
  if (a === this.I) {
    return this;
  }
  var b = Array(2 * (this.j + 1));
  gd(this.f, 0, b, 0, 2 * this.j);
  return new Mf(a, this.Ka, this.j, b);
};
h.kb = function() {
  return Bf ? Bf(this.f) : Cf.call(null, this.f);
};
h.Oa = function(a, b, c, d) {
  a = Lf(this.f, this.j, c);
  return 0 > a ? d : vf(c, this.f[a]) ? this.f[a + 1] : d;
};
h.Ba = function(a, b, c, d, e, f) {
  if (c === this.Ka) {
    b = Lf(this.f, this.j, d);
    if (-1 === b) {
      if (this.f.length > 2 * this.j) {
        return b = 2 * this.j, c = 2 * this.j + 1, a = this.Sa(a), a.f[b] = d, a.f[c] = e, f.Ja = !0, a.j += 1, a;
      }
      c = this.f.length;
      b = Array(c + 2);
      gd(this.f, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.Ja = !0;
      d = this.j + 1;
      a === this.I ? (this.f = b, this.j = d, a = this) : a = new Mf(this.I, this.Ka, d, b);
      return a;
    }
    return this.f[b + 1] === e ? this : yf(this, a, b + 1, e);
  }
  return (new Af(a, 1 << (this.Ka >>> b & 31), [null, this, null, null])).Ba(a, b, c, d, e, f);
};
h.Aa = function(a, b, c, d, e) {
  return b === this.Ka ? (a = Lf(this.f, this.j, c), -1 === a ? (a = 2 * this.j, b = Array(a + 2), gd(this.f, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Ja = !0, new Mf(null, this.Ka, this.j + 1, b)) : sc.b(this.f[a], d) ? this : new Mf(null, this.Ka, this.j, wf(this.f, a + 1, d))) : (new Af(null, 1 << (this.Ka >>> a & 31), [null, this])).Aa(a, b, c, d, e);
};
h.lb = function(a, b, c) {
  a = Lf(this.f, this.j, c);
  return -1 === a ? this : 1 === this.j ? null : new Mf(null, this.Ka, this.j - 1, xf(this.f, xd(a)));
};
h.Ea = function() {
  return new zf(this.f, 0, null, null);
};
function Gf() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 6:
      return Hf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ff(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Hf(a, b, c, d, e, f) {
  var g = jc(b);
  if (g === d) {
    return new Mf(null, g, 2, [b, c, e, f]);
  }
  var k = new uf;
  return Df.Aa(a, g, b, c, k).Aa(a, d, e, f, k);
}
function Ff(a, b, c, d, e, f, g) {
  var k = jc(c);
  if (k === e) {
    return new Mf(null, k, 2, [c, d, f, g]);
  }
  var l = new uf;
  return Df.Ba(a, b, k, c, d, l).Ba(a, b, e, f, g, l);
}
function Nf(a, b, c, d, e) {
  this.o = a;
  this.Pa = b;
  this.l = c;
  this.D = d;
  this.v = e;
  this.i = 32374860;
  this.C = 0;
}
h = Nf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.o);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return null == this.D ? new T(null, 2, 5, V, [this.Pa[this.l], this.Pa[this.l + 1]], null) : J(this.D);
};
h.va = function() {
  if (null == this.D) {
    var a = this.Pa, b = this.l + 2;
    return Of ? Of(a, b, null) : Cf.call(null, a, b, null);
  }
  var a = this.Pa, b = this.l, c = K(this.D);
  return Of ? Of(a, b, c) : Cf.call(null, a, b, c);
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Nf(b, this.Pa, this.l, this.D, this.v);
};
h.T = function(a, b) {
  return M(b, this);
};
Nf.prototype[Sa] = function() {
  return uc(this);
};
function Cf() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return Bf(arguments[0]);
    case 3:
      return Of(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Bf(a) {
  return Of(a, 0, null);
}
function Of(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Nf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (v(d) && (d = d.kb(), v(d))) {
          return new Nf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Nf(null, a, b, c, null);
  }
}
function Pf(a, b, c, d, e) {
  this.o = a;
  this.Pa = b;
  this.l = c;
  this.D = d;
  this.v = e;
  this.i = 32374860;
  this.C = 0;
}
h = Pf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.o;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.o);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return J(this.D);
};
h.va = function() {
  var a = this.Pa, b = this.l, c = K(this.D);
  return Qf ? Qf(null, a, b, c) : Kf.call(null, null, a, b, c);
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Pf(b, this.Pa, this.l, this.D, this.v);
};
h.T = function(a, b) {
  return M(b, this);
};
Pf.prototype[Sa] = function() {
  return uc(this);
};
function Kf() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  switch(a.length) {
    case 1:
      return Jf(arguments[0]);
    case 4:
      return Qf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(a.length)].join(""));;
  }
}
function Jf(a) {
  return Qf(null, a, 0, null);
}
function Qf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (v(e) && (e = e.kb(), v(e))) {
          return new Pf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Pf(a, b, c, d, null);
  }
}
function Rf(a, b, c) {
  this.xa = a;
  this.Vb = b;
  this.Mb = c;
}
Rf.prototype.wa = function() {
  return this.Mb && this.Vb.wa();
};
Rf.prototype.next = function() {
  if (this.Mb) {
    return this.Vb.next();
  }
  this.Mb = !0;
  return this.xa;
};
Rf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Sf(a, b, c, d, e, f) {
  this.o = a;
  this.j = b;
  this.root = c;
  this.ta = d;
  this.xa = e;
  this.v = f;
  this.i = 16123663;
  this.C = 8196;
}
h = Sf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.keys = function() {
  return uc(mf.a ? mf.a(this) : mf.call(null, this));
};
h.entries = function() {
  return gf(G(this));
};
h.values = function() {
  return uc(nf.a ? nf.a(this) : nf.call(null, this));
};
h.has = function(a) {
  return jd(this, a);
};
h.get = function(a, b) {
  return this.K(null, a, b);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), g = P(f, 0), f = P(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        ed(b) ? (c = Qb(b), b = Rb(b), g = c, d = O(c), c = g) : (c = J(b), g = P(c, 0), f = P(c, 1), a.b ? a.b(f, g) : a.call(null, f, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  return null == b ? this.ta ? this.xa : c : null == this.root ? c : this.root.Oa(0, jc(b), b, c);
};
h.Ea = function() {
  var a = this.root ? Yb(this.root) : $d;
  return this.ta ? new Rf(this.xa, a, !1) : a;
};
h.R = function() {
  return this.o;
};
h.X = function() {
  return this.j;
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = yc(this);
};
h.w = function(a, b) {
  return ef(this, b);
};
h.Wa = function() {
  return new Tf({}, this.root, this.j, this.ta, this.xa);
};
h.Y = function() {
  return tb(qf, this.o);
};
h.Fb = function(a, b) {
  if (null == b) {
    return this.ta ? new Sf(this.o, this.j - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.lb(0, jc(b), b);
  return c === this.root ? this : new Sf(this.o, this.j - 1, c, this.ta, this.xa, null);
};
h.bb = function(a, b, c) {
  if (null == b) {
    return this.ta && c === this.xa ? this : new Sf(this.o, this.ta ? this.j : this.j + 1, this.root, !0, c, null);
  }
  a = new uf;
  b = (null == this.root ? Df : this.root).Aa(0, jc(b), b, c, a);
  return b === this.root ? this : new Sf(this.o, a.Ja ? this.j + 1 : this.j, b, this.ta, this.xa, null);
};
h.Ab = function(a, b) {
  return null == b ? this.ta : null == this.root ? !1 : this.root.Oa(0, jc(b), b, hd) !== hd;
};
h.V = function() {
  if (0 < this.j) {
    var a = null != this.root ? this.root.kb() : null;
    return this.ta ? M(new T(null, 2, 5, V, [null, this.xa], null), a) : a;
  }
  return null;
};
h.S = function(a, b) {
  return new Sf(b, this.j, this.root, this.ta, this.xa, this.v);
};
h.T = function(a, b) {
  if (dd(b)) {
    return fb(this, D.b(b, 0), D.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (dd(e)) {
      c = fb(c, D.b(e, 0), D.b(e, 1)), d = K(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.P(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return this.P(null, a);
};
h.b = function(a, b) {
  return this.K(null, a, b);
};
var qf = new Sf(null, 0, null, !1, null, zc);
function Wc(a, b) {
  for (var c = a.length, d = 0, e = Ib(qf);;) {
    if (d < c) {
      var f = d + 1, e = e.hb(null, a[d], b[d]), d = f
    } else {
      return Kb(e);
    }
  }
}
Sf.prototype[Sa] = function() {
  return uc(this);
};
function Tf(a, b, c, d, e) {
  this.I = a;
  this.root = b;
  this.count = c;
  this.ta = d;
  this.xa = e;
  this.i = 258;
  this.C = 56;
}
function Uf(a, b, c) {
  if (a.I) {
    if (null == b) {
      a.xa !== c && (a.xa = c), a.ta || (a.count += 1, a.ta = !0);
    } else {
      var d = new uf;
      b = (null == a.root ? Df : a.root).Ba(a.I, 0, jc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Ja && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = Tf.prototype;
h.X = function() {
  if (this.I) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.P = function(a, b) {
  return null == b ? this.ta ? this.xa : null : null == this.root ? null : this.root.Oa(0, jc(b), b);
};
h.K = function(a, b, c) {
  return null == b ? this.ta ? this.xa : c : null == this.root ? c : this.root.Oa(0, jc(b), b, c);
};
h.Ra = function(a, b) {
  var c;
  a: {
    if (this.I) {
      if (null != b ? b.i & 2048 || b.bc || (b.i ? 0 : z(ib, b)) : z(ib, b)) {
        c = Uf(this, rf.a ? rf.a(b) : rf.call(null, b), sf.a ? sf.a(b) : sf.call(null, b));
      } else {
        c = G(b);
        for (var d = this;;) {
          var e = J(c);
          if (v(e)) {
            c = K(c), d = Uf(d, rf.a ? rf.a(e) : rf.call(null, e), sf.a ? sf.a(e) : sf.call(null, e));
          } else {
            c = d;
            break a;
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return c;
};
h.Xa = function() {
  var a;
  if (this.I) {
    this.I = null, a = new Sf(null, this.count, this.root, this.ta, this.xa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.hb = function(a, b, c) {
  return Uf(this, b, c);
};
var me = function me() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  return me.m(0 < b.length ? new I(b.slice(0), 0) : null);
};
me.m = function(a) {
  for (var b = G(a), c = Ib(qf);;) {
    if (b) {
      a = K(K(b));
      var d = J(b), b = J(K(b)), c = Lb(c, d, b), b = a;
    } else {
      return Kb(c);
    }
  }
};
me.A = 0;
me.B = function(a) {
  return me.m(G(a));
};
function Vf(a, b) {
  this.G = a;
  this.ua = b;
  this.i = 32374988;
  this.C = 0;
}
h = Vf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.ua;
};
h.sa = function() {
  var a = (null != this.G ? this.G.i & 128 || this.G.tb || (this.G.i ? 0 : z(bb, this.G)) : z(bb, this.G)) ? this.G.sa(null) : K(this.G);
  return null == a ? null : new Vf(a, this.ua);
};
h.L = function() {
  return wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.ua);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return this.G.Z(null).Gb();
};
h.va = function() {
  var a = (null != this.G ? this.G.i & 128 || this.G.tb || (this.G.i ? 0 : z(bb, this.G)) : z(bb, this.G)) ? this.G.sa(null) : K(this.G);
  return null != a ? new Vf(a, this.ua) : rc;
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Vf(this.G, b);
};
h.T = function(a, b) {
  return M(b, this);
};
Vf.prototype[Sa] = function() {
  return uc(this);
};
function mf(a) {
  return (a = G(a)) ? new Vf(a, null) : null;
}
function rf(a) {
  return jb(a);
}
function Wf(a, b) {
  this.G = a;
  this.ua = b;
  this.i = 32374988;
  this.C = 0;
}
h = Wf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.R = function() {
  return this.ua;
};
h.sa = function() {
  var a = (null != this.G ? this.G.i & 128 || this.G.tb || (this.G.i ? 0 : z(bb, this.G)) : z(bb, this.G)) ? this.G.sa(null) : K(this.G);
  return null == a ? null : new Wf(a, this.ua);
};
h.L = function() {
  return wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.ua);
};
h.oa = function(a, b) {
  return Oc(b, this);
};
h.pa = function(a, b, c) {
  return Qc(b, c, this);
};
h.Z = function() {
  return this.G.Z(null).Hb();
};
h.va = function() {
  var a = (null != this.G ? this.G.i & 128 || this.G.tb || (this.G.i ? 0 : z(bb, this.G)) : z(bb, this.G)) ? this.G.sa(null) : K(this.G);
  return null != a ? new Wf(a, this.ua) : rc;
};
h.V = function() {
  return this;
};
h.S = function(a, b) {
  return new Wf(this.G, b);
};
h.T = function(a, b) {
  return M(b, this);
};
Wf.prototype[Sa] = function() {
  return uc(this);
};
function nf(a) {
  return (a = G(a)) ? new Wf(a, null) : null;
}
function sf(a) {
  return kb(a);
}
function Xf(a) {
  return v(ge(td, a)) ? sd(function(a, c) {
    return Rc.b(v(a) ? a : ee, c);
  }, a) : null;
}
function Yf(a) {
  this.Kb = a;
}
Yf.prototype.wa = function() {
  return this.Kb.wa();
};
Yf.prototype.next = function() {
  if (this.Kb.wa()) {
    return this.Kb.next().ra[0];
  }
  throw Error("No such element");
};
Yf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Zf(a, b, c) {
  this.o = a;
  this.Na = b;
  this.v = c;
  this.i = 15077647;
  this.C = 8196;
}
h = Zf.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.keys = function() {
  return uc(G(this));
};
h.entries = function() {
  var a = G(this);
  return new hf(G(a));
};
h.values = function() {
  return uc(G(this));
};
h.has = function(a) {
  return jd(this, a);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e), g = P(f, 0), f = P(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        ed(b) ? (c = Qb(b), b = Rb(b), g = c, d = O(c), c = g) : (c = J(b), g = P(c, 0), f = P(c, 1), a.b ? a.b(f, g) : a.call(null, f, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  return eb(this.Na, b) ? b : c;
};
h.Ea = function() {
  return new Yf(Yb(this.Na));
};
h.R = function() {
  return this.o;
};
h.X = function() {
  return Va(this.Na);
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = yc(this);
};
h.w = function(a, b) {
  return ad(b) && O(this) === O(b) && fe(function(a) {
    return function(b) {
      return jd(a, b);
    };
  }(this), b);
};
h.Wa = function() {
  return new $f(Ib(this.Na));
};
h.Y = function() {
  return Nc(ag, this.o);
};
h.Pb = function(a, b) {
  return new Zf(this.o, hb(this.Na, b), null);
};
h.V = function() {
  return mf(this.Na);
};
h.S = function(a, b) {
  return new Zf(b, this.Na, this.v);
};
h.T = function(a, b) {
  return new Zf(this.o, Vc.c(this.Na, b, null), null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.P(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return this.P(null, a);
};
h.b = function(a, b) {
  return this.K(null, a, b);
};
var ag = new Zf(null, ee, zc);
Zf.prototype[Sa] = function() {
  return uc(this);
};
function $f(a) {
  this.Ma = a;
  this.C = 136;
  this.i = 259;
}
h = $f.prototype;
h.Ra = function(a, b) {
  this.Ma = Lb(this.Ma, b, null);
  return this;
};
h.Xa = function() {
  return new Zf(null, Kb(this.Ma), null);
};
h.X = function() {
  return O(this.Ma);
};
h.P = function(a, b) {
  return db.c(this, b, null);
};
h.K = function(a, b, c) {
  return db.c(this.Ma, b, hd) === hd ? c : b;
};
h.call = function() {
  function a(a, b, c) {
    return db.c(this.Ma, b, hd) === hd ? c : b;
  }
  function b(a, b) {
    return db.c(this.Ma, b, hd) === hd ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.a = function(a) {
  return db.c(this.Ma, a, hd) === hd ? null : a;
};
h.b = function(a, b) {
  return db.c(this.Ma, a, hd) === hd ? b : a;
};
function bg(a) {
  a = G(a);
  if (null == a) {
    return ag;
  }
  if (a instanceof I && 0 === a.l) {
    a = a.f;
    a: {
      for (var b = 0, c = Ib(ag);;) {
        if (b < a.length) {
          var d = b + 1, c = c.Ra(null, a[b]), b = d
        } else {
          break a;
        }
      }
    }
    return c.Xa(null);
  }
  for (d = Ib(ag);;) {
    if (null != a) {
      b = K(a), d = d.Ra(null, a.Z(null)), a = b;
    } else {
      return Kb(d);
    }
  }
}
function Hd(a) {
  if (null != a && (a.C & 4096 || a.dc)) {
    return a.fb(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function cg(a, b) {
  for (var c = Ib(ee), d = G(a), e = G(b);;) {
    if (d && e) {
      var f = J(d), g = J(e), c = Lb(c, f, g), d = K(d), e = K(e)
    } else {
      return Kb(c);
    }
  }
}
function dg(a, b, c) {
  this.l = a;
  this.end = b;
  this.step = c;
}
dg.prototype.wa = function() {
  return 0 < this.step ? this.l < this.end : this.l > this.end;
};
dg.prototype.next = function() {
  var a = this.l;
  this.l += this.step;
  return a;
};
function eg(a, b, c, d, e) {
  this.o = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.v = e;
  this.i = 32375006;
  this.C = 8192;
}
h = eg.prototype;
h.toString = function() {
  return $b(this);
};
h.equiv = function(a) {
  return this.w(null, a);
};
h.O = function(a, b) {
  if (b < Va(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.ya = function(a, b, c) {
  return b < Va(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Ea = function() {
  return new dg(this.start, this.end, this.step);
};
h.R = function() {
  return this.o;
};
h.sa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new eg(this.o, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new eg(this.o, this.start + this.step, this.end, this.step, null) : null;
};
h.X = function() {
  return Qa(zb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.L = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
h.w = function(a, b) {
  return Kc(this, b);
};
h.Y = function() {
  return Nc(rc, this.o);
};
h.oa = function(a, b) {
  return Bc(this, b);
};
h.pa = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      c = b.b ? b.b(c, a) : b.call(null, c, a), a += this.step;
    } else {
      return c;
    }
  }
};
h.Z = function() {
  return null == zb(this) ? null : this.start;
};
h.va = function() {
  return null != zb(this) ? new eg(this.o, this.start + this.step, this.end, this.step, null) : rc;
};
h.V = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.S = function(a, b) {
  return new eg(b, this.start, this.end, this.step, this.v);
};
h.T = function(a, b) {
  return M(b, this);
};
eg.prototype[Sa] = function() {
  return uc(this);
};
function fg(a, b) {
  return function() {
    function c(c, d, e) {
      return new T(null, 2, 5, V, [a.c ? a.c(c, d, e) : a.call(null, c, d, e), b.c ? b.c(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new T(null, 2, 5, V, [a.b ? a.b(c, d) : a.call(null, c, d), b.b ? b.b(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new T(null, 2, 5, V, [a.a ? a.a(c) : a.call(null, c), b.a ? b.a(c) : b.call(null, c)], null);
    }
    function f() {
      return new T(null, 2, 5, V, [a.s ? a.s() : a.call(null), b.s ? b.s() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new I(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new T(null, 2, 5, V, [Yd(a, c, e, f, g), Yd(b, c, e, f, g)], null);
      }
      c.A = 3;
      c.B = function(a) {
        var b = J(a);
        a = K(a);
        var c = J(a);
        a = K(a);
        var e = J(a);
        a = qc(a);
        return d(b, c, e, a);
      };
      c.m = d;
      return c;
    }(), g = function(a, b, g, p) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new I(r, 0);
          }
          return k.m(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.A = 3;
    g.B = k.B;
    g.s = f;
    g.a = e;
    g.b = d;
    g.c = c;
    g.m = k.m;
    return g;
  }();
}
function gg(a, b, c, d, e, f, g) {
  var k = Da;
  Da = null == Da ? null : Da - 1;
  try {
    if (null != Da && 0 > Da) {
      return Fb(a, "#");
    }
    Fb(a, c);
    if (0 === Na.a(f)) {
      G(g) && Fb(a, function() {
        var a = hg.a(f);
        return v(a) ? a : "...";
      }());
    } else {
      if (G(g)) {
        var l = J(g);
        b.c ? b.c(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = K(g), n = Na.a(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          G(m) && 0 === n && (Fb(a, d), Fb(a, function() {
            var a = hg.a(f);
            return v(a) ? a : "...";
          }()));
          break;
        } else {
          Fb(a, d);
          var p = J(m);
          c = a;
          g = f;
          b.c ? b.c(p, c, g) : b.call(null, p, c, g);
          var q = K(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return Fb(a, e);
  } finally {
    Da = k;
  }
}
function ig(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.O(null, f);
      Fb(a, g);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, ed(d) ? (c = Qb(d), e = Rb(d), d = c, g = O(c), c = e, e = g) : (g = J(d), Fb(a, g), c = K(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var jg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function kg(a) {
  return [B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return jg[a];
  })), B('"')].join("");
}
function lg(a, b) {
  var c = id(F(a, La));
  return c ? (c = null != b ? b.i & 131072 || b.cc ? !0 : !1 : !1) ? null != $c(b) : c : c;
}
function mg(a, b, c) {
  if (null == a) {
    return Fb(b, "nil");
  }
  if (lg(c, a)) {
    Fb(b, "^");
    var d = $c(a);
    ng.c ? ng.c(d, b, c) : ng.call(null, d, b, c);
    Fb(b, " ");
  }
  if (a.Tb) {
    return a.lc(b);
  }
  if (null != a && (a.i & 2147483648 || a.U)) {
    return a.M(null, b, c);
  }
  if (!0 === a || !1 === a || "number" === typeof a) {
    return Fb(b, "" + B(a));
  }
  if (null != a && a.constructor === Object) {
    return Fb(b, "#js "), d = te.b(function(b) {
      return new T(null, 2, 5, V, [Gd.a(b), a[b]], null);
    }, fd(a)), og.u ? og.u(d, ng, b, c) : og.call(null, d, ng, b, c);
  }
  if (Pa(a)) {
    return gg(b, ng, "#js [", " ", "]", c, a);
  }
  if (ca(a)) {
    return v(Ja.a(c)) ? Fb(b, kg(a)) : Fb(b, a);
  }
  if (da(a)) {
    var e = a.name;
    c = v(function() {
      var a = null == e;
      return a ? a : /^[\s\xa0]*$/.test(e);
    }()) ? "Function" : e;
    return ig(b, Mc(["#object[", c, ' "', "" + B(a), '"]'], 0));
  }
  if (a instanceof Date) {
    return c = function(a, b) {
      for (var c = "" + B(a);;) {
        if (O(c) < b) {
          c = [B("0"), B(c)].join("");
        } else {
          return c;
        }
      }
    }, ig(b, Mc(['#inst "', "" + B(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if (a instanceof RegExp) {
    return ig(b, Mc(['#"', a.source, '"'], 0));
  }
  if (null != a && (a.i & 2147483648 || a.U)) {
    return Gb(a, b, c);
  }
  if (v(a.constructor.vb)) {
    return ig(b, Mc(["#object[", a.constructor.vb.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  e = a.constructor.name;
  c = v(function() {
    var a = null == e;
    return a ? a : /^[\s\xa0]*$/.test(e);
  }()) ? "Object" : e;
  return ig(b, Mc(["#object[", c, " ", "" + B(a), "]"], 0));
}
function ng(a, b, c) {
  var d = pg.a(c);
  return v(d) ? (c = Vc.c(c, qg, mg), d.c ? d.c(a, b, c) : d.call(null, a, b, c)) : mg(a, b, c);
}
function rg(a, b) {
  var c;
  if (null == a || Qa(G(a))) {
    c = "";
  } else {
    c = B;
    var d = new ra;
    a: {
      var e = new Zb(d);
      ng(J(a), e, b);
      for (var f = G(K(a)), g = null, k = 0, l = 0;;) {
        if (l < k) {
          var m = g.O(null, l);
          Fb(e, " ");
          ng(m, e, b);
          l += 1;
        } else {
          if (f = G(f)) {
            g = f, ed(g) ? (f = Qb(g), k = Rb(g), g = f, m = O(f), f = k, k = m) : (m = J(g), Fb(e, " "), ng(m, e, b), f = K(g), g = null, k = 0), l = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(d);
  }
  return c;
}
function re() {
  for (var a = [], b = arguments.length, c = 0;;) {
    if (c < b) {
      a.push(arguments[c]), c += 1;
    } else {
      break;
    }
  }
  return rg(0 < a.length ? new I(a.slice(0), 0) : null, Ga());
}
function sg(a) {
  var b = Vc.c(Ga(), Ja, !1);
  a = rg(a, b);
  Ba.a ? Ba.a(a) : Ba.call(null);
  v(!0) && (a = Ga(), Ba.a ? Ba.a("\n") : Ba.call(null), F(a, Ia));
}
function og(a, b, c, d) {
  return gg(c, function(a, c, d) {
    var k = jb(a);
    b.c ? b.c(k, c, d) : b.call(null, k, c, d);
    Fb(c, " ");
    a = kb(a);
    return b.c ? b.c(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
I.prototype.U = !0;
I.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Id.prototype.U = !0;
Id.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Nf.prototype.U = !0;
Nf.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
kf.prototype.U = !0;
kf.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Ue.prototype.U = !0;
Ue.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Ed.prototype.U = !0;
Ed.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Jc.prototype.U = !0;
Jc.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Sf.prototype.U = !0;
Sf.prototype.M = function(a, b, c) {
  return og(this, ng, b, c);
};
Pf.prototype.U = !0;
Pf.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Ze.prototype.U = !0;
Ze.prototype.M = function(a, b, c) {
  return gg(b, ng, "[", " ", "]", c, this);
};
Zf.prototype.U = !0;
Zf.prototype.M = function(a, b, c) {
  return gg(b, ng, "#{", " ", "}", c, this);
};
Nd.prototype.U = !0;
Nd.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
je.prototype.U = !0;
je.prototype.M = function(a, b, c) {
  Fb(b, "#object [cljs.core.Atom ");
  ng(new Ha(null, 1, [tg, this.state], null), b, c);
  return Fb(b, "]");
};
Wf.prototype.U = !0;
Wf.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
T.prototype.U = !0;
T.prototype.M = function(a, b, c) {
  return gg(b, ng, "[", " ", "]", c, this);
};
Bd.prototype.U = !0;
Bd.prototype.M = function(a, b) {
  return Fb(b, "()");
};
Ha.prototype.U = !0;
Ha.prototype.M = function(a, b, c) {
  return og(this, ng, b, c);
};
eg.prototype.U = !0;
eg.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Vf.prototype.U = !0;
Vf.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
Ad.prototype.U = !0;
Ad.prototype.M = function(a, b, c) {
  return gg(b, ng, "(", " ", ")", c, this);
};
mc.prototype.cb = !0;
mc.prototype.Va = function(a, b) {
  if (b instanceof mc) {
    return lc(this, b);
  }
  throw Error([B("Cannot compare "), B(this), B(" to "), B(b)].join(""));
};
Q.prototype.cb = !0;
Q.prototype.Va = function(a, b) {
  if (b instanceof Q) {
    return Fd(this, b);
  }
  throw Error([B("Cannot compare "), B(this), B(" to "), B(b)].join(""));
};
Ze.prototype.cb = !0;
Ze.prototype.Va = function(a, b) {
  if (dd(b)) {
    return ld(this, b);
  }
  throw Error([B("Cannot compare "), B(this), B(" to "), B(b)].join(""));
};
T.prototype.cb = !0;
T.prototype.Va = function(a, b) {
  if (dd(b)) {
    return ld(this, b);
  }
  throw Error([B("Cannot compare "), B(this), B(" to "), B(b)].join(""));
};
var ug = null;
function vg() {
  if (null == ug) {
    var a = new Ha(null, 3, [wg, ee, xg, ee, yg, ee], null);
    ug = le ? le(a) : ke.call(null, a);
  }
  return ug;
}
function zg(a, b, c) {
  var d = sc.b(b, c);
  if (!d && !(d = jd(yg.a(a).call(null, b), c)) && (d = dd(c)) && (d = dd(b))) {
    if (d = O(c) === O(b)) {
      for (var d = !0, e = 0;;) {
        if (d && e !== O(c)) {
          d = zg(a, b.a ? b.a(e) : b.call(null, e), c.a ? c.a(e) : c.call(null, e)), e += 1;
        } else {
          return d;
        }
      }
    } else {
      return d;
    }
  } else {
    return d;
  }
}
function Ag(a) {
  var b;
  b = vg();
  b = L.a ? L.a(b) : L.call(null, b);
  a = F(wg.a(b), a);
  return G(a) ? a : null;
}
function Bg(a, b, c, d) {
  se.b(a, function() {
    return L.a ? L.a(b) : L.call(null, b);
  });
  se.b(c, function() {
    return L.a ? L.a(d) : L.call(null, d);
  });
}
var Cg = function Cg(b, c, d) {
  var e = (L.a ? L.a(d) : L.call(null, d)).call(null, b), e = v(v(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = Ag(c);;) {
      if (0 < O(e)) {
        Cg(b, J(e), d), e = qc(e);
      } else {
        return null;
      }
    }
  }();
  if (v(e)) {
    return e;
  }
  e = function() {
    for (var e = Ag(b);;) {
      if (0 < O(e)) {
        Cg(J(e), c, d), e = qc(e);
      } else {
        return null;
      }
    }
  }();
  return v(e) ? e : !1;
};
function Dg(a, b, c) {
  c = Cg(a, b, c);
  if (v(c)) {
    a = c;
  } else {
    c = zg;
    var d;
    d = vg();
    d = L.a ? L.a(d) : L.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Eg = function Eg(b, c, d, e, f, g, k) {
  var l = pd(function(e, g) {
    var k = P(g, 0);
    P(g, 1);
    if (zg(L.a ? L.a(d) : L.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Dg(k, J(e), f);
      l = v(l) ? g : e;
      if (!v(Dg(J(l), k, f))) {
        throw Error([B("Multiple methods in multimethod '"), B(b), B("' match dispatch value: "), B(c), B(" -\x3e "), B(k), B(" and "), B(J(l)), B(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, L.a ? L.a(e) : L.call(null, e));
  if (v(l)) {
    if (sc.b(L.a ? L.a(k) : L.call(null, k), L.a ? L.a(d) : L.call(null, d))) {
      return se.u(g, Vc, c, J(K(l))), J(K(l));
    }
    Bg(g, e, k, d);
    return Eg(b, c, d, e, f, g, k);
  }
  return null;
};
function W(a, b) {
  throw Error([B("No method in multimethod '"), B(a), B("' for dispatch value: "), B(b)].join(""));
}
function Fg(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.h = b;
  this.mc = c;
  this.jb = d;
  this.$a = e;
  this.pc = f;
  this.mb = g;
  this.ab = k;
  this.i = 4194305;
  this.C = 4352;
}
h = Fg.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H, N) {
    a = this;
    var pa = Zd(a.h, b, c, d, e, Mc([f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H, N], 0)), dh = X(this, pa);
    v(dh) || W(a.name, pa);
    return Zd(dh, b, c, d, e, Mc([f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H, N], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H) {
    a = this;
    var N = a.h.ka ? a.h.ka(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H), pa = X(this, N);
    v(pa) || W(a.name, N);
    return pa.ka ? pa.ka(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H) : pa.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E, H);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E) {
    a = this;
    var H = a.h.ja ? a.h.ja(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E), N = X(this, H);
    v(N) || W(a.name, H);
    return N.ja ? N.ja(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E) : N.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y, E);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y) {
    a = this;
    var E = a.h.ia ? a.h.ia(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y), H = X(this, E);
    v(H) || W(a.name, E);
    return H.ia ? H.ia(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y) : H.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, y);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) {
    a = this;
    var y = a.h.ha ? a.h.ha(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C), E = X(this, y);
    v(E) || W(a.name, y);
    return E.ha ? E.ha(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : E.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) {
    a = this;
    var C = a.h.ga ? a.h.ga(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x), y = X(this, C);
    v(y) || W(a.name, C);
    return y.ga ? y.ga(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : y.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) {
    a = this;
    var x = a.h.fa ? a.h.fa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w), C = X(this, x);
    v(C) || W(a.name, x);
    return C.fa ? C.fa(b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : C.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
    a = this;
    var w = a.h.ea ? a.h.ea(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t), x = X(this, w);
    v(x) || W(a.name, w);
    return x.ea ? x.ea(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : x.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
    a = this;
    var t = a.h.da ? a.h.da(b, c, d, e, f, g, k, l, m, n, p, q, r) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r), w = X(this, t);
    v(w) || W(a.name, t);
    return w.da ? w.da(b, c, d, e, f, g, k, l, m, n, p, q, r) : w.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    a = this;
    var r = a.h.ca ? a.h.ca(b, c, d, e, f, g, k, l, m, n, p, q) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p, q), t = X(this, r);
    v(t) || W(a.name, r);
    return t.ca ? t.ca(b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, b, c, d, e, f, g, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    var q = a.h.ba ? a.h.ba(b, c, d, e, f, g, k, l, m, n, p) : a.h.call(null, b, c, d, e, f, g, k, l, m, n, p), r = X(this, q);
    v(r) || W(a.name, q);
    return r.ba ? r.ba(b, c, d, e, f, g, k, l, m, n, p) : r.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    var p = a.h.aa ? a.h.aa(b, c, d, e, f, g, k, l, m, n) : a.h.call(null, b, c, d, e, f, g, k, l, m, n), q = X(this, p);
    v(q) || W(a.name, p);
    return q.aa ? q.aa(b, c, d, e, f, g, k, l, m, n) : q.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    var n = a.h.na ? a.h.na(b, c, d, e, f, g, k, l, m) : a.h.call(null, b, c, d, e, f, g, k, l, m), p = X(this, n);
    v(p) || W(a.name, n);
    return p.na ? p.na(b, c, d, e, f, g, k, l, m) : p.call(null, b, c, d, e, f, g, k, l, m);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    var m = a.h.ma ? a.h.ma(b, c, d, e, f, g, k, l) : a.h.call(null, b, c, d, e, f, g, k, l), n = X(this, m);
    v(n) || W(a.name, m);
    return n.ma ? n.ma(b, c, d, e, f, g, k, l) : n.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.h.la ? a.h.la(b, c, d, e, f, g, k) : a.h.call(null, b, c, d, e, f, g, k), m = X(this, l);
    v(m) || W(a.name, l);
    return m.la ? m.la(b, c, d, e, f, g, k) : m.call(null, b, c, d, e, f, g, k);
  }
  function w(a, b, c, d, e, f, g) {
    a = this;
    var k = a.h.N ? a.h.N(b, c, d, e, f, g) : a.h.call(null, b, c, d, e, f, g), l = X(this, k);
    v(l) || W(a.name, k);
    return l.N ? l.N(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function x(a, b, c, d, e, f) {
    a = this;
    var g = a.h.F ? a.h.F(b, c, d, e, f) : a.h.call(null, b, c, d, e, f), k = X(this, g);
    v(k) || W(a.name, g);
    return k.F ? k.F(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function C(a, b, c, d, e) {
    a = this;
    var f = a.h.u ? a.h.u(b, c, d, e) : a.h.call(null, b, c, d, e), g = X(this, f);
    v(g) || W(a.name, f);
    return g.u ? g.u(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function E(a, b, c, d) {
    a = this;
    var e = a.h.c ? a.h.c(b, c, d) : a.h.call(null, b, c, d), f = X(this, e);
    v(f) || W(a.name, e);
    return f.c ? f.c(b, c, d) : f.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    var d = a.h.b ? a.h.b(b, c) : a.h.call(null, b, c), e = X(this, d);
    v(e) || W(a.name, d);
    return e.b ? e.b(b, c) : e.call(null, b, c);
  }
  function N(a, b) {
    a = this;
    var c = a.h.a ? a.h.a(b) : a.h.call(null, b), d = X(this, c);
    v(d) || W(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function pa(a) {
    a = this;
    var b = a.h.s ? a.h.s() : a.h.call(null), c = X(this, b);
    v(c) || W(a.name, b);
    return c.s ? c.s() : c.call(null);
  }
  var y = null, y = function(y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob, Db, Xb, Ac, rd, Xe) {
    switch(arguments.length) {
      case 1:
        return pa.call(this, y);
      case 2:
        return N.call(this, y, S);
      case 3:
        return H.call(this, y, S, U);
      case 4:
        return E.call(this, y, S, U, Y);
      case 5:
        return C.call(this, y, S, U, Y, ba);
      case 6:
        return x.call(this, y, S, U, Y, ba, fa);
      case 7:
        return w.call(this, y, S, U, Y, ba, fa, ha);
      case 8:
        return t.call(this, y, S, U, Y, ba, fa, ha, ja);
      case 9:
        return r.call(this, y, S, U, Y, ba, fa, ha, ja, ka);
      case 10:
        return q.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa);
      case 11:
        return p.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta);
      case 12:
        return n.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa);
      case 13:
        return m.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea);
      case 14:
        return l.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka);
      case 15:
        return k.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec);
      case 16:
        return g.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a);
      case 17:
        return f.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob);
      case 18:
        return e.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob, Db);
      case 19:
        return d.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob, Db, Xb);
      case 20:
        return c.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob, Db, Xb, Ac);
      case 21:
        return b.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob, Db, Xb, Ac, rd);
      case 22:
        return a.call(this, y, S, U, Y, ba, fa, ha, ja, ka, oa, ta, xa, Ea, Ka, ec, $a, ob, Db, Xb, Ac, rd, Xe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.a = pa;
  y.b = N;
  y.c = H;
  y.u = E;
  y.F = C;
  y.N = x;
  y.la = w;
  y.ma = t;
  y.na = r;
  y.aa = q;
  y.ba = p;
  y.ca = n;
  y.da = m;
  y.ea = l;
  y.fa = k;
  y.ga = g;
  y.ha = f;
  y.ia = e;
  y.ja = d;
  y.ka = c;
  y.Eb = b;
  y.eb = a;
  return y;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ta(b)));
};
h.s = function() {
  var a = this.h.s ? this.h.s() : this.h.call(null), b = X(this, a);
  v(b) || W(this.name, a);
  return b.s ? b.s() : b.call(null);
};
h.a = function(a) {
  var b = this.h.a ? this.h.a(a) : this.h.call(null, a), c = X(this, b);
  v(c) || W(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.b = function(a, b) {
  var c = this.h.b ? this.h.b(a, b) : this.h.call(null, a, b), d = X(this, c);
  v(d) || W(this.name, c);
  return d.b ? d.b(a, b) : d.call(null, a, b);
};
h.c = function(a, b, c) {
  var d = this.h.c ? this.h.c(a, b, c) : this.h.call(null, a, b, c), e = X(this, d);
  v(e) || W(this.name, d);
  return e.c ? e.c(a, b, c) : e.call(null, a, b, c);
};
h.u = function(a, b, c, d) {
  var e = this.h.u ? this.h.u(a, b, c, d) : this.h.call(null, a, b, c, d), f = X(this, e);
  v(f) || W(this.name, e);
  return f.u ? f.u(a, b, c, d) : f.call(null, a, b, c, d);
};
h.F = function(a, b, c, d, e) {
  var f = this.h.F ? this.h.F(a, b, c, d, e) : this.h.call(null, a, b, c, d, e), g = X(this, f);
  v(g) || W(this.name, f);
  return g.F ? g.F(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.N = function(a, b, c, d, e, f) {
  var g = this.h.N ? this.h.N(a, b, c, d, e, f) : this.h.call(null, a, b, c, d, e, f), k = X(this, g);
  v(k) || W(this.name, g);
  return k.N ? k.N(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.la = function(a, b, c, d, e, f, g) {
  var k = this.h.la ? this.h.la(a, b, c, d, e, f, g) : this.h.call(null, a, b, c, d, e, f, g), l = X(this, k);
  v(l) || W(this.name, k);
  return l.la ? l.la(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.ma = function(a, b, c, d, e, f, g, k) {
  var l = this.h.ma ? this.h.ma(a, b, c, d, e, f, g, k) : this.h.call(null, a, b, c, d, e, f, g, k), m = X(this, l);
  v(m) || W(this.name, l);
  return m.ma ? m.ma(a, b, c, d, e, f, g, k) : m.call(null, a, b, c, d, e, f, g, k);
};
h.na = function(a, b, c, d, e, f, g, k, l) {
  var m = this.h.na ? this.h.na(a, b, c, d, e, f, g, k, l) : this.h.call(null, a, b, c, d, e, f, g, k, l), n = X(this, m);
  v(n) || W(this.name, m);
  return n.na ? n.na(a, b, c, d, e, f, g, k, l) : n.call(null, a, b, c, d, e, f, g, k, l);
};
h.aa = function(a, b, c, d, e, f, g, k, l, m) {
  var n = this.h.aa ? this.h.aa(a, b, c, d, e, f, g, k, l, m) : this.h.call(null, a, b, c, d, e, f, g, k, l, m), p = X(this, n);
  v(p) || W(this.name, n);
  return p.aa ? p.aa(a, b, c, d, e, f, g, k, l, m) : p.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.ba = function(a, b, c, d, e, f, g, k, l, m, n) {
  var p = this.h.ba ? this.h.ba(a, b, c, d, e, f, g, k, l, m, n) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n), q = X(this, p);
  v(q) || W(this.name, p);
  return q.ba ? q.ba(a, b, c, d, e, f, g, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.ca = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  var q = this.h.ca ? this.h.ca(a, b, c, d, e, f, g, k, l, m, n, p) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p), r = X(this, q);
  v(r) || W(this.name, q);
  return r.ca ? r.ca(a, b, c, d, e, f, g, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.da = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  var r = this.h.da ? this.h.da(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q), t = X(this, r);
  v(t) || W(this.name, r);
  return t.da ? t.da(a, b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.ea = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  var t = this.h.ea ? this.h.ea(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r), w = X(this, t);
  v(w) || W(this.name, t);
  return w.ea ? w.ea(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : w.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.fa = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  var w = this.h.fa ? this.h.fa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t), x = X(this, w);
  v(x) || W(this.name, w);
  return x.fa ? x.fa(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : x.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.ga = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) {
  var x = this.h.ga ? this.h.ga(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w), C = X(this, x);
  v(C) || W(this.name, x);
  return C.ga ? C.ga(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : C.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
};
h.ha = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) {
  var C = this.h.ha ? this.h.ha(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x), E = X(this, C);
  v(E) || W(this.name, C);
  return E.ha ? E.ha(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x) : E.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x);
};
h.ia = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) {
  var E = this.h.ia ? this.h.ia(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C), H = X(this, E);
  v(H) || W(this.name, E);
  return H.ia ? H.ia(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C) : H.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C);
};
h.ja = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) {
  var H = this.h.ja ? this.h.ja(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E), N = X(this, H);
  v(N) || W(this.name, H);
  return N.ja ? N.ja(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E) : N.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E);
};
h.ka = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) {
  var N = this.h.ka ? this.h.ka(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) : this.h.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H), pa = X(this, N);
  v(pa) || W(this.name, N);
  return pa.ka ? pa.ka(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H) : pa.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H);
};
h.Eb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N) {
  var pa = Zd(this.h, a, b, c, d, Mc([e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N], 0)), y = X(this, pa);
  v(y) || W(this.name, pa);
  return Zd(y, a, b, c, d, Mc([e, f, g, k, l, m, n, p, q, r, t, w, x, C, E, H, N], 0));
};
function Gg(a, b) {
  var c = Hg;
  se.u(c.$a, Vc, a, b);
  Bg(c.mb, c.$a, c.ab, c.jb);
}
function X(a, b) {
  sc.b(L.a ? L.a(a.ab) : L.call(null, a.ab), L.a ? L.a(a.jb) : L.call(null, a.jb)) || Bg(a.mb, a.$a, a.ab, a.jb);
  var c = (L.a ? L.a(a.mb) : L.call(null, a.mb)).call(null, b);
  if (v(c)) {
    return c;
  }
  c = Eg(a.name, b, a.jb, a.$a, a.pc, a.mb, a.ab);
  return v(c) ? c : (L.a ? L.a(a.$a) : L.call(null, a.$a)).call(null, a.mc);
}
h.fb = function() {
  return Tb(this.name);
};
h.gb = function() {
  return Ub(this.name);
};
h.L = function() {
  return this[ea] || (this[ea] = ++ga);
};
var Ig = new Q(null, "y", "y", -1757859776), Jg = new Q(null, "key-code", "key-code", -1732114304), Kg = new Q(null, "shift", "shift", 997140064), Lg = new Q(null, "features", "features", -1146962336), Mg = new Q(null, "disable-stroke-perspective", "disable-stroke-perspective", 479198433), Ng = new Q(null, "down", "down", 1565245570), Og = new Q(null, "enable-retina-pixels", "enable-retina-pixels", 1018316034), Pg = new Q(null, "disable-depth-mask", "disable-depth-mask", 3298562), Qg = new Q(null, 
"align", "align", 1964212802), Rg = new Q(null, "p-y", "p-y", -530704830), Sg = new Q(null, "boids", "boids", 2106521410), Tg = new Q(null, "burn", "burn", -458179293), Ug = new Q(null, "key-typed", "key-typed", -876037597), Vg = new Q(null, "mouse-clicked", "mouse-clicked", -199339421), Wg = new Q(null, "mouse-released", "mouse-released", -664480061), Xg = new Q(null, "fn", "fn", -1175266204), Yg = new Q(null, "f8", "f8", -2141475484), La = new Q(null, "meta", "meta", 1499536964), Zg = new Q(null, 
"screen", "screen", 1990059748), $g = new Q(null, "enable-depth-test", "enable-depth-test", 1519326084), ah = new Q(null, "mouse-exited", "mouse-exited", -483205244), bh = new Q(null, "enable-depth-sort", "enable-depth-sort", -383089627), ch = new Q(null, "f1", "f1", 1714532389), eh = new Q(null, "color", "color", 1011675173), Ma = new Q(null, "dup", "dup", 556298533), fh = new Q(null, "java2d", "java2d", 166099237), gh = new Q(null, "disable-texture-mipmaps", "disable-texture-mipmaps", 1697917541), 
hh = new Q(null, "key", "key", -1516042587), ih = new Q(null, "darkest", "darkest", 68197253), jh = new Q(null, "f10", "f10", 627525541), kh = new Q(null, "dodge", "dodge", -1556666427), lh = new Q(null, "on-close", "on-close", -761178394), mh = new Q(null, "disable-stroke-pure", "disable-stroke-pure", 735493926), nh = new Q(null, "replace", "replace", -786587770), oh = new Q(null, "alt", "alt", -3214426), ph = new Q(null, "button", "button", 1456579943), qe = new mc(null, "new-value", "new-value", 
-1567397401, null), qh = new Q(null, "separate", "separate", -1624828409), rh = new Q(null, "mouse-wheel", "mouse-wheel", 1811662439), ne = new Q(null, "validator", "validator", -1966190681), sh = new Q(null, "disable-depth-test", "disable-depth-test", 284606407), th = new Q(null, "keyPressed", "keyPressed", 1791025256), uh = new Q(null, "default", "default", -1987822328), vh = new Q(null, "decor", "decor", -1730969431), wh = new Q(null, "enable-stroke-perspective", "enable-stroke-perspective", -259923319), 
xh = new Q(null, "maxx", "maxx", 23572233), yh = new Q(null, "minx", "minx", 1094774569), zh = new Q(null, "opengl", "opengl", -614998103), Ah = new Q(null, "time", "time", 1385887882), Bh = new Q(null, "mouse-moved", "mouse-moved", -1918152310), Ch = new Q(null, "safe-draw-fn", "safe-draw-fn", 1454900202), Dh = new Q(null, "width", "width", -384071477), Eh = new Q(null, "enable-native-fonts", "enable-native-fonts", -1989072693), Fh = new Q(null, "max-speed", "max-speed", -997417461), Gh = new Q(null, 
"mouseOut", "mouseOut", -386669045), Hh = new Q(null, "f5", "f5", 1587057387), Ih = new Q(null, "command", "command", -894540724), Jh = new Q(null, "mouseScrolled", "mouseScrolled", 31878252), tg = new Q(null, "val", "val", 128701612), Kh = new Q(null, "update", "update", 1045576396), pe = new mc(null, "validate", "validate", 1439230700, null), Lh = new Q(null, "debug", "debug", -1608172596), Mh = new Q(null, "state", "state", -1988618099), Nh = new Q(null, "behaviors", "behaviors", 120724909), qg = 
new Q(null, "fallback-impl", "fallback-impl", -1501286995), Ia = new Q(null, "flush-on-newline", "flush-on-newline", -151457939), Oh = new Q(null, "mouseDragged", "mouseDragged", 129975181), Ph = new Q(null, "rate", "rate", -1428659698), Qh = new Q(null, "up", "up", -269712113), xg = new Q(null, "descendants", "descendants", 1824886031), Rh = new Q(null, "average-position", "average-position", 850828623), Sh = new Q(null, "renderer", "renderer", 336841071), Th = new Q(null, "size", "size", 1098693007), 
Uh = new Q(null, "title", "title", 636505583), Vh = new Q(null, "center", "center", -748944368), Wh = new Q(null, "setup", "setup", 1987730512), Xh = new Q(null, "mouse-pressed", "mouse-pressed", 736955536), yg = new Q(null, "ancestors", "ancestors", -776045424), Yh = new Q(null, "middleware", "middleware", 1462115504), Zh = new Q(null, "disable-optimized-stroke", "disable-optimized-stroke", 74038544), de = new mc(null, "meta10963", "meta10963", 755961360, null), $h = new Q(null, "focus-gained", 
"focus-gained", -857086384), Ja = new Q(null, "readably", "readably", 1129599760), ai = new Q(null, "global-key-events", "global-key-events", 335064944), hg = new Q(null, "more-marker", "more-marker", -14717935), bi = new Q(null, "world", "world", -418292623), ci = new Q(null, "f11", "f11", -1417398799), di = new Q(null, "host", "host", -1558485167), ei = new Q(null, "wander", "wander", 1245626610), fi = new Q(null, "overlay", "overlay", -139131598), gi = new Q(null, "mouse-entered", "mouse-entered", 
811350322), hi = new Q(null, "strength", "strength", -415606478), ii = new Q(null, "enable-opengl-errors", "enable-opengl-errors", 89998962), ji = new Q(null, "enable-stroke-pure", "enable-stroke-pure", 881345587), ki = new Q(null, "no-safe-draw", "no-safe-draw", -1157778157), li = new Q(null, "focus-lost", "focus-lost", -554849613), mi = new Q(null, "f3", "f3", 1954829043), ni = new Q(null, "enable-depth-mask", "enable-depth-mask", 872785875), oi = new Q(null, "key-pressed", "key-pressed", -757100364), 
pi = new Q(null, "key-released", "key-released", 215919828), Na = new Q(null, "print-length", "print-length", 1931866356), qi = new Q(null, "f2", "f2", 396168596), ri = new Q(null, "keyReleased", "keyReleased", 541714964), si = new Q(null, "control", "control", 1892578036), ti = new Q(null, "difference", "difference", 1916101396), ui = new Q(null, "mouseClicked", "mouseClicked", 1764302965), vi = new Q(null, "enable-optimized-stroke", "enable-optimized-stroke", 1537575253), wg = new Q(null, "parents", 
"parents", -2027538891), wi = new Q(null, "p-x", "p-x", -1721211211), xi = new Q(null, "p2d", "p2d", -2106175755), yi = new Q(null, "mouseReleased", "mouseReleased", 1116234838), zi = new Q(null, "mousePressed", "mousePressed", 1776186454), Ai = new Q(null, "mouseMoved", "mouseMoved", -1936954058), Bi = new Q(null, "f12", "f12", 853352790), Ci = new Q(null, "mouseOver", "mouseOver", -1334461930), Di = new Q(null, "exclusion", "exclusion", 531897910), Ei = new Q(null, "disable-opengl-errors", "disable-opengl-errors", 
506822839), Fi = new Q(null, "unknown-key", "unknown-key", 255305911), Gi = new Q(null, "average-velocity", "average-velocity", -494376681), Hi = new Q(null, "right", "right", -452581833), Ii = new Q(null, "host-id", "host-id", 742376279), Ji = new Q(null, "hard-light", "hard-light", -37591145), Ki = new Q(null, "disable-retina-pixels", "disable-retina-pixels", -2049264713), Li = new Q(null, "keyTyped", "keyTyped", 1437329399), Mi = new Q(null, "multiply", "multiply", -1036907048), Ni = new Q(null, 
"lightest", "lightest", -2043115912), Oi = new Q(null, "f7", "f7", 356150168), Pi = new Q(null, "x", "x", 2099068185), Qi = new Q(null, "num-boids", "num-boids", -1439144615), Ri = new Q(null, "blend", "blend", 249565561), Si = new Q(null, "disable-depth-sort", "disable-depth-sort", -1568352839), Ti = new Q(null, "raw-key", "raw-key", -162482279), Ui = new Q(null, "target", "target", 253001721), ce = new mc(null, "quote", "quote", 1377916282, null), Vi = new Q(null, "f9", "f9", 704633338), Wi = new Q(null, 
"maxy", "maxy", 726027898), Xi = new Q(null, "draw", "draw", 1358331674), be = new Q(null, "arglists", "arglists", 1661989754), ae = new mc(null, "nil-iter", "nil-iter", 1101030523, null), Yi = new Q(null, "add", "add", 235287739), Zi = new Q(null, "hierarchy", "hierarchy", -1053470341), $i = new Q(null, "soft-light", "soft-light", 513207899), pg = new Q(null, "alt-impl", "alt-impl", 670969595), aj = new Q(null, "subtract", "subtract", 2136988635), bj = new Q(null, "f6", "f6", 2103080604), cj = new Q(null, 
"f4", "f4", 990968764), dj = new Q(null, "miny", "miny", -1513078883), Be = new Q(null, "direction", "direction", -633359395), ej = new Q(null, "p3d", "p3d", -850380194), fj = new Q(null, "range", "range", 1639692286), gj = new Q(null, "height", "height", 1025178622), hj = new Q(null, "mouse-dragged", "mouse-dragged", -1220073441), ij = new Q(null, "left", "left", -399115937), jj = new Q(null, "cohere", "cohere", 1678799519), kj = new Q(null, "enable-texture-mipmaps", "enable-texture-mipmaps", 1241892671), 
lj = new Q(null, "disable-native-fonts", "disable-native-fonts", -931436705);
function mj(a, b) {
  return xe.c(ud, a, b);
}
function nj(a, b) {
  return xe.c(vd, a, b);
}
function oj(a, b) {
  return xe.b(function(a) {
    return b * a;
  }, a);
}
function pj(a) {
  a = sd(ud, te.c(wd, a, a));
  return Math.sqrt(a);
}
;function qj(a) {
  var b = null != a && (a.i & 64 || a.H) ? R(me, a) : a, c = F(b, Ph);
  return Ae(b, function(a, b, c, g) {
    return function(a) {
      return a + (1 * Math.random() - .5) * g;
    };
  }(a, b, b, c));
}
function rj(a, b) {
  return fg(function(b) {
    return a * Math.cos(b);
  }, function(b) {
    return a * Math.sin(b);
  }).call(null, b);
}
function sj(a, b) {
  var c = null != a && (a.i & 64 || a.H) ? R(me, a) : a, d = F(c, Be), e = F(c, hi), f = null != b && (b.i & 64 || b.H) ? R(me, b) : b, g = F(f, Mh), k = g.a ? g.a(1) : g.call(null, 1), l = pj(k), c = 0 === l ? k : te.b(function(a, b) {
    return function(a) {
      return Math.sqrt(2) * (a / b);
    };
  }(k, l, a, c, d, e, b, f, g), k), d = rj(e, d);
  return mj(c, d);
}
function tj(a, b, c) {
  var d = null != a && (a.i & 64 || a.H) ? R(me, a) : a, e = F(d, fj), f = F(d, hi), g = null != b && (b.i & 64 || b.H) ? R(me, b) : b, k = F(g, Mh), l = null != c && (c.i & 64 || c.H) ? R(me, c) : c, m = F(l, Sg), n = function() {
    return function(a, b, c, d, e, f, g, k, l, m) {
      return function y(n) {
        return new Id(null, function(a, b, c, d, e, f, g) {
          return function() {
            for (var a = n;;) {
              if (a = G(a)) {
                if (ed(a)) {
                  var b = Qb(a), e = O(b), f = Md(e);
                  a: {
                    for (var k = 0;;) {
                      if (k < e) {
                        var l = D.b(b, k), l = null != l && (l.i & 64 || l.H) ? R(me, l) : l, l = F(l, Mh), l = P(l, 0), l = nj(g.a ? g.a(0) : g.call(null, 0), l), m = pj(l);
                        0 <= m && m <= c && (l = 0 === m ? g.a ? g.a(0) : g.call(null, 0) : oj(l, d / m / m), f.add(l));
                        k += 1;
                      } else {
                        b = !0;
                        break a;
                      }
                    }
                  }
                  return b ? Od(f.W(), y(Rb(a))) : Od(f.W(), null);
                }
                f = J(a);
                f = null != f && (f.i & 64 || f.H) ? R(me, f) : f;
                f = F(f, Mh);
                f = P(f, 0);
                f = nj(g.a ? g.a(0) : g.call(null, 0), f);
                b = pj(f);
                if (0 <= b && b <= c) {
                  return M(0 === b ? g.a ? g.a(0) : g.call(null, 0) : oj(f, d / b / b), y(qc(a)));
                }
                a = qc(a);
              } else {
                return null;
              }
            }
          };
        }(a, b, c, d, e, f, g, k, l, m), null, null);
      };
    }(a, d, e, f, b, g, k, c, l, m)(m);
  }();
  return Wd(xe, ud, n);
}
function uj(a, b, c) {
  a = nj(c, a);
  c = pj(a);
  return 0 === c ? new T(null, 2, 5, V, [0, 0], null) : oj(a, b / c);
}
function vj() {
  return new Ha(null, 3, [Be, 2 * Math.PI * Math.random(), Ph, Math.random(), hi, 10 * Math.random()], null);
}
;function wj(a, b, c) {
  for (var d = c - b;;) {
    if (a < b) {
      a += d;
    } else {
      if (a >= c) {
        a -= d;
      } else {
        return a;
      }
    }
  }
}
function xj(a, b) {
  var c = null != b && (b.i & 64 || b.H) ? R(me, b) : b, d = F(c, yh), e = F(c, xh), f = F(c, dj), g = F(c, Wi);
  return ze.c(ze.c(a, new T(null, 3, 5, V, [Mh, 0, 0], null), function(a, b, c, d) {
    return function(a) {
      return wj(a, c, d);
    };
  }(b, c, d, e, f, g)), new T(null, 3, 5, V, [Mh, 0, 1], null), function(a, b, c, d, e, f) {
    return function(a) {
      return wj(a, e, f);
    };
  }(b, c, d, e, f, g));
}
if ("undefined" === typeof Hg) {
  var Hg = function() {
    var a = le ? le(ee) : ke.call(null, ee), b = le ? le(ee) : ke.call(null, ee), c = le ? le(ee) : ke.call(null, ee), d = le ? le(ee) : ke.call(null, ee), e = nc(ee, Zi, vg());
    return new Fg(pc.b("flocking.simulation", "steer"), function() {
      return function(a) {
        return a;
      };
    }(a, b, c, d, e), uh, e, a, b, c, d);
  }()
}
Gg(ei, function(a, b, c) {
  return sj(b, c);
});
Gg(qh, function(a, b, c, d) {
  return tj(b, c, d);
});
Gg(Qg, function(a, b, c, d) {
  a = null != b && (b.i & 64 || b.H) ? R(me, b) : b;
  a = F(a, hi);
  c = null != c && (c.i & 64 || c.H) ? R(me, c) : c;
  c = F(c, Mh);
  d = null != d && (d.i & 64 || d.H) ? R(me, d) : d;
  d = F(d, Gi);
  return uj(c.a ? c.a(1) : c.call(null, 1), a, d);
});
Gg(jj, function(a, b, c, d) {
  a = null != b && (b.i & 64 || b.H) ? R(me, b) : b;
  a = F(a, hi);
  c = null != c && (c.i & 64 || c.H) ? R(me, c) : c;
  c = F(c, Mh);
  d = null != d && (d.i & 64 || d.H) ? R(me, d) : d;
  d = F(d, Rh);
  return uj(c.a ? c.a(0) : c.call(null, 0), a, d);
});
function yj(a, b, c) {
  var d = null != a && (a.i & 64 || a.H) ? R(me, a) : a, e = F(d, Mh), f = F(d, Fh), g = F(d, Nh), k = P(e, 0), l = P(e, 1), m = function() {
    return function(a, c, d, e, f, g, k, l, m) {
      return function y(n) {
        return new Id(null, function(a, c, d, e, f, g) {
          return function() {
            for (;;) {
              var a = G(n);
              if (a) {
                if (ed(a)) {
                  var c = Qb(a), d = O(c), e = Md(d);
                  a: {
                    for (var f = 0;;) {
                      if (f < d) {
                        var k = D.b(c, f), l = P(k, 0), k = P(k, 1), l = Hg.u ? Hg.u(l, k, g, b) : Hg.call(null, l, k, g, b);
                        e.add(l);
                        f += 1;
                      } else {
                        c = !0;
                        break a;
                      }
                    }
                  }
                  return c ? Od(e.W(), y(Rb(a))) : Od(e.W(), null);
                }
                c = J(a);
                e = P(c, 0);
                c = P(c, 1);
                return M(Hg.u ? Hg.u(e, c, g, b) : Hg.call(null, e, c, g, b), y(qc(a)));
              }
              return null;
            }
          };
        }(a, c, d, e, f, g, k, l, m), null, null);
      };
    }(e, k, l, a, d, d, e, f, g)(g);
  }(), n = mj(l, te.b(function() {
    return function(a) {
      return a * c;
    };
  }(e, k, l, m, a, d, d, e, f, g), Wd(te, ud, m))), p = pj(n), m = 0 === p ? l : te.b(function(a, b, c, d, e, f, g, k, l, m, n) {
    return function(a) {
      return a / f * n;
    };
  }(e, k, l, m, n, p, a, d, d, e, f, g), n), m = new T(null, 2, 5, V, [mj(k, oj(m, c)), m], null);
  return xj(ze.c(ye(d, new T(null, 1, 5, V, [Mh], null), m), new T(null, 2, 5, V, [Nh, ei], null), qj), bi.a(b));
}
function zj(a) {
  var b = null != a && (a.i & 64 || a.H) ? R(me, a) : a, c = F(b, Sg);
  return we(b, cg(new T(null, 2, 5, V, [Rh, Gi], null), te.b(function(a, b, c, g) {
    return function(a) {
      return oj(a, 1 / O(g));
    };
  }(a, b, b, c), te.b(function() {
    return function(a) {
      return Wd(te, ud, a);
    };
  }(a, b, b, c), Wd(te, Te, te.b(Mh, c))))));
}
function Aj(a) {
  var b = (new Date).getTime(), c = .001 * (b - (a.b ? a.b(Ah, b) : a.call(null, Ah, b))), d = function() {
    return function(b, c) {
      return function k(d) {
        return new Id(null, function(b, c) {
          return function() {
            for (;;) {
              var b = G(d);
              if (b) {
                if (ed(b)) {
                  var e = Qb(b), f = O(e), m = Md(f);
                  a: {
                    for (var w = 0;;) {
                      if (w < f) {
                        var x = D.b(e, w), x = yj(x, a, c);
                        m.add(x);
                        w += 1;
                      } else {
                        e = !0;
                        break a;
                      }
                    }
                  }
                  return e ? Od(m.W(), k(Rb(b))) : Od(m.W(), null);
                }
                m = J(b);
                return M(yj(m, a, c), k(qc(b)));
              }
              return null;
            }
          };
        }(b, c), null, null);
      };
    }(b, c)(Sg.a(a));
  }();
  return zj(we(a, new Ha(null, 2, [Ah, b, Sg, d], null)));
}
;var Bj;
a: {
  var Cj = aa.navigator;
  if (Cj) {
    var Dj = Cj.userAgent;
    if (Dj) {
      Bj = Dj;
      break a;
    }
  }
  Bj = "";
}
;var Ej = -1 != Bj.indexOf("Opera") || -1 != Bj.indexOf("OPR"), Fj = -1 != Bj.indexOf("Trident") || -1 != Bj.indexOf("MSIE"), Gj = -1 != Bj.indexOf("Edge"), Hj = -1 != Bj.indexOf("Gecko") && !(-1 != Bj.toLowerCase().indexOf("webkit") && -1 == Bj.indexOf("Edge")) && !(-1 != Bj.indexOf("Trident") || -1 != Bj.indexOf("MSIE")) && -1 == Bj.indexOf("Edge"), Ij = -1 != Bj.toLowerCase().indexOf("webkit") && -1 == Bj.indexOf("Edge");
function Jj() {
  var a = Bj;
  if (Hj) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (Gj) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (Fj) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (Ij) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function Kj() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Lj = function() {
  if (Ej && aa.opera) {
    var a = aa.opera.version;
    return da(a) ? a() : a;
  }
  var a = "", b = Jj();
  b && (a = b ? b[1] : "");
  return Fj && (b = Kj(), b > parseFloat(a)) ? String(b) : a;
}(), Mj = {};
function Nj(a) {
  var b;
  if (!(b = Mj[a])) {
    b = 0;
    for (var c = ia(String(Lj)).split("."), d = ia(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(g) || ["", "", ""], p = m.exec(k) || ["", "", ""];
        if (0 == n[0].length && 0 == p[0].length) {
          break;
        }
        b = la(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || la(0 == n[2].length, 0 == p[2].length) || la(n[2], p[2]);
      } while (0 == b);
    }
    b = Mj[a] = 0 <= b;
  }
  return b;
}
var Oj = aa.document, Pj = Oj && Fj ? Kj() || ("CSS1Compat" == Oj.compatMode ? parseInt(Lj, 10) : 5) : void 0;
!Hj && !Fj || Fj && 9 <= Pj || Hj && Nj("1.9.1");
Fj && Nj("9");
qa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var Qj = !Fj || 9 <= Pj, Rj = Fj && !Nj("9");
!Ij || Nj("528");
Hj && Nj("1.9b") || Fj && Nj("8") || Ej && Nj("9.5") || Ij && Nj("528");
Hj && !Nj("8") || Fj && Nj("9");
function Sj(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Lb = !1;
}
Sj.prototype.stopPropagation = function() {
  this.Lb = !0;
};
Sj.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Tj(a) {
  Tj[" "](a);
  return a;
}
Tj[" "] = function() {
};
function Uj(a, b) {
  Sj.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.ib = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (Hj) {
        var e;
        a: {
          try {
            Tj(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = Ij || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = Ij || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.ib = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = Sj.prototype;
  Uj.Wb = Sj.prototype;
  Uj.prototype = new a;
  Uj.prototype.constructor = Uj;
  Uj.qb = function(a, c, d) {
    for (var e = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      e[f - 2] = arguments[f];
    }
    return Sj.prototype[c].apply(a, e);
  };
})();
Uj.prototype.stopPropagation = function() {
  Uj.Wb.stopPropagation.call(this);
  this.ib.stopPropagation ? this.ib.stopPropagation() : this.ib.cancelBubble = !0;
};
Uj.prototype.preventDefault = function() {
  Uj.Wb.preventDefault.call(this);
  var a = this.ib;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Rj) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Vj = "closure_listenable_" + (1E6 * Math.random() | 0), Wj = 0;
function Xj(a, b, c, d, e) {
  this.listener = a;
  this.wb = null;
  this.src = b;
  this.type = c;
  this.rb = !!d;
  this.Jb = e;
  this.key = ++Wj;
  this.pb = this.zb = !1;
}
function Yj(a) {
  a.pb = !0;
  a.listener = null;
  a.wb = null;
  a.src = null;
  a.Jb = null;
}
;function Zj(a) {
  this.src = a;
  this.Ca = {};
  this.xb = 0;
}
Zj.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.Ca[f];
  a || (a = this.Ca[f] = [], this.xb++);
  var g = ak(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.zb = !1)) : (b = new Xj(b, this.src, f, !!d, e), b.zb = c, a.push(b));
  return b;
};
Zj.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.Ca)) {
    return !1;
  }
  var e = this.Ca[a];
  b = ak(e, b, c, d);
  return -1 < b ? (Yj(e[b]), sa.splice.call(e, b, 1), 0 == e.length && (delete this.Ca[a], this.xb--), !0) : !1;
};
Zj.prototype.hasListener = function(a, b) {
  var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
  return na(this.Ca, function(a) {
    for (var g = 0;g < a.length;++g) {
      if (!(c && a[g].type != d || e && a[g].rb != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function ak(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.pb && f.listener == b && f.rb == !!c && f.Jb == d) {
      return e;
    }
  }
  return -1;
}
;var bk = "closure_lm_" + (1E6 * Math.random() | 0), ck = {}, dk = 0;
function ek() {
  var a = fk, b = Qj ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function gk(a, b, c, d, e) {
  if ("array" == u(b)) {
    for (var f = 0;f < b.length;f++) {
      gk(a, b[f], c, d, e);
    }
  } else {
    if (c = hk(c), a && a[Vj]) {
      a.Cc(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, g = ik(a);
      g || (a[bk] = g = new Zj(a));
      c = g.add(b, c, !0, d, e);
      if (!c.wb) {
        d = ek();
        c.wb = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) {
          a.addEventListener(b.toString(), d, f);
        } else {
          if (a.attachEvent) {
            a.attachEvent(jk(b.toString()), d);
          } else {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
        }
        dk++;
      }
    }
  }
}
function jk(a) {
  return a in ck ? ck[a] : ck[a] = "on" + a;
}
function kk(a, b, c, d) {
  var e = !0;
  if (a = ik(a)) {
    if (b = a.Ca[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.rb == c && !f.pb && (f = lk(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function lk(a, b) {
  var c = a.listener, d = a.Jb || a.src;
  if (a.zb && "number" != typeof a && a && !a.pb) {
    var e = a.src;
    if (e && e[Vj]) {
      e.Dc(a);
    } else {
      var f = a.type, g = a.wb;
      e.removeEventListener ? e.removeEventListener(f, g, a.rb) : e.detachEvent && e.detachEvent(jk(f), g);
      dk--;
      if (f = ik(e)) {
        var g = a.type, k;
        if (k = g in f.Ca) {
          k = f.Ca[g];
          var l = ua(k, a), m;
          (m = 0 <= l) && sa.splice.call(k, l, 1);
          k = m;
        }
        k && (Yj(a), 0 == f.Ca[g].length && (delete f.Ca[g], f.xb--));
        0 == f.xb && (f.src = null, e[bk] = null);
      } else {
        Yj(a);
      }
    }
  }
  return c.call(d, b);
}
function fk(a, b) {
  if (a.pb) {
    return !0;
  }
  if (!Qj) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Uj(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (g) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, k = e.length - 1;!c.Lb && 0 <= k;k--) {
        c.currentTarget = e[k];
        var l = kk(e[k], f, !0, c), d = d && l;
      }
      for (k = 0;!c.Lb && k < e.length;k++) {
        c.currentTarget = e[k], l = kk(e[k], f, !1, c), d = d && l;
      }
    }
    return d;
  }
  return lk(a, new Uj(b, this));
}
function ik(a) {
  a = a[bk];
  return a instanceof Zj ? a : null;
}
var mk = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function hk(a) {
  if (da(a)) {
    return a;
  }
  a[mk] || (a[mk] = function(b) {
    return a.handleEvent(b);
  });
  return a[mk];
}
;var nk = new Ha(null, 3, [vh, new T(null, 2, 5, V, ["2.0", "Try :features [:present] for similar effect"], null), Ui, new T(null, 2, 5, V, ["2.0", "Use :features [:keep-on-top] instead."], null), Ch, new T(null, 2, 5, V, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function ok(a) {
  a = bg(a);
  v(a.a ? a.a(ki) : a.call(null, ki)) && sg(Mc(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return null == a ? null : mb(a, ki);
}
function pk(a) {
  var b = ze.c(a, new T(null, 1, 5, V, [Lg], null), ok);
  return we(ee, ve(Oa, function() {
    return function(a) {
      return function e(b) {
        return new Id(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (ed(a)) {
                  var c = Qb(a), l = O(c), m = Md(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = D.b(c, a), e = P(b, 0), f = P(b, 1), b = m;
                        var g = nk.a ? nk.a(e) : nk.call(null, e);
                        v(g) ? (f = P(g, 0), g = P(g, 1), sg(Mc([e, "option was removed in Quil", f, ".", g], 0)), e = null) : e = new T(null, 2, 5, V, [e, f], null);
                        b.add(e);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Od(m.W(), e(Rb(a))) : Od(m.W(), null);
                }
                var n = J(a), p = P(n, 0), q = P(n, 1);
                return M(function() {
                  var a = nk.a ? nk.a(p) : nk.call(null, p);
                  if (v(a)) {
                    var b = P(a, 0), a = P(a, 1);
                    sg(Mc([p, "option was removed in Quil", b, ".", a], 0));
                    return null;
                  }
                  return new T(null, 2, 5, V, [p, q], null);
                }(), e(qc(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;function qk(a) {
  var b = rk;
  if (v(F(b, a))) {
    return F(b, a);
  }
  var c;
  a: {
    c = [a];
    var d = c.length;
    if (d <= pf) {
      for (var e = 0, f = Ib(ee);;) {
        if (e < d) {
          var g = e + 1, f = Lb(f, c[e], null), e = g
        } else {
          c = new Zf(null, Kb(f), null);
          break a;
        }
      }
    } else {
      for (e = 0, f = Ib(ag);;) {
        if (e < d) {
          g = e + 1, f = Jb(f, c[e]), e = g;
        } else {
          c = Kb(f);
          break a;
        }
      }
    }
  }
  if (v(ge(c, nf(b)))) {
    return a;
  }
  throw Error([B("Expecting a keyword, got: "), B(a), B(". Expected one of: "), B(Se(nd(mf(b))))].join(""));
}
;var Z = null, rk = new Ha(null, 4, [fh, Processing.prototype.PConstants.JAVA2D, xi, Processing.prototype.PConstants.P2D, ej, Processing.prototype.PConstants.P3D, zh, Processing.prototype.PConstants.OPENGL], null), sk = function sk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return sk.b(arguments[0], arguments[1]);
    case 3:
      return sk.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
sk.b = function(a, b) {
  return Z.size(a | 0, b | 0);
};
sk.c = function(a, b, c) {
  return Z.size(a | 0, b | 0, qk(c));
};
sk.A = 3;
function tk(a, b) {
  for (var c = G(Wc([th, Gh, Jh, Oh, Wh, ri, ui, yi, zi, Ai, Ci, Li, Xi], [oi, ah, rh, hj, Wh, pi, Vg, Wg, Xh, Bh, gi, Ug, Xi])), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.O(null, f), k = P(g, 0), l = P(g, 1), m = b.a ? b.a(l) : b.call(null, l);
      if (v(m)) {
        var n = m;
        a[Hd(k)] = function(b, c, d, e, f) {
          return function() {
            var b = Z;
            Z = a;
            try {
              return f.s ? f.s() : f.call(null);
            } finally {
              Z = b;
            }
          };
        }(c, d, e, f, n, m, g, k, l);
      }
      f += 1;
    } else {
      if (m = G(c)) {
        g = m;
        if (ed(g)) {
          c = Qb(g), f = Rb(g), d = c, e = O(c), c = f;
        } else {
          var n = J(g), k = P(n, 0), l = P(n, 1), p = b.a ? b.a(l) : b.call(null, l);
          if (v(p)) {
            var q = p;
            a[Hd(k)] = function(b, c, d, e, f) {
              return function() {
                var b = Z;
                Z = a;
                try {
                  return f.s ? f.s() : f.call(null);
                } finally {
                  Z = b;
                }
              };
            }(c, d, e, f, q, p, n, k, l, g, m);
          }
          c = K(g);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
function uk(a) {
  var b = Xf(Mc([new Ha(null, 1, [Th, new T(null, 2, 5, V, [500, 300], null)], null), function(b) {
    return b.a ? b.a(a) : b.call(null, a);
  }.call(null, R(ie, M(pk, Yh.b(a, Sc))))], 0)), c = function() {
    var a = Th.a(b);
    return v(a) ? a : new T(null, 2, 5, V, [200, 200], null);
  }(), d = Sh.a(b), e = bg(Lg.a(b)), f = ze.c(ze.c(b, new T(null, 1, 5, V, [Wh], null), function(a, b, c, d) {
    return function(e) {
      return function(a, b, c) {
        return function() {
          R(sk, Sd.b(b, v(c) ? new T(null, 1, 5, V, [c], null) : Sc));
          return v(e) ? e.s ? e.s() : e.call(null) : null;
        };
      }(a, b, c, d);
    };
  }(b, c, d, e)), new T(null, 1, 5, V, [rh], null), function(a, b, c, d) {
    return function(e) {
      return v(e) ? function() {
        return function() {
          var a = -1 * Z.mouseScroll;
          return e.a ? e.a(a) : e.call(null, a);
        };
      }(a, b, c, d) : null;
    };
  }(b, c, d, e)), c = new Processing.Sketch(function(a, b, c, d, e) {
    return function(a) {
      tk(a, e);
      a.ob = le ? le(null) : ke.call(null, null);
      return a.rc = le ? le(60) : ke.call(null, 60);
    };
  }(b, c, d, e, f));
  jd(e, ai) && (c.options.globalKeyEvents = !0);
  return c;
}
var vk = function vk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  return vk.m(0 < b.length ? new I(b.slice(0), 0) : null);
};
vk.m = function(a) {
  var b = R(me, a);
  a = function() {
    var a = di.a(b), c = document;
    return ca(a) ? c.getElementById(a) : a;
  }();
  var c = function() {
    var a = Sh.a(b);
    return v(a) ? a : xi;
  }();
  return v(a) ? (v(a.Ub) ? sc.b(c, a.Ub) || console.warn("WARNING: Using different context on one canvas!") : a.Ub = c, new Processing(a, uk(b))) : console.warn("WARNING: Cannot create sketch. :host is not specified.");
};
vk.A = 0;
vk.B = function(a) {
  return vk.m(G(a));
};
var wk = le ? le(rc) : ke.call(null, rc);
function xk(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
gk(window, "load", function() {
  for (var a = 1 >= document.body.childNodes.length, b = G(L.a ? L.a(wk) : L.call(null, wk)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.O(null, e);
      v(a) && xk(Ii.a(f));
      Xg.a(f).call(null);
      e += 1;
    } else {
      if (b = G(b)) {
        c = b, ed(c) ? (b = Qb(c), d = Rb(c), c = b, f = O(b), b = d, d = f) : (f = J(c), v(a) && xk(Ii.a(f)), Xg.a(f).call(null), b = K(c), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
});
function yk() {
  return v(null) ? null : Z;
}
Wc([Tg, Zg, ih, kh, nh, fi, ti, Di, Ji, Mi, Ni, Ri, Yi, $i, aj], [Processing.prototype.PConstants.BURN, Processing.prototype.PConstants.SCREEN, Processing.prototype.PConstants.DARKEST, Processing.prototype.PConstants.DODGE, Processing.prototype.PConstants.REPLACE, Processing.prototype.PConstants.OVERLAY, Processing.prototype.PConstants.DIFFERENCE, Processing.prototype.PConstants.EXCLUSION, Processing.prototype.PConstants.HARD_LIGHT, Processing.prototype.PConstants.MULTIPLY, Processing.prototype.PConstants.LIGHTEST, 
Processing.prototype.PConstants.BLEND, Processing.prototype.PConstants.ADD, Processing.prototype.PConstants.SOFT_LIGHT, Processing.prototype.PConstants.SUBTRACT]);
Wc([Mg, Og, Pg, $g, bh, gh, mh, sh, wh, Eh, Zh, ii, ji, ni, vi, Ei, Ki, Si, kj, lj], [Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.ENABLE_RETINA_PIXELS, Processing.prototype.PConstants.DISABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_DEPTH_SORT, Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_STROKE_PURE, Processing.prototype.PConstants.DISABLE_DEPTH_TEST, 
Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.ENABLE_NATIVE_FONTS, Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS, Processing.prototype.PConstants.ENABLE_STROKE_PURE, Processing.prototype.PConstants.ENABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS, Processing.prototype.PConstants.DISABLE_RETINA_PIXELS, Processing.prototype.PConstants.DISABLE_DEPTH_SORT, 
Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_NATIVE_FONTS]);
var zk = Wc([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [jh, Hi, Ih, Yg, Hh, qi, Ng, bj, Oi, ci, si, cj, ch, Bi, Kg, Vi, Qh, oh, mi, ij]);
function Ak() {
  var a = Z.rc;
  oe.b ? oe.b(a, 30) : oe.call(null, a, 30);
  Z.frameRate(30);
}
var Bk = function Bk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Bk.b(arguments[0], arguments[1]);
    case 4:
      return Bk.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 6:
      return Bk.N(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Bk.b = function(a, b) {
  return R(Bk, Sd.b(a, b));
};
Bk.u = function(a, b, c, d) {
  return yk().line(a, b, c, d);
};
Bk.N = function(a, b, c, d, e, f) {
  return yk().line(a, b, c, d, e, f);
};
Bk.A = 6;
function Ck() {
  var a = Z.mouseButton;
  return v(sc.b ? sc.b(37, a) : sc.call(null, 37, a)) ? ij : v(sc.b ? sc.b(39, a) : sc.call(null, 39, a)) ? Hi : v(sc.b ? sc.b(3, a) : sc.call(null, 3, a)) ? Vh : null;
}
function Dk() {
  yk().popMatrix();
}
function Ek() {
  yk().pushMatrix();
}
var Fk = function Fk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Fk.a(arguments[0]);
    case 4:
      return Fk.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Fk.a = function(a) {
  return yk().rotate(a);
};
Fk.u = function(a, b, c, d) {
  return yk().rotate(a, b, c, d);
};
Fk.A = 4;
var Gk = function Gk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Gk.a(arguments[0]);
    case 2:
      return Gk.b(arguments[0], arguments[1]);
    case 3:
      return Gk.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Gk.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Gk.a = function(a) {
  return yk().stroke(a);
};
Gk.b = function(a, b) {
  return yk().stroke(a, b);
};
Gk.c = function(a, b, c) {
  return yk().stroke(a, b, c);
};
Gk.u = function(a, b, c, d) {
  return yk().stroke(a, b, c, d);
};
Gk.A = 4;
var Hk = function Hk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Hk.a(arguments[0]);
    case 2:
      return Hk.b(arguments[0], arguments[1]);
    case 3:
      return Hk.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Hk.a = function(a) {
  return R(Hk, a);
};
Hk.b = function(a, b) {
  return yk().translate(a, b);
};
Hk.c = function(a, b, c) {
  return yk().translate(a, b, c);
};
Hk.A = 3;
var Ik = function Ik() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Ik.b(arguments[0], arguments[1]);
    case 3:
      return Ik.c(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ik.u(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ik.F(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Ik.b = function(a, b) {
  return yk().vertex(a, b);
};
Ik.c = function(a, b, c) {
  return yk().vertex(a, b, c);
};
Ik.u = function(a, b, c, d) {
  return yk().vertex(a, b, c, d);
};
Ik.F = function(a, b, c, d, e) {
  return yk().vertex(a, b, c, d, e);
};
Ik.A = 5;
function Jk(a) {
  return R(vk, a);
}
;function Kk(a) {
  a = null != a && (a.i & 64 || a.H) ? R(me, a) : a;
  var b = F(a, Mh), c = P(b, 0), d = P(b, 1), b = P(d, 0), d = P(d, 1), e = F(a, Dh), f = F(a, gj), g = F(a, eh), e = .5 * e, f = .5 * f;
  Ek();
  try {
    Hk.a(c);
    var k = new T(null, 1, 5, V, [Math.atan2(d, b)], null);
    Ek();
    try {
      R(Fk, k);
      var l = null != a && (a.i & 64 || a.H) ? R(me, a) : a, m = F(l, Nh), n = null != m && (m.i & 64 || m.H) ? R(me, m) : m, p = F(n, ei), q = null != p && (p.i & 64 || p.H) ? R(me, p) : p, r = F(q, Be), t = F(q, hi), w = F(q, Ph), x = F(q, Lh);
      if (v(x)) {
        yk().fill(255);
        Gk.a(255);
        Bk.b(new T(null, 2, 5, V, [0, 0], null), new T(null, 2, 5, V, [1 * Math.sqrt(2), 0], null));
        var C = new T(null, 2, 5, V, [1 * Math.sqrt(2), 0], null);
        Ek();
        try {
          Hk.a(C);
          yk().noFill();
          Gk.c(0, 255, 255);
          yk().ellipse(0, 0, 2, 2);
          var E = new T(null, 1, 5, V, [r], null);
          Ek();
          try {
            R(Fk, E);
            Gk.c(255, 255, 0);
            yk().beginShape();
            R(Ik, new T(null, 2, 5, V, [0, 0], null));
            R(Ik, new T(null, 2, 5, V, [t, 0], null));
            yk().endShape();
            var H = new T(null, 2, 5, V, [t, 0], null);
            Ek();
            try {
              Hk.a(H), Gk.c(255, 0, 0), yk().ellipse(0, 0, 2 * w, 2 * w);
            } finally {
              Dk();
            }
          } finally {
            Dk();
          }
        } finally {
          Dk();
        }
      }
      var N = new T(null, 1, 5, V, [Z.radians(-90)], null);
      Ek();
      try {
        R(Fk, N), yk().noFill(), R(Gk, g), yk().triangle(-e, -f, 0, f, e, -f);
      } finally {
        Dk();
      }
    } finally {
      Dk();
    }
  } finally {
    Dk();
  }
}
function Lk(a) {
  a = null != a && (a.i & 64 || a.H) ? R(me, a) : a;
  var b = F(a, bi);
  a = F(a, Sg);
  var c = null != b && (b.i & 64 || b.H) ? R(me, b) : b, d = F(c, yh), e = F(c, xh), b = F(c, dj), c = F(c, Wi), d = e - d, b = c - b, b = d > b ? d : b, d = Z.width, e = Z.height, c = d < e ? d : e;
  yk().background(0, 0, 0);
  Hk.b(.5 * d, .5 * e);
  yk().scale(1, -1);
  yk().scale(c / b);
  yk().strokeWeight(b / c / .5);
  a = G(a);
  b = null;
  for (c = e = 0;;) {
    if (c < e) {
      d = b.O(null, c), Kk(d), c += 1;
    } else {
      if (a = G(a)) {
        b = a, ed(b) ? (a = Qb(b), e = Rb(b), b = a, d = O(a), a = e, e = d) : (d = J(b), Kk(d), a = K(b), b = null, e = 0), c = 0;
      } else {
        return null;
      }
    }
  }
}
;B("state map is missing :navigation-3d key. ");
B("Did you accidentally removed it from the state in ");
B(":update or any other handler?");
Gd.a(" ");
B("state map is missing :navigation-2d key. ");
B("Did you accidentally removed it from the state in ");
B(":update or any other handler?");
function Mk(a) {
  var b = Wh.b(a, function() {
    return null;
  });
  return Vc.c(a, Wh, function(a) {
    return function() {
      var b = Z.ob, e = a.s ? a.s() : a.call(null);
      return oe.b ? oe.b(b, e) : oe.call(null, b, e);
    };
  }(b));
}
function Nk(a) {
  var b = Xi.b(a, function() {
    return null;
  }), c = Kh.b(a, td), b = function(a, b) {
    return function() {
      var c = se.b(Z.ob, sc.b(Z.frameCount, 1) ? td : b);
      return a.a ? a.a(c) : a.call(null, c);
    };
  }(b, c);
  return Vc.c(Xc.b(a, Kh), Xi, b);
}
function Ok() {
  return new Ha(null, 2, [Pi, Z.mouseX, Ig, Z.mouseY], null);
}
function Pk() {
  return new Ha(null, 3, [Pi, Z.mouseX, Ig, Z.mouseY, ph, Ck()], null);
}
function Qk() {
  var a;
  a = Z.key;
  var b = Z.keyCode;
  a = v(sc.b(65535, ("" + B(a)).charCodeAt())) ? nc(zk, b, Fi) : Gd.a("" + B(a));
  return new Ha(null, 3, [hh, a, Jg, Z.keyCode, Ti, Z.key], null);
}
var Rk = function Rk() {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Rk.b(arguments[0], arguments[1]);
    case 3:
      return Rk.c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([B("Invalid arity: "), B(b.length)].join(""));;
  }
};
Rk.b = function(a, b) {
  return Rk.c(a, b, null);
};
Rk.c = function(a, b, c) {
  var d = a.a ? a.a(b) : a.call(null, b);
  return v(d) ? Vc.c(a, b, v(c) ? function(a) {
    return function() {
      return se.c(Z.ob, a, c.s ? c.s() : c.call(null));
    };
  }(d, d) : function(a) {
    return function() {
      return se.b(Z.ob, a);
    };
  }(d, d)) : a;
};
Rk.A = 3;
function Sk(a, b) {
  return pd(function(a, b) {
    return b instanceof Q ? Rk.b(a, b) : Wd(Rk, a, b);
  }, a, b);
}
function Tk(a) {
  var b = rh.a(a);
  return v(b) ? Vc.c(a, rh, function(a) {
    return function(b) {
      return se.c(Z.ob, a, b);
    };
  }(b, b)) : a;
}
function Uk(a) {
  return Tk(Sk(Nk(Mk(a)), Mc([$h, li, new T(null, 2, 5, V, [gi, Ok], null), new T(null, 2, 5, V, [ah, Ok], null), new T(null, 2, 5, V, [Xh, Pk], null), new T(null, 2, 5, V, [Wg, Ok], null), new T(null, 2, 5, V, [Vg, Pk], null), new T(null, 2, 5, V, [Bh, function() {
    return new Ha(null, 4, [Pi, Z.mouseX, Ig, Z.mouseY, wi, Z.pmouseX, Rg, Z.pmouseY], null);
  }], null), new T(null, 2, 5, V, [hj, function() {
    return new Ha(null, 5, [Pi, Z.mouseX, Ig, Z.mouseY, wi, Z.pmouseX, Rg, Z.pmouseY, ph, Ck()], null);
  }], null), new T(null, 2, 5, V, [oi, Qk], null), pi, new T(null, 2, 5, V, [Ug, Qk], null), lh], 0)));
}
;function Vk(a) {
  return Uk(a);
}
;function Wk(a) {
  var b = null != a && (a.i & 64 || a.H) ? R(me, a) : a;
  a = F(b, yh);
  var c = F(b, xh), d = F(b, dj), b = F(b, Wi);
  return new T(null, 2, 5, V, [new T(null, 2, 5, V, [a + (c - a) * Math.random(), d + (b - d) * Math.random()], null), new T(null, 2, 5, V, [0, 0], null)], null);
}
function Xk(a) {
  yk().smooth();
  Ak();
  var b = new Ha(null, 4, [yh, -20, xh, 20, dj, -20, Wi, 20], null);
  return new Ha(null, 2, [bi, b, Sg, function() {
    return function(a, b) {
      return function f(g) {
        return new Id(null, function(a, b) {
          return function() {
            for (;;) {
              var a = G(g);
              if (a) {
                if (ed(a)) {
                  var c = Qb(a), d = O(c), k = Md(d);
                  a: {
                    for (var r = 0;;) {
                      if (r < d) {
                        D.b(c, r);
                        var t = new Ha(null, 6, [Dh, .6, gj, 1, eh, new T(null, 3, 5, V, [0, 255, 0], null), Fh, 5, Mh, Wk(b), Nh, new Ha(null, 4, [ei, Vc.m(vj(), hi, 10, Mc([Lh, !1], 0)), qh, new Ha(null, 2, [fj, 2, hi, 10], null), Qg, new Ha(null, 1, [hi, 10], null), jj, new Ha(null, 1, [hi, 50], null)], null)], null);
                        k.add(t);
                        r += 1;
                      } else {
                        c = !0;
                        break a;
                      }
                    }
                  }
                  return c ? Od(k.W(), f(Rb(a))) : Od(k.W(), null);
                }
                J(a);
                return M(new Ha(null, 6, [Dh, .6, gj, 1, eh, new T(null, 3, 5, V, [0, 255, 0], null), Fh, 5, Mh, Wk(b), Nh, new Ha(null, 4, [ei, Vc.m(vj(), hi, 10, Mc([Lh, !1], 0)), qh, new Ha(null, 2, [fj, 2, hi, 10], null), Qg, new Ha(null, 1, [hi, 10], null), jj, new Ha(null, 1, [hi, 50], null)], null)], null), f(qc(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(20, b)(new eg(null, 0, a, 1, null));
  }()], null);
}
function Yk(a) {
  var b = null != a && (a.i & 64 || a.H) ? R(me, a) : a, c = F(b, Dh), d = F(b, gj), e = F(b, di), f = F(b, Qi);
  return Jk(Mc([Uh, "Flocking Behaviors", di, e, Wh, function(a, b, c, d, e, f) {
    return function() {
      return Xk(f);
    };
  }(a, b, c, d, e, f), Xi, Lk, Kh, Aj, Yh, new T(null, 1, 5, V, [Vk], null), Th, new T(null, 2, 5, V, [c, d], null)], 0));
}
function Zk(a, b, c, d) {
  return Yk(new Ha(null, 4, [Dh, b, gj, c, di, a, Qi, d], null));
}
var $k = ["flocking", "game_launcher", "launch_app"], al = aa;
$k[0] in al || !al.execScript || al.execScript("var " + $k[0]);
for (var bl;$k.length && (bl = $k.shift());) {
  $k.length || void 0 === Zk ? al = al[bl] ? al[bl] : al[bl] = {} : al[bl] = Zk;
}
;
})();
