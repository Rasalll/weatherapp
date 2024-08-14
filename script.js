const getWeather=async()=>{
    let result=''
    const city=wtr.value
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=0f3e43ac83554731bca104858241408&q=${city}`)
    const jres=await res.json()
    console.log(jres)

    result=`
    <h3>${jres.location.name},${jres.location.region},${jres.location.country}</h3>
    <img src=${jres.current.condition.icon} alt="icc">
    <h5>${jres.current.condition.text}</h5>

    `
   loc.innerHTML=result
}