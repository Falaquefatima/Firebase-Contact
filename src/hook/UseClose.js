import {useState} from 'react';

const UseClose = () => {
    const [isOpen,setOpen] = useState(false);
    
    
      const onOpen=()=>{
        setOpen(true);
      }
      const onClose=()=>{
        setOpen(false);
      }
    
  return {onOpen, onClose, isOpen} 
}

export default UseClose;
