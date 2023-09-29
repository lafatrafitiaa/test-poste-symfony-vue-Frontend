<template>
  <v-row
    class="h-100 px-2 "

  >
    <v-col
      md="3"
      class="h-100 elevation-2 flex-column"
    >
      <InputTextSearch />
      <div
        v-for="message in listMessage"
        :key="message.id"
      >
        <MessageCard :message="message" />
      </div>
    </v-col>
    <v-col
      md="9"
      class="h-100"
    >
      <MessageBox />
    </v-col>
  </v-row>

</template>

<script lang="ts" setup>
import Utilisateur from "@/interfaces/utilisateur.model";
import MessageCard from "../components/MessageCard.vue";
import MessageBox from "../components/MessageBox.vue";
import InputTextSearch from "../components/inputs/InputTextSearch.vue";
import Message from "@/interfaces/message.model";

const person: Utilisateur = {
  email: "fanantenanaran@gmail.com",
  username: "fanantenanaran"
};

const messageExemple: Message = {
  id: 1,
  contenue: "Bonjour, c'est fait?",
  person: person,
  date: new Date(),
  lu: false
};

const listMessage: Message[] = [
  messageExemple,
  messageExemple,
  messageExemple,
]

</script>
