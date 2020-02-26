<template>
  <div>
    <div class="ui action fluid big input">
      <input
        @keyup.enter="buscarGifs();"
        type="text"
        placeholder="Buscar Gifs..."
        :value="termo_busca"
        @keyup="$emit('update:termo_busca', $event.target.value)"
      />
      <button class="ui green button" @click.prevent="buscarGifs()">Buscar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    termo_busca: {
      type: String,
      default: ""
    }
  },
  methods: {
    buscarGifs() {
        this.$emit('buscarGifs', 0);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>