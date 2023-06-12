const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b05eb74638d05752db67c7f699c9487f',
    originalImage: (imgPath:string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath:string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig