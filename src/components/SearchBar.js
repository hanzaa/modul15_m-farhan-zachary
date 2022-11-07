import { Header } from "./Header";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const SearchBar= ()=>{        
    const [text,setText] = useState('')
    const navigate = useNavigate()

    return(
        <>
        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                <h2 style={{textAlign:"center",width:"48rem",marginTop:"50px"}}>find your favorite books!</h2>
                <form className="form-inline my-2 my-lg-0">
                <input className=" mr-sm-2 " type="search" placeholder="Search" aria-label="Search" 
                onChange ={(typing) => setText(typing.target.value) }/>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit"
                onClick={()=>{navigate('/search/'+text)}}>Search</button>
                </form>
            </div>
        </div>
        </>

    )
}