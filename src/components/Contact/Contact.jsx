import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css'; 

const Contact = ({ id, name, number, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); 
    if (onDelete) {
      onDelete(); 
    }
  };

  return (
    <div className={styles.contact}>
      <p className={styles.contactText}>{name}: {number}</p>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;