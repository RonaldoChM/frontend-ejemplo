<template>
    <div>
        <h1>ver Cursos</h1>
        <div>
            <h2>{{grade.name}} {{grade.id}}</h2>
            <p>Nivel: {{grade.level}}</p>
            <p>Horas: {{grade.hours}}</p>
            <p>Docente: {{grade.teacher_id}}</p>
            <p>Docente N: {{grade.full_name}}</p>
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
    }
} 
</script>