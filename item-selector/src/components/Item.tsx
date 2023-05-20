const Item: React.FC<{ name: string }> = (props) =>{
    return <div className="Item">{props.name}</div>
}

export default Item;