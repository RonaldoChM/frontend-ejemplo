<template>
    <div>
        <h1>ver Profesores</h1>
        <div>
            <h2>{{teacher.full_name}} {{teacher.profession}}</h2>
            <p>Edad: {{teacher.grade_academy}}</p>
            <p>Celular: {{teacher.cell_phone}}</p>

        </div>
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
    }
} 
</script>