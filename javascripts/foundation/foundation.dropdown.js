!function(t,e,n){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"4.3.2",settings:{activeClass:"open",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,n,i){return this.scope=e||this.scope,Foundation.inherit(this,"throttle scrollLeft data_options"),"object"==typeof n&&t.extend(!0,this.settings,n),"string"!=typeof n?(this.settings.init||this.events(),this.settings.init):this[n].call(this,i)},events:function(){var i=this;t(this.scope).on("click.fndtn.dropdown","[data-dropdown]",function(e){var n=t.extend({},i.settings,i.data_options(t(this)));e.preventDefault(),n.is_hover||i.toggle(t(this))}).on("mouseenter","[data-dropdown]",function(){var e=t.extend({},i.settings,i.data_options(t(this)));e.is_hover&&i.toggle(t(this))}).on("mouseleave","[data-dropdown-content]",function(){var e=t('[data-dropdown="'+t(this).attr("id")+'"]'),n=t.extend({},i.settings,i.data_options(e));n.is_hover&&i.close.call(i,t(this))}).on("opened.fndtn.dropdown","[data-dropdown-content]",this.settings.opened).on("closed.fndtn.dropdown","[data-dropdown-content]",this.settings.closed),t(n).on("click.fndtn.dropdown",function(e){var n=t(e.target).closest("[data-dropdown-content]");if(!t(e.target).data("dropdown")&&!t(e.target).parent().data("dropdown"))return!t(e.target).data("revealId")&&n.length>0&&(t(e.target).is("[data-dropdown-content]")||t.contains(n.first()[0],e.target))?(e.stopPropagation(),void 0):(i.close.call(i,t("[data-dropdown-content]")),void 0)}),t(e).on("resize.fndtn.dropdown",i.throttle(function(){i.resize.call(i)},50)).trigger("resize"),this.settings.init=!0},close:function(e){var n=this;e.each(function(){t(this).hasClass(n.settings.activeClass)&&(t(this).css(Foundation.rtl?"right":"left","-99999px").removeClass(n.settings.activeClass),t(this).trigger("closed"))})},open:function(t,e){this.css(t.addClass(this.settings.activeClass),e),t.trigger("opened")},toggle:function(e){var n=t("#"+e.data("dropdown"));0!==n.length&&(this.close.call(this,t("[data-dropdown-content]").not(n)),n.hasClass(this.settings.activeClass)?this.close.call(this,n):(this.close.call(this,t("[data-dropdown-content]")),this.open.call(this,n,e)))},resize:function(){var e=t("[data-dropdown-content].open"),n=t("[data-dropdown='"+e.attr("id")+"']");e.length&&n.length&&this.css(e,n)},css:function(n,i){var r=n.offsetParent(),o=i.offset();if(o.top-=r.offset().top,o.left-=r.offset().left,this.small())n.css({position:"absolute",width:"95%","max-width":"none",top:o.top+this.outerHeight(i)}),n.css(Foundation.rtl?"right":"left","2.5%");else{if(!Foundation.rtl&&t(e).width()>this.outerWidth(n)+i.offset().left&&!this.data_options(i).align_right){var a=o.left;n.hasClass("right")&&n.removeClass("right")}else{n.hasClass("right")||n.addClass("right");var a=o.left-(this.outerWidth(n)-this.outerWidth(i))}n.attr("style","").css({position:"absolute",top:o.top+this.outerHeight(i),left:a})}return n},small:function(){return t(e).width()<768||t("html").hasClass("lt-ie9")},off:function(){t(this.scope).off(".fndtn.dropdown"),t("html, body").off(".fndtn.dropdown"),t(e).off(".fndtn.dropdown"),t("[data-dropdown-content]").off(".fndtn.dropdown"),this.settings.init=!1},reflow:function(){}}}(Foundation.zj,this,this.document);