let items = [
<<<<<<< HEAD
    "Сделать проектную работу",
    "Полить цветы",
    "Пройти туториал по Реакту",
    "Сделать фронт для своего проекта",
    "Прогуляться по улице в солнечный день",
    "Помыть посуду",
=======
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
	"Прогуляться по улице в солнечный день",
	"Помыть посуду",
>>>>>>> 62e77a0b76d8f648400bace7aa4adfc97dec494d
];

const listElement = document.querySelector(".to-do__list");
const formElement = document.querySelector(".to-do__form");
const inputElement = document.querySelector(".to-do__input");
<<<<<<< HEAD
const storageKey = "toDoItems";
=======
>>>>>>> 62e77a0b76d8f648400bace7aa4adfc97dec494d

function loadTasks() {
    const storedTasks = localStorage.getItem(storageKey);
    if (!storedTasks) return items;

    try {
        const parsedTasks = JSON.parse(storedTasks);
        return Array.isArray(parsedTasks) ? parsedTasks : items;
    } catch (e) {
        return items;
    }
}

function createItem(item) {
	const template = document.getElementById("to-do__item-template");
	const clone = template.content.querySelector(".to-do__item").cloneNode(true);
  const textElement = clone.querySelector(".to-do__item-text");
  const deleteButton = clone.querySelector(".to-do__item-button_type_delete");
  const duplicateButton = clone.querySelector(".to-do__item-button_type_duplicate");
  const editButton = clone.querySelector(".to-do__item-button_type_edit");

}

textElement.textContent = item;

    deleteButton.addEventListener("click", () => {
        clone.remove();
        const items = getTasksFromDOM();
        saveTasks(items);
    });

    duplicateButton.addEventListener("click", () => {
        const itemName = textElement.textContent;
        const newItem = createItem(itemName);
        listElement.prepend(newItem);
        const items = getTasksFromDOM();
        saveTasks(items);
    });

    editButton.addEventListener("click", () => {
        textElement.setAttribute("contenteditable", "true");
        textElement.focus();
    });

function getTasksFromDOM() {

}

function saveTasks(tasks) {
<<<<<<< HEAD
 
	
=======

>>>>>>> 62e77a0b76d8f648400bace7aa4adfc97dec494d
}

