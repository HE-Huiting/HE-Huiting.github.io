var box = document.getElementById('box')
var imgbox = document.getElementById('imgbox')
var img = imgbox.children
var back = document.getElementById('back')
var next = document.getElementById('next')
var navspan = document.getElementById('nav').children
var webBtn = document.getElementById('webBtn')

var num = 1
var onOff = true
var timer = null
var classarr = ['img2', 'img1', 'img3'];

setTimeout(()=>{
	timer = setInterval(nextImg, 3000)
},1000)
webBtn.onclick = function() {
	let webtext = document.getElementsByClassName('webtext')[0];
	if (webtext.style.width == '500px') {
		webtext.style.width = '0';
		webtext.style.height = '900px';
	} else {
		webtext.style.width = '500px';
		webtext.style.height = '900px';
	}
}

imgbox.onclick = function(e) {
	e.preventDefault()
	let index = num == 1 ? 1 : (num == 3 ? 2 : 3);
	let nowLi = img[index - 1];
	let nowImg = nowLi.getElementsByTagName("img")[0];
	let nowP = nowLi.getElementsByTagName("p")[0];
	let nowV = nowLi.getElementsByClassName('videobox')[0];
	let Video = nowV.getElementsByTagName('video')[0];
	nowV.style.zIndex = 1
	nowV.style.visibility = 'visible';
	Video.play();
	clearInterval(timer)
}

imgbox.onmouseover = function() {
	let index = num == 1 ? 1 : (num == 3 ? 2 : 3);
	let nowLi = img[index - 1];
	let nowP = nowLi.getElementsByTagName("p")[0];
	let nowV = nowLi.getElementsByClassName("videobox")[0];
	nowP.style.display = "block";
	timer && clearInterval(timer)
}

imgbox.onmouseleave = function() {
	let index = num == 1 ? 1 : (num == 3 ? 2 : 3);
	let nowLi = img[index - 1];
	let nowImg = nowLi.getElementsByTagName("img")[0];
	let nowP = nowLi.getElementsByTagName("p")[0];
	let nowV = nowLi.getElementsByClassName("videobox")[0];
	nowImg.style.width = "100%";
	nowP.style.display = "none";
	nowV.style.zIndex = -1000;
	nowV.style.visibility = "hidden";
	
}

next.onclick = function() {
	if (onOff) {
		clearInterval(timer)
		onOff = false;
		nextImg()
		setTimeout(function() {
			onOff = true
			timer = setInterval(nextImg, 3000)
		}, 500)
	}
}

back.onclick = function() {
	if (onOff) {
		clearInterval(timer)
		if (num > 1) {
			num--
		} else {
			num = 3
		}
		onOff = false;
		removenav(navspan[num - 1])
		var lastValue = classarr.pop();
		classarr.unshift(lastValue);
		for (var i = 0; i < classarr.length; i++) {
			img[i].className = classarr[i];
		};
		setTimeout(function() {
			onOff = true;
			timer = setInterval(nextImg, 3000)
		}, 500)
	}
}

function nextImg() {
	if (num < 3) {
		num++
	} else {
		num = 1
	}
	removenav(navspan[num - 1])
	var lastValue = classarr.shift();
	classarr.push(lastValue);
	for (var i = 0; i < classarr.length; i++) {
		img[i].className = classarr[i];
	};
}

function removenav(obj) {
	for (var i = 0; i < navspan.length; i++) {
		navspan[i].className = ''
	}
	obj.className = 'select'
}

/*This code represents a webpage that showcases traditional Chinese musical instruments. It includes a carousel with images, descriptions, and videos of three instruments: Guqin, Pipa, and Erhu. I made the dynamic carousel from this tutorial, the link is https://blog.csdn.net/qq_40060547/article/details/104566160. In addition to this there is a button. When the user clicks on it, a text box appears with an description of the site design.*/