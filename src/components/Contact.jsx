// import React from 'react';
import { deleteDoc,doc } from "firebase/firestore";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import UseClose from "../hook/UseClose";
import { toast } from "react-toastify";


const Contact = ({contact}) => {
    const {isOpen,onOpen,onClose} = UseClose();
    
    
    

    const deleteCnotact=async(id)=>{
        try{
            await deleteDoc(doc(db,'contact',id))
            toast.success("Contact deleted successfully!");
        }
        catch(error){console.log(error)}
    }
  return (
   <div>
    <div key={contact.id} className="bg-yellow flex justify-between rounded-lg mt-4">
            <div className="flex gap-4 items-center p-2 ">
              <FaRegUserCircle className="text-4xl text-orange " />
              <div >
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <RiEditCircleLine className="text- cursor-pointer" onClick={onOpen}/>
              <IoMdTrash  className="text-3xl text-orange" onClick={()=>deleteCnotact(contact.id)}/>
              
            </div>
          </div>
          <AddAndUpdate 
          isOpen={isOpen} 
          onClose={onClose} 
          isUpdate
          contact={contact}
          
          />
   </div>

  );
}

export default Contact;
