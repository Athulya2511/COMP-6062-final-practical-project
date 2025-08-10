console.log('JS loaded!!!');

const app = Vue.createApp({
    data() {
        return {
            userprofile: '',
            weatherData: '',
            city: 'London',
            province: 'Ontario',
            country: 'Canada',
            dataWord :[],
            keyWord:'',
            word:'',
            phonetic:'',
            definition:''
        };
    },
    
    methods: {
        fetchRandomprofile() {
        
                fetch('https://comp6062.liamstewart.ca/random-user-data')
                .then(response => {
                    if (response.ok){
                    return response.json();
                    }
                    else {
                        console.log('An error occured. Please try again.');
                    }
                })
            
                .then(data => {
                    this.userprofile = data;
                })
                .catch(error => {
                    console.log(error);
                });
            },
            fetchWeather() {
                fetch('https://comp6062.liamstewart.ca/weather-data?city='+ this.city +'&province='+ this.province +'&country=' + this.country)
                .then(response => {
                    if (response.ok){
                    return response.json();
                    }
                    else {
                        console.log('An error occured. Please try again.');
                    }
                })
                .then(data => {
                this.weatherData = data;
                })
                .catch(error => {
                    console.log(error);
                });
            }, 
            fetchWordinput() {
            fetch('https://comp6062.liamstewart.ca/api/define?word=' + this.keyWord)
              
            .then(response => response.json())
            .then(data => {
                this.dataWord = data;
                
            })
            .catch(error => console.log(error));
        },
    }, 
    created() {
        this.fetchRandomprofile();
        this.fetchWeather(); 
    },
     
});
app.mount('#app');
