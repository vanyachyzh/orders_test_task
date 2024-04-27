import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
  const { handleLogout, loadingStatus } = useAuth();

  return (
    <section className="flex flex-col items-center gap-[2rem] text-[2rem] font-semibold">
      This is the "orders" page
      <Button onClick={handleLogout} isLoading={loadingStatus === 'logout'}>
        Log Out
      </Button>
    </section>
  );
};

export default Orders;
