import Hero2Register from "./Hero2Register/Hero2Register";
import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import Auth from "./Auth/Auth";
import MainLayout from '../Layouts/MainLayouts/MainLayouts'
import CreateManga from '../Components/CreateManga/CreateManga'
import NewChapter from "./NewChapter/NewChapter";
import PagesChapter from "./PagesChapters/Page"
import Mangas from "../Pages/Mangas/Mangas"
import { createBrowserRouter } from "react-router-dom";
import AuthorForm from "./AuthorFrom/AuthorForm";

/**
 * @createBrouserRouter recibe un array de objetos cada objeto tiene 2 propiedades..
 * @path la ruta
 * @element el elemento (componente de página que se renderizará en esa ruta)
 */
export const router = createBrowserRouter([
    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
            {
                index: true, 
                element: <Index/>
            },
            {
                path: "/*",
                element: <NotFound/>
            }
        ]
    },
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/signup", 
                element: <Hero2Register/>
            },
            {
                path: "/signin",
                element: <Auth/>
            },
            {
                path: "/createmanga",
                element: <CreateManga/>
            },
            {
                path: "/mangas",
                element: <Mangas/>
            },
            {
                path: "/chapters-form", 
                element: <NewChapter/>
            },
            {
                path: "/chapters/:id/:page",
                element: <PagesChapter/>
            },
            {
                path: "/author",
                element: <AuthorForm/>
            },
            {
                path: "/*",
                element: <NotFound/>  
            }
        ]
    },
    {
        path: "/*", 
        element: <NotFound/>
    }
]);

