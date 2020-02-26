<template>
  <div>
    <Header
      :titulo="titulo_header"
      :subtitulo="subtitulo_header"
      :termo_busca.sync="termo_busca"
      @buscarGifs="buscarGifs"
    ></Header>

    <ContainerUi>
      <GridUi :extra_class="'one column padded centered'">
        <ColumnUi>
          <h2 class="ui left aligned header white">{{ titulo_gifs}}</h2>
        </ColumnUi>
      </GridUi>
    </ContainerUi>

    <router-view 
      :termo_busca="termo_busca" 
      :gifs="gifs.data" 
      @scrollInfinite="scrollInfinite" 
    />

    <button type="button" @click.prevent="scrollToTop" class="ui green icon button fixed_bottom">
      <i class="angle chevron up icon"></i>
    </button>
  </div>
</template>

<script>
import Header from "./layouts/headers/HeaderComponent";
import GridUi from "./layouts/semantic-ui/GridUi";
import ColumnUi from "./layouts/semantic-ui/ColumnUi";
import ContainerUi from "./layouts/semantic-ui/ContainerUi";

export default {
  data() {
    return {
      titulo_header: "AJUDE A ALIANÇA REBELDE",
      subtitulo_header: "BUSQUE OS GIFS CAPAZES DE MATAR O SENHOR DO MAL",
      termo_busca: "",
      offset: 0,
      titulo_gifs: 'Ultimas tendências'
    };
  },
  components: {
    Header,
    GridUi,
    ColumnUi,
    ContainerUi,
  },
  computed: {
    gifs() {
      return this.$store.state.gif.gifs;
    }
  },
  mounted() {
    this.loadGifs();
  },
  methods: {
    loadGifs() {
      this.$store
        .dispatch("loadGifs", { offset: this.offset })
        .then(() => {})
        .catch(erro => {});
    },
    buscarGifs(offset) {
      //se nova busca reseta offset
      if(this.$router.history.current.name != 'home') 
        this.$router.push({ name: "home" });
      
      if (offset == 0) {
        this.offset = offset;
      }
      if (this.termo_busca){
        this.titulo_gifs = `Resultado para ${this.termo_busca}`
      this.$store
        .dispatch("buscarGifs", {
          termo: this.termo_busca,
          offset: this.offset
        })
        .then()
        .catch(erro => {});
      }else{
        this.titulo_gifs = 'Ultimas tendências';
        this.loadGifs();
      }
    },
    scrollInfinite() {
      if (this.termo_busca) {
        //manda pra busca
        this.offset += 20;
        this.buscarGifs();
      } else {
        //manda pra em alta
        this.offset += 20;
        this.loadGifs();
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>