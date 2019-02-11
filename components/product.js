export default (props)  => (
    <div className="product">
        <div className="product__element">
            <img src={props.image} alt={props.name} className="thumbnail"/>
            <p>{props.name}</p>

            <button className="snipcart-add-item"
                data-item-name={props.name}
                data-item-id={props.id}
                data-item-image={props.image}
                data-item-url='/'
                data-item-price={props.price}>
                Купить за {props.price} $
            </button>
        </div>
    </div>
)

