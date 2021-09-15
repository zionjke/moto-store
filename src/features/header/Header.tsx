import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './styles.scss'


export const Header = () => {
    return (
        <header>
            <div className="header__top">
                <div className="container">
                    <div className="header__top-inner">
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <Link to="#" className="menu__link">
                                        Магазины
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="#" className="menu__link">
                                        Акции
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link to="#" className="menu__link">
                                        Доставка и оплата
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <Link to='#' className="logo">
                            <img className="logo__img" src={logo} alt=""/>
                        </Link>
                        <div className="header__box">
                            <p className="header__address">
                                Москва, ул. Науки 25
                            </p>
                            <ul className="user-list">
                                <li className="user-list__item">
                                    <Link className="user-list__link" to="#">

                                    </Link>
                                </li>
                                <li className="user-list__item">
                                    <Link className="user-list__link" to="#">

                                    </Link>
                                </li>
                                <li className="user-list__item">
                                    <Link className="user-list__link" to="#">
                                        <ul className="menu-categories">
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Квадроциклы
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Катера
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Гидроциклы
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Лодки
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Вездеходы
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Снегоходы
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Двигатели
                                                </Link>
                                            </li>
                                            <li className="menu-categories__item">
                                                <Link to="#" className="menu-categories__link">
                                                    Запчасти
                                                </Link>
                                            </li>
                                        </ul>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="header__bottom-inner">

                    </div>
                </div>
            </div>
        </header>
    );
};
