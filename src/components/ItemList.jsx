import './ItemList.css';


function ItemList({title = '', itemArray, customClass = ''}) {
    return (
        <div className="ItemList">
            <span className='list-title'>{title}</span>
            {itemArray 
            ?<ul>
                {itemArray.map((value, index) => <li className={`item ${customClass}`} key={index}>{value}</li>)}
            </ul>
            :<></>}
        </div>
    );
}

export default ItemList;
