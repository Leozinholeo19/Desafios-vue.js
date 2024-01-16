const Calcular = {
    data(){
        return {
            ano : 0,
            seculo : 0
        }
    },
    methods: {
        converter(ano){
                this.seculo = Number(Math.ceil(ano / 100));
        }
    }
}

Vue.createApp(Calcular).mount('#desafio');