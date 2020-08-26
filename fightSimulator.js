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

class Magicien extends Personnage{

    constructor(pseudo) {
        super(pseudo,"Magicien",170,90);
    }

    attaquer(personnage) {
        personnage -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort ("+ this.attaque + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        let puissanceArcane = this.attaque * 5
        personnage -= puissanceArcane;
        console.log(this.pseudo + " attaque  avec son coup spécial puissance des arcanes" + personnage.pseudo + " ("+ puissanceArcane + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage{

    constructor(pseudo) {
        super(pseudo,"guerier",350,50);
    }

    attaquer(personnage) {
        personnage -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée ("+ this.attaque + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        let hacheDeGuerre = this.attaque * 5
        personnage -= hacheDeGuerre;
        console.log(this.pseudo + " attaque  avec son coup spécial hache de guerre" + personnage.pseudo + " ("+ hacheDeGuerre + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }
}


var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);

