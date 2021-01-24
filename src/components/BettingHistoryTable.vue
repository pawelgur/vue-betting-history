<template>
  <div class="betting-history-table">
    <div class="grid grid-cols-10 header">
      <div class="col-span-2">Date</div>
      <div class="col-span-3">Type</div>
      <div>Stake, €</div>
      <div>Odds</div>
      <div>Possible Win, €</div>
      <div>Status</div>
      <div></div>
    </div>
    <betting-history-item
        v-for="coupon of coupons"
        v-bind:key="coupon.id"
        v-bind:coupon="coupon"
        v-bind:is-open="coupon.id === openedId"
        v-on:toggled="onToggle">
    </betting-history-item>
  </div>
</template>

<script>
  import BettingHistoryItem from "@/components/BettingHistoryItem.vue";

  export default {
    name: "BettingHistoryTable",
    components: { BettingHistoryItem },
    props: {
      coupons: Array
    },
    data: () => ({
      openedId: -1
    }),
    methods: {
      onToggle: function(id) {
        this.openedId = this.openedId === id ? -1 : id;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/Vars";

  .header {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border-top: 1px solid $colorBorder;
    border-bottom: 1px solid $colorBorder;
    padding: 0 10px;

    div {
      padding: 14px 0;
      vertical-align: middle;
    }
  }

</style>