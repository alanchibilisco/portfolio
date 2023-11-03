import mernLogo from "/mern-1.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { toAbsoluteUrl } from "./helpers";
//import pdfExperto from './assets/Certificadosexperto.pdf';
function App() {
  return (
    <>
      <header>
        <div className="d-flex justify-content-center py-2 mt-2 mb-5">
          <span className="d-flex justify-content-center align-items-center">
            <img src={mernLogo} className="logo fs-4 p-0 m-0" alt="MERN logo" />
            <h1 className=" fst-roboto title fs-1 text-white p-0 mt-5 mb-5 ms-2">
              Alan Chibilisco
            </h1>
          </span>
        </div>

        <Navbar bg="dark" data-bs-theme="dark" className="">
          <Container className="d-flex justify-content-center">
            <Nav className="">
              <Nav.Link href="#aboutme" className="title fw-bolder">
                Sobre mi
              </Nav.Link>
              <Nav.Link href="#skills" className="title fw-bolder">
                Habilidades
              </Nav.Link>
              <Nav.Link href="#cv" className="title fw-bolder">
                Curriculum
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main className="container mt-3 border border-danger text-light">
        <section id="aboutme">
          <div className="container">
            <article>
              <Row>
                <Col className="text-center">
                  <h2 className="h2 title">Sobre mi</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <p className="">
                    Soy Alan, un apasionado programador Full Stack con
                    experiencia en tecnologías MERN (MongoDB, Express.js, React
                    y Node.js) y conocimiento de Java. Mi enfoque va más allá
                    del código, ya que me enorgullece combinar mis habilidades
                    técnicas con "soft skills" que fomentan la colaboración
                    efectiva y la creación de soluciones innovadoras.
                  </p>
                </Col>
              </Row>
            </article>
            <article className="border border-light rounded-4 p-3 mt-5">
              <Row>
                <Col className="text-start">
                  <h3 className="h3">Experiencia Laboral</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <h4 className="ms-3">
                    <li>
                      <a
                        href="https://www.grupomassasistencia.com/"
                        target="_blank"
                        className="text-decoration-none text-white"
                      >
                        Grupos Mass Asistencia
                      </a>
                    </li>
                  </h4>
                  <div className="ms-5">
                    <p className="">M.E.R.N FullStack Developer - Full Time</p>
                    <p className="">Abril 2022 - Actualidad</p>
                    <p>
                      <li>
                        <strong>Proyecto:</strong> Sistema de gestión de
                        servicios de asistencia a pacientes, grúas, delivery,
                        hogar, mascotas, etc.
                      </li>
                    </p>
                    <p>
                      <li>
                        <strong>Responsabilidades:</strong> Diseñar, desarrollar
                        y mantener funcionalidades, asegurando que estén
                        alineadas con los requerimientos de la empresa
                      </li>
                    </p>
                    <p>
                      <li>
                        <strong>Tecnologías utilizadas:</strong>{" "}
                        React-TypeScript, Google Cloud Services, Socket.IO,
                        Docker, Node.js, Express.js, Mongoose, mongoDB, Vite.ts,
                        Swagger, Jest, MySql, Sequelize.
                      </li>
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <h4 className="ms-3">
                    <li>
                      <a
                        href="https://rollingcodeschool.com/"
                        target="_blank"
                        className="text-decoration-none text-white"
                      >
                        Rolling Code School
                      </a>
                    </li>
                  </h4>
                  <div className="ms-5">
                    <p className="">
                      Docente Mentor - Curso M.E.R.N Web Full-Stack - Part time
                    </p>
                    <p className="">Junio 2022 - Actualidad</p>
                  </div>
                  <h4 className="mt-3 ms-3">
                    <li>Real Construcciones y Servicios SRL</li>
                  </h4>
                  <div className="ms-5">
                    <p className="">
                      Administrativo Contable - Jefe de Compras - Administrativo
                      RRHH
                    </p>
                    <p className="">Abril 2014 a Julio 2022</p>
                  </div>
                  <h4 className="mt-3 ms-3">
                    <li>Giacosa y Cía. SRL</li>
                  </h4>
                  <div className="ms-5">
                    <p className="">
                      Administrativo Contable - Ejecutivo de cuentas
                    </p>
                    <p className="">Mayo 2007 a Marzo 2014</p>
                  </div>
                </Col>
              </Row>
            </article>
            <article className="border border-light rounded-4 p-3 mt-5">
              <Row>
                <Col className="text-start">
                  <h3 className="h3">Educación</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div>
                    <object
                      data={toAbsoluteUrl(
                        "/src/assets/Certificadosexperto.pdf"
                      )}
                      type="application/pdf"
                      width="100%"
                      className="h-pdf"
                    >
                      <p>
                        Tu navegador no puede mostrar este PDF. Puedes{" "}
                        <a
                          href={toAbsoluteUrl(
                            "/src/assets/Certificadosexperto.pdf"
                          )}
                          target="_blank"
                        >
                          descargarlo aquí
                        </a>
                      </p>
                    </object>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div>
                    <object
                      data={toAbsoluteUrl("/src/assets/RollingCodeSchool.pdf")}
                      type="application/pdf"
                      width="100%"
                      className="h-pdf"
                    >
                      <p>
                        Tu navegador no puede mostrar este PDF. Puedes{" "}
                        <a
                          href={toAbsoluteUrl(
                            "/src/assets/RollingCodeSchool.pdf"
                          )}
                          target="_blank"
                        >
                          descargarlo aquí
                        </a>
                      </p>
                    </object>
                  </div>
                </Col>
              </Row>
            </article>
          </div>
        </section>
        <hr />
        <section id="skills">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          doloribus veritatis sequi reprehenderit porro natus quas ex doloremque
          eaque iure error blanditiis asperiores sunt perspiciatis, voluptatum
          accusantium dolorum quia aliquid! Enim quia nam, natus quaerat quo at,
          harum minima laudantium error facilis pariatur? Iure dicta eaque
          consectetur soluta et suscipit obcaecati exercitationem impedit ab
          beatae aspernatur consequuntur deserunt, alias iste maxime ea nesciunt
          dolore tempora. Sequi nostrum laborum quia, temporibus repudiandae
          accusamus quo eum alias officia voluptatum animi vero hic eaque,
          facilis dolorem facere! Eos excepturi quasi quo nostrum nisi? Debitis
          eos autem saepe illum ipsum molestiae, excepturi ipsa quis culpa odio
          corporis tempora earum laudantium temporibus exercitationem ab
          nesciunt deserunt inventore cum vero corrupti placeat. Quidem
          dignissimos facere officiis maxime. Exercitationem, sapiente ipsam.
          Tenetur temporibus alias, porro, labore quis doloribus corporis error
          officiis veritatis debitis similique! Fugit ex aliquid magni minima
          deserunt, unde placeat reprehenderit. Quas architecto perspiciatis
          quisquam.
        </section>
        <hr />
        <section id="cv" className="container">
          <Row>
            <Col className="text-center">
              <h2 className="h2 title">Curriculum Vitae</h2>
            </Col>
          </Row>
          <article className="p-3 mt-5">
            <Row>
              <Col xs={12}>
                <div>
                  <object
                    data={toAbsoluteUrl("/src/assets/CV - Chibilisco Alan 2023.pdf")}
                    type="application/pdf"
                    width="100%"
                    className="h-cv"
                  >
                    <p>
                      Tu navegador no puede mostrar este PDF. Puedes{" "}
                      <a
                        href={toAbsoluteUrl(
                          "/src/assets/CV - Chibilisco Alan 2023.pdf"
                        )}
                        target="_blank"
                      >
                        descargarlo aquí
                      </a>
                    </p>
                  </object>
                </div>
              </Col>
            </Row>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
