/**Jeu Textuel entièrement créé par Ethan ZERAH */

window.addEventListener('keydown', function (e) {
    if (fight == false && mort == false){
        if (e.keyCode == 39) {
            if (page<70){
                page++;
                continuer();
            }
        }
        /* On peut bloquer la touche arrière pour éviter de faire glitcher les choix qui donnent bonus/malus mais c'est pas important*/
        else if (e.keyCode == 37 && victoire==false) {
            
            if (page>0){
                page--;
                continuer();
            }    
        }
    }
  });

let page = 0;
let tes ='';
let fight = false;
let monstre = 0;
let mort = false;
let boss = 0;
let ricomp = 0;
let victoire = false;
let vic=false;
let choixr="";
let choixg1="";
let choixg2="";
let choixg3="";
let choixg4="";
let choixm1="";
let choixm2="";
let choixm3="";
let choixm4="";
let choixv1="";
let choixv2="";
let choixv3="";
let choixv4="";
let bloccom = false;

class Hero {
    constructor(Nom, Classe, PVMax, PV, Defense, Force, Magie, XP, Niveau) {
    this.Nom = Nom;
    this.Classe = Classe;
    this.PVMax = PVMax;
    this.PV = PV;
    this.Defense = Defense;
    this.Force = Force;
    this.Magie = Magie;
    this.XP = XP;
    this.Niveau = Niveau;
    }
    set newNom(Nom) {
        this.Nom = Nom; 
    }
    set newClasse(Classe) {
        this.Classe = Classe; 
    }
    set newPvMax(PVMax) {
        this.PVMax =PVMax ; 
    }
    set newPV(PV) {
        this.PV = PV; 
    }
    set newDefense(Defense) {
        this.Defense = Defense; 
    }
    set newForce(Force) {
        this.Force = Force; 
    }
    set newMagie(Magie) {
        this.Magie = Magie;
    }
    set newXP(XP) {
        this.XP = XP; 
    }
    set newNiveau(Niveau) {
        this.Niveau = Niveau; 
    }

    get stats() {
        return this.Nom + ' ' + this.PVMax + ' ' + this.PV + ' ' + this.Defense + ' ' + this.Force + ' ' + this.Magie + ' ' + this.Niveau;
    }
    get combats() {
        return this.Nom + '  Niveau : ' + this.Niveau + '<br>' + this.PV + '/' + this.PVMax;
    }
}
class Mob {
    constructor(Nom, PVMax, PV, Defense, Force, Magie, XP,Image) {
    this.Nom = Nom;
    this.PVMax = PVMax;
    this.PV = PV;
    this.Defense = Defense;
    this.Force = Force;
    this.Magie = Magie;
    this.XP = XP;
    this.Image = Image;
    }

    set newPvMax(PVMax) {
        this.PVMax =PVMax ; 
    }
    set newPV(PV) {
        this.PV = PV; 
    }
    set newDefense(Defense) {
        this.Defense = Defense; 
    }
    set newForce(Force) {
        this.Force = Force; 
    }
    set newMagie(Magie) {
        this.Magie = Magie;
    }
    get stats() {
        return this.Nom + ' ' + this.PV + ' ' + this.PVMax + ' ' + this.Defense + ' ' + this.Force + ' ' + this.Magie;
    }
    get combats() {
        return this.Nom + '<br>' + this.PV + '/' + this.PVMax;
    }
}
class Inventaire{
    constructor(Dino,BagueV,BagueR,BagueB,Bagues,Bandits,Argent,Parchemin,Clef,Livre,Hache,Collier,Oeuf){
        this.Dino=Dino;
        this.BagueV=BagueV;
        this.BagueR=BagueR;
        this.BagueB=BagueB;
        this.Bagues=Bagues;
        this.Bandits=Bandits;
        this.Argent=Argent;
        this.Parchemin=Parchemin;
        this.Clef=Clef;
        this.Livre=Livre;
        this.Hache=Hache;
        this.Collier=Collier;
        this.Oeuf=Oeuf;
    }
    set newDino(Dino){
        this.Dino=Dino;
    }
    set newBagueV(BagueV){
        this.BagueV=BagueV;
    }
    set newBagueR(BagueR){
        this.BagueR=BagueR;
    }
    set newBagueB(BagueB){
        this.BagueB=BagueB;
    }
    set newBagues(Bagues){
        this.Bagues=Bagues;
    }
    set newBandits(Bandits){
        this.Bandits=Bandits;
    }
    set newArgent(Argent){
        this.Argent=Argent;
    }
    set newParchemin(Parchemin){
        this.Parchemin=Parchemin;
    }
    set newClef(Clef){
        this.Clef=Clef;
    }
    set newLivre(Livre){
        this.Livre=Livre;
    }
    set newHache(Hache){
        this.Hache=Hache;
    }
    set newCollier(Collier){
        this.Collier=Collier;
    }
    set newOeuf(Oeuf){
        this.Oeuf=Oeuf;
    }
}

const Perso = new Hero('Inconnu','',10,10,6,5,1,0,1);
const Inv = new Inventaire(false,false,false,false,false,false,false,false,false,false,false,false,false);
/*Mobs niveau 1 à 3 */
const Slime = new Mob('Slime',10,10,1,3,1,10,'');
const Rat = new Mob('Rat Géant',15,15,3,2,0,13,'');
const Fantome = new Mob('Fantome',13,13,1,1,3,10,'');
/*Mobs niveau 4 à 6 */
const Loup = new Mob('Loup Sabré',10,10,1,3,1,20,'');
const Orc = new Mob('Orc Armé',15,15,3,2,0,23,'');
const Robot = new Mob('Automate défaillant',13,13,1,1,3,20,'');
/*Mobs niveau 7 à 9 */
const Wivre = new Mob('Wyverne Mécanique',10,10,1,3,1,40,'');
const Ange = new Mob('Ange Déchu',15,15,3,2,0,43,'');
const Demon = new Mob('Démon Infernal',13,13,1,1,3,40,'');
/*Boss */
const Bandit = new Mob('Roi des Bandits',100,100,3,10,10,0,'img/Bandit.png');
const Dino = new Mob('Dinosaure',200,200,3,25,25,0,'img/Dino.png');
const Golem = new Mob('Golem de pierres',200,200,3,20,20,0,'');
const Archimage = new Mob('Archimage',200,200,3,20,20,0,'');
const Vampire = new Mob('Vampire',200,200,3,20,20,0,'');
const Chevalier = new Mob('Chevalier',200,200,3,20,20,0,'img/Chevalier.png');
const Double = new Mob('???',100000,100000,100,100,100,0,'');

function attaqueMob(){
    if (boss==0){
        if (monstre == 1){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Fantome.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Fantome.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Fantome.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Fantome.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Fantome.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Fantome.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 2){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Slime.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Slime.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Slime.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Slime.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Slime.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Slime.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 3){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Rat.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Rat.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Rat.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Rat.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Rat.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Rat.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 4){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Loup.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Loup.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Loup.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Loup.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Loup.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Loup.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 5){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Orc.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Orc.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Orc.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Orc.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Orc.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Orc.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 6){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Robot.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Robot.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Robot.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Robot.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Robot.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Robot.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 7){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Wivre.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Wivre.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Wivre.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Wivre.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Wivre.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Wivre.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 8){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Ange.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Ange.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Ange.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Ange.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Ange.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Ange.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (monstre == 9){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Demon.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Demon.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1 && (- (Demon.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Demon.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2 && (- (Demon.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Demon.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
    
    }
    else {
        if (boss == 1){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Bandit.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Bandit.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Bandit.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Bandit.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Bandit.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Bandit.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (boss == 2){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Dino.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Dino.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Dino.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Dino.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Dino.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Dino.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (boss == 3){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Golem.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Golem.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Golem.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Golem.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Golem.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Golem.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (boss == 4){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Archimage.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Archimage.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Archimage.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Archimage.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Archimage.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Archimage.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (boss == 5){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Vampire.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Vampire.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Vampire.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Vampire.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Vampire.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Vampire.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (boss == 6){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Chevalier.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Chevalier.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Chevalier.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Chevalier.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Chevalier.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Chevalier.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
        else if (boss == 7){
            let randAttaque = Math.floor(Math.random() * Math.floor(3));
            if (randAttaque == 0 && (- (Double.Force/2) + (Perso.Defense/2))<0) {
                Perso.newPV = Perso.PV - (Double.Force/2) + (Perso.Defense/2);
            }
            else if (randAttaque == 1&& (- (Double.Force*2) + (Perso.Defense/2))<0) {
                let attaqueforte = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforte <75){
                    Perso.newPV = Perso.PV - Double.Force*2 + (Perso.Defense/2);
                }
                else { 
                }
            }
            else if (randAttaque == 2&& (- (Double.Magie*3) + (Perso.Defense/2))<0){
                let magie = Math.floor(Math.random() * Math.floor(100));
                if (magie <50){
                    Perso.newPV = Perso.PV - Double.Magie*3 + (Perso.Defense/2);
                }
                else{
                }
            }
        }
    }
}
function faible() {
    if (boss == 0){
        if (monstre == 1){    
            if ((-(Perso.Force/2)+(Fantome.Defense/2))<0){
                Fantome.newPV = Fantome.PV-(Perso.Force/2)+(Fantome.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Fantome.PV <= 0){
                Perso.newXP = Perso.XP + Fantome.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 2){   
            if ((-(Perso.Force/2)+(Slime.Defense/2))<0){ 
                Slime.newPV = Slime.PV-Perso.Force+(Slime.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Slime.PV <= 0){
                Perso.newXP = Perso.XP + Slime.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 3){   
            if ((-(Perso.Force/2)+(Rat.Defense/2))<0){ 
                Rat.newPV = Rat.PV-Perso.Force+(Rat.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Rat.PV <= 0){
                
                Perso.newXP = Perso.XP + Rat.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 4){  
            if ((-(Perso.Force/2)+(Loup.Defense/2))<0){  
                Loup.newPV = Loup.PV-Perso.Force+(Loup.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Loup.PV <= 0){
                
                Perso.newXP = Perso.XP + Loup.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 5){ 
            if ((-(Perso.Force/2)+(Orc.Defense/2))<0){   
                Orc.newPV = Orc.PV-Perso.Force+(Orc.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Orc.PV <= 0){
                
                Perso.newXP = Perso.XP + Orc.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 6){ 
            if ((-(Perso.Force/2)+(Robot.Defense/2))<0){   
                Robot.newPV = Robot.PV-Perso.Force+(Robot.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Robot.PV <= 0){
                
                Perso.newXP = Perso.XP + Robot.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 7){   
            if ((-(Perso.Force/2)+(Wivre.Defense/2))<0){ 
                Wivre.newPV = Wivre.PV-Perso.Force+(Wivre.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Wivre.PV <= 0){
                
                Perso.newXP = Perso.XP + Wivre.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 8){ 
            if ((-(Perso.Force/2)+(Ange.Defense/2))<0){   
                Ange.newPV = Ange.PV-Perso.Force+(Ange.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Ange.PV <= 0){
                
                Perso.newXP = Perso.XP + Ange.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 9){    
            if ((-(Perso.Force/2)+(Demon.Defense/2))<0){
                Demon.newPV = Demon.PV-Perso.Force+(Demon.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Demon.PV <= 0){
                
                Perso.newXP = Perso.XP + Demon.XP;
                leveling();
                retour();
            }
        }
    }
    else {
        if (boss==1){
            if ((-(Perso.Force/2)+(Bandit.Defense/2))<0){
                Bandit.newPV = Bandit.PV-(Perso.Force/2)+(Bandit.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Bandit.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Bandit.PV <= 0){
                vic = true;
                retour();
            }
        }
        else if (boss==2){
            if ((-(Perso.Force/2)+(Dino.Defense/2))<0){
                Dino.newPV = Dino.PV-(Perso.Force/2)+(Dino.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Dino.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Dino.PV <= 0){
                vic = true;
                retour();
            }
        }
        else if (boss==3){
            if ((-(Perso.Force/2)+(Golem.Defense/2))<0){
                Golem.newPV = Golem.PV-(Perso.Force/2)+(Golem.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Golem.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Golem.PV <= 0){
                vic = true;
                retour();
            }
        }
        else if (boss==4){
            if ((-(Perso.Force/2)+(Archimage.Defense/2))<0){
                Archimage.newPV = Archimage.PV-(Perso.Force/2)+(Archimage.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Archimage.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Archimage.PV <= 0){
                vic = true;
                retour();
            }
        }
        else if (boss==5){
            if ((-(Perso.Force/2)+(Vampire.Defense/2))<0){
                Vampire.newPV = Vampire.PV-(Perso.Force/2)+(Vampire.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Vampire.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Vampire.PV <= 0){
                vic = true;
                retour();
            }
        }
        else if (boss==6){
            if ((-(Perso.Force/2)+(Chevalier.Defense/2))<0){
                Chevalier.newPV = Chevalier.PV-(Perso.Force/2)+(Chevalier.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Chevalier.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Chevalier.PV <= 0){
                vic = true;
                retour();
            }
        }
        else if (boss==7){
            if ((-(Perso.Force/2)+(Double.Defense/2))<0){
                Double.newPV = Double.PV-(Perso.Force/2)+(Double.Defense/2);
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Double.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Double.PV <= 0){
                vic = true;
                retour();
            }
        }
    }
}
function forte() {
    if (boss==0){
        if (monstre == 1){  
            if ((-(Perso.Force)+(Fantome.Defense/2))<0){  
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Fantome.newPV = Fantome.PV - (Perso.Force*2) + (Fantome.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Fantome.PV <= 0){
                
                Perso.newXP = Perso.XP + Fantome.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 2){  
            if ((-(Perso.Force*2)+(Slime.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Slime.newPV = Slime.PV - (Perso.Force*2) + (Slime.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Slime.PV <= 0){
                
                Perso.newXP = Perso.XP + Slime.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 3){ 
            if ((-(Perso.Force*2)+(Rat.Defense/2))<0){    
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Rat.newPV = Rat.PV - (Perso.Force*2) + (Rat.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Rat.PV <= 0){
                
                Perso.newXP = Perso.XP + Rat.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 4){  
            if ((-(Perso.Force*2)+(Loup.Defense/2))<0){  
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Loup.newPV = Loup.PV - (Perso.Force*2) + (Loup.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Loup.PV <= 0){
                
                Perso.newXP = Perso.XP + Loup.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 5){  
            if ((-(Perso.Force*2)+(Orc.Defense/2))<0){  
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Orc.newPV = Orc.PV - (Perso.Force*2) + (Orc.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Orc.PV <= 0){
                
                Perso.newXP = Perso.XP + Orc.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 6){ 
            if ((-(Perso.Force*2)+(Robot.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Robot.newPV = Robot.PV - (Perso.Force*2) + (Robot.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Robot.PV <= 0){
                
                Perso.newXP = Perso.XP + Robot.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 7){ 
            if ((-(Perso.Force*2)+(Wivre.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Wivre.newPV = Wivre.PV - (Perso.Force*2) + (Wivre.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Wivre.PV <= 0){
                
                Perso.newXP = Perso.XP + Wivre.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 8){
            if ((-(Perso.Force*2)+(Ange.Defense/2))<0){    
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Ange.newPV = Ange.PV - (Perso.Force*2) + (Ange.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Ange.PV <= 0){
                
                Perso.newXP = Perso.XP + Ange.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 9){   
            if ((-(Perso.Force*2)+(Demon.Defense/2))<0){ 
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Demon.newPV = Demon.PV - (Perso.Force*2) + (Demon.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Demon.PV <= 0){
                
                Perso.newXP = Perso.XP + Demon.XP;
                leveling();
                retour();
            }
        } 
    }
    else {
        if (boss == 1){  
            if ((-(Perso.Force*2)+(Bandit.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Bandit.newPV = Bandit.PV - (Perso.Force*2) + (Bandit.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Bandit.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Bandit.PV <= 0){
                
                Perso.newXP = Perso.XP + Bandit.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 2){  
            if ((-(Perso.Force*2)+(Dino.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Dino.newPV = Dino.PV - (Perso.Force*2) + (Dino.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Dino.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Dino.PV <= 0){
                
                Perso.newXP = Perso.XP + Dino.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 3){  
            if ((-(Perso.Force*2)+(Golem.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Golem.newPV = Golem.PV - (Perso.Force*2) + (Golem.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Golem.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Golem.PV <= 0){
                
                Perso.newXP = Perso.XP + Golem.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 4){  
            if ((-(Perso.Force*2)+(Archimage.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Archimage.newPV = Archimage.PV - (Perso.Force*2) + (Archimage.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Archimage.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Archimage.PV <= 0){
                
                Perso.newXP = Perso.XP + Archimage.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 5){  
            if ((-(Perso.Force*2)+(Vampire.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Vampire.newPV = Vampire.PV - (Perso.Force*2) + (Vampire.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Vampire.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Vampire.PV <= 0){
                
                Perso.newXP = Perso.XP + Vampire.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 6){  
            if ((-(Perso.Force*2)+(Chevalier.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Chevalier.newPV = Chevalier.PV - (Perso.Force*2) + (Chevalier.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Chevalier.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Chevalier.PV <= 0){
                
                Perso.newXP = Perso.XP + Chevalier.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 7){  
            if ((-(Perso.Force*2)+(Double.Defense/2))<0){   
                let attaqueforteP = Math.floor(Math.random() * Math.floor(100));
                if (attaqueforteP <75){
                    Double.newPV = Double.PV - (Perso.Force*2) + (Double.Defense/2);
                }
                else { 
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Double.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Double.PV <= 0){
                
                Perso.newXP = Perso.XP + Double.XP;
                leveling();
                retour();
            }
        }
    }
    
}
function magie() {
    if (boss==0){
        if (monstre == 1){  
            if ((-(Perso.Magie*3)+(Fantome.Defense/2))<0){  
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Fantome.newPV = Fantome.PV - Perso.Magie*3 + (Fantome.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Fantome.PV <= 0){
                
                Perso.newXP = Perso.XP + Fantome.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 2){ 
            if ((-(Perso.Magie*3)+(Slime.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Slime.newPV = Slime.PV - Perso.Magie*3 + (Slime.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Slime.PV <= 0){
                
                Perso.newXP = Perso.XP + Slime.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 3){   
            if ((-(Perso.Magie*3)+(Rat.Defense/2))<0){ 
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Rat.newPV = Rat.PV - Perso.Magie*3 + (Rat.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Rat.PV <= 0){
                
                Perso.newXP = Perso.XP + Rat.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 4){    
            if ((-(Perso.Magie*3)+(Loup.Defense/2))<0){ 
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Loup.newPV = Loup.PV - Perso.Magie*3 + (Loup.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Loup.PV <= 0){
                
                Perso.newXP = Perso.XP + Loup.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 5){ 
            if ((-(Perso.Magie*3)+(Orc.Defense/2))<0){    
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Orc.newPV = Orc.PV - Perso.Magie*3 + (Orc.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Orc.PV <= 0){
                
                Perso.newXP = Perso.XP + Orc.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 6){ 
            if ((-(Perso.Magie*3)+(Robot.Defense/2))<0){    
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Robot.newPV = Robot.PV - Perso.Magie*3 + (Robot.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Robot.PV <= 0){
                
                Perso.newXP = Perso.XP + Robot.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 7){  
            if ((-(Perso.Magie*3)+(Wivre.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Wivre.newPV = Wivre.PV - Perso.Magie*3 + (Wivre.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Wivre.PV <= 0){
                
                Perso.newXP = Perso.XP + Wivre.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 8){
            if ((-(Perso.Magie*3)+(Ange.Defense/2))<0){     
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Ange.newPV = Ange.PV - Perso.Magie*3 + (Ange.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Ange.PV <= 0){
                
                Perso.newXP = Perso.XP + Ange.XP;
                leveling();
                retour();
            }
        }
        else if (monstre == 9){    
            if ((-(Perso.Magie*3)+(Demon.Defense/2))<0){ 
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Demon.newPV = Demon.PV - Perso.Magie*3 + (Demon.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Demon.PV <= 0){
                
                Perso.newXP = Perso.XP + Demon.XP;
                leveling();
                retour();
            }
        }
    }
    else {
        if (boss == 1){ 
            if ((-(Perso.Magie*3)+(Bandit.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Bandit.newPV = Bandit.PV - Perso.Magie*3 + (Bandit.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Bandit.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Bandit.PV <= 0){
                
                Perso.newXP = Perso.XP + Bandit.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 2){ 
            if ((-(Perso.Magie*3)+(Dino.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Dino.newPV = Dino.PV - Perso.Magie*3 + (Dino.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Dino.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Dino.PV <= 0){
                
                Perso.newXP = Perso.XP + Dino.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 3){ 
            if ((-(Perso.Magie*3)+(Golem.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Golem.newPV = Golem.PV - Perso.Magie*3 + (Golem.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Golem.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Golem.PV <= 0){
                
                Perso.newXP = Perso.XP + Golem.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 4){ 
            if ((-(Perso.Magie*3)+(Archimage.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Archimage.newPV = Archimage.PV - Perso.Magie*3 + (Archimage.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Archimage.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Archimage.PV <= 0){
                
                Perso.newXP = Perso.XP + Archimage.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 5){ 
            if ((-(Perso.Magie*3)+(Vampire.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Vampire.newPV = Vampire.PV - Perso.Magie*3 + (Vampire.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Vampire.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Vampire.PV <= 0){
                
                Perso.newXP = Perso.XP + Vampire.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 6){ 
            if ((-(Perso.Magie*3)+(Chevalier.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Chevalier.newPV = Chevalier.PV - Perso.Magie*3 + (Chevalier.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Chevalier.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Chevalier.PV <= 0){
                
                Perso.newXP = Perso.XP + Chevalier.XP;
                leveling();
                retour();
            }
        }
        else if (boss == 7){ 
            if ((-(Perso.Magie*3)+(Double.Defense/2))<0){   
                let magieP = Math.floor(Math.random() * Math.floor(100));
                if (magieP <50){
                    Double.newPV = Double.PV - Perso.Magie*3 + (Double.Defense/2);
                }
                else{
                }
            }
            attaqueMob();
            document.getElementById('texte').innerHTML = Double.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
            if (Double.PV <= 0){
                
                Perso.newXP = Perso.XP + Double.XP;
                leveling();
                retour();
            }
        }
    }
}
function rien() {
    ricomp++
    if (ricomp == 5){
        victoire = true;
        retour();
    }
}
function defaite(){
    if (boss==0){
        if (Perso.PV <= 0){
            retour()
        }
    }
    else {
        if (Perso.PV <= 0){
            vic = true;
            mort=true;
            retour()
        }
    }
}
function fuite() {
    let reussite = Math.floor(Math.random() * Math.floor(100));
    if (reussite > 35){ 
        retour()
    }
    else {
        attaqueMob();
        if (monstre == 1){
            document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 2){
            document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 3){
            document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 4){
            document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 5){
            document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 6){
            document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 7){
            document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 8){
            document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
        else if (monstre == 9){
            document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            defaite()
        }
    }
}
function leveling(){
    if (Perso.Niveau == 1 && Perso.XP>15){
        Perso.newNiveau = 2;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newMagie =Perso.Magie++            
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
        }
    }
    if (Perso.Niveau == 2 && Perso.XP>30){
        Perso.newNiveau = 3;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newMagie =Perso.Magie++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
        }
    }
    if (Perso.Niveau == 3 && Perso.XP>45){
        Perso.newNiveau = 4;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newForce =Perso.Force++
            Perso.newMagie =Perso.Magie++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newDefense =Perso.Defense++
            Perso.newMagie =Perso.Magie++
        }
    }
    if (Perso.Niveau == 4 && Perso.XP>75){
        Perso.newNiveau = 5;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newDefense =Perso.Defense++
            Perso.newMagie =Perso.Magie++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
            Perso.newMagie =Perso.Magie++
        }
    }
    if (Perso.Niveau == 5 && Perso.XP>105){
        Perso.newNiveau = 6;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newMagie =Perso.Magie++
            Perso.newForce =Perso.Force++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newMagie =Perso.Magie++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
    }
    if (Perso.Niveau == 6 && Perso.XP>135){
        Perso.newNiveau = 7;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newMagie =Perso.Magie++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
    }
    if (Perso.Niveau == 7 && Perso.XP>195){
        Perso.newNiveau = 8;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newMagie =Perso.Magie++
            Perso.newForce =Perso.Force++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
    }
    if (Perso.Niveau == 8 && Perso.XP>255){
        Perso.newNiveau = 9;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newMagie =Perso.Magie++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
    }
    if (Perso.Niveau == 9 && Perso.XP>315){
        Perso.newNiveau = 10;
        Perso.newPvMax =Perso.PVMax+5
        if (Perso.Classe == "Guerrier"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        else if (Perso.Classe == "Mage"){
            Perso.newMagie =Perso.Magie++
            Perso.newForce =Perso.Force++
        }
        else if (Perso.Classe == "Voleur"){
            Perso.newForce =Perso.Force++
            Perso.newDefense =Perso.Defense++
        }
        
    }
}
function combat() {
    fight = true;
    Perso.newPV= Perso.PVMax;
    if (boss==0){
    document.getElementById('button-group').innerHTML = '<button class=faible id=choix1 onclick=faible() >Attaque Faible</button><button class=forte id=choix2 onclick=forte()>Attaque Forte</button><button class=magie id=choix3 onclick=magie() >Magie</button><button class=fuir id=choix4 onclick=fuite() >Fuir</button>';
        let randMob = Math.floor(Math.random() * Math.floor(3));
        if (Perso.Niveau>=1 && Perso.Niveau<=3){
            if (randMob===0 ){
                Fantome.newPV = Fantome.PVMax;
                document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 1;
                document.getElementById("image").src = Fantome.Image;
            }
            else if (randMob===1){
                Slime.newPV = Slime.PVMax;
                document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 2;
                document.getElementById("image").src = Slime.Image;
            }
            else if (randMob === 2) {
                Rat.newPV = Rat.PVMax;
                document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 3;
                document.getElementById("image").src = Rat.Image;
            } 
        }
        else if (Perso.Niveau>=4 && Perso.Niveau<=6){
            if (randMob===0 ){
                Loup.newPV = Loup.PVMax;
                document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 4;
                document.getElementById("image").src = Loup.Image;
            }
            else if (randMob===1){
                Orc.newPV = Orc.PVMax;
                document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 5;
                document.getElementById("image").src = Orc.Image;
            }
            else if (randMob === 2) {
                Robot.newPV = Robot.PVMax;
                document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 6;
                document.getElementById("image").src = Robot.Image;
            }
        }
        else {
            if (randMob===0 ){
                Wivre.newPV = Wivre.PVMax;
                document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 7;
                document.getElementById("image").src = Wivre.Image;
            }
            else if (randMob===1){
                Ange.newPV = Ange.PVMax;
                document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 8;
                document.getElementById("image").src = Ange.Image;
            }
            else if (randMob === 2) {
                Demon.newPV = Demon.PVMax;
                document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
                monstre = 9;
                document.getElementById("image").src = Demon.Image;
            }
        }
    }
    else {
        document.getElementById('button-group').innerHTML = '<button class=faible id=choix1 onclick=faible() >Attaque Faible</button><button class=forte id=choix2 onclick=forte()>Attaque Forte</button><button class=magie id=choix3 onclick=magie() >Magie</button>';
        if (boss == 1){
            Bandit.newPV=Bandit.PVMax;
            document.getElementById('texte').innerHTML = Bandit.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            document.getElementById("image").src = Bandit.Image;
        }
        else if (boss == 2){
            Dino.newPV=Dino.PVMax;
            document.getElementById('texte').innerHTML = Dino.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            document.getElementById("image").src = Dino.Image;
        }
        else if (boss == 3){
            Golem.newPV=Golem.PVMax;
            document.getElementById('texte').innerHTML = Golem.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            document.getElementById("image").src = Golem.Image;
        }
        else if (boss == 4){
            Archimage.newPV=Archimage.PVMax;
            document.getElementById('texte').innerHTML = Archimage.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            document.getElementById("image").src = Archimage.Image;
        }
        else if (boss == 5){
            Vampire.newPV=Vampire.PVMax;
            document.getElementById('texte').innerHTML = Vampire.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            document.getElementById("image").src = Vampire.Image;
        }
        else if (boss == 6){
            Chevalier.newPV=Chevalier.PVMax;
            document.getElementById('texte').innerHTML = Chevalier.combats +'<br><br><br><br><br><br><br><br><br>'+Chevalier.combats;
            document.getElementById("image").src = Chevalier.Image;
        }
        else if (boss==7){
            Double.newPV=Double.PVMax;
            document.getElementById('button-group').innerHTML = '<button class=faible id=choix1 onclick=faible() >Attaque Faible</button><button class=forte id=choix2 onclick=forte()>Attaque Forte</button><button class=magie id=choix3 onclick=magie() >Magie</button><button class=rien id=choix4 onclick=rien() >Rien</button>';
            document.getElementById('texte').innerHTML = Double.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            document.getElementById("image").src = Double.Image;
        }
    
    }
    

    
}
function retour() {
    document.getElementById('button-group').innerHTML = '';
    continuer();   
}
function commandes() {
    tes = '<h1>Liste des commandes</1><h3>Combat</h3><p>Lance un combat aléatoire en fonction de ton niveau</p><h3>Commandes</h3><p>Listes les commandes</p><h3></h3><h3></h3><p>Entrer \'retour\' pour revenir à l\'histoire.</p>'
    document.getElementById('texte').innerHTML = tes;
}
function continuer(){
    fight = false;
    if(page===0){
        tes = "<h1>Rapide Tutoriel</h1><p>Il y a une barre en bas pour effectuer les choix et lancer certaines commandes. Les commandes seront désactivées lorsque une ou plusieurs actions seront demandées.<br>Pour savoir qu'écrire pour un choix, il faudra écrire le mot indiqué et appuyer sur la touche entrée.<br>Pour connaitre la liste des commandes, tape la commande 'commandes' et appuie sur la touche entrée.<br> Il y a plusieurs fins disponibles en fonction de tes choix au cours de la partie, à toi de toutes les découvrir !<br><br>Pour continuer appuie sur la flèche de droite et sur la flèche de gauche pour revenir en arrière.</p>";
        document.getElementById('texte').innerHTML = tes;
        document.getElementById("image").src = "img/camp.png"
        bloccom=false;
    }
    if(page===1){
        tes = '<h1>Naissance</h1><p>Quel est ton nom héro ?</p>';
        document.getElementById('texte').innerHTML = tes;
        document.getElementById("image").src = "img/Lettre.png"
        bloccom=true;
    }
    if(page===2){
        tes = '<h1>L\'orientation</h1><p>En ce monde, il existe plusieures écoles : <br><br>Celle du <strong>guerrier</strong> : Fort et Résistant, le <strong>guerrier</strong> est un individu constitué d\'une défense hors du commun à la recherche d\'aventures.<br><br>Celle du <strong>mage</strong> : Vivace et Sage, le <strong>mage</strong> est un personnage curieux et en permanence à la recherche de connaissances. <br><br>Celle du <strong>voleur</strong> : Polyvalent et Agile, le <strong>voleur</strong> est un être mystérieux à la recherche des nouveaux challenges <br><br>Il en existait une dernière : l\'école du néant mais malheureusement elle disparu des écrits en emportant ces secrets primordiaux...<br><br>Maintenant que tu en sais un peu plus, quels enseignements veux tu suivre '+Perso.Nom+' ?</p>';
        document.getElementById('texte').innerHTML = tes;
        document.getElementById("image").src = "img/armes.gif"
        bloccom=true;
    }
    if(page===3){
        if(Perso.Classe=="Guerrier"){
            tes = '<h1>La garde</h1><p>Tu te réveilles au milieu d\'une baraque de soldats.</p>';
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/chateau.png";
            bloccom=false;
        }
        else if (Perso.Classe=="Mage"){
            bloccom=false;
            tes = '<h1>La tour</h1><p>Tu te réveilles dans la tour des mages </p>';
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/tour.png";
            bloccom=false;
        }
        else if (Perso.Classe=="Voleur"){
            tes = '<h1>La planque</h1><p>Tu te réveille dans la planque de bandits</p>';
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/arbre.png";
            bloccom=false;
        }
        else if (Perso.Classe==""){
            tes = '<h1>???</h1><p>Que fais tu ?</p>';
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "";
            bloccom=true;
        }
    }
    if(page===4){
        if(Perso.Classe=="Guerrier"){
            tes = '<h1>Une occupation</h1><p><strong>affuter</strong> ou <strong>manger</strong> ?</p>';
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/chateau.png";
            bloccom=true;
        }
        else if (Perso.Classe=="Mage"){
            bloccom =true;
            tes = "<h1>Choix 1</h1><p><strong>lumière</strong> ou <strong>ténèbres</strong> ?</p>";
            document.getElementById("texte").innerHTML = tes;
            document.getElementById("image").src = "img/tour.png";
        }
        else if (Perso.Classe=="Voleur"){
            bloccom=true
            tes = "<h1>Préparation ?</h1><p><strong>concentration</strong> ou <strong>arme</strong> ou <strong>armure</strong> ?</p>";
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/arbre.png";
        }
        else if (Perso.Classe==""){
            if (choixr==''){
                if (victoire==false){
                    boss = 7;
                    combat();
                }
                else{
                    Inv.newOeuf=true;
                    tes = '<h1>Oeuf du néant</h1><p>Tu as trouvé l\'oeuf du néant</p>';
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/oeuf.gif";
                }
            }
            else{
                mort = true;
                tes = '<h1>Le néant</h1><p>Tu es passé dans le néant</p>';
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
        }
    }
    if(page===5){
        if(Perso.Classe=="Guerrier"){
            bloccom=false;
            if (choixg1=="Affuter"){
                if ((Math.floor(Math.random() * Math.floor(100)))>25){
                    tes = '<h1>Le résultat</h1><p>Affutage réussi</p>';
                    Perso.newForce=Perso.force+1;
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                    bloccom=false;
                }
                else {
                    tes = '<h1>Le résultat</h1><p>Affutage raté</p>';
                    Perso.newForce=Perso.Force-1
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                    bloccom=false;
                }
                
            }
            else if (choixg1=="Manger"){
                if ((Math.floor(Math.random() * Math.floor(100)))>25){
                    tes = '<h1>Le résultat</h1><p>Trés bien mangé</p>';
                    Perso.newPvMax=Perso.PVMax+5;
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                    bloccom=false;
                }
                else {
                    tes = '<h1>Le résultat</h1><p>Mal mangé</p>';
                    Perso.newPvMax=Perso.PVMax-5;
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                    bloccom=false;
                }
                
            }
            else if (choixg1==''){
                tes = '<h1>Le résultat</h1><p>Déconcentré</p>';
                Perso.newDefense=Perso.Defense-1;
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
                bloccom=false;
            } 
        }
        else if (Perso.Classe=="Mage"){
            bloccom=false;
            if (choixm1=="Lumiere"){
                tes = "<h1>Bravo !</h1><p> C'est bien</p>";
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/tour.png";
            }
            else if (choixm1=="Tenebre"){
                tes = "<h1>NUL !</h1><p>C'est pas bien !</p>";
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/tour.png";
            }
            else if (choixm1 == ""){
                tes = "<h1>Gné ?</h1><p>Tu fous quoi ?</p>";
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/tour.png";
            }
        }
        else if (Perso.Classe=="Voleur"){
            bloccom=false;
            if (choixv1=="Concentration"){
                tes = "<h1>Concentration</h1><p>Tu es concentré</p>";
                Perso.newPvMax=Perso.PVMax+5;
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/etoile.png";
            }
            else if (choixv1=="Arme"){
                tes = "<h1>Arme</h1><p>Tu es bien armé</p>";
                Perso.newForce=Perso.Force+1;
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/etoile.png";
            }
            else if (choixv1=="Armure"){
                tes = "<h1>Armure</h1><p>Tu as une bonne armure</p>";
                Perso.newDefense=Perso.Defense+1;
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/etoile.png";
            }
            else if (choixv1==""){
                mort =true;
                tes = "<h1>Mort</h1><p>Ton chef s'est enervé</p>";
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
        }
    }
    if (page ===6){
        if (Perso.Classe=="Guerrier"){
            bloccom=true;
            tes ="<h1>Attaqué</h1><p><strong>attaquer</strong> ou <strong>defendre</strong> ?</p>"
            document.getElementById("texte").innerHTML = tes;
            document.getElementById("image").src = "img/chateau.png";
        }
        else if (Perso.Classe=="Mage"){
            bloccom=true;
            tes = "<h1>Choix 2</h1><p><strong>aventure</strong> ou <strong>etudes ?</strong> ?</p>";
            document.getElementById("texte").innerHTML = tes;
            document.getElementById("image").src = "img/tour.png";
        }
        else if (Perso.Classe=="Voleur"){
            bloccom=false;
            tes = "<h1>C'est parti</h1><p>Tu pars pour la mission</p>";
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/chateau.png";
        }
    }
    if (page === 7){
        if (Perso.Classe=="Guerrier"){
            bloccom=false;
            if (choixg2==="Attaquer"){
                tes ="<h1>ATTAQUE !</h1><p>Vous attaquez</p>"
                Perso.newForce=Perso.Force+1;
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
            }
            else if (choixg2 ==="Defendre"){
                Perso.newDefense=Perso.Defense+1;
                tes ="<h1>Position !</h1><p>Vous defendez</p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
            }
            else if (choixg2===""){
                tes ="<h1>Attente</h1><p>Rien</p>"
                Perso.newDefense=Perso.Defense-1;
                Perso.newForce=Perso.Force-1;
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
            }
        }
        else if (Perso.Classe=="Mage"){
            bloccom = false;
            if (choixm2=="Aventure"){
                Inv.newBagueR=true;
                tes = "<h1>Aurevoir !</h1><p> Tu as gagné l'anneau rouge</p>";
                Perso.newMagie=Perso.Magie+1;
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/BagueR.png";
            }
            else if (choixm2=="Etudes"){
                tes = "<h1>Etudie !</h1><p>Tu apprends</p>";
                Perso.newMagie=Perso.Magie+2;
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/livre.png";
            }
            else if (choixm2 == ""){
                mort = true;
                tes = "<h1>Mort</h1><p>Un sort raté a ricoché sur toi...</p>";
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
        }
        else if (Perso.Classe=="Voleur"){
            bloccom=true;
            tes = "<h1>Préparation ?</h1><p><strong>infiltration</strong> ou <strong>attaque</strong> ?</p>";
            document.getElementById('texte').innerHTML = tes;
            document.getElementById("image").src = "img/chateau.png";
        }
    }
    if (page === 8){
        if (Perso.Classe=="Guerrier"){
            bloccom=false;
            if (choixg2==="Attaquer" || choixg2 ==="Defendre"){
                if ((Math.floor(Math.random() * Math.floor(100)))>50){
                    tes ="<h1>Victoire</h1><p>GG gagné</p>"
                    Perso.newForce=Perso.Force+1;
                    Perso.newDefense=Perso.Defense+1;
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                }
                else {
                    tes ="<h1>Défaite</h1><p>Vous êtes blessé</p>"
                    Perso.newForce=Perso.Force-2;
                    Perso.newDefense=Perso.Defense-2;
                    Perso.newPvMax=Perso.PVMax-5;
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                }
            }
            else if (choixg2===""){
                tes ="<h1>Perte</h1><p>Rien</p>";
                Perso.newForce=Perso.Force-2;
                Perso.newDefense=Perso.Defense-2;
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
            }
        }
        else if (Perso.Classe=="Mage"){
            bloccom =true;
            if (choixm2=="Aventure"){
                tes = "<h1>Tu vas où ?</h1><p><strong>Neige</strong> ou <strong>dolmens</strong> ?</p>";
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/camp.png";
            }
            else if (choixm2 == "Etudes"){
                tes = "<h1>Tu étudies quoi ? ?</h1><p><strong>blanche</strong> ou <strong>noire</strong> ?</p>";
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/livre.png";
            }
        }
        else if (Perso.Classe=="Voleur"){
            bloccom=false;
            if (choixv2=="Infiltration"){
                tes = "<h1>Un carton ?</h1><p>Tu te caches sous un carton pour t'infiltrer</p>";
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/carton.png";
            }
            else if (choixv2=="Attaque"){
                tes = "<h1>ATTAQUE</h1><p>Tu démontes tout le monde</p>";
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
            }
            else if (choixv2==""){
                mort =true;
                tes = "<h1>Mort</h1><p>Ne rien faire dans un champ de bataille est une mauvaise idée...</p>";
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
        }
    }
    if (page ===9){
        if (Perso.Classe=="Guerrier"){
            bloccom=true;
            tes ="<h1>Où aller ?</h1><p><strong>foret</strong> ou <strong>montagne</strong> ?</p>"
            document.getElementById("texte").innerHTML = tes;
            document.getElementById("image").src = "img/chateau.png";
        }
        else if (Perso.Classe=="Mage"){
            bloccom=false;
            if (choixm2=="Aventure"){
                if (choixm3 == "Neige"){
                    tes = "<h1>Neige</h1><p>Tu es arrivé à un igloo</p>";
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/igloo.png";
                }
                else if (choixm3=="Dolmens"){
                    tes = "<h1>Dolmens</h1><p>Tu es arrivé à des dolmens</p>";
                    Perso.newMagie=Perso.Magie+1;
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "";
                }
                else if (choixm3==""){
                    mort = true;
                    tes = "<h1>Mort</h1><p>Tu es tombé dans les escaliers avant de partir...</p>";
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/mort.png";
                }
                
            }
            else if (choixm2 == "Etudes"){
                if (choixm3=="Blanche"){
                    tes = "<h1>Blanche</h1><p>C'est bien !</p>";
                    Perso.newMagie=Perso.Magie+1;
                    Perso.newPvMax=Perso.PVMax+5;
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/livre.png";
                }
                else if (choixm3 == "Noire"){
                    tes = "<h1>Noire</h1><p>C'est bien !</p>";
                    Perso.newMagie=Perso.Magie+1;
                    Perso.newForce=Perso.Force+1;
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/livre.png";
                }
                else if (choixm3 ==""){
                    mort = true;
                    tes = "<h1>Mort</h1><p>Une armoire t'es tombé dessus...</p>";
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/mort.png";
                }
            }
        }
        else if (Perso.Classe=="Voleur"){
            if (choixv2=="Infiltration"){
                mort =true;
                tes = "<h1>SNAAAAAAAAAAAAAAAAAAAAAAAAAAKE !</h1><p>Tu n'est pas un serpent solide...</p>";
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
            else if (choixv2=="Attaque"){
                bloccom=true;
                tes = "<h1>Tu fais quoi ?</h1><p><strong>infiltration</strong> ou <strong>partir</strong> ?</p>";
                document.getElementById('texte').innerHTML = tes;
                document.getElementById("image").src = "img/chateau.png";
            }
        }
    }
    if (page === 10){
        if (Perso.Classe=="Guerrier"){
            bloccom = false;
            if (choixg3==="Foret" || choixg3 ==="foret"){
                
                tes ="<h1>La foret</h1><p>Bandits</p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/arbre.png";
            }    
            else if (choixg3 == "Montagne"|| choixg3 == "montagne"){
                tes ="<h1>La montagne</h1><p>Dinosaure</p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "";
            }
            
            else{
                mort = true;
                tes ="<h1>Attaque Surprise</h1><p>Mort</p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
        }
        else if (Perso.Classe=="Mage"){
            if (choixm2=="Aventure"){
                if (choixm3=="Neige"){
                    bloccom =true;
                    tes = "<h1>Ouvrir le coffre ?</h1><p><strong>oui</strong> ou <strong>non</strong> ?</p>";
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/coffre.png";
                }
                else if (choixm3=="Dolmens"){
                    if (vic==false){
                        boss =3;
                        combat();
                    }
                    else if (vic == true && mort == false){
                        victoire=true;
                        Inv.newBagueB=true;
                        tes ="<h1>Gagné</h1><p>Tu as gagné une bague bleue</p>"
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/BagueB.png";
                    }
                    else if (mort == true){
                        tes ="<h1>T'es Mort</h1><p>Mort</p>"
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/mort.png";
                    }
                }
            }
            else if (choixm2=="Etudes"){
                if (choixm3=="Blanche"){
                    if (vic==false){
                        boss =4;
                        combat();
                    }
                    else if (vic == true && mort == false){
                        victoire=true;
                        Inv.newLivre=true;
                        tes ="<h1>Gagné</h1><p>Tu as gagné un livre</p>"
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/Livre.png";
                    }
                    else if (mort == true){
                        tes ="<h1>T'es Mort</h1><p>Mort</p>"
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/mort.png";
                    }
                }
                else if (choixm3=="Noire"){
                    if (vic==false){
                        boss =5;
                        combat();
                    }
                    else if (vic == true && mort == false){
                        victoire=true;
                        Inv.newClef=true;
                        tes ="<h1>Gagné</h1><p>Tu as gagné une clef</p>"
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/clef.png";
                    }
                    else if (mort == true){
                        tes ="<h1>T'es Mort</h1><p>Mort</p>"
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/mort.png";
                    }
                }
            }
        }
        else if (Perso.Classe=="Voleur"){
            if (choixv2=="Attaque"){
                blocom=true;
                if (choixv3=="Infiltration"){
                    tes = "<h1>Dans le chateau</h1><p>Tu t'infiltres dans le chateau</p>";
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/chateau.png";
                }
                else if (choixv3=="Partir"){
                    victoire=true;
                    Inv.newHache=true;
                    tes = "<h1>Tu es parti</h1><p>Tu as trouvé une hache</p>";
                    document.getElementById('texte').innerHTML = tes;
                    document.getElementById("image").src = "img/hache.png";
                }
            }
        }
    }
    if (page === 11){
        if (Perso.Classe=="Guerrier"){
            if (choixg3==="Foret" || choixg3 ==="foret"){
                if (vic==false){
                    boss =1;
                    combat();
                }
                else if (vic == true && mort == false){
                    bloccom = true;
                    tes ="<h1>Gagné</h1><p><strong>achever</strong> ou <strong>epargner</strong> ?</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/bandit.png";
                }
                else if (mort == true){
                    tes ="<h1>T'es Mort</h1><p>Mort</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/mort.png";
                }
                
            }    
            else if (choixg3 == "Montagne"|| choixg3 == "montagne"){
                if (vic==false){
                    boss =2;
                    combat();
                }
                else if (vic == true && mort == false){
                    bloccom = true;
                    tes ="<h1>Gagné</h1><p><strong>achever</strong> ou <strong>epargner</strong> ?</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/dino.png";
                }
                else if (mort == true){
                    tes ="<h1>T'es Mort</h1><p>Mort</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/mort.png";
                }
            }
        }
        else if (Perso.Classe=="Mage"){
            if (choixm2=="Aventure"){
                if (choixm3=="Neige"){
                    if (choixm4=="Oui"){
                        victoire =true;
                        Inv.newParchemin=true;
                        tes = "<h1>Parchemin !</h1><p>Il n'était pas piégé</p>";
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/parchemin.png";
                    }
                    else if (choixm4=="Non"){
                        victoire =true;
                        tes = "<h1>Il n'y a rien à part ça...</h1><p>Tu pars sans rien</p>";
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/etoile.png";
                    }
                    else if (choixm4==""){
                        mort=true;
                        tes = "<h1>Mort</h1><p>Il n'y avait pas de piège mais le sol était trop fragile...</p>";
                        document.getElementById("texte").innerHTML = tes;
                        document.getElementById("image").src = "img/mort.png";
                    }
                    
                }
            }
        }
        else if (Perso.Classe=="Voleur"){
            if (choixv3=="Infiltration"){
                if (vic==false){
                    boss =6;
                    combat();
                }
                else if (vic == true && mort == false){
                    bloccom = true;
                    tes ="<h1>Gagné</h1><p><strong>coffre</strong> ou <strong>piller</strong> ?</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/Chevalier.png";
                }
                else if (mort == true){
                    tes ="<h1>T'es Mort</h1><p>Mort</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/mort.png";
                }
            }
        }
    }
    if (page === 12){
        if (Perso.Classe=="Guerrier"){
            bloccom=false;
            if (choixg3==="Foret" || choixg3 ==="foret"){
                if (choixg4=="Epargner"){
                    victoire = true;
                    tes ="<h1>Alliés</h1><p>Tu as gagné des alliés</p>"
                    Inv.newBandits=true;
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "";
                }
                else if (choixg4=="Achever"){
                    victoire = true;
                    Inv.newArgent=true;
                    tes ="<h1>Argent +</h1><p>Tu as gagné de l'argent !</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "";
                }
                else{
                    mort = true;
                    tes ="<h1>Bombe</h1><p>Mort</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/bombe.gif";
                }
            }    
            else if (choixg3 == "Montagne"|| choixg3 == "montagne"){
                if (choixg4=="Epargner"){
                    victoire = true;
                    Inv.newDino=true;
                    tes ="<h1>Allié</h1><p>Tu as gagné un allié !</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "";
                }
                else if (choixg4=="Achever"){
                    victoire = true;
                    Inv.newBagueV=true;
                    tes ="<h1>Bague</h1><p>Tu as gagné une bague verte !</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "";
                }
                else{
                    mort = true;
                    tes ="<h1>Il s'est relevé</h1><p>Mort</p>"
                    document.getElementById("texte").innerHTML = tes;
                    document.getElementById("image").src = "img/mort.png";
                }
            }
        }
        else if (Perso.Classe=="Voleur"){
            blocom=true;
            if (choixv4=="Piller"){
                victoire=true;
                Inv.newBagues=true;
                tes ="<h1>Pillage</h1><p>Un anneau</p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/Bagues.gif";
            }
            else if (choixv4=="Coffre"){
                victoire=true;
                Inv.newCollier=true;
                tes ="<h1>Coffre</h1><p>Un collier </p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/collier.png";
            }
            else if (choixv4==""){
                mort=true;
                tes ="<h1>T'es Mort</h1><p>Il s'est relevé...</p>"
                document.getElementById("texte").innerHTML = tes;
                document.getElementById("image").src = "img/mort.png";
            }
        }
    }
}

function commande(){
    if (bloccom==true){
        if (page === 1){
            let nom = document.getElementById('commandes').value;
            if (nom === ''){
                Perso.newNom='Inconnu';
            }
            else {
                Perso.newNom=nom;
            }
        }
        if (page === 2){
            let classe = document.getElementById('commandes').value;
            if (classe === 'Guerrier' || classe === 'guerrier') {
                Perso.newClasse = "Guerrier";
                Perso.newPvMax = 100;
                Perso.newDefense = 999;
                Perso.newForce = 999;
                Perso.newMagie = 999;
            }
            else if (classe === 'Mage' || classe === 'mage') {
                Perso.newClasse = "Mage";
                Perso.newPvMax = 100;
                Perso.newDefense = 999;
                Perso.newForce = 999;
                Perso.newMagie = 99;
            }
            else if (classe === 'Voleur' || classe === 'voleur') {
                Perso.newClasse = "Voleur";
                Perso.newPvMax = 100;
                Perso.newDefense = 999;
                Perso.newForce = 999;
                Perso.newMagie = 999;
            }
            else {
                Perso.newClasse = "";
                Perso.newPvMax = 10;
                Perso.newPV = 10;
                Perso.newDefense = 1;
                Perso.newForce = 1;
                Perso.newMagie = 1;
            }
        }
        if (Perso.Classe === ''){
            if (page === 3){
                let choix = document.getElementById('commandes').value;
                if (choix == ''){
                    choixr = '';
                } 
                else {
                    choixr='é';
                }
            }
        }
        if (Perso.Classe === "Guerrier"){
            if (page ==4){
                let choix = document.getElementById('commandes').value;
                if (choix === 'Manger' || choix === 'manger'){
                    choixg1 = 'Manger';
                } 
                else if (choix === 'Affuter' || choix === 'affuter'){
                    choixg1 = 'Affuter';
                } 
                else {
                    choixg1 = "";
                }
            }
            if (page ==6){
                let choix = document.getElementById("commandes").value;
                if (choix === "Attaquer" || choix === "attaquer"){
                    choixg2 = "Attaquer";
                } 
                else if (choix === "Defendre" || choix === "defendre"){
                    choixg2 = "Defendre";
                } 
                else {
                    choixg2 = "";
                }
            }
            if (page ==9){
                let choix = document.getElementById("commandes").value;
                if (choix === "Foret" || choix === "foret"){
                    choixg3 = "Foret";
                } 
                else if (choix === "Montagne" || choix === "montagne"){
                    choixg3 = "Montagne";
                } 
                else {
                    choixg3 = "";
                }
            }
            if (page ==11){
                let choix = document.getElementById("commandes").value;
                if (choix === "Epargner" || choix === "epargner"){
                    choixg4 = "Epargner";
                } 
                else if (choix === "Achever" || choix === "achever"){
                    choixg4 = "Achever";
                } 
                else {
                    choixg4 = "";
                }
            }
        }
        if (Perso.Classe === "Mage"){
            if (page ==4){
                let choix = document.getElementById('commandes').value;
                if (choix === "Lumière" || choix === "lumière" || choix === "Lumiere" || choix === "lumiere"){
                    choixm1 = "Lumiere";
                } 
                else if (choix === "Ténèbres" || choix === "ténèbres" || choix =="Tenebres" || choix =="tenebres"){
                    choixm1 = "Tenebre" ;
                } 
                else {
                    choixm1 = "";
                }
            }
            if (page ==6){
                let choix = document.getElementById("commandes").value;
                if (choix === "Aventure" || choix === "aventure"){
                    choixm2 = "Aventure";
                } 
                else if (choix === "Etudes" || choix === "etudes" || choix == "études"){
                    choixm2 = "Etudes";
                } 
                else {
                    choixm2 = "";
                }
            }
            if (page ==8){
                let choix = document.getElementById("commandes").value;
                if (choixm2 == "Aventure"){
                    if (choix === "Neige" || choix === "neige"){
                        choixm3 = "Neige";
                    } 
                    else if (choix === "Dolmens" || choix === "dolmens"){
                        choixm3 = "Dolmens";
                    } 
                    else {
                        choixm3 = "";
                    }
                }
                else if (choixm2 == "Etudes"){
                    if (choix === "Blanche" || choix === "blanche"){
                        choixm3 = "Blanche";
                    } 
                    else if (choix === "Noire" || choix === "noire"){
                        choixm3 = "Noire";
                    } 
                    else {
                        choixm3 = "";
                    }
                }
            }
            if (page ==10){
                let choix = document.getElementById("commandes").value;
                if (choixm3=="Neige"){
                    if (choix === "Non" || choix === "non"){
                        choixm4 = "Non";
                    } 
                    else if (choix === "Oui" || choix === "oui"){
                        choixm4 = "Oui";
                    } 
                    else {
                        choixm4 = "";
                    }
                }
                
            }
        }
        if (Perso.Classe === "Voleur"){
            if (page==4){
                let choix = document.getElementById('commandes').value;
                if (choix === 'Concentration' || choix === 'concentration'){
                    choixv1 = 'Concentration';
                } 
                else if (choix === 'Arme' || choix === 'arme'){
                    choixv1 = 'Arme';
                } 
                else if(choix==="Armure"|| choix =="armure"){
                    choixv1="Armure";
                }
                else {
                    choixv1 = "";
                }
            }
            if (page==7){
                let choix = document.getElementById('commandes').value;
                if (choix === 'Infiltration' || choix === 'infiltration'){
                    choixv2 = 'Infiltration';
                } 
                else if (choix === 'Attaque' || choix === 'attaque'){
                    choixv2 = 'Attaque';
                } 
                else {
                    choixv2 = "";
                }
            }
            if (page==9){
                let choix = document.getElementById('commandes').value;
                if (choix === 'Infiltration' || choix === 'infiltration'){
                    choixv3 = 'Infiltration';
                } 
                else if (choix === 'Partir' || choix === 'partir'){
                    choixv3 = 'Partir';
                } 
                else {
                    choixv3 = "";
                }
            }
            if (page==11){
                let choix = document.getElementById("commandes").value;
                if (choix === "Coffre" || choix === "coffre"){
                    choixv4 = "Coffre";
                } 
                else if (choix === "Piller" || choix === "piller"){
                    choixv4 = "Piller";
                } 
                else {
                    choixv4 = "";
                }
            }
        }
    }
    else if (fight === true || mort == true || victoire == true) {}
    else {
        if (document.getElementById('commandes').value == "Commandes" || document.getElementById('commandes').value == "commandes"){
            commandes();
        }
        else if (document.getElementById('commandes').value == "Combat" || document.getElementById('commandes').value == "combat"){
            fight=true;
            combat();     
        }
        else if (document.getElementById('commandes').value == 'Retour' || document.getElementById('commandes').value == 'retour'){
            retour();
        }
    }
    document.getElementById('commandes').value = "";
}