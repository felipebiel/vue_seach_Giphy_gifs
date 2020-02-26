<template>
  <div id="mais_gifs">
    <GridUi :extra_class="'stackable four equal width vertically padded column'">
      <ColumnUi v-for="item in more_gifs" :key="item.id">
        <router-link :to="{ name: 'gif.details', params: { id: item.id}}">
            <div class="image_static_height" :style="'background-image: url(' + item.images.downsized.url + ')'"></div>
            <img class="ui fluid image" :src="item.images.downsized.url" />
        </router-link>
      </ColumnUi>
    </GridUi>
  </div>
</template>

<script>

import GridUi from "../semantic-ui/GridUi";
import ColumnUi from "../semantic-ui/ColumnUi";

export default {
  props: {
    more_gifs: {
      type: Array,
      default: () =>{
          return []
      }
    }
  },
  components: {
    GridUi,
    ColumnUi
  },
};
</script>

<style lang="scss" scoped>
</style>