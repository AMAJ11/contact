<template>
  <v-app theme="dark">
    <v-container>
      <div class="py-14 px-1">
        <h1>Edit contact</h1>
        <v-row>
          <v-col cols="12" lg="6">
            <form>
              <v-text-field
                v-model="contact.name"
                prepend-icon="mdi-account"
                variant="solo-inverted"
                name="name"
                label="Name"
              ></v-text-field>
              <v-text-field
                v-model="contact.mobile"
                prepend-icon="mdi-phone"
                variant="solo-inverted"
                name="mobileNumber"
                type="number"
                label="mobile number"
                :rules="[required]"
              ></v-text-field>
              <v-text-field
                v-model="contact.photo"
                prepend-icon="mdi-image"
                variant="solo-inverted"
                name="photoUrl"
                label="photo url"
                :rules="[required]"
              ></v-text-field>
              <v-text-field
                v-model="contact.email"
                prepend-icon="mdi-email"
                variant="solo-inverted"
                name="email"
                label="Email"
                type="email"
                :rules="[required]"
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
                prepend-icon="mdi-title"
                variant="solo-inverted"
                name="title"
                label="title"
                :rules="[required]"
              ></v-text-field>
              <v-select
                label="Group"
                :items="['friend', 'family', 'coulege', 'work', 'nighbour']"
                v-model="contact.groupId"
              ></v-select>
              <v-btn
                color="blue"
                size="large"
                variant="elevated"
                block
                @click="this.update"
                to="/contact/"
                >Update</v-btn
              >
            </form>
          </v-col>
          <v-col>
            <img style="width: 100px" :src="contact.photo" alt="" />
          </v-col>
          <h2 v-if="this.val" class="text-red-lighten-2">
            please check all inputs
          </h2>
        </v-row>
      </div>
      <v-btn
        color="blue-lighten-3"
        style="width: 100px"
        to="/contact/"
        class="ml-10 mb-10"
        ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
      >
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ContactAdd",
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
      val: false,
    };
  },
  methods: {
    update: function () {
      let contacts = JSON.parse(localStorage.getItem("contact"));
      console.log("helloooo");
      if (
        this.contact.name.value != "" &&
        this.contact.mobile != "" &&
        this.contact.location != "" &&
        this.contact.email != "" &&
        this.contact.title != "" &&
        this.contact.photo != ""
      ) {
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i].id == this.id) {
            console.log("hellloojlkh");
            contacts.splice(i, 1);
          }
        }
        contacts.push(this.contact);
        localStorage.setItem("contact", JSON.stringify(contacts));
      } else {
        this.val = true;
      }
    },
  },
};
</script>
