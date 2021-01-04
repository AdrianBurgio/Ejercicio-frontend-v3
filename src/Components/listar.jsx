import React, { useState , useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Link, Router} from "react-router-dom";
import axios from 'axios';

const Listar = () => {

    const baseUrl="https://localhost:44358/api/usuarios";
    const [data, setData]=useState([]);
    const [usuario, setUsuario] = useState([])

    // useEffect(() => {
    // const obtenerDatos = async () => {
    //     const data = await fetch(baseUrl)
    //     const usuarios = await data.json()
    //     setUsuario(usuarios)
    //     }

    // obtenerDatos()
    // }, [])

    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setData(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        peticionGet();
    },[])
    


    return ( 
        <Fragment>
            <div className="Container m-5">
                <h4>Usuarios activos</h4>

                <table className="table table-sm table-hover ">
                <thead className="alert-success">
                    <tr>
                        <th>Nombre de usuario</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th colSpan="1" className="text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody id="tablaUsuaros">
                    {
                    data.map(item => (
                    <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.telefono}</td>
                        {/* <td>
                            <Link to={`/editar/${item.id}`} className="nav-link text-primary text-center"><FontAwesomeIcon icon={faEdit}/></Link>
                        </td> */}
                        <td>   
                            <Link to={`/eliminar/${item.id}`} className="nav-link text-danger text-center"><FontAwesomeIcon icon={faTrashAlt}/></Link>
                        </td>
                    </tr>
                    ))
                    }
                    </tbody>
                </table> 

            </div>

        </Fragment>      

     );
}
 
export default Listar;