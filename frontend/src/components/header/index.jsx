import React from 'react';
import {STRUCTURE} from "../../constants/structure"
import {NavLink} from "react-router-dom";
import css from './styles.module.scss';
import {Dropdown} from "react-bootstrap";

export const Header = () => {
    return (
        <div className={css.header}>
            <span className={[css.leftBlock].join(' ')}>
                Логотип
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
                    Петухов Петух
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Мой профиль</Dropdown.Item>
                    <Dropdown.Item href="#/logout">Выйти</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </span>
        </div>
    )
};