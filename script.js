function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    $(".g-signin2").css("display", "none");
    $(".profile").css("display", "block");
    $("#pic").attr('src', profile.getImageUrl());
    $("#email").text(profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $(".g-signin2").css("display", "block");
        $(".profile").css("display", "none");
    });
  }