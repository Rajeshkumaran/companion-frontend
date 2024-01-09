import React from 'react';
import Sheet from 'react-modal-sheet';

const BottomSheet = ({ isOpen, toggleSheet, children }) => {
  return (
    <Sheet isOpen={isOpen} onClose={() => toggleSheet(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
