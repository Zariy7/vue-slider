let { createApp } = Vue;

createApp({
    data() {
      return {
        cycle: null,
        cycleSet: false,
        imageIndex: 0,
        slides: [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
      }
    },
    created(){
        this.startCycle();
    },
    methods: {
        prevSlide(){
            this.imageIndex--;
            if(this.imageIndex<0){
                this.imageIndex+=this.slides.length;
            }
            //console.log(`${this.slides[this.imageIndex].image}`);
        },
        nextSlide(){
            this.imageIndex++;
            if(this.imageIndex>this.slides.length-1){
                this.imageIndex-=this.slides.length;
            }
            //console.log(`${this.slides[this.imageIndex].image}`);
        },
        changeIndex(num){
            this.imageIndex = num;
        },
        startCycle(){
            if(!this.cycleSet){
                this.cycle = setInterval(() => {
                    this.nextSlide();
                }, 3000);
                this.cycleSet = true;
            }
        },
        stopCycle(){
            clearInterval(this.cycle);
            this.cycleSet = false;
        },
        backCycle(){
            if(!this.cycleSet){
                this.cycle = setInterval(() => {
                    this.prevSlide();
                }, 3000);
                this.cycleSet = true;
            }
        },
    }
}).mount('#app');