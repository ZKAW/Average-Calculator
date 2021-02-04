class Main {
    constructor() {
        this.els = {
            addBtn: document.querySelector('.addBtn'),
            resetBtn: document.querySelector('.resetBtn'),
            numberField: document.querySelector('#numberField'),
            coefField: document.querySelector('#coefField'),
            infoLabel: document.querySelector('.infoLabel'),
            resultLabel: document.querySelector('.resultLabel')
        }
        
        this.total = 0,
        this.dividend = 0
        this.floatValidator = RegExp('^([0-9]|[0-9][.,][0-9])*$', 'im')
        this.registerEvents();
        // this.askGrade()
    }

    registerEvents() {
        // Btn click listener
        this.els.addBtn.addEventListener('click', () => {
            this.getInput()
        })

        this.els.resetBtn.addEventListener('click', () => {
            this.resetInput()
        })

        // Key listener
        document.addEventListener("keydown", event => {
            if (event.key == 'Enter') {
                this.getInput()
            }
        })
    }

    getInput() {
        let nbrAwr = this.els.numberField.value.replace(',','.')
        let coefAwr = this.els.coefField.value.replace(',','.')

        if (nbrAwr.length > 0) {
            this.els.numberField.value = ''
            this.els.coefField.value = ''
            this.els.numberField.focus()

            if (coefAwr.length < 1 || coefAwr == undefined || coefAwr == null) coefAwr = '1'
        
            if (!this.floatValidator.test(nbrAwr) || !this.floatValidator.test(coefAwr)) {
                this.els.infoLabel.innerHTML = "Veuillez entrer uniquement des chiffres d'une valeur supérieure à zéro."
                return
    
            } else {
                this.els.infoLabel.innerHTML = `La note ${nbrAwr} coef x${coefAwr} a été ajoutée avec succès !`
                this.addGrade(parseFloat(nbrAwr), parseFloat(coefAwr))
                this.els.resetBtn.classList.remove('nodisplay')
                this.els.resetBtn.style.transition = '';
                this.finishRequest(this.total, this.dividend)
                return
            }
        } else {
            this.els.infoLabel.innerHTML = 'Veuillez remplir au moins la case "Note"'
            return
        }
    }

    resetInput() {
        this.els.resetBtn.style.transition = 'none';
        this.els.resetBtn.classList.add('nodisplay')
        this.els.numberField.value = ''
        this.els.coefField.value = ''
        this.total = 0
        this.dividend = 0
        this.els.infoLabel.innerHTML = ''
        this.els.resultLabel.innerHTML = ''
        this.els.numberField.focus()
    }
    

    calcMoy(total, dividend) {
        const moy = (total/dividend)
        return moy
    }

    addGrade(grade, coef) {
        var res = grade*coef

        this.total += res;
        this.dividend += coef;
    }

    finishRequest(total, dividend) {

        if (dividend != 0) {
            let finalGrade = this.calcMoy(total, dividend)
            finalGrade = Number((finalGrade).toFixed(2));

            this.els.resultLabel.innerHTML = `Votre moyenne est de ${finalGrade}.`
            return
        } else {
            this.els.resultLabel.innerHTML = 'Veuillez entrer au minimum une note avec un coef supérieur à 0.'
            return
        }
    }

}

new Main()