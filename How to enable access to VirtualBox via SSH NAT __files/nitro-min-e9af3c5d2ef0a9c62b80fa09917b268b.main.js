var gaeMapper=function(){if(typeof ga_options!=="undefined"){function e(e){var a="";if(e.type==="class"){a+="."}else if(e.type==="id"){a+="#"}a+=e.name;return a}var a=[];var t=ga_options.click_elements;for(var n=0;n<t.length;n++){var r=t[n];newClickElement={};newClickElement.data={select:e(r),category:r.category,action:r.action,label:r.label,bounce:parseInt(r.non_interaction),evalue:r.value,link_click_delay:parseInt(ga_options.link_clicks_delay),universal:parseInt(ga_options.universal)};newClickElement.selector=newClickElement.data.select;a.push(newClickElement)}var o=ga_options.scroll_elements;var l=[];o.forEach(function(a){l.push({select:e(a),category:a.category,action:a.action,label:a.label,bounce:parseInt(a.non_interaction),evalue:a.value})});return{clickElementsFromDB:a,scrollElementsFromDB:l,advancedMode:ga_options.advanced,link_clicks_delay:ga_options.link_clicks_delay,snippet_type:ga_options.snippet_type,scriptDebugMode:ga_options.script_debug_mode}}}();gaEventsMain=function(e){"use strict";var a;e(document).ready(function(){t()});function t(){gaeMapper.clickElementsFromDB.forEach(function(a){e("body").on("click",a.selector,a.data,o)});e(window).on("scroll",n)}function n(){var a=e(window).height();var t=e(document).scrollTop();for(var n=0;n<gaeMapper.scrollElementsFromDB.length;n++){if(!gaeMapper.scrollElementsFromDB[n].sent){var o=e(gaeMapper.scrollElementsFromDB[n].select);gaeMapper.scrollElementsFromDB[n].offset=o.offset();if(gaeMapper.scrollElementsFromDB[n].offset&&t+a>=gaeMapper.scrollElementsFromDB[n].offset.top+o.height()){r(gaeMapper.scrollElementsFromDB[n].category,gaeMapper.scrollElementsFromDB[n].action,gaeMapper.scrollElementsFromDB[n].label,gaeMapper.scrollElementsFromDB[n].bounce,gaeMapper.scrollElementsFromDB[n].evalue);gaeMapper.scrollElementsFromDB[n].sent=true}}}}var r=function(e,t,n,r,o){if(typeof a==="undefined"){if(typeof ga!=="undefined"){a=ga}else if(typeof _gaq!=="undefined"){a=_gaq}else if(typeof __gaTracker==="function"){a=__gaTracker}else if(typeof gaplusu==="function"){a=gaplusu}else if(gaeMapper.snippet_type!=="gtm"&&typeof dataLayer==="undefined"){return}}var l=!e?"uncategorized":e;e=l;var i=!t?"":t;t=i;var c=!n?"":n;n=c;var s=!o?"":o;var p=!r?false:r;if(gaeMapper.snippet_type=="gtm"||typeof dataLayer!=="undefined"&&typeof gtag==="undefined"){dataLayer.push({event:"WPGAE",eventCategory:e,eventAction:t,eventLabel:n,eventValue:s,nonInteraction:p})}else if(gaeMapper.snippet_type=="gst"||typeof gtag!="undefined"){gtag("event",t,{event_category:e,event_label:n,value:s,non_interaction:p})}else if(gaeMapper.snippet_type=="universal"||typeof ga!="undefined"||typeof __gaTracker==="function"){if(s){a("send","event",e,t,n,s,{nonInteraction:p})}else{a("send","event",e,t,n,{nonInteraction:p})}}else if(gaeMapper.snippet_type=="legacy"||typeof _gaq!="undefined"){a.push(["_trackEvent",e,t,n,s,p])}};var o=function(e){r(e.data.category,e.data.action,e.data.label,e.data.bounce,e.data.evalue,this);if(typeof e.data.link_click_delay!=="undefined"&&e.data.link_click_delay>0&&typeof e.target.href!=="undefined"&&e.target.nodeName=="A"){e.preventDefault();var a=false;if(e.target.target){if(e.target.target.trim()==="_blank"){a=true}}var t;if(a){t=window.open("","_blank")}var n=l(e);if(typeof n!=="undefined"&&n!==""){window.location.hash=n}else{setTimeout(function(){if(a){t.location.href=e.target.href}else{window.location=e.target.href}},parseInt(gaeMapper.link_clicks_delay))}}};var l=function(a){var t="";if(a.target.tagName!=="A"){t=e(a.target).parents("a").attr("href")}else{t=e(a.target).attr("href")}if(t.indexOf("#")===0){return t}return""}}(jQuery);