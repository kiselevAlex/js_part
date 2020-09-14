<template>
  <Card class="category">
    <template v-slot:title>{{category.name}}</template>
    <template v-slot:content>
      <slot :goodIds="category.goodIds" />
    </template>
  </Card>
</template>

<script>
import Card from "../../ui/Card";

export default {
  components: {
    Card
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scope>
.category {
  background-color: #ffffff;
  box-shadow: 2px 3px 8px 1px #eeeeee;
  border-radius: 5px;
  &-title {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #ffffff;
    background-color: #f8754b;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  &-goods {
    background-color: #ffffff;
    margin-top: -5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 10px;
  }
}
</style>
