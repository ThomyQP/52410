Repositorio creado para Analizador de la Materia SSL 2025 Curso 2K1

Primero que nada, debemos abrir el cmd, se puede hacer WIN+R y escribir CMD y luego ponemos aceptar

![image](https://github.com/user-attachments/assets/94214ee7-1658-4bf5-9be9-3be62688bf7a)

Luego Escribimos, cd Documents (para entrar a la carpeta "Documentos" dentro de nuestra pc y dentro de la misma escribimos git clone https://github.com/ThomyQP/52410 y le damos a enter:

![image](https://github.com/user-attachments/assets/2f4c1ae4-bb23-45ac-b8ea-1367221c6e4f)


Luego cd 52410 y luego cd antlr-LOGIC-project para poder entrar a la carpeta donde se encuentra la gramatica y el codigo

![image](https://github.com/user-attachments/assets/2ae41e6e-eea6-4a9e-9fbe-8c398b712000)


Por ultimo, escribimos code . y ya podremos empezar a trabajar con el analizador.

![image](https://github.com/user-attachments/assets/bcb9963d-5211-425e-9493-8b9e651158ca)

Luego debemos ir escribiendo en input.txt cada uno de los inputs que estan en el repositorio

Este analizador es capaz de devolver el valor de expresiones logicas (en funcion de los valores ingresados en el archivo txt) 
El funcionamiento consiste basicamente en primero escribir el valor de verdad de la proposición (true/false) y luego, dejar una linea de codigo vacia, y en la siguiente escribir la expresion logica que contenga las proposiciones ya declaradas

![image](https://github.com/user-attachments/assets/685236d2-0fe7-4c8d-881b-8da91aa1cadd)

(Imagen de ejemplo) 

Una vez cargado el ejemplo en el archivo.txt, procederemos a ir al archivo Logic.g4 y desde ahi dar click en el boton "Start Debugging" o simplemente darle a la tecla "F5"
De esta manera, se empezara a ejecutar el programa y se generará el arbol de derivacion correspondiente a la expresion logica ingresada en el archivo txt

![image](https://github.com/user-attachments/assets/ccf047d7-d269-402b-b716-326dc454f01a)

(Imagen de lo que se deberia visualizar en pantalla)

Por ultimo paso, en la terminal de Visual Studio Code, escribiremos el comando "npm start", esto ejecutara el codigo y nos devolvera la tabla de tokens y lexemas y tambien podremos observar el valor final de la expresion logica.

![image](https://github.com/user-attachments/assets/d8678967-74b1-49f3-8c9e-dd0f716f1210)

(Imagen de lo que se deberia visualizar en pantalla) 

Aclaraciones: 

El analizador solo acepta proposiciones compuesta de una letra o una letra y un numero

No acepta numeros como proposiciones ( Ej: 53 = true → ERROR) 

SIEMPRE se debe mantener la linea de codigo vacia entre la declaracion de veracidad de las propocisiones y la expresion logica en cuestion, de lo contrario, el analizador no podra identificar cual es una declaracio y cual es una expresion logica

SIEMPRE debe dar el valor de verdad de la proposicion, de lo contrario, no estara declarada para que el analizador pueda trabajar adecuadamente con ella.

NO utilizar operadores como: -,+, *,/ (NO SON ACEPTADOS POR LA GRAMATICA) 
