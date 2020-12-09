<template>
  <div class="container-fluid reparer">
    <h2 class="titre">
      Sectionnez votre modele <span class="iphone">d'iphone </span> a reparer
    </h2>
    <div class="container select">
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-3 selection">
          <b-form-select v-model="nom" :options="models">
            <template v-slot:first>
              <b-form-select-option :value="nom" disabled id="send1"
                >Model</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div class="col col-12 col-md-6 col-lg-3 selection">
          <b-form-select v-model="couleur" :options="couleurs">
            <template v-slot:first>
              <b-form-select-option :value="couleur" disabled id="send2"
                >couleur</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div class="col col-12 col-md-6 col-lg-3 selection">
          <b-form-select v-model="capacite" :options="capacites">
            <template v-slot:first>
              <b-form-select-option :value="capacite" disabled id="send3"
                >capacite</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div class="col col-12 col-md-6 col-lg-3 selection">
          <b-form-select v-model="panne" :options="pannes">
            <template v-slot:first>
              <b-form-select-option :value="panne" disabled id="send4"
                >panne</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>
      </div>

      <button type="button" class="button1">Validé</button>

      <div class="col resultat">
        <input
          class="col-10"
          type="text"
          id="result"
          :disabled="validated ? disabled : ''"
          :value="nom + ` ` + couleur + ` ` + capacite + ` ` + panne"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "select",

  data() {
    return {
      nom: "",
      couleur: "",
      capacite: "",
      panne: "",
      models: [
        {
          value: "iphone 6",
          text: "iphone 6",
        },
        {
          value: "iphone 6s ",
          text: "iphone 6s",
        },
        {
          value: "iphone 6 plus ",
          text: "iphone 6 plus ",
        },
        {
          value: "iphone 6s plus ",
          text: "iphone 6 s plus ",
        },
      ],
      couleurs: [
        {
          value: "blanc",
          text: "blanc",
        },
        {
          value: "noir",
          text: "noir",
        },
        {
          value: "or",
          text: "or",
        },
      ],
      capacites: [
        {
          value: "16 GO",
          text: "16 GO ",
        },
        {
          value: "32 GO",
          text: "32 GO ",
        },
        {
          value: "64 GO",
          text: "64 GO ",
        },
        {
          value: "128 GO",
          text: "128 GO ",
        },
      ],
      pannes: [
        {
          value: "ecran cassé",
          text: "ecran cassé",
        },
        {
          value: "batterie usagée",
          text: "batterie usagée",
        },
        {
          value: "ne s'allume plus ",
          text: "ne s'allume plus ",
        },
        {
          value: "autre(s)",
          text: "autre(s)",
        },
      ],
    };
  },
};
</script>

<style>
.titre {
  color: black;
}
#result {
  padding: 7px !important;
  padding-bottom: 5%;
}
.reparer {
  background-color: #f5f6f9 !important;
  height: 100vh;
}

@media (min-width: 1280px) {
  /*  grand ecran */

  .reparer {
    background-color: #f5f6f9;
    height: 100vh;
  }
  .reparer button {
    margin-top: 5%;
  }
  .resultat {
    margin-top: 5%;
    height: 40px !important;
  }
  .body {
    background-color: aqua !important;
  }
  .titre {
    padding-bottom: 5%;
    padding-top: 20%;
  }
  .iphone {
    color: #3ab9a9;
  }
  .b-form-select {
    color: rgb(197, 27, 27) !important;
  }

  select {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
  .selection {
    margin: 10px 0px !important;
  }
  #result {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
    padding-bottom: 10px;
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  /*  pc */

  .reparer {
    background-color: #dcdcdc;
    height: 100vh;
  }
  .reparer button {
    margin-top: 5%;
  }
  .resultat {
    margin-top: 5%;
  }
  .body {
    background-color: aqua !important;
  }
  .titre {
    padding-bottom: 5%;
    padding-top: 20%;
  }
  .iphone {
    color: #3ab9a9;
  }
  .b-form-select {
    color: rgb(197, 27, 27) !important;
  }

  select {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
  .selection {
    margin: 10px 0px !important;
  }
  #result {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /*   grands tablette */

  .reparer {
    background-color: #dcdcdc;
    height: 100vh;
  }
  .reparer button {
    margin-top: 5%;
  }
  .resultat {
    margin-top: 5%;
  }
  .body {
    background-color: aqua !important;
  }
  .titre {
    padding-bottom: 5%;
    padding-top: 20%;
  }
  .iphone {
    color: #3ab9a9;
  }
  .b-form-select {
    color: rgb(197, 27, 27) !important;
  }

  select {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
  .selection {
    margin: 10px 0px !important;
  }
  #result {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
}

@media (min-width: 480px) and (max-width: 768px) {
  /*  tablette */

  .reparer {
    background-color: #dcdcdc;
    height: 100vh;
  }
  .reparer button {
    margin-top: 5%;
  }
  .resultat {
    margin-top: 5%;
  }
  .body {
    background-color: aqua !important;
  }
  .titre {
    padding-bottom: 5%;
    padding-top: 20%;
  }
  .iphone {
    color: #3ab9a9;
  }
  .b-form-select {
    color: rgb(197, 27, 27) !important;
  }

  select {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
  .selection {
    margin: 10px 0px !important;
  }
  #result {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
}

@media (min-width: 320px) and (max-width: 600px) {
  /*  mobile */

  .reparer {
    background-color: #dcdcdc;
    height: 100vh;
  }
  .reparer button {
    margin-top: 5%;
  }
  .resultat {
    margin-top: 15%;
  }
  .body {
    background-color: aqua !important;
  }
  .titre {
    padding-bottom: 20%;
    padding-top: 30%;
    font-size: 20px;
  }
  .iphone {
    color: #3ab9a9;
  }
  .b-form-select {
    color: rgb(197, 27, 27) !important;
  }

  select {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }

  .selection {
    margin: 10px 0px !important;
  }
  #result {
    border-color: #3ab9a9 !important;
    border-width: 2px !important;
  }
}
</style>