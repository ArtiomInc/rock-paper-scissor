<template>
  <section
    class="w-screen h-screen min-h-full p-1 flex justify-center items-center flex-col select-none overflow-y-auto"
    :class="{ 'bg-red-500': lost, 'bg-green-500': won, 'bg-sky-600': equal }"
  >
    <Versus :your="yourChoise" :opponent="opponentChoise" class="mb-5"></Versus>
    <div
      class="flex flex-col justify-center items-center pt-3 bg-white/30 backdrop-blur rounded-xl text-center w-11/12 max-w-sm"
    >
      <span v-if="won" class="text-9xl">🏆</span>
      <span v-if="lost" class="text-9xl">👎</span>
      <span v-if="equal" class="text-9xl">🔥</span>
      <h1 v-if="won" class="m-5 text-2xl font-bold text-center">You won !</h1>
      <h1 v-if="lost" class="m-5 text-2xl font-bold text-center">You lost !</h1>
      <h1 v-if="equal" class="m-5 text-2xl font-bold text-center">Equal !</h1>
      <button
        @click="retry"
        class="bg-white/30 hover:bg-white/40 py-2 rounded-b-xl text-1xl w-full"
      >
        Retry
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Versus from "../components/Versus.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getChoise"]),
  },
  components: {
    Versus,
  },
  mounted() {
    this.opponentChoise =
      this.choises[Math.floor(Math.random() * this.choises.length)];
    //@ts-ignore
    this.yourChoise = this.getChoise;
    if (this.yourChoise === "") {
      this.$router.push("/");
    } else {
      if (this.yourChoise === this.opponentChoise) {
        this.equal = true;
      } else if (
        (this.yourChoise === "🪨" && this.opponentChoise === "✂️") ||
        (this.yourChoise === "🧻" && this.opponentChoise === "🪨") ||
        (this.yourChoise === "✂️" && this.opponentChoise === "🧻")
      ) {
        this.won = true;
      } else if (
        (this.yourChoise === "🪨" && this.opponentChoise === "🧻") ||
        (this.yourChoise === "🧻" && this.opponentChoise === "✂️") ||
        (this.yourChoise === "✂️" && this.opponentChoise === "🪨")
      ) {
        this.lost = true;
      }
    }
  },
  data() {
    return {
      choises: ["🪨", "🧻", "✂️"],
      equal: false,
      won: false,
      lost: false,
      yourChoise: "",
      opponentChoise: "",
    };
  },
  methods: {
    retry() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
