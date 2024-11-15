document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-us form") as HTMLFormElement;
    const nameInput = document.querySelector("#name") as HTMLInputElement;
     const emailInput = document.querySelector("#email") as HTMLInputElement;
    const messageInput = document.querySelector("#message") as HTMLTextAreaElement;

    form.addEventListener("submit", (event) => {
           event.preventDefault(); // Prevent default form submission behavior

        const name = nameInput.value.trim();
         const email = emailInput.value.trim();
        const message = messageInput.value.trim();

         if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
         }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
             return;
        }

        // Show success message
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        form.reset(); // Clear form fields
    });

    /**
     * Validates email format
     * @param email - Email address to validate
     * @returns true if the email is valid, false otherwise
     */
    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
