<script lang="ts">
    interface Product {
        title: string
        description: string
    }
    export let data
    const products: Product[] = data.products
    const Component = data.Component
</script>

<h1>{data.title}</h1>
{#each products as product}
    <div>
        <Component {product} />
    </div>
{/each}