/**
 * Напишете JavaScript функция, която да добавя редове към
таблица.Тествайте върху HTML документ.
 */
function AddARow () {
    var tr = document.createElement('tr');
   // tr.parentNode.appendChild(tr);
    
   document.getElementsByTagName('tr')[0].appendChild(tr)
}