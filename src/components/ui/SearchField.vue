<template>
  <label class="search-field">
    <input
      class="search-field__input"
      type="search"
      :value="value"
      placeholder=" "
      @input="$emit('input', $event.target.value.toLowerCase())"
    >

    <SearchIcon class="search-field__icon" />
  </label>
</template>

<script>
import SearchIcon from '@C/ui/icons/SearchIcon'

export default {
  name: 'SearchField',
  components: { SearchIcon },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.search-field {
  display: flex;
  align-items: center;
  width: 140px;
  cursor: pointer;

  @media ($minTablet) {
    width: 200px;
  }

  &__input {
    width: 100%;
    margin-right: 10px;
    border: none;
    border-bottom: 1px solid transparent;
    font-family: $Roboto;
    font-size: 12px;
    line-height: 16px;
    color: $black-80;
    transition: 0.2s;

    @media ($minTablet) {
      font-size: 14px;
    }

    &:focus,
    &:not(:placeholder-shown) {
      border-color: $black-20;
    }

    // styling if needed
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }

  &__icon {
    flex-shrink: 0;
    width: auto;
    height: 24px;
  }
}
</style>
