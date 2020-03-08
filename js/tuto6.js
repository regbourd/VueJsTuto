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
  props:{
      start: {type: Number, default: 0}
  },
  mounted: function(){
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

let vm = new Vue({
  el: "#tuto6",

  components: { monMessage2, counter, monMessage3 },

  data: {
    message: "Jean",
    message2: "toto",
    message3: "Salut les gens",
    alert: false
  },
  methods: {
      showAlert(){
          this.alert = true
      },
      hideAlert(){
          this.alert = false
      }
  }
})
