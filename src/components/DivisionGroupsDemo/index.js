import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner/Spinner';

// By handling exporting the component lazily like this, the component is lazy
// loaded automatically on any import
const DivisionGroupsDemo = dynamic(
  () => import('./DivisionGroupsDemo'),
  { loading: Spinner },
);

export default DivisionGroupsDemo;
