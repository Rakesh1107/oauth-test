function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementsByClassName("g-signin2")[0].setAttribute("style", "display: none");
    document.getElementsByClassName("profile")[0].setAttribute("style", "display: block");
    document.getElementById("pic").setAttribute('src',  profile.getImageUrl());
    document.getElementById("name").innerText = profile.getName();
    document.getElementById("email").innerText = profile.getEmail();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementsByClassName("g-signin2")[0].setAttribute("style", "display: block");
        document.getElementsByClassName("profile")[0].setAttribute("style", "display: none");
    });
  }
