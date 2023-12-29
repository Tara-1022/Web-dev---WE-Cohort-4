function markDone(item_check) {
    let item = item_check.parentElement
    item.style.textDecoration = 'line-through'
    item_check.disabled = true
}

function createItem(title, description) {
    let item = document.createElement('div')
    let item_title = document.createElement('h3')
    let item_description = document.createElement('p')
    let item_check = document.createElement("input")

    item_check.setAttribute("type", "checkbox")
    item_check.addEventListener("click", function () { markDone(item_check) });

    item_title.textContent = title
    item_title.classList.add('to_do_title')

    item_description.textContent = description
    item_description.classList.add('to_do_description')

    item.appendChild(item_title)
    item.appendChild(item_description)
    item.appendChild(item_check)
    item.classList.add('to_do_item')
    return item
}

function addItem() {
    if (title.value == '' || description.value == '') {
        alert("Can't add empty item")
        return
    }

    item_list.appendChild(
        createItem(
            title.value, description.value
        ))
}

const item_list = document.getElementById('list_container')
const title = document.getElementById('title')
const description = document.getElementById('description')