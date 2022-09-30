import React from 'react';

 
const NoteItem = () => {


    return (
        <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    )
}
export default NoteItem