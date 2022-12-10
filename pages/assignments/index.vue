<template>
    <div>
        <h1 class="uppercase font-bold">Vista Asignaciones</h1>
        <nuxt-link class="text-red-600" to="/grades">Ver Cursos</nuxt-link>
        <nuxt-link class="text-blue-600" to="/teachers">Ver Profesores</nuxt-link>
        <nuxt-link class="text-green-600" to="/students">Ver Alumnos</nuxt-link>

        <nuxt-link class="text-orange-600" to="/assignments/create">Asiganar Clase</nuxt-link>

       <div class="filteredList">
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
        type="search"
        placeholder="Buscar Infomación..."
        v-model="searchData"
        v-on:keyup.enter="filteredList">

       </div>
       <div v-for="assignment in assignments">
            <p class="list">
                nombre: {{assignment.name}} - {{assignment.first_name}} {{assignment.last_name}}
                <nuxt-link class="text-blue-600" :to="`/assignments/${assignment.id}/show`">Ver</nuxt-link>                
                <nuxt-link class="text-green-600" :to="`/assignments/${assignment.id}/edit`">edit</nuxt-link>                
            </p>          
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