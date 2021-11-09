const removeDuplicatesFromArray = (array) => array
.filter((item, index, arr) => (index == arr.indexOf(item)));

export default removeDuplicatesFromArray