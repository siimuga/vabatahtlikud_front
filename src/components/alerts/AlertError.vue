<template>
  <div class="alert alert-danger" role="alert" v-if="errorMessage.length>0">
    {{ errorMessage }}
  </div>
</template>
<script>
export default {
  name: 'AlertError',
  props: {
    errorMessage: ''
  }
}
</script>