import { createContext, useContext, useState, ReactNode } from "react";
import { GithubUser } from "@/hooks/useGithubUsers";

interface FavoritesContextType {
  favorites: GithubUser[];
  toggleFavorite: (user: GithubUser) => void;
  isFavorite: (login: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<GithubUser[]>([]);

  const toggleFavorite = (user: GithubUser) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.some((fav) => fav.login === user.login);
      if (isAlreadyFav) {
        return prev.filter((fav) => fav.login !== user.login);
      } else {
        return [...prev, user];
      }
    });
  };

  const isFavorite = (login: string) => {
    return favorites.some((user) => user.login === login);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};
