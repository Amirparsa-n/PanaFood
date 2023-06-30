import React, {useState} from 'react';

import { Tab } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';

// formik
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';

// image
import bg from '../assets/images/fast-food-dish-blue.webp';

// component
import Navbar from '../components/Navbar';
import MobileHeader from '../components/MobileHeader';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const User = () => {

    const [user, setUser] = useState({})
    const [isWelcomeShow, setIsWelcomeShow] = useState(false)

    const [currentTap, setCurrentTap] = useState('Login');

    const setSelectedIndex = (index) => {
        if (index == 0) {
            setCurrentTap('Login');
        } else {
            setCurrentTap('SignUp')
        }
    }

    const submitHandlerSignUp = (errors) => {
    if (!Object.keys(errors).length) {
        toast.success('Registration successful')
    } else {
        toast.error("Registration was not successful")
    }
    }

    const submitHandlerLogin = (errors) => {

    if (Object.keys(user).length) {
        if (!Object.keys(errors).length) {
            toast.success('Login successful')
            setIsWelcomeShow(true);
        } else {
            toast.error("Login was not successful")
            setIsWelcomeShow(false)
        }
    } else {
        toast('Register first!', {
            icon: '❗',
        });
        setIsWelcomeShow(false)
    }
    
    }
    

    return (
        <div className='md:bg-primaryRed md:h-screen bg-none  bg-cover md:bg-contain bg-no-repeat bg-right bg-login-form'>

            <Toaster />

            <div className='md:'>
                <MobileHeader title={currentTap} />
            </div>

            <div className='container'>

                <div className="w-full mt-12" >

                    <Tab.Group onChange={setSelectedIndex}>

                        <Tab.List className="flex space-x-1 rounded-xl bg-primaryRed/20 p-1">
                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primaryRed',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-primaryRed focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-primaryRed hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                            >
                                Login
                            </Tab>

                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primaryRed',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-primaryRed focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-primaryRed hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                            >
                                SignUP
                            </Tab>
                        
                        </Tab.List>

                        <Tab.Panels className="mt-8" id='user'>
                        
                            <Tab.Panel className=''>
                                <div>
                                    <Formik 
                                    initialValues={{name: ''  , email: '', password: '' ,confirmPassword: '', checkbox:false}} 
                                    onSubmit={(values) => {console.log(values)}}
                                    validate={(values) => {
                                        const errors = {};
                                        // console.log(errors)
                                        console.log(user);
                                        
                                        if (values.email !== user.email) {
                                            errors.email = 'The email is not valid'
                                        }

                                        if (values.password !== user.password) {
                                            errors.password = 'The password is not correct'
                                        }

                                        return errors;
                                    }}
                                    >
                                        
                                        {({errors, values, touched, }) => (
                                            
                                            <Form className='flex flex-col justify-center h-full relative bg-form gap-y-4'>
                                                                                            
                                                <div className='relative'>
                                                    <Field
                                                    type="email"
                                                    name='email'
                                                    id="email"
                                                    />
                                                    <label htmlFor="email" className={`labelForm transition-all duration-500 ${values.email && 'translate-y-[-120%] scale-90 transition-all duration-400'}`}>Email</label>
                                                </div>
                                                {errors.email && touched.email && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.email}</span>}


                                                <div className='relative'>
                                                    <Field
                                                    type="password"
                                                    name='password'
                                                    id="password"
                                                    />
                                                    <label htmlFor="password" className={`labelForm transition-all duration-500 ${values.password && 'translate-y-[-120%] scale-90 transition-all duration-400'}`}>Password</label>
                                                </div>
                                                {errors.password && touched.password && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.password}</span>}
                                                
                                                <div className='pt-6'>
                                                    <button 
                                                    type='submit' 
                                                    className={`bg-primaryRed  ${!Object.keys(errors).length && '!bg-green-600'}`} 
                                                    onClick={() => submitHandlerLogin(errors)}>
                                                        Login
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                        
                                    </Formik>
                                    <div className="shape1  bottom-[100px] right-0"></div>
                                    <div className="shape2 top-[200px] left-[-100px]"></div>
                                </div>

                                {isWelcomeShow &&
                                    <div className='bg-form p-8 mt-8 text-center'>
                                        <h2 className='text-xl font-semibold text-slate-700 mb-8'>Welcome {user.name}</h2>

                                        <div className=''>
                                            <Link to={'/'}>
                                            <button type='button' className='bg-primaryRed w-fit py-4 md:py-[22px] px-7 md:px-8 text-white rounded-full shadow-button md:text-2xl'>
                                                Go To Home
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                }

                            </Tab.Panel>

                            {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

                            <Tab.Panel className=''>
                                <div>
                                    <Formik 
                                    initialValues={{name: ''  , email: '', password: '' ,confirmPassword: '', checkbox:false}} 
                                    onSubmit={(values) => {setUser(values)}}
                                    validate={(values) => {
                                        const errors = {};
                                        
                                        const trimmedUsername = values.name.trim();
                                        if (values.name.length < 4) {
                                            errors.name = 'Must contain at least 4 letters'
                                        } else if (trimmedUsername.length !== values.name.length) {
                                            errors.name = 'There should be no gap'
                                        }

                                        const RegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                                        if (!RegexEmail.test(values.email)) {
                                            errors.email = 'The email is not valid'
                                        }

                                        const RegexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/
                                        if (values.password.length < 6) {
                                            errors.password = 'Password must have at least 6 characters'
                                        } else if(!RegexPassword.test(values.password)) {
                                            errors.password = 'Password requires special characters and at least one capital letter.'
                                        }
                                        
                                        if (values.confirmPassword !== values.password) {
                                            errors.confirmPassword = 'Confirm password does not match password.'
                                        }

                                        if (!values.checkbox) {
                                            errors.checkbox = 'Accept the rules'
                                        }

                                        return errors;
                                    }}
                                    >
                                        
                                        {({errors, values, touched, }) => (
                                            
                                            <Form className='flex flex-col justify-center h-full relative bg-form gap-y-4'>
                                                <div className='relative'>
                                                    <Field
                                                    type="text"
                                                    name='name'
                                                    id="name"
                                                    />
                                                    <label htmlFor="name" className={`labelForm transition-all duration-500 ${values.name && 'translate-y-[-120%] scale-90 transition-all duration-400'}`}>Username</label>
                                                </div>
                                                {errors.name && touched.name && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.name}</span>}
                                            
                                                <div className='relative'>
                                                    <Field
                                                    type="email"
                                                    name='email'
                                                    id="email"
                                                    />
                                                    <label htmlFor="email" className={`labelForm transition-all duration-500 ${values.email && 'translate-y-[-120%] scale-90 transition-all duration-400'}`}>Email</label>
                                                </div>
                                                {errors.email && touched.email && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.email}</span>}


                                                <div className='relative'>
                                                    <Field
                                                    type="password"
                                                    name='password'
                                                    id="password"
                                                    />
                                                    <label htmlFor="password" className={`labelForm transition-all duration-500 ${values.password && 'translate-y-[-120%] scale-90 transition-all duration-400'}`}>Password</label>
                                                </div>
                                                {errors.password && touched.password && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.password}</span>}


                                                <div className='relative'>
                                                    <Field
                                                    type="password"
                                                    name='confirmPassword'
                                                    id="ConfirmPassword"
                                                    />
                                                    <label htmlFor="ConfirmPassword" className={`labelForm transition-all duration-500 ${values.confirmPassword && 'translate-y-[-120%] scale-90 transition-all duration-400'}`}>Confirm Password</label>
                                                </div>
                                                {errors.confirmPassword && touched.confirmPassword && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.confirmPassword}</span>}

                                                
                                                <div className='relative flex'>
                                                    <Field
                                                    type="checkbox"
                                                    name='checkbox'
                                                    id="check"
                                                    />

                                                    <label htmlFor="check" className='!text-slate-900 !static'>I accept the terms and conditions.</label>
                                                </div>
                                                {errors.checkbox && touched.checkbox && <span className='bg-red-600 shadow-button shadow-red-500 text-gray-200 rounded-lg px-3 py-0.5 text-sm'>{errors.checkbox}</span>}

                                                
                                                <div className='pt-6'>
                                                    <button 
                                                    type='submit' 
                                                    className={`bg-primaryRed  ${!Object.keys(errors).length && '!bg-green-600'}`} 
                                                    onClick={() => submitHandlerSignUp(errors)}>
                                                        Register
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                        
                                    </Formik>
                                    <div className="shape1  bottom-[100px] right-0"></div>
                                    <div className="shape2 top-[200px] left-[-100px]"></div>
                                </div>
                            </Tab.Panel>

                        </Tab.Panels>

                    </Tab.Group>
                </div>
            </div>
        </div>
    );
};

export default User;





    

