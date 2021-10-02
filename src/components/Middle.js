import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import {longen} from '../convert'
import db from '../firebase'
import firebase from '../firebase'
import '../Middle.css'

const Middle= ()=> {
    const {id} = useParams()
    const serialNumber = longen(id)
    const [error,setError] = useState('')
    let link
    db.collection('links').where('count','==',serialNumber).get()
        .then(snapshot =>{
            if(snapshot.docs[0]){    
                window.location.href=(snapshot.docs[0].data().link)
            }else
                setError('Not a correct link! please recheck the link! :-)')
            })
        .catch()
    
    return (
        <div>
        <h1>{error}</h1>
        {error ? ' ':<h2>loading...</h2>}
            
        </div>
    )
}

export default Middle
