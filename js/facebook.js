window.fbAsyncInit = function () {
    FB.init({
        appId: '349730487001799',
        cookie: true,
        xfbml: true,
        version: 'v13.0'
    });
    /*FB.AppEvents.logPageView();*/

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    FB.api('/me?fields=first_name,last_name,email', function (response) {
        /*console.log('Successful login for: ' + response.name);*/
        document.getElementById('name').innerHTML = response.first_name + ' ' + response.last_name;
        document.getElementById('email').innerHTML = response.email;
        document.getElementById('loginBtn').style.display = "none";
        document.getElementById('name').style.display = "block";
        document.getElementById('email').style.display = "block";
        document.getElementById('logoutBtn').style.display = "block";
    });

}

function logout(response) {
    FB.logout(function (response) { //Person is now logged out
        document.getElementById('loginBtn').style.display = "block";
        document.getElementById('name').style.display = "none";
        document.getElementById('email').style.display = "none";
        document.getElementById('logoutBtn').style.display = "none";
    });
}
