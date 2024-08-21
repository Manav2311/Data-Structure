// Search Item using bineary searching
let array = [3, 45, 396, 57, 354, 435, 443];
function binarySearching(array,item) {
let startValue = 0;
let endValue = array.length - 1;

  while (startValue <= endValue) {
    let mid = startValue + Math.floor((endValue - startValue) / 2);
    // let mid = Math.floor((startValue + endValue) / 2);

    if (array[mid] === item) return mid;
    else if (item < array[mid]) endValue = mid - 1;
    else startValue = mid + 1;
  }

  return -1;
}

console.log(binarySearching(array,57));

// update item using bineary searching

function updateItem(array, oldItem, newItem) {
    // Find the index of the old item using binary search
    const index = binarySearching(array, oldItem);

    if (index !== -1) {
        array[index] = newItem;
        console.log(`Item updated at index ${index}:`, array);
    } else {
        console.log('Item not found in the array.');
    }
}


let oldItem = 57;
let newItem = 89;
updateItem(array, oldItem, newItem)


// Delete Item using bineary searching
function deleteItem(array, item) {
    // Find the index of the item using binary search
    const index = binarySearching(array, item);

    if (index !== -1) {
        // Remove the item at the found index
        array.splice(index, 1); // Removes the element at the given index
        console.log(`Item deleted at index ${index}:`, array);
    } else {
        console.log('Item not found in the array.');
    }
}
const ItemToDelete = 89;

deleteItem(array, ItemToDelete);
