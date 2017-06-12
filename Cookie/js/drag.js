window.onload = function() {
	var box = document.getElementById("box");
	box.style.left = getCookie("left") + 'px';
	box.style.top = getCookie("top") + 'px';
	box.onmousedown = function(ev) {
		var ev = ev || window.event;
		var oldX = ev.clientX - box.offsetLeft;
		var oldY = ev.clientY - box.offsetTop;
		document.onmousemove = function(ev) {
			var ev = ev || window.event;
			var factX = ev.clientX - oldX;
			var factY = ev.clientY - oldY;
			box.style.left = factX + "px";
			box.style.top = factY + "px";
			setCookie("left", factX, 2);
			setCookie("top", factY, 2);
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;

		};
		return false;

	};

};