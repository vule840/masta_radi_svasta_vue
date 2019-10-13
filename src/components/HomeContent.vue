<template>

     <div class="container mx-auto">
        <!-- Lets play-->
        <div class="flex mb-4 py-5">
            <div class="w-1/2 mx-auto text-center">
                <h2>Let’s play!</h2>
                <p>Raise awareness of the importance of play for all – for both children and adults – for them to play more.</p>
            </div>
        </div>
        <!-- Gumbi -->
        <div class="flex">
            <div class="w-1/2 mx-auto text-center">
                <button class="zuti_gumb py-4 px-4 rounded ">
                    Glasaj za svog favorita
                </button><br>
                <button class="plavi_gumb py-4 px-4 rounded ">Kako sudjelovati?</button>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../style/_variables.scss";

// https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/

// https://madewithvuejs.com/vue-tasty-burgers
// $sivatx: #333333;
// $zuta: #F9D616;
// $plava: #0051BA;
// $zelena: #37B99B;
// $svijetlo_zuta: #FFF9C5;
//     // Gumbi
// .zuti_gumb{
//         background: $zuta;
//         color: $sivatx;
//         width: 230px;
//     }
//     .plavi_gumb{
//         background: $plava;
//         color: white;
//         width: 230px;
//     }
//      h2{
//         color: $sivatx;
//         font-size: 2rem;
//         font-weight: bold;
//   }
</style>
