<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Datos de la asignación</h1>
        <div class="flex items-center justify-start">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/assignments"> Lista de asignaciones </nuxt-link>
            </div>
        </div>
        <!---------------------->
        <!-- <div v-for="assignment in assignments">
            <br>
            <h3>Datos del Docente</h3>
            <p> Materia: {{assignment.name}} </p>
            <p> Docente: {{assignment.full_name}} </p>
            <p> Lic: {{assignment.profession}} </p>
            <p> Celular: {{assignment.t_phone}}</p>
            <hr><br>
            <h3>Datos del Alumno</h3>
            <p> Estudiante: {{assignment.first_name}} {{assignment.last_name}}</p>
            <p> Celular: {{assignment.s_phone}}</p>
         
        </div>
        <button class="text-red-600" v-on:click="destroy" >Eliminar</button> -->
            
        <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    <tr>
                        <th scope="col" class="py-3 px-6">Materia</th>
                        <th scope="col" class="py-3 px-6">Docente</th>
                        <th scope="col" class="py-3 px-6">Licenciado</th>
                        <th scope="col" class="py-3 px-6">Celular Doc.</th>      
                        <th scope="col" class="py-3 px-6">Estudiante</th>
                        <th scope="col" class="py-3 px-6">Celular Est.</th>      
                        <th scope="col" class="py-3 px-6">Eliminar</th>             
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="assignment of assignments" :key="assignment.id" :id="assignment.id"
                    class="bg-white border-b dark:bg-gray-300 dark:border-gray-300">
                        <td scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-dark">{{assignment.name}}</td>
                        <td class="text-gray-900 py-4 px-6">{{assignment.full_name}}</td>
                        <td class="text-gray-900 py-4 px-6">{{assignment.profession}}</td>
                        <td class="text-gray-900 py-4 px-6">{{assignment.t_phone}}</td>
                        <td scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-dark">{{assignment.first_name}} {{assignment.last_name}}</td>
                        <td class="text-gray-900 py-4 px-6">{{assignment.s_phone}}</td>
                        
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
            assignments:{}
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/assignments/' + this.$route.params.id);        
        this.assignments = res.data;
        console.log(this.assignments)
        console.log(this.assignments.id);
    },
    methods:{
        destroy(){
            console.log('Eliminar')
            if(confirm("Eliminar datos de la asignación")){
                const res = axios.delete('http://127.0.0.1:8000/api/assignments/' + this.$route.params.id);                
                console.log(res);
                window.location.assign('http://localhost:3000/assignments');               
            }
        }
    }
} 
</script>