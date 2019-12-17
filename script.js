window.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        if (page<70){
            page++;
            continuer();
        }
    }
    else if (e.keyCode == 37) {
        if (page>0){
            page--;
            continuer();
        }    
    }
  });

let page = 0;
let choix = 0.0;
let tes ='';
let fight = false;
let monstre = 0;

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
    constructor(Nom, PVMax, PV, Defense, Force, Magie, XP) {
    this.Nom = Nom;
    this.PVMax = PVMax;
    this.PV = PV;
    this.Defense = Defense;
    this.Force = Force;
    this.Magie = Magie;
    this.XP = XP;
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

const Perso = new Hero('???','',10,10,6,5,1,0,1);

/*Mobs niveau 1 à 3 */
const Slime = new Mob('Slime',10,10,1,3,1,10);
const Rat = new Mob('Rat Géant',15,15,3,2,0,13);
const Fantome = new Mob('Fantome',13,13,1,1,3,10);

/*Mobs niveau 4 à 6 */

const Loup = new Mob('Loup Sabré',10,10,1,3,1,20);
const Orc = new Mob('Orc Armé',15,15,3,2,0,23);
const Robot = new Mob('Automate défaillant',13,13,1,1,3,20);

/*Mobs niveau 7 à 9 */

const Wivre = new Mob('Wyverne Mécanique',10,10,1,3,1,40);
const Ange = new Mob('Ange Déchu',15,15,3,2,0,43);
const Demon = new Mob('Démon Infernal',13,13,1,1,3,40);

/*Boss */
const Dieu = new Mob('Dieu',100,100,10,10,10,0);
const Diable = new Mob('Diable',200,200,20,20,20,0);
const Dragon = new Mob('Dragon',200,200,25,25,25,0);
const Double = new Mob('Toi',300,300,30,30,30,0);

function attaqueMob(){
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
function faible() {
    if (monstre == 1){    
        if ((-(Perso.Force/2)+(Fantome.Defense/2))<0){
            Fantome.newPV = Fantome.PV-(Perso.Force/2)+(Fantome.Defense/2);
        }
        attaqueMob();
        document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Fantome.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Slime.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Rat.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Loup.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Orc.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Robot.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Wivre.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Ange.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Demon.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
            Perso.newXP = Perso.XP + Demon.XP;
            leveling();
            retour();
        }
    }
}
function forte() {
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Fantome.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Slime.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Rat.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Loup.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Orc.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Robot.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Wivre.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Ange.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Demon.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
            Perso.newXP = Perso.XP + Demon.XP;
            leveling();
            retour();
        }
    }
}
function magie() {
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Fantome.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Slime.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Rat.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Loup.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Orc.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Robot.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Wivre.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Ange.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
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
        if (Perso.PV <= 0){
            alert("Vous avez perdu le combat");
            retour()
        }
        if (Demon.PV <= 0){
            alert("Bravo, vous avez gagné le combat");
            Perso.newXP = Perso.XP + Demon.XP;
            leveling();
            retour();
        }
    }
}
function fuite() {
    let reussite = Math.floor(Math.random() * Math.floor(100));
    if (reussite < 65){ 
        retour()
    }
    else {
        alert('Fuite impossible');
        attaqueMob();
        if (monstre == 1){
            document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 2){
            document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 3){
            document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 4){
            document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 5){
            document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 6){
            document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 7){
            document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 8){
            document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
        else if (monstre == 9){
            document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            if (Perso.PV <= 0){
                alert("Vous avez perdu le combat");
                retour()
            }
        }
    }
}
function leveling(){
    if (Perso.Niveau == 1 && Perso.XP>15){
        Perso.newNiveau = 2;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 2 && Perso.XP>30){
        Perso.newNiveau = 3;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 3 && Perso.XP>45){
        Perso.newNiveau = 4;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 4 && Perso.XP>75){
        Perso.newNiveau = 5;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 5 && Perso.XP>105){
        Perso.newNiveau = 6;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 6 && Perso.XP>135){
        Perso.newNiveau = 7;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 7 && Perso.XP>195){
        Perso.newNiveau = 8;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 8 && Perso.XP>255){
        Perso.newNiveau = 9;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
    if (Perso.Niveau == 9 && Perso.XP>315){
        Perso.newNiveau = 10;
        if (Perso.Classe == "Guerrier"){
            alert("Vous êtes monté de niveau Guerrier\rAugmentation de : ")
        }
        else if (Perso.Classe == "Mage"){
            alert("Vous êtes monté de niveau Mage\rAugmentation de : ")
        }
        else if (Perso.Classe == "Voleur"){
            alert("Vous êtes monté de niveau Voleur\rAugmentation de : ")
        }
        else if (Perso.Classe == ""){
            alert("Vous êtes monté de niveau\rAugmentation de : ")
        }
    }
}
function combat() {
    Perso.newPV= Perso.PVMax;
    document.getElementById('choix1').innerHTML = 'Attaque Faible';
    document.getElementById('choix2').innerHTML = 'Attaque Forte';
    document.getElementById('choix3').innerHTML = 'Magie';
    document.getElementById('choix4').innerHTML = 'Fuir';
    document.getElementById('choix1').addEventListener('click', faible);
    document.getElementById('choix2').addEventListener('click', forte);
    document.getElementById('choix3').addEventListener('click', magie);
    document.getElementById('choix4').addEventListener('click', fuite);

    let randMob = Math.floor(Math.random() * Math.floor(3));

    if (Perso.Niveau>=1 && Perso.Niveau<=3){
        if (randMob===0 ){
            Fantome.newPV = Fantome.PVMax;
            document.getElementById('texte').innerHTML = Fantome.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 1;
        }
        else if (randMob===1){
            Slime.newPV = Slime.PVMax;
            document.getElementById('texte').innerHTML = Slime.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 2;
        }
        else if (randMob === 2) {
            Rat.newPV = Rat.PVMax;
            document.getElementById('texte').innerHTML = Rat.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 3;
        } 
    }
    else if (Perso.Niveau>=4 && Perso.Niveau<=6){
        if (randMob===0 ){
            Loup.newPV = Loup.PVMax;
            document.getElementById('texte').innerHTML = Loup.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 4;
        }
        else if (randMob===1){
            Orc.newPV = Orc.PVMax;
            document.getElementById('texte').innerHTML = Orc.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 5;
        }
        else if (randMob === 2) {
            Robot.newPV = Robot.PVMax;
            document.getElementById('texte').innerHTML = Robot.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 6;
        }
    }
    else {
        if (randMob===0 ){
            Wivre.newPV = Wivre.PVMax;
            document.getElementById('texte').innerHTML = Wivre.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 7;
        }
        else if (randMob===1){
            Ange.newPV = Ange.PVMax;
            document.getElementById('texte').innerHTML = Ange.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 8;
        }
        else if (randMob === 2) {
            Demon.newPV = Demon.PVMax;
            document.getElementById('texte').innerHTML = Demon.combats +'<br><br><br><br><br><br><br><br><br>'+Perso.combats;
            monstre = 9;
        }
    }

    
}

function retour() {
    document.getElementById('choix1').innerHTML = '';
    document.getElementById('choix2').innerHTML = '';
    document.getElementById('choix3').innerHTML = '';
    document.getElementById('choix4').innerHTML = '';
    document.getElementById('choix1').removeEventListener('click', faible);
    document.getElementById('choix2').removeEventListener('click', forte);
    document.getElementById('choix3').removeEventListener('click', magie);
    document.getElementById('choix4').removeEventListener('click', fuite);
    continuer();   
}
function chapitres() {
    tes = '<h1>Liste des chapitres</h1><h3>Voie du Guerrier</h3><h3>Voie du Mage</h3><h3>Voie du Voleur</h3><h3>Voie de l\'Inconnu</h3>'
    document.getElementById('texte').innerHTML = tes;
}
function commandes() {
    tes = '<h1>Liste des commandes</1><h3>Combat</h3><p>Lance un combat aléatoire en fonction de ton niveau</p><h3></h3><h3></h3><h3></h3><p>Entrer \'retour\' pour revenir à l\'histoire.</p>'
    document.getElementById('texte').innerHTML = tes;
}
function continuer(){
    fight = false;
    if(page===0){
        tes = "<h1>Bienvenue héro !</h1><h3>Rapide tutoriel </h3><p>Chaque choix déterminant sera effectué grâce aux boutons situés dans la partie inférieure. Un bouton vide ne fera rien.<br>Il y a également une barre en dessous pour rentrer du texte et lancer certaines commandes. Les commandes seront désactivées lors des combats, des choix ou dans des moments où il faut rentrer du texte.<br>Pour connaitre la liste des commandes, tape la commande 'commandes' et appuie sur la touche entrée.<br> Il y a plusieurs fins disponibles en fonction de tes choix au cours de la partie, à toi de toutes les découvrir !<br><br>Pour continuer appuie sur la flèche de droite et sur la flèche de gauche pour revenir en arrière.</p>";
        document.getElementById('texte').innerHTML = tes;
    }
    if(page===1){
        tes = '<h1>Création</h1><p>Quel est ton nom héro ?</p>';
        document.getElementById('texte').innerHTML = tes;
    }
    if(page===2){
        tes = '<h1>Salut</h1><p>Quel pouvoir convoites tu '+Perso.Nom+'?</p>';
        document.getElementById('texte').innerHTML = tes;
    }
    if(page===3){
        tes = '<h1>Salut</h1><p>page : '+page+'</p>';
        document.getElementById('texte').innerHTML = tes;
    }
    if(page===4){
        tes = '<h1>Salut</h1><p>page : '+page+'</p>';
        document.getElementById('texte').innerHTML = tes;
    }
    if(page===5){
        tes = '<h1>Salut</h1><p>page : '+page+'</p>';
        document.getElementById('texte').innerHTML = tes;
    }
}

function commande()
{
    if (page === 1 || page === 2){
        if (page === 1){
            let nom = document.getElementById('commandes').value;
            if (nom === ''){
                Perso.newNom='???';
            }
            else {
                Perso.newNom=nom;
            }
        }
        if (page === 2){
            let classe = document.getElementById('commandes').value;
            Perso.newClasse=classe;
            if (Perso.Classe === 'Guerrier' || Perso.Classe === 'guerrier') {
                Perso.newClasse = "Guerrier";
                Perso.newPvMax = 20;
                Perso.newPV = 20;
                Perso.newDefense = 4;
                Perso.newForce = 3;
                Perso.newMagie = 1;
            }
            else if (Perso.Classe === 'Mage' || Perso.Classe === 'mage') {
                Perso.newClasse = "Mage";
                Perso.newPvMax = 25;
                Perso.newPV = 25;
                Perso.newDefense = 3;
                Perso.newForce = 2;
                Perso.newMagie = 4;
            }
            else if (Perso.Classe === 'Voleur' || Perso.Classe === 'voleur') {
                Perso.newClasse = "Voleur";
                Perso.newPvMax = 15;
                Perso.newPV = 15;
                Perso.newDefense = 3;
                Perso.newForce = 3;
                Perso.newMagie = 2;
            }
            else {
                Perso.newClasse = "";
                Perso.newPvMax = 10;
                Perso.newPV = 10;
                Perso.newDefense = 1;
                Perso.newForce = 1;
                Perso.newMagie = 0;
            }
        }
    }
    else if (fight === true) {

    }
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
        else if (document.getElementById('commandes').value == 'Chapitres' || document.getElementById('commandes').value == 'chapitres') {
            chapitres();
        }
    }
    document.getElementById('commandes').value = "";
}