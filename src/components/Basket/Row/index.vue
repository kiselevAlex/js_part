<template>
  <div class="row">
    <div class="row-name">
      <slot name="name"></slot>
    </div>
    <div class="row-count">
      <slot name="count"></slot>
    </div>
    <div class="row-price">
      <slot name="price"></slot>
    </div>
    <div class="row-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.row {
  display: flex;
  padding: 10px;
  border-bottom: 1px dotted #eeeeee;
  align-items: center;
  &-name {
    flex: 3;
  }
  &-count {
    flex: 1;
  }
  &-price {
    flex: 1;
  }
  &-actions {
    flex: 1;
  }
}
</style>
