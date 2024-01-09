import React, { useState } from 'react';
import { BottomSheet, Footer } from '@/atoms';
import RecentTransactions from './RecentTransactions';
import AddTransaction from './AddTransaction';

const FooterActions = ({ setShowProfilePane }) => {
  const [showRecentTransactionsPane, setshowRecentTransactionsPane] = useState(false);

  const [showAddTransactionPane, setShowAddTransactionPane] = useState(false);
  return (
    <>
      <Footer
        showRecentTransactions={() => {
          setshowRecentTransactionsPane(true);
        }}
        addTransaction={() => {
          setShowAddTransactionPane(true);
        }}
        setShowProfilePane={setShowProfilePane}
      />
      <BottomSheet isOpen={showRecentTransactionsPane} toggleSheet={setshowRecentTransactionsPane}>
        <RecentTransactions />
      </BottomSheet>

      <BottomSheet isOpen={showAddTransactionPane} toggleSheet={setShowAddTransactionPane}>
        <AddTransaction onCancel={() => setShowAddTransactionPane(false)} />
      </BottomSheet>
    </>
  );
};

export default FooterActions;
