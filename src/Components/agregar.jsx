import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Agregar = () => {

    const {register, errors, handleSubmit} = useForm();

    const baseUrl="https://localhost:44358/api/usuarios";

    const onSubmit = async (data, e) => {
        await axios.post(baseUrl,data)

        e.target.reset()
    }

    return ( 
        <Fragment>
            <div className="Container m-5">
                <h4>Agregar usuario</h4>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Ingrese nombre de usuario"
                    autocomplete="off"
                    className="form-control mb-2 col-lg-6"
                    name="username"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'Nombre de usuario es requerido'
                            }, 
                        maxLength: {
                            value: 20, 
                            message: 'No más de 20 carácteres!'
                            },
                        minLength: {
                            value: 2, 
                            message: 'Mínimo 2 carácteres'
                            },
                        pattern: /[a-z]/
                    })}
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.username && errors.username.message}
                </span>

                <input
                    placeholder="Ingrese email"
                    autocomplete="off"
                    className="form-control mb-2 col-lg-6"
                    name="email"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'El email es requerido'
                            }
                    })}
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.email?.message}
                </span>

                <input
                    type="number"
                    placeholder="Ingrese un telefono de contacto"
                    autocomplete="off"
                    className="form-control mb-2 col-lg-6"
                    name="telefono"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'El telefono es requerido'
                            }
                    })}
                ></input>

                <span className="text-danger text-small d-block mb-2">
                    {errors?.telefono?.message}
                </span>

                <button type="submit" className="btn btn-success mr-2">Agregar</button>
                <a  className="btn btn-secondary m-2" href="/listar/">Cancelar</a>

            </form>

            </div>
        </Fragment>
     );
}
 
export default Agregar;