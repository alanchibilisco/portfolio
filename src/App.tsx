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

        <Navbar bg="dark" data-bs-theme="dark" className="" expand="lg">
          <Container className="d-flex  justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
                <Nav.Link href="#links" className="title fw-bolder">
                  Links
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="container mt-3 text-light">
        <section id="aboutme">
          <div className="container">
            <article>
              <Row>
                <Col className="text-center">
                  <h2 className="h1 title">Sobre mi</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-center">
                  <p className="fs-3">
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
            <article className="p-3 mt-5">
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
            <article className="p-3 mt-5">
              <Row>
                <Col className="text-start">
                  <h3 className="h3">Educación</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div>
                    <object
                      data={toAbsoluteUrl("/Certificadosexperto.pdf")}
                      type="application/pdf"
                      width="100%"
                      className="h-pdf"
                    >
                      <p>
                        Tu navegador no puede mostrar este PDF. Puedes{" "}
                        <a
                          href={toAbsoluteUrl("/Certificadosexperto.pdf")}
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
                      data={toAbsoluteUrl("/RollingCodeSchool.pdf")}
                      type="application/pdf"
                      width="100%"
                      className="h-pdf"
                    >
                      <p>
                        Tu navegador no puede mostrar este PDF. Puedes{" "}
                        <a
                          href={toAbsoluteUrl("/RollingCodeSchool.pdf")}
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

        <section id="skills" className="mt-5">
          <div className="container">
            <article>
              <Row>
                <Col className="text-center">
                  <h2 className="h1 title">Habilidades</h2>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} md={12}>
                  <h4 className="mb-3 text-center">Hard Skills</h4>
                  <Row>
                    <Col
                      xs={12}
                      md={6}
                      className="d-md-flex flex-md-column align-items-md-center"
                    >
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/typescript-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Typescript
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/javascript-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Javascript
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/java-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Java
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/react-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          React
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/vite-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Vite
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/jest-snapshot-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Jest
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/socket-io-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                          className="bg-light rounded-4 p-1"
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Socket IO
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/docker-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Docker
                        </p>
                      </p>
                    </Col>
                    <Col xs={12} md={6} className="d-md-flex flex-md-column align-items-md-center">
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/express-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                          className="bg-light rounded-4 p-1"
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Express
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/google-cloud-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Google Cloud Services
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/node-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Node.js
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/swagger-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          Swagger
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/mongo-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          MongoDB
                        </p>
                      </p>
                      <p className="ms-5 d-flex">
                        <img
                          src={toAbsoluteUrl("/mysql-svgrepo-com.svg")}
                          width={"32px"}
                          height={"32px"}
                        />
                        <p className="pt-1 ms-1" style={{ height: 32 }}>
                          MySql
                        </p>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col
                  xs={12}
                  md={12}
                  className="d-md-flex flex-md-column align-items-md-center"
                >
                  <h4 className="mb-3">Soft Skills</h4>
                  <div className="ms-5">
                    <ul>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Autodidacta continuo</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Comunicación efectiva</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Trabajo en equipo</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Resolución de problemas</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Pensamiento critico</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Adaptabilidad</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Creatividad</li>
                      </p>
                      <p className="pt-1" style={{ height: 32 }}>
                        <li>Organización</li>
                      </p>
                    </ul>
                  </div>
                </Col>
              </Row>
            </article>
          </div>
        </section>

        <section id="cv" className="container mt-5">
          <Row>
            <Col className="text-center">
              <h2 className="h1 title">Curriculum Vitae</h2>
            </Col>
          </Row>
          <article className="p-3">
            <Row>
              <Col xs={12}>
                <div>
                  <object
                    data={toAbsoluteUrl("/CV - Chibilisco Alan 2023.pdf")}
                    type="application/pdf"
                    width="100%"
                    className="h-cv"
                  >
                    <p>
                      Tu navegador no puede mostrar este PDF. Puedes{" "}
                      <a
                        href={toAbsoluteUrl("/CV - Chibilisco Alan 2023.pdf")}
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
        <section id="links" className="my-5 py-3">
          <article>
            <Row className="mb-3">
              <Col className="text-center">
                <h2 className="h1 title">Links</h2>
              </Col>
            </Row>
            <footer className="d-flex justify-content-around mt-5">
              <a
                href="https://github.com/alanchibilisco?tab=repositories"
                target="_blank"
              >
                <img
                  src={toAbsoluteUrl("/github-142-svgrepo-com.svg")}
                  alt="Github Logo"
                  width={"50px"}
                  height={"50px"}
                  className="bg-white rounded-5 p-1"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alan-antonio-chibilisco-0490bb62"
                target="_blank"
              >
                <img
                  src={toAbsoluteUrl("/linkedin-svgrepo-com.svg")}
                  alt="LinkedIn Logo"
                  width={"50px"}
                  height={"50px"}
                  className="bg-white rounded-5 p-1"
                />
              </a>
              <a href="mailto:alan.chibilisco@gmail.com" target="_blank">
                <img
                  src={toAbsoluteUrl("/gmail-svgrepo-com.svg")}
                  alt="Gmail Logo"
                  width={"50px"}
                  height={"50px"}
                  className="bg-white rounded-5 p-1"
                />
              </a>
            </footer>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
