//..........阻止浏览器默认选中文字图片
document.onmousedown=function(e){
	e.preventDefault()
}
//svg线条宽高设置
var svgW=parseFloat($("svg").css("width"));
var svgH=parseFloat($("svg").css("height"));
$("svg").html('<path class="path" d="M0 '+svgH+' L0 0 L'+svgW+' 0 L'+svgW+' '+svgH+' Z" stroke="green" stroke-width="5" fill="none" />');
//..........................................................
var imgArr=["img/1_h.jpg","img/2_h.jpg","img/3_h.jpg","img/4_h.jpg","img/5_h.jpg","img/6_h.jpg","img/7_h.jpg","img/8_h.jpg","img/9_h.jpg","img/10_h.jpg","img/11_h.jpg","img/12_h.jpg","img/13_h.jpg"];
var num=-1;
var animation=false;
var clientW=document.documentElement.clientWidth;//浏览器视图宽
var clientH=document.documentElement.clientHeight;//浏览器视图高
var teyeWrap=parseFloat($(".teye-wrapper-connected").css("width"));
var teyeWrapL=(clientW-teyeWrap)/2-(teyeWrap/20);
var teyeL=(clientW-599)/2;
var oneL=(clientW-599)/2+80;
var enterNewPage=false;
$(".skill-img").css("left",teyeL);
$(".teyetwo").css("left",teyeL);
$(".teyeone").css("left",oneL);
$(".teye-wrapper-connected").css("left",teyeWrapL);
var explodeWrapper=$(".explode-wrapper");
var explodeText=$(".explode .text");
window.onresize=function(){
	clientW=document.documentElement.clientWidth;
	if(clientW<1024){
		explodeWrapper.css("transition","none")
		explodeWrapper.css("transform","scale(0.5)")
	}else{
		explodeWrapper.css("transition","none")
		explodeWrapper.css("transform","scale(1)")
	}
	teyeWrap=parseFloat($(".teye-wrapper-connected").css("width"));
	teyeWrapL=(clientW-teyeWrap)/2-(teyeWrap/20);
	$(".teye-wrapper-connected").css("left",teyeWrapL);
	teyeL=(clientW-599)/2;
	$(".skill-img").css("left",teyeL);
	$(".teyetwo").css("left",teyeL);
	oneL=(clientW-599)/2+80
	$(".teyeone").css("left",oneL);
	svgW=parseFloat($("svg").css("width"));
	svgH=parseFloat($("svg").css("height"));
	if(num==-1){
		$("svg").html('<path class="path" d="M0 '+svgH+' L0 0 L'+svgW+' 0 L'+svgW+' '+svgH+' Z" stroke="green" stroke-width="5" fill="none" />')
	}else{
		$("svg").html('<path d="M0 '+svgH+' L0 0 L'+svgW+' 0 L'+svgW+' '+svgH+' Z" stroke="green" stroke-width="5" fill="none" />')
	}
	
}



var textDiv=$(".text div");
var oneEyeLeft=$(".one-eye-left");
var oneEyeRight=$(".one-eye-right");
var toggleMenu=$(".toggle-menu");
var toggleMenuSpan=$(".toggle-menu").find("span");
var oneEye=$(".one-eye");
var teyePink=$(".teye-wrapper-pink");
var teyeBlue=$(".teye-wrapper-blue");
var connected=$(".connected");
var cityConnectedDot=$(".city-connected .dot");
var PwrapperEyeLeft=$(".teye-wrapper-pink .wrapper-eye.left");
var PwrapperEyeRight=$(".teye-wrapper-pink .wrapper-eye.right");
var BwrapperEyeLeft=$(".teye-wrapper-blue .wrapper-eye.left");
var BwrapperEyeRight=$(".teye-wrapper-blue .wrapper-eye.right");

//num=4
//$(".one").css("bottom",676)
document.onmousewheel=function(e){
	if(textDiv.is(":animated")){
		return
	};
	if(animation){
		return
	};
	if($("svg").is(":animated")){
		return
	};
	if(connected.is(":animated")){
		return
	};
	if($(".teyeone").is(":animated")){
		return
	};
	if(oneEye.is(":animated")){
		return
	};
	if($(".city-connected").is(":animated")){
		return
	};
	if($(".image-wrapper .teye-head").is(":animated")){
		return
	};
	
//..........................下滑..................	
	if(e.wheelDelta<=0){
		if(num==8){
			return;
		}
		num++;
		if(num>=0&&num<5){
			$("svg").show();
		}
		
		$("path").css("animation-play-state","paused")
		setTimeout(function(){
			$("path").css("animation-play-state","running")
		},800)
		if(num==0){
			
			$(".one").animate({
				bottom:676
			},2000);
			$(".oneText").animate({
				opacity:0
			},500);
			
			$(".onoff").animate({
				right:8
			},2000)
			$(".onoff span").css("border-color","rgb(147, 90, 36)")
			$(".onoff .mouth").css("top",40);
			toggleMenu.css("border-color","rgb(147, 90, 36)");
			toggleMenuSpan.css("border-color","rgb(147, 90, 36)");
			textDiv.eq(0).animate({
				opacity:1,
				top:"10%"
			},2300)
		}
		
		if(num==1){
			oneEyeLeft.css("transform","rotate(90deg)");
			oneEyeRight.css("transform","rotate(-90deg)");
		}
		
		if(num==2){
			oneEyeLeft.css("transform","rotate(0deg)");
		}
		
		if(num==3){
			oneEyeLeft.css("transform","rotate(20deg)");
			oneEyeRight.css("transform","rotate(-20deg)");
		}
		
		if(num==4){
			oneEyeLeft.css("transform","rotate(-20deg)");
			oneEyeRight.css("transform","rotate(20deg)");
		}
		if(num>0&&num<5){
			textDiv.eq(num-1).animate({
				opacity:0,
				top:"0"
			},500,function(){
				textDiv.eq(num-1).hide();
				textDiv.eq(num).show();
				textDiv.eq(num).animate({
					opacity:1,
					top:"10%"
				},800)
			})	
		}
		
		if(num==5){
			var timerOne=null;
			var timerTwo=null;
			var timerThree1=null;
			var timerThree2=null;
			var timerFour=null;
			var skillPage=0;
			
			$("svg").animate({
				"opacity":"0"
			},500)
			$(".one").css("z-index","23")
			textDiv.eq(4).delay(500).animate({
				opacity:0,
			},800)
			oneEyeLeft.css("transform","rotate(90deg)");
			oneEyeRight.css("transform","rotate(-90deg)");
			oneEye.css("bottom",-50);
			oneEye.css("transform","scale(0.5)");
			$(".skills").css("z-index","22");
			$(".skills").css("transform","scale(1)");
			$(".skills").css("opacity",1);
			
	//...................四个技能点击事件.................................
	//          第一张技能函数
			var submenue=$(".submenu");
			var submenueA=$(".submenu a");
			var motionDotsSpan=$(".motion .dots span");
			var sound=$(".sound");
			var battery=$(".battery");
			var motion=$(".motion");
			var voice=$(".voice");
			var batteryFill=$(".battery-fill");
			var batteryImg=$(".batteryImg");
			var batteryText=$(".battery .text");
			function sameAnimation(n){
				skillPage=n;
				enterNewPage=true;
				$("section").hide();
				submenueA.removeClass("active");
				submenueA.eq(n-1).addClass("active");
				submenue.delay(200).animate({
					"opacity":"1"
				},1000)
			}
			function skillOnePage(){	
				sameAnimation(1);		
				battery.show();								
				batteryFill.delay(200).animate({
					"width":"100%"
				},1000)
				batteryImg.delay(200).animate({
					"top":"4",
					"opacity":"1"
				},1000)
				batteryText.delay(200).animate({
					"top":"0",
					"opacity":"1"
				},1000)
				$(".wifi-dot").delay(700).animate({
						opacity:"1"
					},500)
							
				timerOne=setInterval(function(){
					//爱心
					$(".ico-heart").css("transform","scale(1.2)");
					setTimeout(function(){
						$(".ico-heart").css("transform","scale(1)");
					},600)
					$(".wifi-small").animate({
						top:"0",
						opacity:"1"
					},1000,function(){
						$(".wifi-small").css("top",15);
						$(".wifi-small").css("opacity",0);
					})
					//wifi信号
					$(".wifi-middle").delay(300).animate({
						top:"0",
						opacity:"1"
					},700,function(){
						$(".wifi-middle").css("top",15);
						$(".wifi-middle").css("opacity",0);
					})
					
					$(".wifi-big").delay(500).animate({
						top:"0",
						opacity:"1"
					},500,function(){
						$(".wifi-big").css("top",15);
						$(".wifi-big").css("opacity",0);
					})
				},1200)
			}
	//  第二张技能函数
			function skillTwoPage(){
				sameAnimation(2);
				motion.show();
				
				$(".motion .content-wrapper").delay(200).animate({
					"opacity":"1"
				},500)
				$(".ray-distance").delay(200).animate({
					"opacity":"1"
				},500)
				$(".ray-end").delay(200).animate({
					"opacity":"1"
				},500)
				$(".motionImg").delay(200).animate({
					"left":"0",
					"opacity":"1"
				},1000)
				$(".motion .text").delay(200).animate({
					"top":"142",
					"opacity":"1"
				},1000)	
				$(".ray-left").css("left",600);
				$(".ray-left").eq(0).css("top",47);
				$(".ray-left").eq(1).css("top",-3);
				$(".ray-right").delay(1000).animate({
					left:"600",
					top:"15",
					opacity:"1"
				},2000,function(){
					$(".ray-right").css("top",133);
					$(".ray-right").css("left",-250);
					$(".ray-right").css("opacity",0);
					$(".ray-right").animate({
						left:"185",
						top:"76",
						opacity:"1"
					},1500)
				})
				$(".ray-left").css("opacity",1)
				$(".ray-left").eq(0).delay(2200).animate({
					left:"0",
					top:"130",
					opacity:"0"
				},1500)
				$(".ray-left").eq(1).delay(2200).animate({
					left:"0",
					top:"80",
					opacity:"0"
				},1500)
				function motionDotPlay(){
					setTimeout(function(){
						motionDotsSpan.eq(0).css("opacity","0")
					},1200)
					setTimeout(function(){
						motionDotsSpan.eq(1).css("opacity","0")
					},1300)
					setTimeout(function(){
						motionDotsSpan.eq(2).css("opacity","0")
					},1400)
					setTimeout(function(){
						motionDotsSpan.eq(0).css("opacity","1")
					},1800)
					setTimeout(function(){
						motionDotsSpan.eq(1).css("opacity","1")
					},1900)
					setTimeout(function(){
						motionDotsSpan.eq(2).css("opacity","1")
					},2000)	
				}
				motionDotPlay();
				timerTwo=setInterval(motionDotPlay,2000)
			}
	//    第三张技能函数	
			function skillThreePage(){
				sameAnimation(3);
				sound.show();
				$(".sound .content-wrapper").delay(200).animate({
					"opacity":"1"
				},500)
				$(".soundImg").delay(200).animate({
					"top":"0",
					"opacity":"1"
				},1000)
				$(".sound .text").delay(200).animate({
					"top":"0",
					"opacity":"1"
				},1000)	
				$(".sound .icon-animation").css("left",-75)
				$(".sound .icon-animation").animate({
					"opacity":"1",
					"left":"0"
				},1000)
				$(".note-left").delay(200).animate({
					"left":"10%",
					"opacity":"1"
				},1000)
				$(".note-right").delay(200).animate({
					"right":"10%",
					"opacity":"1"
				},1000)
				function noteplay(){
					$(".note-left .note-small").animate({
						left:"100",
						opacity:"1"
					},1000,function(){
						$(".note-left .note-small").css("left",150);
						$(".note-left .note-small").css("opacity",0);
					})
					$(".note-right .note-small").animate({
						left:"47",
						opacity:"1"
					},1000,function(){
						$(".note-right .note-small").css("left",6);
						$(".note-right .note-small").css("opacity",0);
					})
					
					$(".note-left .note-middle").delay(300).animate({
						left:"50",
						opacity:"1"
					},700,function(){
						$(".note-left .note-middle").css("left",100);
						$(".note-left .note-middle").css("opacity",0);
					})
					$(".note-right .note-middle").delay(300).animate({
						left:"73",
						opacity:"1"
					},700,function(){
						$(".note-right .note-middle").css("left",23);
						$(".note-right .note-middle").css("opacity",0);
					})
					
					$(".note-left .note-big").delay(500).animate({
						left:"0",
						opacity:"1"
					},500,function(){
						$(".note-left .note-big").css("left",50);
						$(".note-left .note-big").css("opacity",0);
					})
					$(".note-right .note-big").delay(500).animate({
						left:"108",
						opacity:"1"
					},500,function(){
						$(".note-right .note-big").css("left",58);
						$(".note-right .note-big").css("opacity",0);
					})
				}
				noteplay();
				timerThree1=setInterval(noteplay,1200)
	//
				function soundplay(){
					$(".ico-sound-big span").eq(1).animate({
						left:"76",
						opacity:"1"
					},1000,function(){
						$(".ico-sound-big span").eq(1).css("left",45)
						$(".ico-sound-big span").eq(1).css("opacity",0)
					})
					$(".ico-sound-big span").eq(0).delay(400).animate({
						left:"60",
						opacity:"1"
					},600,function(){
						$(".ico-sound-big span").eq(0).css("left",45)
						$(".ico-sound-big span").eq(0).css("opacity",0)
					})
				}
				setTimeout(function(){
					timerThree2=setInterval(soundplay,1200)
				},600)
			}
	//    第四张技能函数
			function skillFourPage(){
				sameAnimation(4);
				voice.show();
				$(".voice .content-wrapper").delay(200).animate({
					"opacity":"1"
				},500)
				$(".voiceImg").delay(200).animate({
					"top":"0",
					"opacity":"1"
				},1000)
				$(".voice .text").delay(200).animate({
					"top":"0",
					"opacity":"1"
				},1000)	
				
				timerFour=setInterval(function(){
					$(".ico-voice-circle").eq(0).css("transition","1s")
					$(".ico-voice-circle").eq(1).css("transition","1.8s")
					$(".ico-voice-circle").css("transform","scale(1.8)")
					$(".ico-voice-circle").css("opacity","0")
					setTimeout(function(){
						$(".ico-voice-circle").css("transition","none")
						$(".ico-voice-circle").css("transform","scale(1)")
						$(".ico-voice-circle").css("opacity","1")
					},1800)
				},1850)
			}
			//第一张
			$(".circle1").on("click",function(e){
				skillOnePage();
				e.stopPropagation();
			})
			//第二张
			$(".circle2").on("click",function(e){
				skillTwoPage();
				e.stopPropagation();
			})
			//第三张
			$(".circle3").on("click",function(e){
				skillThreePage();
				e.stopPropagation();
			})
			//第四张
			$(".circle4").on("click",function(e){
				skillFourPage();
				e.stopPropagation();
			})
	//..........................点击关闭按钮.......................
			function skillClose(e){
	//..........................点击关闭按钮第一页.......................			
				if(skillPage==1){
					clearInterval(timerOne)
					batteryFill.animate({
						"width":"0%"
					},1000)
					$(".wifi-dot").animate({
						"opacity":"0"
					},1000)
					batteryImg.animate({
						"top":"500",
						"opacity":"0"
					},1000)
					batteryText.animate({
						"top":"200",
						"opacity":"0"
					},1000)
				}
	//..................................关闭当前第二页..........................			
				if(skillPage==2){
					clearInterval(timerTwo);
					$(".ray-right").finish()
					$(".ray-left").finish()
					$(".motion .text").animate({
						"top":"342",
						"opacity":"0"
					},1000)
					$(".motionImg").animate({
						"left":"-1000",
						"opacity":"0"
					},1000)
					$(".motion .content-wrapper").animate({
						"opacity":"0"
					},500)
					$(".ray-distance").animate({
						"opacity":"0"
					},500)
					$(".ray-end").animate({
						"opacity":"0"
					},500)
					$(".ray-left").css("left",600);
					$(".ray-left").eq(0).css("top",47);
					$(".ray-left").eq(1).css("top",-3);
					$(".ray-right").css("top",133);
					$(".ray-right").css("left",-250);
					$(".ray-right").css("opacity",0);		
				}
	//..................................关闭当前第三页..........................			
				if(skillPage==3){
					clearInterval(timerThree1);
					clearInterval(timerThree2);
					$(".sound .text").animate({
						"top":"200",
						"opacity":"0"
					},1000)
					$(".soundImg").animate({
						"top":"-400",
						"opacity":"0"
					},1000)
					$(".sound .content-wrapper").animate({
						"opacity":"0"
					},500)
					$(".note-left").animate({
						"left":"30%",
						"opacity":"0"
					},1000)
					$(".note-right").animate({
						"right":"30%",
						"opacity":"0"
					},1000)
					$(".sound .icon-animation").animate({
						"opacity":"0"
					},1000)
				}
	//..................................关闭当前第四页..........................			
				if(skillPage==4){
					clearInterval(timerFour);
					$(".voice .text").animate({
						"top":"-100",
						"opacity":"0"
					},1000)
					$(".voiceImg").animate({
						"top":"-100%",
						"opacity":"0"
					},1000)
					$(".voice .content-wrapper").animate({
						"opacity":"0"
					},500)
				}						
			}
			
			$(".ico-close-small").on("click",function(e){
				skillClose();
				submenue.animate({
					"opacity":"0"
				},1000,function(){
					$("section").show();
					battery.hide();
					motion.hide();
					sound.hide();
					voice.hide();
				})
				enterNewPage=false;
				e.stopPropagation();
				
			})
			
	//.....................点击小图标按钮....................		
			$(".ico-battery-small").on("click",function(){
				if(skillPage==1){
					return
				}
				skillClose();
				skillOnePage();	
			})
			$(".ico-motion-small").on("click",function(){
				if(skillPage==2){
					return
				}
				skillClose();
				skillTwoPage();	
			})
			$(".ico-sound-small").on("click",function(){
				if(skillPage==3){
					return
				}
				skillClose();
				skillThreePage();	
			})
			$(".ico-voice-small").on("click",function(){
				if(skillPage==4){
					return
				}
				skillClose();
				skillFourPage();	
			})
					
			
		}
		
		
		if(num==6){
			$(".explode").css("z-index","25");
			clientW=document.documentElement.clientWidth;
			explodeWrapper.css("transition","1.3s")
			setTimeout(function(){
				explodeText.css("opacity",1)
				explodeText.css("margin-top",0)
				if(clientW<1024){
					explodeWrapper.css("transform","scale(0.5)")
				}else{
					explodeWrapper.css("transform","scale(1)")
				}
			},500)
			
			
			$(".skills .text").hide();
			$(".ico").animate({
				opacity:0
			},500)
			$(".teyetwo").animate({
				bottom:"550"
			},800,function(){
				$(".skills").hide();
			});
			$(".teyeone").animate({
				bottom:"-550"
			},800);
			oneEye.css("transition","0s")
			oneEye.animate({
				bottom:"550"
			},800,function(){
				oneEye.css("transition","1.3s")
			})
			$(".skill-img").css("background","white");
			
			$(document).on("mousemove",function(e){
				clientW=document.documentElement.clientWidth;
				clientH=document.documentElement.clientHeight;
				//最多左右移动96px；页面上每移动clientW/192 li标签就移动1px。在中间clientW/2处li标签的位移为零。
				//最多上下移动47px；页面上每移动clientH/94 li标签就移动1px。在中间clientW/2处li标签的位移为零。
				var liX=(e.clientX-clientW/2)/(clientW/192)+"px";
				var liY=(e.clientY-clientH/2)/(clientH/94)+"px";
				$("#scene li").eq(9).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/124)+"px";
				liY=(e.clientY-clientH/2)/(clientH/60)+"px";
				$("#scene li").eq(5).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/110)+"px";
				liY=(e.clientY-clientH/2)/(clientH/54)+"px";
				$("#scene li").eq(8).css("transform","translate3d("+liX+","+liY+",0)")
				liX=(e.clientX-clientW/2)/(clientW/82)+"px";
				liY=(e.clientY-clientH/2)/(clientH/40)+"px";
				$("#scene li").eq(7).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/110)+"px";
				liY=(e.clientY-clientH/2)/(clientH/54)+"px";
				$("#scene li").eq(6).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/136)+"px";
				liY=(e.clientY-clientH/2)/(clientH/68)+"px";
				$("#scene li").eq(4).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/28)+"px";
				liY=(e.clientY-clientH/2)/(clientH/14)+"px";
				$("#scene li").eq(3).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/22)+"px";
				liY=(e.clientY-clientH/2)/(clientH/11)+"px";
				$("#scene li").eq(2).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/28)+"px";
				liY=(e.clientY-clientH/2)/(clientH/14)+"px";
				$("#scene li").eq(1).css("transform","translate3d("+liX+","+liY+",0)");
				liX=(e.clientX-clientW/2)/(clientW/136)+"px";
				liY=(e.clientY-clientH/2)/(clientH/68)+"px";
				$("#scene li").eq(0).css("transform","translate3d("+liX+","+liY+",0)");
			})
		}
		
		
		
		if(num==7){
			var timer1=null;
			var timer2=null;
			var onoff1=true;
			var onoff2=false;
			var cut=true;
			$(".connected .text").delay(1300).animate({
				opacity:"1"
			},400)
			$(".city-connected").delay(1300).animate({
				opacity:"1"
			},400)
			connected.css("z-index","26")
			explodeText.css("opacity","0")
			explodeWrapper.css("transform","scale(0)")
			teyeBlue.css("left",187);
			$(".image-wrapper .teye-head").animate({
				top:"24"
			},1300)
			$(".teye-wrapper-blue .image-wrapper img").animate({
				left:"0"
			},1300)
			$(".image-wrapper .teye-foot").animate({
				top:"107"
			},1300)
			teyeBlue.delay(1300).animate({
				left:"37"
			},400)
			teyePink.delay(1300).animate({
				left:"337",
				opacity:"0.5"
			},400)
//...................................................十个小点从左向右闪烁
			function dotPlayL(){			
				cityConnectedDot.eq(0).css("transform","scale(0)");
				setTimeout(function(){
					cityConnectedDot.eq(1).css("transform","scale(0)");
				},150)
				setTimeout(function(){
					cityConnectedDot.eq(2).css("transform","scale(0)");
				},300)
				setTimeout(function(){
					cityConnectedDot.eq(3).css("transform","scale(0)");
				},450)
				setTimeout(function(){
					cityConnectedDot.eq(4).css("transform","scale(0)");
				},600)
				setTimeout(function(){
					cityConnectedDot.eq(5).css("transform","scale(0)");
				},750)
				setTimeout(function(){
					cityConnectedDot.eq(0).css("transform","scale(1)")
					cityConnectedDot.eq(6).css("transform","scale(0)");
				},900)
				setTimeout(function(){
					cityConnectedDot.eq(1).css("transform","scale(1)")
					cityConnectedDot.eq(7).css("transform","scale(0)");
				},1050)
				setTimeout(function(){
					cityConnectedDot.eq(2).css("transform","scale(1)")
					cityConnectedDot.eq(8).css("transform","scale(0)");
				},1200)
				setTimeout(function(){
					cityConnectedDot.eq(3).css("transform","scale(1)")
					cityConnectedDot.eq(9).css("transform","scale(0)");
				},1350)
				setTimeout(function(){
					cityConnectedDot.eq(4).css("transform","scale(1)")
				},1500)
				setTimeout(function(){
					cityConnectedDot.eq(5).css("transform","scale(1)")
				},1650)
				setTimeout(function(){
					cityConnectedDot.eq(6).css("transform","scale(1)")
				},1800)
				setTimeout(function(){
					cityConnectedDot.eq(7).css("transform","scale(1)")
				},1950)
				setTimeout(function(){
					cityConnectedDot.eq(8).css("transform","scale(1)")
				},2100)
				setTimeout(function(){
					cityConnectedDot.eq(9).css("transform","scale(1)")
				},2250)
			}
			//十个小点从右向左闪烁
			function dotPlayR(){
				cityConnectedDot.eq(9).css("transform","scale(0)");
				setTimeout(function(){
					cityConnectedDot.eq(8).css("transform","scale(0)");
				},150)
				setTimeout(function(){
					cityConnectedDot.eq(7).css("transform","scale(0)");
				},300)
				setTimeout(function(){
					cityConnectedDot.eq(6).css("transform","scale(0)");
				},450)
				setTimeout(function(){
					cityConnectedDot.eq(5).css("transform","scale(0)");
				},600)
				setTimeout(function(){
					cityConnectedDot.eq(4).css("transform","scale(0)");
				},750)
				setTimeout(function(){
					cityConnectedDot.eq(9).css("transform","scale(1)")
					cityConnectedDot.eq(3).css("transform","scale(0)");
				},900)
				setTimeout(function(){
					cityConnectedDot.eq(8).css("transform","scale(1)")
					cityConnectedDot.eq(2).css("transform","scale(0)");
				},1050)
				setTimeout(function(){
					cityConnectedDot.eq(7).css("transform","scale(1)")
					cityConnectedDot.eq(1).css("transform","scale(0)");
				},1200)
				setTimeout(function(){
					cityConnectedDot.eq(6).css("transform","scale(1)")
					cityConnectedDot.eq(0).css("transform","scale(0)");
				},1350)
				setTimeout(function(){
					cityConnectedDot.eq(5).css("transform","scale(1)")
				},1500)
				setTimeout(function(){
					cityConnectedDot.eq(4).css("transform","scale(1)")
				},1650)
				setTimeout(function(){
					cityConnectedDot.eq(3).css("transform","scale(1)")
				},1800)
				setTimeout(function(){
					cityConnectedDot.eq(2).css("transform","scale(1)")
				},1950)
				setTimeout(function(){
					cityConnectedDot.eq(1).css("transform","scale(1)")
				},2100)
				setTimeout(function(){
					cityConnectedDot.eq(0).css("transform","scale(1)")
				},2500)
			}
			timer1=setInterval(dotPlayL,2250)
			//鼠标放入右移
			$(".cologne-flag").on("mouseover",function(){
				clearInterval(timer1);
				onoff1=false;
				if(onoff2){			
				}else{
					cityConnectedDot.css("transform","scale(1)");
					dotPlayR();
					timer2=setInterval(dotPlayR,2250);
					onoff2=true;
				}
				if(teyePink.css("z-index")=="1"&&cut){
					cut=false;
					PwrapperEyeLeft.css("transform","rotate(-90deg)");
					PwrapperEyeRight.css("transform","rotate(90deg)");
					BwrapperEyeLeft.css("transform","rotate(180deg)");
					BwrapperEyeRight.css("transform","rotate(0deg)");
					teyePink.css("transition","0.6s");
					teyePink.css("transform","translate3d(0px,0px,-25px)");
					teyePink.css("left",408);
					teyePink.css("opacity","1");
					teyeBlue.css("transition","0.6s");
					teyeBlue.css("transform","translate3d(0px,0px,-25px)");
					teyeBlue.css("left",-34);
					setTimeout(function(){
						teyeBlue.css("transition","none");
						teyePink.css("transition","none");
						teyePink.css("z-index","2");
						teyeBlue.css("z-index","1");
					},600)
					setTimeout(function(){
						teyePink.css("transition","0.6s");
						teyeBlue.css("transition","0.6s");
						teyePink.css("transform","translate3d(0px,0px,0px)");
						teyePink.css("left",337);
						teyeBlue.css("transform","translate3d(0px,0px,-50px)");
						teyeBlue.css("left",37);
						teyeBlue.css("opacity","0.5");
						cut=true;
					},620)
					
				}
			})
			//鼠标放入左移
			$(".berlin-flag").on("mouseover",function(){			
				clearInterval(timer2);
				onoff2=false;
				if(onoff1){
				}else{
					cityConnectedDot.css("transform","scale(1)");
					dotPlayL();
					timer1=setInterval(dotPlayL,2250);
					onoff1=true;
				}
				if(teyeBlue.css("z-index")=="1"&&cut){
					cut=false;
					PwrapperEyeLeft.css("transform","rotate(0deg)");
					PwrapperEyeRight.css("transform","rotate(0deg)");
					BwrapperEyeLeft.css("transform","rotate(90deg)");
					BwrapperEyeRight.css("transform","rotate(90deg)");
					teyePink.css("transition","0.6s");
					teyePink.css("transform","translate3d(0px,0px,-25px)");
					teyePink.css("left",408);
					teyeBlue.css("opacity","1");
					teyeBlue.css("transition","0.6s");
					teyeBlue.css("transform","translate3d(0px,0px,-25px)");
					teyeBlue.css("left",-34);
					setTimeout(function(){
						teyeBlue.css("transition","none");
						teyePink.css("transition","none");
						teyePink.css("z-index","1");
						teyeBlue.css("z-index","2");
					},600)
					setTimeout(function(){
						teyeBlue.css("transition","0.6s");
						teyePink.css("transition","0.6s");
						teyePink.css("transform","translate3d(0px,0px,-50px)");
						teyePink.css("left",337);
						teyeBlue.css("transform","translate3d(0px,0px,0px)");
						teyeBlue.css("left",37);
						teyePink.css("opacity","0.5");
						cut=true;
					},620)
					
				}
			})
		}
		
		
		if(num==8){
			var a=0;
			$(".slideshow").css("z-index","27");
			connected.animate({
				bottom:"676px"
			},1300)
			$(".teye-wrapper-connected").animate({
				bottom:"676px"
			},1300)
			$(".slideshow").animate({
				bottom:"0"
			},1300)
			
			//点击下一页
			function next(){
				if($(".slideImg").is(":animated")){
					return
				}
				a++;
				if(a==imgArr.length){
					a=0;
				}
				$(".owl-dots div").removeClass("active");
				$(".owl-dots div").eq(a).addClass("active");
				$(".slideImg").animate({
					left:'-200%'
				},500,function(){
					$(".slideImg").css("left","-100%")
					if(a==0){
						$(".imgOne").attr("src",imgArr[imgArr.length-1])
					}else{
						$(".imgOne").attr("src",imgArr[a-1])
					}
					$(".imgTwo").attr("src",imgArr[a])
					if(a==imgArr.length-1){
						$(".imgThree").attr("src",imgArr[0])
					}else{
						$(".imgThree").attr("src",imgArr[a+1])
					}
				})
			}
			$(".owl-next").on("click",next)
			//点击上一页
			function prev(){
				if($(".slideImg").is(":animated")){
					return
				}
				a--;
				if(a<0){
					a=imgArr.length-1;
				}
				$(".owl-dots div").removeClass("active");
				$(".owl-dots div").eq(a).addClass("active");
				$(".slideImg").animate({
					left:'0'
				},500,function(){
					$(".slideImg").css("left","-100%")
					if(a==0){
						$(".imgOne").attr("src",imgArr[imgArr.length-1])
					}else{
						$(".imgOne").attr("src",imgArr[a-1])
					}
					$(".imgTwo").attr("src",imgArr[a])
					if(a==imgArr.length-1){
						$(".imgThree").attr("src",imgArr[0])
					}else{
						$(".imgThree").attr("src",imgArr[a+1])
					}
				})
			}
			$(".owl-prev").on("click",prev)
			
			//鼠标移动
			$(document).on("mousedown",function(e){
				var startX=e.clientX;
				var disLeft=0;
				var dis=0;
				$(document).on("mousemove",function(e){
					var disX=e.clientX-startX;
					dis=disX;
					clientW=document.documentElement.clientWidth;	
	//				console.log(disX/clientW)
					disLeft=-clientW+disX;
					console.log(disLeft)
					$(".slideImg").css("left",disLeft)
				})
				$(document).on("mouseup",function(){
					clientW=document.documentElement.clientWidth;
					disLeft=-clientW+dis;
					if(Math.abs(disLeft)-clientW>20){
						next();
					}else if(Math.abs(disLeft)-clientW<-20){
						prev();
					}else{
						$(".slideImg").css("left",-clientW)
					}
					$(document).off("mousemove");
					$(document).off("mouseup");
				})
			})
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
//..........................上滑..................		
	}else{
		if(num==-1){
			return;
		}
		num--;
		if(num>=0&&num<5){
			$("svg").show();
		}else{
			$("svg").hide();
		}
		if(num==-1){
			$(".one").animate({
				bottom:0
			},2000);
			$(".oneText").animate({
				opacity:1
			},500);
			
			$(".onoff").animate({
				right:"50%"
			},2000)
			$(".onoff span").css("border-color","rgb(255, 255, 255)")
			$(".onoff .mouth").css("top",20);
			toggleMenu.css("border-color","rgb(255,255,255)");
			toggleMenuSpan.css("border-color","rgb(255, 255, 255)");
			textDiv.eq(0).animate({
				opacity:0,
				top:"20%"
			},500)
		}
		if(num==0){
			oneEyeLeft.css("transform","rotate(0deg)");
			oneEyeRight.css("transform","rotate(0deg)");
		}
		
		if(num==1){
			oneEyeLeft.css("transform","rotate(90deg)");
			oneEyeRight.css("transform","rotate(-90deg)");
		}
		
		if(num==2){
			oneEyeLeft.css("transform","rotate(0deg)");
			oneEyeRight.css("transform","rotate(-90deg)");
		}
		
		if(num==3){
			oneEyeLeft.css("transform","rotate(20deg)");
			oneEyeRight.css("transform","rotate(-20deg)");
		}
		
		if(num==4){			
			$("svg").animate({
				"opacity":"1"
			},500)
			$(".one").css("z-index","23")
			textDiv.eq(4).delay(500).animate({
				opacity:1,
			},800)
			oneEyeLeft.css("transform","rotate(-20deg)");
			oneEyeRight.css("transform","rotate(20deg)");
			oneEye.css("bottom",-200);
			oneEye.css("transform","scale(1)");
			$(".skills").css("z-index","20");
			$(".skills").css("transform","scale(0.5)");
			$(".skills").css("opacity",0);
		}
		if(num>=0&&num<4){
			textDiv.eq(num+1).animate({
				opacity:0,
				top:"20%"
			},500,function(){
				textDiv.eq(num+1).hide();
				textDiv.eq(num).show();
				textDiv.eq(num).animate({
					opacity:1,
					top:"10%"
				},800)
			})
			
		}
		
		if(num==5){
			animation=true;
			$(".explode").css("z-index","20")
			$("section").css("z-index","20")
			$(".skills").css("z-index","26");
			$(".one").css("z-index","27");
			explodeWrapper.css("transition","1.3s")
			explodeText.css("opacity",0)
			$(".skills").show();
			explodeText.css("margin-top",100)
			explodeWrapper.css("transform","scale(0)")	
			$(".skills .text").fadeIn(3300)
			$(".ico").delay(1000).animate({
				opacity:1
			},500)
			$(".teyetwo").delay(500).animate({
				bottom:"-50"
			},800,function(){
				animation=false;
			});
			$(".teyeone").delay(500).animate({
				bottom:"0"
			},800);
			oneEye.css("transition","0s");
			oneEye.delay(500).animate({
				bottom:"-50"
			},800,function(){
				oneEye.css("transition","1.3s");
			})
			$(".skill-img").css("background","none");
		}
		
		if(num==6){
			clientW=document.documentElement.clientWidth;
			explodeWrapper.css("transition","1.3s")
			setTimeout(function(){
				explodeText.css("opacity",1)
				explodeText.css("margin-top",0)
				if(clientW<1024){
					explodeWrapper.css("transform","scale(0.5)")
				}else{
					explodeWrapper.css("transform","scale(1)")
				}
			},800)
			$(".connected .text").animate({
				opacity:"0"
			},800)
			$(".city-connected").animate({
				opacity:"0"
			},800,function(){
				connected.css("z-index","22")
			})
			$(".image-wrapper .teye-head").delay(400).animate({
				top:"-850"
			},1300)
			$(".teye-wrapper-blue .image-wrapper img").delay(400).animate({
				left:"-874"
			},1300)
			$(".image-wrapper .teye-foot").delay(400).animate({
				top:"650"
			},1300)
			teyeBlue.animate({
				left:"187"
			},400)
			teyePink.animate({
				opacity:"0",
				left:"187"
			},400)
		}
		
		if(num==7){
			connected.animate({
				bottom:"0"
			},1300)
			teyeBlue.css("left",187)
			teyePink.css("left",187)
			$(".teye-wrapper-connected").animate({
				bottom:"0"
			},1300,function(){
				teyeBlue.animate({
					left:"37"
				},400)
				teyePink.animate({
					left:"337",
					opacity:"0.5"
				},400)
			})
			$(".slideshow").animate({
				bottom:"-676"
			},1300)
			
			
		}
		
		
		
		
	}
	console.log(num)
	if(num!==-1){
		$(".ico-mouse").hide();
		$(".ico-mouse .wheel").hide();
		$(".slides li a").css("background","rgb(147, 90, 36)")
		$(".slides .active").css("top",10*num+10);
		$(".slides .active").css("border-color","rgb(147, 90, 36)");
		
	}else if(num==-1){
		$(".ico-mouse").show();
		$(".ico-mouse .wheel").show();
		$(".slides li a").css("background","rgb(255, 255, 255)");
		$(".slides .active").css("border-color","rgb(255, 255, 255)");
	}
	$(".toggle-menu-wrapper li").removeClass("active");
	$(".toggle-menu-wrapper li").eq(num+1).addClass("active")
}

console.log($(".toggle-menu-wrapper li").class)

var expIndex=0;
$(".modal-arrow-right").on("click",function(){
	$(".modal-content>div").eq(expIndex).fadeOut(300)
	expIndex++;
	expIndex%=$(".modal-content>div").length;
	$(".modal-content>div").eq(expIndex).show()
})
$(".modal-arrow-left").on("click",function(){
	$(".modal-content>div").eq(expIndex).fadeOut(300)
	expIndex--;
	if(expIndex<0){
		expIndex=$(".modal-content>div").length-1
	}
	
	$(".modal-content>div").eq(expIndex).show()
})
//console.log($(".scene li"))
var enterModal=false;
$(".scene li").on("click",function(e){
	enterModal=true;
	
	$(".modal-wrap").show();
	$(".modal-wrap").css("z-index",100);
	$(".modal-content>div").hide()
//	if(e.target.hasClass("speaker")){
//		alert(1)
//	}	
	e.stopPropagation();
})
$(".speaker").on("click",function(){	
	expIndex=5;
	$(".modal-content>div").eq(expIndex).show()
})
$(".motor-left").on("click",function(){	
	expIndex=4;
	$(".modal-content>div").eq(expIndex).show()
})
$(".motor-right").on("click",function(){	
	expIndex=4;
	$(".modal-content>div").eq(expIndex).show()
})
$(".raspberry").on("click",function(){	
	expIndex=0;
	$(".modal-content>div").eq(expIndex).show()
})
$(".chip").on("click",function(){	
	expIndex=1;
	$(".modal-content>div").eq(expIndex).show()
})
$(".micro").on("click",function(){	
	expIndex=7;
	$(".modal-content>div").eq(expIndex).show()
})
$(".motion-detector").on("click",function(){	
	expIndex=8;
	$(".modal-content>div").eq(expIndex).show()
})
$(".usb").on("click",function(){	
	expIndex=2;
	$(".modal-content>div").eq(expIndex).show()
})
$(".sound-card").on("click",function(){	
	expIndex=3;
	$(".modal-content>div").eq(expIndex).show()
})
$(".battery-module").on("click",function(){	
	expIndex=6;
	$(".modal-content>div").eq(expIndex).show()
})
$(".ico-close-small").on("click",function(e){
	$(".modal-wrap").hide();
	$(".modal-wrap").css("z-index",0);
	$(".modal-content>div").hide();
	enterModal=false;
	e.stopPropagation();
})
//测试
$(".toggle-menu").on("mouseover",function(){
	$(".toggle-menu-container").css("width","100%");
	$(".toggle-menu-wrapper").show(0);//把时间写为0就可以阻止元素直接block，有过渡时间。
	$(".toggle-menu-wrapper").css("transform","translate(0px,0px)");
	$("#menuLeft").css("transform","rotateY(0deg)");
	$("#menuRight").css("transform","rotateY(0deg)");
	
})

//$(".toggle-menu-wrapper").on("mouseleave",function(){
//	$(".toggle-menu-wrapper").css("transform","translate(50%,0%)");
//	setTimeout(function(){
//		$(".toggle-menu-wrapper").hide();
//		$(".toggle-menu-container").css("width","auto");
//	},800)
//	
//	$("#menuLeft").css("transform","rotateY(90deg)");
//	$("#menuRight").css("transform","rotateY(-90deg)");
//})



$(".onoff").on("click",function(){
	if(num==-1){
		return;
	}
	num=-1;
	$("svg").hide();
	$("section").css("z-index","20")
	$(".one").show()
	$(".one").css("z-index","21")
	$(".one").animate({
		bottom:0
	},2000);
	$(".oneText").animate({
		opacity:1
	},500);
	
	$(".onoff").animate({
		right:"50%"
	},2000)
	$(".onoff span").css("border-color","rgb(255, 255, 255)")
	$(".onoff .mouth").css("top",20);
	toggleMenu.css("border-color","rgb(255,255,255)");
	toggleMenuSpan.css("border-color","rgb(255, 255, 255)");
	textDiv.eq(0).animate({
		opacity:0,
		top:"20%"
	},500)
})
