countImg = 0;
countTxt = 0;

function saveInfo(info,tab) 
{
	if(info.selectionText)
	{
		localStorage['tURL'+countTxt] = tab.url;
		localStorage['data'+countTxt] = info.selectionText;
		localStorage['tTitle'+countTxt] = tab.title; 
		localStorage['countTxt'] = countTxt + 1;
		countTxt = countTxt + 1;
	}
	else if(info.srcUrl)
	{
		localStorage['iURL'+countImg] = tab.url;
		localStorage['img'+countImg] = info.srcUrl;
		localStorage['iTitle'+countImg] = tab.title;
		localStorage['countImg'] = countImg + 1;
		countImg = countImg + 1;
	}
}

function loaded()
{
	var clipboard = document.getElementById('clipboard');
	if(clipboard!=null)
	{
		popupText = "<table style='width:600px'><th style='width:300px'>Title</th><th style='width:600px'>Data</th><tr><td><hr /></td><td><hr /></td></tr>";
		for(i=0; i<parseInt(localStorage['countTxt']); i++)
		{
			popupText += "<tr><td><a href='"+localStorage['tURL'+i]+"' target='_blank'>"+localStorage['tTitle'+i]+"</a></td>";
			popupText += "<td>"+localStorage['data'+i]+"</td></tr>";
			popupText += "<tr><td><hr /></td><td><hr /></td></tr>";
		}
		
		for(i=0; i<parseInt(localStorage['countImg']); i++)
		{
			popupText += "<tr><td><a href='"+localStorage['iURL'+i]+"' target='_blank'>"+localStorage['iTitle'+i]+"</a></td>";
			popupText += "<td><img src="+localStorage['img'+i]+"></img></td></tr>";
			popupText += "<tr><td><hr /></td><td><hr /></td</tr>";
		}
		clipboard.innerHTML = popupText;
	}
}

function deleteAll()
{
	countTxt = 0;
	countImg = 0;	
	localStorage['countTxt'] = 0;
	localStorage['countImg'] = 0;
	loaded();
}


document.addEventListener('DOMContentLoaded', function () {

	chrome.contextMenus.removeAll();
	chrome.contextMenus.create({
		title: "Add to clipboard",
		contexts:["image", "selection"], 
		onclick: saveInfo
	});

	loaded();
});	

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "delete") deleteAll();
    }
);
