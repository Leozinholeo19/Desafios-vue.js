const Calcular = {
    data(){
        return {
            n1 : 0,
            n2 : 0,
            soma: 0
        }
    },
    methods: {
        somar(n1, n2){
            this.soma = Number(n1) + Number(n2)
        }
    }
}

Vue.createApp(Calcular).mount('#desafio');
