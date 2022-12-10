<template>
    <div>
        <h1>ver estudiante</h1>
        <nuxt-link class="text-green-600" to="/students">Listar estudiantes</nuxt-link>
        <div>
            <h2>{{student.first_name}} {{student.last_name}}</h2>
            <p>Edad: {{student.age}}</p>
            <p>Celular: {{student.cell_phone}}</p>
            <p>Dirección: {{student.address}}</p>
        </div>
        <button class="text-red-600" v-on:click="destroy">Eliminar estudiante</button>
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
    },
    methods:{
        destroy(){
            console.log('Eliminar')
            if(confirm("Desea eliminar al estudiante ' " + this.student.first_name + " " + this.student.last_name + " '")){
                const res = axios.delete('http://127.0.0.1:8000/api/students/' + this.$route.params.id);
                console.log(res.data);
                window.location.assign('http://localhost:3000/students');
            }
        }
    }
    
} 
</script>