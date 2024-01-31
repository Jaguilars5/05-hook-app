export const CharacterCard = ({ name, species, image }) => {
    return (
      <div className="card mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Detalles del Personaje</div>
        <div className="card-body">
          <blockquote className="blockquote text-end mb-0">
            <p className="mb-1">{name}</p>
            <footer className="blockquote-footer">{species}</footer>
            <img src={image} alt="nada" className="img-fluid mx-auto d-block mb-3" />
          </blockquote>
        </div>
      </div>
    );
  };