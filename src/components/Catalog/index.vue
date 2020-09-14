<template>
  <div class="categories">
    <Category
      class="categories-item"
      v-for="category in categoriesMap"
      :key="category.id"
      :category="category"
    >
      <template v-slot="{ goodIds }">
        <Goods v-for="id in goodIds" :key="id" :goods="goodsMap[id]" :onBasket="onBasket" />
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./Category";
import Goods from "./Goods";

export default {
  components: {
    Category,
    Goods
  },
  props: {
    categoriesMap: {
      type: Object,
      required: true
    },
    goodsMap: {
      type: Object,
      required: true
    },
    onBasket: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scope>
.categories {
  display: flex;
  flex-wrap: wrap;
  &-item {
    margin: 10px;
    flex: 1;
    min-width: 280px;
  }
}
</style>
