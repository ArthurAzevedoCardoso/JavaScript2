/*
ARRAY- METODOS 

ARRAY.slice = Este tipo de metodo retira algo da posição e com isso ele não altera 
              o array original
                
*/

const students = ['João','Maria','Pedro','Carla','Bia','Mauricio']

const NewStudents = students.slice(1) 
const NewStudents1 = students.slice(0,2) // Indice, e quantos elementos 

console.log(NewStudents)
console.log(NewStudents1)