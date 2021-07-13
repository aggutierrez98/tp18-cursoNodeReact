import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Libro } from './Libro';

export const LibrosScreen = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/libro');
                if (response.status === 200) {
                    setData(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);

    return (

        <div>

            {
                data.libros &&
                data.libros.map((libro) => (
                    <Libro libro={libro} key={libro._id} />
                ))
            }
        </div>
    );
};
