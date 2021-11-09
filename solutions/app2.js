const HU = {
    date(date) { return date.toLocaleDateString('hu') },
    curreny(amount) { return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(amount); },
    //money.toLocaleString('hu-HU',{style: 'currency', currency: 'HUF'});
    //https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    //https://www.techonthenet.com/js/number_tolocalestring.php
    list(array) { let last = array.pop(); return array.join(', ') + ' és ' + last },
}

 export default HU
