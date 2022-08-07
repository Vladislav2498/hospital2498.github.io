'use strict'

class Modal {
    constructor() {
        this.modalBackground = document.createElement('div')
        this.container = document.createElement('div')
        this.divButton = document.createElement('div')
        this.closeButton = document.createElement('button')
        this.submitButton = document.createElement('button')
        this.p = document.createElement('p')
    }


    createElement() {
        this.modalBackground.classList.add('modal-background')
        this.modalBackground.append(this.container)
        this.container.classList.add('container', 'modal')
        this.closeButton.innerText = 'CANCEL'
        this.closeButton.classList.add('cancelVisit', 'modalButton', 'close', 'btn', 'btn-outline-danger')
        this.submitButton.classList.add('createVisit', 'modalButton', 'btn', 'btn-success')
        this.submitButton.type = 'submit';


        this.closeButton.addEventListener('click', e => {
            this.container.innerHTML = ''
            this.container.classList.remove('modal')
            this.modalBackground.classList.remove('modal-background')
        })



        this.submitButton.innerText = 'CREATE VISIT'

        this.container.append(
            this.divButton,
        )
        this.divButton.append(
            this.closeButton,
            this.submitButton
        )

        this.divButton.classList.add('divButton')
        this.divButton.append(this.closeButton)

        this.container.insertAdjacentHTML('afterbegin', `

        <div>
        <p class="choose-doctor">
    Select the doctor you would like to visit:
        </p>
        <select id="select-doctor" class="form-select" aria-label="Default select example">
            <option selected>Choose your doctor</option>
            <option value="1">dentist</option>
            <option value="2">therapist</option>
            <option value="3">cardiologist</option>
        </select>
        <form class=" row g-3">
            <div class="row input-margin">
            <div class="col-md-6">
                <label for="inputNameDentist" class="form-label">Name</label>
                <input type="email" class="form-control" id="inputNameDentist" placeholder="Jhon" >
            </div>
            <div class="col-md-6">
                <label for="inputSurnameDentist" class="form-label">Surname</label>
                <input type="password" class="form-control" id="inputSurnameDentist" placeholder="Walker">
            </div>
            </div>
            <div class="col-12">
                <label for="inputWorriesDentist" class="form-label">Purpose of visit</label>
                <input type="text" class="form-control" id="inputWorriesDentist" placeholder="What worries you?" >
            </div>
            <div class="col-12">
                <label for="inputDescriptionDentist" class="form-label">description of the visit</label>
                <input type="text" class="form-control" id="inputDescriptionDentist" placeholder="Briefly describe your complaints" >
            </div>
            <div class="col-md-6">
                <label for="inputUrgencyDentist" class="form-label">Urgency</label>
                <select id="inputUrgencyDentist" class="form-select">
                    <option selected>Choose...</option>
                    <option>ordinary</option>
                    <option>priority</option>
                    <option>urgent</option>
                </select>
            </div>
        </div>
        `)

    }

    render(selector) {
        this.createElement();
        document.querySelector("body").append(this.modalBackground);

    }
}


openModalButton.addEventListener('click', e => {
    new Modal().render();
})


class visitDentist extends Modal {
    constructor(container) {
        super(container);
        this.dentistContainer = document.createElement('div')
    }

    createElement() {
        super.createElement();
        this.dentistContainer.classList.add('.dentistContainer')
        this.dentistContainer.insertAdjacentHTML('beforeend', `
         <div id="dentist" class=" col-12">
                <label for="inputLastVisitDentist" class="form-label">Your last visit to doctor:</label>
                <input type="text" class="form-control" id="inputLastVisitDentist" placeholder="01.01.2021" ">
          </div>
        `)
        this.container.append(this.dentistContainer)
    }


    render(selector) {
        this.createElement();
        // document.querySelector("body").append(this.modalBackground);
    }
}
