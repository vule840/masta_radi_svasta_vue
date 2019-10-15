<template>
    <div id="nagrade">
        <Header />
         <div class="container mx-auto">
        <!-- Lets play-->
        <div class="flex mb-4 pb-8 pt-16">
            <div class="w-1/2 mx-auto text-center">
                <h2 class="naslov">Nagrade</h2>
                <p>Svim učesnicima takmičenja biće uručena diploma.</p>
                <p>Svaki od 15 finalista će primiti nagradu tokom proslave/PR događaja u robnoj kući. Svih 6 međunarodnih pobednika će dobiti svoj primerak plišane igračke izrađene prema crtežu koji su napravili.</p>
            </div>
        </div>
        <!-- Gumbi -->
      <!--   <div class="flex">
            <div class="w-1/2 mx-auto text-center">
                <button class="zuti_gumb py-4 px-4 rounded ">
                    Glasaj za svog favorita
                </button><br>
                <button class="plavi_gumb py-4 px-4 rounded ">Kako sudjelovati?</button>
            </div>
        </div> -->
    </div>
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import HomeContent from '@/components/HomeContent.vue'

export default {
    name: 'nagrade',
    components: {
        Header,
        Footer,
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>