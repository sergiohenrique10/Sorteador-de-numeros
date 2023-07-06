

const buttonSotear= document.querySelector(".sorteio")


buttonSotear.addEventListener("click", gerarValorAleatorio)



function gerarValorAleatorio(){
    
    const inputValueEntre =Math.ceil( document.querySelector(".input-value-entre").value)
    const inputValueE =Math.floor( document.querySelector(".input-value-e").value)

    const valorSorteado = Math.floor(Math.random() * (inputValueE - inputValueEntre + 1)) + inputValueEntre;

    console.log(valorSorteado)

    alert(valorSorteado)
   
}

// mais uma tarefa completa. PARABENS