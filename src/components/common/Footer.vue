<template>
  <footer class="main-footer">
    Copyright 2022 News Portal
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style lang="scss">
.main-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 83px;
  background: $lightGrey;
  font-size: 16px;
  line-height: 21px;
  font-weight: $bold;
  color: $black-20;
}
</style>
