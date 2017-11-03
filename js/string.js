var str = "abc";

function getPerms(str){
	
	if(!str) {
		return "";
	}

	if(str.length == 1){
		return [str];
	}

	var fchar = str[0];

	var arrOldPerms = getPerms(str.substring(1));
	var newPerms = [];

	console.log("arrOldPerms", arrOldPerms);

	for(var j = 0; j<=arrOldPerms.length - 1; j++) {

		for(var i = 0; i<= arrOldPerms[j].length; i++) {
			newPerms.push(insertChar(arrOldPerms[j], fchar, i));
		}

	}

	return newPerms;
}

function insertChar(str, char, pos){
	if(pos == 0)
		return char + str;
	if(pos == str.length)
		return str + char;
	
	var first = str.substring(0,pos);
	var last = str.substring(pos);
	return first + char + last;
}

console.log(getPerms(str));