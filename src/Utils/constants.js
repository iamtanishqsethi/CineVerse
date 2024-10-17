export const LOGO="https://i.ibb.co/hXMJW5S/Cineverse-10-17-2024-1.png"

export const USER_AVATAR_DEFAULT="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
};


export const IMG_URL="https://image.tmdb.org/t/p/w500"

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg"

export const SUPPORTED_LANGUAGES=[{identifier:"en",name:"English"},{identifier:"hi",name:"Hindi"},{identifier:"spa",name:"Spanish"}]



export const GEMINI_AI_KEY=process.env.REACT_APP_KEY
