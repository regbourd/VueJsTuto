Vue.filter('capitalize', function(value, prefix, suffix) {
    return prefix + value.toUpperCase() + suffix
})


Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('')

})

let capitalize1 = function(value, prefix, suffix) {
    return prefix + value.toUpperCase() + suffix
}

let reverse1 = function(value) {
    return value.split('').reverse().join('')

}


let vm = new Vue({
    el: '#tuto5',

    filters: {
        capitalize1,
        reverse1
    },

    data: {
        message: 'Salut le gens',
        message1: 'hello les mecs'
    }


})