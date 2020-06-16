import React from 'react';

import OrderedList from '../atoms/OrderedList';
import ListItem from '../atoms/ListItem';
import Message from '../molecules/Message';
import TodoItem from '../molecules/TodoItem';

export default function TodoContent({ items, onComplete }) {
  if (items.length === 0) {
    return (
      <Message message="할 일이 없어요!" />
    );
  }

  return (
    <OrderedList>
      {[...items].map((item) => (
        <ListItem
          key={item.id}
        >
          <TodoItem
            text={item.text}
            onComplete={() => onComplete(item.id)}
          />
        </ListItem>
      ))}
    </OrderedList>
  );
}
