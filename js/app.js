class Main {
    constructor() {
        this.els = {
        }
        
        this.total = 0,
        this.dividend = 0
        this.readline = require('readline')
        this.floatValidator = RegExp('^[0-9.]*$', 'im')
        this.registerEvents();
    }

    registerEvents() {
        this.askGrade()
    }
    

    askGrade() {
        var rl = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        var _this = this

        rl.question("Entrez une note [vide=STOP]: ", function q1 (gradeAwr) {

            if (gradeAwr.length < 1 || gradeAwr.toLowerCase() === 'stop') {
                _this.finishRequest(_this.total, _this.dividend)
                rl.close();
                return

            } else if (!_this.floatValidator.test(gradeAwr)) {
                console.log('\nEntrez uniquement des nombres entiers ou à virgule. Veuillez re-essayer.\n')
                rl.close()
                _this.askGrade()
                return
            }

            rl.question("Entrez le coef de cette note [vide=1]: ", function(coefAwr) {                 
                if (coefAwr.length < 1) coefAwr = 1
                
                if (!_this.floatValidator.test(coefAwr)) {
                    console.log('\nEntrez uniquement des nombres entiers ou à virgule. Veuillez re-essayer.\n')
                    rl.close()
                    _this.askGrade()
                    return
                }

                console.log(`\nLa note ${gradeAwr} coef x${coefAwr} a été ajoutée avec sucès !\n`)
                rl.close();
                _this.addGrade(parseFloat(gradeAwr), parseFloat(coefAwr))
                _this.askGrade()

            })
        })
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

            console.log(`\nVotre moyenne est de ${finalGrade}.`)
        } else {
            console.log('\nVeuillez entrer au minimum une note avec un coef supérieur à 0.')
            return
        }
    }

}

new Main()