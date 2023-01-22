fetch("https://animechan.vercel.app/api/quotes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
       data.map(element=>{
        const ele={
            ...element,
            anime:element.anime,
            character:element.character,
            quote:element.quote

            
       }
       site(ele)
       })
    })
    .catch(error=> console.log(error) )

    function site({anime, character, quote}) {
        document.body.innerHTML +=`<div class="container">
        <p class="anime"><b>Anime:</b>${anime}</p>
        <p class="character"><b>Character:</b>${character}</p>
        <p class="quote"><b>Quote:</b>${quote}</p>
        </div>`;
    }