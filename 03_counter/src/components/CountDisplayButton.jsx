import React from 'react';

import Button from './Button';

export default function CountDisplayButton({ count, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </Button>
  );
}
