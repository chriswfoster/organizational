import { CloseCircleOutlined, PlusSquareOutlined, UndoOutlined } from '@ant-design/icons';
import { Button, Collapse, Input, Popconfirm } from 'antd';
import React from 'react';

 
const ListItems = ({activeKey, collapseHandler, listOfLists, itemUpdater, deleteListItem, addListItem}) => {

    const { Panel } = Collapse;
    const listItemStyles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "no-wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "stretch",
        marginBottom: '2px'
    }

    return (
        <Collapse activeKey={activeKey} defaultActiveKey={["1"]} onChange={collapseHandler}>
            {Object.keys(listOfLists).map((listId, i) => {
                const listObj = listOfLists[listId];
                return (
                    <Panel key={`${i+1}`} header={listObj['list-name']}>
                        {Object.keys(listOfLists[listId].list).map(listItemId => {
                            const listItemObj = listOfLists[listId].list[listItemId];
                            return (!listItemObj.deleted ?
                                <div key={"input"+listItemId} style={listItemStyles} >
                                    <Input.TextArea rows={1} size="large" onChange={e => itemUpdater(listId, listItemId, e.target.value)} value={listItemObj.value} />
                                    <Popconfirm placement="left" title={"Delete this list item?"} onConfirm={() => deleteListItem(listId, listItemId, true)} okText="Yes" cancelText="No">
                                        <Button size="large" type="danger" icon={<CloseCircleOutlined />}></Button>
                                    </Popconfirm>
                                </div> :
                                <div key={"deleted"+listItemId} style={listItemStyles}>
                                    <span style={{color: "#ff4d4f"}}>{""}</span>
                                    <Popconfirm placement="right" title={"Undo Delete?"} onConfirm={() => deleteListItem(listId, listItemId, false)} okText="Yes" cancelText="No">
                                        <Button size="large" type="danger" icon={<UndoOutlined />}>{"Click to Undo Delete"}</Button>
                                    </Popconfirm>
                                </div>
                            )
                        })}
                        <Button onClick={() => addListItem(listId)} style={{marginTop: '5px'}} icon={<PlusSquareOutlined />} type="primary">
                            Add List Item
                        </Button>
                    </Panel>
                )
            })}
        {/* <Panel header="This is panel header 1" key="1">
          <p>{"hi"}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{"hi"}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{"hi"}</p>
        </Panel> */}
      </Collapse>
    )
}
export default ListItems