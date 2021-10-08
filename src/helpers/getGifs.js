

export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y0CEvea7N2Wo9zqhs44Qsc4RziHL0MVE&q=${ encodeURI(category) }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
    });

    
    return gifs;

}