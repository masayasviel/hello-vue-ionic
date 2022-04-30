<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <img :src="`https://github.com/fanzeyi/pokemon.json/blob/master/images/${state.id}.png?raw=true`">
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, onIonViewWillEnter } from '@ionic/vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const store = useStore();
    const state = reactive({
      id: '001'
    });
    onIonViewWillEnter(() => {
      state.id = (store.getters.getId as number).toString().padStart(3, '0');
    });
    return {
      state
    }
  },
});
</script>
