document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const button = document.getElementById("submit-btn");

    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".modal_close");
    const modalTitle = document.getElementById("modal-title");
    const modalName = document.getElementById("modal-name");
    const modalUsername = document.getElementById("modal-username");
    const modalMessage = document.getElementById("modal-message");
    const textarea = document.getElementById("message");


    function cleanInput(input) {
        return input.replace(/[0-9~?!@#$%^&*()\-_=+\[\]{};:'"\\\/<>,.`|]/g, "");
    }

    function isValidText(input) {
        return input.length >= 3;
    }

    function updateButtonState() {
        const title = document.getElementById("title").value;
        const name = document.getElementById("name");
        const surname = document.getElementById("surname");
        name.value = cleanInput(name.value);
        surname.value = cleanInput(surname.value);
        const isValidName = isValidText(name.value);
        const isValidSurname = isValidText(surname.value);
        const agree = document.getElementById("agree-1").checked;

        if (title && isValidName && isValidSurname && agree) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
    
    textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    });

    form.addEventListener("input", updateButtonState);

    const select = document.getElementById("title");
    select.addEventListener("change", updateButtonState);

    button.addEventListener("click", function (e) {
        e.preventDefault();

        modalTitle.textContent = document.getElementById("title").value;
        modalName.textContent = document.getElementById("name").value;
        modalUsername.textContent = document.getElementById("surname").value;
        modalMessage.textContent = document.getElementById("message").value;

        modal.classList.add("show");;
    });

    closeModal.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
