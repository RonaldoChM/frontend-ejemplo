<template>
    <div>
        <h1 class="uppercase font-bold">Vista Estudiante</h1>
        <nuxt-link class="text-red-600" to="/grades">Ver Cursos</nuxt-link>
        <nuxt-link class="text-blue-600" to="/teachers">Ver Profesores</nuxt-link>
        <nuxt-link class="text-green-600" to="/students/create">crear nuevo estudiante</nuxt-link>
        <Student 
            v-for="student of students"
            :key="student.id"
            :id="student.id"
            :first_name="student.first_name"
            :last_name="student.last_name"
            :age="student.age"
            :cell_phone="student.cell_phone"
            :address="student.address"
        />       
       
    </div>
</template>

<script>
import axios from 'axios';
import Student from '../../components/Student.vue';
    export default{
        data(){
            return{
                students: ['estudiante uno','estudiante dos', 'estudiante tres']
            }
        },
        async created(){
            const res = await axios.get('http://127.0.0.1:8000/api/students');
            this.students = res.data;
            console.log(this.students);
        }
    } 
</script>