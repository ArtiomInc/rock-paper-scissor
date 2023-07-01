<template>
  <div class="w-full flex flex-col sm:flex-row justify-center items-center">
    <div
      v-for="choise in choises"
      class="bg-white/30 backdrop-blur aspect-square rounded-xl w-36 m-5 flex justify-center items-center hover:outline outline-black/30 cursor-pointer"
      @click="userAction(choise)"
    >
      <span class="text-7xl">{{ choise }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      choises: ["🪨", "🧻", "✂️"],
    };
  },
  methods: {
    userAction(choise: string) {
      this.$emit("userAction", choise);
    },
  },
};
</script>

<style scoped></style>
