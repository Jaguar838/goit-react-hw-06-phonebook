import React from 'react';
import { useSelector } from 'react-redux';
import { get_isPhonebook } from 'redux/contacts/selectors';

import { Layout, SectionWrap } from 'UI';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export default function App() {
    const isPhonebook = useSelector(get_isPhonebook);

    return (
        <Layout>
            <SectionWrap title="Phonebook">
                <ContactForm />
            </SectionWrap>

            <SectionWrap title="Contact List">
                {isPhonebook ? (
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
