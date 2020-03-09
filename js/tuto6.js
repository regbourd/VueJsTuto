Vue.component("monMessage", {
    props: ["type", "message"],
    template: `<div class="ui message" :class="type"> {{message}}</div>`
})

Vue.component("monMessage1", {
    props: {
        //type:{type: String, default:'success'},
        // possibilite de passer un tableau à type
        type: { type: [String, Number], default: "success" },
        message: String
    },
    template: `<div class="ui message" :class="type"> {{message}}</div>`
})

let monMessage2 = {
    props: {
        type: { type: [String, Number], default: "success" },
        message2: String
    },
    template: `<div class="ui message" :class="type"> {{message2}}</div>`
}

// composant avec data local à counter
let counter = {
    data: function() {
        return {
            count: 0
        };
    },
    props: {
        start: { type: Number, default: 0 }
    },
    mounted: function() {
        this.count = this.start
    },
    methods: {
        increment: function() {
            this.count++;
        }
    },
    template: `<div>
    <span> {{ count }}
    </span>
    <button @click="increment">Incrémenter</button>
    </div>
    `
}

//composant avec émission d'un événement vers le parent qui est ici vm -> new Vue
let monMessage3 = {
    props: {
        type: { type: String, default: "success" },
        message3: String,
        header: String
    },

    methods: {
        close() {
            this.$emit("close");
        }
    },

    template: `<div class="ui message" :class="type">
  <i class="close icon" @click.prevent="close"></i>
  <div class="header">{{ header }}</div>
   {{message3}}
   </div>`
}

let formUser = {

    //vuejs 2 permet de passer la valeur de l'objet parent -> value -> v-model côté template
    props: {
        value: Object

    },

    // pour ne âs avoir le double data-binding création user local
    data() {
        return {
            user: {
                ...this.value
            }

            // return {
            // userLocal: {
            //   ...this.user
            // }
            // }

            //pour chrome
            // return{
            //   userLocal: JSON.parse(JSON.stringify(this.value))
            // }

        }

    },

    methods: {
        save() {
            this.$emit('input', this.user)
        }
    },

    template: `
  <form class="ui form" @submit.prevent="save"> 
  <p>
    <slot name="header"></slot>
  </p>   
      <div class="field">
        <label for="">Prénom</label>
        <!-- <input type="text" v-model="userLocal.firstname"> -->
        <input type="text" v-model="user.firstname">
      </div>
      <div class="field">
        <label for="">Nom</label>
        <input type="text" v-model="user.lastname">
      </div>
      <button class="ui button" type="submit">Envoyer</button>  
      <p>
        <slot name="footer"></slot>
      </p>    
  </form> 
  `
}

let vm = new Vue({
    el: "#tuto6",

    components: { monMessage2, counter, monMessage3, formUser },

    data: {
        message: "Jean",
        message2: "toto",
        message3: "Salut les gens",
        alert: false,
        user: {
            firstname: 'Jean',
            lastname: 'De la tour'
        }
    },
    methods: {
        showAlert() {
            this.alert = true
        },
        hideAlert() {
            this.alert = false
        }
    }
})