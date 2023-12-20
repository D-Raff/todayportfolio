<template>
    <div class="container">
        <div class="row">
            <p class="lead">
                Damon's Portfolio &copy;
                <span>{{ currYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerComp',
    data() {
        return {
            currYear: new Date().getFullYear()
        }
    },
}
</script>

<style >
    
</style>