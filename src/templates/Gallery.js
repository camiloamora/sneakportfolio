import getData from "../utils/GetData";

const Gallery = async () => {
    const photos = await getData();
    console.log(photos);
    const view = `
        <div class="gallery-container">    
            ${photos.map(photo => ` 
                <article class="gallery-item">
                    <figure>
                        <img src="${photo.urls.small}" alt="${photo.user.name}" loading="lazy"  />
                    </figure>
                </article>
        `).join('')}
        </div>
        <div class="gallery-button">
            <button class="btn btn--primary">Show Me More</button>
        <div>
    `;
    return view;
}

export default Gallery;