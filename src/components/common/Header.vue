<template>
  <header class="main-header">
    <MainLogo class="main-header__logo" />

    <SearchField @input="searchArticle" />
  </header>
</template>

<script>
import { mapActions } from 'vuex'

import MainLogo from '@C/ui/icons/MainLogo'
import SearchField from '@C/ui/SearchField'

export default {
  name: 'MainHeader',
  components: {
    MainLogo,
    SearchField,
  },
  methods: {
    ...mapActions('news', ['searchArticle']),
  },
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;

  &__logo {
    width: 111px;
    height: auto;
  }
}
</style>
