<template>
    <div id="business-wrapper">
        <BusinessNavbar />
            <div id="business-contents-wrapper">
                <router-view />
            </div>
        <BusinessFooter />
    </div>
</template>

<script>
import BusinessNavbar from '@/components/BusinessNavbar.vue'
import BusinessFooter from '@/components/BusinessFooter.vue'
export default {
    name: "BusinessView",
    components: {
        BusinessNavbar,
        BusinessFooter
    }
}
</script>

<style src="../../assets/css/business.css"></style>