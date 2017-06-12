function setCookie(name, value, iDay) {
	if(iDay) {
		var dat = new Date();

		dat.setDate(dat.getDate()+iDay);
		
		//name   传入的名称     value   传入的  值      path  默认路径（/）无需传入    expires  修改过期时间
		document.cookie = '' + name + '=' + value + '; path=/; expires=' + dat + '';
		document.cookie = 'weiboMsg=98567; path=/; expires=10';
	} else {
		document.cookie = '' + name + '=' + value + '; path=/';
	}
}
console.log(typeof document.cookie)
function getCookie(name) {
	//将 'weiboMsg=1651516; max=1651516'拆分 成 单个;
	var sValue = document.cookie.split('; ');
		//["weiboMsg=1651516", "max=1651516"];
	for(var i = 0; i < sValue.length; i++) {

		var arr1 = sValue[i].split('=');
		//分割为  ["weiboMsg", "1651516"]，["max", "1651516"]
		console.log(arr1);
		if(arr1[0] == name) {
			return arr1[1];
		}
	}
	return '';
}

function delCookie(name) {
	setCookie(name, 'ssss', -10)
}
