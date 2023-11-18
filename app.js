const { createApp, ref } = Vue
const API_URL = 'https://jsonplaceholder.typicode.com'

createApp({
    setup() {
        const name = ref('')
        const email = ref('')
        const gender = ref('Male')
        const programming_languages = ref([])
        const country = ref('FR')
        const data_sent = ref({})
        const api_res = ref({})
        
        const send_data = async () => {
            data_sent.value = {
                name: name.value,
                email: email.value,
                gender: gender.value,
                programming_languages: programming_languages.value,
                country: country.value,
            }

            const res = await axios.post(API_URL + '/posts', data_sent.value, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            api_res.value = res
        }

        return {
            name,
            email,
            gender,
            programming_languages,
            country,
            send_data,
            data_sent,
            api_res,
        }
    }
}).mount('#app')