<script setup>
import { ref, onMounted } from 'vue';

const cartItemsCount = ref(10) 

const redirectTo = (route) => { 
    window.location.href = `./${route}`
};

</script>

<template>
    <div class="header">
        <div @click="redirectTo('')"><i class="fa-solid fa-house"></i></div>
    </div>

    <div class="box">
        <div class="inner">        
            <h2>Cart ({{ cartItemsCount }})</h2>
            <div class="products">
                <div v-for="x in cartItemsCount" class="item">
                    <img src="https://www.darello.com/web/image/product.template/7823/image_256" draggable="false">
                    <p>Nutella</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .inner {
        color: grey;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .products {
        display: grid;
        gap: 2vh;
        grid-template-columns: 1fr 1fr;
        width: 80%;
        height: 75%;
        padding: 2vh;
        background-color: rgba(192, 192, 192, 0.724);
        border-radius: 2vh;
        overflow-y: auto;
    }

    .products > .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(142, 142, 142, 0.724);
        color: white;
        border-radius: 2vh;
        text-align: center;
        min-height: 20vh;
    }

    .products > .item > img {
        max-height: 60%;
        max-width: 80%;
        border-radius: 2vh;
    }

    .products > .item:hover {
        background-color: rgba(214, 214, 214, 0.724);
        box-shadow: 5px 5px  5px rgba(142, 142, 142, 0.724);
    }
</style>