<template>
    <header class="header">
        <div class="nav_kakosudjelovati">
            <div class="container mx-auto">
                <nav class="flex items-center justify-between flex-wrap p-8">
                    <div class="flex items-left text-white mr-6">
                        <img src="@/assets/Home_icon.svg">
                    </div>
                    <div class="flex items-center text-white mr-6">
                        <img src="@/assets/Ikea_logo.svg">
                    </div>
                    <!--  <div class="flex items-right text-white mr-6">
                    <img src="@/assets/Hamburger.svg">
                </div> -->
                <!-- HAMBURGER -->
                    <tasty-burger-button :type="buttonType" :active="isActive" :size="size" :color="color" :active-color="activeColor" />
                </nav>
            </div>
        </div>

      <!--   NAV LINKS -->
      <!--   <transition name="fade">
            <div v-if="isActive = !isActive" class="linkHolderMobile">
                <div class="navWrapper">
                    <div class="linkHolder">
                   
                        <ul class="links">
                            <li>
                                <router-link to="/kategorije"><span>Kategorije</span></router-link>
                            </li>
                            <li>
                                <router-link to="/kako-sudjelovati"><span>Kako sudjelovati?</span></router-link>
                            </li>
                            <li>
                                <router-link to="/cesta-pitanja"><span>Česta pitanja</span></router-link>
                            </li>
                            <li><a v-b-modal.modal-multi-11 href="#"><span>Registirajte se</span></a></li>
                            <li><a v-b-modal.modal-multi-14 href="#"><span>Ponude</span></a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </transition> -->
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        msg: String
    },
    data() {
        return {
            buttonType: 'collapse',
            isActive: false,
            size: 'md',
            color: 'black',
            activeColor: 'black'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>