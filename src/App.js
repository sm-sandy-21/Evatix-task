import './App.css';
import Avatar,{ AvatarItem }  from '@atlaskit/avatar';
import Button from '@atlaskit/button';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

import Pagination from '@atlaskit/pagination';
import Spinner from '@atlaskit/spinner';


function App() {


  return (
    <div className="App">
     <Avatar
      appearance="square"
      size="large"
      src="https://hello.atlassian.net/secure/projectavatar?pid=30630"
      name="Rocket image"
    />
      <AvatarItem backgroundColor="red" avatar={<Avatar presence="online" />} />
      <Button appearance="primary">Primary button</Button>


      <DropdownMenu trigger="Page actions" triggerType="button">
      <DropdownItemGroup>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Share</DropdownItem>
        <DropdownItem>Move</DropdownItem>
        <DropdownItem>Clone</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
        <DropdownItem>Report</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
    <Pagination pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />

    <Spinner />
    </div>
  );
}

export default App;
