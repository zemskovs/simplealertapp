window.app = {
	notification: {
		alert: () => {
			window.parent.postMessage("data", "*");
		}
	}
};

let showMessage = window.app.notification.alert;
let btn = document.getElementById("btn-alert");
btn.addEventListener("click", showMessage);
