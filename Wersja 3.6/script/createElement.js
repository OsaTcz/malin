
const createInfoElement = (labelName, value) => {
    const infoElement = document.createElement("div");

    const labelElement = document.createElement("strong");
    labelElement.innerText = `${labelName}: `;
    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
};


const createorder = (kolor) => {
    const orderKolor = document.createElement("div", id);

}