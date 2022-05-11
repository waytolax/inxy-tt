<template>
  <section class="news-page">
    <div class="news-page__wrapper">
      <h1 class="news-page__title">
        Latest News
      </h1>

      <SortControls
        :sort-type="sortType"
        @sort="toggleSorting"
      />
    </div>

    <transition-group
      class="news-page__list"
      tag="div"
      name="shuffle"
    >
      <NewsArticle
        v-for="article of getFilteredArticles"
        :key="article.id"
        v-bind="article"
      />
    </transition-group>

    <p
      v-if="noArticles"
      class="news-page__warning"
    >
      No articles found
    </p>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import SortControls from '@C/ui/SortControls'
import NewsArticle from '@C/pages/news/NewsArticle'

export default {
  name: 'NewsPage',
  components: {
    SortControls,
    NewsArticle,
  },
  computed: {
    ...mapState('news', ['sortType']),
    ...mapGetters('news', ['getFilteredArticles']),
    noArticles () {
      return !this.getFilteredArticles?.length
    },
  },
  methods: {
    ...mapActions('news', ['toggleSorting']),
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

  &__warning {
    margin: 50px auto;
    font-size: 20px;
    text-align: center;
  }

  & .shuffle-move {
    transition: transform 0.5s;
  }
}
</style>
