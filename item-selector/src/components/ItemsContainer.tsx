import Item from './Item'
import itemsData from '../data/items.json'
const ItemsContainer = () =>{
    const itemsList:string[] = itemsData.itemsArray;
    return <div className = 'ItemsContainer'>{itemsList.map((item)=>(
        <Item name={item}></Item>
    ))}</div>
}



export default ItemsContainer;