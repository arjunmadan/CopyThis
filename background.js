clipboardData = new Array();
clipboardURL = new Array();
countImg = 0;
countTxt = 0;
//Save copied data and URL to display later.
function saveInfo(info,tab) {

	if(info.selectionText)
	{
		clipboardData[countTxt] = info.selectionText;
		clipboardURL[countTxt] = tab.url;
		localStorage['tURL'+countTxt] = tab.url;
		localStorage['data'+countTxt] = info.selectionText;
		countTxt++;
	}
	else if(info.srcUrl)
	{
		clipboardData[countImg] = info.srcUrl;
		clipboardURL[countImg] = tab.url;
		localStorage['iURL'+countImg] = tab.url;
		localStorage['img'+countImg] = info.srcUrl;
		countImg++;
	}
	
	//chrome.storage.local.set({'url1':'this is a test 123'});
	//Testing whether data is stored correctly
	/*for(i = 0; i< count; i++)	
	{
		alert(clipboardData[i]);
		alert(clipboardURL[i]);
	}*/
}

//Create a custom button in the context menu.
chrome.contextMenus.removeAll();

chrome.contextMenus.create({


	title: "Add to clipboard",
	contexts:["image", "selection"], 
	onclick: saveInfo

});


document.addEventListener('DOMContentLoaded', function () {

	document.getElementById("clipboard").innerHTML="<a href='"+localStorage['tURL0']+"' target='_blank'>"+localStorage['tURL0']+"</a>";
	//document.getElementById("clipboard").+=localStorage['data0'];
});