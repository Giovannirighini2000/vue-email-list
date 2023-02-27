const { createApp } = Vue

createApp({
	data() {
		return {

			emails: [],
			allEmailsReceived: false,
		}
	},
	methods: {
		Emailnames() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data.response)
					this.emails.push(res.data.response)
					if (this.emails.length === 10) {
						this.allEmailsReceived = true;
					}


				})

		},
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			this.Emailnames()
		}
	},
}).mount('#app')