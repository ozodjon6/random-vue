const app = Vue.createApp({
    data() {
        return {
            firstName: 'Bek',
            lastName: 'Jumaev',
            email: 'ozodjon6@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            cell: '99897 135-14-00',
            city: 'Tashkent',
            country: 'Uzbekistan',
            age: 24
        }
    },
    methods: {
       async getUser() {
            const res = await fetch("https://randomuser.me/api");
            const { results } = await res.json();
            console.log(results);

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large,
            this.cell = results[0].cell
            this.city = results[0].location.city
            this.country = results[0].location.country  
            this.age = results[0].dob.age
        }
    },
}).mount('#app');