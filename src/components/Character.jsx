
export const Character = ({prsj}) => {
  return (
    <div className="text-center p-5">
        <h2>{prsj.name}</h2>
        <img className="img-fluid rounded-pill" src={prsj.image} alt={prsj.name} />
        <p>{prsj.origin.name}</p>
    </div>
  )
}
