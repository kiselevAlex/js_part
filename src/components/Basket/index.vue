<template>
  <Card class="basket" color="#f3501b">
    <template v-slot:title>Корзина</template>
    <template v-slot:content>
      <div v-if="isEmpty">Корзина пуста</div>
      <template v-else>
        <Row>
          <template v-slot:name>Название</template>
          <template v-slot:count>Количество</template>
          <template v-slot:price>Цена за шт.</template>
        </Row>
        <Item
          v-for="(count, id) in items"
          :key="id"
          :goods="goodsMap[id]"
          :count="count"
          :onBasket="onBasket"
        />
        <div class="basket-total">
          Общая стоимость:
          <span>{{ total }}</span>
        </div>
      </template>
    </template>
  </Card>
</template>

<script>
import Card from "../ui/Card";
import Item from "./Item";
import Row from "./Row";
import { round } from "../../helpers/number";
import isEmpty from "lodash/isEmpty";

export default {
  components: {
    Card,
    Item,
    Row
  },
  props: {
    items: {
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
  },
  computed: {
    isEmpty() {
      return isEmpty(this.items);
    },
    total() {
      return round(
        Object.keys(this.items).reduce(
          (result, id) => result + this.items[id] * this.goodsMap[id].price,
          0
        )
      );
    }
  }
};
</script>

<style lang="scss" scope>
.basket {
  margin: 10px;
  &-total {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    & > span {
      margin-left: 10px;
      color: #f3501b;
      font-weight: bold;
    }
  }
}
</style>
