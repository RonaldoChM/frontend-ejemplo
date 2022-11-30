<template>
    <div>
        <p>Estudiante: {{first_name}} {{last_name}}</p>
        <nuxt-link class="text-blue-600" :to="`/students/${id}/show`">Mostrar Estudiante</nuxt-link>
        <nuxt-link class="text-green-600" :to="`/students/${id}/edit`">Editar Estudiante</nuxt-link>
       <!--to="`/students/${id}/show`"-->
    </div>
</template>

<script>
export default{
    name: 'Student',
    props: ['id', 'first_name', 'last_name', 'age', 'cell_phone', 'address'],
}
</script>
