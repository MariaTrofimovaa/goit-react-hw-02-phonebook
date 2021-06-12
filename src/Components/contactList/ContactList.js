import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contact}>
          {contact.name}: {contact.number}
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;

// ************** Почему не могу вынести в отдельный компонент? В ContactListItem консольбъет ошибку: onDelete is not a function

// import React from "react";
// import ContactListItem from "./contactListItem/ContactListItem";

// const ContactList = ({ filteredContacts }) => {
//   return (
//     <ul>
//       {filteredContacts.map((contact) => (
//         <ContactListItem key={contact.id} contact={contact} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
