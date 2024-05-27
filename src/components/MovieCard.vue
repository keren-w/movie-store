<template>
  <article class="movie-card" :class="{ 'active': isActive }" @mouseenter="isActive = true"
    @mouseleave="isActive = false">
    <img :src="imgUrl" class="movie-image" :class="{ 'active': isActive }" />
    <div class="watchlist-icon">
      <Icon name="io-heart" @click="toggleWatchlist" scale="1.5" v-if="isInWatchlist" />
      <Icon name="io-heart-outline" @click="toggleWatchlist" scale="1.5" v-if="!isInWatchlist" />
    </div>
    <section class="movie-info">
      <h3>{{ movie.title }}</h3>
    </section>
  </article>
</template>

<script>
import { computed } from 'vue';
import { useMovieStore } from '../stores/movieStore';
import { IMAGE_URL } from '../api/movies-api';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoHeartOutline, IoHeart } from "oh-vue-icons/icons";
import { ref } from 'vue';
addIcons(IoHeartOutline, IoHeart);

export default {
  props: ['movie'],
  setup(props) {
    const movieStore = useMovieStore();
    const isInWatchlist = computed(() => movieStore.getWatchlist.includes(props.movie));
    const toggleWatchlist = () => {
      if (isInWatchlist.value) {
        movieStore.removeFromWatchlist(props.movie);
      } else {
        movieStore.addToWatchlist(props.movie);
      }
    };
    const isActive = ref(false);
    const toggleActive = () => {
      isActive.value = !isActive.value;
    };
    return {
      isInWatchlist,
      toggleWatchlist,
      isActive,
      toggleActive,
      imgUrl: `${IMAGE_URL}/w300${props.movie.poster_path}`
    };
  },
  components: {
    Icon: OhVueIcon
  }
}
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 250px;
  position: relative;

  &.active {
    .watchlist-icon {
      visibility: visible;
    }

    .movie-image {
      position: relative;

      &::after {
        content: "";
        visibility: visible;
        z-index: 10;
        color: rgba(255, 255, 255, 0.5);
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}

.movie-image {
  width: inherit;
}

.movie-info {
  padding: 8px 0;
  width: initial;
  height: 80px;
}

h3 {
  margin: 0;

}

.watchlist-icon {
  position: absolute;
  top: 4px;
  left: 4px;
  visibility: hidden;
}
</style>