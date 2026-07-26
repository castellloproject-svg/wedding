/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        AOS.init({

            duration: 900,

            easing: "ease-out-cubic",

            once: true,

            offset: 80

        });

    }
);


/* =========================================
   PRELOADER
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                    .getElementById("preloader")
                    .classList
                    .add("hide");

            },
            1500
        );

    }
);


/* =========================================
   GUEST NAME
========================================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const guest =
    urlParams.get("to");


const guestElement =
    document.getElementById(
        "guestName"
    );


if (guest) {

    guestElement.textContent =
        decodeURIComponent(guest);

} else {

    guestElement.textContent =
        "YOUR NAME";

}


/* =========================================
   OPEN INVITATION
========================================= */

const openButton =
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


const music =
    document.getElementById(
        "weddingMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


openButton.addEventListener(
    "click",
    () => {

        opening.classList.add(
            "hide"
        );


        mainContent.classList.add(
            "show"
        );


        music.play()
            .then(
                () => {

                    musicButton.classList.add(
                        "playing"
                    );

                }
            )
            .catch(
                () => {}
            );

    }
);


/* =========================================
   MUSIC
========================================= */

musicButton.addEventListener(
    "click",
    () => {

        if (
            music.paused
        ) {

            music.play();

            musicButton.classList.add(
                "playing"
            );

        } else {

            music.pause();

            musicButton.classList.remove(
                "playing"
            );

        }

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
        Date.now();


    const distance =
        weddingDate -
        now;


    if (
        distance <= 0
    ) {

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
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
            ).value.trim();


        const attendance =
            document.querySelector(
                "input[name='attendance']:checked"
            ).value;


        const guests =
            document.getElementById(
                "guestCount"
            ).value;


        const message =
            document.getElementById(
                "rsvpMessage"
            ).value.trim();


        const rsvpData = {

            id: Date.now(),

            name,

            attendance,

            guests,

            message,

            date:
                new Date()
                    .toLocaleString(
                        "id-ID"
                    )

        };


        const existing =
            JSON.parse(
                localStorage.getItem(
                    "weddingRSVP"
                )
            ) || [];


        existing.unshift(
            rsvpData
        );


        localStorage.setItem(

            "weddingRSVP",

            JSON.stringify(
                existing
            )

        );


        saveRSVPToGuestbook(
            rsvpData
        );


        document
            .getElementById(
                "rsvpSuccess"
            )
            .classList
            .add("show");


        rsvpForm.reset();


        setTimeout(
            () => {

                document
                    .getElementById(
                        "rsvpSuccess"
                    )
                    .classList
                    .remove("show");

            },
            5000
        );

    }
);


/* =========================================
   RSVP -> GUESTBOOK
========================================= */

function saveRSVPToGuestbook(
    data
) {

    if (
        !data.message
    ) {

        return;

    }


    const comments =
        JSON.parse(
            localStorage.getItem(
                "weddingComments"
            )
        ) || [];


    comments.unshift({

        id: Date.now(),

        name:
            data.name,

        text:
            data.message,

        attendance:
            data.attendance,

        guests:
            data.guests,

        date:
            new Date()
                .toLocaleString(
                    "id-ID"
                )

    });


    localStorage.setItem(

        "weddingComments",

        JSON.stringify(
            comments
        )

    );


    renderComments();

}


/* =========================================
   WISH FORM
========================================= */

const wishForm =
    document.getElementById(
        "wishForm"
    );


wishForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById(
                "wishName"
            ).value.trim();


        const text =
            document.getElementById(
                "wishText"
            ).value.trim();


        if (
            !name ||
            !text
        ) {

            return;

        }


        const comments =
            JSON.parse(
                localStorage.getItem(
                    "weddingComments"
                )
            ) || [];


        comments.unshift({

            id: Date.now(),

            name,

            text,

            attendance:
                "Pesan",

            guests:
                "",

            date:
                new Date()
                    .toLocaleString(
                        "id-ID"
                    )

        });


        localStorage.setItem(

            "weddingComments",

            JSON.stringify(
                comments
            )

        );


        wishForm.reset();


        renderComments();

    }
);


/* =========================================
   RENDER COMMENTS
========================================= */

function renderComments() {

    const list =
        document.getElementById(
            "commentsList"
        );


    const count =
        document.getElementById(
            "commentCount"
        );


    const comments =
        JSON.parse(
            localStorage.getItem(
                "weddingComments"
            )
        ) || [];


    count.textContent =

        comments.length +

        (
            comments.length === 1
                ? " MESSAGE"
                : " MESSAGES"
        );


    if (
        comments.length === 0
    ) {

        list.innerHTML = `

            <div class="empty-comments">

                Jadilah orang pertama
                yang meninggalkan pesan.

            </div>

        `;

        return;

    }


    list.innerHTML =
        comments
            .map(
                comment => {

                    const status =

                        comment.attendance ===
                        "Hadir"

                            ? `
                                <div class="comment-status">
                                    ✓ Attending ·
                                    ${comment.guests}
                                    Guest
                                </div>
                              `

                            : comment.attendance ===
                              "Tidak Hadir"

                                ? `
                                    <div class="comment-status">
                                        ♡ Sending love from afar
                                    </div>
                                  `

                                : "";


                    return `

                        <article class="comment">

                            <div class="comment-top">

                                <div class="comment-name">

                                    ${escapeHTML(
                                        comment.name
                                    )}

                                </div>

                                <div class="comment-time">

                                    ${escapeHTML(
                                        comment.date
                                    )}

                                </div>

                            </div>

                            ${status}

                            <div class="comment-text">

                                ${escapeHTML(
                                    comment.text
                                )}

                            </div>

                        </article>

                    `;

                }
            )
            .join("");

}


renderComments();


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(
    text
) {

    return String(text)

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
   COPY ACCOUNT
========================================= */

const copyAccount =
    document.getElementById(
        "copyAccount"
    );


copyAccount.addEventListener(
    "click",
    async () => {

        const number =
            document
                .getElementById(
                    "accountNumber"
                )
                .textContent
                .trim();


        try {

            await navigator
                .clipboard
                .writeText(
                    number
                );


            document
                .getElementById(
                    "copyMessage"
                )
                .textContent =
                "Nomor rekening berhasil disalin.";

        } catch {

            document
                .getElementById(
                    "copyMessage"
                )
                .textContent =
                "Gagal menyalin nomor rekening.";

        }


        setTimeout(
            () => {

                document
                    .getElementById(
                        "copyMessage"
                    )
                    .textContent =
                    "";

            },
            3000
        );

    }
);


/* =========================================
   LIGHTBOX
========================================= */

const galleryImages =
    Array.from(
        document.querySelectorAll(
            ".gallery-item img"
        )
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


let currentImage = 0;


function openLightbox(
    index
) {

    currentImage =
        index;


    lightboxImage.src =
        galleryImages[
            currentImage
        ].src;


    lightbox.classList.add(
        "active"
    );

}


function changeImage(
    direction
) {

    currentImage +=
        direction;


    if (
        currentImage <
        0
    ) {

        currentImage =
            galleryImages.length - 1;

    }


    if (
        currentImage >=
        galleryImages.length
    ) {

        currentImage = 0;

    }


    lightboxImage.src =
        galleryImages[
            currentImage
        ].src;

}


galleryImages.forEach(
    (image, index) => {

        image.addEventListener(
            "click",
            () => {

                openLightbox(
                    index
                );

            }
        );

    }
);


document
    .getElementById(
        "lightboxClose"
    )
    .addEventListener(
        "click",
        () => {

            lightbox.classList.remove(
                "active"
            );

        }
    );


document
    .getElementById(
        "lightboxPrev"
    )
    .addEventListener(
        "click",
        () => {

            changeImage(
                -1
            );

        }
    );


document
    .getElementById(
        "lightboxNext"
    )
    .addEventListener(
        "click",
        () => {

            changeImage(
                1
            );

        }
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key ===
            "Escape"
        ) {

            lightbox.classList.remove(
                "active"
            );

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            changeImage(
                1
            );

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            changeImage(
                -1
            );

        }

    }
);


/* =========================================
   BOTTOM NAV ACTIVE
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".bottom-navigation a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current =
            "home";


        sections.forEach(
            section => {

                const top =
                    section.offsetTop -
                    300;


                if (
                    window.scrollY >=
                    top
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);
