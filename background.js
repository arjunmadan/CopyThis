function saveInfo(info,tab) {

    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({ 

        url: "http://www.google.com/search?q=" + info.selectionText,
    })


}

chrome.contextMenus.create({

    title: "Add to clipboard", 
    contexts:["selection"], 
    onclick: saveInfo,

});
