
const d = document;
export default function contactForm(){
    const $form = document.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    //Manage the error messge on writing wrong text on the input
    $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span)
    });

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {

                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ?
                    d.getElementById($input.name).classList.add("is-active") :
                    d.getElementById($input.name).classList.remove("is-active");
            };

            if (!pattern) {
                return $input.value === "" ?
                    d.getElementById($input.name).classList.add("is-active") :
                    d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    d.addEventListener("submit", (e) => {
        e.preventDefault()
        // alert("Eviando formulario")

        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-responce");

        $loader.classList.remove("none");

        fetch("https://formsubmit.co/ajax/windowhost01@outlook.com", {
            method: "POST",
            body: new FormData(e.target),
            // mode: "cors"
        })

            .then(res => res.ok ? res.json() : Promise.reject(res))

            .then(json => {
                // console.log(json)
                $loader.classList.add("none");
                location.hash = "#thanks"
            })

            .catch(err => {
                console.log(err)
                let message = err.statusText || "Ocurio un Error, intenta nuevamente";
            })

            .finally(() => setTimeout(() => {
                location.hash = "#close"
                $form.reset();
            }, 3000))
    });

};
     

      