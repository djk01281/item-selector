import Item from './Item'

const ItemsContainer = () =>{
    const itemsList:string[] = ["item1", "item2", "item3"];
    return <div className = 'ItemsContainer'>{itemsList.map((item)=>(
        <Item name={item}></Item>
    ))}</div>
}



export default ItemsContainer;