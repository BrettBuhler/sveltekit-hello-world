<script lang="ts">
    import { page } from '$app/stores'
    import type { Greetings } from '../../../types/types';
    const greetings: Greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    };
    const { lang = 'en' } = $page.params;
    const greeting = greetings[lang];
</script>

<h1>{greeting} user</h1>