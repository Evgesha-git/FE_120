import { useNavigate } from "react-router";

export const useAdmin = (login: boolean) => {
    const navigate = useNavigate();

    return () => {
        if (login) return;
        if (localStorage.getItem('admin')) {
            const uid = JSON.parse(localStorage.getItem('admin') || "");
            return uid.id;
        }
        if (sessionStorage.getItem('admin')) {
            const uid = JSON.parse(sessionStorage.getItem('admin') || "");
            return uid.id;
        }
        if (!login) {
            if (!localStorage.getItem('admin') || !sessionStorage.getItem('admin')) {
                navigate('/');
            }
        }
    }
}