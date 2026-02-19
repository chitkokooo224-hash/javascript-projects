			var openSetting = document.getElementById("open");
			var closeSetting = document.getElementById("close");
			var openbar = document.getElementById("settingopen");
			var closebar = document.getElementById("settingclose");
			var settingPage = document.getElementById("setting-page");
			openSetting.onclick = function(){
				openbar.style.display = "none";	
				closebar.style.display = "block";
				settingPage.style.display = "block";	
			}
			closeSetting.onclick = function(){
				openbar.style.display = "block";	
				closebar.style.display = "none";
				settingPage.style.display = "none";
			}
			
			let clock = ()=>{
				let date = new Date();
				let hrs = date.getHours();
				let mins = date.getMinutes();
				let secs = date.getSeconds();

				let period = "AM"
				if(hrs == 0){
					hrs = 12;
				}else if(hrs > 12){
					hrs = hrs - 12;
					period = "PM";
				}
				hrs = hrs < 10 ? "0" + hrs : hrs;
				mins = mins < 10 ? "0" + mins : mins;
				secs = secs < 10 ? "0" + secs : secs;

				let time = `${hrs} : ${mins} : ${secs}<div id="period">${period}</div>`;
				document.getElementById("clock").innerHTML = time;
				setTimeout(clock, 1000);
			};
			clock();

			var file = document.getElementById("file");
			var button = document.getElementById("button");

			button.onclick = function(){
				file.click();
			}
				
			var loadFile = function(event){
				document.getElementById("image").src = URL.createObjectURL(event.target.files[0]);
				file.style.display = "none";
			}