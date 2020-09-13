import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceForm.css';

const NewPlace = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
            address: {
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

    //useCallback to prevent infinite loop ( in relation with the useEffect in Input.js file and the fact that if we change the state of this NewPlace.js component in this function,
    // it will cause a re-render of this component, and therefore  a re-render of this function, and therefore the useEffect in Input.js will trigger again, causing an infi loop)
    // with useCallback this function will not be recreated everytime the component is re-renderered anymore, therefor we break the inifinite loop

    const history = useHistory();

    const placeSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', formState.inputs.title.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('address', formState.inputs.address.value);
            formData.append('image', formState.inputs.image.value);

            await sendRequest(
                process.env.REACT_APP_BACKEND_URL + '/places',
                'POST',
                formData,
                { Authorization: `Bearer ${auth.token}` }
            );

            history.push('/');
        } catch (err) {}
    };

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            <form className="place-form" onSubmit={placeSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay />}
                <Input
                    id="title"
                    element="input"
                    type="text"
                    label="Title"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid title."
                    onInput={inputHandler}
                />
                <Input
                    id="description"
                    element="textarea"
                    label="Description"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description (at least 5 characters)."
                    onInput={inputHandler}
                />
                <Input
                    id="address"
                    element="input"
                    label="Address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid address."
                    onInput={inputHandler}
                />
                <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Please provide an image."
                />

                <Button type="submit" disabled={!formState.formIsValid}>
                    ADD PLACE
                </Button>
            </form>
        </>
    );
};

export default NewPlace;

// import React from 'react';

// import './PlaceForm.css';
// import Button from '../../shared/components/FormElements/Button';
// import Input from '../../shared/components/FormElements/Input';
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH,
// } from '../../shared/util/validators';
// import { useForm } from '../../shared/hooks/form-hooks';
// import { useHttpClient } from '../../shared/hooks/http-hook';

// const NewPlace = (props) => {
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();
//   const [formState, inputHandler] = useForm(
//     {
//       title: {
//         value: '',
//         isValid: false,
//       },
//       description: {
//         value: '',
//         isValid: false,
//       },
//       address: {
//         value: '',
//         isValid: false,
//       },
//     },
//     false
//   );

//   //useCallback to prevent infinite loop ( in relation with the useEffect in Input.js file and the fact that if we change the state of this NewPlace.js component in this function,
//   // it will cause a re-render of this component, and therefore  a re-render of this function, and therefore the useEffect in Input.js will trigger again, causing an infi loop)
//   // with useCallback this function will not be recreated everytime the component is re-renderered anymore, therefor we break the inifinite loop

//   const placeSubmitHandler = (event) => {
//     event.preventDefault();
//     // sendRequest(process.env.REACT_APP_BACKEND_URL +'places',)
//   };

//   return (
//     <form className="place-form" onSubmit={placeSubmitHandler}>
//       <Input
//         id="title"
//         element="input"
//         type="text"
//         label="Title"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid title."
//         onInput={inputHandler}
//       />
//       <Input
//         id="description"
//         element="textarea"
//         label="Description"
//         validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
//         errorText="Please enter a valid description (at least 5 characters)."
//         onInput={inputHandler}
//       />
//       <Input
//         id="address"
//         element="input"
//         label="Address"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid address."
//         onInput={inputHandler}
//       />
//       <Button type="submit" disabled={!formState.formIsValid}>
//         ADD PLACE
//       </Button>
//     </form>
//   );
// };

// export default NewPlace;
