<template>
  <div class="betting-history-item">
    <div class="header grid grid-cols-10">
      <div class="col-span-2">{{ coupon.date }}</div>
      <div class="col-span-3">{{ coupon.type }}</div>
      <div>{{ coupon.stake }}</div>
      <div>{{ coupon.odds }}</div>
      <div>{{ coupon.possibleWin }}</div>
      <div v-bind:class="coupon.status.toLowerCase()">{{ coupon.status }}</div>
      <div>
        <button v-if="isOpen" v-on:click="toggle">Close</button>
        <button v-else v-on:click="toggle">Open</button>
      </div>
    </div>
    <template v-if="isOpen">
      <div v-for="selection of coupon.selections"
           v-bind:key="selection.id"
           class="selection grid grid-cols-10">
        <div class="col-span-2">{{ selection.date }}</div>
        <div class="col-span-2">
          <strong>{{ selection.event }}</strong><br />
          {{selection.category}}
        </div>
        <div class="col-span-2">
          <strong>{{ selection.market }}</strong><br />
          {{selection.marketVariation}}
        </div>
        <div>
          {{selection.odds}}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  // todo: add switching into non-grid layout on breakpoint

  export default {
    name: "BettingHistoryItem",
    props: {
      coupon: Object,
      isOpen: Boolean
    },
    methods: {
      toggle: function() {
        this.$emit("toggled", this.coupon.id);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/Vars";

  .betting-history-item {
    font-size: 16px;
    border-bottom: 1px solid $colorBorder;
  }

  .header {
    padding: 10px;

    button {
      color: $colorLink;
    }

    .won {
      color: $colorAccent;
    }

    .lost {
      color: $colorError;
    }
  }

  .selection {
    font-size: 14px;
    margin: 0 10px 10px;
    padding: 10px;
    background: $colorBackground;

    div {
      vertical-align: middle;
    }
  }

</style>