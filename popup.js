function deleteAll()
{
	alert("called1");
	chrome.extension.sendRequest({ msg: "startFunc" });
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', deleteAll);	
});	
