<template>
  <v-app theme="dark">
    <v-container class="py-16 px-1">
      <h1>more information</h1>
      <p class="text-h8 mt-1" style="line-height: 15px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ullam,
        vitae nihil nulla consectetur sapiente rem iste veniam corporis corrupti
        rerum vel culpa commodi velit obcaecati dolore recusandae ipsum alias!
      </p>
      <v-row class="mt-3">
        <v-col cols="12" lg="6">
          <img
            :src="contact.photo"
            style="
              width: 300px;
              height: 300px;
              border: 1px solid grey;
              border-radius: 50%;
            "
          />
        </v-col>
        <v-col cols="12" lg="6">
          <div
            class="bg-grey-darken-3 px-8 py-5"
            style="border-radius: 15px; width: 80%; height: 100%"
          >
            <h3 class="d-inline-block text-blue-lighten-3 mt-4">
              Name:&nbsp;&nbsp;
            </h3>
            <h2 class="d-inline-block">{{ contact.name }}</h2>
            <v-divider inset></v-divider>
            <h3 class="d-inline-block text-blue-lighten-3 mt-4">
              Mobile:&nbsp;&nbsp;
            </h3>
            <h2 class="d-inline-block">{{ contact.mobile }}</h2>
            <v-divider inset></v-divider>
            <h3 class="d-inline-block text-blue-lighten-3 mt-4">
              Email:&nbsp;&nbsp;
            </h3>
            <h2 class="d-inline-block">{{ contact.email }}</h2>
            <v-divider inset></v-divider>
            <h3 class="d-inline-block text-blue-lighten-3 mt-4">
              Home Loation:&nbsp;&nbsp;
            </h3>
            <h2 class="d-inline-block">{{ contact.location }}</h2>
            <v-divider inset></v-divider>
            <h3 class="d-inline-block text-blue-lighten-3 mt-4">
              Title:&nbsp;&nbsp;
            </h3>
            <h2 class="d-inline-block">{{ contact.title }}</h2>
            <v-divider inset></v-divider>
            <h3 class="d-inline-block text-blue-lighten-3 mt-4">
              Group:&nbsp;&nbsp;
            </h3>
            <h2 class="d-inline-block">{{ contact.groupId }}</h2>
            <v-divider inset></v-divider>
          </div>
        </v-col>
      </v-row>
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

<script>
export default {
  name: "ContactsView",
  created: function () {
    let contacts = JSON.parse(localStorage.getItem("contact"));
    for (let i = 0; i < contacts.length; i++) {
      if (this.id == contacts[i].id) {
        this.contact = contacts[i];
      }
    }
  },
  data: function () {
    return {
      contact: [],
      id: this.$route.params.contactId,
    };
  },
  methods: {},
};
</script>
