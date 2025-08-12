import PrivateLayout from '@/features/@shared/components/PrivateLayout';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <PrivateLayout>{children}</PrivateLayout>
);
export default Layout;
