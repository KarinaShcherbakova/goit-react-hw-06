import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact'; 
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';


const selectContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.filters.name; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter); 
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            <Contact id={id} name={name} number={number} onDelete={() => handleDelete(id)} />
          </li>
        ))
      ) : (
        <li>No contacts found</li> 
      )}
    </ul>
  );
};

export default ContactList;