!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var i={},n={},a={},t={}.hasOwnProperty,s=/^\.\.?(\/|$)/,l=function(e,i){for(var n,a=[],t=(s.test(i)?e+"/"+i:i).split("/"),l=0,r=t.length;l<r;l++)n=t[l],".."===n?a.pop():"."!==n&&""!==n&&a.push(n);return a.join("/")},r=function(e){return e.split("/").slice(0,-1).join("/")},f=function(i){return function(n){var a=l(r(i),n);return e.require(a,i)}},o=function(e,i){var a=null;a=u&&u.createHot(e);var t={id:e,exports:{},hot:a};return n[e]=t,i(t.exports,f(e),t),t.exports},m=function(e){return a[e]?m(a[e]):e},c=function(e,i){return m(l(r(e),i))},x=function(e,a){null==a&&(a="/");var s=m(e);if(t.call(n,s))return n[s].exports;if(t.call(i,s))return o(s,i[s]);throw new Error("Cannot find module '"+e+"' from '"+a+"'")};x.alias=function(e,i){a[i]=e};var _=/\.[^.\/]+$/,I=/\/index(\.[^\/]+)?$/,z=function(e){if(_.test(e)){var i=e.replace(_,"");t.call(a,i)&&a[i].replace(_,"")!==i+"/index"||(a[i]=e)}if(I.test(e)){var n=e.replace(I,"");t.call(a,n)||(a[n]=e)}};x.register=x.define=function(e,a){if("object"==typeof e)for(var s in e)t.call(e,s)&&x.register(s,e[s]);else i[e]=a,delete n[e],z(e)},x.list=function(){var e=[];for(var n in i)t.call(i,n)&&e.push(n);return e};var u=e._hmr&&new e._hmr(c,x,i,n);x._cache=n,x.hmr=u&&u.wrap,x.brunch=!0,e.require=x}}(),function(){window;require.register("initialize.js",function(e,i,n){"use strict";$(document).ready(function(){$(".ui.sidebar").sidebar("attach events",".toc.item");var e=$("#followMenu"),i=e.find("div.menu"),n=i.find("a"),a=!1,t={scrollTo:function(e){var i=$(this).attr("href").replace("#",""),n=$("#"+i),t=n.offset().top-50;return $(this).siblings().removeClass("active"),$(this).addClass("active"),a=!0,$("html, body").animate({scrollTop:t},500,"swing",function(){a=!1}),e.stopImmediatePropagation(),e.preventDefault(),!1},activate:{section:function(){if(!a){var e=$(this);n.removeClass("active").filter(function(){return $(this).attr("href")==="#"+e.find("a").attr("id")}).addClass("active")}},previous:function(){if(!a){var e=$(this).prevAll("h2").first(),i=e.length>0?e:$(this);n.removeClass("active").filter(function(){return $(this).attr("href")==="#"+i.find("a").attr("id")}).addClass("active")}}}};e.find("a[href]").on("click",t.scrollTo),window.location.hash&&(console.log(window.location.hash),e.find('a[href="'+window.location.hash+'"]').click(),history.replaceState("",document.title,window.location.pathname)),e.find(".ui.sticky").sticky({context:".main.ui.container"}),$(".main.ui.container h2.header").visibility({observeChanges:!1,once:!1,offset:50,onTopPassed:t.activate.section,onTopPassedReverse:t.activate.previous}),$(".ui.accordion.faq").accordion(),$(".ui.accordion.faq a[href]").on("click",function(e){e.stopPropagation()})})}),require.register("js/main.js",function(e,i,n){"use strict"}),require.register("js/photo.js",function(e,i,n){"use strict";var a=[{name:"brief",photos:[{size:"4912x3264",filename:"DSC00838"},{size:"5536x2160",filename:"DSC07104"},{size:"6000x3376",filename:"DSC07175"},{size:"5472x3648",filename:"IMG_2811"},{size:"5472x3648",filename:"IMG_2815"},{size:"4898x3265",filename:"IMG_5793"}]},{name:"team",photos:[,{size:"3648x5472",filename:"IMG_2816"},{size:"4898x3265",filename:"IMG_5652"},{size:"4898x3265",filename:"IMG_5654"},{size:"4898x3265",filename:"IMG_5658"},{size:"4898x3265",filename:"IMG_5659"},{size:"4898x3265",filename:"IMG_5662"},{size:"4898x3265",filename:"IMG_5663"},{size:"4898x3265",filename:"IMG_5665"},{size:"4898x3265",filename:"IMG_5670"},{size:"4898x3265",filename:"IMG_5673"},{size:"3265x4898",filename:"IMG_5675"},{size:"4898x3265",filename:"IMG_5677"},{size:"4898x3265",filename:"IMG_5679"},{size:"4898x3265",filename:"IMG_5681"},{size:"4898x3265",filename:"IMG_5683"},{size:"4898x3265",filename:"IMG_5685"},{size:"3265x4898",filename:"IMG_5688"},{size:"4898x3265",filename:"IMG_5689"},{size:"4898x3265",filename:"IMG_5691"},{size:"4898x3265",filename:"IMG_5693"},{size:"4898x3265",filename:"IMG_5696"},{size:"4898x3265",filename:"IMG_5697"},{size:"4898x3265",filename:"IMG_5699"},{size:"4898x3265",filename:"IMG_5702"},{size:"4898x3265",filename:"IMG_5704"},{size:"4898x3265",filename:"IMG_5708"},{size:"4898x3265",filename:"IMG_5709"},{size:"4898x3265",filename:"IMG_5711"},{size:"4898x3265",filename:"IMG_5713"},{size:"4898x3265",filename:"IMG_5716"},{size:"4898x3265",filename:"IMG_5718"},{size:"4898x3265",filename:"IMG_5721"},{size:"4898x3265",filename:"IMG_5722"},{size:"4898x3265",filename:"IMG_5723"},{size:"4898x3265",filename:"IMG_5724"},{size:"4898x3265",filename:"IMG_5727"},{size:"4898x3265",filename:"IMG_5729"},{size:"4898x3265",filename:"IMG_5730"},{size:"4898x3265",filename:"IMG_5732"},{size:"4898x3265",filename:"IMG_5734"},{size:"4898x3265",filename:"IMG_5742"},{size:"4898x3265",filename:"IMG_5745"},{size:"4898x3265",filename:"IMG_5746"},{size:"4898x3265",filename:"IMG_5749"},{size:"4898x3265",filename:"IMG_5750"},{size:"4898x3265",filename:"IMG_5752"},{size:"4898x3265",filename:"IMG_5755"},{size:"4898x3265",filename:"IMG_5758"},{size:"4898x3265",filename:"IMG_5760"},{size:"4898x3265",filename:"IMG_5763"},{size:"4898x3265",filename:"IMG_5765"},{size:"4898x3265",filename:"IMG_5766"},{size:"4898x3265",filename:"IMG_5769"},{size:"4898x3265",filename:"IMG_5772"},{size:"4898x3265",filename:"IMG_5774"},{size:"4898x3265",filename:"IMG_5778"},{size:"4898x3265",filename:"IMG_5780"},{size:"4898x3265",filename:"IMG_5782"},{size:"4898x3265",filename:"IMG_5785"},{size:"4898x3265",filename:"IMG_5786"},{size:"4898x3265",filename:"IMG_5788"},{size:"4898x3265",filename:"IMG_5796"},{size:"4898x3265",filename:"IMG_5798"}]},{name:"contest",photos:[{size:"5472x3648",filename:"IMG_5821"},{size:"4898x3265",filename:"IMG_5827"},{size:"4898x3265",filename:"IMG_5831"},{size:"4898x3265",filename:"IMG_5842"},{size:"4898x3265",filename:"IMG_5908"},{size:"4898x3265",filename:"IMG_5916"},{size:"5472x3648",filename:"IMG_5945"},{size:"5472x3648",filename:"IMG_5948"},{size:"4898x3265",filename:"IMG_5962"},{size:"4898x3265",filename:"IMG_5963"},{size:"4898x3265",filename:"IMG_5968"},{size:"4898x3265",filename:"IMG_5993"},{size:"4898x3265",filename:"IMG_5996"},{size:"4898x3265",filename:"IMG_5999"},{size:"9138x1618",filename:"IMG_20161106_124840.vr"}]},{name:"debrief",photos:[{size:"4898x3265",filename:"IMG_6037"},{size:"4898x3265",filename:"IMG_6043"},{size:"4898x3265",filename:"IMG_6056"},{size:"4898x3265",filename:"IMG_6086"},{size:"4898x3265",filename:"IMG_6105"}]},{name:"award",photos:[{size:"4898x3265",filename:"IMG_6166"},{size:"4898x3265",filename:"IMG_6175"},{size:"4898x3265",filename:"IMG_6176"},{size:"4898x3265",filename:"IMG_6183"},{size:"4898x3265",filename:"IMG_6193"},{size:"4898x3265",filename:"IMG_6205"},{size:"4898x3265",filename:"IMG_6223"},{size:"4898x3265",filename:"IMG_6232"},{size:"4898x3265",filename:"IMG_6242"},{size:"4898x3265",filename:"IMG_6250"},{size:"4898x3265",filename:"IMG_6254"},{size:"4898x3265",filename:"IMG_6263"},{size:"4898x3265",filename:"IMG_6270"},{size:"4898x3265",filename:"IMG_6271"},{size:"4898x3265",filename:"IMG_6279"},{size:"4898x3265",filename:"IMG_6281"},{size:"4898x3265",filename:"IMG_6282"},{size:"4898x3265",filename:"IMG_6287"},{size:"4898x3265",filename:"IMG_6296"},{size:"4898x3265",filename:"IMG_6297"},{size:"4898x3265",filename:"IMG_6300"},{size:"4898x3265",filename:"IMG_6303"},{size:"4898x3265",filename:"IMG_6314"},{size:"4898x3265",filename:"IMG_6344"},{size:"4898x3265",filename:"IMG_6356"},{size:"4685x3123",filename:"IMG_6375"},{size:"4898x2303",filename:"IMG_6407"}]}];a.forEach(function(e){var i=$(".my-gallery."+e.name),n=e.photos;n.forEach(function(e){var n=$('<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject"><a href="" itemprop="contentUrl" data-size="1024x1024"><img src="" itemprop="thumbnail" alt="Image description" /></a></figure>');n.find("a").attr("href","photos/"+e.filename+".jpg").attr("data-size",e.size),n.find("img").attr("src","photos/"+e.filename+".tn.jpg"),i.append(n)})});var t=function(e){for(var i=function(e){for(var i,n,a,t,s=e.childNodes,l=s.length,r=[],f=0;f<l;f++)i=s[f],1===i.nodeType&&(n=i.children[0],a=n.getAttribute("data-size").split("x"),t={src:n.getAttribute("href"),w:parseInt(a[0],10),h:parseInt(a[1],10)},i.children.length>1&&(t.title=i.children[1].innerHTML),n.children.length>0&&(t.msrc=n.children[0].getAttribute("src")),t.el=i,r.push(t));return r},n=function m(e,i){return e&&(i(e)?e:m(e.parentNode,i))},a=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var i=e.target||e.srcElement,a=n(i,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(a){for(var t,l=a.parentNode,r=a.parentNode.childNodes,f=r.length,o=0,m=0;m<f;m++)if(1===r[m].nodeType){if(r[m]===a){t=o;break}o++}return t>=0&&s(t,l),!1}},t=function(){var e=window.location.hash.substring(1),i={};if(e.length<5)return i;for(var n=e.split("&"),a=0;a<n.length;a++)if(n[a]){var t=n[a].split("=");t.length<2||(i[t[0]]=t[1])}return i.gid&&(i.gid=parseInt(i.gid,10)),i},s=function(e,n,a,t){var s,l,r,f=document.querySelectorAll(".pswp")[0];if(r=i(n),l={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var i=r[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,a=i.getBoundingClientRect();return{x:a.left,y:a.top+n,w:a.width}}},t)if(l.galleryPIDs){for(var o=0;o<r.length;o++)if(r[o].pid==e){l.index=o;break}}else l.index=parseInt(e,10)-1;else l.index=parseInt(e,10);isNaN(l.index)||(a&&(l.showAnimationDuration=0),s=new PhotoSwipe(f,PhotoSwipeUI_Default,r,l),s.init())},l=document.querySelectorAll(e),r=0,f=l.length;r<f;r++)l[r].setAttribute("data-pswp-uid",r+1),l[r].onclick=a;var o=t();o.pid&&o.gid&&s(o.pid,l[o.gid-1],!0,!0)};t(".my-gallery")}),require.register("___globals___",function(e,i,n){})}(),require("___globals___");