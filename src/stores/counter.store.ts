import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0);

    const reset = () => {
        counter.value = 0;
    };

    return {counter, reset};
});
