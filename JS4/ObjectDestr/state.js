let state = {
    product: {
        p_Name: "Iphone",
        color: {
            code1: "Red"
        }
    },
    name: []
}
console.log(state.product.color.code1)
let { product } = state
let { color } = product;
let { code1 } = color;
console.log(code1)