const isInProduct = (state, id) => {
    return !!state.selectItem.find(item => item.id === id)
}
export {isInProduct}