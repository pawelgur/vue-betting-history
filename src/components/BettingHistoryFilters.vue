<template>
  <div class="betting-filters">
    <select name="type" v-model="filter.type">
      <option value="">All</option>
      <option value="single">Single</option>
      <option value="double">Double</option>
    </select>
    <select name="status" v-model="filter.status">
      <option value="">All</option>
      <option value="opened">Opened</option>
      <option value="won">Won</option>
      <option value="lost">Lost</option>
    </select>
    <input type="date" name="from" v-model="filter.from">
    <input type="date" name="to" v-model="filter.to">
    <button class="filter" v-on:click="submit()">Filter</button>
    <button class="clear" v-on:click="clear()">Clear</button>
  </div>
</template>

<script>
  const defaultFilter = {
    type: "",
    status: "",
    from: "",
    to: ""
  };

  export default {
    name: "BettingHistoryFilters",
    data: () => ({
      filter: {...defaultFilter}
    }),
    methods: {
      submit: function() {
        this.$emit("filter-update", this.filter);
      },
      clear: function() {
        this.filter = {...defaultFilter};
        this.$emit("filter-update", this.filter);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/Vars";

  select, input, button {
    font-size: 18px;
    height: 40px;
    margin-right: 10px;
    padding: 0 15px;
  }

  select, input {
    width: 180px;
    border: 1px solid $colorBorder;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    &.filter {
      color: $colorAccent;
      border: 1px solid $colorAccent;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }

    &.clear {
      color: $colorLink;
    }
  }

</style>