<template>
  <div>
    <ContainerUi>
      <GridUi :extra_class="'middle aligned stackable padded'">
        <ColumnUi :extra_class="'eight wide'">
          <video
            class="ui fluid image"
            v-if="gif.images"
            :src="gif.images.original_mp4.mp4"
            autoplay
            loop
            muted
            playsinline
          >
            <img class="ui fluid image" v-if="gif.images" :src="gif.images.original.webp" />
          </video>
        </ColumnUi>
        <ColumnUi :extra_class="'eight wide'">
          <h2>Titulo: {{ gif.title }}</h2>
          <strong>Criado em:</strong>
          <p>{{ gif.import_datetime | dataFormato }}</p>

          <div v-if="gif.user">
            <img class="ui avatar image" :src="gif.user.avatar_url" />
            <a :href="gif.user.profile_url" target="_blank">{{ gif.user.display_name }}</a>
          </div>

          <router-link :to="{ name: 'home'}" class="ui green button">Voltar</router-link>
        </ColumnUi>
      </GridUi>
    </ContainerUi>

    <ContainerUi>
      <GridUi :extra_class="'one column padded centered'">
        <ColumnUi>
          <h2 class="ui center aligned header white">Mais Gifs</h2>
        </ColumnUi>
      </GridUi>

      <MoreGifs :more_gifs="more_gifs"></MoreGifs>
    </ContainerUi>
  </div>
</template>

<script>
import moment from "moment";
import ListaGifs from "../../layouts/lista_gifs/ListaGifsComponent";
import MoreGifs from "../../layouts/mais_gifs/MoreGifsComponent";
import GridUi from "../../layouts/semantic-ui/GridUi";
import ColumnUi from "../../layouts/semantic-ui/ColumnUi";
import ContainerUi from "../../layouts/semantic-ui/ContainerUi";

export default {
  props: {
    id: {
      require: true
    },
    termo_busca: {
      type: String,
      default: ""
    }
  },
  watch: {
    id(newValue, oldValue) {
      if (newValue != oldValue) {
        this.visualizarGif();
        this.loadMoreGifs();
      }
    }
  },
  data() {
    return {
      gif: {},
      more_gifs: [],
    };
  },
  created() {
    this.visualizarGif();
    this.loadMoreGifs();
  },
  methods: {
    visualizarGif() {
      this.$store
        .dispatch("gifDetails", this.id)
        .then(response => {
          this.gif = response.data.data;
        })
        .catch(erro => {});
    },
    loadMoreGifs() {
      this.more_gifs = [];
      
      for (let index = 0; index < 4; index++) {
        this.$store
          .dispatch("getByTag", this.termo_busca)
          .then(response => {
            this.more_gifs.push(response.data.data);
          })
          .catch(erro => {});
      }
    }
  },
  filters: {
    dataFormato: function(value) {
      return moment(String(value)).format("DD/MM/YYYY hh:mm");
    }
  },
  components: {
    ListaGifs,
    MoreGifs,
    GridUi,
    ContainerUi,
    ColumnUi
  }
};
</script>

<style lang="scss" scoped>
</style>