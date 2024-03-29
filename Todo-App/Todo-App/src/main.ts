import List from "./models/List";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  console.log("initApp");
  const listInstance = List.instance;
  const ListTemplateInstance = ListTemplate.instance;

  const itemForm = document.getElementById("form") as HTMLFormElement;

  itemForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    //새 item Text
    const inputEl = document.getElementById("item-input") as HTMLInputElement;
    const newText = inputEl.value.trim();
    if (!newText.length) return;
    inputEl.value = "";

    //새 item ID
    const itemId = listInstance.list.length
      ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
      : 1;

    //new Item 생성하기
    const newItem = new ListItem(itemId.toString(), newText);

    //list 에 new item 넣기
    listInstance.addItem(newItem);

    ListTemplateInstance.render(listInstance);
  });

  const clearItemEl = document.getElementById(
    "clear-items-btn"
  ) as HTMLButtonElement;

  clearItemEl.addEventListener("click", () => {
    listInstance.clearList();
    ListTemplateInstance.clear();
  });

  //초기 데이터를 load 하기
  listInstance.load();
  //생성된 데이터를 이용해서 화면에서 보여주기
  ListTemplateInstance.render(listInstance);
};

initApp();
