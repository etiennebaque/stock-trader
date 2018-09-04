<template>
  <div>
    <h2>Trade or View your portfolio</h2>
    <p>You may Save & Load your data.</p>
    <p>Click 'End day' to begin a new day!</p>

    <div>
      Your Funds: ${{ funds }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    funds: 0;
  }
};
</script>

<style scoped>
</style>