<template>
  <!--<div>-->
  <!--  <h1>Page de Jeu</h1>-->
  <!--  <p v-if="mode">Mode de Jeu : {{ mode.name }}</p>-->
  <!--  <div v-for="(player, index) in players" :key="index">-->
  <!--    Joueur {{ index + 1 }} : {{ player.name }} ({{ player.color }}), Points de Vie : {{ mode?.healthPoints }}-->
  <!--  </div>-->
  <!--</div>-->
</template>

<script lang="ts">
export default {
  name: 'GamePage',
  props: {
    mode: Object,
    players: Array
  },
  mounted() {
    console.log(this.mode);
    console.log(this.players);
  }
};
</script>
