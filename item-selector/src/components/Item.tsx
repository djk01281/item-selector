const Item: React.FC<{ name: string, onClick: React.MouseEventHandler }> = (props) =>{
    return <div onClick = {props.onClick} className="Item">{props.name}</div>
}

export default Item;