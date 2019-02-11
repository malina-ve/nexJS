import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'Котик 1',
            price: 6000,
            description: 'Рыжий котик',
            image: 'https://ваш-сонник.рф/wp-content/uploads/2018/01/sonnik-videt-ryzhego-kota.jpg',
            id: 1
        },
        {
            name: 'Котик 2',
            price: 7000,
            description: 'Черный котик',
            image: 'http://s.mediasole.ru/images/618/618667/original.jpg',
            id: 2
        },
        {
            name: 'Котик 3',
            price: 1500,
            description: 'Белый котик',
            image: 'https://ваш-сонник.рф/wp-content/uploads/2018/01/sonnik-k-chemu-snitsya-belyj-kot.jpg',
            id: 3
        },
        {
            name: 'Котик 2',
            price: 7000,
            description: 'Черный котик',
            image: 'http://s.mediasole.ru/images/618/618667/original.jpg',
            id: 4
        },
        {
            name: 'Котик 3',
            price: 1500,
            description: 'Белый котик',
            image: 'https://ваш-сонник.рф/wp-content/uploads/2018/01/sonnik-k-chemu-snitsya-belyj-kot.jpg',
            id: 5
        },
        {
            name: 'Котик 2',
            price: 7000,
            description: 'Черный котик',
            image: 'http://s.mediasole.ru/images/618/618667/original.jpg',
            id: 6
        }
    ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export function initializeStore (initialState = initialState) {
    return createStore(reducer, initialState)
}