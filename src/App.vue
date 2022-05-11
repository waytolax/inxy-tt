<template>
  <div id="app">
    <MainHeader />

    <main class="layout-content">
      <NewsPage />
    </main>

    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/common/Header'
import MainFooter from './components/common/Footer'
import NewsPage from './pages/news'

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
.layout-content {
  flex-grow: 1;
}
</style>
