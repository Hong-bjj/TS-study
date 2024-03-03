import storage from "../utills/storage";
import ListItem, { IListItem } from "./ListItem";

interface IList {
  list: IListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: IListItem): void;
  removeItem(id: string): void;
}

export default class List implements IList {
  static instance = new List();

  private constructor(private _list: IListItem[] = []) {} // private 를 생성자에 붙이면 singleton이 되네

  get list(): IListItem[] {
    return this._list;
  }

  load(): void {
    // const storedList: string | null = localStorage.getItem("myList");
    // if (typeof storedList !== "string") return;

    // const parsedList: {
    //   _id: string;
    //   _item: string;
    //   _checked: boolean;
    // }[] = JSON.parse(storedList);

    const parsedList = storage.get<
      {
        _id: string;
        _item: string;
        _checked: boolean;
      }[]
    >("myList");
    // listItem 인스턴스 객체 생성 => list 인스턴스 객체에 넣어주기

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      List.instance.addItem(newListItem);
    });
  }

  save(): void {
    storage.set("myList", this._list);
    // localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: IListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    this._list = this.list.filter((item) => item.id !== id);
    this.save();
  }
}
