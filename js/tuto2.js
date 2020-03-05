let vm = new Vue({
    el: '#tuto2',
    data: {
        persons: ['reg', 'fred', 'paolo'],
        seconds: 0
    },

    mounted: function() {
        // javascript ES6
        this.$interval = setInterval(() => {
            console.log('Time')
            this.seconds++

        }, 1000)
    },

    destroyed: function() {
        clearInterval(this.$interval)
    },

    methods: {
        addPerson: function() {
            this.persons.push('marion')
        }
    }

})