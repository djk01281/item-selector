import Item from './Item'
import itemsData from '../data/items.json'
const ItemsContainer : React.FC<{onClick: React.MouseEventHandler}> = (props) =>{
    const itemsList:string[] = itemsData.itemsArray;
    return <div className = 'ItemsContainer'>{itemsList.map((item)=>(
        <Item onClick={props.onClick} name={item}></Item>
    ))}</div>
}



export default ItemsContainer;