let vm = new Vue({
    el: '#tuto3',
    data: {
        success: false,
        message: '',
        firstname: 'Jean',
        lastname: 'Delatour',
        fullname3: ''
    },


    computed: {
        cls: function() {
            console.log("cls called")
            return this.success === true ? 'success' : 'error'
        },
        //getter par defaut
        fullname: function() {
            return this.firstname + ' ' + this.lastname
        },
        // getter et setter
        fullname1: {
            get: function() {
                return this.firstname + ' ' + this.lastname
            },
            set: function(value) {
                console.log(value)
                let parts = value.split(' ')
                this.firstname = parts[0]
                this.lastname = parts[1]
            }
        }

    },

    watch: {
        fullname3: function(value) {
            console.log('watch', value)
            let parts = value.split(' ')
            this.firstname = parts[0]
            this.lastname = parts[1]
        }
    }

})