function hookTemplate(){var r=DUOSHUO.templates.post;DUOSHUO.templates.post=function(o,e){var e=r(o,e),a=o.post.agent,s="";return(o=o.post.author.user_id)&&o==CONFIG.duoshuo.userId&&(s='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"),a&&/^Mozilla/.test(a)?e.replace(/<\/div><p>/,s+getAgentInfo(a)+"</div><p>"):e}}function getAgentInfo(o){$.ua.set(o);var e,o="Unknown",a=$.ua,s=(s=null!==(r=window.navigator.userAgent).match(/iPad/i),n=new RegExp(["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"].join("|"),"i"),!s&&r.match(n)?"<br><br>":'<span class="duoshuo-ua-separator"></span>'),r=a.os.name||o,n=a.os.version||o,i=a.browser.name||o,a=a.browser.version||o,t=(o={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}}).os[r.toLowerCase()],o=o.browser[(e=i.toLowerCase()).match(/WeChat/i)?"wechat":e.match(/QQBrowser/i)?"qq":e];return s+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+r.toLowerCase()+'"><i class="fa fa-'+t+'"></i>'+r+" "+n+"</span>"+s+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+i.toLowerCase()+'"><i class="fa fa-'+o+'"></i>'+i+" "+a+"</span>"}"undefined"!=typeof DUOSHUO?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;