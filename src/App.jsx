import Navbar from "./components/Navbar";
import Input from "./components/Input";
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";
import { collection,  onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Contact from "./components/Contact";
import AddAndUpdate from "./components/AddAndUpdate";
import UseClose from "./hook/UseClose";
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onOpen,onClose} = UseClose();


  // const onOpen=()=>{
  //   setOpen(true);
  // }
  // const onClose=()=>{
  //   setOpen(false);
  // }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        // const contactSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList
        });
       
      } catch (error) {console.log(error); }
    };
    getContacts();
  }, []);

  return (
    <>
     <div className="mx-auto max-w-[370px]">
      <Navbar />
      <Input onOpen={onOpen}/>
      <div >
        {contacts.length<=0 ? <NotFoundContact/> :contacts.map((contact) => (
          <Contact key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
   <AddAndUpdate isOpen={isOpen} onClose={onClose}/>
   <ToastContainer position="bottom-center"/>
    </>
   
  );
};

export default App;
