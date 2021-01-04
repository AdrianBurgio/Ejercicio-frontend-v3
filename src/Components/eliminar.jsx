import React, { useState , useEffect, Fragment } from 'react';
import {useParams , Redirect} from 'react-router-dom'
import axios from 'axios';

const Eliminar = () => {

    const {id} = useParams();

    const baseUrl=`https://localhost:44358/api/usuarios/${id}`;

    const [data, setData]=useState([]);
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
    const obtenerDatos = async () => {
        const data = await fetch(baseUrl)
        const usuarios = await data.json()
        setUsuario(usuarios)
        }

    obtenerDatos()
    }, [])

    const peticionDelete=async()=>{
        await axios.delete(baseUrl);
      }


    return (  
        <Fragment>
        <div className="Container m-5">
            <h4>Eliminar usuario</h4>
            <div>
                <div className="alert alert-danger" role="alert">
                    <p>
                    {usuario.username} <br/>
                    {usuario.email} <br/>
                    {usuario.telefono}
                    </p>
                </div>
                <a  className="btn btn-danger mr-2" onClick={()=>peticionDelete()} href="/listar/">Confirmar</a>
                <a  className="btn btn-secondary m-2" href="/listar/">Cancelar</a>

                <hr></hr>

            </div>

        </div>
        </Fragment>

    );
}
 
export default Eliminar;