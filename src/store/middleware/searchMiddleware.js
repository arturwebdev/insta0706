export const ignoreSpacesInSearch = (store) => (next) => (action) => {
    console.log(action.type)
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.replaceAll(' ', '').toLowerCase()
    }
    next(action)
}