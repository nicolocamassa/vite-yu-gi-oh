import { reactive  } from "vue";

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endpoint_archetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardList: [],
    archetype: [],
    loading: true
})