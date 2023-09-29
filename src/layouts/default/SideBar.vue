<template>
  <v-navigation-drawer
    expand-on-hover
    rail

  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Lafatra Ravelojaona"
        subtitle="lafatraravelojaona5@gmail.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item prepend-icon="mdi-chat-outline" title="Messages" value="myfiles"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group" title="Amis" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Se déconnecter" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>
