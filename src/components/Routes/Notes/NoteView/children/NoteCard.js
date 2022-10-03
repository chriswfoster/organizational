import React, { useState } from "react";
import { CaretDownOutlined, CaretRightOutlined, CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Input, Popconfirm } from "antd";

const NoteCard = ({ note_id, category_id, title, text, deleteNoteCard, updateCardText }) => {
  const [editCard, setEditCard] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const showAllIcon = showAll ? <CaretDownOutlined /> : <CaretRightOutlined />;
  const showText = showAll ? " Less" : " All";
  const cardStyles = showAll ? {} : {height: '150px', overflowY: 'hidden'}

  return (
    <Card className="transition-animation" style={{...cardStyles}} title={title} bordered={true} extra={<Button icon={showAllIcon} onClick={() => setShowAll(!showAll)}>Show{showText}</Button>}>
      {editCard ? <Input.TextArea style={{height: 'auto'}} onChange={(e) => updateCardText(category_id, note_id, e.target.value)} value={text}></Input.TextArea> : <pre className="transition-animation" style={{height: '100%'}}>{text}</pre>}
      <div>{editCard ? <EditButtons setEditCard={setEditCard} /> : <StandardButtons setShowAll={setShowAll} setEditCard={setEditCard} deleteNoteCard={deleteNoteCard} category_id={category_id} note_id={note_id} />}</div>
    </Card>
  );
};
export default NoteCard;

const StandardButtons = ({ setShowAll, setEditCard, deleteNoteCard, category_id, note_id }) => {
  return (
    <>
      <Button onClick={() => {setEditCard(true); setShowAll(true);}} size="large" type="" icon={<EditOutlined />}></Button>
      <Popconfirm placement="left" title={"Delete?"} onConfirm={() => {deleteNoteCard(category_id, note_id, false);}} okText="Yes" cancelText="No">
        <Button onClick={() => setShowAll(true)} size="large" type="danger" icon={<CloseCircleOutlined />}></Button>
      </Popconfirm>
    </>
  );
};

const EditButtons = ({ setEditCard }) => {
  return (
    <>
      <Button onClick={() => setEditCard(false)} size="large" type="primary">
        SAVE
      </Button>
      <Button onClick={() => setEditCard(false)} size="large" type="danger">
        CANCEL
      </Button>
    </>
  );
};
