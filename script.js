// aula api
//fetch é tipo busca
//colocou async tem que por try catch
//await espera o fetch terminar pra armazenar a resposta
const div = document.getElementById('catalogo');/*chama a div do html */
async function fetchProdutos(){
    try{
      const resposta = await fetch('https://fakestoreapi.com/products');
      const listaProdutos = await resposta.json() /* await aguarda processar para dar sequencia no codigo */
      console.log(listaProdutos);
      imprimirVetor(listaProdutos);
    }catch(error){ /* se tiver problema, tem que tratar */
        let h1 = document.createElement('h1');
        h1.textContent = 'Indisponível. Tente novamente mais tarde.'
        div.appendChild(h1); /*appendChild? é um método usado para adicionar um nó filho ao fim da lista 
        de filhos de um nó pai especificado no DOM (Document Object Model). */

    }
    
//criar um carrinho de compra é criar um array e jogar 2 itens la dentro
}

function imprimirVetor(vetor){
    // Limpa o conteúdo HTML da div principal (supondo que 'div' é um elemento DOM já definido)
    div.innerHTML = "";

    // Para cada elemento do array 'vetor', executa a função abaixo
    vetor.forEach(element => {
        // Cria um novo elemento <div> no DOM
        const divProduto = document.createElement('div'); 
        
        // Define a classe CSS 'itemProduto' para a nova div criada (para estilização)
        divProduto.className = "itemProduto"; 

        // Define o conteúdo HTML da divProduto usando template literals
        // Insere uma imagem com o src vindo da propriedade 'image' do objeto element
        // e um título dentro de <h2> vindo da propriedade 'title' do objeto element
        divProduto.innerHTML = `
            <img src="${element.image}" alt="produto">
            <h2>${element.title}</h2>
            <button onclick="comprar()" id="bota1">Comprar</button>
        `;

        // Adiciona a divProduto como filho do elemento 'div' principal na página
        div.appendChild(divProduto);
    });
}


fetchProdutos();