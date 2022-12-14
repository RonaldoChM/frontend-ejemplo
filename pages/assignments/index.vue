<template>
    <div>
        <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Vista Asignaciones</h1>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/grades">Ver Cursos</nuxt-link>
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/teachers">Ver Profesores</nuxt-link>
                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/students">Ver Alumnos</nuxt-link>

                <nuxt-link class="rounded-l px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight
                    uppercase
                    hover:bg-blue-700
                    focus:bg-blue-700 focus:outline-none focus:ring-0
                    active:bg-blue-800
                    transition
                    duration-150
                    ease-in-out" to="/assignments/create">Asiganar Clase</nuxt-link>
            </div>
        </div>
       <div class="filteredList">
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
        type="search"
        placeholder="Buscar Infomación..."
        v-model="searchData"
        v-on:keyup.enter="filteredList">

       </div>
       <!-- <div v-for="assignment in assignments">
            <p class="list">
                nombre: {{assignment.name}} - {{assignment.first_name}} {{assignment.last_name}}
                <nuxt-link class="text-blue-600" :to="`/assignments/${assignment.id}/show`">Ver</nuxt-link>                
                <nuxt-link class="text-green-600" :to="`/assignments/${assignment.id}/edit`">edit</nuxt-link>                
            </p>          
        </div> -->
        <!----------------------------------------->
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-white border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Materia</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nombre de Estudiante</th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Apellidos de Estudiante</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="assignment of assignments" :key="assignment.id" :id="assignment.id"
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{assignment.name}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{assignment.first_name}}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{assignment.last_name}}</td>
                                
                                <td>
                                    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="toolbar">
                                        <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">                                            
                                            <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/assignments/${assignment.id}/show`">Ver</nuxt-link>                
                                            <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/assignments/${assignment.id}/edit`">edit</nuxt-link>
                                        </div>
                                    </div>                                                                        
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>

import axios from 'axios';
import {Assignment} from '../../components/Assignment.vue';
    export default{
        data(){
            return{
                assignments: [],
                search:[],
                searchData: ''                
            }
        },
        async created(){
            const res = await axios.get('http://127.0.0.1:8000/api/assignments');
            this.assignments = res.data;
            this.search =this.assignments;
            console.log(this.assignments);
        },
        methods:{
            filteredList(){
                console.log("--------------------")
                if(this.searchData == ''){
                    this.assignments =this.search;
                }else{
                    this.assignments = this.search.filter(assignment => 
                    assignment.name.toLowerCase().replace(/\s+/g, '') === this.searchData.toLowerCase().replace(/\s+/g, '')
                    || assignment.first_name.toLowerCase().replace(/\s+/g, '') === this.searchData.toLowerCase().replace(/\s+/g, '')
                    || assignment.last_name.toLowerCase().replace(/\s+/g, '') === this.searchData.toLowerCase().replace(/\s+/g, '')
                    || (assignment.first_name.toLowerCase()+assignment.last_name.toLowerCase()).replace(/\s+/g, '') === this.searchData.toLowerCase().replace(/\s+/g, '')  
                    );
                    return this.assignments
                }
                
            },
                
        }
        
    } 
    
</script>