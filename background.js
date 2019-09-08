chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.notifications.create(
        'testNotification',{   
        type: 'basic', 
        iconUrl: 'iconfinder_code_322435.png', 
        title: "This is a notification", 
        message: "hello there!" 
        },

    function() {} 

    );

    chrome.notifications.clear('testNotification');
});