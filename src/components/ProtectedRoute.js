import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../config/firebase';
import { selectUser } from '../store/user/action';

const ProtectedRoute = ({ children }) => {


    const router = useRouter()

    const user = useSelector(selectUser);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // toast.warning('not authorize !')
                router.push('/auth/signin')
            }
            return children
            if (user) {
                dispatch(
                    login({
                        email: user.email,
                        uid: user.uid,
                    })
                );
            }
        });
    }, []);


    if (!user) {
        // toast.warning('not authorize !')
        // alert('not authorize')
    }
    return children
}

export default ProtectedRoute