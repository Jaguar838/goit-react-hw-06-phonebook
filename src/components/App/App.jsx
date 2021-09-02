import React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
// import { getFilteredContacts } from 'redux/contacts/selectors';

// import useLocalStorage from 'hooks/useLocalStorage';
// import testContacts from 'server/contacts.json';

export default function App() {
    // const [contacts, setContacts] = useLocalStorage('contacts', testContacts);
    // const [filter, setFilter] = useState('');

    const isPhonebook = useSelector(state => state.contacts.items.length > 0);
    // const dispatch = useDispatch();

    // const handleChangeFilter = filter => setFilter(filter);

    // const getVisibleContacts = () => {
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase()),
    //     );
    // };

    return (
        <Layout>
            <SectionWrap title="Phonebook">
                <ContactForm />
            </SectionWrap>

            <SectionWrap title="Contact List">
                {!isPhonebook ? (
                    <>
                        <Filter />
                        <ContactList />
                    </>
                ) : (
                    <p>Phonebook is empty</p>
                )}
            </SectionWrap>
        </Layout>
    );
}
