if (window.navigator.userAgent === "Mozilla/5.0 Cordova") {
	window.app = {
		notification: {
			alert: () => {
				window.parent.postMessage({ notification: "alert" }, "*");
			}
		}
	};
} else {
	window.app = {
		notification: {
			alert: () => {
				alert("It Browser")
			}
		}
	};
}

let showMessage = window.app.notification.alert;
let btn = document.getElementById("btn-alert");
btn.addEventListener("click", showMessage);
