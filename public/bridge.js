try {
  var isIPhone = isMobile.apple.phone;
  var isAndPhone = isMobile.android.phone;

  var payload = window.location.search.split("payload=")[1];
  var decodedPayload = decodeURIComponent(decodeURIComponent(payload));

  var env = JSON.parse(decodedPayload).env;
  var board = JSON.parse(decodedPayload).board;
  var pid = JSON.parse(decodedPayload).pid;

  var envToBaseUrl = {
    test: "https://community-test.cashdoc.me",
  };

  var baseUrl = envToBaseUrl[env] || "https://community-test.cashdoc.me";

  function redirectToPost() {
    if (board && pid) {
      location.href = `${baseUrl}/${board}/${pid}`;
    } else {
      alert("잘못된 공유링크입니다.");
    }
  }

  if (isIPhone || isAndPhone) {
    setTimeout(() => {
      redirectToPost();
    }, 25);

    if (isIPhone) {
      location.href = "naversearchapp://default?version=1";
    } else {
      location.href = "naversearchapp://default?version=5";
    }
  } else {
    redirectToPost();
  }
} catch (e) {
  alert("잘못된 공유링크입니다.");
}
