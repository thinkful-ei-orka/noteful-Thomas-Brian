
export default function ApiCalls(props){
    const Url = 'http://localhost:9090/'

    return fetch(Url + props)
                .then((r) => r.json())
        // .then((data)=>console.log(data))
        // .catch((error)=>console.log(error.message));
}