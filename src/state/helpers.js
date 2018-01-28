export function removeDuplicatesUsingFilter(arr){
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}

export function removeHashDuplicatesUsingFilter(arr){
  let unique_array = []
  let added_names = []
  console.log(removeHashDuplicatesUsingFilter);
  console.log(arr);
  for (let i = 0;i < arr.length; i++) {
    if (added_names.includes(arr[i].name)) {
      continue
    } else {
      unique_array.push(arr[i])
      added_names.push(arr[i].name)
    }
  }
  return unique_array
}
