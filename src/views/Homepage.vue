<template>
  <div class="homepage">
    <div class="block1 container-fluid">
      <h1>
        reparation de telephone <br />
        a domicile
      </h1>

      <button type="button" class="button1">réparer</button>
    </div>

    <div id="block2" class="block2 container-fluid">
      <h2>comment sa marche ?</h2>

      <div class="container tuto">
        <div class="row haut">
          <div class="col-lg-5 col-md-5 col-sm-5 etape etape1">
            1. Diagnostique <br />
            <br />
            rempliser le formulaire
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2"></div>
          <div class="col-lg-5 col-md-5 col-sm-5 etape">
            2.confirmation <br /><br />par la suite nous vous contacterons a
            fiin de vous faire un devis pour ensuite confirmer un rendez vous
          </div>
        </div>
        <div class="row bas">
          <div class="col-lg-5 col-md-5 col-sm-5 etape">
            3.reparation <br /><br />
            rendez vous sur le lieu que vous avez choisi,un reparation clean et
            rapide
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2"></div>
          <div class="col-lg-5 col-md-5 col-sm-5 etape">
            4.paiement <br />
            <br />reglement en espece ou carte bancaire
          </div>
        </div>
      </div>
      <button type="button" class="button1 button2">réparer</button>
    </div>
    <div class="container-fluid block3">
      <div class="row">
        <h1>qui somme nous ?</h1>
        <div class="qsm">
          <p>
            <img src="../assets/idea.svg" alt="" /> Pimp my phone , startup cree
            en 2020, specialiser dans la reparation de telephone a domicile
          </p>

          <p>
            <img src="../assets/home.svg" alt="" /> piece de qualité, reparation
            garanti 100% anthentique.reparation en un temps record (20/30min ~
            selon le probleme)
          </p>
          <p>
            <img class="test" src="../assets/planet-earth.svg" alt="" /> Pimp my
            phone , Se deplace dans toute l’ile de france. domicile, lieu de
            travail a vous de choisir
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style>
@media screen and (min-width: 1280px) {
  /* gd ecran pc */

  /* block 1*/

  .block1 {
    background-image: url("../assets/bg-header.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block1 h1 {
    color: white;
    z-index: 99999;
    text-align: center;
    padding-top: 19%;
    padding-bottom: 5%;
    /* block 2*/
  }
  .block2 {
    background-image: url("../assets/bg-section-1.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block2 h1 {
    color: white;
    position: relative;
    z-index: 99999;
    text-align: center;
    padding-top: 3%;
  }
  .tuto {
    text-align: center;
    padding-top: 5%;
    font-size: 25px;
  }
  .block2 .haut {
    padding-bottom: 7%;
  }
  .block2 .bas {
    padding-bottom: 2%;
  }
  .block2 .etape {
    background-color: #333333d0;
  }
  .button1 {
    background-color: #3ab9a8;
    border: none;
    color: white;
    padding: 15px 45px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    object-position: center;
    font-family: "Roboto Condensed";
    text-transform: uppercase;
    position: relative;
    border-radius: 40px !important ;
  }

  button:hover {
    background-color: #ffffff;
    color: #3ab9a8;
  }
  /* block 3*/
  .block3 p {
    color: black;
    padding-top: 1%;
  }
  .block3 img {
    width: 5%;
    margin-right: 1%;
    color: #3ab9a8;
  }
  .qsm {
    float: left;
    font-size: 23px;
    fill: red;
  }
  .test {
    fill: red;
  }

  /* footer */
}
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  /*  pc */

  /* block 1*/

  .block1 {
    background-image: url("../assets/bg-header.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block1 h1 {
    color: white;
    z-index: 99999;
    text-align: center;
    padding-top: 19%;
    padding-bottom: 5%;
    /* block 2*/
  }
  .block2 {
    background-image: url("../assets/bg-section-1.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block2 h1 {
    color: white;
    position: relative;
    z-index: 99999;
    text-align: center;
    padding-top: 3%;
  }
  .tuto {
    text-align: center;
    padding-top: 5%;
    font-size: 25px;
  }
  .block2 .haut {
    padding-bottom: 7%;
  }
  .block2 .bas {
    padding-bottom: 2%;
  }
  .block2 .etape {
    background-color: #333333d0;
  }
  .button1 {
    background-color: #3ab9a8;
    border: none;
    color: white;
    padding: 15px 45px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    object-position: center;
    font-family: "Roboto Condensed";
    text-transform: uppercase;
    position: relative;
    border-radius: 40px !important ;
  }

  button:hover {
    background-color: #ffffff;
    color: #3ab9a8;
  }
  /* block 3*/
  .block3 p {
    color: black;
    padding-top: 1%;
  }
  .block3 img {
    width: 5%;
    margin-right: 1%;
    color: #3ab9a9;
  }
  .qsm {
    float: left;
    font-size: 23px;
    fill: red;
  }
  .test {
    fill: red;
  }

  /* footer */
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  /*  grand tblt */

  /* block 1*/

  .block1 {
    background-image: url("../assets/bg-header.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block1 h1 {
    color: white;
    z-index: 99999;
    text-align: center;
    padding-top: 19%;
    padding-bottom: 5%;
    /* block 2*/
  }
  .block2 {
    background-image: url("../assets/bg-section-1.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block2 h1 {
    color: white;
    position: relative;
    z-index: 99999;
    text-align: center;
    padding-top: 3%;
  }
  .tuto {
    text-align: center;
    padding-top: 5%;
    font-size: 25px;
  }
  .block2 .haut {
    padding-bottom: 7%;
  }
  .block2 .bas {
    padding-bottom: 2%;
  }
  .block2 .etape {
    background-color: #333333d0;
  }
  .button1 {
    background-color: #3ab9a8;
    border: none;
    color: white;
    padding: 15px 45px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    object-position: center;
    font-family: "Roboto Condensed";
    text-transform: uppercase;
    position: relative;
    border-radius: 40px !important ;
  }

  button:hover {
    background-color: #ffffff;
    color: #3ab9a8;
  }
  /* block 3*/
  .block3 p {
    color: black;
    padding-top: 1%;
  }
  .block3 img {
    width: 5%;
    margin-right: 1%;
    color: #3ab9a8;
  }
  .qsm {
    float: left;
    font-size: 23px;
    fill: red;
  }
  .test {
    fill: red;
  }

  /* footer */
}
@media screen and (min-width: 480px) and (max-width: 768px) {
  /*  tablette */

  /* block 1*/

  .block1 {
    background-image: url("../assets/bg-header.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block1 h1 {
    color: white;
    z-index: 99999;
    text-align: center;
    padding-top: 19%;
    padding-bottom: 5%;
    /* block 2*/
  }
  .block2 {
    background-image: url("../assets/bg-section-1.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block2 h1 {
    color: white;
    position: relative;
    z-index: 99999;
    text-align: center;
    padding-top: 3%;
  }
  .tuto {
    text-align: center;
    padding-top: 5%;
    font-size: 25px;
  }
  .block2 .haut {
    padding-bottom: 7%;
  }
  .block2 .bas {
    padding-bottom: 2%;
  }
  .block2 .etape {
    background-color: #333333d0;
  }
  .button1 {
    background-color: #3ab9a8;
    border: none;
    color: white;
    padding: 15px 45px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    object-position: center;
    font-family: "Roboto Condensed";
    text-transform: uppercase;
    position: relative;
    border-radius: 40px !important ;
  }

  button:hover {
    background-color: #ffffff;
    color: #3ab9a8;
  }
  /* block 3*/
  .block3 p {
    color: black;
    padding-top: 1%;
  }
  .block3 img {
    width: 5%;
    margin-right: 1%;
    color: #3ab9a8;
  }
  .qsm {
    float: left;
    font-size: 23px;
    fill: red;
  }
  .test {
    fill: red;
  }

  /* footer */
}
@media screen and (min-width: 320px) and (max-width: 600px) {
  /*  mobile */

  /* block 1*/

  .block1 {
    background-image: url("../assets/bg-header.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block1 h1 {
    color: white;
    z-index: 99999;
    text-align: center;
    padding-top: 70%;
    padding-bottom: 20%;
    /* block 2*/
  }
  .block2 {
    background-image: url("../assets/bg-section-1.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
  .block2 h1 {
    color: white;
    position: relative;
    z-index: 99999;
    text-align: center;
    padding-top: 3%;
  }
  .block2 h2 {
    padding-top: 15%;
  }
  .tuto {
    text-align: center;
    padding-top: 10%;
    font-size: 25px;
  }
  .block2 .haut {
    padding-bottom: 7%;
  }
  .block2 .etape1 {
    margin-bottom: 36%;
  }
  .block2 .bas {
    padding-bottom: 2%;
    display: none;
  }
  .block2 .etape {
    background-color: #333333d0;
  }
  .button1 {
    background-color: #3ab9a8;
    border: none;
    color: white;
    padding: 15px 45px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    object-position: center;
    font-family: "Roboto Condensed";
    text-transform: uppercase;
    position: relative;
    border-radius: 40px !important ;
  }
  .button2 {
    margin-top: 20%;
  }

  button:hover {
    background-color: #ffffff;
    color: #3ab9a8;
  }
  /* block 3*/
  .block3 p {
    color: black;
    padding-top: 1%;
  }
  .block3 img {
    width: 5%;
    margin-right: 1%;
    color: #3ab9a8;
  }
  .qsm {
    float: left;
    font-size: 15px;
    fill: red;
  }
  .test {
    fill: red;
  }

  /* footer */
}
</style>
