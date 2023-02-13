<template>
    <div class="flex items-center justify-center mb-8">
        <RouterLink
          :to="{ name: 'login' }"
          class="px-2 py-2 border-b-2 mx-4 "
          :class="{ 'border-blue-500 text-gray-500': $route.name === 'login' }"
          >
          Login
        </RouterLink>

        <RouterLink
          :to="{ name: 'register' }"
          class="px-2 py-2 border-b-2 mx-4"
          :class="{ 'border-blue-500 text-gray-500': $route.name === 'register' }"
          >
          Registrar
        </RouterLink>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginMenu',
    props: {
      msg: String
    }
  }
  </script>