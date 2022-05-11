<template>
  <header class="main-header">
    <MainLogo />

    <SearchIcon />
  </header>
</template>

<script>
import MainLogo from '@C/ui/icons/MainLogo'
import SearchIcon from '@C/ui/icons/SearchIcon'

export default {
  name: 'MainHeader',
  components: {
    MainLogo,
    SearchIcon,
  },
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
}
</style>
