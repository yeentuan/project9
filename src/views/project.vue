<template>
  <div class="bg">
    <div class="container">
      <img src="https://4.bp.blogspot.com/-0tHuNzlHuxg/XW2E6BiIpkI/AAAAAAAA6Yc/mx89fbEe8asCcy9rLCOH_OB5Yy1ejaV6gCK4BGAYYCw/s1600/bf7d6ee0-469e-4a5e-812b-395ac0b32f27-727644.JPG" />
      <b-form>
         <b-form-group id="input-group-2" label="Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="name"
            type="text"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="lastname"
            type="text"
            placeholder="Enter Lastname"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Phone number"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="phonenumber"
            type="text"
            placeholder="Enter Phone number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email address"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="password"
            placeholder="Enter Password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>     
        <b-button class="btn" variant="primary" @click="onSubmit">Sign up</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  data() {
    return {
      email: "",
      name: "",
      lastname: "",
      phonenumber: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      var form = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        phonenumber: this.phonenumber,
        password: this.password,
      };
      db.collection("member").doc().set(form);
    },
  },
};
</script>

<style>
.container {
  background: rgb(172, 201, 235);
}
</style>