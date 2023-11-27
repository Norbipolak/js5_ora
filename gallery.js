const Gallery = {
    img: document.querySelector("#img"),
    prevBtn: document.querySelector("#prev"),
    nextBtn: document.querySelector("#next"),
    imgNumberDiv: document.querySelector("#img-number"),
    imgCounter: 0,
    images: [
        "donkey.jpeg", "guy_w_fruits.jpg", "mario.jpeg", "soldier.jpg"
    ],
    init() {
        this.showImg();
        this.next();
        this.prev();
    },
    showImg() {
        const src = `${this.images[this.imgCounter]}`; // az imagesből az imgCounter számú elemet fogja mutatni
        this.img.src = src;
        this.imgNumberDiv.innerText = `${this.imgCounter+1}/${this.images.length}`
    },
    next() {
        this.nextBtn.addEventListener("click", () => {
            this.imgCounter++;

            if (this.imgCounter === this.images.length) {
                this.imgCounter = 0;
            }

            this.showImg();
        });
    },
    prev() {
        this.prevBtn.addEventListener("click", () => {
            this.imgCounter--;

            if(this.imgCounter < 0)
            this.imgCounter = this.images.length-1;

            this.showImg();
        });
    }
};

//Gallery.next(); ha végén nem szeretnénk ennyi mindent meghivni akkor beletüszünk mindent ami kell a müködéshez egy init-be és azt hivjuk meg
//Gallery.prev();

/*
    a const src-ben összerakunk egy elérési útvonalat, majd az img src attributumát a lementett képnek (img: document.querySelector("#img")) 
    kicseréljük amikor rányomunk a next gombra, egészen addig amíg az imgCounter nem lesz annyi, amennyi kép nem létezik.

    Erre a megoldás az, hogy az imgCountert egyenlővé tesszük a images tömbünknek a length-jévek (0-tól indul, így length-edik elem már nincsen)
    és az imgCountert egyenlővé tesszük a 0-val. 

    Ha pedig a prev-et nézzük, akkor imgCounterünk nem lehet kisebb nullánál(ami a tömb első eleme, képe) és ilyenkor az imgCountert egyenlővé
    tesszük a this.images.length-1, tehát az utolsó képünkel. Megint a length-edik képünk nincsen, az utolsó az a length-1-edik.

    Horizontélisan egy tag-at a scc-ben ugy tudunk középre helyezni, hogy left:0; right:0; margin:auto;

    A showImg-ben meg tudjuk csinálni hogy 

*/