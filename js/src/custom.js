// build time:Wed Jun 30 2021 18:41:21 GMT+0800 (GMT+08:00)
function createCopyBtns(){var t=$("figure table");if(t.length>0){function o(t){$imgOK=$("#copyBtn").find("#imgSuccess");if($imgOK.css("display")=="none"){$imgOK.css({opacity:0,display:"block"});$imgOK.animate({opacity:1},1e3);setTimeout(function(){$imgOK.animate({opacity:0},2e3)},2e3);setTimeout(function(){$imgOK.css("display","none")},4e3)}}$(".post-body").before('<div id="copyBtn" style="opacity: 0; position: absolute;top:0px;display: none;line-height: 1; font-size:1.5em"><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');var n=new Clipboard("#copyBtn",{target:function(){return document.querySelector("[copyFlag]")},isSupported:function(){return document.querySelector("[copyFlag]")}});n.on("success",function(t){t.clearSelection();o(t)});n.on("error",function(t){console.error("Action:",t.action);console.error("Trigger:",t.trigger)});$("#copyBtn").hover(function(){$(this).stop();$(this).css("opacity",1)},function(){$(this).animate({opacity:0},2e3)})}}$("figure").hover(function(){$("[copyFlag]").removeAttr("copyFlag");$(this).find(".code").attr("copyFlag",1);$copyBtn=$("#copyBtn");if($copyBtn.lenght!=0){$copyBtn.stop();$copyBtn.css("opacity",.8);$copyBtn.css("display","block");$copyBtn.css("top",parseInt($copyBtn.css("top"))+$(this).offset().top-$copyBtn.offset().top+3);$copyBtn.css("left",-$copyBtn.width()-3)}},function(){$("#copyBtn").animate({opacity:0},2e3)});$(document).ready(function(){createCopyBtns()});
//rebuild by neat 