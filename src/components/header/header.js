import React, {Component} from 'react'

import  s from './header.module.scss'
import Logo from './eleks logo.png'
import {Link} from "react-router-dom";
class Header extends Component{

    state = {
        filter: '',
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

    changeFilter = (filter) => {
        this.setState({
            filter,
            isOpenMenu:!this.state.isOpenMenu
        })
    };
    openMenu = () =>{
        this.setState(({isOpenMenu})=>{
            return {
                isOpenMenu: !isOpenMenu
            }
        })
    };
    render() {
        const {filter,isOpenMenu} = this.state;
        const clazz = isOpenMenu ? `${s.header_menu} ${s.active}` : `${s.header_menu}`;
        return(
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.headerWrap}>
                        <div className={s.header_logo}>
                            <div className={s.header_img}>
                                <img src={Logo} alt="logo-eleks"/>
                            </div>
                            <div className={s.header_name}> smart office</div>
                        </div>
                        <div className={s.header_menu_button}
                             onClick={()=>this.openMenu()}>
                            menu
                        </div>
                        <div className={clazz}>
                            {this.nav.map(({title,link}) =>{
                                const isActive = filter ===title;
                                const clazz = isActive ? `${s.header_link} ${s.active}` : s.header_link;
                                return(
                                    <Link className={clazz}
                                          key={link}
                                          to={link}
                                          onClick={()=> this.changeFilter(title)}
                                    >
                                        {title}
                                    </Link>
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