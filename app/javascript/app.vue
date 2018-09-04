<template>
  <div class="container">
    <app-nav></app-nav>

    <div class="main-content row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import AppNav from "packs/components/AppNav";
export default {
  data: function() {
    return {};
  },
  components: {
    AppNav
  }
};
</script>
