<template>
  <Row>
    <template v-slot:name>{{goods.name}}</template>
    <template v-slot:count>
      <div>
        <input ref="count" :value="count" @input="onInput" @change="onChange" />
        шт.
        <div class="max">максимум: {{goods.limit}}</div>
      </div>
    </template>
    <template v-slot:price>
      <Price :price="goods.price" />/ шт.
    </template>
    <template v-slot:actions>
      <button class="delete" @click="deleteFromBasket">Удалить</button>
    </template>
  </Row>
</template>

<script>
/**
 * Не стал использовать либу для input-number
 *
 * если начать вводить не число, то в инпут подставится текущее значение count
 */
import Price from "../../ui/Price";
import Row from "../Row";
export default {
  components: {
    Row,
    Price
  },
  props: {
    goods: {
      type: Object,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    onBasket: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      error: false
    };
  },
  methods: {
    deleteFromBasket() {
      this.onBasket({ id: this.goods.id, count: 0 });
    },
    onInput(e) {
      const {
        target: { value }
      } = e;

      if (/[^\d]/.test(value)) {
        e.preventDefault();
        this.$refs.count.value = this.count;
      }
    },
    onChange({ target: { value } }) {
      this.onBasket({ id: this.goods.id, count: +value });
      this.$refs.count.value = this.count;
    }
  }
};
</script>

<style lang="scss" scope>
.max {
  font-size: 12px;
  color: #aaaaaa;
  transition: color 0.5s;
}
.delete {
  background-color: transparent;
  border: none;
  color: #f3501b;
  flex: 1;
  cursor: pointer;
}
</style>
