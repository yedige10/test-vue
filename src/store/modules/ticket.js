import Vue from 'vue'

export default {
    actions: {
        getTickets: function(ctx){
            Vue.http.get('https://test-api.mybimiboo.dev/api/items').then(
                response => {
                    ctx.commit('setTickets', response.body.data)
                }, 
                error => { console.log('error', error) }
            )
        }
    },
    mutations: {
        setTickets(state, tickets) {
            state.tickets = tickets
        }
    },
    state: {
        tickets: []
    },
    getters:{
        tickets(state){
            return state.tickets
        }
    }
}