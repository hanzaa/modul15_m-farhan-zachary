import {useParams} from 'react-router-dom';
import { Header } from './Header';
import axios from 'axios';
import {useState,useEffect} from 'react';

export const Details = ()=>{
    //Line Code berikur merupakan fungsi untuk menerima parameter dari URL
    const {isbn} = useParams()

    const[data,setData]=useState([])
    const[pdf,setPdf]=useState([])
    const[element,setElement]=useState([false])

    const getDetails = async() => {
        await axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
        .then(res => {setData(res.data)})
    }

    useEffect(()=>{
        getDetails()
    },[])

    useEffect(()=>{
        if(data){
            setElement(true)
            console.log('details succses')
            console.log(data)
        }if(data.pdf){
            setPdf(data.pdf)
            console.log(pdf)

        }
    })

    //Silakan edit code berikut supaya dapat menampilkan buku sesuai dengan parameter ISBN di URL
    return(
        <>
        {element ? <>

        <div className="container">
            <Header/>
            <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                <h1 style={{width:"48rem",marginTop:"50px"}}>{data.title}</h1>
                {/*Berikut ini merupakan template untuk informasi buku */}
                <div className="card flex-row flex-wrap" style={{width:"75rem",marginTop:"50px",marginBottom:"50px"}}>
                    <div className="card-header border-0">
                        <img src={data.image} alt="Buku.jpg" width="450" height="470" className="px-4"/>
                    </div>
                    <div className="card-block p-4" style={{width:"58%"}}>
                        <h5 className="card-text">Title </h5> <p className="card-text"> {data.title}</p><br></br>
                        <h5 className="card-text">Subtitle </h5> <p className="card-text"> {data.subtitle}</p><br></br> 
                        <h5 className="card-text">Authors </h5> <p className="card-text"> {data.authors}</p><br></br> 
                        <h5 className="card-text">Publisher </h5> <p className="card-text"> {data.publisher}</p> <br></br>
                        <h5 className="card-text">Language </h5> <p className="card-text"> {data.language}</p> <br></br>
                        <h5 className="card-text">ISBN10 </h5> <p className="card-text"> {data.isbn10}</p> <br></br>
                        <h5 className="card-text">ISBN13 </h5> <p className="card-text"> {data.isbn13}</p> <br></br>
                        <h5 className="card-text">Pages </h5> <p className="card-text"> {data.pages}</p> <br></br>
                        <h5 className="card-text">Year </h5> <p className="card-text"> {data.year}</p> <br></br>
                        <h5 className="card-text">Rating </h5> <p className="card-text"> {data.rating}</p> <br></br>
                        <h5 className="card-text">Description </h5> <p className="card-text"> {data.desc}</p> <br></br>
                        <h5 className="card-text">Price </h5> <p className="card-text"> {data.price}</p> <br></br>
                        <h3 className="card-text">PDF </h3> <a className="card-text" href={pdf['Free eBook']} > {pdf['Free eBook']}</a>
                     
                    </div>
                </div>
            </div>
        </div>
        </> : <></>}
        </>
    )
}