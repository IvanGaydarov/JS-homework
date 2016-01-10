/**
 * Задача 2:
Напишете JavaScript, който да връща броя на anchors (<а>) в HTML
документ.
 */

	var a = document.querySelectorAll('a'),
	count = a.length;
	document.write('the number of anchors is ' + count);
