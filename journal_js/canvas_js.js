var canvasMap=function(){var t=this;t.init=function(e){if(null===e)return!1;t.ele=$(e);var n=t.ele.parent(),i=n.width(),o=n.height();t.ele.attr({width:i,height:o}),t.context=e.getContext("2d")},t.horizontal_line=function(e){this.default_option={strokeStyle:"#000",lineWidth:1,lineCap:"square",data:[]},this.new_option=$.extend({},this.default_option,e),t.context.strokeStyle=this.new_option.strokeStyle,t.context.lineWidth=this.new_option.lineWidth,t.context.lineCap=this.new_option.lineCap,_.each(this.new_option.data,function(e){t.context.beginPath(),t.context.moveTo(e.start.x,e.start.y),t.context.lineTo(e.end.x,e.end.y),t.context.stroke(),t.context.closePath()})}};