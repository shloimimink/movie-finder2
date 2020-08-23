import React from 'react';
import {Link} from "@reach/router";
import RMBDLogo from '../images/reactMovie_logo.png';
import TMBDLogo from '../images/tmdb_logo.svg';
// styled-component
import {StyledHeader, StyledTMDBLogo, StyledRMDBLogo} from "../styles/StyledHeader";

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMBDLogo} alt="rmbd-logo"/>
            </Link>
            <StyledTMDBLogo src={TMBDLogo} alt="tmbd-logo"/>
        </div>
    </StyledHeader>
)


export default Header;