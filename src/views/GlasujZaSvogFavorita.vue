<template>
    <div id="glasujzafavorita">
        <Header />
        <div class="container mx-auto">
            <!-- Good cause-->
            <div class="flex mb-4 pb-8 pt-16">
                <div class="w-1/2 mx-auto text-center">
                    <h2 class="naslov">Glasaj za svog favorita</h2>
                </div>
            </div>
            <div class="flex flex-wrap mb-4 pb-32 pt-16">
                <div v-for="(favorit, index) in favoriti" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pr-12 mx-auto ">
                    <img :src="favorit.imageName" class="object-contain w-full">
                    <div class="flex">
                        <div class="w-1/2 text-left imeslike">{{favorit.imeSlike}}</div>
                        <div class="w-1/2 text-right glasovi">{{favorit.brojGlasova}}</div>
                    </div>
                    <div class="flex">
                        <div class="w-1/2 text-left autor">{{favorit.autor}}</div>
                    </div>
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

    },
    data() {
        return {
            favoriti: [{
                    imeSlike: "Smještaj",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 1,
                    catIDname: 'smjestaj',
                    brojGlasova: 2111,
                    autor: 'Goran K.'

                },
                {
                    imeSlike: "Eno-gastro ponuda",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 2,
                    catIDname: 'hrana',
                    brojGlasova: 2111,
                    autor: 'Goran K.'

                },
                {
                    imeSlike: "Kulturne atrakcije i događanja",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 3,
                    catIDname: 'kultura',
                    brojGlasova: 2111,
                    autor: 'Goran K.'

                },
                {
                    imeSlike: "Aktivni odmor i događanja",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 4,
                    catIDname: 'aktivni',
                    brojGlasova: 2111,
                    autor: 'Goran K.'
                },
                {
                    imeSlike: "Prirodne atrakcije",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 5,
                    catIDname: 'priroda',
                    brojGlasova: 2111,
                    autor: 'Goran K.'
                },
                {
                    imeSlike: "Wellness i zdravlje",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 6,
                    catIDname: 'zdravlje',
                    brojGlasova: 2111,
                    autor: 'Goran K.'
                },
                {
                    imeSlike: "Nautika",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 7,
                    brojGlasova: 2111,
                    autor: 'Goran K.'
                },
                {
                    imeSlike: "Izleti",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 8,
                    brojGlasova: 2111,
                    autor: 'Goran K.'
                },
                {
                    imeSlike: "Prijevoz",
                    imageName: require("@/assets/slika-favorita.png"),
                    catID: 9,
                    brojGlasova: 2111,
                    autor: 'Goran K.'
                }



            ]
        };
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>