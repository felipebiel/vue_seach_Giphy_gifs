<template>
  <div id="home">
    <ContainerUi>
     
      <ListaGifs :gifs="gifs"></ListaGifs>

      <GridUi :extra_class="'one column'">
        <ColumnUi>
          <div class="ui active centered text inline loader">Carregando...</div>
        </ColumnUi>
      </GridUi>
    </ContainerUi>
  </div>
</template>

<script>
import ListaGifs from "../../layouts/lista_gifs/ListaGifsComponent";
import GridUi from "../../layouts/semantic-ui/GridUi";
import ColumnUi from "../../layouts/semantic-ui/ColumnUi";
import ContainerUi from "../../layouts/semantic-ui/ContainerUi";

export default {
  props: {
    gifs: {
      type: Array,
      default: () => {
        return []
      }   
    },
  },
  data() {
    return {
      carregando: false,
    }
  },
  mounted () {
    this.scrollInfinite();
  },
  methods: {
    scrollInfinite() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.scrollHeight;

        if (bottomOfWindow) {
          this.$emit('scrollInfinite');
        }
      };
    },
  },
  components: {
    ListaGifs,
    GridUi,
    ContainerUi,
    ColumnUi
  },
};
</script>

<style scoped>

</style>
