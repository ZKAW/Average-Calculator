class Main {
    constructor() {
        this.els = {
            addBtn: document.querySelector('.addBtn'),
            resetBtn: document.querySelector('.resetBtn'),
            numberField: document.querySelector('#numberField'),
            coefField: document.querySelector('#coefField'),
            numberLabel: document.querySelector('.numberLabel'),
            coefLabel: document.querySelector('.coefLabel'),
            infoLabel: document.querySelector('.infoLabel'),
            resultLabel: document.querySelector('.resultLabel'),
            
        }
        
        this.lang = undefined
        this.total = 0
        this.dividend = 0
        this.ipAddress = '127.0.0.1'
        this.floatValidator = RegExp('^([0-9]|[0-9][.,][0-9])*$', 'im')
        this.setLang();
        this.registerEvents();
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

    setLang() {
        var countryCode
        var _this = this
        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
            countryCode = response.countryCode
            _this.lang = require(`./config/lang/${countryCode}.js`)
            console.log('lang:',countryCode)
            setHTMLContent()
        })

        .catch((data, status) => {
            console.log('Request failed, using default US language.');
            _this.lang = require(`./config/lang/US.js`)
            setHTMLContent()
        })

        function setHTMLContent() {
            _this.els.addBtn.innerHTML = _this.lang.addBtnText
            _this.els.resetBtn.innerHTML = _this.lang.resetBtnText
            _this.els.numberLabel.innerHTML = _this.lang.numberLabel
            _this.els.coefLabel.innerHTML = _this.lang.coefLabel
            _this.els.numberField.placeholder = _this.lang.numberPlaceholder
            _this.els.coefField.placeholder = _this.lang.coefPlaceholder
        }

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
                this.els.infoLabel.innerHTML = this.lang.negativNumberError
                return
    
            } else {
                this.els.infoLabel.innerHTML = this.lang.successAdd(nbrAwr, coefAwr)
                this.addValue(parseFloat(nbrAwr), parseFloat(coefAwr))
                this.els.resetBtn.classList.remove('nodisplay')
                this.els.resetBtn.style.transition = '';
                this.finishRequest(this.total, this.dividend)
                return
            }
        } else {
            this.els.infoLabel.innerHTML = this.lang.emptyFieldError
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
    

    calcAvrg(total, dividend) {
        const moy = (total/dividend)
        return moy
    }

    addValue(number, coef) {
        var res = number*coef

        this.total += res;
        this.dividend += coef;
    }

    finishRequest(total, dividend) {

        if (dividend != 0) {
            let finalAverage = this.calcAvrg(total, dividend)
            finalAverage = Number((finalAverage).toFixed(2));

            this.els.resultLabel.innerHTML = this.lang.resultMsg(finalAverage)
            return
        } else {
            this.els.resultLabel.innerHTML = this.lang.negativCoefError
            return
        }
    }

}

new Main()