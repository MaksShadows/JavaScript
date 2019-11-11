const sortContacts = (contactsArray, isAsc = true) => {
  if (!Array.isArray(contactsArray)) return null;
  return contactsArray.sort((a, b) => {
      if (isAsc) {
          return a.name.localeCompare(b.name);
      } else {
          return b.name.localeCompare(a.name);
      }
  });
}
