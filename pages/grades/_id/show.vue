<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">ver Cursos</h1>
        <div class="flex items-center justify-start">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/grades"> Listar cursos</nuxt-link>
            </div>
        </div>
       <!--  <div>
            <h2>{{grade.name}} {{grade.id}}</h2>
            <p>Nivel: {{grade.level}}</p>
            <p>Horas: {{grade.hours}}</p>
            <p>Docente: {{grade.teacher_id}}</p>
            <p>Docente N: {{grade.full_name}}</p>
        </div>
        <button class="text-red-600" v-on:click="destroy" >Eliminar Curso</button> -->
      <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    <tr>
                        <th scope="col" class="py-3 px-6">Materia</th>
                        <th scope="col" class="py-3 px-6">Nivel</th>
                        <th scope="col" class="py-3 px-6">Horas</th>
                        <th scope="col" class="py-3 px-6">Docente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-300">
                        <td scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-dark">{{grade.name}}</td>
                        <td class="text-gray-900 py-4 px-6">{{grade.level}}</td>
                        <td class="text-gray-900 py-4 px-6">{{grade.hours}}</td>
                        <td class="text-gray-900 py-4 px-6">{{grade.full_name}}</td>
                        <td> 
                            <button 
                                class="rounded-r inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                v-on:click="destroy">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
           <!--  <h2>{{student.first_name}} {{student.last_name}}</h2>
            <p>Edad: {{student.age}}</p>
            <p>Celular: {{student.cell_phone}}</p>
            <p>Dirección: {{student.address}}</p> -->
        </div>      
    </div>
    
</template>

<script>
 
import axios from "axios";
export default{
    data(){
        return{
            grade:{}
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/grades/' + this.$route.params.id);
        this.grade = res.data;
        console.log(this.grade.id);
    },
    methods:{
        destroy(){
            console.log('Eliminar')
            if(confirm("Desea eliminar el curso ")){
                const res = axios.delete('http://127.0.0.1:8000/api/grades/' + this.$route.params.id);                
                console.log(res);
                window.location.assign('http://localhost:3000/grades');               
            }
        }
    }
} 
</script>