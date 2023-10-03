<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// variable de sauvegarde de l'état du message d'erreur, affiché si non vide
const messageErreur = ref('');
const connectionEncours = ref(false);

const email = ref('');
const motDePasse = ref('');

const router = useRouter();


/**
 * onclick du message d'erreur
 */
const connecter = () => {
  const url = "http://localhost:8000/api/login";

  console.log("mail: ", email);
  const data = {
    email: email.value,
    plainPassword: motDePasse.value
  };

  connectionEncours.value = true;

  axios.post(url, JSON.stringify(data))
    .then(response => {
      console.log('success', response);
      router.push('/message')
    })
    .catch(error => {
      console.log('error: ', error);
      messageErreur.value = 'Veuillez entrez vos informations avant de valider.';
    })
    .finally(() => {
      connectionEncours.value = false;
    });

}

</script>


<template>
  <v-container>
    <v-row align="center" justify="center" no-gutters>
      <v-col class="elevation-2 px-6 py-10 flex-column gap-2 align-center justify-center  " md="4" sm="12">
        <div class="my-4 d-flex justify-center"><v-img height="80" src="@/assets/logo.svg" alt="icon-messagerie" /></div>
        <p class="text-center mt-4 mb-5">Pour continuer, veuillez vous connecter</p>
        <h5 class="text-center my-4 text-red-accent-4" v-if="messageErreur != ''">{{ messageErreur }}</h5>
        <v-text-field label="Email" class=" my-4" placeholder="votreadresse@email.com" type="email"
          v-model="email"></v-text-field>
        <v-text-field label="Password" class=" my-2" type="password" v-model="motDePasse"></v-text-field>
        <div class="text-center">
          <v-btn rounded="lg" class="bg-teal-darken-1 my-4" size="large" @click="connecter()">
            Se connecter
          </v-btn>
        </div>
        <p class="text-center my-4">Vous n'avez pas encore un compte?
          <a href="/signup">S'inscrire</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
