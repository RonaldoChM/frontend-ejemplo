<template>
    <div>
        <h1>ver estudiante</h1>
        <nuxt-link class="text-red-600" to="/students">Signar Materia</nuxt-link>
        <div>
            <h2>{{student.first_name}} {{student.last_name}}</h2>
            <p>Edad: {{student.age}}</p>
            <p>Celular: {{student.cell_phone}}</p>
            <p>Dirección: {{student.address}}</p>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default{
    data(){
        return{
            student:{}
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/students/' + this.$route.params.id);
        this.student = res.data;
    }
} 
</script>