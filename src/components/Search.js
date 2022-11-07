import { Header } from "./Header";
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect,useState} from 'react';

/*Silakan edit code di bawah agar dapat menampilkan daftar buku yang dicari dari API secara dinamis */
/* HINT : Gunakan mapping array */
export const Search= ()=>{
    const navigate = useNavigate()
    const {query} = useParams()
   
    const[data,setData] = useState([])
    const[element,setElement] = useState([false])
    
    const getData = async()=>{
        await axios.get(`https://api.itbook.store/1.0/search/${query}`)
        .then(res => {setData(res.data.books)})
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        if(data){
            setElement(true)
            console.log(data)
            console.log(data.length)
            console.log("succes!")
        }
    })

    const [text,setText] = useState('')
    const [input,setInput] = useState('')

    return(
        <>
        {element ? 
        <>
        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                <h2 style={{textAlign:"center",width:"48rem",marginTop:"50px"}}>find your favorite books!</h2>
                <form className="form-inline my-2 my-lg-0">
                <input className=" mr-sm-2 " type="search" placeholder="Search" aria-label="Search" 
                onChange ={(typing) => setText(typing.target.value) }/>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit"
                onClick={() => {navigate('/search/'+text)}}>Search</button>
                </form>

                {/*Berikut ini merupakan template untuk membuat book card, silakan diedit sesuai kebutuhan */}
                {(data.length>0) 
                ? <>
                {data.map((data) =>{
                    let { title, subtitle, isbn13, price, image } = data;

                    return(
                    <div className="card flex-row flex-wrap" style={{width:"48rem",marginTop:"50px"}} onClick={()=>{navigate(`/details/${isbn13}`)}}>
                    <div className="card-header border-0">
                        <img key={image} src={image} alt="Buku.jpg" width="200" height="220" class="px-4"/>
                    </div>
                    <div className="card-block p-4" style={{width:"50%"}}>
                        <h4 key={title}className="card-title">{title}</h4>
                        <p key={subtitle}className="card-text">{subtitle}</p>
                        <p key={isbn13}className="text-muted">{isbn13}</p>
                        <h5 key={price}>{price}</h5>
                    </div>
                    </div>
                    )
                })}
                </> 
                :<>
                <div className="card flex-row flex-wrap" style={{width:"48rem",marginTop:"50px"}} onClick={()=>{navigate(`/details/${isbn13}`)}}>
                <div className="card-header border-0">
                    <img src='/Open_book_nae_02.svg.png' alt="Buku.jpg" width="200" height="220" class="px-4"/>
                </div>
                <div className="card-block p-4" style={{width:"50%"}}>
                    <h1 className="card-title">BOOK NOT FOUND :(</h1>
                </div>
                </div>

                </>}
    
            </div>
        </div>
        </>
        :<></>}
        </>

    )
}