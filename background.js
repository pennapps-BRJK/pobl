chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.sendMessage(tab[0].id, {action: "open_dialog_box"});
    });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.notifications.create(
        'testNotification',{   
        type: 'basic', 
        iconUrl: 'iconfinder_code_322435.png', 
        title: "This is a notification", 
        message: "hello there!",
        silent: true
        },

    function() {} 

    );

    chrome.notifications.clear('testNotification');
});