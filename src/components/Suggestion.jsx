import React from 'react'

const Suggestion = () => {
  const videos=[
    {
      src:"https://www.youtube.com/embed/e6MxJbYyB5E",
      name:"“Sia - Unstoppable"
  },
  {
      src:"https://www.youtube.com/embed/EjWAdKWEVUE",
      name:"“Radiohead - Creep (Acoustic Cover)"

  },
  {
      src:"https://www.youtube.com/embed/UyaZmFGyuMg",
      name:"“Jonathan Roy - Keeping Me Alive"

  },
  {
      src:"https://www.youtube.com/embed/NxUkJpdgZLA",
      name:"“Sia - UnstoppStand By Me - Ben E. Kingable"
  }
    
  ]
  return (
    <div>
   
      {
        videos.map((el)=><div>
          <iframe
        style={{
          borderRadius: "10px",
        }}
        width="400"
        height="300"
        src={
          el.src
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h5>
        {el.name}
      </h5>
</div>

        )

        }

   
    </div>
  )
}

export default Suggestion