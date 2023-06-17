<script setup>
import TheWelcome from '../components/homeComponents/TheWelcome.vue';
import FilmGallary from '../components/homeComponents/FilmGallary.vue';
</script>

<template>
    <div>
        <KeepAlive>
            <TheWelcome />
        </KeepAlive>
        <FilmGallary />
    </div>
</template>

