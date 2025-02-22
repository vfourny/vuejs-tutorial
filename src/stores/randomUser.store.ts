import {defineStore} from 'pinia';
import {ref} from 'vue';
import {getRandomUser} from "@/apis/randomUser.api.ts";
import type {User} from "@/types/common.type.ts";

export const useRandomUserStore = defineStore('randomUser', () => {
    const randomUseGenerated = ref<User | null>(null);

    const generateUser = async () => {
        const result = await getRandomUser()
        randomUseGenerated.value = {name: result.name.first, age: result.dob.age}
    };

    return {randomUseGenerated, generateUser};
});
