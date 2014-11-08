var clipboardData = new Array();
var clipboardURL = new Array();
var count = 0;
function saveInfo(info,tab) {

	clipboardData[count] = info.selectionText;
	clipboardURL[count++] = tab.url;
	for(i = 0; i< count; i++)	
	{
		alert(clipboardData[i]);
		alert(clipboardURL[i]);
	}
}

chrome.contextMenus.create({

	title: "Add to clipboard", 
	contexts:["selection"], 
	onclick: saveInfo

});
