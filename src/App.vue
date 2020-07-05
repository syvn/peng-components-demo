<template>
    <div id="app">
        <mainHeader></mainHeader>
        <div class="container">
            <mainNav class="nav"></mainNav>
            <router-view class="view"></router-view>
        </div>
        <mainFooter></mainFooter>
    </div>
</template>

<script>
import mainHeader from './components/header';
import mainFooter from './components/footer';
import mainNav from './components/nav';

export default {
    components: {
        mainHeader,
        mainFooter,
        mainNav
    }
};
</script>

<style lang="scss">
@import url('./styles/index.scss');
</style>
