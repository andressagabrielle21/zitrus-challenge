import React from 'react';
import './viewDetails.css';
import {useState} from 'react';
import { db } from '../../firebase-config';
import { doc, getDoc} from "firebase/firestore";
import { Link, useParams } from 'react-router-dom';

export default function ViewDetails() {

  const [user, setUser] = useState([]);
  // Catch the ID from the URL
  const {id} = useParams();

  //To retrieve the user's data from the DB through the ID
  const docRef = doc(db, 'users', `${id}`);

  getDoc(docRef)
    .then((doc) => {
      setUser(doc.data(), doc.id);
    })


  return (
    <div>
        <div className="viewPage">
                <div className='componentContent'>
                  <div className='title'>
                    <h1>{user.name}</h1>
                    <Link to="/home"><button>X</button></Link>
                  </div> 

                  <p><span>CEP:</span> {user.cep}</p>
                  <p><span>Rua:</span> {user.rua}</p>            
                  <p><span>Número:</span> {user.numero}</p>            
                  <p><span>Bairro:</span> {user.bairro}</p>            
                  <p><span>Cidade:</span> {user.cidade}</p>            
                  <p><span>Estado:</span> {user.estado}</p>                   
                </div>
          </div>
    </div>
  )
}
