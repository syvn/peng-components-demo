<!-- nav -->
<template>
    <div class="sidebar-container nav" :class="{ isCollapse: isCollapse }">
        <a-menu :inlineCollapsed="isCollapse" :selectedKeys="[splitMenu($route.path)]" mode="inline" theme="light">
            <template v-for="route in routes">
                <template v-if="route.children && route.children.length > 0">
                    <a-sub-menu :key="route.path">
                        <span slot="title">{{ route.name }}</span>

                        <template v-for="subRoute in route.children">
                            <a-menu-item :key="route.path + '/' + subRoute.path">
                                <router-link :to="{ path: route.path + '/' + subRoute.path }">
                                    <span>{{ subRoute.name }} </span>
                                </router-link>
                            </a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>

                <template v-else>
                    <a-menu-item :key="route.path">
                        <router-link :to="route.path">
                            <span>{{ route.name }}</span>
                        </router-link>
                    </a-menu-item>
                </template>
            </template>
        </a-menu>
    </div>
</template>

<script>
import { routes } from '@/router';
export default {
    data() {
        return {
            isCollapse: true,
        };
    },
    components: {},
    computed: {
        routes() {
            return routes.filter((route) => route.name);
        },
    },
    mounted() {
        console.log(routes, this.routes, 'routes');
    },
    methods: {
        splitMenu(value) {
            console.log(
                value.split('/'),
                value
                    .split('/')
                    .slice(2, 4)
                    .join('/'),
                'asdas'
            );

            return value
                .split('/')
                .slice(2, 4)
                .join('/');
        },
    },
};
</script>
<style lang="scss">
.sidebar-container {
    .ant-menu {
        width: 100%;
        height: 100%;
    }
}
</style>
