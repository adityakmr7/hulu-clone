
export const API_KEY = process.env.API_KEY;
export const BASE_URL = `https://api.themoviedb.org/3/`;

export default async function movieHandler(req,res) {
    const {method,query} = req;
    switch(method) {
        case "GET":
            let genre = query.category;
            let url = "";
            if (genre === "trending") {
                url = `${BASE_URL}trending/all/week?api_key=${API_KEY}&language=en-US}`;
              } else if (genre === "top-rated") {
                url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US}`;
              } else if (genre === "action") {
                url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US}`;
              } else if (genre === "comedy") {
                url = `${BASE_URL}discover/movie?with_genres=comedy&api_key=${API_KEY}&language=en-US}`;
              } else {
                url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US}`;
              }
              try {
                const response = await fetch(url);
                const parseJson = await response.json();
                res.status(200).json({ title: genre, data: parseJson });
              } catch (error) {
                res.status(400).json({ msg: "something went wrong" });
              }
              break;
        default:
            res.status(405).end(`Method ${method} Not allowed`);
            break;
    }
}