/*
ARRAY- METODOS 

ARRAY.splice = Este tipo de metodo retira algo da posição do array e tambem pode 
                Adicionar algo dentro do array
*/

const students = ['João','Maria','Pedro','Carla','Bia','Mauricio'] // vai retirar algo deste array
const students1 = ['João','Maria','Pedro','Carla','Bia','Mauricio'] // vai colocar algo dentro deste array
const students2 = ['João','Maria','Pedro','Carla','Bia','Mauricio'] // vai colocar algo dentro deste array mas vai retirar algum elemento

students.splice(1,2) // Indice e elemento, retirando elementos]
students1.splice(1,0,'Arthur') // Colocando elemento e sem retirar niguem da posição
students2.splice(1,1,'Alice')// Colocando elemento retirando alguem da posição

console.log(students)
console.log(students1)
console.log(students2)