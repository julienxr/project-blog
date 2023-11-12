import CodeSnippet from '@/components/CodeSnippet/CodeSnippet';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';

const COMPONENT_MAP = {

  pre: (props) => (
    <CodeSnippet {...props} />
  ),
  DivisionGroupsDemo,
}

export default COMPONENT_MAP;
