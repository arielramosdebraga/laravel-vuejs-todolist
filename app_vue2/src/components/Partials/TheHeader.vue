<template>
    <div class="flex items-center justify-between h-13 bg-gray-900 px-5">
        <div class="flex items-center"></div>
        <div class="flex items-center">
          <Dropdown
            naked
            no-padding
            text="Ariel"
            class="text-gray-500 bg-gray-900"
          >
            <template v-slot:button-content>
              {{ user.first_name }}
            </template>
            <DropdownItem :to="{ name: 'profile' }">
              Meu Perfil
            </DropdownItem>
            <DropdownItem :to="{ name: 'logout' }">
              Logout
            </DropdownItem>
          </Dropdown>
        </div>
    </div>
  </template>
  
  <script>
  import Dropdown from '@/components/Utils/Dropdown.vue';
  import DropdownItem from '@/components/Utils/DropdownItem.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'TheHeader',

    components: {
      Dropdown,
      DropdownItem,
    },

    computed: {
        ...mapState({
            user: state => state.user.use,
        }),
    },

    props: {
      msg: String
    }
  }
  </script>