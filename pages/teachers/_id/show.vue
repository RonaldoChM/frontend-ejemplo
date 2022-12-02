<template>
    <div>
        <h1>ver Profesores</h1>
        <nuxt-link class="text-blue-600" to="/teachers"> Listar Profesores</nuxt-link>
        <div>            
            <h2>{{teacher.full_name}} {{teacher.profession}}</h2>
            <p>Edad: {{teacher.grade_academy}}</p>
            <p>Celular: {{teacher.cell_phone}}</p>                   
        </div>
        <button class="text-red-600" v-on:click="destroy" >Eliminar profesor</button>
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