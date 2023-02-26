const navElems = document.querySelectorAll("nav > .page");

navElems.forEach((elem, index) => {
  elem.addEventListener("click", () => { 

    const currentlySelected = document.querySelector("nav > .page.selected");
    currentlySelected.classList.remove("selected");
    elem.classList.add("selected");

   

    const pageLiElems = document.querySelectorAll(".pages > li");
    pageLiElems.forEach(li =>{
      li.style.transform = `translateY(-${index * 90}vh)`;

    });


  });

});