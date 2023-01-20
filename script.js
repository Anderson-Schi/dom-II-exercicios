 // Buscando o elemento existente para usar de referência
const pegaContainer = document.getElementById("container");

adicionaItem = (event) =>{
    event.preventDefault()

    const addItem = document.createElement("article");
    addItem.innerHTML = " NOVO ITEM" ; 
    addItem.classList.add(`item`);
    addItem.setAttribute("onclick", "removeItem(event)");

    pegaContainer.insertAdjacentElement(`beforeend`, addItem);

    

    console.log(pegaContainer);
};

removeItem = (event) => {
    event.target.remove();
};