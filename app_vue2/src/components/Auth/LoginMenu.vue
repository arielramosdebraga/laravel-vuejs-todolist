<template>
    <div class="flex items-center justify-center mb-8">
        <RouterLink
          :to="{ name: 'login' }"
          class="px-2 py-2 border-b-2 mx-4 "
          :class="{ 'border-blue-500 text-gray-500': $route.name === 'login'}"
          >
          <!-- 'border-gray-800 text-gray-600' -->
          Login
        </RouterLink>

        <RouterLink
          :to="{ name: 'register' }"
          class="px-2 py-2 border-b-2 mx-4"
          :class="{ 'border-gray-800 text-gray-600': $route.name === 'register' }"
          >
          <!-- 'border-gray-800 text-gray-600' -->
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