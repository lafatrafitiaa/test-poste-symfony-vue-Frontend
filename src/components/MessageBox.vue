<template>
  <div class="flex-column h-100">
    <div class="w-100 px-3 py-1 elevation-1 ">
      <div class="d-flex align-center">
        <div class="px-2 py-1">
          <v-avatar color="surface-variant" size="60"></v-avatar>
        </div>
        <div class="px-2 py-1">
          Username
        </div>
      </div>
    </div>
    <div class="px-2 py-4 ">corps</div>
    <div class="px-2 ">
      <v-form>
        <v-row>
          <v-col cols="12" class="d-flex gap-2">
            <v-text-field v-model="message" variant="filled" clear-icon="mdi-close-circle" clearable label="Message"
              type="text" @click:append="sendMessage" @click:clear="clearMessage"></v-text-field>
            <v-btn icon="mdi-send-variant" size="large" @click="send"></v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

const qs = require('qs');

const message = ref('');

const clearMessage = () => {
  message.value = '';
}

const sendMessage = () => {
  clearMessage();
}

const send = () => {
  try {
    const url = "http://127.0.0.1:8000/send-message";
    const data = {
      senderId: 1,
      receiverId: 2,
      messages: message.value
    };

    axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('success', response);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  } catch (error) {

  }

}
</script>

<style scoped>
.border {
  border: 0 0 0 1ch solid #e8e8e8;
}
</style>
