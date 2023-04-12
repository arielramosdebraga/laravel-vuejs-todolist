<template>
    <div class="w-full sm:w-1/2 xlg:w-1/3 mx-auto">
        <h3 class="py-2 mb-8 text-gray-400 text-lg font-medium text-left">
            Meu perfil
        </h3>
        <div class="flex items-center justify-between mb-8">
            
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div>
                <label
                    for="firstName"
                    class="block text-sm text-gray-400 font-medium mb-2"
                >
                    Nome
                </label>
                <input
                    v-model="firstName"
                    id="firstName"
                    type="text"
                    placeholder="Digite seu nome"
                    class="w-full bg-gray-900 placeholder-gray-700 text-gray-100 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm leading-5 p-2"
                >
            </div>
            <div>
                <label
                    for="lastName"
                    class="block text-sm text-gray-400 font-medium mb-2"
                >
                    Sobrenome
                </label>
                <input
                    v-model="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Digite seu sobrenome"
                    class="w-full bg-gray-900 placeholder-gray-700 text-gray-100 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm leading-5 p-2"
                >
            </div>
            <div>
                <label
                    for="email"
                    class="block text-sm text-gray-400 font-medium mb-2"
                >
                    E-mail
                </label>
                <input
                    v-model="email"
                    id="email"
                    type="text"
                    placeholder="Digite seu e-mail"
                    class="w-full bg-gray-900 placeholder-gray-700 text-gray-100 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm leading-5 p-2"
                >
            </div>
            <div>
                <label
                    for="password"
                    class="block text-sm text-gray-400 font-medium mb-2"
                >
                    Senha
                </label>
                <input
                    v-model="password"
                    id="password"
                    type="text"
                    placeholder="Digite sua senha"
                    class="w-full bg-gray-900 placeholder-gray-700 text-gray-100 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm leading-5 p-2"
                >
            </div>
        </div>

        <div class="col-span-2 text-right"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'ProfileView',

        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            };
        },

        computed: {
            ...mapState({
                user: state => state.user.use,
            }),
        },

        created() {
            this.firstName = this.user.first_name;
            this.lastName = this.user.last_name;
            this.email = this.user.email;
        },

        methods: {},
    };
</script>