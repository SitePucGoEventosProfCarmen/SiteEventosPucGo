<template>
  <v-layout row wrap class="jcecec-slider">
    <v-flex xs12>
      <v-carousel hide-delimiters height="500px" :interval="3000">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          hide-controls
          cover
        >
          <v-container fill-height>
            <v-layout align-center fill-height justify-center>
              
             
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class Carousel extends Vue {
  private items: any

  constructor() {
    super()

    this.items = [
      {
        src: '/assets/img/carrossel/3.jpeg'
      }
    ]
      
    this.carregar();
    
  
  }

  carregar() {
    Axios.head('/assets/img/carrossel/1.png')
    .then(res => {
      if (res.status === 200)
        console.log('sucesso!');
    })
    .catch(error => {
      console.error(error);
    })
  }

}
</script>

<style scoped>


.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: flex-start;
  width: 7rem;
  margin-right: 0rem;
  margin-left: 2rem;
}

.banner {
  display: flex;
  opacity: 0.8;
  background-color: white;
  color: #fff;
  position: relative;
  padding: 3rem 3rem 3rem 4rem;
}

@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px;
  }
}

.banner span {
  text-align: center;
}

#description {
  letter-spacing:
}

.jcecec {
  text-transform: uppercase;
  font-size: 5em;
  font-weight: 300;
}

.jcecec-sub {
  font-size: 0.9em;
}

#logo {
  width: 10rem;
  height: 6rem;
  position:relative;
  right: 1rem;
}

#cienciaemcasa {
  width: 8rem;
}

hr {
  border: 1px solid black;
}

.date {
  font-weight: bold;
}

span {
  color: black;
  font-weight: normal;
}

@media only screen and (max-width: 760px) {
  /*
  .jcecec-slider {
    display: none;
  }
  */
}
</style>
