//import { error } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const load = async (serverLoadEvent) => {
    console.log('load function called in [productId]')
    const { fetch, params, url, route } = serverLoadEvent
    console.log({ params, url, route: route.id})
    const {productId} = params 
    const response = await fetch (`http://localhost:4000/products/${productId}`)
    const product = await response.json()
    if (parseInt(productId) > 3) {
        /*
                throw error(404, { 
            message: 'Oh no! Looks like the product is not available',
            hint: "Try a different product"
            })
        */
       throw redirect(307, '/products')
    }
    return {
        title: product.title,
        product: product
    }
}