
import QuoteList from "../components/quotes/QuoteList"
const DUMMY_QUOTES =[
   
    {id:'q1',author:'Max',text:'React Learning fun'},
    {id:'q2',author:'Maximilian',text:'React Learning great'},
    
]
const Allquotes=()=>{
return<QuoteList quotes={DUMMY_QUOTES}/>

}
export default Allquotes