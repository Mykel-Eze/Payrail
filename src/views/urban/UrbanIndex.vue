<template>
    <div id="urban-wrapper">
        <UrbanNavbar />
            <div id="agency-contents-wrapper">
                <router-view />
            </div>
        <UrbanFooter />
    </div>
</template>

<script>
import UrbanNavbar from '@/components/UrbanNavbar.vue'
import UrbanFooter from '@/components/UrbanFooter.vue'
export default {
    name: "UrbanView",
    components: {
        UrbanNavbar,
        UrbanFooter
    }
}
</script>

<style src="../../assets/css/urban.css"></style>