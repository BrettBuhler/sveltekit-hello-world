<script lang="ts">
    interface Product {
        title: string
        description: string
    }
    export let product: Product
</script>

<h2>{product.title}</h2>
<p>{product.description}</p>
<hr />