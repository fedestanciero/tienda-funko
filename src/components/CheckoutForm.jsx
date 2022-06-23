import React, { useState } from "react";
import { useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import "../styles/CheckoutForm.css"

export default function CheckoutForm({createOrder, setBuyerInfo, buyerInfo}){

    const {cartList, totalCartAmount} = useContext(CartContext);
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [streetError, setStreetError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [provinceError, setProvinceError] = useState(false);

    // En cada cambio de un input, guardo el valor en el estado que corresponde según el id del input.
    function handleChange(e){
        setBuyerInfo({
            ...buyerInfo,
            [e.target.id]: e.target.value,
        })
    }

    const formValidation = () => {
        setNameError(!buyerInfo.name);
        setLastNameError(!buyerInfo.lastName);
        setEmailError(!buyerInfo.email);
        setStreetError(!buyerInfo.street);
        setCityError(!buyerInfo.city);
        setProvinceError(!buyerInfo.province);
        if (buyerInfo.name && buyerInfo.lastName && buyerInfo.email && buyerInfo.street && buyerInfo.city && buyerInfo.province) {
            createOrder();
        }
    }

    return(
        <div className="container-fluid">
            <form className="row justify-content-center">
                <div className="col-12 col-md-5">
                    <div className="col-12 form-section">
                        <h2>Datos personales</h2>
                        <div className="form-field">
                            {!nameError ? <label htmlFor="name">Nombre</label> :
                            <label htmlFor="name" className="input-error">Por favor, ingresa tu nombre</label>
                            }
                            <br />
                            <input type="text" id="name" onChange={handleChange}/>
                        </div>

                        <div className="form-field">
                            {!lastNameError ? <label htmlFor="lastName">Apellido</label> :
                            <label htmlFor="name" className="input-error">Por favor, ingresa tu apellido</label>
                            }
                            <br />
                            <input type="text" id="lastName" onChange={handleChange}/>
                        </div>

                        <div className="form-field">
                            {!emailError ? <label htmlFor="email">Email</label> :
                            <label htmlFor="email" className="input-error">Por favor, ingresa tu email</label>
                            }
                            <br />
                            <input type="email" id="email" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-12 form-section">
                        <h2>Datos de entrega</h2>
                        <div className="form-field">
                            {!streetError ? <label htmlFor="street">Calle y N°</label> :
                            <label htmlFor="street" className="input-error">Por favor, ingresa tu dirección</label>
                            }
                            <br />
                            <input type="text" id="street" onChange={handleChange}/>
                        </div>

                        <div className="form-field">
                            {!cityError ? <label htmlFor="city">Ciudad</label> :
                            <label htmlFor="city" className="input-error">Por favor, ingresa tu ciudad</label>
                            }
                            <br />
                            <input type="text" id="city" onChange={handleChange}/>
                        </div>

                        <div className="form-field">
                            {!provinceError ? <label htmlFor="province">Provincia</label> :
                            <label htmlFor="province" className="input-error">Por favor, ingresa tu provincia</label>
                            }
                            <br />
                            <input type="text" id="province" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <div className="col-12 form-section">
                        <h2>Forma de pago</h2>
                        <div className="form-field">
                            <input type="radio" id="bank-transfer" name="bank-transfer" value="bank-transfer"/>
                            <label htmlFor="bank-transfer">Transferencia bancaria</label><br/>
                        </div>
                    </div>
                    <div className="col-12 form-section">
                        <h2>Tu compra</h2>
                        {cartList.map(item => <div key={item.id} className="item-checkout">
                            <div className="item-carrito-imagen col-3 all-centered"><img src={item.image} alt={item.name}/></div>
                            <div className="col-6 all-centered"><span>{item.name}</span></div>
                            <div className="col-1 all-centered"><span>x{item.quantity}</span></div>
                            <div className="col-2 text-center all-centered"><span>${item.price}</span></div>
                        </div>)}
                        <div className="total-compra">
                            <span className="">{`Total a pagar: $${totalCartAmount}`}</span>
                        </div>
                    </div>
                    <div className="col-12 form-section">
                        <div className="row">
                            <div className="col-12 col-md-5 div-button_purchase">
                                {buyerInfo.name && buyerInfo.lastName && buyerInfo.email && buyerInfo.street && buyerInfo.city && buyerInfo.province ?
                                <Link to="/order-received">
                                    <input className="pay-button" type="submit" value="Pagar" onClick={formValidation}/>
                                </Link>
                                :
                                <button className="pay-button" type="button" onClick={formValidation}>Pagar</button>
                                }                 
                            </div>
                            <div className="col-12 col-md-5 div-button_back-to-cart">
                                <Link to="/cart">
                                    <button>Volver al carrito</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}