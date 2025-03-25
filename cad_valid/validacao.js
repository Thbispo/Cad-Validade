
// Validação do Nome
function verificarNome() {
    // Obtém o valor do campo de entrada com id "nome"
    const nome = document.getElementById("nome").value;

    // Obtém o elemento onde será exibida a mensagem de erro
    const nomeError = document.getElementById('mensagem-erro-nome');

    // Verifica se o nome tem menos de 5 caracteres
    if (nome.length < 5) {
        nomeError.textContent = "Nome deve ter no mínimo 5 caracteres."; // Define a mensagem de erro
        nomeError.style.color = "red";
        document.getElementById("nome").focus(); // Mantém o foco no campo de entrada

        // Verifica se o nome tem mais de 60 caracteres
    } else if (nome.length > 60) {
        nomeError.textContent = "Nome deve ter no máximo 60 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();

        // Verifica se o campo está vazio
    } else if (nome === "") {
        nomeError.textContent = "O campo nome não pode estar vazio!";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();

        // Caso contrário, o nome é válido
    } else {
        nomeError.textContent = "OK"; // Exibe mensagem indicando que o nome está correto
        nomeError.style.color = "green"; // Define a cor do texto para verde
    }
}

// Validação do E-mail

function verificarEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('mensagem-erro-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nome === "") {
        emailError.textContent = "E-mail é obrigatório.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length > 100) {
        emailError.textContent = "E-mail deve ter no máximo 100 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length < 5) {
        emailError.textContent = "E-mail deve ter no mínimo 5 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else {
        emailError.textContent = "OK";
        emailError.style.color = "green";
    }
}

//Validar Senha

function validaSenha() {
    const senha = document.getElementById('senha').value;
    const SenhaError = document.getElementById('erro-senha');
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const regexNumero = /\d/;

    if (senha === "") {
        SenhaError.textContent = "Senha não pode ser vazia";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    } else if (senha.length > 60) {
        SenhaError.textContent = "Senha não pode ser maior que 60 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    } else if (senha.length < 8) {
        SenhaError.textContent = "Senha não pode ser menor que 8 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    } else if (!regexMaiusculo.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Letras Maiúsculas";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    } else if (!regexEspecial.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Caracter Especial";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    } else if (!regexNumero.test(senha)) {
        SenhaError.textContent = "Senha tem que ter números";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    } else {
        SenhaError.textContent = "OK";
        SenhaError.style.color = "green";
    }


}


// Validação da Confirmação de Senha

function confirmarSenha() {
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenhaError = document.getElementById('mensagem-erro-confirmar-senha');

    if (confirmarSenha !== senha) {
        confirmarSenhaError.textContent = "As senhas não coincidem.";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();

    } else if (confirmarSenha === "") {
        confirmarSenhaError.textContent = "Preencha o campo";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
    } else {
        confirmarSenhaError.textContent = "OK";
        confirmarSenhaError.style.color = "green";
    }
}


// Telefone com Máscara
function aplicarMascaraTelefone(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    
    if (valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1)$2-$3");
    } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    }

    input.value = valor;
}


// Validação do Telefone com Máscara
function validatelefone() {

    const telefone = document.getElementById('telefone').value;
    const mensagemErroTelefone = document.getElementById('mensagem-erro-telefone');

    // Valida se o telefone tem 14 dígitos
    if (telefone.length !== 14) {
        mensagemErroTelefone.textContent = 'Telefone inválido! Certifique-se de que o número tenha o formato correto (XX) XXXXX-XXXX.';
        mensagemErroTelefone.style.color = 'red';
        document.getElementById("telefone").focus();
    } else {
        mensagemErroTelefone.textContent = "OK";
        mensagemErroTelefone.style.color = "green";
    }
}

// Validação da Cidade

function validacidade() {
    const cidade = document.getElementById('cidade').value;
    const mensagemCidade = document.getElementById('mensagem-cidade');
    if (cidade.length < 2 || cidade.length > 30) {
        mensagemCidade.textContent = "A cidade deve ter entre 2 e 30 caracteres.";
        mensagemCidade.style.color = "red";
        document.getElementById("cidade").focus();
    } else {
        mensagemCidade.textContent = "OK";
        mensagemCidade.style.color = "green";
    }
}

// Validação do Estado 

function validaestado() {
    const estado = document.getElementById('estado').value;
    const mensagemEstado = document.getElementById('mensagem-estado');
    if (estado.length !== 2) {
        mensagemEstado.textContent = "O estado deve ter exatamente 2 caracteres.";
        mensagemEstado.style.color = "red";
        document.getElementById("estado").focus();
    } else {
        mensagemEstado.textContent = "OK";
        mensagemEstado.style.color = "green";
    }
}

// Validação Cep



function mascaraCep(cep) {
    return cep.replace(/\D/g, "")                // Remove tudo o que não for número
              .replace(/(\d{5})(\d)/, "$1-$2");  // Adiciona o hífen após o quinto dígito
}

function validaCep() {
    const cep = document.getElementById("cep").value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
    const mensagemErroCep = document.getElementById("mensagem-erro-cep");

    // Aplica a máscara no campo de CEP
    document.getElementById("cep").value = mascaraCep(document.getElementById("cep").value);

    const regexCep = /^\d{5}-\d{3}$/;

    

    mensagemErroCep.textContent = "OK";
    mensagemErroCep.style.color = "green";
    return true;
}

// Adiciona o evento de input para o campo de CEP
document.getElementById("cep").addEventListener("input", function(event) {
    // Bloqueia a digitação de qualquer caractere não numérico
    if (/[^0-9]/.test(event.data)) {
        event.preventDefault();  // Impede a digitação de caracteres não numéricos
    }
    
    // Aplica a máscara enquanto o usuário digita
    this.value = mascaraCep(this.value);
});



// Validação CPF

function mascaraCpf(Cpf) {
    return Cpf.replace(/\D/g, "")                 
              .replace(/(\d{3})(\d)/, "$1.$2")   
              .replace(/(\d{3})(\d)/, "$1.$2")  
              .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
}

function validaCpf() {
    const cpf = document.getElementById("cpf").value.replace(/\D/g, ""); 
    const mensagemErroCpf = document.getElementById("mensagem-erro-cpf");

    
    document.getElementById("cpf").value = mascaraCpf(document.getElementById("cpf").value);

   
    if (!/^\d{11}$/.test(cpf) || /^(\d)\1+$/.test(cpf)) {
        mensagemErroCpf.textContent = "CPF inválido!";
        mensagemErroCpf.style.color = "red";
        return false;
    }

    const calcularDigito = (base, pesos) => 
        base.split("").reduce((acc, num, i) => acc + num * pesos[i], 0) % 11 < 2 
        ? 0 
        : 11 - (base.split("").reduce((acc, num, i) => acc + num * pesos[i], 0) % 11);

    const pesos1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    // Calcula os dois dígitos verificadores
    const digito1 = calcularDigito(cpf.slice(0, 9), pesos1);
    const digito2 = calcularDigito(cpf.slice(0, 10), pesos2);

    // Verifica se os dígitos verificadores estão corretos
    if (cpf === cpf.slice(0, 9) + digito1 + digito2) {
        mensagemErroCpf.textContent = "OK";
        mensagemErroCpf.style.color = "green";
        return true;
    }

    mensagemErroCpf.textContent = "CPF inválido!";
    mensagemErroCpf.style.color = "red";
    return false;
}


document.getElementById("cpf").addEventListener("input", function(event) {
   
    if (/[^0-9]/.test(event.data)) {
        event.preventDefault();  
    }
    
    
    this.value = mascaraCpf(this.value);
});




// Validação Cnpj

function mascaraCnpj(Cnpj) {
    return Cnpj.replace(/\D/g, "")              
               .replace(/(\d{2})(\d)/, "$1.$2")  
               .replace(/(\d{3})(\d)/, "$1.$2")  
               .replace(/(\d{3})(\d{1,4})$/, "$1/$2") 
               .replace(/(\d{4})(\d{2})$/, "$1-$2"); 
}

function validaCnpj() {
    const cnpj = document.getElementById("cnpj").value.replace(/\D/g, ""); 
    const mensagemErroCnpj = document.getElementById("mensagem-erro-cnpj");

    
    if (!/^\d{14}$/.test(cnpj) || /^(\d)\1+$/.test(cnpj)) {
        mensagemErroCnpj.textContent = "CNPJ inválido!";
        mensagemErroCnpj.style.color = "red";
        return false;
    }

    document.getElementById("cnpj").value = mascaraCnpj(document.getElementById("cnpj").value);

    
    const calcularDigito = (base, pesos) => {
        const soma = base.split("").reduce((acc, num, i) => acc + num * pesos[i], 0);
        const digito = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return digito;
    };

   
    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];


    const digito1 = calcularDigito(cnpj.slice(0, 12), pesos1);
    const digito2 = calcularDigito(cnpj.slice(0, 13), pesos2);

    if (cnpj === cnpj.slice(0, 12) + digito1 + digito2) {
        mensagemErroCnpj.textContent = "OK!";
        mensagemErroCnpj.style.color = "green";
        return true;
    }

    mensagemErroCnpj.textContent = "CNPJ inválido!";
    mensagemErroCnpj.style.color = "red";
    return false;
}


document.getElementById("cnpj").addEventListener("input", function(event) {
    if (/[^0-9]/.test(event.data)) {
        event.preventDefault();  
    }
    this.value = mascaraCnpj(this.value); 
});


//Validação Data de Nascimento

function validaDataNascimento() {
    const input = document.getElementById('data_nascimento');
    const msg = document.getElementById('mensagem-erro-data');
    const data = new Date(input.value);
    const hoje = new Date();
    
    msg.textContent = '';
    msg.style.color = 'red';

    if (!input.value) return exibeErro('Campo obrigatório', msg);
    if (isNaN(data)) return exibeErro('Data inválida', msg);
    if (data > hoje) return exibeErro('Data não pode ser futura', msg);
    

    msg.textContent = 'OK';
    msg.style.color = 'green';
    return true;
}

function exibeErro(mensagem, elemento) {
    elemento.textContent = mensagem;
    return false;
}
