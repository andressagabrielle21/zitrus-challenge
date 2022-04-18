import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import './index.css';
import { db } from '../../firebase-config';
import {addDoc, collection} from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateUser() {

  // Function that loads the CEP automatically
  const {register, setValue, setFocus, handleSubmit} = useForm();

  const usersCollectionReference = collection(db, "users");

  //Creating the variables that will handle the new user's information into the DB
  const [newName, setNewName] = useState("");
  const [newCEP, setNewCEP] = useState("");
  const [newRua, setNewRua] = useState("");
  const [newNumero, setNewNumero] = useState("");
  const [newBairro, setNewBairro] = useState("");
  const [newCidade, setNewCidade] = useState("");
  const [newEstado, setNewEstado] = useState("");

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    try {
      fetch(`https://opencep.com/v1/${cep}.json`)
        .then(response => response.json())
        .then(data =>  {
            // TESTE: console.log(data);
            setValue('rua', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
            // After autocomplete these past sections, it focus instantly to the input NÚMERO
            setFocus('numero');
        })
        
    }
    // Error message when the API can't reach the inserted data
    catch(err) {
      alert(err);
    }
  }

  //Make the request to the Firestore DB and new user's data inside 
  const createUserForm = async () => {
    await addDoc(usersCollectionReference, {name: newName, cep: newCEP, rua: newRua, numero: newNumero, bairro: newBairro, cidade: newCidade, estado: newEstado});
  };  

  // Function to redirect to the HOME page once the form is submitted
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  const onSubmit = (e) => {
    createUserForm(e);
    alert(newName + " adicionado com sucesso!")
    routeChange(e);
  }    

  return (
      <>
          <div className='createPage'>
            <div className="titleDiv">
              <h1>Novo usuário</h1>
              <Link to="/home"><button className='closeButton'>X</button></Link>
            </div>
                  <form onSubmit={handleSubmit(onSubmit)}> 
                    <input type="text" placeholder='Digite seu nome' onChange={(e) => {setNewName(e.target.value);}}></input>
                    <input type="number" placeholder='Digite seu CEP' {...register("cep")} onBlur={checkCEP} onChange={(e) => {setNewCEP(e.target.value);}}></input>
                    <input type="text" placeholder='Rua (Logradouro)' {...register("rua")} onChange={(e) => {setNewRua(e.target.value);}}></input>
                    <input type="number"  placeholder='Número' {...register("numero")} onChange={(e) => {setNewNumero(e.target.value);}}></input>
                    <input type="text" placeholder='Bairro' {...register("bairro")} onChange={(e) => {setNewBairro(e.target.value);}}></input>
                    <input type="text" placeholder='Cidade' {...register("cidade")} onChange={(e) => {setNewCidade(e.target.value);}}></input>
                    <input type="text" placeholder='Estado' {...register("estado")} onChange={(e) => {setNewEstado(e.target.value);}}></input>

                    <button>Salvar</button>
                  </form>
          </div>

      </>
  )
}