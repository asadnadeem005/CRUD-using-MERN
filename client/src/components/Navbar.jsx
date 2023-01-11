import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background : #000000
`;

const Tabs = styled(NavLink)`
    padding : 0px 10px;
    color : inherit;
    text-decoration : none;

`;

const Navbar = () => {

    return(
        <div>
            <Header position='static'>
                <Toolbar>
                    <Tabs to="/">Home</Tabs>
                    <Tabs to="all">All Users</Tabs>
                    <Tabs to="add">Add User</Tabs>
                </Toolbar>
            </Header>
        </div>
    );
}

export default Navbar;