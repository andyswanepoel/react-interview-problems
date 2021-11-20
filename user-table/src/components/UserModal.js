import styles from "./UserModal.module.css";

const UserModalContent = ({ user }) => {
  const dateOfBirth = new Date(user.dob);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${styles["user-info-modal-content-wrapper"]} ${styles["user-info-modal-fade"]}`}
    >
      <h1 className={styles["user-info-modal-header"]}>
        More info on {user.first_name} {user.last_name}
      </h1>
      <div className={styles["user-info-container"]}>
        <div className={styles["user-info-left"]}>
          <img
            className={styles["user-image"]}
            src={user.user_image}
            alt={`${user.first_name} ${user.last_name}`}
          />
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>Age: {user.age}</p>
        </div>
        <div className={styles["user-info-right"]}>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          <p>
            <strong>Date of Birth:</strong> {dateOfBirth.toDateString()}
          </p>
          <p>
            <strong>Number of Years Active:</strong> {user.user_age}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Cell:</strong> {user.cell}
          </p>
        </div>
      </div>
    </div>
  );
};

const UserModalOverLay = ({ closeUserModal, children }) => {
  return (
    <div
      className={styles["user-info-modal-overlay"]}
      onClick={() => closeUserModal()}
    >
      {children}
    </div>
  );
};

const UserModal = ({ user, closeUserModal }) => {
  return (
    <UserModalOverLay closeUserModal={closeUserModal}>
      <UserModalContent user={user} />
    </UserModalOverLay>
  );
};

export default UserModal;
