class CalcController {
    constructor() {
        this.displayEl = document.querySelector('#display')
        this.buttons = document.querySelectorAll('.btn')
        this.operation = []
        this.initialize()
    }
    
    initialize() {
        this.initListeners()
    }
    
    initListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', e => {
                this.handleButtons(button.textContent)                
            }, false)
        })
        
    }
    
    set displayValue(value) {
        return this.displayEl.textContent = value
    }

    handleButtons(value) {
        switch(value) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.addCharacters(parseInt(value))
                break
            
            case '+':
            case '-':
                if (this.operation === 0) {
                    return
                }
                this.addCharacters(value)
                break

            case 'X':
                if (this.operation === 0) {
                    return
                }
                this.addCharacters('*')
                break

            case '÷':
                if (this.operation === 0) {
                    return
                }
                this.addCharacters('/')
                break

            case ',': 
                if (this.operation === 0) {
                    return
                }
                this.addCharacters('.')
                break
            
            case '=':
                if (this.operation === 0) {
                    return
                }
                this.calculate()
                break
            
            case 'CE':
                this.clearCurrentDisplay()
                break
            
            case 'C':
                this.clearCalculator()
                break
        }
    }

    addCharacters(value) {
        if(typeof value === 'number') {
            this.operation.push(value)
            this.displayEl = this.operation
        }


    }

    clearCurrentDisplay() {}
    
    clearCalculator() {}

    calculate() {}













}