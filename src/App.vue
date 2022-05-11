<template>
  <div
    id="app"
    class="default-layout"
  >
    <div class="default-layout__container">
      <MainHeader class="default-layout__header" />

      <main class="default-layout__content">
        <NewsPage />
      </main>
    </div>

    <MainFooter class="default-layout__footer" />
  </div>
</template>

<script>
import MainHeader from '@C/common/Header'
import MainFooter from '@C/common/Footer'
import NewsPage from './views/news'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    NewsPage,
  },
}
</script>

<style lang="scss">
.default-layout {
  padding-top: 32px;

  &__container {
    flex-grow: 1;
    width: 100%;
    max-width: 305px;
    margin: 0 auto;

    @media ($minTablet) {
      max-width: 650px;
    }
    @media ($minDesktop) {
      max-width: 1170px;
    }
  }

  &__header {
    margin-bottom: 40px;

    @media ($minTablet) {
      margin-bottom: 48px;
    }
    @media ($minDesktop) {
      margin-bottom: 72px;
    }
  }

  &__content {
    margin-bottom: 30px;

    @media ($minDesktop) {
      margin-bottom: 93px;
    }
  }

  &__footer {
    display: none;

    @media ($minDesktop) {
      display: flex;
    }
  }
}
</style>
