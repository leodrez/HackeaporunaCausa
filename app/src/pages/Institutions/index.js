import React from 'react';
import './styles.scss'
import { CardStack, Card } from 'react-cardstack';

const Institution = () => {
  const cardStyles = { fontSize: 18, textAlign: 'right', marginRight: 20 };
  return (
    <div id="list">
      <CardStack
        height="625"
        width="100%"
        background='#f8f8f8'
        hoverOffset={25}>

        <Card background='#2980B9'>
          <h1 className="header1">
            Institución 1
          </h1>
          <img
            className="institution-image"
            src={require('../../assets/voluntarios2.png')}/>
          <p className="institucion-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <h4 className="list" style={cardStyles}>About Us</h4>
        </Card>

        <Card background='#27AE60'>
          <h1 className="header1">Institución2</h1>
          <img
            className="institution-image"
            src={require('../../assets/image.png')}/>
          <p className="institucion-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>

          <h4 className="list" style={cardStyles}>About Us</h4>
        </Card>

        <Card background='orange'>
          <h1 className="header1">Institución 3</h1>
          <img
            className="institution-image"
            src={require('../../assets/certificado.png')}/>
          <p className="institucion-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>

          <h4 className="list" style={cardStyles}>About Us</h4>
        </Card>

        <Card background='red'>
          <h1 className="header1">Institución 4</h1>
          <img
            className="institution-image"
            src={require('../../assets/logo-bgcpr.jpg')}
          />
          <p className="institucion-text">
            En cada comunidad, niños, niñas y jóvenes tienen que buscar sus propias
            alternativas para combatir el ocio y buscar compañía en las calles. Un gran
            número de niños y jóvenes se quedan solos después de la escuela y sin
            supervisión de un adulto. Ellos necesitan saber que alguien se preocupa por
            ellos.

            Boys & Girls Clubs de Puerto Rico ofrece eso y más. Los programas y servicios
            que se ofrecen en los Clubes ayudan y mejoran el desarrollo de los jóvenes al
            permitirles un sentido de competencia, de utilidad y de pertenencia. Los Boys
            & Girls Clubs son el lugar seguro para aprender y crecer, todo mientras se
            divierten. Es por eso que somos el lugar positivo para la juventud.

          </p>

          <h4 className="list" style={cardStyles}>About Us</h4>
        </Card>

      </CardStack>
    </div>
  );
};
export default Institution;
