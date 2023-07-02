<template>
  <section
    class="bg-sky-600 w-screen h-screen flex justify-center items-center select-none overflow-y-auto"
  >
    <ChoiseVue v-if="!cooldown" @userAction="sendUserAction"></ChoiseVue>
    <CouldownAnimation v-if="cooldown"></CouldownAnimation>
  </section>
</template>

<script lang="ts">
import ChoiseVue from "../components/Choise.vue";
import CouldownAnimation from "../components/CouldownAnimation.vue";
//@ts-ignore
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      cooldown: false,
    };
  },
  components: {
    ChoiseVue,
    CouldownAnimation,
  },
  methods: {
    ...mapMutations(["setChoise"]),
    sendUserAction(choise: string) {
      this.setChoise(choise);
      this.cooldown = true;
      setTimeout(() => {
        this.$router.push("/result");
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
