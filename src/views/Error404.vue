<template>
    <div class="contents">
        <div class="error-wrapper">
            <h1 class="bold-error-code">404</h1>
            <span>Page not found</span>
            <p>
                <router-link to="/" class="active-link">Go Home</router-link>
            </p>
        </div>
     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contents {
    min-height: 80vh;
    height: 100vh;
    overflow: hidden;
}
div.error-wrapper {
    text-align: center;
    margin: auto;
    position: relative;
    top: 10vh;
    font-size: 20px;
}
h1.bold-error-code {
    font-size: 30vw;
    font-family: var(--font-xbold);
}
div.error-wrapper .active-link {
    color: #C92135;
    font-weight: bold;
}
</style>