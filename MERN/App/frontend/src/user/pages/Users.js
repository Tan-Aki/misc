import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';

import axiosUsers from '../../axios-users';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users'
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;

///// With axios and without custom http hook

// import React, { useEffect, useState } from 'react';
// import UsersList from '../components/UsersList';

// import axiosUsers from '../../axios-users';
// import ErrorModal from '../../shared/components/UIElements/ErrorModal';
// import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

// const Users = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [loadedUsers, setLoadedUsers] = useState();

//   useEffect(() => {
//     setIsLoading(true);

//     axiosUsers
//       .get()
//       .then((response) => {
//         setLoadedUsers(response.data.users);
//       })
//       .catch((err) => {
//         setError(err.response.data.message);
//       });

//     setIsLoading(false);
//   }, []);

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <>
//       <ErrorModal error={error} onClear={errorHandler} />
//       {isLoading && (
//         <div className="center">
//           <LoadingSpinner />
//         </div>
//       )}
//       {loadedUsers && <UsersList items={loadedUsers} />}
//     </>
//   );
// };

// export default Users;
