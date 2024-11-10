import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { MdPerson, MdPersonRemove, MdPhone } from 'react-icons/md';
import { deleteContact } from '../../redux/contactsOps';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contact}>
      <div className={css.contactDetails}>
        <p className={css.contactText}>
          <MdPerson className={css.icon} /> {name}
        </p>
        <p className={css.contactText}>
          <MdPhone className={css.icon} /> {number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.deleteButton}>
        <MdPersonRemove className={css.icon} />
      </button>
    </li>
  );
}

export default Contact;
