import React from 'react';
import '../../style.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const AboutUs = () => {
    return (
        <div className="containerAboutUs">
            <Header/>
            <main>
                <div class="content">
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Nisi dignissimos labore architecto, dolorem fugiat. Vel, facere vitae voluptates doloremque. Facilis odit quas quis odio repellendus consequuntur, ad corporis libero fuga!
                    Aperiam odit, consequuntur. Perferendis nulla neque eum quisquam incidunt, fugiat ad numquam libero sit, eius, dolore delectus nihil aut vitae blanditiis architecto quasi, sapiente similique vero debitis consequatur fugit quibusdam?
                    Repellendus aperiam perferendis, vitae pariatur aspernatur tenetur atque, quo quod provident architecto odio quisquam iusto excepturi ex consectetur delectus beatae aut natus, eos, iste illo! Culpa saepe impedit vero explicabo!</p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutUs;