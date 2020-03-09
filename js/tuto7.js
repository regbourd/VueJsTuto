// partage d'un state entre différents objets
// design pattern flux -> mutable state, les comportements seront portés par cette classe
// logique à 1 seul endroit
// bloc de code qui peut remplacer vuex et qui n'est pas dépendant de vuejs

class NotificationStore {
    constructor(){
        this.state = {
            count: 0
        }
    }
        increment() {
            this.state.count++
        }

        decrement(){
            this.state.count--
        }
}

let notifications_count = new NotificationStore()


let counter = {
    data: function(){
        return {
            state: notifications_count.state
        }
    },
    computed:{
        count: function(){
            return this.state.count
        }
    },
    methods:{
        increment:function(){
            notifications_count.increment()
        }
    },
    template: `
    <button @click="increment">{{count}}</button>
    `
}

let notifications={
    components:{
        counter
    },
    methods:{
        addNotification: function(){
            notifications_count.increment()
        }
    },
    template:`
    <div>
    <counter></counter>
    <button @click="addNotification">Incrementer</button>
    </div>
    `
}


let vm = new Vue({
    el: "#tuto7",

    components: { counter, notifications },

    data: {
       
    },
    methods: {
        
    }
})