			var header = document.getElementById("header");
			var nav = document.getElementById("nav");
			var content = document.getElementById("content");
			var opacity = document.getElementById("opacity");

			window.onscroll = function(){
				if(window.pageYOffset >= 36){
					header.style.position = "fixed";
					header.style.top = "0px";
					header.style.width = "59.45%";
					nav.style.position = "fixed";
					nav.style.top = "100px";
					nav.style.width = "59.35%";
					opacity.style.display = "block";
					content.style.marginTop = "150px";
				}else {
					header.style.position = "static";
					header.style.width = "100.15%";
					nav.style.position = "static";
					nav.style.width = "100%";
					opacity.style.display = "none";
					content.style.marginTop = "10px";
				}
			}