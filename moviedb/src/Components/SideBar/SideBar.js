import s from './SideBar.module.css'
import {Link} from "react-router-dom";

export default function SideBar(){
    return(
        <div className={s.container}>
            <div className={s.navbar}>
                <div className={s.navbarItem}>
                    <Link to={''} style={{ textDecoration: 'none'}}>
                        <div className={s.item}>
                            Home Page
                        </div>
                    </Link>
                </div>
                <div className={s.navbarItem}>
                    <Link to={'/movies'} style={{ textDecoration: 'none' }}>
                        <div className={s.item}>
                            Movies
                        </div>
                    </Link>
                </div>
                <div className={s.navbarItem}>
                    <Link to={'/tv'} style={{ textDecoration: 'none' }}>
                        <div className={s.item}>
                            TV Show
                        </div>
                    </Link>
                </div>
                <div className={s.navbarItem}>
                    <Link to={'/people'} style={{ textDecoration: 'none' }}>
                        <div className={s.item}>
                            People
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}