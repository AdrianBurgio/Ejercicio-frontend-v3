import React, { useState , useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Listar = () => {

    const baseUrl="https://localhost:44358/api/usuarios";
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
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody id="tablaUsuaros">
                    {
                    usuario.map(item => (
                    <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.telefono}</td>
                        <td>
                        <button type="button" className="btn btn-basic text-primary" data-bs-toggle="tooltip" title="Editar"
                            ><FontAwesomeIcon icon={faEdit}/></button>
                        <button type="button" className="btn btn-basic text-danger" data-bs-toggle="tooltip" title="Eliminar"
                            ><FontAwesomeIcon icon={faTrashAlt}/></button>
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