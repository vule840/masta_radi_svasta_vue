<template>
    <div id="goodcause">
        <Header />
        <div class="container mx-auto">
            <!-- Good cause-->
            <div class="flex mb-4 pb-8 pt-16">
                <div class="w-1/2 mx-auto text-center">
                    <h2 class="naslov">Good cause</h2>
                    <p class="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis dolor at sapien porta efficitur. Proin sagittis nisi erat, ut elementum leo fringilla a. Morbi vel dolor nec neque ullamcorper rhoncus.</p>
                </div>
            </div>
            <div class="flex mb-4 pb-32 pt-16">
                <div class="w-1/3 pr-12 mx-auto text-left">
                    <img class="object-contain w-full" src="@/assets/kakosludjelovati_curica.jpg">
                    <button class="plavi_gumb py-4 px-4 my-4 rounded ">Vote</button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="w-1/3 pr-12 mx-auto text-left">
                    <img class="object-contain w-full" src="@/assets/kakosludjelovati_curica.jpg">
                    <button class="plavi_gumb py-4 px-4 my-4 rounded ">Vote</button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="w-1/3 pr-12 mx-auto text-left">
                    <img class="object-contain w-full" src="@/assets/kakosludjelovati_curica.jpg">
                    <button class="plavi_gumb py-4 px-4 my-4 rounded ">Vote</button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <!--   Velika slika -->
        
         <div class="container mx-auto">
            <img class="object-contain w-full" src="@/assets/good_cause.jpg">
        </div>
        <!--   Tx ispod slike-->
        <div class="container mx-auto pt-10 pb-20 text-left">
            <p class="pb-8">Suspendisse quis nisi et elit posuere facilisis. </p>
            <p class="pb-8">Aliquam at accumsan metus. Mauris nibh enim, tempus sed nibh nec, imperdiet tincidunt justo. Aenean ac purus bibendum, facilisis lectus a, commodo sapien.</p>
            <p class="pb-8">Suspendisse pellentesque lorem non sollicitudin porta. Suspendisse quis nisi et elit posuere facilisis. Aliquam at accumsan metus. Mauris nibh enim, tempus sed nibh nec, imperdiet tincidunt justo.</p>
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