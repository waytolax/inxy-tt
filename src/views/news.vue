<template>
  <section class="news-page">
    <div class="news-page__wrapper">
      <h1 class="news-page__title">
        Latest News
      </h1>

      <!-- date -->
      sort
    </div>

    <div class="news-page__list">
      <NewsArticle
        v-for="article of articles"
        :key="article.id"
        v-bind="article"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import NewsArticle from '@C/pages/news/NewsArticle'

export default {
  name: 'NewsPage',
  components: {
    NewsArticle,
  },
  computed: {
    ...mapState('news', ['articles']),
  },
}
</script>

<style lang="scss">
.news-page {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    @media ($minTablet) {
      margin-bottom: 24px;
    }
  }

  &__title {
    @include h1;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 20px;

    @media ($minTablet) {
      gap: 48px 20px;
    }

    @media ($minDesktop) {
      gap: 72px 30px;
    }
  }
}
</style>
