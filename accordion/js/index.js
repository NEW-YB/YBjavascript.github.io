var box=document.getElementById("box");
var imgs=box.getElementsByTagName("img");
	var a=0;
	var b=1;
	var c=2;
	var d=3;
	var arr=["img/mimi-0.jpg","img/mimi-1.jpg","img/mimi-2.jpg","img/mimi-3.jpg"]
	imgs[0].style.left="20px";
	imgs[1].style.left="220px";
	imgs[2].style.left="623px";
	imgs[3].style.left="320px";
	imgs[2].onclick=function(){
		a++;
		b++;
		c++;
		d++;
		move(imgs[0],{"left":320,"top":100,"width":200,"height":125,"opacity":0},2000,function(){
			imgs[0].src=arr[a%=4];
			imgs[0].style.opacity=0.4;
			imgs[0].style.left="20px";
			imgs[0].style.top="100px";
			imgs[0].style.width="200px";
			imgs[0].style.height="125px";
		})
		move(imgs[1],{"left":20,"top":100,"width":200,"height":125,"opacity":0.4},2000,function(){
			imgs[1].src=arr[b%=4]
			imgs[1].style.opacity=1;
			imgs[1].style.left="220px";
			imgs[1].style.top="30px";
			imgs[1].style.width="400px";
			imgs[1].style.height="250px";
		})
		move(imgs[2],{"left":220,"top":30,"width":400,"height":250,"opacity":1},2000,function(){
			imgs[2].src=arr[c%=4];
			imgs[2].style.opacity="0.4";
			imgs[2].style.left="623px";
			imgs[2].style.top="100px";
			imgs[2].style.width="200px";
			imgs[2].style.height="125px";
		})
		move(imgs[3],{"left":623,"top":100,"width":200,"height":125,"opacity":0.4},2000,function(){
			imgs[3].src=arr[d%=4];
			imgs[3].style.opacity="0"
			imgs[3].style.left="320px";
			imgs[3].style.top="100px";
			imgs[3].style.width="200px";
			imgs[3].style.height="125px";
		})
	}
	imgs[0].onclick=function(){
		a--;
		b--;
		c--;
		d--;
		if(a==-1){
			a=3;
		}
		if(b==-1){
			b=3;
		}
		if(c==-1){
			c=3;
		}
		if(d==-1){
			d=3;
		}
		move(imgs[0],{"left":220,"top":30,"width":400,"height":250,"opacity":1},2000,function(){
//						if(a==-1){
//							a=3;
//						}
			imgs[0].src=arr[a];
			imgs[0].style.opacity=0.4;
			imgs[0].style.left="20px";
			imgs[0].style.top="100px";
			imgs[0].style.width="200px";
			imgs[0].style.height="125px";
		})
		move(imgs[1],{"left":623,"top":100,"width":200,"height":125,"opacity":0.4},2000,function(){
//						if(b==-1){
//							b=3;
//						}
			imgs[1].src=arr[b]
			imgs[1].style.opacity=1;
			imgs[1].style.left="220px";
			imgs[1].style.top="30px";
			imgs[1].style.width="400px";
			imgs[1].style.height="250px";
		})
		move(imgs[2],{"left":320,"top":100,"width":200,"height":125,"opacity":0},2000,function(){
//						if(c==-1){
//							c=3;
//						}
			imgs[2].src=arr[c];
			imgs[2].style.opacity="0.4";
			imgs[2].style.left="623px";
			imgs[2].style.top="100px";
			imgs[2].style.width="200px";
			imgs[2].style.height="125px";
		})
		move(imgs[3],{"left":20,"top":100,"width":200,"height":125,"opacity":0.4},2000,function(){
//						if(d==-1){
//							d=3;
//						}
			imgs[3].src=arr[d];
			imgs[3].style.opacity="0"
			imgs[3].style.left="320px";
			imgs[3].style.top="100px";
			imgs[3].style.width="200px";
			imgs[3].style.height="125px";
		})
	}
	function move (obj,object1,duration,fn) {
    	var startTime = new Date();
    	var d = duration;
    	var j = {};
    	for( var a in object1){
    		j[a] = {};
    		j[a].b = parseFloat(getComputedStyle(obj)[a]);
    		j[a].c = object1[a] - j[a].b; 
    	}
    	obj.timer = setInterval(function(){
    		
    		var t = new Date() - startTime;
    		if(t>=d){
    			t = d;
    		}
    		for(var a in j){
    			var c = j[a].c;
    			var b = j[a].b;
				var v = c/d*t+b;
    			if(a == "opacity"){
    				obj.style[a] = v ;
    			}else{
    				obj.style[a] = v + "px";
    			}
    		}
    		if(t==d){
    			clearInterval(obj.timer);
    			fn&&fn();
    		}
    	},16)
    }