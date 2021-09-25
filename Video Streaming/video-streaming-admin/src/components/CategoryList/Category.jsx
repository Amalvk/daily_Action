import 'vidos.css';
import {categorySelector,getCategoryDetails} from '../Store/categorySlice';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import CategoryTable from './CategoryList';

export default function Category(){
    const dispatch=useDispatch()
    const {category}= useSelector(categorySelector)
    
    useEffect(()=>{
        dispatch(getCategoryDetails())
    },[dispatch])


    const getCategory=()=>{
    
        dispatch(getCategoryDetails())
    }
    


returndispatch(
    <div classname='category'>
        <div className="category-table">
            <CategoryTable category={category} getCategory={getCategory}/>
        </div>
    </div>
)
}
