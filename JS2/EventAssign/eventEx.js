function mouseOverEx() {
    document.getElementById('mouseOverEx1').style.backgroundColor = "blue"
}

function mouseOutEx() {
    document.getElementById('abc').style.backgroundColor = "yellow"
}

function clickEx() {
    document.getElementById('xyz').style.backgroundColor = "green"
}

function focusEx() {
    document.getElementById('focus123').style.backgroundColor = "red"
}

function blurEx() {
    let tag_Ref = document.getElementById('blur123')
    //console.log(tag_Ref.value)
    document.getElementById('blur123').value = tag_Ref.value.toUpperCase()

}