const quntityCounter = (state, id) => {
    const index = state.selectItem.findIndex(item => item.id === id)
    if(index === -1) {
        return false
    }else{
        return state.selectItem[index].quntity
    }
    
} 

export {quntityCounter}