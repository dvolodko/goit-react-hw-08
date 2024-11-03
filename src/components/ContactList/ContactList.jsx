import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function getVisibleContacts(contacts, contactToSearch) {
  return contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .trim()
      .includes(contactToSearch.toLowerCase().trim())
  );
}

function ContactList() {
  const contacts = useSelector(selectContacts);
  const contactToSearch = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, contactToSearch);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
