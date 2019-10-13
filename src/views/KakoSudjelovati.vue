<template>
    <div id="kakosudjelovati">
        <Header />
        <KakoSudjelovatiContent/>
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import KakoSudjelovatiContent from '@/components/KakoSudjelovatiContent.vue'

export default {
    name: 'home',
    components: {
        Header,
        Footer,
        KakoSudjelovatiContent
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$sivatx: #333333;
$zuta: #F9D616;
$plava: #0051BA;
$zelena: #37B99B;
$svijetlo_zuta: #FFF9C5;
// HOME

#kakosudjelovati{
    // height: 100vh;
    background: $zelena;
   
    background-image: url( '../assets/bg_kakosudjelovati.svg');
  background-position: center -600px;
  background-repeat: no-repeat;
  background-size:  cover;
 
 
  .veliki_brojevi{
    font-size: 13rem;
    color: $svijetlo_zuta;
  }
}

</style>