<template>
  <router-view />
  <v-layout>
    <v-app-bar theme="dark" class="px-16">
      <v-icon color="blue-lighten-4">mdi-cellphone</v-icon>
      <v-btn variant="text" :ripple="false" to="/">contact manager</v-btn>
    </v-app-bar>
  </v-layout>
</template>

<style lang="stylus"></style>

<script>
export default {
  name: "App",
};
</script>
