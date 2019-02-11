import React from 'react'
import {connect} from 'react-redux'
import ProductComp from '../components/product'
import Head from 'next/head'

class Product extends React.Component {
    static getInitialProps = ({query}) =>
        ({id: query.id})

    getProduct = () =>
        (this.props.products.filter(x => x.id == this.props.id)[0])

    render = () => (
        <div>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"  id="snipcart"></script>
                <link  href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"  rel="stylesheet"  type="text/css" />
                <link href="/static/main.css" rel="stylesheet" />
                <meta name="title" content={"Peaky Blinder's " + this.props.name} />
                <meta name="description" content={this.props.description} />
            </Head>

            <a className="back" href="/">Ко всем котикам</a>
            <ProductComp {...(this.getProduct())}/>
        </div>
    );
}

const mapStateToProps = (state) =>
    ({products: state.products})


export default connect(mapStateToProps)(Product)