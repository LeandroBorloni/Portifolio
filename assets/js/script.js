// Manipulando o DOM
let inputJS = document.querySelector("#js")
let inputLayout = document.querySelector("#layout-sim")
let inputLayoutNao = document.querySelector("#layout-nao")
let inputPrazo = document.querySelector("#prazo")
let formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", function(e){ 
    e.preventDefault()
  
    const dados = {
        "Nome": e.target.elements["nome"].value,
        "Email": e.target.elements["email"].value,
        "JS": e.target.elements["js"].value,
        "Layout SIM": e.target.elements["layout-sim"].value,
        "Layout NÃO": e.target.elements["layout-nao"].value,
        "Prazo": e.target.elements["prazo"].value,
        "Preço": e.target.elements["preco"].value,
    }

    localStorage.setItem("Contato", JSON.stringify(dados))
    window.alert("Formulário enviado com sucesso!")
    formulario.reset()
})

inputJS.addEventListener("change", atualizarOrcamento)
inputLayout.addEventListener("change", atualizarOrcamento)
inputLayoutNao.addEventListener("change", atualizarOrcamento)
inputPrazo.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = 100
    let js = inputJS.checked
    let layout = inputLayout.checked
    let prazo = inputPrazo.value
    
    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)`

    if(js) preco *= 1.1
    if(layout) preco += 2 * 30
    let taxaDeUrgencia = 1 - prazo * .05
    preco *=  1 + taxaDeUrgencia

    document.querySelector("#preco").innerHTML = "R$" + preco.toFixed(2)
}
