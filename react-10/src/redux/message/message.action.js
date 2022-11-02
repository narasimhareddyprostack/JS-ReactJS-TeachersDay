//create action types
const GM = 'GM'
const GN = 'GN'
//create actions
let gmAction = () => {
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }