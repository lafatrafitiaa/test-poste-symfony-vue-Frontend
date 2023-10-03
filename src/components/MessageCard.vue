<template>
  <div :class="classCard">
    <div class="px-4 py-3">
      <v-avatar color="surface-variant" size="60"></v-avatar>
    </div>
    <div class="px-4 py-3 flex-column align-center my-auto w-100">
      <h3>{{ message.person }}</h3>
      <p>{{ message.contenue }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Message from "../interfaces/message.model";

export default {
  props: {
    message: {
      type: Object as () => Message,
      required: true,
    }
  },
  data() {
    let classCard = "d-flex rounded-xl ";

    // ajout d'un elevation si la personne
    if (this.message.current) classCard = `${classCard} elevation-2`;
    return {
      classCard
    }
  }
}




</script>
