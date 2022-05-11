<template>
  <div class="sort-controls">
    <time class="sort-controls__date">
      {{ todayDate }}
    </time>

    <button
      :class="[
        'sort-controls__button',
        { 'sort-controls__button--reversed': sortType === 'ASC' },
      ]"
      @click="$emit('sort')"
    >
      <SortIcon />
    </button>
  </div>
</template>

<script>
import SortIcon from '@C/ui/icons/SortIcon'

export default {
  name: 'SortControls',
  components: { SortIcon },
  props: {
    sortType: {
      type: String,
      default: 'DESC',
    },
  },
  computed: {
    todayDate () {
      const now = new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })

      return now
    },
  },
}
</script>

<style lang="scss">
.sort-controls {
  display: flex;
  align-items: center;

  &__date {
    margin-right: 8px;
    // styles not from UI kit
    font-family: Arial;
    font-size: 10px;
    line-height: 18px;
    font-weight: $bold;
    color: black;
    white-space: nowrap;

    @media ($minTablet) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__button {
    @include reset-btn;
    width: 24px;
    height: 24px;
    transition: 0.3s;
    transform-origin: center;

    &--reversed {
      transform: rotate(180deg);
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
