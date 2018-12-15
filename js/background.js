chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({cred: {username: null, password: null}});
});