//declaração de variaveis e casting dos tipos que precisaram ser transformados
const pergtNome = "Qual  seu nome?"
let respNome = prompt(pergtNome)
let pergtData = "Data(--/--/----)"
let respData = (prompt(pergtData))
let pergtEndereco = "Endereço"
const respEndereco = prompt(pergtEndereco)
const pergtCpf = "Cpf"
const respCpf = Number(prompt(pergtCpf))
const pergtEscolaridade = "Escolaridade"
const respEscolaridade = prompt(pergtEscolaridade)
const pergtPossuiCnh = "Possui CNH?"
const respPossuiCnh = prompt(pergtPossuiCnh)
const pergtQuantFilhos = ("Quantos filhos você tem?")
const respQuantFilhos = Number(prompt(pergtQuantFilhos))
const pergtCargo = "Cargo atual?"
const respCargo = prompt(pergtCargo)
const pergtSalario = "Salário?"
const respSalario = prompt(pergtSalario)
let pergtComissao = "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"
let respComissao = Number(prompt(pergtComissao))
let pergtAnoDeAdmissao = "Informe o ano de admissão"
let respAnoDeAdmissao = Number(prompt(pergtAnoDeAdmissao))

//Tipo das variaveis recebidas
console.log(typeof respNome)
console.log(typeof respData)
console.log(typeof respEndereco)
console.log(typeof respCpf)
console.log(typeof respEscolaridade)
console.log(typeof respPossuiCnh)
console.log(typeof respQuantFilhos)
console.log(typeof respCargo)
console.log(typeof respSalario)
console.log(typeof respComissao)
console.log(typeof respAnoDeAdmissao)

//Relátorio do funcionário 
console.log("Relátorio do funcionario:")
console.log(pergtNome, respNome)
console.log(pergtData, respData)
console.log(pergtEndereco, respEndereco)
console.log(pergtCpf, respCpf)
console.log(pergtEscolaridade, respEscolaridade)
console.log(pergtPossuiCnh, respPossuiCnh)
console.log(pergtQuantFilhos, respQuantFilhos)
console.log(pergtCargo, respCargo)
console.log(pergtSalario, respSalario)
console.log(pergtComissao, respComissao)
console.log(pergtAnoDeAdmissao, respAnoDeAdmissao)

