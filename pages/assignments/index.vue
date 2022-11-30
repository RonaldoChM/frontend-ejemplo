<template>
    <div>
        <h1 class="uppercase font-bold">Vista Asignaciones</h1>
        <nuxt-link class="text-red-600" to="/grades">Ver Cursos</nuxt-link>
        <nuxt-link class="text-blue-600" to="/teachers">Ver Profesores</nuxt-link>
        <nuxt-link class="text-green-600" to="/students">Ver Alumnos</nuxt-link>
        <Assignment 
            v-for="assignment of assignments"
            :key="assignment.id"
            :id="assignment.id"
            :grade_id="assignment.grade_id"
            :student_id="assignment.student_id"
            :name="assignment.name"       
            :first_name="assignment.first_name"   
            :last_name="assignment.last_name"  
        />       
       
    </div>
</template>

<script>
import axios from 'axios';
import Assignment from '../../components/Assignment.vue';
    export default{
        data(){
            return{
                assignments: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
            const res = await axios.get('http://127.0.0.1:8000/api/assignments');
            this.assignments = res.data;
            console.log(this.assignments);
        }
    } 
</script>