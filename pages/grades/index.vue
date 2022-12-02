<template>
    <div>
        <!--['name','level','hours','teacher_id']-->
        <h1 class="uppercase font-bold">Vista Cursos</h1>
        <nuxt-link class="text-red-600" to="/students">Ver Estudiantes</nuxt-link>
        <nuxt-link class="text-blue-600" to="/teachers">Ver Profesores</nuxt-link>

        <nuxt-link class="text-green-600" to="/grades/create">crear nuevo Curso</nuxt-link>
        <Grade 
            v-for="grade of grades"
            :key="grade.id"
            :id="grade.id"
            :name="grade.name"
            :level="grade.level"
            :hours="grade.hours"
            :full_name="grade.full_name"    
           
        />  
    </div>
</template>

<script>
import axios from 'axios';
import Grade from '../../components/Grade.vue';
    export default{
        data(){
            return{
                grades: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
            const res = await axios.get('http://127.0.0.1:8000/api/grades');
            this.grades = res.data;
            console.log(this.grades);
        }
    } 
</script>