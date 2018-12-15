$(document).ready(() => {
    $('#optionForm').submit(() => {
        const username = $('#username').val();
        const password = $('#password').val();

        chrome.storage.local.set({cred: {username, password}});
        return false;
    });
});