<template>
  <div id="app">
    <div v-if="loading">Загрузка...</div>
    <Catalog v-else :categoriesMap="categoriesMap" :goodsMap="goodsMap" :onBasket="updateBasket" />
    <Basket :items="basket" :goodsMap="goodsMap" :onBasket="updateBasket" />
  </div>
</template>

<script>
/**
 * Корневой компонет приложения, так как страница одна, то аналогичен компоненту страницы
 *
 * в противном случае тут был бы роут
 */

import { mapActions, mapGetters, mapState } from "vuex";
import Catalog from "./components/Catalog";
import Basket from "./components/Basket";

export default {
  components: {
    Catalog,
    Basket
  },
  data() {
    return {
      loading: false
    };
  },
  async created() {
    try {
      this.loading = true;
      await this.init();
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  },
  beforeDestroy() {
    if (this.timout) clearTimeout(this.timout);
  },
  methods: {
    async init() {
      await Promise.all([this.loadGoods(), this.loadNames(), this.loadRate()]);
      this.interval();
    },
    // не race condition =)
    interval() {
      this.timout = setTimeout(async () => {
        try {
          await Promise.all([this.loadGoods(), this.loadRate()]);
        } catch (e) {
          console.error(e);
        } finally {
          this.interval();
        }
      }, 15000);
    },
    ...mapActions({
      loadGoods: "loadGoods",
      loadNames: "loadNames",
      loadRate: "loadRate",
      updateBasket: "updateBasket"
    })
  },
  computed: {
    ...mapGetters(["categoriesMap", "goodsMap"]),
    ...mapState(["basket"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}
</style>
