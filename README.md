# TP1-EFSI-Javascript

El objetivo de este trabajo practico es repasar los conceptos basicos de javascript y poder aplicarlos de forma practica.

Se plantea crear un formulario html que contenga los siguientes elementos:

- `Input` de texto para ingresar la nota de Matematica
- `Input` de texto para ingresar la nota de Lengua
- `Input` de texto para ingresar la nota de EFSI
- Un `div` donde se visualice el resultado obtenido
- Los siguientes botones:
  - Calcular Promedio del alumno
  - Mostrar la materia que mayor nota obtuvo


## Validaciones: 

- Los campos deben ser obligatorios. Si no esta completo utilizar un alert para indicarlo.
- Las notas deberan ser validadas con javascript. El valor debera ser entre 1 y 10 inclusives. La validacion debe realizarse al momento de presionar una tecla invocando al evento correspondiente. Si es correcto se muestra en verde y si no es correcto en rojo.
- El resultado del promedio debe mostrarse en verde si es mayor o igual a 6 y en rojo si es menor.
- El nombre de la materia que mayor nota tuvo debe mostrarse en Azul. Si son varias las materias mostrar todos los nombres.
---
> ## *Propuesta opcional:*

> Ademas del `div` con los texto sumar una imagen que represente lo ocurrido al presionar cada boton. Usar un unico tag img y mediante javascript modificar el src para modificar la imagen. Pueden usar gif animados si lo desean para ponerle mas onda. Por ejemplo: cuando el promedio sea mayor a 6 mostrar algun festejo. Si reprobo mostrar algo que represente dicha situacion. 
En caso de realizarlo, la imagen deberia comenzar mostrando algo de bienvenida, y se ira modificando segun las acciones que se realicen.
Para dicha solucion deberan armar un archivo index.html y un archivo funciones.js y vincularlos entre si.

Todos los resultados deberan mostrarse en el mismo `div` con los valores correspondientes y el color segun corresponda.