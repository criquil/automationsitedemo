import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const HomeContent = () => {
    const  { loginWithRedirect, isAuthenticated } = useAuth0();  

    if (isAuthenticated) {
        return (
            <div>
                <section className="container">
                    <br></br>
                    <div className="alert alert-danger" id="news">
                        <strong>Notice: This is a testing site meant to be used for automation test trainings</strong>
                    </div>
                    <div id="titleScreen">
                        <div className="jumbotron">
                            <h1 id="hid">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
                            <p>
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido u  <a id="myHyperlink" href="https://github.com/criquil/criquil.github.io">this is an hyperlink to my github</a> exam.
                    </p>
                        </div>
                        <h2>Lorem Ipsum</h2>
                        <div id="objaccordian" className="panel-group" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingObj1">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseObj1" aria-expanded="false" aria-controls="collapseObj1">
                                            ¿Qué es Lorem Ipsum?
                                </a>
                                    </h4>
                                </div>
                                <div id="collapseObj1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj1">
                                    <div className="panel-body">
                                        <p>
                                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingObj2">
                                    <h4 className="panel-title">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseObj2" aria-expanded="false" aria-controls="collapseObj2">
                                            ¿Por qué lo usamos?
                                </a>
                                    </h4>
                                </div>
                                <div id="collapseObj2" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj2">
                                    <div className="panel-body">
                                        <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                                </p>
                                    </div>
                                </div>
                            </div> 
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingObj3">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseObj3" aria-expanded="true" aria-controls="collapseObj3">
                                            ¿De dónde viene?
                                </a>
                                    </h4>
                                </div>
                                <div id="collapseObj3" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj3">
                                    <div className="panel-body">
                                        <p>
                                            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32
    
                                            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.
                                </p>
                                    </div>
                                </div>
                            </div>
    
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingObj4">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseObj4" aria-expanded="true" aria-controls="collapseObj4">
                                            ¿Dónde puedo conseguirlo?
                                </a>
                                    </h4>
                                </div>
                                <div id="collapseObj4" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj4">
                                    <div className="panel-body">
                                        <p>
                                            Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.
                                </p>
                                    </div>
                                </div>
                            </div>
    
                        </div>


                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <h3>Youtube</h3>
                                        <p>this is a an hyperlink to youtube.</p>
                                        <p><a href="https://www.youtube.com/" target="_blank" role="button" className="btn btn-primary">Watch Videos</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <h3>Facebook</h3>
                                        <p>this is an hyperlink to Facebook.</p>
                                        <p><a href="https://www.facebook.com/" target="_self" role="button" className="btn btn-primary">Post Something</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <div className="caption">
                                        <h3>Selenium</h3>
                                        <p>this is an hyperlink to Selenium project.</p>
                                        <p><a href="https://www.selenium.dev/" target="_self" role="button" className="btn btn-primary">Automate It!</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </section>
    
            </div>
        )
      } else {
        return (
            
            <div onLoadStart={()=>loginWithRedirect()}>
                <br></br>

                <h1 id="notLoggedTitleTXT">Welcome to my Atomation Testing Site</h1>
                <h3 id="notLoggedScreen">Please click Login button to log into the application or sign up!</h3>
                </div>
        )
      }


}

export default HomeContent
