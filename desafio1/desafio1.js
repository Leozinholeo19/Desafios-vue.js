const Calcular = {
    data(){
        return {
            n1 : 0,
            n2 : 0,
            soma: 0
        }
    },
    methods: {
        somar(){
           this.soma = parseFloat(this.n1) + parseFloat(this.n2)
           console.log(`Valor da soma é: ${this.soma}`);
        }
    }
}

Vue.createApp(Calcular).mount('#desafio');