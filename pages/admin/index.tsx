import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import isEmpty from 'validator/lib/isEmpty';
import Cookies from 'js-cookie';

import { FaUser } from 'react-icons/fa/index';
import { RiLockPasswordFill } from 'react-icons/ri/index';
import { useAdminContext, useLanguageContext, useThemeContext } from '../../context';
import { AR, LIGHT } from '../../constants';
import { secureString } from '../../ts/tools';
import { TLEMCEN_ADMIN_COOKIE } from '../../constants';
import { ADMIN_AUTHORIZATION } from '../../constants/api';

const Index = () => {
    const router = useRouter();

    const defaultLanguage = useLanguageContext();
    const defaultTheme = useThemeContext();
    const isAdmin = useAdminContext();

    useEffect(() => {
        if (isAdmin?.isAdmin) {
            router.push('/')
        }
    });

    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // useEffect(() => {

    //     const checkAdminFromCookie = async () => {
    //         const value: string | undefined = Cookies.get(TLEMCEN_ADMIN_COOKIE);
    
    //         if (value) {
    //             await fetch("/api/admin/auth", {
    //                 method: "POST",
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                     "authorization": `Bred ${value}`,
    //                 },
    //             }).then(response => {
    //                 if (response.ok) {
    //                     router.push("/admin/control-panel");
    //                 }
    //             }).catch(e => {
    //                 console.error(e);
    //             });
    //         }
    //     }

    //     checkAdminFromCookie();
    // });
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmit(true);
        e.preventDefault();
                
        // delete all white spaces from start and end and htmlTags and add slashes 
        setUserName(prevUserName => secureString(prevUserName));
        setPassword(prevPassword => secureString(prevPassword));

        if (isEmpty(userName) || isEmpty(password)) {
            setIsSubmit(false);
            setPassword('');
            setUserName('');
            alert("Make sure to enter a correct information");
            return;
        }

        const response = await fetch('/api/admin', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                password,
            }),
        });
        
        if (response.ok) {
            setIsSubmit(false);
            setPassword('');
            setUserName('');
            isAdmin?.setIsAdmin(true);
            router.push('/');
            return;
        }

        let err = await response.json();
        alert(err.msg);
        setIsSubmit(false);
        setPassword('');
        setUserName('');
    }

    return (
        <div className='admin'>
            <form
                method='POST'
                className="admin__login-container f-center"
                onSubmit={handleSubmit}
            >
                <div className="admin__login-container_username">
                    <FaUser
                        fontSize={26}
                        color={
                            (defaultTheme?.theme?.toLowerCase() !== LIGHT) ?
                            "#363636" : "#f3f3fe"
                        }                   
                    />
                    <input
                        type="text"
                        value={userName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                        placeholder={
                            (defaultLanguage?.language?.toLowerCase() === AR) ? 
                            "أدخل اسمك" : "Enter your name"
                        }
                    />
                </div>
                <div className="admin__login-container_password">
                    <RiLockPasswordFill
                        fontSize={26}
                        color={
                            (defaultTheme?.theme?.toLowerCase() !== LIGHT) ?
                            "#363636" : "#f3f3fe"
                        }
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        placeholder={
                            (defaultLanguage?.language?.toLowerCase() === AR) ? 
                            "أدخل كلمة السر" : "Enter your password"
                        }
                    />
                </div>
                <div className="admin__login-container_btn">
                    {
                        !isSubmit && <button type='submit'>
                        {
                            (defaultLanguage?.language?.toLowerCase() === AR) ?
                            "تسجيل دخول" : "Login"
                        }
                        </button>
                    }
                    {
                        isSubmit && <button type='submit' disabled>
                            {
                                (defaultLanguage?.language?.toLowerCase() === AR) ?
                                "تسجيل دخول" : "Login"
                            }
                        </button>
                    }
                </div>
            </form>
        </div>
    );
}

export default Index