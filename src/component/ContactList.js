import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const {contactList, searchword} = useSelector((state)=>state)
  let [searchList, setSearchList] = useState([]);
  useEffect(()=>{
    if(searchword !== ""){
      let list = contactList.filter((item)=> item.name.includes(searchword))
      setSearchList(list);
    } else {
      setSearchList(contactList)
    }
  },[searchword, contactList])
  return (
    <div>
        <SearchBox></SearchBox>
        num:{searchList.length}
        {searchList.map((item, index)=> (
          <ContactItem item={item} key={index} />
          ))}
    </div>
  );
};

export default ContactList