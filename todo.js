const text = document.getElementById("text");
const p = document.getElementById("p");
const h=document.getElementById("h5");
function on() {
    if (text.value !== '') {
        h.style.display="none"
        // Create a container div
        var container = document.createElement("div");
        container.style.display = "flex";

        // Create the paragraph element
        var r = document.createElement("p");
        r.textContent = text.value;
        
        text.value = '';

        // Create the icon element
        var icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-xmark");
        icon.style.cursor="pointer"
  
        
        var icon2 = document.createElement("i");
        icon2.setAttribute("class", "fa-regular fa-circle");
        icon2.style.cursor="pointer"
        

        // Append paragraph and icon to container
        container.appendChild(icon2);
        container.appendChild(r);
        container.appendChild(icon);
        
        // Append container to parent element
        p.appendChild(container);

        icon.addEventListener("click", () => {
            container.remove();
        });

        icon2.addEventListener("click",()=>{
                icon2.setAttribute("class", "fa-solid fa-circle-check");    
        })
    }else{
        h.style.display="block"
    }
}
