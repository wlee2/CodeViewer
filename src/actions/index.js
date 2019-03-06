import types from './actionTypes'

const init = (data) => ({
    type: types.INIT,
    data
});

const update = ({data, index}) => ({
    type: types.UPDATE,
    data,
    index
});

const remove = ({from, to}) => ({
    type: types.REMOVE,
    from,
    to
});


export default {
    update,
    init,
    remove
}