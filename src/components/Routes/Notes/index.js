import { List } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const tempCategories = [
  { id: 1, name: "First" },
  { id: 2, name: "second" },
  { id: 3, name: "third" },
  { id: 4, name: "fourth" },
  { id: 5, name: "fifth" },
  { id: 6, name: "sixth" },
];
const Notes = () => {
  const [listCategories, setListCategories] = useState(tempCategories);

  return (
    <List
      size="large"
      header={<div>Choose a Category</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={listCategories}
      renderItem={(item) => (
        <List.Item>
          <Link to={`/Note/${item.id}`}>{item.name}</Link>
        </List.Item>
      )}
    />
  );
};
export default Notes;
