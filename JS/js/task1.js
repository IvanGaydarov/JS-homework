/**
 * Напишете JavaScript програма, която по даден array да показва найчесто срещания символ.
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Резултат: a ( 5 times )
 */

var arr1=[3, 'a', 'a', 'a',5, 2, 3, 'a', 3, 'a', 2, 5, 4, 9, 3],
		temp,
		filtered = [],
        fin = [];
//document.write(arr1);
arr1.sort();

document.write(arr1);

for (i = 0; i < arr1.length; i++) {

    if (arr1[i - 1] === arr1[i]) {
        filtered.push(arr1[i]);
    } else {
        filtered = [];
    }
    if (fin.length < filtered.length) {
        fin = filtered;
    }
}
    fin.push(fin[0]);
    document.write("<br>");
    document.write(filtered);
    document.write("<br>");
    document.write(fin);
    document.write("<br>");
   document.write(fin[0] + " ( " + fin.length + " times" + " )");



