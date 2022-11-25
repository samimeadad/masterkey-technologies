import { useEffect, useState } from "react";

// custom hook for Products api call
const useProducts = () => {
    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        fetch( './products.json' )
            .then( res => res.json() )
            .then( data => setProducts( data ) );
        // .then( data => console.log( data ) )
    }, [] );

    //return products state variable and setProducts function
    return [ products, setProducts ];
}

//export the entire function for external use
export default useProducts;