<template>
  <div class="alert alert-success" role="alert" v-if="successMessage.length>0">
    {{ successMessage }}
  </div>
</template>
<script>
export default {
  name: "SuccessWarning",
  props: {
    successMessage: ''
  }
}
</script>

<style scoped>

</style>