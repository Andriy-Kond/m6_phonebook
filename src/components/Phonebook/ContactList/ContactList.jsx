import { useDispatch, useSelector } from "react-redux";
import { removeContactFromPhonebook } from "reduxTools/phonebookSlice";
import { phonebookContacts, phonebookFilter } from "reduxTools/store";

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(phonebookContacts);
  console.log("ContactList >> contacts:::", contacts);

  const filter = useSelector(phonebookFilter);
  console.log("ContactList >> filter:::", filter);

  const removeContact = contactId =>
    dispatch(removeContactFromPhonebook(contactId));

  const visibleContacts = contacts?.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => removeContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
