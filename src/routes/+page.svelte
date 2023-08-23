<script>
    import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
    const handleClick = () => {
        console.log("Placing your order")
        goto('/products', {replaceState: true})
    }
    beforeNavigate((navigation) => {
        console.log({before:navigation})
    })
    afterNavigate((navigation)=>{
        console.log({after: navigation})
    })
</script>

<h1>Hello World</h1>
<p>This is a new p</p>
<a href="/about/lunch">Lunch</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place Order</button>