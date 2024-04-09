export default defineEventHandler(async(event) => {
    //$fetch for server routes
    const key = 'cur_live_QetHTY9c5vwJwo5vwhYdVFscemmrlZwcfRPOYv8F'
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${key}`)
    return data
})