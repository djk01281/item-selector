
const ItemsContainer = () =>{
    const itemsList:string[] = ["item1", "item2", "item3"];
    return <div className = 'ItemsContainer'>{itemsList.map((item)=>(
        <Item name={item}></Item>
    ))}</div>
}

const Item: React.FC<{ name: string }> = (props) =>{
    return <div className="Item">{props.name}</div>
}

export default ItemsContainer;