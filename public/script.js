var vm = new Vue({
    el: '#app',
    data: {
        form: {
            name: "",
            second_name: "",
            email: ""
        },
        passwordType: 'password',
        showPassword: false
    },
    methods: {
        togglePassword () {
            if (this.showPassword) {
                this.passwordType = 'password'
            } else {
                this.passwordType = 'text'
            }
        },
       async submit(e) {
            e.preventDefault();
           const response = await fetch('https://mail.testways.online', {
                method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
                body: JSON.stringify(this.form)
            })

           const data = await response.json()
           alert(data.message)
        }
    }
})