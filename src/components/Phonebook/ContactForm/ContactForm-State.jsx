import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { addContactToPhonebook } from "reduxTools/phonebookSlice";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { phonebookContacts, phonebookFilter } from "reduxTools/store";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookContacts);
  const filter = useSelector(phonebookFilter);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addContact = pushedContact => {
    // const name = e.currentTarget.elements.name.value;
    // const number = e.currentTarget.elements.number.value;
    const { name, number } = pushedContact;
    const newContact = { id: nanoid(), name, number };

    const isExistContact = contacts.find(contact => contact.name === name);

    isExistContact
      ? Notify.warning(`Contact ${name} already in contact book`)
      : dispatch(addContactToPhonebook(newContact));
    // setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleContact = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        return setName(value);

      case "number":
        return setNumber(value);

      default:
        throw new Error(`Cannot to process the case of ${name}`);
    }
  };

  const clearState = () => {
    setName("");
    setNumber("");
  };

  const handleAddContact = e => {
    e.preventDefault();

    const newContact = { name, number };
    addContact(newContact);

    // e.currentTarget.reset(); // - не спрацьовує на контрольованих елементах форми
    clearState();
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleContact}
        />
      </label>

      <label>
        Telephone
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleContact}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
