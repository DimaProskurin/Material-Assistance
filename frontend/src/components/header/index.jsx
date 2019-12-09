import React from 'react';
import {STRUCTURE} from "../../constants/structure"
import {NavLink, withRouter} from "react-router-dom";
import css from './styles.module.scss';
import {Dropdown} from "react-bootstrap";
import icon from './multiple-users-silhouette.svg'
import {fetchAuth, fetchCategories, fetchCompensations} from "../../actions";
import {connect} from "react-redux";
import {MainRouter} from "../../routes";

export class Header extends React.Component {
    render() {
        if (this.props.authed) {
            return (
                <div className={css.header}>
                    <span className={[css.leftBlock].join(' ')}>
                        <img width={"48px"} height={"48px"} src={icon} alt=""/>
                    </span>

                    <span className={css.centerBlock}>
                        {Object.values(STRUCTURE).map((link, index) =>
                            <NavLink
                                key={index}
                                to={link.route}
                                exact={true}
                                className={css.link}
                                activeClassName={css.linkActive}
                            >
                                {link.title}
                            </NavLink>)}
                    </span>

                    <span className={css.rightBlock}>
                        <Dropdown className={css.dropdownLink}>
                            <Dropdown.Toggle style={{all: "unset"}}>
                                Проскурин Дмитрий
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Выйти</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                </div>
            )
        } else {
            return (
                <div className={css.header}>
                    <span className={[css.leftBlock].join(' ')}>
                        <img width={"48px"} height={"48px"} src={icon} alt=""/>
                    </span>

                    <span className={css.centerBlock}>

                    </span>

                    <span className={css.rightBlock}>
                        Не авторизован
                    </span>
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        authed: state.fetch.authed,
    };
};

Header = connect(mapStateToProps, undefined)(Header);

export default Header;