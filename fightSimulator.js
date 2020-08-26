class Personnage {
    constructor(pseudo,classe,sante,attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer() {
        this.niveau++
        console.log(this.pseudo + "passe au niveau "+this.niveau);
    }

    verifierSante() {
        if(this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + "a perdu");
        }
    }

    get infotmation() {
        return this.pseudo + " (" + this + ") a "+ this.sante + "point de vie et au niveau " + this.niveau;
    }
}



