import React from 'react';
import {STRUCTURE} from "../../constants/structure"
import {NavLink} from "react-router-dom";
import css from './styles.module.scss';
import {Dropdown} from "react-bootstrap";
import icon from './multiple-users-silhouette.svg'

export const Header = () => {
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
};