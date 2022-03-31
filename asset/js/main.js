var app = new Vue({
    el: '#root',
    data: {
        image: [
            'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        ],
        index: 0,

    },

    methods: {   
        nextImage: function(){
            if( this.index < this.image.length -1 ){
                this.index +=1
            } else{
                this.index = 0
            }
        },
        prevImage: function(){
            if( this.index < this.image.length ){
                this.index -= 1
            }
        }
    }
})