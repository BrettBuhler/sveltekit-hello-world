import Product from './product.svelte'

export const load = async (loadEvent) => {
    console.log('Load function called')
    const { data } = loadEvent

        return {
            ...data,
            Component: Product
        }
}