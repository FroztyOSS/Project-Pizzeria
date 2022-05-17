import { templates, select } from '../settings.js';


class Home{
  constructor(element){
    const thisHome = this;


    thisHome.render(element);

  }

  render(){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.wrapper = document.querySelector(select.containerOf.home);


  }


}

export default Home;