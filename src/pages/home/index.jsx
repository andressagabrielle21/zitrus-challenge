import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { db } from '../../firebase-config';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";


export default function Home() {
  // Will hold the list of users in the page
  const [users, setUsers] = useState([]);

  // To create a reference to the firestore collection which will be worked on
  const usersCollectionReference = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      //Get the data inside the collection in Firestore DB
      const data = await getDocs(usersCollectionReference);
      // Map the data 
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getUsers();
  }, []);

  //To delete the user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    alert("Você tem certeza que deseja excluir esse contato?");
    await deleteDoc(userDoc);
    window.location.reload(false);
  }


  return (
    <div>
      <div className='titleHome'>
        <h1>Usuários: </h1>
        <Link to="/"><button className="logoutButton">Logout</button></Link>
      </div>
      
      <div className='viewHome'>
        {users.map((user) => {
          return (
            <div className='userInfo'>
              {" "}
              <div className='titleInfo'>
                <Link to={`/details/${user.id}`}><h1>{user.name}</h1></Link>
                <img src={require('./trash-can.png')} onClick={() => {deleteUser(user.id)}} alt='delete'/>
              </div>

              <div className="details">
                <p>Cidade: {user.cidade}</p> 
                <p>Estado: {user.estado}</p>
              </div>

              <div className='dropDown'>

              </div>
              <hr />
            </div>
          );
        })}
      </div>

      <Link to="/create"><button className='addButton' > + </button> </Link>
    </div>
  )
}