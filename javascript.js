let app = new Vue({
  el: '#app',
  data: {
    loading: false,
    picture: ''
  },
  methods: {
    async getDog() {
      try {
        this.loading = true;
        const response = await axios.get('https://random.dog/woof.json');
        this.picture = response.data.url;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getCat() {
      try {
        this.loading = true;
        const response = await axios.get('https://aws.random.cat/meow');
        this.picture = response.data.file;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});