import { ItemRow, TableBody } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <table>
      <TableBody>
        {contacts.map(({ id, name, number }) => {
          return (
            <ItemRow key={id}>
              <td>{`${name}: `}</td>
              <td>{number}</td>
              <td>
                <button type="button" onClick={() => onDelete(id)}>
                  Delete
                </button>
              </td>
            </ItemRow>
          );
        })}
      </TableBody>
    </table>
  );
};
