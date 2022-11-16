<script>
import { store } from '../store';

export default {
    name: "cardProduct",

    props: {
        product: Object,
    },

    data() {
        return {
            store,
            availableFlags: ['en', 'it', 'de'],
        }
    },

    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        },
    },

    computed: {
        getFullStars() {
            return (Math.round(this.product.vote_average / 2));
        },

        getEmptyStars() {
            return 5 - (Math.round(this.product.vote_average / 2));
        },
    }



}
</script>

<template>

    <!-- POSTER -->
    <section class="poster">
        <img :src="`${store.urlImg}${product.backdrop_path}`" alt="" class="poster-img">

        <!-- CARD -->
        <div class="card">
            <ul>
                <!-- TITLES -->
                <li> titolo: <strong>{{ product.title ? product.title : product.name }}</strong> </li>

                <li>Titolo Originale: {{ product.original_title ? product.original_title : product.original_name }}
                </li>
                <!-- / TITLES -->

                <!-- CAST -->
                <li>
                    <span>Cast: </span>
                    <span v-for="(actor, index) in product.cast" :key="index" v-show="index < 5">
                        {{ actor.name }},
                    </span>
                </li>
                <!-- / CAST -->

                <!-- GENRES -->
                <li>
                    <span>Genere: </span>
                    <span v-for="(elementGenres, index) in store.arrayGenres"
                        v-show="product.genre_ids.includes(elementGenres.id)">
                        {{ elementGenres.name }},
                    </span>
                </li>
                <!-- / GENRES -->

                <!-- LINGUE -->
                <li class="language-flag-box">
                    <img v-if="availableFlags.includes(product.original_language)"
                        :src="getImgUrl(product.original_language)">
                    <span v-else>Lingua: {{ product.original_language }}</span>
                </li>
                <!-- / LINGUE -->

                <!-- STARS -->
                <li>
                    <span v-for="(star, index) in getFullStars" :key="index" class="stars">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="(star, index) in getEmptyStars" :key="index" class="stars">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </li>
                <!-- / STARS -->
            </ul>
        </div>
        <!-- / CARD -->

    </section>
    <!-- / POSTER -->


</template>

<style lang="scss" scoped>
.poster {
    width: 344px;
    min-height: 194px;
    margin-top: 1rem;
    border: 1px solid silver;
    position: relative;

    img {
        display: block;
    }

    .card {
        display: none;
        padding: 0 .8rem;
        position: absolute;
        left: 0;
        top: 0;
        overflow-y: auto;
        height: 100%;

        .language-flag-box img {
            max-width: 30px;
        }

        .stars {
            color: orange;
        }

        li {
            margin: .5rem 0;
        }
    }
}

.poster:hover {

    .poster-img {
        display: none;
    }

    .card {
        display: block;
    }
}
</style>