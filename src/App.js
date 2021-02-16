import logo from './logo.svg';
import './App.css';
import './jsQuizEngine.css'

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="?">Cristian's test site</a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul id="navbar-intest" class="nav navbar-nav">
                    <li><a href="playground.html">Testing Forms Playground</a></li>
                </ul>

            </div>
        </div>
    </nav>
    <section class="container">

	<div class="alert alert-danger" id="news">
	    <strong>Notice: This is a testing site meant to be used for automation test trainings</strong>
        </div>
	    
        <div id="titleScreen">
            <div class="jumbotron">
                <h1 id="hid">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
                <p>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido u  <a id="myHyperlink" href="https://github.com/criquil/criquil.github.io">this is an hyperlink to my github</a> exam.
                </p>
            </div>

	    <h2>Lorem Ipsum</h2>
            <div id="objaccordian" class="panel-group" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingObj2">
                        <h4 class="panel-title">
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseObj2" aria-expanded="false" aria-controls="collapseObj2">
                                ¿Qué es Lorem Ipsum?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseObj2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj2">
                        <div class="panel-body">
                            <p>
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>


                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingObj4">
                        <h4 class="panel-title">
                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseObj4" aria-expanded="false" aria-controls="collapseObj4">
                                ¿Por qué lo usamos?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseObj4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj4">
                        <div class="panel-body">
                            <p>
                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                            </p>
                        </div>
                    </div>
                </div>


                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingObj1">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseObj1" aria-expanded="true" aria-controls="collapseObj1">
                                ¿De dónde viene?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseObj1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj1">
                        <div class="panel-body">
                            <p>
                                Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

                                El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingObj1">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseObj1" aria-expanded="true" aria-controls="collapseObj1">
                               ¿Dónde puedo conseguirlo?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseObj1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingObj1">
                        <div class="panel-body">
                            <p>
                                Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3>Youtube</h3>
                            <p>this is a an hyperlink to youtube.</p>
                            <p><a href="https://www.youtube.com/" target="_blank" role="button" class="btn btn-primary">Watch Videos</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3>Facebook</h3>
                            <p>this is an hyperlink to Facebook.</p>
                            <p><a href="https://www.facebook.com/"  target="_self" role="button" class="btn btn-primary">Post Something</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3>Selenium</h3>
                            <p>this is an hyperlink to Selenium project.</p>
                            <p><a href="https://www.selenium.dev/"  target="_self" role="button" class="btn btn-primary">Automate It!</a></p>
                        </div>
                    </div>
                </div>       
            </div>
        
        </div>


    </section>
    <footer class="container">
		
        <p><small>Disclaimer: This project is a personal site meant to be used as a help test site to be able to perform some automation test on demand.</small></p>
    </footer>
    </div>
  );
}

export default App;
