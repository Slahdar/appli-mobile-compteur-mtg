<template>
  <div v-if="!gameStarted">
    <h1>Paramétrage du Jeu</h1>
    <label for="gameMode">Mode de Jeu :</label>
    <select v-model="selectedMode" @change="adjustPlayerInputs">
      <option v-for="mode in gameModes" :key="mode.name" :value="mode">{{ mode.name }}</option>
    </select>

    <!-- Inputs pour les Joueurs -->
    <div v-for="(player, index) in players" :key="index">
      <input type="text" v-model="player.name" placeholder="Nom du Joueur">
      <input type="color" v-model="player.color.hexa">
      <button @click="removePlayer(index)" :disabled="players.length <= 2">Supprimer</button>
    </div>
    <button @click="addPlayer" :disabled="players.length >= 6">Ajouter Joueur</button>

    <!-- Points de Vie -->
    <div>
      <label for="healthPoints">Points de Vie</label>
      <input type="number" v-model.number="selectedMode.healthPoints" min="10" required>
    </div>

    <!-- Bouton de Démarrage -->
    <button @click="startGame">Démarrer le jeu</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {GAME_MODES, COLOR_LIST} from '@/constants/constants.ts';

export default defineComponent({
  data() {
    return {
      gameModes: GAME_MODES,
      selectedMode: GAME_MODES[0],
      players: [],
      colorList: COLOR_LIST
    };
  },
  created() {
    // Initialise le nombres de joueurs par défaut
    this.adjustPlayerInputs();
  },
  methods: {
    adjustPlayerInputs() {
      const requiredPlayers = this.selectedMode.players;
      if (this.players.length < requiredPlayers) {
        while (this.players.length < requiredPlayers) {
          const playerNumber = this.players.length + 1;
          this.players.push({name: 'Joueur ' + playerNumber, color: this.colorList[this.players.length], hasLost: false});
        }
      } else if (this.players.length > requiredPlayers) {
        this.players.splice(requiredPlayers); // Réduit le nombre de joueurs
      }
    },
    addPlayer() {
      if (this.players.length < 6) {
        const playerNumber = this.players.length + 1;
        this.players.push({name: 'Joueur ' + playerNumber, color: this.colorList[this.players.length], hasLost: false});
      }
    },
    removePlayer(index) {
      if (this.players.length > 2) {
        this.players.splice(index, 1);
      }
    },
    startGame() {
      if (!this.selectedMode || !this.players.length) {
        alert("Vous devez configurer le jeu avant de démarrer.");
        return;
      }
console.log(this.selectedMode);
console.log(this.players);
      // this.$router.push({
      //   name: 'Game',
      //   params: {
      //     mode: this.selectedMode,
      //     players: this.players
      //   }
      // });
    }


  },
  watch: {
    selectedMode() {
      this.adjustPlayerInputs(); // Ajuste les inputs des joueurs lors du changement de mode de jeu
    }
  }
});
</script>

