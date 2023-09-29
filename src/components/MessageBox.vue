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
            <v-btn icon="mdi-send-variant" size="large"></v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

const message = ref('');

const clearMessage = () => {
  message.value = '';
}

const sendMessage = () => {
  clearMessage();
}
</script>

<style scoped>
.border {
  border: 0 0 0 1ch solid #e8e8e8;
}
</style>
