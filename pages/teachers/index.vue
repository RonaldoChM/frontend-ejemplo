<template>
    <!--['full_name','profession','grade_academy','cell_phone'];>-->
    <div>
        <h1 class="uppercase font-bold">Vista Profesores</h1>
        <nuxt-link class="text-red-600" to="/grades">Ver Cursos</nuxt-link>
        <nuxt-link class="text-blue-600" to="/students">Ver Estudiantes</nuxt-link>
        <nuxt-link class="text-orange-600" to="/assignments">Ver Asignaciones</nuxt-link>

        <nuxt-link class="text-green-600" to="/teachers/create">crear nuevo Profesor</nuxt-link>
        <Teacher 
            v-for="teacher of teachers"
            :key="teacher.id"
            :id="teacher.id"
            :full_name="teacher.full_name" 
            :profession="teacher.profession"
            :grade_academy="teacher.grade_academy"
            :cell_phone="teacher.cell_phone"
        />       
    </div>
</template>

<script>
import axios from 'axios';
import Teacher from '@/components/Teacher';
    export default{
        data(){
            return{
                teachers: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
            const res = await axios.get('http://ejemplo1.test/api/teachers');
            /* const res = await axios.get('http://127.0.0.1:8000/api/teachers'); */
            this.teachers = res.data;
            console.log(this.teachers);
        }
    }
</script>