import React from 'react'

function Content() {
  return (
    <div align="center">

{/* <div id="carouselExampleIndicators" class="carousel slide check" data-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://icdn.football-espana.net/wp-content/uploads/2021/12/Lionel-Messi2-640x432.jpeg" alt="First slide">
    </img></div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT014RoT6IwXsZGc_tvLu9t7MohdYOy6MQAPw&usqp=CAU" alt="Second slide">
    </img></div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxiZ_n6dINH7dZsMo2gltMCh7FgqDX7Uv0Q&usqp=CAU" alt="Third slide">
   </img> </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}

<div id="carouselExampleCaptions" class="carousel slide check" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://icdn.football-espana.net/wp-content/uploads/2021/12/Lionel-Messi2-640x432.jpeg" class="d-block w-100" alt="...">
      </img><div class="carousel-caption d-none d-md-block">
        <h5>The Greatest</h5>
        <p>Messi picking up his seventh golden ball only means that there's no way that the con artist will catch up to him anytime soon.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT014RoT6IwXsZGc_tvLu9t7MohdYOy6MQAPw&usqp=CAU" class="d-block w-100" alt="...">
      </img><div class="carousel-caption d-none d-md-block">
        <h5>How did I get here</h5>
        <p>Disrespecting opponents and showing his frustration both in club and country matches seems to be where Rinaldo shines nowadays.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxiZ_n6dINH7dZsMo2gltMCh7FgqDX7Uv0Q&usqp=CAU" class="d-block w-100" alt="...">
      </img><div class="carousel-caption d-none d-md-block">
        <h5>Will overcome the turtle</h5>
        <p>Some people chase money. I chase history says Erling.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br></br>




    </div>
  )
}



export default Content