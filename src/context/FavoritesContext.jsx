import { createContext, useState } from "react";


export const FavoritesContext = createContext()

function FavoritesProvider ( {children} ) {

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (product) => {
        if (!isInFavorites(product.id)) {
            setFavorites([...favorites, product])
        }
    }

    const removeFromFavorites = (productId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== productId));
    }

    const isInFavorites = (productId) => {
        return favorites.some((product) => product.id === productId)
    }


    return (
        <FavoritesContext.Provider value={ {favorites, addToFavorites, removeFromFavorites, isInFavorites} }>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider