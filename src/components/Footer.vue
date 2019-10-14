<template>

  <div class="footer-container">
        <footer class="wrapper flex justify-between container mx-auto pb-8">
            <ul class="text-left">
                <li><a href="#">Naslovnica</a></li>
                <li><a href="/kako-sudjelovati.html">Kako sudjelovati</a></li>
                <li><a href="#">Glasaj za svog favorita</a></li>
                <li><a href="/good-cause.html">Good cause glasanje</a></li>
                <li><a href="#">Raspored crtanja</a></li>
                <li><a href="#">Nagrade</a></li>
                <li><a href="#">Pravila</a></li>
                <li><a href="#">Objava dobitnika </a></li>
            </ul>
            <div class="flex self-end text-white mr-6 doodle">
                    <img src="@/assets/doodle.svg">
                </div>
        </footer>
        <div class="cookies">
            <div class="container  mx-auto flex justify-between py-4">
                <div class="flex items-left text-white mr-6 ikea-logo">
                    <img src="@/assets/Ikea_logo.svg">
                </div>
                <div class="flex flex-col items-center  mr-6">
                    <div>
                        <a class="px-1" href="#">Postavke kolačića</a> <a class="px-1" href="#">Uslovi učešća</a> <a class="px-1" href="#">izbriši svoj glas</a>
                    </div>
                    <div>
                        IKEA Systems B.V 2019.
                    </div>
                </div>
                <div class="flex   text-white mr-6 doodle">
                    1
                </div>
                
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // FOOTER
.footer-container{
    // position: fixed;
 //    bottom: 0px;
 color:black;
 padding-top: 3rem;
    width: 100%;
    
    ul{
        a{
            text-decoration:underline;
            &:hover{
                font-weight: bold;
            }
            &:active{
                font-weight: bold;
            }
        }
    }
    .cookies{
        background: white;
        a{
            text-decoration:underline;
        }
    }
    .ikea-logo{
        position: relative;
            top: -44px;
    }
    // .doodle{
    //  position: relative;
 //     top: -113px;
    // }
    

    
}
</style>
