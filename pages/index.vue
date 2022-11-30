<template>
  <div>
    <nuxt-link class="text-red-600" to="/students">Ver Estudiantes</nuxt-link>
    <nuxt-link class="text-red-600" to="/teachers">Ver Profesores</nuxt-link>
    <nuxt-link class="text-red-600" to="/grades">Ver Cursos</nuxt-link>
    <Tutorial/>
  </div>
  
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
