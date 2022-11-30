<template>
    <div>
        <p>Asignaciones: {{grade_id}} {{name}} - {{student_id}} {{first_name}} {{last_name}}</p>
        <!--<nuxt-link :to="`/students/${id}/show`">Mostrar Estudiante</nuxt-link>
        <nuxt-link :to="`/students/${id}/edit`">Editar Estudiante</nuxt-link>-->
       <!--to="`/students/${id}/show`"-->
    </div>
</template>

<script>
export default{
    name: 'GradeStudent',
    props: ['id', 'grade_id', 'student_id','name', 'first_name', 'last_name'],
}
</script>