import CodeSnippet from '@/components/CodeSnippet/CodeSnippet';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';

const COMPONENT_MAP = {

  pre: (props) => (
    <CodeSnippet {...props} />
  ),
  DivisionGroupsDemo,
  CircularColorsDemo,
}

export default COMPONENT_MAP;
