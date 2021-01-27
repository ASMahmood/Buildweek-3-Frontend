import React from "react";
import { Container, Row } from "react-bootstrap";
import IndividualPerson from "./IndividualPerson";
import "./PeopleRelated.css";

class PeopleRelated extends React.Component {
  render() {
    return (
      <Container id="relatedGroup" className="my-3">
        <Row>
          <h5
            className="mb-0"
            style={{
              paddingLeft: "15px",
              marginTop: "24px",
              fontWeight: "normal",
            }}
          >
            {this.props.title}
          </h5>
        </Row>
        {this.props.others.length > 0 &&
          this.props.others.map((person, index) => (
            <>
              <IndividualPerson
                name={person.name}
                job={person.title}
                pic={person.image}
                key={index}
                userid={person._id}
                divider={index === 4 ? false : true}
              />
            </>
          ))}
        {this.props.others.length === 0 && (
          <>
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
            <IndividualPerson
              name="Luis Antonio Canettoli Ordoñez"
              job="MERN Full Stack Developer | Technical Lead @ Clispo | Teaching Assistant @ Strive School"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQFcEwVHxUGnZA/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=L_Eos43IkehfE1-Qf7OnRMfFh_b5Kap201EJlE6BTHc"
            />
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
            <IndividualPerson
              name="Manuel Desole"
              job="Studente presso Accademia di belle arti mario sironi"
              pic="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_200_200/0/1595170353862?e=1612396800&v=beta&t=5LCM0msit9z7xebYhNIuiF96c0rhx0a5Ny1SV1IjwKk"
            />
          </>
        )}
      </Container>
    );
  }
}

export default PeopleRelated;
