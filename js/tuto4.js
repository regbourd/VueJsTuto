//Sa propre directive 1ère façon
Vue.directive('salut', {
    bind: function(el, binding, vnode) {
        el.value = binding.value
        console.log('bind')
    },
    update: function(el, binding, vnode, oldvnode) {
        el.value = binding.value
        console.log('update')
    }
})

//Sa propre directive 2ème façon
Vue.directive('salut1', function(el, binding) {
    el.value = binding.value
    console.log('bind')
})

//Sa propre directive préconisée
let salut2 = function(el, binding) {
    el.value = binding.value
    console.log('bind')
}

let vm = new Vue({
    el: '#tuto4',

    // Sa propre directive préconisée
    directives: {
        salut2: salut2
    },

    data: {
        message: '',
        message1: '',
        message2: '',
        message3: 'Jean',
        message4: 'Reg',
        message5: 'Paolo'

    },
    methods: {
        demo: function(e) {
            // Bloquer la gestion des événements javascript
            console.log('demo ', e.preventDefault())


        },
        demo2: function() {

            console.log('demo2')
        },
        demo1: function(e) {
            // Bloquer la gestion des événements javascript
            console.log('demo1 ')


        },
    }

})