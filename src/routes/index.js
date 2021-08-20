import Header from '../templates/Header'
import Home from '../pages/Home';
import Slider from '../templates/Slider';
import MenuIntern from '../templates/MenuIntern';
import Gallery from '../templates/Gallery';
import Footer from '../templates/Footer';

const routes = {
    '/': Home
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const slider = null  || document.getElementById('slider');
    const menuIntern = null || document.getElementById('menuIntern');
    const gallery = null || document.getElementById('gallery');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    slider.innerHTML = await Slider();
    menuIntern.innerHTML = await MenuIntern();
    gallery.innerHTML = await Gallery();
    footer.innerHTML = await Footer();
}

export default router;