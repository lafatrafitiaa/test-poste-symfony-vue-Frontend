<template>
  <v-app class="py-2">
    <v-layout>
      <default-side-bar />
      <default-view />
    </v-layout>
    <!-- <default-bar /> -->
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultSideBar from './SideBar.vue'
  import DefaultView from './View.vue'
</script>
