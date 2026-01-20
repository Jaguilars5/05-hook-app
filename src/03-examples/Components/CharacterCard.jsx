export const CharacterCard = ({ character }) => {
  if (!character) return null;

  const { name, species, image, status, origin } = character;

  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2 className="character-name">{name}</h2>
      <div className="character-info">
        <p>
          <strong>Estado:</strong> {status}
        </p>
        <p>
          <strong>Especie:</strong> {species}
        </p>
        <p>
          <strong>Origen:</strong> {origin?.name || "Desconocido"}
        </p>
      </div>
    </div>
  );
};
