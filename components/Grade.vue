<template>
    <!--['name','level','hours','teacher_id']-->
    <div>
        <!-- <p>Curso: {{id}} {{name}} - {{level}}, {{full_name}}</p> -->
        <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/grades/${id}/show`">Ver</nuxt-link>
        <nuxt-link class="rounded-r inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" :to="`/grades/${id}/edit`">Editar</nuxt-link>
  
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