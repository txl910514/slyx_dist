var index={ready_init:function(){$(".hoop-box").each(function(i,n){var t=$(n),o=t.width();t.css({height:o+"px"})}),$(".summing-head").each(function(i,n){var t=$(n),o=t.width(),e=58*o/660;t.css({height:e+"px"})});new Swiper(".swiper-container",{direction:"vertical",loop:!1})},input_focus:function(i){setTimeout(function(){var n=i.parent(),t=n.position().top,o=n.closest(".apply-form-slide");o.scrollTop(t)},500)}};$(function(){index.ready_init()}).on("click",".input-line input",function(i){index.input_focus($(this))});