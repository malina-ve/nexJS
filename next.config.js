module.exports = {
    exportPathMap: function (props) {
        return {
            '/': { page: '/' },
            '`/product/${props.id}`': { page: '/product', query: { id: props.id } }
        }
    }
}