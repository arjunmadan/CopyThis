function deleteAll()
{
	chrome.extension.sendRequest({ msg: "delete" });
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', deleteAll);
});	
