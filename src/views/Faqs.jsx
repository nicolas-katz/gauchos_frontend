import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledFaqs = styled.div`
    width: 100%;
    height: max-content;
    padding: 140px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
        text-align: center;
    }

    div.faqs__container {
        width: 100%;
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        div.faqs__box {
            width: 100%;
            margin-bottom: 40px;
            padding-bottom: 40px;

            border-bottom: 1px solid var(--colorPrincipal);

            &:last-child {
                margin-bottom: 0;
                padding-bottom: 0;

                border-bottom: none;
            }

            h4 {
                color: var(--colorPrincipal);
                font-size: 28px;
                line-height: 38px;
                font-weight: 400;
            }

            p {
                margin-top: 16px;

                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }
        }
    }

    a.not__found__question {
        width: 100%;
        height: 54px;
        margin-top: 40px;
        padding: 0 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border-radius: 2px;
        transition: all .6s;

        color: white;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 42px;
            line-height: 52px;
        }

        div.faqs__container {
            margin-top: 80px;

            align-items: flex-start;
            justify-content: space-between;

            div.faqs__box {
                width: 45%;
                margin-bottom: 40px !important;
                padding-bottom: 0;

                border-bottom: none;
            }
        }

        a.not__found__question {
            width: max-content;
            margin-top: 20px;
            padding: 0 28px;
        }
    }
`;

export default function Faqs() {
    return (
        <StyledFaqs>
            <h1>Preguntas Frecuentes</h1>
            <div className='faqs__container'>
                <div className='faqs__box'>
                    <h4>¿Cómo puedo realizar un pedido?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Cuáles son los métodos de pagos?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Dónde está la tienda fisica? ¿Tengo que retirar mi pedido allí o tienen envíos?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Dónde puedo ver los precios mayoristas?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Cuál es la compra mínima mayorista?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Puedo comprar por menor?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>Tuve un problema con un pedido. ¿Con quién puedo hablar?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Qué es Miltex Indumentaria?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Tienen redes sociales?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
                <div className='faqs__box'>
                    <h4>¿Qué es Akamasoa?</h4>
                    <p>Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl</p>
                </div>
            </div>
            <NavLink className='not__found__question' to='/contacto'>No encuentro mi pregunta</NavLink>
        </StyledFaqs>
    );
};