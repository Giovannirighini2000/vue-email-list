const { createApp } = Vue

createApp({
	data() {
		return {
			
			emails: [],
		}
	},
	methods: {
		fetchName() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data.response)
					this.emails.push(res.data.response)
				})
		},
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			this.fetchName()
		}
	},
}).mount('#app')