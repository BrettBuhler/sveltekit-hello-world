<script>
    export let productId = 100;
</script>

<h1>Products</h1>

<ol>
    <li><a href="/products/1">Product 1</a></li>
    <li><a href="/products/2">Product 2</a></li>
    <li><a href="/products/3">Product 3</a></li>
    <li><a href={`/products/${productId}`}>Product {productId}</a></li>
</ol>

<a href="/">Home</a>