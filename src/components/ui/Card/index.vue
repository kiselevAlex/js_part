<template>
  <div class="card">
    <div class="card-title" :style="styles">
      <slot name="title" />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#f8754b"
    }
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.color
      };
    }
  }
};
</script>

<style lang="scss" scope>
.card {
  background-color: #ffffff;
  box-shadow: 2px 3px 8px 1px #eeeeee;
  border-radius: 5px;
  &-title {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #ffffff;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  &-content {
    background-color: #ffffff;
    margin-top: -5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 10px;
  }
}
</style>
