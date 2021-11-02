<template>
    <div id="agency-wrapper">
        <AgencyNavbar />
            <div id="agency-contents-wrapper">
                <router-view />
            </div>
        <AgencyFooter />
    </div>
</template>

<script>
import AgencyNavbar from '@/components/AgencyNavbar.vue'
import AgencyFooter from '@/components/AgencyFooter.vue'
export default {
    name: "AgencyView",
    components: {
        AgencyNavbar,
        AgencyFooter
    }
}
</script>

<style src="../../assets/css/agency.css"></style>