class Main {
    constructor() {
        this.els = {
            addBtn: document.querySelector('.addBtn'),
            numberField: document.querySelector('#numberField'),
            coefField: document.querySelector('#coefField'),
            infoLabel: document.querySelector('.infoLabel')
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

        this.els.numberField.value = ''
        this.els.coefField.value = ''
        this.els.numberField.focus()


        if (coefAwr.length < 1 || coefAwr == undefined || coefAwr == null) coefAwr = '1'
        
        if (nbrAwr.length > 0) {
            if (!this.floatValidator.test(nbrAwr) || !this.floatValidator.test(coefAwr)) {
                this.els.infoLabel.innerHTML = 'Veuillez entrer uniquement des nombres entiers ou à virgule positifs.'
                return
    
            } else {
                // this.els.infoLabel.innerHTML = `\nLa note ${nbrAwr} coef x${coefAwr} a été ajoutée avec succès !`
                this.addGrade(parseFloat(nbrAwr), parseFloat(coefAwr))
                this.finishRequest(this.total, this.dividend)
                return
            }
        }

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

            this.els.infoLabel.innerHTML = `\nVotre moyenne est de ${finalGrade}.`
            return
        } else {
            this.els.infoLabel.innerHTML = '\nVeuillez entrer au minimum une note avec un coef supérieur à 0.'
            return
        }
    }

}

new Main()