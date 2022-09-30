import React, { useState } from "react";
import ListItems from "./children/ListItems";

const tempList = {
  0: {
    "list-id": 0,
    "list-name": "Todo list1",
    list: {
      1: { "list-item-id": 1, value: "do thing 1" },
      2: { "list-item-id": 2, value: "do thing 2" },
      3: { "list-item-id": 3, value: "do thing 3" },
    },
  },
  1: {
    "list-id": 1,
    "list-name": "Todo list2",
    list: {
      4: { "list-item-id": 4, value: "do thing 4" },
      5: { "list-item-id": 5, value: "do thing 5" },
      6: { "list-item-id": 6, value: "do thing 6" },
    },
  },
  2: {
    "list-id": 2,
    "list-name": "Todo list3",
    list: {
      7: { "list-item-id": 7, value: "do thing 7" },
      8: { "list-item-id": 8, value: "do thing 8" },
      9: { "list-item-id": 9, value: "do thing 9" },
    },
  },
};

const Lists = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [listOfLists, setListOfLists] = useState(tempList);

  const collapseHandler = (key) => {
    setActiveKey(key);
    console.log("setting key: ", key);
  };

  const itemUpdater = (listId, listItemId, text) => {
    const newObjList = {
      ...listOfLists,
      [listId]: { ...listOfLists[listId], list: { ...listOfLists[listId].list, [listItemId]: { ...listOfLists[listId].list[listItemId], value: text } } },
    };
    setListOfLists(newObjList);
  };

  const deleteListItem = (listId, listItemId, deleteIt) => {
    let newObjList = {
      ...listOfLists,
      [listId]: { ...listOfLists[listId], list: { ...listOfLists[listId].list, [listItemId]: { ...listOfLists[listId].list[listItemId], deleted: deleteIt } } },
    };
    setListOfLists(newObjList);
  };

  const addListItem = (listId) => {
    const tempId = `TEMP_${Math.floor(Math.random() * 555555)}`;
    let newObj = {
      "list-item-id": tempId,
      value: "",
    };
    let newObjList = {
      ...listOfLists,
      [listId]: { ...listOfLists[listId], list: { ...listOfLists[listId].list, [tempId]: newObj }},
    };
    setListOfLists(newObjList);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <ListItems listOfLists={listOfLists} activeKey={activeKey} collapseHandler={collapseHandler} itemUpdater={itemUpdater} deleteListItem={deleteListItem} addListItem={addListItem} />
    </div>
  );
};
export default Lists;
