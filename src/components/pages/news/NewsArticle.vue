<template>
  <article class="news-article">
    <img
      class="news-article__image"
      :src="imageUrl"
      :alt="imageAlt"
    >

    <h2 class="news-article__title">
      {{ title }}
    </h2>

    <p class="news-article__info">
      <span class="news-article__date">
        {{ date }}
      </span>
      <span>
        {{ newsSource }}
      </span>
    </p>

    <p class="news-article__text">
      {{ text }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    newsSource: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.news-article {
  display: flex;
  flex-direction: column;
  width: 142px;

  @media ($minTablet) {
    width: 203px;
  }

  @media ($minDesktop) {
    width: 270px;
  }

  &__image {
    display: block;
    width: 100%;
    height: 96px;
    margin-bottom: 8px;
    object-fit: cover;
    border-radius: 8px;

    @media ($minTablet) {
      height: 128px;
      margin-bottom: 16px;
    }

    @media ($minDesktop) {
      height: 176px;
    }
  }

  &__title {
    @include h2;
    margin-bottom: 12px;

    @media ($minTablet) {
      margin-bottom: 16px;
    }

    @media ($minDesktop) {
      margin-bottom: 24px;
    }
  }

  &__info {
    margin-bottom: 8px;
    font-family: $Roboto;
    font-size: 8px;
    line-height: 9px;
    color: $black-20;

    @media ($minTablet) {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__date {
    margin-right: 15px;
  }

  &__text {
    font-size: 12px;
    line-height: 18px;

    @media ($minTablet) {
      font-size: 14px;
      line-height: 25px;
    }
  }
}
</style>
