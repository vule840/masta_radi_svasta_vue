<template>
    <div id="kakosudjelovati">
        <Header />
        <div class="container kakosudjelovati_content mx-auto">
        <!-- Kako sudjelovati-->
        <div class="flex mb-4 py-5">
            <div class="w-1/2 mx-auto text-center">
                <h2>Kako sudjelovati</h2>
            </div>
        </div>
        <!--  1 -->
        <div class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-2/3 order-2 sm:order-1 mx-auto flex text-left">
                <div class="veliki_brojevi">1</div>
                <section class="w-5/6">
                    Prema rasporedu, djeca do 12 godina crtat će svoju igračku iz snova u robnoj kući IKEA. Kako bi igračka bila baš onakvom kakvom je zamišljaju, djeca će se moći poslužiti olovkama, bojicama i flomasterima. Svoj crtež mogu napraviti i kod kuće te ga donijeti u igraonicu Småland.
                </section>
            </div>
            <div class="w-full sm:w-1/3 order-1 px-3 sm:order-2 mx-auto text-center">
                <img class="max-w-full" src="@/assets/kakosludjelovati_curica.jpg">
            </div>
        </div>
        <!--  2 -->
        <div class="flex">
            <div class="w-4/5 ml-auto flex text-left">
                <div class="veliki_brojevi ">2</div>
                <section class="w-5/6">
                    Roditelje, bake, djedove i ostale skrbnike molimo da ispune obrazac za prijavu, svojim potpisom prihvate uvjete sudjelovanja i nama ga predaju zajedno s crtežom. <br>
                    <button class="zuti_gumb py-4 px-4 rounded ">
                        Preuzmi obrazac za prijavu
                    </button>
                </section>
            </div>
        </div>
        <!-- 3 -->
        <div class="flex">
             
            <div class="w-2/3 mx-auto flex text-left">
                <div class="veliki_brojevi ">3</div>
               
                <section class="w-5/6">
                    Svi će crteži biti objavljeni na lokalnoj internetskoj stranici. Zbog Zakona o zaštiti osobnih podataka, crteži će sadržavati samo ime natjecatelja/ica. IKEA FAMILY članovi bit će obaviješteni o početku online glasovanja putem e-pošte. Svaki će član moći glasovati samo jednom.
                </section>
            </div>
            <div class="w-1/3 px-3 mx-auto text-center">
                    <img src="@/assets/kakosudjelovati_curica2.jpg">
                </div>
        </div>
        <!--  4 -->
        <div class="flex">
            <div class="w-4/5 mx-auto flex text-left">
                <div class="veliki_brojevi ">4</div>
                <section class="w-5/6">
                    U svakoj će zemlji 50 crteža s najviše glasova ući u finale.
                    Najboljih 15 crteža iz svake zemlje poslat će se u Švedsku, gdje će posebni IKEA žiri do prve polovice siječnja odabrati i objaviti 6 međunarodnih pobjednika čiji će crteži biti pretvoreni u plišane igračke. One će se u ograničenim količinama početi prodavati u jesen 2019. u robnim kućama IKEA diljem svijeta.
                </section>
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
    name: 'home',
    components: {
        Header,
        Footer
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>