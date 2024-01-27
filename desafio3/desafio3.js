const palindromo = {
    data(){
        return {
            stringEntrada: "",
            resultado: null
        }
    },
    methods: {
        verificarPalindromo() {
         
            const stringSemEspacos = this.inputString.replace(/\s/g, '').toLowerCase();
            const reverteString = stringSemEspacos.split('').reverse().join('');
      
            if (stringSemEspacos === reverteString) {
              this.resultado = 'É um palíndromo!';
            } else {
              this.resultado = 'Não é um palíndromo.';
            }
        }
    }
}

Vue.createApp(palindromo).mount('#desafio');
