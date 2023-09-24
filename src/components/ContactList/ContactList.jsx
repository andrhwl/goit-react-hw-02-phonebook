import PropTypes from 'prop-types';
import { ContactsItem, DeleteBtn, ListContacts } from './ContactList.styled';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <div>
      <ListContacts>
        {data.map(({ id, tel, name }) => {
          return (
            <ContactsItem key={id}>
              {name}: {tel}
              <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
      </ListContacts>
    </div>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      tel: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
