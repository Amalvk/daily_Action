import { Fragment } from "react";
import { useParams,Route } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetails=()=>{
    const params = useParams()
    return(
        <Fragment>
        <h1>Quote details Page </h1>
        <p>{params.quoteId}</p>
        {/*also we can use     path='quotes/:quoteId/comments' */}
        <Route path={`/quotes/${params.quoteId}/comments`}> 
        <Comments/>
        
        </Route>
        
        </Fragment>
)
}
export default QuoteDetails