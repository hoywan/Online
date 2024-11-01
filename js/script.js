//WAN Ho Yeung SID: 57166350

document.addEventListener("DOMContentLoaded", () => {
	//header scroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (event) {
			event.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 51, // 51 is the height of the header
					behavior: "smooth",
				});

				const homeHeader = document.getElementById("headerContainer");
				homeHeader.classList.remove("show_m");
				homeHeader.classList.add("hidden_m");
				document.querySelector("#toggleButton i").classList.remove("lni-close");
				document.querySelector("#toggleButton i").classList.add("lni-menu");				
			}
		});
	});
	//header scroll end

	//Mobile Menu Button
	const toggleButton = document.querySelector("#toggleButton");
	toggleButton.addEventListener("click", () => {
		const homeHeader = document.getElementById("headerContainer");
		if (homeHeader.classList.contains("show_m")) { //Close the header
			document.querySelector("#toggleButton i").classList.remove("lni-close");
			document.querySelector("#toggleButton i").classList.add("lni-menu");

			if (homeHeader.classList.contains("headerslideInFromTop")) {
				homeHeader.classList.remove("headerslideInFromTop");
				document.querySelector("header").classList.remove("headerslideInFromTop");
			}

			homeHeader.classList.add("headerslideOutToTop");
			document.querySelector("header").classList.add("headerslideOutToTop");

			setTimeout(() => {
				homeHeader.classList.remove("show_m");
				homeHeader.classList.add("hidden_m");
			}, 500);// Modify class after delay of 0.5s

		} else {
			homeHeader.classList.add("show_m"); //Open the header
			homeHeader.classList.remove("hidden_m");
			document.querySelector("#toggleButton i").classList.remove("lni-menu");
			document.querySelector("#toggleButton i").classList.add("lni-close");

			if (homeHeader.classList.contains("headerslideOutToTop")) {
				homeHeader.classList.remove("headerslideOutToTop");
				document.querySelector("header").classList.remove("headerslideOutToTop");
			}

			homeHeader.classList.add("headerslideInFromTop");
			document.querySelector("header").classList.add("headerslideInFromTop");

		}
	});
	
	//Mobile Menu Button end

	//Reg/Login
	const regIcon = document.querySelector("#regIcon");
	const loginIcon = document.querySelector("#loginIcon");
	const regSection = document.querySelector("#regSection");
	const loginSection = document.querySelector("#loginSection");
	const regHeaderLink1 = document.querySelector("#regHeaderLink1");
	const regHeaderLink2 = document.querySelector("#regHeaderLink2");


	regIcon.addEventListener("click", () => {
		regSection.classList.remove("hidden");
		loginSection.classList.add("hidden");
		regHeaderLink1.href = "#regSection";
		regHeaderLink2.href = "#regSection";
	});

	loginIcon.addEventListener("click", () => {
		regSection.classList.add("hidden");
		loginSection.classList.remove("hidden");
		regHeaderLink1.href = "#loginSection";
		regHeaderLink2.href = "#loginSection";
	});

	document.getElementById('lastName').addEventListener('input', function (event) {
		this.value = this.value.toUpperCase();
		this.value = this.value.replace(/[^A-Za-z]/g, '');
	});

	document.getElementById('firstName').addEventListener('input', function (event) {
		this.value = this.value.replace(/[^A-Za-z\s]/g, '');
	});

	const id = document.querySelector("#id");
	id.addEventListener("input", () => {
		if ((id.value.length == 7) && (id.value.indexOf("(") == -1)) { //if the length is 7 and there is no "("
			id.value += "(";
		}
		else if ((id.value.length == 9) && (id.value.indexOf(")") == -1)) { //if the length is 9 and there is no ")"
			id.value += ")";
		}
	});
	
	//Reg/Login end

	//BotAnimation

	const botToggle = document.querySelector("#botToggle");
	const botContainer = document.querySelector("#botContainer");

	//Prevent unintented loading of the bot if the user don't clicks the button

	document.getElementById('botToggle').addEventListener('click', function() {
		var botContainer = document.getElementById('botContainer');
		if (!botContainer.querySelector('iframe')) {
			var iframe = document.createElement('iframe');
			iframe.src = 'https://webchat.botframework.com/embed/HousingBot-bot?s=WBLg3SgxvMw.h3e_pKIhgAejRnmyhHUgxE9M_YO_tDbrNrlecrwUZdQ';
			iframe.className = 'bot-frame';
			botContainer.appendChild(iframe);
		}
	});

	let isBotVisible = false;
	
	botToggle.addEventListener("click", () => {
		isBotVisible = !isBotVisible;
		
		if (isBotVisible) {
			botContainer.classList.toggle('active', isBotVisible);
			botContainer.classList.remove("slideOutToRight");
			botContainer.classList.add("slideInFromRight");
		} else {
			botContainer.classList.remove("slideInFromRight");
			botContainer.classList.add("slideOutToRight");
			setTimeout(() => {
				botContainer.classList.toggle('active', isBotVisible);
			}, 500); //wait for 0.5s before hiding the bot after slideOutToRight animation
		}
		
		// Change icon when bot is visible
		botToggle.innerHTML = isBotVisible 
			? '<i style="font-size: 34px" class="lni lni-close"></i>'
			: '<svg width="60" height="60" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M6.25 9.77344C6.25 9.35922 6.58579 9.02344 7 9.02344H17C17.4142 9.02344 17.75 9.35922 17.75 9.77344C17.75 10.1877 17.4142 10.5234 17 10.5234H7C6.58579 10.5234 6.25 10.1877 6.25 9.77344Z" fill="#FFFFF"/><path d="M7 12.0234C6.58579 12.0234 6.25 12.3592 6.25 12.7734C6.25 13.1877 6.58579 13.5234 7 13.5234H12C12.4142 13.5234 12.75 13.1877 12.75 12.7734C12.75 12.3592 12.4142 12.0234 12 12.0234H7Z" fill="#FFFFF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.53125C2.5 4.28861 3.50736 3.28125 4.75 3.28125H19.25C20.4926 3.28125 21.5 4.28861 21.5 5.53125V16.0796C21.5 17.3223 20.4926 18.3296 19.25 18.3296H15.1014L12.6025 21.6956C12.461 21.8861 12.2377 21.9985 12.0003 21.9985C11.763 21.9985 11.5396 21.8861 11.3981 21.6956L8.89931 18.3296H4.75C3.50736 18.3296 2.5 17.3223 2.5 16.0796V5.53125ZM4.75 4.78125C4.33579 4.78125 4 5.11704 4 5.53125V16.0796C4 16.4938 4.33579 16.8296 4.75 16.8296H9.2766C9.51396 16.8296 9.73731 16.942 9.87879 17.1326L12.0003 19.9903L14.1219 17.1326C14.2634 16.942 14.4867 16.8296 14.7241 16.8296H19.25C19.6642 16.8296 20 16.4938 20 16.0796V5.53125C20 5.11704 19.6642 4.78125 19.25 4.78125H4.75Z" fill="#FFFFF"/></svg>';
	});
	//Bot end

	//Scroll to top
	// Smooth scroll to top when the button is clicked
	document
		.querySelector(".back-to-top")
		.addEventListener("click", function (event) {
			event.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});

	// show_m or hide the button based on scroll position
	window.addEventListener("scroll", function () {
		var scrollPosition = window.scrollY || document.documentElement.scrollTop;
		if (
			scrollPosition >
			(document.documentElement.scrollHeight - window.innerHeight) / 2
		) {
			document.querySelector(".back-to-top").style.display = "block";
		} else {
			document.querySelector(".back-to-top").style.display = "none";
		}
	});

	//Scroll to top end

	//footer Copyright
	const copyrightDiv = document.getElementById("copyright");
	const currentYear = new Date().getFullYear();
	const companyName = "SmartHousing Solutions Ltd.";

	if (copyrightDiv) {
		copyrightDiv.innerHTML = `&copy; ${currentYear} ${companyName} All rights reserved.`;
	}
	//footer Copyright end
});

//Expanding Function

function Expand(ExpandItem, button) {
	
	if (document.querySelector(button).classList.contains("lni-minus")) { //Check if the container is expanded or not
		//If expanded, close the container
		document.querySelector(button).classList.add("lni-plus");
		document.querySelector(button).classList.remove("lni-minus");

		document.querySelector(ExpandItem).style.animation="fadeOut 0.3s ease-in";

		setTimeout(() => {
			document.querySelector(ExpandItem).style.display = 'none';
		}, 300);// Modify class after delay of 0.3s
	} else {
		//If not expanded, expand the container
		document.querySelector(button).classList.add("lni-minus");
		document.querySelector(button).classList.remove("lni-plus");
		document.querySelector(ExpandItem).style.animation="fadeIn 0.2s ease-in";
		setTimeout(() => {
			document.querySelector(ExpandItem).style.display = 'block';
		}, 200);// Modify class after delay of 0.2s	
	}
}

function ExpandFromHeader(ExpandItem, button) {
	//If not expanded, expand the container
	document.querySelector(button).classList.add("lni-minus");
	document.querySelector(button).classList.remove("lni-plus");
	document.querySelector(ExpandItem).style.animation="fadeIn 0.2s ease-in";
	document.querySelector(ExpandItem).style.display = 'block';
}