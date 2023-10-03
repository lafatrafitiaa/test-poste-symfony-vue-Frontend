<template>
  <v-row class="h-100 px-2 ">
    <v-col md="3" class="h-100 elevation-2 flex-column">
      <InputTextSearch />
      <div v-for="message in boxmessages " :key="message.id">
        <MessageCard :message="message" />
      </div>
    </v-col>
    <v-col md="9" class="h-100">
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
import { onMounted, ref } from 'vue';
import axios from 'axios';

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

const boxmessages = ref([]);

const getListMessage = async () => {
  try {
    const url = "http://localhost:8000/box-message/1";
    const response = await axios.get(url);

    console.log(response.data);

    const data = response.data.data;
    const box = data.map(item => ({
      id: item.id,
      contenue: item.messages,
      person: "test",
      date: item.dateMessage.date,
      lu: false
    }));
    boxmessages.value = box;
    console.log("boox: ", box);
  } catch (error) {

  }
}

onMounted(
  getListMessage
);

</script>
