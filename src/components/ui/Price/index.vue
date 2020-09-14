<template>
  <span :class="className">{{ price }}</span>
</template>

<script>
/**
 * Компонент для подсветки цены, запоминает старую цену с помощью watch
 */

export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      oldVal: null
    };
  },
  watch: {
    price(newVal, oldVal) {
      this.oldVal = oldVal;
    }
  },
  computed: {
    className() {
      if (this.oldVal === null) return;
      if (this.oldVal > this.price) return "green";
      if (this.oldVal < this.price) return "red";
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
.green {
  color: green;
}
.red {
  color: red;
}
</style>