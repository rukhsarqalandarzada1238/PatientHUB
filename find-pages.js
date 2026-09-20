        function toggleSidebar() {

            const sidebar =
                document.getElementById("sidebar");

            if (!sidebar) return;

            sidebar.classList.toggle("show");
        }


        function openDoctorResults(type) {

            const doctor =
                document.getElementById("doctorSearch").value.trim();

            const location =
                document.getElementById("locationSearch").value.trim();


            let url = "find-doctor-results.html";


            if (type === "search") {

                const params = new URLSearchParams();

                if (doctor !== "") {
                    params.set("doctor", doctor);
                }

                if (location !== "") {
                    params.set("location", location);
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

        document.addEventListener("click", function(event) {

            const sidebar =
                document.getElementById("sidebar");

            const hamburger =
                document.querySelector(".hero-hamburger");

            if (!sidebar || !hamburger) return;


            if (
                window.innerWidth <= 768 &&
                sidebar.classList.contains("show") &&
                !sidebar.contains(event.target) &&
                !hamburger.contains(event.target)
            ) {

                sidebar.classList.remove("show");

            }

        });