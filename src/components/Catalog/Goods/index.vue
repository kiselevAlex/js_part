<template>
  <div class="goods">
    <div class="goods-title">{{ goods.name }} ({{ goods.limit }})</div>
    <div class="goods-price">
      <Price :price="goods.price" />
    </div>
    <button class="goods-button" @click="onBasket(goods)">
      <img :src="$options.icons.basket" />
    </button>
  </div>
</template>

<script>
import basket from "./icons/basket.svg";
import Price from "../../ui/Price";

export default {
  components: {
    Price
  },
  icons: {
    basket
  },
  props: {
    goods: {
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
.goods {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  &-title {
    flex: 1;
    margin-right: 10px;
  }
  &-price {
    padding: 5px;
    min-width: 40px;
    text-align: center;
  }
  &-button {
    padding: 5px;
    min-width: 30px;
    max-width: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    & > img {
      width: 100%;
    }
  }
}
</style>
