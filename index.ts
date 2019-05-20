if (window.navigator.userAgent.indexOf("ics-cordova") !== -1) {
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
				alert("It is a Browser");
			}
		}
	};
}

let showMessage = window.app.notification.alert;
let btn = document.getElementById("btn-alert");
btn.addEventListener("click", showMessage);
