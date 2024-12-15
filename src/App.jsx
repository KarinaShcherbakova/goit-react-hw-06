import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'; 
import ContactForm from './components/ContactForm/ContactForm'; 
import SearchBox from './components/SearchBox/SearchBox'; 
import ContactList from './components/ContactList/ContactList'; 
import styles from './App.module.css'; 

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div className={styles.appContainer}> 
          <h1 className={styles.heading}>Phonebook</h1> 
          <div className={styles.formContainer}> 
            <ContactForm /> 
            <SearchBox /> 
          </div>
          <ContactList /> 
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;