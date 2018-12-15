
const submit_btn = $("#_eventId_proceed");
const username = $("$username");
const password = $("$password");

if(submit_btn.length && username.length && password.length) {
    new Promise((resolve, reject) => {
        chrome.storage.local.get("cred", items => {
            console.log(items);
            if(items && items.username && items.password) {
                username.val(items.username);
                password.val(items.password);
                resolve();
            } else {
                reject("No credentials item in storage!");
            }
        });
    }).then(() => {
        submit_btn.click();
    });
}
