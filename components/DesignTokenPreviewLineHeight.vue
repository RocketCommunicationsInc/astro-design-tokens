<template>
  <div class="text-center flex items-center justify-center">
    <p class="text-black text-left" :style="{ 'line-height': value }">
      In my younger and more vulnerable years my father gave me some advice that
      I've been turning over in my mind ever since. "Whenever you feel like
      criticizing any one," he told me, "just remember that all the people in
      this world haven't had the advantages that you've had."
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
