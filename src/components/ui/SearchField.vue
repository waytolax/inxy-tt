<template>
  <label class="search-field">
    <input
      class="search-field__input"
      type="search"
      :value="value"
      @input="$emit('input', $event.target.value.toLowerCase())"
    >

    <SearchIcon />
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
  cursor: pointer;

  &__input {
    margin-right: 10px;
    border: none;
    border-bottom: 1px solid transparent;
    font-family: $Roboto;
    font-size: 14px;
    line-height: 16px;
    color: $black-80;
    transition: 0.2s;

    &:focus {
      border-color: $black-20;
    }

    // styling if needed
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
}
</style>
