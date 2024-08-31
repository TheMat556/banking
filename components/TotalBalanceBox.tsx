const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>{/*Donut Chart*/}</div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Accounts:
          {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>Total Current Balance</p>
          <p>Total Balance Amount</p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
