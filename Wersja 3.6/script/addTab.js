let tabIndex=1;
let clickedTab=1;
let tabList=[];

function addTab(){

    let c = localStorage.getItem('tabs')
    c++
    localStorage.setItem('tabs', c)

    var btn = document.createElement("button");
    const tabs = document.querySelector(".tabs")
    let bts = document.querySelector("#guziki") 
   
    btn.setAttribute("id", "btn" );
    btn.setAttribute("class", "tab" + c);
    btn.innerHTML = "TAB" + c; 
    
  
    tabs.insertBefore(btn, bts);
    let order = []

    localStorage.setItem('itemsArray'+c, JSON.stringify(order))
}

function deleteTab(){

    let tabcount = localStorage.getItem('tabs')
    const tabs = document.querySelector(".tabs")
    tabs.innerHTML=""
    console.log(tabcount)
    console.log(localStorage)
    tabcount = tabcount - 1;
    localStorage.setItem('tabs', tabcount)
    localStorage.removeItem('itemsArray'+tabIndex) 
    localStorage.removeItem('downloadItem'+tabIndex)

    // let poped = JSON.parse(localStorage.getItem('tabso'));
    // console.log(poped.slice(2,3))
  
    // let tabsName = JSON.parse(localStorage.getItem('tabso'));
    // for (let i=0 ; i < tabsName.length;i++)
    // {
    //     if(tabIndex = i )
    //     {

    //     }
    // }


    rendertabs()
   
}

rendertabs()

function rendertabs(){
   
    let tabcount = localStorage.getItem('tabs')
    let tabsName = JSON.parse(localStorage.getItem('tabso'));
    // const names = tabsName.split(",")
    console.log(tabsName)
    for(let s=0; s< tabcount; s++){

        var btn = document.createElement("button");
        const tabs = document.querySelector(".tabs")
        let bts = document.querySelector("#guziki") 
        btn.setAttribute("id", "btn" );
        btn.setAttribute("class", "tab" + (s+1));
        
        if(tabsName[s] == null)
        {
            console.log(s)
            btn.innerHTML = "TAB" + (s+1)  + "Nie z pliku";
           
        }
        else{
            
            btn.innerHTML = tabsName[s]; 
        }
        tabs.insertBefore(btn, bts);

    }
  
}



document.querySelector(".tabs").addEventListener("click", (event) => {

	if(event.target.id === "btn"){
        const tab = [...document.querySelectorAll("#btn")];
        const elementIndex = tab.indexOf(event.target) +1;
        clickedTab = elementIndex
        // $(event.target).closest( "#btn" ).addClass("clicked");
        // $(event.target).closest( "#btn" ).removeClass("clicked");
        tabIndex = elementIndex
        renderList(tabIndex)
        console.log(elementIndex)
        let outputplik =document.querySelector(".outputplik")
        let tabsName = JSON.parse(localStorage.getItem('tabso'));
        outputplik.innerHTML = tabsName[(elementIndex-1)]
    }
 
})
