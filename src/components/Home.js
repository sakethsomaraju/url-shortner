import React,{useState} from 'react'
import db from '../firebase'
import firebase from 'firebase'
import {shorten} from '../convert'
import '../Home.css'


const Home = ()=> {
    const [link,setLink] = useState('')
    const [count,setCount] = useState(81)
    let newLink =''
    const [error,setError] = useState('')
    const [displayNewLink,setDisplayNewLink] = useState('')
        
    db.collection('count').get("count").then(snapshot=> setCount(snapshot.docs[0].data().count))
    const increment = firebase.firestore.FieldValue.increment(1)
    const   submitHandler = ()=>{
        if(link.includes('http://') || link.includes('https://')){
        setError('')
        newLink='localhost:3000/'+shorten(count)
        db.collection('links').add({count,link,newLink})
            .then(db.collection('count').doc('counter').update({count:increment})
                .then(db.collection('count').get("count")
                    .then(snapshot => setCount(snapshot.docs[0].data().count))))
        }else{
            setError('Error: Please add a link only')
        }
    }
    const copyLink = ()=>{
        db.collection('links').where('count','==',count-1).get().then(snapshot =>setDisplayNewLink(snapshot.docs[0].data().newLink))
        
        
    }
    return (
        <div >
            <div className="container">
                <input type="text" className="link-input" value={link} required onChange={e => setLink(e.target.value)} placeholder="Enter url to shorten ( format http:// || https:// || ftp:// || stp:// )"/>
                <div>
                    <button  onClick={submitHandler}>Shorten</button>
                    <button onClick={copyLink} >Display shortened link</button>
                </div>
                
            </div>
            
            <div className="display-links">
                <div className="display-links--new-link"><p>{ displayNewLink}</p></div>
                <div className="display-error"><p>{error}</p></div>
            </div>
           
        </div>
    )
}

export default Home
