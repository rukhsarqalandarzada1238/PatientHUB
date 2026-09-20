
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;


        if (email === "" || password === "") {

            alert("Please enter your email/phone and password.");

            return;
        }


        window.location.href = "dashboard.html";

    });

}

function goToDashboard() {

    window.location.href = "dashboard.html";

}

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.toggle("show");

}

const menuItems =
    document.querySelectorAll(".menu-item");


menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        menuItems.forEach(function(menu) {

            menu.classList.remove("active");

        });


        this.classList.add("active");

    });

});

window.onload = function() {
    const logoutBtn = document.querySelector(".header-link");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "./index.html"; // redirect to login
        });
    }
};
function openClinicResults(type) {

    const clinicInput =
        document.getElementById("clinicSearch");

    const locationInput =
        document.getElementById("clinicLocationSearch");


    const clinic =
        clinicInput
            ? clinicInput.value.trim()
            : "";

    const location =
        locationInput
            ? locationInput.value.trim()
            : "";


    let url = "find-clinic-results.html";


    if (type === "search") {

        const params = new URLSearchParams();


        if (clinic !== "") {

            params.set(
                "clinic",
                clinic
            );

        }


        if (location !== "") {

            params.set(
                "location",
                location
            );

        }


        if (params.toString() !== "") {

            url += "?" + params.toString();

        }

    }


    if (type === "current") {

        url += "?mode=current";

    }


    window.location.href = url;

}
