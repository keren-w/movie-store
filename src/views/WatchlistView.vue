<template>
    <div class="watchlist" :class="{ 'empty': isListEmpty }">
        <div class="empty-state" v-if="isListEmpty">No movies in watchlist</div>
        <MovieList :movies="watchlist" v-else />
    </div>
</template>

<script>
import { computed } from 'vue';
import { useMovieStore } from '../stores/movieStore';
import MovieList from '../components/MovieList.vue';

export default {
    components: {
        MovieList
    },
    setup() {
        const movieStore = useMovieStore();
        const watchlist = computed(() => movieStore.watchlist);
        const isListEmpty = computed(() => watchlist.value.length === 0);
        return {
            watchlist,
            isListEmpty,
        };
    }
};
</script>

<style>
.watchlist {
    margin-top: 16px;

    &.empty {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
    }

    .empty-state {
        margin: 0 auto;
    }
}
</style>