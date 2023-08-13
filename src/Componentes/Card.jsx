import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card = ({ animales, count }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {animales.map(animal => (
                    <div key={animal.id} className="col-lg-4 col-md-5 mb-4">
                        <div className="card  text-white">
                            <div className="d-flex justify-content-center">
                                <img src={animal.image} className="card-img-top" alt={animal.name} style={{ maxHeight: '460px' }} />
                            </div>
                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">{animal.name}</h5>
                                    <h5 className="card-cont">Contador: {count}</h5>
                                    <p className="card-text">{animal.descripcion}</p>
                                </div>
                                <div className="text-center">
                                    <a href={animal.image} className="btn btn-secondary btn-lg btn-oval">
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;