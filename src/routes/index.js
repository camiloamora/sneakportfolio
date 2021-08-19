import Header from '../templates/Header'
import Home from '../pages/Home';
import Slider from '../templates/Slider';
import MenuIntern from '../templates/MenuIntern';

const routes = {
    '/': Home
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const slider = null  || document.getElementById('slider');
    const menuIntern = null || document.getElementById('menuIntern');
    header.innerHTML = await Header();
    slider.innerHTML = await Slider();
    menuIntern.innerHTML = await MenuIntern();
}

export default router;