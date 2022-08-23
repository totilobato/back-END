import {configSQLite3} from '../scripts/config.js'
import KnexContainer from './knexContainer.js'

class MessagesContainer extends KnexContainer {
    constructor(config){
    super(config, 'messages')
}
}

export default new MessagesContainer(configSQLite3)