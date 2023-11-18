const { createApp, ref } = Vue

createApp({
    setup() {
        const name = ref('')
        const email = ref('')
        const gender = ref('Male')
        const programming_languages = ref([])
        const country = ref('FR')
        return {
            name,
            email,
            gender,
            programming_languages,
            country,
        }
    }
}).mount('#app')