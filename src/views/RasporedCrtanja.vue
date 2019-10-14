<template>
    <div id="rasporedcrtanja">
        <Header />
        <div class="container mx-auto">
            <!-- Good cause-->
            <div class="flex mb-4 pb-8 pt-16">
                <div class="w-1/2 mx-auto text-center">
                    <h2 class="naslov">Raspored glasanja</h2>
                </div>
            </div>
            <!-- Prvi -->
            <h2 class="naslov text-left">Crtanje u IKEA restoranu</h2>
            <hr>
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                    <p>sdfsdf</p>
                </div>
                <div class="w-1/2 text-right">
                    <p>sdfsdf</p>
                </div>
            </div>
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                    <p>sdfsdf</p>
                </div>
                <div class="w-1/2 text-right">
                    <p>sdfsdf</p>
                </div>
            </div>
            <!-- Drugi -->
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                     <h2 class="naslov text-left">Crtanje i predaja gotovih crteža u  Småland igraonici (10. - 18. studeni)</h2>
                </div>
                
            </div>  
           
            <hr>
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                    <p>sdfsdf</p>
                </div>
                <div class="w-1/2 text-right">
                    <p>sdfsdf</p>
                </div>
            </div>
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                    <p>sdfsdf</p>
                </div>
                <div class="w-1/2 text-right">
                    <p>sdfsdf</p>
                </div>
            </div>

            <!-- Treci -->
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                     <h2 class="naslov text-left">Crtanje kod kuće</h2>
                </div>
                
            </div>  
           
            <hr>
            <div class="flex mb-4">
                <div class="w-1/2 text-left">
                    <p>Ukoliko vaše djete ne crta u IKEA prostorima ne zaboravite ispuniti obrazac za prijavu! </p>
                    <button class="zuti_gumb py-4 px-4 rounded ">
                    Preuzmi obrazac za prijavu
                </button>
                </div>
                
            </div>
           

        </div>
        <Footer />
    </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import KakoSudjelovatiContent from '@/components/KakoSudjelovatiContent.vue'

export default {
    name: 'rasporedcrtanja',
    components: {
        Header,
        Footer

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>