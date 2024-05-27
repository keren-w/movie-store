<template>
  <article class="movie-card" :class="{ 'active': isActive }" @mouseenter="isActive = true"
    @mouseleave="isActive = false">
    <img :src="imgUrl" class="movie-image" :class="{ 'active': isActive }" />
    <div class="overlay"/>
    <div class="watchlist-icon">
        <Icon name="md-playlistremove" @click="toggleWatchlist" scale="2" v-if="isInWatchlist" />
        <Icon name="md-playlistadd" @click="toggleWatchlist" scale="2" v-if="!isInWatchlist" />
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
import { IoHeartOutline, IoHeart, MdPlaylistadd, MdPlaylistremove } from "oh-vue-icons/icons";
import { ref } from 'vue';
addIcons(IoHeartOutline, IoHeart, MdPlaylistadd, MdPlaylistremove);

export default {
  props: ['movie'],
  setup(props) {
    const movieStore = useMovieStore();
    const isInWatchlist = computed(() => movieStore.getWatchlist.some(m => m.id === props.movie.id));
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

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      visibility: visible;
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
  position: relative;
}

.overlay {
  visibility: hidden;
}

.watchlist-icon {
  position: absolute;
    visibility: hidden;
    color: white;
  top: 4px;
  left: 4px;
}
</style>