import React, { Suspense } from 'react';
import '../styles/NullStyles.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from '../pages/pages.lazy/AboutPage.lazy';
import { ContactsPageLazy } from '../pages/pages.lazy/ContactsPage.lazy';
import { MainPageLazy } from '../pages/pages.lazy/MainPage.lazy';
import classes from '../styles/HeaderStyles.module.scss';
import { WorksPageLazy } from '../pages/pages.lazy/WorksPage.lazy';
import Loading from './Loading';

function Header() {
        return (
            <div>
                <div className={classes.header}>
                    <Link className={classes.link} to={'/'}>Main</Link>
                    <Link className={classes.link} to={'/about'}>About me</Link>
                    <Link className={classes.link} to={'/works'}>Works</Link>
                    <Link className={classes.link} to={'/contacts'}>Contacts</Link>   
                </div>
                    <Suspense fallback={<Loading/>}>
                        <Routes>
                            <Route path={'/'} element={<MainPageLazy/>}></Route>
                            <Route path={'/about'} element={<AboutPageLazy/>}></Route>
                            <Route path={'/works'} element={<WorksPageLazy />}></Route>
                            <Route path={'/contacts'} element={<ContactsPageLazy/>}></Route>
                        </Routes>
                    </Suspense>
            </div>
        );
    }

export default Header;
