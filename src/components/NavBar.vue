<template>
<nav class="navbar">
    <RouterLink to="/" class="nav-link">
        <Icon name="bi-star-fill" scale="1.75" fill="white"/>
        <span>POPULAR</span>
    </RouterLink>
    <RouterLink to="/watchlist" class="nav-link">
        <Icon name="bi-list-ul" scale="2" fill="white"/>
        <span>WATCHLIST</span>
    </RouterLink>

</nav>
</template>

<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiListUl, BiStarFill, MdPlaylistadd, MdPlaylistremove } from "oh-vue-icons/icons";

addIcons(BiListUl, BiStarFill, MdPlaylistadd, MdPlaylistremove);

export default {
    name: 'NavBar',
    components: {
        Icon: OhVueIcon,
    }
}
</script>

<style>
.navbar {
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    gap: 24px;
    font-size: 0.8em;
}

.nav-link {
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    gap: 4px;
}
</style>