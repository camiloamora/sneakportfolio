import logo from '../assets/images/logo_sneak.png'
import iconFind from '../assets/images/icon_find.png'

const Header = () => {
    const view = `
        <div class="Header-wrapper">
            <img src=${logo} alt="sneak portfolio" class="Header-logo" width="184" />
            <input type="checkbox" id="menu" class="Header-menu-checkbox">
            <nav class="Header-menu">
                <ul class="Header-menu--inline">
                    <li class="Header-menu-item Header-menu-checkbox--active">
                        <a href="">All</a>
                    </li>
                    <li class="Header-menu-item">
                        <a href="">Branding</a>
                    </li>
                    <li class="Header-menu-item">
                        <a href="">Web</a>
                    </li>                    
                    <li class="Header-menu-item">
                        <a href="">Photography</a>
                    </li>
                    <li class="Header-menu-item">
                        <a href="">App</a>
                    </li>
                    <li class="Header-menu-item">
                        <a href="">
                            <img src=${iconFind} alt="find" />
                        </a>
                    </li>
                </ul>
            </nav>
            <label for="menu" class="Header-menu-button"></label>
        </div>
    `;

    return view;
}

export default Header;