class Popup {
    constructor (selector) {
        this.popup = document.querySelector(selector)
        this.open = document.querySelector('.open')
        this.close = this.popup.querySelector('.close')
        this.content = this.popup.querySelector('.popup__body')
        this.event()
    }

    event() {
        if(this.popup) {
            document.addEventListener('click', (e) => {
                if(e.target === this.open) {
                    this.openEl()
                }   
                if(this.popup.classList.contains('active')) {
                    if(e.target === this.close) {
                        this.closeEl()
                    }
                }
                this.popup.addEventListener('click', (e) => {
                    if(e.target !== this.content) {
                        this.closeEl()
                        // console.log('f')
                    }
                })
            })
        }
    }
    openEl() {
        this.popup.classList.add('active')
        this.content.classList.add('active')
        document.body.style.overflow = 'hidden'
    }
    closeEl() {
        this.popup.classList.remove('active')
        this.content.classList.remove('active')
        document.body.style.overflow = 'auto'
    }
}