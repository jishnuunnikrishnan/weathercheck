//var searchInput = 'wsearch';
  var lats;
  var longs;
  const api ='7c55640223920daa88a51d0f0f8d6021';
  const unit='metric';
  const lang='en';
  var weather={country:"",city:"", desc:"",temp:"",mintemp:"",maxtemp:"",humidity:"",wdeg:"",wspeed:""};
  const cwi= document.getElementById('carder');
  
   
 function checkLocation() {
   cwi.style.display='none';
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
          
        } else {
          console.log("Geolocation is not supported by this browser.");
          }
      }
      
      function showPosition(position) {
        lats =  position.coords.latitude;
        longs =  position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${longs}&appid=${api}&units=${unit}&lang=${lang}`).then(
            res => res.json()
        ).then(data =>{
          this.weather.country = data.sys.country;
          this.weather.city=data.name;
          this.weather.desc=data.weather[0].description;
          this.weather.temp=data.main.temp;
          this.weather.mintemp=data.main.temp_min;
          this.weather.maxtemp=data.main.temp_max;
          this.weather.humidity=data.main.humidity;
          this.weather.wdeg=data.wind.deg;
          this.weather.wspeed=data.wind.speed;
              
               cwi.style.display='block';
               cwi.innerHTML =
               `
               <div class="card-group">
            <div class="card border-info text-white bg-dark">
            <div class="cardheader"><i class='bx bx-location-plus bx-md' style='color:rgba(189,151,151,0.98)'  ></i><h4>Location</h4></div>
              <div class="cards">
                <div class="row">
                    <div class="col">
                        <h5>Country  </h5>
                    </div>
                    <div class="col">
                      <h5>${weather.country}</h5>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>City  </h5>
                        </div>
                        <div class="col">
                          <h5>${weather.city}</h5>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5>Weather  </h5>
                            </div>
                            <div class="col">
                              <h5>${weather.desc}</h5>
                            </div>
                            </div>
            </div>
              
            </div>
            <div class="card text-white bg-warning">
              <div class="cardheader"><i class='bx bxs-sun bx-md' style='color:rgba(241,15,19,0.98)'  ></i><h4>Temperature</h4></div>
              <div class="cards">
                <div class="row">
                    <div class="col">
                        <h6>Temperature  </h6>
                    </div>
                    <div class="col">
                      <h5>${weather.temp}</h5>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Minimum  </h6>
                        </div>
                        <div class="col">
                          <h5>${weather.mintemp}</h5>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h6>Maximum </h6>
                            </div>
                            <div class="col">
                              <h5>${weather.maxtemp}</h5>
                            </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6>Humidity </h6>
                                </div>
                                <div class="col">
                                  <h5>${weather.humidity}</h5>
                                </div>
                                </div>
              </div>
              
            </div>
            <div class="card border-info text-white bg-dark">
              <div class="cardheader"><i class='bx bx-wind bx-md' style='color:rgba(220,201,202,0.98)'  ></i><h4>Wind</h4></div>
              <div class="cards">
                <div class="row">
                    <div class="col">
                        <h5>Wind deg  </h5>
                    </div>
                    <div class="col">
                      <h5>${weather.wdeg}</h5>
                    </div>
                    </div>
                  
                        <div class="row">
                            <div class="col">
                                <h5>Wind speed </h5>
                            </div>
                            <div class="col">
                              <h5>${weather.wspeed}</h5>
                            </div>
                            </div>
              </div>
              
            </div>
          </div>
`

        })
      }
 function checkCity(){
   cwi.style.display='none';
     const cityname = document.getElementById('wsearch').value;
     if(cityname.length == 0)
     {
         alert("Enter A City Name");
     }
     else{
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api}&units=${unit}&lang=${lang}`).then(
           res => res.json()
       ) .then(data =>{
           if(data.cod === '404')
           {
               alert("Enter a valid city name");
           }
           else{
console.log(data);
               this.weather.country = data.sys.country;
               this.weather.city=data.name;
               this.weather.desc=data.weather[0].description;
               this.weather.temp=data.main.temp;
               this.weather.mintemp=data.main.temp_min;
               this.weather.maxtemp=data.main.temp_max;
               this.weather.humidity=data.main.humidity;
               this.weather.wdeg=data.wind.deg;
               this.weather.wspeed=data.wind.speed;
               console.log(this.weather);
               cwi.style.display='block';
               cwi.innerHTML =
               `
               <div class="card-group">
            <div class="card border-info text-white bg-dark">
            <div class="cardheader"><i class='bx bx-location-plus bx-md' style='color:rgba(189,151,151,0.98)'  ></i><h4>Location</h4></div>
              <div class="cards">
                <div class="row">
                    <div class="col">
                        <h5>Country  </h5>
                    </div>
                    <div class="col">
                      <h5>${weather.country}</h5>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>City  </h5>
                        </div>
                        <div class="col">
                          <h5>${weather.city}</h5>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5>Weather  </h5>
                            </div>
                            <div class="col">
                              <h5>${weather.desc}</h5>
                            </div>
                            </div>
            </div>
              
            </div>
            <div class="card text-white bg-warning">
              <div class="cardheader"><i class='bx bxs-sun bx-md' style='color:rgba(241,15,19,0.98)'  ></i><h4>Temperature</h4></div>
              <div class="cards">
                <div class="row">
                    <div class="col">
                        <h6>Temperature  </h6>
                    </div>
                    <div class="col">
                      <h5>${weather.temp}</h5>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h6>Minimum  </h6>
                        </div>
                        <div class="col">
                          <h5>${weather.mintemp}</h5>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h6>Maximum </h6>
                            </div>
                            <div class="col">
                              <h5>${weather.maxtemp}</h5>
                            </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h6>Humidity </h6>
                                </div>
                                <div class="col">
                                  <h5>${weather.humidity}</h5>
                                </div>
                                </div>
              </div>
              
            </div>
            <div class="card border-info text-white bg-dark">
              <div class="cardheader"><i class='bx bx-wind bx-md' style='color:rgba(220,201,202,0.98)'  ></i><h4>Wind</h4></div>
              <div class="cards">
                <div class="row">
                    <div class="col">
                        <h5>Wind deg  </h5>
                    </div>
                    <div class="col">
                      <h5>${weather.wdeg}</h5>
                    </div>
                    </div>
                  
                        <div class="row">
                            <div class="col">
                                <h5>Wind speed </h5>
                            </div>
                            <div class="col">
                              <h5>${weather.wspeed}</h5>
                            </div>
                            </div>
              </div>
              
            </div>
          </div>
`
           }
       }) 
     }
 }