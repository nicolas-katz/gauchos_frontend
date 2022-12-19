import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import foto from '../assets/galeria_ejemplo.jpg';
import { ProductsContext } from '../context/ProductsContext';

const StyledGallery = styled.div`
    width: 100%;
    height: max-content;
    padding: 120px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    
    h1 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
        text-align: center;
    }

    div.gallery__container {
        width: 100%;
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        img {
            width: 48%;
            height: 180px;
            margin: 1%;

            &:last-child {
                margin-bottom: 0;
            }

            border-radius: 2px;

            object-fit: cover;
        }
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 48px;
            line-height: 58px;
        }

        div.gallery__container {
            img {
                height: 420px;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        div.gallery__container {
            img {
                width: 31%;
                height: 520px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 160px 120px 80px 120px;
    }   
`;

export default function Gallery() {
    const { getAll } = useContext(ProductsContext);
    const [photos, setPhotos] = useState(null);

    useEffect(()=> {
        getAll(setPhotos);
    }, []);

    return (
        <StyledGallery>
            <h1>Galería de imagenes</h1>
            <div className='gallery__container'>
                {
                    photos !== null && 
                    photos.map(( photo, index ) => {
                        return(
                            <img 
                                key={index}
                                src={photo.image} 
                                alt='Galería de imagenes - Miltex Indumentaria' 
                            />
                        )
                    })
                }
            </div>
        </StyledGallery>
    );
};