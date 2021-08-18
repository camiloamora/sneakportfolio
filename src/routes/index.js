import Header from '../templates/Header'
import Home from '../pages/Home';
import Slider from '../templates/Slider';

const routes = {
    '/': Home
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const slider = null  || document.getElementById('slider');
    header.innerHTML = await Header();
    slider.innerHTML = await Slider();
}

export default router;