// Global variables
const addMoreMultiInputButtonsList = document.querySelectorAll('.form__button--add-more');

// General functions
const addNewMultiInputField = () => {
  for (const addMoreMultiInputButton of addMoreMultiInputButtonsList) {
    addMoreMultiInputButton.addEventListener('click', () => {
      const inputListContainerId = addMoreMultiInputButton.previousElementSibling.getAttribute('id');
      const inputListContainer = document.querySelector(`#${inputListContainerId}`);
      const inputContainer = inputListContainer.querySelectorAll(".form__multi-input-list-item");
      const newField = inputContainer[inputContainer.length - 1].cloneNode(true);   // Clone of last field added

      // Don't add a new input if the last one has an empty value
      if (newField.children[0].value == "") {
        return false;
      }

      // Clears the content of the new field and adds it to the screen
      newField.children[0].value = "";
      inputListContainer.appendChild(newField);
    });
  }
};

addNewMultiInputField();
