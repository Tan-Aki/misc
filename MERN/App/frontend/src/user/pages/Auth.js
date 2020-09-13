import React, { useState, useContext } from 'react';
import axiosUsers from '../../axios-users';

import './Auth.css';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

const Auth = (props) => {
    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const authSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(formState.inputs);

        if (isLoginMode) {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + '/users/login',
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                    {
                        'Content-Type': 'application/json',
                    }
                );
                auth.login(responseData.userId, responseData.token);
                // console.log(responseData);
            } catch (err) {}
        } else {
            try {
                const formData = new FormData();
                formData.append('email', formState.inputs.email.value);
                formData.append('name', formState.inputs.name.value);
                formData.append('password', formState.inputs.password.value);
                formData.append('image', formState.inputs.image.value);

                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + '/users/signup',
                    'POST',
                    formData
                );

                auth.login(responseData.userId, responseData.token);
            } catch (err) {}
        }
    };

    const switchModeHandler = (event) => {
        if (isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false,
                    },
                    image: {
                        value: null,
                        isValid: false,
                    },
                },
                false
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    image: undefined,
                },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
                // formState.formIsValid
            );
        }

        setIsLoginMode((prevMode) => !prevMode);
    };

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>Login Required</h2>
                <hr />
                <form onSubmit={authSubmitHandler}>
                    {!isLoginMode && (
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            label="You Name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a name"
                            onInput={inputHandler}
                        />
                    )}

                    {!isLoginMode && (
                        <ImageUpload
                            center
                            id="image"
                            onInput={inputHandler}
                            errorText="Please provide an image."
                        />
                    )}
                    <Input
                        element="input"
                        id="email"
                        type="email"
                        label="E-mail"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid email address."
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please enter a valid password, at least 6 characters."
                        onInput={inputHandler}
                    />
                    <Button type="submit" disabled={!formState.formIsValid}>
                        {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                    </Button>
                </form>
                <Button inverse onClick={switchModeHandler}>
                    SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
                </Button>
            </Card>
        </>
    );
};

export default Auth;

//// Axios version and without custom hook

// import React, { useState, useContext } from 'react';
// import axiosUsers from '../../axios-users';

// import './Auth.css';
// import Card from '../../shared/components/UIElements/Card';
// import Input from '../../shared/components/FormElements/Input';
// import Button from '../../shared/components/FormElements/Button';
// import {
//   VALIDATOR_EMAIL,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_REQUIRE,
// } from '../../shared/util/validators';
// import { useForm } from '../../shared/hooks/form-hooks';
// import { AuthContext } from '../../shared/context/auth-context';
// import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
// import ErrorModal from '../../shared/components/UIElements/ErrorModal';

// const Auth = (props) => {
//   const auth = useContext(AuthContext);

//   const [isLoginMode, setIsLoginMode] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();

//   const [formState, inputHandler, setFormData] = useForm(
//     {
//       email: {
//         value: '',
//         isValid: false,
//       },
//       password: {
//         value: '',
//         isValid: false,
//       },
//     },
//     false
//   );

//   const authSubmitHandler = (event) => {
//     event.preventDefault();

//     setIsLoading(true);

//     if (isLoginMode) {
//       const postData = JSON.stringify({
//         email: formState.inputs.email.value,
//         password: formState.inputs.password.value,
//       });
//       axiosUsers
//         .post('login', postData)
//         .then((response) => {
//           console.log(response.data);
//           setIsLoading(false);
//           auth.login();
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//           setIsLoading(false);
//           setError(
//             err.response.data.message ||
//               'Something went wrong, please try again.'
//           );
//         });
//     } else {
//       const postData = JSON.stringify({
//         name: formState.inputs.name.value,
//         email: formState.inputs.email.value,
//         password: formState.inputs.password.value,
//       });
//       axiosUsers
//         .post('signup', postData)
//         .then((response) => {
//           console.log(response.data);
//           setIsLoading(false);
//           auth.login();
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//           setIsLoading(false);
//           setError(
//             err.response.data.message ||
//               'Something went wrong, please try again.'
//           );
//         });
//     }
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   const switchModeHandler = (event) => {
//     if (isLoginMode) {
//       setFormData(
//         {
//           ...formState.inputs,
//           name: {
//             value: '',
//             isValid: false,
//           },
//         },
//         false
//       );
//     } else {
//       setFormData(
//         {
//           ...formState.inputs,
//           name: undefined,
//         },
//         formState.inputs.email.isValid && formState.inputs.password.isValid
//         // formState.formIsValid
//       );
//     }

//     setIsLoginMode((prevMode) => !prevMode);
//   };

//   return (
//     <>
//       <ErrorModal error={error} onClear={errorHandler} />
//       <Card className="authentication">
//         {isLoading && <LoadingSpinner asOverlay />}
//         <h2>Login Required</h2>
//         <hr />
//         <form onSubmit={authSubmitHandler}>
//           {!isLoginMode && (
//             <Input
//               element="input"
//               id="name"
//               type="text"
//               label="You Name"
//               validators={[VALIDATOR_REQUIRE()]}
//               errorText="Please enter a name"
//               onInput={inputHandler}
//             />
//           )}
//           <Input
//             element="input"
//             id="email"
//             type="email"
//             label="E-mail"
//             validators={[VALIDATOR_EMAIL()]}
//             errorText="Please enter a valid email address."
//             onInput={inputHandler}
//           />
//           <Input
//             element="input"
//             id="password"
//             type="password"
//             label="Password"
//             validators={[VALIDATOR_MINLENGTH(5)]}
//             errorText="Please enter a valid password, at least 5 characters."
//             onInput={inputHandler}
//           />
//           <Button type="submit" disabled={!formState.formIsValid}>
//             {isLoginMode ? 'LOGIN' : 'SIGNUP'}
//           </Button>
//         </form>
//         <Button inverse onClick={switchModeHandler}>
//           SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
//         </Button>
//       </Card>
//     </>
//   );
// };

// export default Auth;
