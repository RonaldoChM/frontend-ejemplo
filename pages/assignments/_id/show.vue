<template>
    <div>
        <h1>Datos de la asignación</h1>
        <nuxt-link class="text-blue-600" to="/assignments"> Lista de asignaciones </nuxt-link>
        
        <!---------------------->
        <div v-for="assignment in assignments">
            <br>
            <h3>Datos del Docente</h3>
            <p> Materia: {{assignment.name}} </p>
            <p> Docente: {{assignment.full_name}} </p>
            <p> Lic: {{assignment.profession}} </p>
            <p> Celular: {{assignment.t_phone}}</p>
            <hr><br>
            <h3>Datos del Alumno</h3>
            <p> Estudiante: {{assignment.first_name}} {{assignment.last_name}}</p>
            <p> Celular: {{assignment.s_phone}}</p>
         
        </div>
        <!---------------------->
        <button class="text-red-600" v-on:click="destroy" >Eliminar</button>
            
    </div>
</template>
<script>
 
import axios from "axios";
export default{
    data(){
        return{
            assignments:{}
        }
    },
    async created(){
        const res = await axios.get('http://127.0.0.1:8000/api/assignments/' + this.$route.params.id);        
        this.assignments = res.data;
        console.log(this.assignments)
        console.log(this.assignments.id);
    },
    methods:{
        destroy(){
            console.log('Eliminar')
            if(confirm("Eliminar datos de la asignación")){
                const res = axios.delete('http://127.0.0.1:8000/api/assignments/' + this.$route.params.id);                
                console.log(res);
                window.location.assign('http://localhost:3000/assignments');               
            }
        }
    }
} 
</script>