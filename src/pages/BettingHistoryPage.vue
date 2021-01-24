<template>
  <section class="betting-history-page">
    <h1>Betting history</h1>
    <div class="tabs">
      <router-link to="/bet-history/sports">Sports</router-link>
      <router-link to="/bet-history/casino">Casino</router-link>
      <router-link to="/bet-history/virtual-sports">Virtual Sports</router-link>
    </div>
    <betting-history-filters v-on:filter-update="onFilterUpdate"></betting-history-filters>
    <betting-history-table v-bind:coupons="coupons"></betting-history-table>
  </section>
</template>

<script>
  import BettingHistoryFilters from "@/components/BettingHistoryFilters.vue";
  import BettingHistoryTable from "@/components/BettingHistoryTable.vue";
  import { betHistoryService } from "@/service/BetHistoryService.js";

  export default {
    name: "BettingHistoryPage",
    components: { BettingHistoryFilters, BettingHistoryTable },
    data: () => ({
      coupons: []
    }),
    created: function() {
      this.coupons = betHistoryService.getCoupons();
    },
    methods: {
      onFilterUpdate: function(filter) {
        this.coupons = betHistoryService.getCoupons(filter);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/Vars";

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .tabs {
    font-size: 18px;
    border-bottom: 1px solid $colorBorder;
    margin-bottom: 30px;

    a {
      display: inline-block;
      padding: 0 20px;
      height: 40px;
      line-height: 40px;
      border-bottom: 5px solid transparent;
    }

    .router-link-active {
      color: $colorMain;
      border-color: $colorMain
    }

  }

  .betting-filters {
    margin-bottom: 30px;
  }

</style>