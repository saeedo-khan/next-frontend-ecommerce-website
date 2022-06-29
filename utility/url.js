const API_URL =  `${process.env.NEXT_PUBLIC_STRAPI_HEROKU}`


/**
 * given an image return url
 * Works for local deployed strapis
 * @param {any} image
 */

export const formImageToUrl = (image) => {
    if(!image){
        return '/vercel.svg'
    }

    if(image.url.indexOf('/') === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}