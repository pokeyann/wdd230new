const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function() {
   if (input.value.length === 0) {

   } else {
    const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button");

        listItem.appendChild(listText);
        listText.textContent = input.value;
        listItem.appendChild(listBtn);
        listBtn.textContent = "X";

        list.appendChild(listItem);

        input.value = "";


        listBtn.addEventListener("click", function() {
          list.removeChild(listItem);
        });
      }
        input.focus();
      })