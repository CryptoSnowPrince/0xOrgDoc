!function(t,e){var r=function(){document.querySelectorAll(".shoutout-embed").forEach((function(t,e){var r=t.getAttribute("data-wall"),a=r.replace(/\s/g,"-");if(!t.getAttribute("data-loaded")){t.setAttribute("data-loaded",!0);var o=document.createElement("IFRAME"),i="shoutout-iframe-".concat(a,"-").concat(e),c="".concat("https://platform.shoutout.so","/").concat(r);o.setAttribute("src",c),o.setAttribute("frameborder","0"),o.setAttribute("scrolling","yes"),o.setAttribute("id",i),o.setAttribute("width","100%"),t.appendChild(o),iFrameResize({log:!1},"#".concat(i))}}))},a=document.getElementById("shoutout-iframe-resizer");if(null!==a&&a.getAttribute("data-loaded"))r();else{var o=!1,i=(document.currentScript,t.createElement("script"));i.setAttribute("id","shoutout-iframe-resizer"),i.src="//embed.shoutout.so/iframeResizer.min.js",i.onload=i.onreadystatechange=function(){var t=this.readyState;if(!(o||t&&"complete"!=t&&"loaded"!=t)){o=!0,i.setAttribute("data-loaded",!0);try{r()}catch(t){}}};var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(i,c)}}(document);
//# sourceMappingURL=embed.js.map
