import React, { useState } from "react";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Input, Popconfirm } from "antd";

const NoteCard = ({ note_id, category_id, title, text, deleteNoteCard }) => {
  const [editCard, setEditCard] = useState(false);

  return (
    <Card title={title} bordered={true}>
      {editCard ? <Input.TextArea value={text}></Input.TextArea> : <pre>{text}</pre>}
      <div>
        <Button onClick={() => setEditCard(true)} size="large" type="" icon={<EditOutlined />}></Button>
        <Popconfirm placement="left" title={"Delete?"} onConfirm={() => deleteNoteCard(category_id, note_id, false)} okText="Yes" cancelText="No">
          <Button size="large" type="danger" icon={<CloseCircleOutlined />}></Button>
        </Popconfirm>
      </div>
    </Card>
  );
};
export default NoteCard;


const StandardButtons = () => {

}

const EditButton = () => {
    
}