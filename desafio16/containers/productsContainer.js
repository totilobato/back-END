import {configMariaDB} from '../scripts/config.js'
import KnexContainer from './knexContainer.js'

class ProductsContainer extends KnexContainer {
    constructor(config){
    super(config, 'products')
}
}

export default new ProductsContainer(configMariaDB)