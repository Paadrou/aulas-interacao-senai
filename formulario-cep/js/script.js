const cepInput = document.querySelector("#cep")

cepInput.addEventListener("blur", ()=>{

    /*
    sobre a regex /\/g
    /.../ - deleta a expressão regular

    \D - É o inverso de \d, ou sejaz "qualquer caractere que n seja digito (0 a 9)"

    g - É a flag global, que faz a substituição ocorrer em todas as ocorrencia do texto.

    Exemplo:
    se o usuario digitar 88.000-00
    a função fará "88.000-00".replace(/\D/g,'') // resultado '8800000'
    */
    
    const cep = cepInput.value.replace(/\D/g,'')
    if(cep.legth === 8){
        fetch( `https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if(!data.erro){
                document.querySelector("#logradouro").value = data.logradouro
                document.querySelector("#bairro").value = data.bairro
                document.querySelector("#cidade").value = data.localidade
                document.querySelector("#estado").value = data.estado
            
            } else{
                console.log("Cep não encontrado")
            }
        })
    } else {
        alert("CEP inválido")
    }

})