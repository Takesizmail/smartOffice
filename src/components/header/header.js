import React, {Component} from 'react'

import  s from './header.module.scss'
import Logo from './eleks logo.png'
import {NavLink,Link} from "react-router-dom";
class Header extends Component{

    state = {
        isOpenMenu: false
    };

    nav = [{
        title: 'office map',
        link: 'office-map'
    },{
        title: 'room dashboard',
        link: 'room-dashboard'
    },{
        title: 'profile',
        link:'profile'
    }];


    openMenu = () =>{
        this.setState(({isOpenMenu})=>{
            return {
                isOpenMenu: !isOpenMenu
            }
        })
    };
    render() {
        const {isOpenMenu} = this.state;
        const clazz = isOpenMenu ? `${s.header_menu} ${s.active}` : `${s.header_menu}`;
        let mobFriendMenu = isOpenMenu ? 'close' : 'menu';
        return(
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.headerWrap}>
                        <div className={s.header_logo}>
                            <div className={s.header_img}>
                                <Link to='/'>  <img src={Logo} alt="logo-eleks"/></Link>
                            </div>
                            <div className={s.header_name}> smart office</div>
                        </div>
                        <div className={s.header_menu_button}
                             onClick={()=>this.openMenu()}>
                            {mobFriendMenu}
                        </div>
                        <div className={clazz}>
                            {this.nav.map(({title,link}) =>{
                                return(
                                    <NavLink className={s.header_link}
                                          key={link}
                                          to={`/${link}/`}
                                             activeClassName={s.active}
                                             onClick={()=>this.openMenu()}
                                    >
                                        {title}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}
export default Header