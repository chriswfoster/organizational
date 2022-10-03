import { List } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withNotes } from "../../../core/contexts/noteCategoryContext";

const Notes = (props) => {
  const {listCategories} = props;

  return (
    <List
      size="large"
      header={<div>Choose a Category</div>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={Object.keys(listCategories)}
      renderItem={(itemId) => {
        return(
        <List.Item>
          <Link to={`/Note/${itemId}`}>{listCategories[itemId].name}</Link>
        </List.Item>
      )}}
    />
  );
};
export default withNotes(Notes);
