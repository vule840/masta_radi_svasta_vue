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
                <div class="flex items-right text-white mr-6">
                    <img src="@/assets/Hamburger.svg">
                </div>
            </nav>
        </div>
    </div>
</header>
  
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
