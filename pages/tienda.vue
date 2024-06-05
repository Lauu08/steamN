<template>
    <main>
        <div data-aos="fade-up" data-aos-duration="2000">
            <HeroSection />
            <div class="text_bienv">
                <h1>Bienvenid@ a la Comunida de Steam</h1>
            </div>
            <section class="banner">
                <div class="banner-images">
                    <img src="/promo01.png" alt="promo 1">
                    <div class="image-space"></div>
                    <img src="/promo02.png" alt="promo 2">
                </div>
            </section>
            <CategorySectionJuegosOferta/>
            <CategorySectionJuegosMasVendidos/>
            <CategorySectionJuegosGratuitos/>
            <CategorySectionJuegosTransmitidos/>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>
main {
    padding: 0px;
    position: relative;
    z-index: 1;
}
.text_bienv h1 {
    font-size: 45px;
    font-weight: bold;
    color: #2B2B2B;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    font-family: Cairo;
}
.banner {
    width: 100%;
    overflow: hidden;
}
.banner-images {
    display: flex;
    width: 100%;
}
.banner-images img {
    flex: 1;
    width: 100%;
    height: auto;
}
.image-space {
    width: 20px;
}
@media (max-width: 658px) {
    .text_bienv h1 {
    font-size: 20px;
    font-weight: bold;
    color: #2B2B2B;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    font-family: Cairo;
}
}
</style>
