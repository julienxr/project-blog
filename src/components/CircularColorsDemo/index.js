import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';

const CircularColorsDemo = dynamic(() =>
  import('./CircularColorsDemo'),
  { loading: Spinner },
)

export default CircularColorsDemo;

