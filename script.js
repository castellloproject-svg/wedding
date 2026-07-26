/* =====================================================
   OPEN INVITATION
===================================================== */

const openButton =
    document.getElementById("openInvitation");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("mainContent");


openButton.addEventListener(
    "click",
    function () {

        opening.classList.add("hide");

        mainContent.classList.add("visible");

        document.body.style.overflow = "auto";

        setTimeout(
            function () {

                opening.style.display = "none";

            },
            1000
        );

    }
);


/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate =
    new Date(
        "August 18, 2026 09:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerText =
            "00";

        document.getElementById("hours").innerText =
            "00";

        document.getElementById("minutes").innerText =
            "00";

        document.getElementById("seconds").innerText =
            "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   RSVP / WISHES LOCAL STORAGE
===================================================== */

const rsvpForm =
    document.getElementById("rsvpForm");

const wishesList =
    document.getElementById("wishesList");


function getWishes() {

    return JSON.parse(
        localStorage.getItem(
            "weddingWishes"
        )
    ) || [];

}


/* =====================================================
   DISPLAY WISHES
===================================================== */

function displayWishes() {

    const wishes =
        getWishes();

    wishesList.innerHTML = "";


    if (wishes.length === 0) {

        wishesList.innerHTML = `

            <div class="wish-card">

                <div class="wish-top">

                    <span class="wish-name">
                        Budi & Leta
                    </span>

                    <span class="wish-status">
                        WELCOME
                    </span>

                </div>

                <p class="wish-message">

                    Tuliskan ucapan dan doa terbaik
                    untuk kedua mempelai.

                </p>

            </div>

        `;

        return;

    }


    wishes
        .slice()
        .reverse()
        .forEach(
            function (wish) {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "wish-card";


                card.innerHTML = `

                    <div class="wish-top">

                        <span class="wish-name">
                            ${escapeHTML(wish.name)}
                        </span>

                        <span class="wish-status">
                            ${escapeHTML(wish.attendance)}
                        </span>

                    </div>


                    <p class="wish-message">

                        ${escapeHTML(wish.message)}

                    </p>


                    <span class="wish-date">

                        ${escapeHTML(wish.date)}

                    </span>

                `;


                wishesList.appendChild(
                    card
                );

            }
        );

}


/* =====================================================
   SUBMIT RSVP
===================================================== */

rsvpForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "rsvpName"
            ).value.trim();


        const attendance =
            document.getElementById(
                "attendance"
            ).value;


        const guestCount =
            document.getElementById(
                "guestCount"
            ).value;


        const message =
            document.getElementById(
                "rsvpMessage"
            ).value.trim();


        if (
            !name ||
            !attendance ||
            !message
        ) {

            alert(
                "Silakan lengkapi data terlebih dahulu."
            );

            return;

        }


        const wishes =
            getWishes();


        wishes.push({

            name:
                name,

            attendance:
                attendance,

            guestCount:
                guestCount,

            message:
                message,

            date:
                new Date()
                    .toLocaleDateString(
                        "id-ID",
                        {
                            day:
                                "numeric",

                            month:
                                "long",

                            year:
                                "numeric"
                        }
                    )

        });


        localStorage.setItem(

            "weddingWishes",

            JSON.stringify(
                wishes
            )

        );


        displayWishes();


        rsvpForm.reset();


        alert(
            "Terima kasih. Konfirmasi dan ucapan Anda telah ditambahkan."
        );


        document
            .querySelector(
                ".wishes-section"
            )
            .scrollIntoView({

                behavior:
                    "smooth"

            });

    }
);


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;

}


/* =====================================================
   COPY ACCOUNT
===================================================== */

function copyAccount(
    number,
    button
) {

    navigator.clipboard
        .writeText(
            number
        )
        .then(
            function () {

                const original =
                    button.innerText;


                button.innerText =
                    "BERHASIL DISALIN";


                setTimeout(
                    function () {

                        button.innerText =
                            original;

                    },
                    2000
                );

            }
        )
        .catch(
            function () {

                alert(
                    "Nomor rekening: "
                    + number
                );

            }
        );

}


/* =====================================================
   AOS
===================================================== */

AOS.init({

    duration:
        900,

    once:
        true,

    offset:
        80

});


/* =====================================================
   GLIGHTBOX
===================================================== */

const lightbox =
    GLightbox({

        selector:
            ".glightbox",

        touchNavigation:
            true,

        loop:
            true,

        zoomable:
            true

    });


/* =====================================================
   PARALLAX SIMPLE
===================================================== */

window.addEventListener(
    "scroll",
    function () {

        const hero =
            document.querySelector(
                ".hero-image"
            );


        if (!hero) return;


        const scroll =
            window.scrollY;


        if (
            scroll <
            window.innerHeight
        ) {

            hero.style.transform =
                `translateY(${scroll * 0.15}px) scale(1.05)`;

        }

    }
);


/* =====================================================
   INITIAL
===================================================== */

displayWishes();

document.body.style.overflow =
    "hidden";
