<template>
  <router-view />
</template>

<script>
   //import Store from "./components/SportStore";
  import { mapActions } from "vuex";

  export default {
      name: 'app',
     // components: { Store, router },
      methods: {
          ...mapActions(["getData"])
      },
      created() {
          this.getData();
      }
  }
</script>