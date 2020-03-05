let vm = new Vue({
    el: '#tuto1',
    data: {
        message: 'Salut les gens',
        link: 'http://grafikart.fr/',
        success: true,
        successon: true,
        successcheck: true,
        successcheck1: true,
        successcheck2: true,
        successcheck3: true,
        successcheck4: true,
        persons: ['reg', 'fred', 'paolo'],
        style: { background: '#000' },
        cls: 'success'
    },

    methods: {
        close: function() {
            this.message = "Fermé"
            this.successon = false
            this.successcheck = false
            this.successcheck1 = false
            this.successcheck2 = false
            this.successcheck3 = false
            this.successcheck4 = false
        },

        style1: function() {
            if (this.successcheck4) {
                return { background: '#00FF00' }
            } else {
                return { background: '#FF0000' }
            }
        }
    }

})