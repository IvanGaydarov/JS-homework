/**
 * Напишете JavaScript функция, която смята обема на сфера по подаден
радиус.
 */
function Sphere() {
    var rad = document.getElementById('rad').value,
   volume = 4/3*Math.PI*Math.pow(rad,3);
    document.getElementById('vol').value = volume;
  
}
