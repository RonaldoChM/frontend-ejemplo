<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">ver Profesores</h1>
        <div class="flex items-center justify-start">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link  class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/teachers"> Listar Profesores</nuxt-link>
            </div>
        </div>
        <div class="overflow-x-auto relative">            
            <h2>{{teacher.full_name}} {{teacher.profession}}</h2>
            <p>Edad: {{teacher.grade_academy}}</p>
            <p>Celular: {{teacher.cell_phone}}</p>    
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-900 uppercase bg-gray-100 dark:bg-gray-100 dark:text-gray-900">
                    <tr>
                        <th scope="col" class="py-3 px-6">Nombre Completo</th>
                        <th scope="col" class="py-3 px-6">Profesion</th>
                        <th scope="col" class="py-3 px-6">Grado academico</th>
                        <th scope="col" class="py-3 px-6">Celular</th>
                        <th scope="col" class="py-3 px-6">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-300 dark:border-gray-300">
                        <td scope="row" class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-dark">{{teacher.full_name}}</td>
                        <td class="text-gray-900 py-4 px-6">{{teacher.profession}}</td>
                        <td class="text-gray-900 py-4 px-6">{{teacher.grade_academy}}</td>
                        <td class="text-gray-900 py-4 px-6">{{teacher.cell_phone}}</td>
                        <td> 
                            <button class="rounded-r inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" v-on:click="destroy" >Eliminar profesor</button>
                        </td>
                    </tr>
                </tbody>
            </table>               
        </div>
        
    </div>
</template>

<script>

import axios from "axios";
export default{
    data(){
        return{
            teacher:{}
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/teachers/' + this.$route.params.id);
        this.teacher = res.data;
    },
    methods:{
        destroy(){
            console.log('Eliminar')
            if(confirm("Desea eliminar al Profesor ")){
                const res = axios.delete('http://127.0.0.1:8000/api/teachers/' + this.$route.params.id);                
                console.log(res);
                window.location.assign('http://localhost:3000/teachers');               
            }
        }
    }
} 
</script>