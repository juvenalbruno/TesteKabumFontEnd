import { createStore } from 'redux';
import db from '../database/db.json';

function reducer() {
    return db.films;
}

const store = createStore(reducer);

export default store;