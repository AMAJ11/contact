<template>
  <v-app theme="dark">
    <v-container>
      <div class="py-14 px-1">
        <h1>Add contact</h1>
        <v-row>
          <v-col cols="12" lg="6">
            <form>
              <v-text-field
                v-model="contact.name"
                prepend-icon="mdi-account"
                variant="solo-inverted"
                name="name"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact.mobile"
                prepend-icon="mdi-phone"
                variant="solo-inverted"
                name="mobileNumber"
                type="number"
                label="mobile number"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact.photo"
                prepend-icon="mdi-image"
                variant="solo-inverted"
                name="photoUrl"
                label="photo url"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact.email"
                prepend-icon="mdi-email"
                variant="solo-inverted"
                name="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact.location"
                prepend-icon="mdi-map-marker"
                variant="solo-inverted"
                name="location"
                label="Home location"
                required
              ></v-text-field>
              <v-text-field
                v-model="contact.title"
                prepend-icon="mdi-texture"
                variant="solo-inverted"
                name="title"
                label="title"
                required
              ></v-text-field>

              <v-select
                v-model="contact.groupId"
                :items="['friend', 'family', 'coulege', 'work', 'nighbour']"
                label="Group"
                required
              ></v-select>
              <v-btn
                color="blue"
                size="large"
                variant="elevated"
                block
                @click="click"
                >Create</v-btn
              >
            </form>
          </v-col>
          <v-col>
            <img style="width: 100px" :src="this.contact.photo" alt="" />
            <h2 v-if="this.val" class="text-red-lighten-2">
              please check all inputs
            </h2>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-btn
      color="blue-lighten-3"
      style="width: 100px"
      to="/"
      class="ml-10 mb-10"
      ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
    >
  </v-app>
</template>

<script setup>
import { ref } from "vue";
</script>

<script>
export default {
  name: "ContactAdd",
  props: ["contacts"],
  created: function () {
    if (
      this.contact.name.value != "" &&
      this.contact.mobile != "" &&
      this.contact.location != "" &&
      this.contact.email != "" &&
      this.contact.title != "" &&
      this.contact.photo != ""
    ) {
      this.val = false;
    }
  },
  data: function () {
    return {
      contact: {
        id: Math.random(0),
        name: "",
        mobile: "",
        location: "",
        email: "",
        title: "",
        photo: "",
        groupId: "",
      },
      val: false,
    };
  },
  methods: {
    click: function () {
      if (
        this.contact.name.value != "" &&
        this.contact.mobile != "" &&
        this.contact.location != "" &&
        this.contact.email != "" &&
        this.contact.title != "" &&
        this.contact.photo != ""
      ) {
        localStorage.setItem("conadd", JSON.stringify(this.contact));
        this.$router.push("/");
      } else {
        this.val = true;
      }
    },
  },
};
</script>
