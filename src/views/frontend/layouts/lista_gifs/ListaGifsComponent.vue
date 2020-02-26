<template>
  <div id="lista_gifs">
    <GridUi :extra_class="'three column doubling stackable masonry'">
      <ColumnUi v-for="item in gifs" :key="item.id">
        <router-link :to="{ name: 'gif.details', params: { id: item.id}}">
          <img class="ui fluid image" :src="item.images.downsized.url" onload="" />
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
        gifs: {
            required: false,
            type: Array ,
            default: () =>{
                return []
            }
        },
    },
    components: {
      GridUi,
      ColumnUi
    },
};
</script>

<style lang="scss" scoped>

</style>