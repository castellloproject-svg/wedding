/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("page-loader")
            .classList
            .add("hide");

    }, 1200);

});


/* =========================================
   AOS
========================================= */

AOS.init({

    duration: 1000,

    easing: "ease-out-cubic",

    once: true,

    offset: 100

});


/* =========================================
   GUEST NAME FROM URL
========================================= */

const params = new URLSearchParams(
    window.location.search
);

const guestName =
    params.get("to");


if (guestName) {

    document
        .getElementById("guestName")
        .textContent =
        decodeURIComponent(guestName);

}


/* =========================================
   OPEN INVITATION
========================================= */

const openInvitation =
    document.getElementById(
        "openInvitation"
    );

const opening =
    document.getElementById(
        "opening"
    );

const mainContent =
    document.getElementById(
        "mainContent"
    );

const weddingMusic =
    document.getElementById(
        "weddingMusic"
    );


openInvitation.addEventListener(
    "click",
    () => {

        weddingMusic
            .play()
            .catch(() => {

                console.log(
                    "Browser memblokir autoplay."
                );

            });


        opening.classList.add(
            "hide"
        );


        mainContent.classList.add(
            "show"
        );


        document.body.classList.remove(
            "locked"
        );


        setTimeout(() => {

            opening.style.display =
                "none";

        }, 1500);

    }
);


/* =========================================
   COUNTDOWN
========================================= */

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

        document.getElementById(
            "days"
        ).textContent = "00";

        document.getElementById(
            "hours"
        ).textContent = "00";

        document.getElementById(
            "minutes"
        ).textContent = "00";

        document.getElementById(
            "seconds"
        ).textContent = "00";

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


    document.getElementById(
        "days"
    ).textContent =
        String(days)
        .padStart(2, "0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours)
        .padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes)
        .padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds)
        .padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item img"
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );


const prevImage =
    document.getElementById(
        "prevImage"
    );


const nextImage =
    document.getElementById(
        "nextImage"
    );


let currentImage = 0;


const galleryImages =
    Array.from(
        galleryItems
    );


function showImage(index) {

    if (
        index < 0
    ) {

        index =
            galleryImages.length - 1;

    }


    if (
        index >=
        galleryImages.length
    ) {

        index = 0;

    }


    currentImage = index;


    lightboxImage.src =
        galleryImages[
            currentImage
        ].src;

}


galleryItems.forEach(
    (image, index) => {

        image.addEventListener(
            "click",
            () => {

                currentImage =
                    index;

                showImage(
                    currentImage
                );

                lightbox.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);


closeLightbox.addEventListener(
    "click",
    closeGallery
);


function closeGallery() {

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


prevImage.addEventListener(
    "click",
    () => {

        showImage(
            currentImage - 1
        );

    }
);


nextImage.addEventListener(
    "click",
    () => {

        showImage(
            currentImage + 1
        );

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) return;


        if (
            event.key === "Escape"
        ) {

            closeGallery();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            showImage(
                currentImage - 1
            );

        }


        if (
            event.key === "ArrowRight"
        ) {

            showImage(
                currentImage + 1
            );

        }

    }
);


/* =========================================
   SWIPE LIGHTBOX MOBILE
========================================= */

let touchStartX = 0;


lightbox.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    }
);


lightbox.addEventListener(
    "touchend",
    (event) => {

        const touchEndX =
            event.changedTouches[0]
                .screenX;


        const difference =
            touchStartX -
            touchEndX;


        if (
            Math.abs(difference)
            < 50
        ) return;


        if (
            difference > 0
        ) {

            showImage(
                currentImage + 1
            );

        } else {

            showImage(
                currentImage - 1
            );

        }

    }
);


/* =========================================
   RSVP
========================================= */

const rsvpForm =
    document.getElementById(
        "rsvpForm"
    );


rsvpForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "rsvpName"
            ).value;


        const attendance =
            document.querySelector(
                "input[name='attendance']:checked"
            ).value;


        const count =
            document.getElementById(
                "guestCount"
            ).value;


        const message =
            document.getElementById(
                "rsvpMessage"
            ).value;


        const text =
`RSVP WEDDING ANANG & AMELIA

Nama: ${name}
Kehadiran: ${attendance}
Jumlah Tamu: ${count}
Pesan: ${message}`;


        const whatsappNumber =
            "6281234567890";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(
                text
            );


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


/* =========================================
   WEDDING WISHES
========================================= */

const wishForm =
    document.getElementById(
        "wishForm"
    );


const wishesList =
    document.getElementById(
        "wishesList"
    );


wishForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "wishName"
            ).value;


        const text =
            document.getElementById(
                "wishText"
            ).value;


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "wish-card";


        card.innerHTML = `

            <p>
                "${escapeHTML(text)}"
            </p>

            <strong>
                — ${escapeHTML(name)}
            </strong>

        `;


        wishesList.prepend(
            card
        );


        wishForm.reset();

    }
);


/* =========================================
   HTML SECURITY
========================================= */

function escapeHTML(
    value
) {

    return value
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================
   COPY BANK ACCOUNT
========================================= */

const copyAccount =
    document.getElementById(
        "copyAccount"
    );


const accountNumber =
    document.getElementById(
        "accountNumber"
    );


const copyMessage =
    document.getElementById(
        "copyMessage"
    );


copyAccount.addEventListener(
    "click",
    async () => {

        try {

            await navigator.clipboard.writeText(
                accountNumber.textContent.trim()
            );


            copyMessage.textContent =
                "Nomor rekening berhasil disalin.";


            setTimeout(
                () => {

                    copyMessage.textContent =
                        "";

                },
                2500
            );


        } catch (error) {

            copyMessage.textContent =
                "Gagal menyalin nomor rekening.";

        }

    }
);


/* =========================================
   MENU DRAWER
========================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const menuDrawer =
    document.getElementById(
        "menuDrawer"
    );


const closeMenu =
    document.getElementById(
        "closeMenu"
    );


menuButton.addEventListener(
    "click",
    () => {

        menuDrawer.classList.add(
            "active"
        );

    }
);


closeMenu.addEventListener(
    "click",
    () => {

        menuDrawer.classList.remove(
            "active"
        );

    }
);


document
    .querySelectorAll(
        ".drawer-content a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menuDrawer
                        .classList
                        .remove(
                            "active"
                        );

                }
            );

        }
    );


/* =========================================
   ACTIVE BOTTOM NAV
========================================= */

const navItems =
    document.querySelectorAll(
        ".bottom-nav .nav-item[href]"
    );


const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current =
            "home";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop
                    - 300;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.id;

                }

            }
        );


        navItems.forEach(
            item => {

                item.classList.remove(
                    "active"
                );


                if (
                    item.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   PARALLAX
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(
                ".hero-image"
            );


        if (!hero) return;


        const scroll =
            window.scrollY;


        hero.style.transform =
            `translateY(${scroll * .2}px) scale(1.05)`;

    }
);
