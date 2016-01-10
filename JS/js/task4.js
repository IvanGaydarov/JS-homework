/**
 * Задача 4:
Напишете JavaScript, който да връща innerHTML на първия anchor в
HTML документ
 */
    var a = document.querySelectorAll('a'),
        firstA = a[0];
    document.write(firstA.innerHTML);
/*  document.getElementById('result').innerHTML = firstA.innerHTML;*/