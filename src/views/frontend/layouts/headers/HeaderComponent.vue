<template>
  <div id="header">
    <ContainerUi>
      <GridUi :extra_class="'one column padded centered'">
        <ColumnUi>
          <h1 class="ui center aligned header">
            <router-link :to="{ name: 'home'}">
            {{ titulo }}
            <div class="sub header">{{ subtitulo }}</div>
            </router-link>
          </h1>
        </ColumnUi>
      </GridUi>
    </ContainerUi>

    <ContainerUi>
      <GridUi :extra_class="'one column stackable centered'">
        <ColumnUi>
            <InputSearch 
                :termo_busca.sync="termo_header" 
                @update:termo_busca="updateTermo"
                @buscarGifs="buscarGifs"
            >
            </InputSearch>
        </ColumnUi>
      </GridUi>
    </ContainerUi>
  </div>
</template>

<script>

import InputSearch from "../busca/InputSeachComponent";
import GridUi from "../semantic-ui/GridUi";
import ColumnUi from "../semantic-ui/ColumnUi";
import ContainerUi from "../semantic-ui/ContainerUi";

export default {
  props: {
    termo_busca: {
        type: String,
        default: '',
    },
    titulo: {
      type: String,
      default: ""
    },
    subtitulo: {
      type: String,
      default: ""
    }
  },
  data() {
      return {
          termo_header: ''
      }
  },
  components: {
      InputSearch,
      GridUi,
      ColumnUi,
      ContainerUi
  },
  methods: {
      updateTermo(value) {
        this.$emit('update:termo_busca', value);
      },
      buscarGifs(offset){
        this.$emit('buscarGifs', offset);
      }
  },
  
};
</script>

<style lang="scss" scoped>
</style>