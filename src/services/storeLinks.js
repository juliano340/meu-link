//Buscar Links

export async function getLinkSaved(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


//Salvar Links

export async function saveLink(key, newLink) {

    let linksStored = await getLinkSaved(key);

    //não duplicar ID de links
    const hasLink = linksStored.some(link => link.id === newLink.id);
    
    if (hasLink){
        console.log("Este link já existe na sua lista!");
        return;
    }

    //Adicionar na lista:
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("Link salvo com sucesso");

    
}


//Deletar Link Salvo