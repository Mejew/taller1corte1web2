import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contador = ({ count, setCount }) => {
    useEffect(() => {
        const AlmacenarCount = localStorage.getItem('contador');
        if (AlmacenarCount !== null) {
            setCount(parseInt(AlmacenarCount));
        }
    }, []);

    const Incrementar = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem('contador', newCount.toString()); 
    };

    const Decrementar = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            localStorage.setItem('contador', newCount.toString());
        } else {
            alert("El Contador está en Cero");
        }
    };

    const Reset = () => {
        setCount(0);
        localStorage.setItem('contador', '0'); 
    };

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 mb-4">
                    <div className="card text-white">
                        <div className="card-body d-flex justify-content-between align-items-center flex-column flex-md-row">
                            <h5>{`Contador : ${count}`}</h5>
                            <button className="btn btn-secondary btn-lg btn-oval mb-2" onClick={Incrementar}>
                                Incrementar
                            </button>
                            <button className="btn btn-secondary btn-lg btn-oval mb-2" onClick={Decrementar}>
                                Decrementar
                            </button>
                            <button className="btn btn-secondary btn-lg btn-oval mb-2" onClick={Reset}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contador;
