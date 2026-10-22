
import { useContext, useRef } from "react";
import { UserContext } from "../../contexts/UserProvider";

function DeleteUser({ userId }) {
  const { deleteUserHandler, setIsReload, isReload } =
    useContext(UserContext);

  const controllerRef = useRef(null);

  const handleDelete = async () => {
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const success = await deleteUserHandler(
        userId,
        controller
      );

      if (success) {
        setIsReload((prev) => !prev);
      }
    } finally {
      controllerRef.current = null;
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete User
    </button>
  );
}

export default DeleteUser;
