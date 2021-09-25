import QuoteForm from '../components/quotes/QuoteItem'
const NewQuotes=()=>{
    
    const addQuoteHandler = quoteData=>{
        console.Console(quoteData)
    }
    return <QuoteForm onAddQuote={addQuoteHandler} />

}
export default NewQuotes