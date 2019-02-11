import Link from 'next/link'

const ProductLink = (props) => (

    <div className="product">
        <Link as={`/product/${props.id}`} href={`/product?id=${props.id}`}>
            <a>
                <img src={props.image} alt={props.name} height='250' className="thumbnail"/>
                <p className="titleP">{props.description}</p>
                <p className="descrP">{props.name}</p>
            </a>
        </Link>
    </div>)


var Products = ({ products }) => (
    <div>
        <div className="products">
            {products.map(props => (
                <ProductLink key={props.id} {...props}/>
            ))}
        </div>
    </div>
)

export default Products