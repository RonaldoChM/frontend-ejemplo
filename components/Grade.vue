<template>
    <!--['name','level','hours','teacher_id']-->
    <div>
        <p>Curso: {{id}} {{name}} - {{level}}, {{full_name}}</p>
        <nuxt-link class="text-blue-600" :to="`/grades/${id}/show`">Mostrar Curso</nuxt-link>
        <nuxt-link class="text-green-600" :to="`/grades/${id}/edit`">Editar Curso</nuxt-link>
  
    </div>
</template>

<script>
export default{
    name: 'Grade',
    props: ['id', 'name', 'level', 'hours', 'full_name'],
}
</script>

<style>

</style>