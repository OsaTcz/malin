const outputTytulEW = document.querySelector('#tytulEW');
const outputOsobaEW = document.querySelector('#osobaEW');
const outputStatusEW = document.querySelector('#statusEW');
const outputKategoriaEW = document.querySelector('#kategoriaEW');
const outputOpisEW = document.querySelector('#opisEW');
const outputDeadlineEW = document.querySelector('#deadlineEW');

function wypiszdane(b)
{
    outputTytulEW.value = oldItems[b].tytul;
    outputOsobaEW.value = oldItems[b].osoba;
    outputStatusEW.value = oldItems[b].status;
    outputKategoriaEW.value = oldItems[b].kategoria;
    outputOpisEW.value = oldItems[b].opis;
    outputDeadlineEW.value = oldItems[b].deadline;
}


document.querySelector('#btnEWSave').addEventListener("click", () =>{
   
    const outputTytulEW = document.querySelector('#tytulEW').value
    const outputOsobaEW = document.querySelector('#osobaEW').value
    const outputStatusEW = document.querySelector('#statusEW').value
    const outputKategoriaEW = document.querySelector('#kategoriaEW').value
    const outputOpisEW = document.querySelector('#opisEW').value
    const outputDeadlineEW = document.querySelector('#deadlineEW').value;

    oldItems[index].tytul = outputTytulEW
    oldItems[index].osoba = outputOsobaEW
    oldItems[index].status = outputStatusEW
    oldItems[index].kategoria = outputKategoriaEW
    oldItems[index].opis = outputOpisEW
    oldItems[index].deadline = outputDeadlineEW
    
    $(document).find('.editWindow').removeClass('grid')
    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    renderList();
})

document.querySelector('#btnEWExit').addEventListener("click", () => {
    $(document).find('.editWindow').removeClass('grid')

})