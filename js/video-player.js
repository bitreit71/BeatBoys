document.querySelector(".VideoSuivante").disabled = false;
document.querySelector(".VideoPrecedente").disabled = false;

var HatomsPlayer = document.querySelector(".LecteurVideo");
var Lecteur = document.querySelector("#Video");

/* Début Controle Play Pause */

var Statut_PlayPause = document.querySelector(".BTN_PlayPause");

function HatomsPlayer_PlayPause() {
    if (Lecteur.paused) {
        Lecteur.play();
        Statut_PlayPause.classList.remove("Play");
        Statut_PlayPause.classList.add("Pause");

    }
    else {
        Lecteur.pause();
        Statut_PlayPause.classList.remove("Pause");
        Statut_PlayPause.classList.add("Play");
    }
}

/* Fin Controle Play Pause */

/* Controls Temps Video */

var Barre_TimeLine = document.querySelector("#TimeLine_Bar");
var Duree_Video = 0; // en secondes

function Initialiser_Duree_Video() {
    var Duree_Video = Lecteur.duration;
    var chaine = Calcul_Temp(Duree_Video);
    document.querySelector(".TimeCodeFin").innerHTML = chaine;
}

Lecteur.addEventListener('timeupdate', function () {
    var Duree_Actuel = Lecteur.currentTime;
    var chaine = Calcul_Temp(Duree_Actuel);
    document.querySelector(".TimeCodeCourant").innerHTML = chaine;
    Barre_TimeLine.value = ((Lecteur.currentTime / Lecteur.duration) * 100);
    //console.log(Barre_TimeLine.value);
})

function Currant_Modifier() {
    var Deplacer_Vers = Math.round((Barre_TimeLine.value * Lecteur.duration) / 100);
    //console.log(Deplacer_Vers);
    Lecteur.currentTime = Deplacer_Vers;
}

function Calcul_Temp(Duree_Secondes) {
    var chaine = "";
    if (new Date(Duree_Secondes * 1000).toISOString().substr(11, 2) == "00") {
        chaine = new Date(Duree_Secondes * 1000).toISOString().substr(14, 5);
    }
    else {
        chaine = new Date(Duree_Secondes * 1000).toISOString().substr(11, 8);
    }
    return chaine;
}

/* Fin Controls Temps Video */

/* Début Controle Son */

var SonVolume = 1;

var BTN_Mute = document.querySelector(".BTN_Mute");
var Barre_Son = document.querySelector("#Son_Bar");

function Son_Mute_Controls() {
    if (Lecteur.volume > 0) {
        SonVolume = Lecteur.volume;
        Lecteur.volume = 0;
        document.querySelector(".Pourcentage").innerHTML = 0 + "%";

        Barre_Son.value = 0;
        Control_Icone_Son();
    }
    else {
        Lecteur.volume = SonVolume;
        document.querySelector(".Pourcentage").innerHTML = Math.round(SonVolume * 100) + "%";

        Barre_Son.value = Math.round(SonVolume * 100);
        Control_Icone_Son();
    }
}

function Son_Modifier() {
    document.querySelector(".Pourcentage").innerHTML = Math.round(Barre_Son.value) + "%";
    Lecteur.volume = Barre_Son.value / 100;
    SonVolume = Barre_Son.value / 100;
    Control_Icone_Son();
}

function Control_Icone_Son() {
    if (Lecteur.volume > 0) {
        BTN_Mute.classList.remove("Mute");
        BTN_Mute.classList.add("Volume");
    }
    else {
        BTN_Mute.classList.remove("Volume");
        BTN_Mute.classList.add("Mute");
    }
}

/* Fin Controle Son */

/* Début Plein écran */

function PleinEcran_Update() {
    if (document.fullscreenElement) {
        // Si le lecteur est en plein ecran alors on le desactive
        if (document.webkitFullscreenEnabled) {
            document.webkitExitFullscreen();
        }
    } else {
        // Si le lecteur est pas en plein ecran alors on affiche en plein ecran
        if (!document.webkitFullscreenElement) {
            if (HatomsPlayer.webkitRequestFullscreen) {
                HatomsPlayer.webkitRequestFullscreen();
            }
            else {
                console.log('HatomsPlayer ne peut pas être afficher en plein ecran');
            }
        }
        else {
            console.log(document.webkitFullscreenElement, ' est en plein ecran');
        }
    }
}

/* Fin Plein écran */

/* Debut Playlist */
var VideoMax = 0;
var VideoActuel = 0;

var Playlist_Div = document.querySelector("#Playlist");
Lecteur.addEventListener('canplay', function () { Initialiser_Duree_Video(); });
Lecteur.addEventListener('ended', function () { Lancer_VideoSuivante(); });

function InitialisationPlaylist() {
    VideoMax = Playlist_Div.childElementCount;
    if (VideoMax > 0) {
        VideoActuel = 1;
        Lancer_Video(VideoActuel);
    }
    Barre_TimeLine.value = 0;
}

function Lancer_Video(Id_Video_Lancer) {
    document.querySelector(".TitreVideo").innerHTML = document.querySelector("#video-" + Id_Video_Lancer).innerHTML;
    Lecteur.removeAttribute('poster');
    Lecteur.src = document.querySelector("#video-" + Id_Video_Lancer).getAttribute("href");
    Lecteur.load();
    Gestion_BTN_PrecedentSuivant();
}


function Lancer_VideoSuivante() {
    if (VideoActuel < VideoMax) {
        VideoActuel += 1;
        Lancer_Video(VideoActuel);
        Lecteur.play();
    }
}

function Lancer_VideoPrecedente() {
    if (VideoActuel > 0) {
        VideoActuel -= 1;
        Lancer_Video(VideoActuel);
        Lecteur.play();
    }
}

function Gestion_BTN_PrecedentSuivant() {
    if (VideoActuel > 1) {
        document.querySelector(".VideoPrecedente").disabled = false;
    }
    else {
        document.querySelector(".VideoPrecedente").disabled = true;
    }

    if (VideoActuel == VideoMax) {
        document.querySelector(".VideoSuivante").disabled = true;
    }
    else {
        document.querySelector(".VideoSuivante").disabled = false;
    }
}

/* Fin Playlist */

/* Gestion Affichage des Controls */

InitialisationPlaylist();  

  window.addEventListener('load', function(){
      var newVideo = document.getElementById('videoElementId');
      newVideo.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);

      newVideo.play();

  });

