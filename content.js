chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.runtime.sendMessage("test");
});