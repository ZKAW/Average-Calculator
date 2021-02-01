class Main {
    constructor() {
        this.els = {
            total: 0,
            dividend: 0
        }

        this.readline = require('readline')
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

        rl.question("Entrez une note [vide=STOP]: ", function(gradeAwr) {
            if (gradeAwr.length < 1 || gradeAwr.toLowerCase() === 'stop') {
                _this.finishRequest(_this.els.total, _this.els.dividend)
                rl.close();
                return
            }
            rl.question("   -> Entrez le coef de cette note [vide=1]: ", function(coefAwr) {                 
                rl.close();
                {
                    if (coefAwr.length < 1) coefAwr = 1

                    console.log(`\nLa note ${gradeAwr} coef x${coefAwr} a été ajoutée avec sucès !\n`)
                    _this.addGrade(parseFloat(gradeAwr), parseFloat(coefAwr))
                    _this.askGrade()
                }
            })
        })
    }

    calcMoy(total, dividend) {
        const moy = (total/dividend)
        return moy
    }

    addGrade(grade, coef) {
        var res = grade*coef

        this.els.total += res;
        this.els.dividend += coef;
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