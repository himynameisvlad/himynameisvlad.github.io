		$(document).ready(function(){
			$(".blog ul li").click(function(){
				var curWidth = $(this).width();
				var curHeight = $(this).height();
				if($(window).width()>=400){
				if(curWidth==150){
					$(this).animate({width:"310px", height:"310px"},1000).add(".blog ul li").not(this).animate({width:"0px",height:"0px"},1000).end().end().children("p").show().end().add(".blog ul li span").not(this).hide()
				}else if(curWidth==310){
					$(this).animate({width:"150px", height:"150px"},1000).add(".blog ul li").not(this).animate({width:"150px",height:"150px"},1000).add(".blog ul li span").show();
					$(this).children("p").hide();
				}
				}
			}
			)
			$("#about-cl").on("click",function(){
				$(".about").stop().animate({opacity:"1"},1000).show()
			});
			$("#skills").on("click",function(){
				$(".about").stop().animate({opacity:"0"},1000).hide()
			})
		})
