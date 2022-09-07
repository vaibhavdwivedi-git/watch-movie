import React from 'react'

function MovieCard({movie : {imdbID, Year, Poster, Title, Type}}) {
  return (
    <div className='movie' key={imdbID}>
        <div>
            <p>{Year}</p>
        </div>

        <div>
            <img src={Poster !== "N/A" ? Poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnIeI0IRD7teeeZvRvgAU2LWdmVjWTQzgR1PNQBaC1K8a85lxYnh31KTW2LSa2CqaBeQ&usqp=CAU"} alt={Title}/>
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard;