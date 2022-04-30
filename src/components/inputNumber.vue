<template>
  <div class="container">
    <ion-item>
      <ion-label>pokemon number</ion-label>
      <ion-input
        type="number"
        min="1"
        max="809"
        v-model="state.inputValue"
        :color="inputValidator ? 'dark' : 'danger'"
        @input="$emit('updateInputEmit', $event.target.value)"
      >
      ></ion-input>
    </ion-item>
    <div v-show="!inputValidator">わかんないッピ...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { IonLabel, IonInput, IonItem } from '@ionic/vue';

interface State {
  inputValue: number;
}

export default defineComponent({
  name: 'InputNumber',
  components: { IonLabel, IonInput, IonItem },
  props: {
    inputValue: Number,
  },
  emits: ['updateInputEmit'],
  setup(props) {
    const state = reactive<State>({
      inputValue: props.inputValue ?? 1,
    });
    const inputValidator = computed(() =>  1 <= state.inputValue && state.inputValue <=809);
    return {
      state,
      inputValidator
    };
  }
});
</script>

<style scoped>
</style>
