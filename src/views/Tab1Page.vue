<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>図鑑IDを入力しろ!!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>    
      <InputNumber :inputValue="pokemon.id" @updateInputEmit="setPokemonValue"/>
      <ion-button expand="block" @click="setStore()">send</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { useStore } from 'vuex'
import InputNumber from '@/components/inputNumber.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { InputNumber, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  setup() {
    const store = useStore();
    const pokemon = reactive({
      id: 1,
    });
    const setStore = (): void => {
      store.commit('setId', {id: pokemon.id});
    } 
    const setPokemonValue = (id?: string | null): void => {
      if (id) pokemon.id = Number(id);
    };
    return {
      pokemon,
      setStore,
      setPokemonValue,
    };
  }
});
</script>
