<template>
  <component :is="require(`~/assets/icons/${icon}.svg?inline`)" class="icon" />
</template>

<script>
export default {
  name: 'SvgSprite',
  props: {
    icon: String,
  },
};
</script>
<style>
</style>